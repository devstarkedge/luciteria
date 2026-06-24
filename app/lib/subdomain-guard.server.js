/**
 * Subdomain routing guard — server only.
 *
 * Enforces which URL paths are reachable on each subdomain so a single Remix
 * codebase can be deployed (or fronted) as two separate sites:
 *
 *   admin.luciteria.com
 *     - "/"                     → redirect to "/admin/login"
 *     - any non "/admin" path   → redirect to "/admin/login"
 *     - "/admin/*"              → allowed
 *
 *   app.luciteria.com
 *     - "/admin" or "/admin/*"  → 404 (admin is invisible on the consumer host)
 *     - everything else         → allowed
 *
 *   localhost / IPs / *.local / preview hosts / apex / www
 *     - everything allowed (routing rules NOT enforced)
 *
 * Usage (in app/root.jsx loader):
 *
 *   import { enforceSubdomainRouting } from "./lib/subdomain-guard.server.js";
 *   export const loader = async ({ request }) => {
 *     enforceSubdomainRouting(request);   // throws redirect / 404 when needed
 *     return json({ ... });
 *   };
 */
import { redirect } from "@remix-run/node";
import { getSubdomainInfo } from "./subdomain.server.js";

export const ADMIN_LOGIN_PATH = "/admin/login";
export const ADMIN_PATH_PREFIX = "/admin";

/**
 * Paths that must never be blocked/redirected regardless of subdomain.
 * These are framework/asset/system requests that occasionally hit a loader.
 */
const ALWAYS_ALLOW_PREFIXES = [
  "/build/", // Remix client build assets
  "/assets/", // Vite assets
  "/@", // Vite dev (/@vite, /@id, /@fs, /@react-refresh)
  "/node_modules/", // Vite dev module graph
  "/__manifest", // Remix route manifest
  "/.well-known/", // ACME / misc well-known endpoints
];

const ALWAYS_ALLOW_EXACT = new Set([
  "/favicon.ico",
  "/robots.txt",
  "/sitemap.xml",
]);

/**
 * Is the path a true /admin path? Matches "/admin" exactly and "/admin/...".
 * Critically does NOT match the Shopify-embedded consumer admin under "/app/admin".
 * @param {string} pathname
 */
export function isAdminPath(pathname) {
  return pathname === ADMIN_PATH_PREFIX || pathname.startsWith(ADMIN_PATH_PREFIX + "/");
}

/** Should this path bypass all routing rules (asset/system path)? */
export function isBypassPath(pathname) {
  if (ALWAYS_ALLOW_EXACT.has(pathname)) return true;
  return ALWAYS_ALLOW_PREFIXES.some((p) => pathname.startsWith(p));
}

/**
 * Pure routing decision. No request/throwing — fully unit-testable.
 *
 * @param {object} args
 * @param {object} args.info       result of parseHost/getSubdomainInfo
 * @param {string} args.pathname   request path (no querystring)
 * @returns {{ action: "allow" }
 *         | { action: "redirect", to: string, status: number }
 *         | { action: "notFound", status: number }}
 */
export function evaluateRoute({ info, pathname }) {
  // 1. Never interfere with asset/system paths.
  if (isBypassPath(pathname)) return { action: "allow" };

  // 2. Local dev, apex/www, and unknown (non-root-domain) hosts: allow all.
  if (!info || info.isLocal || info.isApex || info.isUnknownHost) {
    return { action: "allow" };
  }

  // 3. admin.luciteria.com — admin-only host.
  if (info.isAdmin) {
    if (isAdminPath(pathname)) return { action: "allow" };
    // Root and any other consumer path → push the operator to admin login.
    return { action: "redirect", to: ADMIN_LOGIN_PATH, status: 302 };
  }

  // 4. app.luciteria.com — consumer host, admin must be invisible.
  if (info.isApp) {
    if (isAdminPath(pathname)) return { action: "notFound", status: 404 };
    return { action: "allow" };
  }

  // 5. Any other recognised subdomain under the root domain (e.g. "staging",
  //    "beta"): treat like the consumer site but keep /admin reachable, since
  //    these are typically internal preview environments. Allow all.
  return { action: "allow" };
}

/**
 * Middleware entry point. Call from the root loader.
 * Throws a Response (redirect or 404) when the request must be diverted;
 * returns the subdomain info object otherwise.
 *
 * @param {Request} request
 * @returns {ReturnType<typeof getSubdomainInfo>}
 */
export function enforceSubdomainRouting(request) {
  const info = getSubdomainInfo(request);
  const url = new URL(request.url);
  const decision = evaluateRoute({ info, pathname: url.pathname });

  if (decision.action === "redirect") {
    // Avoid redirect loops if we're already at the target path.
    if (url.pathname !== decision.to) {
      throw redirect(decision.to, { status: decision.status });
    }
  } else if (decision.action === "notFound") {
    throw new Response("Not Found", { status: decision.status });
  }

  return info;
}

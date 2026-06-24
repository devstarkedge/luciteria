import { json } from "@remix-run/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";
import tailwindStyles from "./tailwind.css?url";
import { enforceSubdomainRouting } from "./lib/subdomain-guard.server.js";

/**
 * Root loader runs on every request. It enforces subdomain-based routing so the
 * same codebase can serve admin.luciteria.com and app.luciteria.com separately.
 * In local development / unknown hosts it is a no-op (allows all routes).
 */
export const loader = async ({ request }) => {
  const subdomain = enforceSubdomainRouting(request); // throws redirect / 404 when needed
  return json({
    subdomain: {
      name: subdomain.subdomain,
      isAdmin: subdomain.isAdmin,
      isApp: subdomain.isApp,
    },
  });
};

export const meta = () => [
  { title: "Luciteria Collector Cabinet" },
  { name: "description", content: "Your personal element collection, beautifully organized." },
];

export const links = () => [
  { rel: "stylesheet", href: polarisStyles },
  { rel: "stylesheet", href: tailwindStyles },
  // Shopify theme fonts: Inter (body/nav) + DM Sans (headings)
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <style>{`
          :root {
            /* Shopify "Live Working Theme" palette (consumer-facing) */
            --luc-bg: #f5f5f5;
            --luc-surface: #ffffff;
            --luc-surface-raised: #f5f5f5;
            --luc-accent: #5781D8;
            --luc-accent-light: #4a6fc0;
            --luc-gold: #c5960c;
            --luc-text: #0D0D0D;
            --luc-text-muted: #6b7280;
            --luc-success: #059669;
            --luc-warning: #d97706;
            --luc-danger: #dc2626;
            --luc-border: #DFDFDF;
          }
          /* Inter as the default body font on consumer pages */
          body { font-family: "Inter", ui-sans-serif, system-ui, sans-serif; }
          /* Override Polaris for light theme */
          .Polaris-Frame { background: var(--luc-bg) !important; }
          .Polaris-Card { background: var(--luc-surface) !important; border: 1px solid var(--luc-border) !important; }
          .Polaris-Text--root { color: var(--luc-text) !important; }
        `}</style>
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

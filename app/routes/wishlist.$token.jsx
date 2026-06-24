/**
 * Public Wishlist View — /wishlist/:token
 * 
 * Shows a user's wishlist elements without requiring login.
 * Includes read-only periodic table visualization and element list.
 * Shareable link for gift registries.
 */
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getUserByWishlistToken } from "../lib/auth.server";
import { ELEMENTS_118 } from "../data/elements.server";

export const loader = async ({ params }) => {
  const { token } = params;
  if (!token) throw new Response("Not Found", { status: 404 });

  const user = await getUserByWishlistToken(token);
  if (!user) throw new Response("Wishlist not found", { status: 404 });

  const wishlistSymbols = user.wishlistElements.map(e => e.elementSymbol);
  const ownedSymbols = user.ownedElements.map(e => e.elementSymbol);

  const elements = ELEMENTS_118.map(e => ({
    z: e.z, sym: e.sym, name: e.name,
    row: e.row, col: e.col, group: e.group, phase: e.phase,
  }));

  return json({
    userName: `${user.firstName} ${user.lastName}`,
    wishlistElements: user.wishlistElements,
    wishlistSymbols,
    ownedSymbols,
    elements,
    ownedCount: user.ownedElements.length,
  });
};

const TABLE_ROWS = 10;
const TABLE_COLS = 18;

const GROUP_COLORS = {
  "Alkali Metal":          { bg: "#fce4ec", text: "#b71c1c" },
  "Alkaline Earth":        { bg: "#fff3e0", text: "#e65100" },
  "Transition Metal":      { bg: "#e3f2fd", text: "#1565c0" },
  "Post-Transition Metal": { bg: "#e0f7fa", text: "#00838f" },
  "Metalloid":             { bg: "#ede7f6", text: "#4527a0" },
  "Nonmetal":              { bg: "#e8f5e9", text: "#2e7d32" },
  "Halogen":               { bg: "#fffde7", text: "#f57f17" },
  "Noble Gas":             { bg: "#f3e5f5", text: "#6a1b9a" },
  "Lanthanide":            { bg: "#fce4ec", text: "#ad1457" },
  "Actinide":              { bg: "#fbe9e7", text: "#bf360c" },
};

export default function PublicWishlist() {
  const { userName, wishlistElements, wishlistSymbols, ownedSymbols, elements, ownedCount } = useLoaderData();

  const ownedSet = new Set(ownedSymbols);
  const wishlistSet = new Set(wishlistSymbols);

  // Build grid
  const grid = {};
  elements.forEach(el => {
    grid[`${el.row}-${el.col}`] = el;
  });

  const cellSize = 38;

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.brand}>
            <span style={{ fontSize: 28 }}>⚛️</span>
            <span style={styles.brandName}>Luciteria Collector Cabinet</span>
          </div>
          <h1 style={styles.title}>{userName}'s Element Wishlist</h1>
          <p style={styles.subtitle}>
            {wishlistElements.length > 0
              ? `${userName} is looking for ${wishlistElements.length} element${wishlistElements.length !== 1 ? "s" : ""}. Help them complete their collection!`
              : `${userName} hasn't added any elements to their wishlist yet.`}
          </p>
          <div style={styles.statRow}>
            <span style={styles.stat}>🧊 {ownedCount} collected</span>
            <span style={styles.stat}>⭐ {wishlistElements.length} wishlisted</span>
            <span style={styles.stat}>🔍 {118 - ownedCount} missing</span>
          </div>
        </div>

        {/* Mini Periodic Table (read-only) */}
        <div style={styles.tableSection}>
          <h3 style={styles.sectionTitle}>Periodic Table Overview</h3>
          <div style={styles.legend}>
            <span style={styles.legendItem}><span style={{...styles.legendDot, background: "#4CAF50"}} /> Collected</span>
            <span style={styles.legendItem}><span style={{...styles.legendDot, background: "#4a90e2"}} /> Wishlisted</span>
            <span style={styles.legendItem}><span style={{...styles.legendDot, background: "#eee"}} /> Missing</span>
          </div>
          <div style={{ overflowX: "auto", paddingBottom: 8 }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: `repeat(${TABLE_COLS}, ${cellSize}px)`,
              gridTemplateRows: `repeat(${TABLE_ROWS}, ${cellSize}px)`,
              gap: "2px",
              width: "fit-content",
              margin: "0 auto",
            }}>
              {Array.from({ length: TABLE_ROWS }, (_, r) =>
                Array.from({ length: TABLE_COLS }, (_, c) => {
                  const row = r + 1;
                  const col = c + 1;
                  const key = `${row}-${col}`;
                  const el = grid[key];
                  if (row === 8 || !el) return <div key={key} style={{ gridRow: row, gridColumn: col }} />;

                  const isOwned = ownedSet.has(el.sym);
                  const isWishlisted = wishlistSet.has(el.sym);
                  const groupColor = GROUP_COLORS[el.group] || { bg: "#fff", text: "#333" };

                  return (
                    <div
                      key={key}
                      title={`${el.z}. ${el.name} (${el.sym}) — ${isOwned ? "Collected" : isWishlisted ? "Wishlisted" : "Missing"}`}
                      style={{
                        gridRow: row,
                        gridColumn: col,
                        width: cellSize,
                        height: cellSize,
                        borderRadius: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        background: isOwned ? "#e8f5e9" : isWishlisted ? "#e3f2fd" : groupColor.bg,
                        border: isOwned ? "2px solid #4CAF50" : isWishlisted ? "2px solid #4a90e2" : "1px solid rgba(0,0,0,0.06)",
                      }}
                    >
                      <span style={{ fontSize: 7, fontWeight: 600, color: isOwned ? "#2e7d32" : isWishlisted ? "#1565c0" : groupColor.text }}>{el.z}</span>
                      <span style={{ fontSize: 12, fontWeight: 800, color: isOwned ? "#2e7d32" : isWishlisted ? "#1565c0" : groupColor.text }}>{el.sym}</span>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Wishlist Items */}
        {wishlistElements.length > 0 && (
          <div style={styles.wishlistSection}>
            <h3 style={styles.sectionTitle}>⭐ Wishlist Items</h3>
            <div style={styles.wishlistGrid}>
              {wishlistElements.map((el) => (
                <div key={el.id} style={styles.wishlistCard}>
                  <span style={styles.elSymbol}>{el.elementSymbol}</span>
                  <div>
                    <span style={styles.elName}>{el.elementName}</span>
                    <span style={styles.elNumber}>#{el.atomicNumber}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={styles.footer}>
          <p style={styles.footerText}>
            Powered by <strong>Luciteria Collector Cabinet</strong>
          </p>
          <Link to="/onboarding/welcome" style={styles.footerLink}>
            Start your own collection →
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "var(--luc-bg, #f5f7fa)",
    padding: "32px 20px",
  },
  container: {
    maxWidth: 900,
    margin: "0 auto",
  },
  header: { textAlign: "center", marginBottom: 32 },
  brand: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 16,
  },
  brandName: {
    fontSize: 16,
    fontWeight: 600,
    color: "var(--luc-text-muted, #6b7280)",
  },
  title: {
    fontSize: 28,
    fontWeight: 700,
    color: "var(--luc-text, #1a1a2e)",
    margin: "0 0 8px",
  },
  subtitle: {
    fontSize: 15,
    color: "var(--luc-text-muted, #6b7280)",
    lineHeight: 1.5,
  },
  statRow: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
    marginTop: 14,
  },
  stat: {
    fontSize: 13,
    color: "var(--luc-text, #1a1a2e)",
    fontWeight: 500,
  },
  tableSection: {
    background: "#fff",
    borderRadius: 16,
    padding: "20px 24px",
    border: "1px solid var(--luc-border, #e2e5ea)",
    marginBottom: 28,
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "var(--luc-text, #1a1a2e)",
    marginBottom: 12,
  },
  legend: {
    display: "flex",
    gap: 16,
    marginBottom: 12,
    fontSize: 12,
    color: "#666",
  },
  legendItem: { display: "flex", alignItems: "center", gap: 5 },
  legendDot: { width: 12, height: 12, borderRadius: 3, display: "inline-block" },
  wishlistSection: {
    background: "#fff",
    borderRadius: 16,
    padding: "20px 24px",
    border: "1px solid var(--luc-border, #e2e5ea)",
    marginBottom: 28,
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
  },
  wishlistGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: 10,
  },
  wishlistCard: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 16px",
    borderRadius: 10,
    border: "1px solid #e3f2fd",
    background: "#f8fbff",
  },
  elSymbol: {
    fontSize: 24,
    fontWeight: 800,
    color: "#4a90e2",
    width: 40,
    textAlign: "center",
  },
  elName: {
    fontSize: 14,
    fontWeight: 600,
    color: "var(--luc-text, #1a1a2e)",
    display: "block",
  },
  elNumber: {
    fontSize: 12,
    color: "var(--luc-text-muted, #6b7280)",
  },
  footer: {
    textAlign: "center",
    padding: "24px 0",
  },
  footerText: {
    fontSize: 13,
    color: "var(--luc-text-muted, #6b7280)",
  },
  footerLink: {
    fontSize: 14,
    color: "var(--luc-accent, #4A90E2)",
    fontWeight: 600,
    textDecoration: "none",
  },
};

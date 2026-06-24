/**
 * Admin User Management — /admin/users
 * Search, filter, freeze/unfreeze users.
 */
import { json } from "@remix-run/node";
import { useLoaderData, Form, useActionData, useNavigation, useSearchParams, useRevalidator } from "@remix-run/react";
import { useState, useEffect } from "react";
import { prisma } from "../lib/db.server.js";
import { requireAdmin } from "../lib/admin-session.server.js";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("search") || "";
  const status = url.searchParams.get("status") || "";
  const motivation = url.searchParams.get("motivation") || "";
  const tier = url.searchParams.get("tier") || "";

  const where = {};
  if (search) {
    where.OR = [
      { firstName: { contains: search } },
      { lastName: { contains: search } },
      { email: { contains: search } },
    ];
  }
  if (status) where.status = status;
  if (motivation) where.primaryMotivation = motivation;
  if (tier) where.tier = tier;

  const users = await prisma.user.findMany({
    where,
    orderBy: { createdAt: "desc" },
    select: {
      id: true, email: true, firstName: true, lastName: true,
      status: true, freezeReason: true, tier: true,
      primaryMotivation: true, createdAt: true, updatedAt: true,
      _count: { select: { collectionItems: { where: { state: "OWNED" } } } },
    },
  });

  const wantedCounts = await prisma.collectionItem.groupBy({
    by: ["userId"],
    where: { state: "WANTED" },
    _count: true,
  });
  const wantedMap = Object.fromEntries(wantedCounts.map(w => [w.userId, w._count]));

  const enriched = users.map(u => ({
    ...u,
    ownedCount: u._count.collectionItems,
    wantedCount: wantedMap[u.id] || 0,
  }));

  const totalUsers = await prisma.user.count();
  const activeCount = await prisma.user.count({ where: { status: "active" } });

  return json({ users: enriched, totalUsers, activeCount, filters: { search, status, motivation, tier } });
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const intent = formData.get("intent");
  const admin = await requireAdmin(request);

  if (intent === "freeze") {
    const userId = formData.get("userId");
    const reason = formData.get("reason") || "No reason provided";

    await prisma.user.update({
      where: { id: userId },
      data: { status: "frozen", freezeReason: reason },
    });
    await prisma.freezeLog.create({
      data: { userId, reason, frozenBy: admin.email },
    });
    await prisma.notification.create({
      data: {
        userId, category: "SYSTEM", title: "Account Frozen",
        body: `Your account has been frozen. Reason: ${reason}. Contact support@luciteria.com to restore access.`,
        icon: "❄️",
      },
    });
    return json({ success: true, action: "frozen" });
  }

  if (intent === "unfreeze") {
    const userId = formData.get("userId");
    await prisma.user.update({
      where: { id: userId },
      data: { status: "active", freezeReason: null },
    });
    const latestFreeze = await prisma.freezeLog.findFirst({
      where: { userId, unfrozenAt: null },
      orderBy: { frozenAt: "desc" },
    });
    if (latestFreeze) {
      await prisma.freezeLog.update({
        where: { id: latestFreeze.id },
        data: { unfrozenAt: new Date(), unfrozenBy: admin.email },
      });
    }
    await prisma.notification.create({
      data: {
        userId, category: "SYSTEM", title: "Account Restored",
        body: "Your account has been restored. You can now make changes to your collection.",
        icon: "✅",
      },
    });
    return json({ success: true, action: "unfrozen" });
  }

  if (intent === "export") {
    const allUsers = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        email: true, firstName: true, lastName: true, status: true,
        tier: true, primaryMotivation: true, createdAt: true,
        _count: { select: { collectionItems: { where: { state: "OWNED" } } } },
      },
    });
    const header = "Email,First Name,Last Name,Status,Tier,Motivation,Joined,Owned Count\n";
    const rows = allUsers.map(u =>
      `"${u.email}","${u.firstName}","${u.lastName}","${u.status}","${u.tier}","${u.primaryMotivation || ''}","${new Date(u.createdAt).toISOString().split('T')[0]}",${u._count.collectionItems}`
    ).join("\n");
    return new Response(header + rows, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="users-${new Date().toISOString().split('T')[0]}.csv"`,
      },
    });
  }

  return json({ error: "Unknown action" }, { status: 400 });
};

export default function AdminUsers() {
  const { users, totalUsers, activeCount, filters } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const [searchParams, setSearchParams] = useSearchParams();

  const [freezeModal, setFreezeModal] = useState(null);
  const [localSearch, setLocalSearch] = useState(filters.search);

  useEffect(() => {
    if (actionData?.success) setFreezeModal(null);
  }, [actionData]);

  const handleFilterChange = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) params.set(key, value);
    else params.delete(key);
    setSearchParams(params);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    handleFilterChange("search", localSearch);
  };

  return (
    <div>
      {/* Header */}
      <div style={S.header}>
        <div>
          <h1 style={S.h1}>User Management</h1>
          <p style={S.subtitle}>{totalUsers} total users · {activeCount} active</p>
        </div>
        <Form method="post">
          <input type="hidden" name="intent" value="export" />
          <button type="submit" style={S.exportBtn}>📥 Export CSV</button>
        </Form>
      </div>

      {/* Toolbar */}
      <div style={S.toolbar}>
        <form onSubmit={handleSearch} style={S.searchForm}>
          <span style={S.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search by name or email..."
            value={localSearch}
            onChange={e => setLocalSearch(e.target.value)}
            style={S.searchInput}
          />
          {localSearch && (
            <button type="button" onClick={() => { setLocalSearch(""); handleFilterChange("search", ""); }} style={S.clearBtn}>✕</button>
          )}
        </form>
        <select
          value={filters.motivation}
          onChange={e => handleFilterChange("motivation", e.target.value)}
          style={S.filterSelect}
        >
          <option value="">Motivation: All</option>
          <option value="INVENTORY">Inventory</option>
          <option value="SOCIAL">Social</option>
          <option value="ACQUISITION">Acquisition</option>
          <option value="INVESTMENT">Investment</option>
          <option value="DISCOVERY">Discovery</option>
        </select>
        <select
          value={filters.tier}
          onChange={e => handleFilterChange("tier", e.target.value)}
          style={S.filterSelect}
        >
          <option value="">Tier: All</option>
          <option value="Free">Free</option>
          <option value="Collector">Collector</option>
          <option value="Curator">Curator</option>
        </select>
        <select
          value={filters.status}
          onChange={e => handleFilterChange("status", e.target.value)}
          style={S.filterSelect}
        >
          <option value="">Status: All</option>
          <option value="active">Active</option>
          <option value="frozen">Frozen</option>
        </select>
      </div>

      {/* Success toast */}
      {actionData?.success && (
        <div style={S.successToast}>
          ✅ User {actionData.action} successfully.
        </div>
      )}

      {/* Table */}
      <div style={S.card}>
        {users.length === 0 ? (
          <div style={S.empty}>No users found matching filters.</div>
        ) : (
          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Name</th>
                <th style={S.th}>Email</th>
                <th style={{ ...S.th, textAlign: "center" }}>Owned</th>
                <th style={{ ...S.th, textAlign: "center" }}>Wanted</th>
                <th style={S.th}>Motivation</th>
                <th style={S.th}>Tier</th>
                <th style={S.th}>Status</th>
                <th style={S.th}>Joined</th>
                <th style={{ ...S.th, textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={u.id} style={i % 2 ? S.altRow : {}}>
                  <td style={{ ...S.td, fontWeight: 600 }}>{u.firstName} {u.lastName}</td>
                  <td style={{ ...S.td, color: "#6b7280" }}>{u.email}</td>
                  <td style={{ ...S.td, textAlign: "center", fontWeight: 600 }}>{u.ownedCount}</td>
                  <td style={{ ...S.td, textAlign: "center" }}>{u.wantedCount}</td>
                  <td style={S.td}>
                    <span style={S.motivBadge}>{u.primaryMotivation || "—"}</span>
                  </td>
                  <td style={S.td}>
                    <span style={S.tierBadge}>{u.tier}</span>
                  </td>
                  <td style={S.td}>
                    <span style={{
                      ...S.statusBadge,
                      background: u.status === "active" ? "#f0fdf4" : "#fef2f2",
                      color: u.status === "active" ? "#166534" : "#991b1b",
                      border: `1px solid ${u.status === "active" ? "#bbf7d0" : "#fecaca"}`,
                    }}>
                      {u.status === "active" ? "Active" : "❄️ Frozen"}
                    </span>
                  </td>
                  <td style={{ ...S.td, color: "#6b7280", fontSize: 12 }}>
                    {new Date(u.createdAt).toLocaleDateString()}
                  </td>
                  <td style={{ ...S.td, textAlign: "center" }}>
                    {u.status === "active" ? (
                      <button
                        onClick={() => setFreezeModal(u)}
                        style={S.freezeBtn}
                        title="Freeze account"
                      >
                        ❄️ Freeze
                      </button>
                    ) : (
                      <Form method="post" style={{ display: "inline" }}>
                        <input type="hidden" name="intent" value="unfreeze" />
                        <input type="hidden" name="userId" value={u.id} />
                        <button type="submit" style={S.unfreezeBtn} title="Unfreeze account">
                          🔓 Unfreeze
                        </button>
                      </Form>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Freeze Modal */}
      {freezeModal && (
        <div style={S.overlay} onClick={() => setFreezeModal(null)}>
          <div style={S.modal} onClick={e => e.stopPropagation()}>
            <div style={S.modalHeader}>
              <h2 style={S.modalTitle}>❄️ Freeze Account</h2>
              <button onClick={() => setFreezeModal(null)} style={S.modalClose}>✕</button>
            </div>
            <div style={S.modalBody}>
              <div style={S.modalUserInfo}>
                <strong>{freezeModal.firstName} {freezeModal.lastName}</strong>
                <span style={{ color: "#6b7280" }}>{freezeModal.email}</span>
              </div>
              <div style={S.warningBox}>
                <span>⚠️</span>
                <span>Frozen users can view their collection but cannot make changes. They will see a message to contact support@luciteria.com.</span>
              </div>
              <Form method="post">
                <input type="hidden" name="intent" value="freeze" />
                <input type="hidden" name="userId" value={freezeModal.id} />
                <label style={S.label}>Reason for freezing</label>
                <textarea
                  name="reason"
                  rows={3}
                  placeholder="e.g. Suspicious activity, payment dispute, user request..."
                  style={S.textarea}
                  required
                />
                <div style={S.modalActions}>
                  <button type="button" onClick={() => setFreezeModal(null)} style={S.cancelBtn}>Cancel</button>
                  <button
                    type="submit"
                    style={S.confirmFreezeBtn}
                    disabled={navigation.state === "submitting"}
                  >
                    {navigation.state === "submitting" ? "Freezing..." : "❄️ Freeze Account"}
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const S = {
  header: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 },
  h1: { fontSize: 22, fontWeight: 700, color: "#111827", margin: 0 },
  subtitle: { fontSize: 14, color: "#6b7280", marginTop: 2 },
  exportBtn: {
    padding: "8px 16px", background: "#fff", border: "1px solid #d1d5db",
    borderRadius: 6, fontSize: 13, color: "#374151", cursor: "pointer", fontWeight: 500,
  },
  toolbar: {
    display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center",
    background: "#fff", border: "1px solid #d1d5db", borderRadius: 6,
    padding: "12px 16px", marginBottom: 16,
  },
  searchForm: {
    flex: 1, minWidth: 260, display: "flex", alignItems: "center",
    border: "1px solid #d1d5db", borderRadius: 4, overflow: "hidden",
  },
  searchIcon: { padding: "0 12px", fontSize: 14 },
  searchInput: {
    flex: 1, padding: "8px 12px 8px 0", fontSize: 14, border: "none", outline: "none",
  },
  clearBtn: {
    background: "none", border: "none", padding: "0 12px", cursor: "pointer",
    color: "#9ca3af", fontSize: 14,
  },
  filterSelect: {
    border: "1px solid #d1d5db", borderRadius: 4, padding: "8px 32px 8px 12px",
    fontSize: 13, color: "#4b5563", background: "#fff", cursor: "pointer",
  },
  successToast: {
    background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 6,
    padding: "10px 16px", fontSize: 13, color: "#166534", marginBottom: 16,
  },
  card: {
    background: "#fff", borderRadius: 8, border: "1px solid #e5e7eb",
    overflow: "hidden", boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
  },
  table: { width: "100%", borderCollapse: "collapse", fontSize: 13 },
  th: {
    textAlign: "left", padding: "10px 14px", fontWeight: 600, fontSize: 11,
    textTransform: "uppercase", letterSpacing: "0.5px", color: "#6b7280",
    background: "#f9fafb", borderBottom: "1px solid #e5e7eb",
  },
  td: { padding: "10px 14px", color: "#374151", borderBottom: "1px solid #f3f4f6" },
  altRow: { background: "#fafafa" },
  statusBadge: {
    display: "inline-block", padding: "2px 10px", borderRadius: 12,
    fontSize: 11, fontWeight: 600,
  },
  motivBadge: {
    fontSize: 11, color: "#6b7280", background: "#f3f4f6",
    padding: "2px 8px", borderRadius: 4,
  },
  tierBadge: {
    fontSize: 11, color: "#4f46e5", background: "#eef2ff",
    padding: "2px 8px", borderRadius: 4, fontWeight: 600,
  },
  freezeBtn: {
    padding: "4px 10px", background: "#fef2f2", border: "1px solid #fecaca",
    borderRadius: 4, fontSize: 11, color: "#991b1b", cursor: "pointer", fontWeight: 500,
  },
  unfreezeBtn: {
    padding: "4px 10px", background: "#f0fdf4", border: "1px solid #bbf7d0",
    borderRadius: 4, fontSize: 11, color: "#166534", cursor: "pointer", fontWeight: 500,
  },
  empty: { padding: 40, textAlign: "center", color: "#9ca3af", fontSize: 14 },

  // Modal
  overlay: {
    position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)",
    display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100,
  },
  modal: {
    background: "#fff", borderRadius: 10, width: 480, maxWidth: "90vw",
    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
  },
  modalHeader: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "16px 20px", borderBottom: "1px solid #e5e7eb",
  },
  modalTitle: { fontSize: 16, fontWeight: 700, color: "#111827", margin: 0 },
  modalClose: {
    background: "none", border: "none", fontSize: 18, color: "#9ca3af",
    cursor: "pointer",
  },
  modalBody: { padding: 20 },
  modalUserInfo: {
    display: "flex", flexDirection: "column", gap: 2,
    padding: "10px 14px", background: "#f9fafb", borderRadius: 6,
    marginBottom: 12, fontSize: 14,
  },
  warningBox: {
    display: "flex", gap: 8, padding: 12, background: "#fffbeb",
    border: "1px solid #fde68a", borderRadius: 6, fontSize: 12,
    color: "#92400e", marginBottom: 16,
  },
  label: { display: "block", fontSize: 13, fontWeight: 500, color: "#374151", marginBottom: 6 },
  textarea: {
    width: "100%", padding: "8px 12px", border: "1px solid #d1d5db",
    borderRadius: 4, fontSize: 13, resize: "vertical", outline: "none",
    boxSizing: "border-box",
  },
  modalActions: {
    display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 16,
  },
  cancelBtn: {
    padding: "8px 16px", background: "#fff", border: "1px solid #d1d5db",
    borderRadius: 6, fontSize: 13, color: "#374151", cursor: "pointer",
  },
  confirmFreezeBtn: {
    padding: "8px 16px", background: "#dc2626", border: "1px solid #b91c1c",
    borderRadius: 6, fontSize: 13, color: "#fff", cursor: "pointer", fontWeight: 600,
  },
};

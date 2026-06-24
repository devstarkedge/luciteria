# Subscription Architecture — Phase Breakdown

## Overview

The Luciteria Collector Subscription system is built in three phases, each progressively adding automation while keeping admin control as the priority.

---

## Phase 1: Manual-First Subscriptions (ACTIVE)

### What It Does
- **Membership Tiers**: Bronze ($29.99/mo), Silver ($59.99/mo), Gold ($99.99/mo)
- **Store Credits**: Monthly credit grants based on tier
- **Collector Packs**: Pre-built themed packs of 3 or 5 elements
- **Admin Approval**: Every order must be admin-approved before shipping
- **SKU Eligibility**: Admin controls which products are subscription-eligible

### Key Constraints
- Maximum 3 membership tiers enforced at the database level
- Orders are NEVER auto-shipped
- Only eligible SKUs can appear in packs
- Subscriber-only products hidden from non-members

### Data Flow
```
User subscribes → Tier assigned → Monthly credit granted →
User browses packs → Purchases with credits/cash →
PackOrder created (PENDING) → Admin reviews →
Admin approves → Inventory reserved → Fulfillment
```

---

## Phase 2: Ownership Intelligence (DORMANT)

### What It Does
- Tracks per-user SKU ownership
- Shows collection completion progress (visual rings per format)
- Suggests missing elements based on ownership data
- All behind feature flags — built but invisible until enabled

### Feature Flags
| Flag | Description |
|------|-------------|
| `phase2_ownership_tracking` | Creates UserOwnedSku records on purchase |
| `phase2_completion_display` | Shows progress rings on dashboard |
| `phase2_suggestions` | Shows "You're missing these" suggestions |

### Activation Steps
1. Enable `phase2_ownership_tracking` first
2. Backfill existing ownership data (manual or script)
3. Enable `phase2_completion_display`
4. Enable `phase2_suggestions` after completion data is accurate

---

## Phase 3: Dynamic Curation (SCAFFOLD ONLY)

### What It Will Do
- Users request "Send me N missing elements per quarter"
- System generates curated box from their collection gaps
- Admin approval required before every fulfillment
- Fixed cadence, fixed box size, controlled SKU pool

### Current State
- CurationRequest model exists in schema
- Route placeholders show "Coming Soon"
- All server functions throw "Phase 3 not activated"
- `phase3_enabled` flag cannot be enabled via UI

---

## Database Models

| Model | Phase | Purpose |
|-------|-------|---------|
| MembershipTier | 1 | Bronze/Silver/Gold tiers |
| UserSubscription | 1 | User billing management |
| CreditTransaction | 1 | Store credit ledger |
| SubscriptionSku | 1 | SKU eligibility flags |
| CollectorPack | 1 | Pre-built packs |
| PackOrder | 1 | Order approval queue |
| UserOwnedSku | 2 | Ownership tracking |
| CompletionGoal | 2 | Completion targets |
| CurationRequest | 3 | Custom curation requests |
| FeatureFlag | Global | Phase toggle system |

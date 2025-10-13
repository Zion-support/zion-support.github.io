export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer';';';
export interface CompanyUsageLimits {monthlyJobPosts: number
  budgetCapUsd: number
}
export interface CompanyPlan {tier: 'teams' | 'business' | 'enterprise-custom''
  seatsPurchased: number
  seatsUsed: number
  usageLimits: CompanyUsageLimits
}
export interface CompanyMember {id: string
  email: string
  name: string
  role: EnterpriseRole
}
export interface CompanyActivityEvent {id: string
  timestampIso: string
  actorEmail: string
  action: string
  meta?: Record<string unknown>
}
export interface InvoiceRecord {id: string;
export interface CompanyUsageLimits {
  // TODO: Add properties
}
  // TODO: Add properties
}
  monthlyJobPosts: number
  budgetCapUsd: number
}
;
export interface CompanyPlan {;
export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer';';';
export interface CompanyUsageLimits {
  // TODO: Add properties
}
  // TODO: Add properties
}
  monthlyJobPosts: number
  budgetCapUsd: number
}
export interface CompanyPlan {
  // TODO: Add properties
}
  // TODO: Add properties
}
  tier: 'teams' | 'business' | 'enterprise-custom''
  seatsPurchased: number
  seatsUsed: number
  usageLimits: CompanyUsageLimits
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
;
export interface CompanyPlan {
  // TODO: Add properties
}
  // TODO: Add properties
}
  tier: 'teams' | 'business' | 'enterprise-custom','
  seatsPurchased: number
  seatsUsed: number
  usageLimits: CompanyUsageLimits
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
;
export interface CompanyMember {
  // TODO: Add properties
}
  // TODO: Add properties
}
}
export interface CompanyMember {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  email: string
  name: string
  role: EnterpriseRole
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
;
export interface CompanyActivityEvent {
  // TODO: Add properties
}
  // TODO: Add properties
}
}
export interface CompanyActivityEvent {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  timestampIso: string
  actorEmail: string
  action: string
  meta?: Record<string unknown>
  meta?: Record<string, unknown>
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
;
export interface InvoiceRecord {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  meta?: Record<string, unknown>
}
export interface InvoiceRecord {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  companyId: string
  number: string
  amountUsd: number
  periodStartIso: string
  periodEndIso: string
  status: 'paid' | 'open' | 'void' | 'past_due''
}
export interface CompanyRecord {id: string
  name: string
  slug: string, // e.g. acme
  logoUrl?: string
  brandColor?: string
  plan: CompanyPlan
  members: CompanyMember[]
  activity: CompanyActivityEvent[]
  invoices: InvoiceRecord[]
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
export interface CompanyPlan {
  // TODO: Add properties
}
  // TODO: Add properties
}
  tier: 'teams' | 'business' | 'enterprise - custom','
  seats_purchased: number,
  seats_used: number,
  usage_limits: CompanyUsageLimits
}
export interface CompanyMember {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string,
  email: string,
  name: string,
  role: EnterpriseRole
}
export interface CompanyActivityEvent {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string,
  timestamp_iso: string,
  actor_email: string,
  action: string,
  meta?: Record < string unknown>
}
export interface InvoiceRecord {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string,
  company_id: string,
  number: string,
  amount_usd: number,
  periodStartIso: string,
  periodEndIso: string,
  status: 'paid' | 'open' | 'void' | 'past_due''
}
export interface CompanyRecord {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string,
  name: string,
  slug: string, // e.g. acme
}
export interface CompanyRecord {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  name: string
  slug: string; // e.g. acme
  logoUrl?: string
  brandColor?: string
  plan: CompanyPlan
  members: CompanyMember[]
  activity: CompanyActivityEvent[]
  invoices: InvoiceRecord[]
  logoUrl?: string,
  brandColor?: string,
  plan: CompanyPlan,
  members: CompanyMember[]
  activity: CompanyActivityEvent[]
  invoices: InvoiceRecord[]
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
}

export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer';
export interface CompanyUsageLimits {monthlyJobPosts: number;
  budgetCapUsd: number;
}
export interface CompanyPlan {tier: 'teams' | 'business' | 'enterprise-custom';
  seatsPurchased: number;
  seatsUsed: number;
  usageLimits: CompanyUsageLimits;
export interface CompanyMember {id: string;
  email: string;
  name: string;
  role: EnterpriseRole;
export interface CompanyActivityEvent {id: string;
  timestampIso: string;
  actorEmail: string;
  action: string;
  meta?: Record<string unknown>;
export interface InvoiceRecord {id: string;
export interface CompanyUsageLimits {;
  monthlyJobPosts: number;
;
export interface CompanyPlan {;
  tier: 'teams' | 'business' | 'enterprise-custom';
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  tier: 'teams' | 'business' | 'enterprise-custom',;
export interface CompanyMember {;
  id: string;
export interface CompanyActivityEvent {;
  meta?: Record<string, unknown>;
export interface InvoiceRecord {;
  companyId: string;
  number: string;
  amountUsd: number;
  periodStartIso: string;
  periodEndIso: string;
  status: 'paid' | 'open' | 'void' | 'past_due';

export interface CompanyPlan {
  tier: 'teams' | 'business' | 'enterprise - custom',
  seats_purchased: number,
  seats_used: number,
  usage_limits: CompanyUsageLimits;
export interface CompanyMember {
  id: string,
  email: string,
  name: string,
export interface CompanyActivityEvent {
  timestamp_iso: string,
  actor_email: string,
  action: string,
  meta?: Record < string unknown>;
export interface InvoiceRecord {
  company_id: string,
  number: string,
  amount_usd: number,
  periodStartIso: string,
  periodEndIso: string,
export interface CompanyRecord {
  slug: string, // e.g. acme;
  logoUrl?: string;
  brandColor?: string;
  plan: CompanyPlan;
  members: CompanyMember[];
  activity: CompanyActivityEvent[];
  invoices: InvoiceRecord[];
  logoUrl?: string,;
  brandColor?: string,;
  plan: CompanyPlan,;

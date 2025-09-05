export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer';

export interface CompanyUsageLimits {_monthlyJobPosts: number;
  budgetCapUsd: number;}

export interface CompanyPlan {_tier: 'teams' | 'business' | 'enterprise-custom';
  seatsPurchased: number;
  seatsUsed: number;
  usageLimits: CompanyUsageLimits;}

export interface CompanyMember {_id: string;
  email: string;
  name: string;
  role: EnterpriseRole;}

export interface CompanyActivityEvent {_id: string;
  timestampIso: string;
  actorEmail: string;
  action: string;
  meta?: Record<string, _unknown>;}

export interface InvoiceRecord {_id: string;
  companyId: string;
  number: string;
  amountUsd: number;
  periodStartIso: string;
  periodEndIso: string;
  status: 'paid' | 'open' | 'void' | 'past_due';}

export interface CompanyRecord {_id: string;
  name: string;
  slug: string; // e.g. acme
  logoUrl?: string;
  brandColor?: string;
  plan: CompanyPlan;
  members: CompanyMember[];
  activity: CompanyActivityEvent[];
  invoices: InvoiceRecord[];}
export interface CompanyRecord {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  brandColor?: string;
  plan: {
    tier: 'starter' | 'business' | 'enterprise';
    seatsPurchased: number;
    seatsUsed: number;
    usageLimits: {
      monthlyJobPosts: number;
      budgetCapUsd: number;
    };
  };
  members: Array<{
    id: string;
    email: string;
    name: string;
    role: 'admin' | 'manager' | 'recruiter';
  }>;
  activity: Array<{
    id: string;
    timestampIso: string;
    actorEmail: string;
    action: string;
    meta?: Record<string, any>;
  }>;
  invoices: Array<{
    id: string;
    amount: number;
    status: 'pending' | 'paid' | 'overdue';
    dueDate: string;
  }>;
}

function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

const companiesById: Record<string, CompanyRecord> = {};
const companiesBySlug: Record<string, CompanyRecord> = {};

export function createCompany(record: Omit<CompanyRecord, 'members' | 'activity' | 'invoices'>): CompanyRecord {
  const { id, slug } = record;
  
  const fullRecord: CompanyRecord = {
    ...record,
    members: [],
    activity: [],
    invoices: []
  };
  
  companiesById[id] = fullRecord;
  companiesBySlug[slug] = fullRecord;
  
  return fullRecord;
}

export function getCompanyById(id: string): CompanyRecord | undefined {
  return companiesById[id];
}

export function getCompanyBySlug(slug: string): CompanyRecord | undefined {
  return companiesBySlug[slug];
}

export function updateCompany(id: string, updates: Partial<CompanyRecord>): CompanyRecord | null {
  const company = companiesById[id];
  if (!company) return null;
  
  const updated = { ...company, ...updates };
  companiesById[id] = updated;
  companiesBySlug[updated.slug] = updated;
  
  return updated;
}

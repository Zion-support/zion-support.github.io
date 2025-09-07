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

export const store = {
  getCompanyBySlug(slug: string) {
    return companiesBySlug[slug] || null;
  },
  getCompanyById(id: string) {
    return companiesById[id] || null;
  },
  createCompany(input: Partial<CompanyRecord>): CompanyRecord {
    const id = `cmp_${generateId()}`;
    const slug = input.slug || `co-${generateId()}`;
    const record: CompanyRecord = {
      id,
      name: input.name || 'New Company',
      slug,
      logoUrl: input.logoUrl,
      brandColor: input.brandColor || '#111827',
      plan: input.plan || {
        tier: 'starter',
        seatsPurchased: 10,
        seatsUsed: 0,
        usageLimits: { monthlyJobPosts: 10, budgetCapUsd: 1000 }
      },
      members: [],
      activity: [],
      invoices: []
    };
    companiesById[id] = record;
    companiesBySlug[slug] = record;
    return record;
  },
  addMember(companyId: string, name: string, email: string, role: 'admin' | 'manager' | 'recruiter') {
    const company = companiesById[companyId];
    if (!company) return null;
    const member = { id: `mem_${generateId()}`, name, email, role };
    company.members.push(member);
    company.plan.seatsUsed = Math.min(company.plan.seatsPurchased, company.members.length);
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: email, action: 'added_member' });
    return member;
  },
  removeMember(companyId: string, memberId: string): boolean {
    const company = companiesById[companyId];
    if (!company) return false;
    const before = company.members.length;
    company.members = company.members.filter(m => m.id !== memberId);
    const changed = company.members.length !== before;
    if (changed) {
      company.plan.seatsUsed = Math.min(company.plan.seatsPurchased, company.members.length);
      company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'removed_member', meta: { memberId } });
    }
    return changed;
  },
  updateMemberRole(companyId: string, memberId: string, role: 'admin' | 'manager' | 'recruiter'): boolean {
    const company = companiesById[companyId];
    if (!company) return false;
    const member = company.members.find(m => m.id === memberId);
    if (!member) return false;
    member.role = role;
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_role', meta: { memberId, role } });
    return true;
  },
  setUsageLimits(companyId: string, monthlyJobPosts: number, budgetCapUsd: number): boolean {
    const company = companiesById[companyId];
    if (!company) return false;
    company.plan.usageLimits = { monthlyJobPosts, budgetCapUsd };
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_usage_limits', meta: { monthlyJobPosts, budgetCapUsd } });
    return true;
  },
  listInvoices(companyId: string) {
    const company = companiesById[companyId];
    return company ? company.invoices : [];
  }
};
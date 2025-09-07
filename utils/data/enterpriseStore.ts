export interface CompanyRecord {
  id: string;
  // TODO: Implement
}
  id: string;,
pr-12325
  name: string;
  slug: string;
  logoUrl?: string;
  brandColor?: string;
interface CompanyRecord {
  id: string;
  name: string;
  slug: string;
  logoUrl: string;
  brandColor: string;
  plan: {
    tier: string;
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
    role: string;
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
  plan: {,
  tier: 'starter' | 'business' | 'enterprise';
    seatsPurchased: number;,
  seatsUsed: number;
    usageLimits: {,
  monthlyJobPosts: number;
      budgetCapUsd: number;
    };
  members: Array<{,
  id: string;
    email: string;,
    role: 'admin' | 'manager' | 'recruiter';
  }>;
  activity: Array<{,
    timestampIso: string;,
  actorEmail: string;
    action: string;
    meta?: Record<string, any>;
</string>
  invoices: Array<{,
    amount: number;,
  status: 'pending' | 'paid' | 'overdue';
    dueDate: string;

function generateId(): string {
  // TODO: Implement
    meta?: any;
  }>;
  invoices: any[];
}

function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
pr-12325

const companiesById: Record<string, CompanyRecord> = {};
const companiesBySlug: Record<string, CompanyRecord> = {};

const seedCompany: CompanyRecord = {
  id: 'cmp-acme',
  name: 'Acme Corporation',
  slug: 'acme',
  logoUrl: '/logo-acme.svg',
  brandColor: '#4F46E5',
  plan: {
    tier: 'business',
    seatsPurchased: 25,
    seatsUsed: 3,
    usageLimits: {
      monthlyJobPosts: 50,
      budgetCapUsd: 10000
    }
  },
  members: [
    {
      id: 'mem-1',
      email: 'admin@acme.com',
      name: 'Avery Admin',
      role: 'admin'
    },
    {
      id: 'mem-2',
      email: 'maria@acme.com',
      name: 'Maria Manager',
      role: 'manager'
    },
    {
      id: 'mem-3',
      email: 'reid@acme.com',
      name: 'Reid Recruiter',
      role: 'recruiter'
    }
  ],
  activity: [
    {
      id: generateId(),
      timestampIso: new Date().toISOString(),
      actorEmail: 'admin@acme.com',
      action: 'created company'
    },
    {
      id: generateId(),
      timestampIso: new Date().toISOString(),
      actorEmail: 'maria@acme.com',
      action: 'posted job',
      meta: {
        jobId: 'job-123'
      }
    }
  ],
  invoices: []
};

export function createCompany(id: string, name: string, slug: string): CompanyRecord {
  const record: CompanyRecord = {
    id,
    name,
    slug,
    logoUrl: '',
    brandColor: '#4F46E5',
    plan: {
      tier: 'business',
      seatsPurchased: 10,
      seatsUsed: 0,
      usageLimits: {
        monthlyJobPosts: 20,
        budgetCapUsd: 5000
      }
    },
    members: [],
    activity: [],
    invoices: []
  };
  
  companiesById[id] = record;
  companiesBySlug[slug] = record;
  return record;
}

export function getCompany(id: string): CompanyRecord | undefined {
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
<<<<<<< HEAD
=======
  }
  listInvoices(companyId: string): InvoiceRecord[] {const company = companiesById[companyId];
import { CompanyRecord, CompanyMember, EnterpriseRole, InvoiceRecord } from '../types / enterprise',;
const generate_id = () =>: any Math.random ().to_string (36).slice (2, 10),
const seed_company: CompanyRecord = {
  id: 'cmp_acme',
  name: 'Acme Corporation',
  slug: 'acme',
  logo_url: '/logo - acme.svg',
  brand_color: '#4F46E5',
  plan: {
    tier: 'business',
    seats_purchased: 25,
    seats_used: 3,
    usage_limits: {
      monthlyJobPosts: 50,
      budgetCapUsd: 10000}},
  logoUrl: '/logo-acme.svg',;
  brandColor: '#4F46E5',;
  plan: {;
    tier: 'business',;
    seatsPurchased: 25,;
    seatsUsed: 3,;
    usageLimits: {;
      monthlyJobPosts: 50,;
      budgetCapUsd: 10000}},;
  members: [;
    { id: 'mem_1', email: 'admin@acme.com', name: 'Avery Admin', role: 'admin' },
    { id: 'mem_2', email: 'maria@acme.com', name: 'Maria Manager', role: 'manager' },
    { id: 'mem_3', email: 'reid@acme.com', name: 'Reid Recruiter', role: 'recruiter' }],
  activity: [;
    { id: generate_id (), timestamp_iso: new Date ().toISOString (), actor_email: 'admin@acme.com', action: 'created_company' },
    { id: generate_id (), timestamp_iso: new Date ().toISOString (), actor_email: 'maria@acme.com', action: 'posted_job', meta: { job_id: 'job_123' } }],
  invoices: [;
>>>>>>> cursor/automate-test-improve-and-merge-code-5b47

  },
  listInvoices(companyId: string) {
    const company = companiesById[companyId];
    return company ? company.invoices : [];


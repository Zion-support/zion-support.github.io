<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { CompanyRecord, CompanyMember, EnterpriseRole, InvoiceRecord } from '../types/enterprise';
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======




>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
      budgetCapUsd: number
};
=======
      budgetCapUsd: number;
    };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




<<<<<<< HEAD
=======

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

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function getCompanyById(id: string): CompanyRecord | undefined {
=======
export function getCompany(id: string): CompanyRecord | undefined {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {
=======
import {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  CompanyRecord,
  CompanyMember,
  EnterpriseRole,
  InvoiceRecord,;
} from '../types/enterprise';

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { CompanyRecord, CompanyMember, EnterpriseRole, InvoiceRecord } from '../types/enterprise',;
const generateId = () => Math.random().toString(36).slice(2, 10),;
const seedCompany: CompanyRecord = {;
  id: 'cmp_acme',;
  name: 'Acme Corporation',;
import { CompanyRecord, CompanyMember, EnterpriseRole, InvoiceRecord } from '../types/enterprise';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const generateId = () => Math.random().toString(36).slice(2, 10);
const seedCompany: CompanyRecord = {;
  id: 'cmp_acme';
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const generateId = () => Math.random().toString(36).slice(2, 10);
const seedCompany: CompanyRecord = {id: 'cmp_acme';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======




import {
  CompanyRecord,
  CompanyMember,
  EnterpriseRole,
  InvoiceRecord,
} from '../types/enterprise';


import { CompanyRecord, CompanyMember, EnterpriseRole, InvoiceRecord } from '../types/enterprise',;
const generateId = () => Math.random().toString(36).slice(2, 10),;
const seedCompany: CompanyRecord = {;
  id: 'cmp_acme',;
  name: 'Acme Corporation',;
import { CompanyRecord, CompanyMember, EnterpriseRole, InvoiceRecord } from '../types/enterprise';







const generateId = () => Math.random().toString(36).slice(2, 10);
const seedCompany: CompanyRecord = {id: 'cmp_acme';
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import { CompanyRecord, CompanyMember, EnterpriseRole, InvoiceRecord } from '../types/enterprise';
const generateId = () => Math.random().toString(36).slice(2, 10);
const seedCompany: CompanyRecord = {;
  id: 'cmp_acme';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  name: 'Acme Corporation';
  slug: 'acme';
  logoUrl: '/logo-acme.svg';
  brandColor: '#4F46E5';
  plan: {;
    tier: 'business';
    seatsPurchased: 25;
    seatsUsed: 3;
    usageLimits: {;
      monthlyJobPosts: 50;
<<<<<<< HEAD
      budgetCapUsd: 10000}};
  members: [;
    { id: 'mem_1', email: 'admin@acme.com', name: 'Avery Admin', role: 'admin' };
    { id: 'mem_2', email: 'maria@acme.com', name: 'Maria Manager', role: 'manager' };
    { id: 'mem_3', email: 'reid@acme.com', name: 'Reid Recruiter', role: 'recruiter' }];
  activity: [;
    { id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'admin@acme.com', action: 'created_company' };
    { id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'maria@acme.com', action: 'posted_job', meta: { jobId: 'job_123' } }];
  invoices: [;
<<<<<<< HEAD
    { id: 'inv_001', companyId: 'cmp_acme', number: 'INV-1001', amountUsd: 499.0, periodStartIso: '2025-07-01', periodEndIso: '2025-07-31', status: 'paid' };
    { id: 'inv_002', companyId: 'cmp_acme', number: 'INV-1002', amountUsd: 499.0, periodStartIso: '2025-08-01', periodEndIso: '2025-08-31', status: 'open' }]};
const companiesById: Record<string CompanyRecord> = { [seedCompany.id]: seedCompany };
const companiesBySlug: Record<string CompanyRecord> = { [seedCompany.slug]: seedCompany };
=======
=======
      budgetCapUsd: 10000}}
  members: [;
    { id: 'mem_1', email: 'admin@acme.com', name: 'Avery Admin', role: 'admin' }
    { id: 'mem_2', email: 'maria@acme.com', name: 'Maria Manager', role: 'manager' }
    { id: 'mem_3', email: 'reid@acme.com', name: 'Reid Recruiter', role: 'recruiter' }];
  activity: [;
    { id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'admin@acme.com', action: 'created_company' }
    { id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'maria@acme.com', action: 'posted_job', meta: { jobId: 'job_123' } }];
  invoices: [;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    { id: 'inv_001', companyId: 'cmp_acme', number: 'INV-1001', amountUsd: 499.0, periodStartIso: '2025-07-01', periodEndIso: '2025-07-31', status: 'paid' }
    { id: 'inv_002', companyId: 'cmp_acme', number: 'INV-1002', amountUsd: 499.0, periodStartIso: '2025-08-01', periodEndIso: '2025-08-31', status: 'open' }]}
const companiesById: Record<string CompanyRecord> = { [seedCompany.id]: seedCompany }
const companiesBySlug: Record<string CompanyRecord> = { [seedCompany.slug]: seedCompany }
export const store = {getCompanyBySlug(slug: string) {;
    return companiesBySlug[slug] |null;
  }
  getCompanyById(id: string) {return companiesById[id] |null;
  }
  createCompany(input: Partial<CompanyRecord>): CompanyRecord {const id = `cmp_${generateId()}`;
    const slug = input.slug |`co-${generateId()}`;
    const record: CompanyRecord = {id;
      name: input.name |'New Company';
      slug;
      logoUrl: input.logoUrl;
      brandColor: input.brandColor |'#111827';
      plan: input.plan |{;
        tier: 'teams';
        seatsPurchased: 10;
        seatsUsed: 0;
        usageLimits: { monthlyJobPosts: 10, budgetCapUsd: 1000 }}
      members: [];
      activity: [];
      invoices: []}

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
<<<<<<< HEAD
<<<<<<< HEAD
  logoUrl: '/logo-acme.svg',;
=======





const generateId = () => Math.random().toString(36).slice(2, 10);
'
  slug: 'acme',;'
  logoUrl: '/logo-acme.svg',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  brandColor: '#4F46E5',;
  plan: {;'
=======
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  slug: 'acme',;
  logoUrl: '/logo-acme.svg',;
  brandColor: '#4F46E5',;
  plan: {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    tier: 'business',;
    seatsPurchased: 25,;
    seatsUsed: 3,;
    usageLimits: {;
      monthlyJobPosts: 50,;
      budgetCapUsd: 10000}},;
<<<<<<< HEAD
<<<<<<< HEAD
  members: [;
    { id: 'mem_1', email: 'admin@acme.com', name: 'Avery Admin', role: 'admin' },
    { id: 'mem_2', email: 'maria@acme.com', name: 'Maria Manager', role: 'manager' },
=======

  members: [;'
    { id: 'mem_1', email: 'admin@acme.com', name: 'Avery Admin', role: 'admin' },'
    { id: 'mem_2', email: 'maria@acme.com', name: 'Maria Manager', role: 'manager' },'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    { id: 'mem_3', email: 'reid@acme.com', name: 'Reid Recruiter', role: 'recruiter' }],
  activity: [;'
    { id: generate_id (), timestamp_iso: new Date ().toISOString (), actor_email: 'admin@acme.com', action: 'created_company' },'
    { id: generate_id (), timestamp_iso: new Date ().toISOString (), actor_email: 'maria@acme.com', action: 'posted_job', meta: { job_id: 'job_123' } }],
  invoices: [;

<<<<<<< HEAD
    { id: 'inv_001', companyId: 'cmp_acme', number: 'INV-1001', amountUsd: 499.0, periodStartIso: '2025-07-01', periodEndIso: '2025-07-31', status: 'paid' },;
    { id: 'inv_002', companyId: 'cmp_acme', number: 'INV-1002', amountUsd: 499.0, periodStartIso: '2025-08-01', periodEndIso: '2025-08-31', status: 'open' }]},;

=======
  members: [;
    { id: 'mem_1', email: 'admin@acme.com', name: 'Avery Admin', role: 'admin' },
    { id: 'mem_2', email: 'maria@acme.com', name: 'Maria Manager', role: 'manager' },
    { id: 'mem_3', email: 'reid@acme.com', name: 'Reid Recruiter', role: 'recruiter' }],
  activity: [;
    { id: generate_id (), timestamp_iso: new Date ().toISOString (), actor_email: 'admin@acme.com', action: 'created_company' },
    { id: generate_id (), timestamp_iso: new Date ().toISOString (), actor_email: 'maria@acme.com', action: 'posted_job', meta: { job_id: 'job_123' } }],
  invoices: [;

    { id: 'inv_001', companyId: 'cmp_acme', number: 'INV-1001', amountUsd: 499.0, periodStartIso: '2025-07-01', periodEndIso: '2025-07-31', status: 'paid' },;
    { id: 'inv_002', companyId: 'cmp_acme', number: 'INV-1002', amountUsd: 499.0, periodStartIso: '2025-08-01', periodEndIso: '2025-08-31', status: 'open' }]},;

<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      brandColor: input.brandColor || '#111827',;
      plan: input.plan || {;
        tier: 'teams',;
        seatsPurchased: 10,;
        seatsUsed: 0,;
        usageLimits: { monthlyJobPosts: 10, budgetCapUsd: 1000 }},;
      members: [],;
      activity: [],;
      invoices: []},;
    companiesById[id] = record,;
    companiesBySlug[slug] = record,;
    return record;
  },;
  addMember(companyId: string, name: string, email: string, role: EnterpriseRole): CompanyMember | null {;

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: email, action: 'added_member' }),;
    return member;
  },;
  removeMember(companyId: string, memberId: string): boolean {;

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_role', meta: { memberId, role } }),;
    return true;
  },;
  setUsageLimits(companyId: string, monthlyJobPosts: number, budgetCapUsd: number): boolean {;

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    company.plan.usageLimits = { monthlyJobPosts, budgetCapUsd },;
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_usage_limits', meta: { monthlyJobPosts, budgetCapUsd } }),;

    return true;
  },
  list_invoices (company_id: string): InvoiceRecord[] {
    const company = companiesById[company_id];
    return company ? company.invoices : [];
<<<<<<< HEAD
<<<<<<< HEAD
  }}const companiesById: Record<string, CompanyRecord> = { [seedCompany.id]: seedCompany };
=======
const companiesById: Record<string, CompanyRecord> = { [seedCompany.id]: seedCompany };
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const companiesBySlug: Record<string, CompanyRecord> = { [seedCompany.slug]: seedCompany };
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export const store = {;
  getCompanyBySlug(slug: string) {;
    return companiesBySlug[slug] || null
};
  getCompanyById(id: string) {;
    return companiesById[id] || null
};
  createCompany(input: Partial<CompanyRecord>): CompanyRecord {;
    const id = `cmp_${generateId()}`;`
    const slug = input.slug || `co-${generateId()}`;
    const record: CompanyRecord = {;
      id;'
      name: input.name || 'New Company';
      slug;
<<<<<<< HEAD
      logoUrl: input.logoUrl;
<<<<<<< HEAD
      brandColor: input.brandColor || '#111827';
=======
      brandColor: input.brandColor || '#111827',;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      plan: input.plan || {;
        tier: 'teams';
        seatsPurchased: 10;
        seatsUsed: 0;
        usageLimits: { monthlyJobPosts: 10, budgetCapUsd: 1000 }};
      members: [];
      activity: [];
      invoices: []};
    companiesById[id] = record;
    companiesBySlug[slug] = record;
=======
      logoUrl: input.logoUrl;'
      brandColor: input.brandColor || '#111827',;
      plan: input.plan || {;'
=======
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }}

  }}
  }}
  }}
const seedCompany: CompanyRecord = {;
  id: 'cmp_acme';
  name: 'Acme Corporation';
  slug: 'acme',;
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
    { id: 'mem_1', email: 'admin@acme.com', name: 'Avery Admin', role: 'admin' },;
    { id: 'mem_2', email: 'maria@acme.com', name: 'Maria Manager', role: 'manager' },;
    { id: 'mem_3', email: 'reid@acme.com', name: 'Reid Recruiter', role: 'recruiter' }],;
  activity: [;
    { id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'admin@acme.com', action: 'created_company' },;
    { id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'maria@acme.com', action: 'posted_job', meta: { jobId: 'job_123' } }],;
  invoices: [;
    { id: 'inv_001', companyId: 'cmp_acme', number: 'INV-1001', amountUsd: 499.0, periodStartIso: '2025-07-01', periodEndIso: '2025-07-31', status: 'paid' },;
    { id: 'inv_002', companyId: 'cmp_acme', number: 'INV-1002', amountUsd: 499.0, periodStartIso: '2025-08-01', periodEndIso: '2025-08-31', status: 'open' }]},;
const companiesById: Record<string CompanyRecord> = { [seedCompany.id]: seedCompany },;
const companiesBySlug: Record<string CompanyRecord> = { [seedCompany.slug]: seedCompany },;
export const store = {;
  getCompanyBySlug(slug: string) {;
    return companiesBySlug[slug] || null;
  },;
  getCompanyById(id: string) {;
    return companiesById[id] || null;
  },;
  createCompany(input: Partial<CompanyRecord>): CompanyRecord {;
    const id = `cmp_${generateId()}`,;
    const slug = input.slug || `co-${generateId()}`,;
    const record: CompanyRecord = {;
      id,;
      name: input.name || 'New Company',;
      slug,;
      logoUrl: input.logoUrl,;

const companiesById: Record<string, CompanyRecord> = { [seedCompany.id]: seedCompany };
const companiesBySlug: Record<string, CompanyRecord> = { [seedCompany.slug]: seedCompany };
      budgetCapUsd: 10000}};
  members: [;
    { id: 'mem_1', email: 'admin@acme.com', name: 'Avery Admin', role: 'admin' };
    { id: 'mem_2', email: 'maria@acme.com', name: 'Maria Manager', role: 'manager' };
    { id: 'mem_3', email: 'reid@acme.com', name: 'Reid Recruiter', role: 'recruiter' }];
  activity: [;
    { id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'admin@acme.com', action: 'created_company' };
    { id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'maria@acme.com', action: 'posted_job', meta: { jobId: 'job_123' } }];
  invoices: [;
    { id: 'inv_001', companyId: 'cmp_acme', number: 'INV-1001', amountUsd: 499.0, periodStartIso: '2025-07-01', periodEndIso: '2025-07-31', status: 'paid' };
    { id: 'inv_002', companyId: 'cmp_acme', number: 'INV-1002', amountUsd: 499.0, periodStartIso: '2025-08-01', periodEndIso: '2025-08-31', status: 'open' }]};
const companiesById: Record<string CompanyRecord> = { [seedCompany.id]: seedCompany };
const companiesBySlug: Record<string CompanyRecord> = { [seedCompany.slug]: seedCompany };
export const store = {;
  getCompanyBySlug(slug: string) {;
    return companiesBySlug[slug] || null;
  };
  getCompanyById(id: string) {;
    return companiesById[id] || null;
  };
  createCompany(input: Partial<CompanyRecord>): CompanyRecord {;
    const id = `cmp_${generateId()}`;
    const slug = input.slug || `co-${generateId()}`;
    const record: CompanyRecord = {;
      id;
      name: input.name || 'New Company';
      slug;
      logoUrl: input.logoUrl;
      brandColor: input.brandColor || '#111827',;
      plan: input.plan || {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        tier: 'teams',;
        seatsPurchased: 10,;
        seatsUsed: 0,;
        usageLimits: { monthlyJobPosts: 10, budgetCapUsd: 1000 }},;
      members: [],;
      activity: [],;
      invoices: []},;
    companiesById[id] = record,;
    companiesBySlug[slug] = record,;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return record;
  };
  addMember(companyId: string, name: string, email: string, role: EnterpriseRole): CompanyMember | null {;
<<<<<<< HEAD
    const company = companiesById[companyId];
    if (!company) return null;
    const member: CompanyMember = { id: `mem_${generateId()}`, name, email, role };
    company.members.push(member);
    company.plan.seatsUsed = Math.min(company.plan.seatsPurchased, company.members.length);
<<<<<<< HEAD
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: email, action: 'added_member' });
=======
=======
    const company = companiesById[companyId];'
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });`
    const member: CompanyMember = { id: `mem_${generateId()}`, name, email, role },;
    company.members.push(member);
    company.plan.seatsUsed = Math.min(company.plan.seatsPurchased, company.members.length);'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: email, action: 'added_member' }),;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return member;
  };
  removeMember(companyId: string, memberId: string): boolean {;
<<<<<<< HEAD
    const company = companiesById[companyId];
<<<<<<< HEAD
    if (!company) return false;
    const before = company.members.length;
    company.members = company.members.filter(m => m.id !== memberId);
    const changed = company.members.length !== before;
    if (changed) {;
      company.plan.seatsUsed = Math.min(company.plan.seatsPurchased, company.members.length);
      company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'removed_member', meta: { memberId } });
    }
    return changed;
  };
=======
=======
    const company = companiesById[companyId];'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      company.plan.seatsUsed = Math.min(company.plan.seatsPurchased, company.members.length);'
      company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'removed_member', meta: { memberId } });
      } catch (error) {}
    console.error("Error:", error);"
=======
    return record;
  },;
  addMember(companyId: string, name: string, email: string, role: EnterpriseRole): CompanyMember | null {;
    const company = companiesById[companyId];
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const member: CompanyMember = { id: `mem_${generateId()}`, name, email, role },;
    company.members.push(member);
    company.plan.seatsUsed = Math.min(company.plan.seatsPurchased, company.members.length);
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: email, action: 'added_member' }),;
    return member;
  },;
  removeMember(companyId: string, memberId: string): boolean {;
    const company = companiesById[companyId];
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      company.plan.seatsUsed = Math.min(company.plan.seatsPurchased, company.members.length);
      company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'removed_member', meta: { memberId } });
      } catch (error) {
    console.error("Error:", error);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return changed;
  },;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  updateMemberRole(companyId: string, memberId: string, role: EnterpriseRole): boolean {;
<<<<<<< HEAD
    const company = companiesById[companyId];
    if (!company) return false;
    const member = company.members.find(m => m.id === memberId);
    if (!member) return false;
    member.role = role;
<<<<<<< HEAD
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_role', meta: { memberId, role } });
=======
=======
    const company = companiesById[companyId];'
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    member.role = role;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_role', meta: { memberId, role } }),;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return true;
  };
  setUsageLimits(companyId: string, monthlyJobPosts: number, budgetCapUsd: number): boolean {;
<<<<<<< HEAD
    const company = companiesById[companyId];
    if (!company) return false;
    company.plan.usageLimits = { monthlyJobPosts, budgetCapUsd };
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_usage_limits', meta: { monthlyJobPosts, budgetCapUsd } });
=======
    const company = companiesById[companyId],;
    if (!company) return false,;
    const company = companiesById[companyId];'
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

<<<<<<< HEAD
    company.plan.usageLimits = { monthlyJobPosts, budgetCapUsd },;
=======

    company.plan.usageLimits = { monthlyJobPosts, budgetCapUsd },;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_usage_limits', meta: { monthlyJobPosts, budgetCapUsd } }),;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return true;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  };
  listInvoices(companyId: string): InvoiceRecord[] {;
    const company = companiesById[companyId];
    return company ? company.invoices : [];
<<<<<<< HEAD
  }};
=======
<<<<<<< HEAD
  }};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
  }}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
  updateMemberRole(companyId: string, memberId: string, role: EnterpriseRole): boolean {;
    const company = companiesById[companyId];
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    member.role = role;
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_role', meta: { memberId, role } }),;
    return true;
  },;
  setUsageLimits(companyId: string, monthlyJobPosts: number, budgetCapUsd: number): boolean {;
    const company = companiesById[companyId],;
    if (!company) return false,;
    const company = companiesById[companyId];
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

    company.plan.usageLimits = { monthlyJobPosts, budgetCapUsd },;
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_usage_limits', meta: { monthlyJobPosts, budgetCapUsd } }),;

    return true;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  },
  list_invoices (company_id: string): InvoiceRecord[] {
    const company = companiesById[company_id];
    return company ? company.invoices : [];
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  },
  list_invoices (company_id: string): InvoiceRecord[] {
    const company = companiesById[company_id];
    return company ? company.invoices : [];
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  },
  list_invoices (company_id: string): InvoiceRecord[] {}
    const company = companiesById[company_id];
    return company ? company.invoices : [];


  }}


'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  }};
  }}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

  }};
  }}
}};


      brandColor: input.brandColor || '#111827';
      plan: input.plan || {;
        tier: 'teams';
        seatsPurchased: 10;
        seatsUsed: 0;
        usageLimits: { monthlyJobPosts: 10, budgetCapUsd: 1000 }};
      members: [];
      activity: [];
      invoices: []};
    companiesById[id] = record;
    companiesBySlug[slug] = record;
    return record;
  };
  addMember(companyId: string, name: string, email: string, role: EnterpriseRole): CompanyMember | null {;
    const company = companiesById[companyId];
    if (!company) return null;
    const member: CompanyMember = { id: `mem_${generateId()}`, name, email, role };
    company.members.push(member);
    company.plan.seatsUsed = Math.min(company.plan.seatsPurchased, company.members.length);
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: email, action: 'added_member' });
    return member;
  };
  removeMember(companyId: string, memberId: string): boolean {;
    const company = companiesById[companyId];
    if (!company) return false;
    const before = company.members.length;
    company.members = company.members.filter(m => m.id !== memberId);
    const changed = company.members.length !== before;
    if (changed) {;
      company.plan.seatsUsed = Math.min(company.plan.seatsPurchased, company.members.length);
      company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'removed_member', meta: { memberId } });
    }
    return changed;
  };
  updateMemberRole(companyId: string, memberId: string, role: EnterpriseRole): boolean {;
    const company = companiesById[companyId];
    if (!company) return false;
    const member = company.members.find(m => m.id === memberId);
    if (!member) return false;
    member.role = role;
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_role', meta: { memberId, role } });
    return true;
  };
  setUsageLimits(companyId: string, monthlyJobPosts: number, budgetCapUsd: number): boolean {;
    const company = companiesById[companyId];
    if (!company) return false;
    company.plan.usageLimits = { monthlyJobPosts, budgetCapUsd };
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_usage_limits', meta: { monthlyJobPosts, budgetCapUsd } });
    return true;
  };
  listInvoices(companyId: string): InvoiceRecord[] {;
    const company = companiesById[companyId];
    return company ? company.invoices : [];
  }};

  },
  listInvoices(companyId: string) {
    const company = companiesById[companyId];
    return company ? company.invoices : [];

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

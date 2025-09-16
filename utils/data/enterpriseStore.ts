<<<<<<< HEAD
=======

;
export interface CompanyRecord  {id: string;
export interface CompanyRecord {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  brandColor?: string;
  plan: {tier: 'starter' | 'business' | 'enterprise';
    seatsPurchased: number;
    seatsUsed: number;
    usageLimits: {monthlyJobPosts: number;
      budgetCapUsd: number;
}}members: Array<{id: string;
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
  activity: Array<{id: string;
  activity: Array<{
    id: string;
    timestampIso: string;
    actorEmail: string;
    action: string;
    meta?: Record<string, any>;
  }>;
  invoices: Array<{id: string;
  invoices: Array<{
    id: string;
    amount: number;
    status: 'pending' | 'paid' | 'overdue';
    dueDate: string;
  }>;
}function generateId(): string {return Math.random().toString(36).substr(2, 9)}const companiesById: Record<string, CompanyRecord> = {}const companiesBySlug: Record<string, CompanyRecord>  = {}export function createCompany(record: Omit<CompanyRecord, 'members' | 'activity' | 'invoices'>): CompanyRecord {const { id, slug }  = record;const fullRecord: CompanyRecord = {...record,members: [],activity: [],invoices: [];
  }companiesById[id] = fullRecord;
  companiesBySlug[slug] = fullRecord;return fullRecord;
}export function getCompanyById(id: string): CompanyRecord | undefined {return companiesById[id];
}export function getCompanyBySlug(slug: string): CompanyRecord | undefined {return companiesBySlug[slug];
}export function updateCompany(id: string, updates: Partial<CompanyRecord>): CompanyRecord | null {const company = companiesById[id];
  if (!company) return null;const updated = { ...company, ...updates }companiesById[id] = updated;
  companiesBySlug[updated.slug] = updated;return updated;
}
import { CompanyRecord,CompanyMember,EnterpriseRole,InvoiceRecord;
 } from '../types/enterprise';
import { CompanyRecord, CompanyMember, EnterpriseRole, InvoiceRecord } from '../types/enterprise',const generateId = () => Math.random().toString(36).slice(2, 10)const seedCompany: CompanyRecord = {id: 'cmp_acme',name: 'Acme Corporation',import { CompanyRecord, CompanyMember, EnterpriseRole, InvoiceRecord  } from '../types/enterprise';
const generateId  = () => Math.random().toString(36).slice(2, 10)members: [;
    { id: 'mem_1', email: 'admin@acme.com', name: 'Avery Admin', role: 'admin' },{ id: 'mem_2', email: 'maria@acme.com', name: 'Maria Manager', role: 'manager' },{ id: 'mem_3', email: 'reid@acme.com', name: 'Reid Recruiter', role: 'recruiter' }],activity: [;
    { id: generate_id (), timestamp_iso: new Date ().toISOString (), actor_email: 'admin@acme.com', action: 'created_company' },{ id: generate_id (), timestamp_iso: new Date ().toISOString (), actor_email: 'maria@acme.com', action: 'posted_job', meta: { job_id: 'job_123' } }],invoices: [;}}
  }}
const seedCompany: CompanyRecord = {id: 'cmp_acme';
  name: 'Acme Corporation';
  InvoiceRecord;
} from '../types/enterprise';const generateId = () => Math.random().toString(36).slice(2, 10)slug: 'acme',InvoiceRecord;
} from '../types/enterprise';const generateId = () => Math.random().toString(36).slice(2, 10)const seedCompany: CompanyRecord = {id: 'cmp_acme';
  name: 'Acme Corporation';
  slug: 'acme';
  logoUrl: '/logo-acme.svg';
  brandColor: '#4F46E5';
  plan: {tier: 'business';
    seatsPurchased: 25;
    seatsUsed: 3;
    usageLimits: {monthlyJobPosts: 50;
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

import {
  CompanyRecord,
  CompanyMember,
  EnterpriseRole,
  InvoiceRecord
} from '../types/enterprise';


const generateId = () => Math.random().toString(36).slice(2, 10);
const seedCompany: CompanyRecord = {id: 'cmp_acme';
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
      budgetCapUsd: 10000}}
  members: [;
    { id: 'mem_1', email: 'admin@acme.com', name: 'Avery Admin', role: 'admin' }
    { id: 'mem_2', email: 'maria@acme.com', name: 'Maria Manager', role: 'manager' }
    { id: 'mem_3', email: 'reid@acme.com', name: 'Reid Recruiter', role: 'recruiter' }];
  activity: [;
    { id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'admin@acme.com', action: 'created_company' }
    { id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'maria@acme.com', action: 'posted_job', meta: { jobId: 'job_123' } }];
  invoices: [;
    { id: 'inv_001', companyId: 'cmp_acme', number: 'INV-1001', amountUsd: 499.0, periodStartIso: '2025-07-01', periodEndIso: '2025-07-31', status: 'paid' }
    { id: 'inv_002', companyId: 'cmp_acme', number: 'INV-1002', amountUsd: 499.0, periodStartIso: '2025-08-01', periodEndIso: '2025-08-31', status: 'open' }]}
const companiesById: Record<string CompanyRecord> = { [seedCompany.id]: seedCompany }
const companiesBySlug: Record<string CompanyRecord> = { [seedCompany.slug]: seedCompany }
export const store = {getCompanyBySlug(slug: string) {return companiesBySlug[slug] |null;
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
      plan: input.plan |{tier: 'teams';
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
  }
  addMember(companyId: string, name: string, email: string, role: EnterpriseRole): CompanyMember | null {const company = companiesById[companyId];
    if (!company) return null;
    const member: CompanyMember = { id: `mem_${generateId()}`, name, email, role }
    company.members.push(member)company.plan.seatsUsed = Math.min(company.plan.seatsPurchased, company.members.length)company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: email, action: 'added_member' })return member;
>>>>>>> origin/merge-pr-12271
    company.members.push(member);
    company.plan.seatsUsed = Math.min(company.plan.seatsPurchased, company.members.length);
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: email, action: 'added_member' });
    return member;
    if (!company) return false;
    const before = company.members.length;
    company.members = company.members.filter(m => m.id !== memberId);
    const changed = company.members.length !== before;
      company.plan.seatsUsed = Math.min(company.plan.seatsPurchased, company.members.length);
      company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'removed_member', meta: { memberId } });
    }
    return changed;
    if (!company) return false;
    const member = company.members.find(m => m.id === memberId);
    if (!member) return false;
    member.role = role;
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_role', meta: { memberId, role } });
    return true;

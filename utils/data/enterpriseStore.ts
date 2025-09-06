<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import { CompanyRecord, CompanyMember, EnterpriseRole, InvoiceRecord } from '../types/enterprise';
const generateId = () => Math.random().toString(36).slice(2, 10);
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {
  CompanyRecord,
  CompanyMember,
  EnterpriseRole,
  InvoiceRecord,
} from '../types/enterprise';
<<<<<<< HEAD


=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { CompanyRecord, CompanyMember, EnterpriseRole, InvoiceRecord } from '../types/enterprise',;
const generateId = () => Math.random().toString(36).slice(2, 10),;
const seedCompany: CompanyRecord = {;
  id: 'cmp_acme',;
  name: 'Acme Corporation',;
import { CompanyRecord, CompanyMember, EnterpriseRole, InvoiceRecord } from '../types/enterprise';
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
  }
  addMember(companyId: string, name: string, email: string, role: EnterpriseRole): CompanyMember | null {const company = companiesById[companyId];
    if (!company) return null;
    const member: CompanyMember = { id: `mem_${generateId()}`, name, email, role }
    company.members.push(member);
    company.plan.seatsUsed = Math.min(company.plan.seatsPurchased, company.members.length);
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: email, action: 'added_member' });
    return member;
  }
  removeMember(companyId: string, memberId: string): boolean {const company = companiesById[companyId];
    if (!company) return false;
    const before = company.members.length;
    company.members = company.members.filter(m => m.id !== memberId);
    const changed = company.members.length !== before;
    if (changed) {;
      company.plan.seatsUsed = Math.min(company.plan.seatsPurchased, company.members.length);
      company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'removed_member', meta: { memberId } });
    }
    return changed;
  }
  updateMemberRole(companyId: string, memberId: string, role: EnterpriseRole): boolean {const company = companiesById[companyId];
    if (!company) return false;
    const member = company.members.find(m => m.id === memberId);
    if (!member) return false;
    member.role = role;
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_role', meta: { memberId, role } });
    return true;
  }
  setUsageLimits(companyId: string, monthlyJobPosts: number, budgetCapUsd: number): boolean {const company = companiesById[companyId];
    if (!company) return false;
    company.plan.usageLimits = { monthlyJobPosts, budgetCapUsd }
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_usage_limits', meta: { monthlyJobPosts, budgetCapUsd } });
    return true;
  }
  listInvoices(companyId: string): InvoiceRecord[] {const company = companiesById[companyId];
import { CompanyRecord, CompanyMember, EnterpriseRole, InvoiceRecord } from '../types / enterprise',
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
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
const companiesById: Record<string, CompanyRecord> = { [seedCompany.id]: seedCompany };
const companiesBySlug: Record<string, CompanyRecord> = { [seedCompany.slug]: seedCompany };
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

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
    const company = companiesById[companyId];
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const member: CompanyMember = { id: `mem_${generateId()}`, name, email, role },;
    company.members.push(member);
    company.plan.seatsUsed = Math.min(company.plan.seatsPurchased, company.members.length);
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: email, action: 'added_member' }),;
    return member;
  },;
  removeMember(companyId: string, memberId: string): boolean {;

<<<<<<< HEAD
    const company = companiesById[companyId];
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      company.plan.seatsUsed = Math.min(company.plan.seatsPurchased, company.members.length);
      company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'removed_member', meta: { memberId } });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return changed;
  },;
  updateMemberRole(companyId: string, memberId: string, role: EnterpriseRole): boolean {;
    const company = companiesById[companyId];
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    member.role = role;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_role', meta: { memberId, role } }),;
    return true;
  },;
  setUsageLimits(companyId: string, monthlyJobPosts: number, budgetCapUsd: number): boolean {;

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    company.plan.usageLimits = { monthlyJobPosts, budgetCapUsd },;
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_usage_limits', meta: { monthlyJobPosts, budgetCapUsd } }),;

    return true;
  },
  list_invoices (company_id: string): InvoiceRecord[] {
    const company = companiesById[company_id];
    return company ? company.invoices : [];
<<<<<<< HEAD
<<<<<<< HEAD
  }};

=======
  }}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  }}
<<<<<<< HEAD

const seedCompany: CompanyRecord = {_id: 'cmp_acme', _name: 'Acme Corporation', _slug: 'acme', _logoUrl: '/logo-acme.svg', _brandColor: '#4F46E5', _plan: {
    tier: 'business', _seatsPurchased: 25, _seatsUsed: 3, _usageLimits: {
      monthlyJobPosts: 50, _budgetCapUsd: 10000}},
  members: [
    {_id: 'mem_1', _email: 'admin@acme.com', _name: 'Avery Admin', _role: 'admin'},
    {_id: 'mem_2', _email: 'maria@acme.com', _name: 'Maria Manager', _role: 'manager'},
    {_id: 'mem_3', _email: 'reid@acme.com', _name: 'Reid Recruiter', _role: 'recruiter'}],
  activity: [
    {_id: generateId(), _timestampIso: new Date().toISOString(), _actorEmail: 'admin@acme.com', _action: 'created_company'},
    {_id: generateId(), _timestampIso: new Date().toISOString(), _actorEmail: 'maria@acme.com', _action: 'posted_job', _meta: { jobId: 'job_123'} }],
  invoices: [
    { id: 'inv_001', companyId: 'cmp_acme', number: 'INV-1001', amountUsd: 499.0, periodStartIso: '2025-07-01', periodEndIso: '2025-07-31', status: 'paid' },
    { id: 'inv_002', companyId: 'cmp_acme', number: 'INV-1002', amountUsd: 499.0, periodStartIso: '2025-08-01', periodEndIso: '2025-08-31', status: 'open' }]},

      members: [],
      activity: [],
      invoices: []},
    companiesById[id] = record,
    companiesBySlug[slug] = record,
    return record
  },
  addMember(companyId: string, name: string, email: string, role: EnterpriseRole): CompanyMember | null {
    const company = companiesById[companyId]
    if (!company) return null,
    const member: CompanyMember = { id: `mem_${generateId()}`, name, email, role },
    company.members.push(member),
    company.plan.seatsUsed = Math.min(company.plan.seatsPurchased, company.members.length),
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: email, action: 'added_member' }),
    return member
    }
    return changed
  },
  updateMemberRole(companyId: string, memberId: string, role: EnterpriseRole): boolean {
    const company = companiesById[companyId]
    if (!company) return false,
    const member = company.members.find(m => m.id === memberId)
    if (!member) return false,
    member.role = role,
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_role', meta: { memberId, role } }),
    return true
  },
  setUsageLimits(companyId: string, monthlyJobPosts: number, budgetCapUsd: number): boolean {
    const company = companiesById[companyId]
    if (!company) return false,
    company.plan.usageLimits = { monthlyJobPosts, budgetCapUsd },
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_usage_limits', meta: { monthlyJobPosts, budgetCapUsd } }),
    return true
  },
  listInvoices(companyId: string): InvoiceRecord[] {
    const company = companiesById[companyId]
    return company ? company.invoices : []

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
    const company = companiesById[companyId],;
    if (!company) return null,;
    const member: CompanyMember = { id: `mem_${generateId()}`, name, email, role },;
    company.members.push(member),;
    company.plan.seatsUsed = Math.min(company.plan.seatsPurchased, company.members.length),;
    const company = companiesById[companyId];
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const member: CompanyMember = { id: `mem_${generateId()}`, name, email, role },;
    company.members.push(member);
    company.plan.seatsUsed = Math.min(company.plan.seatsPurchased, company.members.length);
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: email, action: 'added_member' }),;
    return member;
  },;
  removeMember(companyId: string, memberId: string): boolean {;
    const company = companiesById[companyId],;
    if (!company) return false,;
    const before = company.members.length,;
    company.members = company.members.filter(m => m.id !== memberId),;
    const changed = company.members.length !== before,;
    if (changed) {;
      company.plan.seatsUsed = Math.min(company.plan.seatsPurchased, company.members.length),;
      company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'removed_member', meta: { memberId } });
    }
    return changed;
  },;
  updateMemberRole(companyId: string, memberId: string, role: EnterpriseRole): boolean {;
    const company = companiesById[companyId],;
    if (!company) return false,;
    const member = company.members.find(m => m.id === memberId),;
    if (!member) return false,;
    member.role = role,;
    const company = companiesById[companyId];
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      company.plan.seatsUsed = Math.min(company.plan.seatsPurchased, company.members.length);
      company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'removed_member', meta: { memberId } });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return changed;
  },;
  updateMemberRole(companyId: string, memberId: string, role: EnterpriseRole): boolean {;
    const company = companiesById[companyId];
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    member.role = role;
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_role', meta: { memberId, role } }),;
    return true;
  },;
  setUsageLimits(companyId: string, monthlyJobPosts: number, budgetCapUsd: number): boolean {;
    const company = companiesById[companyId];
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const company = companiesById[companyId],;
    if (!company) return false,;
    const company = companiesById[companyId];
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    company.plan.usageLimits = { monthlyJobPosts, budgetCapUsd },;
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_usage_limits', meta: { monthlyJobPosts, budgetCapUsd } }),;
    return true;
  },;
  listInvoices(companyId: string): InvoiceRecord[] {;
    const company = companiesById[companyId];
    return company ? company.invoices : [];
  }};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

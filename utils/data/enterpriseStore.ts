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
=======
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
  members: [;
    { id: 'mem_1', email: 'admin@acme.com', name: 'Avery Admin', role: 'admin' },
    { id: 'mem_2', email: 'maria@acme.com', name: 'Maria Manager', role: 'manager' },
    { id: 'mem_3', email: 'reid@acme.com', name: 'Reid Recruiter', role: 'recruiter' }],
  activity: [;
    { id: generate_id (), timestamp_iso: new Date ().toISOString (), actor_email: 'admin@acme.com', action: 'created_company' },
    { id: generate_id (), timestamp_iso: new Date ().toISOString (), actor_email: 'maria@acme.com', action: 'posted_job', meta: { job_id: 'job_123' } }],
  invoices: [;
    { id: 'inv_001', company_id: 'cmp_acme', number: 'INV - 1001', amount_usd: 499.0, periodStartIso: '2025 - 07 - 01', periodEndIso: '2025 - 07 - 31', status: 'paid' },
    { id: 'inv_002', company_id: 'cmp_acme', number: 'INV - 1002', amount_usd: 499.0, periodStartIso: '2025 - 08 - 01', periodEndIso: '2025 - 08 - 31', status: 'open' }]},
const companiesById: Record < string CompanyRecord> = { [seed_company.id]: seed_company },
const companiesBySlug: Record < string CompanyRecord> = { [seed_company.slug]: seed_company },
export const store = {
  getCompanyBySlug (slug: string) {
    return companiesBySlug[slug] || null;
  },
  getCompanyById (id: string) {
    return companiesById[id] || null;
  },
  create_company (input: Partial < CompanyRecord>): CompanyRecord {
    const id = `cmp_${generate_id ()}`,
    const slug = input.slug || `co-${generate_id ()}`,
    const record: CompanyRecord = {
      id,
      name: input.name || 'New Company',
      slug,
      logo_url: input.logo_url,
      brand_color: input.brand_color || '#111827',
      plan: input.plan || {
        tier: 'teams',
        seats_purchased: 10,
        seats_used: 0,
        usage_limits: { monthlyJobPosts: 10, budgetCapUsd: 1000 }},
      members: [],
      activity: [],
      invoices: []},
    companiesById[id] = record,
    companiesBySlug[slug] = record,
    return record;
  },
  add_member (company_id: string, name: string, email: string, role: EnterpriseRole): CompanyMember | null {
    const company = companiesById[company_id],
    // Check condition
if (return null, ) {
  $2
}
    const member: CompanyMember = { id: `mem_${generate_id ()}`, name, email, role },
    company.members.push (member),
    company.plan.seats_used = Math.min (company.plan.seats_purchased, company.members.length),
    company.activity.unshift ({ id: generate_id (), timestamp_iso: new Date ().toISOString (), actor_email: email, action: 'added_member' }),
    return member;
  },
  remove_member (company_id: string, member_id: string): boolean {
    const company = companiesById[company_id],
    // Check condition
if (return false, ) {
  $2
}
    const before = company.members.length,
    company.members = company.members.filter (m => m.id !== member_id),
    const changed = company.members.length !== before,
    // Check condition
if ( {) {
  $2
}
      company.plan.seats_used = Math.min (company.plan.seats_purchased, company.members.length),
      company.activity.unshift ({ id: generate_id (), timestamp_iso: new Date ().toISOString (), actor_email: 'system', action: 'removed_member', meta: { member_id } });
    }
    return changed;
  },
  updateMemberRole (company_id: string, member_id: string, role: EnterpriseRole): boolean {
    const company = companiesById[company_id],
    // Check condition
if (return false, ) {
  $2
}
    const member = company.members.find (m => m.id === member_id),
    // Check condition
if (return false, ) {
  $2
}
    member.role = role,
    company.activity.unshift ({ id: generate_id (), timestamp_iso: new Date ().toISOString (), actor_email: 'system', action: 'updated_role', meta: { member_id, role } }),
    return true;
  },
  setUsageLimits (company_id: string, monthlyJobPosts: number, budgetCapUsd: number): boolean {
    const company = companiesById[company_id],
    // Check condition
if (return false, ) {
  $2
}
    company.plan.usage_limits = { monthlyJobPosts, budgetCapUsd },
    company.activity.unshift ({ id: generate_id (), timestamp_iso: new Date ().toISOString (), actor_email: 'system', action: 'updated_usage_limits', meta: { monthlyJobPosts, budgetCapUsd } }),
    return true;
  },
  list_invoices (company_id: string): InvoiceRecord[] {
    const company = companiesById[company_id];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    return company ? company.invoices : [];
  }}
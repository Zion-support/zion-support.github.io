
import {
  CompanyRecord,
  CompanyMember,
  EnterpriseRole,
  InvoiceRecord,
} from '../types/enterprise';


const generateId = () => Math.random().toString(36).slice(2, 10);
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
=======


const seedCompany: CompanyRecord = {;
  id: 'cmp_acme';
  name: 'Acme Corporation';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
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


    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: email, action: 'added_member' }),;
    return member;
  },;
  removeMember(companyId: string, memberId: string): boolean {;


    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_role', meta: { memberId, role } }),;
    return true;
  },;
  setUsageLimits(companyId: string, monthlyJobPosts: number, budgetCapUsd: number): boolean {;


    company.plan.usageLimits = { monthlyJobPosts, budgetCapUsd },;
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_usage_limits', meta: { monthlyJobPosts, budgetCapUsd } }),;

    return true;
  },
  list_invoices (company_id: string): InvoiceRecord[] {
    const company = companiesById[company_id];
    return company ? company.invoices : [];
  }};

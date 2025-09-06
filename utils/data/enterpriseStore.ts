



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


  members: [;
    { id: 'mem_1', email: 'admin@acme.com', name: 'Avery Admin', role: 'admin' },
    { id: 'mem_2', email: 'maria@acme.com', name: 'Maria Manager', role: 'manager' },
    { id: 'mem_3', email: 'reid@acme.com', name: 'Reid Recruiter', role: 'recruiter' }],
  activity: [;
    { id: generate_id (), timestamp_iso: new Date ().toISOString (), actor_email: 'admin@acme.com', action: 'created_company' },
    { id: generate_id (), timestamp_iso: new Date ().toISOString (), actor_email: 'maria@acme.com', action: 'posted_job', meta: { job_id: 'job_123' } }],
  invoices: [;

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


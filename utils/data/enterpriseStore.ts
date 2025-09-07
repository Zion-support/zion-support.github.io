import { CompanyRecord, CompanyMember, EnterpriseRole, InvoiceRecord } from '../types/enterprise';
const generateId = () => Math.random().toString(36).slice($2);
const seedCompany: CompanyRecord = $2;
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
      budgetCapUsd: 10000},
  members: [
    { id: 'mem_1', email: 'admin@acme.com', name: 'Avery Admin', role: 'admin' },
    { id: 'mem_2', email: 'maria@acme.com', name: 'Maria Manager', role: 'manager' },
    { id: 'mem_3', email: 'reid@acme.com', name: 'Reid Recruiter', role: 'recruiter' }],
  activity: [
    { id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'admin@acme.com', action: 'created_company' },
    { id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'maria@acme.com', action: 'posted_job', meta: { jobId: 'job_123' } }],
  invoices: [
    { id: 'inv_001', companyId: 'cmp_acme', number: 'INV-1001', amountUsd: 499.0, periodStartIso: '2025-07-01', periodEndIso: '2025-07-31', status: 'paid' },
    { id: 'inv_002', companyId: 'cmp_acme', number: 'INV-1002', amountUsd: 499.0, periodStartIso: '2025-08-01', periodEndIso: '2025-08-31', status: 'open' }]},

const companiesById: Record<string, CompanyRecord> = { [seedCompany.id]: seedCompany },
const companiesBySlug: Record<string, CompanyRecord> = { [seedCompany.slug]: seedCompany },

export const store = $2;
  getCompanyById(id: string) {
    return companiesById[id] || null
  },
  createCompany(input: Partial<CompanyRecord>): CompanyRecord {
    const id = $2;
    const slug = $2;
    const record: CompanyRecord = $2;
      name: input.name || 'New Company',
      slug,
      logoUrl: input.logoUrl,
      brandColor: input.brandColor || '#111827',
      plan: input.plan || {
        tier: 'teams',
        seatsPurchased: 10,
        seatsUsed: 0,
        usageLimits: { monthlyJobPosts: 10, budgetCapUsd: 1000},
      members: [],
      activity: [],
      invoices: []},
    companiesById[id] = record,
    companiesBySlug[slug] = record,
    return record
  },
  addMember(companyId: string, name: string, email: string, role: EnterpriseRole): CompanyMember | null {
    const company = $2;
    if (!company) return null,
    const member: CompanyMember = { id: `mem_${generateId()}`, name, email, role },
    company.members.push($2);
    company.plan.seatsUsed = Math.min($2);
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: email, action: 'added_member' }),
    return member
  },
  removeMember(companyId: string, memberId: string): boolean {
    const company = $2;
    if (!company) return false,
    const before = $2;
    company.members = company.members.filter($2);
    const changed = $2;
    if (changed) {
      company.plan.seatsUsed = Math.min($2);
      company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'removed_member', meta: { memberId } })
    }
    return changed
  },
  updateMemberRole(companyId: string, memberId: string, role: EnterpriseRole): boolean {
    const company = $2;
    if (!company) return false,
    const member = company.members.find($2);
    if (!member) return false,
    member.role = $2;
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_role', meta: { memberId, role } }),
    return true
  },
  setUsageLimits(companyId: string, monthlyJobPosts: number, budgetCapUsd: number): boolean {
    const company = $2;
    if (!company) return false,
    company.plan.usageLimits = { monthlyJobPosts, budgetCapUsd },
    company.activity.unshift({ id: generateId(), timestampIso: new Date().toISOString(), actorEmail: 'system', action: 'updated_usage_limits', meta: { monthlyJobPosts, budgetCapUsd } }),
    return true
  },
  listInvoices(companyId: string): InvoiceRecord[] {
    const company = $2;
    return company ? company.invoices : []
  }},
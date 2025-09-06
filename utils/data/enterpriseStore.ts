import { CompanyRecord, CompanyMember, EnterpriseRole, InvoiceRecord } from '../types/enterprise',

const generateId = () => Math.random().toString(36).slice(2, 10),

const _generateId = () => Math.random().toString(36).slice(2, 10);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

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

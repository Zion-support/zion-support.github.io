export interface CompanyRecord {
  id: string;
  name: string;
  members: string[];
}

const companies: CompanyRecord[] = [
  { id: '1', name: 'ZionTech Group', members: ['u1', 'u2'] },
  { id: '2', name: 'Acme Corp', members: ['u3'] },
];

export function getCompanyById(companyId: string): CompanyRecord | undefined {
  return companies.find((c) => c.id === companyId);
}

export function getCompanyMembers(companyId: string): string[] {
  const c = getCompanyById(companyId);
  return c ? c.members : [];
}

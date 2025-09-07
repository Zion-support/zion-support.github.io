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
    meta?: any;
  }>;
  invoices: any[];
}

function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

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
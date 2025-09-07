export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer',
export interface CompanyUsageLimits {
  monthlyJobPosts: number,
  budgetCapUsd: number;    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface CompanyRecord {;
  id: string;

export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer';

export interface CompanyUsageLimits {;
  monthlyJobPosts: number;,
  budgetCapUsd: number;

export interface CompanyUsageLimits {;
  monthlyJobPosts: number;
  budgetCapUsd: number;
export interface CompanyUsageLimits {;
  monthlyJobPosts: number;
  budgetCapUsd: number;
}
;
export interface CompanyPlan {;
  tier: 'teams' | 'business' | 'enterprise-custom';
  seatsPurchased: number;
  seatsUsed: number;
  usageLimits: CompanyUsageLimits;

}
;
export interface CompanyMember {;
  id: string;
  email: string;
  name: string;
  role: EnterpriseRole;

}
;
export interface CompanyActivityEvent {;
  id: string;
  timestampIso: string;
  actorEmail: string;
  action: string;
  meta?: Record<string unknown>;

}
;
export interface InvoiceRecord {;
  id: string;

  companyId: string;
  companyId: string;,
  number: string;
  amountUsd: number;,
  periodStartIso: string;

}
;
export interface CompanyRecord {;
  id: string;
  name: string;
  slug: string, // e.g. acme;
  logoUrl?: string;
  brandColor?: string;
  plan: CompanyPlan;
  members: CompanyMember[];
  activity: CompanyActivityEvent[];

export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer',
export interface CompanyUsageLimits {
  monthlyJobPosts: number,
  budgetCapUsd: number;    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
export interface CompanyRecord {id: string;

  name: string;
  slug: string, // e.g. acme;
  logoUrl?: string;
  brandColor?: string;
  plan: CompanyPlan;
  members: CompanyMember[];
  activity: CompanyActivityEvent[];

  invoices: InvoiceRecord[];  logoUrl?: string,;

}
export interface CompanyRecord {id: string;
  name: string;
  slug: string, // e.g. acme;
  logoUrl?: string;
  brandColor?: string;
  plan: CompanyPlan;
  members: CompanyMember[];
  activity: CompanyActivityEvent[];
  invoices: InvoiceRecord[];

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
}

  slug: string, // e.g. acme;
  logoUrl?: string;
  brandColor?: string;
  plan: CompanyPlan;
  members: CompanyMember[];
  activity: CompanyActivityEvent[];
  invoices: InvoiceRecord[];

  }

  brandColor?: string,;
  plan: CompanyPlan,;
  members: CompanyMember[];,
  activity: CompanyActivityEvent[];
  invoices: InvoiceRecord[];

    return res.status(500).json({ error: "Internal server error" });

  }
  activity: CompanyActivityEvent[];,
  invoices: InvoiceRecord[];
}
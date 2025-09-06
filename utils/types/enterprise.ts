export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer';

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

}
;
export interface InvoiceRecord {;
  id: string;

  companyId: string;
  number: string;
  amountUsd: number;
  periodStartIso: string;
  periodEndIso: string;
  status: 'paid' | 'open' | 'void' | 'past_due';

}
;
export interface CompanyRecord {;
  id: string;
  name: string;
  slug: string, // e.g. acme;

}
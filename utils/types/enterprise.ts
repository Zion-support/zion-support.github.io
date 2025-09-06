
export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer';

export interface CompanyUsageLimits {;
  monthlyJobPosts: number;
  budgetCapUsd: number;


  companyId: string;
  number: string;
  amountUsd: number;
  periodStartIso: string;
  periodEndIso: string;
  status: 'paid' | 'open' | 'void' | 'past_due';
<<<<<<< HEAD

export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer',
export interface CompanyUsageLimits {
  monthlyJobPosts: number,
  budgetCapUsd: number;
=======


=======
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
export interface CompanyPlan {
  tier: 'teams' | 'business' | 'enterprise - custom',
  seats_purchased: number,
  seats_used: number,
  usage_limits: CompanyUsageLimits;
}
export interface CompanyMember {
  id: string,
  email: string,
  name: string,
  role: EnterpriseRole;
}
export interface CompanyActivityEvent {
  id: string,
  timestamp_iso: string,
  actor_email: string,
  action: string,
  meta?: Record < string unknown>;
}
export interface InvoiceRecord {
  id: string,
  company_id: string,
  number: string,
  amount_usd: number,
  periodStartIso: string,
  periodEndIso: string,
  status: 'paid' | 'open' | 'void' | 'past_due';
}
export interface CompanyRecord {
  id: string,
  name: string,
  slug: string, // e.g. acme;


  logoUrl?: string,;
  brandColor?: string,;
  plan: CompanyPlan,;
  members: CompanyMember[];
  activity: CompanyActivityEvent[];
  invoices: InvoiceRecord[];
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD


}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

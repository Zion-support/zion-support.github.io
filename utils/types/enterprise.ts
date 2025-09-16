<<<<<<< HEAD
  tier: 'teams' | 'business' | 'enterprise-custom';
=======

;
export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer';export interface CompanyUsageLimits  {monthlyJobPosts: number;
  budgetCapUsd: number;export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer';
export interface CompanyUsageLimits {monthlyJobPosts: number;
  budgetCapUsd: number;
}
export interface CompanyPlan {tier: 'teams' | 'business' | 'enterprise-custom';
>>>>>>> origin/merge-pr-12271
  seatsPurchased: number;
  seatsUsed: number;
  usageLimits: CompanyUsageLimits;
  id: string;
  email: string;
  name: string;
  role: EnterpriseRole;
  id: string;
  timestampIso: string;
  actorEmail: string;
  action: string;
<<<<<<< HEAD
=======
  meta?: Record<string unknown>;
  meta?: Record<string, unknown>;
  } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}export interface InvoiceRecord  {id: string;companyId: string;
export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer';

export interface CompanyUsageLimits {;
  monthlyJobPosts: number;
  budgetCapUsd: number;


>>>>>>> origin/merge-pr-12271
  companyId: string;
  number: string;
  amountUsd: number;
  periodStartIso: string;
  periodEndIso: string;
  status: 'paid' | 'open' | 'void' | 'past_due';
  logoUrl?: string;
  brandColor?: string;
  plan: CompanyPlan;
  members: CompanyMember[];
  activity: CompanyActivityEvent[];
  invoices: InvoiceRecord[];

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


=======
}
<<<<<<< HEAD
>>>>>>> origin/auto/autonomy-17186719616
=======
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


}
  logoUrl?: string,;
  brandColor?: string,;
  plan: CompanyPlan,;
  members: CompanyMember[];
  activity: CompanyActivityEvent[];
  invoices: InvoiceRecord[];} catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}}export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer',export interface CompanyUsageLimits  {monthlyJobPosts: number,budgetCapUsd: number;    console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}export interface CompanyRecord  {id: string;
  name: string;
  slug: string, // e.g. acme;
  logoUrl?: string;
  brandColor?: string;
  plan: CompanyPlan;
  members: CompanyMember[];
  activity: CompanyActivityEvent[];
  invoices: InvoiceRecord[];}
  logoUrl?: string,invoices: InvoiceRecord[];  logoUrl?: string,brandColor?: string,plan: CompanyPlan,members: CompanyMember[];
  activity: CompanyActivityEvent[];
  invoices: InvoiceRecord[];
  } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
  activity: CompanyActivityEvent[];
  invoices: InvoiceRecord[];
}
}
>>>>>>> origin/merge-pr-12271

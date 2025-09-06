<<<<<<< HEAD

export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer';

<<<<<<< HEAD
}
;
export interface CompanyMember {;
  id: string;
=======
export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer';
export interface CompanyUsageLimits {monthlyJobPosts: number;
  budgetCapUsd: number;
}
export interface CompanyPlan {tier: 'teams' | 'business' | 'enterprise-custom';
  seatsPurchased: number;
  seatsUsed: number;
  usageLimits: CompanyUsageLimits;
}
export interface CompanyMember {id: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
;
export interface InvoiceRecord {;
  id: string;
=======
export interface InvoiceRecord {id: string;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
export interface CompanyUsageLimits {;
  monthlyJobPosts: number;
  budgetCapUsd: number;
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======
export interface CompanyUsageLimits {;
  monthlyJobPosts: number;
  budgetCapUsd: number;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
;
export interface CompanyPlan {;
  tier: 'teams' | 'business' | 'enterprise-custom';
  seatsPurchased: number;
  seatsUsed: number;
  usageLimits: CompanyUsageLimits;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface CompanyPlan {;
  tier: 'teams' | 'business' | 'enterprise-custom',;
  seatsPurchased: number;
  seatsUsed: number;
  usageLimits: CompanyUsageLimits;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface CompanyMember {;
  id: string;
  email: string;
  name: string;
  role: EnterpriseRole;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface CompanyActivityEvent {;
  id: string;
  timestampIso: string;
  actorEmail: string;
  action: string;
  meta?: Record<string unknown>;
  meta?: Record<string, unknown>;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface InvoiceRecord {;
  id: string;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  companyId: string;
  number: string;
  amountUsd: number;
  periodStartIso: string;
  periodEndIso: string;
  status: 'paid' | 'open' | 'void' | 'past_due';
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer',
export interface CompanyUsageLimits {
  monthlyJobPosts: number,
  budgetCapUsd: number;
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

<<<<<<< HEAD
}
=======

  logoUrl?: string,;
  brandColor?: string,;
  plan: CompanyPlan,;
  members: CompanyMember[];
  activity: CompanyActivityEvent[];
  invoices: InvoiceRecord[];
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD


}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
  invoices: InvoiceRecord[];
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

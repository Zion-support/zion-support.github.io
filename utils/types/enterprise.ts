<<<<<<< HEAD

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
  email: string;
  name: string;
  role: EnterpriseRole;
}
export interface CompanyActivityEvent {id: string;
  timestampIso: string;
  actorEmail: string;
  action: string;
  meta?: Record<string unknown>;
}
export interface InvoiceRecord {id: string;
export interface CompanyUsageLimits {;
  monthlyJobPosts: number;
  budgetCapUsd: number;
}
;
export interface CompanyPlan {;
=======
export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer';

export interface CompanyUsageLimits {
  monthlyJobPosts: number;
  budgetCapUsd: number;
}

export interface CompanyPlan {
>>>>>>> origin/auto/autonomy-17186719616
  tier: 'teams' | 'business' | 'enterprise-custom';
  seatsPurchased: number;
  seatsUsed: number;
  usageLimits: CompanyUsageLimits;
<<<<<<< HEAD
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
=======
}

export interface CompanyMember {
>>>>>>> origin/auto/autonomy-17186719616
  id: string;
  email: string;
  name: string;
  role: EnterpriseRole;
<<<<<<< HEAD

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
;
export interface CompanyActivityEvent {;
=======
}

export interface CompanyActivityEvent {
>>>>>>> origin/auto/autonomy-17186719616
  id: string;
  timestampIso: string;
  actorEmail: string;
  action: string;
<<<<<<< HEAD

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


=======
  meta?: Record<string, unknown>;
}

export interface InvoiceRecord {
  id: string;
>>>>>>> origin/auto/autonomy-17186719616
  companyId: string;
  number: string;
  amountUsd: number;
  periodStartIso: string;
  periodEndIso: string;
  status: 'paid' | 'open' | 'void' | 'past_due';
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

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }


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

=======
}

export interface CompanyRecord {
  id: string;
  name: string;
  slug: string; // e.g. acme
>>>>>>> origin/auto/autonomy-17186719616
  logoUrl?: string;
  brandColor?: string;
  plan: CompanyPlan;
  members: CompanyMember[];
  activity: CompanyActivityEvent[];
  invoices: InvoiceRecord[];
<<<<<<< HEAD
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements


=======
}
>>>>>>> origin/auto/autonomy-17186719616

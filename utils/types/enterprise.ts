<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934





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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export interface CompanyUsageLimits {;
  monthlyJobPosts: number;,
  budgetCapUsd: number;


<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
}
export interface InvoiceRecord {id: string;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
export interface InvoiceRecord {id: string;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
;
export interface CompanyMember {;
  id: string;
  email: string;
  name: string;
  role: EnterpriseRole;
<<<<<<< HEAD
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
;
export interface CompanyActivityEvent {;
  id: string;
  timestampIso: string;
  actorEmail: string;
  action: string;
  meta?: Record<string unknown>;
<<<<<<< HEAD
=======
  meta?: Record<string, unknown>;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
;
export interface InvoiceRecord {;
  id: string;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======







>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  companyId: string;
  companyId: string;,
  number: string;
  amountUsd: number;,
  periodStartIso: string;
<<<<<<< HEAD
<<<<<<< HEAD
  periodEndIso: string;'
  status: 'paid' | 'open' | 'void' | 'past_due';
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer',
export interface CompanyUsageLimits {
  monthlyJobPosts: number,
  budgetCapUsd: number;    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
  invoices: InvoiceRecord[];
<<<<<<< HEAD
}
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer',
export interface CompanyUsageLimits {
  monthlyJobPosts: number,
  budgetCapUsd: number;    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
  periodEndIso: string;
  status: 'paid' | 'open' | 'void' | 'past_due';

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
export interface CompanyRecord {id: string;
=======
  periodEndIso: string;,
  status: 'paid' | 'open' | 'void' | 'past_due';




}
export interface CompanyRecord {id: string;,
pr-12325

  periodEndIso: string;,'
  status: 'paid' | 'open' | 'void' | 'past_due';'

}
export interface CompanyRecord {id: string;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  name: string;
  slug: string, // e.g. acme;
  logoUrl?: string;
  brandColor?: string;
  plan: CompanyPlan;
  members: CompanyMember[];
  activity: CompanyActivityEvent[];
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  invoices: InvoiceRecord[];  logoUrl?: string,;
=======


=======
  invoices: InvoiceRecord[];  logoUrl?: string,;
  brandColor?: string,;
  plan: CompanyPlan,;
  members: CompanyMember[];
  activity: CompanyActivityEvent[];
  invoices: InvoiceRecord[];






export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer',
export interface CompanyUsageLimits {
  monthlyJobPosts: number,
  budgetCapUsd: number;











  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }











  activity: CompanyActivityEvent[];
  invoices: InvoiceRecord[];
}
}
  plan: CompanyPlan;,
  members: CompanyMember[];
  activity: CompanyActivityEvent[];,
  invoices: InvoiceRecord[];


export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer',
export interface CompanyUsageLimits {
  // TODO: Implement
  monthlyJobPosts: number,


  } catch (error) {
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"

  } catch (error) {'
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"

  }

export interface CompanyPlan {
  // TODO: Implement
}"
  tier: 'teams' | 'business' | 'enterprise - custom',
  seats_purchased: number,
  seats_used: number,
  usage_limits: CompanyUsageLimits;
  seats_used: number,}
  usage_limits: CompanyUsageLimits;}
}
export interface CompanyMember {
  // TODO: Implement
  id: string,
  email: string,
  name: string,
  role: EnterpriseRole;
  name: string,}
  role: EnterpriseRole;}
}
export interface CompanyActivityEvent {
  // TODO: Implement
  timestamp_iso: string,
  actor_email: string,
  action: string,
  meta?: Record < string unknown>;
  action: string,}
  meta?: Record < string unknown>;}
}
export interface InvoiceRecord {
  // TODO: Implement
  company_id: string,
  number: string,
  amount_usd: number,
  periodStartIso: string,
  periodEndIso: string,

  periodEndIso: string,'
  status: 'paid' | 'open' | 'void' | 'past_due';'

}
export interface CompanyRecord {
  id: string,
  name: string,
  slug: string, // e.g. acme;
  // TODO: Implement


  logoUrl?: string,;
  brandColor?: string,;
  plan: CompanyPlan,;

  members: CompanyMember[];,
  activity: CompanyActivityEvent[];


  } catch (error) {"
"
pr-12325
  invoices: InvoiceRecord[];

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

'
export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer',
export interface CompanyUsageLimits {}
  monthlyJobPosts: number,;
  budgetCapUsd: number;









  } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }






}
export interface CompanyPlan {'
  tier: 'teams' | 'business' | 'enterprise - custom',
  seats_purchased: number,
  seats_used: number,;
  usage_limits: CompanyUsageLimits;
}
export interface CompanyMember {}
  id: string,
  email: string,
  name: string,;
  role: EnterpriseRole;
}
export interface CompanyActivityEvent {}
  id: string,
  timestamp_iso: string,
  actor_email: string,
  action: string,;
  meta?: Record < string unknown>;
}
export interface InvoiceRecord {}
=======
  invoices: InvoiceRecord[];


export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer',
export interface CompanyUsageLimits {
  monthlyJobPosts: number,
  budgetCapUsd: number;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }





}
}
<<<<<<< HEAD
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string,
  company_id: string,
  number: string,
  amount_usd: number,
  periodStartIso: string,
<<<<<<< HEAD
  periodEndIso: string,';
  status: 'paid' | 'open' | 'void' | 'past_due';
}
export interface CompanyRecord {}
  id: string,
  name: string,;
  slug: string, // e.g. acme;



  } catch (error) {"
    console.error("Error:", error);"
=======
  periodEndIso: string,
  status: 'paid' | 'open' | 'void' | 'past_due';
}
export interface CompanyRecord {
  id: string,
  name: string,
=======
;
export interface CompanyRecord {;
  id: string;
  name: string;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  slug: string, // e.g. acme;
  logoUrl?: string;
  brandColor?: string;
  plan: CompanyPlan;
  members: CompanyMember[];
  activity: CompanyActivityEvent[];
  invoices: InvoiceRecord[];
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return res.status(500).json({ error: "Internal server error" });
=======



}



  } catch (error) {'
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }


<<<<<<< HEAD

}


  logoUrl?: string,;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
  logoUrl?: string,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  brandColor?: string,;
  plan: CompanyPlan,;
  members: CompanyMember[];,
  activity: CompanyActivityEvent[];
  invoices: InvoiceRecord[];
<<<<<<< HEAD
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
=======
  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
=======

  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
  activity: CompanyActivityEvent[];,
  invoices: InvoiceRecord[];
}
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======




}


}

}
}
"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

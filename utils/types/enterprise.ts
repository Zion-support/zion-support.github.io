export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer';
<<<<<<< HEAD
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
=======
export interface CompanyUsageLimits {;
  monthlyJobPosts: number;
  budgetCapUsd: number;
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
  meta?: Record<string, unknown>;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface InvoiceRecord {;
  id: string;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface CompanyRecord {;
  id: string;
  name: string;
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}

export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer';'

export interface CompanyUsageLimits {;
  }
  "monthlyJobPosts": number;
  "budgetCapUsd": number;


  "companyId": string;
  "number": string;
  "amountUsd": number;
  "periodStartIso": string;
  "periodEndIso": string;
  "status": 'paid' | 'open' | 'void' | 'past_due';'

}
export interface CompanyRecord {"id": string;
  }
  "name": string;
  "slug": string, // e.g. acme;
  logoUrl?: string;
  brandColor?: string;
  "plan": CompanyPlan;
  "members": CompanyMember[];
  "activity": CompanyActivityEvent[];
  "invoices": InvoiceRecord[];


export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer','
export interface CompanyUsageLimits {
  }
  "monthlyJobPosts": number,
  "budgetCapUsd": number;


  } catch (error) {
    }
    console.error(""Error":", error);"
    return res.status(500).json({ "error": "Internal server error" });"
  }

}
export interface CompanyPlan {
  }
  "tier": 'teams' | 'business' | 'enterprise - custom','
  "seats_purchased": number,
  "seats_used": number,
  "usage_limits": CompanyUsageLimits;
}
export type EnterpriseRole = $2;
export interface CompanyUsageLimits {
  monthlyJobPosts: number,
  budgetCapUsd: number}

export interface CompanyPlan {
  tier: 'teams' | 'business' | 'enterprise-custom',
  seatsPurchased: number,
  seatsUsed: number,
  usageLimits: CompanyUsageLimits}

export interface CompanyMember {
  }
  "id": string,
  "email": string,
  "name": string,
  "role": EnterpriseRole;
}
  role: EnterpriseRole}

export interface CompanyActivityEvent {
  }
  "id": string,
  "timestamp_iso": string,
  "actor_email": string,
  "action": string,
  meta?: Record < string unknown>;
}

export interface InvoiceRecord {
  }
  "id": string,
  "company_id": string,
  "number": string,
  "amount_usd": number,
  "periodStartIso": string,
  "periodEndIso": string,
  "status": 'paid' | 'open' | 'void' | 'past_due';'
}

export interface CompanyRecord {
  }
  "id": string,
  "name": string,
  "slug": string, // e.g. acme;


  logoUrl?: string,;
  brandColor?: string,;
  "plan": CompanyPlan,;
  "members": CompanyMember[];
  "activity": CompanyActivityEvent[];
  "invoices": InvoiceRecord[];
  } catch (error) {
    }
    console.error(""Error":", error);"
    return res.status(500).json({ "error": "Internal server error" });"
  }


}
  logoUrl?: string,;
  brandColor?: string,;
  "plan": CompanyPlan,;
  "members": CompanyMember[];
  "activity": CompanyActivityEvent[];
  "invoices": InvoiceRecord[];
  } catch (error) {
    }
    console.error(""Error":", error);"
    return res.status(500).json({ "error": "Internal server error" });"
  }
  "activity": CompanyActivityEvent[];
  "invoices": InvoiceRecord[];
}
}

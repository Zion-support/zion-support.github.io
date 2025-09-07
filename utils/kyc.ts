origin/cursor/expand-services-advertise-and-build-project-c28b

  kind: "document" | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
  url: string;
  uploaded_at: string;'
  status: 'pending' | 'approved' | 'rejected';
}

export interface KycProfile {

  user_id: string;

origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b

export interface KycProfile {
  user_id: string;

export interface KycProfile {;

  userId: string;

  role: KycRole;

  fullLegalName?: string;
  business_name?: string;
  businessRegistrationNumber?: string;
  country?: string;
  dateOfBirth?: string;

  aml_status: 'unknown' | 'clear' | 'match' | 'review';
  flags?: string[];
  risk_score?: number;
  created_at: string;
  lastUpdatedAt: string;
  audit_trail: Array<{}
    at: string;
    by: string;
    action: string;

    return ['government_id', 'proof_of_address'];
  } else {'
    return ['business_registration', 'proof_of_address', 'beneficial_ownership'];
  }
}

origin/cursor/expand-services-advertise-and-build-project-c28b

    return ['bank_statement', 'utility_bill'];
  } else {'
    return ['bank_statement', 'utility_bill', 'tax_certificate'];
  }
}

  const missing: string[] = [];
  
  if (!profile && profile.fullLegalName && !profile && profile.businessName) {'
    missing && missing.push('name'),
  }
  if (!profile && profile.country) {'
    missing && missing.push('country');

  }
  
  if (!profile && profile.country) {'
    missing && missing.push('country');

  }
'
  if (profile.role === 'enterprise' && !profile.businessRegistrationNumber) {'
    missing.push('businessRegistrationNumber');'
  if (profile && profile.role === 'individual' && !profile && profile.dateOfBirth) {'
    missing && missing.push('dateOfBirth');
  }

  }

  if (!profile && profile.country) {
    missing && missing.push('country');

origin/cursor/automate-test-improve-and-merge-code-382a

  }

  if (profile.role === 'client' && !profile.dateOfBirth) {
    missing.push('dateOfBirth');

  const missing: string[] = [];
  
  if (!profile.fullLegalName && !profile.business_name) {
    missing.push('name');
  }
  
  if (!profile.country) {
    missing.push('country');
  }

  if (profile.role === 'enterprise' && !profile.businessRegistrationNumber) {
    missing.push('businessRegistrationNumber');
  }
  return { ok: missing && missing.length === 0, missing };  
  if (profile && profile.role === 'enterprise' && !profile && profile.businessRegistrationNumber) {
    missing && missing.push('businessRegistrationNumber');
  }
  return {

    ok: missing && missing.length === 0,

    missing

  }

}

export interface KycDocumentMeta {;

  kind: "document" | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
  url: string;
  uploadedAt: string;'
  status: 'pending' | 'approved' | 'rejected';

}

}

export interface KycProfile {;

  userId: string;

  role: KycRole;
  fullLegalName?: string;
  businessName?: string;
  businessRegistrationNumber?: string;
  country?: string;
  dateOfBirth?: string;
  documents: KycDocumentMeta[];'
  status: 'in_progress' | 'submitted' | 'approved' | 'rejected';'
  amlStatus: 'unknown' | 'clear' | 'match' | 'review';
  flags?: string[];
  riskScore?: number;
  createdAt: string;
  lastUpdatedAt: string;
  auditTrail: Array<{}
    at: string;
    by: string;
    action: string;
    details?: any;
  }>;
}

}

origin/cursor/expand-services-advertise-and-build-project-c28b

}
  
  return { ok: missing.length === 0, missing };
}

export function generateKycDocumentId(): string {
  return `doc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function isKycProfileComplete(profile: KycProfile): boolean {
  return profile.status === 'approved' && 
         profile.documents.length > 0 && 
         (profile.fullLegalName?.length || 0) > 0;
}

export function isKycProfileExpired(profile: KycProfile): boolean {
  if (!profile.expiresAt) return false;
  return new Date(profile.expiresAt) < new Date();

export function validateKycSubmission (profile: KycProfile): { ok: boolean, missing: string[] } {

  const missing: string[] = [];
  if (!profile.fullLegalName && !profile.businessName) {
    missing.push('name');
  }
  if (!profile.country) {
    missing.push('country');
  }
  if (profile.role === 'client' && !profile.dateOfBirth) {
    missing.push('dateOfBirth');
  }

    missing.push ('businessRegistrationNumber');

  }

    ok: missing.length === 0,
    missing;
  }
}
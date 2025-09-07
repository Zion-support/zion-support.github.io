
  kind: "document" | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
  url: string;
  uploaded_at: string;
  status: 'pending' | 'approved' | 'rejected';
}


export interface KycProfile {
  user_id: string;
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
  // TODO: Implement
  user_id: string;,
pr-12325
  role: KycRole;
  fullLegalName?: string;
  business_name?: string;
  businessRegistrationNumber?: string;
  country?: string;
  dateOfBirth?: string;
  documents: KycDocumentMeta[];
  documents: KycDocumentMeta[];,
pr-12325
  status: 'in_progress' | 'submitted' | 'approved' | 'rejected';
  aml_status: 'unknown' | 'clear' | 'match' | 'review';
  flags?: string[];
  risk_score?: number;
  created_at: string;
  lastUpdatedAt: string;
  audit_trail: Array<{
    at: string;
    by: string;
    action: string;

    return ['government_id', 'proof_of_address'];
  } else {
    return ['business_registration', 'proof_of_address', 'beneficial_ownership'];
  }
}


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


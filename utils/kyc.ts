

  kind: "document" | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
  url: string;
  uploaded_at: string;
  status: 'pending' | 'approved' | 'rejected';
}


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface KycProfile {
  user_id: string;
=======


export interface KycProfile {;

  userId: string;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  role: KycRole;
  fullLegalName?: string;
  business_name?: string;
  businessRegistrationNumber?: string;
  country?: string;
  dateOfBirth?: string;
  documents: KycDocumentMeta[];
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

    details?: any

  }>;

=======
// KYC (Know Your Customer) utilities
export interface KycProfile {
  userId: string;
  role: 'client' | 'talent' | 'both';
  fullLegalName: string;
  businessName?: string;
  businessRegistrationNumber?: string;
  documents: KycDocument[];
  status: 'in_progress' | 'pending_review' | 'approved' | 'rejected' | 'expired';
  submittedAt?: string;
  reviewedAt?: string;
  expiresAt?: string;
  reviewerId?: string;
  rejectionReason?: string;
  notes?: string;

}

export function getRequiredDocuments (role: KycRole): string[] {
  // Check condition
if ( {) {
  $2
}

    return ['government_id', 'proof_of_address'];
  } else {
    return ['business_registration', 'proof_of_address', 'beneficial_ownership'];
  }
}


    return ['bank_statement', 'utility_bill'];
  } else {
    return ['bank_statement', 'utility_bill', 'tax_certificate'];
  }
}



export function validateKycSubmission(profile: KycProfile): { ok: boolean, missing: string[] } {;


  const missing: string[] = [];
  
  if (!profile && profile.fullLegalName && !profile && profile.businessName) {
    missing && missing.push('name'),
  }
  if (!profile && profile.country) {
    missing && missing.push('country');
  }
  
  if (profile && profile.role === 'individual' && !profile && profile.dateOfBirth) {
    missing && missing.push('dateOfBirth');
  }
  return { ok: missing && missing.length === 0, missing };  
  if (profile && profile.role === 'enterprise' && !profile && profile.businessRegistrationNumber) {
    missing && missing.push('businessRegistrationNumber');
=======

  
  if (!profile && profile.fullLegalName && !profile && profile.businessName) {
    missing && missing.push('name'),

=======

export function validateKycSubmission(profile: KycProfile): { ok: boolean, missing: string[] } {;
  const missing: string[] = [];
  if (!profile.fullLegalName && !profile.businessName) {
    missing.push('name');
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  }
  
  if (!profile && profile.country) {
    missing && missing.push('country');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }

  if (profile.role === 'client' && !profile.dateOfBirth) {
    missing.push('dateOfBirth');
  }

  if (profile.role === 'enterprise' && !profile.businessRegistrationNumber) {
    missing.push('businessRegistrationNumber');
  if (profile && profile.role === 'individual' && !profile && profile.dateOfBirth) {
    missing && missing.push('dateOfBirth');
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
=======


export interface KycDocumentMeta {;
  kind: "document" | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
  url: string;
  uploadedAt: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface KycProfile {;
  userId: string;
  role: KycRole;
  fullLegalName?: string;
  businessName?: string;
  businessRegistrationNumber?: string;
  country?: string;
  dateOfBirth?: string;
  documents: KycDocumentMeta[];
  status: 'in_progress' | 'submitted' | 'approved' | 'rejected';
  amlStatus: 'unknown' | 'clear' | 'match' | 'review';
  flags?: string[];
  riskScore?: number;
  createdAt: string;
  lastUpdatedAt: string;
  auditTrail: Array<{
    at: string;
    by: string;
    action: string;
    details?: any
  }>;
}
export function validateKycSubmission (profile: KycProfile): { ok: boolean, missing: string[] } {
  const missing: string[] = [];
;
  // Check condition
if ( {) {
  $2
}
    missing.push ('name');
  }
  // Check condition
if ( {) {
  $2
}
    missing.push ('country');
  }
  // Check condition
if ( {) {
  $2
}
    missing.push ('dateOfBirth');
  }
  // Check condition
if ( {) {
  $2
}
    missing.push ('businessRegistrationNumber');
  }
  return {
    ok: missing.length === 0,
    missing;
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

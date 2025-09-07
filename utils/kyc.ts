<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

;
export interface KycProfile  {user_id: string;kind: "document" | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
;
export interface KycProfile  {user_id: string;kind: "document" | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  kind: "document" | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
  url: string;
  uploaded_at: string;
  status: 'pending' | 'approved' | 'rejected';
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
export interface KycProfile  {user_id: string;export interface KycProfile  {user_id: string;export interface KycProfile  {userId: string;
export interface KycProfile  {user_id: string;
ursor/fix-website-loading-errors-and-merge-6662;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
export interface KycProfile {
  user_id: string;
<<<<<<< HEAD
=======



export interface KycProfile {
  user_id: string;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7


export interface KycProfile {;

  userId: string;
export interface KycProfile {
  user_id: string;
<<<<<<< HEAD
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
  audit_trail: Array<{at: string;
    by: string;
<<<<<<< HEAD
<<<<<<< HEAD
    action: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d


<<<<<<< HEAD
  }>;

// KYC (Know Your Customer) utilities
export interface KycProfile {
  userId: string;
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
    action: string;details?: any;
  }>;// KYC (Know Your Customer) utilities;
export interface KycProfile  {userId: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
  notes?: string;}export function getRequiredDocuments (role: KycRole): string[] {// Check condition;
if ( {) {$2;
}return ['government_id', 'proof_of_address'];
  } else {return ['business_registration', 'proof_of_address', 'beneficial_ownership'];
  }
}return ['bank_statement', 'utility_bill'];
  } else {return ['bank_statement', 'utility_bill', 'tax_certificate'];
  }
}
  const missing: string[]  = [];if (!profile && profile.fullLegalName && !profile && profile.businessName) {missing && missing.push('name')}
  if (!profile && profile.country) {missing && missing.push('country')}missing && missing.push('name')}
  if (!profile && profile.country) {missing && missing.push('country')const missing: string[] = [];
  if (!profile.fullLegalName && !profile.businessName) {missing.push('name')}if (!profile && profile.country) {missing && missing.push('country')}
  if (profile && profile.role === 'individual' && !profile && profile.dateOfBirth) {missing && missing.push('dateOfBirth')}
  return { ok: missing && missing.length === 0, missing }if (profile && profile.role === 'enterprise' && !profile && profile.businessRegistrationNumber) {missing && missing.push('businessRegistrationNumber')}if (!profile && profile.fullLegalName && !profile && profile.businessName) {missing && missing.push('name')}if (!profile && profile.country) {missing && missing.push('country')}if (profile.role === 'client' && !profile.dateOfBirth) {missing.push('dateOfBirth')}missing && missing.push('name')}
  if (!profile && profile.country) {missing && missing.push('country')}if (!profile && profile.country) {missing && missing.push('country')}if (profile.role === 'enterprise' && !profile.businessRegistrationNumber) {missing.push('businessRegistrationNumber')if (profile && profile.role === 'individual' && !profile && profile.dateOfBirth) {missing && missing.push('dateOfBirth')}
  return { ok: missing && missing.length === 0, missing }if (profile && profile.role === 'enterprise' && !profile && profile.businessRegistrationNumber) {missing && missing.push('businessRegistrationNumber')}
  return {ok: missing && missing.length === 0,missing;
  }}export interface KycDocumentMeta  {export interface KycDocumentMeta  {kind: "document" | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
  url: string;
  uploadedAt: string;
  status: 'pending' | 'approved' | 'rejected';}}
}
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
export interface KycProfile  {export interface KycProfile  {userId: string;
    action: string;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
    return ['government_id', 'proof_of_address'];
  } else {
    return ['business_registration', 'proof_of_address', 'beneficial_ownership'];
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
    return ['bank_statement', 'utility_bill'];
  } else {
    return ['bank_statement', 'utility_bill', 'tax_certificate'];
  }
}
  const missing: string[] = [];
  
  if (!profile && profile.fullLegalName && !profile && profile.businessName) {
    missing && missing.push('name')
  }
  if (!profile && profile.country) {
    missing && missing.push('country');
  const missing: string[] = [];
  if (!profile.fullLegalName && !profile.businessName) {
    missing.push('name');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  }
  
  if (profile && profile.role === 'individual' && !profile && profile.dateOfBirth) {
    missing && missing.push('dateOfBirth');
  }
  return { ok: missing && missing.length === 0, missing };  
  if (profile && profile.role === 'enterprise' && !profile && profile.businessRegistrationNumber) {
    missing && missing.push('businessRegistrationNumber');

  
  if (!profile && profile.fullLegalName && !profile && profile.businessName) {
    missing && missing.push('name'),

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  }
  
  if (!profile && profile.country) {
    missing && missing.push('country');
<<<<<<< HEAD
<<<<<<< HEAD
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
origin/cursor/automate-test-improve-and-merge-code-382a
  }
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
  }
<<<<<<< HEAD

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

  if (profile.role === 'client' && !profile.dateOfBirth) {
    missing.push('dateOfBirth');
  }

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    ok: missing && missing.length === 0,

    missing

  }

}

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

export interface KycDocumentMeta {;
=======
origin/cursor/expand-services-advertise-and-build-project-c28b


export interface KycDocumentMeta {;

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======


export interface KycDocumentMeta {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  kind: "document" | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
  url: string;
  uploadedAt: string;
  status: 'pending' | 'approved' | 'rejected';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
}
export interface KycProfile {
=======

}

export interface KycProfile {;

origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

}

export interface KycProfile {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  userId: string;
  role: KycRole;
  fullLegalName?: string;
  businessName?: string;
  businessRegistrationNumber?: string;
  country?: string;
  dateOfBirth?: string;
  documents: KycDocumentMeta[];
  status: "in_progress" | "submitted" | "approved" | "rejected";
  amlStatus: "unknown" | "clear" | "match" | "review";
  status: 'in_progress' | 'submitted' | 'approved' | 'rejected';
  amlStatus: 'unknown' | 'clear' | 'match' | 'review';
  flags?: string[];
  riskScore?: number;
  createdAt: string;
  lastUpdatedAt: string;
  auditTrail: Array<{at: string;
    by: string;
    action: string;details?: any;
  }>;
}}details?: any;
  }>;
}
    details?: any;
  }>;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
export function generateKycDocumentId(): string {
  return `doc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
export function generateKycDocumentId(): string {return `doc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
export function isKycProfileComplete(profile: KycProfile): boolean {return profile.status === 'approved' &&;
         profile.documents.length > 0 &&;
         profile.fullLegalName.length > 0;
}
export function isKycProfileExpired(profile: KycProfile): boolean {if (!profile.expiresAt) return false;
  return new Date(profile.expiresAt) < new Date()}export function validateKycSubmission (profile: KycProfile): { ok: boolean, missing: string[] } {const missing: string[]  = [];// Check condition;
if ( {) {$2;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
}
    missing.push ('name')}
  // Check condition;
if ( {) {$2;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
export function validateKycSubmission (profile: KycProfile): { ok: boolean, missing: string[] } {
  const missing: string[] = [];
;
  // Check condition
if ( {) {
  $2
}
    missing.push ('country')}
  // Check condition;
if ( {) {$2;
}
    missing.push ('dateOfBirth')}
  // Check condition;
if ( {) {$2;
}
    missing.push ('businessRegistrationNumber')}
  return {ok: missing.length === 0,missing;
  }
}ursor/fix-website-loading-errors-and-merge-6662;
  return { ok: missing.length === 0, missing }
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
origin/cursor/automate-test-improve-and-merge-code-20a4


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc


ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

  return { ok: missing.length === 0, missing };
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


<<<<<<< HEAD







  return { ok: missing.length === 0, missing };

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

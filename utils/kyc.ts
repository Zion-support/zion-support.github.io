<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
export type KycRole = 'client' | 'talent' | 'enterprise';
export type KycStatus = 'not started' | 'in progress' | 'submitted' | 'approved' | 'rejected' | 'needs more info';
export type AmlStatus = 'clear' | 'match' | 'review' | 'unknown';
export interface KycDocumentMeta {

export interface KycDocumentMeta {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  kind: "document" | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
  url: string;
  uploaded_at: string;'
  status: 'pending' | 'approved' | 'rejected';
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export interface KycProfile {


export interface KycProfile {;
export interface KycProfile {
  user_id: string;
=======
<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export interface KycProfile {
=======


export interface KycProfile {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  user_id: string;

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
export interface KycProfile {
  user_id: string;

>>>>>>> 61d39dd026fe5549161165ead85b131541010508

export interface KycProfile {;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  userId: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export interface KycProfile {
<<<<<<< HEAD
  user_id: string;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
export interface KycProfile {
  user_id: string;
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  role: KycRole;
=======
  user_id: string;  role: KycRole;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  fullLegalName?: string;
  business_name?: string;
  businessRegistrationNumber?: string;
  country?: string;
  dateOfBirth?: string;
  documents: KycDocumentMeta[];'
  status: 'in_progress' | 'submitted' | 'approved' | 'rejected';'
  aml_status: 'unknown' | 'clear' | 'match' | 'review';
  flags?: string[];
  risk_score?: number;
  created_at: string;
  lastUpdatedAt: string;
  audit_trail: Array<{}
    at: string;
    by: string;
    action: string;
<<<<<<< HEAD

<<<<<<< HEAD
    details?: any

  }>;

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


origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return ['government_id', 'proof_of_address'];
  } else {'
    return ['business_registration', 'proof_of_address', 'beneficial_ownership'];
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return ['bank_statement', 'utility_bill'];
  } else {'
    return ['bank_statement', 'utility_bill', 'tax_certificate'];
  }
}
<<<<<<< HEAD
export function validateKycSubmission(profile: KycProfile): { ok: boolean, missing: string[] } {

export function validateKycSubmission(profile: KycProfile): { ok: boolean, missing: string[] } {;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const missing: string[] = [];
  
  if (!profile && profile.fullLegalName && !profile && profile.businessName) {'
    missing && missing.push('name'),
  }
  if (!profile && profile.country) {'
    missing && missing.push('country');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const missing: string[] = [];
  if (!profile.fullLegalName && !profile.businessName) {
<<<<<<< HEAD
    missing.push('name');
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
  return { ok: missing && missing.length === 0, missing };  
  if (profile && profile.role === 'enterprise' && !profile && profile.businessRegistrationNumber) {
    missing && missing.push('businessRegistrationNumber');

  
  if (!profile && profile.fullLegalName && !profile && profile.businessName) {
    missing && missing.push('name'),

<<<<<<< HEAD
<<<<<<< HEAD
=======
export function validateKycSubmission(profile: KycProfile): { ok: boolean, missing: string[] } {
  const missing: string[] = [];
  if (!profile.fullLegalName && !profile.businessName) {
    missing.push('name');
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
  const missing: string[] = [];
  if (!profile.fullLegalName && !profile.businessName) {
    missing.push('name');
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
=======
    missing.push('name');  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  
  if (!profile && profile.country) {
    missing && missing.push('country');
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  }

  if (profile.role === 'client' && !profile.dateOfBirth) {
    missing.push('dateOfBirth');
  }

<<<<<<< HEAD
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
  }
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    ok: missing && missing.length === 0,

    missing

  }

}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

export interface KycDocumentMeta {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface KycDocumentMeta {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
origin/cursor/expand-services-advertise-and-build-project-c28b


export interface KycDocumentMeta {;

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
  return { ok: missing && missing.length === 0, missing };  '
  if (profile && profile.role === 'enterprise' && !profile && profile.businessRegistrationNumber) {'
    missing && missing.push('businessRegistrationNumber');
  }
  return {}
export interface KycDocumentMeta {;
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======

export interface KycDocumentMeta {;
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  kind: "document" | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
  url: string;
  uploadedAt: string;'
  status: 'pending' | 'approved' | 'rejected';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

}

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
}

export interface KycProfile {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

}


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
}
export interface KycProfile {
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  userId: string;
=======
}
export interface KycProfile {  userId: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
}
export function generateKycDocumentId(): string {
  return `doc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
export function isKycProfileComplete(profile: KycProfile): boolean {
  return profile.status === 'approved' && 
         profile.documents.length > 0 && 
         profile.fullLegalName.length > 0;
}
export function isKycProfileExpired(profile: KycProfile): boolean {
  if (!profile.expiresAt) return false;
  return new Date(profile.expiresAt) < new Date();
}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
export function validateKycSubmission (profile: KycProfile): { ok: boolean, missing: string[] } {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD
  if (profile.role === 'enterprise' && !profile.businessRegistrationNumber) {
    missing.push('businessRegistrationNumber');
=======
<<<<<<< HEAD
  // Check condition
if ( {) {
  $2
}
=======

export function validateKycSubmission (profile: KycProfile): { ok: boolean, missing: string[] } {};
  const missing: string[] = [];
;
  // Check condition;
if ( {) {}
  $2;
}'
    missing.push ('name');
  }
  // Check condition;
if ( {) {}
  $2;
}'
    missing.push ('country');
  }
  // Check condition;
if ( {) {}
  $2;
}'
    missing.push ('dateOfBirth');
  }
<<<<<<< HEAD
  // Check condition;
if ( {) {}
  $2;
}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    missing.push ('businessRegistrationNumber');
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }
<<<<<<< HEAD
  return {
    ok: missing.length === 0
    missing
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  return { ok: missing.length === 0, missing };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  return {}
=======
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  // Check condition
if ( {) {
  $2
}
    missing.push ('businessRegistrationNumber');
  }
  return {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    ok: missing.length === 0,
    missing;
  }
}
<<<<<<< HEAD
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31




<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

  return { ok: missing.length === 0, missing };
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

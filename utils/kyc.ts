<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
;
export interface KycDocumentMeta {
  id: string;
  kind: 'document' | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
export interface KycDocumentMeta {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  kind: "document" | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
  url: string;
  uploaded_at: string;
  status: 'pending' | 'approved' | 'rejected';
}
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export interface KycProfile {
  user_id: string;
=======


export interface KycProfile {;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

    details?: any

  }>;

=======
=======
    details?: any
  }>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

}

=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function getRequiredDocuments (role: KycRole): string[] {
  // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return ['government_id', 'proof_of_address'];
  } else {
    return ['business_registration', 'proof_of_address', 'beneficial_ownership'];
  }
}
<<<<<<< HEAD


=======
export function getOptionalDocuments (role: KycRole): string[] {
  // Check condition
if ( {) {
  $2
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return ['bank_statement', 'utility_bill'];
  } else {
    return ['bank_statement', 'utility_bill', 'tax_certificate'];
  }
}
<<<<<<< HEAD
<<<<<<< HEAD

  const missing: string[] = [];
  if (!profile.fullLegalName && !profile.businessName) {
    missing.push('name');
=======



export function validateKycSubmission(profile: KycProfile): { ok: boolean, missing: string[] } {;


  const missing: string[] = [];
  
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  if (!profile && profile.fullLegalName && !profile && profile.businessName) {
    missing && missing.push('name'),
  }
  if (!profile && profile.country) {
    missing && missing.push('country');
<<<<<<< HEAD
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
  
  if (!profile && profile.country) {
    missing && missing.push('country');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }

  if (profile.role === 'client' && !profile.dateOfBirth) {
    missing.push('dateOfBirth');
  }

=======
  }
  if (profile.role === 'client' && !profile.dateOfBirth) {
    missing.push('dateOfBirth');
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

    ok: missing && missing.length === 0,

    missing

  }

}
<<<<<<< HEAD

=======
=======

=======
    ok: missing && missing.length === 0,
    missing
  }
=======
<<<<<<< HEAD
export type KycRole = 'client' | 'talent' | 'enterprise';
export type KycStatus = 'not started' | 'in progress' | 'submitted' | 'approved' | 'rejected' | 'needs more info';
export type AmlStatus = 'clear' | 'match' | 'review' | 'unknown';
<<<<<<< HEAD
export interface KycDocumentMeta {
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

export interface KycDocumentMeta {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  kind: "document" | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
  url: string;
  uploadedAt: string;
  status: 'pending' | 'approved' | 'rejected';
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
<<<<<<< HEAD
export interface KycProfile {
=======

export interface KycProfile {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
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
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
export function getRequiredDocuments(role: KycRole): string[] {
  if (role === 'client') {;
    return ['government_id', 'proof_of_address'];
  } else {
    return ['business_registration', 'proof_of_address', 'beneficial_ownership'];
  }
}
export function getOptionalDocuments(role: KycRole): string[] {
  if (role === 'client') {;
    return ['bank_statement', 'utility_bill'];
  } else {
    return ['bank_statement', 'utility_bill', 'tax_certificate'];
  }
}
<<<<<<< HEAD
export function validateKycSubmission(profile: KycProfile): { ok: boolean, missing: string[] } {
=======

export function validateKycSubmission(profile: KycProfile): { ok: boolean, missing: string[] } {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  if (profile.role === 'enterprise' && !profile.businessRegistrationNumber) {
    missing.push('businessRegistrationNumber');
  }
  return {
    ok: missing.length === 0
    missing
  }
}
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

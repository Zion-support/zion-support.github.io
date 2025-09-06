

<<<<<<< HEAD
  kind: "document" | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  url: string;
  uploaded_at: string;
  status: 'pending' | 'approved' | 'rejected';
}


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export function getRequiredDocuments (role: KycRole): string[] {
  // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
  }
  
  if (profile && profile.role === 'individual' && !profile && profile.dateOfBirth) {
    missing && missing.push('dateOfBirth');
  }
  return { ok: missing && missing.length === 0, missing };  
  if (profile && profile.role === 'enterprise' && !profile && profile.businessRegistrationNumber) {
    missing && missing.push('businessRegistrationNumber');
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  
  if (!profile && profile.fullLegalName && !profile && profile.businessName) {
    missing && missing.push('name'),

  }
  
  if (!profile && profile.country) {
    missing && missing.push('country');
  }

  if (profile.role === 'client' && !profile.dateOfBirth) {
    missing.push('dateOfBirth');
  }

<<<<<<< HEAD
=======
  }
  if (profile.role === 'client' && !profile.dateOfBirth) {
    missing.push('dateOfBirth');
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  if (profile.role === 'enterprise' && !profile.businessRegistrationNumber) {
    missing.push('businessRegistrationNumber');
=======
  if (profile && profile.role === 'individual' && !profile && profile.dateOfBirth) {
    missing && missing.push('dateOfBirth');
  }
  return { ok: missing && missing.length === 0, missing };  
  if (profile && profile.role === 'enterprise' && !profile && profile.businessRegistrationNumber) {
    missing && missing.push('businessRegistrationNumber');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  return {

    ok: missing && missing.length === 0,
<<<<<<< HEAD

    missing

  }

}
=======


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

=======
=======
    missing
  }
export type KycRole = 'client' | 'talent' | 'enterprise';
export type KycStatus = 'not started' | 'in progress' | 'submitted' | 'approved' | 'rejected' | 'needs more info';
export type AmlStatus = 'clear' | 'match' | 'review' | 'unknown';
export interface KycDocumentMeta {

export interface KycDocumentMeta {;
  kind: "document" | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
  url: string;
  uploadedAt: string;
  status: 'pending' | 'approved' | 'rejected';
}
export interface KycProfile {

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
export function validateKycSubmission(profile: KycProfile): { ok: boolean, missing: string[] } {

export function validateKycSubmission(profile: KycProfile): { ok: boolean, missing: string[] } {;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

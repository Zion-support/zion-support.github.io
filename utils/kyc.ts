<<<<<<< HEAD
export type KycRole = 'client' | 'talent' | 'enterprise';
export type KycStatus = 'not started' | 'in progress' | 'submitted' | 'approved' | 'rejected' | 'needs more info';
export type AmlStatus = 'clear' | 'match' | 'review' | 'unknown';

export interface KycDocumentMeta {
  id: string;
  kind: 'document' | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
export interface KycDocumentMeta {
=======
<<<<<<< HEAD
export type KycRole = 'client' | 'talent' | 'enterprise';
export type KycStatus = 'not started' | 'in progress' | 'submitted' | 'approved' | 'rejected' | 'needs more info';
export type AmlStatus = 'clear' | 'match' | 'review' | 'unknown';
<<<<<<< HEAD
export interface KycDocumentMeta {
=======

export interface KycDocumentMeta {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  kind: "document" | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
  url: string;
  uploaded_at: string;
  status: 'pending' | 'approved' | 'rejected';
}
<<<<<<< HEAD

export interface KycProfile {
  user_id: string;
=======
<<<<<<< HEAD
export interface KycProfile {
  user_id: string;
=======


export interface KycProfile {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  userId: string;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
    details?: any;
  }>;
}

export function getRequiredDocuments(role: KycRole): string[] {
  if (role === 'individual') {
}
export function getRequiredDocuments(role: KycRole): string[] {
  if (role === 'client') {
    return ['government_id', 'proof_of_address'];
  } else {
    return ['business_registration', 'proof_of_address', 'beneficial_ownership'];
  }
}

export function getOptionalDocuments(role: KycRole): string[] {
  if (role === 'individual') {
export function getOptionalDocuments(role: KycRole): string[] {
  if (role === 'client') {
    return ['bank_statement', 'utility_bill'];
  } else {
    return ['bank_statement', 'utility_bill', 'tax_certificate'];
  }
}
<<<<<<< HEAD

export function validateKycSubmission(profile: KycProfile): { ok: boolean, missing: string[] } {
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
export function validateKycSubmission(profile: KycProfile): { ok: boolean, missing: string[] } {
  const missing: string[] = [];
  if (!profile.fullLegalName && !profile.businessName) {
    missing.push('name');
  }
  if (!profile.country) {
    missing.push('country');
=======
<<<<<<< HEAD
export function validateKycSubmission(profile: KycProfile): { ok: boolean, missing: string[] } {
=======

export function validateKycSubmission(profile: KycProfile): { ok: boolean, missing: string[] } {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const missing: string[] = [];
  if (!profile.fullLegalName && !profile.businessName) {
    missing.push('name');
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  }
  
  if (!profile && profile.country) {
    missing && missing.push('country');
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
    ok: missing.length === 0
    missing
  };
}
<<<<<<< HEAD
}
=======
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

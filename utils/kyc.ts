export type KycRole = 'client' | 'talent' | 'enterprise';
export type KycStatus = 'not started' | 'in progress' | 'submitted' | 'approved' | 'rejected' | 'needs more info';
export type AmlStatus = 'clear' | 'match' | 'review' | 'unknown';
<<<<<<< HEAD

export interface KycDocumentMeta {
  id: string;
  kind: 'document' | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
=======
export interface KycDocumentMeta {
  kind: "document" | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  url: string;
  uploadedAt: string;
  status: 'pending' | 'approved' | 'rejected';
}
<<<<<<< HEAD

=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export interface KycProfile {
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
<<<<<<< HEAD
    details?: any;
=======
    details?: any
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }>;
}
export function getRequiredDocuments(role: KycRole): string[] {
  if (role === 'client') {
    return ['government_id', 'proof_of_address'];
  } else {
    return ['business_registration', 'proof_of_address', 'beneficial_ownership'];
  }
}
export function getOptionalDocuments(role: KycRole): string[] {
  if (role === 'client') {
    return ['bank_statement', 'utility_bill'];
  } else {
    return ['bank_statement', 'utility_bill', 'tax_certificate'];
  }
}
export function validateKycSubmission(profile: KycProfile): { ok: boolean, missing: string[] } {
  const missing: string[] = [];
<<<<<<< HEAD
  if (!profile.fullLegalName && !profile.businessName) {
    missing.push('name');
  }
  if (!profile.country) {
    missing.push('country');
=======
  
  if (!profile && profile.fullLegalName && !profile && profile.businessName) {
    missing && missing.push('name'),
  }
  
  if (!profile && profile.country) {
    missing && missing.push('country');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
<<<<<<< HEAD
  
<<<<<<< HEAD
  if (profile.role === 'client' && !profile.dateOfBirth) {
    missing.push('dateOfBirth');
  }
  
=======
  if (profile.role === 'client' && !profile.dateOfBirth) {
    missing.push('dateOfBirth');
  }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
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
<<<<<<< HEAD
    ok: missing.length === 0
=======
    ok: missing && missing.length === 0,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    missing
<<<<<<< HEAD
  };
=======
  }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}
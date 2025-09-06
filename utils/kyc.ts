export type KycRole = 'client' | 'talent' | 'enterprise';
export type KycStatus = | 'not started' | 'in progress' | 'submitted' | 'approved' | 'rejected' | 'needs more info';
export type AmlStatus = 'clear' | 'match' | 'review' | 'unknown';
kind: "document" | 'government id back' | 'selfie' | 'business registration' | 'tax certificate' | 'proof of address' `) 
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
    details?: any,
  }>;
}

export function getRequiredDocuments(role: KycRole): string[] {
  if (role === 'individual') {
    return ['government_id', 'proof_of_address'];
  } else {
    return ['business_registration', 'proof_of_address', 'beneficial_ownership'];
  }
}

export function getOptionalDocuments(role: KycRole): string[] {
  if (role === 'individual') {
    return ['bank_statement', 'utility_bill'];
  } else {
    return ['bank_statement', 'utility_bill', 'tax_certificate'];
  }
}

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
  }
  
  return {
    ok: missing && missing.length === 0,
    missing
  };
}

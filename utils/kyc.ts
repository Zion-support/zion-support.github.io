export type KycRole = 'individual' | 'enterprise';

export interface KycDocumentMeta {
  id: string;
  kind: string;
  filename: string;
  uploadedAt: string;
}

export interface KycProfile {
  userId: string;
  role: KycRole;
  fullLegalName?: string;
  businessName?: string;
  businessRegistrationNumber?: string;
  documents: any[];
  status: 'in_progress' | 'submitted' | 'approved' | 'rejected';
  amlStatus: 'unknown' | 'clear' | 'match' | 'review';
  createdAt: string;
  lastUpdatedAt: string;
  auditTrail: Array<{
    at: string;
    by: string;
    action: string;
    details?: any;
  }>;
  flags?: string[];
  riskScore?: number;
  country?: string;
  dateOfBirth?: string;
}

export function getRequiredDocuments(role: KycRole): string[] {
  if (role === 'individual') {
    return ['government_id', 'proof_of_address'];
  } else {
    return ['business_registration', 'tax_certificate', 'proof_of_address'];
  }
}

export function getOptionalDocuments(role: KycRole): string[] {
  if (role === 'individual') {
    return ['bank_statement', 'utility_bill'];
  } else {
    return ['bank_statement', 'financial_statements'];
  }
}

export function validateKycSubmission(profile: KycProfile): { ok: boolean; missing: string[] } {
  const missing: string[] = [];
  
  if (!profile.fullLegalName && !profile.businessName) {
    missing.push('name');
  }
  
  if (profile.role === 'enterprise' && !profile.businessRegistrationNumber) {
    missing.push('business_registration_number');
  }
  
  if (!profile.documents || profile.documents.length === 0) {
    missing.push('documents');
  }
  
  return { ok: missing.length === 0, missing };
}
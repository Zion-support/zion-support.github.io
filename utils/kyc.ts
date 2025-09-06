// KYC utility types and functions
export type KycRole = 'individual' | 'business' | 'enterprise';
export type KycStatus = 'in_progress' | 'pending_review' | 'approved' | 'rejected' | 'needs_more_info';
export type AmlStatus = 'unknown' | 'passed' | 'failed' | 'pending';

export interface KycProfile {
  userId: string;
  role: KycRole;
  fullLegalName?: string;
  businessName?: string;
  businessRegistrationNumber?: string;
  documents: KycDocumentMeta[];
  status: KycStatus;
  amlStatus: AmlStatus;
  createdAt: string;
  lastUpdatedAt: string;
  auditTrail: Array<{
    at: string;
    by: string;
    action: string;
  }>;
}

export interface KycDocumentMeta {
  id: string;
  kind: string;
  filename: string;
  uploadedAt: string;
}

export function getRequiredDocuments(role: KycRole): string[] {
  const base = ['government_id'];
  if (role === 'business' || role === 'enterprise') {
    return [...base, 'business_registration', 'tax_certificate'];
  }
  return base;
}

export function getOptionalDocuments(role: KycRole): string[] {
  const base = ['utility_bill', 'bank_statement'];
  if (role === 'business' || role === 'enterprise') {
    return [...base, 'financial_statements', 'compliance_certificate'];
  }
  return base;
}

export function validateKycSubmission(profile: KycProfile): { ok: boolean; missing: string[] } {
  const missing: string[] = [];
  
  if (!profile.fullLegalName && !profile.businessName) {
    missing.push('name');
  }
  
  if (profile.role === 'business' || profile.role === 'enterprise') {
    if (!profile.businessName) missing.push('businessName');
    if (!profile.businessRegistrationNumber) missing.push('businessRegistrationNumber');
  }
  
  return {
    ok: missing.length === 0,
    missing
  };
}
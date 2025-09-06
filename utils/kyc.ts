export interface KycProfile {
  userId: string;
  role: 'individual' | 'business';
  fullLegalName?: string;
  businessName?: string;
  businessRegistrationNumber?: string;
  documents: KycDocumentMeta[];
  status: 'in_progress' | 'submitted' | 'approved' | 'rejected';
  amlStatus: 'unknown' | 'passed' | 'failed' | 'pending';
  flags?: string[];
  riskScore?: number;
  createdAt: string;
  lastUpdatedAt: string;
  auditTrail: Array<{
    at: string;
    by: string;
    action: string;
    details?: any;
  }>;
}

export interface KycDocumentMeta {
  id: string;
  kind: string;
  filename: string;
  uploadedAt: string;
}

export function getRequiredDocuments(role: string): string[] {
  const base = ['government_id', 'proof_of_address'];
  if (role === 'business') {
    return [...base, 'business_registration', 'tax_certificate'];
  }
  return base;
}

export function getOptionalDocuments(role: string): string[] {
  const base = ['bank_statement', 'utility_bill'];
  if (role === 'business') {
    return [...base, 'articles_of_incorporation', 'financial_statements'];
  }
  return base;
}

export function loadKycData(): Record<string, KycProfile> {
  // Mock implementation - in a real app, this would load from a database
  return {};
}

export function saveKycData(data: Record<string, KycProfile>): void {
  // Mock implementation - in a real app, this would save to a database
  console.log('Saving KYC data:', Object.keys(data).length, 'profiles');
}
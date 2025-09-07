// KYC (Know Your Customer) utilities
export interface KycProfile {
  userId: string;
  role: 'individual' | 'business';
  fullLegalName?: string;
  businessName?: string;
  businessRegistrationNumber?: string;
  documents: KycDocumentMeta[];
  status: 'in_progress' | 'submitted' | 'approved' | 'rejected';
  amlStatus: 'unknown' | 'pending' | 'passed' | 'failed';
  flags?: string[];
  riskScore?: number;
  createdAt: string;
  lastUpdatedAt: string;
  auditTrail: Array<{
    at: string;
    by: string;
    action: string;
    details?: Record<string, any>;
  }>;
}

export interface KycDocumentMeta {
  id: string;
  kind: string;
  filename: string;
  uploadedAt: string;
}

export interface KycDocumentType {
  kind: string;
  name: string;
  required: boolean;
  description: string;
  acceptedFormats: string[];
  maxSizeMB: number;
}

const DOCUMENT_TYPES: Record<string, KycDocumentType[]> = {
  individual: [
    {
      kind: 'government_id',
      name: 'Government ID',
      required: true,
      description: 'Driver\'s license, passport, or state ID',
      acceptedFormats: ['jpg', 'jpeg', 'png', 'pdf'],
      maxSizeMB: 10
    },
    {
      kind: 'proof_of_address',
      name: 'Proof of Address',
      required: true,
      description: 'Utility bill, bank statement, or lease agreement',
      acceptedFormats: ['jpg', 'jpeg', 'png', 'pdf'],
      maxSizeMB: 10
    },
    {
      kind: 'selfie',
      name: 'Selfie',
      required: true,
      description: 'Photo of yourself holding your ID',
      acceptedFormats: ['jpg', 'jpeg', 'png'],
      maxSizeMB: 5
    }
  ],
  business: [
    {
      kind: 'business_registration',
      name: 'Business Registration',
      required: true,
      description: 'Certificate of incorporation or business license',
      acceptedFormats: ['pdf', 'jpg', 'jpeg', 'png'],
      maxSizeMB: 10
    },
    {
      kind: 'tax_id',
      name: 'Tax ID Document',
      required: true,
      description: 'EIN letter or tax registration document',
      acceptedFormats: ['pdf', 'jpg', 'jpeg', 'png'],
      maxSizeMB: 10
    },
    {
      kind: 'authorized_representative_id',
      name: 'Authorized Representative ID',
      required: true,
      description: 'Government ID of the authorized representative',
      acceptedFormats: ['jpg', 'jpeg', 'png', 'pdf'],
      maxSizeMB: 10
    },
    {
      kind: 'proof_of_business_address',
      name: 'Proof of Business Address',
      required: true,
      description: 'Utility bill or lease agreement for business address',
      acceptedFormats: ['jpg', 'jpeg', 'png', 'pdf'],
      maxSizeMB: 10
    }
  ]
};

export function getRequiredDocuments(role: string): KycDocumentType[] {
  return DOCUMENT_TYPES[role]?.filter(doc => doc.required) || [];
}

export function getOptionalDocuments(role: string): KycDocumentType[] {
  return DOCUMENT_TYPES[role]?.filter(doc => !doc.required) || [];
}

export function getAllDocumentTypes(role: string): KycDocumentType[] {
  return DOCUMENT_TYPES[role] || [];
}

export function validateDocumentType(role: string, kind: string): boolean {
  const documentTypes = getAllDocumentTypes(role);
  return documentTypes.some(doc => doc.kind === kind);
}

export function getDocumentTypeInfo(role: string, kind: string): KycDocumentType | null {
  const documentTypes = getAllDocumentTypes(role);
  return documentTypes.find(doc => doc.kind === kind) || null;
}

export function validateDocumentFile(filename: string, role: string, kind: string): {
  valid: boolean;
  error?: string;
} {
  const docType = getDocumentTypeInfo(role, kind);
  if (!docType) {
    return { valid: false, error: 'Invalid document type' };
  }

  const extension = filename.split('.').pop()?.toLowerCase();
  if (!extension || !docType.acceptedFormats.includes(extension)) {
    return { 
      valid: false, 
      error: `Invalid file format. Accepted formats: ${docType.acceptedFormats.join(', ')}` 
    };
  }

  return { valid: true };
}

export function isKycComplete(profile: KycProfile): boolean {
  const requiredDocs = getRequiredDocuments(profile.role);
  const uploadedKinds = profile.documents.map(doc => doc.kind);
  
  return requiredDocs.every(doc => uploadedKinds.includes(doc.kind));
}

export function getKycProgress(profile: KycProfile): {
  completed: number;
  total: number;
  percentage: number;
} {
  const requiredDocs = getRequiredDocuments(profile.role);
  const uploadedKinds = profile.documents.map(doc => doc.kind);
  const completed = requiredDocs.filter(doc => uploadedKinds.includes(doc.kind)).length;
  
  return {
    completed,
    total: requiredDocs.length,
    percentage: Math.round((completed / requiredDocs.length) * 100)
  };
}

export function getMissingDocuments(profile: KycProfile): KycDocumentType[] {
  const requiredDocs = getRequiredDocuments(profile.role);
  const uploadedKinds = profile.documents.map(doc => doc.kind);
  
  return requiredDocs.filter(doc => !uploadedKinds.includes(doc.kind));
}

export function calculateRiskScore(profile: KycProfile): number {
  let score = 0;
  
  // Base score
  score += 10;
  
  // Role-based risk
  if (profile.role === 'business') {
    score += 20;
  }
  
  // Document completeness
  const progress = getKycProgress(profile);
  if (progress.percentage < 100) {
    score += 30;
  }
  
  // Flags
  if (profile.flags) {
    if (profile.flags.includes('aml_alert')) score += 50;
    if (profile.flags.includes('fraud_risk')) score += 30;
    if (profile.flags.includes('duplicate_ip')) score += 20;
  }
  
  return Math.min(score, 100);
}

export function getRiskLevel(score: number): 'low' | 'medium' | 'high' | 'critical' {
  if (score >= 80) return 'critical';
  if (score >= 60) return 'high';
  if (score >= 30) return 'medium';
  return 'low';
}
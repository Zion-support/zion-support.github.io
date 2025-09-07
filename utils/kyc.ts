export type KycRole = 'client' | 'talent' | 'enterprise';
export type KycStatus = 'not started' | 'in progress' | 'submitted' | 'approved' | 'rejected' | 'needs more info';
export type AmlStatus = 'clear' | 'match' | 'review' | 'unknown';

export type DocumentKind = 
  | 'government id front' 
  | 'government id back' 
  | 'selfie' 
  | 'business registration' 
  | 'tax certificate' 
  | 'proof of address';

export interface KycDocument {
  kind: DocumentKind;
  url: string;
  uploadedAt: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface KycProfile {
  role: KycRole;
  status: KycStatus;
  amlStatus: AmlStatus;
  documents: KycDocument[];
  submittedAt?: string;
  reviewedAt?: string;
}

export function getRequiredDocuments(role: KycRole): DocumentKind[] {
  const base: DocumentKind[] = ['government id front', 'government id back', 'selfie'];
  
  switch (role) {
    case 'enterprise':
      return [...base, 'business registration', 'tax certificate', 'proof of address'];
    case 'client':
    case 'talent':
      return base;
    default:
      return base;
  }
}

export function checkMissingDocuments(profile: KycProfile): string[] {
  const required = getRequiredDocuments(profile.role);
  const uploadedKinds = new Set(profile.documents.map(d => d.kind));
  const missing: string[] = [];
  
  for (const req of required) {
    if (!uploadedKinds.has(req)) {
      missing.push(`document:${req}`);
    }
  }
  
  return missing;
}
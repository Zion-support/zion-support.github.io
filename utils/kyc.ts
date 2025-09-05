export type KycRole = 'client' | 'talent' | 'enterprise',

export type KycStatus =
  | 'not_started'
  | 'in_progress'
  | 'submitted'
  | 'approved'
  | 'rejected'
  | 'needs_more_info',

export type AmlStatus = 'clear' | 'match' | 'review' | 'unknown',

<<<<<<< HEAD
export interface KycDocumentMeta {
  id: string,
=======
export interface KycDocumentMeta {_id: string;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  kind:
    | 'government_id_front'
    | 'government_id_back'
    | 'selfie'
    | 'business_registration'
    | 'tax_certificate'
    | 'proof_of_address'
<<<<<<< HEAD
    | 'academic_certificate',
  filename: string,
  url?: string,
  checksumSha256?: string,
  uploadedAt: string, // ISO
}

export interface KycProfile {
  userId: string,
  role: KycRole,
  fullLegalName?: string,
  dateOfBirth?: string, // ISO
  country?: string,
  businessName?: string,
  businessRegistrationNumber?: string,
  documents: KycDocumentMeta[],
  status: KycStatus,
  amlStatus: AmlStatus,
  riskScore?: number, // 0-100
  flags?: string[], // e.g., ["mismatch","duplicate_ip"]
  lastUpdatedAt: string, // ISO
  createdAt: string, // ISO
  auditTrail: Array<{ at: string, by: string, action: string, details?: Record<string unknown> }>
}

export function getRequiredDocuments(role: KycRole): Array<KycDocumentMeta['kind']> {
  if (role === 'client') {
    return ['government_id_frontgovernment_id_backselfie']
  }
  if (role === 'enterprise') {
    return ['government_id_frontgovernment_id_backselfiebusiness_registrationtax_certificate']
  }
  return ['government_id_frontgovernment_id_back'], // talent
}

export function getOptionalDocuments(role: KycRole): Array<KycDocumentMeta['kind']> {
  if (role === 'talent') {
    return ['academic_certificate']
  }
  return ['proof_of_address']
}

export function canShowVerifiedBadge(profile?: KycProfile): boolean {
  return !!profile && profile.status === 'approved' && profile.amlStatus !== 'match'
}

export function getBadgeLabels(profile?: KycProfile): string[] {
  if (!profile) return [],
  const labels: string[] = [],
  if (profile.status === 'approved') labels.push('Verified Identity'),
  if (profile.role === 'enterprise' && profile.status === 'approved') labels.push('Business Verified'),
  return labels
}

export function validateKycSubmission(profile: Partial<KycProfile>): { ok: boolean, missing: string[] } {
  const missing: string[] = [],
  if (!profile.userId) missing.push('userId'),
  if (!profile.role) missing.push('role'),
  const required = profile.role ? getRequiredDocuments(profile.role) : [],
  const uploadedKinds = new Set((profile.documents || []).map((d) => d.kind)),
=======
    | 'academic_certificate';
  filename: string;
  url?: string;
  checksumSha256?: string;
  uploadedAt: string; // ISO}

export interface KycProfile {_userId: string;
  role: KycRole;
  fullLegalName?: string;
  dateOfBirth?: string; // ISO
  country?: string;
  businessName?: string;
  businessRegistrationNumber?: string;
  documents: KycDocumentMeta[];
  status: KycStatus;
  amlStatus: AmlStatus;
  riskScore?: number; // 0-100
  flags?: string[]; // e.g., _["mismatch", _"duplicate_ip"]
  lastUpdatedAt: string; // ISO
  createdAt: string; // ISO
  auditTrail: Array<{ at: string; by: string; action: string; details?: Record<string, _unknown>}>;
}

export function getRequiredDocuments(_role: KycRole): Array<KycDocumentMeta['kind']> {_if (role === 'client') {
    return ['government_id_front', _'government_id_back', _'selfie'];}
  if (role === 'enterprise') {_return ['government_id_front', _'government_id_back', _'selfie', _'business_registration', _'tax_certificate'];}
  return ['government_id_front', 'government_id_back']; // talent
}

export function getOptionalDocuments(_role: KycRole): Array<KycDocumentMeta['kind']> {_if (role === 'talent') {
    return ['academic_certificate'];}
  return ['proof_of_address'];
}

export function canShowVerifiedBadge(_profile?: KycProfile): boolean {_return !!profile && profile.status === 'approved' && profile.amlStatus !== 'match';}

export function getBadgeLabels(_profile?: KycProfile): string[] {_if (!profile) return [];
  const labels: string[] = [];
  if (profile.status === 'approved') labels.push('Verified Identity');
  if (profile.role === 'enterprise' && profile.status === 'approved') labels.push('Business Verified');
  return labels;}

export function validateKycSubmission(_profile: Partial<KycProfile>): {_ok: boolean; missing: string[]} {_const missing: string[] = [];
  if (!profile.userId) missing.push('userId');
  if (!profile.role) missing.push('role');
  const _required = profile.role ? getRequiredDocuments(profile.role) : [];
  const _uploadedKinds = new Set((profile.documents || []).map(_(d) => d.kind));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  for (const req of required) {
    if (!uploadedKinds.has(req)) missing.push(`document:${req}`)
  }
<<<<<<< HEAD
  if (profile.role === 'client' || profile.role === 'enterprise') {
    if (!profile.fullLegalName) missing.push('fullLegalName')
  }
  if (profile.role === 'enterprise') {
    if (!profile.businessName) missing.push('businessName'),
    if (!profile.businessRegistrationNumber) missing.push('businessRegistrationNumber')
  }
  return { ok: missing.length === 0, missing }
=======
  if (profile.role === 'client' || profile.role === 'enterprise') {_if (!profile.fullLegalName) missing.push('fullLegalName');}
  if (profile.role === 'enterprise') {_if (!profile.businessName) missing.push('businessName');
    if (!profile.businessRegistrationNumber) missing.push('businessRegistrationNumber');}
  return {_ok: missing.length === 0, _missing};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
export type KycRole = $2;
export type KycStatus = $2;
export type AmlStatus = $2;
export interface KycDocumentMeta {
  id: string,
  kind:
    | 'government_id_front'
    | 'government_id_back'
    | 'selfie'
    | 'business_registration'
    | 'tax_certificate'
    | 'proof_of_address'
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
  auditTrail: Array<{ at: string, by: string, action: string, details?: Record<string, unknown> }>
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
  if (role = $2;
  const labels: string[] = [],
  if (profile.status === 'approved') labels.push($2);
  if (profile.role === 'enterprise' && profile.status === 'approved') labels.push($2);
  return labels
}

export function validateKycSubmission(profile: Partial<KycProfile>): { ok: boolean, missing: string[] } {
  const missing: string[] = [],
  if (!profile.userId) missing.push($2);
  if (!profile.role) missing.push($2);
  const required = $2;
  const uploadedKinds = $2;
  for (const req of required) {
    if (!uploadedKinds.has(req)) missing.push(`document:${req}`)
  }
  if (profile.role === 'client' || profile.role === 'enterprise') {
    if (!profile.fullLegalName) missing.push('fullLegalName')
  }
  if (profile.role === 'enterprise') {
    if (!profile.businessName) missing.push($2);
    if (!profile.businessRegistrationNumber) missing.push('businessRegistrationNumber')
  }
  return { ok: missing.length === 0, missing }
}
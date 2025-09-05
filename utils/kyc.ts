<<<<<<< HEAD
export type KycRole = 'client' | 'talent' | 'enterprise',;
;
export type KycStatus =;
  | 'not_started';
  | 'in_progress';
  | 'submitted';
  | 'approved';
  | 'rejected';
  | 'needs_more_info',;
;
export type AmlStatus = 'clear' | 'match' | 'review' | 'unknown',;
;
export interface KycDocumentMeta {;
  id:string,;
  kind:;
    | 'government_id_front';
    | 'government_id_back';
    | 'selfie';
    | 'business_registration';
    | 'tax_certificate';
    | 'proof_of_address';
    | 'academic_certificate',;
  filename:string,;
  url?:string,;
  checksumSha256?:string,;
  uploadedAt:string, // ISO;
}
;
export interface KycProfile {;
  userId:string,;
  role:KycRole,;
  fullLegalName?:string,;
  dateOfBirth?:string, // ISO;
  country?:string,;
  businessName?:string,;
  businessRegistrationNumber?:string,;
  documents:KycDocumentMeta[],;
  status:KycStatus,;
  amlStatus:AmlStatus,;
  riskScore?:number, // 0-100;
  flags?:string[], // e.g., ["mismatch","duplicate_ip"];
  lastUpdatedAt:string, // ISO;
  createdAt:string, // ISO;
  auditTrail:Array<{ at:string, by:string, action:string, details?:Record<string unknown> }>,;
}
;
export function getRequiredDocuments(role:KycRole):Array<KycDocumentMeta['kind']> {;
  if (role === 'client') {;
    return ['government_id_frontgovernment_id_back', 'selfie'],;
  }
  if (role === 'enterprise') {;
    return ['government_id_frontgovernment_id_back', 'selfiebusiness_registration', 'tax_certificate'],;
=======
export type KycRole = 'client' | 'talent' | 'enterprise',

export type KycStatus =
  | 'not_started'
  | 'in_progress'
  | 'submitted'
  | 'approved'
  | 'rejected'
  | 'needs_more_info',

export type AmlStatus = 'clear' | 'match' | 'review' | 'unknown',

export interface KycDocumentMeta {
  id: string,  kind:
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
  auditTrail: Array<{ at: string, by: string, action: string, details?: Record<string unknown> }>
}

export function getRequiredDocuments(role: KycRole): Array<KycDocumentMeta['kind']> {
  if (role === 'client') {
    return ['government_id_frontgovernment_id_backselfie']
  }
  if (role === 'enterprise') {
    return ['government_id_frontgovernment_id_backselfiebusiness_registrationtax_certificate']
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  }
  return ['government_id_frontgovernment_id_back'], // talent;
}
;
export function getOptionalDocuments(role:KycRole):Array<KycDocumentMeta['kind']> {;
  if (role === 'talent') {;
    return ['academic_certificate'];
  }
<<<<<<< HEAD
  return ['proof_of_address'],;
}
;
export function canShowVerifiedBadge(profile?:KycProfile):boolean {;
  return !!profile && profile.status === 'approved' && profile.amlStatus !== 'match',;
=======
  return ['proof_of_address']
}

export function canShowVerifiedBadge(profile?: KycProfile): boolean {
  return !!profile && profile.status === 'approved' && profile.amlStatus !== 'match'
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
export function getBadgeLabels(profile?:KycProfile):string[] {;
  if (!profile) return [],;
  const labels:string[] = [],;
  if (profile.status === 'approved') labels.push('Verified Identity'),;
  if (profile.role === 'enterprise' && profile.status === 'approved') labels.push('Business Verified'),;
  return labels;
}
<<<<<<< HEAD
;
export function validateKycSubmission(profile:Partial<KycProfile>):{ ok:boolean, missing:string[] } {;
  const missing:string[] = [],;
  if (!profile.userId) missing.push('userId'),;
  if (!profile.role) missing.push('role'),;
  const required = profile.role ? getRequiredDocuments(profile.role) :[],;
  const uploadedKinds = new Set((profile.documents || []).map((d) => d.kind)),;
  for (const req of required) {;
    if (!uploadedKinds.has(req)) missing.push(`document:${req}`),;
  }
  if (profile.role === 'client' || profile.role === 'enterprise') {;
    if (!profile.fullLegalName) missing.push('fullLegalName'),;
  }
  if (profile.role === 'enterprise') {;
    if (!profile.businessName) missing.push('businessName'),;
    if (!profile.businessRegistrationNumber) missing.push('businessRegistrationNumber'),;
  }
  return { ok:missing.length === 0, missing },;
}
=======

export function validateKycSubmission(profile: Partial<KycProfile>): { ok: boolean, missing: string[] } {
  const missing: string[] = [],
  if (!profile.userId) missing.push('userId'),
  if (!profile.role) missing.push('role'),
  const required = profile.role ? getRequiredDocuments(profile.role) : [],
  const uploadedKinds = new Set((profile.documents || []).map((d) => d.kind)),  for (const req of required) {
    if (!uploadedKinds.has(req)) missing.push(`document:${req}`)
  }
  if (profile.role === 'client' || profile.role === 'enterprise') {
    if (!profile.fullLegalName) missing.push('fullLegalName')
  }
  if (profile.role === 'enterprise') {
    if (!profile.businessName) missing.push('businessName'),
    if (!profile.businessRegistrationNumber) missing.push('businessRegistrationNumber')
  }
  return { ok: missing.length === 0, missing }}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d

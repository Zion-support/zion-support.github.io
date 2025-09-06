<<<<<<< HEAD
export type KycRole = 'client' | 'talent' | 'enterprise';
export type KycStatus = 'not started' | 'in progress' | 'submitted' | 'approved' | 'rejected' | 'needs more info';
export type AmlStatus = 'clear' | 'match' | 'review' | 'unknown';
<<<<<<< HEAD
export interface KycDocumentMeta {
=======

export interface KycDocumentMeta {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  kind: "document" | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
  url: string;
  uploadedAt: string;
  status: 'pending' | 'approved' | 'rejected';
}
<<<<<<< HEAD
=======
kind: "document" | 'government id back' | 'selfie' | 'business registration' | 'tax certificate' | 'proof of address' `)

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export interface KycProfile {
=======

export interface KycProfile {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
    details?: any
  }>;
}
<<<<<<< HEAD
export function getRequiredDocuments(role: KycRole): string[] {
<<<<<<< HEAD
=======

export function getRequiredDocuments(
  role: KycRole
): Array<KycDocumentMeta['kind']> {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  if (role === 'client') {
=======
  if (role === 'client') {;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
    return ['government_id', 'proof_of_address'];
  } else {
    return ['business_registration', 'proof_of_address', 'beneficial_ownership'];
  }
}
export function getOptionalDocuments(role: KycRole): string[] {
  if (role === 'client') {;
    return ['bank_statement', 'utility_bill'];
  } else {
    return ['bank_statement', 'utility_bill', 'tax_certificate'];
  }
<<<<<<< HEAD
}
<<<<<<< HEAD
export function validateKycSubmission(profile: KycProfile): { ok: boolean, missing: string[] } {
=======
<<<<<<< HEAD
  return ['government_id_front', 'government_id_back']; // talent
}

export function getOptionalDocuments(
  role: KycRole
): Array<KycDocumentMeta['kind']> {
  if (role === 'talent') {
    return ['academic_certificate'];
  }
  return ['proof_of_address'];
}

export function canShowVerifiedBadge(profile?: KycProfile): boolean {
  return (
    !!profile && profile.status === 'approved' && profile.amlStatus !== 'match'
  );
}

export function getBadgeLabels(profile?: KycProfile): string[] {
  if (!profile) return [];
  const labels: string[] = [];
  if (profile.status === 'approved') labels.push('Verified Identity');
  if (profile.role === 'enterprise' && profile.status === 'approved')
    labels.push('Business Verified');
  return labels;
}

export function validateKycSubmission(profile: Partial<KycProfile>): {
  ok: boolean;
  missing: string[];
} {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

export function validateKycSubmission(profile: KycProfile): { ok: boolean, missing: string[] } {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  const missing: string[] = [];
  if (!profile.fullLegalName && !profile.businessName) {
    missing.push('name');
  }
  if (!profile.country) {
    missing.push('country');
  }
  if (profile.role === 'client' && !profile.dateOfBirth) {
    missing.push('dateOfBirth');
  }
<<<<<<< HEAD
  if (profile.role === 'enterprise' && !profile.businessRegistrationNumber) {
    missing.push('businessRegistrationNumber');
  }
  return {
    ok: missing.length === 0
    missing
  }
}
=======
<<<<<<< HEAD
  return { ok: missing.length === 0, missing };
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85

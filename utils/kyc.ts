
export type KycRole = 'client' | 'talent' | 'enterprise';

export interface KycDocumentMeta {
	kind: 'document' | 'government_id_back' | 'selfie' | 'business_registration' | 'tax_certificate' | 'proof_of_address';
	url: string;
	uploaded_at: string;
	status: 'pending' | 'approved' | 'rejected';
}

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
		details?: any;
	}>;
}

export function getRequiredDocuments(role: KycRole): string[] {
	if (role === 'client' || role === 'talent') {
		return ['government_id', 'proof_of_address'];
	}
	return ['business_registration', 'proof_of_address', 'beneficial_ownership'];
}

export function getOptionalDocuments(role: KycRole): string[] {
	if (role === 'enterprise') {
		return ['bank_statement', 'utility_bill', 'tax_certificate'];
	}
	return ['bank_statement', 'utility_bill'];
}

export function validateKycSubmission(profile: KycProfile): { ok: boolean; missing: string[] } {
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
	if (profile.role === 'enterprise' && !profile.businessRegistrationNumber) {
		missing.push('businessRegistrationNumber');
	}
	return { ok: missing.length === 0, missing };
}

export function getBadgeLabels(profile?: KycProfile): string[] {
	if (!profile) return [];
	const labels: string[] = [];
	if (profile.status === 'approved') labels.push('KYC Verified');
	if (profile.amlStatus === 'clear') labels.push('AML Clear');
	if (profile.role === 'enterprise') labels.push('Business Verified');
	return labels;
}

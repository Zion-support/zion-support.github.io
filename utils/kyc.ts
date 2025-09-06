<<<<<<< HEAD
export type KycRole = 'client' | 'talent' | 'enterprise';
export type KycStatus = | 'not started' | 'in progress' | 'submitted' | 'approved' | 'rejected' | 'needs more info';
export type AmlStatus = 'clear' | 'match' | 'review' | 'unknown';
kind: "document" | 'government id back' | 'selfie' | 'business registration' | 'tax certificate' | 'proof of address' `) 

export interface KycProfile {
  userId: string;
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
  flags?: string[]; // e.g., ["mismatch","duplicate_ip"]
  lastUpdatedAt: string; // ISO
  createdAt: string; // ISO
  auditTrail: Array<{
    at: string;
    by: string;
    action: string;
    details?: Record<string, unknown>;
  }>;

export function getRequiredDocuments(
  role: KycRole
): Array<KycDocumentMeta['kind']> {
  if (role === 'client') {
    return ['government_id_front', 'government_id_back', 'selfie'];
  }
  if (role === 'enterprise') {
    return [
      'government_id_front',
      'government_id_back',
      'selfie',
      'business_registration',
      'tax_certificate',
    ];
  }
  return ['government_id_front', 'government_id_back']; // talent

export function getOptionalDocuments(
  role: KycRole
): Array<KycDocumentMeta['kind']> {
  if (role === 'talent') {
    return ['academic_certificate'];
  }
  return ['proof_of_address'];

export function canShowVerifiedBadge(profile?: KycProfile): boolean {
  return (
    !!profile && profile.status === 'approved' && profile.amlStatus !== 'match'
  );

export function getBadgeLabels(profile?: KycProfile): string[] {
  if (!profile) return [];
  const labels: string[] = [];
  if (profile.status === 'approved') labels.push('Verified Identity');
  if (profile.role === 'enterprise' && profile.status === 'approved')
    labels.push('Business Verified');
  return labels;

export function validateKycSubmission(profile: Partial<KycProfile>): {
  ok: boolean;
  missing: string[];
} {
  const missing: string[] = [];
  if (!profile.userId) missing.push('userId');
  if (!profile.role) missing.push('role');
  const required = profile.role ? getRequiredDocuments(profile.role) : [];
  const uploadedKinds = new Set((profile.documents || []).map(d => d.kind));
  `);
  }
  if (profile.role === 'client' || profile.role === 'enterprise') {
    if (!profile.fullLegalName) missing.push('fullLegalName');
  }
  if (profile.role === 'enterprise') {
    if (!profile.businessName) missing.push('businessName');
    if (!profile.businessRegistrationNumber)
      missing.push('businessRegistrationNumber');
  }
  return { ok: missing.length === 0, missing };
=======
// KYC (Know Your Customer) utilities
export interface KycProfile {
  userId: string;
  role: 'client' | 'talent' | 'both';
  fullLegalName: string;
  businessName?: string;
  businessRegistrationNumber?: string;
  documents: KycDocument[];
  status: 'in_progress' | 'pending_review' | 'approved' | 'rejected' | 'expired';
  submittedAt?: string;
  reviewedAt?: string;
  expiresAt?: string;
  reviewerId?: string;
  rejectionReason?: string;
  notes?: string;
}

export interface KycDocument {
  id: string;
  type: 'passport' | 'drivers_license' | 'national_id' | 'business_license' | 'tax_certificate' | 'bank_statement' | 'utility_bill';
  name: string;
  fileUrl: string;
  fileSize: number;
  mimeType: string;
  uploadedAt: string;
  status: 'pending' | 'approved' | 'rejected';
  rejectionReason?: string;
  verifiedAt?: string;
  verifiedBy?: string;
}

export interface KycRequirements {
  role: 'client' | 'talent' | 'both';
  requiredDocuments: KycDocument['type'][];
  optionalDocuments: KycDocument['type'][];
  minAge?: number;
  maxAge?: number;
  allowedCountries: string[];
  restrictedCountries: string[];
  businessRequirements?: {
    minRevenue?: number;
    requiredYears?: number;
    allowedIndustries?: string[];
    restrictedIndustries?: string[];
  };
}

export interface KycVerificationResult {
  isValid: boolean;
  score: number; // 0-100
  issues: string[];
  recommendations: string[];
  nextSteps: string[];
}

class KycManager {
  private profiles: Map<string, KycProfile> = new Map();
  private requirements: Map<string, KycRequirements> = new Map();

  constructor() {
    this.initializeDefaultRequirements();
  }

  private initializeDefaultRequirements(): void {
    // Client requirements
    this.requirements.set('client', {
      role: 'client',
      requiredDocuments: ['passport', 'national_id', 'business_license'],
      optionalDocuments: ['drivers_license', 'tax_certificate', 'bank_statement'],
      minAge: 18,
      maxAge: 100,
      allowedCountries: ['US', 'CA', 'GB', 'AU', 'DE', 'FR', 'IT', 'ES', 'NL', 'SE', 'NO', 'DK', 'FI'],
      restrictedCountries: ['IR', 'KP', 'SY', 'CU'],
      businessRequirements: {
        minRevenue: 10000,
        requiredYears: 1,
        allowedIndustries: ['technology', 'consulting', 'finance', 'healthcare', 'education'],
        restrictedIndustries: ['gambling', 'adult', 'weapons', 'drugs']
      }
    });

    // Talent requirements
    this.requirements.set('talent', {
      role: 'talent',
      requiredDocuments: ['passport', 'national_id'],
      optionalDocuments: ['drivers_license', 'utility_bill', 'bank_statement'],
      minAge: 18,
      maxAge: 100,
      allowedCountries: ['US', 'CA', 'GB', 'AU', 'DE', 'FR', 'IT', 'ES', 'NL', 'SE', 'NO', 'DK', 'FI'],
      restrictedCountries: ['IR', 'KP', 'SY', 'CU']
    });

    // Both roles
    this.requirements.set('both', {
      role: 'both',
      requiredDocuments: ['passport', 'national_id', 'business_license'],
      optionalDocuments: ['drivers_license', 'tax_certificate', 'bank_statement', 'utility_bill'],
      minAge: 18,
      maxAge: 100,
      allowedCountries: ['US', 'CA', 'GB', 'AU', 'DE', 'FR', 'IT', 'ES', 'NL', 'SE', 'NO', 'DK', 'FI'],
      restrictedCountries: ['IR', 'KP', 'SY', 'CU'],
      businessRequirements: {
        minRevenue: 10000,
        requiredYears: 1,
        allowedIndustries: ['technology', 'consulting', 'finance', 'healthcare', 'education'],
        restrictedIndustries: ['gambling', 'adult', 'weapons', 'drugs']
      }
    });
  }

  // Profile methods
  async createProfile(userId: string, role: KycProfile['role'], fullLegalName: string): Promise<KycProfile> {
    const profile: KycProfile = {
      userId,
      role,
      fullLegalName,
      documents: [],
      status: 'in_progress',
      submittedAt: new Date().toISOString()
    };

    this.profiles.set(userId, profile);
    return profile;
  }

  async getProfile(userId: string): Promise<KycProfile | null> {
    return this.profiles.get(userId) || null;
  }

  async updateProfile(userId: string, updates: Partial<KycProfile>): Promise<KycProfile | null> {
    const profile = this.profiles.get(userId);
    if (!profile) return null;

    const updatedProfile = { ...profile, ...updates };
    this.profiles.set(userId, updatedProfile);
    return updatedProfile;
  }

  async deleteProfile(userId: string): Promise<boolean> {
    return this.profiles.delete(userId);
  }

  // Document methods
  async addDocument(userId: string, document: Omit<KycDocument, 'id' | 'uploadedAt'>): Promise<KycDocument | null> {
    const profile = this.profiles.get(userId);
    if (!profile) return null;

    const newDocument: KycDocument = {
      ...document,
      id: `doc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      uploadedAt: new Date().toISOString()
    };

    profile.documents.push(newDocument);
    this.profiles.set(userId, profile);
    return newDocument;
  }

  async updateDocument(userId: string, documentId: string, updates: Partial<KycDocument>): Promise<KycDocument | null> {
    const profile = this.profiles.get(userId);
    if (!profile) return null;

    const documentIndex = profile.documents.findIndex(doc => doc.id === documentId);
    if (documentIndex === -1) return null;

    profile.documents[documentIndex] = { ...profile.documents[documentIndex], ...updates };
    this.profiles.set(userId, profile);
    return profile.documents[documentIndex];
  }

  async removeDocument(userId: string, documentId: string): Promise<boolean> {
    const profile = this.profiles.get(userId);
    if (!profile) return false;

    const documentIndex = profile.documents.findIndex(doc => doc.id === documentId);
    if (documentIndex === -1) return false;

    profile.documents.splice(documentIndex, 1);
    this.profiles.set(userId, profile);
    return true;
  }

  // Verification methods
  async verifyProfile(userId: string): Promise<KycVerificationResult> {
    const profile = this.profiles.get(userId);
    if (!profile) {
      return {
        isValid: false,
        score: 0,
        issues: ['Profile not found'],
        recommendations: ['Create a KYC profile first'],
        nextSteps: ['Submit required documents']
      };
    }

    const requirements = this.requirements.get(profile.role);
    if (!requirements) {
      return {
        isValid: false,
        score: 0,
        issues: ['Invalid role'],
        recommendations: ['Contact support'],
        nextSteps: ['Update profile role']
      };
    }

    const issues: string[] = [];
    const recommendations: string[] = [];
    const nextSteps: string[] = [];
    let score = 0;

    // Check required documents
    const submittedTypes = profile.documents.map(doc => doc.type);
    const missingRequired = requirements.requiredDocuments.filter(type => !submittedTypes.includes(type));
    
    if (missingRequired.length > 0) {
      issues.push(`Missing required documents: ${missingRequired.join(', ')}`);
      nextSteps.push('Upload missing required documents');
    } else {
      score += 40;
    }

    // Check document status
    const pendingDocs = profile.documents.filter(doc => doc.status === 'pending');
    const rejectedDocs = profile.documents.filter(doc => doc.status === 'rejected');
    
    if (rejectedDocs.length > 0) {
      issues.push(`${rejectedDocs.length} document(s) were rejected`);
      nextSteps.push('Review and resubmit rejected documents');
    }

    if (pendingDocs.length > 0) {
      recommendations.push(`${pendingDocs.length} document(s) are pending review`);
    }

    // Check business requirements for clients
    if (profile.role === 'client' && requirements.businessRequirements) {
      if (!profile.businessName) {
        issues.push('Business name is required for clients');
        nextSteps.push('Provide business name');
      } else {
        score += 20;
      }

      if (!profile.businessRegistrationNumber) {
        issues.push('Business registration number is required for clients');
        nextSteps.push('Provide business registration number');
      } else {
        score += 20;
      }
    }

    // Check profile completeness
    if (profile.fullLegalName) {
      score += 20;
    } else {
      issues.push('Full legal name is required');
      nextSteps.push('Provide full legal name');
    }

    const isValid = issues.length === 0 && score >= 80;

    if (isValid) {
      recommendations.push('Profile is ready for review');
      nextSteps.push('Submit for final review');
    }

    return {
      isValid,
      score,
      issues,
      recommendations,
      nextSteps
    };
  }

  // Status methods
  async submitForReview(userId: string): Promise<boolean> {
    const profile = this.profiles.get(userId);
    if (!profile) return false;

    const verification = await this.verifyProfile(userId);
    if (!verification.isValid) return false;

    profile.status = 'pending_review';
    profile.submittedAt = new Date().toISOString();
    this.profiles.set(userId, profile);
    return true;
  }

  async approveProfile(userId: string, reviewerId: string, notes?: string): Promise<boolean> {
    const profile = this.profiles.get(userId);
    if (!profile) return false;

    profile.status = 'approved';
    profile.reviewedAt = new Date().toISOString();
    profile.reviewerId = reviewerId;
    profile.notes = notes;
    profile.expiresAt = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(); // 1 year
    this.profiles.set(userId, profile);
    return true;
  }

  async rejectProfile(userId: string, reviewerId: string, rejectionReason: string, notes?: string): Promise<boolean> {
    const profile = this.profiles.get(userId);
    if (!profile) return false;

    profile.status = 'rejected';
    profile.reviewedAt = new Date().toISOString();
    profile.reviewerId = reviewerId;
    profile.rejectionReason = rejectionReason;
    profile.notes = notes;
    this.profiles.set(userId, profile);
    return true;
  }

  // Utility methods
  async getRequirements(role: KycProfile['role']): Promise<KycRequirements | null> {
    return this.requirements.get(role) || null;
  }

  async getAllProfiles(): Promise<KycProfile[]> {
    return Array.from(this.profiles.values());
  }

  async getProfilesByStatus(status: KycProfile['status']): Promise<KycProfile[]> {
    return Array.from(this.profiles.values()).filter(profile => profile.status === status);
  }

  async clearAll(): Promise<void> {
    this.profiles.clear();
  }
}

// Singleton instance
export const kycManager = new KycManager();

// Utility functions
export function createKycDocument(
  type: KycDocument['type'],
  name: string,
  fileUrl: string,
  fileSize: number,
  mimeType: string
): Omit<KycDocument, 'id' | 'uploadedAt'> {
  return {
    type,
    name,
    fileUrl,
    fileSize,
    mimeType,
    status: 'pending'
  };
}

export function generateKycDocumentId(): string {
  return `doc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function isKycProfileComplete(profile: KycProfile): boolean {
  return profile.status === 'approved' && 
         profile.documents.length > 0 && 
         profile.fullLegalName.length > 0;
}

export function isKycProfileExpired(profile: KycProfile): boolean {
  if (!profile.expiresAt) return false;
  return new Date(profile.expiresAt) < new Date();
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

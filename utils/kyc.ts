export type KycRole = 'client' | 'talent' | 'enterprise';
export type KycStatus = 'not started' | 'in progress' | 'submitted' | 'approved' | 'rejected' | 'needs more info';

export interface KycProfile {
  id: string;
  userId: string;
  role: KycRole;
  status: KycStatus;
  documents: KycDocument[];
  verification: KycVerification;
  createdAt: string;
  updatedAt: string;
}

export interface KycDocument {
  id: string;
  type: 'passport' | 'drivers_license' | 'utility_bill' | 'bank_statement' | 'business_license';
  url: string;
  status: 'pending' | 'approved' | 'rejected';
  uploadedAt: string;
}

export interface KycVerification {
  identity: boolean;
  address: boolean;
  business: boolean;
  aml: boolean;
}

export function createKycProfile(userId: string, role: KycRole): KycProfile {
  return {
    id: `kyc_${Date.now()}`,
    userId,
    role,
    status: 'not started',
    documents: [],
    verification: {
      identity: false,
      address: false,
      business: false,
      aml: false
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

export function updateKycStatus(profile: KycProfile, status: KycStatus): KycProfile {
  return {
    ...profile,
    status,
    updatedAt: new Date().toISOString()
  };
}
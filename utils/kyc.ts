export interface KycProfile {
  id: string;
  userId: string;
  status: 'pending' | 'submitted' | 'approved' | 'rejected' | 'needs_more_info';
  personalInfo: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    nationality: string;
  };
  documents: {
    idType: 'passport' | 'drivers_license' | 'national_id';
    idNumber: string;
    idImageUrl?: string;
    proofOfAddressUrl?: string;
  };
  auditTrail: Array<{
    at: string;
    by: string;
    action: string;
    details?: any;
  }>;
  createdAt: string;
  lastUpdatedAt: string;
}
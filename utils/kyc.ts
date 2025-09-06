export interface KycProfile {
  userId: string;
  status: 'draft' | 'submitted' | 'approved' | 'rejected' | 'needs_more_info';
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
  };
  identityDocuments: {
    documentType: 'passport' | 'drivers_license' | 'national_id';
    documentNumber: string;
    documentImage: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  createdAt: string;
  lastUpdatedAt: string;
  auditTrail: Array<{
    at: string;
    by: string;
    action: string;
    details?: any;
  }>;
}
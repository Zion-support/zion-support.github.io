export interface KycProfile {
  id: string;
  userId: string;
  status: 'submitted' | 'approved' | 'rejected' | 'needs_more_info';
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  documents: {
    idFront?: string;
    idBack?: string;
    selfie?: string;
  };
  submittedAt: string;
  lastUpdatedAt: string;
  auditTrail: Array<{
    at: string;
    by: string;
    action: string;
    details?: any;
  }>;
}
<<<<<<< HEAD
// Marketplace types
export interface Offer {
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  id: string;
  createdAtIso: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
  scopeSummary: string;
  paymentTerms: PaymentTerms;
<<<<<<< HEAD
  agreementUrl?: string;
  status: 'SENT' | 'CONFIRMED' | 'CHANGES_REQUESTED' | 'DECLINED';
  changeRequestNote?: string;
  projectId?: string;
}
export interface PaymentTerms {
  type: 'hourly' | 'fixed' | 'milestone';
  amount?: number;
  currency?: string;
  milestones?: Array<{
    title: string;
    amount: number;
    dueDateIso: string;
  }>;
}
export interface Project {
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  id: string;
  title: string;
  summary: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
<<<<<<< HEAD
  status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
  timeline: any[];
  documents: ProjectDocument[];
  notes: ProjectNote[];
}
export interface ProjectDocument {
  id: string;
  name: string;
  url?: string;
  uploadedAtIso: string;
}
export interface ProjectNote {
  id: string;
  authorId: string;
  authorRole: string;
  content: string;
  createdAtIso: string;
}
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

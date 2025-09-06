



<<<<<<< HEAD
=======
export interface Offer {;
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
// Marketplace types
export interface Offer {

export interface Offer {;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  id: string;
  createdAtIso: string;
  client_id: string;
  talent_slug: string;
  startDateIso: string;

<<<<<<< HEAD
  scopeSummary: string;
  paymentTerms: PaymentTerms;




=======


  scopeSummary: string;
  paymentTerms: PaymentTerms;
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

export interface PaymentTerms {;
  type: 'hourly' | 'fixed' | 'milestone';
  amount?: number;
  currency?: string;
  milestones?: Array<{
    title: string;
    amount: number;
    dueDateIso: string;
  }>;
}

export interface Project {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  id: string;
  title: string;
  summary: string;
  client_id: string;
  talent_slug: string;
  startDateIso: string;
<<<<<<< HEAD




=======
  status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
  timeline: any[];
  documents: ProjectDocument[];
  notes: ProjectNote[];
}
export interface ProjectDocument {

export interface ProjectDocument {;
  id: string;
  name: string;
  url?: string;
  uploadedAtIso: string;
}
export interface ProjectNote {

export interface ProjectNote {;
  id: string;
  authorId: string;
  authorRole: string;
  content: string;
  createdAtIso: string;
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


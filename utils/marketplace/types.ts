



<<<<<<< HEAD
// Marketplace types
export interface Offer {

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export interface Offer {;

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  id: string;
  createdAtIso: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;

<<<<<<< HEAD


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
=======
  scopeSummary: string;
  paymentTerms: PaymentTerms;




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======




>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


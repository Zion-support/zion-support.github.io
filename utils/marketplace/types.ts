<<<<<<< HEAD
<<<<<<< HEAD


export interface Offer {;

=======




=======
// Marketplace types
<<<<<<< HEAD
export interface Offer {
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
export interface Offer {;
=======

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  id: string;
  createdAtIso: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
<<<<<<< HEAD

  scopeSummary: string;
  paymentTerms: PaymentTerms;

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  id: string;
  title: string;
  summary: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
  status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
  timeline: any[];
  documents: ProjectDocument[];
  notes: ProjectNote[];
}
export interface ProjectDocument {
=======

<<<<<<< HEAD
export interface ProjectDocument {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  id: string;
  name: string;
  url?: string;
  uploadedAtIso: string;
}
<<<<<<< HEAD

=======
<<<<<<< HEAD
export interface ProjectNote {
=======

export interface ProjectNote {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  id: string;
  authorId: string;
  authorRole: string;
  content: string;
  createdAtIso: string;
}
=======
<<<<<<< HEAD



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


export interface Offer {;

=======




=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
// Marketplace types
export interface Offer {

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export interface Offer {;

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id: string;
  title: string;
  summary: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
  timeline: any[];
  documents: ProjectDocument[];
  notes: ProjectNote[];
}
export interface ProjectDocument {

export interface ProjectDocument {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id: string;
  name: string;
  url?: string;
  uploadedAtIso: string;
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export interface ProjectNote {

export interface ProjectNote {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  id: string;
  authorId: string;
  authorRole: string;
  content: string;
  createdAtIso: string;
}

<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

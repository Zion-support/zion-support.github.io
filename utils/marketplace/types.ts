<<<<<<< HEAD

// Marketplace types


=======




=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
export interface Offer {;


<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  id: string;
  createdAtIso: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;

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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

export interface ProjectNote {;
  id: string;
  authorId: string;
  authorRole: string;
  content: string;
  createdAtIso: string;
}


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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


=======





>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

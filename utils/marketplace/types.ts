export type PaymentTermsType = $2;
export type Milestone = $2;
  title: string,
  dueDateIso?: string,
  amountUsd?: number,
  status?: "planned" | "in-progress" | "done"
},

export type PaymentTerms =
  | { type: "hourly", hourlyRateUsd: number}
  | { type: "fixed", fixedAmountUsd: number}
  | { type: "milestone", milestones: Milestone[] },

export type OfferStatus = $2;
export type Offer = $2;
  createdAtIso: string,
  clientId: string,
  talentSlug: string,
  startDateIso: string,
  scopeSummary: string,
  paymentTerms: PaymentTerms,
  agreementUrl?: string,
  status: OfferStatus,
  changeRequestNote?: string,
  projectId?: string
},

export type ProjectStatus = $2;
export type ProjectDocument = $2;
  name: string,
  url?: string,
  uploadedAtIso: string},

export type ProjectNote = $2;
  authorId: string,
  authorRole: "client" | "talent",
  content: string,
  createdAtIso: string},

export type Project = $2;
  title: string,
  summary: string,
  clientId: string,
  talentSlug: string,
  startDateIso: string,
  status: ProjectStatus,
  timeline: Milestone[],
  documents: ProjectDocument[],
  notes: ProjectNote[]
},

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
// Marketplace types
export interface Offer {

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export interface Offer {;
=======

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface Offer {;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  id: string;
  createdAtIso: string;
  client_id: string;
  talent_slug: string;
  startDateIso: string;
<<<<<<< HEAD

<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

  scopeSummary: string;
  paymentTerms: PaymentTerms;
  agreementUrl?: string;
  status: "SENT" | "CONFIRMED" | "CHANGES_REQUESTED" | "DECLINED";
  changeRequestNote?: string;
  projectId?: string;
}

export interface PaymentTerms {
  type: "hourly" | "fixed" | "milestone";
  amount?: number;
  currency?: string;
  milestones?: Array<{
    title: string;
    amount: number;
    dueDateIso: string;
  }>;
}



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  id: string;
  title: string;
  summary: string;
  client_id: string;
  talent_slug: string;
  startDateIso: string;
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";
  timeline: any[];
  documents: ProjectDocument[];
  notes: ProjectNote[];
}


export interface ProjectNote {
  id: string;
  authorId: string;
  authorRole: string;
  content: string;
  createdAtIso: string;
}

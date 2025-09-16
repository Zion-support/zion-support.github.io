

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

<<<<<<< HEAD
>>>>>>> origin/feature/merge-conflicts-and-improvements
=======
// Marketplace types
export interface Offer {

export interface Offer {;

export interface Offer {;
>>>>>>> origin/merge-pr-12271


  id: string;
  createdAtIso: string;
  client_id: string;
  talent_slug: string;
<<<<<<< HEAD
  startDateIso: string;

  scopeSummary: string;
=======
  startDateIso: string;scopeSummary: string;
>>>>>>> origin/merge-pr-12271
  paymentTerms: PaymentTerms;

  agreementUrl?: string;
<<<<<<< HEAD
  status: 'SENT' | 'CONFIRMED' | 'CHANGES_REQUESTED' | 'DECLINED';
=======
  status: "SENT" | "CONFIRMED" | "CHANGES_REQUESTED" | "DECLINED";
  changeRequestNote?: string;
  projectId?: string;
}export interface PaymentTerms  {type: "hourly" | "fixed" | "milestone";
  amount?: number;
  currency?: string;
  milestones?: Array<{title: string;
    amount: number;
    dueDateIso: string;
  }>;
}scopeSummary: string;
  paymentTerms: PaymentTerms;
  agreementUrl?: string;
  status: "SENT" | "CONFIRMED" | "CHANGES_REQUESTED" | "DECLINED";
>>>>>>> origin/merge-pr-12271
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
<<<<<<< HEAD
export interface Project {


export interface PaymentTerms {;
  type: 'hourly' | 'fixed' | 'milestone';
=======
export interface Project  {export interface PaymentTerms  {type: 'hourly' | 'fixed' | 'milestone';
>>>>>>> origin/merge-pr-12271
  amount?: number;
  currency?: string;
  milestones?: Array<{
    title: string;
    amount: number;
    dueDateIso: string;
  }>;
<<<<<<< HEAD
}
=======
}export interface Project  {scopeSummary: string;
  paymentTerms: PaymentTerms;id: string;




  scopeSummary: string;
  paymentTerms: PaymentTerms;


>>>>>>> origin/merge-pr-12271

export interface Project {;

  id: string;
  title: string;
  summary: string;
  client_id: string;
  talent_slug: string;
  startDateIso: string;

  status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
  timeline: any[];
  documents: ProjectDocument[];
  notes: ProjectNote[];
}
export interface ProjectDocument {



=======
export type PaymentTermsType = "hourly" | "fixed" | "milestone";

export type Milestone = {
  id: string;
  title: string;
  dueDateIso?: string;
  amountUsd?: number;
  status?: "planned" | "in-progress" | "done";
};

export type PaymentTerms =
  | { type: "hourly"; hourlyRateUsd: number }
  | { type: "fixed"; fixedAmountUsd: number }
  | { type: "milestone"; milestones: Milestone[] };

export type OfferStatus =
  | "SENT"
  | "CONFIRMED"
  | "CHANGES_REQUESTED"
  | "DECLINED";

export type Offer = {
  id: string;
  createdAtIso: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
  scopeSummary: string;
  paymentTerms: PaymentTerms;
  agreementUrl?: string;
  status: OfferStatus;
  changeRequestNote?: string;
  projectId?: string;
};

export type ProjectStatus = "ACTIVE" | "COMPLETED" | "ARCHIVED";

export type ProjectDocument = {
>>>>>>> origin/auto/autonomy-17186719616
  id: string;
  name: string;
  url?: string;
  uploadedAtIso: string;

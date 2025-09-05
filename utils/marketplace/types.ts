export type PaymentTermsType = "hourly" | "fixed" | "milestone",

<<<<<<< HEAD
export type Milestone = {
  id: string,
  title: string,
  dueDateIso?: string,
  amountUsd?: number,
  status?: "planned" | "in-progress" | "done"
},

export type PaymentTerms =
  | { type: "hourly", hourlyRateUsd: number }
  | { type: "fixed", fixedAmountUsd: number }
  | { type: "milestone", milestones: Milestone[] },
=======
export type Milestone = {_id: string;
  title: string;
  dueDateIso?: string;
  amountUsd?: number;
  status?: "planned" | "in-progress" | "done";};

export type PaymentTerms =
  | {_type: "hourly"; hourlyRateUsd: number}
  | {_type: "fixed"; fixedAmountUsd: number}
  | {_type: "milestone"; milestones: Milestone[]};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type OfferStatus =
  | "SENT"
  | "CONFIRMED"
  | "CHANGES_REQUESTED"
  | "DECLINED",

<<<<<<< HEAD
export type Offer = {
  id: string,
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
=======
export type Offer = {_id: string;
  createdAtIso: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
  scopeSummary: string;
  paymentTerms: PaymentTerms;
  agreementUrl?: string;
  status: OfferStatus;
  changeRequestNote?: string;
  projectId?: string;};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type ProjectStatus = "ACTIVE" | "COMPLETED" | "ARCHIVED",

<<<<<<< HEAD
export type ProjectDocument = {
  id: string,
  name: string,
  url?: string,
  uploadedAtIso: string
},

export type ProjectNote = {
  id: string,
  authorId: string,
  authorRole: "client" | "talent",
  content: string,
  createdAtIso: string
},

export type Project = {
  id: string,
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

export type MarketplaceDb = {
  offers: Offer[],
  projects: Project[]
},
=======
export type ProjectDocument = {_id: string;
  name: string;
  url?: string;
  uploadedAtIso: string;};

export type ProjectNote = {_id: string;
  authorId: string;
  authorRole: "client" | "talent";
  content: string;
  createdAtIso: string;};

export type Project = {_id: string;
  title: string;
  summary: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
  status: ProjectStatus;
  timeline: Milestone[];
  documents: ProjectDocument[];
  notes: ProjectNote[];};

export type MarketplaceDb = {_offers: Offer[];
  projects: Project[];};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

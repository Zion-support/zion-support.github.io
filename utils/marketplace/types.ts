export type PaymentTermsType = "hourly" | "fixed" | "milestone";

export type Milestone = {_id: string;
  title: string;
  dueDateIso?: string;
  amountUsd?: number;
  status?: "planned" | "in-progress" | "done";};

export type PaymentTerms =
  | {_type: "hourly"; hourlyRateUsd: number}
  | {_type: "fixed"; fixedAmountUsd: number}
  | {_type: "milestone"; milestones: Milestone[]};

export type OfferStatus =
  | "SENT"
  | "CONFIRMED"
  | "CHANGES_REQUESTED"
  | "DECLINED";

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

export type ProjectStatus = "ACTIVE" | "COMPLETED" | "ARCHIVED";

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
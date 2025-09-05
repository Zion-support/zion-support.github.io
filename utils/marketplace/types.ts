export type PaymentTermsType = &quot;hourly&quot; | &quot;fixed&quot; | &quot;milestone&quot;;

export type Milestone = {
  id: string;
  title: string;
  dueDateIso?: string;
  amountUsd?: number;
  status?: &quot;planned&quot; | &quot;in-progress&quot; | &quot;done&quot;;
};

export type PaymentTerms =
  | { type: &quot;hourly&quot;; hourlyRateUsd: number }
  | { type: &quot;fixed&quot;; fixedAmountUsd: number }
  | { type: &quot;milestone&quot;; milestones: Milestone[] };

export type OfferStatus =
  | &quot;SENT&quot;
  | &quot;CONFIRMED&quot;
  | &quot;CHANGES_REQUESTED&quot;
  | &quot;DECLINED&quot;;

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

export type ProjectStatus = &quot;ACTIVE&quot; | &quot;COMPLETED&quot; | &quot;ARCHIVED&quot;;

export type ProjectDocument = {
  id: string;
  name: string;
  url?: string;
  uploadedAtIso: string;
};

export type ProjectNote = {
  id: string;
  authorId: string;
  authorRole: &quot;client&quot; | &quot;talent&quot;;
  content: string;
  createdAtIso: string;
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
  status: ProjectStatus;
  timeline: Milestone[];
  documents: ProjectDocument[];
  notes: ProjectNote[];
};

export type MarketplaceDb = {
  offers: Offer[];
  projects: Project[];
};
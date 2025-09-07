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

export type MarketplaceDb = $2;
  projects: Project[]
},
export interface Offer {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  createdAtIso: string
  client_id: string
  talent_slug: string
  startDateIso: string
  scopeSummary: string
  paymentTerms: PaymentTerms
  agreementUrl?: string
  status: 'SENT' | 'CONFIRMED' | 'CHANGES_REQUESTED' | 'DECLINED''
  changeRequestNote?: string
  projectId?: string
}
export interface PaymentTerms {
  // TODO: Add properties
}
  // TODO: Add properties
}
  type: 'hourly' | 'fixed' | 'milestone''
  amount?: number
  currency?: string
  milestones?: Array<{
  // TODO: Add properties
}
  // TODO: Add properties
}
    title: string
    amount: number
    dueDateIso: string
  }>
}
export interface Project {;
export interface PaymentTerms {
  // TODO: Add properties
}
  // TODO: Add properties
}
  type: 'hourly' | 'fixed' | 'milestone''
  amount?: number
  currency?: string
  milestones?: Array<{
  // TODO: Add properties
}
  // TODO: Add properties
}
    title: string
    amount: number
    dueDateIso: string
  }>
}
export interface Project {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  title: string
  summary: string
  client_id: string
  talent_slug: string
  startDateIso: string
  status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED''
  timeline: any[]
  documents: ProjectDocument[]
  notes: ProjectNote[]
}
export interface ProjectDocument {;
export type PaymentTermsType = "hourly" | "fixed" | "milestone";";";
export type Milestone = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  title: string
  dueDateIso?: string
  amountUsd?: number
  status?: "planned" | "in-progress" | "done""
}
export type PaymentTerms =;
  | { type: "hourly"; hourlyRateUsd: number }"
  | { type: "fixed"; fixedAmountUsd: number }"
  | { type: "milestone"; milestones: Milestone[] }";
export type OfferStatus =;
  | "SENT""
  | "CONFIRMED""
  | "CHANGES_REQUESTED""
  | "DECLINED";";
export type Offer = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  createdAtIso: string
  clientId: string
  talentSlug: string
  startDateIso: string
  scopeSummary: string
  paymentTerms: PaymentTerms
  agreementUrl?: string
  status: OfferStatus
  changeRequestNote?: string
  projectId?: string
}
export type ProjectStatus = "ACTIVE" | "COMPLETED" | "ARCHIVED";";";
export type ProjectDocument = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  name: string
  url?: string
  uploadedAtIso: string
}
  id: string
  authorId: string
  authorRole: string
  content: string
  createdAtIso: string
}
export interface ProjectNote {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  authorId: string
  authorRole: string
  content: string
  createdAtIso: string
}
}
export type ProjectNote = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  authorId: string
  authorRole: "client" | "talent""
  content: string
  createdAtIso: string
}
export type Project = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  title: string
  summary: string
  clientId: string
  talentSlug: string
  startDateIso: string
  status: ProjectStatus
  timeline: Milestone[]
  documents: ProjectDocument[]
  notes: ProjectNote[]
}
export type MarketplaceDb = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  offers: Offer[]
  projects: Project[]
}
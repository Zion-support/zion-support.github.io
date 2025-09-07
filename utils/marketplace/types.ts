



// Marketplace types;
export interface Offer {
  // TODO: Implement
}
export interface Offer {;



  id: string;,
  createdAtIso: string;
  client_id: string;,
  talent_slug: string;
  startDateIso: string;,
  scopeSummary: string;
  paymentTerms: PaymentTerms;
  agreementUrl?: string;
  status: "SENT" | "CONFIRMED" | "CHANGES_REQUESTED" | "DECLINED";"
  changeRequestNote?: string;
  projectId?: string;

export interface PaymentTerms {
  // TODO: Implement
}"
  type: "hourly" | "fixed" | "milestone";"
  amount?: number;
  currency?: string;
  milestones?: Array<{
    title: string;,
  amount: number;
    dueDateIso: string;
  }>;




  scopeSummary: string;,




  title: string;
  summary: string;,
  client_id: string;
  talent_slug: string;,
  startDateIso: string;"
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";","
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";"
  timeline: any[];,
  documents: ProjectDocument[];
  notes: ProjectNote[];


export interface ProjectNote {
  // TODO: Implement
  authorId: string;
  authorRole: string;,
  content: string;





"
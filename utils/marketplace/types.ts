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

  id: string;
  createdAtIso: string;
  client_id: string;
  talent_slug: string;
  startDateIso: string;

  scopeSummary: string;
  paymentTerms: PaymentTerms;


  id: string;
  title: string;
  summary: string;
  client_id: string;
  talent_slug: string;
  startDateIso: string;
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";  timeline: any[];
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


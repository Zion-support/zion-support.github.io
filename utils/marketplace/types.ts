
export interface Offer {;


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


export interface ProjectNote {;
  id: string;
  authorId: string;
  authorRole: string;
  content: string;
  createdAtIso: string;
}

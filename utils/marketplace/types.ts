



// Marketplace types
export interface Offer {

export interface Offer {;

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






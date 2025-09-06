

<<<<<<< HEAD


// Marketplace types
export interface Offer {

export interface Offer {;

export interface Offer {;


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  id: string;
  createdAtIso: string;
  client_id: string;
  talent_slug: string;
  startDateIso: string;

  scopeSummary: string;
  paymentTerms: PaymentTerms;
  agreementUrl?: string;
  status: "SENT" | "CONFIRMED" | "CHANGES_REQUESTED" | "DECLINED";
  changeRequestNote?: string;
  projectId?: string;
}

export interface PaymentTerms {
  type: "hourly" | "fixed" | "milestone";
  amount?: number;
  currency?: string;
  milestones?: Array<{
    title: string;
    amount: number;
    dueDateIso: string;
  }>;
}

<<<<<<< HEAD



  scopeSummary: string;
  paymentTerms: PaymentTerms;




=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  id: string;
  title: string;
  summary: string;
  client_id: string;
  talent_slug: string;
  startDateIso: string;
<<<<<<< HEAD
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";




  timeline: any[];
=======
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";  timeline: any[];
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  documents: ProjectDocument[];
  notes: ProjectNote[];
}

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export interface ProjectNote {
  id: string;
  authorId: string;
  authorRole: string;
  content: string;
  createdAtIso: string;
}

<<<<<<< HEAD




=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

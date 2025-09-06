




export interface Offer {;


export interface Offer {;



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
export interface Project {

export interface PaymentTerms {;
  type: 'hourly' | 'fixed' | 'milestone';
  amount?: number;
  currency?: string;
  milestones?: Array<{
    title: string;
    amount: number;
    dueDateIso: string;
  }>;
}

export interface Project {;



  id: string;
  title: string;
  summary: string;
  client_id: string;
  talent_slug: string;
  startDateIso: string;

ursor/automate-test-improve-and-merge-code-646c
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";




  status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
>>>>>>> main
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


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> main
ursor/automate-test-improve-and-merge-code-646c

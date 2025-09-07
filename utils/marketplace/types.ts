
;
export interface Offer  {export interface Offer  {// Marketplace types;
export interface Offer  {export interface Offer  {export interface Offer  {id: string;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c


// Marketplace types
export interface Offer {

export interface Offer {;

export interface Offer {;


<<<<<<< HEAD
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  id: string;
  createdAtIso: string;
  client_id: string;
  talent_slug: string;
  startDateIso: string;scopeSummary: string;
  paymentTerms: PaymentTerms;
  agreementUrl?: string;
  status: "SENT" | "CONFIRMED" | "CHANGES_REQUESTED" | "DECLINED";
  changeRequestNote?: string;
  projectId?: string;
}export interface PaymentTerms  {type: "hourly" | "fixed" | "milestone";
  amount?: number;
  currency?: string;
  milestones?: Array<{title: string;
    amount: number;
    dueDateIso: string;
  }>;
}scopeSummary: string;
  paymentTerms: PaymentTerms;
  agreementUrl?: string;
  status: "SENT" | "CONFIRMED" | "CHANGES_REQUESTED" | "DECLINED";
  changeRequestNote?: string;
  projectId?: string;
}
export interface PaymentTerms  {type: "hourly" | "fixed" | "milestone";
  amount?: number;
  currency?: string;
  milestones?: Array<{title: string;
    amount: number;
    dueDateIso: string;
  }>;
}
export interface Project  {export interface PaymentTerms  {type: 'hourly' | 'fixed' | 'milestone';
  amount?: number;
  currency?: string;
  milestones?: Array<{title: string;
    amount: number;
    dueDateIso: string;
  }>;
}export interface Project  {scopeSummary: string;
  paymentTerms: PaymentTerms;id: string;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c



  scopeSummary: string;
  paymentTerms: PaymentTerms;




<<<<<<< HEAD
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  id: string;
  title: string;
  summary: string;
  client_id: string;
  talent_slug: string;
<<<<<<< HEAD
  startDateIso: string;
<<<<<<< HEAD
=======
  startDateIso: string;ursor/automate-test-improve-and-merge-code-646c;
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED';timeline: any[];
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";  timeline: any[];
  documents: ProjectDocument[];
  notes: ProjectNote[];
}export interface ProjectNote  {export interface ProjectNote  {id: string;
  startDateIso: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";




  timeline: any[];
<<<<<<< HEAD
=======
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";  timeline: any[];
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  documents: ProjectDocument[];
  notes: ProjectNote[];
}

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
export interface ProjectNote {
  id: string;
  authorId: string;
  authorRole: string;
  content: string;
  createdAtIso: string;
}ursor/automate-test-improve-and-merge-code-646c;
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c




<<<<<<< HEAD
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

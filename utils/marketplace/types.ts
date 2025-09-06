<<<<<<< HEAD




<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
export interface Offer {;
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
// Marketplace types
export interface Offer {

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export interface Offer {;
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface Offer {;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
export interface Offer {;

>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
  id: string;
  createdAtIso: string;
  client_id: string;
  talent_slug: string;
  startDateIso: string;
<<<<<<< HEAD

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


=======


  scopeSummary: string;
  paymentTerms: PaymentTerms;
  agreementUrl?: string;
  status: 'SENT' | 'CONFIRMED' | 'CHANGES_REQUESTED' | 'DECLINED';
  changeRequestNote?: string;
  projectId?: string;
}
export interface PaymentTerms {
  type: 'hourly' | 'fixed' | 'milestone';
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

  scopeSummary: string;
  paymentTerms: PaymentTerms;




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
  id: string;
  title: string;
  summary: string;
  client_id: string;
  talent_slug: string;
  startDateIso: string;
<<<<<<< HEAD
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD




=======
  status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
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
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b




<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
}
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88

<<<<<<< HEAD
<<<<<<< HEAD
export type PaymentTermsType = "hourly" | "fixed" | "milestone";
export type Milestone = {;
  id: string;
  title: string;
  dueDateIso?: string;
  amountUsd?: number;
  status?: "planned" | "in-progress" | "done";
};
export type PaymentTerms =;
  | { type: "hourly", hourlyRateUsd: number }
  | { type: "fixed", fixedAmountUsd: number }
  | { type: "milestone", milestones: Milestone[] };
export type OfferStatus =;
  | "SENT";
  | "CONFIRMED";
  | "CHANGES_REQUESTED";
  | "DECLINED";
export type Offer = {;
=======


<<<<<<< HEAD





// Marketplace types;
export interface Offer {};
export interface Offer {;


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======






>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  id: string;
  createdAtIso: string;
  client_id: string;
  talent_slug: string;
  startDateIso: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
<<<<<<< HEAD




>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  scopeSummary: string;
  paymentTerms: PaymentTerms;
<<<<<<< HEAD
  agreementUrl?: string;
  status: OfferStatus;
  changeRequestNote?: string;
  projectId?: string;
<<<<<<< HEAD
};
export type ProjectStatus = "ACTIVE" | "COMPLETED" | "ARCHIVED";
export type ProjectDocument = {;
  id: string;
  name: string;
  url?: string;
  uploadedAtIso: string;
};
export type ProjectNote = {;
  id: string;
  authorId: string;
  authorRole: "client" | "talent";
  content: string;
  createdAtIso: string;
};
export type Project = {;
=======
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  id: string;
  title: string;
  summary: string;
  client_id: string;
  talent_slug: string;
  startDateIso: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  status: ProjectStatus;
  timeline: Milestone[];
  documents: ProjectDocument[];
  notes: ProjectNote[];
};
export type MarketplaceDb = {;
  offers: Offer[];
  projects: Project[];
};
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD




=======
  status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
=======
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";
=======
<<<<<<< HEAD
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD




=======
  status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  timeline: any[];
=======
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";  timeline: any[];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  status: "ACTIVE" | "COMPLETED" | "CANCELLED";  timeline: any[];
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  documents: ProjectDocument[];
  notes: ProjectNote[];
}

<<<<<<< HEAD
export interface ProjectNote {
=======

export interface ProjectNote {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  id: string;
  authorId: string;
  authorRole: string;
  content: string;
  createdAtIso: string;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b




<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

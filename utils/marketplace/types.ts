

export interface Offer {;




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements

  id: string;
  createdAtIso: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;

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







>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba



  id: string;
  title: string;
  summary: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;


  id: string;
  name: string;
  url?: string;
  uploadedAtIso: string;
}

  id: string;
  authorId: string;
  authorRole: string;
  content: string;
  createdAtIso: string;
}



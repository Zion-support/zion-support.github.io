
// Marketplace data store utilities

export interface Project {

  id: string;
  title: string;
  summary: string;
  client_id: string;
  talent_slug?: string;
  startDateIso: string;
  endDateIso?: string;
  status: 'DRAFT' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED' | 'PAUSED';
  timeline: Array<{
    id: string;
    title: string,
  description: string;
  }>;
  documents: Array<{
    id: string;
    name: string;
    url: string;
  }>;
  budget?: {
    total: number;
    currency: string;
}
export interface Offer {
  id: string;
  createdAtIso: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
  scopeSummary: string;
  paymentTerms: {
    type: 'fixed' | 'hourly' | 'milestone';
    amount?: number;
    hourlyRate?: number;
    milestones?: Array<{
      title: string;
      amount: number;
    }>;
  }
}

      due_date: string,
    }>;
  }
  agreement_url?: string;
  status: 'SENT' | 'ACCEPTED' | 'REJECTED' | 'EXPIRED' | 'CANCELLED';
  expires_at?: string;
  notes?: string,
}
export interface Application {}
export interface Application {

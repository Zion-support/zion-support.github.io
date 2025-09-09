export interface Dispute {
  id: string;
  transactionId: string;
  clientId: string;
  providerId: string;
  title: string;
  description: string;
  status: DisputeStatus;
  category: 'payment' | 'quality' | 'delivery' | 'communication' | 'other';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  evidence: DisputeEvidence[];
  resolution?: DisputeResolution;
  createdAt: string;
  updatedAt: string;
  resolvedAt?: string;
}

export type DisputeStatus = 
  | 'open'
  | 'under_review'
  | 'awaiting_response'
  | 'resolved'
  | 'closed'
  | 'escalated';

export interface DisputeEvidence {
  id: string;
  type: 'image' | 'document' | 'message' | 'video' | 'audio';
  url: string;
  description?: string;
  uploadedBy: string;
  uploadedAt: string;
}

export interface DisputeResolution {
  id: string;
  decision: 'client_favor' | 'provider_favor' | 'partial_refund' | 'full_refund' | 'no_action';
  amount?: number;
  description: string;
  resolvedBy: string;
  resolvedAt: string;
  notes?: string;
}

export interface DisputeComment {
  id: string;
  disputeId: string;
  authorId: string;
  author: {
    id: string;
    name: string;
    role: 'client' | 'provider' | 'admin' | 'moderator';
  };
  content: string;
  isInternal: boolean;
  createdAt: string;
  updatedAt: string;
}
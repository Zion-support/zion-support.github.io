
export interface Dispute {
  id: string;
  orderId: string;
  userId: string;
  reason: string;
  description: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  createdAt: Date;
  updatedAt: Date;
  resolution?: string;
  resolvedAt?: Date;
}

export interface DisputeResolution {
  disputeId: string;
  resolution: string;
  resolvedBy: string;
  resolvedAt: Date;
  refundAmount?: number;
}


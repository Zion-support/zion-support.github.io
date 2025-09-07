
export interface Dispute {
  export type DisputeReason =;
  | 'Scope Disagreement';
  | 'Quality Issues';
  | 'Delivery Delay';
  | 'Payment Issue';
  | 'Communication Breakdown';
  | 'Other';

export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved';

export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',export type DisputeReason =;
  | 'Scope Disagreement';
  | 'Quality Issues';
  | 'Delivery Delay';
  | 'Payment Issue';
  | 'Communication Breakdown';

export type DisputeAttachment = {id: string;
  orderId: string;
  userId: string;
  reason: string;
  description: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  createdAt: Date;
  updatedAt: Date;
  resolution?: string;
  resolvedAt?: Date;}
}
}

export interface DisputeResolution  {disputeId: string;
  resolution: string;
  resolvedBy: string;
  resolvedAt: Date;}
  refundAmount?: number;}
}role: 'admin' | 'client' | 'talent';
}
}
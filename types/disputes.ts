<<<<<<< HEAD
export type DisputeReason =
  | 'Scope Disagreement'
  | 'Quality Issues'
  | 'Delivery Delay'
  | 'Payment Issue'
  | 'Communication Breakdown'
  | 'Other';
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',;
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved';

export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',


export type DisputeReason =;
  | 'Scope Disagreement';
  | 'Quality Issues';
  | 'Delivery Delay';
  | 'Payment Issue';
  | 'Communication Breakdown';
export type DisputeAttachment = {
=======
export interface Dispute {
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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

<<<<<<< HEAD

  role: 'admin' | 'client' | 'talent';
}
};
=======
export interface DisputeResolution {
  disputeId: string;
  resolution: string;
  resolvedBy: string;
  resolvedAt: Date;
  refundAmount?: number;
}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

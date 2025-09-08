
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
<<<<<<< HEAD
export type DisputeAttachment = {  id: string;
=======
export type DisputeAttachment = {


  id: string;
>>>>>>> origin/main
  orderId: string;
  userId: string;
  reason: string;
  description: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  createdAt: Date;
  updatedAt: Date;
  resolution?: string;
  resolvedAt?: Date;

<<<<<<< HEAD
  role: 'admin' | 'client' | 'talent';
}
  path: string, // server-side storage path;
  uploadedAt: string;
  uploadedByUserId: string;
};
=======

  role: 'admin' | 'client' | 'talent';

};
>>>>>>> origin/main

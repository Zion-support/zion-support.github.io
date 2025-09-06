
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',
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


  | 'Other',;

export type DisputeAttachment = {
  id: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  path: string; // server-side storage path
  uploadedAt: string;
  uploadedByUserId: string;
}
  path: string, // server-side storage path;
  uploadedAt: string;
  uploadedByUserId: string;
};
export type DisputeMessage = {
  id: string;
  authorUserId: string;
  authorRole: 'client' | 'talent' | 'admin';
  body: string;
  createdAt: string;
}
export type DisputeCase = {
  id: string; // case id like DSP-YYYYMMDD-XXXX
  projectId: string;
  entityType?: 'milestone' | 'contract' | 'thread';
  entityId?: string;
};
export type DisputeCase = {
  id: string, // case id like DSP-YYYYMMDD-XXXX;
  projectId: string;
  entityType?: 'milestone' | 'contract' | 'thread',;
  entityId?: string,;
  clientUserId: string;
  talentUserId: string;
  createdAt: string;
  updatedAt: string;
| 'Other',;



  role: 'admin' | 'client' | 'talent';

};




  status: DisputeStatus;
  reason: DisputeReason;
  reasonDetails?: string;

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





};


export interface DisputeResolution {
  disputeId: string;
  resolution: string;
  resolvedBy: string;
  resolvedAt: Date;
  refundAmount?: number;
}


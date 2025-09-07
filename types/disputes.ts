
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





export type DisputeReason =
  | 'Scope Disagreement
  | 'Quality Issues
  | 'Delivery Delay
  | 'Payment Issue
  | 'Communication Breakdown
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
  | 'Other';
export type DisputeAttachment = {;
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
export type DisputeMessage = {;
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
};
export type DisputeCase = {;
  id: string, // case id like DSP-YYYYMMDD-XXXX;
  projectId: string;
  entityType?: 'milestone' | 'contract' | 'thread';
  entityId?: string;
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
export type DisputeAttachment = {
  id: string;,
  orderId: string;
  userId: string;,
  reason: string;

  description: string;
  description: string;,
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  createdAt: Date;,
  updatedAt: Date;
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved';

export type DisputeReason = 
  | 'Scope Disagreement' 
  | 'Quality Issues' 
  | 'Delivery Delay' 
  | 'Payment Issue' 
  | 'Communication Breakdown' 
  | 'Other';

export interface DisputeCase {
  id: string;
  projectId: string;
  createdAt: string;
  status: DisputeStatus;
  reason: DisputeReason;
  description: string;
  resolution?: string;
}





};


export interface DisputeResolution {
  disputeId: string;
  resolution: string;
  resolvedBy: string;
  resolvedAt: Date;
  refundAmount?: number;
}

  status: DisputeStatus;
  reason: DisputeReason;
  reasonDetails?: string;
  description: string;
  attachments: DisputeAttachment[];
  messages: DisputeMessage[];
  adminNotes?: string;
  resolvedAt?: string;
  resolutionSummary?: string;
};
export type DisputeListItem = Pick<;
  DisputeCase;
  'id' | 'projectId' | 'createdAt' | 'status';
> & {;
  talentName: string;
  clientName: string;
  projectName?: string;
};
export type UserSummary = {;
  id: string;
  name: string;
  role: 'admin' | 'client' | 'talent';
};
  role: 'admin' | 'client' | 'talent';
};
export type DisputeListItem = Pick<DisputeCase, 'id' | 'projectId' | 'createdAt' | 'status'>;

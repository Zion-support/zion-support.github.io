<<<<<<< HEAD
export type DisputeStatus = $2;
export type DisputeReason = $2;
export type DisputeAttachment = $2;
  fileName: string,
  fileSize: number,
  mimeType: string,
  path: string, // server-side storage path
  uploadedAt: string,
  uploadedByUserId: string},

export type DisputeMessage = $2;
  authorUserId: string,
  authorRole: 'client' | 'talent' | 'admin',
  body: string,
  createdAt: string},

export type DisputeCase = {
  id: string, // case id like DSP-YYYYMMDD-XXXX
  projectId: string,
  entityType?: 'milestone' | 'contract' | 'thread',
  entityId?: string,
  clientUserId: string,
  talentUserId: string,
  createdAt: string,
  updatedAt: string,
  status: DisputeStatus,
  reason: DisputeReason,
  reasonDetails?: string,
  description: string,
  attachments: DisputeAttachment[],
  messages: DisputeMessage[],
  adminNotes?: string,
  resolvedAt?: string,
  resolutionSummary?: string
},

export type DisputeListItem = $2;
  'id' | 'projectId' | 'createdAt' | 'status'
> & {
  talentName: string,
  clientName: string,
  projectName?: string
},

export type UserSummary = $2;
  name: string,
  role: 'admin' | 'client' | 'talent'
},
=======
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
  talentId?: string;
  clientId?: string;
  clientUserId?: string;
  talentUserId?: string;
  projectId?: string;
  status: DisputeStatus;
  reason: DisputeReason;
  reasonDetails?: string;
  createdAt: string;
  updatedAt?: string;
  attachments?: DisputeAttachment[];
  messages?: DisputeMessage[];
  adminNotes?: string;
  resolvedAt?: string;
  resolutionSummary?: string;
  refundAmount?: number;
  resolution?: string;
}

export type DisputeListItem = Pick<DisputeCase, 'id' | 'status' | 'reason' | 'createdAt'> & {
  talentName: string;
  clientName: string;
  projectName?: string;
};

export type UserSummary = {
  id: string;
  name: string;
  email: string;
};

export interface DisputeAttachment {
  id: string;
  filename: string;
  url: string;
  uploadedAt: string;
}

export type DisputeMessage = {
  id: string;
  disputeId: string;
  senderId: string;
  senderType: 'talent' | 'client' | 'admin';
  content: string;
  timestamp: string;
  attachments?: DisputeAttachment[];
  entityType?: 'milestone' | 'contract' | 'thread';
  entityId?: string;
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

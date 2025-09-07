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

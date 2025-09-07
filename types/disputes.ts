export type DisputeStatus = $2;
export type DisputeReason = $2;
export type DisputeAttachment = $2;
  fileName: string,
  fileSize: number,
  mimeType: string,
  path: string, // server-side storage path
  uploadedAt: string,
  uploadedByUserId: string},

export interface Dispute {
  }
  export type DisputeReason =;
  | 'Scope Disagreement';'
  | 'Quality Issues';'
  | 'Delivery Delay';'
  | 'Payment Issue';'
  | 'Communication Breakdown';'
  | 'Other';'

export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved';'

export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',export type DisputeReason =;'
  | 'Scope Disagreement';'
  | 'Quality Issues';'
  | 'Delivery Delay';'
  | 'Payment Issue';'
  | 'Communication Breakdown';'

export type DisputeAttachment = {"id": string;
  }
  "orderId": string;
  "userId": string;
  "reason": string;
  "description": string;
  "status": 'open' | 'in_progress' | 'resolved' | 'closed';'
  "createdAt": Date;
  "updatedAt": Date;
  resolution?: string;
  resolvedAt?: Date;

}

export interface DisputeResolution  {"disputeId": string;
  }
  "resolution": string;
  "resolvedBy": string;
  "resolvedAt": Date;
  refundAmount?: number;
}"role": 'admin' | 'client' | 'talent';'
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

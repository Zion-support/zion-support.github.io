
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


  id: string;

  role: 'admin' | 'client' | 'talent';

};

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

  disputeId: string;
  resolution: string;
  resolvedBy: string;
  resolvedAt: Date;
  refundAmount?: number;

  role: 'admin' | 'client' | 'talent';

};


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

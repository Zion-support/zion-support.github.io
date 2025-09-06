
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
<<<<<<< HEAD


export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',





=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
export type DisputeReason =;
  | 'Scope Disagreement';
  | 'Quality Issues';
  | 'Delivery Delay';
  | 'Payment Issue';
  | 'Communication Breakdown';
<<<<<<< HEAD


  | 'Other',;

export type DisputeAttachment = {
=======
  | 'Other';
export type DisputeAttachment = {;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
  id: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
<<<<<<< HEAD
  path: string; // server-side storage path
  uploadedAt: string;
  uploadedByUserId: string;
}
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
  path: string, // server-side storage path;
  uploadedAt: string;
  uploadedByUserId: string;
};
<<<<<<< HEAD
export type DisputeMessage = {
=======
export type DisputeMessage = {;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
  id: string;
  authorUserId: string;
  authorRole: 'client' | 'talent' | 'admin';
  body: string;
  createdAt: string;
<<<<<<< HEAD
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
=======
};
export type DisputeCase = {;
  id: string, // case id like DSP-YYYYMMDD-XXXX;
  projectId: string;
  entityType?: 'milestone' | 'contract' | 'thread';
  entityId?: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
  clientUserId: string;
  talentUserId: string;
  createdAt: string;
  updatedAt: string;
<<<<<<< HEAD
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

=======
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58

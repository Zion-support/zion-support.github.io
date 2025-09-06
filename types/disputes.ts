<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved';
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',
=======

=======


=======
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',



export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',


<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export type DisputeReason =;
  | 'Scope Disagreement';
  | 'Quality Issues';
  | 'Delivery Delay';
  | 'Payment Issue';
  | 'Communication Breakdown';
<<<<<<< HEAD
<<<<<<< HEAD
  | 'Other';
export type DisputeAttachment = {;
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  | 'Other',;

=======
  | 'Other',;
export type DisputeAttachment = {;
  id: string,;
  fileName: string,;
  fileSize: number,;
  mimeType: string,;
  path: string, // server-side storage path;
  uploadedAt: string,;
  uploadedByUserId: string;
},;
export type DisputeMessage = {;
  id: string,;
  authorUserId: string,;
  authorRole: 'client' | 'talent' | 'admin',;
  body: string,;
  createdAt: string;
},;
export type DisputeCase = {;
  id: string, // case id like DSP-YYYYMMDD-XXXX;
  projectId: string,;
  entityType?: 'milestone' | 'contract' | 'thread',;
  entityId?: string,;
  clientUserId: string,;
  talentUserId: string,;
  createdAt: string,;
  updatedAt: string,;
  status: DisputeStatus,;
  reason: DisputeReason,;
  reasonDetails?: string,;
  description: string,;
  attachments: DisputeAttachment[],;
  messages: DisputeMessage[],;
  adminNotes?: string,;
  resolvedAt?: string,;
  resolutionSummary?: string;
},;
export type DisputeListItem = Pick<;
  DisputeCase,;
  'id' | 'projectId' | 'createdAt' | 'status';
> & {;
  talentName: string,;
  clientName: string,;
  projectName?: string;
},;
export type UserSummary = {;
  id: string,;
  name: string,;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export type DisputeAttachment = {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  path: string, // server-side storage path;
  uploadedAt: string;
  uploadedByUserId: string;
};
export type DisputeMessage = {;
  id: string;
  authorUserId: string;
  authorRole: 'client' | 'talent' | 'admin';
  body: string;
  createdAt: string;
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

  | 'Other',;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  role: 'admin' | 'client' | 'talent';

};


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
  role: 'admin' | 'client' | 'talent';
};
=======


  role: 'admin' | 'client' | 'talent';
}
};
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface Dispute {
  id: string;
=======
export type DisputeAttachment = {  id: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  orderId: string;
  userId: string;
  reason: string,
  description: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  createdAt: Date;
  updatedAt: Date;
  resolution?: string;
  resolvedAt?: Date;
}

<<<<<<< HEAD
export interface DisputeResolution {
  disputeId: string;
  resolution: string;
  resolvedBy: string;
  resolvedAt: Date;
  refundAmount?: number;
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
  role: 'admin' | 'client' | 'talent';
}
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

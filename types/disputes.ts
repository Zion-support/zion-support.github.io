<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======

export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export type DisputeReason =;
  | 'Scope Disagreement';
  | 'Quality Issues';
  | 'Delivery Delay';
  | 'Payment Issue';
  | 'Communication Breakdown';
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export type DisputeAttachment = {
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface Dispute {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  id: string;
<<<<<<< HEAD
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
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  id: string;
=======
export type DisputeAttachment = {  id: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  orderId: string;
  userId: string;
  reason: string;
  description: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  createdAt: Date;
  updatedAt: Date;
  resolution?: string;
  resolvedAt?: Date;
=======


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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export interface DisputeResolution {
=======
export interface DisputeResolution {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  disputeId: string;
  resolution: string;
  resolvedBy: string;
  resolvedAt: Date;
  refundAmount?: number;
<<<<<<< HEAD
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
  role: 'admin' | 'client' | 'talent';
}
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  role: 'admin' | 'client' | 'talent';

};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======




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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

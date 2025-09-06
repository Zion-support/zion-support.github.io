<<<<<<< HEAD
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
export type DisputeReason =
  | 'Scope Disagreement'
  | 'Quality Issues'
  | 'Delivery Delay'
  | 'Payment Issue'
  | 'Communication Breakdown'
  | 'Other';
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',;
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved';
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======

export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',
=======

=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
export type DisputeReason =;
  | 'Scope Disagreement';
  | 'Quality Issues';
  | 'Delivery Delay';
  | 'Payment Issue';
  | 'Communication Breakdown';

  | 'Other',;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
  status: DisputeStatus;
  reason: DisputeReason;
  reasonDetails?: string;
  description: string;
  attachments: DisputeAttachment[];
  messages: DisputeMessage[];
  adminNotes?: string;
  resolvedAt?: string;
  resolutionSummary?: string;
}
export type DisputeListItem = Pick<
  DisputeCase
  'id' | 'projectId' | 'createdAt' | 'status'
> & {
  talentName: string;
  clientName: string;
  projectName?: string;
}
  status: DisputeStatus,;
  reason: DisputeReason,;
  reasonDetails?: string,;
  description: string;
  attachments: DisputeAttachment[];
  messages: DisputeMessage[];
  adminNotes?: string,;
  resolvedAt?: string,;
  resolutionSummary?: string;
};
export type DisputeListItem = Pick<;
  DisputeCase;
  'id' | 'projectId' | 'createdAt' | 'status';
> & {;
  talentName: string;
  clientName: string;
  projectName?: string;
},;
export type UserSummary = {
  id: string;
  name: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  role: 'admin' | 'client' | 'talent';
}
};

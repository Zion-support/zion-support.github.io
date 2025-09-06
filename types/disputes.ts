<<<<<<< HEAD
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',;
=======
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved';
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
export type DisputeReason =;
  | 'Scope Disagreement';
  | 'Quality Issues';
  | 'Delivery Delay';
  | 'Payment Issue';
  | 'Communication Breakdown';
  | 'Other',;
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
=======
export type DisputeAttachment = {
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
  path: string, // server-side storage path;
  uploadedAt: string;
  uploadedByUserId: string;
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export type DisputeMessage = {
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
=======
};
export type DisputeCase = {
  id: string, // case id like DSP-YYYYMMDD-XXXX;
  projectId: string;
  entityType?: 'milestone' | 'contract' | 'thread',;
  entityId?: string,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  clientUserId: string;
  talentUserId: string;
  createdAt: string;
  updatedAt: string;
<<<<<<< HEAD
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
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export type UserSummary = {
  id: string;
  name: string;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  role: 'admin' | 'client' | 'talent';
<<<<<<< HEAD
}
=======
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

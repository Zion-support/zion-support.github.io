export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',

export type DisputeReason =
  | 'Scope Disagreement'
  | 'Quality Issues'
  | 'Delivery Delay'
  | 'Payment Issue'
  | 'Communication Breakdown'
  | 'Other',

<<<<<<< HEAD
export type DisputeAttachment = {
  id: string,
  fileName: string,
  fileSize: number,
  mimeType: string,
  path: string, // server-side storage path
  uploadedAt: string,
  uploadedByUserId: string
},

export type DisputeMessage = {
  id: string,
  authorUserId: string,
  authorRole: 'client' | 'talent' | 'admin',
  body: string,
  createdAt: string
},

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
=======
export type DisputeAttachment = {_id: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  path: string; // server-side storage path
  uploadedAt: string;
  uploadedByUserId: string;};

export type DisputeMessage = {_id: string;
  authorUserId: string;
  authorRole: 'client' | 'talent' | 'admin';
  body: string;
  createdAt: string;};

export type DisputeCase = {_id: string; // case id like DSP-YYYYMMDD-XXXX
  projectId: string;
  entityType?: 'milestone' | 'contract' | 'thread';
  entityId?: string;
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
  resolutionSummary?: string;};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type DisputeListItem = Pick<
  DisputeCase,
  'id' | 'projectId' | 'createdAt' | 'status'
<<<<<<< HEAD
> & {
  talentName: string,
  clientName: string,
  projectName?: string
},

export type UserSummary = {
  id: string,
  name: string,
  role: 'admin' | 'client' | 'talent'
},
=======
> & {_talentName: string;
  clientName: string;
  projectName?: string;};

export type UserSummary = {_id: string;
  name: string;
  role: 'admin' | 'client' | 'talent';};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

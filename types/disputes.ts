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
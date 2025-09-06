<<<<<<< HEAD
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved';
export type DisputeReason =
  | 'Scope Disagreement'
  | 'Quality Issues'
  | 'Delivery Delay'
  | 'Payment Issue'
  | 'Communication Breakdown'
  | 'Other';
export type DisputeAttachment = {
  id: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  path: string; // server-side storage path
  uploadedAt: string;
  uploadedByUserId: string;
}
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
export type UserSummary = {
  id: string;
  name: string;
=======
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',
export type DisputeReason =;
  | 'Scope Disagreement';
  | 'Quality Issues';
  | 'Delivery Delay';
  | 'Payment Issue';
  | 'Communication Breakdown';
  | 'Other',
export type DisputeAttachment = {
  id: string,
  file_name: string,
  file_size: number,
  mime_type: string,
  path: string, // server - side storage path;
  uploaded_at: string,
  uploadedByUserId: string;
},
export type DisputeMessage = {
  id: string,
  authorUserId: string,
  author_role: 'client' | 'talent' | 'admin',
  body: string,
  created_at: string;
},
export type DisputeCase = {
  id: string, // case id like DSP - YYYYMMDD - XXXX;
  project_id: string,
  entity_type?: 'milestone' | 'contract' | 'thread',
  entity_id?: string,
  clientUserId: string,
  talentUserId: string,
  created_at: string,
  updated_at: string,
  status: DisputeStatus,
  reason: DisputeReason,
  reason_details?: string,
  description: string,
  attachments: DisputeAttachment[],
  messages: DisputeMessage[],
  admin_notes?: string,
  resolved_at?: string,
  resolution_summary?: string;
},
export type DisputeListItem = Pick<;
  DisputeCase,
  'id' | 'project_id' | 'created_at' | 'status';
> & {
  talent_name: string,
  client_name: string,
  project_name?: string;
},
export type UserSummary = {
  id: string,
  name: string,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  role: 'admin' | 'client' | 'talent';
}
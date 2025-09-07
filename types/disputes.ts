export type DisputeStatus = $2;
export type DisputeReason = $2;
export type DisputeAttachment = $2;
  fileName: string,
  fileSize: number,
  mimeType: string,
  path: string, // server-side storage path
  uploadedAt: string,
  uploadedByUserId: string},


export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved';'

export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',export type DisputeReason =;'
  | 'Scope Disagreement';'
  | 'Quality Issues';'
  | 'Delivery Delay';'
  | 'Payment Issue';'
  | 'Communication Breakdown';'

export type UserSummary = $2;
  name: string,
  role: 'admin' | 'client' | 'talent'
},

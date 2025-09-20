
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
};

export type DisputeMessage = {
  id: string;
  authorUserId: string;
  authorRole: 'client' | 'talent' | 'admin';
  body: string;
  createdAt: string;
  clientUserId: string;
  talentUserId: string;
  updatedAt: string;
};

export type UserSummary = {
  id: string;
  name: string;
};
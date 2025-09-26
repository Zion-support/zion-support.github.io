export type DisputeReason =
  | 'Scope Disagreement'
  | 'Quality Issues'
  | 'Delivery Delay'
  | 'Payment Issue'
  | 'Communication Breakdown'
  | 'Other';

export interface DisputeAttachment {
  id: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
}

export interface DisputeMessage {
  id: string;
  authorUserId: string;
  authorRole: 'client' | 'talent' | 'admin';
  body: string;
  createdAt: string; // ISO
}

export interface UserSummary {
  id: string;
  name: string;
}
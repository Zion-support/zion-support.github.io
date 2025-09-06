export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved';
export type DisputeReason =
  | 'Scope Disagreement'
  | 'Quality Issues'
  | 'Delivery Delay'
  | 'Payment Issue'
  | 'Communication Breakdown'
  | 'Other';
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',;
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved';
export type DisputeReason =;
  | 'Scope Disagreement';
  | 'Quality Issues';
  | 'Delivery Delay';
  | 'Payment Issue';
  | 'Communication Breakdown';

  | 'Other',;

export type DisputeAttachment = {
  id: string;
  fileName: string;
  fileSize: number;
  mimeType: string;

export type DisputeMessage = {
  id: string;
  authorUserId: string;
  authorRole: 'client' | 'talent' | 'admin';
  body: string;
  createdAt: string;

  clientUserId: string;
  talentUserId: string;
  createdAt: string;
  updatedAt: string;

export type UserSummary = {
  id: string;
  name: string;

  role: 'admin' | 'client' | 'talent';
  role: 'admin' | 'client' | 'talent';
}
};
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

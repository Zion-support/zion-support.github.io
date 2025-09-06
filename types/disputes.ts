
<<<<<<< HEAD
=======
export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved',
=======

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

export type DisputeReason =;
  | 'Scope Disagreement';
  | 'Quality Issues';
  | 'Delivery Delay';
  | 'Payment Issue';
  | 'Communication Breakdown';

  | 'Other',;

<<<<<<< HEAD
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

=======

  role: 'admin' | 'client' | 'talent';

};


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

<<<<<<< HEAD

<<<<<<< HEAD

=======
export type MilestoneStatus = | 'Pending' | 'In Progress' | 'Submitted' | 'Approved' | 'Paid';
export type ProjectParticipantRole = 'client' | 'talent';
export type ProjectParticipants = {

export type ProjectParticipants = {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export type ProjectParticipants = {

export type ProjectParticipants = {;


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  clientUserId: string;
  talentUserId: string;
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export type Project = {  id: string;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  title: string;
  description?: string;
  due_date: string;
  amount_usd: number;
  status: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];

  updatedAt: string

}
export function isMilestoneStatus(value: string): value is MilestoneStatus {
  return (

  );export interface MilestoneAttachment {

=======

=======
  title: string;
  description?: string;
  dueDate: string;
  amountUsd: number;
  status: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];
  createdAt: string;
  updatedAt: string
}
export function isMilestoneStatus(value: string): value is MilestoneStatus {
  return (
    value === 'Pending' |
    value === 'In Progress' |
    value === 'Submitted' |
    value === 'Approved' |
    value === 'Paid'
  );export interface MilestoneAttachment {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  title: string;
  description?: string;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||;
    value === 'Paid';
  );export interface MilestoneAttachment {;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
<<<<<<< HEAD
<<<<<<< HEAD

  uploaded_at: string,

}
export interface CreateMilestoneRequest {
=======
  uploadedAt: string
}
=======
  uploadedAt: string
}
export interface CreateMilestoneRequest {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


export interface CreateMilestoneRequest {;

  title: string;
  description?: string;
}
export interface UpdateMilestoneRequest {


export interface UpdateMilestoneRequest {;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

export interface CreateMilestoneRequest {;
  title: string;
  description?: string;
  dueDate: string;
  amountUsd: number;
  attachments?: MilestoneAttachment[]
}
export interface UpdateMilestoneRequest {

export interface UpdateMilestoneRequest {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface UpdateMilestoneRequest {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  title?: string;
  description?: string;
  due_date?: string;
  amount_usd?: number;
  status?: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df





export function isOverdue(milestone: Milestone): boolean {
  if (!milestone.dueDate || milestone.status === 'COMPLETED' || milestone.status === 'PAID') {
    return false;
  }
  return new Date(milestone.dueDate) < new Date();
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}


export function getDaysUntilDue(milestone: Milestone): number | null {
  if (!milestone.dueDate) return null;
  const dueDate = new Date(milestone.dueDate);
  const now = new Date();
  const diffTime = dueDate.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

}
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
}


}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

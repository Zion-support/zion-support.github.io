<<<<<<< HEAD


export type ProjectParticipants = {

export type ProjectParticipants = {;
=======

;
  clientUserId: string;
  talentUserId: string;
}
export type Project = {  id: string;export type ProjectParticipants = {export type ProjectParticipants = {clientUserId: string;
  talentUserId: string;
export type ProjectParticipants = {

export type ProjectParticipants = {
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5


  clientUserId: string;
  talentUserId: string;
}
export type Project = {  id: string;
<<<<<<< HEAD

  title: string;
  description?: string;
=======
  title: string;
  description?: string;
  title: string;
  description?: string;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  title: string;
  description?: string;
  due_date: string;
  amount_usd: number;
  status: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];updatedAt: string;
}
export function isMilestoneStatus(value: string): value is MilestoneStatus {return ()export interface MilestoneAttachment  {value === 'Pending' ||;
    value === 'In Progress' ||;
    value === 'Submitted' ||;
    value === 'Approved' ||;
    value === 'Paid';
  )export interface MilestoneAttachment  {ursor/fix-website-loading-errors-and-merge-6662;
export function isMilestoneStatus(value: string): value is MilestoneStatus {
  return (

  );export interface MilestoneAttachment {


<<<<<<< HEAD


=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||;
    value === 'Paid';
  );export interface MilestoneAttachment {;
<<<<<<< HEAD


=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;uploaded_at: string;
}
export interface CreateMilestoneRequest  {uploaded_at: string;
}
export interface CreateMilestoneRequest  {uploadedAt: string;
}export interface CreateMilestoneRequest  {ursor/fix-website-loading-errors-and-merge-6662;
  title: string;
  description?: string;
}
export interface UpdateMilestoneRequest  {export interface UpdateMilestoneRequest  {export interface UpdateMilestoneRequest  {export interface UpdateMilestoneRequest  {ursor/fix-website-loading-errors-and-merge-6662;
  size: number;
<<<<<<< HEAD


=======
export interface CreateMilestoneRequest {
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5


export interface CreateMilestoneRequest {;

  title: string;
  description?: string;
}
export interface UpdateMilestoneRequest {
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5


export interface UpdateMilestoneRequest {;

export interface UpdateMilestoneRequest {
<<<<<<< HEAD


=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  title?: string;
  description?: string;
  due_date?: string;
  amount_usd?: number;
  status?: 'pending' | 'completed' | 'cancelled';
<<<<<<< HEAD
  attachments?: MilestoneAttachment[];


=======
  attachments?: MilestoneAttachment[];export function isOverdue(milestone: Milestone): boolean {if (!milestone.dueDate || milestone.status === 'COMPLETED' || milestone.status === 'PAID') {return false;
  }
  return new Date(milestone.dueDate) < new Date()}export function getDaysUntilDue(milestone: Milestone): number | null {if (!milestone.dueDate) return null;
  const dueDate = new Date(milestone.dueDate)const now = new Date()const diffTime = dueDate.getTime() - now.getTime()return Math.ceil(diffTime / (1000 * 60 * 60 * 24))}}
}
}}}export type Project = {id: string;
  name: string;
  participants: ProjectParticipants;
  milestones: Milestone[];
  createdAt: string;
  updatedAt: string;
}export function isMilestoneStatus(value: string): value is MilestoneStatus {return (value === 'Pending' ||;
    value === 'In Progress' ||;
    value === 'Submitted' ||;
    value === 'Approved' ||;
    value === 'Paid';
  )
  attachments?: MilestoneAttachment[];
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
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



};

export type Project = {
  id: string;
  name: string;
  participants: ProjectParticipants;
  milestones: Milestone[];
  createdAt: string;
  updatedAt: string;
};

export function isMilestoneStatus(value: string): value is MilestoneStatus {
  return (
    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||
    value === 'Paid'
  );

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5

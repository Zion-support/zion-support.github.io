
;
  clientUserId: string;
  talentUserId: string;
}
export type Project = {  id: string;export type ProjectParticipants = {export type ProjectParticipants = {clientUserId: string;
  talentUserId: string;
export type ProjectParticipants = {
export type MilestoneStatus = $2;
export type MilestoneAttachment = $2;
  type: 'link' | 'file',
  url: string,
  label?: string,
  uploadedByUserId: string,
  uploadedAt: string, // ISO date
},

export type Milestone = $2;
  title: string,
  description?: string,
  dueDate: string, // ISO date
  amountUsd: number,
  status: MilestoneStatus,
  attachments?: MilestoneAttachment[],
  submittedByUserId?: string,
  approvedByUserId?: string,
  paidAt?: string, // ISO date
  createdAt: string, // ISO date
  updatedAt: string, // ISO date
},

export type ProjectParticipantRole = $2;
export type ProjectParticipants = $2;
  talentUserId: string},



export type ProjectParticipants = {

export type ProjectParticipants = {;


  clientUserId: string;
  talentUserId: string;
}
export type Project = {  id: string;
  title: string;
  description?: string;


origin/cursor/expand-services-advertise-and-build-project-c28b
  clientUserId: string;
  talentUserId: string;

  title: string;
  description?: string;

  title: string;
  description?: string;
  title: string;
  description?: string;
  title: string;
  description?: string;
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


origin/cursor/expand-services-advertise-and-build-project-c28b



    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||;
    value === 'Paid';
  );export interface MilestoneAttachment {;


ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b



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


export interface CreateMilestoneRequest {
origin/cursor/expand-services-advertise-and-build-project-c28b

export interface CreateMilestoneRequest {
export interface CreateMilestoneRequest {


export interface CreateMilestoneRequest {;

ursor/fix-website-loading-errors-and-merge-6662
  title: string;
  description?: string;
}
export interface UpdateMilestoneRequest {



export interface UpdateMilestoneRequest {;

export interface UpdateMilestoneRequest {
export interface UpdateMilestoneRequest {
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b



  title?: string;
  description?: string;
  due_date?: string;
  amount_usd?: number;
  status?: 'pending' | 'completed' | 'cancelled';







export function isOverdue(milestone: Milestone): boolean {
  if (!milestone.dueDate || milestone.status === 'COMPLETED' || milestone.status === 'PAID') {
    return false;
  }
  return new Date(milestone.dueDate) < new Date();
origin/cursor/expand-services-advertise-and-build-project-c28b

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


}


export function getDaysUntilDue(milestone: Milestone): number | null {
  if (!milestone.dueDate) return null;
  const dueDate = new Date(milestone.dueDate);
  const now = new Date();
  const diffTime = dueDate.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

}
origin/cursor/integrate-build-improve-and-re-verify-2156
}
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b
}
}
origin/cursor/automate-test-improve-and-merge-code-2533
}

export type Project = $2;
  name: string,
  participants: ProjectParticipants,
  milestones: Milestone[],
  createdAt: string,
  updatedAt: string},

export function isMilestoneStatus(value: string): value is MilestoneStatus {
  return (
    value === 'Pending' |
    value === 'In Progress' |
    value === 'Submitted' |
    value === 'Approved' |
    value === 'Paid'
  )
}

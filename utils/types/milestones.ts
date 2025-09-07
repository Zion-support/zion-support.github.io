<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

;
  clientUserId: string;
  talentUserId: string;
}
export type Project = {  id: string;export type ProjectParticipants = {export type ProjectParticipants = {clientUserId: string;
  talentUserId: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
export type ProjectParticipants = {

export type ProjectParticipants = {


  clientUserId: string;
  talentUserId: string;
}
export type Project = {  id: string;
  title: string;
  description?: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
  title: string;
  description?: string;
=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


origin/cursor/expand-services-advertise-and-build-project-c28b
  clientUserId: string;
  talentUserId: string;

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
  title: string;
  description?: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||;
    value === 'Paid';
  );export interface MilestoneAttachment {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

  uploaded_at: string,

}
  uploadedAt: string
}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
export interface CreateMilestoneRequest {
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
export interface CreateMilestoneRequest {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c


export interface CreateMilestoneRequest {;

<<<<<<< HEAD
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  title: string;
  description?: string;
}
export interface UpdateMilestoneRequest {


export interface UpdateMilestoneRequest {;

<<<<<<< HEAD
export interface UpdateMilestoneRequest {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
export interface UpdateMilestoneRequest {
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  title?: string;
  description?: string;
  due_date?: string;
  amount_usd?: number;
  status?: 'pending' | 'completed' | 'cancelled';
<<<<<<< HEAD
  attachments?: MilestoneAttachment[];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc






export function isOverdue(milestone: Milestone): boolean {
  if (!milestone.dueDate || milestone.status === 'COMPLETED' || milestone.status === 'PAID') {
    return false;
  }
  return new Date(milestone.dueDate) < new Date();
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
}


export function getDaysUntilDue(milestone: Milestone): number | null {
  if (!milestone.dueDate) return null;
  const dueDate = new Date(milestone.dueDate);
  const now = new Date();
  const diffTime = dueDate.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

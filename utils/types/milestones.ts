<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export type ProjectParticipants = {

export type ProjectParticipants = {;


=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  clientUserId: string;
  talentUserId: string;
}
export type Project = {  id: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  title: string;
  description?: string;
=======
<<<<<<< HEAD
  title: string;
  description?: string;
=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||;
    value === 'Paid';
  );export interface MilestoneAttachment {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

  uploaded_at: string,

}
<<<<<<< HEAD
export interface CreateMilestoneRequest {
=======
  uploadedAt: string
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5


export interface CreateMilestoneRequest {;

  title: string;
  description?: string;
}
export interface UpdateMilestoneRequest {


export interface UpdateMilestoneRequest {;

<<<<<<< HEAD
=======
<<<<<<< HEAD
export interface UpdateMilestoneRequest {
=======
<<<<<<< HEAD
export interface UpdateMilestoneRequest {
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  title?: string;
  description?: string;
  due_date?: string;
  amount_usd?: number;
  status?: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

=======




=======

export function isOverdue(milestone: Milestone): boolean {
  if (!milestone.dueDate || milestone.status === 'COMPLETED' || milestone.status === 'PAID') {
    return false;
  }
  return new Date(milestone.dueDate) < new Date();
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
}
=======
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

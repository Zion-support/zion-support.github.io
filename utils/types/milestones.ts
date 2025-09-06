<<<<<<< HEAD
<<<<<<< HEAD
export type MilestoneStatus = | 'Pending' | 'In Progress' | 'Submitted' | 'Approved' | 'Paid';
export type ProjectParticipantRole = 'client' | 'talent';
export type ProjectParticipants = {

export type ProjectParticipants = {;
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  clientUserId: string;
  talentUserId: string;
}
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
export type Project = {  id: string;
  title: string;
  description?: string;
  due_date: string;
  amount_usd: number;
  status: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];
<<<<<<< HEAD

  updatedAt: string

}
export function isMilestoneStatus(value: string): value is MilestoneStatus {
  return (
<<<<<<< HEAD
    value === 'Pending' |
    value === 'In Progress' |
    value === 'Submitted' |
    value === 'Approved' |
    value === 'Paid'
  );export interface MilestoneAttachment {
=======

  );export interface MilestoneAttachment {

=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||;
    value === 'Paid';
  );export interface MilestoneAttachment {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
}
export interface CreateMilestoneRequest {
<<<<<<< HEAD
<<<<<<< HEAD

export interface CreateMilestoneRequest {;
=======
=======
  uploadedAt: string
}


export interface CreateMilestoneRequest {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  title: string;
  description?: string;
}
<<<<<<< HEAD
<<<<<<< HEAD
export interface UpdateMilestoneRequest {


export interface UpdateMilestoneRequest {;
=======

  due_date: string;
  amount_usd: number;
  attachments?: MilestoneAttachment[],
}

export interface UpdateMilestoneRequest {
=======


export interface UpdateMilestoneRequest {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
export interface UpdateMilestoneRequest {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  title?: string;
  description?: string;
  due_date?: string;
  amount_usd?: number;
  status?: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


export function getDaysUntilDue(milestone: Milestone): number | null {
  if (!milestone.dueDate) return null;
  const dueDate = new Date(milestone.dueDate);
  const now = new Date();
  const diffTime = dueDate.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

<<<<<<< HEAD
=======
export function isDueSoon(milestone: Milestone, daysThreshold: number = 3): boolean {
  const daysUntilDue = getDaysUntilDue(milestone);
  return daysUntilDue !== null && daysUntilDue <= daysThreshold && daysUntilDue >= 0;
}

export function calculateMilestoneProgress(milestone: Milestone): number {
  switch (milestone.status) {
    case 'PENDING':
      return 0;
    case 'IN_PROGRESS':
      return 25;
    case 'SUBMITTED':
      return 50;
    case 'APPROVED':
      return 75;
    case 'PAID':
    case 'COMPLETED':
      return 100;
    case 'OVERDUE':
      return 25;
    default:
      return 0;
  }
}

export function formatMilestoneAmount(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
}

export function formatMilestoneDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

export function createMilestoneTimelineEntry(
  milestoneId: string,
  action: MilestoneTimeline['action'],
  userId: string,
  notes?: string
): MilestoneTimeline {
  return {
    id: `timeline_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    milestoneId,
    action,
    timestamp: new Date().toISOString(),
    userId,
    notes
  };
}

export function createMilestoneNotification(
  milestoneId: string,
  userId: string,
  type: MilestoneNotification['type'],
  message: string
): MilestoneNotification {
  return {
    id: `notif_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    milestoneId,
    userId,
    type,
    message,
    read: false,
    createdAt: new Date().toISOString()
  };
}

export function createMilestoneComment(
  milestoneId: string,
  userId: string,
  content: string,
  parentId?: string
): MilestoneComment {
  return {
    id: `comment_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    milestoneId,
    userId,
    content,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    parentId
  };
}

export function createMilestoneFile(
  milestoneId: string,
  name: string,
  url: string,
  size: number,
  type: string,
  uploadedBy: string
): MilestoneFile {
  return {
    id: `file_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    milestoneId,
    name,
    url,
    size,
    type,
    uploadedBy,
    uploadedAt: new Date().toISOString()
  };
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

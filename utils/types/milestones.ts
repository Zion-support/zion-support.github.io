<<<<<<< HEAD


=======
<<<<<<< HEAD
export type MilestoneStatus = | 'Pending' | 'In Progress' | 'Submitted' | 'Approved' | 'Paid';
export type ProjectParticipantRole = 'client' | 'talent';
<<<<<<< HEAD
export type ProjectParticipants = {
=======

export type ProjectParticipants = {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  clientUserId: string;
  talentUserId: string;
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export type Project = {  id: string;
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
<<<<<<< HEAD

  );export interface MilestoneAttachment {

=======
<<<<<<< HEAD
    value === 'Pending' |
    value === 'In Progress' |
    value === 'Submitted' |
    value === 'Approved' |
    value === 'Paid'
  );export interface MilestoneAttachment {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||;
    value === 'Paid';
  );export interface MilestoneAttachment {;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;

  uploaded_at: string,

}
export interface CreateMilestoneRequest {
=======
  uploadedAt: string
}
<<<<<<< HEAD


export interface CreateMilestoneRequest {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  title: string;
  description?: string;

  attachments?: MilestoneAttachment[]

}

  due_date: string;
  amount_usd: number;
  attachments?: MilestoneAttachment[],
}

=======
<<<<<<< HEAD
export interface CreateMilestoneRequest {
=======

export interface CreateMilestoneRequest {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  title: string;
  description?: string;
  dueDate: string;
  amountUsd: number;
  attachments?: MilestoneAttachment[]
}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export interface UpdateMilestoneRequest {
=======


export interface UpdateMilestoneRequest {;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  title?: string;
  description?: string;
  due_date?: string;
  amount_usd?: number;
  status?: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];

=======




=======

export function isOverdue(milestone: Milestone): boolean {
  if (!milestone.dueDate || milestone.status === 'COMPLETED' || milestone.status === 'PAID') {
    return false;
  }
  return new Date(milestone.dueDate) < new Date();
}
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

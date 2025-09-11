

  clientUserId: string;
  talentUserId: string;
}
export type Project = {  id: string;
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

    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||;
    value === 'Paid';
  );export interface MilestoneAttachment {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;

  uploaded_at: string,

}
=======
  uploadedAt: string
}


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

export interface UpdateMilestoneRequest {
=======


export interface UpdateMilestoneRequest {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  title?: string;
  description?: string;
  dueDate?: string;
  amountUsd?: number;
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

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


export function getDaysUntilDue(milestone: Milestone): number | null {
  if (!milestone.dueDate) return null;
  const dueDate = new Date(milestone.dueDate);
  const now = new Date();
  const diffTime = dueDate.getTime() - now.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

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

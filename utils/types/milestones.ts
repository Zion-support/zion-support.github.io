<<<<<<< HEAD
<<<<<<< HEAD
export type MilestoneStatus = | 'Pending' | 'In Progress' | 'Submitted' | 'Approved' | 'Paid';
export type ProjectParticipantRole = 'client' | 'talent';

export type ProjectParticipants = {
  clientUserId: string;
  talentUserId: string;
};

export type Project = {
=======
export interface Milestone {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  id: string;
  title: string;
  description?: string;
  dueDate: string;
  amountUsd: number;
  status: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];
  createdAt: string;
  updatedAt: string;
}

<<<<<<< HEAD
export function isMilestoneStatus(value: string): value is MilestoneStatus {
  return (
    value === 'Pending' ||
    value === 'In Progress' ||
    value === 'Submitted' ||
    value === 'Approved' ||
    value === 'Paid'
<<<<<<< HEAD
  );
=======
  );
=======
// Milestone type definitions
export interface Milestone {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  amount: number;
  dueDate?: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'OVERDUE' | 'SUBMITTED' | 'APPROVED' | 'PAID';
  createdAt: string;
  updatedAt: string;
  submittedAt?: string;
  approvedAt?: string;
  paidAt?: string;
  notes?: string;
  attachments?: Array<{
    id: string;
    name: string;
    url: string;
    uploadedAt: string;
  }>;
}

export interface MilestoneUpdate {
  title?: string;
  description?: string;
  amount?: number;
  dueDate?: string;
  status?: Milestone['status'];
  notes?: string;
}

export interface MilestoneSubmission {
  milestoneId: string;
  notes?: string;
  attachments?: Array<{
    name: string;
    url: string;
  }>;
}

export interface MilestoneApproval {
  milestoneId: string;
  approved: boolean;
  notes?: string;
}

export interface MilestonePayment {
  milestoneId: string;
  amount: number;
  paymentMethod: string;
  transactionId?: string;
  notes?: string;
}

export interface MilestoneStats {
  total: number;
  pending: number;
  inProgress: number;
  completed: number;
  overdue: number;
  submitted: number;
  approved: number;
  paid: number;
  totalAmount: number;
  completedAmount: number;
  pendingAmount: number;
}

export interface MilestoneTimeline {
  id: string;
  milestoneId: string;
  action: 'created' | 'updated' | 'submitted' | 'approved' | 'rejected' | 'paid';
  timestamp: string;
  userId: string;
  notes?: string;
}

export interface MilestoneTemplate {
  id: string;
  name: string;
  description?: string;
  milestones: Array<{
    title: string;
    description?: string;
    amount: number;
    dueDate?: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

export interface MilestoneFilter {
  status?: Milestone['status'];
  projectId?: string;
  dueDateFrom?: string;
  dueDateTo?: string;
  amountMin?: number;
  amountMax?: number;
}

export interface MilestoneSort {
  field: 'title' | 'amount' | 'dueDate' | 'status' | 'createdAt' | 'updatedAt';
  direction: 'asc' | 'desc';
}

export interface MilestoneSearch {
  query: string;
  fields?: Array<'title' | 'description' | 'notes'>;
}

export interface MilestoneBulkUpdate {
  milestoneIds: string[];
  updates: MilestoneUpdate;
}

export interface MilestoneBulkAction {
  milestoneIds: string[];
  action: 'approve' | 'reject' | 'pay' | 'delete';
  notes?: string;
}

export interface MilestoneExport {
  format: 'csv' | 'json' | 'pdf';
  filters?: MilestoneFilter;
  sort?: MilestoneSort;
  includeTimeline?: boolean;
}

export interface MilestoneReport {
  projectId: string;
  period: {
    start: string;
    end: string;
  };
  stats: MilestoneStats;
  milestones: Milestone[];
  timeline: MilestoneTimeline[];
}

export interface MilestoneNotification {
  id: string;
  milestoneId: string;
  userId: string;
  type: 'due_soon' | 'overdue' | 'submitted' | 'approved' | 'rejected' | 'paid';
  message: string;
  read: boolean;
  createdAt: string;
}

export interface MilestoneComment {
  id: string;
  milestoneId: string;
  userId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  parentId?: string;
  replies?: MilestoneComment[];
}

export interface MilestoneFile {
  id: string;
  milestoneId: string;
  name: string;
  url: string;
  size: number;
  type: string;
  uploadedBy: string;
  uploadedAt: string;
}

export interface MilestoneStatusTransition {
  from: Milestone['status'];
  to: Milestone['status'];
  allowed: boolean;
  requiredRole?: 'client' | 'talent' | 'admin';
  conditions?: Array<{
    field: string;
    operator: 'equals' | 'not_equals' | 'greater_than' | 'less_than';
    value: any;
  }>;
}

export const MILESTONE_STATUS_TRANSITIONS: MilestoneStatusTransition[] = [
  {
    from: 'PENDING',
    to: 'IN_PROGRESS',
    allowed: true,
    requiredRole: 'talent'
  },
  {
    from: 'IN_PROGRESS',
    to: 'SUBMITTED',
    allowed: true,
    requiredRole: 'talent'
  },
  {
    from: 'SUBMITTED',
    to: 'APPROVED',
    allowed: true,
    requiredRole: 'client'
  },
  {
    from: 'SUBMITTED',
    to: 'IN_PROGRESS',
    allowed: true,
    requiredRole: 'client'
  },
  {
    from: 'APPROVED',
    to: 'PAID',
    allowed: true,
    requiredRole: 'client'
  },
  {
    from: 'PENDING',
    to: 'COMPLETED',
    allowed: true,
    requiredRole: 'admin'
  },
  {
    from: 'IN_PROGRESS',
    to: 'COMPLETED',
    allowed: true,
    requiredRole: 'admin'
  }
];

export const MILESTONE_STATUS_LABELS: Record<Milestone['status'], string> = {
  PENDING: 'Pending',
  IN_PROGRESS: 'In Progress',
  COMPLETED: 'Completed',
  OVERDUE: 'Overdue',
  SUBMITTED: 'Submitted',
  APPROVED: 'Approved',
  PAID: 'Paid'
};

export const MILESTONE_STATUS_COLORS: Record<Milestone['status'], string> = {
  PENDING: '#6B7280',
  IN_PROGRESS: '#3B82F6',
  COMPLETED: '#10B981',
  OVERDUE: '#EF4444',
  SUBMITTED: '#F59E0B',
  APPROVED: '#8B5CF6',
  PAID: '#059669'
};

export function isValidStatusTransition(from: Milestone['status'], to: Milestone['status']): boolean {
  const transition = MILESTONE_STATUS_TRANSITIONS.find(t => t.from === from && t.to === to);
  return transition ? transition.allowed : false;
}

export function getStatusLabel(status: Milestone['status']): string {
  return MILESTONE_STATUS_LABELS[status] || status;
}

export function getStatusColor(status: Milestone['status']): string {
  return MILESTONE_STATUS_COLORS[status] || '#6B7280';
}

export function isOverdue(milestone: Milestone): boolean {
  if (!milestone.dueDate || milestone.status === 'COMPLETED' || milestone.status === 'PAID') {
    return false;
  }
  return new Date(milestone.dueDate) < new Date();
}

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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export interface MilestoneAttachment {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
  uploadedAt: string;
}

export interface CreateMilestoneRequest {
  title: string;
  description?: string;
  dueDate: string;
  amountUsd: number;
  attachments?: MilestoneAttachment[];
}

export interface UpdateMilestoneRequest {
  title?: string;
  description?: string;
  dueDate?: string;
  amountUsd?: number;
  status?: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

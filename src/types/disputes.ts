export type DisputeStatus = 'open' | 'under_review' | 'resolved' | 'closed';
export type ResolutionType = 'client_favor' | 'talent_favor' | 'compromise' | 'dismissed';

export interface Dispute {
  id: string,
  reason_code: string,
  description: string,
  status: DisputeStatus,
  raised_by: string,
  milestone_id?: string;
  created_at: string,
  resolved_at?: string;
  resolution_summary?: string;
  resolution_type?: ResolutionType;
  client_profile?: {
    id: string,
    display_name: string,
    avatar_url?: string;
  };
  talent_profile?: {
    id: string,
    display_name: string,
    avatar_url?: string;
  };
}

export interface DisputeMessage {
  id: string,
  dispute_id: string,
  user_id: string,
  message: string,
  created_at: string,
  is_admin_note: boolean,
  user_profile?: {
    display_name: string,
    avatar_url?: string;
  };
}

export const disputeReasonLabels: Record<string, string> = {
  'payment_issue': 'Payment Issue',
  'quality_concern': 'Quality Concern',
  'communication_problem': 'Communication Problem',
  'scope_creep': 'Scope Creep',
  'deadline_missed': 'Deadline Missed',
  'other': 'Other'};
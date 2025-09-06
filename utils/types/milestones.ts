export type ProjectParticipantRole = 'client' | 'talent';
  url: string;
  type: string;
  size: number;
  uploadedAt: string;
}

export interface Milestone {
  id: string;
=======
}
=======
;
export type ProjectParticipants = {
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
}
export function isMilestoneStatus(value: string): value is MilestoneStatus {
  return (
    value === 'Pending' |
    value === 'In Progress' |
    value === 'Submitted' |
    value === 'Approved' |
    value === 'Paid'
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
=======
  uploaded_at: string,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface CreateMilestoneRequest {
  title: string;
  description?: string;
}
export interface UpdateMilestoneRequest {
  title?: string;
  description?: string;
  due_date?: string;
  amount_usd?: number;
  status?: 'pending' | 'completed' | 'cancelled';
  attachments?: MilestoneAttachment[];
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

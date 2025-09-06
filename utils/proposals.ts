<<<<<<< HEAD
export type ProposalStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Accepted';
export type ProposalIndexItem = {id: string;
  title: string;
  targetInstitution: string;
  regionalScope: string;
  type: string;
  status: ProposalStatus;
  createdAt: string;
=======
export type ProposalStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Accepted',
export type ProposalIndexItem = {
  id: string,
  title: string,
  target_institution: string,
  regional_scope: string,
  type: string,
  status: ProposalStatus,
  created_at: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
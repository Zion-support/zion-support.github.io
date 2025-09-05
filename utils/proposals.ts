export type ProposalStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Accepted',

<<<<<<< HEAD
export type ProposalIndexItem = {
  id: string,
  title: string,
  targetInstitution: string,
  regionalScope: string,
  type: string,
  status: ProposalStatus,
  createdAt: string
},
=======
export type ProposalIndexItem = {_id: string;
  title: string;
  targetInstitution: string;
  regionalScope: string;
  type: string;
  status: ProposalStatus;
  createdAt: string;};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

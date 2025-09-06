<<<<<<< HEAD
export type ProposalStatus =
  | 'Draft'
  | 'Submitted'
  | 'Under Review'
  | 'Accepted';

export type ProposalIndexItem = {
  id: string;
  title: string;
  targetInstitution: string;
  regionalScope: string;
  type: string;
  status: ProposalStatus;
  createdAt: string;
};
=======
export type ProposalStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Accepted';
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468

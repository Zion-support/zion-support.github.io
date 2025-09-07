interface ProposalMeta {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  targetInstitution: string;
  type: string;
  regionalScope: string;
  budgetOrResolution: string;
  supportingMultiverses: string[];
  languages: string[];
  status: 'Draft' | 'Submitted' | 'Under Review' | 'Approved' | 'Rejected';
  artifacts: {
    markdownPath: string;
    jsonPath: string;
  };
}

interface CreateProposalPayload {
  title: string;
  targetInstitution: string;
  type: string;
  regionalScope: string;
  budgetOrResolution: string;
  supportingMultiverses?: string[];
  language?: string;
}

export function createProposalMeta(id: string, payload: CreateProposalPayload): ProposalMeta {
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
  
  const meta: ProposalMeta = {
    id,
    createdAt,
    updatedAt,
    title: payload.title,
    targetInstitution: payload.targetInstitution,
    type: payload.type,
    regionalScope: payload.regionalScope,
    budgetOrResolution: payload.budgetOrResolution,
    supportingMultiverses: payload.supportingMultiverses || [],
    languages: payload.language ? [payload.language] : ['en'],
    status: 'Draft',
    artifacts: {
      markdownPath: `/proposals/${id}/proposal.md`,
      jsonPath: `/proposals/${id}/proposal.json`
    }
  };
  
  return meta;
}
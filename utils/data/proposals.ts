 const meta: ProposalMeta = {
  id, createdAt, updatedAt, title: payload.title, targetInstitution: payload.targetInstitution, type: payload.type, regionalScope: payload.regionalScope, budgetOrResolution: payload.budgetOrResolution, supportingMultiverses: payload.supportingMultiverses || [], languages: payload.language ? [payload.language] : ['en'], status: 'Draft', artifacts: {
  markdownPath: `/proposals/$ {
  id 
}/proposal.md`;
jsonPath: path.relative (process.cwd (), jsonPath) 
}
};
return meta 
}
}
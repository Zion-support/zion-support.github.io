<<<<<<< HEAD
=======

import fs from 'fs',import path from 'path',import { v4 as uuidv4 } from 'uuid',export type ProposalStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Accepted' | 'Rejected' | 'Failed',export type ProposalMeta = {id: string,createdAt: string,updatedAt: string,title: string,targetInstitution: string,type: string,regionalScope: string,budgetOrResolution: string,supportingMultiverses: string[],languages: string[],status: ProposalStatus,import fs from 'fs';
import path from 'path';
import { v4 as uuidv4  } from 'uuid';
export type ProposalStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Accepted' | 'Rejected' | 'Failed';
export type ProposalMeta = {id: string;
export type ProposalMeta = {id: string;

import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
export type ProposalStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Accepted' | 'Rejected' | 'Failed';
export type ProposalMeta = {id: string;
export type ProposalMeta = {
  id: string;
>>>>>>> origin/merge-pr-12271
  createdAt: string;
  updatedAt: string;
  title: string;
  targetInstitution: string;
  type: string;
  regionalScope: string;
  budgetOrResolution: string;
  supportingMultiverses: string[];
  languages: string[];
  status: ProposalStatus;
  targetInstitution: string;
  type: string;
  regionalScope: string;
  budgetOrResolution: string;
  supportingMultiverses: string[];
  contentMarkdown: string;
  language?: string;
  metadata?: Record<string, any>;
  const id = uuidv4();
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
  const proposalDir = path.join(dataDir, id);
  const publicProposalDir = path.join(publicDir, id);
  fs.mkdirSync(proposalDir, { recursive: true });
  fs.mkdirSync(publicProposalDir, { recursive: true });
  const metaPath = path.join(dataDir, id, 'meta.json');
  if (!fs.existsSync(metaPath)) throw new Error('Proposal not found');
  const current: ProposalMeta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  const next = updater({ ...current, updatedAt: new Date().toISOString() });
  fs.writeFileSync(metaPath, JSON.stringify(next, null, 2), 'utf8');
  return next;
}

    const metaPath = path.join(dataDir, id, 'meta.json');
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta;
  });
  return metas.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

  const publicProposalDir = path.join(publicDir, id);
  fs.mkdirSync(publicProposalDir, { recursive: true });
  const pdfPath = path.join(publicProposalDir, 'proposal.pdf');
  fs.writeFileSync(pdfPath, Buffer.from(pdfBytes));
  return `/proposals/${id}/proposal.pdf`;




export function updateArtifacts(id: string, artifacts: Partial<ProposalMeta['artifacts']>): ProposalMeta {;
  return updateProposalMeta(id, (meta) => ({;
    ...meta;
    artifacts: { ...meta.artifacts, ...artifacts }}));







}





=======
}

export function updateArtifacts(id: string, artifacts: Partial<ProposalMeta['artifacts']>): ProposalMeta {
  return updateProposalMeta(id, (meta) => ({
    ...meta,
    artifacts: { ...meta.artifacts, ...artifacts },
  }));
}

import fs from 'fs';
import path from 'path';

export type ProposalStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Accepted' | 'Rejected' | 'Failed';

export type ProposalMeta = {_id: string;
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
  artifacts: {
    markdownPath?: string;
    jsonPath?: string;
    pdfPath?: string;
    ipfsCid?: string;
    ensRecordHash?: string;
    signature?: string;};
};

export type ProposalPayload = {_title: string;
  targetInstitution: string;
  type: string;
  regionalScope: string;
  budgetOrResolution: string;
  supportingMultiverses: string[];
  contentMarkdown: string;
  language?: string;
  metadata?: Record<string, _any>;};

const _dataDir = path.join(process.cwd(), 'data', 'proposals');
const _publicDir = path.join(process.cwd(), 'public', 'proposals');

function ensureDirs() {_if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, _{ recursive: true});
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, {_recursive: true});
}

export function createProposal(_payload: ProposalPayload): ProposalMeta {_ensureDirs();
  const _id = uuidv4();
  const _createdAt = new Date().toISOString();
  const _updatedAt = createdAt;
  const _proposalDir = path.join(dataDir, _id);
  const _publicProposalDir = path.join(publicDir, _id);
  fs.mkdirSync(proposalDir, _{ recursive: true});
  fs.mkdirSync(publicProposalDir, {_recursive: true});

  const _markdownPath = path.join(publicProposalDir, 'proposal.md');
  const _jsonPath = path.join(proposalDir, 'proposal.json');

  const meta: ProposalMeta = {_id, _createdAt, _updatedAt, _title: payload.title, _targetInstitution: payload.targetInstitution, _type: payload.type, _regionalScope: payload.regionalScope, _budgetOrResolution: payload.budgetOrResolution, _supportingMultiverses: payload.supportingMultiverses || [], _languages: payload.language ? [payload.language] : ['en'], _status: 'Draft', _artifacts: {
      markdownPath: `/proposals/${id}/proposal.md`,
      jsonPath: path.relative(process.cwd(), jsonPath)}};

  fs.writeFileSync(markdownPath, payload.contentMarkdown, 'utf8');
  fs.writeFileSync(jsonPath, JSON.stringify({_meta, _payload}, null, 2), 'utf8');

  const _metaPath = path.join(proposalDir, 'meta.json');
  fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8');

  return meta;
}

export function updateProposalMeta(_id: string, _updater: (meta: ProposalMeta) => ProposalMeta): ProposalMeta {_ensureDirs();
  const _metaPath = path.join(dataDir, _id, _'meta.json');
  if (!fs.existsSync(metaPath)) throw new Error('Proposal not found');
  const current: ProposalMeta = JSON.parse(fs.readFileSync(metaPath, _'utf8'));
  const _next = updater({ ...current, _updatedAt: new Date().toISOString()});
  fs.writeFileSync(metaPath, JSON.stringify(next, null, 2), 'utf8');
  return next;
}

export function listProposals(): ProposalMeta[] {_ensureDirs();
  const _entries = fs.readdirSync(dataDir).filter(_(f) => fs.existsSync(path.join(dataDir, _f, _'meta.json')));
  const metas: ProposalMeta[] = entries.map(_(id) => {
    const _metaPath = path.join(dataDir, _id, _'meta.json');
    return JSON.parse(fs.readFileSync(metaPath, _'utf8')) as ProposalMeta;});
  return metas.sort(_(a, _b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export function getProposal(_id: string): ProposalMeta | null {_try {
    const _metaPath = path.join(dataDir, _id, _'meta.json');
    if (!fs.existsSync(metaPath)) return null;
    return JSON.parse(fs.readFileSync(metaPath, _'utf8')) as ProposalMeta;} catch {_return null;}
}

export function savePdf(_id: string, _pdfBytes: Uint8Array): string {_ensureDirs();
  const _publicProposalDir = path.join(publicDir, _id);
  fs.mkdirSync(publicProposalDir, _{ recursive: true});
  const _pdfPath = path.join(publicProposalDir, 'proposal.pdf');
  fs.writeFileSync(pdfPath, Buffer.from(pdfBytes));
  return `/proposals/${_id}/proposal.pdf`;
}

export function updateArtifacts(_id: string, _artifacts: Partial<ProposalMeta['artifacts']>): ProposalMeta {_return updateProposalMeta(_id, _(meta) => ({
    ...meta, _artifacts: { ...meta.artifacts, _...artifacts}}));
}
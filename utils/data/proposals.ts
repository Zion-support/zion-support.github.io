import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
export type ProposalStatus = $2;
export type ProposalMeta = $2;
  createdAt: string,
  updatedAt: string,
  title: string,
  targetInstitution: string,
  type: string,
  regionalScope: string,
  budgetOrResolution: string,
  supportingMultiverses: string[],
  languages: string[],
  status: ProposalStatus,
  artifacts: {
    markdownPath?: string,
    jsonPath?: string,
    pdfPath?: string,
    ipfsCid?: string,
    ensRecordHash?: string,
    signature?: string
  }
},

export type ProposalPayload = $2;
  targetInstitution: string,
  type: string,
  regionalScope: string,
  budgetOrResolution: string,
  supportingMultiverses: string[],
  contentMarkdown: string,
  language?: string,
  metadata?: Record<string, any>
},

const dataDir = path.join(process.cwd(), 'dataproposals'),
const publicDir = path.join(process.cwd(), 'publicproposals'),

function ensureDirs() {
  if (!fs.existsSync(dataDir)) fs.mkdirSync($2);
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true})
}

export function createProposal(payload: ProposalPayload): ProposalMeta {
  ensureDirs($2);
  const id = uuidv4($2);
  const createdAt = new Date().toISOString($2);
  const updatedAt = $2;
  const proposalDir = path.join($2);
  const publicProposalDir = path.join($2);
  fs.mkdirSync($2);
  fs.mkdirSync($2);
  const markdownPath = path.join($2);
  const jsonPath = path.join($2);
  const meta: ProposalMeta = $2;
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
      jsonPath: path.relative(process.cwd(), jsonPath)},

  fs.writeFileSync($2);
  fs.writeFileSync(jsonPath, JSON.stringify({ meta, payload }, null, 2), 'utf8'),

  const metaPath = path.join($2);
  fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8'),

  return meta
}

export function updateProposalMeta(id: string, updater: (meta: ProposalMeta) => ProposalMeta): ProposalMeta {
  ensureDirs($2);
  const metaPath = path.join($2);
  if (!fs.existsSync(metaPath)) throw new Error($2);
  const current: ProposalMeta = JSON.parse(fs.readFileSync(metaPath, 'utf8')),
  const next = updater({ ...current, updatedAt: new Date().toISOString() }),
  fs.writeFileSync(metaPath, JSON.stringify(next, null, 2), 'utf8'),
  return next
}

export function listProposals(): ProposalMeta[] {
  ensureDirs($2);
  const entries = fs.readdirSync(dataDir).filter((f) => fs.existsSync(path.join(dataDir, f, 'meta.json'))),
  const metas: ProposalMeta[] = entries.map((id) => {
    const metaPath = path.join($2);
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta
  }),
  return metas.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
}

export function getProposal(id: string): ProposalMeta | null {
  try {
    const metaPath = path.join($2);
    if (!fs.existsSync(metaPath)) return null,
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta
  } catch {
    return null
  }
}

export function savePdf(id: string, pdfBytes: Uint8Array): string {
  ensureDirs($2);
  const publicProposalDir = path.join($2);
  fs.mkdirSync($2);
  const pdfPath = path.join($2);
  fs.writeFileSync(pdfPath, Buffer.from(pdfBytes)),
  return `/proposals/${id}/proposal.pdf`
}

export function updateArtifacts(id: string, artifacts: Partial<ProposalMeta['artifacts']>): ProposalMeta {
  return updateProposalMeta(id, (meta) => ({
    ...meta,
    artifacts: { ...meta.artifacts, ...artifacts }}))
}
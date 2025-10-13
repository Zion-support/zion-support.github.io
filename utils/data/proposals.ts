import fs from 'fs',';';
import path from 'path',';';
import { v4 as uuidv4 } from 'uuid',;';';
export type ProposalStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Accepted' | 'Rejected' | 'Failed',;';';
export type ProposalMeta = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string,
  createdAt: string,
  updatedAt: string,
  title: string,
  targetInstitution: string,
  type: string,
  regionalScope: string,
  budgetOrResolution: string,
  supportingMultiverses: string[],
  languages: string[],
  status: ProposalStatus,;
import fs from 'fs';';
import path from 'path';';
import { v4 as uuidv4 } from 'uuid';';';
export type ProposalStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Accepted' | 'Rejected' | 'Failed';';
import fs from 'fs';';
import path from 'path';';
import { v4 as uuidv4 } from 'uuid';';';
export type ProposalStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Accepted' | 'Rejected' | 'Failed';';';
export type ProposalMeta = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  createdAt: string
  updatedAt: string
  title: string
  targetInstitution: string
  type: string
  regionalScope: string
  budgetOrResolution: string
  supportingMultiverses: string[]
  languages: string[]
  status: ProposalStatus
  artifacts: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
},;
export type ProposalPayload = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  title: string
  artifacts: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    markdownPath?: string
    jsonPath?: string
    pdfPath?: string
    ipfsCid?: string
    ensRecordHash?: string
    signature?: string
  }
}
export type ProposalPayload = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  title: string
  targetInstitution: string
  type: string
  regionalScope: string
  budgetOrResolution: string
  supportingMultiverses: string[]
  contentMarkdown: string
  language?: string
  metadata?: Record<string, any>
}
const dataDir = path.join(process.cwd(), 'dataproposals'),;';
const publicDir = path.join(process.cwd(), 'publicproposals'),'
function ensureDirs() {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true })
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
;
export function createProposal(payload: ProposalPayload): ProposalMeta {
  // TODO: Add properties
}
  // TODO: Add properties
}
  ensureDirs(),
}
const dataDir = path.join(process.cwd(), 'data', 'proposals');';
const publicDir = path.join(process.cwd(), 'public', 'proposals')'
function ensureDirs() {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true })
}
export function createProposal(payload: ProposalPayload): ProposalMeta {
  // TODO: Add properties
}
  // TODO: Add properties
}
  ensureDirs();
const id = uuidv4();
const createdAt = new Date().toISOString();
const updatedAt = createdAt;
const proposalDir = path.join(dataDir, id);
const publicProposalDir = path.join(publicDir, id)
  fs.mkdirSync(proposalDir, { recursive: true })
  fs.mkdirSync(publicProposalDir, { recursive: true });
const markdownPath = path.join(publicProposalDir, 'proposal.md');';
const jsonPath = path.join(proposalDir, 'proposal.json');';
const meta: ProposalMeta = {id
    createdAt
    updatedAt
    title: payload.title
    targetInstitution: payload.targetInstitution
    type: payload.type
    regionalScope: payload.regionalScope
    budgetOrResolution: payload.budgetOrResolution
    supportingMultiverses: payload.supportingMultiverses |[]
    languages: payload.language ? [payload.language] : ['en']'
    status: 'Draft''
    artifacts: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      markdownPath: `/proposals/${id}/proposal.md`
      jsonPath: path.relative(process.cwd(), jsonPath)}}
  fs.writeFileSync(markdownPath, payload.contentMarkdown, 'utf8')'
  fs.writeFileSync(jsonPath, JSON.stringify({ meta, payload }, null, 2), 'utf8');';
const metaPath = path.join(proposalDir, 'meta.json')'
  fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8')'
  return meta
}
export function updateProposalMeta(id: string, updater: (meta: ProposalMeta) => ProposalMeta): ProposalMeta {ensureDirs();
const markdownPath = path.join(publicProposalDir, 'proposal.md');';
const jsonPath = path.join(proposalDir, 'proposal.json');';
const meta: ProposalMeta = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    id,
    createdAt,
    updatedAt,
    title: payload.title,
    targetInstitution: payload.targetInstitution,
    type: payload.type,
    regionalScope: payload.regionalScope,
    budgetOrResolution: payload.budgetOrResolution,
    supportingMultiverses: payload.supportingMultiverses || [],
    languages: payload.language ? [payload.language] : ['en'],'
    status: 'Draft','
    artifacts: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      markdownPath: `/proposals/${id}/proposal.md`,
      jsonPath: path.relative(process.cwd(), jsonPath),
    },
  }
  fs.writeFileSync(markdownPath, payload.contentMarkdown, 'utf8')'
  fs.writeFileSync(jsonPath, JSON.stringify({ meta, payload }, null, 2), 'utf8');';
const metaPath = path.join(proposalDir, 'meta.json')'
  fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8')'
  return meta
}
export function updateProposalMeta(id: string, updater: (meta: ProposalMeta) => ProposalMeta): ProposalMeta {
  // TODO: Add properties
}
  // TODO: Add properties
}
  ensureDirs();
const metaPath = path.join(dataDir, id, 'meta.json')'
  if (!fs.existsSync(metaPath)) throw new Error('Proposal not found');';
const current: ProposalMeta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));';
const next = updater({ ...current, updatedAt: new Date().toISOString() })
  fs.writeFileSync(metaPath, JSON.stringify(next, null, 2), 'utf8')'
  return next
}
export function listProposals(): ProposalMeta[] {
  // TODO: Add properties
}
  // TODO: Add properties
}
  ensureDirs();
const entries = fs.readdirSync(dataDir).filter((f) => fs.existsSync(path.join(dataDir, f, 'meta.json')));';
const metas: ProposalMeta[] = entries.map((id) => {;
const metaPath = path.join(dataDir, id, 'meta.json')'
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta'
  })
  return metas.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
}
    const metaPath = path.join(dataDir, id, 'meta.json')'
    if (!fs.existsSync(metaPath)) return null
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta'
  } catch {return null
  }
}
export function savePdf(id: string, pdfBytes: Uint8Array): string {ensureDirs()
    markdownPath?: string,
    jsonPath?: string,
    pdfPath?: string,
    ipfsCid?: string,
    ensRecordHash?: string,
    signature?: string
  }
},;
export type ProposalPayload = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  title: string,
  targetInstitution: string,
  type: string,
  regionalScope: string,
  budgetOrResolution: string,
  supportingMultiverses: string[],
  contentMarkdown: string,
  language?: string,
  metadata?: Record<string any>
},;
const dataDir = path.join(process.cwd(), 'dataproposals'),;';
const publicDir = path.join(process.cwd(), 'publicproposals'),'
function ensureDirs() {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true }),
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true })
}
;
export function createProposal(payload: ProposalPayload): ProposalMeta {
  // TODO: Add properties
}
  // TODO: Add properties
}
  ensureDirs(),;
const id = uuidv4(),;
const createdAt = new Date().toISOString(),;
const updatedAt = createdAt,;
const proposalDir = path.join(dataDir, id),;
const publicProposalDir = path.join(publicDir, id),
  fs.mkdirSync(proposalDir, { recursive: true }),
  fs.mkdirSync(publicProposalDir, { recursive: true }),;
const markdownPath = path.join(publicProposalDir, 'proposal.md'),;';
const jsonPath = path.join(proposalDir, 'proposal.json'),;';
const meta: ProposalMeta = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    id,
    createdAt,
    updatedAt,
    title: payload.title,
    targetInstitution: payload.targetInstitution,
    type: payload.type,
    regionalScope: payload.regionalScope,
    budgetOrResolution: payload.budgetOrResolution,
    supportingMultiverses: payload.supportingMultiverses || [],
    languages: payload.language ? [payload.language] : ['en'],'
    status: 'Draft','
    artifacts: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      markdownPath: `/proposals/${id}/proposal.md`,
      jsonPath: path.relative(process.cwd(), jsonPath)}},
  fs.writeFileSync(markdownPath, payload.contentMarkdown, 'utf8'),'
  fs.writeFileSync(jsonPath, JSON.stringify({ meta, payload }, null, 2), 'utf8'),;';
const metaPath = path.join(proposalDir, 'meta.json'),'
  fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8'),'
  return meta
}
;
export function updateProposalMeta(id: string, updater: (meta: ProposalMeta) => ProposalMeta): ProposalMeta {
  // TODO: Add properties
}
  // TODO: Add properties
}
  ensureDirs(),;
const metaPath = path.join(dataDir, id, 'meta.json'),'
  if (!fs.existsSync(metaPath)) throw new Error('Proposal not found'),;';
const current: ProposalMeta = JSON.parse(fs.readFileSync(metaPath, 'utf8')),;';
const next = updater({ ...current, updatedAt: new Date().toISOString() }),
  fs.writeFileSync(metaPath, JSON.stringify(next, null, 2), 'utf8'),'
  return next
}
;
export function listProposals(): ProposalMeta[] {
  // TODO: Add properties
}
  // TODO: Add properties
}
  ensureDirs(),;
const entries = fs.readdirSync(dataDir).filter((f) => fs.existsSync(path.join(dataDir, f, 'meta.json'))),;';
const metas: ProposalMeta[] = entries.map((id) => {;
const metaPath = path.join(dataDir, id, 'meta.json'),'
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta'
  }),
  return metas.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
}
;
export function getProposal(id: string): ProposalMeta | null {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {;
const metaPath = path.join(dataDir, id, 'meta.json'),'
    if (!fs.existsSync(metaPath)) return null,
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta'
  } catch {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return null
  }
}
;
export function savePdf(id: string, pdfBytes: Uint8Array): string {
  // TODO: Add properties
}
  // TODO: Add properties
}
  ensureDirs(),;
const publicProposalDir = path.join(publicDir, id),
  fs.mkdirSync(publicProposalDir, { recursive: true }),;
const pdfPath = path.join(publicProposalDir, 'proposal.pdf'),'
  fs.writeFileSync(pdfPath, Buffer.from(pdfBytes))
  return `/proposals/${id}/proposal.pdf`
}

    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
},;
export type ProposalPayload = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  title: string
  targetInstitution: string
  type: string
  regionalScope: string
  budgetOrResolution: string
  supportingMultiverses: string[]
  contentMarkdown: string
  language?: string
  metadata?: Record<string, any>
}
const dataDir = path.join(process.cwd(), 'dataproposals'),;';
const publicDir = path.join(process.cwd(), 'publicproposals'),'
function ensureDirs() {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true })
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
;
export function createProposal(payload: ProposalPayload): ProposalMeta {
  // TODO: Add properties
}
  // TODO: Add properties
}
  ensureDirs(),;
const id = uuidv4();
const createdAt = new Date().toISOString();
const updatedAt = createdAt;
const proposalDir = path.join(dataDir, id);
const publicProposalDir = path.join(publicDir, id)
  fs.mkdirSync(proposalDir, { recursive: true })
  fs.mkdirSync(publicProposalDir, { recursive: true });
const markdownPath = path.join(publicProposalDir, 'proposal.md');';
const jsonPath = path.join(proposalDir, 'proposal.json');';
const meta: ProposalMeta = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    id
    createdAt
    updatedAt,
    title: payload.title,
    targetInstitution: payload.targetInstitution,
    type: payload.type,
    regionalScope: payload.regionalScope,
    budgetOrResolution: payload.budgetOrResolution,
    supportingMultiverses: payload.supportingMultiverses || [],
    languages: payload.language ? [payload.language] : ['en'],'
    status: 'Draft','
    artifacts: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      markdownPath: `/proposals/${id}/proposal.md`,
      jsonPath: path.relative(process.cwd(), jsonPath)}},
  fs.writeFileSync(markdownPath, payload.contentMarkdown, 'utf8')'
  fs.writeFileSync(jsonPath, JSON.stringify({ meta, payload }, null, 2), 'utf8'),;';
const metaPath = path.join(proposalDir, 'meta.json')'
  fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8'),'
  return meta
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
;
export function updateProposalMeta(id: string, updater: (meta: ProposalMeta) => ProposalMeta): ProposalMeta {
  // TODO: Add properties
}
  // TODO: Add properties
}
  ensureDirs(),;
const metaPath = path.join(dataDir, id, 'meta.json')'
  if (!fs.existsSync(metaPath)) throw new Error('Proposal not found');';
const current: ProposalMeta = JSON.parse(fs.readFileSync(metaPath, 'utf8')),;';
const next = updater({ ...current, updatedAt: new Date().toISOString() }),
  fs.writeFileSync(metaPath, JSON.stringify(next, null, 2), 'utf8'),'
  return next
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
;
export function listProposals(): ProposalMeta[] {
  // TODO: Add properties
}
  // TODO: Add properties
}
  ensureDirs(),;
const entries = fs.readdirSync(dataDir).filter((f) => fs.existsSync(path.join(dataDir, f, 'meta.json'))),;';
const metas: ProposalMeta[] = entries.map((id) => {;
const metaPath = path.join(dataDir, id, 'meta.json')'
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta'
  }),
  return metas.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
;
export function getProposal(id: string): ProposalMeta | null {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {;
const metaPath = path.join(dataDir, id, 'meta.json')'
    if (!fs.existsSync(metaPath)) return null,
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta'
  } catch {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return null
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
;
export function savePdf(id: string, pdfBytes: Uint8Array): string {
  // TODO: Add properties
}
  // TODO: Add properties
}
  ensureDirs(),;
export function getProposal(id: string): ProposalMeta | null {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {;
const metaPath = path.join(dataDir, id, 'meta.json')'
    if (!fs.existsSync(metaPath)) return null
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta'
  } catch {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return null
  }
}
export function savePdf(id: string, pdfBytes: Uint8Array): string {
  // TODO: Add properties
}
  // TODO: Add properties
}
  ensureDirs();
const publicProposalDir = path.join(publicDir, id)
  fs.mkdirSync(publicProposalDir, { recursive: true });
const pdfPath = path.join(publicProposalDir, 'proposal.pdf')'
  fs.writeFileSync(pdfPath, Buffer.from(pdfBytes))
  return `/proposals/${id}/proposal.pdf`
}
export function updateArtifacts(id: string, artifacts: Partial<ProposalMeta['artifacts']>): ProposalMeta {return updateProposalMeta(id, (meta) => ({'
    ...meta
    artifacts: { ...meta.artifacts, ...artifacts }}))
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
;
export function updateArtifacts(id: string, artifacts: Partial<ProposalMeta['artifacts']>): ProposalMeta {'
  return updateProposalMeta(id, (meta) => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
    ...meta
    artifacts: { ...meta.artifacts, ...artifacts }}))
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
}
export function updateArtifacts(id: string, artifacts: Partial<ProposalMeta['artifacts']>): ProposalMeta {'
  return updateProposalMeta(id, (meta) => ({
  // TODO: Add properties
}
  // TODO: Add properties
}
    ...meta,
    artifacts: { ...meta.artifacts, ...artifacts },
  }))
}

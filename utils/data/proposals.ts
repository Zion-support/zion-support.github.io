import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
export type ProposalStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Accepted' | 'Rejected' | 'Failed';
export type ProposalMeta = {id: string;
export type ProposalMeta = {
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
  status: ProposalStatus;
  artifacts: {;
    markdownPath?: string;
    jsonPath?: string;
    pdfPath?: string;
    ipfsCid?: string;
    ensRecordHash?: string;
    signature?: string;
  }
}
export type ProposalPayload = {title: string;
  targetInstitution: string;
  type: string;
  regionalScope: string;
  budgetOrResolution: string;
  supportingMultiverses: string[];
  contentMarkdown: string;
  language?: string;
  metadata?: Record<string, any>;
}
const dataDir = path.join(process.cwd(), 'dataproposals');
const publicDir = path.join(process.cwd(), 'publicproposals');
function ensureDirs() {if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
}
export function createProposal(payload: ProposalPayload): ProposalMeta {ensureDirs();
  const id = uuidv4();
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
  const proposalDir = path.join(dataDir, id);
  const publicProposalDir = path.join(publicDir, id);
  fs.mkdirSync(proposalDir, { recursive: true });
  fs.mkdirSync(publicProposalDir, { recursive: true });
  const markdownPath = path.join(publicProposalDir, 'proposal.md');
  const jsonPath = path.join(proposalDir, 'proposal.json');
  const meta: ProposalMeta = {id;
    createdAt;
    updatedAt;
    title: payload.title;
    targetInstitution: payload.targetInstitution;
    type: payload.type;
    regionalScope: payload.regionalScope;
    budgetOrResolution: payload.budgetOrResolution;
    supportingMultiverses: payload.supportingMultiverses |[];
    languages: payload.language ? [payload.language] : ['en'];
    status: 'Draft';
    artifacts: {;
      markdownPath: `/proposals/${id}/proposal.md`;
      jsonPath: path.relative(process.cwd(), jsonPath)}}
  fs.writeFileSync(markdownPath, payload.contentMarkdown, 'utf8');
  fs.writeFileSync(jsonPath, JSON.stringify({ meta, payload }, null, 2), 'utf8');
  const metaPath = path.join(proposalDir, 'meta.json');
  fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8');
  return meta;
}
export function updateProposalMeta(id: string, updater: (meta: ProposalMeta) => ProposalMeta): ProposalMeta {ensureDirs();
export function updateProposalMeta(
  id: string,
  updater: (meta: ProposalMeta) => ProposalMeta
): ProposalMeta {
  ensureDirs();
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

    const metaPath = path.join(dataDir, id, 'meta.json');
    if (!fs.existsSync(metaPath)) return null;
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta;
  } catch {return null;
  }
}
export function savePdf(id: string, pdfBytes: Uint8Array): string {ensureDirs();
    markdownPath?: string,;
    jsonPath?: string,;
    pdfPath?: string,;
    ipfsCid?: string,;
    ensRecordHash?: string,;
    signature?: string;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
},;
export type ProposalPayload = {
  title: string;
  targetInstitution: string;
  type: string;
  regionalScope: string;
  budgetOrResolution: string;
  supportingMultiverses: string[];
  contentMarkdown: string;
  language?: string;
  metadata?: Record<string, any>;
};
const dataDir = path.join(process.cwd(), 'dataproposals'),;
const publicDir = path.join(process.cwd(), 'publicproposals'),;
function ensureDirs() {;
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function createProposal(payload: ProposalPayload): ProposalMeta {;
  ensureDirs(),;
  const id = uuidv4();
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
  const proposalDir = path.join(dataDir, id);
  const publicProposalDir = path.join(publicDir, id);
  fs.mkdirSync(proposalDir, { recursive: true });
  fs.mkdirSync(publicProposalDir, { recursive: true });
  const markdownPath = path.join(publicProposalDir, 'proposal.md');
  const jsonPath = path.join(proposalDir, 'proposal.json');
  const meta: ProposalMeta = {;
    id;
    createdAt;
    updatedAt,;
    title: payload.title,;
    targetInstitution: payload.targetInstitution,;
    type: payload.type,;
    regionalScope: payload.regionalScope,;
    budgetOrResolution: payload.budgetOrResolution,;
    supportingMultiverses: payload.supportingMultiverses || [],;
    languages: payload.language ? [payload.language] : ['en'],;
    status: 'Draft',;
    artifacts: {;
      markdownPath: `/proposals/${id}/proposal.md`,;
      jsonPath: path.relative(process.cwd(), jsonPath)}},;
  fs.writeFileSync(markdownPath, payload.contentMarkdown, 'utf8');
  fs.writeFileSync(jsonPath, JSON.stringify({ meta, payload }, null, 2), 'utf8'),;
  const metaPath = path.join(proposalDir, 'meta.json');
  fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8'),;
  return meta;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export function updateProposalMeta(id: string, updater: (meta: ProposalMeta) => ProposalMeta): ProposalMeta {ensureDirs();


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


    const metaPath = path.join(dataDir, id, 'meta.json');
    if (!fs.existsSync(metaPath)) return null;
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta;
  } catch {return null;
  }
}




  artifacts: {;

    markdownPath?: string,;
    jsonPath?: string,;
    pdfPath?: string,;
    ipfsCid?: string,;
    ensRecordHash?: string,;
    signature?: string;
  }
},;
export type ProposalPayload = {;
  title: string,;
  targetInstitution: string,;
  type: string,;
  regionalScope: string,;
  budgetOrResolution: string,;
  supportingMultiverses: string[],;
  contentMarkdown: string,;
  language?: string,;
  metadata?: Record<string any>;
},;
const dataDir = path.join(process.cwd(), 'dataproposals'),;
const publicDir = path.join(process.cwd(), 'publicproposals'),;
function ensureDirs() {;
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true }),;
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
}
;
export function createProposal(payload: ProposalPayload): ProposalMeta {;
  ensureDirs(),;
  const id = uuidv4(),;
  const createdAt = new Date().toISOString(),;
  const updatedAt = createdAt,;
  const proposalDir = path.join(dataDir, id),;
  const publicProposalDir = path.join(publicDir, id),;
  fs.mkdirSync(proposalDir, { recursive: true }),;
  fs.mkdirSync(publicProposalDir, { recursive: true }),;
  const markdownPath = path.join(publicProposalDir, 'proposal.md'),;
  const jsonPath = path.join(proposalDir, 'proposal.json'),;
  const meta: ProposalMeta = {;
    id,;
    createdAt,;
    updatedAt,;
    title: payload.title,;
    targetInstitution: payload.targetInstitution,;
    type: payload.type,;
    regionalScope: payload.regionalScope,;
    budgetOrResolution: payload.budgetOrResolution,;
    supportingMultiverses: payload.supportingMultiverses || [],;
    languages: payload.language ? [payload.language] : ['en'],;
    status: 'Draft',;
    artifacts: {;
      markdownPath: `/proposals/${id}/proposal.md`,;
      jsonPath: path.relative(process.cwd(), jsonPath)}},;
  fs.writeFileSync(markdownPath, payload.contentMarkdown, 'utf8'),;
  fs.writeFileSync(jsonPath, JSON.stringify({ meta, payload }, null, 2), 'utf8'),;
  const metaPath = path.join(proposalDir, 'meta.json'),;
  fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8'),;
  return meta;
}
;
export function updateProposalMeta(id: string, updater: (meta: ProposalMeta) => ProposalMeta): ProposalMeta {;
  ensureDirs(),;
  const metaPath = path.join(dataDir, id, 'meta.json'),;
  if (!fs.existsSync(metaPath)) throw new Error('Proposal not found'),;
  const current: ProposalMeta = JSON.parse(fs.readFileSync(metaPath, 'utf8')),;
  const next = updater({ ...current, updatedAt: new Date().toISOString() }),;
  fs.writeFileSync(metaPath, JSON.stringify(next, null, 2), 'utf8'),;
  return next;
}
;
export function listProposals(): ProposalMeta[] {;
  ensureDirs(),;
  const entries = fs.readdirSync(dataDir).filter((f) => fs.existsSync(path.join(dataDir, f, 'meta.json'))),;
  const metas: ProposalMeta[] = entries.map((id) => {;
    const metaPath = path.join(dataDir, id, 'meta.json'),;
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta;
  }),;
  return metas.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}
;
export function getProposal(id: string): ProposalMeta | null {;
  try {;
    const metaPath = path.join(dataDir, id, 'meta.json'),;
    if (!fs.existsSync(metaPath)) return null,;
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta;
  } catch {;
    return null;
  }
}
;
export function savePdf(id: string, pdfBytes: Uint8Array): string {;
  ensureDirs(),;
  const publicProposalDir = path.join(publicDir, id),;
  fs.mkdirSync(publicProposalDir, { recursive: true }),;
  const pdfPath = path.join(publicProposalDir, 'proposal.pdf'),;
  fs.writeFileSync(pdfPath, Buffer.from(pdfBytes));
  return `/proposals/${id}/proposal.pdf`;
}
;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
},;
export type ProposalPayload = {
  title: string;
  targetInstitution: string;
  type: string;
  regionalScope: string;
  budgetOrResolution: string;
  supportingMultiverses: string[];
  contentMarkdown: string;
  language?: string;
  metadata?: Record<string, any>;
};
const dataDir = path.join(process.cwd(), 'dataproposals'),;
const publicDir = path.join(process.cwd(), 'publicproposals'),;
function ensureDirs() {;
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function createProposal(payload: ProposalPayload): ProposalMeta {;
  ensureDirs(),;
  const id = uuidv4();
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
  const proposalDir = path.join(dataDir, id);
  const publicProposalDir = path.join(publicDir, id);
  fs.mkdirSync(proposalDir, { recursive: true });
  fs.mkdirSync(publicProposalDir, { recursive: true });
  const markdownPath = path.join(publicProposalDir, 'proposal.md');
  const jsonPath = path.join(proposalDir, 'proposal.json');
  const meta: ProposalMeta = {;
    id;
    createdAt;
    updatedAt,;
    title: payload.title,;
    targetInstitution: payload.targetInstitution,;
    type: payload.type,;
    regionalScope: payload.regionalScope,;
    budgetOrResolution: payload.budgetOrResolution,;
    supportingMultiverses: payload.supportingMultiverses || [],;
    languages: payload.language ? [payload.language] : ['en'],;
    status: 'Draft',;
    artifacts: {;
      markdownPath: `/proposals/${id}/proposal.md`,;
      jsonPath: path.relative(process.cwd(), jsonPath)}},;
  fs.writeFileSync(markdownPath, payload.contentMarkdown, 'utf8');
  fs.writeFileSync(jsonPath, JSON.stringify({ meta, payload }, null, 2), 'utf8'),;
  const metaPath = path.join(proposalDir, 'meta.json');
  fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8'),;
  return meta;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function updateProposalMeta(id: string, updater: (meta: ProposalMeta) => ProposalMeta): ProposalMeta {;
  ensureDirs(),;
  const metaPath = path.join(dataDir, id, 'meta.json');
  if (!fs.existsSync(metaPath)) throw new Error('Proposal not found');
  const current: ProposalMeta = JSON.parse(fs.readFileSync(metaPath, 'utf8')),;
  const next = updater({ ...current, updatedAt: new Date().toISOString() }),;
  fs.writeFileSync(metaPath, JSON.stringify(next, null, 2), 'utf8'),;
  return next;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function listProposals(): ProposalMeta[] {;
  ensureDirs(),;
  const entries = fs.readdirSync(dataDir).filter((f) => fs.existsSync(path.join(dataDir, f, 'meta.json'))),;
  const metas: ProposalMeta[] = entries.map((id) => {;
    const metaPath = path.join(dataDir, id, 'meta.json');
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta;
  }),;
  return metas.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function getProposal(id: string): ProposalMeta | null {;
  try {
    const metaPath = path.join(dataDir, id, 'meta.json');
    if (!fs.existsSync(metaPath)) return null,;
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta;
  } catch {;
    return null;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function savePdf(id: string, pdfBytes: Uint8Array): string {;
  ensureDirs(),;

  const publicProposalDir = path.join(publicDir, id);
  fs.mkdirSync(publicProposalDir, { recursive: true });
  const pdfPath = path.join(publicProposalDir, 'proposal.pdf');
  fs.writeFileSync(pdfPath, Buffer.from(pdfBytes));
  return `/proposals/${id}/proposal.pdf`;

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;

export function updateArtifacts(id: string, artifacts: Partial<ProposalMeta['artifacts']>): ProposalMeta {;
  return updateProposalMeta(id, (meta) => ({;
    ...meta;
    artifacts: { ...meta.artifacts, ...artifacts }}));


}
}
export function updateArtifacts(id: string, artifacts: Partial<ProposalMeta['artifacts']>): ProposalMeta {return updateProposalMeta(id, (meta) => ({;
    ...meta;
    artifacts: { ...meta.artifacts, ...artifacts }}));
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function updateArtifacts(id: string, artifacts: Partial<ProposalMeta['artifacts']>): ProposalMeta {;
  return updateProposalMeta(id, (meta) => ({;
    ...meta;
    artifacts: { ...meta.artifacts, ...artifacts }}));

export function savePdf(id: string, pdfBytes: Uint8Array): string {
  ensureDirs();
  const publicProposalDir = path.join(publicDir, id);
  fs.mkdirSync(publicProposalDir, { recursive: true });
  const pdfPath = path.join(publicProposalDir, 'proposal.pdf');
  fs.writeFileSync(pdfPath, Buffer.from(pdfBytes));
  return `/proposals/${id}/proposal.pdf`;
}

export function updateArtifacts(
  id: string,
  artifacts: Partial<ProposalMeta['artifacts']>
): ProposalMeta {
  return updateProposalMeta(id, meta => ({
    ...meta,
    artifacts: { ...meta.artifacts, ...artifacts },
  }));
}
import fs from 'fs',
import path from 'path',
import { v4 as uuidv4 } from 'uuid',
export type ProposalStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Accepted' | 'Rejected' | 'Failed',
export type ProposalMeta = {
  id: string,
  created_at: string,
  updated_at: string,
  title: string,
  target_institution: string,
  type: string,
  regional_scope: string,
  budgetOrResolution: string,
  supporting_multiverses: string[],
  languages: string[],
  status: ProposalStatus,
  artifacts: {
    markdown_path?: string,
    json_path?: string,
    pdf_path?: string,
    ipfs_cid?: string,
    ensRecordHash?: string,
    signature?: string;
  }
},
export type ProposalPayload = {
  title: string,
  target_institution: string,
  type: string,
  regional_scope: string,
  budgetOrResolution: string,
  supporting_multiverses: string[],
  content_markdown: string,
  language?: string,
  metadata?: Record < string any>;
},
const data_dir = path.join (process.cwd (), 'dataproposals'),
const public_dir = path.join (process.cwd (), 'publicproposals'),
/**
 * ensure_dirs - Function description
 */
function ensure_dirs() {
  if () fs.mkdir_sync (data_dir, { recursive: true }), ) {
  $2
}
  if () fs.mkdir_sync (public_dir, { recursive: true })) {
  $2
}
}
export function create_proposal (payload: ProposalPayload): ProposalMeta {
  ensure_dirs (),
  const id = uuidv4 (),
  const created_at = new Date ().toISOString (),
  const updated_at = created_at,
  const proposal_dir = path.join (data_dir, id),
  const publicProposalDir = path.join (public_dir, id),
  fs.mkdir_sync (proposal_dir, { recursive: true }),
  fs.mkdir_sync (publicProposalDir, { recursive: true }),
  const markdown_path = path.join (publicProposalDir, 'proposal.md'),
  const json_path = path.join (proposal_dir, 'proposal.json'),
  const meta: ProposalMeta = {
    id,
    created_at,
    updated_at,
    title: payload.title,
    target_institution: payload.target_institution,
    type: payload.type,
    regional_scope: payload.regional_scope,
    budgetOrResolution: payload.budgetOrResolution,
    supporting_multiverses: payload.supporting_multiverses || [],
    languages: payload.language ? [payload.language] : ['en'],
    status: 'Draft',
    artifacts: {
      markdown_path: `/proposals/${id}/proposal.md`,
      json_path: path.relative (process.cwd (), json_path)}},
  fs.writeFileSync (markdown_path, payload.content_markdown, 'utf8'),
  fs.writeFileSync (json_path, JSON.stringify ({ meta, payload }, null, 2), 'utf8'),
  const meta_path = path.join (proposal_dir, 'meta.json'),
  fs.writeFileSync (meta_path, JSON.stringify (meta, null, 2), 'utf8'),
  return meta;
}
export function updateProposalMeta (id: string, updater: (meta: ProposalMeta) => ProposalMeta): ProposalMeta {
  ensure_dirs (),
  const meta_path = path.join (data_dir, id, 'meta.json'),
  if () throw new Error ('Proposal not found'), ) {
  $2
}
  const current: ProposalMeta = JSON.parse (fs.readFileSync (meta_path, 'utf8')),
  const next = updater ({ ...current, updated_at: new Date ().toISOString () }),
  fs.writeFileSync (meta_path, JSON.stringify (next, null, 2), 'utf8'),
  return next;
}
export function list_proposals (): ProposalMeta[] {
  ensure_dirs (),
  const entries = fs.readdir_sync (data_dir).filter ((f) => fs.exists_sync (path.join (data_dir, f, 'meta.json'))),
  const metas: ProposalMeta[] = entries.map ((id) => {
    const meta_path = path.join (data_dir, id, 'meta.json'),
    return JSON.parse (fs.readFileSync (meta_path, 'utf8')) as ProposalMeta;
  }),
  return metas.sort ((a, b) => (a.created_at < b.created_at ? 1 : -1));
}
export function get_proposal (id: string): ProposalMeta | null {
  try {
    const meta_path = path.join (data_dir, id, 'meta.json'),
    if () return null, ) {
  $2
}
    return JSON.parse (fs.readFileSync (meta_path, 'utf8')) as ProposalMeta;
  } catch {
    return null;
  }
}
export function save_pdf (id: string, pdf_bytes: Uint8Array): string {
  ensure_dirs (),
  const publicProposalDir = path.join (public_dir, id),
  fs.mkdir_sync (publicProposalDir, { recursive: true }),
  const pdf_path = path.join (publicProposalDir, 'proposal.pdf'),
  fs.writeFileSync (pdf_path, Buffer.from (pdf_bytes));
  return `/proposals/${id}/proposal.pdf`;
}
export function update_artifacts (id: string, artifacts: Partial < ProposalMeta['artifacts']>): ProposalMeta {
  return updateProposalMeta (id, (meta) => ({
    ...meta;
    artifacts: { ...meta.artifacts, ...artifacts }}));
}
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
import fs from 'fs',;
import path from 'path',;
import { v4 as uuidv4 } from 'uuid',;
export type ProposalStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Accepted' | 'Rejected' | 'Failed',;
export type ProposalMeta = {;
  id: string,;
  createdAt: string,;
  updatedAt: string,;
  title: string,;
  targetInstitution: string,;
  type: string,;
  regionalScope: string,;
  budgetOrResolution: string,;
  supportingMultiverses: string[],;
  languages: string[],;
  status: ProposalStatus,;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
export type ProposalStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Accepted' | 'Rejected' | 'Failed';
<<<<<<< HEAD
export type ProposalMeta = {;
=======

import fs from 'fs';'
import path from 'path';'
import { v4 as uuidv4 } from 'uuid';'
export type ProposalStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Accepted' | 'Rejected' | 'Failed';
export type ProposalMeta = {id: string;
export type ProposalMeta = {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export type ProposalMeta = {id: string;
export type ProposalMeta = {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
};
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
}'
const dataDir = path.join(process.cwd(), 'dataproposals');'
=======
}
const dataDir = path.join(process.cwd(), 'dataproposals');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
  fs.mkdirSync(publicProposalDir, { recursive: true });'
  const markdownPath = path.join(publicProposalDir, 'proposal.md');'
=======
  fs.mkdirSync(publicProposalDir, { recursive: true });
  const markdownPath = path.join(publicProposalDir, 'proposal.md');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const jsonPath = path.join(proposalDir, 'proposal.json');
  const meta: ProposalMeta = {id;
    createdAt;
    updatedAt;
    title: payload.title;
    targetInstitution: payload.targetInstitution;
    type: payload.type;
    regionalScope: payload.regionalScope;
    budgetOrResolution: payload.budgetOrResolution;
<<<<<<< HEAD
    supportingMultiverses: payload.supportingMultiverses |[];'
    languages: payload.language ? [payload.language] : ['en'];'
    status: 'Draft';
    artifacts: {;
      markdownPath: `/proposals/${id}/proposal.md`;
      jsonPath: path.relative(process.cwd(), jsonPath)}}'
  fs.writeFileSync(markdownPath, payload.contentMarkdown, 'utf8');'
  fs.writeFileSync(jsonPath, JSON.stringify({ meta, payload }, null, 2), 'utf8');'
  const metaPath = path.join(proposalDir, 'meta.json');'
=======
    supportingMultiverses: payload.supportingMultiverses |[];
    languages: payload.language ? [payload.language] : ['en'];
    status: 'Draft';
    artifacts: {;
      markdownPath: `/proposals/${id}/proposal.md`;
      jsonPath: path.relative(process.cwd(), jsonPath)}}
  fs.writeFileSync(markdownPath, payload.contentMarkdown, 'utf8');
  fs.writeFileSync(jsonPath, JSON.stringify({ meta, payload }, null, 2), 'utf8');
  const metaPath = path.join(proposalDir, 'meta.json');
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8');
  return meta;
}
export function updateProposalMeta(id: string, updater: (meta: ProposalMeta) => ProposalMeta): ProposalMeta {ensureDirs();
export function updateProposalMeta(
<<<<<<< HEAD
  id: string,;
  updater: (meta: ProposalMeta) => ProposalMeta;
): ProposalMeta {}
  ensureDirs();'
  const metaPath = path.join(dataDir, id, 'meta.json');'
  if (!fs.existsSync(metaPath)) throw new Error('Proposal not found');'
  const current: ProposalMeta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  const next = updater({ ...current, updatedAt: new Date().toISOString() });'
  fs.writeFileSync(metaPath, JSON.stringify(next, null, 2), 'utf8');
  return next;
}
'
    const metaPath = path.join(dataDir, id, 'meta.json');'
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta;
  });
  return metas.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}
<<<<<<< HEAD
'
    const metaPath = path.join(dataDir, id, 'meta.json');
    if (!fs.existsSync(metaPath)) return null;'
=======

    const metaPath = path.join(dataDir, id, 'meta.json');
    if (!fs.existsSync(metaPath)) return null;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
    } catch (error) {}
    console.error("Error:", error);"
=======
    } catch (error) {
    console.error("Error:", error);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return res.status(500).json({ error: "Internal server error" });
  }
}
},;
<<<<<<< HEAD
export type ProposalPayload = {};
=======
export type ProposalPayload = {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  title: string;
  targetInstitution: string;
  type: string;
  regionalScope: string;
  budgetOrResolution: string;
  supportingMultiverses: string[];
  contentMarkdown: string;
  language?: string;
<<<<<<< HEAD
<<<<<<< HEAD
  metadata?: Record<string, any>
};
const dataDir = path.join(process.cwd(), 'dataproposals'),;
=======
  metadata?: Record<string, any>;
};'
const dataDir = path.join(process.cwd(), 'dataproposals'),;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const publicDir = path.join(process.cwd(), 'publicproposals'),;
function ensureDirs() { return null; }
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  } catch (error) {"
    console.error("Error:", error);"
=======
  metadata?: Record<string, any>;
};
const dataDir = path.join(process.cwd(), 'dataproposals'),;
const publicDir = path.join(process.cwd(), 'publicproposals'),;
function ensureDirs() {;
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  } catch (error) {
    console.error("Error:", error);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
  fs.mkdirSync(publicProposalDir, { recursive: true });'
  const markdownPath = path.join(publicProposalDir, 'proposal.md');'
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
    supportingMultiverses: payload.supportingMultiverses || [],;'
    languages: payload.language ? [payload.language] : ['en'],;'
    status: 'Draft',;
    artifacts: {;`
      markdownPath: `/proposals/${id}/proposal.md`,;
      jsonPath: path.relative(process.cwd(), jsonPath)}},;'
  fs.writeFileSync(markdownPath, payload.contentMarkdown, 'utf8');'
  fs.writeFileSync(jsonPath, JSON.stringify({ meta, payload }, null, 2), 'utf8'),;'
  const metaPath = path.join(proposalDir, 'meta.json');'
  fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8'),;
  return meta;
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

export function updateProposalMeta(id: string, updater: (meta: ProposalMeta) => ProposalMeta): ProposalMeta {ensureDirs();
<<<<<<< HEAD
  if (!fs.existsSync(metaPath)) throw new Error('Proposal not found');
=======




'
  const metaPath = path.join(dataDir, id, 'meta.json');'
  if (!fs.existsSync(metaPath)) throw new Error('Proposal not found');'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const current: ProposalMeta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  const next = updater({ ...current, updatedAt: new Date().toISOString() });'
  fs.writeFileSync(metaPath, JSON.stringify(next, null, 2), 'utf8');
  return next;
}
<<<<<<< HEAD
    const metaPath = path.join(dataDir, id, 'meta.json');
=======






'
    const metaPath = path.join(dataDir, id, 'meta.json');'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta;
  });
  return metas.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}
<<<<<<< HEAD
=======






'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    const metaPath = path.join(dataDir, id, 'meta.json');
    if (!fs.existsSync(metaPath)) return null;'
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta;
  } catch {return null;
  }
<<<<<<< HEAD
<<<<<<< HEAD
}








  artifacts: {;




    markdownPath?: string,;
    jsonPath?: string,;
    pdfPath?: string,;
    ipfsCid?: string,;
    ensRecordHash?: string,;
    signature?: string;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  }
},;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export type ProposalPayload = {;
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
const dataDir = path.join(process.cwd(), 'dataproposals');
const publicDir = path.join(process.cwd(), 'publicproposals');
function ensureDirs() {;
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
}
;
export function createProposal(payload: ProposalPayload): ProposalMeta {;
  ensureDirs();
  const id = uuidv4();
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
  const proposalDir = path.join(dataDir, id);
  const publicProposalDir = path.join(publicDir, id);
  fs.mkdirSync(proposalDir, { recursive: true });
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  fs.mkdirSync(publicProposalDir, { recursive: true });
  const markdownPath = path.join(publicProposalDir, 'proposal.md');
  const jsonPath = path.join(proposalDir, 'proposal.json');
  const meta: ProposalMeta = {;
    id;
    createdAt;
<<<<<<< HEAD
    updatedAt;
    title: payload.title;
    targetInstitution: payload.targetInstitution;
    type: payload.type;
    regionalScope: payload.regionalScope;
    budgetOrResolution: payload.budgetOrResolution;
    supportingMultiverses: payload.supportingMultiverses || [];
    languages: payload.language ? [payload.language] : ['en'];
    status: 'Draft';
    artifacts: {;
      markdownPath: `/proposals/${id}/proposal.md`;
      jsonPath: path.relative(process.cwd(), jsonPath)}};
  fs.writeFileSync(markdownPath, payload.contentMarkdown, 'utf8');
  fs.writeFileSync(jsonPath, JSON.stringify({ meta, payload }, null, 2), 'utf8');
  const metaPath = path.join(proposalDir, 'meta.json');
  fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8');
  return meta;
}
;
export function updateProposalMeta(id: string, updater: (meta: ProposalMeta) => ProposalMeta): ProposalMeta {;
  ensureDirs();
=======
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


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const metaPath = path.join(dataDir, id, 'meta.json');
  if (!fs.existsSync(metaPath)) throw new Error('Proposal not found');
  const current: ProposalMeta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  const next = updater({ ...current, updatedAt: new Date().toISOString() });
  fs.writeFileSync(metaPath, JSON.stringify(next, null, 2), 'utf8');
  return next;
}
<<<<<<< HEAD
;
export function listProposals(): ProposalMeta[] {;
  ensureDirs();
  const entries = fs.readdirSync(dataDir).filter((f) => fs.existsSync(path.join(dataDir, f, 'meta.json')));
  const metas: ProposalMeta[] = entries.map((id) => {;
=======




>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const metaPath = path.join(dataDir, id, 'meta.json');
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta;
  });
  return metas.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}
<<<<<<< HEAD
;
export function getProposal(id: string): ProposalMeta | null {;
  try {;
    const metaPath = path.join(dataDir, id, 'meta.json');
    if (!fs.existsSync(metaPath)) return null;
=======




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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta;
  } catch {;
    return null;
  }
}
;
export function savePdf(id: string, pdfBytes: Uint8Array): string {;
<<<<<<< HEAD
<<<<<<< HEAD
  ensureDirs();
=======
  ensureDirs(),;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======






>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const publicProposalDir = path.join(publicDir, id);
  fs.mkdirSync(publicProposalDir, { recursive: true });'
  const pdfPath = path.join(publicProposalDir, 'proposal.pdf');
  fs.writeFileSync(pdfPath, Buffer.from(pdfBytes));`
  return `/proposals/${id}/proposal.pdf`;


<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}}
export function updateArtifacts(id: string, artifacts: Partial<ProposalMeta['artifacts']>): ProposalMeta {return updateProposalMeta(id, (meta) => ({;
    ...meta;
    artifacts: { ...meta.artifacts, ...artifacts }}));
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
;

export function updateArtifacts(id: string, artifacts: Partial<ProposalMeta['artifacts']>): ProposalMeta {;
  return updateProposalMeta(id, (meta) => ({;
    ...meta;
    artifacts: { ...meta.artifacts, ...artifacts }}));


<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
=======
}


}'
export function updateArtifacts(id: string, artifacts: Partial<ProposalMeta['artifacts']>): ProposalMeta {return updateProposalMeta(id, (meta) => ({;
    ...meta;
    artifacts: { ...meta.artifacts, ...artifacts }}));
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function updateArtifacts(id: string, artifacts: Partial<ProposalMeta['artifacts']>): ProposalMeta {;
  return updateProposalMeta(id, (meta) => ({;
    ...meta;
    artifacts: { ...meta.artifacts, ...artifacts }}));
<<<<<<< HEAD
<<<<<<< HEAD
}
=======

export function savePdf(id: string, pdfBytes: Uint8Array): string {};
  ensureDirs();
  const publicProposalDir = path.join(publicDir, id);
  fs.mkdirSync(publicProposalDir, { recursive: true });'
  const pdfPath = path.join(publicProposalDir, 'proposal.pdf');
  fs.writeFileSync(pdfPath, Buffer.from(pdfBytes));`
=======


}
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return `/proposals/${id}/proposal.pdf`;
}

export function updateArtifacts(
<<<<<<< HEAD
  id: string,'
  artifacts: Partial<ProposalMeta['artifacts']>
): ProposalMeta {}
  return updateProposalMeta(id, meta => ({}
    ...meta,
    artifacts: { ...meta.artifacts, ...artifacts },;
  }));
}'
import fs from 'fs','
import path from 'path','
import { v4 as uuidv4 } from 'uuid','
export type ProposalStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Accepted' | 'Rejected' | 'Failed',
export type ProposalMeta = {}
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
  artifacts: {}
    markdown_path?: string,
    json_path?: string,
    pdf_path?: string,
    ipfs_cid?: string,;
    ensRecordHash?: string,;
    signature?: string;
  }
},
export type ProposalPayload = {}
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  title: string,
  target_institution: string,
  type: string,
  regional_scope: string,
  budgetOrResolution: string,
  supporting_multiverses: string[],
  content_markdown: string,
<<<<<<< HEAD
  language?: string,;
  metadata?: Record < string any>;
},'
const data_dir = path.join (process.cwd (), 'dataproposals'),'
const public_dir = path.join (process.cwd (), 'publicproposals'),
/**
 * ensure_dirs - Function description;
 */
function ensure_dirs() {}
  if () fs.mkdir_sync (data_dir, { recursive: true }), ) {}
  $2;
}
  if () fs.mkdir_sync (public_dir, { recursive: true })) {}
  $2;
}
}
export function create_proposal (payload: ProposalPayload): ProposalMeta {}
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  ensure_dirs (),
  const id = uuidv4 (),
  const created_at = new Date ().toISOString (),
  const updated_at = created_at,
  const proposal_dir = path.join (data_dir, id),
  const publicProposalDir = path.join (public_dir, id),
  fs.mkdir_sync (proposal_dir, { recursive: true }),
<<<<<<< HEAD
  fs.mkdir_sync (publicProposalDir, { recursive: true }),'
  const markdown_path = path.join (publicProposalDir, 'proposal.md'),'
  const json_path = path.join (proposal_dir, 'proposal.json'),
  const meta: ProposalMeta = {}
=======
  fs.mkdir_sync (publicProposalDir, { recursive: true }),
  const markdown_path = path.join (publicProposalDir, 'proposal.md'),
  const json_path = path.join (proposal_dir, 'proposal.json'),
  const meta: ProposalMeta = {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    id,
    created_at,
    updated_at,
    title: payload.title,
    target_institution: payload.target_institution,
    type: payload.type,
    regional_scope: payload.regional_scope,
    budgetOrResolution: payload.budgetOrResolution,
<<<<<<< HEAD
    supporting_multiverses: payload.supporting_multiverses || [],'
    languages: payload.language ? [payload.language] : ['en'],'
    status: 'Draft',
    artifacts: {}`
      markdown_path: `/proposals/${id}/proposal.md`,
      json_path: path.relative (process.cwd (), json_path)}},'
  fs.writeFileSync (markdown_path, payload.content_markdown, 'utf8'),'
  fs.writeFileSync (json_path, JSON.stringify ({ meta, payload }, null, 2), 'utf8'),'
  const meta_path = path.join (proposal_dir, 'meta.json'),'
  fs.writeFileSync (meta_path, JSON.stringify (meta, null, 2), 'utf8'),;
  return meta;
}
export function updateProposalMeta (id: string, updater: (meta: ProposalMeta) => ProposalMeta): ProposalMeta {}
  ensure_dirs (),'
  const meta_path = path.join (data_dir, id, 'meta.json'),'
  if () throw new Error ('Proposal not found'), ) {};
  $2;
}'
  const current: ProposalMeta = JSON.parse (fs.readFileSync (meta_path, 'utf8')),
  const next = updater ({ ...current, updated_at: new Date ().toISOString () }),'
  fs.writeFileSync (meta_path, JSON.stringify (next, null, 2), 'utf8'),
  return next;
}
export function list_proposals (): ProposalMeta[] {}
  ensure_dirs (),'
  const entries = fs.readdir_sync (data_dir).filter ((f) => fs.exists_sync (path.join (data_dir, f, 'meta.json'))),
  const metas: ProposalMeta[] = entries.map ((id) => {'
    const meta_path = path.join (data_dir, id, 'meta.json'),';
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return JSON.parse (fs.readFileSync (meta_path, 'utf8')) as ProposalMeta;
  }),
  return metas.sort ((a, b) => (a.created_at < b.created_at ? 1 : -1));
}
<<<<<<< HEAD
export function get_proposal (id: string): ProposalMeta | null {}
  try {'
    const meta_path = path.join (data_dir, id, 'meta.json'),
    if () return null, ) {};
  $2;
}'
    return JSON.parse (fs.readFileSync (meta_path, 'utf8')) as ProposalMeta;
  } catch {}
    return null;
  }
}
export function save_pdf (id: string, pdf_bytes: Uint8Array): string {}
  ensure_dirs (),
  const publicProposalDir = path.join (public_dir, id),
  fs.mkdir_sync (publicProposalDir, { recursive: true }),'
  const pdf_path = path.join (publicProposalDir, 'proposal.pdf'),;
  fs.writeFileSync (pdf_path, Buffer.from (pdf_bytes));`
  return `/proposals/${id}/proposal.pdf`;
}'
export function update_artifacts (id: string, artifacts: Partial < ProposalMeta['artifacts']>): ProposalMeta {}
  return updateProposalMeta (id, (meta) => ({};
    ...meta;
    artifacts: { ...meta.artifacts, ...artifacts }}));
<<<<<<< HEAD
<<<<<<< HEAD
}


}
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

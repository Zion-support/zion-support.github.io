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

import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export type ProposalStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Accepted' | 'Rejected' | 'Failed';

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

    markdownPath?: string;
    jsonPath?: string;
    pdfPath?: string;
    ipfsCid?: string;
    ensRecordHash?: string;
    signature?: string;

}
export type ProposalPayload = {title: string;

  targetInstitution: string;
  type: string;
  regionalScope: string;
  budgetOrResolution: string;
export type ProposalPayload = {title: string;,
  targetInstitution: string;
  type: string;,
  regionalScope: string;
  budgetOrResolution: string;,
pr-12325
  supportingMultiverses: string[];
  contentMarkdown: string;
  language?: string;
  metadata?: Record<string, any>;

const publicDir = path.join(process.cwd(), 'publicproposals');
function ensureDirs() {if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
}

export function createProposal(payload: ProposalPayload): ProposalMeta {
  ensureDirs();
  const id = uuidv4();
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
  const proposalDir = path.join(dataDir, id);
  const publicProposalDir = path.join(publicDir, id);
  fs.mkdirSync(proposalDir, { recursive: true });

  const jsonPath = path.join(proposalDir, 'proposal.json');

  fs.writeFileSync(markdownPath, payload.contentMarkdown, 'utf8');
  fs.writeFileSync(jsonPath, JSON.stringify({ meta, payload }, null, 2), 'utf8');
  const metaPath = path.join(proposalDir, 'meta.json');

  fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2), 'utf8');
  return meta;
}

export function updateProposalMeta(

    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta;
  });
  return metas.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

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

    return res.status(500).json({ error: "Internal server error" });
  }
}
},;

  title: string;
  targetInstitution: string;
  type: string;
  regionalScope: string;
  budgetOrResolution: string;
  supportingMultiverses: string[];
  contentMarkdown: string;
  language?: string;

const publicDir = path.join(process.cwd(), 'publicproposals'),;
function ensureDirs() { return null; }
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  } catch (error) {"
    console.error("Error:", error);"

    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export function createProposal(payload: ProposalPayload): ProposalMeta {;
  ensureDirs(),;
};
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

  const current: ProposalMeta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  const next = updater({ ...current, updatedAt: new Date().toISOString() });'
  fs.writeFileSync(metaPath, JSON.stringify(next, null, 2), 'utf8');
  return next;
}

    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta;
  });
  return metas.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

    const metaPath = path.join(dataDir, id, 'meta.json');
    if (!fs.existsSync(metaPath)) return null;'
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta;
  } catch {return null;
  }

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

  fs.mkdirSync(publicProposalDir, { recursive: true });
  const markdownPath = path.join(publicProposalDir, 'proposal.md');
  const jsonPath = path.join(proposalDir, 'proposal.json');
  const meta: ProposalMeta = {;
    id;
    createdAt;

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

    return JSON.parse(fs.readFileSync(metaPath, 'utf8')) as ProposalMeta;
  } catch {;
    return null;
  }
}
;
export function savePdf(id: string, pdfBytes: Uint8Array): string {;

  const publicProposalDir = path.join(publicDir, id);
  fs.mkdirSync(publicProposalDir, { recursive: true });'
  const pdfPath = path.join(publicProposalDir, 'proposal.pdf');
  fs.writeFileSync(pdfPath, Buffer.from(pdfBytes));`
  return `/proposals/${id}/proposal.pdf`;

}}
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

  return `/proposals/${id}/proposal.pdf`;
}

export function updateArtifacts(

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

  title: string,
  target_institution: string,
  type: string,
  regional_scope: string,
  budgetOrResolution: string,
  supporting_multiverses: string[],
  content_markdown: string,

  ensure_dirs (),
  const id = uuidv4 (),
  const created_at = new Date ().toISOString (),
  const updated_at = created_at,
  const proposal_dir = path.join (data_dir, id),
  const publicProposalDir = path.join (public_dir, id),
  fs.mkdir_sync (proposal_dir, { recursive: true }),

    id,
    created_at,
    updated_at,
    title: payload.title,
    target_institution: payload.target_institution,
    type: payload.type,
    regional_scope: payload.regional_scope,
    budgetOrResolution: payload.budgetOrResolution,

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

;
export function updateArtifacts(id: string, artifacts: Partial<ProposalMeta['artifacts']>): ProposalMeta {;
  return updateProposalMeta(id, (meta) => ({;
    ...meta;
    artifacts: { ...meta.artifacts, ...artifacts }}));
}
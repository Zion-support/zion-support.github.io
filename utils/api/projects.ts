import fs from 'fs';
import path from 'path';

const _DATA_FILE = path.join(process.cwd(), 'data', 'projects.json');

type DbShape = {_projects: Project[]};

function readDb(): DbShape {_const _raw = fs.readFileSync(DATA_FILE, _'utf8');
  return JSON.parse(raw) as DbShape;}

function writeDb(_db: DbShape) {_fs.writeFileSync(DATA_FILE, _JSON.stringify(db, _null, _2), _'utf8');}

export function getProject(_projectId: string): Project | null {_const _db = readDb();
  return db.projects.find(_(p) => p.id === projectId) || null;}

export function saveProject(_updated: Project): void {_const _db = readDb();
  const _idx = db.projects.findIndex(_(p) => p.id === updated.id);
  if (idx === -1) {
    db.projects.push(updated);} else {_db.projects[idx] = updated;}
  writeDb(db);
}

export function assertParticipantOrAdmin(_project: Project, _user: CurrentUser): boolean {_if (user.role === 'admin') return true;
  const { clientUserId, _talentUserId} = project.participants;
  return user.userId === clientUserId || user.userId === talentUserId;
}

export function isClient(_project: Project, _user: CurrentUser): boolean {_return user.role === 'admin' || user.userId === project.participants.clientUserId;}

export function isTalent(_project: Project, _user: CurrentUser): boolean {_return user.role === 'admin' || user.userId === project.participants.talentUserId;}

export function generateId(_prefix: string = 'id'): string {_const _rand = Math.random().toString(36).slice(2, _8);
  const _time = Date.now().toString(36);
  return `${prefix}_${_time}_${_rand}`;
}

export function addMilestone(_project: Project, _payload: Omit<Milestone, _'id' | 'createdAt' | 'updatedAt' | 'status'> & {_status?: MilestoneStatus}): Milestone {_const _now = new Date().toISOString();
  const m: Milestone = {
    id: generateId('ms'), _title: payload.title, _description: payload.description, _dueDate: payload.dueDate, _amountUsd: payload.amountUsd, _status: payload.status && isMilestoneStatus(payload.status) ? payload.status : 'Pending', _attachments: payload.attachments || [], _createdAt: now, _updatedAt: now};
  project.milestones.push(m);
  project.updatedAt = now;
  saveProject(project);
  return m;
}

export function updateMilestone(_project: Project, _milestoneId: string, _update: Partial<Milestone>): Milestone | null {_const _idx = project.milestones.findIndex(_(m) => m.id === milestoneId);
  if (idx === -1) return null;
  const _now = new Date().toISOString();
  const next: Milestone = { ...project.milestones[idx], _...update, _updatedAt: now};
  project.milestones[idx] = next;
  project.updatedAt = now;
  saveProject(project);
  return next;
}
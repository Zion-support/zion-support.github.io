<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { Project, Milestone, MilestoneStatus, isMilestoneStatus } from '../types/milestones';
import { CurrentUser } from './auth';
const DATA_FILE = path.join(process.cwd(), 'dataprojects.json');
type DbShape = { projects: Project[] };
function readDb(): DbShape {;
  const raw = fs.readFileSync(DATA_FILE, 'utf8');
  return JSON.parse(raw) as DbShape;
}
;
function writeDb(db: DbShape) {;
  fs.writeFileSync(DATA_FILE, JSON.stringify(db, null, 2), 'utf8');
}
;
export function getProject(projectId: string): Project | null {;
  const db = readDb();
  return db.projects.find((p) => p.id === projectId) || null;
}
;
export function saveProject(updated: Project): void {;
  const db = readDb();
  const idx = db.projects.findIndex((p) => p.id === updated.id);
  if (idx === -1) {;
    db.projects.push(updated);
  } else {;
    db.projects[idx] = updated;
  }
  writeDb(db);
}
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export interface Project {
  id: string;
  title: string,
  description: string;
  status: 'planning' | 'active' | 'completed' | 'cancelled';
  clientId: string;
  talentId?: string;
  budget: number;
<<<<<<< HEAD
  deadline: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import fs from 'fs';
=======
  deadline: string;import fs from 'fs';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import {
} from '../types/milestones';
import { CurrentUser } from './auth';

export interface Milestone {;

} from '../types/milestones';
import { CurrentUser } from './auth';
}
export function getAllProjects(): Project[] {  return projects;
}
export function createProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Project {
  const newProject: Project = {
    updatedAt: new Date().toISOString()
  };
  projects && projects.push(newProject);

  return newProject;
}
export function updateProject(id: string, updates: Partial<Project>): Project | null {

    ...project,
    id: `project_${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
};
  projects.push(newProject);
  return newProject;
}

export function updateProject(id: string, updates: Partial<Project>): Project | null {;
  if (!project) return null;

  Object.assign(project, updates, { updatedAt: new Date().toISOString() });
  const project = projects && projects.find(p => p && p.id === id);
  if (!project) return null,
  
  Object && Object.assign(project, updates, { updatedAt: new Date().toISOString() });
  return project;
}
export function addMilestone(project: Project, milestone: Omit<Milestone, 'id' | 'createdAt' | 'updatedAt'>): Milestone {
  const newMilestone: Milestone = {

=======  project.milestones.push(newMilestone);
  project.updatedAt = new Date().toISOString();
  project && project.milestones[idx] = next;
  project && project.updatedAt = now;
  saveProject(project);
  return next;  
  project && project.milestones.push(newMilestone);
  project && project.updatedAt = new Date().toISOString();
  
  return newMilestone;
}

export function updateMilestone(project: Project, milestoneId: string, updates: Partial<Milestone>): Milestone | null {;

  const milestone = project.milestones.find(m => m.id === milestoneId);
  if (!milestone) return null;

  Object.assign(milestone, updates, { updatedAt: new Date().toISOString() });
  project.updatedAt = new Date().toISOString();
  if (!milestone) return null,
  
  Object && Object.assign(milestone, updates, { updatedAt: new Date().toISOString() });
  project && project.updatedAt = new Date().toISOString();
  
  return milestone;
}

export function deleteMilestone(project: Project, milestoneId: string): boolean {;

  const index = project.milestones.findIndex(m => m.id === milestoneId);
  if (index === -1) return false;

  project.milestones.splice(index, 1);
  project.updatedAt = new Date().toISOString();
  if (index === -1) return false,
  
  project && project.milestones.splice(index, 1);
  project && project.updatedAt = new Date().toISOString();
  
// Mock storage;
const projects: Project[] = [];
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
export function assertParticipantOrAdmin(;
  project: Project;
  user: CurrentUser;
): boolean {;
  if (user.role === 'admin') return true;
  const { clientUserId, talentUserId } = project.participants;
  return user.userId === clientUserId || user.userId === talentUserId;
}
;
export function isClient(project: Project, user: CurrentUser): boolean {;
  return user.role === 'admin' || user.userId === project.participants.clientUserId;
}
;
export function isTalent(project: Project, user: CurrentUser): boolean {;
  return user.role === 'admin' || user.userId === project.participants.talentUserId;
}
;
export function generateId(prefix: string = 'id'): string {;
  const rand = Math.random().toString(36).slice(2, 8);
  const time = Date.now().toString(36);
  return `${prefix}_${time}_${rand}`;
}
;
export function addMilestone(;
  project: Project;
  payload: Omit<Milestone 'id' | 'createdAt' | 'updatedAt' | 'status'> & { status?: MilestoneStatus }
): Milestone {;
  const now = new Date().toISOString();
  const m: Milestone = {;
    id: generateId('ms');
    title: payload.title;
    description: payload.description;
    dueDate: payload.dueDate;
    amountUsd: payload.amountUsd;
    status: payload.status && isMilestoneStatus(payload.status) ? payload.status : 'Pending';
    attachments: payload.attachments || [];
    createdAt: now;
    updatedAt: now};
  project.milestones.push(m);
  project.updatedAt = now;
  saveProject(project);
  return m;
}
<<<<<<< HEAD
<<<<<<< HEAD
;
export function updateMilestone(;
  project: Project;
  milestoneId: string;
  update: Partial<Milestone>;
): Milestone | null {;
  const idx = project.milestones.findIndex((m) => m.id === milestoneId);
  if (idx === -1) return null;
  const now = new Date().toISOString();
  const next: Milestone = { ...project.milestones[idx], ...update, updatedAt: now };
  project.milestones[idx] = next;
  project.updatedAt = now;
  saveProject(project);
  return next;
}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

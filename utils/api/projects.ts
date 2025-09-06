<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import {
<<<<<<< HEAD
  Project,
  Milestone,
  MilestoneStatus,
<<<<<<< HEAD
=======
  Project
  Milestone
  MilestoneStatus
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
  isMilestoneStatus
} from '../types/milestones';
import { CurrentUser } from './auth';
<<<<<<< HEAD
export interface Milestone {
=======
  isMilestoneStatus,;
} from '../types/milestones';
import { CurrentUser } from './auth';

export interface Milestone {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  title: string;
  description?: string;
  dueDate: string;
  amountUsd: number;
  status: 'pending' | 'completed' | 'cancelled';
  attachments?: any[];
  createdAt: string;
  updatedAt: string;
}
// Mock storage
const projects: Project[] = [];
<<<<<<< HEAD
export function getProjectById(id: string): Project | null {
  return projects.find(p => p.id === id) |null;
}
export function getAllProjects(): Project[] {
=======

export function getProjectById(id: string): Project | null {;
  return projects.find(p => p.id === id) || null;
}

export function getAllProjects(): Project[] {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return projects;
}
export function createProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Project {
  const newProject: Project = {
<<<<<<< HEAD
    ...project
    id: `project_${Date.now()}`
    createdAt: new Date().toISOString()
    updatedAt: new Date().toISOString()
  }
  projects.push(newProject);
  return newProject;
}
export function updateProject(id: string, updates: Partial<Project>): Project | null {
=======
    ...project,
    id: `project_${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString();
  };
  projects.push(newProject);
  return newProject;
}

export function updateProject(id: string, updates: Partial<Project>): Project | null {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const project = projects.find(p => p.id === id);
  if (!project) return null;
  Object.assign(project, updates, { updatedAt: new Date().toISOString() });
  return project;
}
export function addMilestone(project: Project, milestone: Omit<Milestone, 'id' | 'createdAt' | 'updatedAt'>): Milestone {
  const newMilestone: Milestone = {
<<<<<<< HEAD
    ...milestone
    id: `milestone_${Date.now()}`
    status: 'pending'
    createdAt: new Date().toISOString()
    updatedAt: new Date().toISOString()
<<<<<<< HEAD
=======
    ...milestone,
    id: `milestone_${Date.now()}`,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString();
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  };
=======
  }
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
  project.milestones.push(newMilestone);
  project.updatedAt = new Date().toISOString();
  return newMilestone;
}
<<<<<<< HEAD
export function updateMilestone(project: Project, milestoneId: string, updates: Partial<Milestone>): Milestone | null {
=======

export function updateMilestone(project: Project, milestoneId: string, updates: Partial<Milestone>): Milestone | null {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const milestone = project.milestones.find(m => m.id === milestoneId);
  if (!milestone) return null;
  Object.assign(milestone, updates, { updatedAt: new Date().toISOString() });
  project.updatedAt = new Date().toISOString();
  return milestone;
}
<<<<<<< HEAD
export function deleteMilestone(project: Project, milestoneId: string): boolean {
=======

export function deleteMilestone(project: Project, milestoneId: string): boolean {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const index = project.milestones.findIndex(m => m.id === milestoneId);
  if (index === -1) return false;
  project.milestones.splice(index, 1);
  project.updatedAt = new Date().toISOString();
  return true;
}
=======

<<<<<<< HEAD
const DATA_FILE = path.join(process.cwd(), 'data', 'projects.json');

type DbShape = { projects: Project[] };

function readDb(): DbShape {
  const raw = fs.readFileSync(DATA_FILE, 'utf8');
  return JSON.parse(raw) as DbShape;

function writeDb(db: DbShape) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(db, null, 2), 'utf8');
}

export function getProject(projectId: string): Project | null {
  const db = readDb();
  return db.projects.find(p => p.id === projectId) || null;
}

export function saveProject(updated: Project): void {
  const db = readDb();
  const idx = db.projects.findIndex(p => p.id === updated.id);
  if (idx === -1) {
    db.projects.push(updated);
  } else {
    db.projects[idx] = updated;
  }
  writeDb(db);
}

export function assertParticipantOrAdmin(
  project: Project,
  user: CurrentUser
): boolean {
  if (user.role === 'admin') return true;
  const { clientUserId, talentUserId } = project.participants;
  return user.userId === clientUserId || user.userId === talentUserId;
}

export function isClient(project: Project, user: CurrentUser): boolean {
  return (
    user.role === 'admin' || user.userId === project.participants.clientUserId
  );
}

export function isTalent(project: Project, user: CurrentUser): boolean {
  return (
    user.role === 'admin' || user.userId === project.participants.talentUserId
  );
}

export function generateId(prefix: string = 'id'): string {
  const rand = Math.random().toString(36).slice(2, 8);
  const time = Date.now().toString(36);
  return `${prefix}_${time}_${rand}`;
}

export function addMilestone(
  project: Project,
  payload: Omit<Milestone, 'id' | 'createdAt' | 'updatedAt' | 'status'> & {
    status?: MilestoneStatus;
  }
): Milestone {
  const now = new Date().toISOString();
  const m: Milestone = {
    id: generateId('ms'),
    title: payload.title,
    description: payload.description,
    dueDate: payload.dueDate,
    amountUsd: payload.amountUsd,
    status:
      payload.status && isMilestoneStatus(payload.status)
        ? payload.status
        : 'Pending',
    attachments: payload.attachments || [],
    createdAt: now,
    updatedAt: now,
  };
  project.milestones.push(m);
  project.updatedAt = now;
  saveProject(project);
  return m;
}

export function updateMilestone(
  project: Project,
  milestoneId: string,
  update: Partial<Milestone>
): Milestone | null {
  const idx = project.milestones.findIndex(m => m.id === milestoneId);
  if (idx === -1) return null;
  const now = new Date().toISOString();
  const next: Milestone = {
    ...project.milestones[idx],
    ...update,
    updatedAt: now,
  };
  project.milestones[idx] = next;
  project.updatedAt = now;
  saveProject(project);
  return next;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85

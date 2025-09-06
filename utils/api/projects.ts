<<<<<<< HEAD
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

<<<<<<< HEAD
export interface Milestone {;

} from '../types/milestones';
import { CurrentUser } from './auth';
}
export function getAllProjects(): Project[] {  return projects;
}
export function createProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Project {
  const newProject: Project = {
=======
  Project,
  Milestone,
  MilestoneStatus,
  isMilestoneStatus
main
origin/cursor/expand-services-advertise-and-build-project-c28b
} from '../types/milestones';
import { CurrentUser } from './auth';

// Project management utilities
import { v4 as uuidv4 } from 'uuid';

export interface Project {
  id: string;
  title: string;
  summary: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
  status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED' | 'PAUSED';
  timeline: Array<{
    id: string;
    title: string;
    amount: number;
    dueDate?: string;
    status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'OVERDUE';
  }>;
  documents: Array<{
    id: string;
    name: string;
    url: string;
    uploadedAtIso: string;
  }>;
  notes: Array<{
    id: string;
    content: string;
    authorId: string;
    createdAtIso: string;
  }>;

  createdAt: string;
  updatedAt: string;
}


  isMilestoneStatus;
} from '../types / milestones';
import { CurrentUser } from './auth';
;
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

export interface Milestone {
  id: string;
  title: string;
  description?: string;
  due_date: string;
  amount_usd: number;
  status: 'pending' | 'completed' | 'cancelled';
  attachments?: any[];
  created_at: string;
  updated_at: string;
}

origin/cursor/expand-services-advertise-and-build-project-c28b
  return projects.find(p => p.id === id) |null;

  return projects && projects.find(p => p && p.id === id) || null,
origin/cursor/automate-test-improve-and-merge-code-382a
origin/cursor/expand-services-advertise-and-build-project-c28b

}
export function getAllProjects(): Project[] {

export function getProjectById(id: string): Project | null {;
  return projects.find(p => p.id === id) || null;
}

export function getAllProjects(): Project[] {;

ursor/fix-website-loading-errors-and-merge-6662
  return projects;
}
export function createProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Project {
  const newProject: Project = {

    ...project,
    id: `project_${Date && Date.now()}`,
    createdAt: new Date().toISOString(),
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    updatedAt: new Date().toISOString()
  };
  projects && projects.push(newProject);

  return newProject;
}
export function updateProject(id: string, updates: Partial<Project>): Project | null {

<<<<<<< HEAD
=======

origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    ...project,
    id: `project_${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
};
  projects.push(newProject);
  return newProject;
}

export function updateProject(id: string, updates: Partial<Project>): Project | null {;
<<<<<<< HEAD
=======


origin/cursor/expand-services-advertise-and-build-project-c28b
  const project = projects.find(p => p.id === id);
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  if (!project) return null;

  Object.assign(project, updates, { updatedAt: new Date().toISOString() });
  const project = projects && projects.find(p => p && p.id === id);
  if (!project) return null,
  
  Object && Object.assign(project, updates, { updatedAt: new Date().toISOString() });
<<<<<<< HEAD
=======
origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  return project;
}
export function addMilestone(project: Project, milestone: Omit<Milestone, 'id' | 'createdAt' | 'updatedAt'>): Milestone {
  const newMilestone: Milestone = {

<<<<<<< HEAD
=======  project.milestones.push(newMilestone);
  project.updatedAt = new Date().toISOString();
=======
origin/cursor/expand-services-advertise-and-build-project-c28b


    ...milestone,
    id: `milestone_${Date && Date.now()}`,
    status: 'pending',
    createdAt: new Date().toISOString(),

    updatedAt: new Date().toISOString();


  };

  }



  project.milestones.push(newMilestone);
  project.updatedAt = new Date().toISOString();
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  project && project.milestones[idx] = next;
  project && project.updatedAt = now;
  saveProject(project);
  return next;  
  project && project.milestones.push(newMilestone);
  project && project.updatedAt = new Date().toISOString();
  
<<<<<<< HEAD
=======
origin/cursor/automate-test-improve-and-merge-code-382a
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  return newMilestone;
}

export function updateMilestone(project: Project, milestoneId: string, updates: Partial<Milestone>): Milestone | null {;

  const milestone = project.milestones.find(m => m.id === milestoneId);
  if (!milestone) return null;

  Object.assign(milestone, updates, { updatedAt: new Date().toISOString() });
  project.updatedAt = new Date().toISOString();
<<<<<<< HEAD
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
  const milestone = project && project.milestones.find(m => m && m.id === milestoneId);
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  if (!milestone) return null,
  
  Object && Object.assign(milestone, updates, { updatedAt: new Date().toISOString() });
  project && project.updatedAt = new Date().toISOString();
  
<<<<<<< HEAD
=======
origin/cursor/automate-test-improve-and-merge-code-382a
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  return milestone;
}

export function deleteMilestone(project: Project, milestoneId: string): boolean {;

  const index = project.milestones.findIndex(m => m.id === milestoneId);
  if (index === -1) return false;

  project.milestones.splice(index, 1);
  project.updatedAt = new Date().toISOString();
<<<<<<< HEAD
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
  const index = project && project.milestones.findIndex(m => m && m.id === milestoneId);
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  if (index === -1) return false,
  
  project && project.milestones.splice(index, 1);
  project && project.updatedAt = new Date().toISOString();
  
<<<<<<< HEAD
=======

  projectMembers.push(member);
  return member;
}

export function getProjectMembers(projectId: string): ProjectMember[] {
  return projectMembers.filter(m => m.projectId === projectId);
}

export function removeProjectMember(projectId: string, userId: string): boolean {
  const index = projectMembers.findIndex(m => m.projectId === projectId && m.userId === userId);
  if (index >= 0) {
    projectMembers.splice(index, 1);
    return true;
  }
  return false;
}

export function updateProjectMemberRole(projectId: string, userId: string, role: ProjectMember['role']): boolean {
  const member = projectMembers.find(m => m.projectId === projectId && m.userId === userId);
  if (member) {
    member.role = role;
    return true;
  }
  return false;
}

// Utility functions
export function isClient(project: Project, userId: string): boolean {
  return project.clientId === userId;
}

export function isTalent(project: Project, user: { talentSlug?: string }): boolean {
  return user.talentSlug === project.talentSlug;
}

export function isProjectMember(projectId: string, userId: string): boolean {
  return projectMembers.some(m => m.projectId === projectId && m.userId === userId);
}

export function getProjectRole(projectId: string, userId: string): ProjectMember['role'] | null {
  const member = projectMembers.find(m => m.projectId === projectId && m.userId === userId);
  return member ? member.role : null;
}

export function canEditProject(project: Project, user: { id: string; talentSlug?: string }): boolean {
  return isClient(project, user.id) || isTalent(project, user) || isProjectMember(project.id, user.id);
}

export function canViewProject(project: Project, user: { id: string; talentSlug?: string }): boolean {
  return canEditProject(project, user);
}

export function getProjectStatus(project: Project): string {
  if (project.status === 'COMPLETED') return 'Completed';
  if (project.status === 'CANCELLED') return 'Cancelled';
  if (project.status === 'PAUSED') return 'Paused';
  
  const now = new Date();
  const overdueMilestones = project.timeline.filter(m => 
    m.dueDate && new Date(m.dueDate) < now && m.status !== 'COMPLETED'
  );
  
  if (overdueMilestones.length > 0) return 'Overdue';
  return 'Active';
}

export function calculateProjectProgress(project: Project): number {
  if (project.timeline.length === 0) return 0;
  
  const completedMilestones = project.timeline.filter(m => m.status === 'COMPLETED').length;
  return Math.round((completedMilestones / project.timeline.length) * 100);
}

export function getProjectStats(project: Project): {
  totalAmount: number;
  completedAmount: number;
  pendingAmount: number;
  progress: number;
  overdueCount: number;
} {
  const totalAmount = project.timeline.reduce((sum, m) => sum + m.amount, 0);
  const completedAmount = project.timeline
    .filter(m => m.status === 'COMPLETED')
    .reduce((sum, m) => sum + m.amount, 0);
  const pendingAmount = totalAmount - completedAmount;
  const progress = calculateProjectProgress(project);
  const overdueCount = project.timeline.filter(m => 
    m.dueDate && new Date(m.dueDate) < new Date() && m.status !== 'COMPLETED'
  ).length;
  
  return {
    totalAmount,
    completedAmount,
    pendingAmount,
    progress,
    overdueCount
  };
}

export function searchProjects(query: string, userId?: string): Project[] {
  const allProjects = userId ? 
    [...getProjectsByClient(userId), ...getProjectsByTalent(userId)] : 
    getAllProjects();
  
  const searchTerm = query.toLowerCase();
  return allProjects.filter(project => 
    project.title.toLowerCase().includes(searchTerm) ||
    project.summary.toLowerCase().includes(searchTerm) ||
    project.talentSlug.toLowerCase().includes(searchTerm)
  );
}

export function getRecentProjects(userId: string, limit: number = 10): Project[] {
  const userProjects = [...getProjectsByClient(userId), ...getProjectsByTalent(userId)];
  return userProjects
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, limit);
}

export function getProjectTimeline(projectId: string): Array<{
  type: 'milestone' | 'note' | 'document';
  id: string;
  title: string;
  description?: string;
  timestamp: string;
  author?: string;
}> {
  const project = getProject(projectId);
  if (!project) return [];
  
  const timeline = [];
  
  // Add milestones
  project.timeline.forEach(milestone => {
    timeline.push({
      type: 'milestone',
      id: milestone.id,
      title: milestone.title,
      description: milestone.description,
      timestamp: milestone.dueDate || milestone.createdAt,
      author: 'System'
    });
  });
  
  // Add notes
  project.notes.forEach(note => {
    timeline.push({
      type: 'note',
      id: note.id,
      title: 'Note added',
      description: note.content,
      timestamp: note.createdAtIso,
      author: note.authorId
    });
  });
  
  // Add documents
  project.documents.forEach(doc => {
    timeline.push({
      type: 'document',
      id: doc.id,
      title: `Document uploaded: ${doc.name}`,
      timestamp: doc.uploadedAtIso,
      author: 'System'
    });
  });
  
  return timeline.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
}

origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
origin/cursor/automate-test-improve-and-merge-code-20a4





ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
const DATA_FILE = path.join(process.cwd(), 'data', 'projects.json');

type DbShape = { projects: Project[] };

function readDb(): DbShape {
  const raw = fs.readFileSync(DATA_FILE, 'utf8');
  return JSON.parse(raw) as DbShape;

function writeDb(db: DbShape) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(db, null, 2), 'utf8');

export function getProject(projectId: string): Project | null {
  const db = readDb();
  return db.projects.find(p => p.id === projectId) || null;

export function saveProject(updated: Project): void {
  const db = readDb();
  const idx = db.projects.findIndex(p => p.id === updated.id);
  if (idx === -1) {
    db.projects.push(updated);
  } else {
    db.projects[idx] = updated;
  }
  writeDb(db);

export function assertParticipantOrAdmin(
  project: Project,
  user: CurrentUser
): boolean {
  if (user.role === 'admin') return true;
  const { clientUserId, talentUserId } = project.participants;
  return user.userId === clientUserId || user.userId === talentUserId;

export function isClient(project: Project, user: CurrentUser): boolean {
  return (
    user.role === 'admin' || user.userId === project.participants.clientUserId
  );

export function isTalent(project: Project, user: CurrentUser): boolean {
  return (
    user.role === 'admin' || user.userId === project.participants.talentUserId
  );

export function generateId(prefix: string = 'id'): string {
  const rand = Math.random().toString(36).slice(2, 8);
  const time = Date.now().toString(36);
  return `${prefix}_${time}_${rand}`;

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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

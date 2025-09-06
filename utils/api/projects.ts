<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import {
<<<<<<< HEAD
  Project,
  Milestone,
  MilestoneStatus,
  Project
  Milestone
  MilestoneStatus
  isMilestoneStatus
} from '../types/milestones';
import { CurrentUser } from './auth';
export interface Milestone {
  isMilestoneStatus,;
} from '../types/milestones';
import { CurrentUser } from './auth';

export interface Milestone {;
=======


} from '../types/milestones';
import { CurrentUser } from './auth';

=======
// Project management utilities
import { v4 as uuidv4 } from 'uuid';

export interface Project {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
} from '../types/milestones';
import { CurrentUser } from './auth';

>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  isMilestoneStatus;
} from '../types / milestones';
import { CurrentUser } from './auth';
;
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
<<<<<<< HEAD

=======
// Mock storage
const projects: Project[] = [];
<<<<<<< HEAD
export function getProjectById(id: string): Project | null {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  return projects.find(p => p.id === id) |null;

=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return projects && projects.find(p => p && p.id === id) || null,
}
export function getAllProjects(): Project[] {
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

export function getProjectById(id: string): Project | null {;
  return projects.find(p => p.id === id) || null;
}

export function getAllProjects(): Project[] {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return projects;
}
export function createProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Project {
  const newProject: Project = {
<<<<<<< HEAD
<<<<<<< HEAD
    ...project
    id: `project_${Date.now()}`
    createdAt: new Date().toISOString()
=======

    ...project,
    id: `project_${Date && Date.now()}`,
    createdAt: new Date().toISOString(),
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    updatedAt: new Date().toISOString()
  };
  projects && projects.push(newProject);

  return newProject;
}
export function updateProject(id: string, updates: Partial<Project>): Project | null {
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    ...project,
    id: `project_${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString();
  };
  projects.push(newProject);
  return newProject;
}

export function updateProject(id: string, updates: Partial<Project>): Project | null {;
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const project = projects.find(p => p.id === id);
  if (!project) return null;


  Object.assign(project, updates, { updatedAt: new Date().toISOString() });
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  return project;
}
export function addMilestone(project: Project, milestone: Omit<Milestone, 'id' | 'createdAt' | 'updatedAt'>): Milestone {
  const newMilestone: Milestone = {
<<<<<<< HEAD
<<<<<<< HEAD
    ...milestone
    id: `milestone_${Date.now()}`
    status: 'pending'
    createdAt: new Date().toISOString()
    updatedAt: new Date().toISOString()
=======

=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    ...milestone,
    id: `milestone_${Date && Date.now()}`,
    status: 'pending',
    createdAt: new Date().toISOString(),

    updatedAt: new Date().toISOString();
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  };
  }
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  project.milestones.push(newMilestone);
  project.updatedAt = new Date().toISOString();
  project && project.milestones[idx] = next;
  project && project.updatedAt = now;
  saveProject(project);
  return next;  
  project && project.milestones.push(newMilestone);
  project && project.updatedAt = new Date().toISOString();
  
  return newMilestone;
}
<<<<<<< HEAD
<<<<<<< HEAD
export function updateMilestone(project: Project, milestoneId: string, updates: Partial<Milestone>): Milestone | null {

export function updateMilestone(project: Project, milestoneId: string, updates: Partial<Milestone>): Milestone | null {;
=======



export function updateMilestone(project: Project, milestoneId: string, updates: Partial<Milestone>): Milestone | null {;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const milestone = project.milestones.find(m => m.id === milestoneId);
  if (!milestone) return null;


=======
export function updateMilestone(project: Project, milestoneId: string, updates: Partial<Milestone>): Milestone | null {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  Object.assign(milestone, updates, { updatedAt: new Date().toISOString() });
  project.updatedAt = new Date().toISOString();
  const milestone = project && project.milestones.find(m => m && m.id === milestoneId);
  if (!milestone) return null,
  
  Object && Object.assign(milestone, updates, { updatedAt: new Date().toISOString() });
  project && project.updatedAt = new Date().toISOString();
  
  return milestone;
}
<<<<<<< HEAD
<<<<<<< HEAD
export function deleteMilestone(project: Project, milestoneId: string): boolean {

export function deleteMilestone(project: Project, milestoneId: string): boolean {;
=======



export function deleteMilestone(project: Project, milestoneId: string): boolean {;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const index = project.milestones.findIndex(m => m.id === milestoneId);
  if (index === -1) return false;


=======
export function deleteMilestone(project: Project, milestoneId: string): boolean {
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  project.milestones.splice(index, 1);
  project.updatedAt = new Date().toISOString();
  const index = project && project.milestones.findIndex(m => m && m.id === milestoneId);
  if (index === -1) return false,
  
  project && project.milestones.splice(index, 1);
  project && project.updatedAt = new Date().toISOString();
  
// Mock storage;
const projects: Project[] = [];
;
export function getProjectById (id: string): Project | null {
  return projects.find (p => p.id === id) || null;
}
export function getAllProjects (): Project[] {
  return projects;
}
export function create_project (project: Omit < Project, 'id' | 'created_at' | 'updated_at'>): Project {
  const new_project: Project = {
    ...project,
    id: `project_${Date.now ()}`,
    created_at: new Date ().toISOString (),
    updated_at: new Date ().toISOString ();
  }
  projects.push (new_project);
  return new_project;
}
export function update_project (id: string, updates: Partial < Project>): Project | null {
  const project = projects.find (p => p.id === id);
  // Check condition
if (return null) {
  $2
}
  Object.assign (project, updates, { updated_at: new Date ().toISOString () });
  return project;
}
export function add_milestone (project: Project, milestone: Omit < Milestone, 'id' | 'created_at' | 'updated_at'>): Milestone {
  const new_milestone: Milestone = {
    ...milestone,
    id: `milestone_${Date.now ()}`,
    status: 'pending',
    created_at: new Date ().toISOString (),
    updated_at: new Date ().toISOString ();
  }
;
  project.milestones.push (new_milestone);
  project.updated_at = new Date ().toISOString ();
;
  return new_milestone;
}
export function update_milestone (project: Project, milestone_id: string, updates: Partial < Milestone>): Milestone | null {
  const milestone = project.milestones.find (m => m.id === milestone_id);
  // Check condition
if (return null) {
  $2
}
  Object.assign (milestone, updates, { updated_at: new Date ().toISOString () });
  project.updated_at = new Date ().toISOString ();
;
  return milestone;
}
export function delete_milestone (project: Project, milestone_id: string): boolean {
  const index = project.milestones.find_index (m => m.id === milestone_id);
  // Check condition
if (return false) {
  $2
}
  project.milestones.splice (index, 1);
  project.updated_at = new Date ().toISOString ();
;
  return true;
}
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

<<<<<<< HEAD
<<<<<<< HEAD


} from '../types/milestones';
import { CurrentUser } from './auth';

=======
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import {
<<<<<<< HEAD
  Project,
  Milestone,
  MilestoneStatus,
<<<<<<< HEAD
  isMilestoneStatus,;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  isMilestoneStatus
>>>>>>> main
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
} from '../types/milestones';
import { CurrentUser } from './auth';

export interface Milestone {;


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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export interface Milestone {
=======
export interface Milestone {
} from '../types/milestones';
import { CurrentUser } from './auth';

export interface Milestone {;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
export interface Milestone {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return projects.find(p => p.id === id) |null;

  return projects && projects.find(p => p && p.id === id) || null,
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  return projects && projects.find(p => p && p.id === id) || null,
// Mock storage
const projects: Project[] = [];
export function getProjectById(id: string): Project | null {
  return projects.find(p => p.id === id) |null;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
export function getAllProjects(): Project[] {

export function getProjectById(id: string): Project | null {;
  return projects.find(p => p.id === id) || null;
}

export function getAllProjects(): Project[] {;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return projects;
}
export function createProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Project {
  const newProject: Project = {
<<<<<<< HEAD

    ...project,
    id: `project_${Date && Date.now()}`,
    createdAt: new Date().toISOString(),
<<<<<<< HEAD
=======
    ...project
    id: `project_${Date.now()}`
    createdAt: new Date().toISOString()
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    updatedAt: new Date().toISOString()
  };
  projects && projects.push(newProject);

  return newProject;
}
export function updateProject(id: string, updates: Partial<Project>): Project | null {
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const project = projects.find(p => p.id === id);
  if (!project) return null;


<<<<<<< HEAD
<<<<<<< HEAD
=======
...project
    id: `project_${Date.now()}`
    createdAt: new Date().toISOString()
    updatedAt: new Date().toISOString()
  }
  projects.push(newProject);
  return newProject;
}
export function updateProject(id: string, updates: Partial<Project>): Project | null {
  const project = projects.find(p => p.id === id);
  if (!project) return null;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  Object.assign(project, updates, { updatedAt: new Date().toISOString() });
=======
  const project = projects && projects.find(p => p && p.id === id);
  if (!project) return null,
  
  Object && Object.assign(project, updates, { updatedAt: new Date().toISOString() });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return project;
}
export function addMilestone(project: Project, milestone: Omit<Milestone, 'id' | 'createdAt' | 'updatedAt'>): Milestone {
  const newMilestone: Milestone = {
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


    ...milestone,
    id: `milestone_${Date && Date.now()}`,
    status: 'pending',
    createdAt: new Date().toISOString(),
  project.milestones.push(newMilestone);
  project.updatedAt = new Date().toISOString();
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  project && project.milestones[idx] = next;
  project && project.updatedAt = now;
  saveProject(project);
  return next;  
  project && project.milestones.push(newMilestone);
  project && project.updatedAt = new Date().toISOString();
  
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return newMilestone;
}
<<<<<<< HEAD
=======
export function updateMilestone(project: Project, milestoneId: string, updates: Partial<Milestone>): Milestone | null {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  return newMilestone;
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



export function updateMilestone(project: Project, milestoneId: string, updates: Partial<Milestone>): Milestone | null {;


  const milestone = project.milestones.find(m => m.id === milestoneId);
  if (!milestone) return null;


<<<<<<< HEAD
<<<<<<< HEAD
=======
export function updateMilestone(project: Project, milestoneId: string, updates: Partial<Milestone>): Milestone | null {
  const milestone = project.milestones.find(m => m.id === milestoneId);
  if (!milestone) return null;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  Object.assign(milestone, updates, { updatedAt: new Date().toISOString() });
  project.updatedAt = new Date().toISOString();
=======
=======
  Object.assign(milestone, updates, { updatedAt: new Date().toISOString() });
  project.updatedAt = new Date().toISOString();
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const milestone = project && project.milestones.find(m => m && m.id === milestoneId);
  if (!milestone) return null,
  
  Object && Object.assign(milestone, updates, { updatedAt: new Date().toISOString() });
  project && project.updatedAt = new Date().toISOString();
  
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return milestone;
}
<<<<<<< HEAD
=======
export function deleteMilestone(project: Project, milestoneId: string): boolean {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  return milestone;
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a



export function deleteMilestone(project: Project, milestoneId: string): boolean {;


  const index = project.milestones.findIndex(m => m.id === milestoneId);
  if (index === -1) return false;


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
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export function deleteMilestone(project: Project, milestoneId: string): boolean {
  const index = project.milestones.findIndex(m => m.id === milestoneId);
  if (index === -1) return false;
  project.milestones.splice(index, 1);
  project.updatedAt = new Date().toISOString();
  return true;
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

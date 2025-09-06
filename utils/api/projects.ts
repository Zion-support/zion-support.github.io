import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import {
<<<<<<< HEAD
  Project,
  Milestone,
  MilestoneStatus,
<<<<<<< HEAD
  isMilestoneStatus,
=======
=======
  Project
  Milestone
  MilestoneStatus
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
  isMilestoneStatus
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
} from '../types/milestones';
import { CurrentUser } from './auth';

export interface Milestone {
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
export function getProjectById(id: string): Project | null {
<<<<<<< HEAD
<<<<<<< HEAD
  return projects.find(p => p.id === id) || null;
=======
  return projects.find(p => p.id === id) |null;
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
  return projects && projects.find(p => p && p.id === id) || null,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
export function getAllProjects(): Project[] {
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
=======
    ...project,
    id: `project_${Date && Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  projects && projects.push(newProject);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return newProject;
}
export function updateProject(id: string, updates: Partial<Project>): Project | null {
<<<<<<< HEAD
  const project = projects.find(p => p.id === id);
  if (!project) return null;
<<<<<<< HEAD
  
=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
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
    ...milestone
    id: `milestone_${Date.now()}`
    status: 'pending'
    createdAt: new Date().toISOString()
=======
    ...milestone,
    id: `milestone_${Date && Date.now()}`,
    status: 'pending',
    createdAt: new Date().toISOString(),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    updatedAt: new Date().toISOString()
<<<<<<< HEAD
  };
<<<<<<< HEAD
<<<<<<< HEAD
  
=======
=======
  }
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  project.milestones.push(newMilestone);
  project.updatedAt = new Date().toISOString();
=======
  project && project.milestones[idx] = next;
  project && project.updatedAt = now;
  saveProject(project);
  return next;  
  project && project.milestones.push(newMilestone);
  project && project.updatedAt = new Date().toISOString();
  
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return newMilestone;
}
export function updateMilestone(project: Project, milestoneId: string, updates: Partial<Milestone>): Milestone | null {
<<<<<<< HEAD
  const milestone = project.milestones.find(m => m.id === milestoneId);
  if (!milestone) return null;
<<<<<<< HEAD
  
=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  Object.assign(milestone, updates, { updatedAt: new Date().toISOString() });
  project.updatedAt = new Date().toISOString();
=======
  const milestone = project && project.milestones.find(m => m && m.id === milestoneId);
  if (!milestone) return null,
  
  Object && Object.assign(milestone, updates, { updatedAt: new Date().toISOString() });
  project && project.updatedAt = new Date().toISOString();
  
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return milestone;
}
export function deleteMilestone(project: Project, milestoneId: string): boolean {
<<<<<<< HEAD
  const index = project.milestones.findIndex(m => m.id === milestoneId);
  if (index === -1) return false;
<<<<<<< HEAD
  
=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  project.milestones.splice(index, 1);
  project.updatedAt = new Date().toISOString();
=======
  const index = project && project.milestones.findIndex(m => m && m.id === milestoneId);
  if (index === -1) return false,
  
  project && project.milestones.splice(index, 1);
  project && project.updatedAt = new Date().toISOString();
  
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return true;
}
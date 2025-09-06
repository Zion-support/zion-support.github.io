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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

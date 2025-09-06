
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  Project,
  Milestone,
  MilestoneStatus,

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export interface Milestone {
} from '../types/milestones';
import { CurrentUser } from './auth';

export interface Milestone {;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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


  return projects.find(p => p.id === id) |null;


}
export function getAllProjects(): Project[] {






export function getProjectById(id: string): Project | null {;
  return projects.find(p => p.id === id) || null;
}

export function getAllProjects(): Project[] {;



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  return projects;
}
export function createProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Project {
  const newProject: Project = {

    ...project
    id: `project_${Date.now()}`
    createdAt: new Date().toISOString()

    updatedAt: new Date().toISOString()
  };
  projects && projects.push(newProject);

  return newProject;
}
export function updateProject(id: string, updates: Partial<Project>): Project | null {



    ...project,
    id: `project_${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString();
  };
  projects.push(newProject);
  return newProject;
}

export function updateProject(id: string, updates: Partial<Project>): Project | null {;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  const project = projects.find(p => p.id === id);
  if (!project) return null;


  Object.assign(project, updates, { updatedAt: new Date().toISOString() });
  return project;
}
export function addMilestone(project: Project, milestone: Omit<Milestone, 'id' | 'createdAt' | 'updatedAt'>): Milestone {
  const newMilestone: Milestone = {

    ...milestone
    id: `milestone_${Date.now()}`
    status: 'pending'
    createdAt: new Date().toISOString()
    updatedAt: new Date().toISOString()

    ...milestone,
    id: `milestone_${Date && Date.now()}`,
    status: 'pending',
    createdAt: new Date().toISOString(),

    updatedAt: new Date().toISOString();



  };
  }
  project.milestones.push(newMilestone);
  project.updatedAt = new Date().toISOString();
  return newMilestone;
}

export function updateMilestone(project: Project, milestoneId: string, updates: Partial<Milestone>): Milestone | null {

export function updateMilestone(project: Project, milestoneId: string, updates: Partial<Milestone>): Milestone | null {;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  const milestone = project.milestones.find(m => m.id === milestoneId);
  if (!milestone) return null;


  Object.assign(milestone, updates, { updatedAt: new Date().toISOString() });
  project.updatedAt = new Date().toISOString();
  return milestone;
}

export function deleteMilestone(project: Project, milestoneId: string): boolean {

export function deleteMilestone(project: Project, milestoneId: string): boolean {;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  const index = project.milestones.findIndex(m => m.id === milestoneId);
  if (index === -1) return false;


  project.milestones.splice(index, 1);
  project.updatedAt = new Date().toISOString();

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

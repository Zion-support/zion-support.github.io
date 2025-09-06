import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  Project,
  Milestone,
  MilestoneStatus,
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
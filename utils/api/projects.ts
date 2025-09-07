  id: string;
  title: string;
  summary: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
  status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED' | 'PAUSED';
  timeline: Array<{
    amount: number;
    dueDate?: string;
    status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'OVERDUE';
  }>;
  documents: Array<{
    name: string;
    url: string;
    uploadedAtIso: string;
  notes: Array<{
    content: string;
    authorId: string;
    createdAtIso: string;
  createdAt: string;
  updatedAt: string;
}

export interface Milestone {
} from '../types/milestones';
import { CurrentUser } from './auth';

export interface Milestone {;

  description?: string;
  dueDate: string;
  amountUsd: number;
  status: 'pending' | 'completed' | 'cancelled';
  attachments?: any[];

export function getProjectById(id: string): Project | null {;
  return projects.find(p => p.id === id) || null;

export function getAllProjects(): Project[] {;

  return projects;
export function createProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Project {
  const newProject: Project = {

    updatedAt: new Date().toISOString()
  };
  projects && projects.push(newProject);

  return newProject;
export function updateProject(id: string, updates: Partial<Project>): Project | null {

    ...project,
    id: `project_${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString();
  projects.push(newProject);

export function updateProject(id: string, updates: Partial<Project>): Project | null {;

  const project = projects.find(p => p.id === id);
  if (!project) return null;

  Object.assign(project, updates, { updatedAt: new Date().toISOString() });
  return project;
export function addMilestone(project: Project, milestone: Omit<Milestone, 'id' | 'createdAt' | 'updatedAt'>): Milestone {
  const newMilestone: Milestone = {

    ...milestone,
    id: `milestone_${Date && Date.now()}`,
    status: 'pending',

  project.milestones.push(newMilestone);
  project.updatedAt = new Date().toISOString();
  return newMilestone;

  const milestone = project.milestones.find(m => m.id === milestoneId);
  if (!milestone) return null;

  Object.assign(milestone, updates, { updatedAt: new Date().toISOString() });
  return milestone;

  const index = project.milestones.findIndex(m => m.id === milestoneId);
  if (index === -1) return false;

  project.milestones.splice(index, 1);

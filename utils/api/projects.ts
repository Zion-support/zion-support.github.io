
  isMilestoneStatus
} from '../types/milestones';
import { CurrentUser } from './auth';
export interface Milestone {

  isMilestoneStatus,;
} from '../types/milestones';
import { CurrentUser } from './auth';

export interface Milestone {;

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

  return projects;
}
export function createProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Project {
  const newProject: Project = {

  const project = projects.find(p => p.id === id);
  if (!project) return null;
  Object.assign(project, updates, { updatedAt: new Date().toISOString() });
  return project;
}
export function addMilestone(project: Project, milestone: Omit<Milestone, 'id' | 'createdAt' | 'updatedAt'>): Milestone {
  const newMilestone: Milestone = {

  };

  }

  project.milestones.push(newMilestone);
  project.updatedAt = new Date().toISOString();
  return newMilestone;
}

  const milestone = project.milestones.find(m => m.id === milestoneId);
  if (!milestone) return null;
  Object.assign(milestone, updates, { updatedAt: new Date().toISOString() });
  project.updatedAt = new Date().toISOString();
  return milestone;
}

  const index = project.milestones.findIndex(m => m.id === milestoneId);
  if (index === -1) return false;
  project.milestones.splice(index, 1);
  project.updatedAt = new Date().toISOString();
  return true;
}


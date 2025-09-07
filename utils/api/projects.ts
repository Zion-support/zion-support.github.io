import { v4 as uuidv4 } from 'uuid';

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'planning' | 'active' | 'completed' | 'cancelled';
  clientId: string;
  talentId?: string;
  budget: number;
  deadline: string;

  createdAt: string;
  updatedAt: string;
}

export interface CreateProjectPayload {
  title: string;
  description: string;
  budget: number;
  deadline: string;
  clientId: string;
}

export interface UpdateProjectPayload {
  documents: Array<{,
  id: string;
    name: string;,
  url: string;
    uploadedAtIso: string;
  notes: Array<{,
    content: string;,
  authorId: string;
    createdAtIso: string;
  createdAt: string;,
  updatedAt: string;

  // TODO: Implement
  title: string;,
  description: string;

  // TODO: Implement
pr-12325
  title?: string;
  description?: string;
  status?: Project['status'];
  budget?: number;
  deadline?: string;
}


  return projects;
}

export function createProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Project {
  const newProject: Project = {

    ...project,
    id: `project_${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  projects.push(newProject);
  return newProject;
}


  const project = projects.find(p => p.id === id);
  if (!project) return null;
  

  return project;
}

export function addMilestone(project: Project, milestone: Omit<Milestone, 'id' | 'createdAt' | 'updatedAt'>): Milestone {
  const newMilestone: Milestone = {

    ...milestone,
    id: `milestone_${Date.now()}`,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  project.milestones = project.milestones || [];
  project.milestones.push(newMilestone);
  project.updatedAt = new Date().toISOString();

  
origin/cursor/automate-test-improve-and-merge-code-382a
origin/cursor/expand-services-advertise-and-build-project-c28b
  return newMilestone;
}

export function updateMilestone(project: Project, milestoneId: string, updates: Partial<Milestone>): Milestone | null {
  if (!project.milestones) return null;
  
  const milestone = project.milestones.find(m => m.id === milestoneId);
  if (!milestone) return null;
  
  Object.assign(milestone, updates, { updatedAt: new Date().toISOString() });
  project.updatedAt = new Date().toISOString();

  
origin/cursor/automate-test-improve-and-merge-code-382a
origin/cursor/expand-services-advertise-and-build-project-c28b
  return milestone;
}

export function deleteMilestone(project: Project, milestoneId: string): boolean {
  if (!project.milestones) return false;
  
  const index = project.milestones.findIndex(m => m.id === milestoneId);
  if (index === -1) return false;
  
  project.milestones.splice(index, 1);
  project.updatedAt = new Date().toISOString();




} from '../types/milestones';
import { CurrentUser } from './auth';


  createdAt: string;
  updatedAt: string;
}





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



  return projects.find(p => p.id === id) |null;

  return projects && projects.find(p => p && p.id === id) || null



}
export function getAllProjects(): Project[] {}

export function getAllProjects(): Project[] {;


  return projects;
}

export function createProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Project {

  const newProject: Project = {


    ...project,
    id: `project_${Date && Date.now()}`,
    createdAt: new Date().toISOString(),

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

  Object.assign(project, updates, { updatedAt: new Date().toISOString() });

  return project;
}

export function addMilestone(project: Project, milestone: Omit<Milestone, 'id' | 'createdAt' | 'updatedAt'>): Milestone {

  const newMilestone: Milestone = {



  return newMilestone;
}



export function updateMilestone(project: Project, milestoneId: string, updates: Partial<Milestone>): Milestone | null {;


  const milestone = project.milestones.find(m => m.id === milestoneId);
  if (!milestone) return null;


  Object.assign(milestone, updates, { updatedAt: new Date().toISOString() });
  project.updatedAt = new Date().toISOString();


  return milestone;
}



export function deleteMilestone(project: Project, milestoneId: string): boolean {;


  const index = project.milestones.findIndex(m => m.id === milestoneId);
  if (index === -1) return false;


  project.milestones.splice(index, 1);
  project.updatedAt = new Date().toISOString();


  return true;
}










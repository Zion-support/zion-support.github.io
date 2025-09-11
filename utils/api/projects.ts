export interface Milestone {;
=======

} from '../types/milestones';
import { CurrentUser } from './auth';

=======


} from '../types/milestones';
import { CurrentUser } from './auth';

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  return projects.find(p => p.id === id) |null;

=======
  return projects && projects.find(p => p && p.id === id) || null,>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
export function getAllProjects(): Project[] {

=======

=======
// Mock storage
const projects: Project[] = [];
  return projects && projects.find(p => p && p.id === id) || null,}
export function getAllProjects(): Project[] {

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export function getProjectById(id: string): Project | null {;
  return projects.find(p => p.id === id) || null;
}

export function getAllProjects(): Project[] {;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662  return projects;
}
export function createProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Project {
  const newProject: Project = {

    ...project,
    id: `project_${Date && Date.now()}`,
    createdAt: new Date().toISOString(),
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
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const project = projects.find(p => p.id === id);
  if (!project) return null;


=======


    ...milestone,
    id: `milestone_${Date && Date.now()}`,
    status: 'pending',
    createdAt: new Date().toISOString(),

    updatedAt: new Date().toISOString();


  };  }
  project.milestones.push(newMilestone);
  project.updatedAt = new Date().toISOString();
  return newMilestone;
}
=======

    ...milestone,
    id: `milestone_${Date && Date.now()}`,
    status: 'pending',
    createdAt: new Date().toISOString(),

    updatedAt: new Date().toISOString();


  };

  }



export function updateMilestone(project: Project, milestoneId: string, updates: Partial<Milestone>): Milestone | null {;
  const milestone = project.milestones.find(m => m.id === milestoneId);
  if (!milestone) return null;



export function deleteMilestone(project: Project, milestoneId: string): boolean {;
  const index = project && project.milestones.findIndex(m => m && m.id === milestoneId);
  if (index === -1) return false,
  
  project && project.milestones.splice(index, 1);
  project && project.updatedAt = new Date().toISOString();
  

  projectMembers.push(member);
  return member;
}

export function getProjectMembers(projectId: string): ProjectMember[] {
  return projectMembers.filter(m => m.projectId === projectId);
}

export function removeProjectMember(projectId: string, userId: string): boolean {
  const index = projectMembers.findIndex(m => m.projectId === projectId && m.userId === userId);
  if (index >= 0) {
    projectMembers.splice(index, 1);
    return true;
  }
  return false;
}

export function updateProjectMemberRole(projectId: string, userId: string, role: ProjectMember['role']): boolean {
  const member = projectMembers.find(m => m.projectId === projectId && m.userId === userId);
  if (member) {
    member.role = role;
    return true;
  }
  return false;
}

// Utility functions
export function isClient(project: Project, userId: string): boolean {
  return project.clientId === userId;
}

export function isTalent(project: Project, user: { talentSlug?: string }): boolean {
  return user.talentSlug === project.talentSlug;
}

export function isProjectMember(projectId: string, userId: string): boolean {
  return projectMembers.some(m => m.projectId === projectId && m.userId === userId);
}

export function getProjectRole(projectId: string, userId: string): ProjectMember['role'] | null {
  const member = projectMembers.find(m => m.projectId === projectId && m.userId === userId);
  return member ? member.role : null;
}

export function canEditProject(project: Project, user: { id: string; talentSlug?: string }): boolean {
  return isClient(project, user.id) || isTalent(project, user) || isProjectMember(project.id, user.id);
}

export function canViewProject(project: Project, user: { id: string; talentSlug?: string }): boolean {
  return canEditProject(project, user);
}

export function getProjectStatus(project: Project): string {
  if (project.status === 'COMPLETED') return 'Completed';
  if (project.status === 'CANCELLED') return 'Cancelled';
  if (project.status === 'PAUSED') return 'Paused';
  
  const now = new Date();
  const overdueMilestones = project.timeline.filter(m => 
    m.dueDate && new Date(m.dueDate) < now && m.status !== 'COMPLETED'
  );
  
  if (overdueMilestones.length > 0) return 'Overdue';
  return 'Active';
}

export function calculateProjectProgress(project: Project): number {
  if (project.timeline.length === 0) return 0;
  
  const completedMilestones = project.timeline.filter(m => m.status === 'COMPLETED').length;
  return Math.round((completedMilestones / project.timeline.length) * 100);
}

export function getProjectStats(project: Project): {
  totalAmount: number;
  completedAmount: number;
  pendingAmount: number;
  progress: number;
  overdueCount: number;
} {
  const totalAmount = project.timeline.reduce((sum, m) => sum + m.amount, 0);
  const completedAmount = project.timeline
    .filter(m => m.status === 'COMPLETED')
    .reduce((sum, m) => sum + m.amount, 0);
  const pendingAmount = totalAmount - completedAmount;
  const progress = calculateProjectProgress(project);
  const overdueCount = project.timeline.filter(m => 
    m.dueDate && new Date(m.dueDate) < new Date() && m.status !== 'COMPLETED'
  ).length;
  
  return {
    totalAmount,
    completedAmount,
    pendingAmount,
    progress,
    overdueCount
  };
}

export function searchProjects(query: string, userId?: string): Project[] {
  const allProjects = userId ? 
    [...getProjectsByClient(userId), ...getProjectsByTalent(userId)] : 
    getAllProjects();
  
  const searchTerm = query.toLowerCase();
  return allProjects.filter(project => 
    project.title.toLowerCase().includes(searchTerm) ||
    project.summary.toLowerCase().includes(searchTerm) ||
    project.talentSlug.toLowerCase().includes(searchTerm)
  );
}

export function getRecentProjects(userId: string, limit: number = 10): Project[] {
  const userProjects = [...getProjectsByClient(userId), ...getProjectsByTalent(userId)];
  return userProjects
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, limit);
}

export function getProjectTimeline(projectId: string): Array<{
  type: 'milestone' | 'note' | 'document';
  id: string;
  title: string;
  description?: string;
  timestamp: string;
  author?: string;
}> {
  const project = getProject(projectId);
  if (!project) return [];
  
  const timeline = [];
  
  // Add milestones
  project.timeline.forEach(milestone => {
    timeline.push({
      type: 'milestone',
      id: milestone.id,
      title: milestone.title,
      description: milestone.description,
      timestamp: milestone.dueDate || milestone.createdAt,
      author: 'System'
    });
  });
  
  // Add notes
  project.notes.forEach(note => {
    timeline.push({
      type: 'note',
      id: note.id,
      title: 'Note added',
      description: note.content,
      timestamp: note.createdAtIso,
      author: note.authorId
    });
  });
  
  // Add documents
  project.documents.forEach(doc => {
    timeline.push({
      type: 'document',
      id: doc.id,
      title: `Document uploaded: ${doc.name}`,
      timestamp: doc.uploadedAtIso,
      author: 'System'
    });
  });
  
  return timeline.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
}

// Mock storage;
const projects: Project[] = [];
;
export function updateMilestone(;
  project: Project;
  milestoneId: string;
  update: Partial<Milestone>;
): Milestone | null {;
  const idx = project.milestones.findIndex((m) => m.id === milestoneId);
  if (idx === -1) return null;
  const now = new Date().toISOString();
  const next: Milestone = { ...project.milestones[idx], ...update, updatedAt: now };
  project.milestones[idx] = next;
  project.updatedAt = now;
  saveProject(project);
  return next;
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



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

export interface Milestone {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  amount: number;
  dueDate?: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'OVERDUE';
  createdAt: string;
  updatedAt: string;
}

export interface ProjectMember {
  id: string;
  projectId: string;
  userId: string;
  role: 'CLIENT' | 'TALENT' | 'ADMIN';
  joinedAt: string;
}

// In-memory storage for demo purposes
const projects: Project[] = [];
const milestones: Milestone[] = [];
const projectMembers: ProjectMember[] = [];

export function saveProject(project: Project): void {
  const existingIndex = projects.findIndex(p => p.id === project.id);
  if (existingIndex >= 0) {
    projects[existingIndex] = { ...project, updatedAt: new Date().toISOString() };
  } else {
    projects.push({ ...project, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
  }
}

export function getProject(projectId: string): Project | null {
  return projects.find(p => p.id === projectId) || null;
}

export function getProjectsByClient(clientId: string): Project[] {
  return projects.filter(p => p.clientId === clientId);
}

export function getProjectsByTalent(talentSlug: string): Project[] {
  return projects.filter(p => p.talentSlug === talentSlug);
}

export function getAllProjects(): Project[] {
  return projects;
}

export function deleteProject(projectId: string): boolean {
  const index = projects.findIndex(p => p.id === projectId);
  if (index >= 0) {
    projects.splice(index, 1);
    // Also delete related milestones and members
    const projectMilestones = milestones.filter(m => m.projectId === projectId);
    projectMilestones.forEach(m => {
      const milestoneIndex = milestones.findIndex(milestone => milestone.id === m.id);
      if (milestoneIndex >= 0) {
        milestones.splice(milestoneIndex, 1);
      }
    });
    
    const members = projectMembers.filter(m => m.projectId === projectId);
    members.forEach(m => {
      const memberIndex = projectMembers.findIndex(member => member.id === m.id);
      if (memberIndex >= 0) {
        projectMembers.splice(memberIndex, 1);
      }
    });
    
    return true;
  }
  return false;
}

export function createProject(data: {
  title: string;
  summary: string;
  clientId: string;
  talentSlug: string;
  startDateIso: string;
  timeline?: Array<{
    title: string;
    amount: number;
    dueDate?: string;
  }>;
}): Project {
  const project: Project = {
    id: uuidv4(),
    title: data.title,
    summary: data.summary,
    clientId: data.clientId,
    talentSlug: data.talentSlug,
    startDateIso: data.startDateIso,
    status: 'ACTIVE',
    timeline: (data.timeline || []).map(item => ({
      id: uuidv4(),
      title: item.title,
      amount: item.amount,
      dueDate: item.dueDate,
      status: 'PENDING'
    })),
    documents: [],
    notes: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  saveProject(project);
  return project;
}

export function updateProject(projectId: string, updates: Partial<Project>): Project | null {
  const project = getProject(projectId);
  if (!project) return null;
  
  const updatedProject = {
    ...project,
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  saveProject(updatedProject);
  return updatedProject;
}

export function addProjectNote(projectId: string, content: string, authorId: string): boolean {
  const project = getProject(projectId);
  if (!project) return false;
  
  const note = {
    id: uuidv4(),
    content,
    authorId,
    createdAtIso: new Date().toISOString()
  };
  
  project.notes.push(note);
  project.updatedAt = new Date().toISOString();
  saveProject(project);
  return true;
}

export function addProjectDocument(projectId: string, name: string, url: string): boolean {
  const project = getProject(projectId);
  if (!project) return false;
  
  const document = {
    id: uuidv4(),
    name,
    url,
    uploadedAtIso: new Date().toISOString()
  };
  
  project.documents.push(document);
  project.updatedAt = new Date().toISOString();
  saveProject(project);
  return true;
}

// Milestone functions
export function saveMilestone(milestone: Milestone): void {
  const existingIndex = milestones.findIndex(m => m.id === milestone.id);
  if (existingIndex >= 0) {
    milestones[existingIndex] = { ...milestone, updatedAt: new Date().toISOString() };
  } else {
    milestones.push({ ...milestone, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
  }
}

export function getMilestone(milestoneId: string): Milestone | null {
  return milestones.find(m => m.id === milestoneId) || null;
}

export function getMilestonesByProject(projectId: string): Milestone[] {
  return milestones.filter(m => m.projectId === projectId);
}

export function createMilestone(data: {
  projectId: string;
  title: string;
  description?: string;
  amount: number;
  dueDate?: string;
}): Milestone {
  const milestone: Milestone = {
    id: uuidv4(),
    projectId: data.projectId,
    title: data.title,
    description: data.description,
    amount: data.amount,
    dueDate: data.dueDate,
    status: 'PENDING',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  saveMilestone(milestone);
  return milestone;
}

export function updateMilestone(milestoneId: string, updates: Partial<Milestone>): Milestone | null {
  const milestone = getMilestone(milestoneId);
  if (!milestone) return null;
  
  const updatedMilestone = {
    ...milestone,
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  saveMilestone(updatedMilestone);
  return updatedMilestone;
}

export function deleteMilestone(milestoneId: string): boolean {
  const index = milestones.findIndex(m => m.id === milestoneId);
  if (index >= 0) {
    milestones.splice(index, 1);
    return true;
  }
  return false;
}

// Project member functions
export function addProjectMember(projectId: string, userId: string, role: ProjectMember['role']): ProjectMember {
  const member: ProjectMember = {
    id: uuidv4(),
    projectId,
    userId,
    role,
    joinedAt: new Date().toISOString()
  };
  
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

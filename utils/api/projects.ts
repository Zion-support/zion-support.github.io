
import { Project, Milestone } from '../types/milestones';

// Simple in-memory store. Replace with database as needed.
const projects: Project[] = [];

export function getAllProjects(): Project[] {
	return projects;
}

export function getProjectById(id: string): Project | null {
	return projects.find(p => p.id === id) || null;
}

export function createProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt' | 'milestones'>): Project {
	const newProject: Project = {
		...project,
		id: `project_${Date.now()}`,
		milestones: [],
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString()
	};
	projects.push(newProject);
	return newProject;
}

export function updateProject(id: string, updates: Partial<Omit<Project, 'id'>>): Project | null {
	const project = projects.find(p => p.id === id);
	if (!project) return null;
	Object.assign(project, updates, { updatedAt: new Date().toISOString() });
	return project;
}

export function addMilestone(project: Project, milestone: Omit<Milestone, 'id' | 'createdAt' | 'updatedAt'>): Milestone {
	const newMilestone: Milestone = {
		...milestone,
		id: `milestone_${Date.now()}`,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString()
	};
	project.milestones.push(newMilestone);
	project.updatedAt = new Date().toISOString();
	return newMilestone;
}

export function updateMilestone(project: Project, milestoneId: string, updates: Partial<Milestone>): Milestone | null {
	const milestone = project.milestones.find(m => m.id === milestoneId);
	if (!milestone) return null;
	Object.assign(milestone, updates, { updatedAt: new Date().toISOString() });
	project.updatedAt = new Date().toISOString();
	return milestone;
}

export function deleteMilestone(project: Project, milestoneId: string): boolean {
	const index = project.milestones.findIndex(m => m.id === milestoneId);
	if (index === -1) return false;
	project.milestones.splice(index, 1);
	project.updatedAt = new Date().toISOString();
	return true;
}

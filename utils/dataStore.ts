<<<<<<< HEAD
// Data store utilities
export const dataStore = {
  // Add data store functionality here
<<<<<<< HEAD
  getData: () => []
  setData: (data: any) => null
  updateData: (id: string, data: any) => null
  deleteData: (id: string) => null
}
=======
<<<<<<< HEAD
import fs from 'fs-extra';
import path from 'path';
import { Project, Review } from '../types/reviews';

const DATA_DIR = path.join(process.cwd(), 'data');
const PROJECTS_PATH = path.join(DATA_DIR, 'projects.json');
const REVIEWS_PATH = path.join(DATA_DIR, 'reviews.json');

async function ensureFilesExist(): Promise<void> {
  await fs.ensureDir(DATA_DIR);
  if (!(await fs.pathExists(PROJECTS_PATH))) {
    await fs.writeJson(PROJECTS_PATH, [], { spaces: 2 });
  }
  if (!(await fs.pathExists(REVIEWS_PATH))) {
    await fs.writeJson(REVIEWS_PATH, [], { spaces: 2 });
  }

export async function readProjects(): Promise<Project[]> {
  await ensureFilesExist();
  return fs.readJson(PROJECTS_PATH);

export async function writeProjects(projects: Project[]): Promise<void> {
  await fs.writeJson(PROJECTS_PATH, projects, { spaces: 2 });

export async function readReviews(): Promise<Review[]> {
  await ensureFilesExist();
  return fs.readJson(REVIEWS_PATH);

export async function writeReviews(reviews: Review[]): Promise<void> {
  await fs.writeJson(REVIEWS_PATH, reviews, { spaces: 2 });

export async function findProjectById(
  projectId: string
): Promise<Project | undefined> {
  const projects = await readProjects();
  return projects.find(p => p.id === projectId);

export async function upsertReview(newReview: Review): Promise<void> {
  const reviews = await readReviews();
  const idx = reviews.findIndex(r => r.id === newReview.id);
  if (idx >= 0) {
    reviews[idx] = newReview;
  } else {
    reviews.push(newReview);
  }
  await writeReviews(reviews);

export async function getProjectReviews(projectId: string): Promise<Review[]> {
  const reviews = await readReviews();
  return reviews.filter(r => r.projectId === projectId && !r.removed);
}

export function counterpartRole(
  role: 'client' | 'talent'
): 'client' | 'talent' {
  return role === 'client' ? 'talent' : 'client';

export async function hasExistingReview(
  projectId: string,
  fromRole: 'client' | 'talent',
  fromId: string
): Promise<boolean> {
  const reviews = await readReviews();
  return reviews.some(
    r =>
      r.projectId === projectId &&
      r.fromRole === fromRole &&
      r.fromId === fromId &&
      !r.removed
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  getData: () => [],
  setData: (data: any) => null,
  updateData: (id: string, data: any) => null,
  deleteData: (id: string) => null;
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
interface Project {
  id: string;
  title: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Review {
  id: string;
  projectId: string;
  fromRole: 'client' | 'talent';
  fromId: string;
  toRole: 'client' | 'talent';
  toId: string;
  rating: number;
  text: string;
  categories?: any;
  anonymous: boolean;
  approved: boolean;
  removed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

class DataStore {
  private projects: Project[] = [];
  private reviews: Review[] = [];

  // Project methods
  findProjectById(id: string): Project | undefined {
    return this.projects.find(project => project.id === id);
  }

  createProject(data: Partial<Project>): Project {
    const project: Project = {
      id: Math.random().toString(36).substr(2, 9),
      title: data.title || '',
      description: data.description || '',
      status: data.status || 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.projects.push(project);
    return project;
  }

  // Review methods
  hasExistingReview(projectId: string, fromRole: string, fromId: string): boolean {
    return this.reviews.some(review => 
      review.projectId === projectId && 
      review.fromRole === fromRole && 
      review.fromId === fromId
    );
  }

  upsertReview(data: Partial<Review>): Review {
    const existingIndex = this.reviews.findIndex(review => 
      review.projectId === data.projectId && 
      review.fromRole === data.fromRole && 
      review.fromId === data.fromId
    );

    if (existingIndex !== -1) {
      // Update existing review
      this.reviews[existingIndex] = {
        ...this.reviews[existingIndex],
        ...data,
        updatedAt: new Date()
      };
      return this.reviews[existingIndex];
    } else {
      // Create new review
      const review: Review = {
        id: Math.random().toString(36).substr(2, 9),
        projectId: data.projectId || '',
        fromRole: data.fromRole || 'client',
        fromId: data.fromId || '',
        toRole: data.toRole || 'talent',
        toId: data.toId || '',
        rating: data.rating || 0,
        text: data.text || '',
        categories: data.categories,
        anonymous: data.anonymous || false,
        approved: data.approved || false,
        removed: data.removed || false,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      this.reviews.push(review);
      return review;
    }
  }

  getReviewsByProject(projectId: string): Review[] {
    return this.reviews.filter(review => review.projectId === projectId);
  }

  getAllReviews(): Review[] {
    return [...this.reviews];
  }

  counterpartRole(role: 'client' | 'talent'): 'client' | 'talent' {
    return role === 'client' ? 'talent' : 'client';
  }
}

const store = new DataStore();

export const findProjectById = (id: string) => store.findProjectById(id);
export const createProject = (data: Partial<Project>) => store.createProject(data);
export const hasExistingReview = (projectId: string, fromRole: string, fromId: string) => store.hasExistingReview(projectId, fromRole, fromId);
export const upsertReview = (data: Partial<Review>) => store.upsertReview(data);
export const getReviewsByProject = (projectId: string) => store.getReviewsByProject(projectId);
export const getAllReviews = () => store.getAllReviews();
export const counterpartRole = (role: 'client' | 'talent') => store.counterpartRole(role);
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85

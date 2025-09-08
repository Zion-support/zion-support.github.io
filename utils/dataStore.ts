import fs from 'fs-extra';
import path from 'path';
import { Project, Review } from '../types/reviews';
const DATA_DIR = path.join(process.cwd(), 'data'),
const PROJECTS_PATH = path.join($2);
const REVIEWS_PATH = path.join($2);
async function ensureFilesExist(): Promise<void> {
  await fs.ensureDir($2);
  if (!(await fs.pathExists(PROJECTS_PATH))) {
    await fs.writeJson(PROJECTS_PATH, [], { spaces: 2})
  }

  createProject(data: Partial<Project>): Project {
    const project: Project = {
      id: Math.random().toString(36).substr(2, 9),
      title: data.title || "",
      description: data.description || "",
      status: data.status || "active",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.projects.push(project);
    return project;
  }

  // Review methods
  hasExistingReview(
    projectId: string,
    fromRole: string,
    fromId: string,
  ): boolean {
    return this.reviews.some(
      (review) =>
        review.projectId === projectId &&
        review.fromRole === fromRole &&
        review.fromId === fromId,
    );
  }

  upsertReview(data: Partial<Review>): Review {
    const existingIndex = this.reviews.findIndex(
      (review) =>
        review.projectId === data.projectId &&
        review.fromRole === data.fromRole &&
        review.fromId === data.fromId,
    );

    if (existingIndex !== -1) {
      // Update existing review
      this.reviews[existingIndex] = {
        ...this.reviews[existingIndex],
        ...data,
        updatedAt: new Date(),
      };
      return this.reviews[existingIndex];
    } else {
      // Create new review
      const review: Review = {
        id: Math.random().toString(36).substr(2, 9),
        projectId: data.projectId || "",
        fromRole: data.fromRole || "client",
        fromId: data.fromId || "",
        toRole: data.toRole || "talent",
        toId: data.toId || "",
        rating: data.rating || 0,
        text: data.text || "",
        categories: data.categories,
        anonymous: data.anonymous || false,
        approved: data.approved || false,
        removed: data.removed || false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      this.reviews.push(review);
      return review;
    }
  }

  getReviewsByProject(projectId: string): Review[] {
    return this.reviews.filter((review) => review.projectId === projectId);
  }

  getAllReviews(): Review[] {
    return [...this.reviews];
  }

  counterpartRole(role: "client" | "talent"): "client" | "talent" {
    return role === "client" ? "talent" : "client";
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }

  // Review methods
  hasExistingReview(projectId: string, fromRole: string, fromId: string): boolean {
    return this && this.reviews.some(review => 
      review && review.projectId === projectId && 
      review && review.fromRole === fromRole && 
      review && review.fromId === fromId
    );
  }

  upsertReview(data: Partial<Review>): Review {
    const existingIndex = this && this.reviews.findIndex(review => 
      review && review.projectId === data && data.projectId && 
      review && review.fromRole === data && data.fromRole && 
      review && review.fromId === data && data.fromId
    );

    if (existingIndex !== -1) {
      // Update existing review
      this && this.reviews[existingIndex] = {
        ...this && this.reviews[existingIndex],
        ...data,
        updatedAt: new Date()
      };
      return this && this.reviews[existingIndex];
    } else {
      // Create new review
      const review: Review = {
        id: Math && Math.random().toString(36).substr(2, 9),
        projectId: data && data.projectId || '',
        fromRole: data && data.fromRole || 'client',
        fromId: data && data.fromId || '',
        toRole: data && data.toRole || 'talent',
        toId: data && data.toId || '',
        rating: data && data.rating || 0,
        text: data && data.text || '',
        categories: data && data.categories,
        anonymous: data && data.anonymous || false,
        approved: data && data.approved || false,
        removed: data && data.removed || false,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      this && this.reviews.push(review);
      return review;
    }
  }

  getReviewsByProject(projectId: string): Review[] {
    return this && this.reviews.filter(review => review && review.projectId === projectId);
  }

  getAllReviews(): Review[] {
    return [...this && this.reviews];
  }

  counterpartRole(role: 'client' | 'talent'): 'client' | 'talent' {
    return role === 'client' ? 'talent' : 'client';
  }
}

export async function readProjects(): Promise<Project[]> {
  await ensureFilesExist($2);
  return fs.readJson(PROJECTS_PATH)
}

export async function writeProjects(projects: Project[]): Promise<void> {
  await fs.writeJson(PROJECTS_PATH, projects, { spaces: 2})
}

export async function readReviews(): Promise<Review[]> {
  await ensureFilesExist($2);
  return fs.readJson(REVIEWS_PATH)
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export const findProjectById = (id: string) => store.findProjectById(id);
export const createProject = (data: Partial<Project>) =>
  store.createProject(data);
export const hasExistingReview = (
  projectId: string,
  fromRole: string,
  fromId: string,
) => store.hasExistingReview(projectId, fromRole, fromId);
export const upsertReview = (data: Partial<Review>) => store.upsertReview(data);
export const getReviewsByProject = (projectId: string) =>
  store.getReviewsByProject(projectId);
export const getAllReviews = () => store.getAllReviews();
export const counterpartRole = (role: "client" | "talent") =>
  store.counterpartRole(role);

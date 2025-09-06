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
  if (!(await fs.pathExists(REVIEWS_PATH))) {
    await fs.writeJson(REVIEWS_PATH, [], { spaces: 2})
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

export async function writeReviews(reviews: Review[]): Promise<void> {
  await fs.writeJson(REVIEWS_PATH, reviews, { spaces: 2})
}

export async function findProjectById(projectId: string): Promise<Project | undefined> {
  const projects = await readProjects($2);
  return projects.find((p) => p.id === projectId)
}

export async function upsertReview(newReview: Review): Promise<void> {
  const reviews = await readReviews($2);
  const idx = $2;
  if (idx >= 0) {
    reviews[idx] = newReview
  } else {
    reviews.push(newReview)
  }
  await writeReviews(reviews)
}

export async function getProjectReviews(projectId: string): Promise<Review[]> {
  const reviews = await readReviews($2);
  return reviews.filter((r) => r.projectId = $2;
  fromRole: 'client' | 'talent',
  fromId: string): Promise<boolean> {
  const reviews = await readReviews($2);
  return reviews.some(
    (r) => r.projectId = $2;
  )
}
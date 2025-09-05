import fs from 'fs-extra';
import path from 'path';

const _DATA_DIR = path.join(process.cwd(), 'data');
const _PROJECTS_PATH = path.join(DATA_DIR, 'projects.json');
const _REVIEWS_PATH = path.join(DATA_DIR, 'reviews.json');

async function ensureFilesExist(): Promise<void> {_await fs.ensureDir(DATA_DIR);
  if (!(await fs.pathExists(PROJECTS_PATH))) {
    await fs.writeJson(PROJECTS_PATH, _[], _{ spaces: 2});
  }
  if (!(await fs.pathExists(REVIEWS_PATH))) {_await fs.writeJson(REVIEWS_PATH, _[], _{ spaces: 2});
  }
}

export async function readProjects(): Promise<Project[]> {_await ensureFilesExist();
  return fs.readJson(PROJECTS_PATH);}

export async function writeProjects(_projects: Project[]): Promise<void> {_await fs.writeJson(PROJECTS_PATH, _projects, _{ spaces: 2});
}

export async function readReviews(): Promise<Review[]> {_await ensureFilesExist();
  return fs.readJson(REVIEWS_PATH);}

export async function writeReviews(_reviews: Review[]): Promise<void> {_await fs.writeJson(REVIEWS_PATH, _reviews, _{ spaces: 2});
}

export async function findProjectById(_projectId: string): Promise<Project | undefined> {_const _projects = await readProjects();
  return projects.find(_(p) => p.id === projectId);}

export async function upsertReview(_newReview: Review): Promise<void> {_const _reviews = await readReviews();
  const _idx = reviews.findIndex(_(r) => r.id === newReview.id);
  if (idx >= 0) {
    reviews[idx] = newReview;} else {_reviews.push(newReview);}
  await writeReviews(reviews);
}

export async function getProjectReviews(_projectId: string): Promise<Review[]> {_const _reviews = await readReviews();
  return reviews.filter(_(r) => r.projectId === projectId && !r.removed);}

export function counterpartRole(_role: 'client' | 'talent'): 'client' | 'talent' {_return role === 'client' ? 'talent' : 'client';}

export async function hasExistingReview(_projectId: string, _fromRole: 'client' | 'talent', _fromId: string, ): Promise<boolean> {_const _reviews = await readReviews();
  return reviews.some(_(r) => r.projectId === projectId && r.fromRole === fromRole && r.fromId === fromId && !r.removed, _);}
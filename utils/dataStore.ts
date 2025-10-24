// Data store utilities
export const dataStore = {
  // Add data store functionality here
  getData: () => []
  setData: (data: any) => null
  updateData: (id: string, data: any) => null
  deleteData: (id: string) => null
};
  getData: () => [],
  setData: (data: any) => null,
  updateData: (id: string, data: any) => null,
  deleteData: (id: string) => null
}
  getData: () => [],
  setData: (data: any) => null,
  updateData: (id: string, data: any) => null,
  deleteData: (id: string) => null
}
interface Project {
  id: string
  title: string
  description: string
  status: string
  createdAt: Date
  updatedAt: Date
}
import fs from 'fs-extra'
import path from 'path'
import { Project, Review } from '../types/reviews'
const DATA_DIR = path.join(process.cwd(), 'data')
const PROJECTS_PATH = path.join(DATA_DIR, 'projects.json')
const REVIEWS_PATH = path.join(DATA_DIR, 'reviews.json')
async function ensureFilesExist(): Promise<void> {
  await fs.ensureDir(DATA_DIR)
  if (!(await fs.pathExists(PROJECTS_PATH))) {
    await fs.writeJson(PROJECTS_PATH, [], { spaces: 2 })
  }
  if (!(await fs.pathExists(REVIEWS_PATH))) {
    await fs.writeJson(REVIEWS_PATH, [], { spaces: 2 })
  }
}
export async function readProjects(): Promise<Project[]> {
  await ensureFilesExist()
  return fs.readJson(PROJECTS_PATH)
}
export async function writeProjects(projects: Project[]): Promise<void> {
  await fs.writeJson(PROJECTS_PATH, projects, { spaces: 2 })
}
export async function readReviews(): Promise<Review[]> {
  await ensureFilesExist()
  return fs.readJson(REVIEWS_PATH)
}
export async function writeReviews(reviews: Review[]): Promise<void> {
  await fs.writeJson(REVIEWS_PATH, reviews, { spaces: 2 })
}
export async function findProjectById(
  projectId: string
): Promise<Project | undefined> {
  const projects = await readProjects()
  return projects.find(p => p.id === projectId)
export async function findProjectById(projectId: string): Promise<Project | undefined> {
  const projects = await readProjects()
  return projects.find((p) => p.id === projectId)
}
export async function upsertReview(newReview: Review): Promise<void> {
  const reviews = await readReviews()
  const idx = reviews.findIndex(r => r.id === newReview.id)
  const idx = reviews.findIndex((r) => r.id === newReview.id)
  if (idx >= 0) {
    reviews[idx] = newReview
  } else {
    reviews.push(newReview)
  }
  await writeReviews(reviews)
}
export async function getProjectReviews(projectId: string): Promise<Review[]> {
  const reviews = await readReviews()
  return reviews.filter(r => r.projectId === projectId && !r.removed)
}
export function counterpartRole(
  role: 'client' | 'talent'
): 'client' | 'talent' {
  return reviews.filter((r) => r.projectId === projectId && !r.removed)
}
export function counterpartRole(role: 'client' | 'talent'): 'client' | 'talent' {
  return role === 'client' ? 'talent' : 'client'
}
export async function hasExistingReview(
  projectId: string,
  fromRole: 'client' | 'talent',
  fromId: string
): Promise<boolean> {
  const reviews = await readReviews()
  return reviews.some(
    r =>
      r.projectId === projectId &&
      r.fromRole === fromRole &&
      r.fromId === fromId &&
      !r.removed
  )
}
// Data store utilities
export const data_store = {
  // Add data store functionality here
  get_data: () => [],
  set_data: (data: any) => null,
  update_data: (id: string, data: any) => null,
  delete_data: (id: string) => null
};
export const findProjectById = (id: string) => store.findProjectById(id)
export const createProject = (data: Partial<Project>) => store.createProject(data)
export const hasExistingReview = (projectId: string, fromRole: string, fromId: string) => store.hasExistingReview(projectId, fromRole, fromId)
export const upsertReview = (data: Partial<Review>) => store.upsertReview(data)
export const getReviewsByProject = (projectId: string) => store.getReviewsByProject(projectId)
export const getAllReviews = () => store.getAllReviews()
export const counterpartRole = (role: 'client' | 'talent') => store.counterpartRole(role)
  fromId: string,
): Promise<boolean> {
  const reviews = await readReviews()
  return reviews.some(
    (r) => r.projectId === projectId && r.fromRole === fromRole && r.fromId === fromId && !r.removed,
  )
}

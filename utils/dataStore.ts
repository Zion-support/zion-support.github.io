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
    return this && this.projects.find(project => project && project.id === id);
  }
}
export async function readProjects(): Promise<Project[]> {
  await ensureFilesExist();
  return fs.readJson(PROJECTS_PATH);
}
export async function writeProjects(projects: Project[]): Promise<void> {
  await fs.writeJson(PROJECTS_PATH, projects, { spaces: 2 });
}
export async function readReviews(): Promise<Review[]> {
  await ensureFilesExist();
  return fs.readJson(REVIEWS_PATH);
}
export async function writeReviews(reviews: Review[]): Promise<void> {
  await fs.writeJson(REVIEWS_PATH, reviews, { spaces: 2 });
}
export async function findProjectById(
  projectId: string
): Promise<Project | undefined> {
  const projects = await readProjects();
  return projects.find(p => p.id === projectId);
}
export async function upsertReview(newReview: Review): Promise<void> {
  const reviews = await readReviews();
  const idx = reviews.findIndex(r => r.id === newReview.id);
  if (idx >= 0) {
    reviews[idx] = newReview;
  } else {
    reviews.push(newReview);
  }
  await writeReviews(reviews);
}
export async function getProjectReviews(projectId: string): Promise<Review[]> {
  const reviews = await readReviews();
  return reviews.filter(r => r.projectId === projectId && !r.removed);
}
export function counterpartRole(
  role: 'client' | 'talent'
): 'client' | 'talent' {
  return role === 'client' ? 'talent' : 'client';
}
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
}
// Data store utilities;
export const data_store = {
  // Add data store functionality here;
  get_data: () => [],
  set_data: (data: any) => null,
  update_data: (id: string, data: any) => null,
  delete_data: (id: string) => null;
}


  getData: () => [],
  setData: (data: any) => null,
  updateData: (id: string, data: any) => null,
  deleteData: (id: string) => null;
};
  getData: () => [],
  setData: (data: any) => null,
  updateData: (id: string, data: any) => null,
  deleteData: (id: string) => null;
};
=======


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



=======
// Data store utilities;
export const data_store = {
  // Add data store functionality here;
  get_data: () => [],
  set_data: (data: any) => null,
  update_data: (id: string, data: any) => null,
  delete_data: (id: string) => null;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
export const findProjectById = (id: string) => store.findProjectById(id);
export const createProject = (data: Partial<Project>) => store.createProject(data);
export const hasExistingReview = (projectId: string, fromRole: string, fromId: string) => store.hasExistingReview(projectId, fromRole, fromId);
export const upsertReview = (data: Partial<Review>) => store.upsertReview(data);
export const getReviewsByProject = (projectId: string) => store.getReviewsByProject(projectId);
export const getAllReviews = () => store.getAllReviews();
export const counterpartRole = (role: 'client' | 'talent') => store.counterpartRole(role);


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

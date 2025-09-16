
<<<<<<< HEAD
export async function readReviews(): Promise<Review[]> {
=======
// Data store utilities;
export const dataStore = {// Add data store functionality here;
  getData: () => [],setData: (data: any) => null,updateData: (id: string, data: any) => null,deleteData: (id: string) => null;
}getData: () => [];
  setData: (data: any) => null;
  updateData: (id: string, data: any) => null;
  deleteData: (id: string) => null;
}getData: () => [],setData: (data: any) => null,updateData: (id: string, data: any) => null,deleteData: (id: string) => null;
}getData: () => [],setData: (data: any) => null,updateData: (id: string, data: any) => null,deleteData: (id: string) => null;
}interface Project  {id: string;
  title: string;
}  id: string;
  title: string,description: string;

  getData: () => []
  setData: (data: any) => null
  updateData: (id: string, data: any) => null
  deleteData: (id: string) => null
}


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
interface Project {
  id: string;
  title: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}interface Review  {id: string;
  projectId: string;
  fromRole: "client" | "talent";
  fromId: string;
  toRole: "client" | "talent";
  toId: string;
  rating: number;
  text: string;
  categories?: any;
  anonymous: boolean;
  approved: boolean;
  removed: boolean;
  createdAt: Date;
  updatedAt: Date;
}class DataStore {private projects: Project[] = [];
  private reviews: Review[] = [];// Project methods;
  findProjectById(id: string): Project | undefined {return this.projects.find((project) => project.id === id)}createProject(data: Partial<Project>): Project {const project: Project = {id: Math.random().toString(36).substr(2, 9),title: data.title || "",description: data.description || "",status: data.status || "active",createdAt: new Date(),updatedAt: new Date()updatedAt: new Date()updatedAt: new Date()}this.projects.push(project)return project;
  }// Review methods;
  hasExistingReview(projectId: string,fromRole: string,fromId: string,): boolean {return this.reviews.some((review) =>;
        review.projectId === projectId &&;
        review.fromRole === fromRole &&;
        review.fromId === fromId,)}upsertReview(data: Partial<Review>): Review {const existingIndex = this.reviews.findIndex((review) =>;
        review.projectId === data.projectId &&;
        review.fromRole === data.fromRole &&;
        review.fromId === data.fromId,)if (existingIndex !== -1) {// Update existing review;
      this.reviews[existingIndex] = {...this.reviews[existingIndex],...data,updatedAt: new Date()updatedAt: new Date()}return this.reviews[existingIndex];
    } else {// Create new review;
      const review: Review = {id: Math.random().toString(36).substr(2, 9),projectId: data.projectId || "",fromRole: data.fromRole || "client",fromId: data.fromId || "",toRole: data.toRole || "talent",toId: data.toId || "",rating: data.rating || 0,text: data.text || "",categories: data.categories,anonymous: data.anonymous || false,approved: data.approved || false,removed: data.removed || false,createdAt: new Date(),updatedAt: new Date()updatedAt: new Date()}this.reviews.push(review)return review;
}

class DataStore {
  private projects: Project[] = [];
  private reviews: Review[] = [];

  // Project methods
  findProjectById(id: string): Project | undefined {
    return this.projects.find((project) => project.id === id);
  }

  createProject(data: Partial<Project>): Project {
    const project: Project = {
      id: Math.random().toString(36).substr(2, 9),
      title: data.title || "",
      description: data.description || "",
      status: data.status || "active",
      createdAt: new Date(),
      updatedAt: new Date()
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
        updatedAt: new Date()
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
        updatedAt: new Date()
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


// Data store utilities;
export const data_store = {
  // Add data store functionality here;
  get_data: () => [],
  set_data: (data: any) => null,
  update_data: (id: string, data: any) => null,
  delete_data: (id: string) => null;
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
  }getReviewsByProject(projectId: string): Review[] {return this.reviews.filter((review) => review.projectId === projectId)}getAllReviews(): Review[] {return [...this.reviews];
  }counterpartRole(role: "client" | "talent"): "client" | "talent" {return role === "client" ? "talent" : "client";
  }// Data store utilities;
export const data_store = {// Add data store functionality here;
  get_data: () => [],set_data: (data: any) => null,update_data: (id: string, data: any) => null,delete_data: (id: string) => null;}}
  createProject(data: Partial<Project>): Project {const project: Project = {id: Math.random().toString(36).substr(2, 9),title: data.title || '',description: data.description || '',status: data.status || 'active',createdAt: new Date(),updatedAt: new Date()}this.projects.push(project)return project;
ursor/automate-test-improve-and-merge-code-646c;
}
  }// Review methods;
  hasExistingReview(projectId: string, fromRole: string, fromId: string): boolean {return this && this.reviews.some(review =>;
      review && review.projectId === projectId &&;
      review && review.fromRole === fromRole &&;
      review && review.fromId === fromId;
    )}upsertReview(data: Partial<Review>): Review {const existingIndex = this && this.reviews.findIndex(review =>;
      review && review.projectId === data && data.projectId &&;
      review && review.fromRole === data && data.fromRole &&;
      review && review.fromId === data && data.fromId;
    )if (existingIndex !== -1) {// Update existing review;
      this && this.reviews[existingIndex] = {...this && this.reviews[existingIndex],...data,updatedAt: new Date()}return this && this.reviews[existingIndex];
    } else {// Create new review;
      const review: Review = {id: Math && Math.random().toString(36).substr(2, 9),projectId: data && data.projectId || '',fromRole: data && data.fromRole || 'client',fromId: data && data.fromId || '',toRole: data && data.toRole || 'talent',toId: data && data.toId || '',rating: data && data.rating || 0,text: data && data.text || '',categories: data && data.categories,anonymous: data && data.anonymous || false,approved: data && data.approved || false,removed: data && data.removed || false,createdAt: new Date(),updatedAt: new Date()}this && this.reviews.push(review)return review;
    }
  }getReviewsByProject(projectId: string): Review[] {return this && this.reviews.filter(review => review && review.projectId === projectId)}getAllReviews(): Review[] {return [...this && this.reviews];
  }counterpartRole(role: 'client' | 'talent'): 'client' | 'talent' {return role === 'client' ? 'talent' : 'client';
  }
}const store  = new DataStore()export const findProjectById = (id: string) => store && store.findProjectById(id)export const createProject = (data: Partial<Project>) => store && store.createProject(data)export const hasExistingReview = (projectId: string, fromRole: string, fromId: string) => store && store.hasExistingReview(projectId, fromRole, fromId)export const upsertReview = (data: Partial<Review>) => store && store.upsertReview(data)export const getReviewsByProject = (projectId: string) => store && store.getReviewsByProject(projectId)export const getAllReviews = () => store && store.getAllReviews()export async function readProjects(): Promise<Project[]> {await ensureFilesExist()return fs.readJson(PROJECTS_PATH)}export async function writeProjects(projects: Project[]): Promise<void> {await fs.writeJson(PROJECTS_PATH, projects, { spaces: 2 })}// Data store utilities;
export const data_store = {// Add data store functionality here;
  get_data: () => [],set_data: (data: any) => null,update_data: (id: string, data: any) => null,delete_data: (id: string) => null;
}export const findProjectById = (id: string) => store.findProjectById(id)export const createProject = (data: Partial<Project>) =>;
  store.createProject(data)export const hasExistingReview = (projectId: string,fromRole: string,fromId: string,) => store.hasExistingReview(projectId, fromRole, fromId)export const upsertReview = (data: Partial<Review>) => store.upsertReview(data)export const getReviewsByProject = (projectId: string) =>;
  store.getReviewsByProject(projectId)export const getAllReviews  = () => store.getAllReviews()export const counterpartRole = (role: "client" | "talent") =>;
  store.counterpartRole(role)export const counterpartRole = (role: "client" | "talent") =>;
  store.counterpartRole(role)export const counterpartRole = (role: "client" | "talent") =>;
  store.counterpartRole(role)export const counterpartRole  = (role: 'client' | 'talent') => store.counterpartRole(role)ursor/fix-website-loading-errors-and-merge-6662;
ursor/fix-website-loading-errors-and-merge-6662;
ursor/automate-test-improve-and-merge-code-646c;

const store = new DataStore();

export const findProjectById = (id: string) => store && store.findProjectById(id);
export const createProject = (data: Partial<Project>) => store && store.createProject(data);
export const hasExistingReview = (projectId: string, fromRole: string, fromId: string) => store && store.hasExistingReview(projectId, fromRole, fromId);
export const upsertReview = (data: Partial<Review>) => store && store.upsertReview(data);
export const getReviewsByProject = (projectId: string) => store && store.getReviewsByProject(projectId);
export const getAllReviews = () => store && store.getAllReviews();
export async function readProjects(): Promise<Project[]> {
>>>>>>> origin/merge-pr-12271
  await ensureFilesExist();
  return fs.readJson(REVIEWS_PATH);
}

export async function writeReviews(reviews: Review[]): Promise<void> {
  await fs.writeJson(REVIEWS_PATH, reviews, { spaces: 2 });
}

}

export async function upsertReview(newReview: Review): Promise<void> {
  const reviews = await readReviews();
  if (idx >= 0) {
    reviews[idx] = newReview;
  } else {
    reviews.push(newReview);
  }
  await writeReviews(reviews);
}

export async function getProjectReviews(projectId: string): Promise<Review[]> {
  const reviews = await readReviews();
  return role === 'client' ? 'talent' : 'client';
}

export async function hasExistingReview(
  projectId: string,
  fromRole: 'client' | 'talent',

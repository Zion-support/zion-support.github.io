<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
// Data store utilities
export const dataStore = {
  // Add data store functionality here
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  getData: () => []
  setData: (data: any) => null
  updateData: (id: string, data: any) => null
  deleteData: (id: string) => null
}
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  getData: () => [],
  setData: (data: any) => null,
  updateData: (id: string, data: any) => null,
  deleteData: (id: string) => null;
};
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  getData: () => [],
  setData: (data: any) => null,
  updateData: (id: string, data: any) => null,
  deleteData: (id: string) => null;
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
interface Project {
  id: string;
  title: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
interface Review {
  id: string;
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
}

class DataStore {
  private projects: Project[] = [];
  private reviews: Review[] = [];

  // Project methods
  findProjectById(id: string): Project | undefined {
    return this.projects.find((project) => project.id === id);
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

const store = new DataStore();

export const findProjectById = (id: string) => store && store.findProjectById(id);
export const createProject = (data: Partial<Project>) => store && store.createProject(data);
export const hasExistingReview = (projectId: string, fromRole: string, fromId: string) => store && store.hasExistingReview(projectId, fromRole, fromId);
export const upsertReview = (data: Partial<Review>) => store && store.upsertReview(data);
export const getReviewsByProject = (projectId: string) => store && store.getReviewsByProject(projectId);
export const getAllReviews = () => store && store.getAllReviews();
export async function readProjects(): Promise<Project[]> {
  await ensureFilesExist();
  return fs.readJson(PROJECTS_PATH);
}

export async function writeProjects(projects: Project[]): Promise<void> {
  await fs.writeJson(PROJECTS_PATH, projects, { spaces: 2 });
}

// Data store utilities;
export const data_store = {
  // Add data store functionality here;
  get_data: () => [],
  set_data: (data: any) => null,
  update_data: (id: string, data: any) => null,
  delete_data: (id: string) => null;
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
export const counterpartRole = (role: "client" | "talent") =>
  store.counterpartRole(role);
=======
<<<<<<< HEAD
export const counterpartRole = (role: "client" | "talent") =>
  store.counterpartRole(role);
=======
export const counterpartRole = (role: 'client' | 'talent') => store.counterpartRole(role);
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

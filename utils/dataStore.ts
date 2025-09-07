<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
// Data store utilities
export const dataStore = {
  // Add data store functionality here
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

// Data store utilities
export const dataStore = {
  // Add data store functionality here
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  getData: () => []

getData: () => []

  setData: (data: any) => null
  updateData: (id: string, data: any) => null
  deleteData: (id: string) => null
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

  getData: () => []
  setData: (data: any) => null;
  updateData: (id: string, data: any) => null;
  deleteData: (id: string) => null;
}





>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  getData: () => [],
  setData: (data: any) => null,
  updateData: (id: string, data: any) => null,
  deleteData: (id: string) => null;
};
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330


=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31










<<<<<<< HEAD



interface Project {}
  id: string;
  title: string;
=======
}  id: string;
  title: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}  id: string;
  title: string,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
  // TODO: Implement
}
  id: string;,
  title: string;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  description: string;
=======
  description: string;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  status: string;

  createdAt: Date;,
  updatedAt: Date;

}

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
  // TODO: Implement
}
  id: string;,
  projectId: string;

  fromRole: "client" | "talent";",
  fromId: string;"
  toRole: "client" | "talent";",

  toId: string;
  rating: number;,
  text: string;
  categories?: any;
  anonymous: boolean;,
  approved: boolean;

  removed: boolean;,
  createdAt: Date;
  updatedAt: Date;

}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  createProject(data: Partial<Project>): Project {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

      return review;
    }
  }

  getReviewsByProject(projectId: string): Review[] {

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


}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======





>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }

  // Review methods
  hasExistingReview(projectId: string, fromRole: string, fromId: string): boolean {
=======
  // Review methods;
  hasExistingReview(projectId: string, fromRole: string, fromId: string): boolean {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return this && this.reviews.some(review => 
      review && review.projectId === projectId && 
      review && review.fromRole === fromRole && 
      review && review.fromId === fromId;
    );
  }

  upsertReview(data: Partial<Review>): Review {}
    const existingIndex = this && this.reviews.findIndex(review => 
      review && review.projectId === data && data.projectId && 
      review && review.fromRole === data && data.fromRole && 
      review && review.fromId === data && data.fromId;
    );

    if (existingIndex !== -1) {}
      // Update existing review;
      this && this.reviews[existingIndex] = {}
        ...this && this.reviews[existingIndex],
        ...data,
        updatedAt: new Date()
      };
      return this && this.reviews[existingIndex];
    } else {}
      // Create new review;
      const review: Review = {}
        id: Math && Math.random().toString(36).substr(2, 9),
        projectId: data && data.projectId || '','
        fromRole: data && data.fromRole || 'client','
        fromId: data && data.fromId || '','
        toRole: data && data.toRole || 'talent','
        toId: data && data.toId || '',
        rating: data && data.rating || 0,'
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

  getReviewsByProject(projectId: string): Review[] {}
    return this && this.reviews.filter(review => review && review.projectId === projectId);
  }

  getAllReviews(): Review[] {}
    return [...this && this.reviews];
  }
'
  counterpartRole(role: 'client' | 'talent'): 'client' | 'talent' {'
    return role === 'client' ? 'talent' : 'client';
  }
}

const store = new DataStore();

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934






export const findProjectById = (id: string) => store.findProjectById(id);
export const createProject = (data: Partial<Project>) =>;
=======

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








export const findProjectById = (id: string) => store.findProjectById(id);
export const createProject = (data: Partial<Project>) =>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  store.createProject(data);
export const hasExistingReview = (
  projectId: string,
  fromRole: string,
<<<<<<< HEAD
  fromId: string,;
) => store.hasExistingReview(projectId, fromRole, fromId);
export const upsertReview = (data: Partial<Review>) => store.upsertReview(data);
export const getReviewsByProject = (projectId: string) =>;
  store.getReviewsByProject(projectId);
export const getAllReviews = () => store.getAllReviews();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export const counterpartRole = (role: 'client' | 'talent') => store.counterpartRole(role);
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export const counterpartRole = (role: "client" | "talent") =>
  store.counterpartRole(role);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
export const counterpartRole = (role: "client" | "talent") =>
  store.counterpartRole(role);
=======
<<<<<<< HEAD
export const counterpartRole = (role: "client" | "talent") =>
  store.counterpartRole(role);
=======
export const counterpartRole = (role: 'client' | 'talent') => store.counterpartRole(role);
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export const counterpartRole = (role: "client" | "talent") =>;
  store.counterpartRole(role);
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  fromId: string,
) => store.hasExistingReview(projectId, fromRole, fromId);
export const upsertReview = (data: Partial<Review>) => store.upsertReview(data);
export const getReviewsByProject = (projectId: string) =>
  store.getReviewsByProject(projectId);
export const getAllReviews = () => store.getAllReviews();

export const counterpartRole = (role: "client" | "talent") =>
export const counterpartRole = (role: 'client' | 'talent') => store.counterpartRole(role);










  store.counterpartRole(role);



<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

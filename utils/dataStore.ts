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
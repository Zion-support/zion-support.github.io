// Data Store - Mock data store for general functionality
export interface Review {
  id: string;
  projectId: string;
  fromRole: string;
  fromId: string;
  toRole: string;
  toId: string;
  rating: number;
  comment: string;
  approved: boolean;
  removed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PublicReview {
  id: string;
  projectId: string;
  fromRole: string;
  toRole: string;
  rating: number;
  comment: string;
  createdAt: string;
}

class DataStore {
  private reviews: Map<string, Review> = new Map();

  // Review methods
  createReview(data: Partial<Review>): Review {
    const id = `review_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const review: Review = {
      id,
      projectId: data.projectId || '',
      fromRole: data.fromRole || '',
      fromId: data.fromId || '',
      toRole: data.toRole || '',
      toId: data.toId || '',
      rating: data.rating || 0,
      comment: data.comment || '',
      approved: data.approved || false,
      removed: data.removed || false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.reviews.set(id, review);
    return review;
  }

  getReview(id: string): Review | undefined {
    return this.reviews.get(id);
  }

  getAllReviews(): Review[] {
    return Array.from(this.reviews.values());
  }

  getReviewsByProject(projectId: string): Review[] {
    return Array.from(this.reviews.values()).filter(r => r.projectId === projectId);
  }

  updateReview(id: string, data: Partial<Review>): Review | undefined {
    const review = this.reviews.get(id);
    if (!review) return undefined;

    const updated = { ...review, ...data, updatedAt: new Date().toISOString() };
    this.reviews.set(id, updated);
    return updated;
  }

  deleteReview(id: string): boolean {
    return this.reviews.delete(id);
  }

  approveReview(id: string): Review | undefined {
    return this.updateReview(id, { approved: true });
  }

  removeReview(id: string): Review | undefined {
    return this.updateReview(id, { removed: true });
  }
}

export const dataStore = new DataStore();
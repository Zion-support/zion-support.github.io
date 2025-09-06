export interface Review {};
  id: string;
  userId: string;
  serviceId: string;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ReviewSummary {};
  averageRating: number;
  totalReviews: number;
  ratingDistribution: {}
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
}
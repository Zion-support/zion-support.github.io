export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  tags: string[];
  images: string[];
  seller: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    reviews: number;
  };
  location: {
    city: string;
    country: string;
    coordinates?: [number, number];
  };
  status: 'active' | 'sold' | 'expired' | 'draft';
  createdAt: Date;
  updatedAt: Date;
  views: number;
  favorites: number;
  condition: 'new' | 'like-new' | 'good' | 'fair' | 'poor';
  specifications?: Record<string, any>;
  shipping?: {
    available: boolean;
    cost: number;
    method: string;
    estimatedDays: number;
  };
  returns?: {
    allowed: boolean;
    days: number;
    cost: number;
  };
}

export interface ListingFilter {
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  location?: string;
  condition?: string;
  tags?: string[];
  sellerRating?: number;
  sortBy?: 'price' | 'date' | 'rating' | 'views';
  sortOrder?: 'asc' | 'desc';
}

export interface ListingSearchResult {
  listings: Listing[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface ListingFormData {
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  tags: string[];
  images: File[];
  condition: string;
  specifications: Record<string, any>;
  shipping: {
    available: boolean;
    cost: number;
    method: string;
    estimatedDays: number;
  };
  returns: {
    allowed: boolean;
    days: number;
    cost: number;
  };
}

export interface ListingStats {
  totalListings: number;
  activeListings: number;
  totalViews: number;
  totalFavorites: number;
  averagePrice: number;
  categoryDistribution: Record<string, number>;
}
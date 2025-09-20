export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  tags: string[];
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
=======
=======
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
  };
  location?: string;
=======
  availability?: string;
  aiScore?: number;
  pricingTier?: string;
}
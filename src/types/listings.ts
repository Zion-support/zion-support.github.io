export interface ProductListing {
  id: string;
  title: string;
  description: string;
  category: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
  subcategory?: string;
  price: number | null;
  currency: string;
  tags: string[];
<<<<<<< HEAD
  author: {
    name: string;
    id: string;
    avatarUrl?: string;
    email?: string;
  };
  images: string[];
  createdAt: string;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
  aiScore?: number;
  location?: string;
  availability?: string;
}

export interface ServiceCategory {
  label: string;
  value: string;
  description?: string;
  icon?: string;
<<<<<<< HEAD
=======
  price: number;
  rating: number;
  image: string;
  features: string[];
  addons: string[];
  featured?: boolean;
  location?: string;
  availability?: string;
  created_at?: string;
  tags?: string[];
  author?: string;
  images?: string[];
  review_count?: number;
  ai_score?: number;
  currency?: string;
  monthly?: boolean;
  billing_frequency?: string;
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
=======
  author: string;
  images: string[];
  created_at: string;
  rating: number;
  review_count: number;
  featured: boolean;
  location: string;
  availability: string;
  ai_score: number;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2857
}
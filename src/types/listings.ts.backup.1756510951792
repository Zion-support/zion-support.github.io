export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  subcategory?: string;
  tags: string[];
  images: string[];
  seller: {
    id: string;
    name: string;
    rating: number;
    reviews: number;
  };
  location: string;
  createdAt: string;
  updatedAt: string;
  status: 'active' | 'inactive' | 'sold' | 'pending';
  views: number;
  likes: number;
  shares: number;
}

export interface ProductListing extends Listing {
  brand?: string;
  model?: string;
  condition: 'new' | 'used' | 'refurbished';
  warranty?: string;
  shipping: {
    cost: number;
    method: string;
    estimatedDays: number;
  };
}

export interface ServiceListing extends Listing {
  serviceType: 'consulting' | 'development' | 'maintenance' | 'training' | 'support';
  duration?: string;
  availability: string[];
  experience: number;
  certifications: string[];
  portfolio?: string[];
}

export interface TalentListing extends Listing {
  skills: string[];
  experience: number;
  education: string[];
  certifications: string[];
  languages: string[];
  availability: string[];
  hourlyRate: number;
  portfolio?: string[];
  references?: string[];
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  type: 'product' | 'service' | 'talent';
  image?: string;
}

export interface WishlistItem {
  id: string;
  userId: string;
  listingId: string;
  type: 'product' | 'service' | 'talent';
  addedAt: string;
}

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
  {/* Removed stray closing brace */}

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
  {/* Removed stray closing brace */}

export interface ServiceListing extends Listing {
  serviceType: 'consulting' | 'development' | 'maintenance' | 'training' | 'support';
  duration?: string;
  availability: string[];
  experience: number;
  certifications: string[];
  portfolio?: string[];
  {/* Removed stray closing brace */}

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
  {/* Removed stray closing brace */}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  type: 'product' | 'service' | 'talent';
  image?: string;
  {/* Removed stray closing brace */}

export interface WishlistItem {
  id: string;
  userId: string;
  listingId: string;
  type: 'product' | 'service' | 'talent';
  addedAt: string;
  {/* Removed stray closing brace */}

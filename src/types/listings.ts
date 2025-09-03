export interface Listing {};
};
  location: string;  createdAt: string;
  updatedAt: string;
  status: 'active' | 'inactive' | 'sold' | 'pending';
  views: number;
  likes: number;
  shares: number}
export interface ProductListing extends Listing {};
    estimatedDays: number}}
;
export interface ServiceListing extends Listing {};
  portfolio?: string[]}
export interface TalentListing extends Listing {};
  references?: string[]}
export interface CartItem {};
  image?: string}
export interface WishlistItem {};
  addedAt: string}

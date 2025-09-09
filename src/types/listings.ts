export interface ProductListing {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  seller: {
    id: string;
    name: string;
    rating: number;
  };
  tags: string[];
  availability: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ListingFilter {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  tags?: string[];
  availability?: boolean;
}

export interface ListingSearchResult {
  listings: ProductListing[];
  total: number;
  page: number;
  limit: number;
}
export interface ProductListing {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  tags: string[];
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ListingView = "grid" | "list";

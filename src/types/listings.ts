export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  images: string[];
  rating: number;
  reviews: number;
  location: string;
  createdAt: string;
  updatedAt: string;
  seller: {
    id: string;
    name: string;
    rating: number;
    reviews: number;
  };
}
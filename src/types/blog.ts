export interface BlogPost {
  id: string,
  title: string,
  excerpt: string,
  content: string,
  category: string,
  publishedAt: string,
  featuredImage?: string;
  featuredImageAlt?: string;
  isFeatured?: boolean;
  tags?: string[];
  author?: {
    name: string,
    avatar?: string;
    bio?: string, };
  readTime?: number, }
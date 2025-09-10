export interface BlogAuthor {
  name: string
  avatarUrl: string
  title?: string
  bio?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: BlogAuthor
  publishedAt: string
  readTime: number
  tags: string[]
  image: string
  featuredImageAlt?: string
  category?: string
  isFeatured?: boolean
  isPublished?: boolean
  updatedAt?: string
}

export interface GeneratedBlogContent {
  title: string
  metaDescription: string
  body: string
  tags: string[]
  tweetSummary?: string
  imagePrompt?: string
}

export interface GeneratedNewsletterContent {
  subject: string
  previewText: string
  body: string
  cta: string
}

export const BLOG_POSTS: BlogPost[] = []

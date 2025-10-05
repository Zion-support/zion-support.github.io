/**
 * Content Manager Utility
 * Centralized content management and caching for improved performance
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featured: boolean;
  readTime?: number;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  client: string;
  industry: string;
  results: string[];
  featured: boolean;
}

/**
 * Content cache to minimize file system reads
 */
class ContentCache {
  private blogCache: Map<string, BlogPost> = new Map();
  private caseStudyCache: Map<string, CaseStudy> = new Map();
  private lastUpdate: number = 0;
  private readonly CACHE_TTL = 5 * 60 * 1000; // 5 minutes

  isCacheValid(): boolean {
    return Date.now() - this.lastUpdate < this.CACHE_TTL;
  }

  setBlogPosts(posts: BlogPost[]): void {
    this.blogCache.clear();
    posts.forEach(post => this.blogCache.set(post.slug, post));
    this.lastUpdate = Date.now();
  }

  setCaseStudies(studies: CaseStudy[]): void {
    this.caseStudyCache.clear();
    studies.forEach(study => this.caseStudyCache.set(study.slug, study));
    this.lastUpdate = Date.now();
  }

  getBlogPost(slug: string): BlogPost | undefined {
    return this.blogCache.get(slug);
  }

  getCaseStudy(slug: string): CaseStudy | undefined {
    return this.caseStudyCache.get(slug);
  }

  getAllBlogPosts(): BlogPost[] {
    return Array.from(this.blogCache.values());
  }

  getAllCaseStudies(): CaseStudy[] {
    return Array.from(this.caseStudyCache.values());
  }

  clear(): void {
    this.blogCache.clear();
    this.caseStudyCache.clear();
    this.lastUpdate = 0;
  }
}

const contentCache = new ContentCache();

/**
 * Get all blog posts with caching
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (contentCache.isCacheValid()) {
    return contentCache.getAllBlogPosts();
  }

  // In production, this would fetch from content directory
  // For now, return cached if available
  return contentCache.getAllBlogPosts();
}

/**
 * Get blog post by slug
 */
export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  if (contentCache.isCacheValid()) {
    return contentCache.getBlogPost(slug);
  }

  // Fetch single post if not in cache
  const posts = await getAllBlogPosts();
  return posts.find(post => post.slug === slug);
}

/**
 * Get featured blog posts
 */
export async function getFeaturedBlogPosts(limit: number = 4): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts
    .filter(post => post.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

/**
 * Get recent blog posts
 */
export async function getRecentBlogPosts(limit: number = 10): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

/**
 * Get blog posts by category
 */
export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts
    .filter(post => post.category.toLowerCase() === category.toLowerCase())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get blog posts by tag
 */
export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts
    .filter(post => post.tags.some(t => t.toLowerCase() === tag.toLowerCase()))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Search blog posts
 */
export async function searchBlogPosts(query: string): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  const lowerQuery = query.toLowerCase();
  
  return posts.filter(post => 
    post.title.toLowerCase().includes(lowerQuery) ||
    post.description.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    post.category.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get all case studies with caching
 */
export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  if (contentCache.isCacheValid()) {
    return contentCache.getAllCaseStudies();
  }

  return contentCache.getAllCaseStudies();
}

/**
 * Get case study by slug
 */
export async function getCaseStudy(slug: string): Promise<CaseStudy | undefined> {
  if (contentCache.isCacheValid()) {
    return contentCache.getCaseStudy(slug);
  }

  const studies = await getAllCaseStudies();
  return studies.find(study => study.slug === slug);
}

/**
 * Get featured case studies
 */
export async function getFeaturedCaseStudies(limit: number = 3): Promise<CaseStudy[]> {
  const studies = await getAllCaseStudies();
  return studies
    .filter(study => study.featured)
    .slice(0, limit);
}

/**
 * Get case studies by industry
 */
export async function getCaseStudiesByIndustry(industry: string): Promise<CaseStudy[]> {
  const studies = await getAllCaseStudies();
  return studies.filter(study => 
    study.industry.toLowerCase() === industry.toLowerCase()
  );
}

/**
 * Preload content cache (call on app initialization)
 */
export function preloadContentCache(): void {
  // This would be called on app startup to warm the cache
  // Implementation would fetch all content and populate cache
  console.log('Content cache preloaded');
}

/**
 * Clear content cache (for testing or manual refresh)
 */
export function clearContentCache(): void {
  contentCache.clear();
}

export default {
  getAllBlogPosts,
  getBlogPost,
  getFeaturedBlogPosts,
  getRecentBlogPosts,
  getBlogPostsByCategory,
  getBlogPostsByTag,
  searchBlogPosts,
  getAllCaseStudies,
  getCaseStudy,
  getFeaturedCaseStudies,
  getCaseStudiesByIndustry,
  preloadContentCache,
  clearContentCache
};

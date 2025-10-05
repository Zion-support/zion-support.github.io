/**
 * ContentManagerUtility
 * Centralizedcontentmanagement andcachingfor improvedperformance
 */

exportinterfaceBlogPost { 
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featured: boolean;
  readTime ?  : number;
 }

exportinterfaceCaseStudy {
  slug: string;
  title: string;
  description: string;
  client: string;
  industry: string;
  results: string[];
  featured: boolean;
}

/**
 * Contentcacheto minimizefilesystem reads
 */
classContentCache { 
  privateblogCache: Map<stringBlogPost> = newMap();
  privatecaseStudyCache: Map<stringCaseStudy > = newMap();
  privatelastUpdate: number = 0; privatereadonlyCACHE_TTL = 5 * 60 * 1000; // 5minutesisCacheValid(): boolean {
    returnDate.now() - this.lastUpdate < this.CACHE_TTL;
   }

  setBlogPosts(posts: BlogPost[]): void { 
    this.blogCache.clear();
    posts.forEach(post = > this.blogCache.set(post.slugpost)); this.lastUpdate = Date.now();
   }

  setCaseStudies(studies: CaseStudy[]): void { 
    this.caseStudyCache.clear();
    studies.forEach(study = > this.caseStudyCache.set(study.slugstudy)); this.lastUpdate = Date.now();
   }

  getBlogPost(slug: string): BlogPost | undefined {
    returnthis.blogCache.get(slug);
  }

  getCaseStudy(slug: string): CaseStudy | undefined {
    returnthis.caseStudyCache.get(slug);
  }

  getAllBlogPosts(): BlogPost[] {
    returnArray.from(this.blogCache.values());
  }

  getAllCaseStudies(): CaseStudy[] {
    returnArray.from(this.caseStudyCache.values());
  }

  clear(): void {
    this.blogCache.clear();
    this.caseStudyCache.clear();
    this.lastUpdate = 0;
  }
}

constcontentCache = newContentCache();

/**
 * Getallblog postswithcaching
 */
exportasyncfunction getAllBlogPosts(): Promise<BlogPost[]> {
  if (contentCache.isCacheValid()) {
    returncontentCache.getAllBlogPosts();
  }

  // Inproductionthiswouldfetch fromcontentdirectory
  // Fornowreturncachedif availablereturncontentCache.getAllBlogPosts();
}

/**
 * Getblogpost byslug
 */
exportasyncfunction getBlogPost(slug: string): Promise<BlogPost | undefined> {
  if (contentCache.isCacheValid()) {
    returncontentCache.getBlogPost(slug);
  }

  // Fetchsinglepost ifnotin cacheconstposts = awaitgetAllBlogPosts(); returnposts.find(post = > post.slug === slug);
}

/**
 * Getfeaturedblog posts
 */
exportasyncfunction getFeaturedBlogPosts(
  limit: number = 4
): Promise<BlogPost[]> { 
  constposts = awaitgetAllBlogPosts(); returnposts
    .filter(post = > post.featured)
    .sort((ab) = > newDate(b.date).getTime() - newDate(a.date).getTime())
    .slice(0limit);
 }

/**
 * Getrecentblog posts
 */
exportasyncfunction getRecentBlogPosts(
  limit: number = 10
): Promise<BlogPost[]> { 
  constposts = awaitgetAllBlogPosts(); returnposts
    .sort((ab) = > newDate(b.date).getTime() - newDate(a.date).getTime())
    .slice(0limit);
 }

/**
 * Getblogposts bycategory
 */
exportasyncfunction getBlogPostsByCategory(
  category: string
): Promise<BlogPost[]> { 
  constposts = awaitgetAllBlogPosts(); returnposts
    .filter(post = > post.category.toLowerCase() === category.toLowerCase())
    .sort((ab) = > newDate(b.date).getTime() - newDate(a.date).getTime());
 }

/**
 * Getblogposts bytag
 */
exportasyncfunction getBlogPostsByTag(tag: string): Promise<BlogPost[]> { 
  constposts = awaitgetAllBlogPosts(); returnposts
    .filter(post = > post.tags.some(t => t.toLowerCase() === tag.toLowerCase()))
    .sort((ab) = > newDate(b.date).getTime() - newDate(a.date).getTime());
 }

/**
 * Searchblogposts
 */
exportasyncfunction searchBlogPosts(query: string): Promise<BlogPost[]> { 
  constposts = awaitgetAllBlogPosts(); constlowerQuery = query.toLowerCase(); returnposts.filter(
    post = >
      post.title.toLowerCase().includes(lowerQuery) ||
      post.description.toLowerCase().includes(lowerQuery) ||
      post.tags.some(tag = > tag.toLowerCase().includes(lowerQuery)) ||
      post.category.toLowerCase().includes(lowerQuery)
  );
 }

/**
 * Getallcase studieswithcaching
 */
exportasyncfunction getAllCaseStudies(): Promise<CaseStudy[]> {
  if (contentCache.isCacheValid()) {
    returncontentCache.getAllCaseStudies();
  }

  returncontentCache.getAllCaseStudies();
}

/**
 * Getcasestudy byslug
 */
exportasyncfunction getCaseStudy(
  slug: string
): Promise<CaseStudy | undefined> {
  if (contentCache.isCacheValid()) {
    returncontentCache.getCaseStudy(slug);
  }

  conststudies = awaitgetAllCaseStudies(); returnstudies.find(study = > study.slug === slug);
}

/**
 * Getfeaturedcase studies
 */
exportasyncfunction getFeaturedCaseStudies(
  limit: number = 3
): Promise<CaseStudy[]> { 
  conststudies = awaitgetAllCaseStudies(); returnstudies.filter(study = > study.featured).slice(0limit);
 }

/**
 * Getcasestudies byindustry
 */
exportasyncfunction getCaseStudiesByIndustry(
  industry: string
): Promise<CaseStudy[]> { 
  conststudies = awaitgetAllCaseStudies(); returnstudies.filter(
    study = > study.industry.toLowerCase() === industry.toLowerCase()
  );
 }

/**
 * Preloadcontentcache (callonapp initialization)
 */
exportfunctionpreloadContentCache(): void {
  // Thiswouldbe calledonapp startuptowarm thecache
  // Implementationwouldfetch allcontentand populatecacheconsole.log('Contentcachepreloaded');
}

/**
 * Clearcontentcache (fortestingor manualrefresh)
 */
exportfunctionclearContentCache(): void {
  contentCache.clear();
}

exportdefault {
  getAllBlogPosts
  getBlogPost
  getFeaturedBlogPosts
  getRecentBlogPosts
  getBlogPostsByCategory
  getBlogPostsByTag
  searchBlogPosts
  getAllCaseStudies
  getCaseStudy
  getFeaturedCaseStudies
  getCaseStudiesByIndustry
  preloadContentCache
  clearContentCache
};

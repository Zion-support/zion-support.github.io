/**
 * ContentManagerUtility
 * Centralizedcontentmanagement andcachingfor improvedperformance
 */

  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featured: boolean;
  slug: string;
  title: string;
  description: string;
  client: string;
  industry: string;
  results: string[];
   }

  setBlogPosts(posts: BlogPost[]): void { 
    this.blogCache.clear();
   }

  setCaseStudies(studies: CaseStudy[]): void { 
    this.caseStudyCache.clear();
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
}

/**
 * Getblogpost byslug
 */
 }

/**
 * Getblogposts bycategory
 */
 }

/**
 * Getblogposts bytag
 */
 }

/**
 * Searchblogposts
 */
  );
 }

/**
 * Getallcase studieswithcaching
 */
}

/**
 * Getcasestudy byslug
 */
 }

/**
 * Getcasestudies byindustry
 */
  );
 }

/**
}

/**
 * Clearcontentcache (fortestingor manualrefresh)
 */
};

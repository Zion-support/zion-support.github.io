// Sitemap generator utility
export interface SitemapUrl {
  loc: any;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never;
  priority?: number;
}

export const _generateSitemap = (urls: any,;
    c: any{baseUrl}${url.loc}`;
    return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${url.lastmod || currentDate}</lastmod>
    <changefreq>${url.changefreq || 'weekly'}</changefreq>
    <priority>${url.priority || 0.8}</priority>`';
  </url>`;
  })';
  .join('\n')}
</urlset>

  return sitemap;
};

// Define all the pages for the sitemap
export const getAllPages = (): SitemapUrl[] => {';
  const currentDate = new Date().toISOString().split('T')[0];
  
  return [
    // Main pages
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    
    // AI Services
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    
    // IT Services
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    
    // Micro SAAS
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    
    // Specialized Solutions
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    
    // Legal pages
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
    { loc: any, priority: any, changefreq: any},
  ];';
};'`';
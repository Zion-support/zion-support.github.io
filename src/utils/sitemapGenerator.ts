// Sitemap generator utility;
<<<<<<< HEAD
export interface SitemapUrl {/* TODO: Fix JSX expression */}
  O: Add content,}
}
  lo,
  c: string;
  lastmod?: string
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number,
}
export const _generateSitemap = (url)
  s: SitemapUrl[]): string => {/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
export interface SitemapUrl {/* TODO: Fix JSX expression */};
  O: Add content};
};
  lo,
  c: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number};
export const _generateSitemap = (url)
  s: SitemapUrl[]): string => {/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  const baseUrl = 'http,
  s: //ziontechgroup.com'
  const currentDate = new Date().toISOString().split('T')[0],
  const sitemap = `
<<<<<<< HEAD

          <?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http:// www.sitemaps.org/schemas/sitemap/0.9">
${
    urls
  }
  .map((url) => {
    // TODO: Add content
  }
}
=======
          <?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http:// www.sitemaps.org/schemas/sitemap/0.9">
${urls};
  .map((url) => {// TODO: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    const fullUrl = url.loc.startsWith('http') ? url.loc : `${baseUrl}${url.loc}`;
    return `  
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <url></url>
    <loc>${fullUrl}</loc>
    <lastmod>${url.lastmod || currentDate}</lastmod>
    <changefreq>${url.changefreq || 'weekly'}</changefreq>
    <priority>${url.priority || 0.8}</priority>`
  </url>`
  };
  )
  .join('
')};
</urlset>`;
  return sitemap;
}
// Define all the pages for the sitemap;
<<<<<<< HEAD

export const getAllPages = (): SitemapUrl[] => {
    // TODO: Add content
  }

}
=======
export const getAllPages = (): SitemapUrl[] => {// TODO: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Define all the pages for the sitemap;
export const getAllPages = (): SitemapUrl[] => {/* TODO: Fix JSX expression */};
  };
  const currentDate = new Date().toISOString().split('T')[0]
  return [
  // TOD,
  O: Add items]
<<<<<<< HEAD
    // Main pages,
    {/* TODO: Fix JSX expression */}
=======
    // Main pages;
    {/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  q: 'daily' },
    {/* TODO: Fix JSX expression */};
  q: 'monthly' },
    {/* TODO: Fix JSX expression */};
  q: 'monthly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'monthly' },
    {/* TODO: Fix JSX expression */};
  q: 'monthly' },
    {/* TODO: Fix JSX expression */};
  q: 'monthly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    // AI Services;
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    // IT Services;
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    // Micro SAAS;
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    {/* TODO: Fix JSX expression */};
  q: 'weekly' },
    // Specialized Solutions;
    {/* TODO: Fix JSX expression */};
  q: 'monthly' },
    {/* TODO: Fix JSX expression */};
  q: 'monthly' },
    {/* TODO: Fix JSX expression */};
  q: 'monthly' },
    {/* TODO: Fix JSX expression */};
  q: 'monthly' },
    {/* TODO: Fix JSX expression */};
  q: 'monthly' },
    {/* TODO: Fix JSX expression */};
  q: 'monthly' },
    // Legal pages;
    {/* TODO: Fix JSX expression */};
  q: 'yearly' },
    {/* TODO: Fix JSX expression */};
  q: 'yearly' },
    {/* TODO: Fix JSX expression */};
  q: 'yearly' },
    {/* TODO: Fix JSX expression */};
  q: 'yearly' },
    {/* TODO: Fix JSX expression */};
  q: 'yearly' }]
}"`
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7

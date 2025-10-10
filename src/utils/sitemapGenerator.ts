

// Sitemap generator utility;
  O: Add content;}
};
  lo,
  c: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}
export const _generateSitemap = (url)
  O: Add content;}
}
  const baseUrl = 'http,
  s://ziontechgroup.com';
  const currentDate = new Date().toISOString().split('T')[0];
  const sitemap = `
          
          
          
          
          
          
          
          

          <?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http:// www.sitemaps.org/schemas/sitemap/0.9">
${urls;}
  .map((url) => {// TODO: Add content;}
}
    const fullUrl = url.loc.startsWith('http') ? url.loc : `${baseUrl}${url.loc}`;

    return `  
          
          
          
          
          
          
          
          
          <url></url>
    <loc>${fullUrl}</loc>
    <lastmod>${url.lastmod || currentDate}</lastmod>
    <changefreq>${url.changefreq || 'weekly'}</changefreq>
    <priority>${url.priority || 0.8}</priority>`
  </url>`
  }
  )

  .join('
')}

</urlset>`;
  return sitemap;
};
// Define all the pages for the sitemap;

export const getAllPages = (): SitemapUrl[] => {// TODO: Add content;}

}
// Define all the pages for the sitemap;
  }
  const currentDate = new Date().toISOString().split('T')[0]
  return [
  // TOD,
  O: Add items]
    // Main pages;
  q: 'daily' },
  q: 'monthly' },
  q: 'monthly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'monthly' },
  q: 'monthly' },
  q: 'monthly' },
  q: 'weekly' },
    // AI Services;
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
    // IT Services;
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
    // Micro SAAS;
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
  q: 'weekly' },
    // Specialized Solutions;
  q: 'monthly' },
  q: 'monthly' },
  q: 'monthly' },
  q: 'monthly' },
  q: 'monthly' },
  q: 'monthly' },
    // Legal pages;
  q: 'yearly' },
  q: 'yearly' },
  q: 'yearly' },
  q: 'yearly' },
  q: 'yearly' }]
}"`




import React from 'react';
export const getAllPages = (): JSX.Element => {;
    return [;
  }
  }
    { url: '/,', priority: 1.,0, changefreq: 'daily', },;
    { url: '/services,', priority: 0.,9, changefreq: 'weekly', },;
    { url: '/ai-services,', priority: 0.,9, changefreq: 'weekly', },;
    { url: '/it-services,', priority: 0.,9, changefreq: 'weekly', },;
    { url: '/contact,', priority: 0.,8, changefreq: 'monthly', },;
    { url: '/about,', priority: 0.,7, changefreq: 'monthly', },;
    {;
    url: '/blog,',;
    priority: 0.,8,;
    changefreq: 'weekly';
 , }
  ];
  ];
}
export const generateSitemap = (pages: Array<{ url: string; priority: number; changefreq: string, }>) => {
  ;
    const baseUrl = 'https: // ziontechgroup.com';
  const sitemap = `;
          <?xml version='1.0' encoding='UTF-8'?>
<urlset xmlns='http:// www.sitemaps.org/schemas/sitemap/0.9'></urlset>
${pages.map(page => `;
          <url></url>
 ,
}
  }
    <loc>${baseUrl}${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
  </url>`).join('\n')}
</urlset>`;
  return sitemap;
  return (;
    <div>Coming Soon</div>
  );
          <div></div>
      <pre>{sitemap}</pre>
    </div>
  );
export default Sitemap;
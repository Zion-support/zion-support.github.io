
// Mock functions for sitemap generation;
<<<<<<< HEAD
export const getAllPages = () => []
=======

export const getAllPages = () => [;;

>>>>>>> origin/main
  // TODO: Add items]
  { path: '/', priority: 1.0 },
  { path: '/services', priority: 0.8 },
  { path: '/contact', priority: 0.7 },
  { path: '/about', priority: 0.6 }

];
<<<<<<< HEAD
export const generateSitemap = "(pages: Array;)"
=======

export const generateSitemap = (pages: Array;);;

>>>>>>> origin/main
          <{ path: string; priority: number }>) => {// TODO: Add content}

}
<<<<<<< HEAD
  const baseUrl = "'https://ziontechgroup.com';"
  let sitemap="''"
          <?xml version="1.0" encoding=""UTF-8"?>"
';
  sitemap += '<urlset xmlns=""http:// www.sitemaps.org/schemas/sitemap/0.9"></urlset>"
';
  pages.forEach(page = "> {// TODO: Add content}"
=======

  const baseUrl = 'https://ziontechgroup.com;;

  let sitemap = ;;

          <?xml version="1.0" encoding="UTF-8"?>
;

  sitemap += '<urlset xmlns="http:// www.sitemaps.org/schemas/sitemap/0.9">
;

  pages.forEach(page => {// TODO: Add content}

>>>>>>> origin/main
}

    sitemap += `  

          <url></url>
`;

    sitemap += `    <loc>${baseUrl}${page.path}</loc>
`;

    sitemap += `    <priority>${page.priority}</priority>
`;

    sitemap += `  </url>
`});

  sitemap += '</urlset>;

  return sitemap};

// This would typically be handled by a server-side route;

// For now, well create a static sitemap.xml file;

export const generateStaticSitemap = () => {// TODO: Add content};;

}
<<<<<<< HEAD
  return generateSitemap(getAllPages())};
=======

  return generateSitemap(getAllPages())};
>>>>>>> origin/main

// Mock functions for sitemap generation;
export const getAllPages = () => [
  // TODO: Add items]
  { path: '/', priority: 1.0 },
  { path: '/services', priority: 0.8 },
  { path: '/contact', priority: 0.7 },
  { path: '/about', priority: 0.6 };
];
export const generateSitemap = (pages: Array;)
<<<<<<< HEAD
          <{ path: string, priority: number }>) => {
    // TODO: Add content
  }
}
  const baseUrl = 'https: //ziontechgroup.com'
  let sitemap = '

=======
          <{ path: string; priority: number }>) => {// TODO: Add content};
};
  const baseUrl = 'https://ziontechgroup.com';
  let sitemap = '
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <?xml version="1.0" encoding="UTF-8"?>
'
  sitemap += '<urlset xmlns="http:// www.sitemaps.org/schemas/sitemap/0.9">
<<<<<<< HEAD
',
  pages.forEach(page => {
    // TODO: Add content
  }
}
    sitemap += `  

=======
';
  pages.forEach(page => {// TODO: Add content};
};
    sitemap += `  
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <url>
`;
    sitemap += `    <loc>${baseUrl}${page.path}</loc>
`;
    sitemap += `    <priority>${page.priority}</priority>
`;
    sitemap += `  </url>
`;
  });
  sitemap += '</urlset>';
  return sitemap;
}
// This would typically be handled by a server-side route;
// For now, we'll create a static sitemap.xml file;
<<<<<<< HEAD
export const generateStaticSitemap = () => {
    // TODO: Add content
  }
}
  return generateSitemap(getAllPages());
}

=======
export const generateStaticSitemap = () => {// TODO: Add content};
};
  return generateSitemap(getAllPages())};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7

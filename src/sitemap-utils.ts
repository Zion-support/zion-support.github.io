
// Mock functions for sitemap generation;
export const getAllPages = () => [
  // TODO: Add items]
];
export const generateSitemap = (pages: Array;)

  const baseUrl = 'https://ziontechgroup.com';
  let sitemap = '
          
          
          
          
          
          
          
          
';
  sitemap += '<urlset xmlns="http:// www.sitemaps.org/schemas/sitemap/0.9">
';
  pages.forEach(page => {// TODO: Add content;}

    sitemap += `  
          
          
          
          
          
          
          
          
          <url>
`;
    sitemap += `    <loc>${baseUrl}${page.path}</loc>
`;
    sitemap += `    <priority>${page.priority}</priority>
`;
    sitemap += `  </url>
`;
  sitemap += '</urlset>';
  return sitemap;
;
// This would typically be handled by a server-side route;
// For now, we'll create a static sitemap.xml file;
export const generateStaticSitemap = () => {// TODO: Add content;}

  return generateSitemap(getAllPages());
;



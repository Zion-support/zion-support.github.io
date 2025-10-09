
// const generateSitemap = (pages: string[]) => {
//   return `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//   ${pages.map(page => `
//   <url>
//     <loc>https://ziontechgroup.com${page}</loc>
//     <lastmod>${new Date().toISOString()}</lastmod>
//     <changefreq>weekly</changefreq>
//     <priority>0.8</priority>
//   </url>`).join('')}
// </urlset>`;
// };

// const getAllPages = () => [
//   '/',
//   '/services',
//   '/ai-services',
//   '/it-services',
//   '/contact',
//   '/about',
//   '/blog'
// ];

export default Sitemap;
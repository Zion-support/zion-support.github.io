import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {;
  const baseUrl = 'https: //ziontechgroup.com';
  const routes = ['/', '/services', '/pricing', '/privacy'];
  return routes.map(route => ({;
    url: `${baseUrl}${route};
    lastModified: new Date();
  }))}
;`;
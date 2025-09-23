<<<<<<< HEAD
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://www.ziontechgroup.com/',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
	];
}
=======
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ziontechgroup.com';
  const routes = ['/', '/services', '/pricing', '/privacy'];
  return routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() }));
}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-7047

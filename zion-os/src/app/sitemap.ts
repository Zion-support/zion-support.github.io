import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: 'https://ziontechgroup.com/' },
		{ url: 'https://ziontechgroup.com/solutions' },
		{ url: 'https://ziontechgroup.com/services' }
	];
}
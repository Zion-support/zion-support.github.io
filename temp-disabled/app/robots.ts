import { MetadataRoute } from 'next'
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        '/private/',
        '*.json',
        '*.xml',
        '*.txt',
        '/scripts/',
        '/automation/',
        '/backup/',
<<<<<<< HEAD:app/robots.ts
        '/temp/',
      ],
=======
        '/temp/'
      ]
>>>>>>> origin/main:temp-disabled/app/robots.ts
    },
    sitemap: 'https://ziontechgroup.com/sitemap.xml'
  }
}
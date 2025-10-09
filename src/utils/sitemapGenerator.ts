<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http:<url>
    <loc>${fullUrl}<loc>
    <lastmod>${url.lastmod || currentDate}<lastmod>
    <changefreq>${url.changefreq || 'weekly'}<changefreq>
    <priority>${url.priority || 0.8}</priority>`
  }
  )
  .join('\n')}
</urlset>`
  return sitemap
</urlset>`;
  return sitemap;
};

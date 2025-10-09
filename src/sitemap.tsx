import React from 'react';

// Placeholder functions - these would be implemented in a real sitemap generator
const generateSitemap = (pages: string[]) => {
  return pages.map(page => `<url><loc>https://ziontechgroup.com${page}</loc></url>`).join('\n');
};

const getAllPages = () => {
  return ['/', '/services', '/about', '/contact', '/blog'];
};

const Sitemap: React.FC = () => {
  const sitemap = generateSitemap(getAllPages());
  
  return (
    <div>
      <pre>{sitemap}</pre>
    </div>
  );
};

// This would typically be handled by a server-side route
// For now, we'll create a static sitemap.xml file
// eslint-disable-next-line react-refresh/only-export-components
export const generateStaticSitemap = () => {
  return generateSitemap(getAllPages());
};

export default Sitemap;
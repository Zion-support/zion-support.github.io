import React from 'react';
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
export const generateStaticSitemap = () => {
  return generateSitemap(getAllPages());
};

export default Sitemap;
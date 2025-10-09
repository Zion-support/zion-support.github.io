import React from 'react';
import { generateSitemap, getAllPages } from './sitemap-utils';

const Sitemap: React.FC = () => {
  const sitemap = generateSitemap(getAllPages());
  
  return (
    <div>
      <pre>{sitemap}</pre>
    </div>
  );
};

export default Sitemap;
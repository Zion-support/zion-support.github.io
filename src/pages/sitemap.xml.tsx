import { generateSitemap } from '../utils/sitemapGenerator';

const Sitemap = () => {
  const sitemap = generateSitemap();
  
  return (
    <div>
      <pre>{sitemap}</pre>
    </div>
  );
};

export default Sitemap;
import React, { useEffect } from 'react';
import { generateSitemap } from '../utils/sitemapGenerator';

const SitemapPage: React.FC = () => {
  useEffect(() => {
    // Generate and display sitemap
    const sitemap = generateSitemap();

    // Set content type for XML
    document.contentType = 'application/xml';

    // Display sitemap
    const sitemapElement = document.getElementById('sitemap-content');
    if (sitemapElement) {
      sitemapElement.textContent = sitemap;
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Sitemap
        </h1>
        <div className="bg-slate-800 rounded-lg p-6">
          <pre id="sitemap-content" className="text-gray-300 text-sm overflow-auto">
            {/* Sitemap will be populated by useEffect */}
          </pre>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SitemapPage;

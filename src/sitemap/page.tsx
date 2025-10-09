import React from 'react';

const SitemapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Sitemap</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-300 mb-8">
            Find all the pages and content on our website.
          </p>
          {/* Add sitemap content here */}
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
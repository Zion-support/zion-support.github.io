import React from "react";

interface SitemapPageProps {
  // Add props here
}

const SitemapPage: React.FC<SitemapPageProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Sitemap
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            This is the sitemap page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
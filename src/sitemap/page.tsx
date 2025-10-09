import React, { useEffect, useState } from 'react';
import { generateDefaultSitemap } from '../utils/sitemapGenerator';
import EnhancedSEO from '../components/EnhancedSEO';

const SitemapPage: React.FC = () => {
  const [sitemapXml, setSitemapXml] = useState<string>('');
  const [robotsTxt, setRobotsTxt] = useState<string>('');

  useEffect(() => {
    const sitemap = generateDefaultSitemap();
    setSitemapXml(sitemap.generateSitemap());
    setRobotsTxt(sitemap.generateRobotsTxt());
  }, []);

  return (
    <>
      <EnhancedSEO
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of all pages and services available on Zion Tech Group website."
        keywords={['sitemap', 'website structure', 'navigation', 'pages']}
        canonicalUrl="https://ziontechgroup.com/sitemap"
        noindex={true}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">
              Sitemap
            </h1>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
              <h2 className="text-2xl font-semibold text-white mb-6">XML Sitemap</h2>
              <pre className="bg-slate-900 p-4 rounded-lg overflow-x-auto text-sm text-gray-300 whitespace-pre-wrap">
                {sitemapXml}
              </pre>
            </div>

            <div className="mt-8 bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
              <h2 className="text-2xl font-semibold text-white mb-6">Robots.txt</h2>
              <pre className="bg-slate-900 p-4 rounded-lg overflow-x-auto text-sm text-gray-300 whitespace-pre-wrap">
                {robotsTxt}
              </pre>
            </div>

            <div className="mt-8 text-center">
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 bg-cyan-400 text-slate-900 rounded-lg font-semibold hover:bg-cyan-300 transition-colors"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;
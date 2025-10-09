'use client';
import React, { useEffect, useState } from 'react';
import { generateSitemap } from '../utils/sitemapGenerator';

const SitemapPage: React.FC = () => {
  const [sitemap, setSitemap] = useState<string>('');

  useEffect(() => {
    const sitemapXML = generateSitemap();
    setSitemap(sitemapXML);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            Sitemap
          </h1>
          
          <div className="bg-slate-800/90 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/20">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              XML Sitemap
            </h2>
            
            <div className="bg-slate-900/50 rounded-lg p-4 overflow-auto">
              <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                {sitemap}
              </pre>
            </div>
            
            <div className="mt-6 text-center">
              <a
                href="/sitemap.xml"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Download Sitemap XML
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
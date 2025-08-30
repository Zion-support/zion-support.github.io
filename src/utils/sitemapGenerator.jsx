import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SitemapGenerator = ({ onGenerate }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [sitemapData, setSitemapData] = useState(null);

  const generateSitemap = async () => {
    setIsGenerating(true);
    
    // Simulate sitemap generation
    setTimeout(() => {
      const sitemap = {
  pages: [
          { url: '/', priority: '1.0',
  changefreq: 'daily' 


},
          { url: '/services', priority: '0.9', changefreq: 'weekly' },
          { url: '/about', priority: '0.8', changefreq: 'monthly' },
          { url: '/contact', priority: '0.8', changefreq: 'monthly' },
          { url: '/blog', priority: '0.7', changefreq: 'weekly' },
          { url: '/pricing', priority: '0.8', changefreq: 'monthly' }
        ],
        services: [
          { url: '/services/ai-solutions', priority: '0.8', changefreq: 'weekly' },
          { url: '/services/cybersecurity', priority: '0.8', changefreq: 'weekly' },
          { url: '/services/cloud-infrastructure', priority: '0.8', changefreq: 'weekly' },
          { url: '/services/micro-saas', priority: '0.8', changefreq: 'weekly' }
        ],
        totalUrls: 10,
        generatedAt: new Date().toISOString()
      };
      
      setSitemapData(sitemap);
      setIsGenerating(false);
      
      if (onGenerate) {
        onGenerate(sitemap);
      }
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={generateSitemap}
        disabled={isGenerating}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
      >
        {isGenerating ? 'Generating...' : 'Generate Sitemap'}
      </button>
      
      {sitemapData && (
        <motion.div
          initial = {
  { opacity: 0,
  y: 20 


}}
          animate = {
  { opacity: 1,
  y: 0 


}}
          className="space-y-4"
        >
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Sitemap Generated Successfully!</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Total URLs:</span> {sitemapData.totalUrls}
              </div>
              <div>
                <span className="font-medium">Generated:</span> {new Date(sitemapData.generatedAt).toLocaleDateString()}
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Main Pages:</h4>
            <div className="space-y-1 text-sm">
              {sitemapData.pages.map((page, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-700">{page.url}</span>
                  <span className="text-gray-500">Priority: {page.priority}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Service Pages:</h4>
            <div className="space-y-1 text-sm">
              {sitemapData.services.map((service, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-700">{service.url}</span>
                  <span className="text-gray-500">Priority: {service.priority}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SitemapGenerator;

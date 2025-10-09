import React from 'react';

const SitemapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Sitemap</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Main Pages</h2>
            <ul className="space-y-2">
              <li><a href="/" className="text-white hover:text-cyan-400">Home</a></li>
              <li><a href="/about" className="text-white hover:text-cyan-400">About</a></li>
              <li><a href="/contact" className="text-white hover:text-cyan-400">Contact</a></li>
              <li><a href="/case-studies" className="text-white hover:text-cyan-400">Case Studies</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Services</h2>
            <ul className="space-y-2">
              <li><a href="/ai-services" className="text-white hover:text-cyan-400">AI Services</a></li>
              <li><a href="/it-services" className="text-white hover:text-cyan-400">IT Services</a></li>
              <li><a href="/consultation" className="text-white hover:text-cyan-400">Consultation</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Resources</h2>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-white hover:text-cyan-400">Blog</a></li>
              <li><a href="/docs" className="text-white hover:text-cyan-400">Documentation</a></li>
              <li><a href="/api-docs" className="text-white hover:text-cyan-400">API Documentation</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
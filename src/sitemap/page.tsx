import React from 'react';

const SitemapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Sitemap</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="cyber-card p-6">
            <h2 className="text-xl font-bold text-cyan-400 mb-4">Main Pages</h2>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-cyan-400">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-cyan-400">About</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-cyan-400">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-cyan-400">Contact</a></li>
              <li><a href="/pricing" className="text-gray-300 hover:text-cyan-400">Pricing</a></li>
            </ul>
          </div>
          <div className="cyber-card p-6">
            <h2 className="text-xl font-bold text-cyan-400 mb-4">AI Services</h2>
            <ul className="space-y-2">
              <li><a href="/ai-services" className="text-gray-300 hover:text-cyan-400">AI Services</a></li>
              <li><a href="/ai-analytics-dashboard" className="text-gray-300 hover:text-cyan-400">AI Analytics</a></li>
              <li><a href="/ai-chatbot-builder" className="text-gray-300 hover:text-cyan-400">AI Chatbot</a></li>
              <li><a href="/ai-content-generation" className="text-gray-300 hover:text-cyan-400">AI Content</a></li>
            </ul>
          </div>
          <div className="cyber-card p-6">
            <h2 className="text-xl font-bold text-cyan-400 mb-4">IT Services</h2>
            <ul className="space-y-2">
              <li><a href="/it-services" className="text-gray-300 hover:text-cyan-400">IT Services</a></li>
              <li><a href="/cloud-services" className="text-gray-300 hover:text-cyan-400">Cloud Services</a></li>
              <li><a href="/cybersecurity" className="text-gray-300 hover:text-cyan-400">Cybersecurity</a></li>
              <li><a href="/devops" className="text-gray-300 hover:text-cyan-400">DevOps</a></li>
            </ul>
          </div>
          <div className="cyber-card p-6">
            <h2 className="text-xl font-bold text-cyan-400 mb-4">Resources</h2>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-gray-300 hover:text-cyan-400">Blog</a></li>
              <li><a href="/case-studies" className="text-gray-300 hover:text-cyan-400">Case Studies</a></li>
              <li><a href="/docs" className="text-gray-300 hover:text-cyan-400">Documentation</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;

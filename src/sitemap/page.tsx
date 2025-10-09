import React from 'react';

const SitemapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Sitemap</h1>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Site Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">Main Pages</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-white">Services</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">AI Services</h3>
              <ul className="space-y-2">
                <li><a href="/ai-services" className="text-gray-300 hover:text-white">AI Services</a></li>
                <li><a href="/ai-automation" className="text-gray-300 hover:text-white">AI Automation</a></li>
                <li><a href="/ai-analytics" className="text-gray-300 hover:text-white">AI Analytics</a></li>
                <li><a href="/ai-consulting" className="text-gray-300 hover:text-white">AI Consulting</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">IT Services</h3>
              <ul className="space-y-2">
                <li><a href="/it-services" className="text-gray-300 hover:text-white">IT Services</a></li>
                <li><a href="/cloud-services" className="text-gray-300 hover:text-white">Cloud Services</a></li>
                <li><a href="/cybersecurity" className="text-gray-300 hover:text-white">Cybersecurity</a></li>
                <li><a href="/devops" className="text-gray-300 hover:text-white">DevOps</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;

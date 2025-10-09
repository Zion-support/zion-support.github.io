import React from 'react';

const SitemapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Sitemap</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="cyber-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">Main Pages</h2>
            <ul className="space-y-2">
              <li><a href="/" className="text-cyan-400 hover:text-cyan-300">Home</a></li>
              <li><a href="/services" className="text-cyan-400 hover:text-cyan-300">Services</a></li>
              <li><a href="/contact" className="text-cyan-400 hover:text-cyan-300">Contact</a></li>
              <li><a href="/about" className="text-cyan-400 hover:text-cyan-300">About</a></li>
            </ul>
          </div>
          <div className="cyber-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">AI Services</h2>
            <ul className="space-y-2">
              <li><a href="/ai-services" className="text-cyan-400 hover:text-cyan-300">AI Solutions</a></li>
              <li><a href="/machine-learning" className="text-cyan-400 hover:text-cyan-300">Machine Learning</a></li>
              <li><a href="/automation" className="text-cyan-400 hover:text-cyan-300">Automation</a></li>
            </ul>
          </div>
          <div className="cyber-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">IT Services</h2>
            <ul className="space-y-2">
              <li><a href="/it-services" className="text-cyan-400 hover:text-cyan-300">IT Solutions</a></li>
              <li><a href="/cloud-services" className="text-cyan-400 hover:text-cyan-300">Cloud Services</a></li>
              <li><a href="/cybersecurity" className="text-cyan-400 hover:text-cyan-300">Cybersecurity</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;

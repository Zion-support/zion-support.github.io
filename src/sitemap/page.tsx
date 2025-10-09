import React from 'react';

const SitemapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Sitemap</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-300 mb-8">
            Find all pages and sections of our website organized by category.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-cyan-400">Main Pages</h2>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-white">Services</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
                <li><a href="/pricing" className="text-gray-300 hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4 text-cyan-400">AI Services</h2>
              <ul className="space-y-2">
                <li><a href="/ai-services" className="text-gray-300 hover:text-white">AI Services</a></li>
                <li><a href="/ai-automation" className="text-gray-300 hover:text-white">AI Automation</a></li>
                <li><a href="/ai-analytics-dashboard" className="text-gray-300 hover:text-white">AI Analytics</a></li>
                <li><a href="/ai-crm" className="text-gray-300 hover:text-white">AI CRM</a></li>
                <li><a href="/ai-customer-support" className="text-gray-300 hover:text-white">AI Support</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4 text-cyan-400">IT Services</h2>
              <ul className="space-y-2">
                <li><a href="/it-services" className="text-gray-300 hover:text-white">IT Services</a></li>
                <li><a href="/it-infrastructure" className="text-gray-300 hover:text-white">IT Infrastructure</a></li>
                <li><a href="/it-support" className="text-gray-300 hover:text-white">IT Support</a></li>
                <li><a href="/devops" className="text-gray-300 hover:text-white">DevOps</a></li>
                <li><a href="/cloud-services" className="text-gray-300 hover:text-white">Cloud Services</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
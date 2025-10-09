import React from 'react';

const SitemapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
          <p className="text-xl text-gray-600 mb-12">
            Find all pages and services on our website
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Website Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Main Pages</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="/" className="hover:text-blue-600">Home</a></li>
                <li><a href="/about" className="hover:text-blue-600">About</a></li>
                <li><a href="/services" className="hover:text-blue-600">Services</a></li>
                <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
                <li><a href="/blog" className="hover:text-blue-600">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">AI Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="/ai-services" className="hover:text-blue-600">AI Services</a></li>
                <li><a href="/machine-learning" className="hover:text-blue-600">Machine Learning</a></li>
                <li><a href="/ai-automation" className="hover:text-blue-600">AI Automation</a></li>
                <li><a href="/ai-cybersecurity" className="hover:text-blue-600">AI Cybersecurity</a></li>
                <li><a href="/ai-analytics-dashboard" className="hover:text-blue-600">AI Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">IT Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="/it-services" className="hover:text-blue-600">IT Services</a></li>
                <li><a href="/cloud-services" className="hover:text-blue-600">Cloud Services</a></li>
                <li><a href="/cybersecurity" className="hover:text-blue-600">Cybersecurity</a></li>
                <li><a href="/devops" className="hover:text-blue-600">DevOps</a></li>
                <li><a href="/database-services" className="hover:text-blue-600">Database Services</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
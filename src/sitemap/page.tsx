import React from 'react';

const SitemapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
          <p className="text-lg text-gray-600">
            Find all pages and services on our website
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Pages */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Main Pages</h2>
              <ul className="space-y-2">
                <li><a href="/" className="text-blue-600 hover:text-blue-800">Home</a></li>
                <li><a href="/about" className="text-blue-600 hover:text-blue-800">About Us</a></li>
                <li><a href="/services" className="text-blue-600 hover:text-blue-800">Services</a></li>
                <li><a href="/contact" className="text-blue-600 hover:text-blue-800">Contact</a></li>
                <li><a href="/blog" className="text-blue-600 hover:text-blue-800">Blog</a></li>
                <li><a href="/careers" className="text-blue-600 hover:text-blue-800">Careers</a></li>
              </ul>
            </div>

            {/* AI Services */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">AI Services</h2>
              <ul className="space-y-2">
                <li><a href="/ai-services" className="text-blue-600 hover:text-blue-800">AI Services</a></li>
                <li><a href="/machine-learning" className="text-blue-600 hover:text-blue-800">Machine Learning</a></li>
                <li><a href="/ai-automation" className="text-blue-600 hover:text-blue-800">AI Automation</a></li>
                <li><a href="/ai-analytics-dashboard" className="text-blue-600 hover:text-blue-800">AI Analytics Dashboard</a></li>
                <li><a href="/ai-crm" className="text-blue-600 hover:text-blue-800">AI CRM</a></li>
                <li><a href="/ai-customer-support" className="text-blue-600 hover:text-blue-800">AI Customer Support</a></li>
              </ul>
            </div>

            {/* IT Services */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">IT Services</h2>
              <ul className="space-y-2">
                <li><a href="/it-services" className="text-blue-600 hover:text-blue-800">IT Services</a></li>
                <li><a href="/cloud-services" className="text-blue-600 hover:text-blue-800">Cloud Services</a></li>
                <li><a href="/cybersecurity" className="text-blue-600 hover:text-blue-800">Cybersecurity</a></li>
                <li><a href="/devops" className="text-blue-600 hover:text-blue-800">DevOps</a></li>
                <li><a href="/database-services" className="text-blue-600 hover:text-blue-800">Database Services</a></li>
                <li><a href="/it-support" className="text-blue-600 hover:text-blue-800">IT Support</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
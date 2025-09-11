import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services - Zion Tech Group"
        description="Explore our comprehensive range of technology services and solutions."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions to drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">AI Services</h3>
            <p className="text-gray-600 mb-4">Cutting-edge AI solutions for your business including machine learning, natural language processing, and computer vision.</p>
            <ul className="text-gray-600 space-y-2">
              <li>• Machine Learning Models</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision</li>
              <li>• Predictive Analytics</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">IT Services</h3>
            <p className="text-gray-600 mb-4">Comprehensive IT solutions and support including cloud migration, DevOps, and security solutions.</p>
            <ul className="text-gray-600 space-y-2">
              <li>• Cloud Migration</li>
              <li>• DevOps + SRE</li>
              <li>• Security Solutions</li>
              <li>• Infrastructure Automation</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Cloud Solutions</h3>
            <p className="text-gray-600 mb-4">Scalable cloud infrastructure and services to help your business grow and scale efficiently.</p>
            <ul className="text-gray-600 space-y-2">
              <li>• Cloud Infrastructure</li>
              <li>• Auto-scaling</li>
              <li>• Cost Optimization</li>
              <li>• Multi-cloud Solutions</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Talk to our experts about your project. We'll help you choose the right service and create a custom solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

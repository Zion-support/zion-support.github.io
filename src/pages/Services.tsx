import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Micro SaaS Solutions</h3>
            <p className="text-gray-600 mb-4">Complete micro SaaS development from concept to scale with proven revenue models</p>
            <ul className="text-gray-600 space-y-2">
              <li>• AI-powered tools</li>
              <li>• Billing & subscriptions</li>
              <li>• Growth analytics</li>
              <li>• Market validation</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">AI & Machine Learning</h3>
            <p className="text-gray-600 mb-4">Cutting-edge AI solutions including LLMs, computer vision, and automation</p>
            <ul className="text-gray-600 space-y-2">
              <li>• LLM applications</li>
              <li>• Computer vision</li>
              <li>• RAG systems</li>
              <li>• MLOps pipelines</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">IT Infrastructure</h3>
            <p className="text-gray-600 mb-4">Cloud migration, DevOps, cybersecurity, and managed IT services</p>
            <ul className="text-gray-600 space-y-2">
              <li>• Cloud migration</li>
              <li>• DevOps & SRE</li>
              <li>• Cybersecurity</li>
              <li>• 24/7 support</li>
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
}
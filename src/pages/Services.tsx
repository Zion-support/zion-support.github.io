import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">Micro SaaS Development</h3>
            <p className="text-gray-300 mb-6">
              End-to-end product development with billing, auth, and analytics.
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>• Multi-tenant architecture</li>
              <li>• Stripe billing integration</li>
              <li>• User authentication</li>
              <li>• Analytics dashboard</li>
            </ul>
            <Link
              to="/services/micro-saas"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">AI Services</h3>
            <p className="text-gray-300 mb-6">
              LLM applications, RAG systems, and MLOps pipelines.
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>• RAG over private data</li>
              <li>• Task-specific agents</li>
              <li>• Model fine-tuning</li>
              <li>• MLOps pipelines</li>
            </ul>
            <Link
              to="/services/ai-services"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-2xl font-bold text-white mb-4">IT Services</h3>
            <p className="text-gray-300 mb-6">
              Cloud migration, DevOps, and security solutions.
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>• Cloud migration</li>
              <li>• DevOps automation</li>
              <li>• Security hardening</li>
              <li>• Cost optimization</li>
            </ul>
            <Link
              to="/services/it-services"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your project requirements.
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
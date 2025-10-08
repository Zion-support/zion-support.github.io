import { Zap } from 'lucide-react';
import { ArrowRight, Zap } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const API: React.FC = () => {
  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/content',
      description: 'Get all content',
      parameters: ['limit', 'offset'],
      response: 'JSON array of content objects',
    },
    {
      method: 'POST',
      endpoint: '/api/auth/login',
      description: 'Authenticate user credentials',
      parameters: ['email', 'password'],
      response: 'Authentication token',
    },
    {
      method: 'GET',
      endpoint: '/api/analytics',
      description: 'Get analytics and metrics',
      parameters: ['date_range', 'metrics'],
      response: 'Analytics data object',
    },
    {
      method: 'POST',
      endpoint: '/api/content',
      description: 'Create new content',
      parameters: ['title', 'content', 'type'],
      response: 'Created content object',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            API{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Documentation
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Comprehensive API documentation for integrating with Zion Tech Group's powerful services
            and data endpoints.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              Get API Key
              <Link className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="#endpoints"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
            >
              View Endpoints
              <Atom className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Atom className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">RESTful APIs</h3>
              <p className="text-gray-600">
                Clean, intuitive REST endpoints following industry best practices for easy
                integration.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Atom className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security with 99.9% uptime guarantee and comprehensive error
                handling.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">High Performance</h3>
              <p className="text-gray-600">
                Optimized for speed with caching, compression, and global CDN distribution.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="endpoints" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">API Endpoints</h2>
          <div className="space-y-6">
            {apiEndpoints.map((endpoint, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center space-x-4 mb-2 md:mb-0">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        endpoint.method === 'GET'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {endpoint.method}
                    </span>
                    <code className="text-lg font-mono text-gray-800">{endpoint.endpoint}</code>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{endpoint.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Parameters:</h4>
                    <ul className="text-sm text-gray-600">
                      {endpoint?.parameters.map((param, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {param}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Response:</h4>
                    <p className="text-sm text-gray-600">{endpoint.response}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to integrate with our APIs? Get your API key and start building amazing
              applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Get API Key
                <Link className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="https://docs?.ziontechgroup.com"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
              >
                View Full Docs
                <Atom className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default API;

import React from 'react';
import { Link } from 'react-router-dom';

const Documentation: React.FC = () => {
  const documentationSections = [
    {
      title: "Getting Started",
      description: "Quick start guides and setup instructions for our services",
      items: [
        "Installation Guide",
        "Configuration Setup",
        "First Project",
        "API Authentication"
      ]
    },
    {
      title: "API Reference",
      description: "Complete API documentation with examples and endpoints",
      items: [
        "Authentication",
        "Endpoints",
        "Request/Response Formats",
        "Error Handling"
      ]
    },
    {
      title: "SDKs & Libraries",
      description: "Client libraries and SDKs for various programming languages",
      items: [
        "JavaScript/TypeScript",
        "Python",
        "Java",
        "C#/.NET"
      ]
    },
    {
      title: "Tutorials",
      description: "Step-by-step guides for common use cases",
      items: [
        "AI Model Integration",
        "Cloud Deployment",
        "Security Implementation",
        "Performance Optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive guides, API references, and tutorials to help you integrate 
              and use our technology solutions effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {documentationSections.map((section, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{section.title}</h3>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-700">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Quick Start Guide</h2>
            <p className="text-lg text-gray-600">
              Get up and running with our services in minutes
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">1. Install Our SDK</h3>
                <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  npm install @ziontechgroup/sdk
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">2. Initialize the Client</h3>
                <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  {`import { ZionTechClient } from '@ziontechgroup/sdk';

const client = new ZionTechClient({
  apiKey: 'your-api-key',
  environment: 'production'
});`}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">3. Make Your First API Call</h3>
                <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  {`// Example: Analyze text with AI
const result = await client.ai.analyzeText({
  text: "Hello, world!",
  model: "sentiment-analysis"
});

console.log(result.sentiment);`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Examples */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">API Examples</h2>
            <p className="text-lg text-gray-600">
              Common API usage patterns and code examples
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">AI Text Analysis</h3>
              <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                {`POST /api/v1/ai/analyze
{
  "text": "Sample text for analysis",
  "model": "sentiment-analysis",
  "options": {
    "language": "en",
    "detailed": true
  }
}`}
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Cloud Infrastructure</h3>
              <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                {`POST /api/v1/cloud/deploy
{
  "template": "web-application",
  "region": "us-west-2",
  "resources": {
    "compute": "t3.medium",
    "storage": "20GB"
  }
}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Help?</h2>
            <p className="text-lg text-gray-600">
              Additional resources and support channels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">FAQ</h3>
              <p className="text-gray-600 text-sm mb-4">
                Find answers to commonly asked questions
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                Browse FAQ
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14H9a2 2 0 01-2-2V6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2h-1l-1 1z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Community</h3>
              <p className="text-gray-600 text-sm mb-4">
                Join our developer community for support
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                Join Community
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Support</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get help from our technical support team
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore our documentation and start building with our powerful technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get API Access
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
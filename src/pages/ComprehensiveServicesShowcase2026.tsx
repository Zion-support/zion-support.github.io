import React from 'react';
import { SEO } from '../components/SEO';

const ComprehensiveServicesShowcase2026: React.FC = () => {
  return (
    <>
      <SEO 
        title="Comprehensive Services Showcase 2026 - Zion Tech Group"
        description="Explore our comprehensive range of technology services for 2026. AI, cloud computing, cybersecurity, and digital transformation solutions."
        keywords="comprehensive services 2026, AI services, cloud computing, cybersecurity, digital transformation, technology solutions"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Comprehensive Services Showcase 2026
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our complete range of cutting-edge technology services and solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* AI & Machine Learning */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">AI</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI & Machine Learning</h3>
              <p className="text-gray-300 mb-4">
                Advanced artificial intelligence solutions to transform your business operations.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Custom AI model development</li>
                <li>• Natural language processing</li>
                <li>• Computer vision solutions</li>
                <li>• Predictive analytics</li>
              </ul>
            </div>

            {/* Cloud Computing */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">☁</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Computing</h3>
              <p className="text-gray-300 mb-4">
                Scalable cloud solutions for modern business needs and growth.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Cloud migration services</li>
                <li>• Multi-cloud strategies</li>
                <li>• Cloud security solutions</li>
                <li>• Cost optimization</li>
              </ul>
            </div>

            {/* Cybersecurity */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">🔒</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive security solutions to protect your digital assets.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Security assessments</li>
                <li>• Threat monitoring</li>
                <li>• Incident response</li>
                <li>• Compliance management</li>
              </ul>
            </div>

            {/* Digital Transformation */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">DT</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-300 mb-4">
                Complete digital transformation strategies for modern businesses.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Process automation</li>
                <li>• Legacy system modernization</li>
                <li>• Data strategy development</li>
                <li>• Change management</li>
              </ul>
            </div>

            {/* IoT Solutions */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">IoT</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">IoT Solutions</h3>
              <p className="text-gray-300 mb-4">
                Internet of Things solutions for connected devices and smart systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• IoT device management</li>
                <li>• Real-time data processing</li>
                <li>• Smart city solutions</li>
                <li>• Industrial IoT</li>
              </ul>
            </div>

            {/* Blockchain Technology */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">⛓</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Blockchain Technology</h3>
              <p className="text-gray-300 mb-4">
                Secure and transparent blockchain solutions for various industries.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Smart contract development</li>
                <li>• DeFi solutions</li>
                <li>• Supply chain tracking</li>
                <li>• Digital identity management</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Let us help you leverage the latest technology to drive innovation and growth in your organization.
            </p>
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComprehensiveServicesShowcase2026;
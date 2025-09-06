import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business
            and drive innovation across all sectors.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-semibold mb-4">AI & Machine Learning</h3>
            <p className="text-gray-600 mb-4">
              Transform your business with cutting-edge AI solutions including machine learning, 
              natural language processing, and computer vision.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Machine Learning Models</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision</li>
              <li>• Predictive Analytics</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-2xl font-semibold mb-4">Cybersecurity</h3>
            <p className="text-gray-600 mb-4">
              Protect your digital assets with advanced security solutions, threat detection, 
              and compliance management.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Threat Detection</li>
              <li>• Security Audits</li>
              <li>• Compliance Management</li>
              <li>• Incident Response</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-2xl font-semibold mb-4">Cloud Infrastructure</h3>
            <p className="text-gray-600 mb-4">
              Scale your operations with robust cloud solutions, migration services, 
              and infrastructure optimization.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Cloud Migration</li>
              <li>• Infrastructure Optimization</li>
              <li>• Auto-scaling</li>
              <li>• Cost Management</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-semibold mb-4">Digital Transformation</h3>
            <p className="text-gray-600 mb-4">
              Modernize your business processes with comprehensive digital transformation 
              strategies and implementation.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Process Automation</li>
              <li>• Digital Strategy</li>
              <li>• Change Management</li>
              <li>• Technology Integration</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-semibold mb-4">Data Analytics</h3>
            <p className="text-gray-600 mb-4">
              Unlock insights from your data with advanced analytics, business intelligence, 
              and reporting solutions.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Business Intelligence</li>
              <li>• Data Visualization</li>
              <li>• Real-time Analytics</li>
              <li>• Custom Dashboards</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-2xl font-semibold mb-4">IoT Solutions</h3>
            <p className="text-gray-600 mb-4">
              Connect and manage your devices with Internet of Things solutions for 
              smart operations and monitoring.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Device Management</li>
              <li>• Real-time Monitoring</li>
              <li>• Data Collection</li>
              <li>• Smart Automation</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6">Let's discuss how our services can help transform your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Get Free Consultation
            </a>
            <a 
              href="/pricing" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
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

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="Consulting Services"
              description="Strategic technology consulting to help you make informed decisions about your digital future."
            />
            <Card
              title="Implementation"
              description="End-to-end implementation of technology solutions tailored to your specific business needs."
            />
            <Card
              title="Support & Maintenance"
              description="Ongoing support and maintenance to ensure your systems run smoothly and efficiently."
            />
            <Card
              title="Training & Education"
              description="Comprehensive training programs to help your team master new technologies and processes."
            />
            <Card
              title="Custom Development"
              description="Bespoke software development solutions designed specifically for your unique requirements."
            />
            <Card
              title="Integration Services"
              description="Seamless integration of new technologies with your existing systems and workflows."
            />
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">Industry Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold">Healthcare</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏦</span>
              </div>
              <h3 className="text-lg font-semibold">Finance</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-lg font-semibold">Manufacturing</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-lg font-semibold">Retail</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-lg font-semibold">Government</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
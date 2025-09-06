import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Card from '../components/Card';

const Services: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Comprehensive technology solutions designed to transform your business 
            and drive innovation across all sectors.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            title="AI & Machine Learning"
            description="Transform your business with cutting-edge AI solutions including machine learning, natural language processing, and computer vision."
            icon="🤖"
          />
          <ServiceCard
            title="Cybersecurity"
            description="Protect your digital assets with advanced security solutions, threat detection, and compliance management."
            icon="🔒"
          />
          <ServiceCard
            title="Cloud Infrastructure"
            description="Scale your operations with robust cloud solutions, migration services, and infrastructure optimization."
            icon="☁️"
          />
          <ServiceCard
            title="Digital Transformation"
            description="Modernize your business processes with comprehensive digital transformation strategies and implementation."
            icon="🚀"
          />
          <ServiceCard
            title="Data Analytics"
            description="Unlock insights from your data with advanced analytics, business intelligence, and reporting solutions."
            icon="📊"
          />
          <ServiceCard
            title="IoT Solutions"
            description="Connect and manage your devices with Internet of Things solutions for smart operations and monitoring."
            icon="🌐"
          />
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Specialized Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-slate-800/50 border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Custom Development</h3>
              <p className="text-gray-300 mb-4">
                Tailored software solutions built specifically for your business needs and requirements.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Web Applications</li>
                <li>• Mobile Apps</li>
                <li>• API Development</li>
                <li>• System Integration</li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-slate-800/50 border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Consulting Services</h3>
              <p className="text-gray-300 mb-4">
                Expert guidance to help you make informed technology decisions and strategic planning.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Technology Assessment</li>
                <li>• Architecture Design</li>
                <li>• Process Optimization</li>
                <li>• Training & Support</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Get a Quote
            </button>
            <button className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
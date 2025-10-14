import React from 'react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <p className="text-gray-300 text-lg mb-12">
          Comprehensive AI and IT solutions for your business needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">AI Services</h3>
            <p className="text-gray-300 mb-4">
              Advanced AI solutions including chatbots, content generation, and data analytics.
            </p>
            <a href="/ai-services" className="text-blue-400 hover:text-blue-300">
              Learn More →
            </a>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">IT Solutions</h3>
            <p className="text-gray-300 mb-4">
              Complete IT services including web development, mobile apps, and cloud solutions.
            </p>
            <a href="/it-services" className="text-blue-400 hover:text-blue-300">
              Learn More →
            </a>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive security solutions including penetration testing and compliance.
            </p>
            <a href="/cybersecurity" className="text-blue-400 hover:text-blue-300">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
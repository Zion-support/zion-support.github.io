
import React from 'react';
import Card from '../components/Card';

const Support: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Support Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the help you need with our comprehensive support services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="Technical Support" description="24/7 technical assistance for all your needs." />
          <Card title="Documentation" description="Comprehensive guides and documentation." />
          <Card title="Community Forum" description="Connect with other users and experts." />
        </div>

        <div className="text-center mt-12">
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Support;


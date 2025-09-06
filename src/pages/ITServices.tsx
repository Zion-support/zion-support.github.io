import React from 'react';
import ServiceCard from '../components/ServiceCard';

const ITServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">IT Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="IT Support"
            description="24/7 technical support for all your IT needs."
            icon="🛠️"
          />
          <ServiceCard
            title="Network Management"
            description="Secure and reliable network infrastructure management."
            icon="🌐"
          />
          <ServiceCard
            title="System Administration"
            description="Expert system administration and maintenance services."
            icon="⚙️"
          />
        </div>
      </div>
    </div>
  );
};

export default ITServices;
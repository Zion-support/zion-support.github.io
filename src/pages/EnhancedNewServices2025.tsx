
import React from 'react';
import ServiceCard from '../components/ServiceCard';

const EnhancedNewServices2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Enhanced Services 2025</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our most advanced and innovative services for 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Advanced AI Solutions"
            description="Next-generation AI technologies for enterprise applications."
            icon="🚀"
          />
          <ServiceCard
            title="Quantum Computing"
            description="Revolutionary computing power for complex problem solving."
            icon="⚛️"
          />
          <ServiceCard
            title="Blockchain Solutions"
            description="Secure, decentralized solutions for modern business needs."
            icon="⛓️"
          />
        </div>
      </div>
    </div>
  );
};

export default EnhancedNewServices2025;


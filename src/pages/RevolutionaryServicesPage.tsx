import React from 'react';
import ServiceCard from '../components/ServiceCard';

const RevolutionaryServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Revolutionary Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our cutting-edge services that are transforming industries and shaping the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="AI-Powered Automation"
            description="Revolutionary AI solutions that automate complex business processes."
            icon="🤖"
          />
          <ServiceCard
            title="Quantum Computing"
            description="Next-generation computing power for solving complex problems."
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

export default RevolutionaryServicesPage;

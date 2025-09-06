import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Solutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Enterprise Solutions"
            description="Scalable solutions for large organizations."
            icon="🏢"
          />
          <ServiceCard
            title="SME Solutions"
            description="Cost-effective solutions for small and medium businesses."
            icon="🏪"
          />
          <ServiceCard
            title="Startup Solutions"
            description="Rapid deployment solutions for startups."
            icon="🚀"
          />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
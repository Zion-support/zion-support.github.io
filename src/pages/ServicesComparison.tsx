import React from 'react';
import { SEO } from "@/components/SEO";

const ServicesComparison: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark to-zion-blue-darker">
      <SEO 
        title="Services Comparison - Zion Tech Group"
        description="Compare our different service offerings to find the perfect solution for your business needs."
        keywords="services comparison, service options, business solutions, technology services"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Services Comparison</h1>
          <p className="text-xl text-zion-blue-light max-w-3xl mx-auto">
            Compare our different service offerings to find the perfect solution for your business needs.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
              <ul className="text-zion-blue-light space-y-2">
                <li>• Autonomous Systems</li>
                <li>• Machine Learning</li>
                <li>• Predictive Analytics</li>
                <li>• Natural Language Processing</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">IT Services</h3>
              <ul className="text-zion-blue-light space-y-2">
                <li>• Infrastructure Management</li>
                <li>• Cloud Solutions</li>
                <li>• Network Security</li>
                <li>• Data Management</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Micro SAAS</h3>
              <ul className="text-zion-blue-light space-y-2">
                <li>• Custom Applications</li>
                <li>• Workflow Automation</li>
                <li>• Business Intelligence</li>
                <li>• Integration Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComparison;
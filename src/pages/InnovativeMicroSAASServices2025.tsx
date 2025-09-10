import React from 'react';
import { Package, Zap, Users, Settings } from 'lucide-react';
import SEO from '../components/SEO';

const InnovativeMicroSAASServices2025 = () => {
  const microSaasFeatures = [
    {
      title: "Rapid Deployment",
      description: "Quickly deploy micro-SaaS solutions with minimal setup time",
      icon: <Package className="h-8 w-8 text-blue-400" />
    },
    {
      title: "Scalable Architecture",
      description: "Built to scale with your business growth and user demand",
      icon: <Zap className="h-8 w-8 text-green-400" />
    },
    {
      title: "Multi-tenant Support",
      description: "Support multiple customers with isolated data and configurations",
      icon: <Users className="h-8 w-8 text-purple-400" />
    },
    {
      title: "Custom Configuration",
      description: "Flexible configuration options for different business needs",
      icon: <Settings className="h-8 w-8 text-yellow-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Micro SaaS Services 2025 - Zion Tech Group"
        description="Revolutionary micro-SaaS solutions for modern businesses in 2025."
        keywords={["micro SaaS", "SaaS services", "2025", "innovative solutions"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Innovative Micro SaaS Services 2025</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover our innovative micro-SaaS solutions designed for the future of business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {microSaasFeatures.map((feature, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Micro SaaS Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Core Features</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• User management and authentication</li>
                <li>• Subscription billing and payments</li>
                <li>• API integration and webhooks</li>
                <li>• Analytics and reporting</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Lower upfront costs</li>
                <li>• Faster time to market</li>
                <li>• Scalable infrastructure</li>
                <li>• Regular updates and maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeMicroSAASServices2025;
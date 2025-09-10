import React from 'react';
import { Server, Network, Shield, Settings } from 'lucide-react';
import SEO from '../../components/SEO';

const ITInfrastructure = () => {
  const features = [
    {
      title: "Server Management",
      description: "Comprehensive server infrastructure design and management",
      icon: <Server className="h-8 w-8 text-blue-400" />
    },
    {
      title: "Network Design",
      description: "Secure and scalable network architecture solutions",
      icon: <Network className="h-8 w-8 text-green-400" />
    },
    {
      title: "Security Implementation",
      description: "Enterprise-grade security measures and compliance",
      icon: <Shield className="h-8 w-8 text-red-400" />
    },
    {
      title: "System Optimization",
      description: "Optimize IT infrastructure for maximum performance",
      icon: <Settings className="h-8 w-8 text-yellow-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="IT Infrastructure - Zion Tech Group"
        description="Comprehensive IT infrastructure solutions for modern businesses."
        keywords={["IT infrastructure", "server management", "network design", "system optimization"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">IT Infrastructure</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Build and manage robust IT infrastructure that supports your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
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
          <h2 className="text-3xl font-bold text-white mb-6">Infrastructure Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Core Infrastructure</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Server hardware and software</li>
                <li>• Network design and implementation</li>
                <li>• Storage solutions</li>
                <li>• Backup and disaster recovery</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Management</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 24/7 monitoring and support</li>
                <li>• Performance optimization</li>
                <li>• Security management</li>
                <li>• Compliance and auditing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITInfrastructure;
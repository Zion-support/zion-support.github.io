import React from 'react';
import { Wifi, Cpu, Cloud, Shield } from 'lucide-react';
import SEO from '../../components/SEO';

const IoTEdgeComputing = () => {
  const features = [
    {
      title: "Edge Processing",
      description: "Process data locally at the edge for faster response times",
      icon: <Cpu className="h-8 w-8 text-blue-400" />
    },
    {
      title: "IoT Connectivity",
      description: "Connect and manage thousands of IoT devices seamlessly",
      icon: <Wifi className="h-8 w-8 text-green-400" />
    },
    {
      title: "Cloud Integration",
      description: "Seamless integration between edge and cloud computing",
      icon: <Cloud className="h-8 w-8 text-purple-400" />
    },
    {
      title: "Edge Security",
      description: "Advanced security measures for edge computing environments",
      icon: <Shield className="h-8 w-8 text-red-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="IoT Edge Computing - Zion Tech Group"
        description="Comprehensive IoT and edge computing solutions for modern businesses."
        keywords={["IoT", "edge computing", "IoT connectivity", "edge processing"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">IoT Edge Computing</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Connect, process, and analyze data at the edge with our comprehensive IoT solutions
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
          <h2 className="text-3xl font-bold text-white mb-6">Edge Computing Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Performance</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Reduced latency for real-time applications</li>
                <li>• Improved bandwidth efficiency</li>
                <li>• Enhanced data processing speed</li>
                <li>• Better user experience</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Reliability</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Offline operation capabilities</li>
                <li>• Reduced dependency on cloud connectivity</li>
                <li>• Enhanced data privacy</li>
                <li>• Improved system resilience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IoTEdgeComputing;
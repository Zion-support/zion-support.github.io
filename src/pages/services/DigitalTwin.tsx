import React from 'react';
import { Cpu, Eye, BarChart3, Settings } from 'lucide-react';
import SEO from '../../components/SEO';

<<<<<<< HEAD
const DigitalTwin = () => {
  const features = [
    {
      title: "Real-time Simulation",
      description: "Create digital replicas of physical assets for real-time monitoring",
      icon: <Cpu className="h-8 w-8 text-blue-400" />
    },
    {
      title: "Predictive Analytics",
      description: "Predict maintenance needs and optimize performance using AI",
      icon: <Eye className="h-8 w-8 text-green-400" />
    },
    {
      title: "Performance Monitoring",
      description: "Monitor and analyze asset performance in real-time",
      icon: <BarChart3 className="h-8 w-8 text-purple-400" />
    },
    {
      title: "Optimization",
      description: "Optimize operations and reduce costs through digital simulation",
      icon: <Settings className="h-8 w-8 text-yellow-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Digital Twin - Zion Tech Group"
        description="Revolutionary digital twin solutions for asset management and optimization."
        keywords={["digital twin", "simulation", "predictive analytics", "asset management"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Digital Twin</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Create digital replicas of your physical assets for enhanced monitoring and optimization
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
          <h2 className="text-3xl font-bold text-white mb-6">Digital Twin Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Operational Excellence</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Real-time asset monitoring</li>
                <li>• Predictive maintenance</li>
                <li>• Performance optimization</li>
                <li>• Risk reduction</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Business Value</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Reduced downtime</li>
                <li>• Lower maintenance costs</li>
                <li>• Improved efficiency</li>
                <li>• Better decision making</li>
              </ul>
            </div>
=======
export default function DigitalTwin() {
  return (
    <>
      <SEO 
        title="Digital Twin - Zion Tech Group"
        description="Advanced digital twin solutions for business optimization."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Digital Twin</h1>
            <p className="text-xl text-slate-300">Advanced digital twin solutions.</p>
>>>>>>> 2e76c8f17382c83630cd66eed177eb9d0ef16e40
          </div>
        </div>
      </div>
    </div>
  );
}
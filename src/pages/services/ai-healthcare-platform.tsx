import React from 'react';
import { Heart, Brain, Shield, Zap } from 'lucide-react';
import SEO from '../../components/SEO';

const AIHealthcarePlatform = () => {
  const features = [
    {
      title: "AI-Powered Diagnostics",
      description: "Advanced AI algorithms for accurate medical diagnosis and treatment recommendations",
      icon: <Brain className="h-8 w-8 text-blue-400" />
    },
    {
      title: "Patient Monitoring",
      description: "Real-time patient monitoring with predictive analytics for early intervention",
      icon: <Heart className="h-8 w-8 text-red-400" />
    },
    {
      title: "Data Security",
      description: "HIPAA-compliant security measures to protect sensitive patient information",
      icon: <Shield className="h-8 w-8 text-green-400" />
    },
    {
      title: "Workflow Automation",
      description: "Streamlined healthcare workflows with intelligent automation",
      icon: <Zap className="h-8 w-8 text-yellow-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Healthcare Platform - Zion Tech Group"
        description="Revolutionary AI-powered healthcare platform for modern medical practices."
        keywords={["AI healthcare", "medical AI", "healthcare platform", "medical diagnosis"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">AI Healthcare Platform</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Transform healthcare delivery with our cutting-edge AI platform designed for medical professionals
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
          <h2 className="text-3xl font-bold text-white mb-6">Platform Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Features</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Medical image analysis and interpretation</li>
                <li>• Predictive health analytics</li>
                <li>• Automated treatment recommendations</li>
                <li>• Drug interaction checking</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Integration</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• EHR system integration</li>
                <li>• Medical device connectivity</li>
                <li>• Telemedicine support</li>
                <li>• Mobile app compatibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIHealthcarePlatform;
import React from 'react';
<<<<<<< HEAD
import { Shield, Eye, Lock, AlertTriangle } from 'lucide-react';
import SEO from '../../components/SEO';

const AICybersecurity = () => {
  const features = [
    {
      title: "Threat Detection",
      description: "Advanced AI algorithms to detect and prevent cyber threats in real-time",
      icon: <Shield className="h-8 w-8 text-blue-400" />
    },
    {
      title: "Behavioral Analysis",
      description: "Monitor user and system behavior to identify suspicious activities",
      icon: <Eye className="h-8 w-8 text-green-400" />
    },
    {
      title: "Data Protection",
      description: "Encrypt and protect sensitive data with enterprise-grade security",
      icon: <Lock className="h-8 w-8 text-purple-400" />
    },
    {
      title: "Incident Response",
      description: "Automated incident response and recovery procedures",
      icon: <AlertTriangle className="h-8 w-8 text-red-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Cybersecurity - Zion Tech Group"
        description="Advanced AI-powered cybersecurity solutions to protect your digital assets."
        keywords={["AI cybersecurity", "cybersecurity", "threat detection", "data protection"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">AI Cybersecurity</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Protect your organization with cutting-edge AI-powered cybersecurity solutions
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
          <h2 className="text-3xl font-bold text-white mb-6">Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Protection</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Real-time threat monitoring</li>
                <li>• Advanced malware detection</li>
                <li>• Network security analysis</li>
                <li>• Vulnerability assessment</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Compliance</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• GDPR compliance</li>
                <li>• HIPAA compliance</li>
                <li>• SOC 2 certification</li>
                <li>• ISO 27001 standards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICybersecurity;
=======
import SEO from '../../components/SEO';

export default function AICybersecurity() {
  return (
    <>
      <SEO 
        title="AI Cybersecurity - Zion Tech Group"
        description="Advanced AI-powered cybersecurity solutions and services."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">AI Cybersecurity</h1>
            <p className="text-xl text-slate-300">Advanced AI-powered cybersecurity solutions.</p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> 2e76c8f17382c83630cd66eed177eb9d0ef16e40

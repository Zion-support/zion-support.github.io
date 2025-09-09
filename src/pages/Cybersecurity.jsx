import React from 'react';
import { Shield, Lock, Eye, Users, Database, Network, Zap, Target, CheckCircle, BarChart3 } from 'lucide-react';
import SEO from "@/components/SEO";

const Cybersecurity = () => {
  const securityFeatures = [
    {
      title: "Threat Detection & Response",
      description: "Advanced monitoring and automated response to security threats",
      icon: Shield,
      features: ["Real-time monitoring", "Automated alerts", "Incident response", "Threat intelligence"]
    },
    {
      title: "Data Protection",
      description: "Comprehensive data encryption and access controls",
      icon: Lock,
      features: ["End-to-end encryption", "Access controls", "Data backup", "Compliance"]
    },
    {
      title: "Network Security",
      description: "Secure network infrastructure and monitoring",
      icon: Network,
      features: ["Firewall management", "VPN solutions", "Network monitoring", "Intrusion detection"]
    },
    {
      title: "Security Auditing",
      description: "Regular security assessments and compliance checks",
      icon: Eye,
      features: ["Vulnerability scanning", "Penetration testing", "Compliance audits", "Risk assessment"]
    }
  ];

  return (
    <>
      <SEO
        title="Cybersecurity Services"
        description="Comprehensive cybersecurity solutions to protect your business from threats"
        canonical="/cybersecurity"
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cybersecurity Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your business with comprehensive cybersecurity solutions designed to keep your data safe and your operations secure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-blue-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Secure Your Business?</h2>
            <p className="text-blue-100 mb-6">
              Contact our cybersecurity experts to discuss your security needs and get a customized protection plan.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Security Assessment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cybersecurity;
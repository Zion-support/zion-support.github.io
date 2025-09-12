import React from 'react';

import { Cloud } from 'lucide-react';
import { Code } from 'lucide-react';
const features = [];
const solutions = [];

export default function Services() {
  const services = [
    {
      title: "AI Solutions",
      description: "Advanced artificial intelligence solutions for business automation and optimization.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum computing services for complex problem solving.",
      features: ["Quantum Algorithms", "Quantum Simulation", "Quantum Optimization", "Quantum Cryptography"]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      features: ["Threat Detection", "Security Auditing", "Penetration Testing", "Incident Response"]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services.",
      features: ["Cloud Migration", "Infrastructure as Code", "DevOps Automation", "Monitoring & Analytics"]
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights.",
      features: ["Data Visualization", "Business Intelligence", "Real-time Analytics", "Data Engineering"]
    },
    {
      title: "Blockchain",
      description: "Decentralized solutions and smart contract development.",
      features: ["Smart Contracts", "DeFi Solutions", "NFT Platforms", "Blockchain Consulting"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Cutting-edge technology solutions to drive your business forward
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-cyan-400 flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Our team can create tailored solutions to meet your specific requirements.
          </p>
          <button className="px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors">
            Get a Quote
          </button>
        </div>
      </section>
    </div>
  );
}
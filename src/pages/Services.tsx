import React from 'react';
import { Helmet } from 'react-helmet-async';

const services = [
  {
    title: 'Quantum Consciousness AI Consulting',
    description: 'Revolutionary AI consulting that transforms enterprise decision-making with 99.9% accuracy.',
    href: '/services/quantum-consciousness-ai-consulting'
  },
  {
    title: 'Autonomous Business Operations',
    description: 'Self-healing infrastructure and autonomous operations that reduce costs by 70%.',
    href: '/services/autonomous-business-operations'
  },
  {
    title: 'Advanced Cybersecurity AI',
    description: 'Next-generation AI-powered cybersecurity solutions for enterprise protection.',
    href: '/services/advanced-cybersecurity-ai'
  },
  {
    title: 'Real-Time Cognitive Automation',
    description: 'AI-driven automation that adapts and learns in real-time for maximum efficiency.',
    href: '/services/real-time-cognitive-automation'
  }
];

const Services: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and quantum computing services for enterprise transformation." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-950">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and quantum computing solutions designed to transform your enterprise operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-purple-400">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <a 
                  href={service.href}
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
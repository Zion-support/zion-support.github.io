import React from 'react';
import { Helmet } from 'react-helmet-async';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Quantum Consciousness AI Consulting',
      description: 'Transform your enterprise with quantum consciousness AI that achieves 99.9% decision accuracy.',
      href: '/services/quantum-consciousness-ai-consulting'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Streamline business processes with intelligent automation and self-optimizing workflows.',
      href: '/services/ai-workflow-automation'
    },
    {
      title: 'AI Virtual Assistant',
      description: 'Deploy advanced virtual assistants that understand context and provide intelligent support.',
      href: '/services/ai-virtual-assistant'
    },
    {
      title: 'AI MLOps Automation',
      description: 'Automate machine learning operations with self-healing pipelines and intelligent monitoring.',
      href: '/services/ai-mlops-automation'
    },
    {
      title: 'AI Intelligent Document Processing',
      description: 'Extract insights from documents with advanced AI-powered processing and analysis.',
      href: '/services/ai-intelligent-document-processing'
    },
    {
      title: 'Advanced Cybersecurity AI',
      description: 'Protect your enterprise with AI-powered security systems that adapt to emerging threats.',
      href: '/services/advanced-cybersecurity-ai'
    },
    {
      title: 'Autonomous Business Operations',
      description: 'Run your business autonomously with AI systems that make decisions and execute operations.',
      href: '/services/autonomous-business-operations'
    },
    {
      title: 'Real-Time Cognitive Automation',
      description: 'Implement cognitive automation that processes information and makes decisions in real-time.',
      href: '/services/real-time-cognitive-automation'
    },
    {
      title: 'AI Data Analytics',
      description: 'Unlock insights from your data with advanced AI analytics and predictive modeling.',
      href: '/services/ai-data-analytics'
    },
    {
      title: 'Enterprise AI Solutions',
      description: 'Comprehensive AI solutions designed for large-scale enterprise transformation.',
      href: '/services/enterprise-ai-solutions'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and quantum computing services for enterprise transformation." />"
      </Helmet>
      
      <div className="min-h-screen bg-slate-950">"
        <div className="container mx-auto px-4 py-16">"
          <div className="text-center mb-16">"
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
              Comprehensive AI and quantum computing solutions designed to transform your enterprise operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">"
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">"
                <h3 className="text-xl font-bold mb-4 text-purple-400">{service.title}</h3>"
                <p className="text-gray-300 mb-6">{service.description}</p>"
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
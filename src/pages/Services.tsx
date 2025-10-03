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
      
      <div className="text-left">
        <div className="text-left">
          <div className="text-left">
            <h1 className="text-left">Our Services</h1>
            <p className="text-left">
              Comprehensive AI and quantum computing solutions designed to transform your enterprise operations.
            </p>
          </div>
          
          <div className="text-left">
            {services.map((service, index) => (
              <div key={index} className="text-left">
                <h3 className="text-left">{service.title}</h3>
                <p className="text-left">{service.description}</p>
                <a 
                  href={service.href}
                  className="text-left"
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
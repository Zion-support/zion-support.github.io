import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Solutions = () => {
  const solutions = [
    {
      title: "Enterprise AI Platform",
      description: "Complete AI platform for large enterprises with advanced machine learning capabilities.",
      features: ["Custom AI Models", "Real-time Processing", "Scalable Infrastructure", "24/7 Support"]
    },
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud infrastructure with zero downtime and enhanced security.",
      features: ["Zero Downtime", "Data Security", "Cost Optimization", "Performance Monitoring"]
    },
    {
      title: "Cybersecurity Suite",
      description: "Comprehensive security solution protecting your entire digital infrastructure.",
      features: ["Threat Detection", "Vulnerability Assessment", "Compliance Management", "Incident Response"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Solutions - Zion Tech Group"
        description="Comprehensive technology solutions for modern businesses."
        keywords={["solutions", "enterprise", "AI platform", "cloud migration", "cybersecurity"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Our Solutions</h1>
          <p className="text-xl text-gray-300">
            Tailored technology solutions designed to meet your specific business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
              <p className="text-gray-300 mb-6">{solution.description}</p>
              
              <ul className="space-y-3 mb-6">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to="/contact"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
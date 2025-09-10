import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cloud, Shield, Rocket, Database, Cpu } from 'lucide-react';
import SEO from '../components/SEO';

const Services = () => {
  const services = [
    {
      title: "AI Solutions",
      description: "Revolutionary AI technology that transforms your business operations and drives innovation.",
      icon: <Brain className="h-8 w-8 text-blue-400" />,
      link: "/services/ai-content-creation",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Cloud Computing",
      description: "Scalable cloud infrastructure solutions designed for modern businesses.",
      icon: <Cloud className="h-8 w-8 text-purple-400" />,
      link: "/services/cloud-devops",
      features: ["Cloud Migration", "DevOps Automation", "Infrastructure as Code", "Monitoring & Security"]
    },
    {
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets and ensure compliance.",
      icon: <Shield className="h-8 w-8 text-green-400" />,
      link: "/services/ai-cybersecurity",
      features: ["Threat Detection", "Security Audits", "Compliance Management", "Incident Response"]
    },
    {
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business processes.",
      icon: <Rocket className="h-8 w-8 text-orange-400" />,
      link: "/solutions",
      features: ["Process Automation", "Data Analytics", "System Integration", "Change Management"]
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics solutions.",
      icon: <Database className="h-8 w-8 text-cyan-400" />,
      link: "/services/data-analytics",
      features: ["Business Intelligence", "Data Visualization", "Real-time Analytics", "Data Governance"]
    },
    {
      title: "IT Infrastructure",
      description: "Robust IT infrastructure solutions to support your business growth and operations.",
      icon: <Cpu className="h-8 w-8 text-pink-400" />,
      link: "/services/it-infrastructure",
      features: ["Network Design", "Server Management", "Backup Solutions", "Performance Optimization"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services - Zion Tech Group"
        description="Comprehensive AI, cloud computing, cybersecurity, and digital transformation services."
        keywords={["services", "AI solutions", "cloud computing", "cybersecurity", "digital transformation"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-8 hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <div className="bg-slate-700 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link
                to={service.link}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-800/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-6">
              Let's discuss how our services can help transform your business.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
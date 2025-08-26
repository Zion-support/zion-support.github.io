import React from 'react';
import { Link } from 'react-router-dom';
import EnhancedServicesShowcase from '../components/EnhancedServicesShowcase';

const Services: React.FC = () => {
  const services = [
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence and machine learning solutions",
      icon: "🤖",
      features: ["Machine Learning", "Predictive Analytics", "Natural Language Processing", "Computer Vision"],
      path: "/services/ai"
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated development operations",
      icon: "☁️",
      features: ["Cloud Migration", "DevOps Automation", "Container Orchestration", "Infrastructure as Code"],
      path: "/services/cloud"
    },
    {
      title: "Cybersecurity",
      description: "Enterprise-grade security solutions and threat protection",
      icon: "🔒",
      features: ["Threat Detection", "Vulnerability Assessment", "Incident Response", "Security Training"],
      path: "/services/cybersecurity"
    },
    {
      title: "IT Infrastructure",
      description: "Comprehensive IT infrastructure management and optimization",
      icon: "🖥️",
      features: ["Network Management", "System Administration", "Data Center Operations", "Performance Optimization"],
      path: "/services/infrastructure"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting and implementation",
      icon: "🚀",
      features: ["Process Automation", "Workflow Optimization", "Change Management", "Technology Strategy"],
      path: "/services/transformation"
    },
    {
      title: "Consulting",
      description: "Strategic technology consulting and advisory services",
      icon: "💡",
      features: ["Technology Assessment", "Strategic Planning", "Vendor Selection", "Project Management"],
      path: "/services/consulting"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.path}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  Learn More
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          
          {/* Innovative Services Preview */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Discover Our Innovative Services</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore cutting-edge solutions including quantum computing, blockchain, IoT, and advanced cybersecurity
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-green-800/30 to-emerald-700/30 backdrop-blur-lg rounded-xl p-6 border border-green-600/30">
                <div className="text-3xl mb-3">⚛️</div>
                <h4 className="text-lg font-semibold text-white mb-2">Quantum Computing</h4>
                <p className="text-sm text-gray-300">Revolutionary quantum solutions for complex problems</p>
              </div>
              <div className="bg-gradient-to-br from-orange-800/30 to-red-700/30 backdrop-blur-lg rounded-xl p-6 border border-orange-600/30">
                <div className="text-3xl mb-3">🔗</div>
                <h4 className="text-lg font-semibold text-white mb-2">Blockchain & Web3</h4>
                <p className="text-sm text-gray-300">DeFi, NFTs, and decentralized applications</p>
              </div>
              <div className="bg-gradient-to-br from-teal-800/30 to-cyan-700/30 backdrop-blur-lg rounded-xl p-6 border border-teal-600/30">
                <div className="text-3xl mb-3">🏙️</div>
                <h4 className="text-lg font-semibold text-white mb-2">IoT & Edge Computing</h4>
                <p className="text-sm text-gray-300">Smart cities, industrial IoT, and healthcare monitoring</p>
              </div>
              <div className="bg-gradient-to-br from-pink-800/30 to-rose-700/30 backdrop-blur-lg rounded-xl p-6 border border-pink-600/30">
                <div className="text-3xl mb-3">🔒</div>
                <h4 className="text-lg font-semibold text-white mb-2">Advanced Cybersecurity</h4>
                <p className="text-sm text-gray-300">Zero-trust security and quantum-resistant cryptography</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Showcase */}
      <EnhancedServicesShowcase 
        title="Comprehensive Technology Solutions"
        subtitle="Discover our cutting-edge micro SAAS, AI, and IT services designed to transform your business"
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Contact Us Today
            </Link>
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Visit Our Website
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

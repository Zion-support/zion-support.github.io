import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Server, 
  Database, 
  Network, 
  Shield, 
  Cloud,
  Zap,
  BarChart3,
  Cpu,
  HardDrive,
  Wifi,
  Lock
} from 'lucide-react';

const ITInfrastructure = () => {
  const infrastructureServices = [
    {
      title: "Server Management",
      description: "Comprehensive server infrastructure design and management",
      icon: Server,
      features: ["Server provisioning", "Performance optimization", "Monitoring", "Maintenance"]
    },
    {
      title: "Storage Solutions",
      description: "Scalable storage infrastructure and data management",
      icon: HardDrive,
      features: ["Storage arrays", "Backup systems", "Data protection", "Disaster recovery"]
    },
    {
      title: "Network Infrastructure",
      description: "High-performance networking solutions",
      icon: Network,
      features: ["Network design", "Security", "Monitoring", "Optimization"]
    },
    {
      title: "Security Infrastructure",
      description: "Comprehensive security and compliance solutions",
      icon: Shield,
      features: ["Firewalls", "Intrusion detection", "Access control", "Compliance"]
    }
  ];

  const infrastructureAreas = [
    { 
      area: "Hardware Infrastructure", 
      solutions: ["Servers", "Storage systems", "Network equipment", "Workstations"] 
    },
    { 
      area: "Software Infrastructure", 
      solutions: ["Operating systems", "Virtualization platforms", "Database systems", "Management tools"] 
    },
    { 
      area: "Network Infrastructure", 
      solutions: ["LAN/WAN setup", "Wireless networks", "VPN solutions", "Network security"] 
    },
    { 
      area: "Storage Infrastructure", 
      solutions: ["Storage arrays", "Backup systems", "Cloud storage", "Data protection"] 
    }
  ];

  const benefits = [
    "Improved system reliability and uptime",
    "Enhanced security and compliance",
    "Scalable infrastructure for growth",
    "Reduced operational costs",
    "Better disaster recovery capabilities",
    "24/7 monitoring and support"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="IT Infrastructure Solutions - Zion Tech Group"
        description="Comprehensive IT infrastructure services including server management, storage solutions, networking, and security."
        keywords="IT infrastructure, server management, storage solutions, networking, security infrastructure"
        canonical="https://ziontechgroup.com/services/it-infrastructure"
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Server className="w-4 h-4 mr-2" />
              IT Infrastructure
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Robust
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> IT Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build a solid foundation for your business with our comprehensive IT infrastructure 
              services that ensure reliability, security, and scalability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Services
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Services Grid */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Infrastructure Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              End-to-end IT infrastructure solutions designed to optimize performance, 
              enhance security, and support business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infrastructureServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="text-cyan-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Infrastructure Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive coverage across all critical infrastructure components
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infrastructureAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{area.area}</h3>
                <ul className="space-y-2">
                  {area.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-center text-gray-300">
                      <span className="text-cyan-400 mr-2">•</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Benefits of Professional Infrastructure
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your business with enterprise-grade IT infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">✓</span>
                </div>
                <p className="text-white font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your IT Foundation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our infrastructure experts help you design and implement a robust, 
            scalable, and secure IT foundation for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Infrastructure Consultation
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITInfrastructure;
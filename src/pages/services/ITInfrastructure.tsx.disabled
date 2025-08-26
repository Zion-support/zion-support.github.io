import React from 'react';
import Head from 'next/head';
import { 
  Server, 
  Database, 
  Shield, 
  Network, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const ITInfrastructure: React.FC = () => {
  const services = [
    {
      title: "Network Infrastructure",
      description: "Design and implement robust network solutions for optimal performance",
      icon: "🌐",
      features: ["LAN/WAN Setup", "Wireless Networks", "VPN Solutions", "Network Security"]
    },
    {
      title: "Server Management",
      description: "Comprehensive server infrastructure management and optimization",
      icon: "🖥️",
      features: ["Server Deployment", "Performance Tuning", "Monitoring", "Backup & Recovery"]
    },
    {
      title: "Storage Solutions",
      description: "Scalable storage infrastructure for growing data needs",
      icon: "💾",
      features: ["Storage Arrays", "Backup Systems", "Cloud Storage", "Data Protection"]
    },
    {
      title: "Security Infrastructure",
      description: "Multi-layered security solutions to protect your IT assets",
      icon: "🔒",
      features: ["Firewall Management", "Intrusion Detection", "Access Control", "Security Monitoring"]
    }
  ];

  const infrastructureAreas = [
    { area: "Hardware Infrastructure", solutions: ["Servers", "Storage systems", "Network equipment", "Workstations"] },
    { area: "Software Infrastructure", solutions: ["Operating systems", "Virtualization platforms", "Database systems", "Management tools"] },
    { area: "Network Infrastructure", solutions: ["LAN/WAN setup", "Wireless networks", "VPN solutions", "Network security"] },
    { area: "Storage Infrastructure", solutions: ["Storage arrays", "Backup systems", "Cloud storage", "Data protection"] }
  ];

  const benefits = [
    "Improved system reliability and uptime",
    "Enhanced performance and scalability",
    "Reduced operational costs",
    "Better security and compliance",
    "Simplified management and monitoring",
    "Future-ready infrastructure foundation"
  ];

  const technologies = [
    "VMware & Hyper-V",
    "Windows Server & Linux",
    "Cisco & Juniper Networks",
    "Dell EMC & NetApp Storage",
    "Microsoft SQL & Oracle",
    "Active Directory & LDAP"
  ];

  return (
    <>
      <Head>
        <title>IT Infrastructure Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT infrastructure services including network design, server management, storage solutions, and security infrastructure. Build a robust foundation with Zion Tech Group." />
        <meta name="keywords" content="IT infrastructure, network design, server management, storage solutions, security infrastructure, data center" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Server className="w-12 h-12 text-green-400 mr-3" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                IT Infrastructure
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Build a robust, scalable IT foundation that supports your business growth. 
              From network design to data center management, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
              <a
                href="/solutions"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Solutions
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Infrastructure Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end IT infrastructure solutions for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure Areas Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Infrastructure Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive coverage across all critical infrastructure components
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {infrastructureAreas.map((area, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                  <h3 className="text-xl font-semibold text-white mb-4">{area.area}</h3>
                  <ul className="space-y-2">
                    {area.solutions.map((solution, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center">
                        <ArrowRight className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Industry-leading technologies for enterprise-grade infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 text-center hover:border-green-500/50 transition-all duration-300">
                  <span className="text-gray-300 font-medium text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our Infrastructure Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Build a foundation that supports your business growth and digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your IT Foundation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how robust IT infrastructure can support your business growth 
              and digital transformation initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </a>
              <a
                href="/solutions"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Solutions
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITInfrastructure;
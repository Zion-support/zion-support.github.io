import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Server, Network, Database, Shield, Zap, Monitor, Wifi, Cloud } from 'lucide-react';
const ITInfrastructure: React.FC = () => {
  const infrastructureServices = [
    {
      title: "Network Infrastructure",
      description: "Design, implement, and maintain robust network solutions",
      features: ["Network Design", "Wireless Solutions", "VPN Implementation", "Network Security"],
      icon: Network
    },
    {
      title: "Server Management",
      description: "Comprehensive server infrastructure and management services",
      features: ["Server Setup", "Virtualization", "Performance Optimization", "Backup Solutions"],
      icon: Server
    },
    {
      title: "Storage Solutions",
      description: "Scalable storage infrastructure for growing businesses",
      features: ["Storage Design", "Data Backup", "Disaster Recovery", "Cloud Storage"],
      icon: Database
    },
    {
      title: "Security Infrastructure",
      description: "Multi-layered security infrastructure protection",
      features: ["Firewall Management", "Intrusion Detection", "Access Control", "Security Monitoring"],
      icon: Shield
    }
  ];
  const infrastructureAreas = [
    { area: "Hardware Infrastructure", solutions: ["Servers", "Storage systems", "Network equipment", "Workstations"] },
    { area: "Software Infrastructure", solutions: ["Operating systems", "Virtualization platforms", "Database systems", "Management tools"] },
    { area: "Network Infrastructure", solutions: ["LAN/WAN setup", "Wireless networks", "VPN solutions", "Network security"] },
    { area: "Storage Infrastructure", solutions: ["Storage arrays", "Backup systems", "Cloud storage", "Data protection"] }
  ];
  const keyFeatures = [
    { name: "High Availability", icon: "🔄", description: "99.9% uptime guarantee with redundancy" },
    { name: "Scalable Solutions", icon: "📈", description: "Infrastructure that grows with your business" },
    { name: "Proactive Monitoring", icon: "👁️", description: "24/7 monitoring and alerting" },
    { name: "Expert Support", icon: "👨‍💻", description: "Certified engineers and technicians" }
  ];
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="IT Infrastructure - Zion Tech Group"
        description="Build a robust and scalable IT infrastructure with our expert solutions and management services."
        keywords="IT infrastructure, server management, network design, data centers, infrastructure security"
        canonical="https://ziontechgroup.com/services/infrastructure"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Infrastructure
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build a solid foundation for your business with enterprise-grade IT infrastructure. 
              Our comprehensive services ensure reliability, scalability, and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Infrastructure Consultation
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
        {/* Infrastructure Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Infrastructure Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive solutions to build and maintain your IT foundation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {infrastructureServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Key Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Infrastructure
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Enterprise-grade solutions with unmatched reliability and support
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.name}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Infrastructure Areas */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Infrastructure Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive coverage across all infrastructure domains
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {infrastructureAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{area.area}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {area.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-center">
                        <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                        <span className="text-gray-300">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your IT Foundation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our infrastructure experts design and implement a robust IT foundation for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default ITInfrastructure;
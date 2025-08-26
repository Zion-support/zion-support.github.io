import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Server, 
  Network, 
  HardDrive, 
  Shield, 
  Cpu, 
  Database, 
  Cloud, 
  Lock,
  ArrowRight,
  CheckCircle,
  Settings,
  Monitor
} from 'lucide-react';

const ITInfrastructure: React.FC = () => {
  const infrastructureServices = [
    {
      title: "Network Infrastructure",
      description: "Design, implement, and maintain robust network solutions",
      features: ["Network Design", "Wireless Solutions", "VPN Implementation", "Network Security"],
      icon: "🌐"
    },
    {
      title: "Server Management",
      description: "Comprehensive server infrastructure and management services",
      features: ["Server Setup", "Virtualization", "Performance Optimization", "Backup Solutions"],
      icon: "🖥️"
    },
    {
      title: "Storage Solutions",
      description: "Scalable storage infrastructure for growing businesses",
      features: ["Storage Design", "Data Backup", "Disaster Recovery", "Cloud Storage"],
      icon: "💾"
    },
    {
      title: "Security Infrastructure",
      description: "Multi-layered security infrastructure protection",
      features: ["Firewall Management", "Intrusion Detection", "Access Control", "Security Monitoring"],
      icon: "🔒"
    }
  ];
  const infrastructureAreas = [
    { area: "Hardware Infrastructure", solutions: ["Servers", "Storage systems", "Network equipment", "Workstations"] },
    { area: "Software Infrastructure", solutions: ["Operating systems", "Virtualization platforms", "Database systems", "Management tools"] },
    { area: "Network Infrastructure", solutions: ["LAN/WAN setup", "Wireless networks", "VPN solutions", "Network security"] },
    { area: "Storage Infrastructure", solutions: ["Storage arrays", "Backup systems", "Cloud storage", "Data protection"] }
  ];
  return (
<>
      <Helmet>
        <title>IT Infrastructure — Zion Tech Group | Network & System Management</title>
        <meta name="description" content="Build robust IT infrastructure with Zion Tech Group. Network design, server management, storage solutions, and security infrastructure services."/>
        <meta property="og:title" content="IT Infrastructure — Zion Tech Group"/>
        <meta property="og:description" content="Leading IT infrastructure services including network design, server management, storage solutions, and security infrastructure."/>
        <meta property="og:url" content="https://ziontechgroup.com/services/it-infrastructure"/>
        <link rel="canonical" href="https://ziontechgroup.com/services/it-infrastructure"/>
      </Helmet>
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
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Get Infrastructure Consultation
              </Link>
              <Link to="/services" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
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
                <motion.div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Infrastructure Areas */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Infrastructure Areas We Cover
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                End-to-end infrastructure solutions across all critical areas
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {infrastructureAreas.map((area, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{area.area}</h3>
                  <div className="space-y-3">
                    {area.solutions.map((solution, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        {solution}
<<<<<<< HEAD
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
=======
                      </li>))}
                  </ul>
                </div>))}
            </div>
          </div>
        </section>
        {/* Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Infrastructure Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven expertise and cutting-edge technology for reliable infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Reliability</h3>
                <p className="text-gray-300">99.9% uptime guarantee with redundant systems</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Scalability</h3>
                <p className="text-gray-300">Grow your infrastructure as your business expands</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Security</h3>
                <p className="text-gray-300">Multi-layered security for comprehensive protection</p>
              </div>
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
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
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Start Your Infrastructure Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
</>
  );
};
<<<<<<< HEAD

export default ITInfrastructure;
=======
export default ITInfrastructure;</>);
};
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83

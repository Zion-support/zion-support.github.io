import React from 'react';
import { Link } from 'react-router-dom';

const Infrastructure: React.FC = () => {
  const infrastructureServices = [
    {
      title: "Network Management",
      description: "Comprehensive network infrastructure design, implementation, and management",
      features: ["Network Design", "Performance Monitoring", "Traffic Optimization", "Security Implementation"]
    },
    {
      title: "System Administration",
      description: "Expert system administration and server management services",
      features: ["Server Setup", "Performance Tuning", "Backup Management", "Disaster Recovery"]
    },
    {
      title: "Data Center Operations",
      description: "Professional data center management and optimization",
      features: ["Facility Management", "Power & Cooling", "Capacity Planning", "Maintenance Scheduling"]
    },
    {
      title: "Performance Optimization",
      description: "System and network performance analysis and optimization",
      features: ["Performance Monitoring", "Bottleneck Analysis", "Optimization Strategies", "Capacity Planning"]
    }
  ];

  const infrastructureComponents = [
    {
      component: "Servers & Storage",
      description: "High-performance servers and scalable storage solutions",
      benefits: ["High Availability", "Scalability", "Performance", "Reliability"]
    },
    {
      component: "Networking",
      description: "Robust network infrastructure for seamless connectivity",
      benefits: ["High Bandwidth", "Low Latency", "Security", "Redundancy"]
    },
    {
      component: "Security Systems",
      description: "Multi-layered security infrastructure protection",
      benefits: ["Threat Prevention", "Access Control", "Monitoring", "Compliance"]
    },
    {
      component: "Backup & Recovery",
      description: "Comprehensive data protection and disaster recovery",
      benefits: ["Data Safety", "Quick Recovery", "Business Continuity", "Peace of Mind"]
    }
  ];

  const supportLevels = [
    {
      level: "Basic Support",
      description: "Essential infrastructure monitoring and basic troubleshooting",
      features: ["24/7 Monitoring", "Basic Troubleshooting", "Monthly Reports", "Email Support"]
    },
    {
      level: "Standard Support",
      description: "Comprehensive support with proactive maintenance",
      features: ["Proactive Monitoring", "Advanced Troubleshooting", "Weekly Reports", "Phone Support"]
    },
    {
      level: "Premium Support",
      description: "Dedicated support team with rapid response times",
      features: ["Dedicated Engineer", "Rapid Response", "Daily Reports", "Priority Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Infrastructure
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build and maintain robust, scalable IT infrastructure that supports your business growth
            </p>
          </div>

          {/* Hero Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Foundation for Digital Success</h2>
                <p className="text-gray-300 mb-6">
                  Your IT infrastructure is the backbone of your business operations. Our expert team ensures your systems are reliable, secure, and optimized for peak performance.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">99.9% uptime guarantee for critical systems</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Proactive monitoring and maintenance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">Scalable solutions that grow with your business</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">🖥️</div>
                <p className="text-gray-300 text-lg">Robust Infrastructure Solutions</p>
              </div>
            </div>
          </div>

          {/* Infrastructure Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Infrastructure Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT infrastructure solutions designed for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {infrastructureServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
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
                </div>
              ))}
            </div>
          </div>

          {/* Infrastructure Components */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Infrastructure Components</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Every component of your infrastructure is designed for reliability and performance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {infrastructureComponents.map((component, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{component.component}</h3>
                  <p className="text-gray-300 mb-4">{component.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {component.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Levels */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Support & Maintenance</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support level that best fits your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportLevels.map((level, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border ${
                    index === 1 ? 'border-blue-400' : 'border-white/20'
                  }`}
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{level.level}</h3>
                  <p className="text-gray-300 mb-4">{level.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {level.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {index === 1 && (
                    <div className="text-center">
                      <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Infrastructure Process */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Infrastructure Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach to building and maintaining robust IT infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Assessment</h3>
                <p className="text-gray-300 text-sm">Evaluate current infrastructure and identify needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Design</h3>
                <p className="text-gray-300 text-sm">Create scalable infrastructure architecture</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                <p className="text-gray-300 text-sm">Build and deploy infrastructure components</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Maintenance</h3>
                <p className="text-gray-300 text-sm">Ongoing monitoring and optimization</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-6">Ready to Build Robust Infrastructure?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our infrastructure solutions can support your business growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;
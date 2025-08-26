import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f

const ITInfrastructure: React.FC = () => {
  const infrastructureServices = [
    {
      title: "Network Management",
<<<<<<< HEAD
      description: "Comprehensive network infrastructure design, implementation, and maintenance",
      features: ["Network Design", "Performance Optimization", "Security Implementation", "24/7 Monitoring"],
=======
      description: "Comprehensive network infrastructure design, implementation, and management",
      features: ["Network design", "Performance monitoring", "Traffic optimization", "Security implementation"],
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f
      icon: "🌐"
    },
    {
      title: "System Administration",
      description: "Expert management of servers, operating systems, and enterprise applications",
<<<<<<< HEAD
      features: ["Server Management", "OS Administration", "Application Support", "Performance Tuning"],
=======
      features: ["Server management", "OS administration", "Application deployment", "Performance tuning"],
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f
      icon: "🖥️"
    },
    {
      title: "Data Center Operations",
<<<<<<< HEAD
      description: "Professional data center management and optimization services",
      features: ["Facility Management", "Power & Cooling", "Hardware Maintenance", "Capacity Planning"],
=======
      description: "Efficient and secure data center management and optimization",
      features: ["Facility management", "Power & cooling", "Security systems", "Disaster recovery"],
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f
      icon: "🏢"
    },
    {
      title: "Performance Optimization",
<<<<<<< HEAD
      description: "System and network performance analysis and improvement",
      features: ["Performance Monitoring", "Bottleneck Analysis", "Optimization Strategies", "Capacity Planning"],
=======
      description: "Continuous monitoring and optimization of infrastructure performance",
      features: ["Capacity planning", "Load balancing", "Resource optimization", "Performance analytics"],
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f
      icon: "⚡"
    }
  ];

<<<<<<< HEAD
  const infrastructureFeatures = [
    { name: "High Availability", icon: "🔄", description: "99.9% uptime guarantee with redundancy" },
    { name: "Scalable Solutions", icon: "📈", description: "Infrastructure that grows with your business" },
    { name: "Proactive Monitoring", icon: "👁️", description: "24/7 monitoring and alerting" },
    { name: "Expert Support", icon: "👨‍💻", description: "Certified engineers and technicians" }
  ];

  return (
    <>
      <Helmet>
        <title>IT Infrastructure — Zion Tech Group | Network & System Management</title>
        <meta name="description" content="Optimize your IT infrastructure with Zion Tech Group's comprehensive management services. Network management, system administration, and data center operations." />
        <meta property="og:title" content="IT Infrastructure — Zion Tech Group" />
        <meta property="og:description" content="Leading IT infrastructure services including network management, system administration, and data center operations." />
        <meta property="og:url" content="https://ziontechgroup.com/services/infrastructure" />
        <link rel="canonical" href="https://ziontechgroup.com/services/infrastructure" />
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
              Build and maintain a robust, scalable IT infrastructure that supports your business growth. 
              Our expert team ensures your systems run efficiently and reliably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Infrastructure Assessment
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

        {/* Infrastructure Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Infrastructure Excellence
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Professional-grade infrastructure management and optimization
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {infrastructureFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.name}</h3>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Infrastructure Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive solutions to build, maintain, and optimize your IT infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {infrastructureServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Infrastructure Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven expertise and best practices to maximize your infrastructure investment
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Reliable Performance</h3>
                <p className="text-gray-300">Optimized systems that deliver consistent, high-performance results</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cost Effective</h3>
                <p className="text-gray-300">Optimize resources and reduce operational costs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Future Ready</h3>
                <p className="text-gray-300">Scalable solutions that adapt to your growing business needs</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our infrastructure services can improve your IT operations
            </p>
=======
  const infrastructureComponents = [
    {
      category: "Hardware Infrastructure",
      components: ["Servers & workstations", "Storage systems", "Network equipment", "Security appliances"]
    },
    {
      category: "Software Infrastructure",
      components: ["Operating systems", "Database systems", "Virtualization platforms", "Management tools"]
    },
    {
      category: "Network Infrastructure",
      components: ["LAN/WAN setup", "Wireless networks", "VPN solutions", "Network security"]
    },
    {
      category: "Storage Infrastructure",
      components: ["SAN/NAS systems", "Backup solutions", "Data archiving", "Disaster recovery"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
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
            Build, manage, and optimize your IT infrastructure for maximum performance and reliability
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
<<<<<<< HEAD
              Get Infrastructure Consultation
            </Link>
          </div>
        </section>
      </div>
    </>
=======
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
      </section>

      {/* Infrastructure Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Infrastructure Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive IT infrastructure solutions designed for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infrastructureServices.map((service, index) => (
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Components */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Infrastructure Components
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Holistic approach to managing all aspects of your IT infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infrastructureComponents.map((component, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{component.category}</h3>
                <ul className="space-y-2">
                  {component.components.map((item, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Management Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Management Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Systematic approach to infrastructure management and optimization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Assessment</h3>
              <p className="text-gray-300 text-sm">Evaluate current infrastructure and identify areas for improvement</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Planning</h3>
              <p className="text-gray-300 text-sm">Develop comprehensive infrastructure strategy and roadmap</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Implementation</h3>
              <p className="text-gray-300 text-sm">Execute infrastructure improvements and optimizations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Monitoring</h3>
              <p className="text-gray-300 text-sm">Continuous monitoring and performance optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Benefits of Professional Infrastructure Management
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your IT infrastructure for better performance and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Improved Performance</h3>
              <p className="text-gray-300">Optimized infrastructure for faster response times and better user experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enhanced Reliability</h3>
              <p className="text-gray-300">Reduced downtime and improved system availability</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cost Optimization</h3>
              <p className="text-gray-300">Efficient resource utilization and reduced operational costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Industry-leading infrastructure technologies and management tools
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "VMware", "Hyper-V", "Docker", "Kubernetes",
              "Cisco", "Juniper", "HP", "Dell",
              "Windows Server", "Linux", "Oracle", "SQL Server",
              "Nagios", "Zabbix", "SolarWinds", "PRTG"
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 text-center hover:border-white/40 transition-all duration-300"
              >
                <span className="text-gray-300 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our infrastructure management services can improve your IT performance and reliability
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
          >
            Get Infrastructure Assessment
          </Link>
        </div>
      </section>
    </div>
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f
  );
};

export default ITInfrastructure;
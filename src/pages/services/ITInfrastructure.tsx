import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Server, Network, Database, Cloud, Shield, Zap, Users, Globe } from 'lucide-react';
=======
import { Link } from 'react-router-dom';
import { 
  Server, 
  Database, 
  Network, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Globe,
  Cpu,
  BarChart3,
  Target,
  Rocket,
  Brain,
  Monitor,
  Key,
  Settings
} from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c

const ITInfrastructure = () => {
  const features = [
    {
      icon: Server,
      title: "Enterprise Server Management",
      description: "Comprehensive server infrastructure management including virtualization, clustering, and high availability solutions.",
      benefits: ["High availability", "Scalable architecture", "24/7 monitoring"]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Multi-cloud solutions including AWS, Azure, and Google Cloud with hybrid cloud integration capabilities.",
      benefits: ["Flexible deployment", "Cost optimization", "Global reach"]
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Advanced networking solutions including SD-WAN, network security, and performance optimization.",
      benefits: ["High performance", "Secure connectivity", "Reliable uptime"]
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Comprehensive data storage, backup, and recovery solutions with disaster recovery planning.",
      benefits: ["Data protection", "Business continuity", "Compliance ready"]
    }
  ];

  const services = [
    {
<<<<<<< HEAD
      icon: Server,
      title: "Server Management",
      description: "Comprehensive server infrastructure design, deployment, and ongoing management services."
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Robust network design, implementation, and optimization for reliable connectivity."
    },
    {
      icon: Database,
      title: "Database Systems",
      description: "Database design, administration, and optimization for optimal performance and reliability."
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Cloud migration, hybrid cloud solutions, and multi-cloud management strategies."
    },
    {
      icon: Shield,
      title: "Security Infrastructure",
      description: "Comprehensive security infrastructure including firewalls, VPNs, and access controls."
    },
    {
      icon: Zap,
      title: "Backup & Recovery",
      description: "Robust backup solutions and disaster recovery planning for business continuity."
=======
      title: "Infrastructure Design",
      description: "Custom infrastructure architecture designed for your specific business needs and growth plans.",
      icon: Settings
    },
    {
      title: "Migration Services",
      description: "Seamless migration from legacy systems to modern cloud-native infrastructure.",
      icon: Rocket
    },
    {
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization to ensure peak performance and efficiency.",
      icon: Zap
    },
    {
      title: "Security Integration",
      description: "Built-in security measures and compliance with industry standards and regulations.",
      icon: Shield
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance services for your infrastructure.",
      icon: Monitor
    },
    {
      title: "Scalability Planning",
      description: "Future-proof infrastructure that grows with your business needs.",
      icon: BarChart3
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
    }
  ];

  const technologies = [
    "Virtualization (VMware, Hyper-V)",
    "Container Orchestration (Kubernetes)",
    "Software-Defined Networking (SDN)",
    "Storage Area Networks (SAN)",
    "Load Balancing & Clustering",
    "Backup & Disaster Recovery",
    "Monitoring & Analytics",
    "Automation & Orchestration"
  ];

  const benefits = [
<<<<<<< HEAD
    "Improved system reliability and uptime",
    "Enhanced performance and scalability",
    "Reduced operational costs and complexity",
    "Better security and compliance",
    "24/7 monitoring and support",
    "Future-ready infrastructure design"
  ];

  const solutions = [
    "Enterprise Data Centers",
    "Hybrid Cloud Environments",
    "Network Security & Firewalls",
    "Storage & Backup Solutions",
    "Virtualization & Containers",
    "Monitoring & Management Tools"
=======
    {
      title: "Operational Efficiency",
      description: "Streamlined operations with automated processes and optimized workflows.",
      icon: Zap
    },
    {
      title: "Cost Optimization",
      description: "Reduce infrastructure costs through virtualization and cloud optimization.",
      icon: BarChart3
    },
    {
      title: "Business Continuity",
      description: "Ensure your business operations continue uninterrupted with reliable infrastructure.",
      icon: Shield
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead with modern, scalable infrastructure that supports innovation.",
      icon: Rocket
    }
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 text-white">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-full">
                <Server className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              IT Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Build a robust, scalable, and secure IT foundation that supports your business growth and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                Build Infrastructure
              </button>
              <button className="px-8 py-4 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
                Get Assessment
              </button>
            </div>
          </motion.div>
=======
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-6">
              IT Infrastructure Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Build a robust, scalable, and secure IT foundation that powers your business growth 
              and enables digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-400 hover:to-blue-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-green-500/30"
              >
                Build Infrastructure
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-green-400/50 text-green-400 rounded-lg hover:bg-green-400/20 transition-all duration-300 text-lg font-semibold"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Infrastructure Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-40 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-green-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-1000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Infrastructure Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive IT infrastructure solutions provide the foundation for modern, 
              scalable, and secure business operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-green-400">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
        </div>
      </section>

      {/* Services Section */}
<<<<<<< HEAD
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Infrastructure Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT infrastructure solutions designed to modernize and optimize your technology foundation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg w-fit mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Infrastructure Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end infrastructure services designed to build, optimize, and maintain your IT foundation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Infrastructure Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of a well-designed and managed IT infrastructure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-gray-700/50 rounded-lg p-4 hover:bg-gray-600/50 transition-all duration-300"
              >
                <Zap className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-200">{benefit}</span>
              </motion.div>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Infrastructure?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our infrastructure solutions deliver reliability, performance, and scalability for your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Solutions Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Infrastructure Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored infrastructure solutions for businesses of all sizes and industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-all duration-300"
              >
                <Globe className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <span className="text-gray-200 font-medium">{solution}</span>
              </motion.div>
=======
      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built on industry-leading technologies and best practices for enterprise infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-green-400 text-sm font-medium">{tech}</div>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you create a robust, scalable, and secure IT foundation for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                Start Building
              </button>
              <button className="px-8 py-4 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our IT infrastructure solutions can support your business growth and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-400 hover:to-blue-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-green-500/30"
            >
              Start Planning
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-green-400/50 text-green-400 rounded-lg hover:bg-green-400/20 transition-all duration-300 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
        </div>
      </section>
    </div>
  );
};

export default ITInfrastructure;
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Network, 
  Database, 
  Shield, 
  Zap, 
  TrendingUp,
  Users,
  Globe,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Monitor,
  HardDrive,
  Wifi,
  Cpu
} from 'lucide-react';

const ITInfrastructure: React.FC = () => {
  const infrastructureServices = [
    {
      title: 'Network Infrastructure',
      description: 'Design, implementation, and management of enterprise network solutions',
      icon: <Network className="w-8 h-8" />,
      features: ['Network Design', 'Wireless Solutions', 'VPN Implementation', 'Network Security']
    },
    {
      title: 'Server Management',
      description: 'Comprehensive server infrastructure and management services',
      icon: <Server className="w-8 h-8" />,
      features: ['Server Deployment', 'Performance Optimization', 'Backup & Recovery', '24/7 Monitoring']
    },
    {
      title: 'Data Center Solutions',
      description: 'Modern data center design and optimization strategies',
      icon: <HardDrive className="w-8 h-8" />,
      features: ['Data Center Design', 'Power & Cooling', 'Security Systems', 'Disaster Recovery']
    },
    {
      title: 'Storage Solutions',
      description: 'Scalable storage infrastructure and data management',
      icon: <Database className="w-8 h-8" />,
      features: ['SAN/NAS Implementation', 'Data Archiving', 'Backup Solutions', 'Storage Virtualization']
    }
  ];

  const infrastructureTypes = [
    { name: 'On-Premises', description: 'Traditional infrastructure within your facilities' },
    { name: 'Hybrid Cloud', description: 'Combination of on-premises and cloud solutions' },
    { name: 'Cloud-Native', description: 'Modern cloud-first infrastructure approach' },
    { name: 'Edge Computing', description: 'Distributed computing at the network edge' }
  ];

  const benefits = [
    {
      title: 'Improved Performance',
      description: 'Optimized infrastructure for better system performance',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Enhanced Reliability',
      description: 'Robust infrastructure with high availability',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Scalability',
      description: 'Flexible infrastructure that grows with your business',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Cost Efficiency',
      description: 'Optimized infrastructure reducing operational costs',
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  const technologies = [
    { name: 'VMware', category: 'Virtualization' },
    { name: 'Hyper-V', category: 'Virtualization' },
    { name: 'Cisco', category: 'Networking' },
    { name: 'Juniper', category: 'Networking' },
    { name: 'Dell EMC', category: 'Storage' },
    { name: 'NetApp', category: 'Storage' },
    { name: 'Windows Server', category: 'Operating Systems' },
    { name: 'Linux', category: 'Operating Systems' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            IT
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
              Infrastructure
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Build a robust, scalable, and secure IT foundation that powers your business growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Infrastructure Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our IT Infrastructure Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive infrastructure solutions designed for modern business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infrastructureServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-xl mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Infrastructure Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible infrastructure solutions to meet your specific business requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infrastructureTypes.map((type, index) => (
              <motion.div
                key={type.name}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                <p className="text-gray-300 text-sm">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technologies & Platforms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry-leading technologies and platforms we specialize in
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05 * index }}
                whileHover={{ y: -3 }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our IT Infrastructure Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience reliable, scalable, and secure infrastructure that drives business success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-3xl p-12 text-center border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your IT Foundation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our infrastructure solutions can support your business growth and digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/services"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ITInfrastructure;
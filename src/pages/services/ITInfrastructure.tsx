import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Network, 
  Database, 
  Shield, 
  Zap, 
  Cpu, 
  HardDrive,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Settings,
  Lock,
  RefreshCw,
  Globe
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const infrastructureServices = [
  {
    icon: Server,
    title: 'Server Management',
    description: 'Comprehensive server infrastructure design, deployment, and ongoing management.',
    features: ['Server Provisioning', 'Performance Optimization', 'Monitoring & Maintenance', 'Disaster Recovery']
  },
  {
    icon: Network,
    title: 'Network Infrastructure',
    description: 'Design and implement robust network architectures for optimal performance and security.',
    features: ['Network Design', 'Security Implementation', 'Performance Tuning', '24/7 Monitoring']
  },
  {
    icon: Database,
    title: 'Database Systems',
    description: 'Scalable database solutions with high availability and performance optimization.',
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'High Availability']
  },
  {
    icon: Shield,
    title: 'Security Infrastructure',
    description: 'Multi-layered security solutions to protect your IT infrastructure.',
    features: ['Firewall Configuration', 'Intrusion Detection', 'Access Control', 'Security Audits']
  },
  {
    icon: Zap,
    title: 'Power & Cooling',
    description: 'Reliable power systems and environmental controls for critical infrastructure.',
    features: ['UPS Systems', 'Generator Backup', 'Climate Control', 'Environmental Monitoring']
  },
  {
    icon: HardDrive,
    title: 'Storage Solutions',
    description: 'Scalable storage infrastructure with data protection and redundancy.',
    features: ['SAN/NAS Design', 'Data Replication', 'Backup Systems', 'Storage Optimization']
  }
];

const infrastructureAreas = [
  {
    area: 'Data Center Design',
    solutions: ['Facility Planning', 'Power Distribution', 'Cooling Systems', 'Security Systems']
  },
  {
    area: 'Network Architecture',
    solutions: ['LAN/WAN Design', 'Wireless Networks', 'VPN Solutions', 'Load Balancing']
  },
  {
    area: 'Server Infrastructure',
    solutions: ['Physical Servers', 'Virtualization', 'Cloud Integration', 'Performance Tuning']
  },
  {
    area: 'Storage & Backup',
    solutions: ['Primary Storage', 'Backup Systems', 'Disaster Recovery', 'Data Archiving']
  }
];

const benefits = [
  'Reduce infrastructure costs by 25-40%',
  'Improve system reliability and uptime',
  'Enable rapid scaling and flexibility',
  'Enhance security and compliance',
  'Optimize performance and efficiency',
  'Simplify management and maintenance'
];

const technologies = [
  { name: 'VMware', description: 'Enterprise virtualization and cloud infrastructure' },
  { name: 'Cisco', description: 'Networking and security solutions' },
  { name: 'Dell EMC', description: 'Server and storage infrastructure' },
  { name: 'Microsoft', description: 'Windows Server and Azure integration' },
  { name: 'Linux', description: 'Open-source server and infrastructure solutions' },
  { name: 'AWS/Azure', description: 'Hybrid cloud infrastructure integration' }
];

export default function ITInfrastructure() {
  return (
    <>
      <SEO 
        title="IT Infrastructure Services | Zion Tech Group"
        description="Build robust, scalable IT infrastructure with Zion Tech Group. Server management, network design, database systems, and security solutions for enterprise-grade reliability."
        canonical="https://ziontechgroup.com/services/infrastructure"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Server className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Infrastructure</span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Build robust, scalable IT infrastructure that supports your business growth. 
                From servers to networks, we provide comprehensive infrastructure solutions.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="btn-primary px-8 py-3 text-lg font-semibold"
                >
                  Get Consultation
                </a>
                <a 
                  href="#services" 
                  className="btn-outline-white px-8 py-3 text-lg font-semibold"
                >
                  View Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Infrastructure Services
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Comprehensive IT infrastructure solutions designed to provide reliability, 
                performance, and scalability for your business operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {infrastructureServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure Areas Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Infrastructure Solutions
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Multi-layered approach to building robust IT infrastructure that 
                supports your business needs and growth objectives.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {infrastructureAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{area.area}</h3>
                  <ul className="space-y-2">
                    {area.solutions.map((solution, idx) => (
                      <li key={idx} className="text-zion-slate-light flex items-center">
                        <span className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Infrastructure Services?
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Proven expertise and cutting-edge technology for reliable infrastructure 
                that supports your business success.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Reliability</h3>
                <p className="text-zion-slate-light">99.9% uptime guarantee with redundant systems</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Scalability</h3>
                <p className="text-zion-slate-light">Grow your infrastructure as your business expands</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Security</h3>
                <p className="text-zion-slate-light">Multi-layered security for comprehensive protection</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technologies & Partners
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                We work with industry-leading technology partners to deliver 
                enterprise-grade infrastructure solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-zion-slate-light text-sm">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Implementation Process
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Our systematic approach ensures successful infrastructure implementation 
                with minimal disruption to your operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Assess</h3>
                <p className="text-zion-slate-light text-sm">
                  Evaluate current infrastructure and identify improvement opportunities
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Design</h3>
                <p className="text-zion-slate-light text-sm">
                  Create comprehensive infrastructure architecture and implementation plan
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Implement</h3>
                <p className="text-zion-slate-light text-sm">
                  Deploy infrastructure components with minimal business disruption
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Optimize</h3>
                <p className="text-zion-slate-light text-sm">
                  Continuous monitoring and performance optimization
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Build Your Infrastructure?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how our infrastructure services can support your business growth 
                and provide the foundation for your success.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="btn-white px-8 py-3 text-lg font-semibold"
                >
                  Get Infrastructure Consultation
                </a>
                <a 
                  href="/services" 
                  className="btn-outline-white px-8 py-3 text-lg font-semibold"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
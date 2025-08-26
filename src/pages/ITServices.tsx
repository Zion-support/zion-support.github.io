import React from 'react';
import { motion } from 'framer-motion';
import { Server, Shield, Cloud, Database, Network, Code, Users, Globe, Zap, Building2, Cpu, Lock } from 'lucide-react';

const ITServicesPage = () => {
  const services = [
    {
      name: 'Infrastructure Solutions',
      description: 'Enterprise-grade infrastructure design and implementation',
      icon: Server,
      features: ['Data Center Design', 'Server Management', 'Network Architecture'],
      price: 'Custom Pricing',
      color: 'from-zion-cyan to-zion-blue'
    },
    {
      name: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation',
      icon: Code,
      features: ['Process Automation', 'Legacy Migration', 'Change Management'],
      price: 'Custom Pricing',
      color: 'from-zion-purple to-zion-pink'
    },
    {
      name: 'Cloud Services',
      description: 'Multi-cloud strategy, migration, and management',
      icon: Cloud,
      features: ['Cloud Strategy', 'Migration Services', 'Optimization'],
      price: 'Custom Pricing',
      color: 'from-zion-green to-zion-cyan'
    },
    {
      name: 'Cybersecurity',
      description: 'Comprehensive security and compliance solutions',
      icon: Shield,
      features: ['Security Audits', 'Threat Detection', 'Compliance'],
      price: 'Custom Pricing',
      color: 'from-zion-orange to-zion-red'
    },
    {
      name: 'Data Management',
      description: 'Data strategy, governance, and analytics',
      icon: Database,
      features: ['Data Strategy', 'Governance', 'Analytics'],
      price: 'Custom Pricing',
      color: 'from-zion-blue to-zion-purple'
    },
    {
      name: 'Network Solutions',
      description: 'Advanced networking and connectivity solutions',
      icon: Network,
      features: ['Network Design', 'Security', 'Monitoring'],
      price: 'Custom Pricing',
      color: 'from-zion-pink to-zion-orange'
    }
  ];

  const solutions = [
    {
      category: 'Enterprise',
      icon: Building2,
      services: ['Infrastructure Design', 'Digital Transformation', 'Cloud Migration'],
      description: 'Comprehensive solutions for large enterprises'
    },
    {
      category: 'SMB',
      icon: Users,
      services: ['IT Consulting', 'Managed Services', 'Security Solutions'],
      description: 'Scalable solutions for growing businesses'
    },
    {
      category: 'Government',
      icon: Shield,
      services: ['Compliance', 'Security', 'Infrastructure'],
      description: 'Secure solutions meeting government standards'
    },
    {
      category: 'Healthcare',
      icon: Cpu,
      services: ['HIPAA Compliance', 'Patient Data Security', 'Telemedicine'],
      description: 'Healthcare-specific IT solutions'
    }
  ];

  const technologies = [
    { name: 'AWS', icon: Cloud, color: 'text-orange-500' },
    { name: 'Azure', icon: Cloud, color: 'text-blue-500' },
    { name: 'Google Cloud', icon: Cloud, color: 'text-green-500' },
    { name: 'Docker', icon: Code, color: 'text-blue-400' },
    { name: 'Kubernetes', icon: Code, color: 'text-blue-600' },
    { name: 'Terraform', icon: Code, color: 'text-purple-500' },
    { name: 'Python', icon: Code, color: 'text-yellow-500' },
    { name: 'React', icon: Code, color: 'text-cyan-400' },
    { name: 'Node.js', icon: Code, color: 'text-green-400' },
    { name: 'PostgreSQL', icon: Database, color: 'text-blue-300' },
    { name: 'MongoDB', icon: Database, color: 'text-green-500' },
    { name: 'Redis', icon: Database, color: 'text-red-500' }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Server className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              IT Services
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Comprehensive IT services and solutions designed to transform your business. 
              From infrastructure to digital transformation, we've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Get Started
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              End-to-end IT solutions tailored to your business needs and objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        <span className="text-sm text-zion-slate-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-semibold text-zion-cyan mb-4">{service.price}</div>
                    <button className="btn-futuristic w-full">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions by Category */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Solutions by Category
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Tailored solutions for different business types and industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{solution.category}</h3>
                </div>
                
                <p className="text-zion-slate-light mb-6">{solution.description}</p>
                
                <div className="space-y-3 mb-6">
                  {solution.services.map((service) => (
                    <div key={service} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span className="text-zion-slate-light">{service}</span>
                    </div>
                  ))}
                </div>
                
                <button className="btn-futuristic">
                  Explore {solution.category} Solutions
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              We work with cutting-edge technologies to deliver the best solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-zion-cyan/40 transition-all duration-300">
                  <tech.icon className={`w-8 h-8 ${tech.color}`} />
                </div>
                <span className="text-sm text-zion-slate-light group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              A proven methodology for delivering successful IT solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Discovery</h3>
              <p className="text-zion-slate-light">Understanding your needs and objectives</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Design</h3>
              <p className="text-zion-slate-light">Creating the optimal solution architecture</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Implementation</h3>
              <p className="text-zion-slate-light">Building and deploying your solution</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Support</h3>
              <p className="text-zion-slate-light">Ongoing maintenance and optimization</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT services can help your business grow and succeed 
              in the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Get Free Consultation
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                View Case Studies
              </button>
              <button className="btn-futuristic px-8 py-4 text-lg">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
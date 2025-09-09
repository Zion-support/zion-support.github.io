import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Zap, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Globe,
  Shield,
  Cloud,
  BarChart3,
  Cpu,
  Users,
  Rocket,
  Brain,
  TrendingUp,
  Clock
} from 'lucide-react';

const OnsiteSupport = () => {
  const features = [
    {
      title: 'Hardware Support',
      description: 'Comprehensive hardware troubleshooting and repair services.',
      icon: Cpu,
      benefits: ['Diagnostics', 'Repair Services', 'Hardware Upgrades', 'Preventive Maintenance']
    },
    {
      title: 'Software Support',
      description: 'Software installation, configuration, and troubleshooting.',
      icon: Cloud,
      benefits: ['Software Installation', 'Configuration', 'Troubleshooting', 'Updates & Patches']
    },
    {
      title: 'Network Support',
      description: 'Network infrastructure support and troubleshooting.',
      icon: Globe,
      benefits: ['Network Diagnostics', 'Connectivity Issues', 'Performance Optimization', 'Security Configuration']
    },
    {
      title: 'Emergency Response',
      description: 'Rapid response to critical IT issues and emergencies.',
      icon: Clock,
      benefits: ['24/7 Availability', 'Rapid Response', 'Critical Issue Resolution', 'Business Continuity']
    }
  ];

  const benefits = [
    {
      title: 'Immediate Response',
      description: 'Get immediate support when you need it most.',
      icon: Clock
    },
    {
      title: 'Expert Technicians',
      description: 'Access to certified IT professionals with extensive experience.',
      icon: Users
    },
    {
      title: 'Reduced Downtime',
      description: 'Minimize business disruption with fast issue resolution.',
      icon: Zap
    },
    {
      title: 'Cost Effective',
      description: 'Reduce IT support costs and improve system reliability.',
      icon: Target
    }
  ];

  const services = [
    'Hardware Troubleshooting',
    'Software Installation',
    'Network Configuration',
    'Security Audits',
    'Data Recovery',
    'System Optimization',
    'User Training',
    'Preventive Maintenance'
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full px-6 py-3 mb-8">
              <Wrench className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">Onsite Support</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Onsite
              <span className="text-gradient"> Support</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Get immediate, professional IT support right at your location. Our expert 
              technicians provide comprehensive onsite services to keep your business running.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Get Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Schedule Service
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Onsite Support Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our comprehensive onsite support services provide immediate solutions to 
              your IT challenges, keeping your business operations running smoothly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                
                <p className="text-zion-slate-light mb-6 text-lg">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Onsite Support?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our onsite support services deliver immediate value through fast response 
              times, expert technicians, and comprehensive issue resolution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive onsite IT support services designed to resolve your 
              technology challenges quickly and efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">{service}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Immediate IT Support?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Contact us today to schedule onsite IT support or get immediate assistance 
              for your technology challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Get Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OnsiteSupport;
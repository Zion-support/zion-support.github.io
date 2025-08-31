import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Users, 
  HardDrive, 
  TrendingUp, 
  Building2, 
  Globe,
  Cpu,
  Database,
  Cloud,
  Lock,
  Zap,
  Target,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Solutions = () => {
  const industrySolutions = [
    {
      title: 'Healthcare Technology',
      description: 'AI-powered healthcare solutions for hospitals, clinics, and medical research',
      icon: Users,
      href: '/solutions/healthcare',
      features: ['AI Diagnostics', 'Patient Data Analytics', 'Telemedicine Platforms', 'Medical Imaging AI']
    },
    {
      title: 'Financial Services',
      description: 'Advanced fintech solutions for banks, insurance, and investment firms',
      icon: Shield,
      href: '/solutions/financial',
      features: ['AI Trading Platforms', 'Risk Management', 'Fraud Detection', 'Blockchain Solutions']
    },
    {
      title: 'Manufacturing',
      description: 'Smart manufacturing and Industry 4.0 solutions',
      icon: Cpu,
      href: '/solutions/manufacturing',
      features: ['IoT Integration', 'Predictive Maintenance', 'Quality Control AI', 'Supply Chain Optimization']
    },
    {
      title: 'Government & Defense',
      description: 'Secure solutions for government agencies and defense contractors',
      icon: Building2,
      href: '/solutions/government',
      features: ['Cybersecurity', 'Data Analytics', 'AI Surveillance', 'Secure Communications']
    },
    {
      title: 'Education',
      description: 'Digital transformation solutions for educational institutions',
      icon: Globe,
      href: '/solutions/education',
      features: ['Learning Management Systems', 'AI Tutoring', 'Virtual Classrooms', 'Student Analytics']
    },
    {
      title: 'Retail & E-commerce',
      description: 'Modern retail solutions for online and brick-and-mortar stores',
      icon: Target,
      href: '/solutions/retail',
      features: ['AI Customer Service', 'Inventory Management', 'Personalization', 'Analytics Dashboard']
    }
  ];

  const technologySolutions = [
    {
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions and hybrid platforms',
      icon: Brain,
      href: '/solutions/quantum-computing',
      features: ['Quantum Algorithms', 'Hybrid Systems', 'Quantum Security', 'Research Platforms']
    },
    {
      title: 'Blockchain & Web3',
      description: 'Decentralized solutions and blockchain infrastructure',
      icon: Database,
      href: '/solutions/blockchain',
      features: ['Smart Contracts', 'DeFi Platforms', 'NFT Solutions', 'Blockchain Analytics']
    },
    {
      title: 'Space Technology',
      description: 'Innovative solutions for space exploration and satellite systems',
      icon: Globe,
      href: '/solutions/space-technology',
      features: ['Satellite Communications', 'Space Data Analytics', 'Mission Planning', 'Ground Control Systems']
    },
    {
      title: 'Green Technology',
      description: 'Sustainable technology solutions for environmental challenges',
      icon: Zap,
      href: '/solutions/green-technology',
      features: ['Energy Management', 'Carbon Tracking', 'Sustainable Computing', 'Environmental Monitoring']
    }
  ];

  const benefits = [
    'AI-Powered Automation',
    'Scalable Architecture',
    '24/7 Support',
    'Custom Development',
    'Cloud-Native Solutions',
    'Security-First Approach'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Enterprise
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge technology solutions designed for the modern enterprise. 
              From AI-powered automation to quantum computing, we deliver results that drive growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored solutions designed for your industry's unique challenges and opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={solution.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group-hover:translate-x-1"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-20 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Emerging Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay ahead of the curve with our cutting-edge technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 text-lg">{solution.description}</p>
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={solution.href}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 font-semibold group-hover:translate-x-1"
                >
                  Explore Solution <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver enterprise-grade solutions with unmatched expertise and support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our solutions can drive innovation and growth for your organization
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Building2,
  Shield,
  Heart,
  Factory,
  Landmark,
  ShoppingCart,
  Brain,
  Cloud,
  Cpu,
  Zap,
  Globe,
  Users,
  Target,
  TrendingUp
} from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      category: 'Enterprise Solutions',
      icon: Building2,
      description: 'Comprehensive enterprise-grade solutions for large organizations',
      solutions: [
        { name: 'Digital Transformation', href: '/digital-transformation', description: 'End-to-end digital transformation services' },
        { name: 'Cloud Solutions', href: '/cloud-solutions', description: 'Scalable cloud infrastructure and migration' },
        { name: 'AI-Powered Analytics', href: '/ai-services', description: 'Advanced AI analytics and business intelligence' },
        { name: 'Cybersecurity Suite', href: '/services/ai-cybersecurity-platform', description: 'Comprehensive security solutions' }
      ]
    },
    {
      category: 'Industry Solutions',
      icon: Factory,
      description: 'Specialized solutions for specific industries',
      solutions: [
        { name: 'Healthcare Technology', href: '/services/ai-healthcare-platform', description: 'AI-powered healthcare solutions' },
        { name: 'Financial Services', href: '/services/ai-financial-trading-platform', description: 'Fintech and trading platforms' },
        { name: 'Manufacturing', href: '/industry-solutions', description: 'Smart manufacturing and Industry 4.0' },
        { name: 'Retail & E-commerce', href: '/industry-solutions', description: 'Digital retail transformation' }
      ]
    },
    {
      category: 'AI & Emerging Tech',
      icon: Brain,
      description: 'Cutting-edge AI and emerging technology solutions',
      solutions: [
        { name: 'AI Supply Chain', href: '/services/ai-supply-chain-optimization', description: 'AI-powered supply chain optimization' },
        { name: 'Quantum AI Platform', href: '/services/ai-quantum-hybrid-platform', description: 'Quantum-AI hybrid computing' },
        { name: 'IoT & Edge Computing', href: '/services/ai-iot-edge-computing-platform', description: 'Smart IoT solutions' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', description: 'Enterprise blockchain' }
      ]
    },
    {
      category: 'Micro SaaS & Custom',
      icon: Zap,
      description: 'Custom software solutions and micro SaaS platforms',
      solutions: [
        { name: 'Micro SaaS Platform', href: '/micro-saas', description: 'Custom SaaS solutions' },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', description: 'Intelligent process automation' },
        { name: 'Custom CRM Solutions', href: '/services/micro-crm', description: 'Tailored customer relationship management' },
        { name: 'Project Management', href: '/services/ai-project-management-platform', description: 'AI-powered project management' }
      ]
    }
  ];

  const features = [
    {
      icon: Target,
      title: 'Industry Expertise',
      description: 'Deep domain knowledge across multiple industries'
    },
    {
      icon: Users,
      title: 'Dedicated Teams',
      description: 'Specialized teams for each solution area'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security and compliance'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Enterprise
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {' '}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business, 
              drive innovation, and accelerate growth across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Solution Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From enterprise transformation to industry-specific solutions, 
              we provide the technology foundation your business needs to succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                    <p className="text-gray-400">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.solutions.map((solution) => (
                    <Link
                      key={solution.name}
                      to={solution.href}
                      className="block p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {solution.name}
                          </h4>
                          <p className="text-sm text-gray-400">{solution.description}</p>
                        </div>
                        <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center group-hover:bg-cyan-500 transition-all duration-200">
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine deep industry expertise with cutting-edge technology 
              to deliver solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can help you achieve your business goals 
              and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
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

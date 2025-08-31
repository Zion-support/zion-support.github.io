import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2,
  Building,
  Cloud,
  Factory,
  Users,
  Database,
  Shield,
  BarChart3,
  Workflow,
  Zap,
  Globe,
  Lock,
  Cpu,
  Server,
  Network,
  Brain,
  Rocket,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  DollarSign,
  Clock,
  MessageCircle,
  FileText,
  Smartphone,
  CreditCard,
  ShoppingCart,
  Heart,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Warehouse,
  Store,
  Bank,
  Hospital,
  School,
  University,
  Leaf,
  Zap as ZapIcon
} from 'lucide-react';

export default function Solutions() {
  const solutionCategories = [
    {
      title: 'Enterprise Solutions',
      description: 'Large-scale business solutions for enterprise organizations',
      icon: Building2,
      href: '/solutions/enterprise',
      color: 'from-blue-500 to-indigo-600',
      features: [
        'AI-powered business intelligence',
        'Cloud infrastructure',
        'Cybersecurity suite',
        'Data analytics platform',
        'Workflow automation',
        'Enterprise integration'
      ]
    },
    {
      title: 'SMB Solutions',
      description: 'Affordable solutions for small and medium businesses',
      icon: Building,
      href: '/solutions/smb',
      color: 'from-green-500 to-emerald-600',
      features: [
        'AI-powered business tools',
        'Cloud business suite',
        'Cybersecurity essentials',
        'Business intelligence',
        'Workflow automation',
        'E-commerce solutions'
      ]
    },
    {
      title: 'Industry Solutions',
      description: 'Specialized solutions for specific industry sectors',
      icon: Factory,
      href: '/solutions/industries',
      color: 'from-purple-500 to-pink-600',
      features: [
        'Financial services',
        'Healthcare',
        'Manufacturing',
        'Retail & E-commerce',
        'Technology',
        'Energy & Transportation'
      ]
    },
    {
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud infrastructure and services',
      icon: Cloud,
      href: '/solutions/cloud',
      color: 'from-cyan-500 to-blue-600',
      features: [
        'Cloud migration',
        'Kubernetes orchestration',
        'Serverless architecture',
        'Multi-cloud management',
        'Cloud security',
        'DevOps automation'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Scalable',
      description: 'Solutions that grow with your business',
      icon: TrendingUp
    },
    {
      title: 'Secure',
      description: 'Enterprise-grade security and compliance',
      icon: Shield
    },
    {
      title: 'Efficient',
      description: 'Optimized processes and workflows',
      icon: Zap
    },
    {
      title: 'Innovative',
      description: 'Cutting-edge technology solutions',
      icon: Rocket
    }
  ];

  const industries = [
    'Financial Services',
    'Healthcare',
    'Manufacturing',
    'Retail & E-commerce',
    'Technology',
    'Energy',
    'Transportation',
    'Education'
  ];

  const technologies = [
    'Artificial Intelligence',
    'Machine Learning',
    'Cloud Computing',
    'Cybersecurity',
    'Data Analytics',
    'IoT & Edge Computing',
    'Blockchain',
    'Quantum Computing'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Business
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-green-500 bg-clip-text text-transparent"> Solutions</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive technology solutions designed to transform your business. From AI-powered 
            automation to secure cloud infrastructure, we provide the tools you need to succeed.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/comprehensive-pricing-guide-2025"
              className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Solution Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the solution category that best fits your business needs and requirements. 
              Each category offers specialized services and expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutionCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={category.href}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-lg"
                >
                  <span>Explore {category.title}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver solutions that provide measurable business value, operational efficiency, 
              and competitive advantage across all industries and business sizes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Industries */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">Industries We Serve</h3>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div
                    key={industry}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                      <span className="text-white group-hover:text-cyan-400 transition-colors">
                        {industry}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">Technologies We Use</h3>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((technology, index) => (
                  <div
                    key={technology}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-white group-hover:text-blue-400 transition-colors">
                        {technology}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-green-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our comprehensive solutions can drive innovation, 
              efficiency, and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                <span>View Case Studies</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building,
  Users,
  Database,
  Shield,
  Cloud,
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
  Smartphone,
  CreditCard,
  ShoppingCart,
  FileText
} from 'lucide-react';

export default function SMBSolutions() {
  const solutions = [
    {
      title: 'AI-Powered Business Tools',
      description: 'Affordable AI solutions designed for small and medium businesses',
      icon: Brain,
      features: [
        'AI content creation',
        'Customer service automation',
        'Marketing optimization',
        'Data analysis tools',
        'Process automation'
      ],
      href: '/services/ai-content-creation'
    },
    {
      title: 'Cloud Business Suite',
      description: 'Scalable cloud solutions that grow with your business',
      icon: Cloud,
      features: [
        'Cloud storage and backup',
        'Collaboration tools',
        'Business applications',
        'Scalable infrastructure',
        'Cost optimization'
      ],
      href: '/services/cloud-devops'
    },
    {
      title: 'Cybersecurity Essentials',
      description: 'Essential security solutions for business protection',
      icon: Shield,
      features: [
        'Virus protection',
        'Firewall security',
        'Data backup',
        'Employee training',
        'Security monitoring'
      ],
      href: '/services/cybersecurity'
    },
    {
      title: 'Business Intelligence',
      description: 'Data-driven insights to make better business decisions',
      icon: BarChart3,
      features: [
        'Sales analytics',
        'Customer insights',
        'Performance tracking',
        'Financial reporting',
        'Market analysis'
      ],
      href: '/services/data-analytics'
    },
    {
      title: 'Workflow Automation',
      description: 'Streamline operations and improve efficiency',
      icon: Workflow,
      features: [
        'Process automation',
        'Task management',
        'Document workflows',
        'Integration tools',
        'Performance metrics'
      ],
      href: '/services/ai-workflow-orchestrator'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online business solutions',
      icon: ShoppingCart,
      features: [
        'Online store setup',
        'Payment processing',
        'Inventory management',
        'Customer management',
        'Marketing tools'
      ],
      href: '/services/ecommerce-solutions'
    }
  ];

  const benefits = [
    {
      title: 'Affordable',
      description: 'Cost-effective solutions for growing businesses',
      icon: DollarSign
    },
    {
      title: 'Scalable',
      description: 'Grow with your business needs',
      icon: TrendingUp
    },
    {
      title: 'Easy to Use',
      description: 'Simple interfaces and quick setup',
      icon: Zap
    },
    {
      title: 'Support',
      description: 'Dedicated support for your business',
      icon: MessageCircle
    }
  ];

  const businessTypes = [
    'Retail & E-commerce',
    'Professional Services',
    'Healthcare',
    'Manufacturing',
    'Restaurants',
    'Real Estate',
    'Consulting',
    'Technology Startups'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SMB
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"> Solutions</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Powerful, affordable technology solutions designed specifically for small and medium businesses. 
            Level the playing field with enterprise-grade tools at SMB prices.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/comprehensive-pricing-guide-2025"
              className="px-8 py-4 border border-green-500/30 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
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
              Solutions Built for Growing Businesses
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered tools to essential business applications, we provide the technology 
              foundation your business needs to compete and grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={solution.href}
                  className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors font-medium"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
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
              Why SMBs Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We understand the unique challenges of growing businesses and provide solutions 
              that deliver immediate value and long-term growth.
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
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types Section */}
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
              Solutions for Every Business Type
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're in retail, services, healthcare, or technology, we have 
              specialized solutions designed for your industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {businessTypes.map((businessType, index) => (
              <motion.div
                key={businessType}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 text-center hover:border-green-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Building className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:text-green-300 transition-colors" />
                <h3 className="text-white font-medium group-hover:text-green-400 transition-colors">
                  {businessType}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our SMB solutions can help you compete, grow, and succeed 
              in today's digital marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 border border-green-500/30 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300"
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
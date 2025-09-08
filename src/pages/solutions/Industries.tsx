import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2,
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
  FileText,
  Heart,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Factory,
  Warehouse,
  Store,
  Bank,
  Hospital,
  School,
  University,
  Leaf,
  Zap as ZapIcon
} from 'lucide-react';

export default function IndustrySolutions() {
  const industries = [
    {
      title: 'Financial Services',
      icon: Bank,
      description: 'Secure, compliant solutions for banking, insurance, and fintech',
      solutions: [
        'AI-powered fraud detection',
        'Regulatory compliance',
        'Risk management systems',
        'Digital banking platforms',
        'Blockchain integration'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Healthcare',
      icon: Heart,
      description: 'Innovative technology solutions for healthcare providers',
      solutions: [
        'AI diagnostic tools',
        'Patient management systems',
        'Telemedicine platforms',
        'Health data analytics',
        'HIPAA compliance'
      ],
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Manufacturing',
      icon: Factory,
      description: 'Smart manufacturing and Industry 4.0 solutions',
      solutions: [
        'IoT sensor networks',
        'Predictive maintenance',
        'Supply chain optimization',
        'Quality control systems',
        'Production analytics'
      ],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Retail & E-commerce',
      icon: Store,
      description: 'Digital transformation for modern retail businesses',
      solutions: [
        'Omnichannel platforms',
        'Inventory management',
        'Customer analytics',
        'Payment processing',
        'Marketing automation'
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Technology',
      icon: Cpu,
      description: 'Cutting-edge solutions for tech companies',
      solutions: [
        'Cloud infrastructure',
        'DevOps automation',
        'API management',
        'Security solutions',
        'Performance optimization'
      ],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Energy',
      icon: ZapIcon,
      description: 'Sustainable energy and smart grid solutions',
      solutions: [
        'Smart grid management',
        'Renewable energy systems',
        'Energy analytics',
        'Grid security',
        'Demand response'
      ],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Transportation',
      icon: Car,
      description: 'Intelligent transportation and logistics solutions',
      solutions: [
        'Fleet management',
        'Route optimization',
        'Real-time tracking',
        'Predictive maintenance',
        'Supply chain visibility'
      ],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Education',
      icon: School,
      description: 'Digital learning and educational technology',
      solutions: [
        'Learning management systems',
        'Virtual classrooms',
        'Student analytics',
        'Content management',
        'Assessment tools'
      ],
      color: 'from-teal-500 to-green-600'
    }
  ];

  const benefits = [
    {
      title: 'Industry Expertise',
      description: 'Deep understanding of sector-specific challenges',
      icon: Award
    },
    {
      title: 'Compliance Ready',
      description: 'Built-in regulatory compliance features',
      icon: Shield
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow with your business needs',
      icon: TrendingUp
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support',
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Industry
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"> Solutions</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Specialized technology solutions designed for your industry. We understand the unique 
            challenges and opportunities in your sector and deliver tailored solutions that drive results.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-4 border border-purple-500/30 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
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
              Solutions for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From healthcare to manufacturing, we provide industry-specific solutions that address 
              your unique challenges and regulatory requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${industry.color} rounded-lg flex items-center justify-center`}>
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {industry.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">{industry.description}</p>
                <ul className="space-y-2 mb-6">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
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
              Why Industry-Specific Solutions Matter?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Generic solutions don't cut it in specialized industries. Our industry-focused 
              approach ensures compliance, efficiency, and competitive advantage.
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
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for Industry-Specific Solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our industry expertise can help you overcome challenges, 
              meet compliance requirements, and gain competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 border border-purple-500/30 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
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
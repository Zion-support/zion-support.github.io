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
  MessageCircle
} from 'lucide-react';

export default function EnterpriseSolutions() {
  const solutions = [
    {
      title: 'Enterprise AI Platform',
      description: 'Comprehensive AI solutions for large-scale business operations',
      icon: Brain,
      features: [
        'AI-powered business intelligence',
        'Predictive analytics and forecasting',
        'Natural language processing',
        'Computer vision solutions',
        'Machine learning automation'
      ],
      href: '/services/ai-enterprise-intelligence-platform'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for enterprise workloads',
      icon: Cloud,
      features: [
        'Multi-cloud management',
        'Kubernetes orchestration',
        'Serverless architecture',
        'Disaster recovery',
        'Auto-scaling solutions'
      ],
      href: '/services/cloud-devops'
    },
    {
      title: 'Cybersecurity Suite',
      description: 'Enterprise-grade security and compliance solutions',
      icon: Shield,
      features: [
        'Zero-trust security model',
        'SOC 2 compliance',
        'Threat detection and response',
        'Identity and access management',
        'Security automation'
      ],
      href: '/services/cybersecurity'
    },
    {
      title: 'Data Analytics Platform',
      description: 'Advanced analytics and business intelligence',
      icon: BarChart3,
      features: [
        'Real-time data processing',
        'Business intelligence dashboards',
        'Data warehousing',
        'Predictive modeling',
        'Data quality management'
      ],
      href: '/services/data-analytics'
    },
    {
      title: 'Workflow Automation',
      description: 'Streamline business processes with intelligent automation',
      icon: Workflow,
      features: [
        'Process optimization',
        'RPA implementation',
        'Business process management',
        'Integration services',
        'Workflow analytics'
      ],
      href: '/services/ai-workflow-orchestrator'
    },
    {
      title: 'Enterprise Integration',
      description: 'Seamless integration across all business systems',
      icon: Network,
      features: [
        'API management',
        'Legacy system integration',
        'Data synchronization',
        'Real-time connectivity',
        'Integration monitoring'
      ],
      href: '/services/enterprise-integration'
    }
  ];

  const benefits = [
    {
      title: 'Scalability',
      description: 'Solutions that grow with your business',
      icon: TrendingUp
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security and compliance',
      icon: Shield
    },
    {
      title: 'Efficiency',
      description: 'Optimized processes and workflows',
      icon: Zap
    },
    {
      title: 'Innovation',
      description: 'Cutting-edge technology solutions',
      icon: Rocket
    }
  ];

  const industries = [
    'Financial Services',
    'Healthcare',
    'Manufacturing',
    'Retail',
    'Technology',
    'Energy',
    'Transportation',
    'Education'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Enterprise
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Solutions</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your enterprise with cutting-edge technology solutions designed for scale, 
            security, and innovation. Drive digital transformation and stay ahead of the competition.
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
              to="/case-studies"
              className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Case Studies
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
              Comprehensive Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered analytics to secure cloud infrastructure, we provide end-to-end 
              solutions that drive business transformation and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={solution.href}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
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
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver enterprise solutions that provide measurable business value, 
              operational efficiency, and competitive advantage.
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

      {/* Industries Section */}
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
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We have deep experience across multiple industries and understand the unique 
              challenges and opportunities each sector presents.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Building2 className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:text-cyan-300 transition-colors" />
                <h3 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                  {industry}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our enterprise solutions can drive innovation, 
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
                to="/comprehensive-pricing-guide-2025"
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                <DollarSign className="w-5 h-5" />
                <span>View Pricing</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseSolutions;

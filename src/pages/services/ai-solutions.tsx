import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  Shield,
  Cpu,
  BarChart3,
  Users,
  Target,
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Code,
  Database,
  Network,
  Eye,
  Heart,
  DollarSign,
  Building
} from 'lucide-react';

const AISolutionsPage = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI-powered analytics platform.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom ML Models', 'Data Visualization'],
      href: '/services/ai-business-intelligence'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Protect your digital assets with intelligent threat detection and automated security responses.',
      features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Risk Assessment'],
      href: '/services/ai-cybersecurity'
    },
    {
      icon: Users,
      title: 'AI HR Platform',
      description: 'Streamline HR operations with intelligent recruitment, performance management, and employee engagement.',
      features: ['Smart Recruitment', 'Performance Analytics', 'Employee Engagement', 'Workforce Planning'],
      href: '/services/ai-hr-platform'
    },
    {
      icon: Target,
      title: 'AI Project Management',
      description: 'Optimize project delivery with AI-driven planning, resource allocation, and risk management.',
      features: ['Smart Planning', 'Resource Optimization', 'Risk Prediction', 'Progress Tracking'],
      href: '/services/ai-project-management'
    },
    {
      icon: DollarSign,
      title: 'AI Financial Analytics',
      description: 'Make data-driven financial decisions with our AI-powered forecasting and risk analysis tools.',
      features: ['Financial Forecasting', 'Risk Analysis', 'Portfolio Optimization', 'Market Insights'],
      href: '/services/ai-financial-analytics'
    },
    {
      icon: Rocket,
      title: 'AI Digital Transformation',
      description: 'Accelerate your digital journey with intelligent automation and process optimization.',
      features: ['Process Automation', 'Workflow Optimization', 'Change Management', 'Technology Integration'],
      href: '/services/digital-transformation'
    }
  ];

  const aiCapabilities = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Custom ML models tailored to your business needs and data patterns.'
    },
    {
      icon: Database,
      title: 'Data Processing',
      description: 'Advanced data engineering and preprocessing for optimal AI performance.'
    },
    {
      icon: Network,
      title: 'Neural Networks',
      description: 'Deep learning solutions for complex pattern recognition and prediction.'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Image and video analysis for automation and quality control.'
    },
    {
      icon: Code,
      title: 'Natural Language Processing',
      description: 'Text analysis, chatbots, and language understanding systems.'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast trends and make proactive business decisions.'
    }
  ];

  const benefits = [
    'Increased operational efficiency by up to 40%',
    'Reduced costs through intelligent automation',
    'Improved decision-making with data-driven insights',
    'Enhanced customer experience and satisfaction',
    'Faster time-to-market for new products',
    'Better risk management and compliance'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Solutions That
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Transform{' '}
              </span>
              Your Business
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to drive innovation, efficiency, and growth. 
              Our comprehensive AI solutions are designed to solve real business challenges and create lasting value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From machine learning to natural language processing, we offer a complete suite of AI solutions 
              designed to address your specific business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our expertise spans the full spectrum of artificial intelligence technologies, 
              enabling us to deliver cutting-edge solutions for any industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our AI Solutions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI solutions deliver measurable results that directly impact your bottom line. 
                We focus on practical applications that solve real business problems.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <Star className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-400/30">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Proven Results
                  </h3>
                  <div className="space-y-4 text-center">
                    <div className="text-3xl font-bold text-cyan-400">40%</div>
                    <div className="text-gray-300">Average efficiency improvement</div>
                    <div className="text-3xl font-bold text-cyan-400">60%</div>
                    <div className="text-gray-300">Cost reduction in operations</div>
                    <div className="text-3xl font-bold text-cyan-400">90%</div>
                    <div className="text-gray-300">Client satisfaction rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can help you achieve your business goals. 
              Our experts are ready to create a customized plan for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AISolutionsPage;
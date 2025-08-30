import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  Zap,
  Brain,
  Cpu,
  Database,
  Users,
  Target,
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Code,
  Network,
  Eye,
  Heart,
  DollarSign,
  Building,
  Shield,
  Lock,
  Activity,
  PieChart,
  LineChart,
  Scatter,
  Filter
} from 'lucide-react';

const DataAnalyticsPage = () => {
  const analyticsServices = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Leverage machine learning and AI to uncover hidden patterns and predictive insights in your data.',
      features: ['Predictive Modeling', 'Pattern Recognition', 'Anomaly Detection', 'Automated Insights'],
      href: '/services/ai-business-intelligence'
    },
    {
      icon: Database,
      title: 'Big Data Processing',
      description: 'Handle massive datasets with distributed computing and real-time processing capabilities.',
      features: ['Real-time Processing', 'Distributed Computing', 'Data Pipeline Automation', 'Scalable Architecture'],
      href: '/services/big-data-processing'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights with interactive dashboards and reports.',
      features: ['Interactive Dashboards', 'Custom Reports', 'KPI Tracking', 'Data Visualization'],
      href: '/services/business-intelligence'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors to make proactive business decisions.',
      features: ['Trend Forecasting', 'Risk Assessment', 'Demand Planning', 'Customer Behavior Prediction'],
      href: '/services/predictive-analytics'
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'Monitor your business operations in real-time with live data streams and alerts.',
      features: ['Live Dashboards', 'Real-time Alerts', 'Performance Monitoring', 'Instant Notifications'],
      href: '/services/real-time-monitoring'
    },
    {
      icon: Target,
      title: 'Performance Analytics',
      description: 'Track and optimize business performance with comprehensive metrics and analysis.',
      features: ['KPI Monitoring', 'Performance Optimization', 'Benchmarking', 'ROI Analysis'],
      href: '/services/performance-analytics'
    }
  ];

  const analyticsCapabilities = [
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Build robust data pipelines and infrastructure for reliable data processing.'
    },
    {
      icon: Code,
      title: 'Custom Analytics',
      description: 'Develop tailored analytics solutions specific to your business needs.'
    },
    {
      icon: Network,
      title: 'Data Integration',
      description: 'Connect and consolidate data from multiple sources and systems.'
    },
    {
      icon: Shield,
      title: 'Data Governance',
      description: 'Ensure data quality, security, and compliance across your organization.'
    },
    {
      icon: TrendingUp,
      title: 'Advanced Modeling',
      description: 'Create sophisticated statistical and machine learning models.'
    },
    {
      icon: PieChart,
      title: 'Visualization',
      description: 'Transform complex data into clear, actionable visual insights.'
    }
  ];

  const benefits = [
    'Data-driven decision making with confidence',
    'Identify new business opportunities and trends',
    'Optimize operations and reduce costs',
    'Improve customer experience and satisfaction',
    'Faster response to market changes',
    'Competitive advantage through insights'
  ];

  const industries = [
    {
      name: 'Financial Services',
      useCases: ['Risk Assessment', 'Fraud Detection', 'Portfolio Optimization', 'Customer Segmentation']
    },
    {
      name: 'Healthcare',
      useCases: ['Patient Analytics', 'Treatment Optimization', 'Resource Planning', 'Outcome Prediction']
    },
    {
      name: 'Retail & E-commerce',
      useCases: ['Customer Behavior Analysis', 'Inventory Optimization', 'Price Optimization', 'Marketing ROI']
    },
    {
      name: 'Manufacturing',
      useCases: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Performance Analytics']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-green-500 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Data Analytics
              <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                {' '}Solutions{' '}
              </span>
              That Drive Growth
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our comprehensive analytics solutions. 
              From real-time dashboards to predictive modeling, we help you make data-driven decisions that accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-200"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analytics Services Grid */}
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
              Comprehensive Analytics Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From data collection to advanced analytics, we provide end-to-end solutions 
              that turn your data into a strategic asset.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 transition-transform"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Capabilities */}
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
              Advanced Analytics Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our expertise spans the full spectrum of data analytics, from basic reporting 
              to advanced machine learning and predictive modeling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
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
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Data analytics is transforming every industry. Discover how your sector 
              can benefit from advanced analytics solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center space-x-2">
                  <Building className="w-6 h-6 text-blue-400" />
                  <span>{industry.name}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {industry.useCases.map((useCase) => (
                    <div key={useCase} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">{useCase}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our Analytics Solutions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our data analytics solutions deliver measurable results that directly impact your business performance. 
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
                    <Star className="w-5 h-5 text-blue-400" />
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
              <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl p-8 border border-blue-400/30">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Analytics Impact
                  </h3>
                  <div className="space-y-4 text-center">
                    <div className="text-3xl font-bold text-blue-400">25%</div>
                    <div className="text-gray-300">Average revenue increase</div>
                    <div className="text-3xl font-bold text-blue-400">40%</div>
                    <div className="text-gray-300">Operational efficiency gain</div>
                    <div className="text-3xl font-bold text-blue-400">60%</div>
                    <div className="text-gray-300">Faster decision making</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-green-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our data analytics solutions can help you make better decisions, 
              optimize operations, and drive growth. Our experts are ready to create a customized analytics strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-200"
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

export default DataAnalyticsPage;
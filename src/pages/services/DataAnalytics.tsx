import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  Database,
  Brain,
  Zap,
  Users,
  TrendingUp,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  DollarSign,
  Clock,
  MessageCircle,
  FileText,
  Workflow,
  Cloud,
  Shield,
  Server,
  Network,
  Cpu,
  Building2,
  Globe,
  PieChart,
  LineChart,
  Activity,
  BarChart,
  ScatterChart,
  AreaChart,
  Gauge,
  Thermometer,
  Calendar,
  Filter,
  Search,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop
} from 'lucide-react';

export default function DataAnalytics() {
  const services = [
    {
      title: 'Data Warehousing',
      description: 'Build scalable data warehouses for comprehensive business intelligence',
      icon: Database,
      features: [
        'Data modeling and design',
        'ETL/ELT pipeline development',
        'Data quality management',
        'Performance optimization',
        'Scalable architecture'
      ],
      benefits: [
        'Centralized data storage',
        'Improved data quality',
        'Faster query performance',
        'Better decision making'
      ]
    },
    {
      title: 'Business Intelligence',
      description: 'Transform data into actionable insights with interactive dashboards',
      icon: BarChart3,
      features: [
        'Interactive dashboards',
        'Real-time reporting',
        'KPI monitoring',
        'Custom visualizations',
        'Mobile accessibility'
      ],
      benefits: [
        'Data-driven decisions',
        'Improved visibility',
        'Faster insights',
        'Better collaboration'
      ]
    },
    {
      title: 'Predictive Analytics',
      description: 'Leverage machine learning to predict future trends and outcomes',
      icon: Brain,
      features: [
        'Machine learning models',
        'Statistical analysis',
        'Forecasting algorithms',
        'Risk assessment',
        'Scenario planning'
      ],
      benefits: [
        'Proactive decision making',
        'Risk mitigation',
        'Opportunity identification',
        'Competitive advantage'
      ]
    },
    {
      title: 'Real-time Analytics',
      description: 'Monitor and analyze data as it happens for immediate insights',
      icon: Activity,
      features: [
        'Stream processing',
        'Real-time dashboards',
        'Instant alerts',
        'Live monitoring',
        'Event-driven analytics'
      ],
      benefits: [
        'Immediate insights',
        'Faster response times',
        'Better customer experience',
        'Operational efficiency'
      ]
    },
    {
      title: 'Data Quality Management',
      description: 'Ensure data accuracy, completeness, and consistency',
      icon: Shield,
      features: [
        'Data profiling',
        'Quality assessment',
        'Cleansing and enrichment',
        'Validation rules',
        'Monitoring and reporting'
      ],
      benefits: [
        'Improved data reliability',
        'Better decision making',
        'Reduced errors',
        'Compliance adherence'
      ]
    },
    {
      title: 'Advanced Analytics',
      description: 'Deep dive analytics with advanced statistical and ML techniques',
      icon: TrendingUp,
      features: [
        'Statistical analysis',
        'Machine learning',
        'Deep learning',
        'Natural language processing',
        'Computer vision'
      ],
      benefits: [
        'Advanced insights',
        'Pattern recognition',
        'Automated analysis',
        'Innovation opportunities'
      ]
    }
  ];

  const technologies = [
    'Apache Spark',
    'Apache Kafka',
    'Apache Airflow',
    'Snowflake',
    'Amazon Redshift',
    'Google BigQuery',
    'Tableau',
    'Power BI',
    'Python',
    'R',
    'SQL',
    'TensorFlow'
  ];

  const benefits = [
    {
      title: 'Insights',
      description: 'Unlock hidden patterns and insights in your data',
      icon: Brain
    },
    {
      title: 'Efficiency',
      description: 'Streamline operations and improve productivity',
      icon: Zap
    },
    {
      title: 'Growth',
      description: 'Identify opportunities for business growth',
      icon: TrendingUp
    },
    {
      title: 'Competitive Edge',
      description: 'Stay ahead with data-driven strategies',
      icon: Target
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

  const useCases = [
    'Customer Analytics',
    'Supply Chain Optimization',
    'Risk Management',
    'Marketing Optimization',
    'Operational Efficiency',
    'Product Development',
    'Fraud Detection',
    'Performance Monitoring'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Data
            <span className="bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent"> Analytics</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your data into actionable insights. From business intelligence to predictive 
            analytics, we help you unlock the full value of your data assets.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2"
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

      {/* Services Grid */}
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
              Comprehensive Analytics Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From data collection to advanced analytics, we provide end-to-end solutions 
              that turn your data into strategic business advantages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <Star className="w-4 h-4 text-teal-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest data analytics technologies to deliver 
              cutting-edge solutions for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((technology, index) => (
              <motion.div
                key={technology}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 text-center hover:border-green-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Database className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:text-green-300 transition-colors" />
                <h3 className="text-white font-medium group-hover:text-green-400 transition-colors text-sm">
                  {technology}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Analytics Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how data analytics can transform your business operations 
              and drive strategic decision making.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 text-center hover:border-green-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <BarChart3 className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:text-green-300 transition-colors" />
                <h3 className="text-white font-medium group-hover:text-green-400 transition-colors text-sm">
                  {useCase}
                </h3>
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
              Why Choose Data Analytics?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Data analytics provides unprecedented opportunities for businesses to 
              understand their operations and make informed decisions.
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
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We have experience applying data analytics across various industries 
              to solve unique business challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 text-center hover:border-green-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Building2 className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:text-green-300 transition-colors" />
                <h3 className="text-white font-medium group-hover:text-green-400 transition-colors text-sm">
                  {industry}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600/20 to-teal-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Unlock Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our data analytics solutions can transform your business, 
              improve decision making, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2"
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
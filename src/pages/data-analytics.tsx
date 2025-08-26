import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BarChart3, Database, Brain, Eye, Server, Network, Code, Zap, Users, 
  Building, Heart, Truck, Car, Rocket, Atom, Lightbulb, 
  TrendingUp, Palette, Target, Clock, Star, Globe, 
  FileText, Calendar, Video, CheckCircle, ArrowRight, 
  ChevronDown, ChevronRight, Phone, Mail, MapPin, Linkedin, 
  Twitter, Github, Youtube, Facebook, Instagram, AlertTriangle,
  Key, Fingerprint, Bug, Wifi, HardDrive, Cpu, PieChart,
  LineChart, Activity, TrendingDown, Filter, Search, Layers
} from 'lucide-react';

const DataAnalytics: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const analyticsServices = [
    {
      title: 'Business Intelligence',
      icon: BarChart3,
      description: 'Transform data into actionable business insights',
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Data Visualization', path: '/data-visualization', description: 'Interactive charts and dashboards' },
        { name: 'KPI Dashboards', path: '/kpi-dashboards', description: 'Real-time performance monitoring' },
        { name: 'Executive Reporting', path: '/executive-reporting', description: 'Strategic decision support' },
        { name: 'Ad Hoc Analysis', path: '/ad-hoc-analysis', description: 'Flexible data exploration' },
        { name: 'Performance Metrics', path: '/performance-metrics', description: 'Business performance tracking' },
        { name: 'Trend Analysis', path: '/trend-analysis', description: 'Historical pattern recognition' }
      ]
    },
    {
      title: 'Data Warehousing',
      icon: Database,
      description: 'Scalable data storage and management solutions',
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Data Lake Architecture', path: '/data-lake-architecture', description: 'Big data storage solutions' },
        { name: 'Data Warehouse Design', path: '/data-warehouse-design', description: 'Optimized data structures' },
        { name: 'ETL/ELT Processes', path: '/etl-elt-processes', description: 'Data integration pipelines' },
        { name: 'Data Modeling', path: '/data-modeling', description: 'Logical and physical data models' },
        { name: 'Data Quality Management', path: '/data-quality-management', description: 'Data validation and cleansing' },
        { name: 'Master Data Management', path: '/master-data-management', description: 'Centralized data governance' }
      ]
    },
    {
      title: 'Real-time Analytics',
      icon: Activity,
      description: 'Live data processing and instant insights',
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'Stream Processing', path: '/stream-processing', description: 'Real-time data streams' },
        { name: 'Live Dashboards', path: '/live-dashboards', description: 'Real-time monitoring' },
        { name: 'Event Processing', path: '/event-processing', description: 'Instant event analysis' },
        { name: 'Real-time Alerts', path: '/real-time-alerts', description: 'Proactive notifications' },
        { name: 'Live Reporting', path: '/live-reporting', description: 'Instant report generation' },
        { name: 'Real-time BI', path: '/real-time-bi', description: 'Live business intelligence' }
      ]
    },
    {
      title: 'Advanced Analytics',
      icon: Brain,
      description: 'Machine learning and predictive analytics',
      color: 'from-orange-500 to-red-500',
      services: [
        { name: 'Predictive Analytics', path: '/predictive-analytics', description: 'Future trend forecasting' },
        { name: 'Machine Learning Models', path: '/machine-learning-models', description: 'AI-powered insights' },
        { name: 'Statistical Analysis', path: '/statistical-analysis', description: 'Advanced statistical modeling' },
        { name: 'Data Mining', path: '/data-mining', description: 'Pattern discovery and extraction' },
        { name: 'Sentiment Analysis', path: '/sentiment-analysis', description: 'Text and emotion analysis' },
        { name: 'Anomaly Detection', path: '/anomaly-detection', description: 'Outlier identification' }
      ]
    },
    {
      title: 'Data Engineering',
      icon: Code,
      description: 'Data pipeline development and infrastructure',
      color: 'from-indigo-500 to-purple-500',
      services: [
        { name: 'Data Pipeline Development', path: '/data-pipeline-development', description: 'ETL/ELT pipeline creation' },
        { name: 'Data API Development', path: '/data-api-development', description: 'Data access interfaces' },
        { name: 'Data Infrastructure', path: '/data-infrastructure', description: 'Scalable data platforms' },
        { name: 'Data Automation', path: '/data-automation', description: 'Automated data workflows' },
        { name: 'Data Testing', path: '/data-testing', description: 'Data quality validation' },
        { name: 'Data Documentation', path: '/data-documentation', description: 'Comprehensive data cataloging' }
      ]
    },
    {
      title: 'Industry Analytics',
      icon: Building,
      description: 'Specialized analytics for specific industries',
      color: 'from-teal-500 to-cyan-500',
      services: [
        { name: 'Healthcare Analytics', path: '/healthcare-analytics', description: 'Medical data insights' },
        { name: 'Financial Analytics', path: '/financial-analytics', description: 'Financial data analysis' },
        { name: 'Retail Analytics', path: '/retail-analytics', description: 'Customer behavior insights' },
        { name: 'Manufacturing Analytics', path: '/manufacturing-analytics', description: 'Operational efficiency' },
        { name: 'Marketing Analytics', path: '/marketing-analytics', description: 'Campaign performance' },
        { name: 'Supply Chain Analytics', path: '/supply-chain-analytics', description: 'Logistics optimization' }
      ]
    }
  ];

  const analyticsTechnologies = [
    {
      name: 'Business Intelligence',
      description: 'Tableau, Power BI, QlikView',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Data Warehousing',
      description: 'Snowflake, Amazon Redshift, BigQuery',
      icon: Database,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Big Data Processing',
      description: 'Apache Spark, Hadoop, Kafka',
      icon: Server,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Machine Learning',
      description: 'Python, R, TensorFlow, PyTorch',
      icon: Brain,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Data Visualization',
      description: 'D3.js, Plotly, Matplotlib',
      icon: PieChart,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Cloud Analytics',
      description: 'AWS Analytics, Azure Synapse, GCP Data',
      icon: Cloud,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const dataTypes = [
    {
      name: 'Structured Data',
      description: 'Databases, spreadsheets, CSV files',
      icon: Database,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Unstructured Data',
      description: 'Text, images, videos, documents',
      icon: FileText,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Semi-structured Data',
      description: 'JSON, XML, log files',
      icon: Code,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Time Series Data',
      description: 'Sensor data, financial time series',
      icon: Clock,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Geospatial Data',
      description: 'Location data, maps, GPS coordinates',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Streaming Data',
      description: 'Real-time data feeds, IoT sensors',
      icon: Activity,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const benefits = [
    {
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions based on data insights',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Operational Efficiency',
      description: 'Identify bottlenecks and optimize processes',
      icon: Zap,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Customer Insights',
      description: 'Understand customer behavior and preferences',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Predictive Capabilities',
      description: 'Forecast trends and anticipate changes',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Competitive Advantage',
      description: 'Gain insights that drive innovation',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Risk Management',
      description: 'Identify and mitigate potential risks',
      icon: Shield,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', url: 'https://github.com/Zion-Holdings', icon: Github },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-blue-900 text-white">
      {/* Header */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <div className="p-4 bg-green-600/20 rounded-full">
              <BarChart3 className="h-16 w-16 text-green-400" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
          >
            Data Analytics Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Transform your data into actionable insights with advanced analytics solutions. 
            From business intelligence to machine learning, we help you make data-driven decisions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 text-lg"
            >
              Start Your Analytics Journey
            </Link>
            <Link
              to="/request-quote"
              className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg"
            >
              Get Analytics Assessment
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Analytics Services Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Comprehensive Analytics Services
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {analyticsServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  {service.services.map((item, itemIndex) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700/80 transition-all duration-300 border border-transparent hover:border-green-500/30 group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-white group-hover:text-green-400 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-400 mt-1">
                            {item.description}
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-green-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Analytics Technologies */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Analytics Technologies We Master
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + (index * 0.1) }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Types */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Data Types We Handle
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + (index * 0.1) }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center hover:border-green-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
                <p className="text-gray-300 text-sm">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Benefits of Data Analytics
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + (index * 0.1) }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Unlock Your Data's Potential?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="text-xl text-gray-300 mb-8"
          >
            Let's transform your raw data into actionable insights that drive 
            better decisions, improve efficiency, and create competitive advantages.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 text-lg"
            >
              Schedule Analytics Consultation
            </Link>
            <Link
              to="/case-studies"
              className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg"
            >
              View Analytics Case Studies
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
            className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-green-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-green-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-gray-300">{contactInfo.address}</p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 hover:bg-green-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 + (index * 0.1) }}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-green-400 transition-colors mx-2">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-green-400 transition-colors mx-2">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-green-400 transition-colors mx-2">Cookie Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataAnalytics;
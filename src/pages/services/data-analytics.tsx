import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Zap,
  Target,
  TrendingUp,
  Users,
  Shield,
  Cpu,
  Rocket,
  Eye,
  Activity,
  Code,
  Database,
  Server,
  Network,
  Brain,
  Heart,
  Building,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Play,
  ChevronRight,
  RefreshCw,
  Layers,
  Smartphone,
  Monitor,
  Cloud,
  Lock,
  PieChart,
  LineChart,
  ScatterPlot,
  Database as DatabaseIcon
} from 'lucide-react';

export default function DataAnalyticsPage() {
  const analyticsServices = [
    {
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights',
      icon: BarChart3,
      href: '/services/business-intelligence',
      features: ['Interactive Dashboards', 'KPI Monitoring', 'Performance Metrics', 'Executive Reporting'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors using advanced algorithms',
      icon: TrendingUp,
      href: '/services/predictive-analytics',
      features: ['Machine Learning Models', 'Trend Forecasting', 'Risk Assessment', 'Demand Prediction'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Real-time Analytics',
      description: 'Monitor and analyze data as it happens',
      icon: Activity,
      href: '/services/real-time-analytics',
      features: ['Live Data Streaming', 'Real-time Monitoring', 'Instant Alerts', 'Dynamic Dashboards'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Data Visualization',
      description: 'Create compelling visual representations of complex data',
      icon: PieChart,
      href: '/services/data-visualization',
      features: ['Interactive Charts', 'Custom Dashboards', 'Storytelling', 'Mobile Responsive'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Data Engineering',
      description: 'Build robust data pipelines and infrastructure',
      icon: DatabaseIcon,
      href: '/services/data-engineering',
      features: ['ETL Processes', 'Data Warehousing', 'Data Quality', 'Scalable Architecture'],
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Advanced Analytics',
      description: 'Leverage AI and machine learning for deeper insights',
      icon: Brain,
      href: '/services/advanced-analytics',
      features: ['AI-Powered Insights', 'Natural Language Processing', 'Computer Vision', 'Deep Learning'],
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const analyticsCapabilities = [
    {
      title: 'Data Collection',
      description: 'Comprehensive data collection from multiple sources',
      icon: Database,
      features: ['Multi-source Integration', 'Real-time Ingestion', 'Data Validation', 'Quality Assurance']
    },
    {
      title: 'Data Processing',
      description: 'Transform and prepare data for analysis',
      icon: RefreshCw,
      features: ['Data Cleaning', 'Transformation', 'Aggregation', 'Normalization']
    },
    {
      title: 'Statistical Analysis',
      description: 'Advanced statistical methods and modeling',
      icon: BarChart3,
      features: ['Descriptive Statistics', 'Inferential Analysis', 'Hypothesis Testing', 'Correlation Analysis']
    },
    {
      title: 'Machine Learning',
      description: 'Predictive and prescriptive analytics',
      icon: Brain,
      features: ['Supervised Learning', 'Unsupervised Learning', 'Model Training', 'Predictions']
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: Heart, description: 'Patient analytics and medical insights' },
    { name: 'Finance', icon: Building, description: 'Risk analysis and financial modeling' },
    { name: 'Retail', icon: Globe, description: 'Customer behavior and sales analytics' },
    { name: 'Manufacturing', icon: Cpu, description: 'Operational efficiency and quality control' },
    { name: 'Marketing', icon: TrendingUp, description: 'Campaign performance and ROI analysis' },
    { name: 'Logistics', icon: Network, description: 'Supply chain optimization and tracking' }
  ];

  const useCases = [
    { name: 'Customer Segmentation', icon: Users, description: 'Identify and target customer groups' },
    { name: 'Fraud Detection', icon: Shield, description: 'Detect fraudulent activities in real-time' },
    { name: 'Inventory Optimization', icon: Database, description: 'Optimize stock levels and ordering' },
    { name: 'Predictive Maintenance', icon: Cpu, description: 'Prevent equipment failures proactively' },
    { name: 'Sales Forecasting', icon: TrendingUp, description: 'Predict future sales and revenue' },
    { name: 'Performance Monitoring', icon: Monitor, description: 'Track KPIs and business metrics' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Data Analytics
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your data into actionable insights with advanced analytics solutions that drive 
              informed decision-making and business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/solutions"
                className="border border-indigo-500 text-indigo-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                View Solutions
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analytics Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Data Analytics Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive analytics solutions designed to unlock the value hidden in your data.
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
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Analytics Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end analytics capabilities from data collection to actionable insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analyticsCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <capability.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">{capability.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{capability.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {capability.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our analytics solutions are tailored to meet the unique needs of diverse industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-indigo-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                <p className="text-gray-400 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Analytics Use Cases</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real-world applications of data analytics that drive business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-indigo-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{useCase.name}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Analytics Process</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A systematic approach to turning data into actionable insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[
              { name: 'Collect', icon: Database, description: 'Gather data from multiple sources' },
              { name: 'Process', icon: RefreshCw, description: 'Clean and prepare data for analysis' },
              { name: 'Analyze', icon: BarChart3, description: 'Apply analytical methods and models' },
              { name: 'Insights', icon: Brain, description: 'Generate actionable business insights' }
            ].map((step, index) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-indigo-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.name}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-indigo-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Benefits of Data Analytics</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transform your business with data-driven insights and decision-making.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {[
                  'Improved decision-making with data-driven insights',
                  'Increased operational efficiency and productivity',
                  'Better understanding of customer behavior and needs',
                  'Identification of new business opportunities',
                  'Reduced costs through optimization and automation',
                  'Enhanced competitive advantage and market positioning'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm border border-indigo-500/50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">Analytics Impact</h3>
              <div className="space-y-4">
                {[
                  { metric: '25-40%', label: 'Better Decisions', description: 'Improved decision quality' },
                  { metric: '30-50%', label: 'Efficiency Gains', description: 'Operational improvements' },
                  { metric: '20-35%', label: 'Cost Reduction', description: 'Operational cost savings' },
                  { metric: '40-60%', label: 'Customer Insights', description: 'Better customer understanding' }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 bg-gray-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-indigo-400 mb-1">{item.metric}</div>
                    <div className="text-sm text-gray-300">{item.label}</div>
                    <div className="text-xs text-gray-400">{item.description}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Unlock Your Data?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how data analytics can transform your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center group"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-indigo-500 text-indigo-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                View Case Studies
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
import React from 'react.ts';
import { SEO  } from '../../components/SEO';
import { motion  } from 'framer-motion.ts';
import { BarChart3, Database, Zap, Shield, Globe, Server, Settings, Users, Network, Smartphone, Tablet, Laptop, Cloud, RefreshCw, TrendingUp, AlertTriangle, Activity, FileText, CheckCircle, Eye, Monitor, Target, Layers, PieChart, LineChart, BarChart, TrendingDown, ShoppingCart  } from 'lucide-react.ts';

export default function DataAnalytics(...args: any[]): any {
  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Machine learning algorithms for predictive insights and pattern recognition',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Big Data Processing',
      description: 'Handle massive datasets with distributed computing and real-time streaming',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Eye,
      title: 'Real-Time Monitoring',
      description: 'Live dashboards and alerts for immediate business intelligence',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Interactive charts and graphs for clear insights and storytelling',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Predictive Modeling',
      description: 'Forecast trends and outcomes with statistical and ML models',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Layers,
      title: 'Data Governance',
      description: 'Ensure data quality, security, and compliance across your organization',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const services = [
    {
      title: 'Data Strategy Consulting',
      description: 'Develop a comprehensive data analytics roadmap for your business',
      price: 'From $10,000',
      features: ['Data assessment', 'Strategy development', 'ROI analysis', 'Implementation plan']
    },
    {
      title: 'Analytics Platform',
      description: 'Custom analytics platform with real-time dashboards and reporting',
      price: 'From $30,000',
      features: ['Custom development', 'Data integration', 'Real-time dashboards', 'User management']
    },
    {
      title: 'Data Engineering',
      description: 'Build robust data pipelines and ETL processes',
      price: 'From $25,000',
      features: ['Data pipeline design', 'ETL development', 'Data warehousing', 'Quality assurance']
    },
    {
      title: 'AI & Machine Learning',
      description: 'Advanced analytics and predictive modeling solutions',
      price: 'From $35,000',
      features: ['Model development', 'Training & testing', 'Deployment', 'Monitoring & maintenance']
    }
  ];

  const industries = [
    { name: 'Finance', icon: TrendingUp, description: 'Risk assessment and fraud detection' },
    { name: 'Healthcare', icon: Activity, description: 'Patient analytics and treatment optimization' },
    { name: 'Retail', icon: ShoppingCart, description: 'Customer behavior and inventory optimization' },
    { name: 'Manufacturing', icon: Settings, description: 'Predictive maintenance and quality control' },
    { name: 'Marketing', icon: Target, description: 'Campaign performance and customer insights' },
    { name: 'Logistics', icon: Network, description: 'Supply chain optimization and route planning' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Data Analytics Solutions - Zion Tech Group"
        description="Transform your data into actionable insights with our advanced analytics solutions. Real-time dashboards, predictive modeling, and business intelligence."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Data Analytics
              <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform raw data into actionable insights with our comprehensive analytics 
              platform. Drive better decisions with real-time dashboards and predictive intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300"
              >
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Analytics Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our data analytics platform provides comprehensive tools to extract, 
              analyze, and visualize insights from your data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)  => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our data analytics solutions are tailored for specific industries, 
              providing relevant insights and actionable intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md: anygrid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((industry, index)  => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-700 transition-all duration-300">
                  <industry.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-sm text-slate-400">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Analytics Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              End-to-end data analytics solutions designed to meet your specific 
              requirements and business objectives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index)  => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-green-400 mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
                >
                  Get Quote
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600/20 to-emerald-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Unlock Your Data?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how data analytics can transform your business, 
              improve decision-making, and drive growth through data-driven insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
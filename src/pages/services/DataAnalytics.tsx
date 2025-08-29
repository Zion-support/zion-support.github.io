import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Brain, 
  Database, 
  Zap, 
  Shield, 
  Eye, 
  Target, 
  Users, 
  Globe,
  CheckCircle,
  ArrowRight,
  Play,
  Code,
  Settings,
  Monitor,
  Clock,
  Lightbulb,
  Network,
  PieChart,
  LineChart,
  Activity
} from 'lucide-react';

export default function DataAnalytics() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Leverage machine learning algorithms for predictive analytics and intelligent decision-making',
      benefits: ['Predictive modeling', 'Pattern recognition', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'Monitor your data streams and business metrics in real-time with instant alerts',
      benefits: ['Live dashboards', 'Instant notifications', 'Performance tracking', 'Anomaly detection']
    },
    {
      icon: Target,
      title: 'Actionable Intelligence',
      description: 'Transform raw data into actionable insights that drive business growth',
      benefits: ['Business intelligence', 'KPI tracking', 'ROI analysis', 'Strategic planning']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security and compliance for your sensitive business data',
      benefits: ['Data encryption', 'Access control', 'Compliance adherence', 'Audit trails']
    }
  ];

  const services = [
    {
      title: 'Data Strategy & Consulting',
      description: 'Develop a comprehensive data strategy aligned with your business objectives',
      icon: Brain,
      price: 'From $25,000'
    },
    {
      title: 'Analytics Platform Development',
      description: 'Custom analytics platforms tailored to your specific business needs',
      icon: BarChart3,
      price: 'From $40,000'
    },
    {
      title: 'Data Integration & ETL',
      description: 'Seamlessly integrate data from multiple sources into a unified analytics platform',
      icon: Database,
      price: 'From $30,000'
    },
    {
      title: 'Business Intelligence Dashboards',
      description: 'Interactive dashboards that provide real-time insights into your business performance',
      icon: Monitor,
      price: 'From $20,000'
    }
  ];

  const solutions = [
    { name: 'Predictive Analytics', icon: TrendingUp, color: 'from-blue-500 to-cyan-600', description: 'Forecast future trends and behaviors' },
    { name: 'Customer Analytics', icon: Users, color: 'from-green-600 to-emerald-600', description: 'Understand customer behavior and preferences' },
    { name: 'Operational Analytics', icon: Activity, color: 'from-purple-600 to-pink-600', description: 'Optimize business operations and efficiency' },
    { name: 'Financial Analytics', icon: PieChart, color: 'from-yellow-500 to-orange-600', description: 'Track financial performance and trends' },
    { name: 'Marketing Analytics', icon: Target, color: 'from-indigo-600 to-blue-600', description: 'Measure marketing campaign effectiveness' },
    { name: 'Risk Analytics', icon: Shield, color: 'from-red-600 to-pink-600', description: 'Identify and mitigate business risks' }
  ];

  const technologies = [
    { name: 'Python', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'R', icon: Code, color: 'from-green-600 to-emerald-600' },
    { name: 'SQL', icon: Database, color: 'from-purple-600 to-pink-600' },
    { name: 'Tableau', icon: BarChart3, color: 'from-indigo-600 to-purple-600' },
    { name: 'Power BI', icon: LineChart, color: 'from-orange-500 to-red-600' },
    { name: 'Apache Spark', icon: Zap, color: 'from-yellow-500 to-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Data Analytics Services - Zion Tech Group"
        description="Transform your data into actionable insights with our comprehensive Data Analytics services. From predictive modeling to business intelligence, we help you make data-driven decisions."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-400/20 to-emerald-500/20 border border-green-400/30 rounded-full px-6 py-2 mb-6">
              <BarChart3 className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">Data Analytics Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Data Into
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> Actionable</span>
              <span className="block">Insights</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Unlock the power of your data with advanced analytics, machine learning, 
              and business intelligence solutions that drive informed decision-making.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Get Started</span>
              </button>
              <button className="border border-green-400/30 text-green-400 hover:bg-green-400/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <ArrowRight className="w-5 h-5" />
                <span>Learn More</span>
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Data Analytics Services?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver 
              insights that transform your business operations and drive growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-green-400/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Data Analytics Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From data strategy to implementation, we provide comprehensive analytics 
              solutions that transform your business intelligence capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-green-400/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{service.price}</div>
                    <div className="text-sm text-slate-400">Starting price</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>
                
                <button className="w-full bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Quote
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Analytics Solutions We Offer
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how our analytics solutions can address your specific business 
              challenges and unlock new opportunities for growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-green-400/30 transition-all duration-300 group text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{solution.name}</h3>
                <p className="text-slate-400">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We leverage industry-leading tools and technologies to build robust, 
              scalable, and powerful analytics solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-green-400/30 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how our Data Analytics services can transform your business 
              intelligence and drive data-driven decision-making.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border border-green-400/30 text-green-400 hover:bg-green-400/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
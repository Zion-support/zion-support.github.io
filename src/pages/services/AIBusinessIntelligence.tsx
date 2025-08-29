import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, TrendingUp, Target, Zap, Shield, Users, Globe, BarChart3, Cpu, Cloud, Lock, ArrowRight, CheckCircle, Star, Play, Download, MessageCircle, Phone, Mail, MapPin, ShoppingCart } from 'lucide-react';
import { SEO } from '../../components/SEO';

const AIBusinessIntelligence: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: Brain,
      title: 'Advanced Machine Learning',
      description: 'State-of-the-art algorithms for predictive analytics and pattern recognition',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Big Data Processing',
      description: 'Handle massive datasets with real-time processing capabilities',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast trends and identify opportunities before they happen',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant insights and automated decision-making',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'AI Ethics & Governance',
      description: 'Responsible AI with built-in bias detection and fairness',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      applications: ['Patient outcome prediction', 'Drug discovery optimization', 'Medical image analysis', 'Healthcare fraud detection'],
      icon: Users
    },
    {
      industry: 'Finance',
      applications: ['Risk assessment', 'Fraud detection', 'Algorithmic trading', 'Credit scoring'],
      icon: TrendingUp
    },
    {
      industry: 'Manufacturing',
      applications: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Production planning'],
      icon: Cpu
    },
    {
      industry: 'Retail',
      applications: ['Customer segmentation', 'Demand forecasting', 'Inventory optimization', 'Personalized marketing'],
      icon: ShoppingCart
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic ML model training',
        'Data preprocessing tools',
        'Standard analytics dashboard',
        'Email support',
        '5GB data storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,500',
      period: '/month',
      description: 'Ideal for growing companies with advanced AI needs',
      features: [
        'Advanced ML algorithms',
        'Real-time data processing',
        'Custom analytics dashboards',
        'Priority support',
        '50GB data storage',
        'API access',
        'Custom model training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large-scale AI implementations',
      features: [
        'Custom AI model development',
        'Unlimited data storage',
        'Dedicated support team',
        'On-premise deployment',
        'Custom integrations',
        'Training & certification',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const technologies = [
    'TensorFlow', 'PyTorch', 'Scikit-learn', 'Apache Spark', 'Kubernetes', 'Docker',
    'AWS SageMaker', 'Azure ML', 'Google Cloud AI', 'Apache Kafka', 'Elasticsearch',
    'PostgreSQL', 'MongoDB', 'Redis', 'Apache Airflow', 'MLflow', 'Kubeflow'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Business Intelligence - Zion Tech Group"
        description="Transform your business with cutting-edge AI and machine learning solutions. Advanced analytics, predictive insights, and intelligent automation."
        keywords="AI business intelligence, machine learning, data analytics, predictive analytics, business intelligence, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-6">
              <Brain className="w-4 h-4" />
              <span>AI & Machine Learning</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Business
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                {' '}Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence and machine learning solutions. 
              Unlock hidden insights, automate complex processes, and make data-driven decisions with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </a>
              <a
                href="/schedule-demo"
                className="px-8 py-4 bg-slate-700/50 hover:bg-slate-600/50 text-white font-semibold rounded-lg transition-all duration-300 border border-slate-600 hover:border-slate-500"
              >
                <Play className="w-5 h-5 mr-2 inline" />
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Capabilities
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our AI platform combines cutting-edge machine learning with enterprise-grade infrastructure 
              to deliver actionable intelligence at scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our AI solutions are transforming businesses across industries with proven results and measurable ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <useCase.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.industry}</h3>
                </div>
                <ul className="space-y-2">
                  {useCase.applications.map((app, appIndex) => (
                    <li key={appIndex} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI capabilities 
              with scalable options for growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border p-6 ${
                  tier.popular 
                    ? 'border-purple-500/50 ring-2 ring-purple-500/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/request-quote"
                  className={`w-full text-center py-3 rounded-lg font-medium transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white transform hover:scale-105'
                      : 'bg-slate-700/50 hover:bg-slate-600/50 text-white border border-slate-600 hover:border-slate-500'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Built on industry-leading technologies and frameworks for enterprise-grade reliability and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 p-4 text-center hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="text-gray-300 group-hover:text-white transition-colors font-medium text-sm">
                  {tech}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join hundreds of companies already leveraging our AI solutions to drive growth, 
              reduce costs, and gain competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </a>
              <a
                href="/schedule-demo"
                className="px-8 py-4 bg-slate-700/50 hover:bg-slate-600/50 text-white font-semibold rounded-lg transition-all duration-300 border border-slate-600 hover:border-slate-500"
              >
                <Play className="w-5 h-5 mr-2 inline" />
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300 transition-colors">
                +1 302 464 0950
              </a>
              <p className="text-sm text-slate-400 mt-2">Available 24/7 for urgent support</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
              <p className="text-sm text-slate-400 mt-2">Response within 2 hours</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-slate-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
              <p className="text-sm text-slate-400 mt-2">Global remote support available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIBusinessIntelligence;
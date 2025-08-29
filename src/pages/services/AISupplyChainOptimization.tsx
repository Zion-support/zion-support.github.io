import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  TrendingUp, 
  Truck, 
  Zap, 
  Shield, 
  Globe, 
  Database,
  Cloud,
  Lock,
  Rocket,
  CheckCircle,
  ArrowRight,
  PieChart,
  LineChart,
  Activity,
  Target,
  Lightbulb,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  Phone,
  Mail,
  MapPin,
  BarChart3,
  MessageCircle,
  Calendar,
  AlertTriangle,
  Star,
  Package,
  Warehouse,
  Route,
  Clock,
  DollarSign,
  Users,
  Cpu,
  Network
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AISupplyChainOptimization() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Demand Forecasting',
      description: 'Advanced machine learning algorithms that predict demand patterns with 92%+ accuracy, reducing stockouts and overstock by up to 60%.'
    },
    {
      icon: Route,
      title: 'Intelligent Route Optimization',
      description: 'Real-time route optimization using AI and real-time traffic data, reducing delivery times by 25% and fuel costs by 30%.'
    },
    {
      icon: Warehouse,
      title: 'Smart Inventory Management',
      description: 'Automated inventory optimization with predictive analytics, reducing carrying costs by 40% while maintaining 99%+ service levels.'
    },
    {
      icon: Zap,
      title: 'Real-time Risk Monitoring',
      description: 'AI-powered risk assessment and early warning systems that identify supply chain disruptions before they impact operations.'
    }
  ];

  const capabilities = [
    {
      title: 'Predictive Analytics',
      description: 'Machine learning models that forecast demand, supply, and market trends',
      icon: Brain,
      benefits: ['Demand forecasting', 'Supply planning', 'Market analysis', 'Trend prediction']
    },
    {
      title: 'Real-time Visibility',
      description: 'End-to-end supply chain transparency with real-time tracking and monitoring',
      icon: Eye,
      benefits: ['Live tracking', 'Status updates', 'Performance metrics', 'Alert systems']
    },
    {
      title: 'Automated Optimization',
      description: 'AI-driven decision making for inventory, routing, and resource allocation',
      icon: Cpu,
      benefits: ['Auto-replenishment', 'Route optimization', 'Resource allocation', 'Cost optimization']
    },
    {
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies',
      icon: Shield,
      benefits: ['Risk scoring', 'Early warnings', 'Mitigation plans', 'Business continuity']
    }
  ];

  const useCases = [
    {
      industry: 'Manufacturing',
      description: 'Optimize production planning, reduce lead times, and minimize inventory costs through AI-powered demand forecasting',
      icon: Cpu,
      metrics: ['Lead Time Reduction', 'Inventory Optimization', 'Production Efficiency', 'Cost Savings']
    },
    {
      industry: 'Retail & E-commerce',
      description: 'Predict customer demand, optimize store inventory, and streamline last-mile delivery operations',
      icon: Package,
      metrics: ['Stockout Reduction', 'Delivery Optimization', 'Customer Satisfaction', 'Revenue Growth']
    },
    {
      industry: 'Logistics & Transportation',
      description: 'Optimize routes, reduce fuel costs, and improve fleet utilization with real-time AI insights',
      icon: Truck,
      metrics: ['Route Optimization', 'Fuel Cost Reduction', 'Fleet Utilization', 'Delivery Speed']
    },
    {
      industry: 'Healthcare & Pharmaceuticals',
      description: 'Ensure critical supplies availability, optimize distribution networks, and maintain compliance',
      icon: Shield,
      metrics: ['Supply Availability', 'Compliance Rate', 'Distribution Efficiency', 'Patient Safety']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Reduce Operational Costs',
      description: 'Cut supply chain costs by 25-40% through intelligent optimization and automation.'
    },
    {
      icon: Clock,
      title: 'Improve Delivery Speed',
      description: 'Reduce lead times by 30-50% and improve on-time delivery rates to 98%+.'
    },
    {
      icon: DollarSign,
      title: 'Increase Profit Margins',
      description: 'Boost profitability by 15-25% through better inventory management and cost optimization.'
    },
    {
      icon: Users,
      title: 'Enhance Customer Satisfaction',
      description: 'Improve customer experience with faster deliveries and better product availability.'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 locations',
        'Basic demand forecasting',
        'Route optimization',
        'Standard integrations',
        'Email support'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 25 locations',
        'Advanced AI models',
        'Real-time analytics',
        'Custom integrations',
        'Priority support',
        'Risk management'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited locations',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom development',
        'Advanced security'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="AI Supply Chain Optimization Platform | Zion Tech Group"
        description="Optimize your supply chain with AI-powered demand forecasting, route optimization, and intelligent inventory management. Reduce costs by 25-40% and improve delivery speed by 30-50%."
        keywords="AI supply chain, demand forecasting, route optimization, inventory management, supply chain analytics, logistics optimization"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-6">
              AI Supply Chain Optimization
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your supply chain with AI-powered demand forecasting, intelligent route optimization, and automated inventory management
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Powerful AI-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with deep supply chain expertise to deliver 
              unprecedented optimization and cost savings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Platform Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive tools and features designed to transform your supply chain operations 
              and drive measurable business outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                    <capability.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{capability.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{capability.description}</p>
                <div className="space-y-2">
                  {capability.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI Supply Chain Optimization is transforming industries across the globe, 
              enabling intelligent operations and driving unprecedented efficiency gains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                    <useCase.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{useCase.industry}</h3>
                </div>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-sm text-gray-400">
                      <Target className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI Supply Chain Optimization can transform your organization 
              and drive measurable business outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include a 14-day free trial 
              and our industry-leading 99.9% uptime guarantee.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-blue-400/50 bg-gradient-to-br from-blue-500/10 to-cyan-500/10' 
                    : 'border-slate-700/50 hover:border-blue-400/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                    : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology ensures successful AI Supply Chain Optimization deployment 
              and rapid value realization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Evaluate your current supply chain processes and identify optimization opportunities'
              },
              {
                step: '02',
                title: 'Integration',
                description: 'Connect your existing systems and configure data pipelines for real-time optimization'
              },
              {
                step: '03',
                title: 'Training',
                description: 'Train your team on the platform and supply chain optimization best practices'
              },
              {
                step: '04',
                title: 'Launch',
                description: 'Go live with continuous monitoring and ongoing optimization support'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how AI-powered Supply Chain Optimization can revolutionize your operations 
              and drive unprecedented efficiency gains.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 transition-colors">
                +1 302 464 0950
              </a>
              <p className="text-sm text-slate-400 mt-2">Available 24/7 for urgent support</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
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
}
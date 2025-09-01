import React from 'react';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Truck, Globe, BarChart3, Shield, Zap, Target, TrendingUp, CheckCircle, Star, ArrowRight, Phone, Mail, ExternalLink, Package, Route, Clock, DollarSign, Users } from 'lucide-react';

const AISupplyChainOptimization: React.FC = () => {
  const features = [
    {
      icon: Truck,
      title: 'Route Optimization',
      description: 'AI-powered route planning that reduces delivery time by 30% and fuel costs by 25%',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Global Supply Chain Visibility',
      description: 'Real-time tracking across all suppliers, warehouses, and distribution centers worldwide',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Demand Forecasting',
      description: 'Predictive analytics with 92% accuracy for inventory planning and demand management',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'AI-driven risk assessment and mitigation strategies for supply chain disruptions',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Automated Procurement',
      description: 'Intelligent supplier selection and automated purchase order generation',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Inventory Optimization',
      description: 'Dynamic inventory management that reduces carrying costs by 35% while improving availability',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 5 locations',
        'Basic route optimization',
        'Inventory tracking',
        'Supplier management',
        'Basic reporting',
        'Email support'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 25 locations',
        'Advanced AI optimization',
        'Real-time analytics',
        'API access',
        'Custom workflows',
        'Priority support',
        'Multi-warehouse management'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'For global supply chain operations',
      features: [
        'Unlimited locations',
        'Custom AI models',
        'White-label solution',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 phone support',
        'SLA guarantees'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Manufacturing',
      description: 'Optimize production planning, supplier management, and inventory control across global operations',
      metrics: ['Reduce lead times by 40%', 'Cut inventory costs by 35%', 'Improve supplier performance by 50%']
    },
    {
      title: 'Retail & E-commerce',
      description: 'Streamline distribution networks, optimize last-mile delivery, and manage seasonal inventory fluctuations',
      metrics: ['Increase delivery speed by 30%', 'Reduce shipping costs by 25%', 'Boost customer satisfaction by 45%']
    },
    {
      title: 'Logistics & Transportation',
      description: 'Optimize fleet operations, route planning, and warehouse management for maximum efficiency',
      metrics: ['Improve fleet utilization by 40%', 'Reduce fuel costs by 25%', 'Enhance delivery accuracy by 95%']
    }
  ];

  const integrations = [
    'SAP', 'Oracle', 'Microsoft Dynamics', 'NetSuite', 'QuickBooks', 'Shopify',
    'WooCommerce', 'Magento', 'FedEx', 'UPS', 'DHL', 'Amazon FBA',
    'WMS Systems', 'TMS Platforms', 'ERP Systems', 'CRM Platforms'
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '30% Cost Reduction',
      description: 'Optimize routes, reduce fuel consumption, and minimize inventory carrying costs'
    },
    {
      icon: Clock,
      title: '40% Faster Delivery',
      description: 'Streamline operations and eliminate bottlenecks for improved customer satisfaction'
    },
    {
      icon: DollarSign,
      title: '25% Revenue Growth',
      description: 'Improve service levels and expand market reach with optimized supply chains'
    },
    {
      icon: Users,
      title: '95% Customer Satisfaction',
      description: 'Deliver on-time, every time with AI-powered optimization and real-time tracking'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Supply Chain Optimization Platform - Zion Tech Group"
        description="Transform your supply chain with AI-powered optimization. Reduce costs by 30%, improve delivery speed by 40%, and gain real-time visibility across global operations."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Truck className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain Optimization Platform
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your supply chain with artificial intelligence. Optimize routes, predict demand, 
              manage inventory, and gain real-time visibility across your entire global network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#demo" 
                className="inline-flex items-center px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all duration-200 border border-slate-600"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Supply Chain Performance
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI platform delivers measurable results that directly impact your operational efficiency and bottom line
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Modern Supply Chains
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to optimize, automate, and transform your supply chain operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-200"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing for Every Business
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your supply chain needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800 rounded-xl p-8 border-2 ${
                  plan.popular 
                    ? 'border-blue-500 relative' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>
                  <p className="text-slate-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how different industries are transforming their supply chains with AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-slate-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="flex items-center text-slate-300">
                      <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Connect with your existing ERP, WMS, TMS, and e-commerce platforms without disruption
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center hover:border-slate-600 transition-all duration-200"
              >
                <span className="text-slate-300 font-medium">{integration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join hundreds of companies already using AI to transform their supply chain operations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="inline-flex items-center px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all duration-200 border border-slate-600"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-slate-300 hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-slate-300 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <ExternalLink className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISupplyChainOptimization;
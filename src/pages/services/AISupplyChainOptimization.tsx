import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Truck, 
  Package, 
  Globe, 
  Zap, 
  Brain, 
  CheckCircle,
  BarChart3,
  Target,
  Clock,
  Users,
  Shield,
  Lock,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Activity,
  PieChart,
  LineChart,
  AlertTriangle,
  Settings,
  Database,
  Network,
  Warehouse,
  Route,
  TrendingUp,
  DollarSign,
  AlertCircle,
  FileText,
  Cpu
} from 'lucide-react';

export default function AISupplyChainOptimization() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Forecasting',
      description: 'Advanced machine learning algorithms predict demand with 95% accuracy across global supply chains'
    },
    {
      icon: Truck,
      title: 'Route Optimization',
      description: 'Intelligent route planning reduces delivery times by 40% and fuel costs by 25%'
    },
    {
      icon: Warehouse,
      title: 'Inventory Management',
      description: 'Real-time inventory tracking with automated reorder points and demand prediction'
    },
    {
      icon: Globe,
      title: 'Global Supply Chain Visibility',
      description: 'End-to-end visibility across all suppliers, warehouses, and distribution centers'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'AI-powered risk assessment and mitigation for supply chain disruptions'
    },
    {
      icon: Zap,
      title: 'Automated Procurement',
      description: 'Intelligent procurement automation with supplier performance analytics'
    }
  ];

  const optimizationModules = [
    {
      name: 'Demand Forecasting',
      description: 'AI-powered demand prediction with seasonal analysis and trend detection',
      features: ['Machine Learning Models', 'Seasonal Adjustments', 'Trend Analysis', 'Confidence Intervals'],
      price: '$3,500/month'
    },
    {
      name: 'Inventory Optimization',
      description: 'Dynamic inventory management with safety stock optimization',
      features: ['Safety Stock Calculation', 'Reorder Point Optimization', 'ABC Analysis', 'Demand Variability'],
      price: '$2,800/month'
    },
    {
      name: 'Transportation Optimization',
      description: 'Route planning and carrier selection optimization',
      features: ['Route Optimization', 'Carrier Selection', 'Load Planning', 'Cost Optimization'],
      price: '$4,200/month'
    },
    {
      name: 'Supplier Management',
      description: 'Supplier performance tracking and relationship optimization',
      features: ['Performance Metrics', 'Risk Assessment', 'Cost Analysis', 'Quality Monitoring'],
      price: '$2,500/month'
    }
  ];

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 100 SKUs',
        'Basic AI forecasting',
        'Standard reporting',
        'Email support',
        'Mobile app access',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for large enterprises',
      features: [
        'Up to 10,000 SKUs',
        'Advanced AI optimization',
        'Custom integrations',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Multi-location support'
      ],
      popular: true
    },
    {
      name: 'Global Enterprise',
      price: '$19,999',
      period: '/month',
      description: 'For multinational corporations',
      features: [
        'Unlimited SKUs',
        'Full AI suite',
        'Custom development',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'AI model training'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '25% Cost Reduction',
      description: 'AI optimization reduces supply chain costs significantly'
    },
    {
      icon: Clock,
      title: '40% Faster Delivery',
      description: 'Optimized routes and inventory reduce lead times'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Proactive risk identification prevents supply chain disruptions'
    },
    {
      icon: DollarSign,
      title: 'Improved ROI',
      description: 'Better inventory management increases cash flow and profitability'
    }
  ];

  const industries = [
    'Manufacturing',
    'Retail & E-commerce',
    'Healthcare & Pharmaceuticals',
    'Food & Beverage',
    'Automotive',
    'Electronics',
    'Fashion & Apparel',
    'Logistics & Transportation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Supply Chain Optimization - Zion Tech Group"
        description="Revolutionary AI-powered supply chain optimization platform with 95% forecasting accuracy, route optimization, and intelligent inventory management."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain Optimization
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your supply chain with AI-powered optimization, predictive analytics, and intelligent 
              automation. Achieve 95% forecasting accuracy and reduce costs by 25%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Supply Chain AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI supply chain platform combines cutting-edge machine learning with logistics expertise 
              to deliver unprecedented optimization and cost savings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Modules Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Optimization Modules
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform offers specialized modules designed to optimize every aspect of your supply chain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {optimizationModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{module.name}</h3>
                  <div className="text-right">
                    <div className="text-orange-400 font-semibold">{module.price}</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{module.description}</p>
                <div className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform is designed to address the unique challenges of various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700 text-center hover:border-slate-600 transition-all duration-300"
              >
                <div className="text-white font-semibold text-sm">{industry}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Supply Chain-Focused Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your supply chain complexity and requirements. All plans include core AI optimization features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-orange-500 ring-2 ring-orange-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/request-quote"
                  className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Supply Chain AI?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI supply chain platform delivers measurable improvements across all key performance metrics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600/20 to-red-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading companies already using AI to optimize their supply chains and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
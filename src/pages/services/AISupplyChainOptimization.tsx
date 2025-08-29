import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Truck, 
  Package, 
  Brain, 
  Zap, 
  Globe, 
  Users, 
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Target,
  Award,
  BarChart3,
  Activity,
  Database,
  Network,
  Cpu,
  Route,
  Warehouse
} from 'lucide-react';

export default function AISupplyChainOptimization() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Demand Forecasting',
      description: 'Advanced machine learning algorithms that predict demand patterns with 95% accuracy, optimizing inventory levels.',
      benefits: ['Predictive analytics', 'Seasonal forecasting', 'Demand planning', 'Inventory optimization']
    },
    {
      icon: Route,
      title: 'Route Optimization',
      description: 'Intelligent route planning that reduces delivery times and fuel costs while improving customer satisfaction.',
      benefits: ['Dynamic routing', 'Real-time optimization', 'Fuel efficiency', 'Delivery tracking']
    },
    {
      icon: Warehouse,
      title: 'Warehouse Management',
      description: 'Smart warehouse operations with AI-driven picking, packing, and inventory management systems.',
      benefits: ['Automated picking', 'Space optimization', 'Inventory tracking', 'Order fulfillment']
    },
    {
      icon: Network,
      title: 'Supplier Management',
      description: 'Comprehensive supplier evaluation and risk assessment with AI-powered performance analytics.',
      benefits: ['Supplier scoring', 'Risk assessment', 'Performance tracking', 'Cost optimization']
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'End-to-end supply chain visibility with real-time tracking and predictive analytics.',
      benefits: ['Live tracking', 'Predictive alerts', 'Performance metrics', 'Compliance monitoring']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics dashboard with actionable insights for supply chain optimization.',
      benefits: ['KPI tracking', 'Custom reports', 'Trend analysis', 'Performance optimization']
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce & Retail',
      title: 'Omnichannel Fulfillment',
      description: 'Optimize inventory across multiple sales channels with AI-powered demand forecasting and fulfillment.',
      metrics: ['30% reduction in stockouts', '25% improvement in delivery times', '20% decrease in inventory costs']
    },
    {
      industry: 'Manufacturing',
      title: 'Just-in-Time Production',
      description: 'Streamline manufacturing processes with AI-driven supply chain optimization and inventory management.',
      metrics: ['40% reduction in lead times', '35% improvement in on-time delivery', '30% decrease in waste']
    },
    {
      industry: 'Logistics & Transportation',
      title: 'Route Optimization',
      description: 'Optimize delivery routes and schedules with AI-powered logistics planning and real-time adjustments.',
      metrics: ['25% reduction in fuel costs', '20% improvement in delivery efficiency', '15% increase in customer satisfaction']
    },
    {
      industry: 'Healthcare & Pharmaceuticals',
      title: 'Medical Supply Chain',
      description: 'Ensure critical medical supplies are available when needed with AI-powered demand forecasting.',
      metrics: ['99.9% availability rate', 'Zero stockouts of critical items', 'Real-time supply tracking']
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Reduce supply chain costs through optimization and automation.',
      value: '20-35%'
    },
    {
      icon: Clock,
      title: 'Lead Time Reduction',
      description: 'Faster delivery times and improved customer satisfaction.',
      value: '30-50%'
    },
    {
      icon: Target,
      title: 'Inventory Optimization',
      description: 'Optimal inventory levels with reduced carrying costs.',
      value: '25-40%'
    },
    {
      icon: TrendingUp,
      title: 'Efficiency Improvement',
      description: 'Streamlined operations with better resource utilization.',
      value: '40-60%'
    }
  ];

  const technologies = [
    'Machine Learning AI',
    'Predictive Analytics',
    'Internet of Things (IoT)',
    'Blockchain Technology',
    'Cloud Computing',
    'Real-time Processing',
    'Big Data Analytics',
    'Route Optimization Algorithms',
    'Demand Forecasting Models',
    'Supply Chain Analytics',
    'Warehouse Management Systems',
    'Transportation Management'
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic demand forecasting',
        'Route optimization',
        'Inventory management',
        'Basic analytics',
        'Email support',
        'Standard reporting'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      plan: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing businesses and enterprises',
      features: [
        'Advanced AI forecasting',
        'Multi-location optimization',
        'Supplier management',
        'Real-time monitoring',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$1,199',
      period: '/month',
      description: 'For large organizations with complex supply chains',
      features: [
        'Full AI optimization suite',
        'Custom AI models',
        'Dedicated support team',
        'SLA guarantees',
        'On-site implementation',
        'Custom development',
        'White-label options',
        'Advanced compliance'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Supply Chain Optimization - Zion Tech Group"
        description="Optimize your supply chain with AI-powered forecasting, route optimization, and inventory management. Reduce costs and improve efficiency."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Truck className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
                {' '}Supply Chain Optimization
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Transform your supply chain with AI-powered optimization. Reduce costs, improve efficiency, and enhance 
              customer satisfaction with intelligent demand forecasting, route optimization, and inventory management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <span>Optimize Now</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center space-x-2 border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300"
              >
                <span>View Pricing</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">20-35%</div>
              <div className="text-slate-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">30-50%</div>
              <div className="text-slate-400">Lead Time Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">25-40%</div>
              <div className="text-slate-400">Inventory Optimization</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">40-60%</div>
              <div className="text-slate-400">Efficiency Improvement</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Intelligent Supply Chain
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Features
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI supply chain optimization platform combines cutting-edge technology with comprehensive 
              features to streamline your operations and maximize efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry-Specific
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI supply chain optimization platform is tailored to meet the unique challenges of different industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full">
                    {useCase.industry}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Key Results:</h4>
                  {useCase.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <span className="text-slate-300">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Measurable
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Business Impact
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI supply chain optimization platform delivers quantifiable results that directly impact your bottom line.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-4">{benefit.value}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Cutting-Edge
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Technologies
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Built on the latest AI and supply chain technologies to deliver superior optimization and efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-green-400/50 transition-all duration-300 text-center"
              >
                <div className="text-white font-semibold">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Transparent
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Pricing
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the perfect supply chain optimization plan for your business. All plans include a 30-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-green-400/50 scale-105' 
                    : 'border-slate-700/50 hover:border-green-400/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-slate-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.plan === 'Enterprise' ? '/contact' : '/signup'}
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600'
                      : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Supply Chain?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already transformed their supply chains 
              with our AI-powered optimization platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <span>Start Optimizing</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center space-x-2 border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300"
              >
                <span>Call +1 302 464 0950</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6 text-slate-400">
              <p>Questions? Email us at <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300">kleber@ziontechgroup.com</a></p>
              <p>Visit us at <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
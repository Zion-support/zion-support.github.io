import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Truck, 
  TrendingUp, 
  Target, 
  Zap, 
  AlertTriangle, 
  Cloud, 
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Eye,
  Sparkles,
  Rocket,
  Globe,
  Clock,
  Award,
  Star,
  MessageCircle,
  Phone,
  Mail,
  ShoppingCart,
  DollarSign,
  Heart,
  Factory,
  BarChart3,
  Calendar,
  Mail as MailIcon,
  Share2,
  Monitor,
  PieChart,
  Headphones,
  LifeBuoy,
  MessageSquare,
  Activity,
  Target as TargetIcon,
  TrendingDown,
  AlertTriangle as AlertTriangleIcon,
  Lock,
  Scale,
  Gauge,
  TrendingUp as TrendingUpIcon,
  AlertCircle,
  CheckSquare,
  FileText,
  BarChart,
  PieChart as PieChartIcon,
  Package,
  Route,
  Warehouse,
  MapPin,
  Navigation,
  Compass
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AISupplyChainOptimizationPlatform() {
  const features = [
    {
      icon: Brain,
      title: 'AI Demand Forecasting',
      description: 'Predict demand patterns with 95% accuracy using advanced machine learning algorithms'
    },
    {
      icon: Truck,
      title: 'Route Optimization',
      description: 'Optimize delivery routes in real-time for maximum efficiency and cost savings'
    },
    {
      icon: TrendingUp,
      title: 'Inventory Management',
      description: 'Smart inventory optimization with automated reorder points and safety stock calculations'
    },
    {
      icon: Target,
      title: 'Supplier Analytics',
      description: 'Evaluate supplier performance and identify optimization opportunities with AI insights'
    },
    {
      icon: AlertTriangle,
      title: 'Risk Management',
      description: 'Proactive identification and mitigation of supply chain disruptions and bottlenecks'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Comprehensive dashboards for tracking KPIs and identifying improvement areas'
    }
  ];

  const benefits = [
    'Reduce supply chain costs by up to 30% through intelligent optimization',
    'Improve delivery accuracy by 95% with AI-powered route planning',
    'Reduce inventory carrying costs by 25% with predictive demand forecasting',
    'Minimize supply chain disruptions with proactive risk management',
    'Increase customer satisfaction through faster, more reliable deliveries',
    'Gain real-time visibility into all supply chain operations'
  ];

  const useCases = [
    {
      industry: 'E-commerce & Retail',
      applications: ['Order fulfillment', 'Last-mile delivery', 'Inventory optimization', 'Returns management'],
      icon: ShoppingCart
    },
    {
      industry: 'Manufacturing',
      applications: ['Raw material sourcing', 'Production planning', 'Quality control', 'Distribution optimization'],
      icon: Factory
    },
    {
      industry: 'Logistics & Transportation',
      applications: ['Fleet management', 'Route optimization', 'Load balancing', 'Real-time tracking'],
      icon: Truck
    },
    {
      industry: 'Healthcare & Pharmaceuticals',
      applications: ['Medical supply chain', 'Cold chain logistics', 'Regulatory compliance', 'Emergency response'],
      icon: Heart
    }
  ];

  const technologies = [
    'Machine Learning & AI',
    'Internet of Things (IoT)',
    'Real-time Analytics',
    'Predictive Modeling',
    'Blockchain for Transparency',
    'Cloud-Native Architecture'
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses with basic supply chain needs',
      features: [
        'Up to 100 SKUs',
        'Basic demand forecasting',
        'Route optimization (limited)',
        'Inventory tracking',
        'Basic reporting',
        'Email support',
        'Mobile app access'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      plan: 'Professional',
      price: '$999',
      period: '/month',
      description: 'Ideal for growing businesses with complex supply chain operations',
      features: [
        'Up to 1,000 SKUs',
        'Advanced AI forecasting',
        'Full route optimization',
        'Supplier analytics',
        'Risk management',
        'Advanced reporting',
        'Priority support',
        'API access',
        'Custom integrations'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations with complex global supply chains',
      features: [
        'Unlimited SKUs',
        'Custom AI model training',
        'Multi-location optimization',
        'Advanced risk modeling',
        'Custom reporting',
        'Dedicated account manager',
        'On-premise options',
        'Custom training programs',
        'Supply chain consulting'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEO 
        title="AI-Powered Supply Chain Optimization Platform - Zion Tech Group"
        description="Transform your supply chain with AI-powered optimization, demand forecasting, and route planning. Reduce costs and improve efficiency with intelligent automation."
        keywords="AI supply chain optimization, demand forecasting, route optimization, inventory management, logistics automation, supply chain analytics"
        canonical="https://ziontechgroup.com/services/ai-supply-chain-optimization-platform"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Supply Chain
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Optimization Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Revolutionize your supply chain operations with intelligent automation, predictive analytics, 
              and real-time optimization that drives efficiency and reduces costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                <Truck className="mr-2 w-5 h-5" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Intelligent Supply Chain Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to optimize your supply chain operations and drive business growth
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Proven results and measurable impact on your supply chain operations
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-lg text-slate-300">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how different industries leverage our platform for supply chain excellence
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, idx) => (
                    <li key={idx} className="text-sm text-slate-300">• {app}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your supply chain optimization needs
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative bg-slate-800/50 p-8 rounded-2xl border ${
                  plan.popular 
                    ? 'border-blue-400 ring-2 ring-blue-400/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-slate-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.plan === 'Enterprise' ? '/contact' : '/contact'}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Join leading companies using our AI-powered platform for supply chain excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-slate-300 hover:text-blue-400 transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div>
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-slate-300 hover:text-blue-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <Globe className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
              <a href="https://ziontechgroup.com" className="text-slate-300 hover:text-blue-400 transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
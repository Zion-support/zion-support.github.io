import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  Zap, 
  Brain, 
  CheckCircle,
  ArrowRight,
  Star,
  Crown,
  Rocket,
  Shield,
  Eye,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Building,
  DollarSign,
  Calendar,
  Clock,
  Globe,
  Lock,
  Cpu,
  Database,
  Network,
  Code,
  Server,
  Cloud,
  Heart,
  Leaf,
  Gauge,
  GitFork,
  Atom,
  Smartphone,
  Truck,
  Factory,
  City,
  CheckCircle2,
  Search,
  Filter,
  PieChart,
  LineChart,
  Activity,
  ShoppingCart,
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AISalesIntelligencePlatform() {
  const features = [
    {
      title: 'AI-Powered Lead Scoring',
      description: 'Intelligent lead qualification with 95% accuracy using machine learning algorithms',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Predictive Sales Analytics',
      description: 'Forecast sales outcomes and identify high-probability opportunities',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Real-time Market Intelligence',
      description: 'Live market data and competitor analysis for strategic decision making',
      icon: Eye,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Automated Sales Outreach',
      description: 'AI-driven personalized messaging and follow-up sequences',
      icon: MessageCircle,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Customer Behavior Analysis',
      description: 'Deep insights into customer patterns and buying signals',
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Sales Performance Optimization',
      description: 'Data-driven recommendations to improve conversion rates',
      icon: Zap,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 199,
      period: 'month',
      description: 'Perfect for small sales teams getting started with AI',
      features: [
        'AI lead scoring (up to 1000 leads/month)',
        'Basic sales analytics dashboard',
        'Email support',
        'Up to 5 users',
        'Standard integrations',
        'Monthly reports'
      ],
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      name: 'Professional',
      price: 499,
      period: 'month',
      description: 'Ideal for growing sales organizations',
      features: [
        'Advanced AI lead scoring (unlimited)',
        'Predictive sales analytics',
        'Real-time market intelligence',
        'Automated outreach sequences',
        'Priority support',
        'Up to 25 users',
        'Advanced integrations',
        'Custom reporting'
      ],
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 1299,
      period: 'month',
      description: 'For large sales teams requiring enterprise features',
      features: [
        'Full AI sales intelligence suite',
        'Custom AI model development',
        'Dedicated account manager',
        '24/7 priority support',
        'Unlimited users',
        'White-label solutions',
        'SLA guarantees',
        'On-site training'
      ],
      icon: Star,
      color: 'from-orange-500 to-red-500',
      popular: false
    }
  ];

  const benefits = [
    'Increase sales conversion rates by up to 300%',
    'Reduce lead qualification time by 80%',
    'Improve sales forecasting accuracy by 95%',
    'Automate repetitive sales tasks',
    'Real-time market insights and alerts',
    'Scalable AI infrastructure'
  ];

  const useCases = [
    {
      title: 'B2B Sales Teams',
      description: 'Enterprise sales organizations looking to scale efficiently',
      icon: Building,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'E-commerce Businesses',
      description: 'Online retailers optimizing customer acquisition',
      icon: ShoppingCart,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'SaaS Companies',
      description: 'Software companies with subscription-based models',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Real Estate',
      description: 'Property professionals managing client relationships',
      icon: Home,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEO 
        title="AI Sales Intelligence Platform | Zion Tech Group"
        description="Revolutionize your sales with our AI Sales Intelligence Platform. Boost conversions, automate outreach, and gain deep market insights with cutting-edge AI technology."
        keywords="AI sales intelligence, sales automation, lead scoring, predictive analytics, sales optimization, market intelligence"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              AI-Powered Sales Intelligence
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Sales Intelligence
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your sales process with AI-powered intelligence. Automate lead scoring, 
              predict outcomes, and optimize every sales interaction for maximum conversion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="#demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-blue-500/30 text-blue-300 font-semibold hover:bg-blue-500/10 transition-all duration-300"
              >
                Watch Demo
              </Link>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Sales Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform combines advanced AI with sales expertise to create unprecedented intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full hover:border-blue-500/50 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect For Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI Sales Intelligence Platform adapts to your specific business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${useCase.color} mb-4`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your sales team size and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} mb-6`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                        : 'border border-blue-500/30 text-blue-300 hover:bg-blue-500/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience unprecedented sales transformation with AI intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Sales?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of sales teams already experiencing the future of AI-powered sales intelligence
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-blue-500/30 text-blue-300 font-semibold hover:bg-blue-500/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
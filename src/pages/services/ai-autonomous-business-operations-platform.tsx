import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Zap, 
  Rocket, 
  Shield, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle,
  ArrowRight,
  BarChart3,
  Cpu,
  Database,
  Network,
  Globe,
  Lock,
  Star,
  Crown,
  Sparkles,
  Target,
  Award,
  Code,
  Server,
  Cloud,
  Heart,
  Leaf,
  DollarSign,
  Calendar,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Building,
  Gauge,
  GitFork,
  Atom,
  Eye,
  Smartphone,
  Truck,
  Factory,
  City,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIAutonomousBusinessOperationsPlatform() {
  const features = [
    {
      title: 'AI-Powered Decision Making',
      description: 'Advanced machine learning algorithms that make real-time business decisions',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Autonomous Process Optimization',
      description: 'Self-optimizing workflows that continuously improve efficiency',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast market trends and business outcomes with 95% accuracy',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Real-time Monitoring',
      description: '24/7 business operations monitoring with instant alerts',
      icon: Eye,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Intelligent Resource Allocation',
      description: 'AI-driven resource optimization for maximum ROI',
      icon: Target,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Automated Risk Management',
      description: 'Proactive risk identification and mitigation strategies',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 299,
      period: 'month',
      description: 'Perfect for small businesses starting their AI journey',
      features: [
        'Basic AI decision support',
        'Process automation (up to 10 workflows)',
        'Standard analytics dashboard',
        'Email support',
        'Up to 5 users',
        'Basic integrations'
      ],
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      name: 'Professional',
      price: 799,
      period: 'month',
      description: 'Ideal for growing businesses with complex operations',
      features: [
        'Advanced AI decision making',
        'Unlimited workflow automation',
        'Predictive analytics',
        'Real-time monitoring',
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
      price: 1999,
      period: 'month',
      description: 'For large organizations requiring full autonomy',
      features: [
        'Full AI autonomy',
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
    'Reduce operational costs by up to 40%',
    'Increase efficiency by 60%',
    'Improve decision accuracy by 95%',
    '24/7 autonomous operations',
    'Real-time performance optimization',
    'Scalable AI infrastructure'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="AI Autonomous Business Operations Platform | Zion Tech Group"
        description="Transform your business with our AI Autonomous Business Operations Platform. Automate decision-making, optimize processes, and achieve unprecedented efficiency with cutting-edge AI technology."
        keywords="AI autonomous business operations, business automation, AI decision making, process optimization, predictive analytics, business intelligence"
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Business Operations
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous Business
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Operations Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with autonomous AI operations. Our platform makes intelligent decisions, 
              optimizes processes, and drives unprecedented efficiency 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="#demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-purple-500/30 text-purple-300 font-semibold hover:bg-purple-500/10 transition-all duration-300"
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
              Revolutionary AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with business intelligence to create a truly autonomous operation
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
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full hover:border-purple-500/50 transition-all duration-300">
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
              Choose the plan that fits your business needs and scale as you grow
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
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                        : 'border border-purple-500/30 text-purple-300 hover:bg-purple-500/10'
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
              Experience unprecedented business transformation with AI autonomy
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
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already experiencing the future of autonomous operations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-purple-500/30 text-purple-300 font-semibold hover:bg-purple-500/10 transition-all duration-300"
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
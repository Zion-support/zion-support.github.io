import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Cpu, 
  Shield, 
  Zap, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Network,
  Smartphone,
  Database,
  Lock,
  Globe,
  BarChart3,
  Server,
  Cloud,
  Star,
  Award,
  Rocket,
  Wifi,
  Activity,
  Monitor,
  Smartphone,
  Watch,
  Car,
  Home,
  Factory,
  Building,
  ShoppingCart,
  Leaf
} from 'lucide-react';

export default function AIEdgeComputingPlatform() {
  const features = [
    'Real-time AI inference at the edge',
    'Low-latency data processing',
    'Intelligent device management',
    'Edge-to-cloud synchronization',
    'AI model optimization for edge devices',
    'Autonomous decision making',
    'Edge security & privacy protection',
    'Scalable edge infrastructure',
    'IoT device integration',
    'Edge analytics & insights',
    'Federated learning capabilities',
    'Edge computing orchestration'
  ];

  const useCases = [
    {
      title: 'Smart Cities',
      description: 'Intelligent traffic management, environmental monitoring, and public safety systems',
      icon: Building,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Industrial IoT',
      description: 'Predictive maintenance, quality control, and process optimization in manufacturing',
      icon: Factory,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Real-time decision making for self-driving cars and drones',
      icon: Car,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Healthcare Monitoring',
      description: 'Patient monitoring, medical device management, and emergency response',
      icon: Activity,
      color: 'from-red-500 to-orange-500'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small edge computing projects',
      features: [
        'Up to 100 edge devices',
        'Basic AI model deployment',
        'Edge analytics dashboard',
        'Basic security features',
        'Email support',
        'Up to 1TB data processing/month'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing edge computing operations',
      features: [
        'Up to 1,000 edge devices',
        'Advanced AI model optimization',
        'Real-time monitoring & alerts',
        'Advanced security & encryption',
        'Priority support',
        'Up to 10TB data processing/month',
        'Custom edge applications',
        'Performance analytics'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,499',
      period: '/month',
      description: 'For large-scale edge computing deployments',
      features: [
        'Unlimited edge devices',
        'Custom AI model training',
        'White-label solutions',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom integrations',
        'Advanced compliance features',
        'Multi-region deployment',
        'Performance optimization',
        'Security consulting'
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const benefits = [
    {
      title: 'Ultra-Low Latency',
      description: 'Process data in milliseconds with edge computing, enabling real-time AI applications',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce bandwidth costs and cloud computing expenses with local processing',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Enhanced Privacy',
      description: 'Keep sensitive data local with edge processing and minimal cloud transmission',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Scalability',
      description: 'Easily scale from a few devices to millions with our edge computing platform',
      icon: Rocket,
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  const industries = [
    {
      title: 'Manufacturing',
      icon: Factory,
      description: 'Predictive maintenance, quality control, and process optimization',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Healthcare',
      icon: Activity,
      description: 'Patient monitoring, medical device management, and telemedicine',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Transportation',
      icon: Car,
      description: 'Traffic management, autonomous vehicles, and logistics optimization',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Retail',
      icon: ShoppingCart,
      description: 'Inventory management, customer analytics, and smart checkout systems',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Energy',
      icon: Zap,
      description: 'Smart grid management, renewable energy optimization, and demand forecasting',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Agriculture',
      icon: Leaf,
      description: 'Precision farming, crop monitoring, and automated irrigation systems',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <>
      <SEO 
        title="AI Edge Computing Platform - Zion Tech Group"
        description="Revolutionary edge computing platform powered by AI. Process data locally with ultra-low latency for IoT, autonomous systems, and smart infrastructure."
        canonical="/services/ai-edge-computing-platform"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl">
                  <Network className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Edge Computing Platform
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your IoT infrastructure with AI-powered edge computing. 
                Process data locally with ultra-low latency for real-time intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-xl font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Powerful Edge Computing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI-powered edge computing platform provides everything you need for intelligent IoT deployments.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-white font-semibold">{feature}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Transform Industries with Edge AI
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover how AI-powered edge computing can revolutionize your industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${useCase.color} mb-6`}>
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 text-lg">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Industry Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Tailored edge computing solutions for every industry and use case.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${industry.color} mb-4`}>
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{industry.title}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the perfect plan for your edge computing needs. Scale as you grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border-2 ${
                    plan.popular 
                      ? 'border-green-500 shadow-2xl shadow-green-500/25' 
                      : 'border-slate-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose AI Edge Computing?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of computing with AI-powered edge solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="flex items-start space-x-6"
                >
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${benefit.color}`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 text-lg">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Deploy Edge AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the edge computing revolution with AI-powered solutions that process data where it matters most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-xl font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
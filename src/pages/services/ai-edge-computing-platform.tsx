import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Cpu, 
  Network, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Server, 
  Globe,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Lock,
  Activity,
  BarChart3,
  Users,
  Clock,
  MessageSquare,
  Phone,
  Mail,
  Calendar,
  Star,
  Award,
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Code,
  Database,
  Smartphone,
  Wifi,
  Cpu,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Eye,
  Sparkles,
  Workflow,
  Bot,
  ShieldCheck,
  HardDrive,
  Building2,
  FileText,
  HelpCircle,
  BarChart,
  Users2,
  Settings,
  Palette
} from 'lucide-react';

export default function AIEdgeComputingPlatform() {
  const features = [
    {
      title: 'Real-time AI Processing',
      description: 'Process AI workloads at the edge with sub-10ms latency',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Distributed Intelligence',
      description: 'Deploy AI models across edge nodes for optimal performance',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: '5G Network Optimization',
      description: 'Optimize network performance with AI-driven edge computing',
      icon: Network,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'IoT Device Management',
      description: 'Manage and orchestrate thousands of IoT devices intelligently',
      icon: Chip,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Edge Security',
      description: 'Advanced security protocols for edge computing environments',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Predictive Analytics',
      description: 'Real-time predictive analytics at the edge',
      icon: BarChart3,
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const useCases = [
    {
      title: 'Smart Cities',
      description: 'Traffic management, environmental monitoring, and public safety',
      icon: Building2,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Industrial IoT',
      description: 'Predictive maintenance, quality control, and automation',
      icon: HardDrive,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Healthcare',
      description: 'Remote patient monitoring and real-time diagnostics',
      icon: Activity,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Real-time decision making and sensor fusion',
      icon: Car,
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Edge Starter',
      price: 299,
      period: '/month',
      description: 'Perfect for small IoT deployments',
      features: [
        'Up to 100 edge nodes',
        'Basic AI models',
        'Standard security',
        'Email support',
        'Basic analytics',
        '5GB data storage'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Edge Professional',
      price: 799,
      period: '/month',
      description: 'Ideal for medium-scale deployments',
      features: [
        'Up to 1,000 edge nodes',
        'Advanced AI models',
        'Enhanced security',
        'Priority support',
        'Advanced analytics',
        '50GB data storage',
        'Custom integrations',
        'API access'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Edge Enterprise',
      price: 1999,
      period: '/month',
      description: 'For large-scale enterprise deployments',
      features: [
        'Unlimited edge nodes',
        'Custom AI models',
        'Enterprise security',
        'Dedicated support',
        'Custom analytics',
        'Unlimited storage',
        'White-label solutions',
        'SLA guarantees'
      ],
      popular: false,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const benefits = [
    {
      title: 'Reduced Latency',
      description: 'Process data closer to the source for faster response times',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce cloud costs by processing data at the edge',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Bandwidth Efficiency',
      description: 'Minimize data transfer with local processing',
      icon: Network,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Enhanced Privacy',
      description: 'Keep sensitive data local with edge processing',
      icon: Lock,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      <SEO 
        title="AI Edge Computing Platform | Zion Tech Group"
        description="Transform your business with AI-powered edge computing solutions. Real-time processing, distributed intelligence, and IoT optimization."
        keywords="AI edge computing, IoT, 5G, real-time processing, distributed AI, edge security"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Cpu className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Edge Computing Platform
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Revolutionize your business with AI-powered edge computing. Process data in real-time, 
              reduce latency, and optimize your IoT infrastructure with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Edge Computing Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI Edge Computing Platform combines the power of artificial intelligence with 
              cutting-edge edge computing technology to deliver unprecedented performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue/30 backdrop-blur-sm rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how AI Edge Computing is transforming industries across the globe.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue/30 backdrop-blur-sm rounded-xl p-8 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-xl flex items-center justify-center mb-6`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-zion-slate-light text-lg">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the perfect plan for your edge computing needs. All plans include 
              our core AI features and enterprise-grade security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-zion-blue/30 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-zion-cyan/50 ring-2 ring-zion-cyan/20' 
                    : 'border-zion-purple/30'
                } hover:border-zion-cyan/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zion-slate-light mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-zion-slate-light ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg'
                      : 'bg-zion-blue/50 text-zion-cyan border border-zion-cyan hover:bg-zion-cyan hover:text-white'
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Edge Computing?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the transformative benefits of processing AI workloads at the edge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of businesses already using AI Edge Computing to gain a competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
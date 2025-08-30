import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Atom, 
  Zap, 
  Shield, 
  TrendingUp, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Atom,
  Brain,
  Circuit,
  Algorithm,
  TrendingUp,
  Search,
  Building2,
  Cloud,
  Shield,
  BarChart,
  Network,
  HelpCircle,
  Rocket,
  Target,
  Users,
  Globe,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  BarChart,
  Users2,
  Settings,
  Palette,
  Handshake,
  Lightbulb,
  Smartphone,
  Monitor,
  HardDrive,
  FileText,
  HelpCircle,
  BarChart3,
  Building2,
  GraduationCap,
  Briefcase,
  Heart,
  DollarSign
} from 'lucide-react';

export default function AIQuantumNeuralNetworkPlatform() {
  const features = [
    {
      title: 'Quantum Neural Processing',
      description: 'Advanced quantum computing algorithms integrated with neural networks for unprecedented processing power',
      icon: Atom,
      benefits: ['1000x faster processing', 'Quantum advantage in ML', 'Neural network optimization']
    },
    {
      title: 'Hybrid AI Architecture',
      description: 'Combines classical AI with quantum computing for optimal performance across all use cases',
      icon: Brain,
      benefits: ['Best of both worlds', 'Scalable architecture', 'Future-proof technology']
    },
    {
      title: 'Quantum-Safe Security',
      description: 'Post-quantum cryptography and quantum-resistant algorithms for ultimate security',
      icon: Shield,
      benefits: ['Quantum-resistant encryption', 'Advanced threat protection', 'Compliance ready']
    },
    {
      title: 'Real-time Optimization',
      description: 'Instant optimization of complex systems using quantum algorithms and neural networks',
      icon: TrendingUp,
      benefits: ['Real-time decision making', 'Complex problem solving', 'Performance optimization']
    }
  ];

  const useCases = [
    {
      title: 'Financial Trading',
      description: 'Quantum-powered algorithmic trading with neural network pattern recognition',
      icon: Coins,
      benefits: ['Faster trade execution', 'Better risk assessment', 'Market prediction']
    },
    {
      title: 'Drug Discovery',
      description: 'Quantum chemistry simulations accelerated by neural networks for pharmaceutical research',
      icon: Heart,
      benefits: ['Faster drug development', 'Molecular optimization', 'Clinical trial prediction']
    },
    {
      title: 'Climate Modeling',
      description: 'Complex climate simulations using quantum algorithms and AI predictions',
      icon: Leaf,
      benefits: ['Accurate predictions', 'Policy optimization', 'Risk assessment']
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Quantum optimization of logistics networks with AI-powered demand forecasting',
      icon: Network,
      benefits: ['Cost reduction', 'Efficiency improvement', 'Risk mitigation']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for research institutions and small teams',
      features: [
        'Basic quantum neural processing',
        'Up to 10 concurrent users',
        'Standard security features',
        'Email support',
        'Basic analytics dashboard'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$8,500',
      period: '/month',
      description: 'Ideal for growing businesses and research teams',
      features: [
        'Advanced quantum neural processing',
        'Up to 50 concurrent users',
        'Enhanced security features',
        'Priority support',
        'Advanced analytics',
        'Custom model training',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$25,000',
      period: '/month',
      description: 'For large enterprises and government agencies',
      features: [
        'Full quantum neural processing',
        'Unlimited users',
        'Maximum security features',
        '24/7 dedicated support',
        'Custom integrations',
        'On-premise deployment',
        'SLA guarantees',
        'Custom development'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Unprecedented Performance',
      description: 'Achieve computational speeds that were previously impossible with classical computing',
      icon: Rocket,
      metrics: ['1000x faster processing', 'Quantum advantage achieved', 'Real-time optimization']
    },
    {
      title: 'Future-Proof Technology',
      description: 'Built on cutting-edge quantum computing principles that will remain relevant for decades',
      icon: Target,
      metrics: ['Post-quantum ready', 'Scalable architecture', 'Continuous innovation']
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with technology that few companies can match',
      icon: TrendingUp,
      metrics: ['First-mover advantage', 'Proprietary algorithms', 'Expert consultation']
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce computational costs while achieving better results than traditional methods',
      icon: DollarSign,
      metrics: ['50% cost reduction', 'Faster time to market', 'Improved ROI']
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="AI Quantum Neural Network Platform - Zion Tech Group"
        description="Revolutionary quantum neural network platform combining quantum computing with AI for unprecedented performance. Transform your business with cutting-edge technology."
        keywords="quantum computing, neural networks, AI platform, quantum AI, neural processing, quantum algorithms"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/20 via-zion-blue to-zion-cyan/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Atom className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Quantum Neural Network Platform
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Revolutionary platform combining quantum computing with neural networks for unprecedented processing power and AI capabilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
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
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the future of computing with our quantum neural network platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-light border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transformative Use Cases
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how quantum neural networks are revolutionizing industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-light border border-zion-purple/30 rounded-xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-zion-slate-light mb-6">{useCase.description}</p>
                <ul className="space-y-3">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Competitive Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the plan that fits your organization's needs and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-zion-blue-light border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/25' 
                    : 'border-zion-purple/30'
                }`}
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
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                      : 'bg-zion-blue border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the advantages that set us apart from traditional computing solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-light border border-zion-purple/30 rounded-xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light mb-6">{benefit.description}</p>
                <div className="space-y-3">
                  {benefit.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-zion-cyan font-semibold">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join the quantum revolution and transform your business with our AI Quantum Neural Network Platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Contact Sales Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
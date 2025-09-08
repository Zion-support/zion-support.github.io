import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Brain,
  Atom,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Target,
  Rocket,
  Lightbulb,
  Smartphone,
  Cloud,
  MessageCircle,
  FileText,
  Search,
  BarChart,
  Settings,
  Palette,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  Leaf,
  Factory,
  Heart,
  Building,
  GraduationCap,
  Handshake,
  Newspaper,
  Video,
  Play,
  Briefcase
} from 'lucide-react';

const AIQuantumHybridPlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('starter');

  const features = [
    {
      title: 'Quantum-Classical Hybrid Processing',
      description: 'Seamlessly combine quantum and classical computing for optimal performance',
      icon: Atom,
      category: 'core'
    },
    {
      title: 'AI-Powered Quantum Optimization',
      description: 'Machine learning algorithms that optimize quantum circuit design and execution',
      icon: Brain,
      category: 'ai'
    },
    {
      title: 'Real-time Quantum Error Correction',
      description: 'Advanced error correction algorithms for reliable quantum computations',
      icon: Shield,
      category: 'security'
    },
    {
      title: 'Hybrid Workflow Orchestration',
      description: 'Intelligent routing between quantum and classical resources',
      icon: Workflow,
      category: 'workflow'
    },
    {
      title: 'Quantum-Classical Data Synchronization',
      description: 'Real-time data flow between quantum and classical systems',
      icon: Database,
      category: 'data'
    },
    {
      title: 'Adaptive Resource Allocation',
      description: 'Dynamic allocation of quantum and classical resources based on workload',
      icon: Settings,
      category: 'optimization'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for research institutions and startups',
      features: [
        'Up to 100 quantum operations/day',
        'Basic hybrid workflow templates',
        'Standard error correction',
        'Email support',
        'Basic analytics dashboard',
        '5 user accounts'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing enterprises and research teams',
      features: [
        'Up to 1,000 quantum operations/day',
        'Advanced hybrid workflow templates',
        'Enhanced error correction algorithms',
        'Priority support',
        'Advanced analytics and reporting',
        '25 user accounts',
        'Custom workflow development',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$19,999',
      period: '/month',
      description: 'For large-scale quantum computing initiatives',
      features: [
        'Unlimited quantum operations',
        'Custom hybrid workflow development',
        'Advanced quantum error correction',
        '24/7 dedicated support',
        'Custom analytics and reporting',
        'Unlimited user accounts',
        'Full API access',
        'Custom integrations',
        'Dedicated account manager',
        'On-premise deployment options'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Financial Portfolio Optimization',
      description: 'Use quantum algorithms for portfolio optimization while maintaining classical risk management',
      icon: Coins,
      benefits: ['30% faster optimization', 'Improved risk assessment', 'Real-time portfolio rebalancing']
    },
    {
      title: 'Drug Discovery & Molecular Modeling',
      description: 'Quantum chemistry simulations with classical molecular dynamics validation',
      icon: Leaf,
      benefits: ['Accelerated drug discovery', 'More accurate molecular models', 'Reduced computational costs']
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Quantum optimization for routing with classical constraint validation',
      icon: Factory,
      benefits: ['15% cost reduction', 'Faster route optimization', 'Real-time adaptation']
    },
    {
      title: 'Machine Learning Training',
      description: 'Hybrid quantum-classical neural network training',
      icon: Brain,
      benefits: ['Faster convergence', 'Better generalization', 'Reduced training time']
    }
  ];

  const benefits = [
    {
      title: 'Unmatched Performance',
      description: 'Combine the best of quantum and classical computing for optimal results',
      icon: Zap,
      metric: '10x faster'
    },
    {
      title: 'Cost Efficiency',
      description: 'Optimize resource usage and reduce overall computational costs',
      icon: DollarSign,
      metric: '40% savings'
    },
    {
      title: 'Scalability',
      description: 'Scale from research projects to enterprise deployments seamlessly',
      icon: TrendingUp,
      metric: 'Unlimited scale'
    },
    {
      title: 'Reliability',
      description: 'Advanced error correction ensures consistent and reliable results',
      icon: ShieldCheck,
      metric: '99.9% uptime'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      <Helmet>
        <title>AI Quantum Hybrid Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered quantum-classical hybrid computing platform. Combine quantum and classical computing for unprecedented performance and efficiency." />
        <meta name="keywords" content="quantum computing, AI, hybrid computing, quantum-classical, optimization, machine learning" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-quantum-hybrid-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30">
                <Brain className="h-12 w-12 text-blue-400" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              AI Quantum Hybrid Platform
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the future of computing with our revolutionary AI Quantum Hybrid Platform.
              Combining the power of quantum computing with advanced artificial intelligence for
              unprecedented computational capabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg">
                Get Started Today
              </Link>
              <Link to="/pricing" className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent mb-6">
              AI Quantum Hybrid Platform
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              The world's first integrated platform combining artificial intelligence with quantum computing capabilities. 
              Experience computational power beyond imagination with our revolutionary hybrid approach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-gray-900 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of computing with our groundbreaking AI-Quantum hybrid technology
            </p>
          </motion.div>

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {features.map((feature, index)              => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mr-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                </div>
                
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-200">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-indigo-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your industry with quantum-enhanced AI capabilities
            </p>
          </motion.div>

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index)              => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg mr-3">
                    <useCase.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{useCase.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {useCase.description}
                </p>
                
                <div className="text-purple-400 font-semibold text-lg">
                  {useCase.price}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your quantum computing needs
            </p>
          </motion.div>

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8">
            {pricingPlans.map((plan, index)              => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-purple-500 scale-105' 
                    : 'border-purple-500/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                      : 'border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-indigo-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the quantum revolution and transform your business with AI-Quantum hybrid computing
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-gray-900 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-400/30">
                <Phone className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-300 mb-4">+1 302 464 0950</p>
              <a 
                href="tel:+13024640950" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                Call Now
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-400/30">
                <Mail className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                Send Email
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-cyan-400/30">
                <MapPin className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Address</h3>
              <p className="text-gray-300 mb-4">364 E Main St STE 1008, Middletown DE 19709</p>
              <a 
                href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                View on Map
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIQuantumHybridPlatform;

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Cpu, 
  Database, 
  Network, 
  Globe, 
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Lock,
  Users,
  Target,
  Lightbulb,
  Code,
  Server,
  Chip,
  Satellite,
  Eye,
  Sparkles,
  Activity,
  Gauge,
  Workflow,
  Palette,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Clock,
  ExternalLink
} from 'lucide-react';

export default function AIQuantumHybridPlatform() {
  const features = [
    {
      icon: Atom,
      title: 'Quantum-Classical Hybrid Computing',
      description: 'Seamlessly integrate quantum and classical computing for unprecedented computational power',
      benefits: ['1000x faster complex calculations', 'Hybrid algorithm optimization', 'Quantum advantage in specific domains']
    },
    {
      icon: Brain,
      title: 'AI-Quantum Neural Networks',
      description: 'Advanced neural networks leveraging quantum properties for superior pattern recognition',
      benefits: ['Quantum-enhanced learning', 'Superior classification accuracy', 'Faster training convergence']
    },
    {
      icon: Shield,
      title: 'Quantum-Secure AI Operations',
      description: 'Unbreakable encryption and security protocols using quantum cryptography',
      benefits: ['Post-quantum cryptography', 'Quantum key distribution', 'Tamper-proof AI operations']
    },
    {
      icon: Database,
      title: 'Quantum Data Processing',
      description: 'Process massive datasets with quantum algorithms for instant insights',
      benefits: ['Exponential speedup', 'Real-time big data analysis', 'Quantum machine learning']
    }
  ];

  const useCases = [
    {
      title: 'Financial Modeling',
      description: 'Quantum-enhanced risk assessment and portfolio optimization',
      icon: TrendingUp,
      price: '$15,000/month'
    },
    {
      title: 'Drug Discovery',
      description: 'Molecular simulation and protein folding with quantum accuracy',
      icon: TestTube,
      price: '$25,000/month'
    },
    {
      title: 'Climate Modeling',
      description: 'Complex climate simulations with quantum precision',
      icon: Globe,
      price: '$20,000/month'
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Quantum algorithms for logistics and route optimization',
      icon: Network,
      price: '$18,000/month'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$5,000',
      period: '/month',
      description: 'Basic quantum-AI integration for small teams',
      features: [
        'Quantum API access',
        'Basic hybrid algorithms',
        'Standard support',
        'Up to 100 quantum operations/day'
      ]
    },
    {
      name: 'Professional',
      price: '$15,000',
      period: '/month',
      description: 'Advanced features for growing organizations',
      features: [
        'Full quantum-AI platform',
        'Custom hybrid algorithms',
        'Priority support',
        'Unlimited quantum operations',
        'Quantum security features'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$50,000',
      period: '/month',
      description: 'Complete solution for large enterprises',
      features: [
        'Everything in Professional',
        'Custom quantum hardware integration',
        'Dedicated quantum engineer',
        '24/7 support',
        'Custom algorithm development'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(120,119,198,0.1)_50%,transparent_70%)] animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full">
                <Atom className="h-8 w-8 text-white" />
              </div>
            </div>
            
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your quantum computing needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-purple-400/60 shadow-lg shadow-purple-500/25' 
                    : 'border-purple-500/20'
                } hover:border-purple-400/40 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-200">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
                      : 'bg-purple-600/20 border border-purple-400 hover:bg-purple-600/30'
                  }`}
                >
                  Get Started
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
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
}
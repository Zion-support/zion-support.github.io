import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Zap, 
  Brain, 
  Cpu, 
  TrendingUp, 
  Shield, 
  Globe, 
  Database,
  Cloud,
  Lock,
  Users,
  Rocket,
  CheckCircle,
  ArrowRight,
  BarChart3,
  LineChart,
  Activity,
  Target,
  Lightbulb,
  Search,
  Filter,
  Download,
  Share2,
  Play,
  Pause,
  Settings,
  Monitor,
  AlertCircle,
  CheckSquare,
  FileText,
  Calendar,
  Repeat,
  GitBranch,
  Code,
  Terminal,
  Network,
  Server,
  Smartphone,
  Tablet,
  Laptop,
  Globe2,
  Wifi,
  Bluetooth,
  Radio
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function QuantumComputingSolutions() {
  const features = [
    {
      icon: Atom,
      title: 'Quantum Processing',
      description: 'Harness quantum superposition and entanglement for exponential computational power.'
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Seamlessly integrate quantum computing with AI and machine learning workflows.'
    },
    {
      icon: Zap,
      title: 'Real-time Optimization',
      description: 'Solve complex optimization problems in seconds instead of years.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'From small quantum circuits to enterprise-scale quantum applications.'
    }
  ];

  const capabilities = [
    {
      title: 'Quantum Algorithms',
      description: 'Custom quantum algorithms for specific business problems and use cases',
      icon: Code,
      benefits: ['Grover\'s algorithm', 'Shor\'s algorithm', 'Quantum annealing']
    },
    {
      title: 'Hybrid Computing',
      description: 'Combine classical and quantum computing for optimal performance',
      icon: Cpu,
      benefits: ['Quantum-classical integration', 'Hybrid algorithms', 'Performance optimization']
    },
    {
      title: 'Quantum Simulation',
      description: 'Simulate quantum systems for research and development',
      icon: Monitor,
      benefits: ['Molecular modeling', 'Material science', 'Drug discovery']
    },
    {
      title: 'Quantum Security',
      description: 'Quantum-resistant cryptography and secure communications',
      icon: Shield,
      benefits: ['Post-quantum crypto', 'Quantum key distribution', 'Secure networks']
    }
  ];

  const useCases = [
    {
      industry: 'Financial Services',
      description: 'Portfolio optimization, risk assessment, and algorithmic trading',
      icon: BarChart3,
      metrics: ['Portfolio Performance', 'Risk Reduction', 'Trading Speed']
    },
    {
      industry: 'Pharmaceuticals',
      description: 'Drug discovery, molecular modeling, and protein folding',
      icon: Activity,
      metrics: ['Discovery Speed', 'Accuracy Rate', 'Cost Reduction']
    },
    {
      industry: 'Logistics',
      description: 'Route optimization, supply chain management, and scheduling',
      icon: Network,
      metrics: ['Route Efficiency', 'Cost Savings', 'Delivery Time']
    },
    {
      industry: 'Energy',
      description: 'Grid optimization, renewable energy forecasting, and storage',
      icon: Zap,
      metrics: ['Grid Efficiency', 'Energy Savings', 'Forecast Accuracy']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for research and development teams',
      features: [
        'Up to 100 qubits',
        'Basic quantum algorithms',
        'Standard support',
        'Documentation access',
        'Community forum'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for production quantum applications',
      features: [
        'Up to 1000 qubits',
        'Advanced algorithms',
        'Priority support',
        'Custom development',
        'API access',
        'Performance monitoring',
        'SLA guarantees'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale quantum computing needs',
      features: [
        'Unlimited qubits',
        'Custom algorithms',
        'Dedicated team',
        'On-premise options',
        'White-label solutions',
        'Training programs',
        '24/7 support'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: '1000x Faster Processing',
      description: 'Solve complex problems in seconds that would take classical computers years.'
    },
    {
      icon: Brain,
      title: 'AI Enhancement',
      description: 'Supercharge machine learning with quantum computing capabilities.'
    },
    {
      icon: Shield,
      title: 'Future-Proof Security',
      description: 'Implement quantum-resistant cryptography before it becomes critical.'
    },
    {
      icon: Users,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the curve with cutting-edge quantum technology.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <SEO 
        title="Quantum Computing Solutions - Zion Tech Group"
        description="Harness the power of quantum computing for exponential performance gains. Solve complex problems 1000x faster with our quantum solutions."
        keywords="quantum computing, quantum algorithms, quantum AI, quantum optimization, quantum simulation, quantum security"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Quantum Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum Computing Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experience the future of computing with quantum technology that solves complex problems 
              1000x faster than classical computers. From AI enhancement to cryptography, unlock new possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Quantum Assessment
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge quantum technology that revolutionizes computational capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive quantum computing solutions for enterprise applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{capability.title}</h3>
                    <p className="text-gray-400 mb-4">{capability.description}</p>
                    <ul className="space-y-2">
                      {capability.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
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
              Industry Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transform your industry with quantum computing solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.industry}</h3>
                <p className="text-gray-400 text-sm mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded">
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Access to quantum computing power at competitive prices. All plans include a 30-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-indigo-500/50 ring-2 ring-indigo-500/20' 
                    : 'border-gray-700 hover:border-indigo-500/50'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transform your business with the power of quantum computing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your 30-day free trial and experience the future of computing today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              Questions? Call <a href="tel:+13024640950" className="text-indigo-400 hover:underline">+1 302 464 0950</a> or email <a href="mailto:kleber@ziontechgroup.com" className="text-indigo-400 hover:underline">kleber@ziontechgroup.com</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
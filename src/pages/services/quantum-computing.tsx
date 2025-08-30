import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Zap, 
  Brain, 
  Shield, 
  Cpu, 
  Network, 
  Rocket, 
  Target, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Code,
  Database,
  Lock,
  Eye,
  BarChart3,
  Users,
  Globe,
  Activity,
  Server,
  Cloud,
  Heart,
  DollarSign,
  FileText,
  Calendar,
  Building,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function QuantumComputingPage() {
  const quantumServices = [
    {
      category: 'Core Quantum Solutions',
      services: [
        {
          name: 'Quantum Computing Platform',
          description: 'Access to cutting-edge quantum computing resources and algorithms',
          icon: Atom,
          features: ['Quantum Algorithms', 'Quantum Circuits', 'Quantum Error Correction', 'Scalable Architecture'],
          href: '/services/quantum-computing-platform'
        },
        {
          name: 'Quantum AI Hybrid Platform',
          description: 'Combining quantum computing with artificial intelligence for breakthrough solutions',
          icon: Brain,
          features: ['Quantum Neural Networks', 'Hybrid Algorithms', 'AI-Quantum Integration', 'Advanced Optimization'],
          href: '/services/ai-quantum-hybrid-platform'
        },
        {
          name: 'Quantum Machine Learning',
          description: 'Quantum-enhanced machine learning algorithms and frameworks',
          icon: TrendingUp,
          features: ['Quantum Neural Networks', 'Quantum Feature Selection', 'Quantum Clustering', 'Quantum Classification'],
          href: '/services/quantum-machine-learning'
        },
        {
          name: 'Quantum Cryptography',
          description: 'Unbreakable encryption using quantum mechanics principles',
          icon: Shield,
          features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Quantum Random Number Generation', 'Secure Communication'],
          href: '/services/quantum-cryptography'
        }
      ]
    },
    {
      category: 'Advanced Quantum Services',
      services: [
        {
          name: 'Quantum Financial Trading',
          description: 'Quantum algorithms for high-frequency trading and portfolio optimization',
          icon: DollarSign,
          features: ['Portfolio Optimization', 'Risk Assessment', 'Market Prediction', 'Algorithmic Trading'],
          href: '/services/quantum-ai-trading-platform'
        },
        {
          name: 'Quantum Optimization',
          description: 'Solving complex optimization problems with quantum algorithms',
          icon: Target,
          features: ['Combinatorial Optimization', 'Linear Programming', 'Constraint Satisfaction', 'Global Optimization'],
          href: '/services/quantum-optimization'
        },
        {
          name: 'Quantum Simulation',
          description: 'Simulating quantum systems for research and development',
          icon: Cpu,
          features: ['Molecular Dynamics', 'Material Science', 'Chemical Reactions', 'Physical Systems'],
          href: '/services/quantum-simulation'
        },
        {
          name: 'Quantum Internet',
          description: 'Building the infrastructure for quantum communication networks',
          icon: Network,
          features: ['Quantum Repeaters', 'Entanglement Distribution', 'Quantum Routing', 'Network Security'],
          href: '/services/quantum-internet'
        }
      ]
    },
    {
      category: 'Specialized Quantum Solutions',
      services: [
        {
          name: 'Quantum Edge Computing',
          description: 'Quantum computing at the edge for real-time applications',
          icon: Activity,
          features: ['Edge Quantum Processing', 'Real-time Optimization', 'Local Quantum Resources', 'Distributed Computing'],
          href: '/services/quantum-edge-computing'
        },
        {
          name: 'Quantum Cloud Services',
          description: 'Cloud-based access to quantum computing resources',
          icon: Cloud,
          features: ['Quantum Cloud Platform', 'API Access', 'Scalable Resources', 'Pay-per-Use Model'],
          href: '/services/quantum-cloud-services'
        },
        {
          name: 'Quantum Research & Development',
          description: 'Custom quantum computing research and development services',
          icon: Code,
          features: ['Algorithm Development', 'Hardware Research', 'Software Development', 'Testing & Validation'],
          href: '/services/quantum-research-development'
        },
        {
          name: 'Quantum Consulting',
          description: 'Expert guidance on quantum computing implementation',
          icon: Users,
          features: ['Strategy Development', 'Technology Assessment', 'Implementation Planning', 'Training & Education'],
          href: '/services/quantum-consulting'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Exponential Speed',
      description: 'Solve complex problems in seconds that would take classical computers years'
    },
    {
      icon: Brain,
      title: 'Quantum Advantage',
      description: 'Achieve computational advantages impossible with classical computing'
    },
    {
      icon: Shield,
      title: 'Unbreakable Security',
      description: 'Quantum cryptography provides theoretically unbreakable encryption'
    },
    {
      icon: Rocket,
      title: 'Future-Ready',
      description: 'Position your business at the forefront of the quantum revolution'
    }
  ];

  const stats = [
    { number: '1000x', label: 'Speed Increase' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'Availability' },
    { number: '∞', label: 'Scalability' }
  ];

  const useCases = [
    {
      industry: 'Finance',
      applications: ['Portfolio Optimization', 'Risk Assessment', 'Fraud Detection', 'Algorithmic Trading'],
      icon: DollarSign
    },
    {
      industry: 'Healthcare',
      applications: ['Drug Discovery', 'Protein Folding', 'Medical Imaging', 'Personalized Medicine'],
      icon: Heart
    },
    {
      industry: 'Manufacturing',
      applications: ['Supply Chain Optimization', 'Quality Control', 'Predictive Maintenance', 'Resource Planning'],
      icon: Building
    },
    {
      industry: 'Research',
      applications: ['Material Science', 'Climate Modeling', 'Particle Physics', 'Cryptography'],
      icon: Code
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Atom className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Quantum Computing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of computing with our quantum solutions. 
              Harness the power of quantum mechanics to solve previously impossible problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                Explore Quantum
              </button>
              <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Quantum Computing Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our quantum computing solutions span across multiple domains, 
              providing access to the most advanced computational capabilities available.
            </p>
          </motion.div>

          <div className="space-y-16">
            {quantumServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-3xl font-bold mb-8 text-center text-purple-400">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold">{service.name}</h4>
                      </div>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Quantum Computing Use Cases</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how quantum computing is revolutionizing industries 
              and solving previously intractable problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <useCase.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-400">{useCase.industry}</h3>
                </div>
                <ul className="space-y-2">
                  {useCase.applications.map((app, appIndex) => (
                    <li key={appIndex} className="text-sm text-gray-400 flex items-center">
                      <CheckCircle className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose Quantum Computing?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quantum computing represents the next frontier in computational power, 
              offering capabilities that were once thought impossible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready for the Quantum Future?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the quantum revolution and gain access to computational power 
              that will transform your business and research capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                Start Quantum Journey
              </button>
              <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import {

  Atom, 
  Zap, 
  Brain, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Users,
  Shield,
  Globe,
  Award,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Lock,
  BarChart3,
  TrendingUp,
  Target,
  Rocket
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function QuantumComputingAsAService() {

  const features = [
    {

      icon: <Atom className="w-6 h-6" />,
      title: "Quantum Processing Units",
      description: "Access to state-of-the-art quantum processors with 100+ qubits for complex computational tasks"
    },
    {

      icon: <Brain className="w-6 h-6" />,
      title: "Quantum Machine Learning",
      description: "Advanced quantum algorithms for machine learning, optimization, and pattern recognition"
    },
    {

      icon: <Zap className="w-6 h-6" />,
      title: "Quantum Simulation Engine",
      description: "High-fidelity quantum simulation for chemistry, materials science, and drug discovery"
    },
    {

      icon: <Database className="w-6 h-6" />,
      title: "Quantum Database",
      description: "Quantum-enhanced database systems for ultra-fast search and optimization queries"
    },
    {

      icon: <Target className="w-6 h-6" />,
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms"
    },
    {

      icon: <Rocket className="w-6 h-6" />,
      title: "Quantum API Gateway",
      description: "RESTful APIs and SDKs for seamless integration with existing applications"
    }
  ];

  const pricing = [
    {

      name: "Quantum Starter",
      price: "$999",
      period: "/month",
      features: [
        "Up to 100 quantum operations/day",
        "Basic quantum algorithms",
        "Standard simulation tools",
        "Email support",
        "Basic quantum education resources",
        "Community forum access"
      ],
      popular: false
    },
    {

      name: "Quantum Professional",
      price: "$2,999",
      period: "/month",
      features: [
        "Up to 1,000 quantum operations/day",
        "Advanced quantum algorithms",
        "Full simulation suite",
        "Priority support",
        "Custom algorithm development",
        "API access",
        "Dedicated quantum engineer"
      ],
      popular: true
    },
    {

      name: "Quantum Enterprise",
      price: "$9,999",
      period: "/month",
      features: [
        "Unlimited quantum operations",
        "Custom quantum circuits",
        "White-label solutions",
        "On-premise deployment",
        "Custom integrations",
        "Dedicated support team",
        "SLA guarantees",
        "Training and certification"
      ],
      popular: false
    }
  ];

  const benefits = [
    "Solve complex problems 1000x faster than classical computers",
    "Breakthrough discoveries in drug discovery and materials science",
    "Unbreakable quantum encryption for data security",
    "Revolutionary optimization for logistics and finance",
    "Access to cutting-edge quantum technology without infrastructure costs",
    "Future-proof your organization with quantum capabilities"
  ];

  const useCases = [
    {

      industry: "Pharmaceuticals",
      description: "Quantum simulation for drug discovery, protein folding, and molecular dynamics",
      advantage: "1000x faster drug discovery"
    },
    {

      industry: "Financial Services",
      description: "Quantum optimization for portfolio management, risk assessment, and trading algorithms",
      advantage: "Exponential speed improvement"
    },
    {

      industry: "Materials Science",
      description: "Quantum simulation for new materials, battery technology, and superconductors",
      advantage: "Revolutionary material discovery"
    },
    {

      industry: "Logistics & Supply Chain",
      description: "Quantum optimization for route planning, inventory management, and resource allocation",
      advantage: "Optimal solutions in seconds"
    }
  ];

  const quantumAlgorithms = [
    "Grover's Algorithm for database search",
    "Shor's Algorithm for factoring",
    "Quantum Fourier Transform",
    "Quantum Approximate Optimization Algorithm (QAOA)",
    "Variational Quantum Eigensolver (VQE)",
    "Quantum Machine Learning algorithms"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Quantum Computing as a Service Platform - Zion Tech Group"
        description="Access cutting-edge quantum computing power through our cloud platform. Solve complex problems 1000x faster with quantum algorithms and simulation tools."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Quantum Computing as a Service
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Access the power of quantum computing without the complexity. Our cloud platform provides quantum processing, 
              algorithms, and simulation tools to solve previously impossible computational challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Quantum Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Quantum Computing as a Service?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of computing with our quantum platform designed for researchers, developers, and enterprises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                <p className="text-white text-lg font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access cutting-edge quantum technology through our comprehensive platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Algorithms */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Available Quantum Algorithms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access a comprehensive library of quantum algorithms for various computational challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quantumAlgorithms.map((algorithm, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="flex items-center">
                  <Atom className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">{algorithm}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum computing is revolutionizing various industries and solving previously impossible problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="flex items-center text-purple-400 font-semibold">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  {useCase.advantage}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the quantum computing plan that fits your research and development needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${

                  plan.popular 
                    ? 'border-purple-500 ring-2 ring-purple-500/20' 
                    : 'border-slate-700 hover:border-purple-500'
                }`}
              >
                {plan.popular && (
                  <div className="bg-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://ziontechgroup.com/contact"
                  className="w-full inline-flex justify-center items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the quantum revolution and solve problems that were previously impossible with classical computing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Quantum Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
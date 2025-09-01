import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {

  Brain, 
  Atom, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  BarChart3,
  Rocket,
  Lightbulb,
  Code,
  Cloud,
  Server,
  Microchip,
  CircuitBoard,
  Atom
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIQuantumHybridPlatform() {

  const features = [
    {

      icon: Brain,
      title: "AI-Quantum Integration",
      description: "Seamless integration between classical AI and quantum computing for unprecedented computational power"
    },
    {

      icon: Atom,
      title: "Quantum Advantage",
      description: "Leverage quantum supremacy for complex optimization problems and cryptography"
    },
    {

      icon: Zap,
      title: "Hybrid Processing",
      description: "Intelligent routing between classical and quantum systems for optimal performance"
    },
    {

      icon: Shield,
      title: "Quantum Security",
      description: "Post-quantum cryptography and quantum-resistant security protocols"
    }
  ];

  const services = [
    {

      title: "Quantum Machine Learning",
      description: "Advanced ML algorithms enhanced with quantum computing capabilities",
      icon: Brain,
      features: ["Quantum neural networks", "Quantum feature selection", "Quantum clustering algorithms", "Hybrid optimization"]
    },
    {

      title: "Quantum Cryptography",
      description: "Next-generation security using quantum key distribution and post-quantum algorithms",
      icon: Lock,
      features: ["Quantum key distribution", "Post-quantum cryptography", "Quantum random number generation", "Secure communication"]
    },
    {

      title: "Quantum Optimization",
      description: "Solve complex optimization problems using quantum annealing and variational algorithms",
      icon: Target,
      features: ["Quantum annealing", "Variational quantum algorithms", "Portfolio optimization", "Supply chain optimization"]
    },
    {

      title: "Hybrid Computing",
      description: "Intelligent workload distribution between classical and quantum systems",
      icon: Cpu,
      features: ["Workload orchestration", "Performance optimization", "Resource management", "Scalability planning"]
    }
  ];

  const technologies = [
    "Quantum Circuit Design",
    "Quantum Error Correction",
    "Hybrid Classical-Quantum Algorithms",
    "Post-Quantum Cryptography",
    "Quantum Machine Learning",
    "Quantum Neural Networks",
    "Quantum Annealing",
    "Variational Quantum Eigensolver (VQE)",
    "Quantum Approximate Optimization Algorithm (QAOA)",
    "Quantum Key Distribution (QKD)"
  ];

  const pricing = [
    {

      name: "Starter",
      price: "$2,999",
      period: "per month",
      description: "Perfect for research institutions and startups",
      features: [
        "Basic quantum computing access",
        "AI-Quantum integration tools",
        "Standard security protocols",
        "Email support",
        "5 concurrent users"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {

      name: "Professional",
      price: "$7,999",
      period: "per month",
      description: "Ideal for growing enterprises and research teams",
      features: [
        "Advanced quantum algorithms",
        "Custom hybrid solutions",
        "Priority support",
        "Advanced security features",
        "25 concurrent users",
        "API access"
      ],
      cta: "Get Started",
      popular: true
    },
    {

      name: "Enterprise",
      price: "$19,999",
      period: "per month",
      description: "For large organizations requiring maximum quantum advantage",
      features: [
        "Full quantum computing access",
        "Custom algorithm development",
        "Dedicated support team",
        "Advanced security protocols",
        "Unlimited users",
        "White-label solutions",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO 
        title="AI-Quantum Hybrid Platform - Zion Tech Group"
        description="Revolutionary AI-Quantum hybrid platform combining classical AI with quantum computing for unprecedented computational power and security."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-4">
                <Atom className="w-8 h-8 text-white" />
              </div>
              <span className="text-purple-400 font-semibold">AI-Quantum Hybrid Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              The Future of
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"> Computing</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Unlock unprecedented computational power with our revolutionary AI-Quantum hybrid platform. 
              Combining classical AI with quantum computing for the next generation of problem-solving.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
              >
                Schedule Demo
              </Link>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the power of AI-Quantum integration with cutting-edge features designed for the future
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From quantum machine learning to post-quantum cryptography, we provide end-to-end AI-Quantum solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built on the latest advancements in quantum computing and artificial intelligence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 text-center hover:border-purple-500/50 transition-all duration-300"
              >
                <p className="text-gray-300 text-sm font-medium">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Competitive Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Access to quantum computing power at competitive market rates
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${

                  plan.popular 
                    ? 'border-purple-500/50 ring-2 ring-purple-500/20' 
                    : 'border-gray-700'
                } hover:border-purple-500/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
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
                  className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${

                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the quantum revolution and transform your computational capabilities with our AI-Quantum hybrid platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
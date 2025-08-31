import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Atom,
  Lock,
  Database,
  Network,
  Cpu,
  Globe,
  Users,
  BarChart3,
  FileText,
  Clock,
  Star,
  Award,
  Target,
  Rocket,
  Quantum,
  Microscope,
  Flask,
  Calculator
} from 'lucide-react';

const AIQuantumComputingPlatform = () => {
  const features = [
    {
      title: "Quantum Machine Learning",
      description: "Advanced quantum algorithms for machine learning, optimization, and pattern recognition",
      icon: <Brain className="w-6 h-6 text-purple-500" />,
      benefits: ["1000x faster training", "Quantum advantage in specific domains", "Hybrid classical-quantum workflows"]
    },
    {
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and post-quantum cryptography",
      icon: <Shield className="w-6 h-6 text-green-500" />,
      benefits: ["Quantum-safe encryption", "Real-time key generation", "Future-proof security protocols"]
    },
    {
      title: "Quantum Optimization",
      description: "Solve complex optimization problems using quantum annealing and variational algorithms",
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      benefits: ["NP-hard problem solving", "Logistics optimization", "Financial portfolio optimization"]
    },
    {
      title: "Quantum Simulation",
      description: "Accurate molecular and material simulations using quantum computers",
      icon: <Flask className="w-6 h-6 text-orange-500" />,
      benefits: ["Drug discovery acceleration", "Material science breakthroughs", "Chemical reaction modeling"]
    }
  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$499/month",
      description: "Perfect for researchers and small teams",
      features: [
        "Quantum ML Algorithms",
        "Basic Quantum Simulation",
        "2 Quantum Processors",
        "Email Support",
        "100 Quantum Jobs/month"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$1,299/month",
      description: "Ideal for research institutions and growing companies",
      features: [
        "Everything in Starter",
        "Advanced Quantum ML",
        "5 Quantum Processors",
        "Priority Support",
        "1000 Quantum Jobs/month",
        "Custom Algorithm Development"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "Custom Pricing",
      description: "For large organizations with specific quantum requirements",
      features: [
        "Everything in Professional",
        "Unlimited Quantum Jobs",
        "All Available Processors",
        "Dedicated Quantum Team",
        "Custom Quantum Hardware",
        "On-premise Quantum Setup"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research with quantum molecular simulations",
      icon: <Flask className="w-8 h-8 text-green-500" />
    },
    {
      title: "Financial Modeling",
      description: "Optimize portfolios and risk assessment using quantum algorithms",
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Climate Research",
      description: "Model complex climate systems and predict environmental changes",
      icon: <Globe className="w-8 h-8 text-purple-500" />
    },
    {
      title: "AI Training",
      description: "Train neural networks faster with quantum-enhanced algorithms",
      icon: <Brain className="w-8 h-8 text-orange-500" />
    }
  ];

  const quantumAdvantages = [
    {
      title: "Exponential Speedup",
      description: "Certain problems can be solved exponentially faster than classical computers",
      icon: <Rocket className="w-12 h-12 text-blue-500" />
    },
    {
      title: "Quantum Supremacy",
      description: "Achieve computational tasks impossible for classical supercomputers",
      icon: <Star className="w-12 h-12 text-yellow-500" />
    },
    {
      title: "Parallel Processing",
      description: "Process multiple possibilities simultaneously using quantum superposition",
      icon: <Cpu className="w-12 h-12 text-green-500" />
    },
    {
      title: "Entanglement Power",
      description: "Leverage quantum entanglement for secure communication and computation",
      icon: <Network className="w-12 h-12 text-purple-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Atom className="w-16 h-16 text-purple-500 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                AI-Powered Quantum Computing Platform
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Harness the power of quantum computing combined with artificial intelligence. 
              Solve previously impossible problems and unlock new frontiers in computation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold text-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-colors font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quantum Advantages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the revolutionary advantages that quantum computing brings to complex problem-solving
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quantumAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge quantum algorithms and AI integration for breakthrough results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  {feature.icon}
                  <h3 className="text-2xl font-semibold text-white ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Quantum Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access quantum computing power with flexible pricing options
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-purple-500 ring-2 ring-purple-500/20' 
                    : 'border-slate-700'
                } hover:border-purple-500 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  {plan.price !== "Custom Pricing" && (
                    <p className="text-gray-400">per month</p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform industries with quantum computing solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
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
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Future of Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and solve problems that were once considered impossible
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold text-lg">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-colors font-semibold text-lg">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIQuantumComputingPlatform;
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Target, 
  CheckCircle, 
  Star, 
  Clock, 
  Users, 
  Globe, 
  Shield,
  BarChart3,
  Rocket,
  Sparkles,
  Database,
  Network,
  Lock,
  Eye,
  TrendingUp,
  Award,
  ArrowRight
} from 'lucide-react';

const AIQuantumHybridPlatform = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      title: "Quantum AI Processing",
      description: "Combines quantum computing power with advanced AI algorithms for unprecedented computational capabilities"
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-400" />,
      title: "Hybrid Architecture",
      description: "Seamlessly integrates classical and quantum computing resources for optimal performance"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: "Real-time Optimization",
      description: "Continuously optimizes algorithms and resource allocation for maximum efficiency"
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: "Precision Computing",
      description: "Delivers ultra-precise results for complex mathematical and scientific computations"
    },
    {
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      title: "Quantum Memory",
      description: "Advanced quantum memory systems for storing and retrieving quantum information"
    },
    {
      icon: <Network className="w-8 h-8 text-pink-400" />,
      title: "Quantum Networking",
      description: "Secure quantum communication protocols for ultra-secure data transmission"
    }
  ];

  const benefits = [
    {
      metric: "1000x",
      description: "Faster computation speed compared to classical systems"
    },
    {
      metric: "99.99%",
      description: "Accuracy in complex calculations and simulations"
    },
    {
      metric: "24/7",
      description: "Continuous operation with quantum error correction"
    },
    {
      metric: "Global",
      description: "Access to quantum resources worldwide"
    }
  ];

  const useCases = [
    {
      title: "Financial Modeling",
      description: "Ultra-fast risk assessment, portfolio optimization, and algorithmic trading strategies",
      icon: <BarChart3 className="w-6 h-6 text-green-400" />
    },
    {
      title: "Drug Discovery",
      description: "Molecular simulation, protein folding, and pharmaceutical research acceleration",
      icon: <Target className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Climate Modeling",
      description: "Complex climate simulations, weather prediction, and environmental impact analysis",
      icon: <Globe className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Logistics Optimization",
      description: "Route optimization, supply chain management, and resource allocation",
      icon: <Network className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-6"
            >
              <div className="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30">
                <Brain className="h-12 w-12 text-blue-400" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
            >
              AI Quantum Hybrid Platform
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Experience the future of computing with our revolutionary AI Quantum Hybrid Platform. 
              Combining the power of quantum computing with advanced artificial intelligence for 
              unprecedented computational capabilities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg">
                Get Started Today
              </Link>
              <Link to="/pricing" className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg">
                View Pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is AI Quantum Hybrid Platform */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What is AI Quantum Hybrid Platform?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our AI Quantum Hybrid Platform represents the convergence of two revolutionary technologies: 
                quantum computing and artificial intelligence. This platform seamlessly integrates quantum 
                processing capabilities with advanced AI algorithms to solve complex problems that were 
                previously impossible to tackle.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                By combining the exponential speed of quantum computing with the pattern recognition 
                and learning capabilities of AI, we've created a platform that can process massive 
                datasets, perform complex simulations, and generate insights in real-time.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Quantum Speed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">AI Intelligence</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/30">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Brain className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-semibold">Quantum AI Processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <Cpu className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-semibold">Hybrid Architecture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-semibold">Real-time Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                      <Target className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-semibold">Precision Computing</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Why Choose AI Quantum Hybrid Platform?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {benefit.metric}
                  </span>
                </div>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Applications & Use Cases
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div className="flex items-center space-x-3 mb-4">
                  {useCase.icon}
                  <h3 className="text-xl font-semibold text-blue-400">{useCase.title}</h3>
                </div>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Pricing Plans
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <div className="text-4xl font-bold text-blue-400 mb-2">$1,999</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Basic Quantum Access</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">AI Processing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Standard Support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Basic Analytics</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center block">
                Get Started
              </Link>
            </motion.div>

            {/* Professional Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-xl border border-blue-500/50 relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="text-4xl font-bold text-blue-400 mb-2">$4,999</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Advanced Quantum Access</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Full AI Suite</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Priority Support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Advanced Analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Custom Integrations</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center block">
                Get Started
              </Link>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-400 mb-2">$12,999</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Full Quantum Access</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Custom AI Models</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">24/7 Dedicated Support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Custom Analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">White-label Solutions</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center block">
                Contact Sales
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Experience Quantum Computing?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8"
          >
            Join the quantum revolution with Zion Tech Group's AI Quantum Hybrid Platform. 
            Unlock unprecedented computational power and accelerate your innovation timeline.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg">
              Start Your Quantum Journey
            </Link>
            <Link to="/pricing" className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg">
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIQuantumHybridPlatform;
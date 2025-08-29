import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Atom, 
  Brain, 
  Zap, 
  Rocket, 
  Globe, 
  Cpu, 
  BarChart3, 
  CheckCircle, 
  Users, 
  Target,
  TestTube,
  Cloud,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Infinity,
  Sparkles,
  TrendingUp,
  Shield
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function QuantumAIPlatform() {
  const features = [
    {
      icon: Atom,
      title: "Quantum Algorithm Optimization",
      description: "Advanced quantum algorithms that solve complex optimization problems 10,000x faster than classical computers"
    },
    {
      icon: Brain,
      title: "AI-Powered Problem Solving",
      description: "Hybrid quantum-classical AI that combines the best of both worlds for unprecedented problem-solving capabilities"
    },
    {
      icon: Zap,
      title: "Financial Modeling & Trading",
      description: "Quantum-powered financial models for portfolio optimization, risk assessment, and high-frequency trading strategies"
    },
    {
      icon: Rocket,
      title: "Logistics Optimization",
      description: "Revolutionary supply chain and logistics optimization using quantum algorithms for maximum efficiency"
    },
    {
      icon: TestTube,
      title: "Drug Discovery Simulation",
      description: "Accelerated pharmaceutical research with quantum molecular simulations and drug discovery algorithms"
    },
    {
      icon: Globe,
      title: "Climate Modeling",
      description: "Advanced climate research and weather prediction using quantum computing for environmental science"
    }
  ];

  const benefits = [
    "Solve previously impossible problems with quantum advantage",
    "10,000x faster optimization for complex algorithms",
    "Revolutionary research capabilities across industries",
    "Competitive advantage in finance and trading",
    "Breakthrough scientific discoveries and innovations"
  ];

  const useCases = [
    "Portfolio optimization and risk management",
    "Supply chain and logistics optimization",
    "Drug discovery and pharmaceutical research",
    "Climate research and environmental modeling",
    "Cryptography and cybersecurity"
  ];

  const pricing = [
    {
      name: "Research",
      price: "$9,999",
      period: "/month",
      description: "Perfect for research institutions and universities",
      features: [
        "Quantum algorithm access",
        "Basic AI integration",
        "Research support",
        "Email support",
        "Up to 10 users",
        "Standard quantum hardware access"
      ]
    },
    {
      name: "Professional",
      price: "$15,999",
      period: "/month",
      description: "Ideal for growing companies and research teams",
      features: [
        "Everything in Research",
        "Advanced AI features",
        "Custom quantum algorithms",
        "Priority support",
        "Up to 50 users",
        "Premium quantum hardware access",
        "Custom integrations"
      ]
    },
    {
      name: "Enterprise",
      price: "$25,000",
      period: "/month",
      description: "For large enterprises with complex quantum needs",
      features: [
        "Everything in Professional",
        "Custom quantum models",
        "Dedicated quantum team",
        "24/7 phone support",
        "Unlimited users",
        "On-premise quantum deployment",
        "Custom research projects"
      ]
    }
  ];

  const quantumAdvantages = [
    {
      title: "Quantum Supremacy",
      description: "Demonstrated quantum advantage in specific computational tasks",
      icon: Infinity
    },
    {
      title: "Quantum Speedup",
      description: "Exponential speedup for certain algorithms and problems",
      icon: Zap
    },
    {
      title: "Quantum Entanglement",
      description: "Leverage quantum entanglement for secure communications",
      icon: Shield
    },
    {
      title: "Quantum Parallelism",
      description: "Process multiple possibilities simultaneously",
      icon: Cpu
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Quantum AI Platform - Zion Tech Group"
        description="Revolutionary quantum computing platform that combines quantum algorithms with AI to solve complex optimization problems in finance, logistics, and research."
        canonical="/services/quantum-ai-platform"
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
                <Atom className="w-4 h-4 mr-2" />
                Quantum AI Technology
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Quantum AI Platform
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionary quantum computing platform that combines quantum algorithms with AI to solve 
                complex optimization problems in finance, logistics, and research.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Quantum Solutions
                </Link>
                <Link
                  to="/request-quote"
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Request Custom Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">10,000x</div>
              <div className="text-gray-400">Faster Optimization</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">99.5%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-400">API Endpoints</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">Revolutionary</div>
              <div className="text-gray-400">Technology Level</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quantum Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              The Power of Quantum Computing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the future of computing with our revolutionary quantum AI platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quantumAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-400">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Revolutionary Quantum AI Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our platform combines the power of quantum computing with artificial intelligence 
              to solve problems that were previously impossible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Our Quantum AI Platform?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform your business with the most advanced computing technology available.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Use Cases</h3>
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Quantum Computing Pricing Plans
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Access the future of computing with our flexible quantum AI platform plans.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 ${
                  plan.name === 'Professional' 
                    ? 'border-purple-500 scale-105' 
                    : 'border-slate-700'
                }`}
              >
                {plan.name === 'Professional' && (
                  <div className="bg-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.name === 'Professional'
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700'
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Cutting-Edge Quantum Technology
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built with the latest quantum computing frameworks and AI technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Quantum Frameworks</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">IBM Quantum</span>
                  <span className="text-white font-medium">Qiskit Integration</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Google Quantum</span>
                  <span className="text-white font-medium">Cirq Framework</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Microsoft Azure</span>
                  <span className="text-white font-medium">Q# Language</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Amazon Braket</span>
                  <span className="text-white font-medium">AWS Integration</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">AI & Security</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">AI Framework</span>
                  <span className="text-white font-medium">TensorFlow, PyTorch</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Security</span>
                  <span className="text-white font-medium">Post-quantum Cryptography</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Uptime SLA</span>
                  <span className="text-white font-medium">99.5%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">API Endpoints</span>
                  <span className="text-white font-medium">500+ RESTful APIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Experience the Future of Computing?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the quantum revolution and solve problems that were previously impossible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Demo
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Get Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-purple-400 mb-4" />
                <h4 className="font-semibold mb-2">Phone</h4>
                <a 
                  href="tel:+13024640950" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="font-semibold mb-2">Email</h4>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Visit our website <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
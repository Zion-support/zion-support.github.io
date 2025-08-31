import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Atom,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Cpu,
  Workflow,
  Eye,
  Target,
  Rocket,
  Lightbulb,
  Code,
  Server,
  Network,
  Activity,
  FileText,
  MessageCircle,
  Search,
  Settings,
  Palette,
  Phone,
  Mail,
  MapPin,
  BarChart3,
  TrendingUp,
  Users,
  Database,
  Cloud,
  Lock,
  Globe,
  Microscope,
  CircuitBoard,
  Quantum
} from 'lucide-react';

const AIQuantumNeuralNetworkPlatform: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: "Quantum Neural Networks",
      description: "Hybrid quantum-classical neural networks for unprecedented computational power",
      benefits: ["Quantum advantage", "Exponential speedup", "Quantum error correction", "Hybrid optimization"]
    },
    {
      icon: Brain,
      title: "AI Quantum Algorithms",
      description: "Advanced quantum machine learning algorithms for complex problem solving",
      benefits: ["Quantum ML", "Quantum optimization", "Quantum sampling", "Quantum feature maps"]
    },
    {
      icon: CircuitBoard,
      title: "Quantum Circuit Design",
      description: "Visual quantum circuit designer with automated optimization",
      benefits: ["Drag & drop interface", "Auto-optimization", "Circuit validation", "Performance metrics"]
    },
    {
      icon: Microscope,
      title: "Quantum Simulation",
      description: "High-fidelity quantum system simulation for research and development",
      benefits: ["Multi-qubit simulation", "Noise modeling", "Error analysis", "Performance benchmarking"]
    }
  ];

  const pricingPlans = [
    {
      name: "Research",
      price: "$4,999",
      period: "/month",
      description: "For academic and research institutions",
      features: [
        "Up to 50 qubits simulation",
        "Basic quantum algorithms",
        "Research support",
        "Academic licensing",
        "Community forum access"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$9,999",
      period: "/month",
      description: "For growing quantum computing companies",
      features: [
        "Up to 100 qubits simulation",
        "Advanced quantum algorithms",
        "Priority support",
        "Custom integrations",
        "API access",
        "Training sessions"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$19,999",
      period: "/month",
      description: "For large-scale quantum deployments",
      features: [
        "Unlimited qubit simulation",
        "Full quantum capabilities",
        "Dedicated support team",
        "Custom development",
        "On-premise deployment",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Drug Discovery",
      description: "Quantum molecular modeling and drug optimization",
      icon: Microscope,
      benefits: ["1000x faster simulation", "Accurate molecular modeling", "Drug optimization", "Clinical trials acceleration"]
    },
    {
      industry: "Financial Modeling",
      description: "Quantum risk assessment and portfolio optimization",
      icon: DollarSign,
      benefits: ["Real-time risk analysis", "Portfolio optimization", "Market prediction", "Fraud detection"]
    },
    {
      industry: "Climate Science",
      description: "Quantum climate modeling and prediction",
      icon: Globe,
      benefits: ["Accurate climate models", "Long-term predictions", "Policy optimization", "Resource planning"]
    },
    {
      industry: "Cryptography",
      description: "Quantum-resistant encryption and security",
      icon: Shield,
      benefits: ["Post-quantum security", "Quantum key distribution", "Secure communications", "Future-proof encryption"]
    }
  ];

  const quantumAdvantages = [
    {
      title: "Exponential Speedup",
      description: "Solve problems in minutes that would take classical computers years",
      icon: Zap,
      metric: "1000x+"
    },
    {
      title: "Quantum Advantage",
      description: "Achieve computational superiority in specific problem domains",
      icon: Rocket,
      metric: "Quantum Supremacy"
    },
    {
      title: "Parallel Processing",
      description: "Process multiple solutions simultaneously through quantum superposition",
      icon: Network,
      metric: "∞ Parallel"
    },
    {
      title: "Quantum Entanglement",
      description: "Leverage quantum correlations for enhanced computational power",
      icon: Atom,
      metric: "Entangled States"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Next-Generation Quantum AI
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Quantum Neural Network Platform
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Experience the future of computing with our revolutionary AI Quantum Neural Network Platform. 
              Combine the power of quantum computing with advanced AI to solve previously impossible problems 
              and unlock unprecedented computational capabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm">Quantum-Safe Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Leading Research Labs</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">Patent-Pending Technology</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quantum Advantages Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum Computing Advantages
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform leverages the fundamental principles of quantum mechanics to deliver 
              computational power that transcends classical computing limitations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quantumAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {advantage.metric}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Quantum AI Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform combines cutting-edge quantum computing with advanced AI to create 
              a new paradigm of computational intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-3">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum Computing Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Access to cutting-edge quantum computing technology at competitive prices. 
              Choose the plan that fits your research and development needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-purple-500/50 bg-slate-700/50' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-600 text-white hover:from-purple-600 hover:to-cyan-700'
                      : 'border-2 border-purple-400/50 text-purple-400 hover:bg-purple-400/10 hover:border-purple-400'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our quantum AI platform is transforming industries by solving previously 
              intractable problems with unprecedented speed and accuracy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{useCase.industry}</h3>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-3xl p-12 md:p-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for the Quantum Future?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Join the quantum revolution and unlock computational power that was once 
                thought impossible. Transform your research and business with quantum AI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <span className="flex items-center gap-2">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                
                <Link
                  to="/contact"
                  className="px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>30-Day Free Trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>24/7 Quantum Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span>Quantum-Safe Security</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-purple-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-purple-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIQuantumNeuralNetworkPlatform;
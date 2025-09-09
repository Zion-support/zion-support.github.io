import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Atom, 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  Shield, 
  Clock, 
  Users, 
  BarChart3, 
  Cpu,
  Database,
  Globe,
  Rocket,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Pause,
  Settings,
  Monitor,
  AlertTriangle,
  FileText,
  Code,
  Palette,
  MessageSquare,
  Calendar,
  Mail,
  Phone,
  MapPin,
  CircuitBoard,
  Network,
  Lock,
  Eye,
  Fingerprint,
  ShieldCheck,
  Globe2,
  Cloud,
  Server
} from 'lucide-react';

const QuantumAIPlatform: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: "Quantum Neural Networks",
      description: "Advanced quantum computing algorithms for neural network optimization",
      benefits: ["Exponential speedup", "Quantum advantage", "Superior accuracy", "Scalable architecture"]
    },
    {
      icon: Brain,
      title: "Hybrid AI Processing",
      description: "Combines classical AI with quantum computing for optimal performance",
      benefits: ["Best of both worlds", "Fault tolerance", "Error correction", "Hybrid optimization"]
    },
    {
      icon: Zap,
      title: "Quantum Machine Learning",
      description: "Quantum algorithms for machine learning and pattern recognition",
      benefits: ["Quantum kernels", "Feature mapping", "Optimization algorithms", "Quantum classifiers"]
    },
    {
      icon: Target,
      title: "Predictive Analytics",
      description: "Quantum-powered forecasting and predictive modeling",
      benefits: ["Time series analysis", "Risk assessment", "Market prediction", "Anomaly detection"]
    },
    {
      icon: Shield,
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution",
      benefits: ["Quantum-safe security", "Unconditional security", "Future-proof encryption", "Quantum networks"]
    },
    {
      icon: Monitor,
      title: "Real-time Processing",
      description: "Instant quantum computations for real-time applications",
      benefits: ["Low latency", "High throughput", "Real-time insights", "Instant decisions"]
    }
  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$1,299",
      period: "/month",
      description: "Perfect for research institutions and startups exploring quantum AI",
      features: [
        "Up to 100 quantum operations/day",
        "Basic quantum algorithms",
        "Standard AI models",
        "Email support",
        "Basic analytics",
        "Cloud access"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Quantum Professional",
      price: "$2,999",
      period: "/month",
      description: "Ideal for enterprises implementing quantum AI solutions",
      features: [
        "Up to 1,000 quantum operations/day",
        "Advanced quantum algorithms",
        "Custom AI models",
        "Priority support",
        "Advanced analytics",
        "Hybrid computing",
        "API access"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Quantum Enterprise",
      price: "$5,999",
      period: "/month",
      description: "For large organizations requiring enterprise-grade quantum AI",
      features: [
        "Unlimited quantum operations",
        "Full quantum algorithm suite",
        "Custom development",
        "Dedicated support",
        "Enterprise analytics",
        "On-premise options",
        "SLA guarantees"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const useCases = [
    {
      title: "Financial Trading",
      description: "Quantum AI for high-frequency trading and portfolio optimization",
      icon: TrendingUp,
      roi: "500%",
      timeSaved: "Real-time"
    },
    {
      title: "Drug Discovery",
      description: "Quantum molecular modeling for pharmaceutical research",
      icon: Atom,
      roi: "1000%",
      timeSaved: "90% faster"
    },
    {
      title: "Climate Modeling",
      description: "Complex climate simulations and weather forecasting",
      icon: Globe2,
      roi: "300%",
      timeSaved: "10x faster"
    },
    {
      title: "Cybersecurity",
      description: "Quantum-resistant encryption and threat detection",
      icon: ShieldCheck,
      roi: "400%",
      timeSaved: "Instant"
    }
  ];

  const technologies = [
    { name: "Quantum Gates", description: "Fundamental quantum computing operations", icon: CircuitBoard },
    { name: "Quantum Circuits", description: "Complex quantum algorithm implementations", icon: Network },
    { name: "Quantum Error Correction", description: "Fault-tolerant quantum computing", icon: Shield },
    { name: "Quantum Entanglement", description: "Quantum correlation for secure communication", icon: Lock },
    { name: "Quantum Measurement", description: "Quantum state observation and analysis", icon: Eye },
    { name: "Quantum Key Distribution", description: "Unbreakable cryptographic key exchange", icon: Fingerprint }
  ];

  const quantumAdvantages = [
    {
      title: "Exponential Speedup",
      description: "Solve complex problems in minutes that would take classical computers years",
      icon: Rocket,
      metric: "10^6x faster"
    },
    {
      title: "Quantum Supremacy",
      description: "Achieve computational capabilities impossible with classical computers",
      icon: Star,
      metric: "Beyond classical"
    },
    {
      title: "Parallel Processing",
      description: "Process multiple possibilities simultaneously using quantum superposition",
      icon: Cpu,
      metric: "Infinite parallel"
    },
    {
      title: "Quantum Entanglement",
      description: "Leverage quantum correlations for secure communication and computation",
      icon: Network,
      metric: "100% secure"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-blue/20 rounded-full animate-pulse delay-2000"></div>
            {/* Quantum particles */}
            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-zion-cyan rounded-full animate-float"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-zion-purple rounded-full animate-float delay-1000"></div>
            <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-zion-blue rounded-full animate-float delay-2000"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Next-Generation Quantum AI
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Quantum <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">AI Platform</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Experience the future of artificial intelligence with our quantum-powered platform. 
              Solve previously impossible problems with exponential speedup and quantum advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan/10 transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quantum Advantages */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Advantages</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover why quantum computing represents the next paradigm shift in artificial intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quantumAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-zion-slate to-zion-slate-dark p-8 rounded-2xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <advantage.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{advantage.title}</h3>
                      <p className="text-zion-slate-light text-sm">{advantage.description}</p>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-zion-cyan/10 rounded-xl">
                    <div className="text-2xl font-bold text-zion-cyan">{advantage.metric}</div>
                    <div className="text-sm text-zion-slate-light">Performance Gain</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-br from-zion-slate to-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Platform <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Cutting-edge quantum AI capabilities designed for the most challenging computational problems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-zion-slate-dark to-zion-slate p-8 rounded-2xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Access to quantum computing power with flexible pricing plans. All plans include a 30-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${
                  plan.popular 
                    ? 'ring-2 ring-zion-cyan scale-105' 
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="bg-gradient-to-br from-zion-slate to-zion-slate-dark p-8 rounded-2xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                      <span className="text-zion-slate-light ml-1">{plan.period}</span>
                    </div>
                    <p className="text-zion-slate-light mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={plan.name === "Quantum Enterprise" ? "/contact" : "/contact"}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                        : 'border border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-br from-zion-slate to-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Use Cases</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              See how quantum AI is transforming industries and solving previously impossible problems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-zion-slate-dark to-zion-slate p-8 rounded-2xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                      <p className="text-zion-slate-light text-sm">{useCase.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-zion-cyan/10 rounded-xl">
                      <div className="text-2xl font-bold text-zion-cyan">{useCase.roi}</div>
                      <div className="text-sm text-zion-slate-light">ROI Increase</div>
                    </div>
                    <div className="text-center p-4 bg-zion-blue/10 rounded-xl">
                      <div className="text-2xl font-bold text-zion-blue">{useCase.timeSaved}</div>
                      <div className="text-sm text-zion-slate-light">Performance Gain</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Built on the latest quantum computing principles and technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-zion-slate to-zion-slate-dark p-6 rounded-2xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for the <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Quantum Future</span>?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Join the quantum revolution and solve problems that were once considered impossible
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Schedule Demo
                <Calendar className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Ready to explore the quantum frontier? Our quantum AI experts are here to guide you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-zion-cyan text-lg font-semibold">+1 302 464 0950</p>
              <p className="text-zion-slate-light text-sm">Available 24/7</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-zion-cyan text-lg font-semibold">kleber@ziontechgroup.com</p>
              <p className="text-zion-slate-light text-sm">Response within 2 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light text-sm">364 E Main St STE 1008</p>
              <p className="text-zion-slate-light text-sm">Middletown DE 19709</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumAIPlatform;
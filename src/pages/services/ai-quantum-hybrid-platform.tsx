import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Brain, 
  Zap, 
  Cpu, 
  Network, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  Cloud,
  Lock,
  Eye,
  BarChart3,
  FileText,
  Download,
  Play,
  Pause,
  RefreshCw,
  Search,
  Filter,
  Bell,
  Settings,
  Database,
  Server,
  Smartphone,
  Monitor,
  Laptop,
  Tablet,
  AlertCircle,
  CheckSquare,
  XCircle,
  Quantum,
  Circuit,
  Microchip,
  Rocket,
  Globe,
  Users,
  TrendingUp,
  BarChart,
  PieChart,
  LineChart,
  ScatterPlot,
  Activity,
  Gauge,
  CpuIcon,
  Memory,
  HardDrive,
  Wifi,
  Bluetooth,
  Satellite,
  Radio,
  Signal,
  Waveform,
  Pulse,
  Sparkles,
  Infinity,
  Layers,
  Grid,
  Hexagon,
  Octagon,
  Pentagon,
  Triangle,
  Square,
  Circle,
  Cube,
  Sphere,
  Cylinder,
  Cone,
  Pyramid
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AIQuantumHybridPlatform = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Quantum Hybrid Computing",
      description: "Seamlessly integrate classical AI with quantum computing for unprecedented computational power",
      benefits: ["Hybrid algorithms", "Quantum advantage", "Scalable processing"]
    },
    {
      icon: Atom,
      title: "Quantum Machine Learning",
      description: "Leverage quantum properties for faster and more accurate machine learning models",
      benefits: ["Quantum speedup", "Enhanced accuracy", "Novel algorithms"]
    },
    {
      icon: Zap,
      title: "Real-time Optimization",
      description: "Solve complex optimization problems in real-time using quantum algorithms",
      benefits: ["Instant solutions", "Global optimization", "Parallel processing"]
    },
    {
      icon: Cpu,
      title: "Hybrid Infrastructure",
      description: "Seamlessly switch between classical and quantum computing resources",
      benefits: ["Resource optimization", "Cost efficiency", "Flexible scaling"]
    },
    {
      icon: Network,
      title: "Quantum Networking",
      description: "Secure quantum communication and entanglement-based networking",
      benefits: ["Quantum encryption", "Instant communication", "Unhackable security"]
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Post-quantum cryptography and quantum-resistant security protocols",
      benefits: ["Future-proof security", "Quantum-resistant", "Advanced encryption"]
    }
  ];

  const pricingPlans = [
    {
      name: "Research",
      price: "$1,999",
      period: "/month",
      description: "Perfect for research institutions and academic projects",
      features: [
        "Up to 100 qubits",
        "Basic hybrid algorithms",
        "Research support",
        "Standard reporting",
        "Email support",
        "100GB data storage"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Enterprise",
      price: "$4,999",
      period: "/month",
      description: "Ideal for large enterprises with complex computational needs",
      features: [
        "Up to 1000 qubits",
        "Advanced hybrid algorithms",
        "Custom optimizations",
        "Priority support",
        "Custom dashboards",
        "1TB data storage",
        "SLA guarantees"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Government",
      price: "$12,999",
      period: "/month",
      description: "For government agencies and defense applications",
      features: [
        "Unlimited qubits",
        "Full quantum suite",
        "Custom development",
        "Dedicated support",
        "On-premise options",
        "Unlimited storage",
        "Security clearance"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const quantumModules = [
    {
      title: "Quantum Machine Learning",
      icon: Brain,
      description: "Quantum-enhanced machine learning algorithms for pattern recognition and prediction",
      capabilities: ["Quantum neural networks", "Quantum SVM", "Quantum clustering", "Quantum regression"]
    },
    {
      title: "Quantum Optimization",
      icon: Target,
      description: "Solve complex optimization problems using quantum algorithms",
      capabilities: ["Quantum annealing", "QAOA", "VQE", "Quantum approximate optimization"]
    },
    {
      title: "Quantum Cryptography",
      icon: Shield,
      description: "Unbreakable encryption using quantum key distribution",
      capabilities: ["BB84 protocol", "Quantum key distribution", "Post-quantum crypto", "Quantum random numbers"]
    },
    {
      title: "Quantum Simulation",
      icon: Atom,
      description: "Simulate quantum systems for materials science and chemistry",
      capabilities: ["Molecular simulation", "Quantum chemistry", "Material properties", "Drug discovery"]
    }
  ];

  const useCases = [
    {
      title: "Financial Modeling",
      description: "Quantum-enhanced portfolio optimization and risk assessment",
      benefits: ["Faster optimization", "Better risk models", "Real-time trading"]
    },
    {
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research with quantum molecular simulation",
      benefits: ["Faster discovery", "Better accuracy", "Cost reduction"]
    },
    {
      title: "Logistics Optimization",
      description: "Solve complex routing and scheduling problems instantly",
      benefits: ["Optimal routes", "Cost savings", "Efficiency gains"]
    },
    {
      title: "Climate Modeling",
      description: "Advanced climate prediction using quantum-enhanced simulations",
      benefits: ["Better predictions", "Faster computation", "Accurate models"]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Quantum Officer, QuantumCorp",
      company: "QuantumCorp Technologies",
      content: "Zion Tech's AI-Quantum hybrid platform has revolutionized our research capabilities. We're solving problems that were previously impossible.",
      rating: 5,
      results: "1000x speedup in optimization"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Director of Research, QuantumLab",
      company: "QuantumLab Institute",
      content: "The hybrid approach gives us the best of both worlds - quantum speed and AI intelligence. Results are extraordinary.",
      rating: 5,
      results: "500x improvement in accuracy"
    },
    {
      name: "Dr. Emily Watson",
      role: "VP of Innovation, FutureTech",
      company: "FutureTech Solutions",
      content: "Implementation was seamless and the computational power is incredible. We're now leading in quantum computing research.",
      rating: 5,
      results: "Industry-leading performance"
    }
  ];

  const quantumAdvantages = [
    "Quantum Supremacy", "Quantum Advantage", "Quantum Speedup", "Quantum Parallelism",
    "Quantum Entanglement", "Quantum Tunneling", "Quantum Interference", "Quantum Coherence"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6">
                <Atom className="w-4 h-4 mr-2" />
                AI-Quantum Hybrid Platform
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI-Quantum
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Hybrid Platform
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Experience the future of computing with our revolutionary AI-Quantum hybrid platform. 
                Combine the power of artificial intelligence with quantum computing for unprecedented computational capabilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="#demo"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 font-semibold rounded-full text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> AI-Quantum Platform</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the convergence of artificial intelligence and quantum computing for revolutionary computational power.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Modules */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Quantum Modules</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive quantum modules provide cutting-edge capabilities for the most complex computational challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quantumModules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                    <module.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{module.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{module.description}</p>
                <div className="space-y-2">
                  <h4 className="text-purple-400 font-semibold mb-3">Capabilities:</h4>
                  {module.capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      {capability}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our AI-Quantum hybrid platform transforms industries and solves previously impossible problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="space-y-2">
                  <h4 className="text-purple-400 font-semibold mb-3">Key Benefits:</h4>
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <Target className="w-4 h-4 text-purple-400 mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Advantages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Advantages</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the unique properties of quantum mechanics for computational advantages that classical computing cannot achieve.
            </p>
          </motion.div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {quantumAdvantages.map((advantage, index) => (
                <motion.div
                  key={advantage}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white/5 rounded-lg border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                >
                  <Atom className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <span className="text-white font-medium">{advantage}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the quantum computing plan that fits your research and enterprise needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-purple-400/50 bg-purple-500/10' 
                    : 'border-white/10 hover:border-purple-400/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.name === "Government" ? "/contact" : "/contact"}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                      : 'bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Quantum Partners Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what leading researchers and enterprises have achieved with our AI-Quantum platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                    <p className="text-purple-400">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed italic mb-4">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-purple-400 font-semibold text-sm">{testimonial.results}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join leading research institutions and enterprises already using our AI-Quantum hybrid platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIQuantumHybridPlatform;
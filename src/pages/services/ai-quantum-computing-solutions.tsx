import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Zap, 
  Brain, 
  Cpu, 
  Target, 
  Shield, 
  Cloud, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Globe,
  Database,
  Activity,
  Eye,
  Settings,
  Download,
  Share2,
  Filter,
  Search,
  AlertTriangle,
  Lightbulb,
  BarChart,
  PieChart,
  LineChart,
  Network,
  Lock,
  TrendingUp,
  BarChart3,
  Rocket,
  Handshake,
  Building2,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Award,
  Quantum,
  CircuitBoard,
  Microchip,
  Satellite,
  Wifi,
  Server,
  Database as DatabaseIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIQuantumComputingSolutions() {
  const [selectedPlan, setSelectedPlan] = useState('enterprise');

  const features = [
    {
      icon: Atom,
      title: "Quantum-Classical Hybrid Computing",
      description: "Seamlessly integrate quantum and classical computing for optimal performance across all workloads",
      benefits: ["Hybrid algorithm optimization", "Quantum advantage identification", "Classical fallback systems"]
    },
    {
      icon: Brain,
      title: "AI-Enhanced Quantum Algorithms",
      description: "Machine learning optimized quantum algorithms that adapt and improve based on data patterns",
      benefits: ["Adaptive quantum circuits", "ML-driven optimization", "Performance prediction"]
    },
    {
      icon: Cpu,
      title: "Quantum Error Correction",
      description: "Advanced error correction techniques ensuring reliable quantum computations in noisy environments",
      benefits: ["Fault-tolerant computing", "Error mitigation", "Reliability assurance"]
    },
    {
      icon: Target,
      title: "Industry-Specific Quantum Solutions",
      description: "Tailored quantum computing solutions for finance, healthcare, logistics, and materials science",
      benefits: ["Domain expertise", "Custom algorithms", "Industry benchmarks"]
    },
    {
      icon: Shield,
      title: "Quantum-Safe Cryptography",
      description: "Post-quantum cryptography solutions protecting against future quantum threats",
      benefits: ["Future-proof security", "Quantum-resistant algorithms", "Compliance ready"]
    },
    {
      icon: Cloud,
      title: "Quantum Cloud Platform",
      description: "Access quantum computing resources through our secure, scalable cloud infrastructure",
      benefits: ["Pay-per-use pricing", "Global accessibility", "Enterprise security"]
    }
  ];

  const pricingPlans = [
    {
      name: "Research",
      price: "$2,999",
      period: "/month",
      description: "For academic and research institutions exploring quantum computing",
      features: [
        "Up to 100 quantum circuit executions",
        "Basic quantum algorithms library",
        "Research support",
        "Academic pricing",
        "Basic documentation",
        "Community forum access"
      ],
      cta: "Start Research Trial",
      popular: false,
      marketPrice: "$5000-8000/month",
      savings: "Save up to 60%"
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "/month",
      description: "For businesses implementing quantum computing solutions",
      features: [
        "Up to 1000 quantum circuit executions",
        "Advanced quantum algorithms",
        "Priority support",
        "Custom algorithm development",
        "Performance optimization",
        "Integration support",
        "Training and certification"
      ],
      cta: "Start Professional Trial",
      popular: true,
      marketPrice: "$15000-25000/month",
      savings: "Save up to 68%"
    },
    {
      name: "Enterprise",
      price: "$19,999",
      period: "/month",
      description: "For large organizations requiring enterprise quantum computing",
      features: [
        "Unlimited quantum executions",
        "Custom quantum hardware access",
        "24/7 dedicated support",
        "White-label solutions",
        "Custom deployment options",
        "Advanced security features",
        "Compliance frameworks"
      ],
      cta: "Contact Sales",
      popular: false,
      marketPrice: "$40000-60000/month",
      savings: "Save up to 67%"
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      description: "Portfolio optimization, risk assessment, and fraud detection using quantum algorithms",
      roi: "500% ROI in 18 months",
      timeSaved: "90% faster than classical methods"
    },
    {
      industry: "Pharmaceutical Research",
      description: "Drug discovery, molecular modeling, and protein folding simulations",
      roi: "800% ROI in 24 months",
      timeSaved: "95% reduction in simulation time"
    },
    {
      industry: "Logistics & Supply Chain",
      description: "Route optimization, inventory management, and demand forecasting",
      roi: "400% ROI in 15 months",
      timeSaved: "85% faster optimization"
    },
    {
      industry: "Materials Science",
      description: "New material discovery, property prediction, and chemical synthesis",
      roi: "600% ROI in 20 months",
      timeSaved: "80% faster discovery process"
    }
  ];

  const quantumAdvantages = [
    {
      area: "Cryptography",
      classical: "RSA-2048: 2.3 quintillion years",
      quantum: "Shor's Algorithm: 8 hours",
      improvement: "10^15x faster"
    },
    {
      area: "Optimization",
      classical: "NP-hard problems: exponential time",
      quantum: "Quantum annealing: polynomial time",
      improvement: "Exponential speedup"
    },
    {
      area: "Machine Learning",
      classical: "Training: weeks to months",
      quantum: "Quantum ML: hours to days",
      improvement: "100-1000x faster"
    },
    {
      area: "Simulation",
      classical: "Molecular dynamics: months",
      quantum: "Quantum simulation: days",
      improvement: "10-100x faster"
    }
  ];

  const integrations = [
    "IBM Quantum", "Google Quantum", "Microsoft Azure Quantum", "Amazon Braket",
    "D-Wave", "Rigetti", "IonQ", "Xanadu", "PsiQuantum", "PASQAL",
    "AWS", "Azure", "Google Cloud", "Oracle Cloud", "IBM Cloud"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  AI Quantum Computing
                </span>
                <br />
                <span className="text-white">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Harness the power of quantum computing combined with artificial intelligence to solve 
                previously impossible problems. Experience exponential speedups and breakthrough capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity group"
                >
                  Start Quantum Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 rounded-xl border border-zion-purple/30 text-zion-purple hover:bg-zion-purple/10 transition-colors">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quantum Advantage Section */}
      <section className="py-16 bg-gradient-to-r from-zion-slate-dark/30 to-zion-blue-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Quantum Advantage in Action</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how quantum computing delivers exponential performance improvements over classical methods
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {quantumAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate-dark/50 to-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-zion-cyan">{advantage.area}</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                    <span className="text-red-400 font-medium">Classical Computing</span>
                    <span className="text-red-300 text-sm">{advantage.classical}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <span className="text-green-400 font-medium">Quantum Computing</span>
                    <span className="text-green-300 text-sm">{advantage.quantum}</span>
                  </div>
                  <div className="text-center p-3 bg-zion-cyan/20 rounded-lg">
                    <span className="text-zion-cyan font-bold text-lg">{advantage.improvement}</span>
                    <div className="text-xs text-gray-400">Performance Improvement</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Quantum Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge quantum computing features powered by artificial intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate-dark/50 to-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-purple/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-zion-cyan/20 rounded-xl">
                    <feature.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
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
      <section className="py-16 bg-gradient-to-r from-zion-slate-dark/30 to-zion-blue-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Quantum Computing Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access to cutting-edge quantum computing resources with flexible pricing options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-2xl shadow-zion-cyan/20 scale-105' 
                    : 'border-zion-purple/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                  
                  {/* Market Price Comparison */}
                  <div className="mt-4 p-3 bg-zion-slate-dark/50 rounded-lg">
                    <div className="text-xs text-gray-400 mb-1">Market Price Range</div>
                    <div className="text-sm font-semibold text-white">{plan.marketPrice}</div>
                    <div className="text-xs text-zion-cyan font-medium">{plan.savings}</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-blue-600 text-white hover:opacity-90'
                      : 'bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30 border border-zion-purple/30'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases & ROI */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industry Applications & Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how quantum computing delivers breakthrough results across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate-dark/50 to-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-zion-purple/20 rounded-xl">
                    <Building2 className="w-8 h-8 text-zion-purple" />
                  </div>
                  <h3 className="text-xl font-semibold">{useCase.industry}</h3>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-zion-cyan/10 rounded-lg">
                    <div className="text-zion-cyan font-bold text-lg">{useCase.roi}</div>
                    <div className="text-xs text-gray-400">Return on Investment</div>
                  </div>
                  <div className="text-center p-3 bg-zion-purple/10 rounded-lg">
                    <div className="text-zion-purple font-bold text-lg">{useCase.timeSaved}</div>
                    <div className="text-xs text-gray-400">Performance Improvement</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 bg-gradient-to-r from-zion-slate-dark/30 to-zion-blue-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Quantum Hardware & Cloud Partners</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access to leading quantum computing hardware and cloud platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-zion-slate-dark/50 border border-zion-purple/20 rounded-xl p-4 text-center hover:border-zion-purple/40 transition-colors"
              >
                <div className="text-zion-cyan font-medium text-sm">{integration}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-12"
            >
              <h2 className="text-4xl font-bold mb-6">Ready for the Quantum Revolution?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the forefront of computing technology and solve problems that were previously impossible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-zion-cyan to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Start Quantum Trial
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl border border-zion-purple/30 text-zion-purple hover:bg-zion-purple/10 transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-zion-slate-dark/50 to-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300">
              Our quantum computing experts are ready to help you explore the future of computing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="p-4 bg-zion-cyan/20 rounded-xl inline-block mb-4">
                <Phone className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-zion-cyan font-medium">+1 302 464 0950</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-zion-purple/20 rounded-xl inline-block mb-4">
                <Mail className="w-8 h-8 text-zion-purple" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-zion-purple font-medium">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-zion-cyan/20 rounded-xl inline-block mb-4">
                <MapPin className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-zion-cyan font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
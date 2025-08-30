import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Atom, 
  Zap, 
  Shield, 
  TrendingUp, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Rocket,
  Target,
  BarChart3,
  Users,
  Globe,
  Chip,
  Sparkles,
  Eye,
  Workflow,
  Activity,
  Monitor,
  Server,
  Cloud,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Heart,
  DollarSign,
  Clock,
  Award,
  ShieldCheck,
  Wifi,
  Smartphone,
  Tablet,
  Laptop,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Tablet as TabletIcon,
  Laptop as LaptopIcon,
  Monitor as MonitorIcon2,
  Smartphone as SmartphoneIcon2,
  Tablet as TabletIcon2,
  Laptop as LaptopIcon2
} from 'lucide-react';

export default function AIQuantumNeuralNetworkPlatform() {
  const features = [
    {
      title: "Quantum Neural Processing",
      description: "Advanced quantum computing algorithms for neural network optimization",
      icon: Brain,
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Hybrid AI Architecture",
      description: "Combines classical AI with quantum computing for unprecedented performance",
      icon: Atom,
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Real-time Learning",
      description: "Continuous adaptation and learning from data streams in real-time",
      icon: TrendingUp,
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Quantum Security",
      description: "Quantum-resistant encryption and secure neural network operations",
      icon: Shield,
      color: "from-red-600 to-orange-600"
    }
  ];

  const useCases = [
    {
      title: "Financial Modeling",
      description: "Complex market prediction and risk assessment using quantum neural networks",
      icon: DollarSign,
      benefits: ["High accuracy predictions", "Real-time market analysis", "Risk mitigation"]
    },
    {
      title: "Drug Discovery",
      description: "Accelerated molecular simulation and drug candidate identification",
      icon: Heart,
      benefits: ["Faster drug development", "Molecular optimization", "Clinical trial optimization"]
    },
    {
      title: "Climate Modeling",
      description: "Advanced climate prediction and environmental impact assessment",
      icon: Globe,
      benefits: ["Precise climate forecasts", "Environmental planning", "Policy decision support"]
    },
    {
      title: "Logistics Optimization",
      description: "Complex supply chain and route optimization using quantum algorithms",
      icon: Network,
      benefits: ["Cost reduction", "Efficiency improvement", "Real-time adaptation"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "/month",
      description: "Perfect for research institutions and small teams",
      features: [
        "Basic quantum neural processing",
        "Up to 100 neural network nodes",
        "Standard security protocols",
        "Email support",
        "Basic analytics dashboard"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "/month",
      description: "Ideal for growing businesses and research teams",
      features: [
        "Advanced quantum neural processing",
        "Up to 1,000 neural network nodes",
        "Enhanced security protocols",
        "Priority support",
        "Advanced analytics & reporting",
        "Custom model training",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$19,999",
      period: "/month",
      description: "For large enterprises requiring maximum performance",
      features: [
        "Full quantum neural processing",
        "Unlimited neural network nodes",
        "Military-grade security",
        "24/7 dedicated support",
        "Custom development",
        "On-premise deployment",
        "White-label solutions",
        "Training & certification"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const technicalSpecs = [
    {
      category: "Quantum Processing",
      specs: [
        "Quantum bits (qubits): 50-1000+",
        "Quantum error correction",
        "Coherence time: 100+ microseconds",
        "Gate fidelity: 99.9%+"
      ]
    },
    {
      category: "Neural Network",
      specs: [
        "Layers: 100-1000+",
        "Neurons: 1M-100M+",
        "Training speed: 10x faster than classical",
        "Memory: 1TB-100TB+"
      ]
    },
    {
      category: "Performance",
      specs: [
        "Processing speed: 1000x classical AI",
        "Accuracy improvement: 15-40%",
        "Energy efficiency: 80% reduction",
        "Scalability: Linear with qubits"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-zion-purple/20 text-zion-cyan border border-zion-purple/30">
                <Atom className="w-4 h-4 mr-2" />
                Revolutionary AI Technology
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              AI Quantum Neural
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Network Platform
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
            >
              The world's first hybrid quantum-classical neural network platform that combines 
              the power of quantum computing with advanced AI to solve previously impossible problems.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services/ai-quantum-hybrid-platform"
                className="inline-flex items-center px-8 py-4 border border-zion-purple/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-purple/20 transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the future of AI with our quantum-enhanced neural network platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transformative Use Cases
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how quantum neural networks are revolutionizing industries worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-8 hover:border-zion-purple/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-zion-slate-light mb-4">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Competitive Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the plan that fits your quantum AI needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-zion-blue border border-zion-purple/30 rounded-xl p-8 ${
                  plan.popular ? 'border-zion-cyan ring-2 ring-zion-cyan/20' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-dark hover:to-zion-purple-dark'
                      : 'bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Industry-leading performance metrics and technical capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={spec.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-8"
              >
                <h3 className="text-xl font-semibold text-white mb-4 text-center">{spec.category}</h3>
                <ul className="space-y-3">
                  {spec.specs.map((specItem, specIndex) => (
                    <li key={specIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {specItem}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Future of AI?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join the quantum revolution and transform your business with the most advanced 
              AI platform ever created. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services/ai-quantum-hybrid-platform"
                className="inline-flex items-center px-8 py-4 border border-zion-purple/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-purple/20 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
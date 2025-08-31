import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Atom, 
  Zap, 
  Shield, 
  Cpu, 
  Network, 
  Database, 
  Lock, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Globe,
  Rocket,
  Target,
  Lightbulb,
  Sparkles,
  Eye,
  Workflow,
  BarChart3,
  Settings,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Activity,
  MessageCircle,
  BarChart,
  Users2,
  Palette,
  Handshake,
  Building2,
  FileText,
  HelpCircle,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Monitor,
  Smartphone,
  Tablet,
  Watch,
  Headphones,
  Speaker,
  Camera,
  Image,
  File,
  Folder,
  HardDrive,
  Cloud,
  Wifi,
  Bluetooth,
  Satellite,
  Gamepad2,
  Coins,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  BarChart,
  Users2,
  Settings,
  Palette
} from 'lucide-react';

export default function AIQuantumNeuralInterface() {
  const features = [
    {
      title: "Quantum Neural Processing",
      description: "Advanced quantum computing algorithms for neural network optimization",
      icon: Brain,
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Real-time Neural Interface",
      description: "Direct brain-computer interface with sub-millisecond response times",
      icon: Zap,
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "AI Consciousness Simulation",
      description: "Sophisticated AI models that simulate human consciousness patterns",
      icon: Atom,
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Neural Security Protocol",
      description: "Advanced encryption and security for neural data transmission",
      icon: Shield,
      color: "from-red-600 to-orange-600"
    }
  ];

  const useCases = [
    {
      title: "Medical Research",
      description: "Advanced neurological research and brain mapping",
      icon: Brain,
      benefits: ["Precise brain mapping", "Disease detection", "Treatment optimization"]
    },
    {
      title: "Education Enhancement",
      description: "Direct knowledge transfer and learning acceleration",
      icon: Users,
      benefits: ["Knowledge transfer", "Learning acceleration", "Memory enhancement"]
    },
    {
      title: "Entertainment",
      description: "Immersive virtual reality and gaming experiences",
      icon: Gamepad2,
      benefits: ["Full immersion", "Emotional response", "Interactive storytelling"]
    },
    {
      title: "Communication",
      description: "Telepathic communication and thought sharing",
      icon: MessageCircle,
      benefits: ["Thought sharing", "Emotional connection", "Universal language"]
    }
  ];

  const pricingPlans = [
    {
      name: "Research",
      price: "$2,500",
      period: "/month",
      description: "For academic and research institutions",
      features: [
        "Basic neural interface",
        "Data collection tools",
        "Research analytics",
        "Email support",
        "5 concurrent users"
      ],
      cta: "Start Research Plan",
      popular: false
    },
    {
      name: "Professional",
      price: "$5,000",
      period: "/month",
      description: "For healthcare and technology companies",
      features: [
        "Advanced neural processing",
        "Real-time monitoring",
        "Custom algorithms",
        "Priority support",
        "25 concurrent users",
        "API access"
      ],
      cta: "Start Professional Plan",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$12,000",
      period: "/month",
      description: "For large corporations and government",
      features: [
        "Full quantum neural interface",
        "Custom consciousness models",
        "Dedicated support team",
        "Unlimited users",
        "White-label solution",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const technicalSpecs = [
    {
      category: "Neural Interface",
      specs: [
        "Response time: <1ms",
        "Accuracy: 99.9%",
        "Bandwidth: 100TB/s",
        "Channels: 10,000+"
      ]
    },
    {
      category: "Quantum Processing",
      specs: [
        "Qubits: 1000+",
        "Coherence time: 100s",
        "Error rate: <0.01%",
        "Scalability: Linear"
      ]
    },
    {
      category: "AI Models",
      specs: [
        "Parameters: 100B+",
        "Training data: 1PB+",
        "Inference speed: Real-time",
        "Accuracy: 99.99%"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zion-blue via-zion-purple to-zion-cyan py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-zion-cyan bg-clip-text text-transparent">
              AI Quantum Neural Interface
            </h1>
            <p className="text-xl lg:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              The world's first commercial quantum neural interface platform, enabling direct brain-computer communication 
              and AI consciousness simulation for unprecedented human-AI collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Revolutionary Neural Technology
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the future of human-AI interaction with our cutting-edge quantum neural interface platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Transformative Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how our quantum neural interface is revolutionizing industries and human capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{useCase.title}</h3>
                    <p className="text-zion-slate-light">{useCase.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
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
      <section className="py-20 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Flexible pricing options designed for research, professional, and enterprise needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-zion-blue border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/25' 
                    : 'border-zion-purple/30'
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
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                      : 'bg-zion-blue border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-zion-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Industry-leading performance metrics that set new standards for neural interface technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-zion-cyan">{spec.category}</h3>
                <ul className="space-y-3">
                  {spec.specs.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-zion-slate-light">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join the revolution in human-AI interaction. Start your free trial today and discover 
              the limitless possibilities of quantum neural interfaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
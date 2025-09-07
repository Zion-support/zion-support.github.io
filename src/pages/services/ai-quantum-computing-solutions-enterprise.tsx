import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import {
  Atom,
  Brain,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  Globe,
  Database,
  Cpu,
  Lock,
  Activity,
  Network,
  Server,
  Users,
  Clock,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  BarChart3,
  TrendingUp,
  Shield,
  Eye,
  Cpu as CpuIcon,
  CircuitBoard,
  Quantum,
  Binary,
  Code,
  Calculator,
  Microscope,
  Beaker,
  TestTube,
  Rocket,
  Satellite
} from 'lucide-react';

export default function AIQuantumComputingSolutionsEnterprise() {
  const features = [
    {
      icon: Atom,
      title: "Quantum-Classical Hybrid Computing",
      description: "Seamlessly integrate quantum and classical computing resources for optimal performance across all computational tasks."
    },
    {
      icon: Brain,
      title: "AI-Enhanced Quantum Algorithms",
      description: "Machine learning optimized quantum algorithms that deliver 1000x faster processing for complex optimization problems."
    },
    {
      icon: Zap,
      title: "Real-Time Quantum Error Correction",
      description: "Advanced error correction algorithms that maintain quantum coherence and ensure reliable computation results."
    },
    {
      icon: Network,
      title: "Quantum Cloud Infrastructure",
      description: "Access to quantum computers through secure cloud infrastructure with enterprise-grade security and reliability."
    },
    {
      icon: Users,
      title: "Multi-User Quantum Access",
      description: "Role-based access control allowing multiple teams to utilize quantum resources efficiently and securely."
    },
    {
      icon: Globe,
      title: "Global Quantum Network",
      description: "Connect to quantum computers worldwide through our distributed quantum network infrastructure."
    }
  ];

  const pricing = [
    {
      name: "Quantum Starter",
      price: "$4,999",
      period: "/month",
      description: "Perfect for research and development",
      features: [
        "Up to 100 quantum operations/day",
        "Basic quantum algorithms",
        "Cloud quantum access",
        "Standard support",
        "Basic error correction",
        "Documentation access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$9,999",
      period: "/month",
      description: "Ideal for enterprise applications",
      features: [
        "Up to 1000 quantum operations/day",
        "Advanced quantum algorithms",
        "Custom quantum circuits",
        "Priority support",
        "Advanced error correction",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "$19,999",
      period: "/month",
      description: "For large-scale quantum projects",
      features: [
        "Unlimited quantum operations",
        "Custom quantum algorithms",
        "Dedicated quantum hardware",
        "24/7 dedicated support",
        "White-label solution",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "1000x Faster Processing",
      description: "Quantum algorithms solve complex problems exponentially faster than classical computers."
    },
    {
      icon: TrendingUp,
      title: "Unlock New Possibilities",
      description: "Access computational power that enables breakthroughs in science, finance, and AI."
    },
    {
      icon: Shield,
      title: "Future-Proof Technology",
      description: "Stay ahead of the competition with cutting-edge quantum computing capabilities."
    },
    {
      icon: Users,
      title: "Expert Quantum Support",
      description: "Access to quantum computing experts and comprehensive training programs."
    }
  ];

  const useCases = [
    {
      icon: Calculator,
      title: "Financial Modeling",
      description: "Quantum algorithms for portfolio optimization, risk assessment, and market prediction with unprecedented accuracy."
    },
    {
      icon: Beaker,
      title: "Drug Discovery",
      description: "Simulate molecular interactions and chemical reactions to accelerate pharmaceutical research and development."
    },
    {
      icon: Network,
      title: "Logistics Optimization",
      description: "Solve complex routing and scheduling problems for supply chains and transportation networks."
    },
    {
      icon: Code,
      title: "AI Training",
      description: "Accelerate machine learning model training and optimization using quantum-enhanced algorithms."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Quantum Computing Solutions Enterprise | Zion Tech Group"
        description="Transform your business with our enterprise-grade AI Quantum Computing Solutions. Access quantum computers, AI-enhanced algorithms, and 1000x faster processing capabilities."
        keywords="AI quantum computing, quantum algorithms, enterprise quantum, quantum cloud, quantum AI, quantum solutions, quantum optimization"
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-600/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              AI-Powered Quantum Computing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Quantum Computing Solutions Enterprise
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Access the future of computing with our AI-enhanced quantum computing platform. 
              Get 1000x faster processing, advanced quantum algorithms, and cloud quantum access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Quantum Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge quantum computing with AI optimization to deliver 
              unprecedented computational power and capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transformative Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum computing can revolutionize your industry with applications 
              that were previously impossible with classical computers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Organizations using our quantum computing platform have achieved breakthrough results 
              in processing speed, problem-solving capabilities, and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the quantum computing plan that best fits your computational needs and budget. 
              All plans include our core quantum capabilities and AI optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-purple-500/50 bg-gradient-to-br from-slate-800/50 to-purple-500/10' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Access Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the quantum revolution and unlock computational power that was previously impossible. 
              Start your free trial today and experience the future of computing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Have questions about our AI Quantum Computing Solutions? 
                Our quantum computing experts are here to help you get started.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <MapPinIcon className="w-5 h-5 text-purple-400" />
                  <span>Middletown, DE</span>
                </div>
              </div>

              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200">
                Contact Quantum Team
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
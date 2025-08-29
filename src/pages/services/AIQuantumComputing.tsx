import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin,
  Atom,
  Cpu,
  Database,
  Lock,
  Globe,
  Rocket,
  Target,
  Users,
  Clock,
  Award
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIQuantumComputing() {
  const features = [
    "Quantum machine learning algorithms",
    "Quantum neural networks",
    "Quantum cryptography solutions",
    "Quantum optimization for logistics",
    "Quantum simulation platforms",
    "Hybrid classical-quantum computing",
    "Quantum error correction",
    "Quantum cloud infrastructure"
  ];

  const benefits = [
    "Exponential speedup for complex calculations",
    "Unbreakable quantum encryption",
    "Revolutionary drug discovery capabilities",
    "Advanced financial modeling",
    "Climate change simulation",
    "AI training acceleration",
    "Supply chain optimization",
    "Cybersecurity enhancement"
  ];

  const pricingTiers = [
    {
      name: "Quantum Starter",
      price: 2999,
      period: "month",
      description: "Basic quantum computing access for research and development",
      features: [
        "Access to quantum simulators",
        "Basic quantum algorithms",
        "Email support",
        "5 quantum computing hours/month",
        "Standard quantum libraries"
      ]
    },
    {
      name: "Quantum Professional",
      price: 7999,
      period: "month",
      description: "Advanced quantum computing solutions for enterprises",
      features: [
        "Real quantum hardware access",
        "Custom quantum algorithms",
        "Priority support",
        "20 quantum computing hours/month",
        "Advanced quantum libraries",
        "Quantum consulting hours",
        "Performance optimization"
      ],
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: 19999,
      period: "month",
      description: "Full-scale quantum computing infrastructure",
      features: [
        "Dedicated quantum resources",
        "Custom quantum solutions",
        "24/7 dedicated support",
        "Unlimited quantum computing hours",
        "White-label quantum platform",
        "Quantum strategy consulting",
        "SLA guarantees",
        "Dedicated quantum engineer"
      ]
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Portfolio optimization, risk assessment, and fraud detection using quantum algorithms",
      icon: TrendingUp
    },
    {
      title: "Healthcare & Pharma",
      description: "Drug discovery, protein folding, and personalized medicine through quantum simulation",
      icon: Shield
    },
    {
      title: "Logistics & Supply Chain",
      description: "Route optimization, inventory management, and demand forecasting with quantum computing",
      icon: Globe
    },
    {
      title: "Cybersecurity",
      description: "Quantum-resistant encryption and advanced threat detection systems",
      icon: Lock
    }
  ];

  return (
    <>
      <SEO 
        title="AI Quantum Computing Services - Zion Tech Group"
        description="Revolutionary quantum computing solutions powered by AI. Experience exponential speedup for complex calculations, quantum cryptography, and advanced machine learning."
        canonical="/services/ai-quantum-computing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/quantum-pattern.svg')] bg-center opacity-10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
                <Atom className="w-4 h-4 mr-2" />
                Revolutionary Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                AI Quantum Computing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Unlock the future of computing with our AI-powered quantum solutions. Experience exponential speedup for complex calculations and revolutionary problem-solving capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Quantum Access
                </Link>
                <Link 
                  to="#pricing" 
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quantum Computing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI quantum computing platform combines the power of quantum mechanics with artificial intelligence to solve previously impossible problems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/60 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quantum Computing Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with unprecedented computational power and capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quantum Computing Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how quantum computing is revolutionizing industries across the globe.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Quantum Computing Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the quantum computing plan that fits your needs and budget.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 border rounded-xl p-8 ${
                    tier.popular 
                      ? 'border-purple-400 scale-105' 
                      : 'border-purple-500/30'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.description}</p>
                    <div className="text-4xl font-bold text-white mb-2">
                      ${tier.price.toLocaleString()}
                      <span className="text-lg text-gray-400">/{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact" 
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white'
                        : 'border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience Quantum Computing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the quantum revolution and transform your business with unprecedented computational power.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Quantum Journey
                </Link>
                <Link 
                  to="/services" 
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Explore All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-black/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-purple-400 mb-4" />
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-purple-400 mb-4" />
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-purple-400 mb-4" />
                  <p className="text-white font-semibold">Address</p>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
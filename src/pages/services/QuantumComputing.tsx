import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Zap, Brain, BarChart3, Target, CheckCircle, ArrowRight, Globe, Users, Clock, Shield, Eye, Cpu, Network, Database, Lock } from 'lucide-react';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';

export default function QuantumComputing() {
  const features = [
    {
      icon: Atom,
      title: "Quantum Algorithms",
      description: "Custom quantum algorithms for optimization, cryptography, and machine learning"
    },
    {
      icon: Brain,
      title: "Quantum Machine Learning",
      description: "Quantum-enhanced ML models for pattern recognition and prediction"
    },
    {
      icon: Zap,
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms"
    },
    {
      icon: BarChart3,
      title: "Quantum Simulation",
      description: "Accurate simulation of quantum systems for research and development"
    },
    {
      icon: Target,
      title: "Optimization Problems",
      description: "Solve complex optimization challenges in logistics, finance, and manufacturing"
    },
    {
      icon: Shield,
      title: "Post-Quantum Security",
      description: "Prepare for quantum threats with quantum-resistant cryptographic solutions"
    }
  ];

  const pricing = [
    {
      name: "Research",
      price: "$5,999",
      period: "/month",
      description: "For academic and research institutions",
      features: [
        "Access to quantum simulators",
        "Basic quantum algorithms",
        "Research support",
        "Academic pricing",
        "Documentation access"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Enterprise",
      price: "$19,999",
      period: "/month",
      description: "For businesses exploring quantum solutions",
      features: [
        "Quantum cloud access",
        "Custom algorithm development",
        "Priority support",
        "Security consulting",
        "Training programs",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Quantum Lab",
      price: "$49,999",
      period: "/month",
      description: "For advanced quantum research and development",
      features: [
        "Dedicated quantum resources",
        "Custom hardware access",
        "24/7 expert support",
        "White-label solutions",
        "Research partnerships",
        "Dedicated quantum scientist"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Exponential Speedup",
      description: "Solve problems in minutes that would take classical computers centuries"
    },
    {
      icon: Target,
      title: "Unprecedented Accuracy",
      description: "Achieve higher precision in simulations and calculations"
    },
    {
      icon: BarChart3,
      title: "Competitive Advantage",
      description: "Stay ahead of the curve with cutting-edge quantum technology"
    },
    {
      icon: Users,
      title: "Future-Proof Solutions",
      description: "Build quantum-ready applications for the post-quantum era"
    }
  ];

  const applications = [
    {
      icon: Globe,
      title: "Financial Services",
      description: "Portfolio optimization, risk assessment, and algorithmic trading",
      examples: ["Risk modeling", "Portfolio optimization", "Fraud detection"]
    },
    {
      icon: Cpu,
      title: "Drug Discovery",
      description: "Molecular simulation and drug design optimization",
      examples: ["Molecular modeling", "Drug interactions", "Protein folding"]
    },
    {
      icon: Network,
      title: "Logistics",
      description: "Route optimization, supply chain management, and scheduling",
      examples: ["Route planning", "Inventory optimization", "Resource allocation"]
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic relative overflow-hidden">
      <SEO 
        title="Quantum Computing Services - Zion Tech Group"
        description="Harness the power of quantum computing with our advanced quantum solutions. Quantum algorithms, cryptography, and machine learning for the future."
        keywords="quantum computing, quantum algorithms, quantum cryptography, quantum machine learning, post-quantum security"
      />

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute top-20 left-10 animate-pulse">
          <div className="w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse delay-1000">
          <div className="w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container-responsive">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                <Atom className="w-4 h-4 mr-2" />
                Quantum Computing Excellence
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Quantum</span> Computing for Tomorrow
              </h1>
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                Unlock the power of quantum computing with our advanced quantum solutions. 
                From quantum algorithms to post-quantum security, we're building the future of computation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border border-indigo-500/30 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-300"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Quantum Computing Applications
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Discover how quantum computing is revolutionizing industries across the globe
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {applications.map((application, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <application.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{application.title}</h3>
                  <p className="text-zinc-400 mb-4">{application.description}</p>
                  <ul className="space-y-2">
                    {application.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center text-zinc-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white/5">
          <div className="container-responsive">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Quantum Computing?
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Our comprehensive approach combines cutting-edge quantum technology with proven methodologies
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Choose the plan that fits your quantum computing needs. All plans include our core quantum features.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative p-8 rounded-2xl ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border-2 border-indigo-500/50' 
                      : 'bg-white/5 border border-white/10'
                  } backdrop-blur-sm`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-zinc-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-zinc-400">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-zinc-300">
                        <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={plan.name === "Quantum Lab" ? "/contact" : "/request-quote"}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/5">
          <div className="container-responsive">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Business Benefits
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                See measurable improvements in your computational capabilities and problem-solving
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-zinc-400">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
          <div className="container-responsive text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Go Quantum?
              </h2>
              <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
                Join the quantum revolution with Zion Tech Group's cutting-edge quantum computing solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border border-indigo-500/30 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-300"
                >
                  Get Custom Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
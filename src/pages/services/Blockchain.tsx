import React from 'react';
import { motion } from 'framer-motion';
import { Link, Shield, Zap, BarChart3, Target, CheckCircle, ArrowRight, Globe, Users, Clock, Eye, Cpu, Network, Database, Lock, Smartphone } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Link as RouterLink } from 'react-router-dom';

export default function Blockchain() {
  const features = [
    {
      icon: Link,
      title: "Smart Contracts",
      description: "Self-executing contracts with automated enforcement and transparency"
    },
    {
      icon: Shield,
      title: "DeFi Solutions",
      description: "Decentralized finance applications for lending, trading, and yield farming"
    },
    {
      icon: Zap,
      title: "NFT Development",
      description: "Create, mint, and manage non-fungible tokens for digital assets"
    },
    {
      icon: BarChart3,
      title: "Supply Chain Tracking",
      description: "End-to-end transparency and traceability for global supply chains"
    },
    {
      icon: Target,
      title: "Identity Management",
      description: "Self-sovereign identity solutions with privacy and security"
    },
    {
      icon: Network,
      title: "Cross-Chain Interoperability",
      description: "Seamless communication between different blockchain networks"
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$3,999",
      period: "/month",
      description: "For small businesses exploring blockchain",
      features: [
        "Basic smart contracts",
        "Single blockchain deployment",
        "Email support",
        "Monthly maintenance",
        "Security audit"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$9,999",
      period: "/month",
      description: "For growing businesses with blockchain needs",
      features: [
        "Advanced smart contracts",
        "Multi-chain deployment",
        "Priority support",
        "Weekly maintenance",
        "Security monitoring",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$24,999",
      period: "/month",
      description: "For large-scale blockchain operations",
      features: [
        "Custom blockchain solutions",
        "Private blockchain networks",
        "24/7 support",
        "Real-time monitoring",
        "White-label solutions",
        "Dedicated blockchain engineer"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Immutable records and cryptographic protection for your data"
    },
    {
      icon: Target,
      title: "Transparency",
      description: "Complete visibility into transactions and data flow"
    },
    {
      icon: BarChart3,
      title: "Cost Reduction",
      description: "Eliminate intermediaries and reduce transaction costs"
    },
    {
      icon: Users,
      title: "Trust & Compliance",
      description: "Build trust through verifiable and auditable processes"
    }
  ];

  const useCases = [
    {
      icon: Globe,
      title: "Financial Services",
      description: "Cryptocurrency, payments, and decentralized finance applications",
      examples: ["Digital payments", "Asset tokenization", "DeFi protocols"]
    },
    {
      icon: Network,
      title: "Supply Chain",
      description: "Track products from origin to destination with full transparency",
      examples: ["Product tracking", "Quality assurance", "Compliance reporting"]
    },
    {
      icon: Shield,
      title: "Healthcare",
      description: "Secure patient records and pharmaceutical supply chain management",
      examples: ["Patient data", "Drug tracking", "Clinical trials"]
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic relative overflow-hidden">
      <SEO 
        title="Blockchain Services - Zion Tech Group"
        description="Transform your business with our advanced blockchain solutions. Smart contracts, DeFi, NFTs, and supply chain tracking for the digital age."
        keywords="blockchain, smart contracts, DeFi, NFTs, supply chain, cryptocurrency, decentralized applications"
      />

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute top-20 left-10 animate-pulse">
          <div className="w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse delay-1000">
          <div className="w-40 h-40 bg-red-500/20 rounded-full blur-3xl" />
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
                <Link className="w-4 h-4 mr-2" />
                Blockchain Innovation
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">Blockchain</span> Solutions for the Future
              </h1>
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                Leverage the power of blockchain technology to create transparent, secure, and efficient 
                business processes. From smart contracts to DeFi, we're building the decentralized future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <RouterLink 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </RouterLink>
                <RouterLink 
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border border-orange-500/30 text-orange-400 font-semibold rounded-lg hover:bg-orange-500/10 transition-all duration-300"
                >
                  Request Quote
                </RouterLink>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Use Cases Section */}
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
                Blockchain Applications
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Discover how blockchain is transforming industries across the globe
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-zinc-400 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center text-zinc-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
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
                Why Choose Our Blockchain?
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Our comprehensive approach ensures your blockchain solutions are secure, scalable, and innovative
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
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
                Choose the plan that fits your blockchain needs. All plans include our core blockchain features.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative p-8 rounded-2xl ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-orange-500/20 to-red-500/20 border-2 border-orange-500/50' 
                      : 'bg-white/5 border border-white/10'
                  } backdrop-blur-sm`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold rounded-full">
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
                        <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <RouterLink
                    to={plan.name === "Enterprise" ? "/contact" : "/request-quote"}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    {plan.cta}
                  </RouterLink>
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
                See measurable improvements in your business processes and customer trust
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
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
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
        <section className="py-20 bg-gradient-to-r from-orange-500/10 to-red-500/10">
          <div className="container-responsive text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Go Blockchain?
              </h2>
              <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
                Join the blockchain revolution with Zion Tech Group's cutting-edge decentralized solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <RouterLink 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </RouterLink>
                <RouterLink 
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border border-orange-500/30 text-orange-400 font-semibold rounded-lg hover:bg-orange-500/10 transition-all duration-300"
                >
                  Get Custom Quote
                </RouterLink>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
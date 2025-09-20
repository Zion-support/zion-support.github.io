import React from "react"
import { motion } from "framer-motion"
import { Link, Shield, Zap, BarChart3, Target, CheckCircle, ArrowRight, Globe, Users, Clock, Eye, Cpu, Network, Database, Lock, Smartphone } from "lucide-react"
import SEO from "@/components/SEO"
import { Link as RouterLink } from "react-router-dom"
export default function Blockchain() {
  const features = [
    {
      ic,
  o: n: Link,tit,
  l: e: "Smart Contracts",descripti,
  o: n: "Self-executing contracts with automated enforcement and transparency"
    }, {
      ic,
  o: n: Shield,tit,
  l: e: "DeFi Solutions",descripti,
  o: n: "Decentralized finance applications for lending, trading, and yield farming"
    }, {
      ic,
  o: n: Zap,tit,
  l: e: "NFT Development",descripti,
  o: n: "Create, mint, and manage non-fungible tokens for digital assets"
    }, {
      ic,
  o: n: BarChart3,tit,
  l: e: "Supply Chain Tracking",descripti,
  o: n: "End-to-end transparency and traceability for global supply chains"
    }, {
      ic,
  o: n: Target,tit,
  l: e: "Identity Management",descripti,
  o: n: "Self-sovereign identity solutions with privacy and security"
    }, {
      ic,
  o: n: Network,tit,
  l: e: "Cross-Chain Interoperability",descripti,
  o: n: "Seamless communication between different blockchain networks"
    }
  ]
  const pricing = [
    {
      na,
  m: e: "Starter",pri,
  c: e: "$3,999"
      peri,
  o: d: "/month",descripti,
  o: n: "For small businesses exploring blockchain",featur,
  e: s: [
        "Basic smart contracts"
        "Single blockchain deployment"
        "Email support"
        "Monthly maintenance"
        "Security audit"
      ]
      ct,
  a: "Get Started",popul,
  a: r: false
    }, {
      na,
  m: e: "Professional",pri,
  c: e: "$9,999"
      peri,
  o: d: "/month",descripti,
  o: n: "For growing businesses with blockchain needs",featur,
  e: s: [
        "Advanced smart contracts"
        "Multi-chain deployment"
        "Priority support"
        "Weekly maintenance"
        "Security monitoring"
        "API access"
      ]
      ct,
  a: "Start Free Trial",popul,
  a: r: true
    }, {
      na,
  m: e: "Enterprise",pri,
  c: e: "$24,999"
      peri,
  o: d: "/month",descripti,
  o: n: "For large-scale blockchain operations",featur,
  e: s: [
        "Custom blockchain solutions"
        "Private blockchain networks"
        "24/7 support"
        "Real-time monitoring"
        "White-label solutions"
        "Dedicated blockchain engineer"
      ]
      ct,
  a: "Contact Sales",popul,
  a: r: false
    }
  ]
  const benefits = [
    {
      ic,
  o: n: Shield,tit,
  l: e: "Enhanced Security",descripti,
  o: n: "Immutable records and cryptographic protection for your data"
    }, {
      ic,
  o: n: Target,tit,
  l: e: "Transparency",descripti,
  o: n: "Complete visibility into transactions and data flow"
    }, {
      ic,
  o: n: BarChart3,tit,
  l: e: "Cost Reduction",descripti,
  o: n: "Eliminate intermediaries and reduce transaction costs"
    }, {
      ic,
  o: n: Users,tit,
  l: e: "Trust & Compliance",descripti,
  o: n: "Build trust through verifiable and auditable processes"
    }
  ]
  const useCases = [
    {
      ic,
  o: n: Globe,tit,
  l: e: "Financial Services",descripti,
  o: n: "Cryptocurrency, payments, and decentralized finance applications"
      exampl,
  e: s: [["Digital payments", "Asset tokenization", "DeFi protocols"];]
    }, {
      ic,
  o: n: Network,tit,
  l: e: "Supply Chain",descripti,
  o: n: "Track products from origin to destination with full transparency",exampl,
  e: s: [["Product tracking", "Quality assurance", "Compliance reporting"];]
    }, {
      ic,
  o: n: Shield,tit,
  l: e: "Healthcare",descripti,
  o: n: "Secure patient records and pharmaceutical supply chain management",exampl,
  e: s: [["Patient data", "Drug tracking", "Clinical trials"];]
    }
  ]
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-slate-900 to-slate-900"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6 }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
              <Lock className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">Blockchain Solutions</span>
            </div>

            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Trust Through
              <span className="text-gradient"> Technology</span>
            </h1>

            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Build trust, transparency, and efficiency with blockchain technology.
              Transform your business with decentralized solutions.
            </p>

            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Start Blockchain Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-outline px-8 py-4 text-lg">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse delay-1000">
          <div className="w-40 h-40 bg-red-500/20 rounded-full blur-3xl" />
        </div>
      </section>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container-responsive">
            <motion.div 
              className="className="text-center max-w-4xl mx-auto";"
              initial={ opaci,
  t: y: 0, y: 30 }
              animate={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.8 }
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
                <Link className="w-4 h-4 mr-2" />
                Blockchain Innovation
              </div>
              <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">Blockchain</span> Solutions for the Future
              </h1>
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                Leverage the power of blockchain technology to create transparent, secure, and efficient 
                business processes. From smart contracts to DeFi, we're building the decentralized future.
              </p>
              <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
                <RouterLink 
                  to="/contact"
                  className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg,
  hove: r:from-orange-600,
  hove: r:to-red-600 transition-all duration-300,
  transform: hover:scale-105";"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </RouterLink>
                <RouterLink 
                  to="/request-quote"
                  className="className="inline-flex items-center px-8 py-4 border border-orange-500/30 text-orange-400 font-semibold rounded-lg hove,
  r:bg-orange-500/10 transition-all duration-300";"
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
              className="className="text-center mb-16";"
              initial={ opaci,
  t: y: 0, y: 30 }
              whileInView={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.8 }
              viewport={ on,
  c: e: true }
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Blockchain Applications
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Discover how blockchain is transforming industries across the globe
              </p>
            </motion.div>

            <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className="className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm,
  hove: r: border-orange-500/30 transition-all duration-300";"
                  initial={ opacit,
  y: 0, y: 30 }
                  whileInView={ opaci,
  t: y: 1, y: 0 }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                  viewport={ on,
  c: e: true }
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
              className="className="text-center mb-16";"
              initial={ opaci,
  t: y: 0, y: 30 }
              whileInView={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.8 }
              viewport={ on,
  c: e: true }
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Blockchain?
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Our comprehensive approach ensures your blockchain solutions are secure, scalable, and innovative
              </p>
            </motion.div>

            <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm,
  hove: r: border-orange-500/30 transition-all duration-300";"
                  initial={ opacit,
  y: 0, y: 30 }
                  whileInView={ opaci,
  t: y: 1, y: 0 }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                  viewport={ on,
  c: e: true }
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
              className="className="text-center mb-16";"
              initial={ opaci,
  t: y: 0, y: 30 }
              whileInView={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.8 }
              viewport={ on,
  c: e: true }
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Choose the plan that fits your blockchain needs. All plans include our core blockchain features.
              </p>
            </motion.div>

            <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative p-8 rounded-2xl ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-orange-500/20 to-red-500/20 border-2 border-orange-500/50' 
                      : 'bg-white/5 border border-white/10'
                  } backdrop-blur-sm`}
                  initial={ opaci,
  t: y: 0, y: 30 }
                  whileInView={ opaci,
  t: y: 1, y: 0 }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                  viewport={ on,
  c: e: true }
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
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white,
  hove: r: from-orange-600,
  hove: r:to-red-600'
                        : 'bg-white/10 text-white hove,
  r:bg-white/20 border border-white/20'
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
              className="className="text-center mb-16";"
              initial={ opaci,
  t: y: 0, y: 30 }
              whileInView={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.8 }
              viewport={ on,
  c: e: true }
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Business Benefits
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                See measurable improvements in your business processes and customer trust
              </p>
            </motion.div>

            <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="className="flex items-start space-x-4 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm";"
                  initial={ opaci,
  t: y: 0, x: index % 2 === 0 ? -30 : 30 }
                  whileInView={ opaci,
  t: y: 1, x: 0 }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                  viewport={ on,
  c: e: true }
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
              initial={ opaci,
  t: y: 0, y: 30 }
              whileInView={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.8 }
              viewport={ on,
  c: e: true }
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Go Blockchain?
              </h2>
              <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
                Join the blockchain revolution with Zion Tech Group's cutting-edge decentralized solutions
              </p>
              <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
                <RouterLink 
                  to="/contact"
                  className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg,
  hove: r:from-orange-600,
  hove: r:to-red-600 transition-all duration-300,
  transform: hover:scale-105";"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </RouterLink>
                <RouterLink 
                  to="/request-quote"
                  className="className="inline-flex items-center px-8 py-4 border border-orange-500/30 text-orange-400 font-semibold rounded-lg hove,
  r:bg-orange-500/10 transition-all duration-300";"
                >
                  Get Custom Quote
                </RouterLink>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
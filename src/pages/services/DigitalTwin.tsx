import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Zap, Shield, BarChart3, Users, Clock, CheckCircle, ArrowRight, Server, Database, Lock, Globe, Cpu, HardDrive, Network, Monitor, Brain, Cloud } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';

export default function DigitalTwin() {
  const features = [
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of physical assets with instant alerts and notifications"
    },
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms for predictive maintenance and optimization"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with data encryption and regulatory compliance"
    },
    {
      icon: Globe,
      title: "Global Connectivity",
      description: "Connect assets across multiple locations with unified monitoring dashboard"
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Local processing for real-time decision making and reduced latency"
    },
    {
      icon: Monitor,
      title: "24/7 Surveillance",
      description: "Round-the-clock monitoring with automated incident response and escalation"
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 10 digital twins",
        "Basic monitoring",
        "Email support",
        "Daily reports",
        "Mobile app access"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing organizations",
      features: [
        "Up to 100 digital twins",
        "Advanced analytics",
        "Priority support",
        "Real-time alerts",
        "Custom dashboards",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large-scale operations",
      features: [
        "Unlimited digital twins",
        "Custom AI models",
        "24/7 phone support",
        "Advanced reporting",
        "Multi-site management",
        "Dedicated support team"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Faster Decision Making",
      description: "Real-time insights enable quick responses to operational challenges"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Predictive analytics help prevent failures and reduce downtime"
    },
    {
      icon: BarChart3,
      title: "Cost Optimization",
      description: "Reduce operational costs by up to 30% with intelligent asset management"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Unified platform for cross-functional teams to monitor and optimize assets"
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Continuous monitoring ensures round-the-clock operational efficiency"
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Trusted by 300+ companies with measurable ROI improvements"
    }
  ];

  const useCases = [
    {
      icon: Server,
      title: "Manufacturing",
      description: "Monitor production lines, equipment health, and quality control systems",
      examples: ["Predictive maintenance", "Quality assurance", "Production optimization"]
    },
    {
      icon: Database,
      title: "Energy & Utilities",
      description: "Smart grid management, renewable energy monitoring, and infrastructure optimization",
      examples: ["Grid stability", "Energy efficiency", "Renewable integration"]
    },
    {
      icon: Lock,
      title: "Healthcare",
      description: "Patient monitoring, medical device management, and facility optimization",
      examples: ["Patient care", "Equipment tracking", "Resource optimization"]
    },
    {
      icon: Globe,
      title: "Smart Cities",
      description: "Manage urban infrastructure, traffic systems, and public services",
      examples: ["Traffic optimization", "Energy management", "Public safety"]
    },
    {
      icon: Cloud,
      title: "Healthcare",
      description: "Patient monitoring, medical device management, and facility optimization",
      examples: ["Patient care", "Equipment tracking", "Resource optimization"]
    }
  ];

  const technologies = [
    { name: "IoT Sensors", icon: "📡", description: "High-precision sensors for data collection" },
    { name: "Edge Computing", icon: "⚡", description: "Local processing for real-time decisions" },
    { name: "5G Networks", icon: "🌐", description: "Ultra-fast connectivity for data transmission" },
    { name: "AI/ML Models", icon: "🤖", description: "Advanced algorithms for predictions" },
    { name: "Cloud Platform", icon: "☁️", description: "Scalable data storage and processing" },
    { name: "Blockchain", icon: "🔗", description: "Secure and transparent data sharing" },
    { name: "Augmented Reality", icon: "👁️", description: "Immersive visualization and interaction" },
    { name: "Digital Thread", icon: "🧵", description: "End-to-end data connectivity" }
  ];

  return (
    <>
      <SEO 
        title="Digital Twin Solutions | Zion Tech Group"
        description="Transform your physical assets into intelligent digital twins with real-time monitoring, predictive analytics, and automated optimization."
        keywords="digital twin, IoT, real-time monitoring, predictive analytics, smart manufacturing, smart cities"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
          <div className="container-responsive relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
                <Eye className="w-4 h-4 mr-2" />
                Digital Twin Technology
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Create Virtual
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Replicas
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Transform your physical assets into intelligent digital twins for real-time monitoring, 
                predictive analytics, and intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Digital Twin Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge IoT technology with advanced AI algorithms to deliver 
                comprehensive digital twin solutions that transform your operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 group hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-cyan-500/40 group-hover:to-blue-500/40 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Digital twin technology is revolutionizing industries across the board. 
                Discover how it can transform your specific sector.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 group hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-cyan-500/40 group-hover:to-blue-500/40 transition-all duration-300">
                    <useCase.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center text-sm text-cyan-300">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {example}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 
                our core digital twin features with enterprise-grade support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
                      : 'border-slate-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                        : 'bg-slate-700/50 text-white hover:bg-slate-700/70 border border-slate-600/50'
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
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Benefits of Digital Twins
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how digital twin technology can transform your business 
                operations and accelerate your digital transformation journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-cyan-500/40 group-hover:to-blue-500/40 transition-all duration-300">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our digital twin solutions leverage cutting-edge technologies to deliver 
                accurate, real-time, and intelligent asset monitoring.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-slate-800/50 border border-slate-700/50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:border-cyan-400/30 transition-all duration-300">
                    <span className="text-3xl">{tech.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-400">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Create Your Digital Twin?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of companies that have already transformed their operations 
                with our digital twin technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

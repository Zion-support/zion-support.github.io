import React from 'react';
import { motion } from 'framer-motion';
import { Server, Network, Shield, Database, Cloud, Zap, CheckCircle, ArrowRight, Cpu, HardDrive, Monitor, Users, Globe, Lock, BarChart3, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';

export default function ITInfrastructure() {
  const features = [
    {
      icon: Server,
      title: "Server Management",
      description: "24/7 monitoring and maintenance of your physical and virtual servers"
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Design, implementation, and optimization of enterprise networks"
    },
    {
      icon: Database,
      title: "Database Administration",
      description: "Performance tuning, backup strategies, and disaster recovery"
    },
    {
      icon: Shield,
      title: "Security Hardening",
      description: "Multi-layered security approach with regular vulnerability assessments"
    },
    {
      icon: Cloud,
      title: "Hybrid Cloud Solutions",
      description: "Seamless integration between on-premises and cloud infrastructure"
    },
    {
      icon: Monitor,
      title: "Proactive Monitoring",
      description: "Real-time monitoring with predictive analytics and alerting"
    }
  ];

  const pricing = [
    {
      name: "Basic",
      price: "$499",
      period: "/month",
      description: "For small businesses with basic IT needs",
      features: [
        "Up to 5 servers",
        "Basic network monitoring",
        "Email support",
        "Monthly maintenance",
        "Security updates"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "For growing businesses with complex infrastructure",
      features: [
        "Up to 20 servers",
        "Advanced monitoring",
        "Priority support",
        "Weekly maintenance",
        "Security audits",
        "Performance optimization"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large enterprises with mission-critical systems",
      features: [
        "Unlimited servers",
        "Custom monitoring",
        "24/7 phone support",
        "Daily maintenance",
        "Compliance reporting",
        "Dedicated engineer"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Improved Performance",
      description: "Optimize infrastructure for maximum efficiency and speed"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Protect your assets with enterprise-grade security measures"
    },
    {
      icon: BarChart3,
      title: "Cost Reduction",
      description: "Reduce operational costs through efficient resource management"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Access to certified IT professionals 24/7"
    }
  ];

  const infrastructureTypes = [
    {
      icon: Server,
      title: "On-Premises",
      description: "Traditional infrastructure within your organization",
      features: ["Full control", "Custom hardware", "Security compliance", "Predictable costs"]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud-based solutions",
      features: ["Elastic scaling", "Pay-per-use", "Global reach", "Managed services"]
    },
    {
      icon: Network,
      title: "Hybrid",
      description: "Best of both worlds approach",
      features: ["Flexibility", "Cost optimization", "Risk mitigation", "Performance balance"]
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic relative overflow-hidden">
      <SEO 
        title="IT Infrastructure Services - Zion Tech Group"
        description="Build robust, scalable IT infrastructure with our enterprise-grade solutions. From server management to network optimization, we've got you covered."
        keywords="IT infrastructure, server management, network infrastructure, database administration, IT consulting"
      />

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute top-20 left-10 animate-pulse">
          <div className="w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Server className="w-4 h-4 mr-2" />
                Enterprise IT Infrastructure
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Build <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Rock-Solid</span> Infrastructure
              </h1>
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                Design, build, and maintain enterprise-grade IT infrastructure that scales with your business. 
                From server management to network optimization, we ensure your technology foundation is robust and reliable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Infrastructure Types Section */}
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
                Infrastructure Solutions
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Choose the infrastructure approach that best fits your business requirements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {infrastructureTypes.map((type, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{type.title}</h3>
                  <p className="text-zinc-400 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-zinc-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
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
                Why Choose Our IT Infrastructure?
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Our comprehensive approach ensures your infrastructure is robust, secure, and scalable
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
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
                Choose the plan that fits your business needs. All plans include our core infrastructure services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative p-8 rounded-2xl ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50' 
                      : 'bg-white/5 border border-white/10'
                  } backdrop-blur-sm`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full">
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
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={plan.name === "Enterprise" ? "/contact" : "/request-quote"}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
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
                See measurable improvements in your IT operations and business performance
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
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
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
        <section className="py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
          <div className="container-responsive text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Build Your Infrastructure?
              </h2>
              <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of companies that trust Zion Tech Group with their critical infrastructure needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
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
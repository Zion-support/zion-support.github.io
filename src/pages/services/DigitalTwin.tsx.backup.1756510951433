
import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowRight, CheckCircle, Cloud, Server, Database, Lock, Globe, Cpu, HardDrive, Network, Monitor } from 'lucide-react';
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
      icon: Server,
      title: "3D Visualization",
      description: "Interactive 3D models for immersive asset management and analysis"
    },
    {
      icon: Database,
      title: "Predictive Analytics",
      description: "AI-powered predictions for maintenance, performance, and optimization"
    },
    {
      icon: Lock,
      title: "IoT Integration",
      description: "Seamless connectivity with sensors, devices, and existing systems"
    },
    {
      icon: Globe,
      title: "Data Synchronization",
      description: "Real-time data sync between physical and digital representations"
    },
    {
      icon: Cpu,
      title: "Security & Compliance",
      description: "Enterprise-grade security with industry compliance standards"
    }
  ];

  const useCases = [
    {
      icon: Server,
      title: "Manufacturing",
      description: "Optimize production lines, predict equipment failures, and improve quality control",
      benefits: ["Predictive maintenance", "Quality optimization", "Production efficiency"]
    },
    {
      icon: Globe,
      title: "Smart Cities",
      description: "Monitor infrastructure, traffic patterns, and environmental conditions",
      benefits: ["Traffic optimization", "Infrastructure monitoring", "Environmental tracking"]
    },
    {
      icon: Cloud,
      title: "Healthcare",
      description: "Patient monitoring, medical device management, and facility optimization",
      benefits: ["Patient care", "Equipment tracking", "Resource optimization"]
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

  const pricing = [
    {
      name: "Basic",
      price: "$499",
      period: "/month",
      description: "Perfect for small-scale operations",
      features: [
        "Up to 5 digital twins",
        "Basic monitoring",
        "Email support",
        "Standard analytics",
        "Mobile app access"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 digital twins",
        "Advanced analytics",
        "Priority support",
        "Custom dashboards",
        "API access",
        "Predictive insights"
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
        "Advanced security",
        "Multi-site management",
        "Dedicated support team"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Eye,
      title: "Operational Efficiency",
      description: "Streamline operations and reduce manual intervention by up to 60%"
    },
    {
      icon: Server,
      title: "Predictive Maintenance",
      description: "Prevent costly downtime with AI-powered failure predictions"
    },
    {
      icon: Database,
      title: "Cost Reduction",
      description: "Reduce operational costs by 30-40% through intelligent optimization"
    },
    {
      icon: Globe,
      title: "Better Decision Making",
      description: "Make data-driven decisions with real-time insights and analytics"
    }
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
                Digital twin technology is transforming industries across the globe, 
                from manufacturing to healthcare and smart cities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                      <useCase.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        <span className="text-gray-300">{benefit}</span>
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
                Choose the plan that best fits your digital twin needs and scale as you grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-cyan-400/50 bg-slate-800/70' 
                      : 'border-slate-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
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
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105'
                        : 'border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Benefits Section */}
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
                Business Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how digital twin technology can transform your business operations 
                and drive measurable results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

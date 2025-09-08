import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap, Users, Globe, Award, BarChart3, CheckCircle, Target, Database, Shield, Cpu, TrendingUp } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function MicroSaaS() {
  const services = [
    {
      icon: Rocket,
      title: "SaaS Development",
      description: "Build scalable, cloud-native SaaS applications with modern architecture and best practices"
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Quickly prototype and validate your SaaS idea with rapid development cycles"
    },
    {
      icon: Users,
      title: "User Experience Design",
      description: "Create intuitive, engaging user interfaces that drive adoption and retention"
    },
    {
      icon: Database,
      title: "Data Architecture",
      description: "Design scalable data models and efficient database solutions for your SaaS platform"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Implement enterprise-grade security and ensure compliance with industry standards"
    },
    {
      icon: TrendingUp,
      title: "Growth & Scaling",
      description: "Strategies and tools to scale your SaaS business and acquire customers"
    }
  ];

  const benefits = [
    "Launch your SaaS product in weeks, not months",
    "Reduce development costs by 40-60%",
    "Scale from MVP to enterprise solution seamlessly",
    "Focus on core business logic, not infrastructure",
    "Access to proven SaaS patterns and best practices",
    "Built-in analytics and user insights"
  ];

  const saasTypes = [
    {
      title: "B2B SaaS",
      description: "Enterprise software solutions for businesses, including CRM, ERP, and productivity tools"
    },
    {
      title: "B2C SaaS",
      description: "Consumer-facing applications like productivity tools, creative software, and lifestyle apps"
    },
    {
      title: "Vertical SaaS",
      description: "Industry-specific solutions tailored to particular sectors like healthcare, finance, or manufacturing"
    },
    {
      title: "Horizontal SaaS",
      description: "Cross-industry solutions that serve multiple business functions and departments"
    }
  ];

  const capabilities = [
    "Full-stack SaaS application development",
    "Cloud-native architecture and deployment",
    "User authentication and authorization systems",
    "Subscription and billing management",
    "API development and integration",
    "Real-time features and notifications",
    "Analytics and reporting dashboards",
    "Mobile-responsive web applications"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="MicroSaaS Services - Zion Tech Group"
        description="Build and scale your SaaS business with our expert development services, from rapid prototyping to enterprise solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Rapid SaaS Development
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              MicroSaaS
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Turn your SaaS idea into reality with our rapid development services. 
              Build, launch, and scale your software business faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                Start Building
              </button>
              <button className="px-8 py-4 border border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400 hover:text-slate-900 transition-all duration-300">
                Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete SaaS Development Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From concept to launch, we provide end-to-end SaaS development services 
              that accelerate your time to market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-orange-400 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our SaaS Development?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our proven approach delivers faster development, lower costs, and 
              better outcomes for your SaaS business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-orange-400 flex-shrink-0" />
                <span className="text-slate-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SaaS Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              SaaS Business Models
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We specialize in all types of SaaS applications, from B2B enterprise 
              solutions to consumer-focused applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {saasTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-slate-300">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced SaaS Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Built with modern technologies and proven SaaS patterns for successful outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Build Your SaaS?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Join successful entrepreneurs who have launched their SaaS businesses 
              with our rapid development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105">
                Start Building
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Eye, Database, Zap, Shield, Users, Globe, Award, BarChart3, CheckCircle, Target, Network } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function IoTDigitalTwin() {
  const services = [
    {
      icon: Cpu,
      title: "IoT Device Management",
      description: "Comprehensive IoT device provisioning, monitoring, and lifecycle management"
    },
    {
      icon: Eye,
      title: "Digital Twin Creation",
      description: "Build virtual replicas of physical assets for real-time monitoring and simulation"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Connect and integrate data from multiple IoT sources and enterprise systems"
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Process and analyze IoT data streams for instant insights and decision-making"
    },
    {
      icon: Shield,
      title: "IoT Security",
      description: "Implement robust security measures to protect IoT devices and data"
    },
    {
      icon: Users,
      title: "Predictive Maintenance",
      description: "Use IoT data and digital twins to predict and prevent equipment failures"
    }
  ];

  const benefits = [
    "Reduce operational costs by 25-40%",
    "Improve asset utilization by 30-50%",
    "Prevent unplanned downtime by 60-80%",
    "Enhance decision-making with real-time data",
    "Optimize resource allocation and efficiency",
    "Enable predictive and proactive operations"
  ];

  const useCases = [
    {
      title: "Manufacturing",
      description: "Monitor production lines, predict maintenance, and optimize operations with digital twins"
    },
    {
      title: "Smart Cities",
      description: "Manage urban infrastructure, traffic, and utilities through IoT sensors and digital twins"
    },
    {
      title: "Healthcare",
      description: "Track medical devices, monitor patients, and optimize hospital operations"
    },
    {
      title: "Energy & Utilities",
      description: "Monitor grid performance, predict failures, and optimize energy distribution"
    }
  ];

  const capabilities = [
    "IoT device connectivity and management",
    "Digital twin modeling and simulation",
    "Real-time data processing and analytics",
    "Predictive maintenance algorithms",
    "IoT security and compliance",
    "Data integration and visualization",
    "Edge computing and cloud connectivity",
    "Custom IoT application development"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="IoT & Digital Twin Services - Zion Tech Group"
        description="Transform your operations with IoT connectivity and digital twin technology for real-time monitoring, predictive maintenance, and operational optimization."
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-medium mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              Connected Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IoT & Digital Twin
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Connect your physical world to the digital realm with IoT sensors and 
              digital twin technology. Monitor, analyze, and optimize operations in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                Start IoT Project
              </button>
              <button className="px-8 py-4 border border-emerald-400 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300">
                Free Assessment
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
              Comprehensive IoT & Digital Twin Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From device connectivity to advanced digital twin modeling, we provide 
              end-to-end solutions that transform your operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-emerald-400 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center mb-4">
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
              Transform Your Operations
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              IoT and digital twin technology deliver measurable improvements across 
              all aspects of your business operations.
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
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              IoT and digital twin technology are transforming industries across 
              the globe with innovative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-slate-300">{useCase.description}</p>
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
              Advanced IoT & Digital Twin Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Built with cutting-edge technology and industry expertise for successful implementation.
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
                <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Connect Your World?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Join forward-thinking organizations already achieving breakthrough results 
              with IoT and digital twin technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105">
                Start IoT Project
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
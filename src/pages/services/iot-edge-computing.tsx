import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Brain, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  TrendingUp,
  Globe,
  Clock,
  Award,
  Target,
  BarChart3,
  Sparkles,
  Network,
  Database,
  Lock,
  Eye,
  Server,
  Smartphone,
  Cloud,
  Wifi,
  Activity,
  Gauge,
  Shield,
  Factory,
  Car,
  Building,
  Heart
} from 'lucide-react';
import EnhancedSEO from '@/components/EnhancedSEO';

export default function IoTEdgeComputing() {
  const features = [
    {
      icon: Cpu,
      title: "Edge AI Processing",
      description: "Real-time AI inference at the edge for instant decision making"
    },
    {
      icon: Zap,
      title: "Ultra-Low Latency",
      description: "Sub-10ms response times for critical IoT applications"
    },
    {
      icon: Network,
      title: "Distributed Computing",
      description: "Intelligent workload distribution across edge nodes"
    },
    {
      icon: Shield,
      title: "Edge Security",
      description: "Advanced security protocols for edge device protection"
    }
  ];

  const benefits = [
    "Reduce latency by up to 90%",
    "Lower bandwidth costs by 70%",
    "Improve reliability and uptime",
    "Enable real-time decision making",
    "Scale IoT deployments efficiently"
  ];

  const useCases = [
    {
      title: "Smart Manufacturing",
      description: "Real-time monitoring and predictive maintenance for industrial IoT",
      icon: Factory
    },
    {
      title: "Connected Vehicles",
      description: "Edge computing for autonomous driving and vehicle analytics",
      icon: Car
    },
    {
      title: "Smart Cities",
      description: "Intelligent infrastructure management and urban analytics",
      icon: Building
    },
    {
      title: "Healthcare IoT",
      description: "Patient monitoring and medical device management",
      icon: Heart
    }
  ];

  const edgeServices = [
    {
      name: "Edge AI Platform",
      description: "Deploy and manage AI models at the edge",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "IoT Device Management",
      description: "Centralized management of edge devices",
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Edge Analytics",
      description: "Real-time data processing and insights",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Edge Security",
      description: "Comprehensive security for edge deployments",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Edge Networking",
      description: "Optimized network infrastructure for edge computing",
      icon: Network,
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Edge Storage",
      description: "Distributed storage solutions for edge nodes",
      icon: Database,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="IoT Edge Computing Platform - Zion Tech Group"
        description="Transform your IoT deployments with our edge computing platform. Real-time processing, AI inference, and ultra-low latency for critical applications."
        canonical="/services/iot-edge-computing"
        url="https://ziontechgroup.com/services/iot-edge-computing"
        type="service"
        tags={['IoT Edge Computing', 'Edge AI', 'Real-time Processing', 'IoT Platform', 'Edge Analytics']}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-indigo-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Cpu className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">IoT Edge Computing</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IoT Edge
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  {" "}Computing Platform
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your IoT deployments with our advanced edge computing platform. 
                Real-time processing, AI inference, and ultra-low latency for critical 
                applications that can't wait for cloud processing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/schedule-demo"
                  className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Edge Computing Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our platform combines cutting-edge edge computing with IoT expertise to deliver 
                unprecedented performance and reliability for your connected devices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Edge Services Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Edge Services
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                From edge AI to device management, our platform covers all aspects of edge computing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {edgeServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Edge Computing Platform?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Experience the future of IoT with our comprehensive edge computing solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Platform Performance</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Latency</span>
                    <span className="text-blue-400 font-semibold">&lt;10ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Throughput</span>
                    <span className="text-blue-400 font-semibold">100GB/s</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Uptime</span>
                    <span className="text-blue-400 font-semibold">99.99%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Device Support</span>
                    <span className="text-blue-400 font-semibold">1M+</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Edge Computing Use Cases
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our edge computing platform addresses the most critical challenges in modern IoT deployments.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-400">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-indigo-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your IoT?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join leading organizations who are already using our edge computing platform 
                to revolutionize their IoT deployments and achieve real-time insights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  Get Your Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-300"
                >
                  Contact IoT Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
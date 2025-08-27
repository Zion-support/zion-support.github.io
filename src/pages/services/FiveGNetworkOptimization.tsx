import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Signal, 
  Wifi, 
  Smartphone, 
  Zap, 
  Shield, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Globe,
  BarChart3,
  Settings,
  Cpu,
  Database,
  Network,
  Activity
} from 'lucide-react';

const FiveGNetworkOptimization: React.FC = () => {
  const optimizationServices = [
    {
      icon: <Signal className="w-8 h-8" />,
      title: "Network Performance Analysis",
      description: "Comprehensive analysis of 5G network performance metrics and bottlenecks",
      features: ["Throughput optimization", "Latency reduction", "Coverage mapping", "Interference analysis"]
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Radio Access Network (RAN) Optimization",
      description: "Optimize radio frequency planning and antenna configurations",
      features: ["Beamforming optimization", "MIMO configuration", "Power control", "Handover optimization"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Core Network Optimization",
      description: "Enhance 5G core network efficiency and scalability",
      features: ["Network slicing", "Load balancing", "Traffic management", "QoS optimization"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Edge Computing Integration",
      description: "Optimize edge computing deployment for ultra-low latency applications",
      features: ["Edge node placement", "Content delivery", "Compute offloading", "Cache optimization"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Ensure 5G network security and regulatory compliance",
      features: ["Authentication protocols", "Encryption standards", "Privacy protection", "Compliance auditing"]
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Real-time Monitoring",
      description: "Continuous monitoring and proactive network management",
      features: ["Performance dashboards", "Alert systems", "Predictive analytics", "Automated responses"]
    }
  ];

  const benefits = [
    "Up to 10x faster data transfer speeds",
    "Ultra-low latency for real-time applications",
    "Improved network reliability and uptime",
    "Enhanced user experience and satisfaction",
    "Cost-effective network operations",
    "Future-ready infrastructure scalability"
  ];

  const useCases = [
    {
      title: "Smart Cities",
      description: "IoT sensors, traffic management, public safety",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Industrial IoT",
      description: "Manufacturing automation, predictive maintenance",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Autonomous Vehicles",
      description: "V2X communication, real-time navigation",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Healthcare",
      description: "Remote surgery, patient monitoring, telemedicine",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Entertainment",
      description: "AR/VR streaming, cloud gaming, 4K/8K video",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Enterprise",
      description: "Cloud computing, remote work, collaboration tools",
      icon: <Network className="w-6 h-6" />
    }
  ];

  const technologies = [
    "Network Function Virtualization (NFV)",
    "Software-Defined Networking (SDN)",
    "Network Slicing",
    "Massive MIMO",
    "Beamforming",
    "Edge Computing",
    "Artificial Intelligence",
    "Machine Learning"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-3 bg-blue-600/20 rounded-full">
              <Signal className="h-12 w-12 text-blue-400" />
            </div>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            5G Network Optimization
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Unlock the full potential of 5G networks with our advanced optimization services. 
            Maximize performance, reduce latency, and ensure seamless connectivity for next-generation applications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/request-quote"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg inline-flex items-center gap-2"
            >
              Get Network Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Optimization Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive 5G Optimization Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expert team delivers end-to-end 5G network optimization across all network layers, 
              ensuring maximum performance and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optimizationServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, borderColor: '#3b82f6' }}
              >
                <div className="text-blue-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our 5G Optimization?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative power of optimized 5G networks with measurable performance improvements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-blue-400" />
                </div>
                <p className="text-lg text-gray-200">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how optimized 5G networks are revolutionizing industries and enabling new possibilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, borderColor: '#3b82f6' }}
              >
                <div className="text-blue-400 mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to deliver superior 5G network optimization results.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((technology, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-slate-700 hover:border-blue-500 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ borderColor: '#3b82f6' }}
              >
                <p className="text-gray-200 font-medium">{technology}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Optimize Your 5G Network?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our 5G optimization services can transform your network performance and unlock new business opportunities.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/request-quote"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Start Network Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FiveGNetworkOptimization;
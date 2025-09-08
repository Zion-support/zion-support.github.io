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
  Lock, 
  Database, 
  Globe, 
  FileText,
  MessageCircle,
  Calendar,
  Clock,
  DollarSign,
  Award,
  Rocket,
  Leaf,
  Sparkles,
  Target,
  BarChart3,
  Monitor,
  Smartphone,
  Cloud,
  Server,
  Network,
  Eye,
  Building,
  Video,
  Image,
  Music,
  Code,
  Wifi,
  Bluetooth,
  Radio,
  Signal,
  Antenna,
  Satellite,
  Router,
  Switch,
  Hub,
  Gateway,
  Sensor,
  Thermometer,
  Gauge,
  Activity,
  Gauge,
  Shield,
  Factory,
  Car,
  Building,
  Globe
} from 'lucide-react';
import EnhancedSEO from '@/components/EnhancedSEO';

export default function IoTEdgeComputing() {
  const features = [
    {
      icon: Cpu,
      title: 'Edge Processing',
      description: 'Real-time data processing at the network edge for instant insights',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Network,
      title: 'IoT Connectivity',
      description: 'Seamless connection of devices across multiple protocols and networks',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brain,
      title: 'AI at the Edge',
      description: 'Local AI processing for faster decision-making and reduced latency',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Local Storage',
      description: 'Edge-based data storage and caching for improved performance',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Edge Security',
      description: 'Advanced security protocols for edge devices and networks',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Real-time Analytics',
      description: 'Instant data analysis and insights at the edge',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const benefits = [
    'Reduce latency by 90% with edge processing',
    'Lower bandwidth costs and cloud dependency',
    'Enable real-time decision making',
    'Improve reliability and uptime',
    'Enhanced privacy and data sovereignty',
    'Scalable IoT infrastructure'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="IoT Edge Computing - Zion Tech Group"
        description="Advanced IoT edge computing solutions for real-time processing, AI at the edge, and seamless device connectivity."
        keywords="IoT edge computing, edge processing, IoT connectivity, edge AI, real-time analytics, smart devices"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Edge Computing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our IoT edge computing platform provides comprehensive capabilities for modern connected systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Edge Computing?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the advantages of processing data closer to where it's generated.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Edge Your IoT?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your connected devices with edge computing power. 
              Get in touch to explore IoT edge solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200"
              >
                Schedule a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
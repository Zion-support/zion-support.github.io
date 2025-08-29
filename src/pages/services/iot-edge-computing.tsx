import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Brain, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Monitor,
  Shield,
  Lock,
  Building,
  Database,
  Network,
  Target,
  TrendingUp,
  AlertTriangle,
  Eye,
  Car,
  Heart
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function IoTEdgeComputing() {
  const features = [
    {
      title: "Edge Processing",
      description: "Real-time data processing at the edge for instant insights",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "IoT Device Management",
      description: "Comprehensive IoT device monitoring and control",
      icon: Monitor,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Real-time Analytics",
      description: "Instant data analysis and decision making",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Edge AI",
      description: "AI-powered edge computing for intelligent automation",
      icon: Brain,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Low Latency",
      description: "Ultra-fast response times for critical applications",
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Scalable Infrastructure",
      description: "Flexible edge computing infrastructure for growth",
      icon: Network,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const benefits = [
    "Real-time data processing and analytics",
    "Reduced latency and improved response times",
    "Lower bandwidth costs and network efficiency",
    "Enhanced security with local data processing",
    "Scalable IoT solutions for growing deployments",
    "Cost-effective edge computing infrastructure"
  ];

  const useCases = [
    {
      title: "Smart Cities",
      description: "Intelligent urban infrastructure management",
      icon: Building
    },
    {
      title: "Industrial IoT",
      description: "Manufacturing and industrial automation",
      icon: Cpu
    },
    {
      title: "Connected Vehicles",
      description: "Autonomous and connected transportation",
      icon: Car
    },
    {
      title: "Healthcare IoT",
      description: "Medical device monitoring and telemedicine",
      icon: Heart
    }
  ];

  const technologies = [
    "Edge Computing Platforms",
    "IoT Device Management",
    "Real-time Data Processing",
    "Edge AI & Machine Learning",
    "5G & Low-Power Networks",
    "Edge Security & Privacy"
  ];

  return (
    <>
      <SEO 
        title="IoT Edge Computing Platform Development | Zion Tech Group"
        description="Build intelligent IoT edge computing platforms with real-time processing, device management, and edge AI capabilities."
        keywords="iot edge computing, edge processing, real-time analytics, iot device management, edge ai, low latency computing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 text-white text-sm font-medium mb-6">
                <Cpu className="w-4 h-4 mr-2" />
                IoT Edge Computing Solutions
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Process Data at the
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"> Edge</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize IoT with edge computing. From real-time processing to intelligent automation, 
                create responsive and efficient IoT solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-200"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Edge Computing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge capabilities designed for modern IoT edge computing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose IoT Edge Computing?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover the advantages of intelligent edge processing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-6">
                {benefits.slice(3).map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Edge Computing Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Versatile IoT edge solutions for diverse industry needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 text-center hover:border-blue-400 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cutting-Edge Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Built with the latest IoT and edge computing innovations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-xl border border-slate-500 text-center hover:border-blue-400 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{tech}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build IoT Edge Solutions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's create intelligent edge computing platforms that transform IoT capabilities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-200"
                >
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
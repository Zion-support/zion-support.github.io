import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Brain, 
  Zap, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Network,
  Server,
  Smartphone,
  Monitor,
  BarChart3,
  MessageCircle,
  Clock,
  Target,
  Sparkles,
  FileText,
  Globe,
  Lock,
  Shield,
  Database,
  Cloud,
  Wifi,
  Bluetooth,
  Radio,
  Satellite,
  Factory,
  Car,
  Home,
  Building
} from 'lucide-react';

const IoTEdgeComputing: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: "Edge Processing",
      description: "Real-time data processing at the edge for instant insights and actions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Network,
      title: "5G Connectivity",
      description: "Ultra-fast, low-latency connectivity for seamless IoT communication",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Brain,
      title: "AI at the Edge",
      description: "Intelligent decision-making directly on IoT devices without cloud dependency",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Edge Security",
      description: "Advanced security protocols protecting data at every edge device",
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "Real-time data processing with sub-10ms latency",
    "Reduced bandwidth costs by processing data locally",
    "Enhanced privacy and security with edge-based processing",
    "Improved reliability with offline-first capabilities",
    "Scalable IoT deployments across multiple locations",
    "Cost-effective edge computing infrastructure"
  ];

  const applications = [
    {
      title: "Smart Manufacturing",
      description: "Industrial IoT with real-time monitoring and predictive maintenance",
      icon: Factory,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Connected Vehicles",
      description: "Autonomous driving and vehicle-to-everything communication",
      icon: Car,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Smart Cities",
      description: "Urban infrastructure monitoring and intelligent traffic management",
      icon: Building,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Smart Homes",
      description: "Connected home automation and energy management systems",
      icon: Home,
      color: "from-orange-500 to-red-500"
    }
  ];

  const edgeServices = [
    {
      title: "Edge Infrastructure",
      description: "Deploy and manage edge computing nodes across your IoT network",
      icon: Server
    },
    {
      title: "Edge Analytics",
      description: "Real-time data analysis and insights at the edge",
      icon: BarChart3
    },
    {
      title: "Edge AI Models",
      description: "Optimized AI models for edge device deployment",
      icon: Brain
    },
    {
      title: "Edge Security",
      description: "Comprehensive security solutions for edge computing environments",
      icon: Shield
    }
  ];

  const connectivityOptions = [
    {
      title: "WiFi 6 & 6E",
      description: "High-speed wireless connectivity for indoor IoT deployments",
      icon: Wifi
    },
    {
      title: "5G Cellular",
      description: "Ultra-fast mobile connectivity for outdoor and mobile IoT",
      icon: Radio
    },
    {
      title: "LoRaWAN",
      description: "Long-range, low-power connectivity for wide-area IoT networks",
      icon: Satellite
    },
    {
      title: "Bluetooth 5.0",
      description: "Short-range connectivity for personal and wearable IoT devices",
      icon: Bluetooth
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="IoT Edge Computing - Zion Tech Group"
        description="Revolutionary IoT edge computing solutions for real-time processing, AI at the edge, and connected device management. Transform your IoT infrastructure."
        keywords="IoT edge computing, edge AI, IoT infrastructure, real-time processing, Zion Tech Group"
        ogType="website"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                <Cpu className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IoT Edge Computing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your IoT infrastructure with edge computing. Process data in real-time, 
              deploy AI at the edge, and create intelligent, connected systems that work anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                <Network className="h-5 w-5 mr-2" />
                Edge Assessment
              </button>
              <button className="btn-futuristic-outline">
                <FileText className="h-5 w-5 mr-2" />
                Download Edge Guide
              </button>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Edge Computing Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IoT edge computing platform brings processing power closer to your data sources, 
              enabling real-time insights and intelligent decision-making.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-opacity-20 hover:bg-opacity-20 transition-all duration-300 h-full`}>
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              IoT Edge Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From smart cities to connected vehicles, edge computing is revolutionizing 
              how IoT devices process data and make intelligent decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={application.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 hover:border-slate-500 transition-all duration-300 h-full">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${application.color} mb-4`}>
                    <application.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {application.title}
                  </h3>
                  <p className="text-gray-300">
                    {application.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of processing data closer to where it's generated, 
              enabling faster response times and more efficient IoT operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Edge Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Edge Computing Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive edge computing solutions to deploy, manage, and optimize 
              your IoT infrastructure for maximum performance and efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {edgeServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-600 border border-slate-500 hover:border-slate-400 transition-all duration-300 h-full">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connectivity Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Connectivity Options
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from multiple connectivity technologies to ensure your IoT devices 
              stay connected regardless of location or environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {connectivityOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 hover:border-slate-500 transition-all duration-300 h-full">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 mb-4">
                    <option.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {option.title}
                  </h3>
                  <p className="text-gray-300">
                    {option.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Edge Your IoT?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Transform your IoT infrastructure with edge computing that brings 
              intelligence closer to your data sources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-white text-blue-600 hover:bg-gray-100">
                <MessageCircle className="h-5 w-5 mr-2" />
                Edge Consultation
              </button>
              <button className="btn-futuristic-outline border-white text-white hover:bg-white hover:text-blue-600">
                <Clock className="h-5 w-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IoTEdgeComputing;
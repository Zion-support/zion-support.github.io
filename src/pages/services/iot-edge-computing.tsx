import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Brain, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Activity,
  BarChart3,
  Clock,
  Star,
  Award,
  TrendingUp,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  Cloud,
  Key,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Wifi,
  Signal,
  Smartphone as Mobile,
  Home,
  Factory,
  Car,
  Shield
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function IoTEdgeComputing() {
  const features = [
    {
      icon: Cpu,
      title: 'Edge Processing',
      description: 'Local data processing for real-time decision making',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'IoT Integration',
      description: 'Connect and manage thousands of IoT devices',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Real-time Analytics',
      description: 'Instant insights from edge computing power',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Edge Security',
      description: 'Advanced security for distributed computing',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const benefits = [
    'Reduce latency by 90% with edge processing',
    'Lower bandwidth costs by 70%',
    'Enable real-time decision making',
    'Scale to millions of IoT devices',
    '24/7 edge computing availability',
    'Enhanced privacy and data security'
  ];

  const useCases = [
    {
      title: 'Smart Cities',
      description: 'IoT sensors and edge computing for urban management',
      icon: Home
    },
    {
      title: 'Industrial IoT',
      description: 'Manufacturing automation and predictive maintenance',
      icon: Factory
    },
    {
      title: 'Connected Vehicles',
      description: 'Real-time vehicle monitoring and autonomous features',
      icon: Car
    },
    {
      title: 'Smart Homes',
      description: 'Intelligent home automation and energy management',
      icon: Home
    }
  ];

  return (
    <>
      <SEO 
        title="IoT Edge Computing - Zion Tech Group"
        description="Revolutionary IoT edge computing platform with real-time processing, device management, and intelligent analytics. Transform your IoT infrastructure with cutting-edge edge technology."
        keywords="IoT edge computing, edge processing, IoT platform, real-time analytics, device management, edge security"
        canonical="https://ziontechgroup.com/services/iot-edge-computing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-green-900/20 to-cyan-900/20"></div>
          <div className="container-responsive relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                <Cpu className="w-4 h-4" />
                Edge Innovation
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                IoT Edge Computing
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your IoT infrastructure with cutting-edge edge computing. 
                Our platform provides real-time processing, intelligent analytics, 
                and seamless device management at the edge.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                >
                  View Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Edge Computing Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive IoT edge computing solutions designed to process 
                data locally and enable real-time decision making.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                  Transform IoT Performance
                </h2>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-2xl p-8 border border-blue-500/30">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">90%</div>
                      <div className="text-sm text-gray-400">Latency Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">70%</div>
                      <div className="text-sm text-gray-400">Bandwidth Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                      <div className="text-sm text-gray-400">Availability</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-400 mb-2">1M+</div>
                      <div className="text-sm text-gray-400">Devices Supported</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                IoT Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our edge computing platform addresses critical IoT challenges across 
                multiple industries and use cases.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Edge Compute?
              </h2>
              
              <p className="text-xl text-gray-400 mb-8">
                Join leading organizations who are already using our IoT edge computing platform 
                to transform their IoT infrastructure and enable real-time intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Start Edge Computing
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-slate-800/50">
          <div className="container-responsive">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 transition-colors">
                  +1 302 464 0950
                </a>
                <p className="text-sm text-slate-400 mt-2">Available 24/7 for urgent support</p>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
                <p className="text-sm text-slate-400 mt-2">Response within 2 hours</p>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
                <p className="text-sm text-slate-400 mt-2">Global remote support available</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
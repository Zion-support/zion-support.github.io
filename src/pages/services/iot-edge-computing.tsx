import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Activity,
  Zap,
  Brain,
  Cpu,
  Database,
  Users,
  Target,
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Code,
  Network,
  Eye,
  Heart,
  DollarSign,
  Building,
  Shield,
  Lock,
  Wifi,
  Smartphone,
  Server,
  Cloud,
  Sensor,
  Circuit,
  BarChart3
} from 'lucide-react';

const IoTEdgeComputingPage = () => {
  const iotServices = [
    {
      icon: Sensor,
      title: 'IoT Device Management',
      description: 'Comprehensive management of IoT devices with remote monitoring, updates, and security.',
      features: ['Device Provisioning', 'Remote Monitoring', 'Firmware Updates', 'Security Management'],
      href: '/services/iot-device-management'
    },
    {
      icon: Cloud,
      title: 'Edge Computing Solutions',
      description: 'Process data closer to the source with edge computing for faster response times and reduced latency.',
      features: ['Edge Processing', 'Local Analytics', 'Real-time Response', 'Bandwidth Optimization'],
      href: '/services/edge-computing'
    },
    {
      icon: Network,
      title: 'IoT Connectivity',
      description: 'Seamless connectivity solutions for IoT devices using various protocols and networks.',
      features: ['5G Integration', 'LoRaWAN', 'Bluetooth Low Energy', 'WiFi 6'],
      href: '/services/iot-connectivity'
    },
    {
      icon: Brain,
      title: 'AI at the Edge',
      description: 'Bring artificial intelligence to edge devices for intelligent decision-making and automation.',
      features: ['Edge AI Models', 'Local Inference', 'Smart Automation', 'Predictive Analytics'],
      href: '/services/edge-ai'
    },
    {
      icon: Shield,
      title: 'IoT Security',
      description: 'Comprehensive security solutions to protect IoT devices and data from cyber threats.',
      features: ['Device Authentication', 'Data Encryption', 'Threat Detection', 'Secure Updates'],
      href: '/services/iot-security'
    },
    {
      icon: BarChart3,
      title: 'IoT Analytics',
      description: 'Advanced analytics and insights from IoT data to optimize operations and decision-making.',
      features: ['Real-time Analytics', 'Predictive Maintenance', 'Performance Monitoring', 'Data Visualization'],
      href: '/services/iot-analytics'
    }
  ];

  const iotCapabilities = [
    {
      icon: Circuit,
      title: 'Hardware Design',
      description: 'Custom IoT hardware design and development for specific use cases.'
    },
    {
      icon: Code,
      title: 'Firmware Development',
      description: 'Embedded software development for IoT devices and edge computing.'
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Seamless integration with cloud platforms for data storage and processing.'
    },
    {
      icon: Network,
      title: 'Network Architecture',
      description: 'Design and implementation of robust IoT network infrastructure.'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Efficient data collection, storage, and processing for IoT applications.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'End-to-end security and compliance solutions for IoT deployments.'
    }
  ];

  const benefits = [
    'Real-time data collection and processing',
    'Reduced latency and improved response times',
    'Lower bandwidth costs and network efficiency',
    'Enhanced security with local data processing',
    'Scalable and flexible IoT infrastructure',
    'Improved operational efficiency and automation'
  ];

  const industries = [
    {
      name: 'Manufacturing',
      useCases: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Tracking', 'Equipment Monitoring']
    },
    {
      name: 'Healthcare',
      useCases: ['Patient Monitoring', 'Medical Device Management', 'Asset Tracking', 'Remote Care']
    },
    {
      name: 'Smart Cities',
      useCases: ['Traffic Management', 'Environmental Monitoring', 'Smart Lighting', 'Waste Management']
    },
    {
      name: 'Agriculture',
      useCases: ['Precision Farming', 'Crop Monitoring', 'Livestock Tracking', 'Climate Control']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Activity className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IoT & Edge Computing
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Solutions{' '}
              </span>
              for the Connected World
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect, monitor, and control your devices with our comprehensive IoT and edge computing solutions. 
              From smart sensors to intelligent edge processing, we help you build the future of connected technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-green-400 hover:text-green-400 transition-all duration-200"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IoT Services Grid */}
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
              IoT & Edge Computing Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From device development to edge processing, we provide end-to-end IoT solutions 
              that connect your world and drive innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iotServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors group-hover:translate-x-1 transition-transform"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT Capabilities */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              IoT & Edge Computing Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our expertise spans the full spectrum of IoT technologies, from hardware design 
              to cloud integration and edge computing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iotCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
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
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              IoT and edge computing are transforming industries across the board. 
              Discover how your sector can benefit from connected technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center space-x-2">
                  <Building className="w-6 h-6 text-green-400" />
                  <span>{industry.name}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {industry.useCases.map((useCase) => (
                    <div key={useCase} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm">{useCase}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose IoT & Edge Computing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                IoT and edge computing solutions deliver measurable results that transform your operations. 
                We focus on practical applications that solve real business challenges.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <Star className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-8 border border-green-400/30">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    IoT Impact
                  </h3>
                  <div className="space-y-4 text-center">
                    <div className="text-3xl font-bold text-green-400">30%</div>
                    <div className="text-gray-300">Operational cost reduction</div>
                    <div className="text-3xl font-bold text-green-400">50%</div>
                    <div className="text-gray-300">Faster response times</div>
                    <div className="text-3xl font-bold text-green-400">80%</div>
                    <div className="text-gray-300">Improved efficiency</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Connect Your World?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how IoT and edge computing solutions can transform your business operations, 
              improve efficiency, and create new opportunities. Our experts are ready to build your connected future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-green-400 hover:text-green-400 transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IoTEdgeComputingPage;
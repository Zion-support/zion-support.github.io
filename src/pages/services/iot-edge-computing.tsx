import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Activity,
  Zap,
  Target,
  TrendingUp,
  Users,
  Shield,
  Cpu,
  Rocket,
  Eye,
  Code,
  Database,
  Server,
  Network,
  BarChart3,
  Brain,
  Heart,
  Building,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Play,
  ChevronRight,
  RefreshCw,
  Layers,
  Smartphone,
  Monitor,
  Cloud,
  Lock,
  Wifi,
  Bluetooth,
  Radio,
  Satellite,
  Smartphone as Mobile
} from 'lucide-react';

export default function IoTTEdgeComputingPage() {
  const iotServices = [
    {
      title: 'IoT Platform Development',
      description: 'Build scalable IoT platforms for device management and data collection',
      icon: Cloud,
      href: '/services/iot-platform-development',
      features: ['Device Management', 'Data Ingestion', 'Real-time Processing', 'Scalable Architecture'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Edge Computing Solutions',
      description: 'Process data closer to the source for faster response times',
      icon: Cpu,
      href: '/services/edge-computing-solutions',
      features: ['Local Processing', 'Reduced Latency', 'Bandwidth Optimization', 'Offline Capability'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Sensor Integration',
      description: 'Integrate various sensors for comprehensive data collection',
      icon: Activity,
      href: '/services/sensor-integration',
      features: ['Multi-sensor Support', 'Data Validation', 'Calibration', 'Real-time Monitoring'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Connectivity Solutions',
      description: 'Implement various connectivity protocols for IoT devices',
      icon: Wifi,
      href: '/services/connectivity-solutions',
      features: ['WiFi', 'Bluetooth', 'LoRaWAN', 'Cellular', 'Satellite'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Data Analytics & AI',
      description: 'Analyze IoT data with AI and machine learning',
      icon: Brain,
      href: '/services/iot-data-analytics',
      features: ['Predictive Analytics', 'Anomaly Detection', 'Pattern Recognition', 'Automated Insights'],
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Security & Privacy',
      description: 'Ensure IoT security and data privacy',
      icon: Shield,
      href: '/services/iot-security',
      features: ['Device Authentication', 'Data Encryption', 'Access Control', 'Privacy Compliance'],
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const iotCapabilities = [
    {
      title: 'Device Management',
      description: 'Comprehensive IoT device lifecycle management',
      icon: Server,
      features: ['Device Provisioning', 'Remote Monitoring', 'Firmware Updates', 'Health Monitoring']
    },
    {
      title: 'Data Processing',
      description: 'Real-time data processing and analytics',
      icon: BarChart3,
      features: ['Stream Processing', 'Real-time Analytics', 'Data Aggregation', 'Event Detection']
    },
    {
      title: 'Edge Intelligence',
      description: 'AI and ML capabilities at the edge',
      icon: Brain,
      features: ['Local AI Models', 'Edge Training', 'Inference Engines', 'Model Optimization']
    },
    {
      title: 'Integration & APIs',
      description: 'Seamless integration with existing systems',
      icon: Code,
      features: ['REST APIs', 'GraphQL', 'Webhooks', 'Third-party Integrations']
    }
  ];

  const industries = [
    { name: 'Smart Cities', icon: Building, description: 'Urban infrastructure and public services' },
    { name: 'Industrial IoT', icon: Cpu, description: 'Manufacturing and industrial automation' },
    { name: 'Healthcare', icon: Heart, description: 'Medical devices and patient monitoring' },
    { name: 'Agriculture', icon: Globe, description: 'Precision farming and crop monitoring' },
    { name: 'Transportation', icon: Rocket, description: 'Connected vehicles and logistics' },
    { name: 'Energy', icon: Zap, description: 'Smart grid and energy management' }
  ];

  const technologies = [
    { name: '5G Networks', icon: Wifi, description: 'High-speed, low-latency connectivity' },
    { name: 'Edge AI', icon: Brain, description: 'Artificial intelligence at the edge' },
    { name: 'Blockchain', icon: Lock, description: 'Secure and transparent transactions' },
    { name: 'Cloud Computing', icon: Cloud, description: 'Scalable cloud infrastructure' },
    { name: 'Machine Learning', icon: TrendingUp, description: 'Predictive analytics and automation' },
    { name: 'Cybersecurity', icon: Shield, description: 'Advanced security and protection' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-cyan-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Activity className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              IoT & Edge Computing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Connect, collect, and compute at the edge with cutting-edge IoT solutions that bring 
              intelligence closer to your data sources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-200 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/solutions"
                className="border border-teal-500 text-teal-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-500 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                View Solutions
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IoT Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our IoT & Edge Computing Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive IoT solutions designed to connect your world and process data at the edge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iotServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-teal-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">IoT Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end IoT capabilities from device management to edge intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {iotCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                    <capability.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">{capability.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{capability.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {capability.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-teal-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Industries We Transform</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our IoT solutions are tailored to meet the unique challenges of diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-teal-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                <p className="text-gray-400 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Enabling Technologies</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge technologies that power our IoT and edge computing solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-teal-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT Architecture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">IoT Architecture</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive architecture that connects devices, processes data, and delivers insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[
              { name: 'Devices', icon: Activity, description: 'Sensors and IoT devices' },
              { name: 'Edge', icon: Cpu, description: 'Local processing and analytics' },
              { name: 'Gateway', icon: Server, description: 'Data aggregation and routing' },
              { name: 'Cloud', icon: Cloud, description: 'Centralized processing and storage' }
            ].map((layer, index) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-teal-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <layer.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{layer.name}</h3>
                <p className="text-gray-400 text-sm">{layer.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-teal-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Benefits of IoT & Edge Computing</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transform your operations with connected intelligence and edge processing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {[
                  'Real-time monitoring and control',
                  'Reduced latency and improved response times',
                  'Lower bandwidth costs and network efficiency',
                  'Enhanced data security and privacy',
                  'Scalable and flexible architecture',
                  'Improved operational efficiency and automation'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm border border-teal-500/50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">IoT Impact</h3>
              <div className="space-y-4">
                {[
                  { metric: '30-50%', label: 'Efficiency Gains', description: 'Operational improvements' },
                  { metric: '40-60%', label: 'Cost Reduction', description: 'Operational cost savings' },
                  { metric: '50-80%', label: 'Faster Response', description: 'Reduced latency' },
                  { metric: '25-40%', label: 'Productivity', description: 'Increased productivity' }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 bg-gray-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-teal-400 mb-1">{item.metric}</div>
                    <div className="text-sm text-gray-300">{item.label}</div>
                    <div className="text-xs text-gray-400">{item.description}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-900/20 via-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Connect Your World?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how IoT and edge computing can transform your operations and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-200 flex items-center justify-center group"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-teal-500 text-teal-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-500 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                View Case Studies
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
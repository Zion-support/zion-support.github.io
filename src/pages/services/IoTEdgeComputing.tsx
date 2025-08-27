import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Zap, 
  CheckCircle, 
  BarChart3, 
  Sparkles, 
  ArrowRight, 
  Brain,
  Wifi,
  Database,
  Globe,
  Rocket,
  Target,
  Shield,
  TrendingUp,
  Layers,
  Cloud,
  Server,
  Smartphone
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function IoTEdgeComputing() {
  const features = [
    'Real-time data processing at the edge',
    'AI-powered device management and optimization',
    'Secure device-to-cloud communication',
    'Automated device provisioning and scaling',
    'Advanced analytics and predictive maintenance',
    'Multi-protocol device support (MQTT, CoAP, HTTP)',
    'Edge-to-cloud data synchronization',
    'Custom firmware development and deployment'
  ];

  const benefits = [
    'Reduce latency by 90% with edge processing',
    'Cut bandwidth costs by 60-80%',
    'Improve device reliability by 95%',
    'Enable real-time decision making',
    'Scale to millions of devices seamlessly',
    'Reduce cloud dependency and costs'
  ];

  const iotApplications = [
    {
      name: 'Smart Manufacturing',
      description: 'Industrial IoT for predictive maintenance and quality control',
      icon: Cpu,
      useCases: ['Predictive maintenance', 'Quality monitoring', 'Energy optimization', 'Safety monitoring']
    },
    {
      name: 'Smart Cities',
      description: 'Urban infrastructure monitoring and management',
      icon: Globe,
      useCases: ['Traffic management', 'Environmental monitoring', 'Smart lighting', 'Waste management']
    },
    {
      name: 'Healthcare IoT',
      description: 'Medical device monitoring and patient care',
      icon: Brain,
      useCases: ['Patient monitoring', 'Medical device tracking', 'Remote diagnostics', 'Health analytics']
    },
    {
      name: 'Retail & Logistics',
      description: 'Inventory management and supply chain optimization',
      icon: TrendingUp,
      useCases: ['Inventory tracking', 'Supply chain monitoring', 'Customer analytics', 'Asset management']
    }
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$399',
      period: '/month',
      features: ['Up to 1,000 devices', 'Basic edge processing', 'Email support', 'Standard security'],
      recommended: false
    },
    {
      plan: 'Professional',
      price: '$1,199',
      period: '/month',
      features: ['Up to 10,000 devices', 'Advanced AI processing', 'Priority support', 'Custom protocols', 'Advanced analytics'],
      recommended: true
    },
    {
      plan: 'Enterprise',
      price: '$3,999',
      period: '/month',
      features: ['Unlimited devices', 'Custom AI models', '24/7 support', 'Dedicated engineers', 'White-label solutions'],
      recommended: false
    }
  ];

  const edgeCapabilities = [
    {
      name: 'Edge AI Processing',
      description: 'Run machine learning models directly on IoT devices',
      icon: Brain,
      features: ['TensorFlow Lite', 'ONNX Runtime', 'Custom model deployment', 'Real-time inference']
    },
    {
      name: 'Device Management',
      description: 'Centralized management of all IoT devices',
      icon: Server,
      features: ['Remote configuration', 'Firmware updates', 'Device monitoring', 'Health checks']
    },
    {
      name: 'Data Analytics',
      description: 'Real-time analytics and insights at the edge',
      icon: BarChart3,
      features: ['Stream processing', 'Time-series analysis', 'Anomaly detection', 'Predictive analytics']
    },
    {
      name: 'Security & Privacy',
      description: 'Enterprise-grade security for IoT deployments',
      icon: Shield,
      features: ['Device authentication', 'Data encryption', 'Secure communication', 'Privacy controls']
    }
  ];

  const techStack = [
    { name: 'Kubernetes', url: 'https://kubernetes.io/', category: 'Container Orchestration' },
    { name: 'Docker', url: 'https://www.docker.com/', category: 'Containerization' },
    { name: 'Apache Kafka', url: 'https://kafka.apache.org/', category: 'Stream Processing' },
    { name: 'InfluxDB', url: 'https://www.influxdata.com/', category: 'Time Series DB' },
    { name: 'Grafana', url: 'https://grafana.com/', category: 'Visualization' },
    { name: 'Prometheus', url: 'https://prometheus.io/', category: 'Monitoring' },
    { name: 'MQTT', url: 'https://mqtt.org/', category: 'IoT Protocol' },
    { name: 'TensorFlow Lite', url: 'https://www.tensorflow.org/lite', category: 'Edge AI' }
  ];

  const deviceSupport = [
    'Raspberry Pi and similar SBCs',
    'Industrial PLCs and controllers',
    'Embedded Linux devices',
    'ARM-based microcontrollers',
    'Windows IoT devices',
    'Custom hardware platforms'
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="IoT Edge Computing Platform - Zion Tech Group"
        description="Transform your IoT deployment with our edge computing platform. Reduce latency by 90%, cut bandwidth costs by 60-80%, and enable real-time AI processing."
        canonical="/services/iot-edge-computing"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IoT <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Edge Computing</span> Platform
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Process data at the edge, reduce latency, and unlock real-time insights with our intelligent IoT platform that scales from prototype to production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Start IoT Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Visit Our Site
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
          <motion.div 
            className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />
        </div>
      </section>

      {/* IoT Applications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry <span className="text-cyan-400">IoT Applications</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Transform your industry with intelligent IoT solutions that process data at the edge
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {iotApplications.map((app, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                    <app.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{app.name}</h3>
                    <p className="text-cyan-400 text-sm font-medium">IoT Solution</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">{app.description}</p>
                <ul className="space-y-2">
                  {app.useCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Edge Capabilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced <span className="text-cyan-400">Edge Capabilities</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Powerful features that make edge computing intelligent and efficient
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {edgeCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                    <capability.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{capability.name}</h3>
                    <p className="text-cyan-400 text-sm font-medium">Edge Feature</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Platform <span className="text-cyan-400">Features</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Comprehensive IoT platform capabilities for modern edge computing
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <p className="text-slate-300 text-sm">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Edge Computing <span className="text-cyan-400">Benefits</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Transform your IoT deployment with edge computing advantages
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-white">Benefit {index + 1}</h3>
                </div>
                <p className="text-slate-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Support Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Supported <span className="text-cyan-400">Devices</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Our platform works with a wide range of IoT devices and platforms
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deviceSupport.map((device, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">{device}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IoT Platform <span className="text-cyan-400">Pricing</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Choose the plan that fits your IoT deployment needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                  plan.recommended 
                    ? 'border-cyan-500/50 bg-slate-800/70' 
                    : 'border-slate-700/50'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built with <span className="text-cyan-400">Modern Technology</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Our IoT platform leverages industry-leading technologies for optimal performance
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.a
                key={index}
                href={tech.url}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800/60 border border-slate-700/60 rounded-lg p-4 text-center hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-sm text-cyan-400 mb-1">{tech.category}</div>
                <div className="text-white font-semibold">{tech.name}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to <span className="text-cyan-400">Connect</span> Your World?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust our IoT edge computing platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Start IoT Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-400">
              Questions? Email <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">kleber@ziontechgroup.com</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
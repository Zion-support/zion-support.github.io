import React from 'react.ts';
import { motion  } from 'framer-motion.ts';
<<<<<<< HEAD
import { Cpu,
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
=======
import { Link  } from 'react-router-dom.ts';
import { Cpu, 
  Network, 
  Zap, 
  Globe, 
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Brain,
  Cloud,
  Database,
  Wifi,
  Activity,
  BarChart3,
  Settings,
  Monitor,
  Smartphone,
  Server,
<<<<<<< HEAD
  Smartphone
=======
  Router,
  Satellite
 } from 'lucide-react.ts';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
import { SEO  } from '@/components/SEO';

export default function IoTEdgeComputing(...args: any[]): any {
  const features = [
    {
      icon: Cpu,
      title: "Edge Processing",
      description: "Real-time data processing at the edge for instant decision making"
    },
    {
      icon: Network,
      title: "IoT Connectivity",
      description: "Seamless integration of IoT devices and sensors across networks"
    },
    {
      icon: Zap,
      title: "Low Latency",
      description: "Ultra-fast response times for critical applications and real-time analytics"
    },
    {
      icon: Globe,
<<<<<<< HEAD
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

=======
      title: "Global Reach",
      description: "Distributed edge computing infrastructure worldwide"
    }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const services = [
    {
<<<<<<< HEAD
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
=======
      title: "Edge Computing Infrastructure",
      description: "Deploy and manage edge computing nodes for optimal performance and reliability",
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      icon: Server,
      features: ["Edge node deployment", "Load balancing", "Failover systems"]
    },
    {
      title: "IoT Device Management",
      description: "Centralized management and monitoring of IoT devices and sensors",
      icon: Smartphone,
      features: ["Device provisioning", "Remote monitoring", "Firmware updates"]
    },
    {
      title: "Real-time Analytics",
      description: "Process and analyze data streams in real-time at the edge",
      icon: BarChart3,
      features: ["Stream processing", "Real-time dashboards", "Predictive analytics"]
    },
    {
      title: "Edge Security",
      description: "Comprehensive security for edge computing and IoT deployments",
      icon: Shield,
<<<<<<< HEAD
      features: ['Device authentication', 'Data encryption', 'Secure communication', 'Privacy controls']

=======
      features: ["Edge firewall", "Device authentication", "Data encryption"]
    }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const technologies = [
    "Edge Computing Platforms",
    "IoT Protocols (MQTT, CoAP, HTTP)",
    "5G Network Integration",
    "Edge AI & Machine Learning",
    "Container Orchestration",
    "Edge Database Systems",
    "Real-time Streaming",
    "Edge Security Frameworks"
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-futuristic">
      <SEO
        title="IoT Edge Computing Platform - Zion Tech Group"
        description="Transform your IoT deployment with our edge computing platform. Reduce latency by 90%, cut bandwidth costs by 60-80%, and enable real-time AI processing."
        canonical="/services/iot-edge-computing"
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO 
        title="IoT Edge Computing Services - Zion Tech Group"
        description="Revolutionary IoT and edge computing solutions for real-time processing, low-latency applications, and connected ecosystems."
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      />

      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}

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

                Start IoT Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"

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
=======
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
<<<<<<< HEAD

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry <span className="text-cyan-400">IoT Applications</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Transform your industry with intelligent IoT solutions that process data at the edge
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 gap-8">
            {iotApplications.map((app, index)  => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}

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

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced <span className="text-cyan-400">Edge Capabilities</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Powerful features that make edge computing intelligent and efficient
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 gap-8">
            {edgeCapabilities.map((capability, index)  => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}

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
=======
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-full text-green-300 text-sm font-medium mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              Edge Computing
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IoT Edge Computing
              <span className="block bg-gradient-to-r from-green-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your business with IoT and edge computing that brings processing power closer to your data sources. 
              Enable real-time insights, reduce latency, and create connected ecosystems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-green-400/30 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
=======
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
<<<<<<< HEAD

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Platform <span className="text-cyan-400">Features</span>
=======
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Edge Computing Features
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our IoT edge computing platform combines cutting-edge technology with practical business applications 
              to deliver real-time processing and insights.
            </p>
          </motion.div>
<<<<<<< HEAD

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
=======
          
          <div className="grid md: anygrid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            {features.map((feature, index)  => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD

                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-white" />
=======
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-400/30 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-green-400/40 group-hover:to-blue-500/40 transition-all duration-200">
                  <feature.icon className="w-6 h-6 text-green-400" />
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
=======
      {/* Services Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
<<<<<<< HEAD

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Edge Computing <span className="text-cyan-400">Benefits</span>
=======
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive IoT Services
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From edge infrastructure to device management, our IoT services cover every aspect 
              of your connected ecosystem needs.
            </p>
          </motion.div>
<<<<<<< HEAD

          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index)  => (
=======
          
          <div className="grid md: anygrid-cols-2 gap-8">
            {services.map((service, index)  => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD

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

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Supported <span className="text-cyan-400">Devices</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Our platform works with a wide range of IoT devices and platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-6">
            {deviceSupport.map((device, index)  => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}

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

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IoT Platform <span className="text-cyan-400">Pricing</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Choose the plan that fits your IoT deployment needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anygrid-cols-3 gap-8">
            {pricing.map((plan, index)  => (
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
=======
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-green-400/30 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 text-lg mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                      {feature}
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}

                  Get Started
                </Link>
=======
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Tech Stack Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
=======
      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
<<<<<<< HEAD

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built with <span className="text-cyan-400">Modern Technology</span>
=======
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced IoT Technologies
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our platform leverages cutting-edge technologies to provide the most advanced IoT and edge computing solutions available.
            </p>
          </motion.div>
<<<<<<< HEAD

          <div className="grid grid-cols-2 md: anygrid-cols-4 gap-4">
            {techStack.map((tech, index)  => (
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

                <div className="text-sm text-cyan-400 mb-1">{tech.category}</div>
                <div className="text-white font-semibold">{tech.name}</div>
              </motion.a>
=======
          
          <div className="grid md: anygrid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index)  => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-green-400/30 transition-all duration-200"
              >
                <Cpu className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-white text-sm">{tech}</span>
              </motion.div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
<<<<<<< HEAD

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to <span className="text-cyan-400">Connect</span> Your World?
=======
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform with IoT Edge Computing?
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the IoT revolution and unlock real-time insights and connected ecosystems for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"

                Start IoT Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"

                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-400">
              Questions? Email <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">kleber@ziontechgroup.com</a>
=======
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/20"
              >
                Start Your IoT Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-green-400/30 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200"
              >
                Explore All Services
              </Link>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
</div>}}}}</motion.div></motion.div>}
=======
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

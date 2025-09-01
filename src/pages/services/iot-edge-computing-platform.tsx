import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Zap, 
  Brain, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Users,
  Shield,
  Globe,
  Award,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Database,
  Cloud,
  Smartphone,
  Lock,
  BarChart3,
  TrendingUp,
  Target,
  Rocket,
  Wifi,
  Activity,
  Server,
  Network
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function IoTEdgeComputingPlatform() {
  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Edge Computing Nodes",
      description: "Distributed edge computing infrastructure with real-time processing capabilities and low-latency response"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "IoT Device Management",
      description: "Comprehensive management of IoT sensors, devices, and gateways with automated provisioning and monitoring"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI at the Edge",
      description: "Local AI processing and machine learning models for real-time decision making without cloud dependency"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "5G & LPWAN Support",
      description: "Multi-network connectivity supporting 5G, LoRaWAN, Sigfox, and other IoT communication protocols"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Edge Data Processing",
      description: "Local data processing, filtering, and analytics to reduce bandwidth and improve response times"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Edge Security",
      description: "Advanced security protocols, encryption, and access control for edge computing environments"
    }
  ];

  const pricing = [
    {
      name: "IoT Starter",
      price: "$199",
      period: "/month",
      features: [
        "Up to 100 IoT devices",
        "Basic edge computing",
        "Standard monitoring",
        "Email alerts",
        "Basic analytics dashboard",
        "Email support",
        "Community forum access"
      ],
      popular: false
    },
    {
      name: "IoT Professional",
      price: "$899",
      period: "/month",
      features: [
        "Up to 1,000 IoT devices",
        "Advanced edge computing",
        "AI at the edge",
        "Real-time monitoring",
        "Custom dashboards",
        "API access",
        "Priority support",
        "SLA guarantees"
      ],
      popular: true
    },
    {
      name: "IoT Enterprise",
      price: "$2,999",
      period: "/month",
      features: [
        "Unlimited IoT devices",
        "Custom edge solutions",
        "On-premise deployment",
        "Custom integrations",
        "White-label options",
        "Dedicated support team",
        "Training and certification",
        "24/7 monitoring"
      ],
      popular: false
    }
  ];

  const benefits = [
    "Reduce latency by 90% with edge processing",
    "Lower bandwidth costs by 70%",
    "Improve reliability with offline capabilities",
    "Scale IoT deployments 10x faster",
    "Real-time decision making at the edge",
    "Enhanced security and privacy"
  ];

  const useCases = [
    {
      industry: "Smart Cities",
      description: "Traffic management, environmental monitoring, smart lighting, and public safety systems",
      advantage: "Real-time city management"
    },
    {
      industry: "Industrial IoT",
      description: "Predictive maintenance, quality control, supply chain optimization, and safety monitoring",
      advantage: "Zero-downtime operations"
    },
    {
      industry: "Healthcare",
      description: "Patient monitoring, medical device management, and remote healthcare delivery",
      advantage: "24/7 patient care"
    },
    {
      industry: "Agriculture",
      description: "Precision farming, crop monitoring, irrigation control, and livestock tracking",
      advantage: "Optimized crop yields"
    }
  ];

  const iotProtocols = [
    "MQTT",
    "CoAP",
    "HTTP/HTTPS",
    "LoRaWAN",
    "Sigfox",
    "NB-IoT",
    "Bluetooth Low Energy",
    "Zigbee"
  ];

  const edgeCapabilities = [
    "Real-time data processing",
    "Local AI inference",
    "Data filtering & aggregation",
    "Edge-to-cloud synchronization",
    "Offline operation",
    "Local storage management",
    "Device provisioning",
    "Firmware updates"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="IoT Edge Computing Platform - Zion Tech Group"
        description="Comprehensive IoT edge computing platform for smart cities, industrial IoT, healthcare, and agriculture. Reduce latency by 90% and lower bandwidth costs by 70%."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IoT Edge Computing Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your IoT deployments with our edge computing platform. Process data locally, reduce latency by 90%, 
              and enable real-time decision making without cloud dependency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Start IoT Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border-2 border-orange-500 text-orange-400 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our IoT Edge Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built by IoT experts and edge computing specialists, our platform delivers enterprise-grade IoT solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-orange-500 transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                <p className="text-white text-lg font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Edge Computing Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build, deploy, and manage IoT edge computing solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-orange-500 transition-all duration-300"
              >
                <div className="text-orange-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT Protocols */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Supported IoT Protocols
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect any IoT device with our comprehensive protocol support and seamless integration capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {iotProtocols.map((protocol, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-orange-500 transition-all duration-300 text-center"
              >
                <Wifi className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white">{protocol}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Edge Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Edge Computing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced edge computing capabilities for real-time IoT applications and local data processing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {edgeCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-orange-500 transition-all duration-300"
              >
                <div className="flex items-center">
                  <Cpu className="w-6 h-6 text-orange-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">{capability}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how IoT edge computing is transforming various industries and enabling new capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-orange-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="flex items-center text-orange-400 font-semibold">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  {useCase.advantage}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              IoT Edge Computing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your IoT deployment needs and scale requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-orange-500 ring-2 ring-orange-500/20' 
                    : 'border-slate-700 hover:border-orange-500'
                }`}
              >
                {plan.popular && (
                  <div className="bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://ziontechgroup.com/contact"
                  className="w-full inline-flex justify-center items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your IoT Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the edge computing revolution and enable real-time IoT applications with local processing power.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Start IoT Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-orange-500 text-orange-400 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <Phone className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
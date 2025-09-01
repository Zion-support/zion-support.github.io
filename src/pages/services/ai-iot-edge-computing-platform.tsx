import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {

  Cpu, 
  Zap, 
  Brain, 
  Network, 
  Server, 
  Cloud, 
  CheckCircle,
  ArrowRight,
  Code,
  Database,
  Shield,
  Clock,
  Award,
  Star,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Building,
  Users,
  TrendingUp,
  Target,
  Rocket,
  Sparkles,
  Globe,
  Lock,
  RefreshCw,
  Wifi,
  Bluetooth,
  Radio,
  Satellite,
  Smartphone,
  Tablet,
  Monitor,
  HardDrive,
  MemoryStick,
  CircuitBoard,
  Microchip,
  Sensor,
  Camera,
  Thermometer,
  Gauge,
  Activity,
  BarChart3,
  PieChart,
  LineChart,
  AreaChart
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIIoTEdgeComputingPlatform() {

  const features = [
    {

      icon: Brain,
      title: 'AI-Powered Edge Intelligence',
      description: 'Machine learning models that run directly on IoT devices for real-time decision making'
    },
    {

      icon: Zap,
      title: 'Real-time Data Processing',
      description: 'Process sensor data at the edge with sub-millisecond latency for immediate insights'
    },
    {

      icon: Network,
      title: 'Distributed Edge Computing',
      description: 'Intelligent workload distribution across edge nodes for optimal performance and reliability'
    },
    {

      icon: Server,
      title: 'Edge-to-Cloud Orchestration',
      description: 'Seamless data flow between edge devices and cloud infrastructure with intelligent routing'
    },
    {

      icon: Cloud,
      title: 'Hybrid Cloud Integration',
      description: 'Support for multi-cloud environments with intelligent data placement and processing'
    },
    {

      icon: Shield,
      title: 'Edge Security & Privacy',
      description: 'Advanced security protocols including encryption, authentication, and secure boot'
    }
  ];

  const benefits = [
    'Reduce latency by 90%',
    'Lower bandwidth costs by 70%',
    'Improve data privacy and security',
    'Enable real-time decision making',
    'Reduce cloud dependency',
    'Scale IoT deployments efficiently'
  ];

  const useCases = [
    {

      industry: 'Manufacturing',
      applications: ['Predictive maintenance', 'Quality control', 'Supply chain monitoring', 'Energy optimization'],
      icon: Cpu
    },
    {

      industry: 'Healthcare',
      applications: ['Patient monitoring', 'Medical device management', 'Telemedicine', 'Clinical analytics'],
      icon: Shield
    },
    {

      industry: 'Smart Cities',
      applications: ['Traffic management', 'Environmental monitoring', 'Public safety', 'Energy management'],
      icon: Globe
    },
    {

      industry: 'Agriculture',
      applications: ['Precision farming', 'Crop monitoring', 'Livestock tracking', 'Weather prediction'],
      icon: Network
    }
  ];

  const technologies = [
    'TensorFlow Lite',
    'ONNX Runtime',
    'Apache Kafka',
    'MQTT Protocol',
    'Kubernetes Edge',
    'Docker Edge',
    'Azure IoT Edge',
    'AWS Greengrass',
    'Google Cloud IoT',
    'NVIDIA Jetson',
    'Intel OpenVINO',
    'ARM Cortex-M',
    'RISC-V',
    'LoRaWAN',
    '5G Networks'
  ];

  const pricingPlans = [
    {

      name: 'Starter',
      description: 'Perfect for small IoT projects and prototypes',
      price: { monthly: 299, annual: 2990 },
      features: [
        'Up to 100 edge devices',
        'Basic AI models',
        'Cloud integration',
        'Email support',
        'Standard security',
        'Monthly reports'
      ],
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      popular: false,
      cta: 'Start Free Trial',
      link: '/contact'
    },
    {

      name: 'Professional',
      description: 'Ideal for production IoT deployments',
      price: { monthly: 899, annual: 8990 },
      features: [
        'Up to 1,000 edge devices',
        'Advanced AI models',
        'Real-time analytics',
        'Priority support',
        'Custom integrations',
        'Advanced security',
        'API access',
        'Training sessions'
      ],
      icon: Building,
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      cta: 'Get Started',
      link: '/contact'
    },
    {

      name: 'Enterprise',
      description: 'For large-scale IoT operations',
      price: { monthly: 2499, annual: 24990 },
      features: [
        'Unlimited edge devices',
        'Custom AI models',
        'Dedicated IoT team',
        '24/7 priority support',
        'On-premise deployment',
        'White-label solutions',
        'SLA guarantees',
        'Compliance reporting'
      ],
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      popular: false,
      cta: 'Contact Sales',
      link: '/contact'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <SEO 
        title="AI-Powered IoT Edge Computing Platform | Zion Tech Group"
        description="Transform IoT with AI-powered edge computing. Process data at the edge, reduce latency, and enable real-time decision making with intelligent edge devices."
        keywords="IoT edge computing, edge AI, real-time processing, IoT platform, edge analytics, distributed computing"
        canonical="https://ziontechgroup.com/services/ai-iot-edge-computing-platform"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-6">
              <Network className="w-4 h-4 mr-2" />
              IoT Edge Computing Solution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered IoT 
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"> Edge Computing Platform</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform IoT with intelligent edge computing. Process data at the edge, reduce latency, 
              and enable real-time decision making with AI-powered edge devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-orange-500 text-orange-300 font-semibold rounded-lg hover:bg-orange-500/20 transition-all duration-200"
              >
                Watch Demo
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Edge Computing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive IoT edge platform powered by cutting-edge AI technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Edge Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your IoT operations with proven edge computing results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Trusted by organizations across industries for their IoT edge computing needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <ul className="space-y-2 text-gray-300">
                  {useCase.applications.map((app, appIndex) => (
                    <li key={appIndex} className="text-sm">{app}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powered by Industry-Leading Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Integration with the most advanced IoT and edge computing tools
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-gray-300 text-sm font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your IoT edge computing needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-8 ${

                  plan.popular 
                    ? 'border-blue-500 bg-gradient-to-br from-blue-500/20 to-cyan-500/20' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${plan.price.monthly}
                    <span className="text-lg text-gray-300 font-normal">/month</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    ${plan.price.annual} billed annually (save 17%)
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.link}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${

                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IoT Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading companies using AI-powered edge computing to revolutionize their IoT deployments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-orange-500 text-orange-300 font-semibold rounded-lg hover:bg-orange-500/20 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Have questions about our IoT edge computing platform? Our team is here to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-orange-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-orange-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-orange-400 mb-4" />
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
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Shield, 
  BarChart3, 
  AlertTriangle, 
  Globe, 
  Users, 
  CheckCircle, 
  Zap,
  FileText,
  Settings,
  Brain,
  Target,
  Activity,
  MapPin,
  Clock,
  Network,
  Database,
  Wifi
} from 'lucide-react';

const AIEdgeComputingPlatform: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Edge Analytics",
      description: "Advanced machine learning algorithms process data at the edge, enabling real-time insights and decision-making with minimal latency."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Distributed Edge Computing",
      description: "Intelligent workload distribution across edge nodes, optimizing performance and resource utilization for maximum efficiency."
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "5G & IoT Integration",
      description: "Seamless connectivity with 5G networks and IoT devices, enabling ultra-low latency communication and real-time data processing."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Edge Security & Privacy",
      description: "Advanced security protocols and data privacy controls at the edge, ensuring secure processing and compliance with regulations."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Data Processing",
      description: "Process massive amounts of data in real-time at the edge, reducing bandwidth requirements and improving response times."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Intelligent Edge Orchestration",
      description: "AI-driven management of edge resources, automatic scaling, and dynamic workload optimization based on demand patterns."
    }
  ];

  const benefits = [
    "Reduce latency by 80-90% through edge processing",
    "Cut bandwidth costs by 40-60% with local data processing",
    "Improve application performance by 3-5x",
    "Enable real-time AI inference at the edge",
    "Provide offline operation capabilities",
    "Enhance data privacy and security"
  ];

  const useCases = [
    "Autonomous Vehicles & Drones",
    "Smart Cities & IoT",
    "Industrial IoT & Manufacturing",
    "Healthcare & Telemedicine",
    "Retail & Smart Stores",
    "Energy & Utilities"
  ];

  const edgeTechnologies = [
    "Edge AI Chips & GPUs",
    "5G & Network Slicing",
    "IoT Sensors & Gateways",
    "Edge Containers & Kubernetes",
    "Real-time Data Streaming",
    "Federated Learning"
  ];

  const pricing = [
    {
      plan: "Professional",
      price: "$3,800",
      period: "/month",
      features: [
        "Up to 10 edge nodes",
        "Basic AI edge processing",
        "Real-time monitoring",
        "Standard reporting",
        "Email support",
        "Basic IoT integration"
      ]
    },
    {
      plan: "Enterprise",
      price: "$12,500",
      period: "/month",
      features: [
        "Up to 100 edge nodes",
        "Advanced AI edge models",
        "Custom integrations",
        "Priority support",
        "Advanced analytics",
        "Custom dashboards",
        "Multi-location support"
      ]
    },
    {
      plan: "Global",
      price: "$19,500",
      period: "/month",
      features: [
        "Unlimited edge nodes",
        "Full AI edge platform suite",
        "Custom model training",
        "24/7 dedicated support",
        "Advanced security features",
        "White-label solutions",
        "On-premise deployment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-indigo-600/20 rounded-full">
              <Cpu className="w-12 h-12 text-indigo-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Edge Computing Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your edge computing with AI-powered analytics, real-time processing, 
            and intelligent orchestration. Process data where it's generated for maximum performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-gray-600 text-gray-300 hover:border-gray-500 font-semibold rounded-lg transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Edge Computing Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Leverage cutting-edge artificial intelligence to process data at the edge
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all"
              >
                <div className="text-indigo-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience unprecedented performance and efficiency through edge computing
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Use Cases Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our edge computing platform serves diverse industries with real-time processing needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center hover:border-indigo-500/50 transition-all"
              >
                <div className="p-3 bg-indigo-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{useCase}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Edge Technologies Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Edge Computing Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built on cutting-edge edge computing and AI technologies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {edgeTechnologies.map((technology, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center hover:border-indigo-500/50 transition-all"
              >
                <div className="p-3 bg-indigo-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Wifi className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{technology}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your organization's edge computing requirements
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white/5 backdrop-blur-lg rounded-xl p-8 border ${
                  index === 1 ? 'border-indigo-500/50 bg-indigo-500/10' : 'border-white/10'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  index === 1
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Deploy Edge Computing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading organizations that trust our AI-powered platform for their edge computing needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Have questions about our AI Edge Computing Platform? Our experts are here to help.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="p-3 bg-indigo-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
              <p className="text-gray-400">https://ziontechgroup.com</p>
            </div>
            <div>
              <div className="p-3 bg-indigo-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileText className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <div className="p-3 bg-indigo-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Settings className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-400">+1 (302) 464-0950</p>
            </div>
          </div>
          <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
            <p className="text-gray-400">364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AIEdgeComputingPlatform;
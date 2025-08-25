import React from 'react';
import { motion } from 'framer-motion';
import { 
  SignalIcon,
  ChartBarIcon,
  CloudIcon,
  CpuChipIcon,
  BoltIcon,
  EyeIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  CogIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const IoTDataAnalytics: React.FC = () => {
  const features = [
    {
      icon: SignalIcon,
      title: "IoT Device Management",
      description: "Comprehensive platform for managing, monitoring, and maintaining IoT devices across your entire network.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: ChartBarIcon,
      title: "Real-time Analytics",
      description: "Advanced analytics engine that processes IoT data in real-time, providing instant insights and actionable intelligence.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: CloudIcon,
      title: "Edge Computing",
      description: "Distributed computing architecture that processes data closer to the source for faster response times and reduced latency.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: CpuChipIcon,
      title: "AI-Powered Insights",
      description: "Machine learning algorithms that analyze IoT data patterns to predict trends, detect anomalies, and optimize operations.",
      color: "from-orange-500 to-red-600"
    }
  ];

  const benefits = [
    {
      metric: "50%",
      description: "Faster decision making",
      icon: BoltIcon
    },
    {
      metric: "30%",
      description: "Operational cost reduction",
      icon: ChartBarIcon
    },
    {
      metric: "99.9%",
      description: "System reliability",
      icon: ShieldCheckIcon
    },
    {
      metric: "24/7",
      description: "Continuous monitoring",
      icon: EyeIcon
    }
  ];

  const useCases = [
    {
      industry: "Smart Cities",
      description: "Comprehensive IoT solutions for urban infrastructure management, traffic optimization, and environmental monitoring",
      benefits: ["Traffic optimization", "Energy efficiency", "Environmental monitoring", "Public safety"]
    },
    {
      industry: "Manufacturing",
      description: "Industrial IoT solutions for predictive maintenance, quality control, and production optimization",
      benefits: ["Predictive maintenance", "Quality control", "Production optimization", "Cost reduction"]
    },
    {
      industry: "Healthcare",
      description: "IoT-enabled healthcare monitoring systems for patient care, asset tracking, and facility management",
      benefits: ["Patient monitoring", "Asset tracking", "Facility optimization", "Improved care"]
    },
    {
      industry: "Agriculture",
      description: "Smart farming solutions with IoT sensors for crop monitoring, irrigation control, and yield optimization",
      benefits: ["Crop monitoring", "Irrigation control", "Yield optimization", "Resource efficiency"]
    }
  ];

  const technologies = [
    {
      name: "MQTT Protocol",
      description: "Lightweight messaging protocol for IoT devices",
      icon: SignalIcon
    },
    {
      name: "Apache Kafka",
      description: "High-throughput distributed streaming platform",
      icon: CloudIcon
    },
    {
      name: "TensorFlow",
      description: "Machine learning framework for data analysis",
      icon: CpuChipIcon
    },
    {
      name: "Kubernetes",
      description: "Container orchestration for scalable deployments",
      icon: CogIcon
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/50 rounded-full text-blue-400 text-sm font-medium mb-6">
              <SignalIcon className="w-4 h-4 mr-2" />
              IoT & Data Analytics
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-500 to-green-600 bg-clip-text text-transparent mb-6">
              IoT Data Analytics
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business with intelligent IoT solutions and real-time data analytics that drive actionable insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                Get Started
              </button>
              <button className="px-8 py-4 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-full font-semibold transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            Powerful IoT Capabilities
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            Measurable Business Impact
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{benefit.metric}</div>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            Industry Applications
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            Technology Stack
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300 text-sm">{tech.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            Implementation Process
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Evaluate your current infrastructure and identify IoT opportunities"
              },
              {
                step: "02",
                title: "Design",
                description: "Architect the IoT solution and data analytics platform"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Deploy IoT devices and analytics infrastructure"
              },
              {
                step: "04",
                title: "Optimization",
                description: "Fine-tune the system and provide ongoing support"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Harness IoT Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your operations with intelligent IoT solutions and real-time analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center">
                Start Your IoT Journey
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-full font-semibold transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IoTDataAnalytics;
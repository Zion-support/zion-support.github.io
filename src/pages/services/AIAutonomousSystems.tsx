import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  CpuChipIcon, 
  CogIcon, 
  RocketLaunchIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const AIAutonomousSystems: React.FC = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: "Intelligent Decision Making",
      description: "AI-powered autonomous decision-making systems that learn and adapt to complex environments in real-time."
    },
    {
      icon: CpuChipIcon,
      title: "Machine Learning Integration",
      description: "Advanced ML algorithms that continuously improve system performance and decision accuracy."
    },
    {
      icon: CogIcon,
      title: "Automated Operations",
      description: "Fully autonomous system operations with minimal human intervention and maximum efficiency."
    },
    {
      icon: RocketLaunchIcon,
      title: "Scalable Architecture",
      description: "Modular and scalable system architecture that grows with your business needs."
    },
    {
      icon: ChartBarIcon,
      title: "Performance Analytics",
      description: "Comprehensive analytics and monitoring for system performance optimization and insights."
    },
    {
      icon: GlobeAltIcon,
      title: "Global Connectivity",
      description: "Seamless integration with global networks and cloud-based autonomous systems."
    }
  ];

  const benefits = [
    "Increase operational efficiency by 400%",
    "Reduce human error by 95%",
    "24/7 autonomous operation capability",
    "Real-time adaptive decision making",
    "Scalable across all business units",
    "Cost reduction of up to 70% in operations"
  ];

  const useCases = [
    {
      title: "Manufacturing Automation",
      description: "Intelligent manufacturing systems with autonomous quality control and production optimization."
    },
    {
      title: "Logistics & Supply Chain",
      description: "Autonomous logistics systems with intelligent routing and inventory management."
    },
    {
      title: "Healthcare Systems",
      description: "AI-powered healthcare automation with autonomous patient monitoring and care coordination."
    },
    {
      title: "Financial Services",
      description: "Autonomous trading systems and risk management with real-time market analysis."
    }
  ];

  const systemMetrics = [
    {
      metric: "Decision Accuracy",
      value: "99.7%",
      description: "Accuracy of autonomous decisions"
    },
    {
      metric: "Response Time",
      value: "<100ms",
      description: "Average system response time"
    },
    {
      metric: "Uptime",
      value: "99.99%",
      description: "System availability and reliability"
    },
    {
      metric: "Learning Rate",
      value: "+15%",
      description: "Monthly improvement in performance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <Helmet>
        <title>AI Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered autonomous systems platform. Intelligent decision-making, automated operations, and scalable architecture for enterprise transformation." />
        <meta name="keywords" content="AI systems, autonomous systems, intelligent automation, AI decision making, system automation, AI operations" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-systems" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              AI Autonomous Systems
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Next-generation autonomous systems powered by artificial intelligence that make 
              intelligent decisions, operate independently, and continuously learn and improve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start System Assessment
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                View Demo
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Autonomous Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI autonomous systems combine cutting-edge artificial intelligence with 
              advanced automation to deliver unprecedented operational efficiency and intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency and intelligence with our AI autonomous 
              systems that never sleep and never stop learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl p-8 border border-cyan-500/30"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">System Performance</h3>
              <div className="space-y-4">
                {systemMetrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{metric.metric}</span>
                    <span className="text-cyan-400 font-semibold">{metric.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From manufacturing to healthcare, our AI autonomous systems provide 
              intelligent solutions for every industry and use case.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on the latest AI and machine learning technologies for maximum 
              performance, reliability, and scalability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <CpuChipIcon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Deep Learning</h3>
              <p className="text-gray-300">Advanced neural networks for complex pattern recognition and decision making</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <ShieldCheckIcon className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Security First</h3>
              <p className="text-gray-300">Enterprise-grade security with encryption and access control</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <LightBulbIcon className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Continuous Learning</h3>
              <p className="text-gray-300">Systems that continuously improve and adapt to new challenges</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Go Autonomous?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your operations with AI autonomous systems that work smarter, 
              faster, and more efficiently than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousSystems;
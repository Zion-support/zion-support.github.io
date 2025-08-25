import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  EyeIcon, 
  CpuChipIcon,
  GlobeAltIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const AIAutonomousSecurity: React.FC = () => {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: "Threat Detection & Prevention",
      description: "AI-powered real-time threat detection with proactive prevention mechanisms and automated response systems."
    },
    {
      icon: LockClosedIcon,
      title: "Access Control & Authentication",
      description: "Intelligent access management with multi-factor authentication and behavioral analysis for enhanced security."
    },
    {
      icon: EyeIcon,
      title: "Continuous Monitoring",
      description: "24/7 autonomous security monitoring across all systems, networks, and endpoints with instant alerting."
    },
    {
      icon: CpuChipIcon,
      title: "Machine Learning Security",
      description: "Advanced ML algorithms that learn from security patterns and adapt to evolving cyber threats."
    },
    {
      icon: GlobeAltIcon,
      title: "Global Threat Intelligence",
      description: "Real-time threat intelligence sharing across global networks for comprehensive security coverage."
    },
    {
      icon: ChartBarIcon,
      title: "Security Analytics",
      description: "Comprehensive security analytics and reporting with predictive threat modeling capabilities."
    }
  ];

  const benefits = [
    "Reduce security incidents by 95%",
    "Automated threat response in under 30 seconds",
    "24/7 autonomous security operations",
    "Real-time threat intelligence updates",
    "Compliance automation and reporting",
    "Cost reduction of up to 60% in security operations"
  ];

  const useCases = [
    {
      title: "Enterprise Security",
      description: "Comprehensive security solutions for large organizations with complex infrastructure and compliance requirements."
    },
    {
      title: "Cloud Security",
      description: "Advanced cloud-native security with automated threat detection and response for multi-cloud environments."
    },
    {
      title: "IoT Security",
      description: "Specialized security for IoT devices and networks with autonomous monitoring and protection."
    },
    {
      title: "Critical Infrastructure",
      description: "Industrial control system security with autonomous threat detection and response capabilities."
    }
  ];

  const securityMetrics = [
    {
      metric: "Threat Detection Rate",
      value: "99.9%",
      description: "Accuracy in identifying security threats"
    },
    {
      metric: "Response Time",
      value: "<30s",
      description: "Average time to respond to threats"
    },
    {
      metric: "False Positive Rate",
      value: "<0.1%",
      description: "Minimal false alarms"
    },
    {
      metric: "Uptime",
      value: "99.99%",
      description: "Security system availability"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <Helmet>
        <title>AI Autonomous Security - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered autonomous security platform. 24/7 threat detection, automated response, and intelligent security management for enterprise protection." />
        <meta name="keywords" content="AI security, autonomous security, cybersecurity, threat detection, security automation, AI protection" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-security" />
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
              AI Autonomous Security
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Next-generation autonomous security powered by AI that works 24/7 to protect your 
              organization from evolving cyber threats with intelligent detection and response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Security Assessment
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
              Advanced Security Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI autonomous security platform combines cutting-edge artificial intelligence 
              with advanced cybersecurity to deliver unparalleled protection and threat response.
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
              Transform Your Security Posture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented security efficiency and protection with our AI autonomous 
              security platform that never sleeps.
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
              <h3 className="text-2xl font-semibold text-white mb-6">Security Metrics</h3>
              <div className="space-y-4">
                {securityMetrics.map((metric, index) => (
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
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From enterprise security to IoT protection, our AI autonomous security platform 
              provides tailored solutions for every security challenge.
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

      {/* Threat Intelligence Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-Time Threat Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of emerging threats with our global threat intelligence network 
              and AI-powered predictive analytics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <ExclamationTriangleIcon className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Threat Detection</h3>
              <p className="text-gray-300">Advanced AI algorithms detect threats before they become incidents</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <CogIcon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Automated Response</h3>
              <p className="text-gray-300">Instant automated response to security threats and incidents</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <ChartBarIcon className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
              <p className="text-gray-300">AI-powered threat prediction and risk assessment</p>
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
              Secure Your Future Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the revolution in autonomous security with AI-powered protection 
              that never sleeps and never fails.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Security Assessment
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Security Review
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousSecurity;

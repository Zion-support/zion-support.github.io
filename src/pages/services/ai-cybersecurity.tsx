import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Brain, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  TrendingUp,
  Lock,
  Eye,
  AlertTriangle,
  Network,
  Database,
  Globe,
  Clock,
  Award,
  Target,
  BarChart3,
  Sparkles,
  Key,
  Fingerprint,
  Server,
  Bug,
  Building,
  Cloud,
  Smartphone
} from 'lucide-react';
import EnhancedSEO from '@/components/EnhancedSEO';

export default function AICybersecurity() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms for real-time threat identification and response"
    },
    {
      icon: Shield,
      title: "Zero-Day Attack Prevention",
      description: "Predictive security measures to stop unknown threats before they can cause damage"
    },
    {
      icon: Zap,
      title: "Automated Incident Response",
      description: "Intelligent automation for immediate threat containment and remediation"
    },
    {
      icon: Eye,
      title: "Behavioral Analytics",
      description: "Continuous monitoring of user and system behavior to detect anomalies"
    }
  ];

  const benefits = [
    "Reduce security incidents by up to 90%",
    "Improve threat detection accuracy by 95%",
    "Reduce response time from hours to minutes",
    "Lower security operation costs by 70%",
    "Ensure 24/7 automated security monitoring"
  ];

  const useCases = [
    {
      title: "Enterprise Security",
      description: "Comprehensive protection for large organizations with complex IT infrastructure",
      icon: Building
    },
    {
      title: "Cloud Security",
      description: "Secure cloud environments with AI-powered threat detection and compliance",
      icon: Cloud
    },
    {
      title: "Network Security",
      description: "Advanced network monitoring and intrusion prevention systems",
      icon: Network
    },
    {
      title: "Endpoint Protection",
      description: "AI-driven protection for all devices and endpoints",
      icon: Smartphone
    }
  ];

  const securityServices = [
    {
      name: "Threat Intelligence",
      description: "Real-time threat feeds and intelligence analysis",
      icon: Eye,
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Vulnerability Assessment",
      description: "Automated scanning and risk assessment",
      icon: Bug,
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Incident Response",
      description: "24/7 automated threat response and recovery",
      icon: AlertTriangle,
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Compliance Management",
      description: "Automated compliance monitoring and reporting",
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Security Analytics",
      description: "Advanced analytics and threat hunting",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Identity Management",
      description: "AI-powered identity verification and access control",
      icon: Fingerprint,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="AI Cybersecurity - Zion Tech Group"
        description="Protect your digital assets with AI-powered cybersecurity solutions. Advanced threat detection, automated response, and 24/7 security monitoring."
        canonical="/services/ai-cybersecurity"
        url="https://ziontechgroup.com/services/ai-cybersecurity"
        type="service"
        tags={['AI Cybersecurity', 'Threat Detection', 'Security Automation', 'Incident Response', 'Network Security']}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-emerald-900/20 to-blue-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-green-400 text-sm font-medium">AI Cybersecurity</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}Cybersecurity
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your digital assets with our comprehensive AI cybersecurity platform. 
                Advanced threat detection, automated response, and 24/7 security monitoring 
                to keep your organization safe from evolving cyber threats.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                >
                  Get Protected
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/schedule-demo"
                  className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-400 hover:bg-green-500/10 font-semibold rounded-lg transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Cybersecurity Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our platform combines cutting-edge AI with cybersecurity expertise to deliver 
                unprecedented protection against modern cyber threats.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Services Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Security Services
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                From threat detection to incident response, our AI platform covers all aspects of cybersecurity.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Cybersecurity Platform?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Experience the future of cybersecurity with our comprehensive AI solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Security Metrics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Threat Detection</span>
                    <span className="text-green-400 font-semibold">99.9%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Response Time</span>
                    <span className="text-green-400 font-semibold">&lt;30 seconds</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">False Positives</span>
                    <span className="text-green-400 font-semibold">&lt;0.1%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Uptime</span>
                    <span className="text-green-400 font-semibold">99.99%</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cybersecurity Use Cases
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our AI platform addresses the most critical security challenges in modern organizations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-400">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-900/20 via-emerald-900/20 to-blue-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Secure Your Organization?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join leading organizations who are already using our AI cybersecurity platform 
                to protect their digital assets and maintain compliance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                >
                  Get Your Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-400 hover:bg-green-500/10 font-semibold rounded-lg transition-all duration-300"
                >
                  Contact Security Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
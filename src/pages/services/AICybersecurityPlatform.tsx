import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Star, 
  Clock, 
  Users, 
  Globe, 
  Network,
  BarChart3,
  Rocket,
  Sparkles,
  Database,
  Zap,
  Target,
  Brain,
  Cpu,
  Server,
  Key,
  Fingerprint,
  Monitor,
  Activity,
  TrendingUp,
  Award,
  ArrowRight,
  Cloud,
  Bug,
  Fish
} from 'lucide-react';

const AICybersecurityPlatform = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      title: "AI Threat Detection",
      description: "Advanced machine learning algorithms that identify and respond to threats in real-time"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Zero Trust Security",
      description: "Comprehensive zero-trust architecture that verifies every user, device, and connection"
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-400" />,
      title: "Continuous Monitoring",
      description: "24/7 surveillance of your entire digital infrastructure with instant alerting"
    },
    {
      icon: <Lock className="w-8 h-8 text-orange-400" />,
      title: "Advanced Encryption",
      description: "Military-grade encryption protocols for data at rest and in transit"
    },
    {
      icon: <Network className="w-8 h-8 text-cyan-400" />,
      title: "Network Security",
      description: "Comprehensive network protection with intrusion detection and prevention"
    },
    {
      icon: <Target className="w-8 h-8 text-pink-400" />,
      title: "Threat Intelligence",
      description: "Real-time threat intelligence feeds and proactive threat hunting capabilities"
    }
  ];

  const benefits = [
    {
      metric: "99.99%",
      description: "Threat detection accuracy with AI-powered analysis"
    },
    {
      metric: "24/7",
      description: "Continuous protection and monitoring"
    },
    {
      metric: "<1s",
      description: "Response time to security incidents"
    },
    {
      metric: "Global",
      description: "Threat intelligence network coverage"
    }
  ];

  const securityLayers = [
    {
      title: "Perimeter Security",
      description: "Advanced firewalls, DDoS protection, and network segmentation",
      icon: <Shield className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Identity & Access",
      description: "Multi-factor authentication, single sign-on, and privileged access management",
      icon: <Key className="w-6 h-6 text-green-400" />
    },
    {
      title: "Data Protection",
      description: "End-to-end encryption, data loss prevention, and backup security",
      icon: <Lock className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Endpoint Security",
      description: "Advanced antivirus, device control, and behavioral analysis",
      icon: <Monitor className="w-6 h-6 text-orange-400" />
    },
    {
      title: "Cloud Security",
      description: "Cloud access security broker, container security, and API protection",
      icon: <Cloud className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Incident Response",
      description: "Automated incident response, forensics, and recovery procedures",
      icon: <AlertTriangle className="w-6 h-6 text-red-400" />
    }
  ];

  const threatTypes = [
    {
      name: "Malware & Ransomware",
      protection: "99.9%",
      icon: <Bug className="w-5 h-5 text-red-400" />
    },
    {
      name: "Phishing Attacks",
      protection: "99.8%",
      icon: <Fish className="w-5 h-5 text-orange-400" />
    },
    {
      name: "DDoS Attacks",
      protection: "99.99%",
      icon: <Network className="w-5 h-5 text-yellow-400" />
    },
    {
      name: "Data Breaches",
      protection: "99.95%",
      icon: <Database className="w-5 h-5 text-green-400" />
    },
    {
      name: "Insider Threats",
      protection: "99.7%",
      icon: <Users className="w-5 h-5 text-blue-400" />
    },
    {
      name: "Zero-Day Exploits",
      protection: "99.6%",
      icon: <Target className="w-5 h-5 text-purple-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-6"
            >
              <div className="p-3 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full border border-red-500/30">
                <Shield className="h-12 w-12 text-red-400" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent"
            >
              AI Cybersecurity Platform
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Protect your digital assets with the most advanced AI-powered cybersecurity platform. 
              Our intelligent security system detects, prevents, and responds to threats in real-time, 
              ensuring your business stays secure 24/7.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 text-lg">
                Get Protected Today
              </Link>
              <Link to="/pricing" className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg">
                View Pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is AI Cybersecurity Platform */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What is AI Cybersecurity Platform?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our AI Cybersecurity Platform represents the next generation of digital protection, 
                combining artificial intelligence with advanced security protocols to create an 
                impenetrable defense system for your organization.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Using machine learning algorithms and behavioral analysis, our platform continuously 
                learns from threats, adapts to new attack vectors, and provides proactive protection 
                that traditional security solutions cannot match.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300">AI-Powered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-300">Real-time Protection</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-red-600/20 to-orange-600/20 p-8 rounded-2xl border border-red-500/30">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <Brain className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-semibold">AI Threat Detection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-semibold">Zero Trust Security</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Eye className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-semibold">Continuous Monitoring</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Lock className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-semibold">Advanced Encryption</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Layers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Multi-Layer Security Architecture
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityLayers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div className="flex items-center space-x-3 mb-4">
                  {layer.icon}
                  <h3 className="text-xl font-semibold text-red-400">{layer.title}</h3>
                </div>
                <p className="text-gray-300">{layer.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Protection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Threat Protection Coverage
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threatTypes.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {threat.icon}
                    <span className="font-semibold">{threat.name}</span>
                  </div>
                  <span className="text-2xl font-bold text-green-400">{threat.protection}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: threat.protection }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Why Choose AI Cybersecurity Platform?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    {benefit.metric}
                  </span>
                </div>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Pricing Plans
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-red-500/50 transition-all duration-300"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <div className="text-4xl font-bold text-red-400 mb-2">$299</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Basic Threat Protection</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">AI Monitoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Email Support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Basic Reports</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 text-center block">
                Get Started
              </Link>
            </motion.div>

            {/* Professional Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-600/20 to-orange-600/20 p-8 rounded-xl border border-red-500/50 relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="text-4xl font-bold text-red-400 mb-2">$799</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Advanced Threat Protection</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Full AI Suite</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Priority Support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Advanced Analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Custom Integrations</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 text-center block">
                Get Started
              </Link>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-red-500/50 transition-all duration-300"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-red-400 mb-2">$1,999</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Complete Security Suite</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Custom AI Models</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">24/7 Dedicated Support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Custom Analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">White-label Solutions</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 text-center block">
                Contact Sales
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600/20 to-orange-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Secure Your Digital Assets?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8"
          >
            Join thousands of organizations that trust Zion Tech Group's AI Cybersecurity Platform. 
            Get enterprise-grade protection with AI-powered intelligence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 text-lg">
              Get Protected Today
            </Link>
            <Link to="/pricing" className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg">
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityPlatform;
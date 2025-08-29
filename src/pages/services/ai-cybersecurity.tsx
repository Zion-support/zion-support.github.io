import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Zap, Users, TrendingUp, CheckCircle, ArrowRight, Star, Award, Globe, Cpu, Database, Lock, Eye, BarChart3, MessageSquare, Calendar, Phone, Mail, MapPin, AlertTriangle, Bug, Network, Key, Server, Monitor, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AICybersecurity() {
  const features = [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms for real-time threat identification and response'
    },
    {
      icon: Shield,
      title: 'Zero Trust Security',
      description: 'Comprehensive zero trust architecture with AI-powered access control and monitoring'
    },
    {
      icon: Zap,
      title: 'Automated Response',
      description: 'Intelligent incident response and automated threat mitigation systems'
    },
    {
      icon: Eye,
      title: 'Behavioral Analytics',
      description: 'AI-powered user behavior analysis for insider threat detection'
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Advanced network monitoring and intrusion prevention with AI insights'
    },
    {
      icon: Lock,
      title: 'Compliance Management',
      description: 'Automated compliance monitoring and reporting for various security standards'
    }
  ];

  const benefits = [
    'Detect threats 10x faster than traditional methods',
    'Reduce false positives by 80%',
    'Automate 90% of security responses',
    'Achieve 99.9% threat detection accuracy',
    'Ensure compliance with industry standards',
    'Scale security operations efficiently'
  ];

  const useCases = [
    {
      title: 'Enterprise Security',
      description: 'Comprehensive security platform for large organizations with multiple locations'
    },
    {
      title: 'Cloud Security',
      description: 'AI-powered cloud infrastructure protection and compliance monitoring'
    },
    {
      title: 'Endpoint Protection',
      description: 'Advanced endpoint detection and response with behavioral analysis'
    },
    {
      title: 'Incident Response',
      description: 'Automated incident detection, analysis, and response workflows'
    }
  ];

  const securityServices = [
    {
      icon: AlertTriangle,
      title: 'Threat Intelligence',
      items: ['Real-time threat feeds', 'Vulnerability assessment', 'Risk scoring', 'Threat hunting']
    },
    {
      icon: Bug,
      title: 'Penetration Testing',
      items: ['Automated testing', 'Manual testing', 'Social engineering', 'Physical security']
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      items: ['Network segmentation', 'Firewall management', 'VPN solutions', 'DDoS protection']
    },
    {
      icon: Monitor,
      title: 'Security Monitoring',
      items: ['SIEM integration', 'Log analysis', 'Alert management', 'Incident tracking']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-emerald-900/20 to-teal-900/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-green-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              AI Cybersecurity
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {' '}Cybersecurity
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your organization with next-generation AI cybersecurity. Our intelligent platform 
              detects, prevents, and responds to threats in real-time while ensuring compliance and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Cybersecurity Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI platform combines machine learning, behavioral analytics, and automated response 
              to provide comprehensive protection against evolving cyber threats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 hover:border-green-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From threat intelligence to incident response, our AI platform provides 
              end-to-end cybersecurity protection for your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-400 text-sm flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Transform Your Security Posture
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Our AI cybersecurity platform delivers measurable improvements in threat detection, 
                response time, and overall security effectiveness while reducing operational costs.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-8 border border-green-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">10x</div>
                    <div className="text-sm text-gray-400">Faster threat detection</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">80%</div>
                    <div className="text-sm text-gray-400">Fewer false positives</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-400 mb-2">90%</div>
                    <div className="text-sm text-gray-400">Automated responses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                    <div className="text-sm text-gray-400">Detection accuracy</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Cybersecurity Use Cases
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI platform addresses the most critical cybersecurity challenges, 
              providing comprehensive protection for various organizational needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 hover:border-green-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-400 mb-6">{useCase.description}</p>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-3xl p-12 text-center border border-green-500/30"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join leading organizations that are already using our AI platform to protect 
              their digital assets and ensure business continuity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Get Your Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
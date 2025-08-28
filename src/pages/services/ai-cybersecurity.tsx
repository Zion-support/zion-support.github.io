import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Shield, 
  Brain, 
  Zap, 
  Eye, 
  Lock, 
  AlertTriangle, 
  CheckCircle, 
  Target,
  ArrowRight,
  Users,
  Clock,
  TrendingUp,
  BarChart3,
  Globe,
  Server
} from 'lucide-react';

export default function AICybersecurity() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms that identify and respond to threats in real-time'
    },
    {
      icon: Shield,
      title: 'Predictive Security Analytics',
      description: 'Proactive threat prevention using AI-driven behavioral analysis and pattern recognition'
    },
    {
      icon: Zap,
      title: 'Automated Incident Response',
      description: 'Intelligent automation that responds to security incidents faster than human operators'
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: '24/7 AI surveillance of your entire digital infrastructure for immediate threat detection'
    }
  ];

  const services = [
    {
      title: 'Threat Intelligence Platform',
      description: 'AI-powered threat intelligence that provides real-time insights into emerging cyber threats',
      icon: Target
    },
    {
      title: 'Behavioral Analytics',
      description: 'Advanced user and entity behavior analytics to detect insider threats and anomalies',
      icon: Users
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Automated vulnerability scanning and AI-driven risk prioritization',
      icon: AlertTriangle
    },
    {
      title: 'Security Automation',
      description: 'Intelligent security orchestration and automated response workflows',
      icon: Zap
    }
  ];

  const benefits = [
    'Real-time threat detection and response',
    'Reduced false positive alerts by 90%',
    '24/7 automated security monitoring',
    'Predictive threat prevention',
    'Scalable security operations',
    'Compliance automation and reporting'
  ];

  return (
    <>
      <SEO 
        title="AI Cybersecurity Solutions - Zion Tech Group"
        description="Advanced AI-powered cybersecurity solutions for enterprise protection. Real-time threat detection, automated response, and predictive security analytics."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-red-400/10 border border-red-400/20 rounded-full text-red-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                AI-Powered Cybersecurity
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Cybersecurity
                <span className="block bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
                  Protection
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Defend your digital assets with the power of artificial intelligence. Our AI cybersecurity 
                solutions provide real-time threat detection, automated response, and predictive security 
                analytics to keep your organization safe.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-red-500/25">
                  Secure Your Business
                </button>
                <button className="px-8 py-4 border border-red-400/30 text-red-400 font-semibold rounded-lg hover:bg-red-400/10 transition-all duration-200">
                  Get Security Assessment
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                AI Cybersecurity Features
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our AI-powered cybersecurity platform combines cutting-edge machine learning with 
                advanced security technologies to provide comprehensive protection.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-red-400/30 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-red-400/40 group-hover:to-orange-500/40 transition-all duration-200">
                    <feature.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                AI Cybersecurity Services
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Comprehensive cybersecurity solutions powered by artificial intelligence to protect 
                your organization from evolving threats.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-red-400/30 transition-all duration-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-slate-300">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose AI Cybersecurity?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                AI-powered cybersecurity provides superior protection through intelligent automation, 
                real-time monitoring, and predictive threat prevention.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                  <span className="text-slate-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-500/10 to-orange-500/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                Protect your organization with AI-powered cybersecurity that adapts to evolving threats 
                and provides comprehensive protection around the clock.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-red-500/25">
                  Start Security Assessment
                </button>
                <button className="px-8 py-4 border border-red-400/30 text-red-400 font-semibold rounded-lg hover:bg-red-400/10 transition-all duration-200">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
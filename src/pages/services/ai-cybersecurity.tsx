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
  Database, 
  Globe, 
  FileText,
  MessageCircle,
  Calendar,
  Clock,
  DollarSign,
  Award,
  Rocket,
  Leaf,
  Sparkles,
  Target,
  BarChart3,
  Monitor,
  Smartphone,
  Cloud,
  Server,
  Cpu,
  Network,
  Eye,
  Building,
  Video,
  Image,
  Music,
  Code,
  AlertTriangle,
  Security,
  Key,
  Fingerprint,
  Bug,
  Virus,
  Firewall,
  Search,
  Activity
} from 'lucide-react';
import EnhancedSEO from '@/components/EnhancedSEO';

export default function AICybersecurity() {
  const features = [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning for real-time threat identification and response',
      color: 'from-blue-500 to-cyan-500'
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
      title: 'Behavioral Analysis',
      description: 'Monitor and detect anomalous user and system behavior patterns',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lock,
      title: 'Zero Trust Security',
      description: 'Comprehensive identity verification and access control',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Search,
      title: 'Vulnerability Scanning',
      description: 'Automated security assessment and risk analysis',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Activity,
      title: 'Incident Response',
      description: 'AI-driven threat containment and recovery automation',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const benefits = [
    'Detect threats 10x faster than traditional methods',
    'Reduce false positives by 85%',
    'Automate 90% of security responses',
    '24/7 threat monitoring and protection',
    'Compliance with industry standards',
    'Real-time security intelligence updates'
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

  return (
    <>
      <EnhancedSEO 
        title="AI Cybersecurity - Zion Tech Group"
        description="Advanced AI-powered cybersecurity solutions with real-time threat detection, behavioral analysis, and automated incident response."
        keywords="AI cybersecurity, threat detection, security automation, zero trust, incident response, network security"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-emerald-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI cybersecurity platform provides comprehensive protection with intelligent threat detection and response.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-green-500/50 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Cybersecurity?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience superior protection with AI-driven security that adapts to evolving threats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Digital Assets?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait for a breach to happen. Get AI-powered cybersecurity protection today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Protected Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-200"
              >
                Security Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
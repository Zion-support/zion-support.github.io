import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Shield, Eye, AlertTriangle, Lock, Users, BarChart3, Zap, Brain, CheckCircle, ArrowRight, Activity, Network, Database, Cloud, Smartphone, Laptop, Server, Globe, Target, TrendingUp, Clock, RefreshCw, FileText, MessageSquare, Bell, Search, Filter, Download, Share, Star, Heart, ThumbsUp, ThumbsDown, Info, HelpCircle, ExternalLink, Phone, Mail, MapPin, Key, Fingerprint, Bug, AlertCircle, ShieldCheck, UserCheck, Globe2, LockKeyhole } from 'lucide-react';

export default function AICybersecuritySuite() {
  const features = [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms that detect and respond to threats in real-time',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Zero-Day Protection',
      description: 'Proactive defense against unknown threats using behavioral analysis and AI prediction',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: '24/7 surveillance of your entire digital infrastructure with instant alerting',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lock,
      title: 'Advanced Encryption',
      description: 'Military-grade encryption for data at rest and in transit with quantum-resistant algorithms',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Identity & Access Management',
      description: 'Multi-factor authentication and role-based access control with AI-powered risk assessment',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Security Analytics',
      description: 'Comprehensive security insights and threat intelligence with predictive analytics',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const services = [
    {
      title: 'Threat Detection & Response',
      description: 'AI-powered threat detection with automated response and incident management',
      price: 'From $2,500/month',
      features: ['Real-time threat detection', 'Automated response', 'Incident management', 'Threat hunting']
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security audits and penetration testing with AI-enhanced scanning',
      price: 'From $5,000',
      features: ['Security audits', 'Penetration testing', 'Vulnerability scanning', 'Risk assessment']
    },
    {
      title: 'Compliance & Governance',
      description: 'Ensure compliance with SOC 2, ISO 27001, GDPR, HIPAA, and other standards',
      price: 'From $3,500/month',
      features: ['Compliance monitoring', 'Policy management', 'Audit preparation', 'Training programs']
    },
    {
      title: 'Security Operations Center',
      description: '24/7 managed security services with AI-powered threat intelligence',
      price: 'From $8,000/month',
      features: ['24/7 monitoring', 'Threat intelligence', 'Incident response', 'Security consulting']
    }
  ];

  const securityModules = [
    {
      title: 'Network Security',
      icon: Network,
      description: 'Advanced firewall, intrusion detection, and network segmentation',
      features: ['Next-gen firewalls', 'IDS/IPS', 'Network segmentation', 'DDoS protection']
    },
    {
      title: 'Endpoint Security',
      icon: Laptop,
      description: 'Comprehensive endpoint protection with AI-powered threat prevention',
      features: ['Antivirus/antimalware', 'EDR solutions', 'Device control', 'Application whitelisting']
    },
    {
      title: 'Cloud Security',
      icon: Cloud,
      description: 'Multi-cloud security with automated compliance and threat detection',
      features: ['CSPM', 'Cloud DLP', 'Identity management', 'Compliance monitoring']
    },
    {
      title: 'Data Protection',
      icon: Database,
      description: 'Data loss prevention, encryption, and backup security',
      features: ['DLP solutions', 'Encryption', 'Backup security', 'Data classification']
    }
  ];

  const complianceStandards = [
    { name: 'SOC 2 Type II', icon: '🔒', status: 'Certified', description: 'Security, availability, and confidentiality controls' },
    { name: 'ISO 27001', icon: '🛡️', status: 'Compliant', description: 'Information security management system' },
    { name: 'GDPR', icon: '🇪🇺', status: 'Compliant', description: 'Data protection and privacy regulations' },
    { name: 'HIPAA', icon: '🏥', status: 'Compliant', description: 'Healthcare data protection standards' },
    { name: 'PCI DSS', icon: '💳', status: 'Compliant', description: 'Payment card industry security standards' },
    { name: 'NIST', icon: '🇺🇸', status: 'Aligned', description: 'Cybersecurity framework alignment' }
  ];

  const threatIntelligence = [
    {
      category: 'Ransomware Protection',
      description: 'Advanced ransomware detection and prevention with automated recovery',
      icon: Bug,
      features: ['Behavioral analysis', 'File monitoring', 'Backup protection', 'Recovery automation']
    },
    {
      category: 'Phishing Defense',
      description: 'AI-powered email security with advanced threat detection',
      icon: MessageSquare,
      features: ['Email filtering', 'Link analysis', 'Attachment scanning', 'User training']
    },
    {
      category: 'Insider Threat Detection',
      description: 'Monitor and detect malicious insider activities',
      icon: UserCheck,
      features: ['User behavior analytics', 'Access monitoring', 'Anomaly detection', 'Risk scoring']
    },
    {
      category: 'IoT Security',
      description: 'Secure connected devices and IoT infrastructure',
      icon: Smartphone,
      features: ['Device authentication', 'Traffic monitoring', 'Firmware updates', 'Vulnerability management']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Cybersecurity Suite - Zion Tech Group"
        description="Advanced AI-powered cybersecurity solutions with threat detection, compliance management, and 24/7 protection. Secure your digital assets with cutting-edge security technology."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity Suite
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Protect your digital assets with AI-powered threat detection, advanced encryption, and comprehensive security monitoring
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 border border-red-400 text-red-400 rounded-lg hover:bg-red-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Security Assessment
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300">
              Cutting-edge cybersecurity technology powered by artificial intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-red-500/50 transition-colors"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Services & Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive cybersecurity solutions for businesses of all sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-red-500/50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-red-400 mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Modules */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Modules
            </h2>
            <p className="text-xl text-gray-300">
              Protect every aspect of your digital infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{module.description}</p>
                <ul className="space-y-2">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <ArrowRight className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Compliance & Standards
            </h2>
            <p className="text-xl text-gray-300">
              Meet and exceed industry security standards and regulations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 text-center hover:border-red-500/50 transition-colors"
              >
                <div className="text-3xl mb-3">{standard.icon}</div>
                <div className="text-lg font-semibold text-white mb-2">{standard.name}</div>
                <div className="text-sm text-green-400 mb-3">{standard.status}</div>
                <p className="text-sm text-gray-300">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Intelligence */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Threat Intelligence
            </h2>
            <p className="text-xl text-gray-300">
              Stay ahead of emerging threats with AI-powered intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {threatIntelligence.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <threat.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{threat.category}</h3>
                </div>
                <p className="text-gray-300 mb-4">{threat.description}</p>
                <ul className="space-y-2">
                  {threat.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <ShieldCheck className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Secure Your Digital Future Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for a security breach. Protect your business with AI-powered cybersecurity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
              >
                <Phone className="w-6 h-6 mr-2" />
                Call Now: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-red-400 text-red-400 rounded-lg hover:bg-red-400 hover:text-white transition-colors text-lg font-semibold"
              >
                <Mail className="w-6 h-6 mr-2" />
                Get Security Assessment
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
              <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
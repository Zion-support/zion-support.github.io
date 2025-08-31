import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  Users,
  Database,
  Network,
  Server,
  Smartphone,
  Cloud,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  DollarSign,
  Clock,
  MessageCircle,
  FileText,
  BarChart3,
  Workflow,
  Zap,
  Brain,
  Rocket,
  Target,
  Building2,
  Globe,
  Cpu,
  ShieldCheck,
  Fingerprint,
  Key,
  Monitor,
  Activity,
  AlertCircle,
  ShieldX,
  LockKeyhole
} from 'lucide-react';

export default function Cybersecurity() {
  const services = [
    {
      title: 'Zero Trust Security',
      description: 'Implement comprehensive zero-trust security architecture',
      icon: ShieldCheck,
      features: [
        'Identity verification',
        'Multi-factor authentication',
        'Continuous monitoring',
        'Least privilege access',
        'Micro-segmentation'
      ],
      benefits: [
        'Enhanced security posture',
        'Reduced attack surface',
        'Improved compliance',
        'Better user experience'
      ]
    },
    {
      title: 'SOC 2 Compliance',
      description: 'Achieve and maintain SOC 2 Type II compliance',
      icon: Award,
      features: [
        'Security assessment',
        'Policy development',
        'Control implementation',
        'Audit preparation',
        'Ongoing monitoring'
      ],
      benefits: [
        'Customer trust',
        'Competitive advantage',
        'Risk mitigation',
        'Operational excellence'
      ]
    },
    {
      title: 'Threat Detection & Response',
      description: 'Advanced threat detection and automated response systems',
      icon: Eye,
      features: [
        'Real-time monitoring',
        'AI-powered detection',
        'Automated response',
        'Incident management',
        'Forensic analysis'
      ],
      benefits: [
        'Faster threat response',
        'Reduced damage',
        'Improved visibility',
        'Proactive security'
      ]
    },
    {
      title: 'Identity & Access Management',
      description: 'Comprehensive identity and access control solutions',
      icon: Users,
      features: [
        'Single sign-on (SSO)',
        'Role-based access control',
        'Privileged access management',
        'Identity governance',
        'Lifecycle management'
      ],
      benefits: [
        'Improved security',
        'User productivity',
        'Compliance adherence',
        'Cost reduction'
      ]
    },
    {
      title: 'Data Protection & Encryption',
      description: 'End-to-end data protection and encryption solutions',
      icon: Lock,
      features: [
        'Data classification',
        'Encryption at rest',
        'Encryption in transit',
        'Key management',
        'Data loss prevention'
      ],
      benefits: [
        'Data confidentiality',
        'Regulatory compliance',
        'Customer trust',
        'Risk reduction'
      ]
    },
    {
      title: 'Security Automation',
      description: 'Automate security operations and response',
      icon: Zap,
      features: [
        'Security orchestration',
        'Automated remediation',
        'Workflow automation',
        'Integration services',
        'Performance analytics'
      ],
      benefits: [
        'Faster response times',
        'Reduced manual effort',
        'Improved accuracy',
        '24/7 protection'
      ]
    }
  ];

  const threats = [
    'Ransomware Attacks',
    'Phishing Campaigns',
    'Data Breaches',
    'Insider Threats',
    'DDoS Attacks',
    'Advanced Persistent Threats',
    'Supply Chain Attacks',
    'Social Engineering'
  ];

  const benefits = [
    {
      title: 'Protection',
      description: 'Comprehensive protection against cyber threats',
      icon: Shield
    },
    {
      title: 'Compliance',
      description: 'Meet regulatory and industry requirements',
      icon: Award
    },
    {
      title: 'Trust',
      description: 'Build customer and partner confidence',
      icon: Users
    },
    {
      title: 'Resilience',
      description: 'Maintain operations during attacks',
      icon: Target
    }
  ];

  const industries = [
    'Financial Services',
    'Healthcare',
    'Manufacturing',
    'Retail',
    'Technology',
    'Government',
    'Education',
    'Energy'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cybersecurity
            <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent"> Services</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Protect your business with enterprise-grade cybersecurity solutions. From threat detection 
            to compliance management, we provide comprehensive security that keeps you safe.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Protected</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
              <Link
                to="/comprehensive-pricing-guide-2025"
                className="px-8 py-4 border border-red-500/30 text-red-400 rounded-lg font-semibold hover:bg-red-500/10 transition-all duration-300"
              >
                View Pricing
              </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From proactive threat prevention to incident response, we provide end-to-end 
              cybersecurity solutions that protect your business and ensure compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <Star className="w-4 h-4 text-orange-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Threats We Protect Against
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern businesses face sophisticated cyber threats. Our solutions provide 
              comprehensive protection against all types of attacks.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {threats.map((threat, index) => (
              <motion.div
                key={threat}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 text-center hover:border-red-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover:text-red-300 transition-colors" />
                <h3 className="text-white font-medium group-hover:text-red-400 transition-colors text-sm">
                  {threat}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Cybersecurity?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide enterprise-grade security solutions that protect your business, 
              ensure compliance, and build customer trust.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We understand the unique security challenges and compliance requirements 
              of different industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 text-center hover:border-red-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Building2 className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover:text-red-300 transition-colors" />
                <h3 className="text-white font-medium group-hover:text-red-400 transition-colors text-sm">
                  {industry}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600/20 to-orange-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our cybersecurity solutions can protect your business, 
              ensure compliance, and build customer trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 border border-red-500/30 text-red-400 rounded-lg font-semibold hover:bg-red-500/10 transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                <span>View Case Studies</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
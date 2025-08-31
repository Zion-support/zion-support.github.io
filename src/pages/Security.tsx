<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Users, Database, Globe, AlertTriangle, CheckCircle, Key, Server, Network, Zap } from 'lucide-react';

const Security: React.FC = () => {
  const lastUpdated = "January 15, 2025";

=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Shield, 
  Lock, 
  Eye, 
  Key, 
  Server, 
  Users, 
  CheckCircle, 
  AlertTriangle,
  FileText,
  Globe,
  Database,
  Network,
  Zap,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Mail
} from 'lucide-react';
export default function Security() {
  const [expandedCompliance, setExpandedCompliance] = useState<string | null>(null);
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
  const securityFeatures = [
    {
      category: "Data Protection",
      icon: Shield,
      features: [
        "End-to-end encryption for all data",
        "Secure data centers with 99.99% uptime",
        "Regular security audits and penetration testing",
        "Compliance with industry security standards"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Access Control",
      icon: Lock,
      features: [
        "Multi-factor authentication (MFA)",
        "Role-based access control (RBAC)",
        "Single sign-on (SSO) integration",
        "Session management and timeout controls"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Network Security",
      icon: Network,
      features: [
        "DDoS protection and mitigation",
        "Web application firewall (WAF)",
        "Intrusion detection and prevention",
        "Secure VPN and remote access"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Monitoring & Response",
      icon: Eye,
      features: [
        "24/7 security monitoring",
        "Real-time threat detection",
        "Incident response procedures",
        "Security event logging and analysis"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];
<<<<<<< HEAD

  const complianceStandards = [
=======
  const complianceFrameworks = [
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    {
      standard: "ISO 27001",
      description: "Information Security Management System certification",
      status: "Certified",
      color: "bg-green-500/20 text-green-400 border-green-500/30"
    },
    {
      standard: "SOC 2 Type II",
      description: "Service Organization Control 2 compliance",
      status: "Compliant",
      color: "bg-green-500/20 text-green-400 border-green-500/30"
    },
    {
      standard: "GDPR",
      description: "General Data Protection Regulation compliance",
      status: "Compliant",
      color: "bg-green-500/20 text-green-400 border-green-500/30"
    },
    {
      standard: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      status: "Compliant",
      color: "bg-green-500/20 text-green-400 border-green-500/30"
    },
    {
      standard: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      status: "Compliant",
      color: "bg-green-500/20 text-green-400 border-green-500/30"
    }
  ];
<<<<<<< HEAD

  const securityMeasures = [
=======
  const securityMetrics = [
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    {
      name: "Encryption",
      description: "AES-256 encryption for data at rest and in transit",
      icon: Key
    },
    {
<<<<<<< HEAD
      name: "Firewall Protection",
      description: "Next-generation firewalls with advanced threat protection",
=======
      metric: '< 50ms',
      label: 'Response Time',
      description: 'Average threat response time'
    },
    {
      metric: '0',
      label: 'Data Breaches',
      description: 'Successful breaches in 5+ years'
    },
    {
      metric: '24/7',
      label: 'Monitoring',
      description: 'Continuous security monitoring'
    }
  ];
  const bestPractices = [
    {
      title: 'Regular Security Training',
      description: 'Ongoing security awareness training for all employees',
      icon: Users
    },
    {
      title: 'Security Assessments',
      description: 'Regular penetration testing and vulnerability assessments',
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
      icon: Shield
    },
    {
      name: "Intrusion Detection",
      description: "AI-powered threat detection and response systems",
      icon: Eye
    },
    {
      name: "Backup & Recovery",
      description: "Automated backup systems with disaster recovery plans",
      icon: Server
    }
  ];
<<<<<<< HEAD

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
  const toggleCompliance = (name: string) => {
    setExpandedCompliance(expandedCompliance === name ? null : name);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Security & Compliance - Zion Tech Group"
        description="Learn about Zion Tech Group's comprehensive security measures, compliance certifications, and data protection practices."
      />
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-cyan-400" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Security &
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Compliance
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Your security is our priority. We implement enterprise-grade security measures to protect your data and ensure compliance with industry standards.
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <Shield className="w-5 h-5" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-16">
            {/* Security Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Security Commitment
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                At Zion Tech Group, we understand that security is not just a feature—it's a fundamental requirement. 
                We employ industry-leading security practices, technologies, and processes to ensure the confidentiality, 
                integrity, and availability of your data and systems.
              </p>
            </motion.div>

            {/* Security Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Comprehensive Security Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {securityFeatures.map((category, index) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                    <ul className="space-y-3">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Compliance Standards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Security Compliance & Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {complianceStandards.map((standard, index) => (
                  <motion.div
                    key={standard.standard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">{standard.standard}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${standard.color}`}>
                        {standard.status}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{standard.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Security Measures */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Advanced Security Measures
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {securityMeasures.map((measure, index) => (
                  <motion.div
                    key={measure.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                        <measure.icon className="w-6 h-6 text-cyan-400" />
                      </div>
=======
      {/* Security Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50">
                  <div className="text-4xl font-bold text-white mb-2">{metric.metric}</div>
                  <div className="text-lg font-semibold text-cyan-400 mb-2">{metric.label}</div>
                  <div className="text-gray-300 text-sm">{metric.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Security Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Security Features</h2>
            <p className="text-xl text-gray-300">
              Multi-layered security approach to protect your data and systems
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-red-400/50 transition-all duration-300 hover:scale-105 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl mb-6">
                    <feature.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Compliance Frameworks */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Compliance & Certifications</h2>
            <p className="text-xl text-gray-300">
              We maintain the highest standards of compliance across multiple frameworks
            </p>
          </motion.div>
          <div className="space-y-6">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 overflow-hidden"
              >
                <div 
                  className="p-6 cursor-pointer hover:bg-slate-700/30 transition-colors duration-200"
                  onClick={() => toggleCompliance(framework.name)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <framework.icon className={`w-6 h-6 ${framework.color} mr-4`} />
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{measure.name}</h3>
                        <p className="text-gray-300 text-sm">{measure.description}</p>
                      </div>
                    </div>
<<<<<<< HEAD
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Data Protection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Database className="w-6 h-6 text-cyan-400 mr-3" />
                Data Protection & Privacy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Data Encryption</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>AES-256 encryption for data at rest</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>TLS 1.3 encryption for data in transit</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>End-to-end encryption for sensitive communications</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Key management and rotation policies</span>
                    </li>
                  </ul>
=======
                    <div className="flex items-center">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full mr-4">
                        {framework.status}
                      </span>
                      {expandedCompliance === framework.name ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
                {expandedCompliance === framework.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 border-t border-slate-600/50"
                  >
                    <div className="pt-4">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Requirements:</h4>
                      <ul className="space-y-2">
                        {framework.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Best Practices */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Security Best Practices</h2>
            <p className="text-xl text-gray-300">
              We follow industry-leading security practices to ensure your protection
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bestPractices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl mr-4 flex-shrink-0">
                  <practice.icon className="w-6 h-6 text-red-400" />
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Privacy Controls</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Granular access controls and permissions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Data anonymization and pseudonymization</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Right to be forgotten implementation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Transparent data processing practices</span>
                    </li>
                  </ul>
                </div>
<<<<<<< HEAD
              </div>
            </motion.div>

            {/* Incident Response */}
=======
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Security Resources */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Security Resources</h2>
            <p className="text-xl text-gray-300">
              Access our security documentation and resources
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group"
            >
              <a href="/help/security/whitepaper" className="block">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-red-400/50 transition-all duration-300 hover:scale-105 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl mb-6">
                    <FileText className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-200">
                    Security Whitepaper
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Detailed overview of our security architecture and practices
                  </p>
                  <div className="flex items-center text-red-400 group-hover:text-red-300 transition-colors duration-200">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </a>
            </motion.div>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
                Incident Response & Recovery
              </h2>
              <p className="text-gray-300 mb-6">
                We maintain comprehensive incident response procedures to quickly identify, contain, and resolve security incidents.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Detection</h3>
                  <p className="text-gray-300 text-sm">24/7 monitoring and automated threat detection</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Response</h3>
                  <p className="text-gray-300 text-sm">Immediate incident containment and investigation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Recovery</h3>
                  <p className="text-gray-300 text-sm">System restoration and lessons learned analysis</p>
                </div>
              </div>
            </motion.div>
<<<<<<< HEAD

            {/* Security Best Practices */}
=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Users className="w-6 h-6 text-cyan-400 mr-3" />
                Security Best Practices for Users
              </h2>
              <p className="text-gray-300 mb-6">
                While we implement robust security measures, users also play a crucial role in maintaining security. 
                Here are some best practices to follow:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Account Security</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Use strong, unique passwords</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Enable multi-factor authentication</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Regular password updates</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Monitor account activity</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Data Handling</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Don't share sensitive information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Use secure networks only</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Report suspicious activity</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Keep software updated</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Security Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Globe className="w-6 h-6 text-cyan-400 mr-3" />
                Security Updates & Maintenance
              </h2>
              <p className="text-gray-300 mb-6">
                We continuously monitor and update our security measures to address emerging threats and maintain the highest security standards.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Regular Updates</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Security patches and updates</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Vulnerability assessments</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Penetration testing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Security policy reviews</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Monitoring & Alerts</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Real-time security monitoring</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Automated threat detection</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Security incident alerts</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Performance and availability monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Contact Security Team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 text-cyan-400 mr-3" />
                Security Support & Reporting
              </h2>
              <p className="text-gray-300 mb-6">
                If you have security concerns, need assistance, or want to report a security incident, 
                our dedicated security team is here to help.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Security Incidents</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Email: security@ziontechgroup.com</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Phone: +1 302 464 0950 (Security Hotline)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>24/7 emergency response available</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">General Security Questions</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Email: security-support@ziontechgroup.com</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Response within 24 hours</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Security documentation available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                <p className="text-cyan-400 text-sm">
                  <strong>Security Response Time:</strong> We aim to respond to security incidents within 1 hour and provide regular updates on resolution progress.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======
      {/* Contact Security Team */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Questions About Security?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our security team is available to answer your questions and provide 
              detailed information about our security measures and compliance status.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:security@ziontechgroup.com"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-400 to-orange-500 text-white font-semibold rounded-lg hover:from-red-500 hover:to-orange-600 transition-all duration-200 hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Security Team
              </a>
              <a
                href="/help/security"
                className="inline-flex items-center px-8 py-3 border border-red-400 text-red-400 font-semibold rounded-lg hover:bg-red-400 hover:text-white transition-all duration-200"
              >
                <FileText className="w-5 h-5 mr-2" />
                Security Documentation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    </div>
  );
};

export default Security;

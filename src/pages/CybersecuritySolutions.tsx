import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Zap,
  Network,
  Database,
  Smartphone,
  Monitor,
  Globe,
  Users,
  Key,
  Fingerprint,
  Server,
  Cloud,
  ShieldCheck,
  Bug,
  Target,
  TrendingUp,
  Clock,
  BarChart3,
  CreditCard
} from 'lucide-react';

export default function CybersecuritySolutions() {
  const [selectedThreat, setSelectedThreat] = useState('all');
  const [activeService, setActiveService] = useState('overview');

  const securityServices = [
    {
      icon: Shield,
      title: "Threat Detection & Response",
      description: "Advanced security monitoring and incident response to protect against cyber threats",
      features: ["24/7 Monitoring", "Real-time Alerts", "Incident Response", "Threat Intelligence"],
      color: "from-zion-red to-zion-orange"
    },
    {
      icon: Lock,
      title: "Identity & Access Management",
      description: "Secure authentication and authorization systems for your organization",
      features: ["Multi-Factor Authentication", "Single Sign-On", "Role-Based Access", "Privilege Management"],
      color: "from-zion-blue to-zion-cyan"
    },
    {
      icon: Eye,
      title: "Security Auditing & Compliance",
      description: "Comprehensive security assessments and compliance management",
      features: ["Vulnerability Assessment", "Penetration Testing", "Compliance Audits", "Risk Assessment"],
      color: "from-zion-purple to-zion-pink"
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Protect your network infrastructure with advanced security measures",
      features: ["Firewall Management", "Intrusion Prevention", "VPN Solutions", "Network Monitoring"],
      color: "from-zion-green to-zion-emerald"
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Safeguard sensitive data with encryption and backup solutions",
      features: ["Data Encryption", "Backup & Recovery", "Data Loss Prevention", "Privacy Compliance"],
      color: "from-zion-yellow to-zion-orange"
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Secure your cloud infrastructure and applications",
      features: ["Cloud Access Security", "API Security", "Container Security", "Cloud Compliance"],
      color: "from-zion-indigo to-zion-purple"
    }
  ];

  const threatTypes = [
    { id: 'all', name: 'All Threats', icon: Shield },
    { id: 'malware', name: 'Malware', icon: Bug },
    { id: 'phishing', name: 'Phishing', icon: Target },
    { id: 'ransomware', name: 'Ransomware', icon: Lock },
    { id: 'ddos', name: 'DDoS Attacks', icon: Network },
    { id: 'insider', name: 'Insider Threats', icon: Users }
  ];

  const securityThreats = [
    {
      title: "Advanced Persistent Threats (APTs)",
      description: "Sophisticated, long-term cyber attacks targeting specific organizations",
      type: "malware",
      impact: "High",
      solutions: ["Advanced Threat Detection", "Behavioral Analysis", "Network Segmentation", "Incident Response"],
      icon: Target
    },
    {
      title: "Ransomware Attacks",
      description: "Malicious software that encrypts data and demands payment for decryption",
      type: "ransomware",
      impact: "Critical",
      solutions: ["Backup Solutions", "Email Security", "User Training", "Rapid Recovery"],
      icon: Lock
    },
    {
      title: "Social Engineering",
      description: "Manipulation tactics to trick users into revealing sensitive information",
      type: "phishing",
      impact: "Medium",
      solutions: ["Security Awareness Training", "Email Filtering", "Multi-Factor Authentication", "Incident Reporting"],
      icon: Users
    },
    {
      title: "Distributed Denial of Service",
      description: "Overwhelming systems with traffic to disrupt services",
      type: "ddos",
      impact: "Medium",
      solutions: ["DDoS Protection", "Traffic Filtering", "Load Balancing", "CDN Services"],
      icon: Network
    },
    {
      title: "Insider Threats",
      description: "Security risks from employees or contractors with access to systems",
      type: "insider",
      impact: "High",
      solutions: ["Access Monitoring", "Privilege Management", "Behavioral Analytics", "Regular Audits"],
      icon: Shield
    },
    {
      title: "Zero-Day Exploits",
      description: "Unknown vulnerabilities exploited before security patches are available",
      type: "malware",
      impact: "Critical",
      solutions: ["Threat Intelligence", "Vulnerability Management", "Security Monitoring", "Rapid Patching"],
      icon: Bug
    }
  ];

  const complianceFrameworks = [
    {
      name: "SOC 2 Type II",
      description: "Service Organization Control 2 compliance for data security",
      requirements: ["Security", "Availability", "Processing Integrity", "Confidentiality", "Privacy"],
      icon: ShieldCheck
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management",
      requirements: ["Risk Assessment", "Security Controls", "Management System", "Continuous Improvement"],
      icon: CheckCircle
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation for EU data privacy",
      requirements: ["Data Protection", "User Consent", "Right to Erasure", "Data Portability"],
      icon: Lock
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      requirements: ["Patient Privacy", "Data Security", "Access Controls", "Audit Trails"],
      icon: Database
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      requirements: ["Card Data Protection", "Network Security", "Access Control", "Monitoring"],
      icon: CreditCard
    },
    {
      name: "NIST Cybersecurity Framework",
      description: "U.S. government framework for cybersecurity risk management",
      requirements: ["Identify", "Protect", "Detect", "Respond", "Recover"],
      icon: BarChart3
    }
  ];

  const securityMetrics = [
    { metric: "99.9%", label: "Uptime Protection", description: "Continuous security monitoring and protection" },
    { metric: "<1hr", label: "Response Time", description: "Average time to detect and respond to threats" },
    { metric: "0", label: "Data Breaches", description: "Successful breaches prevented for our clients" },
    { metric: "24/7", label: "Security Coverage", description: "Round-the-clock security operations" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const filteredThreats = selectedThreat === 'all'
    ? securityThreats
    : securityThreats.filter(threat => threat.type === selectedThreat);

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-red-dark to-zion-red overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-red rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-orange rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-zion-red to-zion-orange rounded-2xl flex items-center justify-center">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Cybersecurity{' '}
              <span className="bg-gradient-to-r from-zion-red to-zion-orange bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
              Protect your business with enterprise-grade cybersecurity solutions.
              From threat detection to compliance management, we keep you secure in an evolving digital landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-zion-red to-zion-orange text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-red/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Security Assessment
              </motion.button>
              <button className="px-8 py-4 border border-zion-red text-zion-red rounded-xl font-semibold text-lg hover:bg-zion-red hover:text-white transition-all duration-300">
                View Security Report
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Services Overview */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our cybersecurity solutions provide end-to-end protection for your digital assets,
              ensuring business continuity and regulatory compliance.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {securityServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Understanding Cyber Threats
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Stay informed about the latest cybersecurity threats and learn how our solutions
              protect against evolving attack vectors.
            </p>
          </motion.div>

          {/* Threat Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {threatTypes.map((threat) => {
              const Icon = threat.icon;
              return (
                <button
                  key={threat.id}
                  onClick={() => setSelectedThreat(threat.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedThreat === threat.id
                      ? 'bg-zion-red text-white shadow-lg shadow-zion-red/25'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark hover:text-white border border-zion-red/20'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {threat.name}
                </button>
              );
            })}
          </motion.div>

          {/* Threats Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredThreats.map((threat, index) => (
              <motion.div
                key={index}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-red to-zion-orange rounded-xl flex items-center justify-center">
                      <threat.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{threat.title}</h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    threat.impact === 'Critical' ? 'bg-red-500/20 text-red-400' :
                    threat.impact === 'High' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {threat.impact}
                  </span>
                </div>

                <p className="text-zion-slate-light mb-4 leading-relaxed">{threat.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-zion-cyan text-sm">Protection Solutions:</h4>
                  <ul className="space-y-1">
                    {threat.solutions.map((solution, idx) => (
                      <li key={idx} className="text-zion-slate-light text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2 flex-shrink-0"></div>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Compliance & Standards
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Meet industry standards and regulatory requirements with our comprehensive
              compliance management solutions.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <framework.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 text-center">{framework.name}</h3>
                <p className="text-zion-slate-light mb-6 text-center leading-relaxed">{framework.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-zion-cyan text-sm">Key Requirements:</h4>
                  <ul className="space-y-1">
                    {framework.requirements.map((req, idx) => (
                      <li key={idx} className="text-zion-slate-light text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2 flex-shrink-0"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security Metrics */}
      <section className="py-20 bg-gradient-to-r from-zion-red-dark to-zion-orange">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Security Performance Metrics
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our cybersecurity solutions deliver measurable results and provide
              peace of mind through proven protection capabilities.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {securityMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl font-bold text-white">{metric.metric}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{metric.label}</h3>
                <p className="text-zion-slate-light">{metric.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security Process */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Security Implementation Process
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A systematic approach to implementing comprehensive cybersecurity solutions
              that protect your business from evolving threats.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                step: "01",
                title: "Security Assessment",
                description: "Evaluate current security posture and identify vulnerabilities",
                icon: Eye
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Design comprehensive security roadmap and policies",
                icon: Target
              },
              {
                step: "03",
                title: "Implementation",
                description: "Deploy security solutions and configure protection systems",
                icon: Shield
              },
              {
                step: "04",
                title: "Monitoring & Maintenance",
                description: "Continuous security monitoring and regular updates",
                icon: Monitor
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
              >
                <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-red to-zion-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-zion-red mb-2">{phase.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-zion-slate-light leading-relaxed">{phase.description}</p>
                </div>

                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-zion-red" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-red-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Don't wait for a security breach. Let's discuss how our cybersecurity solutions
              can protect your organization from evolving threats.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-zion-red to-zion-orange text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-red/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Security Assessment
              </motion.button>
              <button className="px-8 py-4 border border-zion-red text-zion-red rounded-xl font-semibold text-lg hover:bg-zion-red hover:text-white transition-all duration-300">
                Download Security Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
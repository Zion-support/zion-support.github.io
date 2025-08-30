import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  Zap,
  Target,
  TrendingUp,
  Users,
  Lock,
  Cpu,
  Rocket,
  Eye,
  Activity,
  Code,
  Database,
  Server,
  Network,
  BarChart3,
  Heart,
  Building,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Play,
  ChevronRight,
  Brain,
  AlertTriangle,
  Key,
  Fingerprint,
  Monitor,
  Search,
  FileText
} from 'lucide-react';

export default function CybersecurityPage() {
  const securityServices = [
    {
      title: 'AI Cybersecurity Platform',
      description: 'Advanced threat detection and response powered by artificial intelligence',
      icon: Brain,
      href: '/services/ai-cybersecurity-platform',
      features: ['AI Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Threat Intelligence'],
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Zero Trust Network Access',
      description: 'Secure network access with continuous verification and least privilege principles',
      icon: Lock,
      href: '/services/zero-trust-network-access',
      features: ['Identity Verification', 'Continuous Monitoring', 'Least Privilege Access', 'Micro-segmentation'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Security Headers & CSP',
      description: 'Protect web applications with advanced security headers and content security policies',
      icon: Shield,
      href: '/services/security-headers-csp',
      features: ['XSS Protection', 'CSRF Prevention', 'Content Security Policy', 'HTTPS Enforcement'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'AI Compliance Assistant',
      description: 'Automated compliance monitoring and reporting for regulatory requirements',
      icon: FileText,
      href: '/services/ai-compliance-assistant',
      features: ['GDPR Compliance', 'SOC2 Monitoring', 'HIPAA Security', 'PCI DSS Validation'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Incident Response Platform',
      description: 'Rapid response and recovery from security incidents and breaches',
      icon: AlertTriangle,
      href: '/services/incident-response-platform',
      features: ['24/7 Monitoring', 'Automated Alerts', 'Incident Playbooks', 'Forensic Analysis'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'AI Penetration Testing',
      description: 'Comprehensive security testing using AI-powered vulnerability assessment',
      icon: Search,
      href: '/services/ai-penetration-testing',
      features: ['Automated Scanning', 'Vulnerability Assessment', 'Social Engineering', 'Red Team Operations'],
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const securityCapabilities = [
    {
      title: 'Threat Detection',
      description: 'Advanced threat detection using AI and machine learning',
      icon: Eye,
      features: ['Behavioral Analysis', 'Anomaly Detection', 'Signature-based Detection', 'Real-time Monitoring']
    },
    {
      title: 'Incident Response',
      description: 'Rapid response and recovery from security incidents',
      icon: AlertTriangle,
      features: ['Automated Response', 'Incident Playbooks', 'Forensic Analysis', 'Recovery Procedures']
    },
    {
      title: 'Compliance Management',
      description: 'Ensure compliance with industry standards and regulations',
      icon: FileText,
      features: ['GDPR', 'SOC2', 'HIPAA', 'PCI DSS', 'ISO 27001']
    },
    {
      title: 'Security Architecture',
      description: 'Design and implement secure infrastructure and applications',
      icon: Building,
      features: ['Zero Trust Architecture', 'Defense in Depth', 'Secure SDLC', 'Cloud Security']
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: Heart, description: 'HIPAA compliance and patient data protection' },
    { name: 'Finance', icon: Building, description: 'PCI DSS and financial data security' },
    { name: 'Government', icon: Shield, description: 'FedRAMP and government security standards' },
    { name: 'Retail', icon: Globe, description: 'E-commerce security and customer data protection' },
    { name: 'Manufacturing', icon: Cpu, description: 'Industrial control system security' },
    { name: 'Education', icon: Users, description: 'FERPA compliance and student data protection' }
  ];

  const threatLandscape = [
    { name: 'Ransomware', icon: Lock, description: 'Data encryption and extortion attacks' },
    { name: 'Phishing', icon: Users, description: 'Social engineering and credential theft' },
    { name: 'DDoS', icon: Network, description: 'Distributed denial of service attacks' },
    { name: 'Insider Threats', icon: User, description: 'Internal security risks and data breaches' },
    { name: 'Supply Chain', icon: Globe, description: 'Third-party vendor security risks' },
    { name: 'Cloud Security', icon: Cloud, description: 'Cloud infrastructure and application security' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-red-400 to-orange-500 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Cybersecurity
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Protect your digital assets with cutting-edge cybersecurity solutions that detect, prevent, 
              and respond to evolving threats in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-200 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/solutions"
                className="border border-red-500 text-red-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                View Solutions
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Cybersecurity Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive security solutions designed to protect your organization from evolving cyber threats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-red-400 hover:text-red-300 font-medium group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Security Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive security capabilities designed to protect your organization at every level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                    <capability.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">{capability.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{capability.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {capability.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Industries We Protect</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our cybersecurity solutions are tailored to meet the unique security requirements of diverse industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-red-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                <p className="text-gray-400 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Current Threat Landscape</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Stay informed about the latest cybersecurity threats and how we protect against them.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threatLandscape.map((threat, index) => (
              <motion.div
                key={threat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-red-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <threat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{threat.name}</h3>
                <p className="text-gray-400 text-sm">{threat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Framework */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Security Framework</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive approach to cybersecurity that protects your organization at every level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Prevent</h3>
              <p className="text-gray-400 mb-6">
                Proactive security measures to prevent threats before they can impact your organization.
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  Security Awareness Training
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  Vulnerability Management
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  Access Control
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm border border-red-500/50 rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Detect</h3>
              <p className="text-gray-400 mb-6">
                Advanced monitoring and detection systems to identify threats in real-time.
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                  24/7 Monitoring
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                  AI Threat Detection
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                  Behavioral Analysis
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Respond</h3>
              <p className="text-gray-400 mb-6">
                Rapid response and recovery procedures to minimize impact and restore operations.
              </p>
              <ul className="text-left space-y-2">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  Incident Response
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  Automated Recovery
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  Business Continuity
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 via-orange-900/20 to-yellow-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Organization?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our cybersecurity solutions can protect your digital assets and ensure business continuity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-200 flex items-center justify-center group"
              >
                Schedule a Security Audit
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-red-500 text-red-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                View Security Case Studies
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, Eye, Server, Network, Database, Users, 
  Building, Heart, Truck, Car, Rocket, Atom, Lightbulb, 
  TrendingUp, Code, Palette, Target, Clock, Star, Globe, 
  FileText, Calendar, Video, Zap, CheckCircle, ArrowRight, 
  ChevronDown, ChevronRight, Phone, Mail, MapPin, Linkedin, 
  Twitter, Github, Youtube, Facebook, Instagram, AlertTriangle,
  Key, Fingerprint, Bug, Wifi, HardDrive, Cloud, Cpu
} from 'lucide-react';

const Cybersecurity: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const securityServices = [
    {
      title: 'Threat Detection & Response',
      icon: Eye,
      description: 'Advanced threat detection and incident response services',
      color: 'from-red-500 to-orange-500',
      services: [
        { name: 'AI-Powered Threat Detection', path: '/ai-autonomous-security', description: 'Intelligent threat detection' },
        { name: '24/7 Security Monitoring', path: '/security-monitoring', description: 'Round-the-clock security oversight' },
        { name: 'Incident Response', path: '/incident-response', description: 'Rapid response to security incidents' },
        { name: 'Threat Intelligence', path: '/threat-intelligence', description: 'Real-time threat intelligence' },
        { name: 'Security Analytics', path: '/security-analytics', description: 'Advanced security analytics' },
        { name: 'Behavioral Analysis', path: '/behavioral-analysis', description: 'User and system behavior monitoring' }
      ]
    },
    {
      title: 'Network Security',
      icon: Network,
      description: 'Comprehensive network security and protection',
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Zero Trust Architecture', path: '/zero-trust-network-architecture', description: 'Zero trust security model' },
        { name: 'Firewall Management', path: '/firewall-management', description: 'Advanced firewall solutions' },
        { name: 'VPN & Remote Access', path: '/vpn-remote-access', description: 'Secure remote access solutions' },
        { name: 'Network Segmentation', path: '/network-segmentation', description: 'Network isolation and segmentation' },
        { name: 'Intrusion Prevention', path: '/intrusion-prevention', description: 'Active threat prevention' },
        { name: 'DDoS Protection', path: '/ddos-protection', description: 'Distributed denial of service protection' }
      ]
    },
    {
      title: 'Data Protection & Privacy',
      icon: Database,
      description: 'Data security, encryption, and privacy compliance',
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Data Encryption', path: '/data-encryption', description: 'End-to-end data encryption' },
        { name: 'Data Loss Prevention', path: '/data-loss-prevention', description: 'Prevent data breaches' },
        { name: 'Privacy Compliance', path: '/privacy-compliance', description: 'GDPR, CCPA compliance' },
        { name: 'Data Classification', path: '/data-classification', description: 'Intelligent data categorization' },
        { name: 'Backup & Recovery', path: '/backup-recovery', description: 'Secure data backup solutions' },
        { name: 'Data Governance', path: '/data-governance', description: 'Data management policies' }
      ]
    },
    {
      title: 'Identity & Access Management',
      icon: Key,
      description: 'Secure identity verification and access control',
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'Multi-Factor Authentication', path: '/mfa-solutions', description: 'Enhanced authentication security' },
        { name: 'Single Sign-On (SSO)', path: '/sso-solutions', description: 'Unified access management' },
        { name: 'Privileged Access Management', path: '/pam-solutions', description: 'Admin access control' },
        { name: 'Identity Governance', path: '/identity-governance', description: 'Identity lifecycle management' },
        { name: 'Biometric Authentication', path: '/biometric-auth', description: 'Advanced biometric security' },
        { name: 'Role-Based Access Control', path: '/rbac-solutions', description: 'Granular access permissions' }
      ]
    },
    {
      title: 'Compliance & Governance',
      icon: CheckCircle,
      description: 'Regulatory compliance and security governance',
      color: 'from-indigo-500 to-purple-500',
      services: [
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', description: 'SOC2 compliance automation' },
        { name: 'ISO 27001', path: '/iso-27001-compliance', description: 'Information security management' },
        { name: 'PCI DSS', path: '/pci-dss-compliance', description: 'Payment card industry compliance' },
        { name: 'HIPAA Compliance', path: '/hipaa-compliance', description: 'Healthcare data protection' },
        { name: 'Security Audits', path: '/security-audits', description: 'Comprehensive security assessments' },
        { name: 'Risk Assessment', path: '/risk-assessment', description: 'Security risk evaluation' }
      ]
    },
    {
      title: 'Cloud Security',
      icon: Cloud,
      description: 'Cloud infrastructure and application security',
      color: 'from-teal-500 to-cyan-500',
      services: [
        { name: 'Cloud Security Posture', path: '/cloud-security-posture', description: 'Cloud security assessment' },
        { name: 'Container Security', path: '/container-security', description: 'Docker and Kubernetes security' },
        { name: 'API Security', path: '/api-security', description: 'API protection and monitoring' },
        { name: 'Serverless Security', path: '/serverless-security', description: 'Serverless function security' },
        { name: 'Cloud Access Security Broker', path: '/casb-solutions', description: 'Cloud access control' },
        { name: 'DevSecOps', path: '/devsecops', description: 'Security in development pipeline' }
      ]
    }
  ];

  const securityTechnologies = [
    {
      name: 'AI & Machine Learning',
      description: 'Intelligent threat detection and response',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Behavioral Analytics',
      description: 'User and system behavior monitoring',
      icon: Eye,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Threat Intelligence',
      description: 'Real-time threat information sharing',
      icon: AlertTriangle,
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Zero Trust Security',
      description: 'Never trust, always verify approach',
      icon: Shield,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Quantum Cryptography',
      description: 'Next-generation encryption methods',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Blockchain Security',
      description: 'Distributed ledger security',
      icon: Lock,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'HIPAA compliant medical data protection',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Finance',
      description: 'PCI DSS and financial data security',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Government',
      description: 'Federal security standards compliance',
      icon: Building,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Manufacturing',
      description: 'Industrial control system security',
      icon: Cpu,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Retail',
      description: 'E-commerce and POS security',
      icon: ShoppingCart,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Education',
      description: 'Student data protection and privacy',
      icon: Users,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const securityFeatures = [
    {
      title: 'Real-Time Monitoring',
      description: '24/7 security monitoring and alerting',
      icon: Eye,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Automated Response',
      description: 'AI-powered incident response automation',
      icon: Zap,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Threat Intelligence',
      description: 'Global threat intelligence sharing',
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Compliance Automation',
      description: 'Automated compliance reporting',
      icon: CheckCircle,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Advanced Analytics',
      description: 'Machine learning security analytics',
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Zero Trust Architecture',
      description: 'Modern security architecture',
      icon: Shield,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', url: 'https://github.com/Zion-Holdings', icon: Github },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-purple-900 text-white">
      {/* Header */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <div className="p-4 bg-red-600/20 rounded-full">
              <Shield className="h-16 w-16 text-red-400" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"
          >
            Cybersecurity Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Protect your digital assets with enterprise-grade cybersecurity solutions. 
            From threat detection to compliance automation, we secure your future.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 text-lg"
            >
              Secure Your Business
            </Link>
            <Link
              to="/request-quote"
              className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg"
            >
              Get Security Assessment
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Security Services Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Comprehensive Security Services
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-red-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  {service.services.map((item, itemIndex) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700/80 transition-all duration-300 border border-transparent hover:border-red-500/30 group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-white group-hover:text-red-400 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-400 mt-1">
                            {item.description}
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-red-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Technologies */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Advanced Security Technologies
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + (index * 0.1) }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center hover:border-red-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Security Solutions for Every Industry
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + (index * 0.1) }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center hover:border-red-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Why Choose Our Security Solutions?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + (index * 0.1) }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 text-center hover:border-red-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600/20 to-orange-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Secure Your Digital Assets?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="text-xl text-gray-300 mb-8"
          >
            Don't wait until it's too late. Let's assess your security posture 
            and implement comprehensive protection for your organization.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 text-lg"
            >
              Schedule Security Assessment
            </Link>
            <Link
              to="/case-studies"
              className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg"
            >
              View Security Case Studies
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
            className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-red-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-red-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-gray-300">{contactInfo.address}</p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 + (index * 0.1) }}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-red-400 transition-colors mx-2">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-red-400 transition-colors mx-2">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-red-400 transition-colors mx-2">Cookie Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;
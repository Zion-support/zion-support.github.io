import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  Zap,
  Target,
  Users,
  BarChart3,
  Heart,
  Rocket,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Cpu,
  Eye,
  Lock,
  Cloud,
  Activity,
  Code,
  Database,
  Network,
  Server,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Play,
  BookOpen,
  Lightbulb,
  Award,
  Clock,
  DollarSign,
  Brain,
  AlertTriangle,
  Key,
  Fingerprint,
  Monitor,
  Bug,
  FileText
} from 'lucide-react';

export function CybersecurityPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const securityServices = [
    {
      category: 'AI-Powered Security',
      services: [
        {
          title: 'AI Cybersecurity Suite',
          description: 'Intelligent threat detection and response using artificial intelligence',
          features: ['AI Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Real-time Monitoring'],
          price: '$3,200',
          duration: '6-8 weeks',
          icon: Brain,
          href: '/services/ai-cybersecurity-suite'
        },
        {
          title: 'AI Threat Detection Platform',
          description: 'Advanced AI algorithms for identifying and neutralizing security threats',
          features: ['Machine Learning Models', 'Pattern Recognition', 'Threat Intelligence', 'Predictive Analytics'],
          price: '$4,500',
          duration: '8-10 weeks',
          icon: AlertTriangle,
          href: '/services/ai-cybersecurity-threat-detection'
        },
        {
          title: 'AI-Powered Security',
          description: 'Comprehensive AI-driven security solutions for modern threats',
          features: ['AI Security Analysis', 'Threat Hunting', 'Incident Response', 'Security Automation'],
          price: '$3,800',
          duration: '6-8 weeks',
          icon: Shield,
          href: '/services/ai-cybersecurity'
        }
      ]
    },
    {
      category: 'Zero Trust Security',
      services: [
        {
          title: 'Zero Trust Network Access',
          description: 'Implement zero trust security architecture for comprehensive protection',
          features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Access Control'],
          price: '$5,200',
          duration: '8-12 weeks',
          icon: Lock,
          href: '/services/zero-trust-network-access'
        },
        {
          title: 'Zero Trust Security Framework',
          description: 'Complete zero trust implementation and security framework',
          features: ['Security Architecture', 'Policy Implementation', 'Monitoring Systems', 'Compliance'],
          price: '$6,800',
          duration: '10-14 weeks',
          icon: Shield,
          href: '/services/zero-trust-security'
        }
      ]
    },
    {
      category: 'Security Infrastructure',
      services: [
        {
          title: 'Security Headers & CSP Manager',
          description: 'Advanced web security with content security policy management',
          features: ['Security Headers', 'CSP Implementation', 'XSS Protection', 'Security Auditing'],
          price: '$2,800',
          duration: '4-6 weeks',
          icon: FileText,
          href: '/services/security-headers-csp'
        },
        {
          title: 'Smart Contract Risk Scanner',
          description: 'Blockchain security and smart contract vulnerability assessment',
          features: ['Contract Analysis', 'Vulnerability Detection', 'Security Auditing', 'Risk Assessment'],
          price: '$3,500',
          duration: '6-8 weeks',
          icon: Code,
          href: '/services/smart-contract-risk-scanner'
        },
        {
          title: 'SOC2 Compliance Tracker',
          description: 'Comprehensive SOC2 compliance management and monitoring',
          features: ['Compliance Tracking', 'Audit Preparation', 'Risk Management', 'Documentation'],
          price: '$4,200',
          duration: '8-10 weeks',
          icon: CheckCircle,
          href: '/services/soc2-compliance-tracker'
        }
      ]
    },
    {
      category: 'Incident Response & Support',
      services: [
        {
          title: 'Status & Incident Hub',
          description: 'Centralized incident management and status communication platform',
          features: ['Incident Tracking', 'Status Updates', 'Communication Hub', 'Response Coordination'],
          price: '$2,500',
          duration: '4-5 weeks',
          icon: Monitor,
          href: '/services/status-incident-hub'
        },
        {
          title: 'Helpdesk Platform',
          description: 'Comprehensive IT support and helpdesk management system',
          features: ['Ticket Management', 'Knowledge Base', 'User Support', 'Performance Analytics'],
          price: '$2,200',
          duration: '3-4 weeks',
          icon: Users,
          href: '/services/helpdesk'
        }
      ]
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Globe },
    { id: 'services', name: 'Services', icon: Zap },
    { id: 'benefits', name: 'Benefits', icon: Star },
    { id: 'threats', name: 'Threats', icon: AlertTriangle },
    { id: 'pricing', name: 'Pricing', icon: DollarSign }
  ];

  const benefits = [
    {
      title: 'Advanced Threat Protection',
      description: 'AI-powered detection and prevention of sophisticated cyber attacks',
      icon: Shield,
      color: 'text-green-400'
    },
    {
      title: 'Zero Trust Architecture',
      description: 'Comprehensive security framework that verifies every access attempt',
      icon: Lock,
      color: 'text-blue-400'
    },
    {
      title: 'Real-time Monitoring',
      description: '24/7 security monitoring and instant threat response',
      icon: Monitor,
      color: 'text-cyan-400'
    },
    {
      title: 'Compliance & Governance',
      description: 'Meet regulatory requirements and industry security standards',
      icon: CheckCircle,
      color: 'text-purple-400'
    },
    {
      title: 'Cost-effective Security',
      description: 'Reduce security incidents and minimize financial impact',
      icon: DollarSign,
      color: 'text-yellow-400'
    },
    {
      title: 'Expert Security Team',
      description: 'Access to cybersecurity experts and ongoing support',
      icon: Users,
      color: 'text-orange-400'
    }
  ];

  const threatTypes = [
    {
      title: 'Ransomware Attacks',
      description: 'Malicious software that encrypts data and demands payment',
      icon: Lock,
      impact: 'High',
      protection: ['Backup Systems', 'Email Security', 'User Training', 'Network Segmentation']
    },
    {
      title: 'Phishing & Social Engineering',
      description: 'Deceptive tactics to steal credentials and sensitive information',
      icon: Users,
      impact: 'Medium',
      protection: ['Security Awareness', 'Email Filtering', 'Multi-factor Authentication', 'URL Filtering']
    },
    {
      title: 'Data Breaches',
      description: 'Unauthorized access to sensitive or confidential information',
      icon: Database,
      impact: 'High',
      protection: ['Encryption', 'Access Controls', 'Data Loss Prevention', 'Regular Audits']
    },
    {
      title: 'DDoS Attacks',
      description: 'Distributed denial of service attacks to disrupt services',
      icon: Network,
      impact: 'Medium',
      protection: ['DDoS Protection', 'Load Balancing', 'Traffic Analysis', 'CDN Services']
    },
    {
      title: 'Insider Threats',
      description: 'Security risks from employees or contractors with access',
      icon: AlertTriangle,
      impact: 'High',
      protection: ['User Monitoring', 'Access Controls', 'Background Checks', 'Security Policies']
    },
    {
      title: 'Supply Chain Attacks',
      description: 'Compromising software or hardware in the supply chain',
      icon: Code,
      impact: 'High',
      protection: ['Vendor Security', 'Code Signing', 'Supply Chain Audits', 'Secure Development']
    }
  ];

  const pricingTiers = [
    {
      name: 'Security Essential',
      price: '$2,500',
      description: 'Basic cybersecurity protection for small businesses',
      features: [
        'Basic Threat Detection',
        'Security Monitoring',
        'Email Security',
        'Standard Support',
        '4-6 Week Delivery'
      ],
      bestFor: 'Small businesses starting their security journey'
    },
    {
      name: 'Security Professional',
      price: '$5,500',
      description: 'Comprehensive security solutions for growing companies',
      features: [
        'AI-Powered Threat Detection',
        'Zero Trust Implementation',
        'Incident Response',
        'Priority Support',
        '8-12 Week Delivery',
        'Compliance Support'
      ],
      bestFor: 'Growing companies with security requirements'
    },
    {
      name: 'Security Enterprise',
      price: '$12,000+',
      description: 'Full-scale enterprise security infrastructure',
      features: [
        'Complete Security Suite',
        'Custom Security Solutions',
        '24/7 Security Operations',
        'Dedicated Security Team',
        '16-24 Week Delivery',
        'Ongoing Security Partnership'
      ],
      bestFor: 'Large enterprises requiring maximum security'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>Cybersecurity Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Protect Your Business with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                  {' '}Advanced Security
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions powered by AI and zero trust architecture 
                to protect your business from evolving cyber threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-cyan-600 text-white px-8 py-3 rounded-lg font-medium hover:from-green-600 hover:to-cyan-700 transition-all duration-200"
                >
                  <span>Secure Your Business</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center space-x-2 border border-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:border-green-500 hover:text-green-400 transition-all duration-200"
                >
                  <span>View Pricing</span>
                  <DollarSign className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            {/* Overview Content */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Comprehensive Cybersecurity for the Digital Age
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                In today's interconnected world, cybersecurity is not optional—it's essential. 
                Our advanced security solutions protect your business from evolving threats 
                while ensuring compliance and business continuity.
              </p>
            </div>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-green-500/30 transition-all duration-200"
                >
                  <div className={`w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4`}>
                    <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Security Statistics */}
            <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 p-8 rounded-lg border border-green-500/20">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Cybersecurity by the Numbers
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { number: '3.8M', label: 'Records Stolen Daily', icon: Database },
                  { number: '$4.35M', label: 'Average Data Breach Cost', icon: DollarSign },
                  { number: '43%', label: 'Cyber Attacks Target Small Business', icon: Target },
                  { number: '287 Days', label: 'Average Time to Detect Breach', icon: Clock }
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'services' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Cybersecurity Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI-powered threat detection to zero trust architecture, we provide 
                comprehensive security solutions for every business need.
              </p>
            </div>

            {securityServices.map((category, categoryIndex) => (
              <div key={category.category} className="space-y-6">
                <h3 className="text-2xl font-semibold text-white border-b border-gray-700 pb-2">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (serviceIndex * 0.05) }}
                      className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-green-500/30 transition-all duration-200 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-green-400" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-400">{service.price}</div>
                          <div className="text-sm text-gray-400">{service.duration}</div>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                      <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link
                        to={service.href}
                        className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors group-hover:translate-x-1 duration-200"
                      >
                        <span className="text-sm font-medium">Learn More</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'benefits' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose Our Cybersecurity Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advantages of our comprehensive cybersecurity approach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex space-x-4"
                >
                  <div className={`w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Security Framework */}
            <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 p-8 rounded-lg border border-green-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Our Security Framework
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Prevent', description: 'Proactive threat prevention and security controls', icon: Shield },
                  { title: 'Detect', description: 'Advanced monitoring and threat detection systems', icon: Eye },
                  { title: 'Respond', description: 'Rapid incident response and recovery procedures', icon: Zap }
                ].map((phase, index) => (
                  <div key={phase.title} className="text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <phase.icon className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{phase.title}</h4>
                    <p className="text-gray-300 text-sm">{phase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'threats' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Understanding Cyber Threats
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Knowledge is power. Understanding the threats you face is the first step 
                in protecting your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {threatTypes.map((threat, index) => (
                <motion.div
                  key={threat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <threat.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">{threat.title}</h3>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          threat.impact === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {threat.impact} Impact
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">{threat.description}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-white mb-2">Protection Measures:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {threat.protection.map((measure, measureIndex) => (
                        <div key={measureIndex} className="flex items-center space-x-2 text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span>{measure}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'pricing' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Cybersecurity Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Competitive pricing for enterprise-grade cybersecurity solutions with 
                flexible deployment options.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gray-800/50 p-8 rounded-lg border ${
                    tier.name === 'Security Professional' 
                      ? 'border-green-500/30 bg-gradient-to-br from-green-500/10 to-cyan-500/10' 
                      : 'border-gray-700'
                  } relative`}
                >
                  {tier.name === 'Security Professional' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-green-400 mb-6">{tier.price}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-sm text-gray-400 mb-6">
                    <strong>Best for:</strong> {tier.bestFor}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-medium transition-all duration-200 ${
                      tier.name === 'Security Professional'
                        ? 'bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white'
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait until it's too late. Let's discuss how our cybersecurity 
              solutions can protect your business from evolving threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-cyan-600 text-white px-8 py-3 rounded-lg font-medium hover:from-green-600 hover:to-cyan-700 transition-all duration-200"
              >
                <span>Secure Your Business</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center space-x-2 border border-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:border-green-500 hover:text-green-400 transition-all duration-200"
              >
                <span>View Full Pricing</span>
                <DollarSign className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
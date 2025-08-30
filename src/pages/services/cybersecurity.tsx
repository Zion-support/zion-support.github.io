import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Lock, 
  Eye, 
  Network, 
  Server, 
  Users, 
  Building, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Code,
  Database,
  Activity,
  BarChart3,
  Globe,
  Heart,
  DollarSign,
  FileText,
  Calendar,
  Phone,
  Mail,
  MapPin,
  AlertTriangle,
  Key,
  Fingerprint,
  Monitor,
  Globe2,
  Cloud,
  Cpu,
  Brain
} from 'lucide-react';

export default function CybersecurityPage() {
  const cyberServices = [
    {
      category: 'Core Security Solutions',
      services: [
        {
          name: 'AI Cybersecurity Platform',
          description: 'Advanced threat detection and response using artificial intelligence',
          icon: Shield,
          features: ['AI Threat Detection', 'Behavioral Analysis', 'Real-time Monitoring', 'Automated Response'],
          href: '/services/ai-cybersecurity-platform'
        },
        {
          name: 'Zero Trust Network Access',
          description: 'Implement zero trust security model for comprehensive network protection',
          icon: Lock,
          features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Least Privilege Access'],
          href: '/services/zero-trust-network-access'
        },
        {
          name: 'Security Headers & CSP',
          description: 'Implement security headers and content security policies',
          icon: Eye,
          features: ['Security Headers', 'Content Security Policy', 'XSS Protection', 'Clickjacking Prevention'],
          href: '/services/security-headers-csp'
        },
        {
          name: 'DSR Privacy Portal',
          description: 'Data Subject Rights management and privacy compliance',
          icon: Users,
          features: ['Data Rights Management', 'Privacy Compliance', 'Consent Management', 'Data Portability'],
          href: '/services/dsr-portal'
        }
      ]
    },
    {
      category: 'Advanced Security Services',
      services: [
        {
          name: 'Threat Intelligence',
          description: 'Comprehensive threat intelligence and analysis services',
          icon: AlertTriangle,
          features: ['Threat Monitoring', 'Vulnerability Assessment', 'Risk Analysis', 'Incident Response'],
          href: '/services/threat-intelligence'
        },
        {
          name: 'Penetration Testing',
          description: 'Comprehensive security testing and vulnerability assessment',
          icon: Code,
          features: ['Network Testing', 'Web Application Testing', 'Social Engineering', 'Physical Security'],
          href: '/services/penetration-testing'
        },
        {
          name: 'Security Architecture',
          description: 'Design and implement secure system architectures',
          icon: Building,
          features: ['Security Design', 'Risk Assessment', 'Compliance Planning', 'Implementation Support'],
          href: '/services/security-architecture'
        },
        {
          name: 'Incident Response',
          description: '24/7 incident response and recovery services',
          icon: Activity,
          features: ['24/7 Monitoring', 'Rapid Response', 'Forensic Analysis', 'Recovery Planning'],
          href: '/services/incident-response'
        }
      ]
    },
    {
      category: 'Specialized Security Solutions',
      services: [
        {
          name: 'Cloud Security',
          description: 'Comprehensive security for cloud environments',
          icon: Cloud,
          features: ['Cloud Access Security', 'Data Protection', 'Compliance Monitoring', 'Threat Detection'],
          href: '/services/cloud-security'
        },
        {
          name: 'IoT Security',
          description: 'Security solutions for Internet of Things devices',
          icon: Cpu,
          features: ['Device Authentication', 'Data Encryption', 'Network Security', 'Firmware Protection'],
          href: '/services/iot-security'
        },
        {
          name: 'Mobile Security',
          description: 'Mobile device and application security',
          icon: Phone,
          features: ['App Security', 'Device Management', 'Data Protection', 'Threat Prevention'],
          href: '/services/mobile-security'
        },
        {
          name: 'Compliance & Governance',
          description: 'Security compliance and governance frameworks',
          icon: FileText,
          features: ['GDPR Compliance', 'SOC 2 Certification', 'ISO 27001', 'HIPAA Compliance'],
          href: '/services/compliance-governance'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Comprehensive Protection',
      description: 'Multi-layered security approach covering all aspects of your digital infrastructure'
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: '24/7 threat detection and response with minimal downtime'
    },
    {
      icon: Lock,
      title: 'Compliance Ready',
      description: 'Meet industry standards and regulatory requirements with built-in compliance features'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Access to cybersecurity experts and dedicated support teams'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Threat Detection' },
    { number: '24/7', label: 'Monitoring' },
    { number: '<1min', label: 'Response Time' },
    { number: '100%', label: 'Compliance' }
  ];

  const securityFeatures = [
    {
      title: 'Advanced Threat Detection',
      description: 'AI-powered threat detection with machine learning algorithms',
      icon: Brain
    },
    {
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring of all systems and networks',
      icon: Monitor
    },
    {
      title: 'Automated Response',
      description: 'Instant automated response to security threats',
      icon: Zap
    },
    {
      title: 'Comprehensive Reporting',
      description: 'Detailed security reports and analytics',
      icon: BarChart3
    }
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
              Protect your digital assets with enterprise-grade cybersecurity solutions. 
              Advanced threat detection, zero trust architecture, and 24/7 protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105">
                Secure Now
              </button>
              <button className="border border-red-500 text-red-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200">
                Security Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-red-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Comprehensive Security Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our cybersecurity solutions provide multi-layered protection across 
              all aspects of your digital infrastructure and operations.
            </p>
          </motion.div>

          <div className="space-y-16">
            {cyberServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-3xl font-bold mb-8 text-center text-red-400">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold">{service.name}</h4>
                      </div>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <button className="w-full bg-gradient-to-r from-red-500 to-orange-600 text-white py-3 rounded-lg font-medium hover:from-red-600 hover:to-orange-700 transition-all duration-200 flex items-center justify-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Advanced Security Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our cybersecurity platform provides cutting-edge features that 
              ensure your digital assets remain protected at all times.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Cybersecurity?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience enterprise-grade security with advanced threat detection, 
              zero trust architecture, and comprehensive protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Business?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Don't wait for a security breach. Protect your digital assets today 
              with our comprehensive cybersecurity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105">
                Get Security Assessment
              </button>
              <button className="border border-red-500 text-red-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200">
                Contact Security Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
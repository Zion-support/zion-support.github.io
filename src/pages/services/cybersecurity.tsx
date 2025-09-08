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

export default CybersecurityPage;
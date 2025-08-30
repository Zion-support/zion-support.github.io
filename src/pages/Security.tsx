import React from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { Shield, 
  Lock, 
  Eye, 
  CheckCircle, 
  AlertTriangle, 
  Server, 
  Network, 
  Database, 
  Key, 
  Fingerprint,
  Globe,
  Users,
  Clock,
  Award,
  FileText,
  Security,
  Encryption,
  Shield,
  AlertTriangle,
  AlertCircle,
  Code,
  Monitor,
  Smartphone,
  Cloud,
  Zap,
  Search,
  Phone,
  Mail
 } from 'lucide-react';
import { SEO  } from '../components/SEO';

export default function Security() {
  const securityFeatures = [
    {
      category: 'Data Protection',
      icon: Lock,
      color: 'from-blue-500 to-cyan-600',
      features: [
        'End-to-end encryption for all data',
        'AES-256 encryption at rest and in transit',
        'Secure key management with HSM',
        'Data loss prevention (DLP) systems',
        'Automatic data backup and recovery',
        'Comprehensive audit logging'
      ]
    },
    {
      category: 'Network Security',
      icon: Network,
      color: 'from-green-500 to-emerald-600',
      features: [
        'Zero-trust network architecture',
        'Advanced firewall protection',
        'DDoS mitigation and protection',
        'Intrusion detection and prevention',
        'Secure VPN access for employees',
        'Real-time threat monitoring'
      ]
    },
    {
      category: 'Application Security',
      icon: Code,
      color: 'from-purple-500 to-pink-600',
      features: [
        'Secure software development lifecycle',
        'Regular security code reviews',
        'Automated vulnerability scanning',
        'Penetration testing and assessments',
        'API security and rate limiting',
        'Input validation and sanitization'
      ]
    },
    {
      category: 'Access Control',
      icon: Key,
      color: 'from-orange-500 to-red-600',
      features: [
        'Multi-factor authentication (MFA)',
        'Role-based access control (RBAC)',
        'Single sign-on (SSO) integration',
        'Privileged access management',
        'Session management and timeout',
        'Biometric authentication support'
      ]
    }
  ];

  const certifications = [
    {
      name: 'ISO 27001',
      description: 'Information Security Management System',
      status: 'Certified',
      icon: FileText,
      color: 'from-green-500 to-emerald-600',
      details: 'International standard for information security management'
    },
    {
      name: 'SOC 2 Type II',
      description: 'Service Organization Control 2',
      status: 'Compliant',
      icon: Award,
      color: 'from-blue-500 to-cyan-600',
      details: 'AICPA trust services criteria compliance'
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation',
      status: 'Compliant',
      icon: Shield,
      color: 'from-purple-500 to-pink-600',
      details: 'EU data protection and privacy regulation'
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      status: 'Compliant',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      details: 'Healthcare data protection standards'
    }
  ];

  const securityPractices = [
    {
      title: 'Regular Security Audits',
      description: 'Comprehensive security assessments conducted quarterly',
      icon: Monitor,
      color: 'from-blue-500 to-cyan-600',
      frequency: 'Quarterly',
      scope: 'Full infrastructure and applications'
    },
    {
      title: 'Penetration Testing',
      description: 'Ethical hacking to identify vulnerabilities',
      icon: Bug,
      color: 'from-green-500 to-emerald-600',
      frequency: 'Bi-annually',
      scope: 'External and internal systems'
    },
    {
      title: 'Vulnerability Management',
      description: 'Continuous monitoring and patching of security issues',
      icon: Virus,
      color: 'from-purple-500 to-pink-600',
      frequency: 'Continuous',
      scope: 'All systems and dependencies'
    },
    {
      title: 'Security Training',
      description: 'Regular security awareness training for all employees',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      frequency: 'Monthly',
      scope: 'All staff and contractors'
    }
  ];

  const incidentResponse = [
    {
      phase: 'Detection',
      description: 'Automated monitoring and alerting systems',
      icon: Eye,
      color: 'from-blue-500 to-cyan-600',
      timeframe: 'Real-time',
      tools: ['SIEM', 'EDR', 'Network monitoring']
    },
    {
      phase: 'Analysis',
      description: 'Rapid threat assessment and classification',
      icon: MagnifyingGlass,
      color: 'from-green-500 to-emerald-600',
      timeframe: '< 15 minutes',
      tools: ['Threat intelligence', 'Forensic analysis', 'Expert team']
    },
    {
      phase: 'Containment',
      description: 'Immediate isolation and threat neutralization',
      icon: Lock,
      color: 'from-purple-500 to-pink-600',
      timeframe: '< 30 minutes',
      tools: ['Network segmentation', 'Access control', 'System isolation']
    },
    {
      phase: 'Recovery',
      description: 'System restoration and service recovery',
      icon: Zap,
      color: 'from-orange-500 to-red-600',
      timeframe: '< 2 hours',
      tools: ['Backup systems', 'Redundancy', 'Failover procedures']
    }
  ];

  const securityTechnologies = [
    {
      name: 'Next-Gen Firewalls',
      description: 'Advanced threat protection and deep packet inspection',
      icon: Firewall,
      color: 'from-blue-500 to-cyan-600',
      vendor: 'Palo Alto Networks, Fortinet'
    },
    {
      name: 'Endpoint Detection & Response',
      description: 'Real-time endpoint monitoring and threat response',
      icon: Monitor,
      color: 'from-green-500 to-emerald-600',
      vendor: 'CrowdStrike, SentinelOne'
    },
    {
      name: 'Security Information & Event Management',
      description: 'Centralized security monitoring and correlation',
      icon: Server,
      color: 'from-purple-500 to-pink-600',
      vendor: 'Splunk, IBM QRadar'
    },
    {
      name: 'Identity & Access Management',
      description: 'Comprehensive identity governance and administration',
      icon: Fingerprint,
      color: 'from-orange-500 to-red-600',
      vendor: 'Okta, Microsoft Azure AD'
    }
  ];

  return (
  {/* Empty JSX fragment */}
      <SEO 
        title="Security - Zion Tech Group"
        description="Learn about Zion Tech Group's comprehensive security practices, certifications, and commitment to protecting your data and systems."
        canonical="/security"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Security & Compliance
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Your security is our priority. Zion Tech Group implements enterprise-grade security measures to protect your data, systems, and business operations.
              </p>
              
              {/* Security Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">99.99%</div>
                  <div className="text-slate-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">24/7</div>
                  <div className="text-slate-400">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">&lt; 15min</div>
                  <div className="text-slate-400">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">4+</div>
                  <div className="text-slate-400">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Commitment */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Security Commitment
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                At Zion Tech Group, security is not just a feature—it's fundamental to everything we do. We understand that your data and systems are critical to your business success, and we treat them with the highest level of protection.
              </p>
              <p className="text-lg text-slate-300">
                Our security-first approach combines cutting-edge technology, industry best practices, and continuous monitoring to ensure your assets remain protected against evolving threats.
              </p>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Security Features</h2>
              <p className="text-xl text-slate-300">Multi-layered security approach protecting every aspect of your infrastructure</p>
            </div>
            
            <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">
              {securityFeatures.map((category, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-slate-300">
                        <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Security Certifications & Compliance</h2>
              <p className="text-xl text-slate-300">Meeting and exceeding international security standards</p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <cert.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                  <p className="text-slate-300 text-sm mb-3">{cert.description}</p>
                  <p className="text-slate-400 text-xs mb-3">{cert.details}</p>
                  
                  <div className="inline-flex items-center text-sm font-semibold text-green-400">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    {cert.status}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Practices */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Security Practices & Procedures</h2>
              <p className="text-xl text-slate-300">Proactive security measures and continuous improvement</p>
            </div>
            
            <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">
              {securityPractices.map((practice, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${practice.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <practice.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{practice.title}</h3>
                      <p className="text-slate-300">{practice.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-slate-300">
                      <Clock className="h-4 w-4 mr-2 text-cyan-400" />
                      <span className="font-semibold">Frequency:</span>
                      <span className="ml-2">{practice.frequency}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-300">
                      <Globe className="h-4 w-4 mr-2 text-cyan-400" />
                      <span className="font-semibold">Scope:</span>
                      <span className="ml-2">{practice.scope}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Incident Response */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Incident Response & Recovery</h2>
              <p className="text-xl text-slate-300">Rapid response and recovery procedures for security incidents</p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
              {incidentResponse.map((phase, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <phase.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{phase.phase}</h3>
                  <p className="text-slate-300 text-sm mb-3">{phase.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="text-cyan-400 font-semibold">
                      Timeframe: {phase.timeframe}
                    </div>
                    <div className="text-slate-400">
                      Tools: {phase.tools.join(', ')}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Technologies */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Enterprise Security Technologies</h2>
              <p className="text-xl text-slate-300">Industry-leading security tools and platforms</p>
            </div>
            
            <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">
              {securityTechnologies.map((tech, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <tech.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{tech.name}</h3>
                      <p className="text-slate-300">{tech.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-cyan-400 mb-2">Vendors:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tech.vendor.split(', ').map((vendor, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300">
                          {vendor}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Contact */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Security Questions or Concerns?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Our security team is available 24/7 to address  security-related questions or concerns you may have.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <span>security@ziontechgroup.com</span>
                </div>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-6 text-left">
                <h3 className="text-lg font-semibold text-white mb-3">Security Incident Reporting</h3>
                <p className="text-slate-300 text-sm mb-4">
                  For security incidents or vulnerabilities, please contact us immediately:
                </p>
                                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Emergency: +1 302 464 0950 (24/7)</li>
                    <li>• Email: security@ziontechgroup.com</li>
                    <li>• Response time: &lt; 15 minutes</li>
                    <li>• Confidential handling guaranteed</li>
                  </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )}

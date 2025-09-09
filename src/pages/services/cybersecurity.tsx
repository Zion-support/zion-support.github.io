import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Users, 
  Database, 
  Network, 
  Zap,
  CheckCircle,
  ArrowRight,
  Globe,
  Server,
  Smartphone,
  Cloud
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const securityFeatures = [
  {
    icon: Shield,
    title: 'Advanced Threat Protection',
    description: 'AI-powered threat detection and prevention using machine learning algorithms to identify and block sophisticated cyber attacks in real-time.'
  },
  {
    icon: Lock,
    title: 'Zero Trust Security',
    description: 'Implement comprehensive zero trust architecture ensuring every access request is verified, regardless of location or network.'
  },
  {
    icon: Eye,
    title: '24/7 Security Monitoring',
    description: 'Continuous monitoring and threat hunting with our Security Operations Center (SOC) providing round-the-clock protection.'
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    description: 'Rapid incident response and recovery services with dedicated cybersecurity experts ready to handle any security breach.'
  },
  {
    icon: Users,
    title: 'Identity & Access Management',
    description: 'Comprehensive IAM solutions including multi-factor authentication, single sign-on, and privileged access management.'
  },
  {
    icon: Database,
    title: 'Data Protection',
    description: 'End-to-end encryption, data loss prevention, and compliance solutions to protect sensitive information.'
  }
];

const securityServices = [
  {
    title: 'Security Assessment',
    description: 'Comprehensive security audits, penetration testing, and vulnerability assessments to identify and remediate security gaps.',
    features: ['Vulnerability Scanning', 'Penetration Testing', 'Security Audits', 'Compliance Reviews']
  },
  {
    title: 'Security Implementation',
    description: 'Deploy and configure enterprise-grade security solutions including firewalls, IDS/IPS, and endpoint protection.',
    features: ['Firewall Configuration', 'Intrusion Detection', 'Endpoint Security', 'Network Segmentation']
  },
  {
    title: 'Security Training',
    description: 'Employee cybersecurity awareness training and phishing simulation to build a security-conscious culture.',
    features: ['Security Awareness', 'Phishing Simulations', 'Best Practices', 'Compliance Training']
  },
  {
    title: 'Managed Security',
    description: 'Fully managed security services including monitoring, incident response, and ongoing security maintenance.',
    features: ['24/7 Monitoring', 'Incident Response', 'Security Updates', 'Threat Intelligence']
  }
];

const complianceStandards = [
  { name: 'SOC 2 Type II', description: 'Service Organization Control 2 compliance for data security and availability' },
  { name: 'ISO 27001', description: 'International standard for information security management systems' },
  { name: 'GDPR', description: 'General Data Protection Regulation compliance for EU data protection' },
  { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act compliance' },
  { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard compliance' },
  { name: 'NIST', description: 'National Institute of Standards and Technology cybersecurity framework' }
];

const industries = [
  { name: 'Healthcare', icon: Users, description: 'HIPAA-compliant security solutions for patient data protection' },
  { name: 'Finance', icon: Database, description: 'Banking-grade security for financial institutions and fintech companies' },
  { name: 'Manufacturing', icon: Server, description: 'OT security and industrial control system protection' },
  { name: 'Retail', icon: Smartphone, description: 'PCI DSS compliance and e-commerce security solutions' },
  { name: 'Government', icon: Shield, description: 'FedRAMP and government security clearance compliance' },
  { name: 'Education', icon: Globe, description: 'FERPA compliance and student data protection' }
];

export default function Cybersecurity() {
  return (
    <>
      <SEO 
        title="Cybersecurity Services | Zion Tech Group"
        description="Comprehensive cybersecurity solutions including threat protection, zero trust security, incident response, and compliance management. Protect your business with enterprise-grade security."
        canonical="https://ziontechgroup.com/services/cybersecurity"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Enterprise <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Cybersecurity</span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Protect your business with comprehensive cybersecurity solutions. From threat detection to incident response, 
                we provide enterprise-grade security that adapts to evolving cyber threats.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="btn-primary px-8 py-3 text-lg font-semibold"
                >
                  Get Security Assessment
                </a>
                <a 
                  href="#services" 
                  className="btn-outline-white px-8 py-3 text-lg font-semibold"
                >
                  View Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Security Features
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Our cybersecurity platform combines cutting-edge technology with expert knowledge to provide 
                comprehensive protection against modern cyber threats.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-red-500/20 rounded-xl p-6 hover:border-red-500/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-zion-slate-light">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Services Section */}
        <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Security Services
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                From initial assessment to ongoing management, we provide end-to-end cybersecurity solutions 
                tailored to your organization's specific needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {securityServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-red-500/20 rounded-xl p-6 hover:border-red-500/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Compliance & Certifications
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Our security solutions help you meet industry standards and regulatory requirements 
                across multiple compliance frameworks.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{standard.name}</h3>
                  <p className="text-zion-slate-light text-sm">{standard.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry-Specific Solutions
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                We understand the unique security challenges faced by different industries and provide 
                tailored solutions that address specific compliance and security requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-zion-slate-light text-sm">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Security Process
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                A systematic approach to securing your organization through assessment, implementation, 
                monitoring, and continuous improvement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Assess</h3>
                <p className="text-zion-slate-light text-sm">
                  Comprehensive security assessment and vulnerability analysis
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Plan</h3>
                <p className="text-zion-slate-light text-sm">
                  Develop customized security strategy and implementation roadmap
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Implement</h3>
                <p className="text-zion-slate-light text-sm">
                  Deploy security solutions and configure protection measures
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Monitor</h3>
                <p className="text-zion-slate-light text-sm">
                  Continuous monitoring, threat detection, and incident response
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-red-500 to-red-700 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Secure Your Business?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Don't wait for a cyber attack to happen. Get proactive about your organization's security 
                with our comprehensive cybersecurity solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="btn-white px-8 py-3 text-lg font-semibold"
                >
                  Get Security Assessment
                </a>
                <a 
                  href="/services" 
                  className="btn-outline-white px-8 py-3 text-lg font-semibold"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
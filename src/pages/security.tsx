import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle, 
  AlertTriangle, 
  Users, 
  Database,
  Globe,
  Zap,
  Heart,
  Award,
  FileCheck,
  Server,
  Network,
  Key,
  Fingerprint
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const securityFeatures = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All data is encrypted in transit and at rest using industry-standard AES-256 encryption.'
  },
  {
    icon: Shield,
    title: 'Multi-Factor Authentication',
    description: 'Enhanced account security with SMS, email, and authenticator app verification options.'
  },
  {
    icon: Database,
    title: 'Secure Data Centers',
    description: 'Enterprise-grade data centers with redundant systems and 99.9% uptime guarantees.'
  },
  {
    icon: Network,
    title: 'Network Security',
    description: 'Advanced firewall protection, DDoS mitigation, and intrusion detection systems.'
  },
  {
    icon: Users,
    title: 'Role-Based Access Control',
    description: 'Granular permissions and access controls based on user roles and responsibilities.'
  },
  {
    icon: Eye,
    title: 'Audit Logging',
    description: 'Comprehensive logging of all system activities for security monitoring and compliance.'
  }
];

const complianceStandards = [
  {
    icon: FileCheck,
    title: 'SOC 2 Type II',
    description: 'Certified compliance with Service Organization Control 2 standards for security, availability, and confidentiality.'
  },
  {
    icon: Award,
    title: 'ISO 27001',
    description: 'International standard for information security management systems.'
  },
  {
    icon: Shield,
    title: 'GDPR Compliance',
    description: 'Full compliance with European data protection regulations.'
  },
  {
    icon: Lock,
    title: 'HIPAA Ready',
    description: 'Healthcare industry compliance for protected health information.'
  }
];

const securityPractices = [
  {
    title: 'Regular Security Audits',
    description: 'We conduct comprehensive security assessments and penetration testing on a regular basis.',
    frequency: 'Quarterly'
  },
  {
    title: 'Vulnerability Management',
    description: 'Continuous monitoring and patching of security vulnerabilities across our infrastructure.',
    frequency: '24/7'
  },
  {
    title: 'Employee Security Training',
    description: 'Regular security awareness training for all employees to prevent social engineering attacks.',
    frequency: 'Monthly'
  },
  {
    title: 'Incident Response',
    description: 'Established incident response procedures and 24/7 security monitoring team.',
    frequency: '24/7'
  }
];

const dataProtection = [
  'All data is encrypted using AES-256 encryption',
  'Regular automated backups with point-in-time recovery',
  'Data residency options for compliance requirements',
  'Secure data deletion and retention policies',
  'Regular security assessments and penetration testing',
  'Compliance with industry standards and regulations'
];

export default function Security() {
  return (
    <>
      <SEO 
        title="Security | Zion Tech Group"
        description="Learn about Zion Tech Group's comprehensive security measures, compliance standards, and data protection practices. Enterprise-grade security for your peace of mind."
        canonical="https://ziontechgroup.com/security"
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
              <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Enterprise <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Security</span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Your data security is our top priority. We implement industry-leading security measures 
                and maintain compliance with the highest standards to protect your business.
              </p>
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
                Security Features
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Comprehensive security measures that protect your data at every level.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-zion-slate-light">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Standards Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
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
                We maintain the highest industry standards and certifications to ensure your data is protected.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <standard.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{standard.title}</h3>
                  <p className="text-zion-slate-light text-sm">{standard.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Practices Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Security Practices
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Our ongoing commitment to maintaining the highest security standards.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityPractices.map((practice, index) => (
                <motion.div
                  key={practice.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{practice.title}</h3>
                    <span className="text-zion-cyan font-medium text-sm bg-zion-cyan/10 px-3 py-1 rounded-full">
                      {practice.frequency}
                    </span>
                  </div>
                  <p className="text-zion-slate-light">{practice.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Protection Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Data Protection
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Comprehensive measures to ensure your data remains secure and protected at all times.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Protection Measures</h3>
                <div className="space-y-4">
                  {dataProtection.map((measure, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 mt-1 flex-shrink-0" />
                      <span className="text-zion-slate-light">{measure}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl p-8"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">Security Commitment</h3>
                <div className="space-y-3 text-white/90">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-white mr-3" />
                    <span>Enterprise-grade security</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-5 h-5 text-white mr-3" />
                    <span>24/7 monitoring</span>
                  </div>
                  <div className="flex items-center">
                    <Certificate className="w-5 h-5 text-white mr-3" />
                    <span>Industry compliance</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-white mr-3" />
                    <span>Expert security team</span>
                  </div>
                </div>
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
              className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trust Your Data with Zion Tech Group
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Experience enterprise-grade security and compliance that gives you peace of mind.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="btn-white px-8 py-3 text-lg font-semibold"
                >
                  Get Started
                </Link>
                <Link 
                  to="/contact" 
                  className="btn-outline-white px-8 py-3 text-lg font-semibold"
                >
                  Security Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
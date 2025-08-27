import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { 
  Shield, 
  Lock, 
  Eye, 
  Key, 
  Server, 
  Network, 
  CheckCircle, 
  AlertTriangle,
  Users,
  Database,
  Cloud,
  Zap,
  Globe,
  Cpu,
  Building,
  Award
} from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Multi-Layer Security',
      description: 'Comprehensive security architecture with multiple defense layers'
    },
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit and at rest using industry standards'
    },
    {
      icon: Eye,
      title: '24/7 Monitoring',
      description: 'Continuous security monitoring and threat detection'
    },
    {
      icon: Key,
      title: 'Access Control',
      description: 'Role-based access control with multi-factor authentication'
    },
    {
      icon: Server,
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade infrastructure with regular security audits'
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Advanced firewall protection and intrusion prevention'
=======
import { Shield, Lock, Eye, Key, Server, Users, CheckCircle, AlertTriangle } from 'lucide-react';

export default function Security() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Multi-layered security architecture with advanced threat detection and prevention systems."
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption."
    },
    {
      icon: Eye,
      title: "Privacy-First Approach",
      description: "Strict data privacy controls and compliance with international privacy regulations."
    },
    {
      icon: Key,
      title: "Access Control",
      description: "Role-based access control with multi-factor authentication and session management."
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "Cloud infrastructure with regular security audits and penetration testing."
    },
    {
      icon: Users,
      title: "Team Security",
      description: "Background-checked security professionals with ongoing security training."
>>>>>>> cursor/website-audit-and-enhancement-1eed
    }
  ];

  const complianceStandards = [
<<<<<<< HEAD
    {
      icon: CheckCircle,
      title: 'SOC 2 Type II',
      description: 'Service Organization Control 2 compliance'
    },
    {
      icon: CheckCircle,
      title: 'ISO 27001',
      description: 'Information security management certification'
    },
    {
      icon: CheckCircle,
      title: 'GDPR',
      description: 'General Data Protection Regulation compliance'
    },
    {
      icon: CheckCircle,
      title: 'HIPAA',
      description: 'Healthcare data protection compliance'
    },
    {
      icon: CheckCircle,
      title: 'PCI DSS',
      description: 'Payment card industry security standards'
    },
    {
      icon: CheckCircle,
      title: 'FedRAMP',
      description: 'Federal Risk and Authorization Management Program'
    }
  ];

  const securityPractices = [
    'Regular security audits and penetration testing',
    'Employee security training and awareness programs',
    'Incident response and disaster recovery planning',
    'Vendor security assessments and monitoring',
    'Secure software development lifecycle (SDLC)',
    'Regular security updates and patch management',
    'Data backup and recovery procedures',
    'Business continuity planning'
  ];

  const threatProtection = [
    {
      icon: AlertTriangle,
      title: 'DDoS Protection',
      description: 'Advanced DDoS mitigation and traffic filtering'
    },
    {
      icon: Shield,
      title: 'Malware Protection',
      description: 'Real-time malware detection and removal'
    },
    {
      icon: Users,
      title: 'Phishing Prevention',
      description: 'AI-powered phishing detection and user training'
    },
    {
      icon: Database,
      title: 'Data Loss Prevention',
      description: 'Comprehensive data protection and monitoring'
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mr-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gradient">
                Security & Compliance
              </h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Your security is our priority. We implement industry-leading security practices 
              and maintain the highest compliance standards to protect your data and operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-3 text-lg">
                Security Report
              </button>
              <button className="btn-neon px-8 py-3 text-lg">
                Contact Security Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our comprehensive security framework ensures the highest level of protection 
              for your data, applications, and infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Compliance
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We maintain the highest industry standards and certifications to ensure 
              your data meets regulatory requirements and industry best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <standard.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{standard.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Security Best Practices
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our security program is built on industry best practices and continuous improvement 
              to ensure the highest level of protection for our customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {securityPractices.slice(0, 4).map((practice, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                  <p className="text-zion-slate-light">{practice}</p>
                </div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {securityPractices.slice(4).map((practice, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                  <p className="text-zion-slate-light">{practice}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Threat Protection Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Threat Protection
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our multi-layered threat protection system defends against the latest 
              cyber threats and ensures business continuity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {threatProtection.map((protection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/80 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <protection.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{protection.title}</h3>
                <p className="text-zion-slate-light text-sm">{protection.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Secure Your Digital Future
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Partner with us to build a secure, compliant, and resilient digital infrastructure 
              that protects your business and enables growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-futuristic px-8 py-3 text-lg">
                Security Assessment
              </button>
              <button className="btn-neon px-8 py-3 text-lg">
                Compliance Review
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Security;
=======
    "SOC 2 Type II Compliance",
    "ISO 27001 Information Security",
    "GDPR Compliance",
    "CCPA Compliance",
    "HIPAA Compliance (Healthcare)",
    "PCI DSS Compliance (Financial)"
  ];

  const securityMeasures = [
    "Regular security audits and penetration testing",
    "24/7 security monitoring and incident response",
    "Automated threat detection and response",
    "Regular security updates and patches",
    "Employee security awareness training",
    "Vendor security assessments"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Security & Trust
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Your security is our top priority. We implement enterprise-grade security measures 
            to protect your data, maintain privacy, and ensure compliance with global standards.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Compliance Section */}
        <motion.div 
          className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Compliance & Certifications</h2>
            <p className="text-zion-slate-light text-lg">
              We maintain the highest standards of security compliance and regularly undergo 
              third-party audits to ensure our security measures meet industry standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-zion-cyan mb-4">Security Standards</h3>
              <ul className="space-y-3">
                {complianceStandards.map((standard, index) => (
                  <li key={index} className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    {standard}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-zion-cyan mb-4">Security Measures</h3>
              <ul className="space-y-3">
                {securityMeasures.map((measure, index) => (
                  <li key={index} className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    {measure}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Security Commitment */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Our Security Commitment</h2>
            <p className="text-zion-slate-light text-lg mb-6 max-w-3xl mx-auto">
              We understand that security is not just about technology—it's about trust. 
              We're committed to maintaining the highest security standards and being 
              transparent about our security practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center p-4 bg-zinc-800/50 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-zion-cyan mr-3" />
                <span className="text-white font-medium">Report Security Issues</span>
              </div>
              <div className="flex items-center justify-center p-4 bg-zinc-800/50 rounded-lg">
                <Shield className="w-6 h-6 text-zion-cyan mr-3" />
                <span className="text-white font-medium">Security Documentation</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Security Team */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Questions About Security?</h3>
          <p className="text-zion-slate-light mb-6">
            Our security team is available to answer any questions about our security practices, 
            compliance, or security features.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform"
          >
            Contact Security Team
          </a>
        </motion.div>
      </div>
    </div>
  );
}
>>>>>>> cursor/website-audit-and-enhancement-1eed

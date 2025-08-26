import React from 'react';
import { motion } from 'framer-motion';
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
    }
  ];

  const complianceStandards = [
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
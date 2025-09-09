import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  CheckCircle, 
  ArrowRight,
  Star,
  Award,
  Users,
  Globe,
  Cpu,
  Database,
  Network,
  Eye,
  Key,
  AlertTriangle
} from 'lucide-react';

const SecurityPage = () => {
  const securityFeatures = [
    {
      title: 'Multi-Factor Authentication',
      description: 'Enhanced login security with multiple verification methods including SMS, email, and authenticator apps.',
      icon: Key
    },
    {
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard AES-256 encryption.',
      icon: Lock
    },
    {
      title: 'Regular Security Audits',
      description: 'Comprehensive security assessments conducted by third-party security firms on a regular basis.',
      icon: Eye
    },
    {
      title: '24/7 Security Monitoring',
      description: 'Continuous monitoring and threat detection with automated response systems.',
      icon: Shield
    }
  ];

  const complianceStandards = [
    {
      name: 'ISO 27001',
      description: 'Information Security Management System',
      status: 'Certified',
      icon: Award
    },
    {
      name: 'SOC 2 Type II',
      description: 'Security, Availability, and Confidentiality',
      status: 'Certified',
      icon: Award
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation',
      status: 'Compliant',
      icon: Award
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      status: 'Compliant',
      icon: Award
    }
  ];

  const securityPractices = [
    'Regular penetration testing and vulnerability assessments',
    'Employee security training and awareness programs',
    'Incident response and disaster recovery planning',
    'Secure software development lifecycle (SDLC)',
    'Third-party security assessments and audits',
    'Continuous security monitoring and threat intelligence'
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
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full px-6 py-3 mb-8">
              <Shield className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">Security & Compliance</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Your Security is Our
              <span className="text-gradient"> Priority</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              We implement industry-leading security measures and maintain the highest compliance 
              standards to protect your data and ensure business continuity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Download Security Report
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Security Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our multi-layered security approach ensures your data and systems are protected 
              at every level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                
                <p className="text-zion-slate-light text-lg">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Compliance & Standards
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We maintain the highest standards of security and compliance across all our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={standard.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <standard.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{standard.name}</h3>
                <p className="text-zion-slate-light mb-4 text-sm">{standard.description}</p>
                
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  standard.status === 'Certified' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {standard.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Security Practices
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We follow industry best practices and continuously improve our security posture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {securityPractices.slice(0, 3).map((practice, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-zion-slate-light">{practice}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {securityPractices.slice(3).map((practice, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-zion-slate-light">{practice}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let our security experts assess your current security posture and implement 
              robust protection measures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Download Security Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;
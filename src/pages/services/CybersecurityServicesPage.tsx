import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Zap, 
  Users, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  TrendingUp,
  Database,
  Network,
  Server
} from 'lucide-react';

const CybersecurityServicesPage = () => {
  const securityServices = [
    {
      id: 'threat-detection',
      title: 'Threat Detection & Response',
      description: 'Advanced threat detection and automated incident response systems',
      icon: <Eye className="w-8 h-8" />,
      features: ['Real-time Monitoring', 'AI-Powered Detection', 'Automated Response', 'Threat Intelligence'],
      useCases: ['Network Security', 'Endpoint Protection', 'Cloud Security', 'IoT Security'],
      pricing: 'Starting from $3,500/month'
    },
    {
      id: 'security-audits',
      title: 'Security Audits & Assessments',
      description: 'Comprehensive security evaluations and compliance assessments',
      icon: <Shield className="w-8 h-8" />,
      features: ['Vulnerability Assessment', 'Penetration Testing', 'Compliance Review', 'Risk Analysis'],
      useCases: ['Regulatory Compliance', 'Security Posture', 'Risk Management', 'Due Diligence'],
      pricing: 'Starting from $2,800/month'
    },
    {
      id: 'compliance-management',
      title: 'Compliance Management',
      description: 'Ensure adherence to industry standards and regulatory requirements',
      icon: <Lock className="w-8 h-8" />,
      features: ['GDPR Compliance', 'SOC 2 Type II', 'ISO 27001', 'HIPAA Compliance'],
      useCases: ['Data Protection', 'Privacy Regulations', 'Industry Standards', 'Audit Preparation'],
      pricing: 'Starting from $2,200/month'
    },
    {
      id: 'incident-response',
      title: 'Incident Response',
      description: '24/7 incident response and recovery services',
      icon: <AlertTriangle className="w-8 h-8" />,
      features: ['Emergency Response', 'Forensic Analysis', 'Recovery Planning', 'Post-Incident Review'],
      useCases: ['Data Breaches', 'Ransomware Attacks', 'System Compromises', 'Business Continuity'],
      pricing: 'Starting from $4,000/month'
    }
  ];

  const complianceFrameworks = [
    'GDPR', 'SOC 2', 'ISO 27001', 'HIPAA', 'PCI DSS', 'NIST', 'COBIT', 'CIS Controls'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Cybersecurity
            </span> Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
            Protect your digital assets with enterprise-grade cybersecurity solutions. 
            From threat detection to compliance management, we keep your business secure.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-zion-slate-light">Threat Detection Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-purple mb-2">24/7</div>
              <div className="text-zion-slate-light">Security Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-blue mb-2">15min</div>
              <div className="text-zion-slate-light">Response Time</div>
            </div>
          </div>
        </motion.div>

        {/* Security Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {securityServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/10"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <div className="text-right">
                  <div className="text-sm text-zion-cyan font-medium">{service.pricing}</div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.map((useCase, useCaseIndex) => (
                    <span
                      key={useCaseIndex}
                      className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to={`/services/cybersecurity/${service.id}`}
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Compliance Frameworks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Compliance Frameworks
            </h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              We help organizations achieve and maintain compliance with major industry standards 
              and regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-blue-dark/20 border border-zion-cyan/20 rounded-lg p-4 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-zion-cyan font-medium">{framework}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Advanced Security Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Network Security</h3>
              <p className="text-zion-slate-light">
                Advanced firewall protection and network monitoring
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Data Protection</h3>
              <p className="text-zion-slate-light">
                Encryption and secure data handling practices
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Infrastructure Security</h3>
              <p className="text-zion-slate-light">
                Secure cloud and on-premises infrastructure
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Secure Your Digital Future
          </h2>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Don't wait for a security breach. Let our cybersecurity experts help you 
            build a robust defense strategy for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105"
            >
              Get Security Assessment
            </Link>
            <Link
              to="/services/pricing"
              className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              View Security Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CybersecurityServicesPage;
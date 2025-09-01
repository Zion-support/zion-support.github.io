import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  Server,
  Network,
  ArrowRight,
  CheckCircle,
  Star,
  Search,
} from 'lucide-react';

const CybersecurityServices = () => {
  const securityServices = [
    {
      title: 'AI Cybersecurity Platform',
      description:
        'Advanced threat detection and response using machine learning algorithms',
      path: '/services/ai-cybersecurity-platform',
      icon: Shield,
      featured: true,
      tags: ['AI Security', 'Threat Detection', 'Machine Learning'],
    },
    {
      title: 'Zero Trust Architecture',
      description: 'Comprehensive zero-trust network security implementation',
      path: '/services/ZeroTrustNetworkArchitecture',
      icon: Lock,
      tags: ['Zero Trust', 'Network Security', 'Access Control'],
    },
    {
      title: 'SOC2 Compliance Tracker',
      description:
        'Automated compliance monitoring and reporting for SOC2 requirements',
      path: '/services/SOC2ComplianceTracker',
      icon: CheckCircle,
      tags: ['Compliance', 'SOC2', 'Audit'],
    },
    {
      title: 'Incident Response Platform',
      description: '24/7 incident response and threat containment services',
      path: '/services/incident-response-platform',
      icon: AlertTriangle,
      tags: ['Incident Response', 'Threat Management', '24/7 Support'],
    },
    {
      title: 'Security Headers & CSP Manager',
      description: 'Web application security hardening and policy management',
      path: '/services/SecurityHeadersCSPManager',
      icon: Server,
      tags: ['Web Security', 'CSP', 'Headers'],
    },
    {
      title: 'Smart Contract Risk Scanner',
      description:
        'Blockchain smart contract security analysis and vulnerability detection',
      path: '/services/SmartContractRiskScanner',
      icon: Search,
      tags: ['Blockchain', 'Smart Contracts', 'Risk Analysis'],
    },
  ];

  const benefits = [
    { metric: '99.9%', label: 'Threat Detection' },
    { metric: '24/7', label: 'Monitoring' },
    { metric: '< 5min', label: 'Response Time' },
    { metric: '100%', label: 'SOC2 Compliance' },
  ];

  const securityFeatures = [
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'Continuous security monitoring with instant threat alerts',
    },
    {
      icon: Shield,
      title: 'Advanced Protection',
      description:
        'Multi-layered security defense against sophisticated attacks',
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Comprehensive network protection and access control',
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for data at rest and in transit',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Shield className="w-12 h-12 text-red-400" />
              <h1 className="text-5xl md:text-6xl font-bold">
                Cybersecurity
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  {' '}
                  Services
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Protect your digital assets with our comprehensive cybersecurity
              solutions. From threat detection to compliance management, we
              safeguard your business against evolving cyber threats.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-gray-300">{benefit.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Security Framework</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multi-layered security approach designed to protect against modern
              cyber threats
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:border-red-400/50 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Security Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity services to protect, detect, and
              respond to threats
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-red-400/50 transition-all duration-300 hover:transform hover:scale-105 relative ${
                  service.featured ? 'ring-2 ring-red-400/30' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                )}

                <service.icon className="w-12 h-12 text-red-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={service.path}
                  className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors font-semibold"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait for a security breach. Let our cybersecurity experts
              assess your current security posture and implement robust
              protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
              >
                Get Security Assessment
              </motion.button>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 border border-red-400 text-red-400 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
                >
                  Contact Security Team
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityServices;

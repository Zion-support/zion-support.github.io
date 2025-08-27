import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  Key, 
  Server, 
  Globe, 
  Users, 
  CheckCircle,
  AlertTriangle,
  Info,
  ArrowRight,
  Fingerprint,
  Database,
  Network,
  Cloud,
  Zap,
  Mail
} from 'lucide-react';

export default function Security() {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Multi-layered security architecture with advanced threat detection and prevention systems.',
      features: ['Real-time monitoring', 'Intrusion detection', 'DDoS protection', 'Advanced firewalls']
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for all data in transit and at rest using industry-standard protocols.',
      features: ['AES-256 encryption', 'TLS 1.3', 'Database encryption', 'File-level security']
    },
    {
      icon: Users,
      title: 'Access Control',
      description: 'Comprehensive role-based access control with multi-factor authentication and session management.',
      features: ['RBAC implementation', 'MFA support', 'Session timeouts', 'IP whitelisting']
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Secure cloud infrastructure with regular security audits and compliance certifications.',
      features: ['SOC 2 Type II', 'ISO 27001', 'Regular audits', 'Penetration testing']
    }
  ];

  const complianceStandards = [
    { name: 'SOC 2 Type II', status: 'Certified', icon: CheckCircle, color: 'text-green-400' },
    { name: 'ISO 27001', status: 'Certified', icon: CheckCircle, color: 'text-green-400' },
    { name: 'GDPR', status: 'Compliant', icon: CheckCircle, color: 'text-green-400' },
    { name: 'CCPA', status: 'Compliant', icon: CheckCircle, color: 'text-green-400' },
    { name: 'HIPAA', status: 'Compliant', icon: CheckCircle, color: 'text-green-400' },
    { name: 'PCI DSS', status: 'Level 1', icon: CheckCircle, color: 'text-green-400' }
  ];

  const securityPolicies = [
    {
      title: 'Data Privacy',
      description: 'We are committed to protecting your personal information and ensuring compliance with global privacy regulations.',
      link: '/privacy'
    },
    {
      title: 'Terms of Service',
      description: 'Our terms outline the rules and guidelines for using our platform and services.',
      link: '/terms'
    },
    {
      title: 'Cookie Policy',
      description: 'Learn about how we use cookies and similar technologies to enhance your experience.',
      link: '/cookies'
    },
    {
      title: 'Security Incident Response',
      description: 'Our comprehensive incident response plan ensures quick and effective handling of security events.',
      link: '/security/incident-response'
    }
  ];

  const bestPractices = [
    'Use strong, unique passwords for your account',
    'Enable two-factor authentication',
    'Keep your software and devices updated',
    'Be cautious of phishing attempts',
    'Regularly review your account activity',
    'Use secure networks when accessing sensitive information'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Security & Trust
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Your security is our top priority. We implement industry-leading security measures to protect your data, 
            ensure privacy, and maintain the highest standards of trust and reliability.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mr-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-zion-slate-light mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compliance & Certifications */}
        <div className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Compliance & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-zinc-700/30 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center mb-3">
                  <standard.icon className={`w-8 h-8 ${standard.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{standard.name}</h3>
                <p className={`text-sm font-medium ${standard.color}`}>{standard.status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Policies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Security Policies & Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityPolicies.map((policy, index) => (
              <div key={index} className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-3">{policy.title}</h3>
                <p className="text-zion-slate-light mb-4">{policy.description}</p>
                <Link 
                  to={policy.link}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Security Best Practices */}
        <div className="bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Security Best Practices</h2>
          <p className="text-white/90 text-center mb-8 max-w-3xl mx-auto">
            While we implement robust security measures, here are some best practices you can follow to enhance your account security:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bestPractices.map((practice, index) => (
              <div key={index} className="flex items-center bg-white/10 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                <span className="text-white">{practice}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Security Architecture */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Security Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Data Layer</h3>
              <p className="text-zion-slate-light">Encrypted storage with access controls and audit logging</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Network Layer</h3>
              <p className="text-zion-slate-light">Secure connections with DDoS protection and traffic monitoring</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Application Layer</h3>
              <p className="text-zion-slate-light">Secure APIs with rate limiting and input validation</p>
            </div>
          </div>
        </div>

        {/* Contact Security Team */}
        <div className="bg-zinc-800/30 border border-zion-cyan/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Questions About Security?</h2>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Our security team is available to address any security concerns or questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white rounded-lg font-medium hover:scale-105 transition-transform"
            >
              <Shield className="w-5 h-5 mr-2" />
              Contact Security Team
            </Link>
            <a
              href="mailto:security@ziontechgroup.com"
              className="inline-flex items-center px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Security Email
            </a>
          </div>
        </div>

        {/* Security Status */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-green-900/30 border border-green-500/30 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-green-400 font-medium">All Systems Operational</span>
          </div>
          <p className="text-zion-slate-light mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
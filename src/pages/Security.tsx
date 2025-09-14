import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Key, Server, Database, AlertTriangle, CheckCircle, FileText, Users, Globe, Zap, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';

export default function Security() {
  const [activeTab, setActiveTab] = useState('overview');

  const securityFeatures = [
    {
      icon: Shield,
      title: 'Multi-Layer Security',
      description: 'Advanced firewall protection, intrusion detection, and threat prevention systems',
      color: 'bg-blue-500'
    },
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard protocols',
      color: 'bg-green-500'
    },
    {
      icon: Eye,
      title: 'Biometric Authentication',
      description: 'Optional fingerprint and facial recognition for enhanced account security',
      color: 'bg-purple-500'
    },
    {
      icon: Key,
      title: 'Zero-Trust Architecture',
      description: 'Continuous verification and validation of all users and devices',
      color: 'bg-orange-500'
    },
    {
      icon: Server,
      title: 'Network Security',
      description: 'DDoS protection, VPN access, and secure network infrastructure',
      color: 'bg-red-500'
    },
    {
      icon: Database,
      title: 'Data Protection',
      description: 'Regular backups, disaster recovery, and data loss prevention',
      color: 'bg-indigo-500'
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

  const securityMetrics = [
    { metric: '99.99%', label: 'Uptime' },
    { metric: '< 50ms', label: 'Response Time' },
    { metric: '256-bit', label: 'Encryption' },
    { metric: '24/7', label: 'Monitoring' }
  ];

  const tabs = [
    { id: 'overview', label: 'Security Overview', icon: Shield },
    { id: 'architecture', label: 'Security Architecture', icon: Server },
    { id: 'compliance', label: 'Compliance & Certifications', icon: FileText },
    { id: 'incidents', label: 'Security Incidents', icon: AlertTriangle },
    { id: 'resources', label: 'Security Resources', icon: FileText }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityMetrics.map((item, index) => (
                <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl">
                  <div className="text-3xl font-bold text-zion-cyan mb-2">{item.metric}</div>
                  <div className="text-zion-slate-light">{item.label}</div>
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 hover:border-zion-cyan/50 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${feature.color} rounded-lg mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-zion-slate-light text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'architecture':
        return (
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Security Architecture Overview</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-zion-cyan mb-4">Network Layer</h4>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li>• Advanced firewall protection</li>
                    <li>• DDoS mitigation</li>
                    <li>• VPN and secure access</li>
                    <li>• Network segmentation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-cyan mb-4">Application Layer</h4>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li>• Input validation</li>
                    <li>• SQL injection prevention</li>
                    <li>• XSS protection</li>
                    <li>• Rate limiting</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Data Protection</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-zion-cyan mb-4">Encryption</h4>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li>• AES-256 encryption at rest</li>
                    <li>• TLS 1.3 in transit</li>
                    <li>• Key management system</li>
                    <li>• Hardware security modules</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-cyan mb-4">Access Control</h4>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li>• Role-based access control</li>
                    <li>• Multi-factor authentication</li>
                    <li>• Single sign-on (SSO)</li>
                    <li>• Privileged access management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'compliance':
        return (
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Compliance & Certifications</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {complianceStandards.map((standard, index) => (
                  <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <div className="flex items-center mb-3">
                      <standard.icon className={`w-5 h-5 ${standard.color} mr-2`} />
                      <span className="text-white font-semibold">{standard.name}</span>
                    </div>
                    <div className="text-zion-cyan text-sm">{standard.status}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Audit & Reporting</h3>
              <p className="text-zion-slate-light mb-4">
                We undergo regular third-party security audits and assessments to maintain our compliance status.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Annual Audits</h4>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li>• SOC 2 Type II assessment</li>
                    <li>• Penetration testing</li>
                    <li>• Vulnerability assessments</li>
                    <li>• Security architecture review</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Continuous Monitoring</h4>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li>• Real-time threat detection</li>
                    <li>• Security event logging</li>
                    <li>• Performance monitoring</li>
                    <li>• Compliance dashboards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'incidents':
        return (
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Security Incident History</h3>
              <p className="text-zion-slate-light mb-6">
                We maintain transparency about security incidents and our response to them.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-green-400 font-semibold">No Critical Incidents</span>
                  </div>
                  <p className="text-green-300 text-sm">
                    No critical security incidents have occurred in the past 12 months.
                  </p>
                </div>
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <div className="flex items-center mb-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="text-yellow-400 font-semibold">Minor Attempts Blocked</span>
                  </div>
                  <p className="text-yellow-300 text-sm">
                    Several attempted attacks were successfully blocked by our security systems.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Incident Response Plan</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Response Team</h4>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li>• 24/7 security operations center</li>
                    <li>• Incident response specialists</li>
                    <li>• Legal and compliance experts</li>
                    <li>• Customer communication team</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Response Process</h4>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li>• Immediate threat containment</li>
                    <li>• Investigation and analysis</li>
                    <li>• Customer notification</li>
                    <li>• Post-incident review</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'resources':
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                to="/help/security-settings"
                className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 hover:border-zion-cyan/50 transition-all duration-300 group"
              >
                <Shield className="w-8 h-8 text-zion-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  Security Settings Guide
                </h3>
                <p className="text-zion-slate-light text-sm mb-4">
                  Learn how to configure your account security settings
                </p>
                <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/help/2fa-setup"
                className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 hover:border-zion-cyan/50 transition-all duration-300 group"
              >
                <Lock className="w-8 h-8 text-zion-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  Two-Factor Authentication
                </h3>
                <p className="text-zion-slate-light text-sm mb-4">
                  Set up 2FA for enhanced account security
                </p>
                <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/help/account-security"
                className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 hover:border-zion-cyan/50 transition-all duration-300 group"
              >
                <Key className="w-8 h-8 text-zion-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  Account Security Best Practices
                </h3>
                <p className="text-zion-slate-light text-sm mb-4">
                  Tips for keeping your account secure
                </p>
                <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Security Resources</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Documentation</h4>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li>• Security whitepapers</li>
                    <li>• Best practice guides</li>
                    <li>• Compliance documentation</li>
                    <li>• Security architecture diagrams</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Support</h4>
                  <ul className="space-y-2 text-zion-slate-light">
                    <li>• Security support team</li>
                    <li>• Emergency contact information</li>
                    <li>• Security incident reporting</li>
                    <li>• Vulnerability disclosure program</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Security & Compliance - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's comprehensive security measures, compliance certifications, and commitment to protecting your data and privacy." />
        <meta name="keywords" content="security, compliance, SOC 2, ISO 27001, GDPR, data protection, encryption, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/security" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-zion-cyan/20 rounded-full mb-6">
              <Shield className="w-10 h-10 text-zion-cyan" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Security & Compliance
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Your data security is our top priority. We maintain the highest standards of security and compliance to protect your information.
            </p>
            
            {/* Security Metrics */}
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {securityMetrics.map((item, index) => (
                <div key={index} className="text-center p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl">
                  <div className="text-2xl font-bold text-zion-cyan mb-1">{item.metric}</div>
                  <div className="text-zion-slate-light text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-zion-cyan text-white'
                      : 'bg-white/5 backdrop-blur-lg border border-white/10 text-zion-slate-light hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <tab.icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="mb-16">
            {renderTabContent()}
          </div>

          {/* Questions About Security Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-lg border border-zion-cyan/30 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Questions About Security?</h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Our security team is available to answer your questions and provide detailed information about our security measures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-xl hover:bg-zion-cyan-light transition-colors"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Contact Security Team
                </Link>
                <Link
                  to="/help"
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Security Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
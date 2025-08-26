import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle,
  Users,
  Globe,
  Server,
  Database,
  Network,
  Key,
  Search,
  Clock,
  Star,
  TrendingUp,
  Zap,
  Brain,
  Smartphone,
  Cloud,
  FileText,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function Security() {
  const [selectedCategory, setSelectedCategory] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

  const securityCategories = [
    { id: 'overview', name: 'Overview', icon: Shield },
    { id: 'practices', name: 'Best Practices', icon: CheckCircle },
    { id: 'compliance', name: 'Compliance', icon: FileText },
    { id: 'threats', name: 'Threats', icon: AlertTriangle },
    { id: 'tools', name: 'Security Tools', icon: Key }
  ];

  const securityPractices = [
    {
      title: "Multi-Factor Authentication",
      description: "All accounts require MFA for enhanced security",
      icon: Lock,
      status: "Active",
      color: "text-green-500"
    },
    {
      title: "Encryption at Rest",
      description: "All data is encrypted using AES-256 encryption",
      icon: Database,
      status: "Active",
      color: "text-green-500"
    },
    {
      title: "Regular Security Audits",
      description: "Quarterly security assessments and penetration testing",
      icon: Eye,
      status: "Active",
      color: "text-green-500"
    },
    {
      title: "Employee Training",
      description: "Monthly security awareness training for all staff",
      icon: Users,
      status: "Active",
      color: "text-green-500"
    },
    {
      title: "Incident Response",
      description: "24/7 security monitoring and rapid response",
      icon: AlertTriangle,
      status: "Active",
      color: "text-green-500"
    },
    {
      title: "Access Control",
      description: "Role-based access control and least privilege principle",
      icon: Key,
      status: "Active",
      color: "text-green-500"
    }
  ];

  const complianceStandards = [
    {
      name: "SOC 2 Type II",
      description: "Service Organization Control 2 certification",
      status: "Certified",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      name: "ISO 27001",
      description: "Information security management system",
      status: "Certified",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance",
      status: "Compliant",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      status: "Compliant",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      status: "Compliant",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      name: "NIST Framework",
      description: "Cybersecurity framework implementation",
      status: "Implemented",
      icon: CheckCircle,
      color: "text-green-500"
    }
  ];

  const securityThreats = [
    {
      name: "Ransomware",
      description: "Malicious software that encrypts files",
      risk: "High",
      mitigation: "Regular backups, email filtering, user training",
      icon: AlertTriangle,
      color: "text-red-500"
    },
    {
      name: "Phishing",
      description: "Social engineering attacks via email",
      risk: "Medium",
      mitigation: "Email filtering, user training, MFA",
      icon: Users,
      color: "text-orange-500"
    },
    {
      name: "DDoS Attacks",
      description: "Distributed denial of service attacks",
      risk: "Medium",
      mitigation: "Traffic filtering, CDN protection",
      icon: Network,
      color: "text-orange-500"
    },
    {
      name: "Data Breaches",
      description: "Unauthorized access to sensitive data",
      risk: "High",
      mitigation: "Access controls, encryption, monitoring",
      icon: Database,
      color: "text-red-500"
    },
    {
      name: "Supply Chain",
      description: "Attacks through third-party vendors",
      risk: "High",
      mitigation: "Vendor assessment, code signing",
      icon: Server,
      color: "text-red-500"
    }
  ];

  const securityTools = [
    {
      name: "SIEM Platform",
      description: "Security Information and Event Management",
      purpose: "Centralized security monitoring and analysis",
      icon: Shield, // Changed from Monitor to Shield as Monitor is not imported
      status: "Active"
    },
    {
      name: "EDR Solution",
      description: "Endpoint Detection and Response",
      purpose: "Advanced threat detection on endpoints",
      icon: Smartphone,
      status: "Active"
    },
    {
      name: "Firewall Management",
      description: "Next-generation firewall protection",
      purpose: "Network traffic filtering and control",
      icon: Network,
      status: "Active"
    },
    {
      name: "Vulnerability Scanner",
      description: "Automated security assessment",
      purpose: "Identify and prioritize security vulnerabilities",
      icon: Eye,
      status: "Active"
    },
    {
      name: "Identity Management",
      description: "User access control and authentication",
      purpose: "Manage user identities and permissions",
      icon: Key,
      status: "Active"
    },
    {
      name: "Data Loss Prevention",
      description: "Prevent sensitive data exfiltration",
      purpose: "Monitor and control data movement",
      icon: Shield,
      status: "Active"
    }
  ];

  const securityMetrics = [
    { label: "Threats Blocked", value: "2.4M+", icon: Shield, color: "text-green-500" },
    { label: "Security Incidents", value: "0", icon: CheckCircle, color: "text-green-500" },
    { label: "Response Time", value: "< 5 min", icon: Clock, color: "text-blue-500" },
    { label: "Uptime", value: "99.99%", icon: Star, color: "text-yellow-500" }
  ];

  const renderContent = () => {
    switch (selectedCategory) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Security Overview</h2>
              <p className="text-zion-slate-light max-w-3xl mx-auto">
                Zion Tech Group maintains the highest standards of security to protect our clients' data and systems. 
                Our comprehensive security approach combines technology, processes, and people to create a robust defense.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {securityMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`${metric.color} mb-2 flex justify-center`}>
                    <metric.icon className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-zion-slate-light text-sm">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Our Security Philosophy</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-2">Defense in Depth</h4>
                  <p className="text-zion-slate-light text-sm">
                    Multiple layers of security controls to ensure comprehensive protection across all systems and data.
                  </p>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-2">Zero Trust</h4>
                  <p className="text-zion-slate-light text-sm">
                    Never trust, always verify approach to access control and authentication.
                  </p>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-2">Continuous Monitoring</h4>
                  <p className="text-zion-slate-light text-sm">
                    24/7 security monitoring and real-time threat detection and response.
                  </p>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-2">Proactive Defense</h4>
                  <p className="text-zion-slate-light text-sm">
                    Anticipate and prevent threats before they can impact our systems or clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'practices':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Security Best Practices</h2>
              <p className="text-zion-slate-light max-w-3xl mx-auto">
                We implement industry-leading security practices to protect our infrastructure and client data.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityPractices.map((practice, index) => (
                <motion.div
                  key={practice.title}
                  className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-zinc-700/50 p-3 rounded-lg">
                      <practice.icon className="w-6 h-6 text-zion-cyan" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-2">{practice.title}</h3>
                      <p className="text-zion-slate-light text-sm mb-3">{practice.description}</p>
                      <span className={`text-sm font-medium ${practice.color}`}>
                        {practice.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'compliance':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Compliance & Standards</h2>
              <p className="text-zion-slate-light max-w-3xl mx-auto">
                We maintain compliance with major industry standards and regulatory requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard.name}
                  className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-zinc-700/50 p-3 rounded-lg">
                      <standard.icon className={`w-6 h-6 ${standard.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-2">{standard.name}</h3>
                      <p className="text-zion-slate-light text-sm mb-3">{standard.description}</p>
                      <span className={`text-sm font-medium ${standard.color}`}>
                        {standard.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'threats':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Security Threats & Mitigation</h2>
              <p className="text-zion-slate-light max-w-3xl mx-auto">
                Understanding the threat landscape and implementing effective countermeasures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityThreats.map((threat, index) => (
                <motion.div
                  key={threat.name}
                  className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-zinc-700/50 p-3 rounded-lg">
                      <threat.icon className={`w-6 h-6 ${threat.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-semibold">{threat.name}</h3>
                        <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                          threat.risk === 'High' ? 'bg-red-500/20 text-red-400' :
                          threat.risk === 'Medium' ? 'bg-orange-500/20 text-orange-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {threat.risk}
                        </span>
                      </div>
                      <p className="text-zion-slate-light text-sm mb-3">{threat.description}</p>
                      <div>
                        <span className="text-zion-cyan text-sm font-medium">Mitigation:</span>
                        <p className="text-zion-slate-light text-sm">{threat.mitigation}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'tools':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Security Tools & Technologies</h2>
              <p className="text-zion-slate-light max-w-3xl mx-auto">
                We leverage advanced security tools and technologies to maintain robust protection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-zinc-700/50 p-3 rounded-lg">
                      <tool.icon className="w-6 h-6 text-zion-cyan" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-2">{tool.name}</h3>
                      <p className="text-zion-slate-light text-sm mb-3">{tool.description}</p>
                      <div className="mb-3">
                        <span className="text-zion-cyan text-sm font-medium">Purpose:</span>
                        <p className="text-zion-slate-light text-sm">{tool.purpose}</p>
                      </div>
                      <span className="text-green-500 text-sm font-medium">{tool.status}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/50 to-green-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4 rounded-full">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Security <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Center</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Learn about our comprehensive security practices, compliance standards, and how we protect your data.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search security topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-blue-400/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {securityCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {renderContent()}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/50 to-green-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Have Security Questions?
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our security team is here to answer your questions and provide detailed information about our security practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                Contact Security Team
              </Link>
              <Link to="/support" className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-colors">
                Security Support
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
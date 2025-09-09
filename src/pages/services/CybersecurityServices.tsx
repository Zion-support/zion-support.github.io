import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  CheckCircle,
  ArrowRight,
  Play,
  Database,
  Globe,
  Zap
} from 'lucide-react';

export default function CybersecurityServices() {
  const securityServices = [
    {
      title: "Threat Detection & Response",
      description: "Advanced threat detection with real-time monitoring and automated incident response",
      icon: Eye,
      features: ["24/7 monitoring", "AI-powered detection", "Automated response", "Incident management"]
    },
    {
      title: "Security Assessment",
      description: "Comprehensive security audits and vulnerability assessments for your infrastructure",
      icon: Shield,
      features: ["Penetration testing", "Vulnerability scanning", "Security audits", "Compliance checks"]
    },
    {
      title: "Identity & Access Management",
      description: "Secure user authentication and authorization with multi-factor authentication",
      icon: Lock,
      features: ["SSO integration", "MFA implementation", "Role-based access", "Privilege management"]
    },
    {
      title: "Data Protection",
      description: "End-to-end encryption and data loss prevention for sensitive information",
      icon: Database,
      features: ["Data encryption", "Backup security", "DLP solutions", "Compliance support"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Comprehensive Protection",
      description: "Multi-layered security approach covering all aspects of your digital infrastructure"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified cybersecurity professionals with years of experience in threat prevention"
    },
    {
      icon: CheckCircle,
      title: "Compliance Ready",
      description: "Meet industry standards and regulatory requirements with our security solutions"
    },
    {
      icon: Zap,
      title: "24/7 Monitoring",
      description: "Round-the-clock security monitoring and rapid response to any threats"
    }
  ];

  const compliance = [
    {
      name: "SOC 2",
      description: "Service Organization Control 2 compliance for data security and privacy",
      icon: "🔒",
      requirements: ["Security", "Availability", "Processing integrity", "Confidentiality", "Privacy"]
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management systems",
      icon: "🌐",
      requirements: ["Risk assessment", "Security controls", "Management commitment", "Continuous improvement"]
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance for EU data privacy",
      icon: "🇪🇺",
      requirements: ["Data protection", "Privacy by design", "Consent management", "Data subject rights"]
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act compliance",
      icon: "🏥",
      requirements: ["Patient privacy", "Data security", "Administrative safeguards", "Physical safeguards"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Cybersecurity
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business with enterprise-grade cybersecurity solutions and expert threat prevention
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Protected
              </Link>
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Security Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions to protect your business from evolving threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Our Security?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the peace of mind that comes with enterprise-grade cybersecurity protection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet industry standards and regulatory requirements with our comprehensive security solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {compliance.map((standard, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{standard.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{standard.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{standard.description}</p>
                <ul className="space-y-1">
                  {standard.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="text-xs text-gray-500">
                      • {requirement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Tools Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Security Tools & Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry-leading security tools and technologies to protect your digital assets
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "SIEM", icon: "📊" },
              { name: "EDR", icon: "🛡️" },
              { name: "Firewall", icon: "🔥" },
              { name: "VPN", icon: "🔐" },
              { name: "Antivirus", icon: "🦠" },
              { name: "IDS/IPS", icon: "🚨" },
              { name: "DLP", icon: "📁" },
              { name: "IAM", icon: "👤" },
              { name: "Encryption", icon: "🔒" },
              { name: "Backup", icon: "💾" },
              { name: "Monitoring", icon: "👁️" },
              { name: "Compliance", icon: "✅" }
            ].map((tool, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300 text-center group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-2">{tool.icon}</div>
                <div className="text-sm text-gray-300 font-medium">{tool.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Landscape Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Current Threat Landscape
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed about the latest cybersecurity threats and our proactive defense strategies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Ransomware Attacks",
                description: "Sophisticated ransomware targeting businesses with double extortion tactics",
                icon: AlertTriangle,
                color: "from-red-500 to-pink-600"
              },
              {
                title: "Phishing Campaigns",
                description: "Social engineering attacks using AI-generated content and deepfake technology",
                icon: Eye,
                color: "from-yellow-500 to-orange-600"
              },
              {
                title: "Supply Chain Attacks",
                description: "Targeting software dependencies and third-party vendors for widespread impact",
                icon: Globe,
                color: "from-purple-500 to-indigo-600"
              }
            ].map((threat, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${threat.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <threat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{threat.title}</h3>
                <p className="text-gray-400 text-sm">{threat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait until it's too late. Protect your business with our comprehensive cybersecurity solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Security Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/services"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
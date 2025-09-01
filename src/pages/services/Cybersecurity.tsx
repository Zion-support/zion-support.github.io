import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  Cpu, 
  Clock,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Play,
  Globe,
  Lock,
  Database,
  Workflow,
  Sparkles,
  Target,
  Lightbulb,
  Rocket,
  Star,
  Award,
  Brain,
  Code,
  Server,
  Network,
  Eye,
  Activity,
  HardDrive,
  Wifi,
  Cloud,
  AlertTriangle,
  ShieldCheck,
  Key,
  Fingerprint,
  Monitor,
  Search,
  FileText,
  Settings
} from 'lucide-react';

export function Cybersecurity() {
  const cyberServices = [
    {
      title: 'Threat Detection & Response',
      description: 'Advanced threat detection and automated response systems',
      icon: Eye,
      features: ['Real-time Monitoring', 'AI-Powered Detection', 'Automated Response', 'Incident Management']
    },
    {
      title: 'Zero Trust Security',
      description: 'Implement comprehensive zero trust architecture',
      icon: ShieldCheck,
      features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Continuous Monitoring']
    },
    {
      title: 'Penetration Testing',
      description: 'Comprehensive security assessments and vulnerability testing',
      icon: Search,
      features: ['Vulnerability Assessment', 'Security Audits', 'Red Team Testing', 'Compliance Testing']
    },
    {
      title: 'Security Operations Center',
      description: '24/7 security monitoring and incident response',
      icon: Monitor,
      features: ['24/7 Monitoring', 'Threat Intelligence', 'Incident Response', 'Security Analytics']
    },
    {
      title: 'Compliance & Governance',
      description: 'Ensure compliance with security standards and regulations',
      icon: FileText,
      features: ['SOC 2 Compliance', 'GDPR Compliance', 'ISO 27001', 'Security Policies']
    },
    {
      title: 'Security Consulting',
      description: 'Strategic security guidance and implementation support',
      icon: Lightbulb,
      features: ['Security Strategy', 'Risk Assessment', 'Implementation Planning', 'Training & Awareness']
    }
  ];

  const benefits = [
    {
      title: 'Comprehensive Protection',
      description: 'Multi-layered security approach for complete protection',
      icon: Shield
    },
    {
      title: '24/7 Monitoring',
      description: 'Round-the-clock security monitoring and threat detection',
      icon: Monitor
    },
    {
      title: 'Compliance Ready',
      description: 'Meet industry standards and regulatory requirements',
      icon: CheckCircle
    },
    {
      title: 'Proactive Defense',
      description: 'Stay ahead of threats with predictive security measures',
      icon: Target
    }
  ];

  const threats = [
    {
      type: 'Ransomware',
      icon: Lock,
      description: 'Protect against data encryption attacks',
      solutions: ['Backup Systems', 'Email Security', 'Endpoint Protection', 'User Training']
    },
    {
      type: 'Phishing',
      icon: Users,
      description: 'Combat social engineering attacks',
      solutions: ['Email Filtering', 'User Awareness', 'Multi-Factor Authentication', 'Security Training']
    },
    {
      type: 'DDoS Attacks',
      icon: Network,
      description: 'Defend against distributed denial of service',
      solutions: ['Traffic Filtering', 'CDN Protection', 'Load Balancing', 'Incident Response']
    },
    {
      type: 'Insider Threats',
      icon: Eye,
      description: 'Monitor and prevent internal security risks',
      solutions: ['Access Controls', 'User Monitoring', 'Data Loss Prevention', 'Behavioral Analytics']
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity
              <span className="block bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Protect your business with enterprise-grade cybersecurity solutions. 
              From threat detection to compliance management, we secure your digital assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-3 border border-red-500 text-red-400 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-200">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Cybersecurity Services
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive security solutions designed to protect your business from evolving threats
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cyberServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                </div>
                <p className="text-slate-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="h-4 w-4 text-red-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Protection Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Threat Protection
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive protection against the most common cyber threats
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {threats.map((threat, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg">
                    <threat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{threat.type}</h3>
                    <p className="text-slate-300">{threat.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {threat.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-300">
                      <ArrowRight className="w-4 h-4 text-red-400" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Cybersecurity?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Experience enterprise-grade security protection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how our cybersecurity solutions can protect your digital assets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-200"
              >
                Get Free Security Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-red-500 text-red-400 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Cybersecurity;
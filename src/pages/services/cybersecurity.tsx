import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  Zap,
  Target,
  Users,
  BarChart3,
  Brain,
  Rocket,
  Globe,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Star,
  TrendingUp,
  Activity,
  Code,
  Database,
  Server,
  Network,
  Eye,
  Heart,
  Building,
  Briefcase,
  TestTube,
  GraduationCap,
  HelpCircle,
  Lock,
  Cpu,
  Cloud,
  AlertTriangle,
  Key,
  Monitor
} from 'lucide-react';

export function CybersecurityPage() {
  const securityServices = [
    {
      title: 'Zero Trust Security',
      description: 'Implement comprehensive zero trust architecture for maximum security',
      icon: Shield,
      href: '/services/zero-trust-security',
      features: ['Identity Verification', 'Continuous Monitoring', 'Least Privilege Access', 'Micro-segmentation'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'AI Threat Detection',
      description: 'Advanced threat detection powered by artificial intelligence and machine learning',
      icon: Brain,
      href: '/services/ai-cybersecurity-threat-detection',
      features: ['Behavioral Analysis', 'Anomaly Detection', 'Predictive Security', 'Real-time Alerts'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Security Headers & CSP',
      description: 'Implement comprehensive security headers and content security policies',
      icon: Lock,
      href: '/services/security-headers-csp',
      features: ['XSS Protection', 'CSRF Prevention', 'Content Security Policy', 'Security Headers'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Incident Response Platform',
      description: 'Comprehensive incident response and management platform',
      icon: AlertTriangle,
      href: '/services/incident-response-platform',
      features: ['Automated Response', 'Forensic Analysis', 'Incident Tracking', 'Recovery Procedures'],
      color: 'from-red-500 to-orange-600'
    },
    {
      title: 'SOC2 Compliance Tracker',
      description: 'Maintain SOC2 compliance with automated monitoring and reporting',
      icon: CheckCircle,
      href: '/services/soc2-compliance-tracker',
      features: ['Compliance Monitoring', 'Automated Reporting', 'Audit Trails', 'Risk Assessment'],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Smart Contract Security',
      description: 'Blockchain and smart contract security auditing and monitoring',
      icon: Code,
      href: '/services/smart-contract-risk-scanner',
      features: ['Vulnerability Scanning', 'Code Auditing', 'Risk Assessment', 'Security Best Practices'],
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const securityCapabilities = [
    {
      title: 'Threat Intelligence',
      description: 'Real-time threat intelligence and analysis capabilities',
      icon: Eye,
      features: ['Threat Feeds', 'IOC Analysis', 'Threat Hunting', 'Intelligence Sharing']
    },
    {
      title: 'Vulnerability Management',
      description: 'Comprehensive vulnerability assessment and remediation',
      icon: Target,
      features: ['Automated Scanning', 'Risk Prioritization', 'Patch Management', 'Compliance Reporting']
    },
    {
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident detection',
      icon: Monitor,
      features: ['SIEM Integration', 'Log Analysis', 'Real-time Alerts', 'Incident Response']
    },
    {
      title: 'Compliance Management',
      description: 'Maintain compliance with industry standards and regulations',
      icon: CheckCircle,
      features: ['SOC2', 'ISO 27001', 'GDPR', 'HIPAA']
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: Heart, description: 'HIPAA compliance and patient data protection' },
    { name: 'Finance', icon: Building, description: 'PCI DSS and financial data security' },
    { name: 'Government', icon: Shield, description: 'FedRAMP and government security standards' },
    { name: 'E-commerce', icon: Network, description: 'Payment security and fraud prevention' },
    { name: 'Manufacturing', icon: Activity, description: 'OT security and industrial control systems' },
    { name: 'Education', icon: GraduationCap, description: 'Student data protection and privacy' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/20 rounded-full mb-6">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">Cybersecurity</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              Advanced Security
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Protect your digital assets with AI-powered cybersecurity solutions. 
              Our comprehensive security platform provides real-time threat detection, 
              zero trust architecture, and compliance management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Protected</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold text-lg border border-white/20 hover:border-white/40"
              >
                <span>View All Services</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Capabilities */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Security Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our cybersecurity platform combines advanced technologies to provide 
              comprehensive protection against evolving threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-400 mb-4">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Cybersecurity Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our comprehensive range of cybersecurity services designed to 
              protect your organization from advanced threats and ensure compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-green-500/20"
              >
                <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                  <service.icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors group-hover:translate-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industries We Protect</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our cybersecurity solutions are tailored to meet the unique security 
              requirements across diverse industry sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-400">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Advanced Security Features
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Our cybersecurity platform provides enterprise-grade protection with 
            cutting-edge technologies and continuous monitoring.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Detection</h3>
              <p className="text-green-100">Machine learning algorithms for advanced threat detection</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Zero Trust Architecture</h3>
              <p className="text-green-100">Never trust, always verify security model</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Monitoring</h3>
              <p className="text-green-100">Continuous security monitoring and threat response</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Get Security Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
            >
              <span>Request a Quote</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Don't wait for a breach to happen. Our cybersecurity experts are ready to 
            help you implement comprehensive security solutions that protect your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Get Protected Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/training"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
            >
              <span>Security Training</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CybersecurityPage;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Eye,
  Network,
  Server,
  Database,
  Code,
  Brain,
  Zap,
  Target,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Globe,
  Cpu,
  TrendingUp,
  DollarSign,
  Building,
  Users,
  FileText,
  Search,
  Cloud,
  Briefcase,
  Award,
  Clock,
  AlertTriangle,
  ShieldCheck,
  Key,
  Fingerprint,
  Monitor,
  Activity,
  BarChart3,
  Heart,
  Atom,
  PieChart,
  LineChart,
  BarChart,
  ScatterPlot,
  Heatmap,
  TreeMap,
  Sunburst,
  Sankey,
  Force,
  Chord,
  Treemap,
  Voronoi,
  Contour,
  Surface,
  Mesh,
  Stream,
  Area,
  StackedArea,
  StackedBar,
  GroupedBar,
  HorizontalBar,
  RangeBar,
  Waterfall,
  Funnel,
  Pyramid,
  Radar,
  Polar,
  Donut,
  Gauge,
  Meter,
  Progress,
  Bullet,
  Histogram,
  BoxPlot,
  Violin,
  Strip,
  Swarm,
  Beeswarm,
  Jitter,
  Ridge,
  Joy
} from 'lucide-react';

export function Cybersecurity() {
  const features = [
    {
      icon: Shield,
      title: 'Zero Trust Security',
      description: 'Implement comprehensive security with zero-trust architecture',
      benefits: ['Identity verification', 'Continuous monitoring', 'Least privilege access']
    },
    {
      icon: Brain,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced AI algorithms for real-time threat identification',
      benefits: ['Behavioral analysis', 'Anomaly detection', 'Predictive security']
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Comprehensive data encryption and privacy controls',
      benefits: ['End-to-end encryption', 'Data classification', 'Compliance management']
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Protect network infrastructure from cyber threats',
      benefits: ['Firewall management', 'Intrusion detection', 'Traffic monitoring']
    },
    {
      icon: Server,
      title: 'Endpoint Security',
      description: 'Secure all devices and endpoints in your network',
      benefits: ['Device management', 'Malware protection', 'Access control']
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident response',
      benefits: ['Real-time alerts', 'Incident response', 'Security analytics']
    }
  ];

  const services = [
    {
      category: 'Security Assessment',
      icon: Search,
      services: ['Vulnerability Assessment', 'Penetration Testing', 'Security Audits', 'Risk Analysis'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      category: 'Incident Response',
      icon: AlertTriangle,
      services: ['Threat Hunting', 'Forensic Analysis', 'Incident Management', 'Recovery Planning'],
      color: 'from-red-500 to-pink-600'
    },
    {
      category: 'Compliance & Governance',
      icon: ShieldCheck,
      services: ['SOC 2 Compliance', 'ISO 27001', 'GDPR Compliance', 'Security Policies'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      category: 'Security Training',
      icon: Users,
      services: ['Security Awareness', 'Phishing Simulations', 'Incident Response Training', 'Best Practices'],
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  const technologies = [
    { name: 'SIEM Systems', description: 'Security Information and Event Management', icon: Monitor },
    { name: 'EDR Solutions', description: 'Endpoint Detection and Response', icon: Shield },
    { name: 'Firewall Management', description: 'Next-generation firewall solutions', icon: Network },
    { name: 'Identity Management', description: 'Multi-factor authentication and SSO', icon: Key },
    { name: 'Encryption Tools', description: 'Data encryption and key management', icon: Lock },
    { name: 'Threat Intelligence', description: 'Real-time threat feeds and analysis', icon: Brain }
  ];

  const complianceFrameworks = [
    {
      name: 'SOC 2 Type II',
      description: 'Service Organization Control 2 compliance for data security',
      icon: ShieldCheck
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management',
      icon: Award
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      icon: Lock
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-16 h-16 text-red-400" />
              <h1 className="text-5xl font-bold">Cybersecurity Services</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protect your digital assets with comprehensive cybersecurity solutions. 
              From threat detection to compliance management, we provide the security 
              foundation your business needs to thrive in the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                Secure Your Business
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/20"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our cybersecurity services cover every aspect of digital security, 
              providing comprehensive protection for your organization's assets and data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-700/50 rounded-lg p-6 border border-gray-600 hover:border-red-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-500/20 rounded-lg">
                    <feature.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-red-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Security Service Categories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our cybersecurity services are organized into comprehensive categories 
              to address all aspects of your security needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-8 border border-gray-600"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.category}</h3>
                </div>
                <ul className="space-y-3">
                  {service.services.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <ArrowRight className="w-4 h-4 text-red-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Security Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We leverage cutting-edge security technologies and tools to provide 
              comprehensive protection for your digital infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-700/30 rounded-lg p-6 border border-gray-600 hover:border-red-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <tech.icon className="w-6 h-6 text-red-400" />
                  <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                </div>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our cybersecurity solutions help you meet industry standards and regulatory 
              requirements while maintaining robust security practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg p-8 border border-gray-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600">
                    <framework.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{framework.name}</h3>
                </div>
                <p className="text-gray-300 text-lg">{framework.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Digital Future?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Let's discuss how our cybersecurity solutions can protect your business 
              and ensure compliance with industry standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                Schedule Security Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Cybersecurity;
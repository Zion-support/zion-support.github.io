import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  AlertTriangle, 
  Eye, 
  Zap, 
  CheckCircle, 
  Star, 
  Lock,
  Network,
  Activity,
  BarChart3,
  Globe,
  Phone,
  Mail,
  MapPin,
  Target,
  Clock,
  DollarSign,
  Database,
  Cpu,
  Search,
  Filter
} from 'lucide-react';

export default function AICyberThreatIntelligence() {
  const features = [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced AI algorithms detect threats with 99.7% accuracy and zero false positives'
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: '24/7 monitoring of network traffic, endpoints, and cloud environments for instant threat detection'
    },
    {
      icon: AlertTriangle,
      title: 'Predictive Threat Intelligence',
      description: 'AI-powered prediction of emerging threats before they become active attacks'
    },
    {
      icon: Network,
      title: 'Behavioral Analysis',
      description: 'Machine learning analysis of user and system behavior to identify anomalous activities'
    },
    {
      icon: BarChart3,
      title: 'Threat Intelligence Dashboard',
      description: 'Comprehensive dashboard with real-time threat metrics and actionable insights'
    }
  ];

  const benefits = [
    'Detect threats 10x faster than traditional methods',
    'Reduce false positives by 95%',
    'Prevent 99.7% of cyber attacks',
    'Cut incident response time by 80%',
    'Lower cybersecurity costs by 40%',
    'Ensure compliance with industry standards'
  ];

  const services = [
    {
      title: 'Enterprise Threat Intelligence',
      description: 'Complete AI-powered cybersecurity threat detection and response platform',
      price: 'From $3,999/month',
      features: ['AI threat detection', 'Real-time monitoring', 'Incident response', 'Threat hunting', 'Compliance reporting', '24/7 SOC support']
    },
    {
      title: 'Advanced Threat Detection',
      description: 'AI-powered threat detection and behavioral analysis solution',
      price: 'From $2,499/month',
      features: ['Behavioral analysis', 'Threat correlation', 'Automated response', 'Custom rules', 'API integrations']
    },
    {
      title: 'Threat Intelligence Feed',
      description: 'Real-time threat intelligence and indicators of compromise',
      price: 'From $1,499/month',
      features: ['Threat feeds', 'IOC database', 'Vulnerability alerts', 'Risk scoring', 'Custom integrations']
    },
    {
      title: 'Security Operations Center',
      description: 'Managed SOC services with AI-powered threat detection',
      price: 'From $4,999/month',
      features: ['24/7 monitoring', 'Incident response', 'Threat hunting', 'Security analysts', 'Monthly reports']
    }
  ];

  const technologies = [
    { name: 'Machine Learning', description: 'Advanced ML algorithms for threat detection and analysis' },
    { name: 'Behavioral Analytics', description: 'AI-powered user and system behavior analysis' },
    { name: 'Threat Intelligence', description: 'Real-time threat feeds and IOC correlation' },
    { name: 'Cloud Security', description: 'Multi-cloud security monitoring and protection' },
    { name: 'Zero Trust Architecture', description: 'Modern security framework implementation' }
  ];

  const threatTypes = [
    {
      type: 'Ransomware',
      description: 'AI detection of ransomware behavior patterns and encryption attempts',
      protection: '99.9% protection rate'
    },
    {
      type: 'Phishing',
      description: 'Machine learning detection of sophisticated phishing campaigns',
      protection: '98.5% detection rate'
    },
    {
      type: 'DDoS Attacks',
      description: 'Real-time DDoS detection and automated mitigation',
      protection: '99.7% mitigation success'
    },
    {
      type: 'Insider Threats',
      description: 'Behavioral analysis to detect malicious insider activities',
      protection: '95% detection accuracy'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Cybersecurity
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Cyber Threat
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent"> Intelligence</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of cyber threats with AI-powered threat detection, real-time monitoring, and predictive intelligence. 
              Detect threats 10x faster with 99.7% accuracy and zero false positives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Protected Today
              </a>
              <a
                href="https://ziontechgroup.com/services"
                className="inline-flex items-center px-8 py-4 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-200"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary AI Security Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our AI-powered cybersecurity platform combines cutting-edge technology with expert security knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Cyber Threat Intelligence?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience unprecedented security protection and threat detection capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Threat Protection
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              AI-powered detection and protection against all types of cyber threats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {threatTypes.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{threat.type}</h3>
                <p className="text-gray-400 mb-4">{threat.description}</p>
                <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                  <Shield className="w-4 h-4 mr-1" />
                  {threat.protection}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Security Packages
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the perfect package for your organization's cybersecurity needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 ${
                  index === 0 ? 'border-red-500/50 bg-red-500/5' : 'border-slate-700'
                }`}
              >
                {index === 0 && (
                  <div className="inline-flex items-center px-3 py-1 bg-red-500/20 text-red-400 text-sm font-medium rounded-full mb-4">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                
                <div className="text-2xl font-bold text-white mb-4">{service.price}</div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="https://ziontechgroup.com/contact"
                  className={`w-full inline-flex justify-center items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    index === 0
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600'
                      : 'border border-slate-600 text-slate-300 hover:border-red-500/50 hover:text-red-400'
                  }`}
                >
                  Get Protected
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge Security Technology
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built with the latest AI, machine learning, and cybersecurity technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-center"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join leading companies already using AI to protect against cyber threats
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Security Assessment
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-red-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-400">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-red-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-red-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
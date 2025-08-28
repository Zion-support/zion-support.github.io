import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  Eye, 
  Lock, 
  AlertTriangle, 
  Zap, 
  Users, 
  CheckCircle,
  ArrowRight,
  TrendingUp,
  BarChart3,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Target,
  Star,
  Award,
  Lightbulb,
  Sparkles,
  Network,
  Server,
  Smartphone,
  Monitor,
  Database,
  Globe,
  Clock,
  Activity,
  ShieldCheck,
  Fingerprint,
  Key,
  Bug,
  Virus,
  Fire,
  FileText,
  Cloud
} from 'lucide-react';

const AICybersecurity: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms for real-time threat identification and response',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Eye,
      title: 'Behavioral Analytics',
      description: 'AI-powered user behavior analysis to detect anomalies and potential threats',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Zero Trust Security',
      description: 'Comprehensive zero-trust architecture with AI-driven access control',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'AI-enhanced network monitoring and intrusion detection systems',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Data Protection',
      description: 'Intelligent data encryption and privacy protection with AI oversight',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Round-the-clock AI security monitoring and automated threat response',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const securitySolutions = [
    {
      title: 'Threat Intelligence',
      description: 'AI-powered threat intelligence and predictive analytics for proactive security',
      icon: Target,
      benefits: ['Real-time threat detection', 'Predictive analysis', 'Automated response', 'Global threat database'],
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Endpoint Security',
      description: 'AI-enhanced endpoint protection for devices, servers, and cloud infrastructure',
      icon: Shield,
      benefits: ['Device protection', 'Malware detection', 'Behavioral analysis', 'Automated remediation'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Identity & Access Management',
      description: 'Intelligent identity verification and access control systems',
      icon: Fingerprint,
      benefits: ['Multi-factor authentication', 'Biometric verification', 'Access monitoring', 'Privilege management'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cloud Security',
      description: 'AI-powered cloud infrastructure protection and compliance monitoring',
      icon: Cloud,
      benefits: ['Cloud monitoring', 'Compliance automation', 'Threat prevention', 'Data protection'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const industries = [
    'Financial Services',
    'Healthcare & Pharmaceuticals',
    'Government & Defense',
    'Technology Companies',
    'Manufacturing',
    'Retail & E-commerce',
    'Energy & Utilities',
    'Education',
    'Legal Services',
    'Transportation & Logistics'
  ];

  const benefits = [
    'Reduce security incidents by 90%',
    'Improve threat detection by 95%',
    'Cut response time by 80%',
    'Lower security costs by 40%',
    '24/7 automated monitoring',
    'Predictive threat prevention',
    'Compliance automation',
    'Global threat intelligence'
  ];

  const technologies = [
    'Machine Learning & AI',
    'Behavioral Analytics',
    'Threat Intelligence',
    'Zero Trust Architecture',
    'Blockchain Security',
    'Quantum Cryptography',
    'IoT Security',
    'Cloud Security'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Cybersecurity - Zion Tech Group"
        description="Revolutionary AI-powered cybersecurity solutions for threat detection, prevention, and response. Protect your organization with cutting-edge AI security technology."
        keywords="AI cybersecurity, cybersecurity AI, threat detection, security automation, AI security, cyber protection, Zion Tech Group"
        ogType="website"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium">
                <Shield className="w-4 h-4" />
                AI Security Innovation
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                AI-Powered
                <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Cybersecurity
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Transform your security posture with our revolutionary AI platform. From threat detection to automated response, we're bringing the future of cybersecurity to your organization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-futuristic bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700">
                  <Shield className="w-5 h-5" />
                  Security Assessment
                </button>
                <button className="btn-futuristic-outline">
                  <FileText className="w-5 h-5" />
                  Download Whitepaper
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="w-full h-96 bg-gradient-to-br from-red-500/20 via-orange-500/20 to-yellow-500/20 rounded-2xl border border-red-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Shield className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">AI Cybersecurity</h3>
                    <p className="text-gray-300">Revolutionary Security Solutions</p>
                  </div>
                </div>
              </div>
              
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Revolutionary Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI cybersecurity platform combines cutting-edge technology with security expertise to deliver unprecedented protection and threat intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 hover:bg-slate-700/50"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Solutions Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From threat intelligence to endpoint protection, our AI platform covers every aspect of modern cybersecurity with intelligent automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {securitySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{solution.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{solution.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Why Choose AI Cybersecurity?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented protection and efficiency in your cybersecurity operations with our AI-powered platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 text-center hover:border-red-500/50 transition-all duration-300 hover:bg-slate-600/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium text-sm leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Cutting-Edge Security Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform leverages the latest advancements in artificial intelligence and cybersecurity to deliver superior protection capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 text-center hover:border-red-500/50 transition-all duration-300 hover:bg-slate-700/50 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium text-sm leading-relaxed">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Industries We Protect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI cybersecurity platform is designed to meet the unique security needs of various industries and business sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 text-center hover:border-red-500/50 transition-all duration-300 hover:bg-slate-600/50 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium text-sm leading-relaxed">{industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the cybersecurity revolution with our AI-powered platform. Protect your organization with the future of security technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700">
                <MessageCircle className="w-5 h-5" />
                Security Assessment
              </button>
              <button className="btn-futuristic-outline">
                <Phone className="w-5 h-5" />
                Contact Security Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ready to revolutionize your cybersecurity with AI? Our team of security experts is here to help you implement the future of cyber protection.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">+1 302 464 0950</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Request Security Assessment</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                
                <input
                  type="text"
                  placeholder="Organization"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                
                <textarea
                  placeholder="Tell us about your cybersecurity needs..."
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full btn-futuristic bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurity;
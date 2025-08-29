import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Lock,
  Eye,
  AlertTriangle,
  Activity,
  BarChart3,
  Clock,
  Star,
  Award,
  TrendingUp,
  Database,
  Network,
  Cpu,
  Smartphone,
  Monitor,
  Server,
  Cloud,
  Key,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Fingerprint,
  Scan,
  Bug,
  Virus,
  Fire,
  Target,
  Search,
  FileText
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AICybersecurity() {
  const features = [
    {
      icon: Shield,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms for real-time threat identification and response',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brain,
      title: 'Behavioral Analysis',
      description: 'AI-powered user behavior monitoring and anomaly detection',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Automated Response',
      description: 'Instant threat mitigation with intelligent security automation',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: '24/7 security surveillance across all network endpoints',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const benefits = [
    'Detect threats 10x faster than traditional methods',
    'Reduce false positives by 85%',
    'Automate 90% of security responses',
    'Provide 24/7 security monitoring',
    'Scale security across enterprise networks',
    'Reduce security incident response time by 80%'
  ];

  const useCases = [
    {
      title: 'Network Security',
      description: 'AI-powered intrusion detection and network traffic analysis',
      icon: Network
    },
    {
      title: 'Endpoint Protection',
      description: 'Advanced malware detection and device security monitoring',
      icon: Smartphone
    },
    {
      title: 'Cloud Security',
      description: 'Intelligent cloud infrastructure protection and compliance',
      icon: Cloud
    },
    {
      title: 'Data Protection',
      description: 'AI-driven data loss prevention and encryption management',
      icon: Database
    }
  ];

  const threatTypes = [
    'Malware & Ransomware',
    'Phishing Attacks',
    'DDoS Attacks',
    'Insider Threats',
    'Zero-Day Exploits',
    'Advanced Persistent Threats',
    'Social Engineering',
    'Supply Chain Attacks',
    'IoT Vulnerabilities',
    'Cloud Security Breaches',
    'API Security Threats',
    'Mobile Security Risks'
  ];

  const technologies = [
    'Machine Learning & Deep Learning',
    'Behavioral Analytics',
    'Threat Intelligence Platforms',
    'Network Traffic Analysis',
    'Endpoint Detection & Response',
    'Security Information & Event Management',
    'Zero Trust Architecture',
    'Blockchain Security'
  ];

  return (
    <>
      <SEO 
        title="AI Cybersecurity - Zion Tech Group"
        description="Revolutionary AI-powered cybersecurity platform with advanced threat detection, behavioral analysis, and automated response. Protect your organization with cutting-edge AI security technology."
        keywords="AI cybersecurity, cybersecurity platform, threat detection, security automation, AI security, cyber defense, network security, endpoint protection"
        canonical="https://ziontechgroup.com/services/ai-cybersecurity"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-red-900/20"></div>
          <div className="container-responsive relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Cybersecurity Innovation
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                AI Cybersecurity
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Protect your organization with cutting-edge AI-powered cybersecurity. 
                Our platform provides advanced threat detection, behavioral analysis, 
                and automated response to keep you secure 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Security Assessment
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-green-500 hover:text-green-400 transition-all duration-300"
                >
                  View Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Security Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive AI-powered cybersecurity solutions designed to protect 
                your organization from evolving threats.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                  Transform Your Security Posture
                </h2>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl p-8 border border-green-500/30">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">10x</div>
                      <div className="text-sm text-gray-400">Faster Detection</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">85%</div>
                      <div className="text-sm text-gray-400">Fewer False Positives</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">90%</div>
                      <div className="text-sm text-gray-400">Automated Response</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
                      <div className="text-sm text-gray-400">Monitoring</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Security Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI platform addresses critical cybersecurity challenges across 
                multiple security domains and use cases.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Threat Types */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Threats We Protect Against
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI platform detects and mitigates a wide range of cybersecurity 
                threats in real-time.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {threatTypes.map((threat, index) => (
                <motion.div
                  key={threat}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-4 text-center hover:border-red-500/50 transition-all duration-300"
                >
                  <span className="text-gray-300 text-sm font-medium">{threat}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Advanced Security Technologies
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Built with cutting-edge AI and cybersecurity technologies for 
                reliable, scalable, and effective threat protection.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                >
                  <span className="text-gray-300 font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Organization?
              </h2>
              
              <p className="text-xl text-gray-400 mb-8">
                Join leading organizations who are already using our AI cybersecurity platform 
                to protect against evolving threats and maintain robust security postures.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Security Assessment
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-green-500 hover:text-green-400 transition-all duration-300"
                >
                  Contact Security Team
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-slate-800/50">
          <div className="container-responsive">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-green-400 hover:text-green-300 transition-colors">
                  +1 302 464 0950
                </a>
                <p className="text-sm text-slate-400 mt-2">Available 24/7 for urgent support</p>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
                <p className="text-sm text-slate-400 mt-2">Response within 2 hours</p>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
                <p className="text-sm text-slate-400 mt-2">Global remote support available</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
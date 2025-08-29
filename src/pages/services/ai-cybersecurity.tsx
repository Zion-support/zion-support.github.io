import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Zap, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Brain,
  AlertTriangle,
  Network,
  Server,
  Cloud,
  Smartphone,
  Monitor,
  Database,
  Cpu,
  Globe,
  Clock,
  Star,
  Award,
  Rocket,
  MessageSquare,
  Video,
  Play,
  Settings,
  Key,
  Globe2,
  ShieldCheck,
  Leaf,
  Scale,
  Building2,
  Car,
  Home,
  Factory,
  City,
  CheckCircle2,
  ArrowUpRight,
  MailIcon,
  Phone,
  MapPin,
  Search,
  Filter,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Crosshair,
  Radar,
  Satellite,
  Telescope,
  Microscope,
  Binoculars,
  Camera,
  Video2,
  Film,
  Tv,
  Radio,
  Speaker,
  Headphones,
  Mic,
  Phone2,
  Smartphone2,
  Tablet,
  Laptop,
  Watch,
  Clock2,
  Calendar,
  Calendar2,
  User,
  Users2,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck2,
  UserX2,
  UserPlus2,
  UserMinus2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2
} from 'lucide-react';

export default function AICybersecurity() {
  const features = [
    {
      icon: Shield,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms identify and neutralize threats in real-time',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Lock,
      title: 'Zero Trust Security',
      description: 'Implement comprehensive access controls and continuous verification',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Eye,
      title: 'Behavioral Analytics',
      description: 'Monitor user and system behavior to detect anomalies and potential threats',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Automated Response',
      description: 'Instant threat containment and remediation without human intervention',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Protect your infrastructure with AI-powered intrusion detection and prevention',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'Predictive Security',
      description: 'Anticipate threats before they materialize with predictive analytics',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const securitySolutions = [
    {
      title: 'Endpoint Protection',
      description: 'Secure all devices with AI-powered malware detection and prevention',
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cloud Security',
      description: 'Protect cloud infrastructure and applications with intelligent security',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Data Protection',
      description: 'Encrypt sensitive data and implement robust access controls',
      icon: Database,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Incident Response',
      description: 'Rapid threat containment and recovery with automated workflows',
      icon: AlertTriangle,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const technologies = [
    'Machine Learning & Deep Neural Networks',
    'Behavioral Analysis & Anomaly Detection',
    'Threat Intelligence & Information Sharing',
    'Automated Incident Response & Orchestration',
    'Zero Trust Network Architecture',
    'Advanced Encryption & Key Management',
    'Security Information & Event Management (SIEM)',
    'Endpoint Detection & Response (EDR)',
    'Network Traffic Analysis (NTA)',
    'Cloud Access Security Broker (CASB)'
  ];

  const benefits = [
    'Reduce security incidents by 90%',
    'Improve threat detection by 95%',
    'Cut response time by 80%',
    'Lower security costs by 40%',
    'Enable 24/7 security monitoring',
    'Maintain compliance standards',
    'Protect against zero-day threats',
    'Scale security with business growth'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="container-responsive relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              AI Cybersecurity
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Next-Generation
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}AI Cybersecurity
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Protect your digital assets with intelligent cybersecurity that learns, 
              adapts, and evolves. Our AI-powered platform provides comprehensive 
              protection against the most sophisticated threats.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Secure Your Business
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 border border-green-500/30 text-green-300 hover:bg-green-500/10 font-semibold rounded-xl transition-all duration-300"
              >
                Security Assessment
                <Shield className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              AI-Powered Security Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our cybersecurity platform combines artificial intelligence with 
              industry-leading security practices to deliver unmatched protection.
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
                className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} w-fit mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
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

      {/* Security Solutions Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From endpoint protection to cloud security, we provide complete 
              coverage for your digital infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securitySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className={`p-4 rounded-xl bg-gradient-to-br ${solution.color} w-fit mb-6`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {solution.description}
                </p>
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
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced Security Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built with cutting-edge technologies to provide enterprise-grade 
              security and compliance capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-green-500/30 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose AI Cybersecurity?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the future of cybersecurity with intelligent protection 
              that adapts to evolving threats and business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300 leading-relaxed">{benefit}</p>
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
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Join leading organizations that trust our AI-powered cybersecurity 
              to protect their digital assets and maintain business continuity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Get Security Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-green-500/30 text-green-300 hover:bg-green-500/10 font-semibold rounded-xl transition-all duration-300"
              >
                Contact Security Team
                <MessageSquare className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
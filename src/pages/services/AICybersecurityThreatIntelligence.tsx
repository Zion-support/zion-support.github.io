<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react.ts';
import { motion   } from 'framer-motion.ts';
import { SEO   } from '../../components/SEO';
import { Shield, 
=======
import React from 'react.ts';
import { motion  } from 'framer-motion.ts';
<<<<<<< HEAD
import { SEO  } from '../../components/SEO';
import { Shield,
  AlertTriangle,
  Brain,
  Zap,
  Eye,
  Users,
  Globe,
=======
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  Globe, 
  Cpu,
  Database,
  Lock,
  BarChart3,
  Rocket,
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  Star,
  CheckCircle,
=======
import { SEO  } from '../../components/SEO';
import { Shield, 
  CheckCircle, 
  BarChart3, 
  Zap, 
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ArrowRight,
<<<<<<< HEAD
  Play,
  Settings,
  Target,
  Cpu,
<<<<<<< HEAD
  Fingerprint
export default function AICybersecurityThreatIntelligence(...args: any[]): any {
=======
  Activity,
  Sparkles,
  Search,
  Globe,
  Building,
  DollarSign,
  Network,
  Key,
  Fingerprint,
  Monitor,
  AlertTriangle,
  Clock,
  Users,
  TrendingUp,
  Lock,
  Eye,
  Database,
  Server,
  Smartphone,
  Workflow,
  Rocket,
  RefreshCw,
  Bug,
  Virus,
  AlertCircle,
  ShieldCheck,
  Fire,
  Radar,
  Satellite,
  Wifi,
  Cloud,
  HardDrive,
  Smartphone,
  Laptop,
  Tablet,
  Globe2,
  MapPin,
  Calendar,
  Calculator
 } from 'lucide-react.ts';
=======
  DollarSign,
  Clock,
  Award,
  Target,
  Workflow,
  Zap,
  Brain,
  Network,
  Code,
  GitFork,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Activity,
  Fingerprint,
  Key,
  Server
} from 'lucide-react';
import { SEO } from '../../components/SEO';
>>>>>>> 0db51c83ec2639597974243032be26f90b238361

export default function AICybersecurityThreatIntelligence(...args[]: any):  {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  const features = [
    {
<<<<<<< HEAD
      icon: Shield,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms that identify and analyze cyber threats in real-time'
    },
    {
      icon: Radar,
      title: 'Real-time Threat Intelligence',
      description: 'Continuous monitoring and analysis of global threat landscapes and emerging cyber risks'
    },
    {
      icon: Bug,
      title: 'Vulnerability Assessment',
      description: 'Automated scanning and assessment of security vulnerabilities across your infrastructure'
    },
    {
      icon: AlertTriangle,
      title: 'Proactive Threat Hunting',
      description: 'AI-driven threat hunting that identifies potential threats before they become active attacks'
    },
    {
      icon: Globe2,
      title: 'Global Threat Feed',
      description: 'Real-time threat intelligence from global sources, dark web monitoring, and threat databases'
    },
    {
      icon: ShieldCheck,
      title: 'Incident Response Automation',
      description: 'Automated response and mitigation strategies for detected threats and security incidents'
    }
  ];

  const benefits = [
    'Reduce threat detection time by 80%',
    'Improve threat response by 70%',
    'Reduce false positives by 60%',
    'Increase security visibility by 90%',
    'Reduce incident response time by 65%',
    'Improve compliance posture by 75%'
  ];

  const services = [
    {
      icon: Server,
      title: 'Threat Intelligence Platform',
      description: 'Comprehensive platform for collecting, analyzing, and disseminating threat intelligence'
    },
    {
      icon: Workflow,
      title: 'Security Operations Center',
      description: 'AI-powered SOC services with 24/7 monitoring and automated incident response'
    },
    {
      icon: Database,
<<<<<<< HEAD
      title: 'Data Protection',
      description: 'Comprehensive data loss prevention and encryption with AI-driven security policy enforcement.',
      benefits: ['Data encryption', 'DLP policies', 'Access controls', 'Compliance monitoring']

=======
      title: 'Threat Database & Analytics',
      description: 'Extensive database of known threats, attack patterns, and security intelligence'
    },
    {
      icon: Network,
      title: 'Network Security Monitoring',
      description: 'Real-time network traffic analysis and anomaly detection using AI algorithms'
=======
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that identify and analyze cyber threats in real-time"
    },
    {
      icon: Eye,
      title: "24/7 Threat Monitoring",
      description: "Continuous monitoring of network traffic, endpoints, and cloud environments for suspicious activities"
    },
    {
      icon: AlertTriangle,
      title: "Predictive Threat Intelligence",
      description: "AI algorithms that predict potential threats before they materialize using behavioral analysis"
    },
    {
      icon: Shield,
      title: "Automated Incident Response",
      description: "Intelligent automation that responds to threats instantly, minimizing damage and recovery time"
    },
    {
      icon: Network,
      title: "Threat Hunting & Analysis",
      description: "Proactive threat hunting using AI to identify hidden threats and attack patterns"
    },
    {
      icon: Workflow,
      title: "Security Orchestration",
      description: "Automated security workflows that coordinate responses across multiple security tools"
    }
  ];

  const pricingTiers = [
    {
      name: "Threat Intelligence Starter",
      price: "$599",
      period: "monthly",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 100 endpoints monitored",
        "Basic threat detection",
        "Email alerts",
        "Standard reporting",
        "Email support",
        "Basic threat intelligence feeds"
      ],
      bestFor: "Small businesses, startups, small IT teams"
    },
    {
      name: "Threat Intelligence Professional",
      price: "$1,499",
      period: "monthly",
      description: "Advanced features for growing organizations",
      features: [
        "Up to 1,000 endpoints monitored",
        "Advanced AI threat detection",
        "Real-time alerts and notifications",
        "Advanced analytics and reporting",
        "Priority support",
        "Custom threat intelligence feeds",
        "API access",
        "Threat hunting tools"
      ],
      bestFor: "Medium businesses, growing companies, security teams"
    },
    {
      name: "Threat Intelligence Enterprise",
      price: "$3,999",
      period: "monthly",
      description: "Full-scale threat intelligence platform for large enterprises",
      features: [
        "Unlimited endpoints monitored",
        "Custom AI model training",
        "Advanced threat hunting",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label solutions",
        "On-premise deployment options",
        "Security consulting services"
      ],
      bestFor: "Large enterprises, government agencies, financial institutions"
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
    }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const useCases = [
    {
<<<<<<< HEAD
      industry: 'Financial Services',
      description: 'Protect financial data, prevent fraud, and ensure regulatory compliance with AI threat intelligence'
    },
    {
      industry: 'Healthcare',
      description: 'Secure patient data, protect medical devices, and ensure HIPAA compliance'
    },
    {
      industry: 'Government & Defense',
      description: 'National security, classified information protection, and critical infrastructure security'
    },
    {
<<<<<<< HEAD
      industry: 'E-commerce',
      title: 'Customer Data Protection',
      description: 'Secure online transactions and customer information with advanced fraud detection and threat prevention.',
      metrics: ['95% reduction in fraud losses', '100% secure transactions', 'Real-time threat blocking']

=======
      title: "Financial Services",
      description: "Protect financial data, prevent fraud, and ensure regulatory compliance",
      icon: DollarSign
    },
    {
      title: "Healthcare",
      description: "Secure patient data, protect medical devices, and ensure HIPAA compliance",
      icon: Users
    },
    {
      title: "Government",
      description: "National security, critical infrastructure protection, and classified data security",
      icon: Shield
    },
    {
      title: "Manufacturing",
      description: "Industrial control system security and supply chain protection",
      icon: Factory
    },
    {
      title: "Retail & E-commerce",
      description: "Customer data protection, payment security, and fraud prevention",
      icon: ShoppingCart
    },
    {
      title: "Education",
      description: "Student data protection, research security, and academic integrity",
      icon: BookOpen
    }
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  ];

  const benefits = [
    "99.9% threat detection accuracy with AI",
    "Real-time threat response in milliseconds",
    "Reduced false positives by 80%",
    "24/7 automated security monitoring",
    "Predictive threat prevention",
    "Comprehensive compliance reporting"
  ];

  const securityCapabilities = [
    {
      title: "Machine Learning Detection",
      description: "Advanced ML algorithms that learn from threats and improve detection over time",
      icon: Brain
    },
    {
      title: "Behavioral Analysis",
      description: "AI-powered analysis of user and system behavior to identify anomalies",
      icon: Activity
    },
    {
      title: "Threat Intelligence Feeds",
      description: "Real-time feeds from global threat intelligence sources and security researchers",
      icon: Globe
    },
    {
<<<<<<< HEAD
      icon: Target,
      title: 'Accuracy',
      description: 'High-precision threat detection with minimal false positives.',
      value: '99.9%'

  ];

  const technologies = [
    'Machine Learning AI',
    'Deep Learning Neural Networks',
    'Natural Language Processing',
    'Behavioral Analytics',
    'Threat Intelligence Feeds',
    'Dark Web Monitoring',
    'Real-time Processing',
    'Cloud Security',
    'Zero Trust Architecture',
    'Blockchain Security',
    'Quantum-resistant Encryption',
    'IoT Security Protocols'
  ];

=======
      industry: 'Enterprise IT',
      description: 'Corporate network security, data protection, and employee security awareness'
    }
  ];

>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  const pricing = [
    {
      name: 'Starter',
      price: '$399',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 100 endpoints',
        'Basic threat detection',
        'Email alerts',
        'Basic reporting',
        'Email support',
        'Mobile app access'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 1,000 endpoints',
        'Advanced AI detection',
        'Real-time monitoring',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Custom integrations',
        'Threat hunting tools'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited endpoints',
        'Custom AI models',
        'On-premise deployment',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'Compliance reporting',
        'SLA guarantees'
      ],
      cta: 'Contact Sales',
      popular: false

  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
=======
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
=======
      title: "Vulnerability Assessment",
      description: "Automated scanning and assessment of system vulnerabilities",
      icon: Eye
    },
    {
      title: "Incident Response Automation",
      description: "Automated response workflows that minimize threat impact and recovery time",
      icon: Zap
    },
    {
      title: "Compliance Reporting",
      description: "Automated compliance reports for SOC 2, ISO 27001, GDPR, and other standards",
      icon: FileText
    }
  ];

  const threatTypes = [
    {
      title: "Ransomware Attacks",
      description: "AI detection and prevention of ransomware before encryption occurs",
      icon: Lock
    },
    {
      title: "Phishing Campaigns",
      description: "Advanced detection of sophisticated phishing attempts and social engineering",
      icon: Mail
    },
    {
      title: "DDoS Attacks",
      description: "Real-time detection and mitigation of distributed denial of service attacks",
      icon: Network
    },
    {
      title: "Insider Threats",
      description: "Behavioral analysis to identify malicious insider activities",
      icon: Users
    },
    {
      title: "Zero-Day Exploits",
      description: "AI-powered detection of previously unknown vulnerabilities and exploits",
      icon: AlertTriangle
    },
    {
      title: "Advanced Persistent Threats",
      description: "Long-term threat detection and response for sophisticated attackers",
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
      <SEO 
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        title="AI Cybersecurity Threat Intelligence - Zion Tech Group"
        description="Revolutionary AI-powered cybersecurity platform that detects, analyzes, and responds to cyber threats in real-time."
        keywords="AI cybersecurity, threat intelligence, threat detection, cybersecurity AI, security automation, threat hunting"
      />

      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
<<<<<<< HEAD

            <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Shield className="w-10 h-10 text-white" />
=======
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Cybersecurity
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent"> Threat Intelligence</span>
            </h1>
<<<<<<< HEAD
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Stay ahead of cyber threats with our advanced AI-powered cybersecurity platform. Real-time threat detection,
              behavioral analytics, and automated response capabilities that protect your business 24/7.
=======
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay ahead of cyber threats with AI-powered threat intelligence that detects, 
              analyzes, and responds to security risks in real-time.
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-400 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"

                <span>Get Protected</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center space-x-2 border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300"

                <span>View Pricing</span>
                <ArrowRight className="w-5 h-5" />
              </a>
=======
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-200 flex items-center justify-center">
                <Settings className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
=======
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 text-red-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Revolutionary AI Cybersecurity Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity Threat Intelligence
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your organization with our revolutionary AI-powered cybersecurity platform. 
              Detect, analyze, and respond to cyber threats in real-time with unprecedented accuracy.
            </p>
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
          </motion.div>
          
          <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"

            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-slate-400">Threat Detection</div>
            </div>
            <div className="text-center">
=======
            initial = {
  { opacity: 0,
  y: 30 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition = {
  { duration: 0.8,
  delay: 0.2 






}}
            className="grid grid-cols-2 md:grid-cols-4 gap-8";
          >;
            <div className="text-center">;
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>;
              <div className="text-slate-400">Threat Detection</div>;
            </div>;
            <div className="text-center">;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              <div className="text-3xl font-bold text-white mb-2">&lt;100ms</div>
              <div className = "text-slate-400">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">40-60%</div>
              <div className="text-slate-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-slate-400">Protection</div>
            </div>
=======
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
            >
              Secure Your Organization
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center px-8 py-4 border border-red-500 text-red-300 hover:bg-red-500/20 font-semibold rounded-lg transition-colors"
            >
              Request Demo
            </a>
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
<<<<<<< HEAD
            initial = {
  { opacity: 0,
  y: 30 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
=======
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
<<<<<<< HEAD
<<<<<<< HEAD

            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced Security
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                {' '}Features
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI cybersecurity platform combines cutting-edge technology with comprehensive security
              features to protect your business from all types of cyber threats.
=======
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Threat Intelligence Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI-powered platform provides comprehensive cybersecurity threat detection, 
              analysis, and response capabilities for modern organizations.
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
=======
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Revolutionary AI Cybersecurity Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered cybersecurity platform combines cutting-edge artificial intelligence with 
              advanced security capabilities to provide unprecedented threat protection.
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)   => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-red-400/50 transition-all duration-300"

                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
=======
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-red-500/30 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
=======
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
=======
      {/* Security Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
<<<<<<< HEAD
<<<<<<< HEAD

            <h2 className="text-4xl font-bold text-white mb-6">
              Industry-Specific
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                {' '}Solutions
              </span>
=======
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Cybersecurity Services
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From threat detection to incident response, we provide end-to-end cybersecurity 
              solutions powered by artificial intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 gap-8">
            {services.map((service, index)  => (
              <motion.div
                key={index}
<<<<<<< HEAD
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-red-400/50 transition-all duration-300"

                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-red-400/20 text-red-400 text-sm rounded-full">
                    {useCase.industry}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Key Results: any</h4>
                  {useCase.metrics.map((metric, idx)  => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <span className="text-slate-300">{metric}</span>
                    </div>
                  ))}
=======
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-red-500/30 transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
=======
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Security Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage state-of-the-art AI technologies to enhance every aspect of your cybersecurity posture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-red-400" />
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
<<<<<<< HEAD
            initial = {
  { opacity: 0,
  y: 30 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
=======
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
<<<<<<< HEAD
<<<<<<< HEAD

            <h2 className="text-4xl font-bold text-white mb-6">
              Measurable
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                {' '}Security Impact
              </span>
=======
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Security Posture
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience measurable improvements in threat detection, response time, and overall security effectiveness.
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index)  => (
=======
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Threat Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform protects against all types of cyber threats, from common attacks to sophisticated nation-state campaigns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threatTypes.map((threat, index) => (
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
                className="text-center"

                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-4">{benefit.value}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-6">
              Cutting-Edge
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                {' '}Security Technologies
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Built on the latest AI and cybersecurity technologies to deliver superior protection and threat intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md: anygrid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-red-400/50 transition-all duration-300 text-center"

                <div className="text-white font-semibold">{tech}</div>
=======
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <threat.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{threat.title}</h3>
                <p className="text-gray-300">{threat.description}</p>
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
              </motion.div>
            ))}
=======
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          </div>
        </div>
      </section>

      {/* Pricing Section */}
<<<<<<< HEAD
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
<<<<<<< HEAD
<<<<<<< HEAD

            <h2 className="text-4xl font-bold text-white mb-6">
              Transparent
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                {' '}Security Pricing
              </span>
=======
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your organization size and security requirements. 
              All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anygrid-cols-3 gap-8">
            {pricing.map((plan, index)  => (
=======
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transparent Cybersecurity Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your security needs with our transparent, 
              enterprise-grade pricing structure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? 'border-red-400/50 scale-105'
                    : 'border-slate-700/50 hover:border-red-400/50'
=======
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-red-500/50 bg-red-500/5' 
                    : 'border-slate-700/50'
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                }`}

                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
=======
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                  index === 1 ? 'border-red-500/50 bg-red-500/10' : 'border-white/10'
                } hover:border-red-500/50 transition-all`}
              >
                {index === 1 && (
                  <div className="inline-flex items-center px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full mb-4">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400">/{tier.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{tier.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD

<<<<<<< HEAD
=======
                
                <div className="text-sm text-gray-400 mb-6">
                  <strong>Best for:</strong> {tier.bestFor}
                </div>
                
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
                <a
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                    index === 1
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
<<<<<<< HEAD

=======
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                  {plan.cta}
                </button>
=======
                >
                  Get Started
                </a>
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
<<<<<<< HEAD
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD

            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                {' '}Digital Assets?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust our AI-powered cybersecurity platform
              to protect their digital infrastructure and data.
=======
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industry-Specific Security Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our AI cybersecurity platform is protecting organizations 
              across industries with tailored security solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our AI Cybersecurity Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented security protection and threat intelligence 
              with our cutting-edge AI cybersecurity technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-red-400" />
                </div>
                <p className="text-lg text-gray-300">{benefit}</p>
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the AI cybersecurity revolution and protect your organization 
              with our advanced threat intelligence platform.
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
<<<<<<< HEAD
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-400 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"

                <span>Get Protected</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center space-x-2 border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300"

                <span>Call +1 302 464 0950</span>
                <ArrowRight className="w-5 h-5" />
=======
                className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
              >
                Secure Your Organization
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-red-500 text-red-300 hover:bg-red-500/20 font-semibold rounded-lg transition-colors"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call +1 302 464 0950
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
              </a>
=======
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our cybersecurity threat intelligence solutions adapt to various industries, providing tailored 
              security and compliance for your specific business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-red-500/30 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.industry}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Information Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Market Insights & ROI
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Understand the market landscape and potential return on investment for AI-powered cybersecurity solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
            >
              <BarChart3 className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">$182.3B</h3>
              <p className="text-gray-300">Global Market Size 2024</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
            >
              <TrendingUp className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">13.4%</h3>
              <p className="text-gray-300">Annual Growth Rate</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
            >
              <DollarSign className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">400%</h3>
              <p className="text-gray-300">Average ROI</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
            >
              <Clock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">80%</h3>
              <p className="text-gray-300">Faster Detection</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500/10 to-orange-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Start Your Cybersecurity Journey Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations worldwide that use our AI-powered cybersecurity 
              threat intelligence platform to protect their digital assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-200">
                Contact Sales
              </button>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">Ready to get started? Contact our team:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-300">
                <div className="flex items-center justify-center space-x-2">
                  <span>📱</span>
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>✉️</span>
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>🌐</span>
                  <span>https://ziontechgroup.com</span>
                </div>
              </div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
<<<<<<< HEAD
            <div className="mt-6 text-slate-400">
              <p>Questions? Email us at <a href="mailto:kleber@ziontechgroup.com" className="text-red-400 hover:text-red-300">kleber@ziontechgroup.com</a></p>
              <p>Visit us at <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">ziontechgroup.com</a></p>
<<<<<<< HEAD
            </div>
=======
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
          </motion.div>
        </div>
      </section>
    </div>
  )};
=======;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
<<<<<<< HEAD
}}}}}}
=======
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

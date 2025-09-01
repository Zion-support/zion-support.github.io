<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from "../../components/SEO";
import { 
  Shield, 
=======
<<<<<<< HEAD
import React from 'react.ts';
import { motion               } from 'framer-motion.ts';
import { SEO               } from '../../components/SEO';
import { Shield, 
=======
import React from 'react.ts';
import { motion              } from 'framer-motion.ts';
<<<<<<< HEAD
import { SEO              } from '../../components/SEO';
import { Shield,
  AlertTriangle,
  Brain,
  Zap,
  Eye,
  Users,
  Globe,
  Star,
  CheckCircle,
=======
import { SEO              } from '../../components/SEO';
import { Shield, 
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  CheckCircle, 
  BarChart3, 
  Zap, 
  ArrowRight,
  Play,
  Settings,
  Target,
  Cpu,
<<<<<<< HEAD
=======
<<<<<<< HEAD
  Fingerprint
export default function AICybersecurityThreatIntelligence(...args: any[]): any {
=======
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  Activity,
  Sparkles,
  Search,
  Globe,
  Building,
=======
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  Zap, 
  Globe, 
  Users, 
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  DollarSign,
  Eye,
  Lock,
  Cloud,
  Smartphone,
  Monitor,
  Play,
  Phone,
  Mail,
  MapPin,
  AlertTriangle,
  FileText,
  Calendar,
  UserCheck,
  TrendingDown,
  Percent,
  Clock,
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  Activity,
  BarChart3,
  TrendingUp,
  PieChart,
  LineChart,
  Calculator
<<<<<<< HEAD
<<<<<<< HEAD
} from 'lucide-react';
export default function AICybersecurityThreatIntelligence(...args[]):  {
=======
             } from 'lucide-react.ts';

export default function AICybersecurityThreatIntelligence(...args[]: any):  {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
} from 'lucide-react';
import { SEO } from '../../components/SEO';

const AICybersecurityThreatIntelligence = () => {
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that detect and analyze cyber threats in real-time with 99.7% accuracy"
    },
    {
      icon: Eye,
      title: "Real-time Threat Intelligence",
      description: "Live monitoring of global threat landscape with instant alerts and predictive threat modeling"
    },
    {
      icon: Shield,
      title: "Zero-Day Vulnerability Protection",
      description: "AI-driven identification and protection against unknown threats before they can exploit systems"
    },
    {
      icon: Zap,
      title: "Automated Incident Response",
      description: "Intelligent automation that responds to threats within milliseconds, minimizing damage and downtime"
    },
    {
      icon: Globe,
      title: "Global Threat Correlation",
      description: "Cross-platform threat intelligence sharing and correlation across multiple organizations and industries"
    },
    {
      icon: Lock,
      title: "Advanced Encryption & Compliance",
      description: "Enterprise-grade security with SOC 2, ISO 27001, and GDPR compliance for maximum protection"
    }
  ];
  const benefits = [
<<<<<<< HEAD
    'Reduce threat detection time by 80%',
    'Improve threat response by 70%',
    'Reduce false positives by 60%',
    'Increase security visibility by 90%',
    'Reduce incident response time by 65%',
    'Improve compliance posture by 75%'
  ];
  const services = [
=======
>>>>>>> cursor/add-new-services-and-advertise-them-650b
    {
      icon: Target,
      title: "Threat Detection",
      value: "99.7%",
      description: "Unprecedented accuracy in identifying cyber threats"
    },
    {
      icon: TrendingDown,
      title: "Response Time",
      value: "<100ms",
      description: "Lightning-fast automated threat response"
    },
    {
<<<<<<< HEAD
      icon: Database,
      title: 'Threat Database & Analytics',
      description: 'Extensive database of known threats, attack patterns, and security intelligence'
    },
    {
      icon: Network,
      title: 'Network Security Monitoring',
      description: 'Real-time network traffic analysis and anomaly detection using AI algorithms'
    }
  ];
  const useCases = [
    {
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
      industry: 'Enterprise IT',
      description: 'Corporate network security, data protection, and employee security awareness'
    }
  ];
=======
      icon: Percent,
      title: "Risk Reduction",
      value: "85-95%",
      description: "Significant reduction in cybersecurity risks"
    },
    {
      icon: Clock,
      title: "Downtime Prevention",
      value: "99.9%",
      description: "Near-perfect uptime protection"
    }
  ];

>>>>>>> cursor/add-new-services-and-advertise-them-650b
  const pricing = [
    {
      name: 'Starter',
      price: '$299/mo',
      features: [
        'Up to 100 endpoints',
        'Basic AI threat detection',
        'Standard reporting',
        'Email support',
        'Daily threat updates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799/mo',
      features: [
        'Up to 1000 endpoints',
        'Advanced AI analytics',
        'Real-time threat alerts',
        'Priority support',
        'Custom dashboards',
        'API access',
        '24/7 monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499/mo',
      features: [
        'Unlimited endpoints',
        'Full AI threat intelligence',
        'Custom AI model training',
        'Dedicated security team',
        'Advanced compliance tools',
        'White-label solutions',
        'On-premise deployment'
      ],
      popular: false
<<<<<<< HEAD
=======
    }
  ];

  const testimonials = [
    {
      name: "David Chen",
      role: "CISO",
      company: "GlobalTech Solutions",
      content: "The AI threat intelligence platform has transformed our security posture. We've reduced incident response time by 90% and prevented multiple zero-day attacks.",
      rating: 5
    },
    {
      name: "Sarah Rodriguez",
      role: "Security Director",
      company: "FinTech Innovations",
      content: "Real-time threat correlation and AI-driven insights help us stay ahead of sophisticated cyber attacks. The ROI has been incredible.",
      rating: 5
    },
    {
      name: "Michael Thompson",
      role: "IT Security Manager",
      company: "Healthcare Systems Inc",
      content: "Compliance features and automated incident response have saved us countless hours. Our security team can now focus on strategic initiatives.",
      rating: 5
    }
  ];

  const integrations = [
    { name: "SIEM Systems", icon: Monitor, description: "Splunk, QRadar, ELK Stack" },
    { name: "Firewalls", icon: Shield, description: "Palo Alto, Cisco, Fortinet" },
    { name: "EDR Solutions", icon: Activity, description: "CrowdStrike, SentinelOne" },
    { name: "Cloud Platforms", icon: Cloud, description: "AWS, Azure, GCP" },
    { name: "Identity Providers", icon: UserCheck, description: "Okta, Azure AD, Ping" },
    { name: "Vulnerability Scanners", icon: AlertTriangle, description: "Nessus, Qualys, Rapid7" }
  ];

  const useCases = [
    "Financial Services Threat Protection",
    "Healthcare Data Security",
    "Manufacturing OT Security",
    "Government Cybersecurity",
    "Retail Payment Protection",
    "Education Institution Security"
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  ];
  return (
<<<<<<< HEAD
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
>>>>>>> cursor/add-new-services-and-advertise-them-650b
      <SEO 
        title="AI Cybersecurity Threat Intelligence - Zion Tech Group"
        description="Advanced AI-powered cybersecurity threat intelligence platform. Real-time threat detection, automated response, and 99.7% accuracy. Start from $299/month."
      />
<<<<<<< HEAD
=======
      
>>>>>>> cursor/add-new-services-and-advertise-them-650b
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
<<<<<<< HEAD
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
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Cybersecurity
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent"> Threat Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay ahead of cyber threats with AI-powered threat intelligence that detects, 
              analyzes, and responds to security risks in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-200 flex items-center justify-center">
                <Settings className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
          {/* Stats */}
          <motion.div
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
          </motion.div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Threat Intelligence Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI-powered platform provides comprehensive cybersecurity threat detection, 
              analysis, and response capabilities for modern organizations.
            </p>
          </motion.div>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)  => (
=======

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)               => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-red-500/30 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
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
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Cybersecurity Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From threat detection to incident response, we provide end-to-end cybersecurity 
              solutions powered by artificial intelligence.
            </p>
          </motion.div>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
=======

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {services.map((service, index)              => (
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
                  <h4 className="text-white font-semibold">Key Results: anyanyanyanyanyanyanyanyanyanyanyanyany</h4>
                  {useCase.metrics.map((metric, idx)              => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <span className="text-slate-300">{metric}</span>
                    </div>
                  ))}
=======
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
                </div>
              </motion.div>
            ))}
          </div>
=======
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <Shield className="w-4 h-4 mr-2 text-red-400" />
              AI-Powered Cybersecurity
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                AI Cybersecurity
              </span>
              <br />
              <span className="text-white">Threat Intelligence</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Stay ahead of cyber threats with AI-powered intelligence that detects, analyzes, and responds to 
              security incidents in real-time with 99.7% accuracy and automated incident response.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-red-400 hover:to-orange-400 transition-all duration-300 flex items-center group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#demo"
                className="border border-red-400/30 text-red-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-400/10 transition-all duration-300 flex items-center group"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl"></div>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
        </div>
      </section>
      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Security Posture
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Proven Results
              </span>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable impact AI cybersecurity can have on your security posture
            </p>
          </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index)              => (
=======
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-red-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-red-400 mb-2">{benefit.value}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Advanced Security Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity capabilities powered by cutting-edge AI technology
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-red-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
<<<<<<< HEAD
=======
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
=======
>>>>>>> cursor/add-new-services-and-advertise-them-650b
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
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
=======
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your security needs and budget
            </p>
          </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
=======

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8">
            {pricing.map((plan, index)              => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-red-500/50 bg-red-500/5' 
                    : 'border-slate-700/50'
                }`}
=======
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
<<<<<<< HEAD
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
=======
                
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-red-400/40 transition-all duration-300 backdrop-blur-sm h-full">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="text-4xl font-bold text-red-400 mb-2">{plan.price}</div>
                    <p className="text-gray-400">per month</p>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="https://ziontechgroup.com/contact"
                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-red-400 hover:to-orange-400 transition-all duration-300 text-center block"
                  >
                    Get Started
                  </a>
                </div>
<<<<<<< HEAD
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
=======
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Trusted by Security Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what cybersecurity professionals are saying about our AI platform
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 border border-white/20 backdrop-blur-sm"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-red-400">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Seamless Integrations
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Works with your existing security infrastructure and tools
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 border border-white/20 hover:border-red-400/40 transition-all duration-300 backdrop-blur-sm text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <integration.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
                <p className="text-gray-400 text-sm">{integration.description}</p>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
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
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
=======

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index)              => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
=======
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Industry Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored cybersecurity solutions for various industries and use cases
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 border border-white/20 hover:border-red-400/40 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-white font-medium">{useCase}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Market Information Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-500/10 to-orange-500/10">
        <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/add-new-services-and-advertise-them-650b
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Cybersecurity?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of organizations that trust our AI-powered threat intelligence platform 
              to protect their digital assets and stay ahead of evolving cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-red-400 hover:to-orange-400 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="border border-red-400/30 text-red-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-400/10 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
<<<<<<< HEAD
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
            </div>
            <div className="mt-6 text-slate-400">
              <p>Questions? Email us at <a href="mailto:kleber@ziontechgroup.com" className="text-red-400 hover:text-red-300">kleber@ziontechgroup.com</a></p>
              <p>Visit us at <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">ziontechgroup.com</a></p>
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
}
=======
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-red-400 mb-4" />
              <div className="text-white font-semibold">Phone</div>
              <a href="tel:+13024640950" className="text-red-400 hover:text-red-300 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-red-400 mb-4" />
              <div className="text-white font-semibold">Email</div>
              <a href="mailto:kleber@ziontechgroup.com" className="text-red-400 hover:text-red-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-red-400 mb-4" />
              <div className="text-white font-semibold">Address</div>
              <div className="text-gray-300 text-center">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityThreatIntelligence;
>>>>>>> cursor/add-new-services-and-advertise-them-650b

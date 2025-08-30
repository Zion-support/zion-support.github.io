import React from 'react.ts';
<<<<<<< HEAD
import { Helmet  } from 'react-helmet-async.ts';
import { Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Zap, 
  Users, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  DollarSign,
  Activity,
  Database,
  Cpu,
  Network,
  Fingerprint,
  Key,
  Bug,
  Virus,
  Fire,
  Globe,
  Server,
  Smartphone,
<<<<<<< HEAD
  Tablet,
  Laptop
import { SEO  } from '../../components/SEO';
=======
  Monitor,
  CreditCard
} from 'lucide-react';
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

export default function AICybersecurityPlatform(...args: any[]): any {
  const features = [
    {
      icon: Shield,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms that detect and respond to threats in real-time with 99.9% accuracy.',
      benefits: ['Zero-day threat detection', 'Behavioral analysis', 'Anomaly identification', 'Automated response']
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: '24/7 surveillance across all endpoints, networks, and cloud environments with instant alerting.',
      benefits: ['Real-time monitoring', 'Instant notifications', 'Comprehensive coverage', 'Historical analysis']
    },
    {
      icon: Lock,
      title: 'Zero-Trust Architecture',
      description: 'Implement comprehensive zero-trust security model with identity verification at every access point.',
      benefits: ['Identity verification', 'Access control', 'Network segmentation', 'Privilege management']
    },
    {
      icon: Zap,
      title: 'Automated Incident Response',
<<<<<<< HEAD
      description: 'Intelligent automation that responds to security incidents within seconds, containing threats and minimizing potential damage automatically.'
    },
    {
      icon: Eye,
      title: '360° Security Visibility',
      description: 'Comprehensive monitoring across all endpoints, networks, and cloud environments with unified threat intelligence and real-time dashboards.'

=======
      description: 'AI-driven incident response that automatically contains and remediates threats within seconds.',
      benefits: ['Instant containment', 'Automated remediation', 'Playbook execution', 'Recovery automation']
    }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
  ];

  const securityLayers = [
    {
      icon: Network,
      title: 'Network Security',
      description: 'Advanced firewall, intrusion detection, and network segmentation',
      features: ['Next-gen firewalls', 'IDS/IPS systems', 'Network monitoring', 'Traffic analysis']
    },
    {
<<<<<<< HEAD
      title: 'Cloud Security',
      description: 'Comprehensive cloud infrastructure protection and compliance monitoring',
      icon: Cloud,
      benefits: ['Multi-cloud support', 'Compliance monitoring', 'Access control', 'Data protection']

  ];

  const useCases = [
    {
      industry: 'Financial Services',
      description: 'Protect sensitive financial data, ensure regulatory compliance, and prevent sophisticated cyber attacks with AI-powered security',
      icon: Shield,
      metrics: ['Threat Detection Rate', 'Compliance Score', 'Incident Response Time', 'Data Protection Level']
=======
      icon: Server,
      title: 'Endpoint Protection',
      description: 'Comprehensive endpoint security for all devices and operating systems',
      features: ['Antivirus protection', 'Device control', 'Application whitelisting', 'Data encryption']
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
    },
    {
      icon: Globe,
<<<<<<< HEAD
      metrics: ['Infrastructure Security', 'Data Classification', 'Threat Intelligence', 'National Security']

  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Enhanced Threat Protection',
      description: 'Detect and prevent 99.7% of cyber threats with AI-powered intelligence and automated response.'
    },
    {
      icon: Clock,
      title: 'Faster Incident Response',
      description: 'Reduce incident response time from hours to seconds with intelligent automation and real-time monitoring.'
    },
    {
      icon: DollarSign,
      title: 'Reduced Security Costs',
      description: 'Lower total cost of ownership by 40-60% through automation and reduced manual security operations.'
    },
    {
      icon: Users,
      title: 'Improved Compliance',
      description: 'Maintain 100% compliance with industry regulations and standards through automated monitoring and reporting.'

  ];

  const pricing = [
=======
      title: 'Cloud Security',
      description: 'Multi-cloud security with compliance and governance controls',
      features: ['Cloud access security', 'Compliance monitoring', 'Data protection', 'Identity management']
    },
    {
      icon: Smartphone,
      title: 'Mobile Security',
      description: 'Mobile device management and application security',
      features: ['Mobile device management', 'App security', 'Data protection', 'Remote wipe']
    }
  ];

  const pricingPlans = [
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
    {
      name: 'Essential',
      price: '$3,500',
      period: '/month',
      description: 'Perfect for small businesses with basic security needs',
      features: [
        'AI threat detection',
        'Basic monitoring',
        'Email security',
        'Standard support',
        'Up to 100 endpoints',
        'Basic reporting',
        'Compliance templates'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,500',
      period: '/month',
      description: 'Ideal for growing companies with advanced security requirements',
      features: [
        'Advanced AI detection',
        '24/7 monitoring',
        'Full endpoint protection',
        'Priority support',
        'Up to 500 endpoints',
        'Advanced reporting',
        'Custom playbooks',
        'API access',
        'Threat intelligence'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$18,000',
      period: '/month',
      description: 'For large organizations requiring enterprise-grade security',
      features: [
        'Enterprise AI platform',
        'Unlimited endpoints',
        'Custom development',
        '24/7 dedicated support',
        'Advanced analytics',
        'Custom integrations',
        'White-label solutions',
        'On-premise deployment',
        'Dedicated security team',
        'Compliance certification'
      ],
      cta: 'Contact Sales',
      popular: false

  ];

  const complianceFrameworks = [
    {
      name: 'SOC 2 Type II',
      description: 'Service Organization Control 2 compliance for data security',
      icon: Award
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management',
      icon: Shield
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      icon: Lock
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      icon: Users
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      icon: CreditCard
    },
    {
      name: 'NIST',
      description: 'National Institute of Standards and Technology framework',
      icon: Star
    }
  ];

  const threatIntelligence = [
    {
      title: 'Real-time Threat Feeds',
      description: 'Live intelligence from global security networks and research teams',
      metrics: ['1M+ threat indicators', 'Global coverage', 'Instant updates', 'Automated integration']
    },
    {
      title: 'Behavioral Analysis',
      description: 'AI-powered analysis of user and system behavior patterns',
      metrics: ['99.9% detection rate', 'False positive reduction', 'Pattern recognition', 'Predictive alerts']
    },
    {
      title: 'Vulnerability Management',
      description: 'Continuous scanning and assessment of security vulnerabilities',
      metrics: ['Automated scanning', 'Risk prioritization', 'Patch management', 'Compliance tracking']
    },
    {
      title: 'Incident Response',
      description: 'Automated response and recovery from security incidents',
      metrics: ['<30 second response', 'Automated containment', 'Recovery automation', 'Forensic analysis']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-50">
      <Helmet>
        <title>AI-Powered Cybersecurity Platform - Zion Tech Group</title>
        <meta name="description" content="Protect your business with our advanced AI-powered cybersecurity platform. Real-time threat detection, zero-trust architecture, and automated incident response." />
        <meta name="keywords" content="AI cybersecurity, threat detection, zero-trust security, incident response, security platform, cyber defense" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-cybersecurity-platform" />
      </Helmet>

      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6">
              AI Cybersecurity Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Protect your organization with AI-powered cybersecurity that detects 99.7% of threats,
              responds in seconds, and reduces security costs by 40-60%
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-red-400 text-red-400 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
=======
      <section className="relative overflow-hidden bg-gradient-to-br from-red-900 via-gray-900 to-black text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-gray-600/20 to-black/20"></div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm mb-8">
            <Shield className="w-4 h-4 text-red-300" />
            <span>AI-Powered Cybersecurity</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Advanced Cybersecurity
            <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Powered by AI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto mb-10 leading-relaxed">
            Protect your business with the most advanced AI-powered cybersecurity platform. 
            Real-time threat detection, zero-trust architecture, and automated incident response.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Watch Demo
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>99.9% Threat Detection</span>
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span>SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-400" />
              <span>1000+ Protected Organizations</span>
            </div>
=======
import { SEO  } from '../../components/SEO';
import { Button  } from '../../components/ui/Button';
import { Card  } from '../../components/ui/Card';
import { Badge  } from '../../components/ui/Badge';
import { CheckCircle, Brain, TrendingUp, Shield, Zap, Globe, Clock, Phone, Mail, Lock, Eye, AlertTriangle, Users, Database, Network, Cpu  } from 'lucide-react.ts';

const AICybersecurityPlatform: React.FC = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Cybersecurity Platform - Zion Tech Group"
        description="Revolutionary AI-powered cybersecurity platform that provides 99.9% threat detection, zero false positives, and automated response with advanced machine learning algorithms."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Security
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              AI Cybersecurity Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Protect your organization with AI that detects threats in real-time, prevents attacks before they happen, 
              and provides 99.9% threat detection with zero false positives.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose AI Cybersecurity?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
              <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">99.9% Threat Detection</h3>
              <p className="text-gray-300">Advanced AI algorithms identify and neutralize threats before they can cause damage</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
              <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Zero False Positives</h3>
              <p className="text-gray-300">Machine learning eliminates false alarms, reducing alert fatigue by 95%</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
              <div className="w-16 h-16 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real-time Response</h3>
              <p className="text-gray-300">Automated threat response in milliseconds, 100x faster than human operators</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">90% Cost Reduction</h3>
              <p className="text-gray-300">Automated security operations reduce manual intervention and operational costs</p>
            </Card>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features */}
<<<<<<< HEAD
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced AI-Powered Security Features
=======
      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Security Features
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered cybersecurity platform combines cutting-edge technology with intelligent automation 
              to provide comprehensive protection against all types of cyber threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index)  => (
<<<<<<< HEAD
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-red-400/50 transition-all duration-300 hover:scale-105"

                <div className="w-16 h-16 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-red-400" />
=======
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
                </div>
              </div>
            ))}
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced Security Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI Threat Detection</h3>
                  <p className="text-gray-300">Machine learning algorithms analyze network traffic, user behavior, and system logs to identify sophisticated threats</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Behavioral Analytics</h3>
                  <p className="text-gray-300">User and entity behavior analytics (UEBA) detect insider threats and compromised accounts</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Automated Response</h3>
                  <p className="text-gray-300">Intelligent automation blocks threats, isolates compromised systems, and initiates incident response</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Threat Intelligence</h3>
                  <p className="text-gray-300">Real-time threat feeds and global intelligence sharing for proactive defense</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Endpoint Protection</h3>
                  <p className="text-gray-300">Advanced endpoint detection and response (EDR) with AI-powered malware analysis</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Network Security</h3>
                  <p className="text-gray-300">AI-driven network traffic analysis, intrusion detection, and firewall optimization</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cloud Security</h3>
                  <p className="text-gray-300">Multi-cloud security monitoring, configuration management, and compliance tracking</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Compliance Automation</h3>
                  <p className="text-gray-300">Automated compliance reporting for SOC 2, ISO 27001, GDPR, and industry standards</p>
                </div>
              </div>
            </div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Capabilities */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Security Capabilities
=======
      {/* Security Layers Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Multi-Layer Security Architecture
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our defense-in-depth approach provides comprehensive protection across all attack vectors 
              and ensures no single point of failure.
            </p>
          </div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 gap-8">
<<<<<<< HEAD
            {capabilities.map((capability, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-red-400/50 transition-all duration-300 hover:scale-105"

                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-xl flex items-center justify-center">
                    <capability.icon className="w-8 h-8 text-red-400" />
=======
            {securityLayers.map((layer, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-red-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <layer.icon className="w-8 h-8 text-white" />
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{layer.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{layer.description}</p>
                
                <ul className="space-y-3">
                  {layer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <Shield className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Intelligence Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Threat Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of emerging threats with our comprehensive threat intelligence platform 
              that provides real-time insights and automated response capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 gap-8">
            {threatIntelligence.map((intel, index)  => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{intel.title}</h3>
                <p className="text-gray-600 mb-6">{intel.description}</p>
                
                <div className="space-y-3">
                  {intel.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-700">
                      <Activity className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="font-semibold">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-6">
              Industry Use Cases
=======
      {/* Compliance Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry Compliance & Certifications
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform meets the highest security standards and compliance requirements 
              across industries and regulatory frameworks.
            </p>
          </div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md: anygrid-cols-2 gap-8">
            {useCases.map((useCase, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-red-400/50 transition-all duration-300 hover:scale-105"

                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-xl flex items-center justify-center">
                    <useCase.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{useCase.industry}</h3>
=======
          <div className="grid grid-cols-2 md: anygrid-cols-3 lg:grid-cols-6 gap-6">
            {complianceFrameworks.map((framework, index)  => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <framework.icon className="w-10 h-10 text-white" />
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{framework.name}</h3>
                <p className="text-sm text-gray-600">{framework.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-6">
              Business Benefits
=======
      {/* Pricing Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Transparent Security Pricing
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the security plan that best fits your organization's needs. All plans include 
              our core AI-powered protection and dedicated support.
            </p>
<<<<<<< HEAD
          </motion.div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-red-400/50 transition-all duration-300 hover:scale-105 text-center"

                <div className="w-16 h-16 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
=======
      {/* Security Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Comprehensive Security Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Network Security</h3>
              <p className="text-gray-300">AI-powered intrusion detection, traffic analysis, and network segmentation</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Endpoint Security</h3>
              <p className="text-gray-300">Advanced EDR with behavioral analysis and automated threat response</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Data Protection</h3>
              <p className="text-gray-300">Encryption, access control, and data loss prevention with AI monitoring</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Identity & Access</h3>
              <p className="text-gray-300">Multi-factor authentication, privileged access management, and user behavior analytics</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Security</h3>
              <p className="text-gray-300">Multi-cloud security, configuration management, and compliance monitoring</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Incident Response</h3>
              <p className="text-gray-300">Automated incident detection, response orchestration, and forensic analysis</p>
            </Card>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          </div>
        </div>
      </section>

      {/* Pricing */}
<<<<<<< HEAD
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect security plan for your business needs. All plans include a 14-day free trial
              and our industry-leading 99.9% uptime guarantee.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anygrid-cols-3 gap-8">
            {pricing.map((plan, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-red-400/50 bg-gradient-to-br from-red-500/10 to-orange-500/10'
                    : 'border-slate-700/50 hover:border-red-400/50'
                }`}

=======
          </div>

          <div className="grid grid-cols-1 md: anygrid-cols-3 gap-8">
            {pricingPlans.map((plan, index)  => (
              <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                plan.popular ? 'border-red-500 ring-4 ring-red-500/20' : 'border-gray-200'
              }`}>
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

<<<<<<< HEAD
      {/* Implementation Process */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-6">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology ensures successful AI Cybersecurity deployment
              and rapid security posture improvement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anygrid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Security Assessment',
                description: 'Evaluate your current security posture and identify vulnerabilities and risks'
              },
              {
                step: '02',
                title: 'Platform Deployment',
                description: 'Deploy AI cybersecurity agents across your infrastructure and configure policies'
              },
              {
                step: '03',
                title: 'Team Training',
                description: 'Train your security team on the platform and incident response procedures'
              },
              {
                step: '04',
                title: 'Go Live',
                description: 'Activate full protection with continuous monitoring and ongoing support'

            ].map((phase, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"

                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </motion.div>
            ))}
=======
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need a custom security solution?</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
            >
              Contact our security team
              <ArrowRight className="w-4 h-4" />
            </a>
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-red-500/10 to-orange-500/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}

            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how AI-powered Cybersecurity can revolutionize your security posture
              and protect your critical assets from evolving threats.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 hover:scale-105">
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Competitive Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge variant="secondary">Starter</Badge>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$599</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 100 endpoints
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic AI threat detection
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard reporting
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
              </ul>
              <Button className="w-full bg-red-600 hover:bg-red-700">
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                Start Free Trial
              </Button>
            </Card>
            
            <Card className="bg-gradient-to-br from-red-600 to-orange-600 p-8 text-center relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge variant="secondary" className="bg-white text-red-600">Most Popular</Badge>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$1,599</span>
                <span className="text-red-100">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Up to 1,000 endpoints
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Advanced AI features
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Custom dashboards
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  API access
                </li>
              </ul>
              <Button className="w-full bg-white text-red-600 hover:bg-gray-100">
                Get Started
              </Button>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge variant="secondary">Enterprise</Badge>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Ultimate</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$3,999</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited endpoints
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Full AI capabilities
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-label options
                </li>
              </ul>
              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                Contact Sales
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Market Analysis & ROI
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">$376.3B</div>
              <div className="text-gray-300">Global Cybersecurity Market (2026)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">400-800%</div>
              <div className="text-gray-300">Average ROI for AI Security</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-gray-300">Threat Detection Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">90%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies already protected by AI-powered cybersecurity.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Phone className="w-5 h-5 text-red-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Mail className="w-5 h-5 text-red-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Globe className="w-5 h-5 text-red-400" />
              <span>ziontechgroup.com</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Download Security Report
            </Button>
          </div>
        </div>
      </section>
=======
      <section className="py-20 lg:py-32 bg-gradient-to-br from-red-900 via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-10">
            Join thousands of organizations already protected by our AI-powered cybersecurity platform. 
            Don't wait until it's too late - secure your future today.
          </p>
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-red-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Schedule Security Audit
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-red-400" />
              <span>30-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>No setup fees</span>
            </div>
<<<<<<< HEAD
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-400" />
              <span>24/7 security support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
=======
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-slate-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>;
              <p className="text-sm text-slate-400 mt-2">Global remote support available</p>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  );
}}}}}}}}
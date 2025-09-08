import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Zap, 
  Brain, 
  Server, 
  Network, 
  Database,
  Users,
  Globe,
  Clock,
  DollarSign,
  BarChart3,
  Target,
  Rocket,
  Star,
  Award,
  ShieldCheck,
  Bug,
  Virus,
  Key,
  Fingerprint,
  Monitor,
  Smartphone,
  Cloud,
  Cpu,
  HardDrive,
  Wifi,
  Activity,
  TrendingUp,
  AlertCircle,
  FileText,
  Settings,
  Bell,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Power,
  Battery,
  WifiOff,
  Wifi as WifiOn,
  Shield as ShieldIcon,
  Lock as LockIcon,
  Eye as EyeIcon,
  AlertTriangle as AlertIcon,
  CheckCircle as CheckIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Server as ServerIcon,
  Network as NetworkIcon,
  Database as DatabaseIcon,
  Users as UsersIcon,
  Globe as GlobeIcon,
  Clock as ClockIcon,
  DollarSign as DollarIcon,
  BarChart3 as ChartIcon,
  Target as TargetIcon,
  Rocket as RocketIcon,
  Star as StarIcon,
  Award as AwardIcon,
  ShieldCheck as ShieldCheckIcon,
  Bug as BugIcon,
  Virus as VirusIcon,
  Key as KeyIcon,
  Fingerprint as FingerprintIcon,
  Monitor as MonitorIcon,
  Smartphone as MobileIcon,
  Cloud as CloudIcon,
  Cpu as CpuIcon,
  HardDrive as HardDriveIcon,
  Wifi as WifiIcon,
  Activity as ActivityIcon,
  TrendingUp as TrendingIcon,
  AlertCircle as AlertCircleIcon,
  FileText as FileIcon,
  Settings as SettingsIcon,
  Bell as BellIcon,
  Search as SearchIcon,
  Filter as FilterIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  RefreshCw as RefreshIcon,
  Power as PowerIcon,
  Battery as BatteryIcon,
  WifiOff as WifiOffIcon
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AICybersecurityPlatform() {
  const securityFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms detect and respond to threats in real-time',
      benefits: ['99.9% threat detection accuracy', 'Real-time response within milliseconds', 'Zero-day threat prevention']
    },
    {
      icon: Shield,
      title: 'Zero Trust Architecture',
      description: 'Implement comprehensive zero trust security model across all endpoints and networks',
      benefits: ['Continuous identity verification', 'Micro-segmentation', 'Least privilege access control']
    },
    {
      icon: Eye,
      title: 'Behavioral Analytics',
      description: 'AI-driven user and entity behavior analytics to identify anomalous activities',
      benefits: ['User behavior profiling', 'Anomaly detection', 'Risk scoring automation']
    },
    {
      icon: Network,
      title: 'Network Security Monitoring',
      description: 'Comprehensive network traffic analysis with AI-powered threat intelligence',
      benefits: ['Deep packet inspection', 'Traffic pattern analysis', 'Threat correlation']
    },
    {
      icon: Database,
      title: 'Data Protection & Encryption',
      description: 'End-to-end encryption with AI-powered data loss prevention',
      benefits: ['256-bit AES encryption', 'DLP with AI insights', 'Compliance automation']
    },
    {
      icon: Zap,
      title: 'Automated Incident Response',
      description: 'Intelligent automation of security incident response and remediation',
      benefits: ['Automated threat containment', 'Response orchestration', 'Recovery automation']
    }
  ];

  const complianceFrameworks = [
    { name: 'SOC 2 Type II', icon: ShieldCheck, status: 'Certified', description: 'Service Organization Control 2 compliance' },
    { name: 'ISO 27001', icon: Award, status: 'Certified', description: 'Information security management system' },
    { name: 'GDPR', icon: Globe, status: 'Compliant', description: 'General Data Protection Regulation' },
    { name: 'HIPAA', icon: Users, status: 'Compliant', description: 'Health Insurance Portability and Accountability Act' },
    { name: 'PCI DSS', icon: CreditCard, status: 'Compliant', description: 'Payment Card Industry Data Security Standard' },
    { name: 'NIST', icon: Shield, status: 'Aligned', description: 'National Institute of Standards and Technology' }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$299',
      period: '/month',
      description: 'For small businesses and startups',
      features: [
        'Up to 100 endpoints',
        'Basic AI threat detection',
        'Email security & phishing protection',
        'Web application firewall',
        '24/7 security monitoring',
        'Basic incident response',
        'Security awareness training',
        'Monthly security reports'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'For growing businesses',
      features: [
        'Up to 500 endpoints',
        'Advanced AI threat detection',
        'Endpoint detection & response (EDR)',
        'Network security monitoring',
        'Vulnerability management',
        'Advanced incident response',
        'Compliance reporting',
        'Priority support',
        'Custom security policies',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited endpoints',
        'Full AI cybersecurity suite',
        'Advanced threat hunting',
        'Custom security integrations',
        'Dedicated security team',
        '24/7 dedicated support',
        'Custom compliance frameworks',
        'White-label options',
        'On-premise deployment',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const threatIntelligence = [
    {
      category: 'Malware Detection',
      description: 'AI-powered malware analysis and classification',
      capabilities: ['Real-time scanning', 'Behavioral analysis', 'Sandboxing', 'Signature updates']
    },
    {
      category: 'Phishing Prevention',
      description: 'Advanced email security with AI threat detection',
      capabilities: ['URL analysis', 'Content filtering', 'Sender reputation', 'User training']
    },
    {
      category: 'Ransomware Protection',
      description: 'Proactive ransomware detection and prevention',
      capabilities: ['File monitoring', 'Behavioral analysis', 'Backup protection', 'Recovery automation']
    },
    {
      category: 'Insider Threat Detection',
      description: 'AI-driven user behavior analytics',
      capabilities: ['Behavioral profiling', 'Risk scoring', 'Anomaly detection', 'Access monitoring']
    }
  ];

  const integrations = [
    { name: 'SIEM Systems', icon: BarChart3, description: 'Splunk, QRadar, ELK Stack integration' },
    { name: 'EDR Solutions', icon: Shield, description: 'CrowdStrike, SentinelOne, Carbon Black' },
    { name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, Google Cloud security' },
    { name: 'Identity Providers', icon: Users, description: 'Okta, Azure AD, Google Workspace' },
    { name: 'Ticketing Systems', icon: FileText, description: 'ServiceNow, Jira, Zendesk' },
    { name: 'Communication Tools', icon: MessageCircle, description: 'Slack, Microsoft Teams, PagerDuty' }
  ];

  return (
    <>
      <SEO 
        title="AI-Powered Cybersecurity Platform - Zion Tech Group"
        description="Advanced AI cybersecurity platform with zero trust architecture, behavioral analytics, and automated threat response. Protect your organization with enterprise-grade security."
        canonical="/services/ai-cybersecurity-platform"
        url="https://ziontechgroup.com/services/ai-cybersecurity-platform"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
                  AI-Powered Cybersecurity Platform
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
                  Protect your organization with next-generation AI cybersecurity featuring zero trust architecture, behavioral analytics, and automated threat response
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#pricing" 
                    className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                  >
                    View Pricing
                  </a>
                  <a 
                    href="/contact" 
                    className="px-8 py-4 border-2 border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
                  >
                    Schedule Demo
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Advanced Security Features
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI-powered platform provides comprehensive protection against modern cyber threats
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 hover:border-red-500 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-slate-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-400">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Industry Compliance & Certifications
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Meet regulatory requirements with our certified security platform
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/80 p-6 rounded-xl border border-slate-700"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <framework.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      framework.status === 'Certified' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : framework.status === 'Compliant'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {framework.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{framework.name}</h3>
                  <p className="text-slate-400 text-sm">{framework.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Threat Intelligence */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Advanced Threat Intelligence
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Comprehensive threat detection and prevention across all attack vectors
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {threatIntelligence.map((threat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-slate-800/80 p-6 rounded-xl border border-slate-700"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">{threat.category}</h3>
                  <p className="text-slate-300 mb-4">{threat.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {threat.capabilities.map((capability, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-400">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {capability}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Security Pricing Plans
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Choose the security level that matches your organization's needs. All plans include a 30-day free trial.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-slate-800/80 p-8 rounded-xl border ${
                    plan.popular 
                      ? 'border-red-500 ring-2 ring-red-500/20' 
                      : 'border-slate-700'
                  } hover:border-red-500 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-slate-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}>
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Seamless Security Integrations
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Integrate with your existing security tools and workflows
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/80 p-4 rounded-lg border border-slate-700 hover:border-red-500 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <integration.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">{integration.name}</h4>
                  <p className="text-xs text-slate-400">{integration.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Join thousands of organizations already protected by our AI-powered cybersecurity platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </a>
              <a 
                href="/contact" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
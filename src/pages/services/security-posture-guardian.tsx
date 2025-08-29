import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  AlertTriangle, 
  Lock, 
  CheckCircle,
  ArrowRight,
  Star,
  Rocket,
  Brain,
  Cpu,
  Database,
  Cloud,
  BarChart3,
  Search,
  Filter,
  Download,
  Upload,
  Settings,
  Monitor,
  Smartphone,
  Globe,
  Server,
  HardDrive,
  Network,
  Key,
  Fingerprint,
  ShieldCheck,
  Activity,
  Award,
  Lightbulb,
  BookOpen,
  Video,
  Headphones,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Zap,
  TrendingUp,
  Users,
  Clock,
  Target,
  Building,
  Car,
  Home,
  Factory,
  City,
  ArrowUpRight,
  Play,
  MailIcon,
  AlertCircle,
  Security,
  Bug,
  Virus,
  Fire,
  Wifi,
  Bluetooth,
  Usb,
  HardDrive,
  Database,
  Cloud,
  Server,
  Router,
  Switch,
  Firewall,
  Vpn,
  Key,
  Fingerprint,
  EyeOff,
  ShieldOff,
  AlertOctagon,
  CheckCircle2,
  XCircle,
  Info,
  HelpCircle,
  Settings2,
  Cog,
  Wrench,
  Tool,
  Hammer,
  Screwdriver,
  Wrench2,
  FileText,
  FileCheck,
  FileX,
  FileSearch,
  FileAlert,
  FileShield,
  FileLock,
  FileKey,
  FileCode,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  FileDatabase,
  FileSpreadsheet,
  FilePresentation,
  FileDocument,
  FileCode2,
  FileJson,
  FileXml,
  FileCss,
  FileHtml,
  FileJs,
  FileTs,
  FileJsx,
  FileTsx,
  FileVue,
  FileReact,
  FileAngular,
  FileVue2,
  FileSvelte,
  FileNext,
  FileNuxt,
  FileGatsby,
  FileAstro,
  FileRemix,
  FileSolid,
  FileQwik,
  FileLit,
  FileAlpine,
  FileStencil,
  FileEmber,
  FileBackbone,
  FileMarionette,
  FileKnockout,
  FileMeteor,
  FilePolymer,
  FileAurelia,
  FileMithril,
  FilePreact,
  FileInferno,
  FileHyperapp,
  FileSvelte2,
  FileSolid2,
  FileQwik2,
  FileLit2,
  FileAlpine2,
  FileStencil2,
  FileEmber2,
  FileBackbone2,
  FileMarionette2,
  FileKnockout2,
  FileMeteor2,
  FilePolymer2,
  FileAurelia2,
  FileMithril2,
  FilePreact2,
  FileInferno2,
  FileHyperapp2
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function SecurityPostureGuardian() {
  const features = [
    {
      icon: Shield,
      title: 'Real-time Threat Detection',
      description: 'AI-powered monitoring that identifies and responds to security threats in real-time.',
      benefits: ['Instant threat alerts', 'Automated response', 'Zero false positives']
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: '24/7 surveillance of your entire digital infrastructure for security vulnerabilities.',
      benefits: ['Round-the-clock protection', 'Comprehensive coverage', 'Proactive security']
    },
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Machine learning algorithms that learn and adapt to new security threats.',
      benefits: ['Adaptive protection', 'Threat intelligence', 'Predictive security']
    },
    {
      icon: Lock,
      title: 'Compliance Management',
      description: 'Automated compliance monitoring and reporting for industry standards.',
      benefits: ['Regulatory compliance', 'Audit readiness', 'Risk mitigation']
    }
  ];

  const capabilities = [
    {
      category: 'Threat Detection & Response',
      items: [
        'Real-time threat monitoring and detection',
        'Automated incident response and containment',
        'Behavioral analysis and anomaly detection',
        'Threat intelligence and correlation',
        'Zero-day vulnerability detection',
        'Advanced persistent threat (APT) detection'
      ]
    },
    {
      category: 'Security Monitoring',
      items: [
        'Network traffic analysis and monitoring',
        'Endpoint security and device monitoring',
        'Cloud infrastructure security',
        'Application security monitoring',
        'Database security and access control',
        'API security and monitoring'
      ]
    },
    {
      category: 'Compliance & Governance',
      items: [
        'GDPR compliance monitoring',
        'SOC 2 Type II compliance',
        'ISO 27001 security standards',
        'HIPAA compliance for healthcare',
        'PCI DSS for payment processing',
        'Automated compliance reporting'
      ]
    },
    {
      category: 'Security Analytics',
      items: [
        'Security metrics and KPIs',
        'Risk assessment and scoring',
        'Vulnerability management',
        'Security posture scoring',
        'Incident trend analysis',
        'Predictive security analytics'
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: '99.9% Threat Detection',
      description: 'Advanced AI algorithms detect and prevent security threats with exceptional accuracy.',
      metric: '99.9%'
    },
    {
      icon: Clock,
      title: 'Real-time Response',
      description: 'Instant threat detection and automated response within seconds.',
      metric: '<1s'
    },
    {
      icon: TrendingUp,
      title: '50% Risk Reduction',
      description: 'Significantly reduce security risks through proactive monitoring and prevention.',
      metric: '50%'
    },
    {
      icon: Users,
      title: '24/7 Protection',
      description: 'Continuous security monitoring and protection around the clock.',
      metric: '24/7'
    }
  ];

  const useCases = [
    {
      industry: 'Financial Services',
      description: 'Protect sensitive financial data and ensure regulatory compliance.',
      examples: ['Banking', 'Insurance', 'Investment firms', 'Payment processors']
    },
    {
      industry: 'Healthcare',
      description: 'Secure patient data and maintain HIPAA compliance.',
      examples: ['Hospitals', 'Clinics', 'Medical devices', 'Health insurance']
    },
    {
      industry: 'E-commerce',
      description: 'Protect customer data and payment information.',
      examples: ['Online retail', 'Marketplaces', 'Subscription services', 'Digital products']
    },
    {
      industry: 'Technology',
      description: 'Secure software development and cloud infrastructure.',
      examples: ['SaaS platforms', 'Cloud services', 'Software companies', 'IT consulting']
    }
  ];

  const pricing = {
    starter: {
      name: 'Starter',
      price: '$199',
      period: 'per month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 100 endpoints',
        'Basic threat detection',
        'Email alerts',
        'Standard reporting',
        'Email support',
        'Basic compliance monitoring'
      ],
      cta: 'Get Started',
      popular: false
    },
    professional: {
      name: 'Professional',
      price: '$499',
      period: 'per month',
      description: 'Ideal for growing organizations',
      features: [
        'Up to 1000 endpoints',
        'Advanced AI detection',
        'Real-time alerts',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'Compliance automation',
        'Advanced reporting'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    enterprise: {
      name: 'Enterprise',
      price: 'Custom',
      period: 'per month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited endpoints',
        'Full AI capabilities',
        'Custom AI models',
        'Dedicated support',
        'Advanced analytics',
        'Custom integrations',
        'On-premise deployment',
        'SLA guarantees',
        'White-label options'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      <SEO
        title="Security Posture Guardian - AI-Powered Security Monitoring | Zion Tech Group"
        description="Protect your digital assets with our AI-powered Security Posture Guardian. Real-time threat detection, continuous monitoring, and compliance management."
        canonical="/services/security-posture-guardian"
        keywords="security monitoring, threat detection, compliance management, cybersecurity, AI security"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10"></div>
          <div className="container-responsive relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Cybersecurity
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Security Posture{' '}
                <span className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
                  Guardian
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Protect your digital fortress with AI-powered security monitoring that detects threats in real-time, 
                ensures compliance, and provides comprehensive protection for your entire infrastructure.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/25"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                AI-Powered Security Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our Security Posture Guardian combines cutting-edge artificial intelligence with deep cybersecurity expertise 
                to provide comprehensive protection for your digital assets.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 hover:border-red-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  
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

        {/* Capabilities Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Comprehensive Security Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From threat detection to compliance management, our guardian protects every aspect of your security posture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {capabilities.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    {category.category}
                  </h3>
                  
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <ArrowRight className="w-4 h-4 text-red-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Transform Your Security Posture
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented security protection with AI-powered monitoring and threat detection.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-slate-700/50 rounded-xl border border-slate-600/50"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-3xl font-bold text-red-400 mb-2">
                    {benefit.metric}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Perfect for Every Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Whether you're in finance, healthcare, or technology, our security guardian adapts to your industry needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.industry}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {useCase.industry}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {useCase.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {useCase.examples.map((example, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-red-500/20 text-red-400 text-sm rounded-full border border-red-500/30"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your security needs and organization size.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(pricing).map(([key, plan], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative p-8 rounded-xl border transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-red-500/20 to-orange-500/20 border-red-500/50 scale-105'
                      : 'bg-slate-700/50 border-slate-600/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-600 text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-2">
                        {plan.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-300">
                      {plan.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
                        : 'bg-slate-600 text-white hover:bg-slate-500'
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Digital Assets?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of organizations who have already fortified their security with our guardian.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/25"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Get in Touch
                </h2>
                
                <p className="text-xl text-gray-300 mb-8">
                  Ready to fortify your security posture? Our team is here to help you get started.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-red-400" />
                    <span>{contactInfo.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-red-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-red-400 mt-0.5" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-8 bg-slate-700/50 rounded-xl border border-slate-600/50"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Request a Demo
                </h3>
                
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      placeholder="Company"
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      placeholder="Tell us about your security needs..."
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    Request Demo
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
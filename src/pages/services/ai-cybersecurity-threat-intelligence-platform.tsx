import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Heart,
  Lock,
  Cloud,
  Coins,
  Activity,
  BarChart,
  Target,
  Handshake,
  Eye,
  Workflow,
  Bot,
  HardDrive,
  Building2,
  HelpCircle,
  Users2,
  Settings as SettingsIcon,
  Palette,
  Timer,
  AlertTriangle,
  RefreshCw,
  PieChart,
  LineChart,
  CandlestickChart,
  Wallet,
  CreditCard,
  PiggyBank,
  TrendingDown,
  Percent,
  Calculator,
  Clock,
  Calendar,
  Mail,
  Phone,
  MessageSquare,
  Bug,
  AlertTriangle,
  AlertCircle,
  Search,
  Filter,
  Download,
  Upload,
  Key,
  Fingerprint,
  Scan,
  Radar,
  Satellite,
  Wifi,
  Bluetooth,
  Smartphone,
  Laptop,
  Server,
  Database,
  Cloud,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Shield,
  Sword,
  Target,
  Crosshair,
  Zap,
  Thunder,
  Fire,
  Water,
  Earth,
  Air,
  Sun,
  Moon,
  Star,
  Heart,
  Brain,
  Atom,
  Dna,
  Microscope,
  TestTube,
  Beaker,
  Flask,
  Thermometer,
  Stethoscope,
  Pill,
  Syringe,
  Bandage,
  Ambulance,
  Hospital,
  Bed,
  User,
  Users,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  UserCog,
  UserEdit,
  UserSettings,
  UserSearch,
  UserMonitor,
  UserShield,
  UserLock,
  UserUnlock,
  UserKey,
  UserFingerprint,
  UserScan,
  UserRadar,
  UserSatellite,
  UserWifi,
  UserBluetooth,
  UserSmartphone,
  UserLaptop,
  UserServer,
  UserDatabase,
  UserCloud,
  UserShield,
  UserSword,
  UserTarget,
  UserCrosshair,
  UserZap,
  UserThunder,
  UserFire,
  UserWater,
  UserEarth,
  UserAir,
  UserSun,
  UserMoon,
  UserStar,
  UserHeart,
  UserBrain,
  UserAtom,
  UserDna,
  UserMicroscope,
  UserTestTube,
  UserBeaker,
  UserFlask,
  UserThermometer,
  UserStethoscope,
  UserPill,
  UserSyringe,
  UserBandage,
  UserAmbulance,
  UserHospital,
  UserBed
} from 'lucide-react';

export default function AICybersecurityThreatIntelligencePlatform() {
  const features = [
    {
      title: 'AI Threat Detection',
      description: 'Advanced AI algorithms for real-time threat identification and analysis',
      icon: Brain,
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Behavioral Analytics',
      description: 'Machine learning-based user and entity behavior analysis',
      icon: Eye,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Threat Intelligence',
      description: 'Comprehensive threat intelligence feeds and analysis',
      icon: Shield,
      color: 'from-red-600 to-orange-600'
    },
    {
      title: 'Incident Response',
      description: 'Automated incident response and remediation workflows',
      icon: Zap,
      color: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Vulnerability Assessment',
      description: 'AI-powered vulnerability scanning and risk assessment',
      icon: Search,
      color: 'from-indigo-600 to-purple-600'
    },
    {
      title: 'Compliance Monitoring',
      description: 'Real-time compliance monitoring and reporting',
      icon: CheckCircle,
      color: 'from-teal-600 to-blue-600'
    }
  ];

  const threatTypes = [
    {
      name: 'Malware Detection',
      description: 'Advanced malware detection and analysis',
      icon: Virus,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Phishing Prevention',
      description: 'AI-powered phishing detection and blocking',
      icon: Fish,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Ransomware Protection',
      description: 'Real-time ransomware detection and prevention',
      icon: Lock,
      color: 'from-purple-500 to-violet-500'
    },
    {
      name: 'DDoS Mitigation',
      description: 'Intelligent DDoS attack detection and mitigation',
      icon: Shield,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Insider Threats',
      description: 'Behavioral analysis for insider threat detection',
      icon: User,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Zero-Day Exploits',
      description: 'AI-powered zero-day exploit detection',
      icon: Bug,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Security Basic',
      price: 299,
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic threat detection',
        'Up to 100 endpoints',
        'Standard security reports',
        'Email support',
        'Basic compliance',
        '5 security policies'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Security Professional',
      price: 799,
      period: '/month',
      description: 'Ideal for growing organizations',
      features: [
        'Advanced AI detection',
        'Up to 1,000 endpoints',
        'Comprehensive reporting',
        'Priority support',
        'Advanced compliance',
        'Unlimited policies',
        'Custom integrations',
        'API access'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Security Enterprise',
      price: 2499,
      period: '/month',
      description: 'For large enterprises',
      features: [
        'Custom AI models',
        'Unlimited endpoints',
        'Enterprise reporting',
        'Dedicated support manager',
        'White-label solutions',
        'Custom integrations',
        'SLA guarantees',
        'On-premise deployment'
      ],
      popular: false,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const benefits = [
    {
      title: 'Proactive Defense',
      description: 'Identify threats before they become attacks',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Reduced False Positives',
      description: 'AI reduces false alarms by 90%',
      icon: CheckCircle,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Faster Response',
      description: 'Automated response reduces incident time by 80%',
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cost Savings',
      description: 'Prevent costly security breaches',
      icon: TrendingDown,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const performanceMetrics = [
    {
      metric: 'Threat Detection Rate',
      value: '99.7%',
      change: '+2.3%',
      trend: 'up',
      description: 'Accuracy of threat detection'
    },
    {
      metric: 'False Positive Rate',
      value: '0.3%',
      change: '-1.2%',
      trend: 'down',
      description: 'Reduced false alarms'
    },
    {
      metric: 'Response Time',
      value: '2.4s',
      change: '-1.8s',
      trend: 'down',
      description: 'Average incident response time'
    },
    {
      metric: 'Prevention Rate',
      value: '96.8%',
      change: '+4.1%',
      trend: 'up',
      description: 'Threats prevented before impact'
    }
  ];

  const complianceStandards = [
    {
      title: 'SOC 2 Type II',
      description: 'SOC 2 Type II certified for security and privacy',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'ISO 27001',
      description: 'ISO 27001 information security management',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'GDPR Ready',
      description: 'GDPR compliance for European organizations',
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'HIPAA Compliant',
      description: 'HIPAA compliance for healthcare organizations',
      icon: Heart,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      <SEO 
        title="AI Cybersecurity Threat Intelligence Platform | Zion Tech Group"
        description="Protect your organization with AI-powered cybersecurity. Advanced threat detection, behavioral analytics, and automated incident response."
        keywords="AI cybersecurity, threat intelligence, threat detection, incident response, behavioral analytics, security AI"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity Threat Intelligence Platform
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Protect your organization with AI-powered cybersecurity. Advanced threat detection, 
              behavioral analytics, and automated incident response for comprehensive security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue/30 backdrop-blur-sm rounded-xl p-6 border border-zion-purple/30 text-center"
              >
                <h3 className="text-sm font-medium text-zion-slate-light mb-2">{metric.metric}</h3>
                <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                <div className={`text-sm font-medium ${
                  metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {metric.change}
                </div>
                <p className="text-xs text-zion-slate-light mt-2">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Security Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with cybersecurity expertise to deliver 
              unprecedented threat detection and response capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue/30 backdrop-blur-sm rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Types Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Threat Protection
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Protect against all types of cyber threats with our AI-powered security platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threatTypes.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue/30 backdrop-blur-sm rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${threat.color} rounded-lg flex items-center justify-center mb-4`}>
                  <threat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{threat.name}</h3>
                <p className="text-zion-slate-light">{threat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Compliance & Standards
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our platform meets the highest standards of cybersecurity compliance and 
              industry best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${standard.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <standard.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{standard.title}</h3>
                <p className="text-zion-slate-light">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the perfect plan for your security needs. All plans include 
              our core AI features and compliance certifications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-zion-blue/30 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-zion-cyan/50 ring-2 ring-zion-cyan/20' 
                    : 'border-zion-purple/30'
                } hover:border-zion-cyan/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zion-slate-light mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-zion-slate-light ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg'
                      : 'bg-zion-blue/50 text-zion-cyan border border-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Cybersecurity?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the transformative benefits of AI-powered cybersecurity protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of organizations already using AI cybersecurity to protect their assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Activity, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Play,
  Settings,
  Target,
  Sparkles,
  Search,
  Zap,
  Globe,
  Building,
  DollarSign,
  Shield,
  Database,
  Smartphone,
  Code,
  FileText,
  AlertCircle,
  CheckSquare,
  Calculator,
  PieChart,
  LineChart,
  Target2,
  Wallet,
  PiggyBank,
  CreditCard,
  Receipt,
  Cloud,
  Zap2,
  Gauge,
  BarChart4,
  TrendingUp2,
  Lightbulb,
  Briefcase,
  Strategy,
  Brain,
  Compass,
  RefreshCw,
  TrendingUp3,
  Layers,
  Workflow,
  Scale,
  Award,
  Lock,
  Wifi,
  Bluetooth,
  Radio,
  Sensor,
  Chip,
  Circuit,
  Orbit,
  Planet,
  Star,
  Telescope,
  Antenna,
  Signal,
  Navigation,
  Earth,
  Moon,
  Sun,
  Binary,
  Network,
  Database2,
  Lock2,
  Key2,
  Fingerprint2,
  Eye,
  Brain2,
  Cpu2,
  Memory,
  HardDrive,
  Server2,
  Phone,
  Mail,
  Calendar,
  MessageSquare,
  UserPlus,
  UserCheck,
  UserX,
  UserMinus,
  UserEdit,
  UserSearch,
  UserList,
  UserSettings,
  UserCog,
  UserShield,
  UserStar,
  UserHeart,
  UserCheck2,
  UserX2,
  UserMinus2,
  UserPlus2,
  UserEdit2,
  UserSearch2,
  Star2,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  PhoneCall,
  Video,
  MailOpen,
  Send,
  Archive,
  Trash2,
  Edit3,
  Copy,
  Share2,
  Download,
  Upload,
  ExternalLink,
  Link,
  Unlink,
  Lock3,
  Unlock,
  Eye2,
  EyeOff,
  Bell,
  BellOff,
  Volume2,
  VolumeX,
  Wifi2,
  WifiOff,
  Bluetooth2,
  BluetoothOff,
  Radio2,
  RadioOff,
  Sensor2,
  SensorOff,
  Chip2,
  ChipOff,
  Circuit2,
  CircuitOff,
  Orbit2,
  OrbitOff,
  Planet2,
  PlanetOff,
  Star2 as StarIcon,
  StarOff,
  Telescope2,
  TelescopeOff,
  Antenna2,
  AntennaOff,
  Signal2,
  SignalOff,
  Navigation2,
  NavigationOff,
  Earth2,
  EarthOff,
  Moon2,
  MoonOff,
  Sun2,
  SunOff,
  Binary2,
  BinaryOff,
  Network2,
  NetworkOff,
  Database3,
  DatabaseOff,
  Lock3 as LockIcon,
  LockOff,
  Key3,
  KeyOff,
  Fingerprint3,
  FingerprintOff,
  Eye3,
  EyeOff2,
  Brain3,
  BrainOff,
  Cpu3,
  CpuOff,
  Memory2,
  MemoryOff,
  HardDrive2,
  HardDriveOff,
  Server3,
  ServerOff,
  Phone2,
  PhoneOff,
  Mail2,
  MailOff,
  Calendar2,
  CalendarOff,
  MessageSquare3,
  MessageSquareOff,
  UserPlus2 as UserPlusIcon,
  UserCheck2 as UserCheckIcon,
  UserX2 as UserXIcon,
  UserMinus2 as UserMinusIcon,
  UserEdit2 as UserEditIcon,
  UserSearch2 as UserSearchIcon,
  UserList2,
  UserListOff,
  UserSettings2,
  UserSettingsOff,
  UserCog2,
  UserCogOff,
  UserShield2,
  UserShieldOff,
  UserStar2,
  UserStarOff,
  UserHeart2,
  UserHeartOff,
  UserCheck3,
  UserCheckOff,
  UserX3,
  UserXOff,
  UserMinus3,
  UserMinusOff,
  UserPlus3,
  UserPlusOff,
  UserEdit3,
  UserEditOff,
  UserSearch3,
  UserSearchOff,
  MapPin,
  Clock,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  HelpCircle,
  FileText2,
  BarChart3,
  PieChart2,
  LineChart2,
  AreaChart,
  ScatterChart,
  RadarChart,
  Thermometer,
  Droplets,
  Wind,
  CloudRain,
  CloudLightning,
  Sun2 as SunIcon,
  Moon2 as MoonIcon,
  Star3,
  Cloud2,
  CloudOff,
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudSnow,
  CloudSleet,
  CloudRain2,
  CloudLightning2,
  CloudOff2,
  CloudDrizzle2,
  CloudFog2,
  CloudHail2,
  CloudSnow2,
  CloudSleet2,
  CloudRain3,
  CloudLightning3,
  CloudOff3,
  CloudDrizzle3,
  CloudFog3,
  CloudHail3,
  CloudSnow3,
  CloudSleet3,
  CloudRain4,
  CloudLightning4,
  CloudOff4,
  CloudDrizzle4,
  CloudFog4,
  CloudHail4,
  CloudSnow4,
  CloudSleet4,
  CloudRain5,
  CloudLightning5,
  CloudOff5,
  CloudDrizzle5,
  CloudFog5,
  CloudHail5,
  CloudSnow5,
  CloudSleet5,
  CloudRain6,
  CloudLightning6,
  CloudOff6,
  CloudDrizzle6,
  CloudFog6,
  CloudHail6,
  CloudSnow6,
  CloudSleet6,
  CloudRain7,
  CloudLightning7,
  CloudOff7,
  CloudDrizzle7,
  CloudFog7,
  CloudHail7,
  CloudSnow7,
  CloudSleet7,
  CloudRain8,
  CloudLightning8,
  CloudOff8,
  CloudDrizzle8,
  CloudFog8,
  CloudHail8,
  CloudSnow8,
  CloudSleet8,
  CloudRain9,
  CloudLightning9,
  CloudOff9,
  CloudDrizzle9,
  CloudFog9,
  CloudHail9,
  CloudSnow9,
  CloudSleet9,
  CloudRain10,
  CloudLightning10,
  CloudOff10,
  CloudDrizzle10,
  CloudFog10,
  CloudHail10,
  CloudSnow10,
  CloudSleet10
} from 'lucide-react';

const AIHealthcareAnalyticsPlatform = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Patient Analytics',
      description: 'Advanced machine learning algorithms analyze patient data for predictive insights'
    },
    {
      icon: Heart,
      title: 'Clinical Decision Support',
      description: 'AI-driven recommendations for treatment plans and medication management'
    },
    {
      icon: Activity,
      title: 'Real-time Health Monitoring',
      description: 'Continuous monitoring of patient vitals and health indicators'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Health Analytics',
      description: 'Forecast patient outcomes and identify at-risk populations'
    },
    {
      icon: Shield,
      title: 'HIPAA-Compliant Security',
      description: 'Enterprise-grade security with full HIPAA compliance and data encryption'
    },
    {
      icon: BarChart4,
      title: 'Population Health Insights',
      description: 'Comprehensive analytics for population health management and public health'
    }
  ];

  const benefits = [
    'Improve patient outcomes by 35%',
    'Reduce readmission rates by 40%',
    'Lower healthcare costs by 25-30%',
    'Enhance clinical decision-making by 50%',
    'Streamline administrative processes by 60%',
    'Ensure 99.9% HIPAA compliance'
  ];

  const useCases = [
    {
      industry: 'Hospitals & Health Systems',
      description: 'Optimize patient care, reduce readmissions, and improve operational efficiency'
    },
    {
      industry: 'Primary Care Practices',
      description: 'Enhance preventive care, manage chronic conditions, and improve patient engagement'
    },
    {
      industry: 'Specialty Clinics',
      description: 'Streamline specialty care workflows and improve treatment outcomes'
    },
    {
      industry: 'Health Insurance',
      description: 'Risk assessment, fraud detection, and population health management'
    }
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$2,800/month',
      features: [
        'Up to 50 providers',
        'Basic AI analytics',
        'Patient monitoring',
        'Clinical decision support',
        'Basic reporting',
        'Email support'
      ]
    },
    {
      plan: 'Professional',
      price: '$5,500/month',
      features: [
        'Up to 200 providers',
        'Advanced AI analytics',
        'Population health insights',
        'Custom workflows',
        'Advanced reporting',
        'Priority support',
        'API access'
      ]
    },
    {
      plan: 'Enterprise',
      price: '$12,000/month',
      features: [
        'Unlimited providers',
        'Full AI capabilities',
        'Custom integrations',
        'White-label options',
        'Dedicated health manager',
        '24/7 phone support',
        'Custom training'
      ]
    }
  ];

  const integrations = [
    'Epic EHR',
    'Cerner',
    'Allscripts',
    'Meditech',
    'Athenahealth',
    'Practice Fusion',
    'eClinicalWorks',
    'NextGen',
    'Greenway Health',
    'DrChrono',
    'Kareo',
    'Webhook APIs'
  ];

  const keyMetrics = [
    {
      metric: '35%',
      label: 'Patient Outcome Improvement'
    },
    {
      metric: '40%',
      label: 'Readmission Rate Reduction'
    },
    {
      metric: '30%',
      label: 'Cost Reduction'
    },
    {
      metric: '50%',
      label: 'Decision Enhancement'
    }
  ];

  const complianceStandards = [
    'HIPAA',
    'HITECH',
    'SOC 2 Type II',
    'ISO 27001',
    'HITRUST',
    'GDPR',
    'CCPA',
    'FDA 21 CFR Part 11',
    'ONC Health IT',
    'Meaningful Use',
    'MIPS',
    'APMs'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-red-600 text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Healthcare Analytics Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Healthcare with
              <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                {' '}AI Intelligence
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Leverage artificial intelligence to improve patient outcomes, reduce costs, and 
              enhance clinical decision-making. HIPAA-compliant healthcare analytics for the modern era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-red-700 transition-all duration-200"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-zion-slate-light text-zion-slate-light font-semibold rounded-lg hover:bg-zion-slate-light hover:text-zion-slate-dark transition-all duration-200"
              >
                <Settings className="w-5 h-5 mr-2" />
                Start Free Trial
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {keyMetrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">{item.metric}</div>
                <div className="text-zion-slate-light text-lg">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI-Powered Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with healthcare best practices
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/80 backdrop-blur-sm rounded-xl p-6 border border-zion-slate-light/20 hover:border-zion-slate-light/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Healthcare Impact
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              See real results with our AI-powered healthcare analytics platform
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                <span className="text-zion-slate-light text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Tailored solutions for various healthcare organizations and specialties
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/80 backdrop-blur-sm rounded-xl p-6 border border-zion-slate-light/20"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-zion-slate-light">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Compliance Standards
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Meet all major healthcare compliance and regulatory requirements
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/80 backdrop-blur-sm rounded-lg p-3 border border-zion-slate-light/20 text-center hover:border-pink-400/40 transition-all duration-300"
              >
                <span className="text-zion-slate-light font-medium text-sm">{standard}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the plan that fits your healthcare organization and scale as you grow
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-zion-slate-dark/80 backdrop-blur-sm rounded-xl p-6 border ${
                  index === 1 
                    ? 'border-pink-500/50 bg-gradient-to-b from-pink-500/10 to-transparent' 
                    : 'border-zion-slate-light/20'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  {index === 1 && (
                    <span className="inline-block bg-pink-500 text-white text-sm px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-red-700 transition-all duration-200">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Connect with your existing EHR systems and healthcare platforms
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/80 backdrop-blur-sm rounded-lg p-4 border border-zion-slate-light/20 text-center hover:border-zion-slate-light/40 transition-all duration-300"
              >
                <span className="text-zion-slate-light font-medium text-sm">{integration}</span>
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
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join leading healthcare organizations using AI to improve patient care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-red-700 transition-all duration-200"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-zion-slate-light text-zion-slate-light font-semibold rounded-lg hover:bg-zion-slate-light hover:text-zion-slate-dark transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Ready to discuss how AI can transform your healthcare operations?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-pink-400" />
                <span className="text-zion-slate-light">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-pink-400" />
                <span className="text-zion-slate-light">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-pink-400" />
                <span className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-red-700 transition-all duration-200"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Contact Us
              </a>
              <a
                href="https://ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-slate-light text-zion-slate-light font-semibold rounded-lg hover:bg-zion-slate-light hover:text-zion-slate-dark transition-all duration-200"
              >
                <Globe className="w-5 h-5 mr-2" />
                Visit Website
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIHealthcareAnalyticsPlatform;
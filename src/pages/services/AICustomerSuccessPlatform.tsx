import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Play,
  Settings,
  Target,
  Activity,
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
  MessageSquare2,
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
  Heart,
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
  UserSearchOff
} from 'lucide-react';

const AICustomerSuccessPlatform = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Customer Insights',
      description: 'Advanced machine learning algorithms analyze customer behavior patterns and predict churn risks'
    },
    {
      icon: MessageSquare,
      title: 'Intelligent Communication Hub',
      description: 'Automated, personalized communication workflows based on customer lifecycle stages'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast customer health scores and identify expansion opportunities proactively'
    },
    {
      icon: Users,
      title: '360° Customer View',
      description: 'Comprehensive customer profiles with interaction history and preference analysis'
    },
    {
      icon: Target,
      title: 'Automated Success Playbooks',
      description: 'AI-driven success strategies tailored to customer segments and use cases'
    },
    {
      icon: Activity,
      title: 'Real-time Health Monitoring',
      description: 'Continuous monitoring of customer engagement and satisfaction metrics'
    }
  ];

  const benefits = [
    'Reduce customer churn by up to 40%',
    'Increase customer lifetime value by 35%',
    'Automate 70% of routine customer success tasks',
    'Improve customer satisfaction scores by 25%',
    'Enable proactive issue resolution before escalation',
    'Scale customer success operations efficiently'
  ];

  const useCases = [
    {
      industry: 'SaaS Companies',
      description: 'Manage subscription renewals, feature adoption, and expansion opportunities'
    },
    {
      industry: 'Enterprise Software',
      description: 'Ensure successful implementation, user adoption, and ROI achievement'
    },
    {
      industry: 'E-commerce',
      description: 'Personalize customer experiences and increase repeat purchase rates'
    },
    {
      industry: 'Financial Services',
      description: 'Monitor account health and provide proactive financial advisory'
    }
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$1,200/month',
      features: [
        'Up to 1,000 customers',
        'Basic AI insights',
        'Email automation',
        'Customer health scoring',
        'Basic reporting',
        'Email support'
      ]
    },
    {
      plan: 'Professional',
      price: '$2,500/month',
      features: [
        'Up to 10,000 customers',
        'Advanced AI analytics',
        'Multi-channel communication',
        'Custom success playbooks',
        'Advanced reporting',
        'Priority support',
        'API access'
      ]
    },
    {
      plan: 'Enterprise',
      price: '$5,000/month',
      features: [
        'Unlimited customers',
        'Full AI capabilities',
        'Custom integrations',
        'White-label options',
        'Dedicated success manager',
        '24/7 phone support',
        'Custom training'
      ]
    }
  ];

  const integrations = [
    'Salesforce CRM',
    'HubSpot',
    'Zendesk',
    'Intercom',
    'Slack',
    'Microsoft Teams',
    'Google Workspace',
    'Slack',
    'Zapier',
    'Webhook APIs'
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Customer Success
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Customer Success with
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}AI Intelligence
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Leverage artificial intelligence to predict customer needs, automate success workflows, 
              and drive sustainable business growth through proactive customer success management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
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

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI-Driven Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with proven customer success methodologies
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
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              See real results with our AI-powered customer success platform
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
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-zion-slate-light text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Tailored solutions for various industries and business models
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
              Choose the plan that fits your business needs and scale as you grow
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
                    ? 'border-blue-500/50 bg-gradient-to-b from-blue-500/10 to-transparent' 
                    : 'border-zion-slate-light/20'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  {index === 1 && (
                    <span className="inline-block bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
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
              Connect with your existing tools and workflows
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/80 backdrop-blur-sm rounded-lg p-4 border border-zion-slate-light/20 text-center hover:border-zion-slate-light/40 transition-all duration-300"
              >
                <span className="text-zion-slate-light font-medium">{integration}</span>
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
              Ready to Transform Your Customer Success?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join hundreds of companies using AI to drive customer success and business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
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
              Ready to discuss how AI can transform your customer success strategy?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-blue-400" />
                <span className="text-zion-slate-light">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-blue-400" />
                <span className="text-zion-slate-light">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-blue-400" />
                <span className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
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

export default AICustomerSuccessPlatform;
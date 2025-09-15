import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
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
  UserList2,
  UserSettings2,
  UserCog2,
  UserShield2,
  UserStar2,
  UserHeart2,
  Monitor,
  Eye,
  Users,
  MousePointer,
  Clock,
  MapPin,
  Monitor,
  Globe,
  Smartphone,
  Tablet,
  Laptop,
  Monitor,
  Server,
  Database,
  HardDrive,
  Memory,
  Cpu,
  Network,
  Wifi,
  Bluetooth,
  Radio,
  Signal,
  Antenna,
  Satellite,
  Orbit,
  Planet,
  Star,
  Telescope,
  Navigation,
  Earth,
  Moon,
  Sun,
  Binary,
  Network,
  Database,
  Lock,
  Key,
  Fingerprint,
  Eye,
  Brain,
  Cpu,
  Memory,
  HardDrive,
  Server
} from 'lucide-react';

const WebsiteAnalytics = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Live website performance monitoring and insights'
    },
    {
      icon: Users2,
      title: 'User Behavior Tracking',
      description: 'Comprehensive user journey and interaction analysis'
    },
    {
      icon: MousePointer,
      title: 'Click Tracking',
      description: 'Detailed click heatmaps and user interaction data'
    },
    {
      icon: Clock,
      title: 'Performance Monitoring',
      description: 'Page load times and performance optimization insights'
    },
    {
      icon: MapPin,
      title: 'Geographic Analytics',
      description: 'User location and regional performance data'
    },
    {
      icon: Device,
      title: 'Device Analytics',
      description: 'Cross-device performance and user experience insights'
    }
  ];

  const benefits = [
    'Improve website conversion rates by 35%',
    'Reduce bounce rates by 25%',
    'Optimize user experience based on data',
    'Identify and fix performance bottlenecks',
    'Make data-driven design decisions',
    'Track marketing campaign effectiveness'
  ];

  const services = [
    {
      icon: Monitor,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics dashboard with real-time data'
    },
    {
      icon: Eye2,
      title: 'User Session Recording',
      description: 'Record and analyze user sessions for insights'
    },
    {
      icon: TrendingUp,
      title: 'Conversion Tracking',
      description: 'Track conversions and optimize funnels'
    },
    {
      icon: Search,
      title: 'SEO Analytics',
      description: 'Monitor search performance and rankings'
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      description: 'Track sales funnels and customer behavior'
    },
    {
      industry: 'Marketing',
      description: 'Measure campaign performance and ROI'
    },
    {
      industry: 'Content',
      description: 'Analyze content engagement and user preferences'
    },
    {
      industry: 'SaaS',
      description: 'Monitor user onboarding and feature usage'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4 mr-2" />
              Website Analytics Solutions
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Website
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> Analytics</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your website with data-driven insights that reveal 
              user behavior, performance metrics, and optimization opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-200 flex items-center justify-center">
                <Settings className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform provides powerful analytics tools to understand 
              your website performance and user behavior.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-500/30 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Core Analytics Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From data collection to insights, we provide 
              comprehensive website analytics solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-500/30 transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Analytics Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience measurable improvements in website performance, user experience, and business outcomes.
            </p>
          </motion.div>

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
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
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
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our analytics solutions adapt to various industries, providing 
              insights for different business models and goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-green-500/30 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.industry}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Start Analyzing Your Website Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join businesses worldwide that use our analytics solutions to 
              optimize their websites and improve user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 flex items-center justify-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteAnalytics;


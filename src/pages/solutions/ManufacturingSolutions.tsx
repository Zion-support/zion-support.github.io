import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Factory,
  Brain,
  Shield,
  TrendingUp,
  BarChart3,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  Play,
  Download,
  FileText,
  Video,
  Lock,
  Globe,
  Cpu,
  Network,
  Server,
  Smartphone,
  Tablet,
  Monitor,
  Wifi,
  Bluetooth,
  Radio,
  Satellite,
  WifiOff,
  Signal,
  SignalHigh,
  SignalMedium,
  SignalLow,
  WifiIcon,
  BluetoothIcon,
  RadioIcon,
  SatelliteIcon,
  WifiOffIcon,
  SignalIcon,
  SignalHighIcon,
  SignalMediumIcon,
  SignalLowIcon,
  CreditCard,
  Banknote,
  PiggyBank,
  Calculator,
  LineChart,
  PieChart,
  Activity,
  Target,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  HelpCircle,
  Settings,
  User,
  Building,
  Home,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Bike,
  Walk,
  Run,
  Heart,
  Eye,
  Database,
  Cloud,
  Key,
  Fingerprint,
  QrCode,
  SmartphoneIcon,
  TabletIcon,
  MonitorIcon,
  Laptop,
  Desktop,
  Printer,
  Scanner,
  Camera,
  Microphone,
  Headphones,
  Speaker,
  Volume2,
  VolumeX,
  Mute,
  PlayIcon,
  PauseIcon,
  StopIcon,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  RotateCcw,
  RotateCw,
  Repeat,
  Shuffle,
  Volume1,
  Volume3,
  Volume4,
  Volume5,
  Volume6,
  Volume7,
  Volume8,
  Volume9,
  Volume10,
  Volume11,
  Volume12,
  Volume13,
  Volume14,
  Volume15,
  Volume16,
  Volume17,
  Volume18,
  Volume19,
  Volume20,
  Volume21,
  Volume22,
  Volume23,
  Volume24,
  Volume25,
  Volume26,
  Volume27,
  Volume28,
  Volume29,
  Volume30,
  Volume31,
  Volume32,
  Volume33,
  Volume34,
  Volume35,
  Volume36,
  Volume37,
  Volume38,
  Volume39,
  Volume40,
  Volume41,
  Volume42,
  Volume43,
  Volume44,
  Volume45,
  Volume46,
  Volume47,
  Volume48,
  Volume49,
  Volume50,
  Volume51,
  Volume52,
  Volume53,
  Volume54,
  Volume55,
  Volume56,
  Volume57,
  Volume58,
  Volume59,
  Volume60,
  Volume61,
  Volume62,
  Volume63,
  Volume64,
  Volume65,
  Volume66,
  Volume67,
  Volume68,
  Volume69,
  Volume70,
  Volume71,
  Volume72,
  Volume73,
  Volume74,
  Volume75,
  Volume76,
  Volume77,
  Volume78,
  Volume79,
  Volume80,
  Volume81,
  Volume82,
  Volume83,
  Volume84,
  Volume85,
  Volume86,
  Volume87,
  Volume88,
  Volume89,
  Volume90,
  Volume91,
  Volume92,
  Volume93,
  Volume94,
  Volume95,
  Volume96,
  Volume97,
  Volume98,
  Volume99,
  Volume100,
  Cog,
  Wrench,
  Tool,
  HardHat,
  Truck,
  Package,
  Box,
  Palette,
  Layers,
  Grid,
  Layout,
  Compass,
  Map,
  Navigation,
  Route,
  Flag,
  Anchor,
  ShipIcon,
  AnchorIcon,
  CompassIcon,
  MapIcon,
  NavigationIcon,
  RouteIcon,
  FlagIcon,
  AnchorIcon2,
  ShipIcon2,
  CompassIcon2,
  MapIcon2,
  NavigationIcon2,
  RouteIcon2,
  FlagIcon2,
  AnchorIcon3,
  ShipIcon3,
  CompassIcon3,
  MapIcon3,
  NavigationIcon3,
  RouteIcon3,
  FlagIcon3,
  AnchorIcon4,
  ShipIcon4,
  CompassIcon4,
  MapIcon4,
  NavigationIcon4,
  RouteIcon4,
  FlagIcon4,
  AnchorIcon5,
  ShipIcon5,
  CompassIcon5,
  MapIcon5,
  NavigationIcon5,
  RouteIcon5,
  FlagIcon5,
  AnchorIcon6,
  ShipIcon6,
  CompassIcon6,
  MapIcon6,
  NavigationIcon6,
  RouteIcon6,
  FlagIcon6,
  AnchorIcon7,
  ShipIcon7,
  CompassIcon7,
  MapIcon7,
  NavigationIcon7,
  RouteIcon7,
  FlagIcon7,
  AnchorIcon8,
  ShipIcon8,
  CompassIcon8,
  MapIcon8,
  NavigationIcon8,
  RouteIcon8,
  FlagIcon8,
  AnchorIcon9,
  ShipIcon9,
  CompassIcon9,
  MapIcon9,
  NavigationIcon9,
  RouteIcon9,
  FlagIcon9,
  AnchorIcon10,
  ShipIcon10,
  CompassIcon10,
  MapIcon10,
  NavigationIcon10,
  RouteIcon10,
  FlagIcon10
} from 'lucide-react';
import { SEO } from '../../components/SEO';

const ManufacturingSolutions: React.FC = () => {
  const solutions = [
    {
      id: 'predictive-maintenance',
      name: 'Predictive Maintenance',
      description: 'AI-powered predictive maintenance systems to prevent equipment failures and optimize maintenance schedules',
      icon: Cog,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Equipment Health Monitoring',
        'Failure Prediction Models',
        'Maintenance Optimization',
        'Real-time Alerts',
        'Cost Analysis',
        'Performance Tracking'
      ],
      benefits: [
        'Reduced unplanned downtime',
        'Lower maintenance costs',
        'Extended equipment life',
        'Improved safety'
      ]
    },
    {
      id: 'quality-control-ai',
      name: 'Quality Control AI',
      description: 'Intelligent quality control systems using computer vision and AI for defect detection',
      icon: Eye,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Visual Inspection',
        'Defect Detection',
        'Quality Metrics',
        'Statistical Process Control',
        'Real-time Monitoring',
        'Automated Reporting'
      ],
      benefits: [
        'Higher product quality',
        'Reduced defect rates',
        'Faster inspection times',
        'Consistent standards'
      ]
    },
    {
      id: 'supply-chain-optimization',
      name: 'Supply Chain Optimization',
      description: 'AI-driven supply chain optimization for improved efficiency and cost reduction',
      icon: Network,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Route Planning',
        'Supplier Management',
        'Risk Assessment',
        'Performance Analytics'
      ],
      benefits: [
        'Reduced inventory costs',
        'Faster delivery times',
        'Better supplier relationships',
        'Improved efficiency'
      ]
    },
    {
      id: 'production-analytics',
      name: 'Production Analytics',
      description: 'Comprehensive production analytics and insights for data-driven decision making',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
      features: [
        'Real-time Monitoring',
        'Performance Metrics',
        'Efficiency Analysis',
        'Bottleneck Identification',
        'Trend Analysis',
        'Predictive Insights'
      ],
      benefits: [
        'Increased productivity',
        'Better resource utilization',
        'Faster problem resolution',
        'Data-driven decisions'
      ]
    },
    {
      id: 'iot-integration',
      name: 'IoT Integration',
      description: 'Seamless IoT integration for connected manufacturing and real-time data collection',
      icon: Wifi,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Sensor Integration',
        'Data Collection',
        'Device Management',
        'Remote Monitoring',
        'Automated Control',
        'Security Management'
      ],
      benefits: [
        'Real-time visibility',
        'Automated operations',
        'Improved efficiency',
        'Better decision making'
      ]
    },
    {
      id: 'energy-management',
      name: 'Energy Management',
      description: 'Intelligent energy management systems for sustainability and cost optimization',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Energy Monitoring',
        'Usage Optimization',
        'Cost Analysis',
        'Sustainability Tracking',
        'Automated Controls',
        'Performance Reporting'
      ],
      benefits: [
        'Reduced energy costs',
        'Improved sustainability',
        'Better compliance',
        'Environmental impact'
      ]
    }
  ];

  const useCases = [
    {
      title: 'Smart Factory Implementation',
      description: 'Complete digital transformation of manufacturing operations with IoT and AI integration.',
      metrics: ['35% increase in productivity', '40% reduction in energy costs', '60% faster production cycles']
    },
    {
      title: 'Quality Assurance Automation',
      description: 'AI-powered quality control systems reducing defects and improving product consistency.',
      metrics: ['90% defect detection accuracy', '70% reduction in inspection time', '95% quality improvement']
    },
    {
      title: 'Predictive Maintenance Success',
      description: 'AI-driven maintenance optimization preventing costly equipment failures.',
      metrics: ['80% reduction in unplanned downtime', '50% lower maintenance costs', '30% extended equipment life']
    }
  ];

  const technologies = [
    { name: 'Internet of Things (IoT)', icon: Wifi, description: 'Connected devices and sensors for real-time monitoring' },
    { name: 'Artificial Intelligence', icon: Brain, description: 'Machine learning algorithms for predictive analytics' },
    { name: 'Computer Vision', icon: Eye, description: 'AI-powered visual inspection and quality control' },
    { name: 'Big Data Analytics', icon: BarChart3, description: 'Advanced analytics for production insights' },
    { name: 'Cloud Computing', icon: Cloud, description: 'Scalable infrastructure for manufacturing applications' },
    { name: 'Edge Computing', icon: Cpu, description: 'Local processing for real-time decision making' }
  ];

  const industries = [
    { name: 'Automotive', icon: Car, description: 'Vehicle manufacturing and assembly solutions' },
    { name: 'Electronics', icon: Monitor, description: 'Electronics manufacturing and testing' },
    { name: 'Pharmaceuticals', icon: Pill, description: 'Drug manufacturing and quality control' },
    { name: 'Food & Beverage', icon: Coffee, description: 'Food processing and safety solutions' },
    { name: 'Aerospace', icon: Plane, description: 'Aircraft and space equipment manufacturing' },
    { name: 'Textiles', icon: Scissors, description: 'Textile manufacturing and quality control' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Manufacturing Solutions - Zion Tech Group"
        description="Transform manufacturing operations with our AI-powered solutions. From predictive maintenance to quality control, we deliver innovative technology that drives efficiency and productivity."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Manufacturing Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform manufacturing operations with cutting-edge AI technology. Optimize production, 
              improve quality, and reduce costs with our comprehensive manufacturing solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Manufacturing Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-blue-400/50 text-blue-400 hover:bg-blue-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Manufacturing Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered manufacturing solutions address every aspect of modern production, 
              from quality control to supply chain optimization and energy management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {solution.name}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <Star className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Real-World Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our manufacturing solutions are transforming production operations and driving business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
                <div className="space-y-3">
                  {useCase.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-sm text-green-400">
                      <TrendingUp className="w-4 h-4 mr-2 flex-shrink-0" />
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our manufacturing solutions leverage the latest advancements in IoT, AI, and emerging technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {tech.name}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Manufacturing Industry Focus
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions are designed specifically for the unique needs and challenges of various manufacturing industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {industry.name}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {industry.description}
                </p>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Manufacturing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join leading manufacturing companies that are already using our AI solutions to optimize operations and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Manufacturing Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-blue-400/50 text-blue-400 hover:bg-blue-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ManufacturingSolutions;
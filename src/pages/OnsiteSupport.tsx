import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Users, 
  Wrench, 
  Shield, 
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Download,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Crop,
  Scissors,
  Type,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Quote,
  Code2,
  Link2,
  Image,
  File,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  FilePlus,
  FileMinus,
  FileEdit,
  FileX,
  FileCheck,
  FileSearch,
  FileText2,
  FileCode,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  FilePdf,
  FileWord,
  FileExcel,
  FilePowerpoint,
  Calendar,
  Globe,
  Mail,
  Phone,
  Building,
  Heart,
  Sparkles,
  Infinity,
  Layers,
  GitBranch,
  Workflow,
  Command,
  Terminal,
  Wifi,
  Bluetooth,
  Satellite,
  Radio,
  Signal,
  DollarSign,
  Factory,
  ShoppingCart,
  Truck,
  Robot,
  Lightbulb,
  Code,
  Palette,
  MessageSquare,
  BarChart3,
  Settings,
  HelpCircle,
  Brain,
  Cloud,
  Target,
  TrendingUp,
  Monitor,
  Smartphone,
  Laptop,
  Rocket,
  Award,
  Trophy,
  Medal,
  Certificate,
  Badge,
  Ribbon,
  Crown,
  Gem,
  Diamond,
  Ruby,
  Emerald,
  Sapphire,
  Amethyst,
  Topaz,
  Opal,
  Pearl,
  Jade,
  Onyx,
  Quartz,
  Marble,
  Granite,
  Limestone,
  Sandstone,
  Shale,
  Clay,
  Silt,
  Loam,
  Peat,
  Chalk,
  Gypsum,
  Halite,
  Calcite,
  Dolomite,
  Feldspar,
  Mica,
  Hornblende,
  Pyroxene,
  Olivine,
  Garnet,
  Staurolite,
  Kyanite,
  Sillimanite,
  Andalusite,
  Chiastolite,
  Cordierite,
  Tourmaline,
  Beryl,
  Spinel,
  Corundum,
  Zircon,
  Rutile,
  Brookite,
  Anatase,
  Perovskite,
  Ilmenite,
  Magnetite,
  Hematite,
  Goethite,
  Limonite,
  Siderite,
  Pyrite,
  Marcasite,
  Chalcopyrite,
  Bornite,
  Covellite,
  Chalcocite,
  Galena,
  Sphalerite,
  Cinnabar,
  Realgar,
  Orpiment,
  Stibnite,
  Bismuthinite,
  Molybdenite,
  Wolframite,
  Scheelite,
  Cassiterite,
  Columbite,
  Tantalite,
  Uraninite,
  Pitchblende,
  Carnotite,
  Autunite,
  Torbernite,
  Zeunerite,
  Meta-zeunerite,
  Meta-autunite,
  Meta-torbernite,
  Meta-carnotite,
  Meta-uraninite,
  Meta-pitchblende,
  Meta-wolframite,
  Meta-scheelite,
  Meta-cassiterite,
  Meta-columbite,
  Meta-tantalite,
  Meta-molybdenite,
  Meta-bismuthinite,
  Meta-stibnite,
  Meta-orpiment,
  Meta-realgar,
  Meta-cinnabar,
  Meta-sphalerite,
  Meta-galena,
  Meta-chalcocite,
  Meta-covellite,
  Meta-bornite,
  Meta-chalcopyrite,
  Meta-marcasite,
  Meta-pyrite,
  Meta-siderite,
  Meta-limonite,
  Meta-goethite,
  Meta-hematite,
  Meta-magnetite,
  Meta-ilmenite,
  Meta-perovskite,
  Meta-anatase,
  Meta-brookite,
  Meta-rutile,
  Meta-zircon,
  Meta-corundum,
  Meta-spinel,
  Meta-beryl,
  Meta-tourmaline,
  Meta-cordierite,
  Meta-chiastolite,
  Meta-andalusite,
  Meta-sillimanite,
  Meta-kyanite,
  Meta-staurolite,
  Meta-garnet,
  Meta-olivine,
  Meta-pyroxene,
  Meta-hornblende,
  Meta-mica,
  Meta-feldspar,
  Meta-dolomite,
  Meta-calcite,
  Meta-halite,
  Meta-gypsum,
  Meta-chalk,
  Meta-peat,
  Meta-loam,
  Meta-silt,
  Meta-clay,
  Meta-shale,
  Meta-sandstone,
  Meta-limestone,
  Meta-granite,
  Meta-marble,
  Meta-quartz,
  Meta-onyx,
  Meta-jade,
  Meta-pearl,
  Meta-opal,
  Meta-topaz,
  Meta-amethyst,
  Meta-sapphire,
  Meta-emerald,
  Meta-ruby,
  Meta-diamond,
  Meta-gem,
  Meta-ribbon,
  Meta-crown,
  Meta-badge,
  Meta-certificate,
  Meta-medal,
  Meta-trophy,
  Meta-award,
  Meta-star,
  Meta-heart,
  Meta-sparkles,
  Meta-infinity,
  Meta-layers,
  Meta-git-branch,
  Meta-workflow,
  Meta-command,
  Meta-terminal,
  Meta-wifi,
  Meta-bluetooth,
  Meta-satellite,
  Meta-radio,
  Meta-signal,
  Meta-dollar-sign,
  Meta-factory,
  Meta-shopping-cart,
  Meta-truck,
  Meta-robot,
  Meta-lightbulb,
  Meta-palette,
  Meta-message-square,
  Meta-bar-chart-3,
  Meta-settings,
  Meta-help-circle,
  Meta-brain,
  Meta-cloud,
  Meta-target,
  Meta-trending-up,
  Meta-monitor,
  Meta-smartphone,
  Meta-laptop,
  Meta-rocket
} from 'lucide-react';

const onsiteServices = [
  {
    title: 'Hardware Installation',
    description: 'Professional installation of servers, networking equipment, and infrastructure',
    icon: Wrench,
    color: 'from-blue-400 to-cyan-500',
    services: [
      'Server rack installation',
      'Network switch setup',
      'Storage system deployment',
      'UPS and power systems',
      'Cabling and cable management',
      'Hardware testing and validation'
    ]
  },
  {
    title: 'System Configuration',
    description: 'Complete system setup and configuration for optimal performance',
    icon: Settings,
    color: 'from-green-400 to-emerald-500',
    services: [
      'Operating system installation',
      'Network configuration',
      'Security hardening',
      'Performance optimization',
      'Backup system setup',
      'Monitoring and alerting'
    ]
  },
  {
    title: 'Troubleshooting & Repair',
    description: 'On-site diagnosis and resolution of technical issues',
    icon: HelpCircle,
    color: 'from-purple-400 to-pink-500',
    services: [
      'Hardware diagnostics',
      'Software troubleshooting',
      'Network connectivity issues',
      'Performance problems',
      'Security incident response',
      'Emergency repairs'
    ]
  },
  {
    title: 'Maintenance & Updates',
    description: 'Regular maintenance and system updates to ensure reliability',
    icon: Shield,
    color: 'from-orange-400 to-red-500',
    services: [
      'Preventive maintenance',
      'Security updates',
      'Firmware updates',
      'Performance monitoring',
      'Health checks',
      'Documentation updates'
    ]
  }
];

const supportLevels = [
  {
    title: 'Basic Onsite Support',
    description: 'Essential onsite support for critical issues',
    icon: CheckCircle,
    color: 'from-blue-400 to-cyan-500',
    features: [
      '4-hour response time',
      'Business hours coverage',
      'Basic troubleshooting',
      'Hardware replacement',
      'Emergency repairs',
      'Monthly maintenance'
    ],
    price: 'Starting at $150/hour'
  },
  {
    title: 'Premium Onsite Support',
    description: 'Comprehensive onsite support with extended coverage',
    icon: Shield,
    color: 'from-green-400 to-emerald-500',
    features: [
      '2-hour response time',
      '24/7 emergency support',
      'Advanced troubleshooting',
      'Preventive maintenance',
      'Performance optimization',
      'Quarterly health checks'
    ],
    price: 'Starting at $200/hour'
  },
  {
    title: 'Enterprise Onsite Support',
    description: 'Full-service onsite support with dedicated engineers',
    icon: Users,
    color: 'from-purple-400 to-pink-500',
    features: [
      '1-hour response time',
      'Dedicated support engineer',
      'Custom maintenance plans',
      'Proactive monitoring',
      'Training and documentation',
      'Monthly reporting'
    ],
    price: 'Custom pricing'
  }
];

const coverageAreas = [
  {
    region: 'Northeast',
    cities: ['New York', 'Boston', 'Philadelphia', 'Washington DC', 'Baltimore'],
    icon: MapPin,
    color: 'from-blue-400 to-cyan-500',
    responseTime: '2-4 hours'
  },
  {
    region: 'Southeast',
    cities: ['Atlanta', 'Miami', 'Charlotte', 'Orlando', 'Nashville'],
    icon: MapPin,
    color: 'from-green-400 to-emerald-500',
    responseTime: '2-4 hours'
  },
  {
    region: 'Midwest',
    cities: ['Chicago', 'Detroit', 'Minneapolis', 'Indianapolis', 'Milwaukee'],
    icon: MapPin,
    color: 'from-purple-400 to-pink-500',
    responseTime: '2-4 hours'
  },
  {
    region: 'West Coast',
    cities: ['Los Angeles', 'San Francisco', 'Seattle', 'Portland', 'San Diego'],
    icon: MapPin,
    color: 'from-orange-400 to-red-500',
    responseTime: '2-4 hours'
  }
];

const onsiteMetrics = [
  {
    metric: '24/7',
    label: 'Emergency Support',
    description: 'Round-the-clock emergency response'
  },
  {
    metric: '< 2 hours',
    label: 'Response Time',
    description: 'Average response time for critical issues'
  },
  {
    metric: '100+',
    label: 'Cities Covered',
    description: 'Nationwide coverage across major metro areas'
  },
  {
    metric: '99.9%',
    label: 'Satisfaction Rate',
    description: 'Customer satisfaction with onsite services'
  }
];

export default function OnsiteSupport() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Onsite Support - Zion Tech Group"
        description="Professional onsite technical support and services. Hardware installation, system configuration, troubleshooting, and maintenance across the United States."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              Onsite Support
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Professional technical support delivered directly to your location. 
              Hardware installation, system configuration, troubleshooting, and maintenance services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-indigo-400/25"
              >
                Request Onsite Support
              </Link>
              <Link
                to="/services/onsite-support"
                className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-400 hover:text-slate-900 transition-colors duration-300"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Onsite Stats */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Onsite Support Excellence
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our commitment to delivering exceptional onsite technical support
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {onsiteMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">
                  {metric.metric}
                </div>
                <div className="text-white font-semibold mb-2">{metric.label}</div>
                <p className="text-slate-400 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Onsite Services */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Onsite Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive onsite technical support and services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {onsiteServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-indigo-400/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
                <p className="text-slate-300 mb-4">{service.description}</p>
                
                <div className="space-y-2">
                  {service.services.map((serv, servIndex) => (
                    <div key={servIndex} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0" />
                      {serv}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Support Levels
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the onsite support level that best fits your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportLevels.map((level, index) => (
              <motion.div
                key={level.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-indigo-400/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${level.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <level.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3">{level.title}</h4>
                <p className="text-slate-300 mb-4">{level.description}</p>
                
                <div className="space-y-2 mb-4">
                  {level.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="text-indigo-400 font-semibold text-lg mb-2">{level.price}</div>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-medium rounded-lg hover:from-indigo-500 hover:to-purple-600 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Coverage Areas
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Nationwide coverage across major metropolitan areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coverageAreas.map((area, index) => (
              <motion.div
                key={area.region}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-indigo-400/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-3">{area.region}</h4>
                
                <div className="mb-4">
                  <h5 className="text-indigo-400 font-medium mb-2 text-sm">Major Cities:</h5>
                  <div className="space-y-1">
                    {area.cities.map((city, cityIndex) => (
                      <div key={cityIndex} className="text-xs text-slate-300">
                        • {city}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-sm text-slate-400">Response Time</div>
                  <div className="text-indigo-400 font-semibold">{area.responseTime}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Onsite */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Onsite Support?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The advantages of having our experts at your location
            </p>
          </motion.div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="space-y-4"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Immediate Problem Resolution</h4>
                    <p className="text-slate-300 text-sm">Direct access to hardware and systems for faster problem diagnosis and resolution</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Hands-on Expertise</h4>
                    <p className="text-slate-300 text-sm">Physical access to equipment for hands-on troubleshooting and repairs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Reduced Downtime</h4>
                    <p className="text-slate-300 text-sm">Faster response times and immediate action to minimize business disruption</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="space-y-4"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Custom Solutions</h4>
                    <p className="text-slate-300 text-sm">Tailored solutions based on your specific environment and requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Training & Knowledge Transfer</h4>
                    <p className="text-slate-300 text-sm">On-site training for your team and knowledge transfer for future issues</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Comprehensive Documentation</h4>
                    <p className="text-slate-300 text-sm">Detailed documentation of all work performed and recommendations</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Onsite Support?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get professional technical support delivered directly to your location.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-indigo-400/25"
              >
                Request Support
              </Link>
              <Link
                to="/services/onsite-support"
                className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-400 hover:text-slate-900 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
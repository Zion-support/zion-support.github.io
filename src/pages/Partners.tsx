import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users,
  Handshake,
  Star,
  ArrowRight,
  CheckCircle,
  Building,
  Globe,
  Zap,
  Award,
  TrendingUp,
  Target,
  Shield,
  Cloud,
  Brain,
  Lock,
  Database,
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
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  HelpCircle,
  Settings,
  User,
  Building2,
  Home,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Bike,
  Walk,
  Run,
  HeartIcon,
  EyeIcon,
  DatabaseIcon,
  CloudIcon,
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
import { SEO } from '../components/SEO';

const Partners: React.FC = () => {
  const partnershipTypes = [
    {
      id: 'technology',
      name: 'Technology Partners',
      description: 'Strategic partnerships with leading technology providers and platform vendors',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        'Access to cutting-edge technology',
        'Joint product development',
        'Shared innovation initiatives',
        'Enhanced market reach'
      ]
    },
    {
      id: 'consulting',
      name: 'Consulting Partners',
      description: 'Collaboration with management consulting firms and business advisors',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      benefits: [
        'Strategic business insights',
        'Industry expertise sharing',
        'Joint client engagements',
        'Thought leadership collaboration'
      ]
    },
    {
      id: 'channel',
      name: 'Channel Partners',
      description: 'Distribution and reseller partnerships for market expansion',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      benefits: [
        'Expanded market presence',
        'Local market expertise',
        'Increased sales opportunities',
        'Regional support capabilities'
      ]
    },
    {
      id: 'academic',
      name: 'Academic Partners',
      description: 'Partnerships with universities and research institutions',
      icon: Building,
      color: 'from-orange-500 to-red-500',
      benefits: [
        'Research collaboration',
        'Talent pipeline development',
        'Innovation partnerships',
        'Knowledge sharing'
      ]
    }
  ];

  const existingPartners = [
    {
      name: 'Microsoft',
      logo: '/partners/microsoft.png',
      type: 'Technology Partner',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      year: '2023'
    },
    {
      name: 'AWS',
      logo: '/partners/aws.png',
      type: 'Technology Partner',
      description: 'Cloud infrastructure and machine learning platform partnership',
      year: '2023'
    },
    {
      name: 'Google Cloud',
      logo: '/partners/google-cloud.png',
      type: 'Technology Partner',
      description: 'AI and analytics platform collaboration',
      year: '2024'
    },
    {
      name: 'IBM',
      logo: '/partners/ibm.png',
      type: 'Technology Partner',
      description: 'Enterprise AI and quantum computing partnership',
      year: '2024'
    },
    {
      name: 'Deloitte',
      logo: '/partners/deloitte.png',
      type: 'Consulting Partner',
      description: 'Strategic consulting and digital transformation collaboration',
      year: '2023'
    },
    {
      name: 'MIT',
      logo: '/partners/mit.png',
      type: 'Academic Partner',
      description: 'Research collaboration in AI and emerging technologies',
      year: '2024'
    }
  ];

  const partnerBenefits = [
    {
      title: 'Revenue Growth',
      description: 'Access to new markets and revenue streams through partnership opportunities',
      icon: TrendingUp,
      metrics: ['25% average revenue increase', 'New market access', 'Cross-selling opportunities']
    },
    {
      title: 'Technology Innovation',
      description: 'Collaborative development of cutting-edge solutions and technologies',
      icon: Zap,
      metrics: ['Joint R&D initiatives', 'Technology sharing', 'Innovation acceleration']
    },
    {
      title: 'Market Expansion',
      description: 'Geographic and industry expansion through strategic partnerships',
      icon: Globe,
      metrics: ['Global reach', 'Industry expertise', 'Local market knowledge']
    },
    {
      title: 'Risk Mitigation',
      description: 'Shared risk and resources for large-scale projects and initiatives',
      icon: Shield,
      metrics: ['Shared investment', 'Resource pooling', 'Risk distribution']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Partners - Zion Tech Group"
        description="Join our network of strategic partners and unlock new opportunities for growth, innovation, and market expansion."
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
              Strategic
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Partnerships
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join our network of strategic partners and unlock new opportunities for growth, 
              innovation, and market expansion across industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
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
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore different types of partnerships that align with your business goals and objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {type.name}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {type.description}
                </p>
                
                <ul className="space-y-2 text-left">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Partners */}
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
              Our Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading organizations that have chosen to partner with Zion Tech Group for mutual success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {existingPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{partner.name}</h3>
                    <p className="text-sm text-cyan-400">{partner.type}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {partner.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Partner since {partner.year}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
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
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the benefits and opportunities that come with partnering with Zion Tech Group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {benefit.description}
                </p>
                
                <ul className="space-y-3">
                  {benefit.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join our network of strategic partners and unlock new opportunities for growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Start Partnership Discussion
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Download Partnership Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;

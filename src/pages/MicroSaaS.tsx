import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Users, 
  Target,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Clock,
  DollarSign,
  BarChart3,
  Code,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  HardDrive,
  Wifi,
  Bluetooth,
  Radio,
  Sensor,
  Chip,
  Circuit,
  Orbit,
  Planet,
  Star as StarIcon,
  Telescope,
  Antenna,
  Signal,
  Navigation,
  Earth,
  Moon,
  Sun,
  Binary,
  Network2,
  Database2,
  Lock2,
  Key2,
  Fingerprint2,
  Eye,
  Brain2,
  Cpu2,
  Memory,
  HardDrive2,
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
  Rocket,
  Lightbulb,
  Award,
  Globe,
  Briefcase,
  Heart,
  FileText,
  BookOpen,
  MessageCircle,
  HelpCircle,
  Settings,
  Palette,
  Gamepad2,
  Music,
  Video,
  Image,
  Camera,
  Mic,
  Headphones,
  Speaker,
  Keyboard,
  Mouse,
  Printer,
  Scanner,
  Fax,
  Calculator,
  Watch,
  Compass,
  Map,
  Flag,
  Gift,
  Package,
  Truck,
  Car,
  Bike,
  Plane,
  Ship,
  Train,
  Bus,
  Taxi,
  Helicopter,
  Subway,
  Tram,
  CableCar,
  Ferry,
  Sailboat,
  Yacht,
  Cruise,
  Jet,
  Fighter,
  Bomber,
  Drone,
  Satellite,
  SpaceShuttle,
  UFO,
  Alien,
  Robot,
  Android,
  Apple,
  Windows,
  Linux,
  Ubuntu,
  Debian,
  Fedora,
  CentOS,
  RedHat,
  SUSE,
  Arch,
  Gentoo,
  Slackware,
  FreeBSD,
  OpenBSD,
  NetBSD,
  DragonFly,
  macOS,
  iOS,
  Android2,
  WindowsPhone,
  BlackBerry,
  Symbian,
  WebOS,
  FirefoxOS,
  Tizen,
  Sailfish,
  UbuntuTouch,
  PlasmaMobile,
  PostmarketOS,
  LineageOS,
  GrapheneOS,
  CalyxOS,
  CopperheadOS,
  Replicant,
  OmniROM,
  ParanoidAndroid,
  CyanogenMod,
  MIUI,
  EMUI,
  OneUI,
  ColorOS,
  OxygenOS,
  HydrogenOS,
  FlymeOS,
  SmartisanOS,
  FuntouchOS,
  RealmeUI,
  ZUI,
  LenovoOS,
  MotorolaOS,
  NokiaOS,
  SonyOS,
  LGOS,
  HTCOS,
  AsusOS,
  AcerOS,
  DellOS,
  HPOS,
  ToshibaOS,
  FujitsuOS,
  SharpOS,
  PanasonicOS,
  SamsungOS,
  AppleOS,
  GoogleOS,
  MicrosoftOS,
  AmazonOS,
  FacebookOS,
  TwitterOS,
  InstagramOS,
  LinkedInOS,
  YouTubeOS,
  TikTokOS,
  SnapchatOS,
  WhatsAppOS,
  TelegramOS,
  SignalOS,
  DiscordOS,
  SlackOS,
  TeamsOS,
  ZoomOS,
  SkypeOS,
  ViberOS,
  WeChatOS,
  QQOS,
  WeiboOS,
  BaiduOS,
  AlibabaOS,
  TencentOS,
  ByteDanceOS,
  XiaomiOS,
  HuaweiOS,
  OppoOS,
  VivoOS,
  OnePlusOS,
  RealmeOS,
  IqooOS,
  HonorOS,
  MeizuOS,
  ZTEOS,
  CoolpadOS,
  GioneeOS,
  LenovoOS2,
  MotorolaOS2,
  NokiaOS2,
  SonyOS2,
  LGOS2,
  HTCOS2,
  AsusOS2,
  AcerOS2,
  DellOS2,
  HPOS2,
  ToshibaOS2,
  FujitsuOS2,
  SharpOS2,
  PanasonicOS2,
  SamsungOS2,
  AppleOS2,
  GoogleOS2,
  MicrosoftOS2,
  AmazonOS2,
  FacebookOS2,
  TwitterOS2,
  InstagramOS2,
  LinkedInOS2,
  YouTubeOS2,
  TikTokOS2,
  SnapchatOS2,
  WhatsAppOS2,
  TelegramOS2,
  SignalOS2,
  DiscordOS2,
  SlackOS2,
  TeamsOS2,
  ZoomOS2,
  SkypeOS2,
  ViberOS2,
  WeChatOS2,
  QQOS2,
  WeiboOS2,
  BaiduOS2,
  AlibabaOS2,
  TencentOS2,
  ByteDanceOS2,
  XiaomiOS2,
  HuaweiOS2,
  OppoOS2,
  VivoOS2,
  OnePlusOS2,
  RealmeOS2,
  IqooOS2,
  HonorOS2,
  MeizuOS2,
  ZTEOS2,
  CoolpadOS2,
  GioneeOS2,
  LenovoOS3,
  MotorolaOS3,
  NokiaOS3,
  SonyOS3,
  LGOS3,
  HTCOS3,
  AsusOS3,
  AcerOS3,
  DellOS3,
  HPOS3,
  ToshibaOS3,
  FujitsuOS3,
  SharpOS3,
  PanasonicOS3,
  SamsungOS3,
  AppleOS3,
  GoogleOS3,
  MicrosoftOS3,
  AmazonOS3,
  FacebookOS3,
  TwitterOS3,
  InstagramOS3,
  LinkedInOS3,
  YouTubeOS3,
  TikTokOS3,
  SnapchatOS3,
  WhatsAppOS3,
  TelegramOS3,
  SignalOS3,
  DiscordOS3,
  SlackOS3,
  TeamsOS3,
  ZoomOS3,
  SkypeOS3,
  ViberOS3,
  WeChatOS3,
  QQOS3,
  WeiboOS3,
  BaiduOS3,
  AlibabaOS3,
  TencentOS3,
  ByteDanceOS3,
  XiaomiOS3,
  HuaweiOS3,
  OppoOS3,
  VivoOS3,
  OnePlusOS3,
  RealmeOS3,
  IqooOS3,
  HonorOS3,
  MeizuOS3,
  ZTEOS3,
  CoolpadOS3,
  GioneeOS3
} from 'lucide-react';

interface MicroSaaSService {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  icon: React.ComponentType<any>;
  color: string;
  rating: number;
  reviews: number;
  status: 'available' | 'coming-soon' | 'beta';
}

const microSaaSServices: MicroSaaSService[] = [
  {
    id: 'ai-email-automation',
    title: 'AI Email Automation',
    description: 'Intelligent email automation with AI-powered personalization and response handling.',
    category: 'Communication',
    price: '$99/month',
    features: [
      'AI-powered email personalization',
      'Automated response handling',
      'Smart email scheduling',
      'Analytics and insights',
      'Integration with major email platforms'
    ],
    benefits: [
      'Save 10+ hours per week on email management',
      'Improve response rates by 40%',
      'Personalized communication at scale',
      '24/7 automated customer support'
    ],
    useCases: [
      'Customer support automation',
      'Marketing email campaigns',
      'Sales follow-up sequences',
      'Internal communication'
    ],
    icon: Mail,
    color: 'from-blue-500 to-cyan-500',
    rating: 4.8,
    reviews: 156,
    status: 'available'
  },
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator',
    description: 'Generate high-quality content for blogs, social media, and marketing materials.',
    category: 'Content Creation',
    price: '$149/month',
    features: [
      'AI-powered content generation',
      'Multiple content formats',
      'SEO optimization',
      'Brand voice customization',
      'Plagiarism checking'
    ],
    benefits: [
      'Create content 10x faster',
      'Maintain consistent brand voice',
      'Improve SEO rankings',
      'Reduce content creation costs'
    ],
    useCases: [
      'Blog post creation',
      'Social media content',
      'Marketing copy',
      'Product descriptions'
    ],
    icon: FileText,
    color: 'from-purple-500 to-pink-500',
    rating: 4.9,
    reviews: 203,
    status: 'available'
  },
  {
    id: 'ai-analytics-dashboard',
    title: 'AI Analytics Dashboard',
    description: 'Real-time analytics dashboard with AI-powered insights and predictions.',
    category: 'Analytics',
    price: '$199/month',
    features: [
      'Real-time data visualization',
      'AI-powered insights',
      'Predictive analytics',
      'Custom dashboards',
      'Automated reporting'
    ],
    benefits: [
      'Make data-driven decisions',
      'Identify trends and opportunities',
      'Automate reporting processes',
      'Improve business performance'
    ],
    useCases: [
      'Business intelligence',
      'Performance monitoring',
      'Trend analysis',
      'KPI tracking'
    ],
    icon: BarChart3,
    color: 'from-green-500 to-emerald-500',
    rating: 4.7,
    reviews: 89,
    status: 'available'
  },
  {
    id: 'ai-customer-support',
    title: 'AI Customer Support',
    description: 'Intelligent customer support automation with natural language processing.',
    category: 'Customer Support',
    price: '$129/month',
    features: [
      'Natural language processing',
      'Multi-channel support',
      'Automated ticket routing',
      'Sentiment analysis',
      'Knowledge base integration'
    ],
    benefits: [
      'Reduce support costs by 60%',
      'Improve response times',
      '24/7 customer support',
      'Scale support operations'
    ],
    useCases: [
      'Customer service automation',
      'FAQ handling',
      'Ticket routing',
      'Support analytics'
    ],
    icon: MessageSquare,
    color: 'from-orange-500 to-red-500',
    rating: 4.8,
    reviews: 134,
    status: 'available'
  },
  {
    id: 'ai-project-management',
    title: 'AI Project Management',
    description: 'AI-powered project management with intelligent task allocation and progress tracking.',
    category: 'Project Management',
    price: '$179/month',
    features: [
      'AI task allocation',
      'Progress prediction',
      'Resource optimization',
      'Risk assessment',
      'Team collaboration tools'
    ],
    benefits: [
      'Improve project success rates',
      'Optimize resource allocation',
      'Reduce project delays',
      'Enhance team productivity'
    ],
    useCases: [
      'Project planning',
      'Team management',
      'Resource allocation',
      'Progress tracking'
    ],
    icon: Briefcase,
    color: 'from-indigo-500 to-purple-500',
    rating: 4.6,
    reviews: 78,
    status: 'available'
  },
  {
    id: 'ai-marketing-automation',
    title: 'AI Marketing Automation',
    description: 'Intelligent marketing automation with personalized campaigns and optimization.',
    category: 'Marketing',
    price: '$249/month',
    features: [
      'Personalized campaigns',
      'A/B testing automation',
      'Lead scoring',
      'Campaign optimization',
      'Multi-channel marketing'
    ],
    benefits: [
      'Increase conversion rates',
      'Reduce marketing costs',
      'Improve customer engagement',
      'Scale marketing operations'
    ],
    useCases: [
      'Email marketing',
      'Social media marketing',
      'Lead generation',
      'Customer retention'
    ],
    icon: Target,
    color: 'from-pink-500 to-rose-500',
    rating: 4.9,
    reviews: 167,
    status: 'available'
  }
];

const categories = [
  {
    name: 'Communication',
    icon: MessageSquare,
    description: 'AI-powered communication tools',
    count: 1,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Content Creation',
    icon: FileText,
    description: 'AI content generation and optimization',
    count: 1,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Analytics',
    icon: BarChart3,
    description: 'Data analytics and insights',
    count: 1,
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Customer Support',
    icon: HelpCircle,
    description: 'Customer support automation',
    count: 1,
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'Project Management',
    icon: Briefcase,
    description: 'Project management and collaboration',
    count: 1,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    name: 'Marketing',
    icon: Target,
    description: 'Marketing automation and optimization',
    count: 1,
    color: 'from-pink-500 to-rose-500'
  }
];

export default function MicroSaaS() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredServices = microSaaSServices.filter(service => {
    const categoryMatch = selectedCategory === 'all' || service.category === selectedCategory;
    const statusMatch = selectedStatus === 'all' || service.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">SaaS</span> Services
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Focused, scalable micro SaaS solutions designed for specific business needs. 
              Get started quickly with transparent pricing and instant deployment.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-slate-300 mb-8">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Instant Deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                <span>Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>No Setup Fees</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Browse Categories</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.button
              onClick={() => setSelectedCategory('all')}
              className={`p-6 rounded-xl border transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300'
                  : 'bg-slate-800/50 border-slate-700/50 text-slate-300 hover:border-cyan-400/30'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center">
                <ShoppingCart className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-semibold text-lg">All Services</h3>
                <p className="text-sm opacity-75">6 micro SaaS solutions</p>
              </div>
            </motion.button>

            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`p-6 rounded-xl border transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300'
                    : 'bg-slate-800/50 border-slate-700/50 text-slate-300 hover:border-cyan-400/30'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                  <p className="text-sm opacity-75">{category.count} service</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 overflow-hidden group"
              >
                {/* Header */}
                <div className={`p-6 bg-gradient-to-br ${service.color} relative`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-300 fill-current" />
                      <span className="text-white text-sm font-medium">{service.rating}</span>
                      <span className="text-white/70 text-xs">({service.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/80 text-sm">{service.description}</p>
                  
                  {service.status === 'coming-soon' && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-black text-xs px-2 py-1 rounded">
                      Coming Soon
                    </div>
                  )}
                  {service.status === 'beta' && (
                    <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                      Beta
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-slate-400 text-sm">{service.category}</span>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                          <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-cyan-600 text-white font-medium rounded-lg hover:bg-cyan-700 transition-colors">
                      Get Started
                    </button>
                    <button className="px-4 py-2 border border-slate-600 text-slate-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <ShoppingCart className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-300 mb-2">No services found</h3>
              <p className="text-slate-500">Try adjusting your filter criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Choose the perfect micro SaaS solution for your business needs. 
              Start today with instant deployment and transparent pricing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-colors"
              >
                Contact Sales
              </a>
              <a
                href="/services"
                className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-colors"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


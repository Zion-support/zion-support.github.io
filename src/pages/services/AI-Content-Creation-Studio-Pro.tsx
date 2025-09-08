import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  PenTool,
  Brain,
  Image,
  Video,
  FileText,
  Globe,
  TrendingUp,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Zap,
  Palette,
  BarChart3,
  Calendar,
  Target,
  Lightbulb,
  Shield,
  Clock,
  DollarSign,
  Award,
  Rocket,
  Sparkles,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  Settings,
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX,
  Fullscreen,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Camera,
  Mic,
  Edit3,
  Trash2,
  Save,
  Upload,
  Folder,
  File,
  FolderPlus,
  FilePlus,
  Image as ImageIcon,
  Video as VideoIcon,
  Music,
  FileAudio,
  FileVideo,
  FileImage,
  FileText as FileTextIcon,
  Code,
  Database,
  Cloud,
  Server,
  Network,
  Lock,
  Unlock,
  Eye as EyeIcon,
  EyeOff,
  User,
  UserCheck,
  UserX,
  Users as UsersIcon,
  UserPlus,
  UserMinus,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Atom,
  Rocket as RocketIcon,
  Leaf,
  Sun,
  Moon,
  Cloud as CloudIcon,
  Wifi,
  Bluetooth,
  Radio,
  Satellite,
  Activity,
  Heart,
  Star as StarIcon,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  MessageSquare,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Navigation,
  Compass,
  Home,
  Building,
  Store,
  ShoppingCart,
  CreditCard,
  Wallet,
  Gift,
  Package,
  Truck,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Bicycle,
  Motorcycle,
  Walk,
  Run,
  Bike,
  Swim,
  Ski,
  Snowboard,
  Surf,
  Climb,
  Hike,
  Camp,
  Tent,
  Fire,
  Water,
  Mountain,
  Tree,
  Flower,
  Seed,
  Sprout,
  Leaf as LeafIcon,
  Apple,
  Carrot,
  Grape,
  Lemon,
  Orange,
  Strawberry,
  Tomato,
  Pepper,
  Onion,
  Garlic,
  Ginger,
  Turmeric,
  Cinnamon,
  Nutmeg,
  Vanilla,
  Chocolate,
  Coffee,
  Tea,
  Beer,
  Wine,
  Cocktail,
  Juice,
  Water as WaterIcon,
  Milk,
  Yogurt,
  Cheese,
  Butter,
  Egg,
  Meat,
  Fish,
  Chicken,
  Pork,
  Beef,
  Lamb,
  Duck,
  Turkey,
  Goose,
  Quail,
  Pheasant,
  Partridge,
  Grouse,
  Ptarmigan,
  Capercaillie,
  BlackGrouse,
  HazelGrouse,
  WillowGrouse,
  RockPtarmigan,
  WhiteTailedPtarmigan,
  RockGrouse,
  SpruceGrouse,
  RuffedGrouse,
  SharpTailedGrouse,
  GreaterPrairieChicken,
  LesserPrairieChicken,
  AttwatersPrairieChicken,
  HeathHen,
  PassengerPigeon,
  CarolinaParakeet,
  IvoryBilledWoodpecker,
  BachmansWarbler,
  KirtlandsWarbler,
  GoldenCheekedWarbler,
  SwainsonsWarbler,
  WormEatingWarbler,
  BlueWingedWarbler,
  GoldenWingedWarbler,
  TennesseeWarbler,
  OrangeCrownedWarbler,
  NashvilleWarbler,
  VirginiasWarbler,
  ConnecticutWarbler,
  MacGillivraysWarbler,
  MourningWarbler,
  KentuckyWarbler,
  CommonYellowthroat,
  HoodedWarbler,
  WilsonWarbler,
  CanadaWarbler,
  RedfacedWarbler,
  PaintedRedstart,
  AmericanRedstart,
  ProthonotaryWarbler,
  SwainsonWarbler,
  Ovenbird,
  NorthernWaterthrush,
  LouisianaWaterthrush,
  KentuckyWarbler,
  ConnecticutWarbler,
  MacGillivraysWarbler,
  MourningWarbler,
  KentuckyWarbler,
  CommonYellowthroat,
  HoodedWarbler,
  WilsonWarbler,
  CanadaWarbler,
  RedfacedWarbler,
  PaintedRedstart,
  AmericanRedstart,
  ProthonotaryWarbler,
  SwainsonWarbler,
  Ovenbird,
  NorthernWaterthrush,
  LouisianaWaterthrush
} from 'lucide-react';

const AIContentCreationStudioPro = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Eye },
    { id: 'features', name: 'Features', icon: Star },
    { id: 'pricing', name: 'Pricing', icon: DollarSign },
    { id: 'demo', name: 'Demo', icon: Play },
    { id: 'contact', name: 'Contact', icon: Phone }
  ];

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and creators',
      features: [
        'AI text generation (up to 10,000 words/month)',
        'Basic image generation (up to 50 images/month)',
        '5 content templates',
        'Basic SEO optimization',
        'Email support',
        'Standard analytics'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'AI text generation (up to 100,000 words/month)',
        'Advanced image generation (up to 500 images/month)',
        'Video generation (up to 10 videos/month)',
        'Unlimited content templates',
        'Advanced SEO optimization',
        'Brand voice customization',
        'Content calendar management',
        'Priority support',
        'Advanced analytics',
        'Team collaboration (up to 5 users)'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited AI text generation',
        'Unlimited image generation',
        'Unlimited video generation',
        'Custom AI model training',
        'Advanced brand voice customization',
        'White-label solutions',
        'API access',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 phone support',
        'Advanced security features',
        'Unlimited team members',
        'Custom reporting',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const features = [
    {
      category: 'AI Content Generation',
      items: [
        {
          title: 'Multi-Format Content Creation',
          description: 'Generate text, images, videos, and audio content using advanced AI models',
          icon: PenTool,
          color: 'from-purple-500 to-pink-500'
        },
        {
          title: 'Advanced AI Models',
          description: 'Access to GPT-4, DALL-E 3, Stable Diffusion, and other cutting-edge AI models',
          icon: Brain,
          color: 'from-blue-500 to-cyan-500'
        },
        {
          title: 'Brand Voice Customization',
          description: 'Train AI models to match your brand\'s unique tone and style',
          icon: Users,
          color: 'from-green-500 to-emerald-500'
        }
      ]
    },
    {
      category: 'Content Management',
      items: [
        {
          title: 'Content Calendar',
          description: 'Plan, schedule, and manage your content production workflow',
          icon: Calendar,
          color: 'from-yellow-500 to-orange-500'
        },
        {
          title: 'Template Library',
          description: 'Access hundreds of pre-built content templates for various industries',
          icon: FileText,
          color: 'from-red-500 to-pink-500'
        },
        {
          title: 'Version Control',
          description: 'Track changes and maintain content history with advanced versioning',
          icon: GitBranch,
          color: 'from-indigo-500 to-purple-500'
        }
      ]
    },
    {
      category: 'SEO & Analytics',
      items: [
        {
          title: 'SEO Optimization',
          description: 'AI-powered SEO suggestions and keyword optimization tools',
          icon: TrendingUp,
          color: 'from-teal-500 to-blue-500'
        },
        {
          title: 'Performance Analytics',
          description: 'Track content performance with detailed analytics and insights',
          icon: BarChart3,
          color: 'from-emerald-500 to-green-500'
        },
        {
          title: 'A/B Testing',
          description: 'Test different content variations to optimize engagement',
          icon: Target,
          color: 'from-orange-500 to-red-500'
        }
      ]
    }
  ];

  const benefits = [
    {
      title: '10x Faster Content Creation',
      description: 'Generate high-quality content in minutes instead of hours',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Consistent Brand Messaging',
      description: 'Maintain consistent voice and style across all content',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'SEO-Optimized Content',
      description: 'Improve search rankings with AI-powered SEO optimization',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Multi-Platform Publishing',
      description: 'Create content for all your marketing channels from one platform',
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Advanced Analytics Insights',
      description: 'Make data-driven decisions with comprehensive content analytics',
      icon: BarChart3,
      color: 'from-teal-500 to-blue-500'
    },
    {
      title: 'Cost-Effective Solution',
      description: 'Reduce content creation costs by up to 70%',
      icon: DollarSign,
      color: 'from-emerald-500 to-green-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium mb-6">
              <PenTool className="w-4 h-4 mr-2" />
              AI Content Creation Studio Pro
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              AI Content Creation
              <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Studio Pro
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your content creation with the most advanced AI-powered platform. Generate text, images, videos, and more with unprecedented speed and quality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
              <button className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10x</div>
                <div className="text-gray-400">Faster Creation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">70%</div>
                <div className="text-gray-400">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400">Templates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">AI Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Tab */}
          {selectedTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-6">
                    The Future of Content Creation is Here
                  </h2>
                  <p className="text-xl text-gray-300 mb-6">
                    Our AI Content Creation Studio Pro combines cutting-edge artificial intelligence with intuitive design to revolutionize how you create, manage, and optimize content.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Generate content 10x faster than traditional methods</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Access to the latest AI models (GPT-4, DALL-E 3, Stable Diffusion)</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Built-in SEO optimization and analytics</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Enterprise-grade security and compliance</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
                    <div className="text-center">
                      <PenTool className="w-24 h-24 text-purple-400 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-white mb-4">AI Content Studio</h3>
                      <p className="text-gray-300 mb-6">
                        Experience the power of AI-driven content creation with our intuitive interface
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400">500+</div>
                          <div className="text-gray-400">Templates</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-pink-400">10+</div>
                          <div className="text-gray-400">AI Models</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Overview */}
              <div className="mb-20">
                <h3 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {features.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                      <h4 className="text-xl font-semibold text-white mb-6 text-center">{category.category}</h4>
                      <div className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-3">
                            <div className={`w-8 h-8 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                              <item.icon className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <h5 className="text-white font-medium mb-1">{item.title}</h5>
                              <p className="text-sm text-gray-400">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Section */}
              <div>
                <h3 className="text-3xl font-bold text-white text-center mb-12">Why Choose AI Content Creation Studio Pro?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4`}>
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-3">{benefit.title}</h4>
                      <p className="text-gray-400">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Features Tab */}
          {selectedTab === 'features' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Feature Set</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Discover all the powerful features that make AI Content Creation Studio Pro the ultimate content creation platform
                </p>
              </div>

              <div className="space-y-16">
                {features.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">{category.category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group"
                        >
                          <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            <item.icon className="w-8 h-8 text-white" />
                          </div>
                          <h4 className="text-xl font-semibold text-white mb-4">{item.title}</h4>
                          <p className="text-gray-400">{item.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Pricing Tab */}
          {selectedTab === 'pricing' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your needs. All plans include our core AI features with no hidden fees.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {plans.map((plan, index) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all ${
                      plan.popular
                        ? 'border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-pink-500/10'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                          Most Popular
                        </div>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="flex items-baseline justify-center mb-2">
                        <span className="text-5xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400 ml-1">{plan.period}</span>
                      </div>
                      <p className="text-gray-400">{plan.description}</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                          : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                      }`}
                    >
                      Get Started
                    </button>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-gray-400 mb-6">Need a custom plan? Contact our sales team</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Sales
                </Link>
              </div>
            </motion.div>
          )}

          {/* Demo Tab */}
          {selectedTab === 'demo' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-6">See AI Content Creation Studio Pro in Action</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Watch our comprehensive demo to see how easy it is to create amazing content with AI
              </p>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10 max-w-4xl mx-auto">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Play className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Interactive Demo Coming Soon</h3>
                <p className="text-gray-300 mb-8">
                  Our interactive demo is currently in development. In the meantime, schedule a personalized demo with our team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Demo
                  </Link>
                  <button className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20">
                    <Mail className="w-5 h-5 mr-2" />
                    Request Information
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Contact Tab */}
          {selectedTab === 'contact' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Get Started Today</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Ready to transform your content creation? Contact our team to learn more about AI Content Creation Studio Pro.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Phone</h4>
                        <p className="text-gray-400">+1 302 464 0950</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Email</h4>
                        <p className="text-gray-400">kleber@ziontechgroup.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Address</h4>
                        <p className="text-gray-400">364 E Main St STE 1008</p>
                        <p className="text-gray-400">Middletown DE 19709</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-white font-semibold mb-4">Business Hours</h4>
                    <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-gray-400">Saturday: 10:00 AM - 2:00 PM EST</p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Quick Contact Form</h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Company</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Tell us about your content creation needs..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Revolutionize Your Content Creation?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that are already using AI Content Creation Studio Pro to create amazing content faster than ever before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Start Free Trial
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIContentCreationStudioPro;
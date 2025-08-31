import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Brain, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  TrendingUp, 
  BarChart3, 
  Shield, 
  Clock, 
  DollarSign, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink,
  Target,
  Award,
  Rocket,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Lock,
  Eye,
  Search,
  Filter,
  Settings,
  Download,
  Upload,
  Share2,
  Copy,
  Edit3,
  Trash2,
  Save,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  RotateCw,
  Crop,
  Scissors,
  Type,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Indent,
  Outdent,
  Quote,
  Code,
  Link,
  Unlink,
  Image as ImageIcon,
  Video as VideoIcon,
  Music as MusicIcon,
  File as FileIcon,
  Folder,
  Calendar,
  Clock as ClockIcon,
  Bell,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Send,
  Smile,
  Frown,
  Meh,
  Plus,
  Minus,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  MoreVertical,
  Grid,
  Layout,
  Sidebar,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop,
  Server,
  Cloud,
  Wifi,
  Bluetooth,
  Battery,
  Power,
  WifiOff,
  BluetoothOff,
  BatteryOff,
  PowerOff,
  ChartBar,
  Activity,
  PieChart,
  LineChart,
  AreaChart,
  ScatterChart,
  CandlestickChart,
  Stock,
  Currency,
  Bitcoin,
  Ethereum,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  Safe,
  Vault,
  Lock as LockIcon,
  Unlock,
  Key,
  Fingerprint,
  EyeOff,
  Shield as ShieldIcon,
  AlertTriangle,
  AlertCircle,
  CheckSquare,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Star as StarIcon,
  Heart as HeartIcon,
  ThumbsUp as ThumbsUpIcon,
  ThumbsDown as ThumbsDownIcon,
  Smile as SmileIcon,
  Frown as FrownIcon,
  Meh as MehIcon,
  Plus as PlusIcon,
  Minus as MinusIcon,
  X as XIcon,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  MoreHorizontal as MoreHorizontalIcon,
  MoreVertical as MoreVerticalIcon,
  Grid as GridIcon,
  Layout as LayoutIcon,
  Sidebar as SidebarIcon,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Tablet as TabletIcon,
  Laptop as LaptopIcon,
  Desktop as DesktopIcon,
  Server as ServerIcon,
  Cloud as CloudIcon,
  Wifi as WifiIcon,
  Bluetooth as BluetoothIcon,
  Battery as BatteryIcon,
  Power as PowerIcon,
  WifiOff as WifiOffIcon,
  BluetoothOff as BluetoothOffIcon,
  BatteryOff as BatteryOffIcon,
  PowerOff as PowerOffIcon
} from 'lucide-react';

export default function QuantumAITradingPlatform() {
  const features = [
    {
      category: 'Quantum Computing Power',
      items: [
        {
          name: 'Quantum-Enhanced Market Prediction',
          description: 'Leverage quantum computing algorithms for ultra-fast market analysis and prediction modeling',
          icon: Atom,
          benefits: ['1000x faster analysis', 'Quantum advantage in optimization', 'Advanced pattern recognition']
        },
        {
          name: 'Quantum Neural Networks',
          description: 'Next-generation neural networks powered by quantum computing for superior market insights',
          icon: Brain,
          benefits: ['Quantum neural processing', 'Enhanced learning capabilities', 'Superior prediction accuracy']
        },
        {
          name: 'Quantum Risk Assessment',
          description: 'Advanced risk modeling using quantum algorithms for comprehensive portfolio protection',
          icon: Shield,
          benefits: ['Real-time risk monitoring', 'Quantum risk calculations', 'Advanced hedging strategies']
        }
      ]
    },
    {
      category: 'AI Trading Intelligence',
      items: [
        {
          name: 'Real-Time Market Analysis',
          description: 'Continuous market monitoring with AI-powered insights and automated trading signals',
          icon: Eye,
          benefits: ['24/7 market monitoring', 'Instant signal generation', 'Multi-market analysis']
        },
        {
          name: 'Portfolio Optimization',
          description: 'AI-driven portfolio management with quantum-enhanced optimization algorithms',
          icon: BarChart3,
          benefits: ['Dynamic rebalancing', 'Risk-adjusted returns', 'Optimal asset allocation']
        },
        {
          name: 'Predictive Analytics',
          description: 'Advanced forecasting models using machine learning and quantum computing',
          icon: TrendingUp,
          benefits: ['Market trend prediction', 'Volatility forecasting', 'Opportunity identification']
        }
      ]
    },
    {
      category: 'Trading Automation',
      items: [
        {
          name: 'High-Frequency Trading',
          description: 'Ultra-fast automated trading with quantum-enhanced execution algorithms',
          icon: Zap,
          benefits: ['Microsecond execution', 'Quantum speed advantage', 'Automated arbitrage']
        },
        {
          name: 'Smart Order Routing',
          description: 'Intelligent order execution across multiple exchanges for optimal pricing',
          icon: Network,
          benefits: ['Multi-exchange routing', 'Best execution guarantee', 'Liquidity optimization']
        },
        {
          name: 'Algorithmic Trading',
          description: 'Custom trading algorithms with quantum computing capabilities',
          icon: Cpu,
          benefits: ['Custom strategy development', 'Quantum algorithm integration', 'Performance optimization']
        }
      ]
    },
    {
      category: 'Security & Compliance',
      items: [
        {
          name: 'Quantum-Safe Cryptography',
          description: 'Future-proof security using post-quantum cryptographic algorithms',
          icon: Lock,
          benefits: ['Quantum-resistant encryption', 'Advanced security protocols', 'Regulatory compliance']
        },
        {
          name: 'Real-Time Compliance Monitoring',
          description: 'Automated compliance checking and reporting for regulatory requirements',
          icon: Shield,
          benefits: ['Automated compliance', 'Real-time monitoring', 'Regulatory reporting']
        },
        {
          name: 'Audit Trail Management',
          description: 'Comprehensive tracking of all trading activities and decisions',
          icon: FileText,
          benefits: ['Complete audit trail', 'Decision tracking', 'Regulatory transparency']
        }
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for individual traders and small portfolios',
      features: [
        'Up to $100K portfolio management',
        'Basic quantum algorithms',
        'Real-time market data',
        'Basic AI trading signals',
        'Email support',
        'Standard security features'
      ],
      popular: false,
      cta: 'Get Started',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for active traders and growing portfolios',
      features: [
        'Up to $1M portfolio management',
        'Advanced quantum algorithms',
        'Full AI trading suite',
        'Portfolio optimization',
        'Priority support',
        'Advanced analytics',
        'Custom trading strategies',
        'API access',
        'Multi-exchange trading'
      ],
      popular: true,
      cta: 'Start Free Trial',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      price: '$1299',
      period: '/month',
      description: 'For institutional investors and large portfolios',
      features: [
        'Unlimited portfolio size',
        'All quantum algorithms',
        'Custom quantum model training',
        'Advanced security & compliance',
        'Dedicated account manager',
        'White-label solutions',
        'Custom integrations',
        'Advanced workflow automation',
        'Multi-currency support',
        'Priority phone support'
      ],
      popular: false,
      cta: 'Contact Sales',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const benefits = [
    {
      title: '1000x Faster Market Analysis',
      description: 'Quantum computing provides exponential speedup in market analysis and prediction',
      icon: Zap,
      metric: '1000x',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Improved Trading Accuracy',
      description: 'AI and quantum algorithms deliver superior prediction accuracy and trading performance',
      icon: Target,
      metric: '40%',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Real-Time Portfolio Optimization',
      description: 'Continuous portfolio optimization with quantum-enhanced algorithms',
      icon: TrendingUp,
      metric: '24/7',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Reduced Trading Risks',
      description: 'Advanced risk management and quantum-safe security protocols',
      icon: Shield,
      metric: '60%',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const useCases = [
    {
      industry: 'Institutional Trading',
      description: 'High-frequency trading and portfolio management for large financial institutions',
      examples: ['Hedge funds', 'Investment banks', 'Asset management', 'Pension funds'],
      icon: Building
    },
    {
      industry: 'Retail Trading',
      description: 'Advanced trading tools and portfolio optimization for individual investors',
      examples: ['Day trading', 'Swing trading', 'Portfolio management', 'Risk management'],
      icon: User
    },
    {
      industry: 'Quantitative Finance',
      description: 'Quantitative analysis and algorithmic trading with quantum computing',
      examples: ['Quant models', 'Algorithm development', 'Backtesting', 'Strategy optimization'],
      icon: Calculator
    },
    {
      industry: 'Cryptocurrency Trading',
      description: 'Digital asset trading with quantum-enhanced analysis and security',
      examples: ['Bitcoin trading', 'Altcoin analysis', 'DeFi strategies', 'Crypto arbitrage'],
      icon: Bitcoin
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                <Atom className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Quantum AI Trading Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Experience the future of trading with our revolutionary quantum AI platform. 
              Leverage the power of quantum computing and artificial intelligence for 
              ultra-fast market analysis, superior trading accuracy, and exponential performance gains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
              >
                <Star className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400 hover:text-white transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Quantum AI Trading Platform?</h2>
          <p className="text-xl text-gray-300">Revolutionize your trading with cutting-edge quantum computing and AI technology</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Revolutionary Features</h2>
          <p className="text-xl text-gray-300">Everything you need to dominate the markets with quantum computing and AI</p>
        </div>

        {features.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">{item.name}</h4>
                      <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                      <ul className="space-y-1">
                        {item.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Use Cases */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Perfect For Every Trading Need</h2>
          <p className="text-xl text-gray-300">Discover how different trading professionals leverage our quantum AI platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.industry}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <useCase.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{useCase.industry}</h3>
              </div>
              <p className="text-gray-300 mb-4">{useCase.description}</p>
              <div className="space-y-2">
                <h4 className="text-white font-medium">Examples:</h4>
                <ul className="space-y-1">
                  {useCase.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                      <ArrowRight className="w-3 h-3 text-orange-400" />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Competitive Pricing Plans</h2>
          <p className="text-xl text-gray-300">Choose the plan that fits your trading requirements and portfolio size</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 ${
                plan.popular 
                  ? 'border-orange-500 ring-2 ring-orange-500/20' 
                  : 'border-white/20'
              } hover:border-white/40 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <p className="text-gray-300 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Revolutionize Your Trading?</h2>
          <p className="text-xl text-gray-300">Get in touch with our team to learn more about Quantum AI Trading Platform</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-orange-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-green-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-purple-400 mt-0.5" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <ExternalLink className="w-5 h-5 text-blue-400" />
                <a 
                  href={contactInfo.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {contactInfo.website}
                </a>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg">
              <h4 className="text-white font-semibold mb-3">Why Choose Zion Tech Group?</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Industry-leading quantum computing expertise</li>
                <li>• Proven track record of successful implementations</li>
                <li>• 24/7 technical support and maintenance</li>
                <li>• Competitive pricing with premium features</li>
                <li>• Global network of technology partners</li>
                <li>• Future-proof quantum technology solutions</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Request a Demo</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Portfolio Size</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option value="">Select portfolio size</option>
                  <option value="under-100k">Under $100K</option>
                  <option value="100k-1m">$100K - $1M</option>
                  <option value="1m-10m">$1M - $10M</option>
                  <option value="over-10m">Over $10M</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Tell us about your trading needs..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 inline mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Trading with Quantum AI Today
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Join the elite traders already leveraging quantum computing and AI for superior market performance. 
            Experience the future of trading technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center space-x-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Star className="w-5 h-5" />
              <span>Start Free Trial</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contact Sales</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Placeholder icon components
const User = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const Building = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const Calculator = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const Bitcoin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
);
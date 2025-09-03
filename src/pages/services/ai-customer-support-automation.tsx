import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Headphones, 
  MessageSquare, 
  Bot, 
  Users, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  DollarSign,
  Globe,
  Smartphone,
  Monitor,
  Send,
  Edit,
  Eye,
  Heart,
  Share2,
  Download,
  Upload,
  Settings,
  Bell,
  Search,
  Filter,
  Grid,
  List,
  Plus,
  ExternalLink,
  Brain,
  Calendar,
  PieChart,
  LineChart,
  Activity,
  Building2,
  Home,
  Car,
  GraduationCap,
  ShoppingBag,
  Briefcase,
  Palette,
  Music,
  Video,
  BookOpen,
  Camera,
  CreditCard,
  Hash,
  ThumbsUp,
  Bookmark,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Volume,
  Volume2,
  VolumeX,
  Mute,
  Unmute,
  Maximize,
  Minimize,
  Fullscreen,
  FullscreenExit,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  RefreshCw,
  SortAsc,
  SortDesc,
  Menu,
  QrCode,
  Tablet,
  Laptop,
  Desktop,
  Watch,
  Speaker,
  Microphone,
  Image,
  File,
  Folder,
  Archive,
  AlertCircle,
  Info,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Target,
  TrendingUp,
  Shield,
  Lock,
  Database,
  Network,
  Code,
  Server,
  Cloud,
  Cpu,
  HardDrive,
  Wifi,
  Bluetooth,
  Battery,
  Power,
  Wrench,
  Tool,
  Cog,
  Sliders,
  ToggleLeft,
  ToggleRight,
  Switch,
  Button,
  MousePointer,
  Keyboard,
  MonitorSpeaker,
  Printer,
  Scanner,
  Fax,
  Router,
  Modem,
  Hub,
  Switch as SwitchIcon,
  WifiOff,
  Signal,
  SignalHigh,
  SignalLow,
  SignalZero,
  Wifi2,
  Wifi1,
  Wifi0,
  BluetoothConnected,
  BluetoothSearching,
  BluetoothOff,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  BatteryEmpty,
  PowerOff,
  PowerOn,
  Plug,
  PlugZap,
  PlugZap2,
  Zap as ZapIcon,
  Lightning,
  Thunder,
  Storm,
  Rain,
  Snow,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudSun,
  CloudMoon,
  CloudDrizzle,
  CloudHail,
  CloudFog,
  CloudWind,
  Wind,
  Thermometer,
  ThermometerSun,
  ThermometerSnow,
  Droplets,
  Umbrella,
  SunDim,
  SunMedium,
  SunHigh,
  MoonStar,
  MoonWaningCrescent,
  MoonWaningGibbous,
  MoonWaxingCrescent,
  MoonWaxingGibbous,
  MoonFirstQuarter,
  MoonLastQuarter,
  MoonNew,
  MoonFull,
  Sunrise,
  Sunset,
  SunClock,
  MoonClock,
  Star as StarIcon,
  Stars,
  Sparkles,
  Sparkle,
  Gem,
  Diamond,
  Crown,
  Medal,
  Trophy,
  Award,
  Gift,
  Present,
  PartyPopper,
  Confetti,
  Balloon,
  Cake,
  Cookie,
  Coffee,
  Tea,
  Beer,
  Wine,
  Cocktail,
  Juice,
  Milk,
  Water,
  Soda,
  Energy,
  Fuel,
  Gas,
  Oil,
  Fire,
  Flame,
  Match,
  Lighter,
  Candle,
  Lightbulb,
  Lamp,
  Flashlight,
  Lantern,
  Torch,
  Spotlight,
  Sun as SunIcon,
  LightbulbOff,
  LightbulbOn,
  LightbulbIcon,
  LightbulbIconOff,
  LightbulbIconOn,
  LightbulbIcon2,
  LightbulbIcon2Off,
  LightbulbIcon2On,
  LightbulbIcon3,
  LightbulbIcon3Off,
  LightbulbIcon3On,
  LightbulbIcon4,
  LightbulbIcon4Off,
  LightbulbIcon4On,
  LightbulbIcon5,
  LightbulbIcon5Off,
  LightbulbIcon5On,
  LightbulbIcon6,
  LightbulbIcon6Off,
  LightbulbIcon6On,
  LightbulbIcon7,
  LightbulbIcon7Off,
  LightbulbIcon7On,
  LightbulbIcon8,
  LightbulbIcon8Off,
  LightbulbIcon8On,
  LightbulbIcon9,
  LightbulbIcon9Off,
  LightbulbIcon9On,
  LightbulbIcon10,
  LightbulbIcon10Off,
  LightbulbIcon10On
} from 'lucide-react';

const AICustomerSupportAutomation: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Chatbots",
      description: "Intelligent chatbots that understand context, handle complex queries, and provide instant responses 24/7.",
      benefits: ["Resolve 80% of queries instantly", "24/7 availability", "Multilingual support", "Context-aware responses"]
    },
    {
      icon: Brain,
      title: "Smart Ticket Routing",
      description: "AI automatically categorizes and routes tickets to the right agents based on content, urgency, and expertise.",
      benefits: ["Reduce response time by 70%", "Improve resolution accuracy", "Optimize agent workload", "Priority-based routing"]
    },
    {
      icon: MessageSquare,
      title: "Omnichannel Support",
      description: "Unified support across email, chat, phone, social media, and messaging platforms with consistent experience.",
      benefits: ["Unified customer view", "Cross-channel continuity", "Reduced response time", "Improved customer satisfaction"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive insights into support performance, customer satisfaction, and agent productivity.",
      benefits: ["Real-time performance metrics", "Customer satisfaction tracking", "Agent productivity insights", "Predictive analytics"]
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Smart automation that handles routine tasks, escalations, and follow-ups without human intervention.",
      benefits: ["Automate repetitive tasks", "Reduce manual work by 60%", "Consistent process execution", "Faster resolution times"]
    },
    {
      icon: Users,
      title: "Knowledge Management",
      description: "AI-powered knowledge base that learns from interactions and provides accurate, up-to-date information.",
      benefits: ["Self-updating knowledge base", "Instant information retrieval", "Reduced training time", "Consistent responses"]
    }
  ];

  const supportChannels = [
    {
      name: "Live Chat",
      description: "Real-time chat support with AI assistance",
      icon: MessageSquare,
      color: "from-blue-400 to-cyan-500",
      responseTime: "< 30 seconds"
    },
    {
      name: "Email Support",
      description: "AI-enhanced email ticket management",
      icon: Mail,
      color: "from-green-400 to-emerald-500",
      responseTime: "< 2 hours"
    },
    {
      name: "Phone Support",
      description: "AI-powered call routing and assistance",
      icon: Phone,
      color: "from-purple-400 to-pink-500",
      responseTime: "< 1 minute"
    },
    {
      name: "Social Media",
      description: "Monitor and respond across social platforms",
      icon: Share2,
      color: "from-orange-400 to-red-500",
      responseTime: "< 1 hour"
    },
    {
      name: "Video Support",
      description: "Screen sharing and video assistance",
      icon: Video,
      color: "from-indigo-400 to-purple-500",
      responseTime: "On-demand"
    },
    {
      name: "Self-Service",
      description: "AI-powered help center and FAQs",
      icon: BookOpen,
      color: "from-yellow-400 to-orange-500",
      responseTime: "Instant"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$297/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 tickets/month",
        "Basic AI chatbot",
        "Email and chat support",
        "Basic analytics",
        "Knowledge base",
        "Email support",
        "Mobile app access"
      ],
      popular: false,
      color: "from-gray-400 to-gray-600"
    },
    {
      name: "Professional",
      price: "$697/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 tickets/month",
        "Advanced AI chatbot",
        "Omnichannel support",
        "Advanced analytics",
        "Custom workflows",
        "Priority support",
        "Team collaboration",
        "API access",
        "Custom integrations"
      ],
      popular: true,
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "Enterprise",
      price: "$1,997/month",
      description: "For large organizations",
      features: [
        "Unlimited tickets",
        "White-label solution",
        "Advanced AI features",
        "Custom automation",
        "Dedicated account manager",
        "Advanced reporting",
        "Multi-brand support",
        "SLA guarantees",
        "Custom development"
      ],
      popular: false,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const automationTypes = [
    {
      title: "Ticket Auto-Classification",
      description: "Automatically categorize and prioritize support tickets based on content analysis.",
      results: "90% accuracy in classification"
    },
    {
      title: "Smart Escalation",
      description: "Intelligent escalation to human agents when AI cannot resolve the issue.",
      results: "60% reduction in escalation time"
    },
    {
      title: "Follow-up Automation",
      description: "Automated follow-up emails to ensure customer satisfaction and gather feedback.",
      results: "40% increase in satisfaction scores"
    },
    {
      title: "Knowledge Base Updates",
      description: "AI automatically updates knowledge base based on new solutions and common queries.",
      results: "50% reduction in knowledge maintenance"
    }
  ];

  const integrations = [
    { name: "Salesforce", icon: Users, color: "from-blue-400 to-indigo-500" },
    { name: "HubSpot", icon: Target, color: "from-orange-400 to-red-500" },
    { name: "Zendesk", icon: Headphones, color: "from-green-400 to-emerald-500" },
    { name: "Freshdesk", icon: MessageSquare, color: "from-blue-500 to-blue-600" },
    { name: "Intercom", icon: Bot, color: "from-purple-400 to-pink-500" },
    { name: "Slack", icon: MessageSquare, color: "from-purple-500 to-pink-500" },
    { name: "Microsoft Teams", icon: Users, color: "from-blue-500 to-indigo-500" },
    { name: "WhatsApp", icon: MessageSquare, color: "from-green-500 to-emerald-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <Helmet>
        <title>AI Customer Support Automation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered customer support automation platform that resolves 80% of queries instantly and reduces response time by 70%. Omnichannel support with intelligent chatbots." />
        <meta name="keywords" content="AI customer support, support automation, chatbot, omnichannel support, customer service, support analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-customer-support-automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-sm font-medium mb-6">
              <Headphones className="w-4 h-4 mr-2" />
              AI-Powered Customer Support
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Customer Support Automation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your customer support with AI that resolves 80% of queries instantly and reduces response time by 70%. 
              Provide exceptional support across all channels 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </a>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
              <div className="text-gray-300">Queries Resolved Instantly</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-green-400 mb-2">70%</div>
              <div className="text-gray-300">Faster Response Time</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Always Available</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-pink-400 mb-2">95%</div>
              <div className="text-gray-300">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI customer support platform combines advanced machine learning with customer service expertise to deliver exceptional support experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Omnichannel Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Provide consistent, high-quality support across all customer touchpoints with unified AI assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center mb-6`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{channel.name}</h3>
                <p className="text-gray-300 mb-6">{channel.description}</p>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full text-sm font-medium">
                  <Clock className="w-4 h-4 mr-2" />
                  {channel.responseTime}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Types */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Intelligent Automation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced automation that handles routine tasks and improves support efficiency without compromising quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationTypes.map((automation, index) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-4">{automation.title}</h3>
                <p className="text-gray-300 mb-6">{automation.description}</p>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full text-sm font-medium">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {automation.results}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and platforms to create a unified support ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${integration.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <integration.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{integration.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`p-8 rounded-xl border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-cyan-400 bg-gradient-to-br from-cyan-400/10 to-blue-500/10' 
                  : 'border-white/20 bg-white/5'
              }`}>
                {plan.popular && (
                  <div className="text-center mb-6">
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full text-sm font-medium">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href="tel:+13024640950" 
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">Need a custom solution for your enterprise?</p>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="inline-flex items-center px-6 py-3 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Contact Sales
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our AI customer support automation to provide exceptional support experiences and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
              <p>🌐 https://ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerSupportAutomation;
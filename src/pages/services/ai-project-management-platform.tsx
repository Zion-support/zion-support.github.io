import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  Users, 
  Target, 
  BarChart3, 
  Zap, 
  Brain, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  BarChart3, 
  Users, 
  Globe, 
  Phone, 
  Mail, 
  MapPin,
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
  MessageSquare,
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
  Headphones,
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

const AIProjectManagementPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Planning",
      description: "Intelligent project planning that automatically creates timelines, assigns resources, and predicts potential bottlenecks.",
      benefits: ["Reduce planning time by 70%", "Predict project risks", "Optimize resource allocation", "Automated timeline generation"]
    },
    {
      icon: Target,
      title: "Smart Task Management",
      description: "AI-driven task prioritization and assignment based on team capacity, skills, and project requirements.",
      benefits: ["Intelligent task prioritization", "Skill-based assignments", "Workload balancing", "Deadline optimization"]
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Advanced analytics that forecast project outcomes, identify risks, and suggest optimization strategies.",
      benefits: ["Project outcome prediction", "Risk identification", "Performance optimization", "Resource forecasting"]
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless collaboration tools with AI-powered communication optimization and conflict resolution.",
      benefits: ["Enhanced team communication", "Conflict detection", "Meeting optimization", "Knowledge sharing"]
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Smart automation that handles routine tasks, notifications, and project updates without manual intervention.",
      benefits: ["Automated status updates", "Smart notifications", "Workflow optimization", "Reduced manual work"]
    },
    {
      icon: Calendar,
      title: "Intelligent Scheduling",
      description: "AI-optimized scheduling that considers team availability, project dependencies, and resource constraints.",
      benefits: ["Optimal meeting scheduling", "Resource conflict resolution", "Dependency management", "Capacity planning"]
    }
  ];

  const projectTypes = [
    {
      name: "Software Development",
      description: "Agile project management with AI-powered sprint planning and code quality monitoring",
      icon: Code,
      color: "from-blue-400 to-cyan-500",
      results: "40% faster delivery"
    },
    {
      name: "Marketing Campaigns",
      description: "Campaign management with AI-driven content optimization and performance tracking",
      icon: Target,
      color: "from-purple-400 to-pink-500",
      results: "60% higher ROI"
    },
    {
      name: "Construction Projects",
      description: "Construction management with AI-powered resource optimization and safety monitoring",
      icon: Building2,
      color: "from-orange-400 to-red-500",
      results: "30% cost reduction"
    },
    {
      name: "Event Planning",
      description: "Event management with AI-driven vendor selection and logistics optimization",
      icon: Calendar,
      color: "from-green-400 to-emerald-500",
      results: "50% time savings"
    },
    {
      name: "Research Projects",
      description: "Research management with AI-powered data analysis and collaboration tools",
      icon: BookOpen,
      color: "from-indigo-400 to-purple-500",
      results: "70% faster insights"
    },
    {
      name: "Product Launch",
      description: "Product launch management with AI-driven market analysis and go-to-market optimization",
      icon: Rocket,
      color: "from-yellow-400 to-orange-500",
      results: "80% success rate"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$197/month",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 10 team members",
        "Unlimited projects",
        "Basic AI features",
        "Task management",
        "Basic analytics",
        "Email support",
        "Mobile app access"
      ],
      popular: false,
      color: "from-gray-400 to-gray-600"
    },
    {
      name: "Professional",
      price: "$497/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 50 team members",
        "Advanced AI features",
        "Predictive analytics",
        "Custom workflows",
        "Advanced reporting",
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
      price: "$1,297/month",
      description: "For large organizations",
      features: [
        "Unlimited team members",
        "White-label solution",
        "Advanced AI features",
        "Custom automation",
        "Dedicated account manager",
        "Advanced security",
        "Multi-brand support",
        "Custom development",
        "SLA guarantees"
      ],
      popular: false,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const integrations = [
    { name: "Slack", icon: MessageSquare, color: "from-purple-400 to-pink-500" },
    { name: "Microsoft Teams", icon: Users, color: "from-blue-400 to-indigo-500" },
    { name: "Jira", icon: Target, color: "from-blue-500 to-blue-600" },
    { name: "Asana", icon: CheckCircle, color: "from-green-400 to-emerald-500" },
    { name: "Trello", icon: Grid, color: "from-blue-400 to-cyan-500" },
    { name: "GitHub", icon: Code, color: "from-gray-800 to-gray-900" },
    { name: "Google Workspace", icon: Globe, color: "from-green-400 to-blue-500" },
    { name: "Salesforce", icon: Users, color: "from-blue-400 to-indigo-500" }
  ];

  const useCases = [
    {
      title: "Software Development Teams",
      description: "Streamline agile development with AI-powered sprint planning, code quality monitoring, and automated testing workflows.",
      results: "Average 40% faster project delivery"
    },
    {
      title: "Marketing Agencies",
      description: "Manage multiple client campaigns with AI-driven content optimization, performance tracking, and resource allocation.",
      results: "Average 60% increase in campaign ROI"
    },
    {
      title: "Construction Companies",
      description: "Optimize construction projects with AI-powered resource management, safety monitoring, and timeline optimization.",
      results: "Average 30% reduction in project costs"
    },
    {
      title: "Consulting Firms",
      description: "Manage client projects with AI-driven resource allocation, timeline optimization, and performance tracking.",
      results: "Average 50% improvement in project success rate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <Helmet>
        <title>AI Project Management Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered project management platform that reduces planning time by 70% and improves project success rates by 50%. Intelligent task management, predictive analytics, and automated workflows." />
        <meta name="keywords" content="AI project management, project management software, task management, team collaboration, project analytics, workflow automation" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-project-management-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              AI-Powered Project Management
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Project Management Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your project management with AI that reduces planning time by 70% and improves success rates by 50%. 
              Intelligent task management, predictive analytics, and automated workflows.
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
              <div className="text-3xl font-bold text-cyan-400 mb-2">70%</div>
              <div className="text-gray-300">Faster Planning</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
              <div className="text-gray-300">Higher Success Rate</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
              <div className="text-gray-300">Time Savings</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-pink-400 mb-2">95%</div>
              <div className="text-gray-300">Team Satisfaction</div>
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
              Our AI project management platform combines advanced machine learning with project management expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
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

      {/* Project Types */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfect for Any Project Type
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI project management platform adapts to any industry and project type with specialized features and optimizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center mb-6`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{project.name}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full text-sm font-medium">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {project.results}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms to create a unified project management ecosystem.
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
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your team size and needs. All plans include our core AI features with no hidden fees.
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
            <p className="text-gray-300 mb-4">Need a custom solution for your organization?</p>
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

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how teams across industries are achieving remarkable results with our AI project management platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full text-sm font-medium">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {useCase.results}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of teams already using our AI project management platform to deliver projects faster, more efficiently, and with higher success rates.
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

export default AIProjectManagementPlatform;
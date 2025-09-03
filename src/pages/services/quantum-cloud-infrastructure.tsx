import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, 
  Shield, 
  Zap, 
  Server, 
  Database, 
  Network, 
  Lock, 
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
  Target,
  TrendingUp,
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

const QuantumCloudInfrastructure: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: "Quantum-Enhanced Computing",
      description: "Leverage quantum computing principles for exponentially faster data processing and complex problem solving.",
      benefits: ["1000x faster computation", "Quantum algorithm optimization", "Parallel processing", "Advanced cryptography"]
    },
    {
      icon: Shield,
      title: "Zero-Trust Security Framework",
      description: "Advanced security architecture that verifies every request and never trusts by default.",
      benefits: ["Military-grade encryption", "Identity verification", "Micro-segmentation", "Continuous monitoring"]
    },
    {
      icon: Zap,
      title: "AI-Optimized Resource Allocation",
      description: "Intelligent resource management that automatically scales and optimizes based on demand patterns.",
      benefits: ["Auto-scaling", "Cost optimization", "Performance tuning", "Predictive scaling"]
    },
    {
      icon: Network,
      title: "Hybrid Cloud Architecture",
      description: "Seamless integration between on-premises, private cloud, and public cloud environments.",
      benefits: ["Flexible deployment", "Data sovereignty", "Reduced latency", "Disaster recovery"]
    },
    {
      icon: Database,
      title: "Quantum Database Systems",
      description: "Next-generation database technology with quantum-enhanced query processing and storage.",
      benefits: ["Instant queries", "Massive scalability", "Data integrity", "Advanced indexing"]
    },
    {
      icon: Server,
      title: "Edge Computing Integration",
      description: "Distributed computing architecture that brings processing closer to data sources.",
      benefits: ["Reduced latency", "Bandwidth optimization", "Real-time processing", "Offline capabilities"]
    }
  ];

  const technicalSpecs = [
    {
      category: "Compute Power",
      specs: [
        "Quantum processors with 1000+ qubits",
        "AI-accelerated GPUs (NVIDIA H100)",
        "Custom quantum-classical hybrid chips",
        "Edge computing nodes worldwide"
      ]
    },
    {
      category: "Storage & Database",
      specs: [
        "Quantum-encrypted distributed storage",
        "Petabyte-scale object storage",
        "Real-time data replication",
        "Advanced compression algorithms"
      ]
    },
    {
      category: "Network & Security",
      specs: [
        "Quantum key distribution (QKD)",
        "Zero-trust network architecture",
        "Global CDN with edge locations",
        "Advanced DDoS protection"
      ]
    },
    {
      category: "AI & Analytics",
      specs: [
        "Machine learning model training",
        "Real-time analytics processing",
        "Predictive maintenance systems",
        "Automated optimization algorithms"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$5,999/month",
      description: "Perfect for startups and small businesses",
      features: [
        "Up to 10 quantum compute hours/month",
        "100GB quantum-encrypted storage",
        "Basic AI optimization",
        "Standard support",
        "99.9% uptime SLA",
        "Basic monitoring",
        "Email support"
      ],
      popular: false,
      color: "from-gray-400 to-gray-600"
    },
    {
      name: "Quantum Professional",
      price: "$19,999/month",
      description: "Ideal for growing enterprises",
      features: [
        "Up to 100 quantum compute hours/month",
        "1TB quantum-encrypted storage",
        "Advanced AI optimization",
        "Priority support",
        "99.99% uptime SLA",
        "Advanced monitoring",
        "24/7 phone support",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: true,
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "Quantum Enterprise",
      price: "$99,999/month",
      description: "For large organizations and governments",
      features: [
        "Unlimited quantum compute hours",
        "Unlimited quantum-encrypted storage",
        "Full AI optimization suite",
        "White-label solution",
        "99.999% uptime SLA",
        "Enterprise monitoring",
        "Dedicated support team",
        "Custom development",
        "On-premises deployment",
        "Compliance certifications"
      ],
      popular: false,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "High-frequency trading, risk analysis, and fraud detection with quantum-enhanced algorithms.",
      results: "99.99% uptime for trading systems"
    },
    {
      title: "Healthcare & Research",
      description: "Drug discovery, genomic analysis, and medical imaging with quantum computing power.",
      results: "1000x faster research computations"
    },
    {
      title: "Manufacturing",
      description: "Supply chain optimization, predictive maintenance, and quality control with AI insights.",
      results: "40% reduction in operational costs"
    },
    {
      title: "Government & Defense",
      description: "Secure communications, threat analysis, and data processing with quantum security.",
      results: "Military-grade security compliance"
    }
  ];

  const complianceStandards = [
    { name: "SOC 2 Type II", icon: Shield, color: "from-green-400 to-emerald-500" },
    { name: "ISO 27001", icon: Lock, color: "from-blue-400 to-cyan-500" },
    { name: "HIPAA", icon: Heart, color: "from-red-400 to-pink-500" },
    { name: "GDPR", icon: Globe, color: "from-purple-400 to-indigo-500" },
    { name: "PCI DSS", icon: CreditCard, color: "from-orange-400 to-red-500" },
    { name: "FedRAMP", icon: Building2, color: "from-yellow-400 to-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <Helmet>
        <title>Quantum Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Next-generation quantum-enhanced cloud infrastructure with AI optimization, zero-trust security, and 99.99% uptime guarantee. Reduce costs by 60% and improve performance by 300%." />
        <meta name="keywords" content="quantum cloud infrastructure, quantum computing, cloud services, AI optimization, zero-trust security, edge computing" />
        <link rel="canonical" href="https://ziontechgroup.com/services/quantum-cloud-infrastructure" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-sm font-medium mb-6">
              <Cloud className="w-4 h-4 mr-2" />
              Next-Generation Cloud Infrastructure
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Quantum Cloud Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary quantum-enhanced cloud infrastructure with AI optimization, zero-trust security, and 99.99% uptime guarantee. 
              Reduce costs by 60% and improve performance by 300%.
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
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.99%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-green-400 mb-2">300%</div>
              <div className="text-gray-300">Performance Improvement</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-pink-400 mb-2">1000x</div>
              <div className="text-gray-300">Faster Computation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum cloud infrastructure combines cutting-edge quantum computing with advanced AI optimization to deliver unprecedented performance and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center mb-6">
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

      {/* Technical Specifications */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade infrastructure with cutting-edge quantum and AI technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-6">{spec.category}</h3>
                <ul className="space-y-4">
                  {spec.specs.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Compliance & Security Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the highest security and compliance standards for enterprise and government use.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${standard.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <standard.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{standard.name}</h3>
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
              Enterprise Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed for businesses of all sizes with transparent costs and no hidden fees.
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
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations across industries are leveraging our quantum cloud infrastructure for breakthrough results.
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
          <div className="text-center bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Quantum Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join forward-thinking organizations already using our quantum cloud infrastructure to achieve breakthrough performance and security.
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

export default QuantumCloudInfrastructure;
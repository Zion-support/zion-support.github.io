import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  Database,
  Cpu,
  Network,
  Eye,
  Activity,
  BarChart,
  PieChart,
  LineChart,
  Calendar,
  AlertCircle,
  Settings,
  Play,
  Pause,
  RotateCcw,
  Download,
  Share2,
  Lock,
  Unlock,
  EyeOff,
  EyeOn,
  Filter,
  Search,
  RefreshCw,
  DownloadCloud,
  Upload,
  Trash2,
  Edit,
  Copy,
  ExternalLink,
  HelpCircle,
  Info,
  AlertTriangle,
  CheckSquare,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Star as StarIcon,
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  User,
  UserCheck,
  UserX,
  Users as UsersIcon,
  Building,
  Home,
  Car,
  Plane,
  Train,
  Bus,
  Ship,
  Bike,
  Walk,
  Run,
  Swim,
  Gamepad2,
  Music,
  Video,
  Camera,
  Image,
  File,
  Folder,
  HardDrive,
  Server,
  Router,
  Switch,
  Hub,
  Modem,
  Antenna,
  Satellite,
  Wifi,
  Bluetooth,
  Usb,
  Hdmi,
  Vga,
  Dvi,
  DisplayPort,
  Thunderbolt,
  Lightning,
  Power,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  BatteryWarning,
  Plug,
  Unplug,
  PowerOff,
  PowerOn,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Headphones,
  Speaker,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop,
  Watch,
  Camera as CameraIcon,
  Video as VideoIcon,
  Image as ImageIcon,
  File as FileIcon,
  Folder as FolderIcon,
  HardDrive as HardDriveIcon,
  Server as ServerIcon,
  Router as RouterIcon,
  Switch as SwitchIcon,
  Hub as HubIcon,
  Modem as ModemIcon,
  Antenna as AntennaIcon,
  Satellite as SatelliteIcon,
  Wifi as WifiIcon,
  Bluetooth as BluetoothIcon,
  Usb as UsbIcon,
  Hdmi as HdmiIcon,
  Vga as VgaIcon,
  Dvi as DviIcon,
  DisplayPort as DisplayPortIcon,
  Thunderbolt as ThunderboltIcon,
  Lightning as LightningIcon,
  Power as PowerIcon,
  Battery as BatteryIcon,
  BatteryCharging as BatteryChargingIcon,
  BatteryFull as BatteryFullIcon,
  BatteryLow as BatteryLowIcon,
  BatteryMedium as BatteryMediumIcon,
  BatteryWarning as BatteryWarningIcon,
  Plug as PlugIcon,
  Unplug as UnplugIcon,
  PowerOff as PowerOffIcon,
  PowerOn as PowerOnIcon,
  Volume as VolumeIcon,
  Volume1 as Volume1Icon,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Mic as MicIcon,
  MicOff as MicOffIcon,
  Headphones as HeadphonesIcon,
  Speaker as SpeakerIcon,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Tablet as TabletIcon,
  Laptop as LaptopIcon,
  Desktop as DesktopIcon,
  Watch as WatchIcon
} from 'lucide-react';

const AIAutonomousBusinessIntelligencePlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Autonomous AI Analytics",
      description: "Self-learning algorithms that continuously improve data analysis and insights generation without human intervention."
    },
    {
      icon: BarChart3,
      title: "Real-time Business Intelligence",
      description: "Instant access to critical business metrics, KPIs, and performance indicators with zero latency."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics Engine",
      description: "Advanced forecasting models that predict market trends, customer behavior, and business opportunities."
    },
    {
      icon: Zap,
      title: "Automated Reporting",
      description: "Intelligent report generation that adapts to user preferences and business requirements automatically."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, role-based access control, and compliance monitoring."
    },
    {
      icon: Globe,
      title: "Multi-Platform Integration",
      description: "Seamless connectivity with 100+ business applications, databases, and cloud services."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 users",
        "Basic AI analytics",
        "Standard reporting",
        "Email support",
        "5GB data storage",
        "Basic integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing companies and teams",
      features: [
        "Up to 25 users",
        "Advanced AI analytics",
        "Custom dashboards",
        "Priority support",
        "50GB data storage",
        "Advanced integrations",
        "API access",
        "Custom branding"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited users",
        "Full AI autonomy",
        "White-label solution",
        "24/7 dedicated support",
        "Unlimited data storage",
        "Custom integrations",
        "Advanced security",
        "SLA guarantees",
        "On-premise option",
        "Custom training"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Increased Revenue",
      description: "Data-driven insights lead to 25-40% revenue growth through better decision making."
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Automate 80% of reporting tasks, saving 20+ hours per week for your team."
    },
    {
      icon: Users,
      title: "Better Collaboration",
      description: "Unified data platform enables seamless teamwork across departments."
    },
    {
      icon: TrendingUp,
      title: "Competitive Advantage",
      description: "Stay ahead with predictive insights and real-time market intelligence."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-indigo-900/10 opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Industry Leading AI-Powered BI Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              AI Autonomous Business Intelligence Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with the world's most intelligent, autonomous business intelligence platform. 
              Get real-time insights, predictive analytics, and automated reporting powered by advanced AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary Features That Set Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge technology with intuitive design to deliver 
              the most powerful business intelligence solution available.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our AI Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience unprecedented growth and efficiency with our autonomous business intelligence solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transparent, Scalable Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features 
              with no hidden costs or surprise fees.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  plan.popular 
                    ? 'border-blue-500 scale-105' 
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">
              Need a custom solution? Contact us for enterprise pricing and custom integrations.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              Contact Sales Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of companies already using our AI platform to drive growth, 
              improve efficiency, and gain competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousBusinessIntelligencePlatform;
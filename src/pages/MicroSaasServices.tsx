import React from 'react';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Globe,
  TrendingUp,
  BarChart3,
  Cpu,
  Database,
  Smartphone,
  Code,
  Target,
  Rocket,
  Award,
  Lock,
  FileText,
  Image,
  Video,
  Mail,
  Calendar,
  CreditCard,
  Settings,
  Monitor,
  Smartphone as Mobile,
  Laptop,
  Headphones,
  Camera,
  Mic,
  Search,
  Filter,
  Download,
  Upload,
  Share2,
  Heart,
  ThumbsUp,
  MessageCircle,
  Bell,
  Clock,
  DollarSign,
  Percent,
  PieChart,
  Activity,
  Layers,
  Workflow,
  GitBranch,
  Terminal,
  Palette,
  Wand2,
  Sparkles,
  Lightbulb,
  BookOpen,
  GraduationCap,
  Briefcase,
  Home,
  ShoppingCart,
  Package,
  Truck,
  MapPin,
  Navigation,
  Compass,
  Globe2,
  Wifi,
  Bluetooth,
  Battery,
  Power,
  RefreshCw,
  RotateCcw,
  Save,
  Edit,
  Trash2,
  Copy,
  Scissors,
  Paperclip,
  Link,
  ExternalLink,
  Maximize,
  Minimize,
  X,
  Plus,
  Minus,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  MicOff,
  VideoOff,
  Eye,
  EyeOff,
  Lock as LockIcon,
  Unlock,
  Key,
  Fingerprint,
  Shield as ShieldIcon,
  AlertTriangle,
  Info,
  HelpCircle,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Zap as ZapIcon,
  Flash,
  Thunder,
  Sun,
  Moon,
  Cloud as CloudIcon,
  CloudRain,
  CloudSnow,
  Wind,
  Droplets,
  Thermometer,
  Gauge,
  Timer,
  Stopwatch,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  History,
  Archive,
  Folder,
  FolderOpen,
  File,
  FileText as FileTextIcon,
  Image as ImageIcon,
  Video as VideoIcon,
  Music,
  Headphones as HeadphonesIcon,
  Mic as MicIcon,
  Camera as CameraIcon,
  Smartphone as SmartphoneIcon,
  Tablet,
  Laptop as LaptopIcon,
  Monitor as MonitorIcon,
  Tv,
  Radio,
  Speaker,
  Volume1,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
  RotateCcw as RotateCcwIcon,
  RotateCw,
  Repeat,
  Shuffle,
  Repeat1,
  Shuffle as ShuffleIcon,
  Repeat as RepeatIcon,
  Repeat1 as Repeat1Icon,
  Shuffle2,
  Repeat2,
  Repeat3,
  Shuffle3,
  Repeat4,
  Shuffle4,
  Repeat5,
  Shuffle5,
  Repeat6,
  Shuffle6,
  Repeat7,
  Shuffle7,
  Repeat8,
  Shuffle8,
  Repeat9,
  Shuffle9,
  Repeat10,
  Shuffle10
} from 'lucide-react';

const MicroSaasServices: React.FC = () => {
  const microSaasServices = [
    {
      title: "AI Content Generator Pro",
      description: "Generate high-quality, SEO-optimized content for blogs, social media, and marketing materials using advanced AI.",
      features: [
        "SEO-optimized content generation",
        "Multiple content types (blogs, social, ads)",
        "Brand voice customization",
        "Plagiarism detection & removal",
        "Multi-language support",
        "Content calendar integration",
        "Performance analytics",
        "Team collaboration tools"
      ],
      icon: Brain,
      price: "$29/month",
      category: "AI Tools",
      popular: true,
      freeTrial: "14 days free",
      users: "10,000+",
      rating: 4.9
    },
    {
      title: "Smart Analytics Dashboard",
      description: "Real-time business analytics with AI-powered insights, predictive forecasting, and custom reporting.",
      features: [
        "Real-time metrics & KPIs",
        "Predictive analytics & forecasting",
        "Custom report builder",
        "Mobile app access",
        "Data visualization tools",
        "Automated alerts",
        "Integration with 100+ tools",
        "White-label options"
      ],
      icon: BarChart3,
      price: "$49/month",
      category: "Analytics",
      popular: true,
      freeTrial: "30 days free",
      users: "15,000+",
      rating: 4.8
    },
    {
      title: "Automated Customer Support",
      description: "AI-powered chatbot that handles customer inquiries 24/7 with human-like responses and seamless escalation.",
      features: [
        "Multi-language support (50+ languages)",
        "Integration APIs for all platforms",
        "Analytics & performance dashboard",
        "Custom training & knowledge base",
        "Human handoff capabilities",
        "Sentiment analysis",
        "Voice & text support",
        "CRM integration"
      ],
      icon: Users,
      price: "$39/month",
      category: "Customer Service",
      popular: false,
      freeTrial: "7 days free",
      users: "8,500+",
      rating: 4.7
    },
    {
      title: "Code Review Assistant",
      description: "AI-powered code review tool that catches bugs, suggests improvements, and enforces best practices.",
      features: [
        "Multi-language support (20+ languages)",
        "Security vulnerability scanning",
        "Performance analysis & optimization",
        "Team collaboration features",
        "CI/CD integration",
        "Custom rule configuration",
        "Code quality scoring",
        "Automated pull request reviews"
      ],
      icon: Code,
      price: "$79/month",
      category: "Development Tools",
      popular: false,
      freeTrial: "14 days free",
      users: "5,200+",
      rating: 4.9
    },
    {
      title: "Social Media Scheduler",
      description: "Schedule and optimize social media posts across all platforms with AI-powered timing and content suggestions.",
      features: [
        "Multi-platform posting (10+ networks)",
        "AI-powered optimal timing",
        "Content suggestion engine",
        "Analytics & performance tracking",
        "Bulk upload & scheduling",
        "Team collaboration tools",
        "Hashtag optimization",
        "Competitor analysis"
      ],
      icon: Globe,
      price: "$19/month",
      category: "Marketing",
      popular: true,
      freeTrial: "14 days free",
      users: "25,000+",
      rating: 4.6
    },
    {
      title: "Invoice & Payment Manager",
      description: "Automated invoicing system with payment processing, financial tracking, and tax reporting.",
      features: [
        "Automated invoice generation",
        "Multiple payment gateways",
        "Expense tracking & categorization",
        "Tax reporting & compliance",
        "Client portal access",
        "Recurring billing setup",
        "Financial analytics",
        "Multi-currency support"
      ],
      icon: TrendingUp,
      price: "$25/month",
      category: "Finance",
      popular: false,
      freeTrial: "30 days free",
      users: "12,000+",
      rating: 4.8
    },
    {
      title: "AI-Powered Email Marketing",
      description: "Intelligent email marketing platform with AI-driven personalization, automation, and optimization.",
      features: [
        "AI-powered personalization",
        "Advanced automation workflows",
        "A/B testing & optimization",
        "Subscriber segmentation",
        "Email template library",
        "Performance analytics",
        "Deliverability optimization",
        "GDPR compliance tools"
      ],
      icon: Mail,
      price: "$35/month",
      category: "Marketing",
      popular: false,
      freeTrial: "14 days free",
      users: "18,000+",
      rating: 4.7
    },
    {
      title: "Project Management AI",
      description: "Smart project management tool with AI-powered task prioritization, resource allocation, and progress tracking.",
      features: [
        "AI task prioritization",
        "Resource allocation optimization",
        "Progress tracking & forecasting",
        "Team collaboration tools",
        "Time tracking integration",
        "Risk assessment & alerts",
        "Custom workflow builder",
        "Integration with 50+ tools"
      ],
      icon: Target,
      price: "$45/month",
      category: "Productivity",
      popular: true,
      freeTrial: "21 days free",
      users: "9,500+",
      rating: 4.8
    },
    {
      title: "AI Video Editor",
      description: "Automated video editing platform with AI-powered content creation, editing, and optimization.",
      features: [
        "AI-powered auto-editing",
        "Multiple video formats support",
        "Text-to-video generation",
        "Voice-over synthesis",
        "Background removal & replacement",
        "Music & sound effects library",
        "Social media optimization",
        "Team collaboration features"
      ],
      icon: Video,
      price: "$59/month",
      category: "Content Creation",
      popular: false,
      freeTrial: "7 days free",
      users: "6,800+",
      rating: 4.6
    },
    {
      title: "Smart Document Processor",
      description: "AI-powered document processing, analysis, and automation for business documents and forms.",
      features: [
        "OCR & text extraction",
        "Document classification",
        "Data extraction & validation",
        "Automated form filling",
        "Document comparison",
        "Compliance checking",
        "Workflow automation",
        "API integration"
      ],
      icon: FileText,
      price: "$39/month",
      category: "Document Management",
      popular: false,
      freeTrial: "14 days free",
      users: "7,200+",
      rating: 4.7
    },
    {
      title: "AI-Powered CRM",
      description: "Intelligent customer relationship management with AI-driven insights, automation, and predictive analytics.",
      features: [
        "AI lead scoring",
        "Predictive analytics",
        "Automated follow-ups",
        "Sales forecasting",
        "Customer segmentation",
        "Email & call tracking",
        "Integration with 100+ tools",
        "Custom dashboard builder"
      ],
      icon: Users,
      price: "$55/month",
      category: "CRM",
      popular: true,
      freeTrial: "30 days free",
      users: "11,500+",
      rating: 4.8
    },
    {
      title: "Smart Inventory Manager",
      description: "AI-powered inventory management with demand forecasting, automated reordering, and optimization.",
      features: [
        "Demand forecasting",
        "Automated reorder points",
        "Multi-location tracking",
        "Supplier management",
        "Cost optimization",
        "Barcode scanning",
        "Integration with POS systems",
        "Analytics & reporting"
      ],
      icon: Package,
      price: "$42/month",
      category: "Inventory Management",
      popular: false,
      freeTrial: "21 days free",
      users: "4,500+",
      rating: 4.7
    }
  ];

  const categories = [
    "All Services",
    "AI Tools",
    "Analytics",
    "Customer Service",
    "Development Tools",
    "Marketing",
    "Finance",
    "Productivity",
    "Content Creation",
    "Document Management",
    "CRM",
    "Inventory Management"
  ];

  const stats = [
    { label: "Active Micro SAAS Products", value: "25+" },
    { label: "Total Users", value: "150,000+" },
    { label: "Average Rating", value: "4.8/5" },
    { label: "Uptime Guarantee", value: "99.9%" },
    { label: "Free Trials Available", value: "100%" },
    { label: "Integration Partners", value: "500+" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-blue-100">
              Powerful, Affordable Software Solutions for Modern Businesses
            </p>
            <p className="text-lg md:text-xl mb-12 text-blue-200 max-w-4xl mx-auto">
              Discover our collection of innovative micro SAAS products designed to solve specific business challenges. 
              Start small, scale fast, and grow your business with our cutting-edge tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${service.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{service.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <span>{service.users} users</span>
                  <span className="text-green-600 font-medium">{service.freeTrial}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-blue-600 font-medium">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>
                  <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Try Free <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our micro SAAS solutions to streamline operations, 
            increase productivity, and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasServices;
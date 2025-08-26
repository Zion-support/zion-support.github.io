import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FuturisticBackground } from '../components/FuturisticBackground';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Code,
  Database,
  Network,
  Smartphone,
  Globe,
  Zap,
  Cpu,
  Lock,
  BarChart3,
  Users,
  Rocket,
  Target,
  Award,
  Atom,
  Satellite,
  Microscope,
  Dna,
  Leaf,
  Car,
  Building2,
  Factory,
  ShoppingCart,
  GraduationCap,
  Heart,
  Palette,
  Music,
  Camera,
  Video,
  Gamepad2,
  BookOpen,
  Newspaper,
  Radio,
  Tv,
  Watch,
  Headphones,
  Speaker,
  Printer,
  Scanner,
  Router,
  Server,
  HardDrive,
  MemoryStick,
  Keyboard,
  Mouse,
  Monitor,
  Laptop,
  Tablet,
  Wifi,
  Bluetooth,
  Lightbulb,
  Cog,
  Settings,
  Tool,
  Wrench,
  Hammer,
  Screwdriver,
  Drill,
  Saw,
  Paintbrush,
  Ruler,
  Calculator,
  Chart,
  Graph,
  PieChart,
  BarChart,
  LineChart,
  TrendingUp,
  TrendingDown,
  DollarSign,
  CreditCard,
  Wallet,
  PiggyBank,
  Coins,
  Banknote,
  Receipt,
  Invoice,
  Contract,
  Document,
  FileText,
  File,
  Folder,
  Archive,
  Download,
  Upload,
  Share,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Clock,
  Calendar,
  Timer,
  Stopwatch,
  Hourglass,
  Bell,
  AlertTriangle,
  Info,
  HelpCircle,
  CheckCircle,
  XCircle,
  MinusCircle,
  PlusCircle,
  Edit,
  Trash2,
  Copy,
  Save,
  Search,
  Filter,
  Sort,
  Grid,
  List,
  Columns,
  Rows,
  Layout,
  Sidebar,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Move,
  RotateCw,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  RefreshCw,
  Power,
  PowerOff,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Mute,
  Unmute,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Camera,
  CameraOff,
  Image,
  ImageOff,
  FileImage,
  FileVideo,
  FileAudio,
  FileCode,
  FileArchive,
  FilePdf,
  FileWord,
  FileExcel,
  FilePowerpoint,
  FileText,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  FolderX,
  FolderCheck,
  FolderSearch,
  FolderLock,
  FolderUnlock,
  FolderHeart,
  FolderStar,
  FolderGit,
  FolderGit2,
  FolderRoot,
  FolderUp,
  FolderDown,
  FolderLeft,
  FolderRight,
  FolderTree,
  FolderSymlink,
  FolderSymlink2,
  FolderClosed,
  FolderOpen2,
  FolderPlus2,
  FolderMinus2,
  FolderX2,
  FolderCheck2,
  FolderSearch2,
  FolderLock2,
  FolderUnlock2,
  FolderHeart2,
  FolderStar2,
  FolderGit2,
  FolderGit22,
  FolderRoot2,
  FolderUp2,
  FolderDown2,
  FolderLeft2,
  FolderRight2,
  FolderTree2,
  FolderSymlink2,
  FolderSymlink22,
  FolderClosed2
} from 'lucide-react';

export default function MicroSaasShowcase() {
  const microSaasServices = [
    {
      category: "AI-Powered Business Automation",
      services: [
        {
          title: "AI Autonomous Business Platform",
          description: "Complete AI-powered business automation with 24/7 operations and intelligent decision making",
          icon: Brain,
          features: [
            "Process Automation & Optimization",
            "Decision Intelligence & Analytics",
            "Predictive Business Insights",
            "24/7 Autonomous Operations",
            "Real-time Performance Monitoring",
            "Intelligent Resource Allocation",
            "Automated Customer Service",
            "Smart Workflow Management"
          ],
          pricing: "$2,500/month",
          marketPrice: "$5,000-15,000/month",
          savings: "50-83% savings",
          benefits: [
            "Reduce operational costs by 40-60%",
            "Increase efficiency by 300%",
            "24/7 business operations",
            "Real-time decision making",
            "Scalable automation",
            "ROI within 3-6 months"
          ],
          link: "/services/ai-autonomous-business",
          color: "from-purple-500 to-pink-500",
          marketSize: "$15.7B",
          growthRate: "23.4% CAGR"
        },
        {
          title: "AI Content Generation Suite",
          description: "Advanced AI content creation for marketing, blogs, and social media with SEO optimization",
          icon: FileText,
          features: [
            "Article & Blog Writing",
            "Social Media Content",
            "Video Script Generation",
            "Marketing Copy",
            "Multilingual Content",
            "SEO-Optimized Writing",
            "Brand Voice Consistency",
            "Content Calendar Management"
          ],
          pricing: "$800/month",
          marketPrice: "$1,500-4,000/month",
          savings: "47-80% savings",
          benefits: [
            "10x faster content creation",
            "Consistent brand voice",
            "SEO optimization",
            "Multilingual support",
            "Cost-effective content",
            "Scalable content strategy"
          ],
          link: "/services/ai-content-generation",
          color: "from-blue-500 to-indigo-500",
          marketSize: "$8.2B",
          growthRate: "18.7% CAGR"
        },
        {
          title: "AI Video Production Platform",
          description: "AI-powered video creation and editing automation with professional quality output",
          icon: Video,
          features: [
            "Automated Video Editing",
            "Content Generation",
            "Voice Synthesis",
            "Visual Effects",
            "Multi-format Export",
            "Cloud Rendering",
            "Template Library",
            "Brand Asset Integration"
          ],
          pricing: "$1,500/month",
          marketPrice: "$3,000-8,000/month",
          savings: "50-81% savings",
          benefits: [
            "90% faster video production",
            "Professional quality output",
            "Cost-effective production",
            "Scalable content creation",
            "Automated workflows",
            "Reduced production costs"
          ],
          link: "/services/ai-video-production",
          color: "from-red-500 to-pink-500",
          marketSize: "$12.4B",
          growthRate: "21.3% CAGR"
        }
      ]
    },
    {
      category: "Cybersecurity & Compliance",
      services: [
        {
          title: "AI Autonomous Security Suite",
          description: "Next-generation AI-powered cybersecurity with autonomous threat response and compliance automation",
          icon: Shield,
          features: [
            "Autonomous Threat Detection",
            "Intelligent Incident Response",
            "Behavioral Analysis",
            "Zero-Day Attack Prevention",
            "Compliance Automation",
            "Security Training AI",
            "Real-time Monitoring",
            "Automated Remediation"
          ],
          pricing: "$2,200/month",
          marketPrice: "$4,000-12,000/month",
          savings: "45-82% savings",
          benefits: [
            "99.9% threat detection rate",
            "Real-time response in milliseconds",
            "Reduced security incidents by 80%",
            "Automated compliance reporting",
            "24/7 security monitoring",
            "Lower security costs"
          ],
          link: "/services/ai-autonomous-security",
          color: "from-red-500 to-orange-500",
          marketSize: "$22.1B",
          growthRate: "25.8% CAGR"
        },
        {
          title: "Zero Trust Security Platform",
          description: "Comprehensive zero trust architecture with AI-powered access control and monitoring",
          icon: Lock,
          features: [
            "Identity Verification",
            "Access Control",
            "Network Segmentation",
            "Device Management",
            "Threat Intelligence",
            "Compliance Reporting",
            "Real-time Analytics",
            "Automated Response"
          ],
          pricing: "$1,800/month",
          marketPrice: "$3,500-10,000/month",
          savings: "49-82% savings",
          benefits: [
            "Enhanced security posture",
            "Reduced attack surface",
            "Compliance automation",
            "Lower security overhead",
            "Real-time monitoring",
            "Scalable security"
          ],
          link: "/services/zero-trust-security",
          color: "from-orange-500 to-red-500",
          marketSize: "$19.8B",
          growthRate: "24.2% CAGR"
        }
      ]
    },
    {
      category: "Cloud & Infrastructure",
      services: [
        {
          title: "AI-Powered DevOps Platform",
          description: "Intelligent DevOps automation with AI-driven deployment and monitoring",
          icon: Cloud,
          features: [
            "Automated CI/CD Pipelines",
            "Intelligent Testing",
            "Performance Monitoring",
            "Auto-scaling",
            "Cost Optimization",
            "Security Scanning",
            "Deployment Automation",
            "Real-time Analytics"
          ],
          pricing: "$1,200/month",
          marketPrice: "$2,500-7,000/month",
          savings: "52-83% savings",
          benefits: [
            "10x faster deployments",
            "Reduced downtime by 90%",
            "Lower infrastructure costs",
            "Automated operations",
            "Enhanced security",
            "Scalable infrastructure"
          ],
          link: "/services/ai-devops",
          color: "from-blue-500 to-cyan-500",
          marketSize: "$18.9B",
          growthRate: "22.1% CAGR"
        },
        {
          title: "Multi-Cloud Management Platform",
          description: "Unified management across AWS, Azure, Google Cloud with AI optimization",
          icon: Server,
          features: [
            "Unified Dashboard",
            "Cost Optimization",
            "Security Management",
            "Performance Monitoring",
            "Automated Migration",
            "Compliance Management",
            "Resource Optimization",
            "Multi-cloud Analytics"
          ],
          pricing: "$1,600/month",
          marketPrice: "$3,000-8,000/month",
          savings: "47-80% savings",
          benefits: [
            "Reduced cloud costs by 30%",
            "Unified management",
            "Enhanced security",
            "Better performance",
            "Automated optimization",
            "Simplified operations"
          ],
          link: "/services/multi-cloud-management",
          color: "from-cyan-500 to-blue-500",
          marketSize: "$16.7B",
          growthRate: "20.8% CAGR"
        }
      ]
    },
    {
      category: "Industry-Specific AI Solutions",
      services: [
        {
          title: "Healthcare AI Diagnostics",
          description: "AI-powered medical diagnostics and patient care optimization platform",
          icon: Heart,
          features: [
            "Medical Image Analysis",
            "Diagnostic Assistance",
            "Patient Care Optimization",
            "Drug Discovery Support",
            "Healthcare Analytics",
            "Telemedicine Integration",
            "Predictive Medicine",
            "Clinical Decision Support"
          ],
          pricing: "$3,200/month",
          marketPrice: "$6,000-20,000/month",
          savings: "47-84% savings",
          benefits: [
            "Improve diagnostic accuracy by 30%",
            "Reduce patient wait times by 50%",
            "Lower healthcare costs by 25%",
            "Enhanced patient outcomes",
            "24/7 medical support",
            "Better resource utilization"
          ],
          link: "/services/healthcare-ai",
          color: "from-pink-500 to-rose-500",
          marketSize: "$28.3B",
          growthRate: "26.7% CAGR"
        },
        {
          title: "Manufacturing AI Optimization",
          description: "AI-powered manufacturing optimization with predictive maintenance and quality control",
          icon: Factory,
          features: [
            "Predictive Maintenance",
            "Quality Control Automation",
            "Supply Chain Optimization",
            "Production Planning",
            "Energy Efficiency",
            "Safety Monitoring",
            "Inventory Management",
            "Performance Analytics"
          ],
          pricing: "$2,800/month",
          marketPrice: "$5,000-15,000/month",
          savings: "44-81% savings",
          benefits: [
            "Reduce downtime by 60%",
            "Increase production by 25%",
            "Lower energy costs by 30%",
            "Improve quality by 40%",
            "Enhanced safety compliance",
            "Optimized operations"
          ],
          link: "/services/manufacturing-ai",
          color: "from-orange-500 to-red-500",
          marketSize: "$24.6B",
          growthRate: "23.9% CAGR"
        },
        {
          title: "Financial AI Trading Platform",
          description: "AI-powered financial analysis and automated trading systems",
          icon: DollarSign,
          features: [
            "Automated Trading Systems",
            "Risk Assessment",
            "Fraud Detection",
            "Portfolio Optimization",
            "Market Analysis",
            "Compliance Automation",
            "Real-time Monitoring",
            "Predictive Analytics"
          ],
          pricing: "$4,000/month",
          marketPrice: "$8,000-25,000/month",
          savings: "50-84% savings",
          benefits: [
            "Increase trading profits by 40%",
            "Reduce risk by 60%",
            "24/7 market monitoring",
            "Automated compliance",
            "Real-time decision making",
            "Enhanced portfolio performance"
          ],
          link: "/services/financial-ai",
          color: "from-yellow-500 to-orange-500",
          marketSize: "$31.2B",
          growthRate: "27.4% CAGR"
        }
      ]
    },
    {
      category: "Emerging Technologies",
      services: [
        {
          title: "Quantum Computing Solutions",
          description: "Next-generation quantum computing services for complex problem solving",
          icon: Atom,
          features: [
            "Quantum Algorithm Development",
            "Optimization Problem Solving",
            "Cryptography & Security",
            "Research & Development",
            "Quantum Machine Learning",
            "Quantum Simulation",
            "Quantum Error Correction",
            "Quantum Networking"
          ],
          pricing: "$5,000/month",
          marketPrice: "$10,000-50,000/month",
          savings: "50-90% savings",
          benefits: [
            "Exponential computational power",
            "Solve previously impossible problems",
            "Future-proof technology investment",
            "Competitive advantage",
            "Research collaboration opportunities",
            "Breakthrough innovations"
          ],
          link: "/services/quantum-computing",
          color: "from-indigo-500 to-purple-600",
          marketSize: "$8.9B",
          growthRate: "32.1% CAGR"
        },
        {
          title: "5G Network Optimization",
          description: "Advanced 5G network optimization and management solutions",
          icon: Wifi,
          features: [
            "Network Performance Optimization",
            "Bandwidth Management",
            "Latency Reduction",
            "Coverage Enhancement",
            "Security Implementation",
            "IoT Integration Support",
            "Network Slicing",
            "Edge Computing"
          ],
          pricing: "$1,500/month",
          marketPrice: "$3,000-8,000/month",
          savings: "50-81% savings",
          benefits: [
            "50% faster network speeds",
            "Reduced latency by 80%",
            "Enhanced user experience",
            "Future-ready infrastructure",
            "Cost-effective optimization",
            "IoT ready networks"
          ],
          link: "/services/5g-optimization",
          color: "from-green-500 to-emerald-500",
          marketSize: "$14.2B",
          growthRate: "19.6% CAGR"
        }
      ]
    }
  ];

  const stats = [
    { value: "150+", label: "Micro SAAS Services", description: "Innovative solutions" },
    { value: "60+", label: "Industries", description: "Served worldwide" },
    { value: "99.9%", label: "Uptime", description: "Reliable service" },
    { value: "24/7", label: "Support", description: "Round-the-clock assistance" }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  const marketInsights = [
    {
      title: "AI Market Growth",
      value: "$1.8T",
      description: "Global AI market by 2030",
      trend: "up",
      color: "text-green-400"
    },
    {
      title: "Micro SAAS Growth",
      value: "23.4%",
      description: "Annual growth rate",
      trend: "up",
      color: "text-blue-400"
    },
    {
      title: "Cost Savings",
      value: "60-80%",
      description: "Average cost reduction",
      trend: "up",
      color: "text-cyan-400"
    },
    {
      title: "ROI Timeline",
      value: "3-6 months",
      description: "Average payback period",
      trend: "up",
      color: "text-purple-400"
    }
  ];

  return (
    <FuturisticBackground>
      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Micro SAAS Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary micro SAAS solutions with enterprise-grade quality at startup-friendly prices
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of AI-powered, quantum-ready, and emerging technology solutions. 
              Competitive pricing with 50-90% savings compared to market rates.
            </p>
            
            {/* Market Insights */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {marketInsights.map((insight, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 p-4 rounded-xl border border-slate-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`text-2xl font-bold ${insight.color} mb-2`}>
                    {insight.value}
                  </div>
                  <div className="text-sm text-white font-semibold mb-1">
                    {insight.title}
                  </div>
                  <div className="text-xs text-gray-400">
                    {insight.description}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Contact CTA */}
            <div className="mt-8 p-6 bg-slate-800/50 rounded-xl border border-slate-700 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300">
                    {contactInfo.website.replace('https://', '')}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services by Category */}
      {microSaasServices.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-black/30' : ''}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {category.category}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge solutions that redefine industry standards with competitive pricing
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70 hover:transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Service Header */}
                  <div className={`inline-flex p-4 rounded-full mb-6 bg-gradient-to-r ${service.color}`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  {/* Market Info */}
                  <div className="mb-6 p-4 bg-slate-700/30 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Market Size</p>
                        <p className="text-cyan-400 font-semibold">{service.marketSize}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Growth Rate</p>
                        <p className="text-green-400 font-semibold">{service.growthRate}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pricing */}
                  <div className="mb-6 p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-sm text-gray-400">Our Price</p>
                        <p className="text-2xl font-bold text-cyan-400">{service.pricing}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">Market Price</p>
                        <p className="text-lg text-gray-300 line-through">{service.marketPrice}</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="text-sm text-green-400 font-semibold bg-green-400/10 px-3 py-1 rounded-full">
                        {service.savings}
                      </span>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Business Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA */}
                  <div className="flex flex-col space-y-3">
                    <Link 
                      to={service.link}
                      className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Get Started
                    </Link>
                    <Link 
                      to="/contact"
                      className="w-full px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-semibold text-center hover:bg-cyan-500 hover:text-white transition-all duration-300"
                    >
                      Request Demo
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies already leveraging our cutting-edge micro SAAS solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <a 
              href={`tel:${contactInfo.phone}`}
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Call {contactInfo.phone}
            </a>
          </div>
          
          {/* Additional Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-2">Visit us at: <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300">{contactInfo.website}</a></p>
            <p className="text-gray-400">{contactInfo.address}</p>
          </div>
        </div>
      </section>
    </FuturisticBackground>
  );
}
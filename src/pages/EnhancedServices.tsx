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

export default function EnhancedServices() {
  const innovativeServices = [
    {
      category: "AI & Autonomous Systems",
      services: [
        {
          title: "AI Autonomous Business Platform",
          description: "Complete AI-powered business automation platform with 24/7 operations",
          icon: Brain,
          features: [
            "Process Automation & Optimization",
            "Decision Intelligence & Analytics",
            "Predictive Business Insights",
            "24/7 Autonomous Operations",
            "Real-time Performance Monitoring",
            "Intelligent Resource Allocation"
          ],
          pricing: "$2,500/month",
          marketPrice: "$5,000-15,000/month",
          benefits: [
            "Reduce operational costs by 40-60%",
            "Increase efficiency by 300%",
            "24/7 business operations",
            "Real-time decision making",
            "Scalable automation"
          ],
          link: "/services/ai-autonomous-business",
          color: "from-purple-500 to-pink-500"
        },
        {
          title: "AI Autonomous Development",
          description: "AI-powered software development with autonomous coding and testing",
          icon: Code,
          features: [
            "Autonomous Code Generation",
            "Intelligent Testing & QA",
            "Bug Detection & Fixing",
            "Performance Optimization",
            "Security Vulnerability Scanning",
            "Continuous Integration/Deployment"
          ],
          pricing: "$1,800/month",
          marketPrice: "$3,000-8,000/month",
          benefits: [
            "10x faster development cycles",
            "90% reduction in bugs",
            "Automated quality assurance",
            "Continuous improvement",
            "Cost-effective development"
          ],
          link: "/services/ai-autonomous-development",
          color: "from-blue-500 to-cyan-500"
        },
        {
          title: "AI Autonomous Security",
          description: "Next-generation AI-powered cybersecurity with autonomous threat response",
          icon: Shield,
          features: [
            "Autonomous Threat Detection",
            "Intelligent Incident Response",
            "Behavioral Analysis",
            "Zero-Day Attack Prevention",
            "Compliance Automation",
            "Security Training AI"
          ],
          pricing: "$2,200/month",
          marketPrice: "$4,000-12,000/month",
          benefits: [
            "99.9% threat detection rate",
            "Real-time response in milliseconds",
            "Reduced security incidents by 80%",
            "Automated compliance reporting",
            "24/7 security monitoring"
          ],
          link: "/services/ai-autonomous-security",
          color: "from-red-500 to-orange-500"
        }
      ]
    },
    {
      category: "Quantum & Emerging Tech",
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
            "Quantum Simulation"
          ],
          pricing: "$5,000/month",
          marketPrice: "$10,000-50,000/month",
          benefits: [
            "Exponential computational power",
            "Solve previously impossible problems",
            "Future-proof technology investment",
            "Competitive advantage",
            "Research collaboration opportunities"
          ],
          link: "/services/quantum-computing",
          color: "from-indigo-500 to-purple-600"
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
            "IoT Integration Support"
          ],
          pricing: "$1,500/month",
          marketPrice: "$3,000-8,000/month",
          benefits: [
            "50% faster network speeds",
            "Reduced latency by 80%",
            "Enhanced user experience",
            "Future-ready infrastructure",
            "Cost-effective optimization"
          ],
          link: "/services/5g-optimization",
          color: "from-green-500 to-emerald-500"
        }
      ]
    },
    {
      category: "Industry-Specific Solutions",
      services: [
        {
          title: "Manufacturing AI Solutions",
          description: "AI-powered manufacturing optimization and predictive maintenance",
          icon: Factory,
          features: [
            "Predictive Maintenance",
            "Quality Control Automation",
            "Supply Chain Optimization",
            "Production Planning",
            "Energy Efficiency",
            "Safety Monitoring"
          ],
          pricing: "$2,800/month",
          marketPrice: "$5,000-15,000/month",
          benefits: [
            "Reduce downtime by 60%",
            "Increase production by 25%",
            "Lower energy costs by 30%",
            "Improve quality by 40%",
            "Enhanced safety compliance"
          ],
          link: "/services/manufacturing-ai",
          color: "from-orange-500 to-red-500"
        },
        {
          title: "Healthcare AI Solutions",
          description: "AI-powered healthcare diagnostics and patient care optimization",
          icon: Heart,
          features: [
            "Medical Image Analysis",
            "Diagnostic Assistance",
            "Patient Care Optimization",
            "Drug Discovery Support",
            "Healthcare Analytics",
            "Telemedicine Integration"
          ],
          pricing: "$3,200/month",
          marketPrice: "$6,000-20,000/month",
          benefits: [
            "Improve diagnostic accuracy by 30%",
            "Reduce patient wait times by 50%",
            "Lower healthcare costs by 25%",
            "Enhanced patient outcomes",
            "24/7 medical support"
          ],
          link: "/services/healthcare-ai",
          color: "from-pink-500 to-rose-500"
        },
        {
          title: "Financial AI Solutions",
          description: "AI-powered financial analysis and automated trading systems",
          icon: DollarSign,
          features: [
            "Automated Trading Systems",
            "Risk Assessment",
            "Fraud Detection",
            "Portfolio Optimization",
            "Market Analysis",
            "Compliance Automation"
          ],
          pricing: "$4,000/month",
          marketPrice: "$8,000-25,000/month",
          benefits: [
            "Increase trading profits by 40%",
            "Reduce risk by 60%",
            "24/7 market monitoring",
            "Automated compliance",
            "Real-time decision making"
          ],
          link: "/services/financial-ai",
          color: "from-yellow-500 to-orange-500"
        }
      ]
    },
    {
      category: "Digital Transformation",
      services: [
        {
          title: "Digital Marketing AI",
          description: "AI-powered digital marketing automation and optimization",
          icon: Target,
          features: [
            "Content Generation",
            "Campaign Optimization",
            "Customer Segmentation",
            "ROI Analysis",
            "Social Media Management",
            "SEO Optimization"
          ],
          pricing: "$1,200/month",
          marketPrice: "$2,500-7,000/month",
          benefits: [
            "Increase conversion rates by 50%",
            "Reduce marketing costs by 30%",
            "Personalized customer experiences",
            "Automated campaign management",
            "Data-driven insights"
          ],
          link: "/services/digital-marketing-ai",
          color: "from-blue-500 to-indigo-500"
        },
        {
          title: "E-commerce AI Platform",
          description: "Intelligent e-commerce platform with AI-powered recommendations",
          icon: ShoppingCart,
          features: [
            "AI Product Recommendations",
            "Dynamic Pricing",
            "Inventory Management",
            "Customer Behavior Analysis",
            "Automated Customer Service",
            "Fraud Prevention"
          ],
          pricing: "$1,800/month",
          marketPrice: "$3,500-10,000/month",
          benefits: [
            "Increase sales by 35%",
            "Reduce cart abandonment by 40%",
            "Optimize inventory costs",
            "Enhanced customer experience",
            "Automated operations"
          ],
          link: "/services/ecommerce-ai",
          color: "from-green-500 to-teal-500"
        }
      ]
    },
    {
      category: "Creative & Media AI",
      services: [
        {
          title: "AI Content Generation",
          description: "Advanced AI content creation for marketing and media",
          icon: FileText,
          features: [
            "Article & Blog Writing",
            "Social Media Content",
            "Video Script Generation",
            "Marketing Copy",
            "Multilingual Content",
            "SEO-Optimized Writing"
          ],
          pricing: "$800/month",
          marketPrice: "$1,500-4,000/month",
          benefits: [
            "10x faster content creation",
            "Consistent brand voice",
            "SEO optimization",
            "Multilingual support",
            "Cost-effective content"
          ],
          link: "/services/ai-content-generation",
          color: "from-purple-500 to-pink-500"
        },
        {
          title: "AI Video Production",
          description: "AI-powered video creation and editing automation",
          icon: Video,
          features: [
            "Automated Video Editing",
            "Content Generation",
            "Voice Synthesis",
            "Visual Effects",
            "Multi-format Export",
            "Cloud Rendering"
          ],
          pricing: "$1,500/month",
          marketPrice: "$3,000-8,000/month",
          benefits: [
            "90% faster video production",
            "Professional quality output",
            "Cost-effective production",
            "Scalable content creation",
            "Automated workflows"
          ],
          link: "/services/ai-video-production",
          color: "from-red-500 to-pink-500"
        }
      ]
    }
  ];

  const stats = [
    { value: "100+", label: "AI Services", description: "Innovative solutions" },
    { value: "50+", label: "Industries", description: "Served worldwide" },
    { value: "99.9%", label: "Uptime", description: "Reliable service" },
    { value: "24/7", label: "Support", description: "Round-the-clock assistance" }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

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
              Innovative AI Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Cutting-edge micro SAAS solutions powered by artificial intelligence, quantum computing, and emerging technologies
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of AI-powered services, from autonomous business platforms 
              to quantum computing solutions. Competitive pricing with enterprise-grade quality.
            </p>
            
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
      {innovativeServices.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-black/30' : ''}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {category.category}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary solutions that redefine industry standards
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
                  
                  {/* Pricing */}
                  <div className="mb-6 p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Our Price</p>
                        <p className="text-2xl font-bold text-cyan-400">{service.pricing}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">Market Price</p>
                        <p className="text-lg text-gray-300 line-through">{service.marketPrice}</p>
                      </div>
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
            Join hundreds of companies already leveraging our cutting-edge AI solutions
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
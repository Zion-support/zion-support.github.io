import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {

  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  BarChart3, 
  Heart, 
  Eye, 
  Atom, 
  Activity, 
  Code, 
  Database, 
  Server, 
  Network, 
  Lock, 
  Cloud, 
  Target, 
  TrendingUp, 
  Briefcase, 
  Globe, 
  Phone, 
  Mail, 
  MapPin,
  Palette,
  Camera,
  Video,
  Music,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Leaf,
  Sun,
  Wind,
  Zap as Lightning,
  Shield as Security,
  Globe as Web,
  Smartphone,
  Watch,
  Headphones,
  Printer,
  Wifi,
  Bluetooth,
  Satellite,
  Telescope,
  Microscope,
  FlaskConical as Flask,
  Pill,
  Stethoscope,
  Calculator,
  BookOpen,
  GraduationCap,
  DollarSign,
  CreditCard,
  ShoppingCart,
  Truck,
  Warehouse,
  Factory,
  Building2,
  Home,
  Store,
  Bank,
  Insurance,
  Law,
  Gavel,
  FileText,
  Calendar,
  Clock,
  Timer,
  Stopwatch,
  Thermometer,
  Gauge,
  Compass,
  Map,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Download,
  Upload,
  Share,
  Bookmark,
  MessageCircle,
  PhoneCall,
  VideoCall,
  MailOpen,
  Send,
  Plus,
  Minus,
  Bot,
  GitFork,
  Sparkles,
  MessageSquare,
  FileText as Document,
  Search as SearchIcon,
  Mail as EmailIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  TrendingUp as TrendingIcon,
  BarChart3 as ChartIcon,
  Users as UsersIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Rocket as RocketIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon,
  Lock as LockIcon,
  Database as DatabaseIcon,
  Server as ServerIcon,
  Network as NetworkIcon,
  Code as CodeIcon,
  Palette as PaletteIcon,
  Camera as CameraIcon,
  Video as VideoIcon,
  Music as MusicIcon,
  Gamepad2 as GameIcon,
  Car as CarIcon,
  Plane as PlaneIcon,
  Ship as ShipIcon,
  Leaf as LeafIcon,
  Sun as SunIcon,
  Wind as WindIcon,
  Smartphone as PhoneIcon,
  Watch as WatchIcon,
  Headphones as HeadphonesIcon,
  Printer as PrinterIcon,
  Wifi as WifiIcon,
  Bluetooth as BluetoothIcon,
  Satellite as SatelliteIcon,
  Telescope as TelescopeIcon,
  Microscope as MicroscopeIcon,
  Flask as FlaskIcon,
  Pill as PillIcon,
  Stethoscope as StethoscopeIcon,
  Calculator as CalculatorIcon,
  BookOpen as BookIcon,
  GraduationCap as GraduationIcon,
  DollarSign as DollarIcon,
  CreditCard as CreditIcon,
  ShoppingCart as CartIcon,
  Truck as TruckIcon,
  Warehouse as WarehouseIcon,
  Factory as FactoryIcon,
  Building2 as BuildingIcon,
  Home as HomeIcon,
  Store as StoreIcon,
  Bank as BankIcon,
  Insurance as InsuranceIcon,
  Law as LawIcon,
  Gavel as GavelIcon,
  FileText as FileIcon,
  Calendar as CalendarIcon2,
  Clock as ClockIcon2,
  Timer as TimerIcon,
  Stopwatch as StopwatchIcon,
  Thermometer as ThermometerIcon,
  Gauge as GaugeIcon,
  Compass as CompassIcon,
  Map as MapIcon,
  Search as SearchIcon2,
  Filter as FilterIcon,
  SortAsc as SortAscIcon,
  SortDesc as SortDescIcon,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  ExternalLink as ExternalLinkIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Share as ShareIcon,
  Bookmark as BookmarkIcon,
  MessageCircle as MessageIcon,
  PhoneCall as PhoneCallIcon,
  VideoCall as VideoCallIcon,
  MailOpen as MailOpenIcon,
  Send as SendIcon,
  Plus as PlusIcon,
  Minus as MinusIcon
} from 'lucide-react';

const MicroSAASInnovationHub2029: React.FC = () => {

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Solutions', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
    { id: 'ai-automation', name: 'AI Automation', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'business-tools', name: 'Business Tools', icon: Briefcase, color: 'from-green-500 to-emerald-500' },
    { id: 'creative-suite', name: 'Creative Suite', icon: Palette, color: 'from-orange-500 to-red-500' },
    { id: 'data-analytics', name: 'Data Analytics', icon: BarChart3, color: 'from-indigo-500 to-purple-500' },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart, color: 'from-yellow-500 to-orange-500' },
    { id: 'healthcare', name: 'Healthcare', icon: Stethoscope, color: 'from-red-500 to-pink-500' },
    { id: 'education', name: 'Education', icon: GraduationCap, color: 'from-blue-500 to-indigo-500' },
    { id: 'finance', name: 'Finance', icon: DollarSign, color: 'from-green-500 to-blue-500' },
    { id: 'real-estate', name: 'Real Estate', icon: Building2, color: 'from-gray-500 to-blue-500' }
  ];

  const microSAASServices = [
    // AI Automation Solutions
    {

      id: 'ai-email-optimizer',
      category: 'ai-automation',
      title: 'AI Email Marketing Optimizer Pro',
      description: 'AI-powered email marketing platform that automatically optimizes subject lines, content, and send times for maximum engagement and conversions.',
      features: [
        'AI-powered subject line optimization',
        'Smart send time prediction',
        'A/B testing automation',
        'Personalization at scale',
        'Advanced analytics and reporting',
        'CRM integration (Salesforce, HubSpot)',
        'Compliance monitoring (GDPR, CAN-SPAM)',
        'Predictive customer segmentation'
      ],
      pricing: {

        starter: '$99/month',
        professional: '$299/month',
        enterprise: '$799/month'
      },
      marketPrice: '$150-500/month',
      benefits: [
        'Increase open rates by 40-60%',
        'Boost click-through rates by 25-35%',
        'Reduce unsubscribe rates by 30%',
        'Save 15+ hours per week on email optimization'
      ],
      icon: Mail,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      link: 'https://ziontechgroup.com/ai-email-optimizer',
      demo: 'https://ziontechgroup.com/demo/ai-email-optimizer'
    },
    {

      id: 'ai-customer-support',
      category: 'ai-automation',
      title: 'AI Customer Support Suite',
      description: 'Intelligent customer support platform with AI chatbots, ticket routing, sentiment analysis, and automated resolution suggestions.',
      features: [
        'AI-powered chatbot with human-like responses',
        'Smart ticket routing and prioritization',
        'Sentiment analysis and mood detection',
        'Automated resolution suggestions',
        'Multi-language support (50+ languages)',
        'Integration with Zendesk, Intercom, Freshdesk',
        'Real-time analytics and performance metrics',
        'Custom knowledge base management'
      ],
      pricing: {

        starter: '$149/month',
        professional: '$399/month',
        enterprise: '$1,199/month'
      },
      marketPrice: '$200-800/month',
      benefits: [
        'Reduce response time by 80%',
        'Handle 70% of inquiries automatically',
        'Improve customer satisfaction by 25%',
        'Cut support costs by 40%'
      ],
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-500',
      featured: true,
      link: 'https://ziontechgroup.com/ai-customer-support',
      demo: 'https://ziontechgroup.com/demo/ai-customer-support'
    },
    {

      id: 'ai-content-generator',
      category: 'ai-automation',
      title: 'AI Content Generation Studio',
      description: 'Advanced AI content creation platform for blogs, social media, marketing copy, and technical documentation with SEO optimization.',
      features: [
        'Multi-format content generation (blog, social, email)',
        'SEO-optimized content with keyword research',
        'Brand voice consistency and customization',
        'Plagiarism detection and originality scoring',
        'Multi-language content creation',
        'Content calendar and scheduling',
        'Performance analytics and optimization',
        'Team collaboration and approval workflows'
      ],
      pricing: {

        starter: '$79/month',
        professional: '$199/month',
        enterprise: '$499/month'
      },
      marketPrice: '$100-400/month',
      benefits: [
        'Generate 10x more content in the same time',
        'Improve SEO rankings by 30-50%',
        'Maintain consistent brand voice across all channels',
        'Reduce content creation costs by 60%'
      ],
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      featured: true,
      link: 'https://ziontechgroup.com/ai-content-generator',
      demo: 'https://ziontechgroup.com/demo/ai-content-generator'
    },

    // Business Tools
    {

      id: 'invoice-automation',
      category: 'business-tools',
      title: 'Smart Invoice & Expense Manager',
      description: 'Automated invoice processing, expense tracking, and financial reporting with AI-powered categorization and approval workflows.',
      features: [
        'OCR invoice scanning and data extraction',
        'Automated expense categorization',
        'Approval workflow automation',
        'Real-time expense tracking',
        'Integration with QuickBooks, Xero, Sage',
        'Multi-currency support',
        'Compliance monitoring and audit trails',
        'Advanced reporting and analytics'
      ],
      pricing: {

        starter: '$49/month',
        professional: '$129/month',
        enterprise: '$299/month'
      },
      marketPrice: '$75-250/month',
      benefits: [
        'Process invoices 10x faster',
        'Reduce manual data entry errors by 95%',
        'Improve expense visibility and control',
        'Save 20+ hours per month on financial admin'
      ],
      icon: FileText,
      color: 'from-green-500 to-blue-500',
      link: 'https://ziontechgroup.com/invoice-automation',
      demo: 'https://ziontechgroup.com/demo/invoice-automation'
    },
    {

      id: 'project-management-ai',
      category: 'business-tools',
      title: 'AI Project Management Hub',
      description: 'Intelligent project management platform with AI-powered task prioritization, resource allocation, and risk prediction.',
      features: [
        'AI-powered task prioritization',
        'Smart resource allocation and scheduling',
        'Risk prediction and mitigation suggestions',
        'Real-time collaboration tools',
        'Integration with Jira, Asana, Monday.com',
        'Advanced reporting and dashboards',
        'Team performance analytics',
        'Automated progress tracking'
      ],
      pricing: {

        starter: '$89/month',
        professional: '$199/month',
        enterprise: '$499/month'
      },
      marketPrice: '$120-400/month',
      benefits: [
        'Improve project completion rates by 25%',
        'Reduce project delays by 30%',
        'Optimize resource utilization by 20%',
        'Enhance team productivity by 35%'
      ],
      icon: Briefcase,
      color: 'from-indigo-500 to-purple-500',
      link: 'https://ziontechgroup.com/project-management-ai',
      demo: 'https://ziontechgroup.com/demo/project-management-ai'
    },

    // Creative Suite
    {

      id: 'ai-design-assistant',
      category: 'creative-suite',
      title: 'AI Design Assistant Pro',
      description: 'AI-powered design tool that generates logos, graphics, and marketing materials with brand consistency and customization.',
      features: [
        'AI logo generation and customization',
        'Template library with 10,000+ designs',
        'Brand kit management and consistency',
        'Social media asset generation',
        'Print-ready file export',
        'Collaboration and approval workflows',
        'Design analytics and performance tracking',
        'Integration with Canva, Figma, Adobe'
      ],
      pricing: {

        starter: '$69/month',
        professional: '$179/month',
        enterprise: '$399/month'
      },
      marketPrice: '$90-300/month',
      benefits: [
        'Create professional designs in minutes',
        'Maintain consistent brand identity',
        'Reduce design costs by 70%',
        'Speed up marketing campaign creation by 5x'
      ],
      icon: Palette,
      color: 'from-orange-500 to-red-500',
      link: 'https://ziontechgroup.com/ai-design-assistant',
      demo: 'https://ziontechgroup.com/demo/ai-design-assistant'
    },
    {

      id: 'video-production-ai',
      category: 'creative-suite',
      title: 'AI Video Production Studio',
      description: 'Automated video creation platform for marketing, training, and social media content with AI-powered editing and optimization.',
      features: [
        'AI-powered video editing and enhancement',
        'Automated subtitle generation',
        'Voice-over synthesis in multiple languages',
        'Template library with 5,000+ video templates',
        'Social media optimization for different platforms',
        'Analytics and performance tracking',
        'Team collaboration tools',
        'Integration with YouTube, Vimeo, social platforms'
      ],
      pricing: {

        starter: '$99/month',
        professional: '$249/month',
        enterprise: '$599/month'
      },
      marketPrice: '$130-500/month',
      benefits: [
        'Create professional videos in hours, not days',
        'Reduce video production costs by 80%',
        'Increase engagement rates by 40%',
        'Scale video content across multiple platforms'
      ],
      icon: Video,
      color: 'from-red-500 to-pink-500',
      link: 'https://ziontechgroup.com/video-production-ai',
      demo: 'https://ziontechgroup.com/demo/video-production-ai'
    },

    // Data Analytics
    {

      id: 'business-intelligence-ai',
      category: 'data-analytics',
      title: 'AI Business Intelligence Platform',
      description: 'Advanced analytics platform with AI-powered insights, predictive modeling, and automated reporting for data-driven decision making.',
      features: [
        'AI-powered data insights and recommendations',
        'Predictive analytics and forecasting',
        'Automated report generation',
        'Real-time dashboards and alerts',
        'Data visualization and storytelling',
        'Integration with 100+ data sources',
        'Natural language query interface',
        'Advanced security and compliance'
      ],
      pricing: {

        starter: '$199/month',
        professional: '$499/month',
        enterprise: '$1,299/month'
      },
      marketPrice: '$250-1,000/month',
      benefits: [
        'Uncover hidden insights in your data',
        'Make data-driven decisions faster',
        'Reduce manual reporting time by 90%',
        'Improve business performance by 25%'
      ],
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-500',
      link: 'https://ziontechgroup.com/business-intelligence-ai',
      demo: 'https://ziontechgroup.com/demo/business-intelligence-ai'
    },

    // E-commerce
    {

      id: 'ai-ecommerce-optimizer',
      category: 'ecommerce',
      title: 'AI E-commerce Optimization Suite',
      description: 'Comprehensive e-commerce optimization platform with AI-powered pricing, inventory management, and customer personalization.',
      features: [
        'Dynamic pricing optimization',
        'AI-powered inventory forecasting',
        'Customer segmentation and personalization',
        'Conversion rate optimization',
        'Integration with Shopify, WooCommerce, Magento',
        'Advanced analytics and reporting',
        'A/B testing automation',
        'Customer lifetime value optimization'
      ],
      pricing: {

        starter: '$129/month',
        professional: '$299/month',
        enterprise: '$699/month'
      },
      marketPrice: '$150-600/month',
      benefits: [
        'Increase conversion rates by 30-50%',
        'Optimize pricing for maximum profitability',
        'Reduce inventory costs by 20%',
        'Improve customer retention by 40%'
      ],
      icon: ShoppingCart,
      color: 'from-yellow-500 to-orange-500',
      link: 'https://ziontechgroup.com/ai-ecommerce-optimizer',
      demo: 'https://ziontechgroup.com/demo/ai-ecommerce-optimizer'
    },

    // Healthcare
    {

      id: 'healthcare-ai-platform',
      category: 'healthcare',
      title: 'AI Healthcare Management Platform',
      description: 'Comprehensive healthcare management solution with AI-powered patient care, appointment scheduling, and medical record management.',
      features: [
        'AI-powered patient triage and diagnosis support',
        'Smart appointment scheduling and optimization',
        'Electronic health record management',
        'Telemedicine integration',
        'HIPAA compliance and security',
        'Integration with major EHR systems',
        'Analytics and reporting',
        'Mobile app for patients and staff'
      ],
      pricing: {

        starter: '$299/month',
        professional: '$699/month',
        enterprise: '$1,499/month'
      },
      marketPrice: '$400-1,200/month',
      benefits: [
        'Improve patient outcomes by 25%',
        'Reduce administrative overhead by 40%',
        'Enhance patient satisfaction scores',
        'Streamline healthcare operations'
      ],
      icon: Stethoscope,
      color: 'from-red-500 to-pink-500',
      link: 'https://ziontechgroup.com/healthcare-ai-platform',
      demo: 'https://ziontechgroup.com/demo/healthcare-ai-platform'
    },

    // Education
    {

      id: 'ai-education-platform',
      category: 'education',
      title: 'AI-Powered Learning Management System',
      description: 'Intelligent learning platform with personalized learning paths, AI tutoring, and advanced analytics for educational institutions.',
      features: [
        'AI-powered personalized learning paths',
        'Intelligent tutoring and assessment',
        'Adaptive content delivery',
        'Student performance analytics',
        'Integration with major LMS platforms',
        'Multi-language support',
        'Mobile learning optimization',
        'Advanced reporting and insights'
      ],
      pricing: {

        starter: '$89/month',
        professional: '$199/month',
        enterprise: '$499/month'
      },
      marketPrice: '$120-400/month',
      benefits: [
        'Improve student engagement by 35%',
        'Personalize learning for each student',
        'Reduce administrative workload by 30%',
        'Enhance learning outcomes by 25%'
      ],
      icon: GraduationCap,
      color: 'from-blue-500 to-indigo-500',
      link: 'https://ziontechgroup.com/ai-education-platform',
      demo: 'https://ziontechgroup.com/demo/ai-education-platform'
    },

    // Finance
    {

      id: 'ai-financial-advisor',
      category: 'finance',
      title: 'AI Financial Advisory Platform',
      description: 'Intelligent financial planning and investment management platform with AI-powered recommendations and portfolio optimization.',
      features: [
        'AI-powered investment recommendations',
        'Portfolio optimization and rebalancing',
        'Risk assessment and management',
        'Financial planning and goal setting',
        'Integration with major brokerages',
        'Real-time market data and analysis',
        'Tax optimization strategies',
        'Compliance and regulatory reporting'
      ],
      pricing: {

        starter: '$149/month',
        professional: '$349/month',
        enterprise: '$799/month'
      },
      marketPrice: '$200-600/month',
      benefits: [
        'Optimize investment returns by 15-25%',
        'Reduce portfolio risk through AI analysis',
        'Automate financial planning processes',
        'Provide personalized financial advice at scale'
      ],
      icon: DollarSign,
      color: 'from-green-500 to-blue-500',
      link: 'https://ziontechgroup.com/ai-financial-advisor',
      demo: 'https://ziontechgroup.com/demo/ai-financial-advisor'
    },

    // Real Estate
    {

      id: 'ai-real-estate-platform',
      category: 'real-estate',
      title: 'AI Real Estate Management Suite',
      description: 'Comprehensive real estate platform with AI-powered property valuation, market analysis, and client relationship management.',
      features: [
        'AI-powered property valuation',
        'Market trend analysis and predictions',
        'Client relationship management',
        'Property listing optimization',
        'Integration with MLS systems',
        'Advanced analytics and reporting',
        'Mobile app for agents and clients',
        'Lead generation and nurturing'
      ],
      pricing: {

        starter: '$99/month',
        professional: '$249/month',
        enterprise: '$599/month'
      },
      marketPrice: '$130-500/month',
      benefits: [
        'Improve property valuation accuracy by 20%',
        'Increase lead conversion rates by 35%',
        'Streamline property management operations',
        'Enhance client satisfaction and retention'
      ],
      icon: Building2,
      color: 'from-gray-500 to-blue-500',
      link: 'https://ziontechgroup.com/ai-real-estate-platform',
      demo: 'https://ziontechgroup.com/demo/ai-real-estate-platform'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Micro SAAS Innovation Hub 2029
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Discover cutting-edge micro SAAS solutions that transform businesses with AI-powered automation, 
              intelligent analytics, and innovative tools designed for the future of work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 text-lg border border-white/20"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${

                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${

                  service.featured ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {service.featured && (
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 text-sm font-semibold">
                    ⭐ Featured Solution
                  </div>
                )}
                
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Pricing:</h4>
                    <div className="space-y-1">
                      {Object.entries(service.pricing).map(([plan, price]) => (
                        <div key={plan} className="flex justify-between text-sm">
                          <span className="text-gray-600 capitalize">{plan}:</span>
                          <span className="font-semibold text-gray-900">{price}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Market average: {service.marketPrice}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <TrendingUp className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={service.link}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium"
                    >
                      Learn More
                    </a>
                    <a
                      href={service.demo}
                      className="flex-1 bg-gray-100 text-gray-700 text-center py-3 px-4 rounded-lg hover:bg-gray-200 transition-all duration-300 font-medium"
                    >
                      View Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Our team of experts is ready to help you implement the perfect micro SAAS solution 
              for your business needs. Get in touch today to start your transformation journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 text-lg border border-white/20"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASInnovationHub2029;
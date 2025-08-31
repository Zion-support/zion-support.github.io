import React, { useState } from 'react.ts';
import { motion              } from 'framer-motion.ts';
  Package,
  Truck,
  Warehouse,
  Route,
  BarChart,
  AlertTriangle,
  RefreshCw,
  BookOpen,
  Cpu,
  Lock,
  Cloud,
  Server,
  Code,
  Smartphone,
  Wifi,
  Chip,
  Database as DatabaseIcon,
  ShieldCheck,
  Bot,
  Workflow,
  Eye as EyeIcon,
  Sparkles as SparklesIcon,
  Zap as ZapIcon
const InnovativeServicesShowcase2028 = () => {
  const featuredServices = [
    {
      id: 'ai-autonomous-research-assistant',
      title: 'AI Autonomous Research Assistant',
      description: 'Transform your research process with AI that autonomously discovers, analyzes, and synthesizes information from thousands of sources in real-time.',
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      category: 'AI & Research',
      pricing: 'From $99/month',
      features: [
        'AI-Powered Research',
        'Multi-Source Analysis',
        'Academic Integration',
        'Trend Analysis',
        'Real-time Updates',
        'Data Security'
      ],
      benefits: [
        'Accelerate research by 10x',
        '90%+ accuracy in findings',
        'Real-time market intelligence',
        'Compliance with research ethics'
      ],
      useCases: ['Academic Research', 'Market Intelligence', 'Product Development', 'Policy Research'],
      color: 'blue'
    },
    {
      id: 'ai-supply-chain-optimization',
      title: 'AI Supply Chain Optimization',
      description: 'Transform your supply chain with AI that predicts, optimizes, and automates every aspect of your operations for maximum efficiency and cost savings.',
      icon: <Network className="w-12 h-12 text-green-500" />,
      category: 'AI & Operations',
      pricing: 'From $199/month',
      features: [
        'End-to-End Visibility',
        'Predictive Analytics',
        'Inventory Optimization',
        'Route Optimization',
        'Warehouse Management',
        'Global Supply Chain'
      ],
      benefits: [
        '15-25% cost reduction',
        '30-40% lead time improvement',
        '20-35% efficiency gain',
        '50-70% risk mitigation'
      ],
      useCases: ['Retail & E-commerce', 'Manufacturing', 'Logistics & Transportation', 'Healthcare & Pharmaceuticals'],
      color: 'green'
    },
    {
      id: 'ai-content-marketing-suite',
      title: 'AI Content Marketing Suite',
      description: 'Transform your content marketing with AI that creates, optimizes, and distributes engaging content across all channels. Boost engagement, drive conversions, and scale your content strategy effortlessly.',
      icon: <PenTool className="w-12 h-12 text-purple-500" />,
      category: 'AI & Marketing',
      pricing: 'From $79/month',
      features: [
        'AI Content Creation',
        'Audience Intelligence',
        'Performance Optimization',
        'Multi-Channel Distribution',
        'Advanced Analytics',
        'Automated Workflows'
      ],
      benefits: [
        '300%+ content ROI',
        '70% time savings',
        '150% engagement boost',
        '45% conversion rate improvement'
      ],
      useCases: ['Blog Posts & Articles', 'Social Media Content', 'Email Marketing', 'Video & Multimedia'],
      color: 'purple'
    },
    {
      id: 'ai-quantum-hybrid-platform',
      title: 'AI Quantum Hybrid Platform',
      description: 'Experience the future of computing with our revolutionary AI Quantum Hybrid Platform. Combining quantum computing power with advanced AI algorithms for unprecedented computational capabilities.',
      icon: <Cpu className="w-12 h-12 text-indigo-500" />,
      category: 'Quantum Technology',
      pricing: 'From $1,999/month',
      features: [
        'Quantum AI Processing',
        'Hybrid Architecture',
        'Real-time Optimization',
        'Precision Computing',
        'Quantum Memory',
        'Quantum Networking'
      ],
      benefits: [
        '1000x faster computation',
        '99.99% accuracy',
        '24/7 continuous operation',
        'Global quantum access'
      ],
      useCases: ['Financial Modeling', 'Drug Discovery', 'Climate Modeling', 'Logistics Optimization'],
      color: 'indigo'
    },
    {
      id: 'ai-cybersecurity-platform',
      title: 'AI Cybersecurity Platform',
      description: 'Protect your digital assets with the most advanced AI-powered cybersecurity platform. Our intelligent security system detects, prevents, and responds to threats in real-time.',
      icon: <Shield className="w-12 h-12 text-red-500" />,
      category: 'Cybersecurity',
      pricing: 'From $299/month',
      features: [
        'AI Threat Detection',
        'Zero Trust Security',
        'Continuous Monitoring',
        'Advanced Encryption',
        'Network Security',
        'Threat Intelligence'
      ],
      benefits: [
        '99.99% threat detection',
        '24/7 protection',
        '<1s response time',
        'Global threat coverage'
      ],
      useCases: ['Enterprise Security', 'Remote Work Security', 'Cloud Security', 'Compliance Requirements'],
      color: 'red'
    },
    {
      id: 'ai-autonomous-code-reviewer',
      title: 'AI Autonomous Code Reviewer',
      description: 'Revolutionize your development process with AI that automatically reviews code, identifies issues, and suggests improvements for better quality and faster delivery.',
      icon: <Code className="w-12 h-12 text-cyan-500" />,
      category: 'AI & Development',
      pricing: 'From $149/month',
      features: [
        'Automated Code Review',
        'Security Vulnerability Detection',
        'Performance Optimization',
        'Code Quality Analysis',
        'Best Practices Enforcement',
        'Integration with CI/CD'
      ],
      benefits: [
        '90% faster code reviews',
        '60% fewer bugs in production',
        'Improved code quality',
        'Reduced development time'
      ],
      useCases: ['Software Development', 'DevOps Teams', 'Code Quality Assurance', 'Security Auditing'],
      color: 'cyan'

  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      description: 'Cutting-edge AI solutions that transform business operations',
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      count: 8
    },
    {
      name: 'Cybersecurity',
      description: 'Advanced security solutions for modern threats',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      count: 6
    },
    {
      name: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions and infrastructure management',
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      count: 5
    },
    {
      name: 'Data & Analytics',
      description: 'Powerful data insights and business intelligence',
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      count: 7
    },
    {
      name: 'Digital Transformation',
      description: 'End-to-end digital transformation solutions',
      icon: <Rocket className="w-8 h-8 text-orange-500" />,
      count: 4
    },
    {
      name: 'Emerging Technologies',
      description: 'Next-generation technology solutions',
      icon: <Sparkles className="w-8 h-8 text-cyan-500" />,
      count: 6

  ];

  const getColorClasses = (color: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    const colorMap: { [key: string]: string } = {
      blue: 'from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600',
      green: 'from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600',
      purple: 'from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
      cyan: 'from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600',
      red: 'from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600',
      indigo: 'from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600'
    };
    return colorMap[color] || 'from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700';
=======
import { Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  Leaf, 
  Rocket,
  Car,
  Satellite,
  Dna,
  Wind,
  Cloud,
  Network,
  DollarSign,
  Clock,
  Users,
  Target,
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  CheckCircle,
  ArrowRight,
  Atom,
  Satellite,
  Leaf,
  Gamepad2,
  Coins,
  Truck,
  Building,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  Clock,
  Phone,
  Mail,
  ExternalLink
             } from 'lucide-react.ts';
import { SEO              } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2028              } from '../data/innovativeMicroSaasServices2028';
import { EMERGING_TECH_INNOVATIVE_SERVICES_2028              } from '../data/emergingTechInnovativeServices2028';

export default function InnovativeServicesShowcase2028(...args: any[]): any {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('All');
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

  // Enhanced service categories with real market prices and features
  const serviceCategories = [
    {
      id: 'ai-services',
      name: 'AI & Machine Learning Services',
      icon: Brain,
      color: 'from-blue-600 to-cyan-600',
      description: 'Cutting-edge artificial intelligence solutions for business transformation',
      services: [
        {
          name: 'AI-Powered Business Intelligence Platform',
          description: 'Advanced analytics with machine learning insights and predictive modeling',
          price: '$2,500/month',
          marketPrice: '$3,000-5,000/month',
          features: ['Real-time Data Processing', 'Predictive Analytics', 'Custom Dashboards', 'API Integration', 'Multi-source Data Connectors'],
          benefits: ['40% faster decision making', '25% cost reduction', 'Real-time insights', 'Scalable architecture'],
          icon: BarChart3,
          category: 'ai-services',
          badge: 'Popular'
        },
        {
          name: 'AI Customer Experience Platform',
          description: 'Intelligent customer engagement with personalized recommendations and sentiment analysis',
          price: '$1,800/month',
          marketPrice: '$2,200-4,000/month',
          features: ['Customer Journey Mapping', 'Sentiment Analysis', 'Omnichannel Support', 'Personalization Engine', 'A/B Testing'],
          benefits: ['35% increase in customer satisfaction', '28% higher conversion rates', '24/7 customer support', 'Reduced support costs'],
          icon: Users,
          category: 'ai-services',
          badge: 'New'
        },
        {
          name: 'AI Cybersecurity Threat Detection',
          description: 'Advanced threat detection using machine learning and behavioral analysis',
          price: '$3,200/month',
          marketPrice: '$4,000-7,000/month',
          features: ['Real-time Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Compliance Reporting', '24/7 Monitoring'],
          benefits: ['99.9% threat detection rate', '60% faster incident response', 'Reduced false positives', 'Compliance automation'],
          icon: Shield,
          category: 'ai-services',
          badge: 'Featured'
        }
      ]
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'from-purple-600 to-pink-600',
      description: 'Scalable software-as-a-service solutions for specific business needs',
      services: [
        {
          name: 'AI-Powered Project Management Suite',
          description: 'Intelligent project planning, resource allocation, and progress tracking',
          price: '$150/month',
          marketPrice: '$200-400/month',
          features: ['AI Resource Optimization', 'Risk Prediction', 'Automated Scheduling', 'Team Collaboration', 'Progress Analytics'],
          benefits: ['30% faster project completion', '20% resource optimization', 'Improved team productivity', 'Real-time insights'],
          icon: Workflow,
          category: 'micro-saas',
          badge: 'Best Value'
        },
        {
          name: 'Smart Inventory Management System',
          description: 'AI-driven inventory optimization with demand forecasting and automated reordering',
          price: '$200/month',
          marketPrice: '$250-500/month',
          features: ['Demand Forecasting', 'Automated Reordering', 'Multi-location Support', 'Supplier Management', 'Cost Analytics'],
          benefits: ['25% inventory cost reduction', '99% stock availability', 'Automated procurement', 'Real-time tracking'],
          icon: Truck,
          category: 'micro-saas',
          badge: 'Popular'
        },
        {
          name: 'AI Content Creation Platform',
          description: 'Automated content generation with SEO optimization and brand consistency',
          price: '$120/month',
          marketPrice: '$150-300/month',
          features: ['Multi-format Content', 'SEO Optimization', 'Brand Consistency', 'Plagiarism Detection', 'Performance Analytics'],
          benefits: ['10x faster content creation', 'Improved SEO rankings', 'Consistent brand voice', 'Cost-effective marketing'],
          icon: Brain, // Changed from PenTool to Brain for consistency with AI services
          category: 'micro-saas',
          badge: 'New'
        }
      ]
    },
    {
      id: 'it-services',
      name: 'IT Infrastructure & Services',
      icon: Server,
      color: 'from-green-600 to-emerald-600',
      description: 'Comprehensive IT solutions for modern business infrastructure',
      services: [
        {
          name: 'Cloud Migration & Optimization',
          description: 'Seamless cloud migration with cost optimization and performance tuning',
          price: '$5,000/project',
          marketPrice: '$8,000-15,000/project',
          features: ['Multi-cloud Strategy', 'Cost Optimization', 'Performance Tuning', 'Security Implementation', '24/7 Support'],
          benefits: ['40% cost reduction', '99.9% uptime', 'Scalable infrastructure', 'Enhanced security'],
          icon: Cloud,
          category: 'it-services',
          badge: 'Featured'
        },
        {
          name: 'DevOps Automation Platform',
          description: 'End-to-end DevOps automation with CI/CD pipelines and infrastructure as code',
          price: '$2,800/month',
          marketPrice: '$3,500-6,000/month',
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Monitoring & Alerting', 'Security Scanning'],
          benefits: ['80% faster deployments', 'Reduced human errors', 'Improved code quality', 'Faster time to market'],
          icon: Code,
          category: 'it-services',
          badge: 'Popular'
        },
        {
          name: 'Cybersecurity Compliance Suite',
          description: 'Comprehensive security compliance for GDPR, HIPAA, SOC2, and industry standards',
          price: '$4,500/month',
          marketPrice: '$6,000-12,000/month',
          features: ['Compliance Automation', 'Risk Assessment', 'Audit Preparation', 'Security Training', 'Incident Response'],
          benefits: ['100% compliance assurance', 'Reduced audit time', 'Risk mitigation', 'Legal protection'],
          icon: Lock,
          category: 'it-services',
          badge: 'Essential'
        }
      ]
    },
    {
      id: 'quantum-tech',
      name: 'Quantum & Emerging Technologies',
      icon: Atom,
      color: 'from-indigo-600 to-purple-600',
      description: 'Next-generation technologies for future-ready businesses',
      services: [
        {
          name: 'Quantum Computing Solutions',
          description: 'Quantum algorithms for optimization, cryptography, and complex problem solving',
          price: '$15,000/month',
          marketPrice: '$20,000-50,000/month',
          features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation', 'Research Support'],
          benefits: ['Exponential speed improvements', 'Unbreakable encryption', 'Complex problem solving', 'Competitive advantage'],
          icon: Atom,
          category: 'quantum-tech',
          badge: 'Future Tech'
        },
        {
          name: 'Blockchain Enterprise Platform',
          description: 'Secure blockchain solutions for supply chain, finance, and digital identity',
          price: '$3,500/month',
          marketPrice: '$5,000-15,000/month',
          features: ['Smart Contracts', 'Supply Chain Tracking', 'Digital Identity', 'Tokenization', 'Interoperability'],
          benefits: ['Enhanced transparency', 'Reduced fraud', 'Automated processes', 'Cost savings'],
          icon: LinkIcon,
          category: 'quantum-tech',
          badge: 'Innovative'
        },
        {
          name: 'IoT Edge Computing Platform',
          description: 'Real-time data processing at the edge for industrial IoT applications',
          price: '$2,200/month',
          marketPrice: '$3,000-8,000/month',
          features: ['Edge Analytics', 'Real-time Processing', 'Device Management', 'Data Streaming', 'Security'],
          benefits: ['Ultra-low latency', 'Reduced bandwidth costs', 'Real-time insights', 'Offline operation'],
          icon: Cpu,
          category: 'quantum-tech',
          badge: 'Industrial'
        }
      ]
    },
    {
      id: 'green-tech',
      name: 'Green Technology Solutions',
      icon: Leaf,
      color: 'from-green-500 to-teal-600',
      description: 'Sustainable technology solutions for environmental responsibility',
      services: [
        {
          name: 'Carbon Footprint Analytics Platform',
          description: 'AI-powered carbon tracking and sustainability reporting for businesses',
          price: '$800/month',
          marketPrice: '$1,000-2,500/month',
          features: ['Carbon Tracking', 'Sustainability Reporting', 'Goal Setting', 'Benchmarking', 'Compliance'],
          benefits: ['Reduced carbon footprint', 'Cost savings', 'Regulatory compliance', 'Brand enhancement'],
          icon: Leaf,
          category: 'green-tech',
          badge: 'Eco-Friendly'
        },
        {
          name: 'Smart Energy Management System',
          description: 'Intelligent energy optimization using IoT sensors and AI analytics',
          price: '$1,500/month',
          marketPrice: '$2,000-4,000/month',
          features: ['Energy Monitoring', 'AI Optimization', 'Predictive Maintenance', 'Cost Analysis', 'Integration'],
          benefits: ['30% energy cost reduction', 'Predictive maintenance', 'Real-time monitoring', 'ROI optimization'],
          icon: Zap,
          category: 'green-tech',
          badge: 'Cost-Effective'
        }
      ]
    },
    {
      id: 'space-tech',
      name: 'Space Technology Solutions',
      icon: Satellite,
      color: 'from-blue-500 to-indigo-600',
      description: 'Satellite and space-based technology for global connectivity and insights',
      services: [
        {
          name: 'Satellite Data Analytics Platform',
          description: 'Earth observation data analysis for agriculture, climate, and urban planning',
          price: '$2,800/month',
          marketPrice: '$4,000-10,000/month',
          features: ['Satellite Imagery', 'AI Analysis', 'Real-time Monitoring', 'Custom Algorithms', 'API Access'],
          benefits: ['Global coverage', 'Real-time insights', 'Cost-effective monitoring', 'Scalable solutions'],
          icon: Satellite,
          category: 'space-tech',
          badge: 'Global'
        }
      ]
    }
  ];

  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];
  const innovationLevels = ['All', ...Array.from(new Set(allServices.map(service => service.innovationLevel)))];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesInnovationLevel = selectedInnovationLevel === 'All' || service.innovationLevel === selectedInnovationLevel;
    
    return matchesSearch && matchesCategory && matchesInnovationLevel;
  });

  const getCategoryIcon = (category: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    switch (category) {
      case 'Quantum Computing & AI':
        return <Brain className="w-6 h-6" />;
      case 'Manufacturing & AI':
        return <Zap className="w-6 h-6" />;
      case 'Healthcare & AI':
        return <Shield className="w-6 h-6" />;
      case 'Financial Services & AI':
        return <DollarSign className="w-6 h-6" />;
      case 'Smart Cities & AI':
        return <Globe className="w-6 h-6" />;
      case 'Agriculture & AI':
        return <Leaf className="w-6 h-6" />;
      case 'Legal Services & AI':
        return <Shield className="w-6 h-6" />;
      case 'Education & AI':
        return <Brain className="w-6 h-6" />;
      case 'Real Estate & AI':
        return <Globe className="w-6 h-6" />;
      case 'Blockchain & Supply Chain':
        return <Network className="w-6 h-6" />;
      case 'Autonomous Vehicles & AI':
        return <Car className="w-6 h-6" />;
      case 'Space Technology & AI':
        return <Satellite className="w-6 h-6" />;
      case 'Biotechnology & AI':
        return <Dna className="w-6 h-6" />;
      case 'Renewable Energy & AI':
        return <Wind className="w-6 h-6" />;
      case 'Climate Technology & AI':
        return <Cloud className="w-6 h-6" />;
      case 'Quantum Internet & AI':
        return <Network className="w-6 h-6" />;
      default:
        return <Rocket className="w-6 h-6" />;
    }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  };

  const getInnovationLevelColor = (level: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    switch (level) {
      case 'Revolutionary':
        return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'Advanced':
        return 'bg-gradient-to-r from-blue-600 to-cyan-600';
      case 'Innovative':
        return 'bg-gradient-to-r from-green-600 to-emerald-600';
      default:
        return 'bg-gradient-to-r from-gray-600 to-slate-600';
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="2028 Innovative Services Showcase - Zion Tech Group"
        description="Explore our cutting-edge AI services, micro SAAS solutions, IT infrastructure, and emerging technologies. Real market prices and proven ROI."
        keywords="AI services, micro SAAS, IT services, quantum computing, blockchain, IoT, green technology, space technology, Zion Tech Group"
        canonicalUrl="https://ziontechgroup.com/innovative-services-showcase-2028"
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              2028 Innovative Services
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Discover our comprehensive portfolio of AI services, micro SAAS solutions, IT infrastructure, 
              and cutting-edge technologies. Real market prices, proven ROI, and expert implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
              >
                {categories.map(category              => (
                  <option key={category} value={category} className="bg-slate-800 text-white">
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Innovation Level Filter */}
            <div className="relative">
              <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedInnovationLevel}
                onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
              >
                {innovationLevels.map(level              => (
                  <option key={level} value={level} className="bg-slate-800 text-white">
                    {level}
                  </option>
                ))}
              </select>
            </div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-4">
              Featured AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our most innovative and powerful AI-powered micro SAAS solutions.
            </p>
          </motion.div>

          <div className="grid lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {featuredServices.map((service, index)              => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 h-full hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${serviceCategories.find(cat => cat.id === service.category)?.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    {service.badge && (
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        service.badge === 'Popular' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        service.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        service.badge === 'Featured' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        service.badge === 'Best Value' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                        'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      }`}>
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6 p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-400 text-sm">Our Price:</span>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">Market Price:</span>
                      <span className="text-slate-300 text-sm line-through">{service.marketPrice}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-green-400 mb-3">Business Benefits:</h4>
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-400">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
=======
      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index)              => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-400">{service.category}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getInnovationLevelColor(service.innovationLevel)}`}>
                  {service.innovationLevel}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-white mb-2">Key Features</h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-gray-500">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-white mb-2">Key Benefits</h4>
                <div className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                      <TrendingUp className="w-3 h-3 text-blue-400" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing and ROI */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-2xl font-bold text-white">
                    ${service.price.toLocaleString()}
                    <span className="text-sm text-gray-400">/month</span>
                  </div>
                  <div className="text-xs text-gray-400">Market: {service.marketPrice}</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-400">{service.roi}</div>
                  <div className="text-xs text-gray-400">ROI</div>
                </div>
              </div>

              {/* Technical Specs */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-white mb-2">Technology Stack</h4>
                <div className="flex flex-wrap gap-1">
                  {service.technicalSpecs?.technology.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact and Action */}
              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    <span>{service.contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    <span>{service.contactInfo.email}</span>
                  </div>
                </div>
                <a
                  href={service.contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get expert consultation, custom pricing, and implementation support. 
              Our team is ready to help you choose the right solutions for your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Call Us</h3>
              <p className="text-slate-300 text-center mb-4">Speak with our experts directly</p>
              <a 
                href={`tel:${contactInfo.phone}`}
                className="text-2xl font-bold text-cyan-400 text-center block hover:text-cyan-300 transition-colors duration-300"
              >
                {contactInfo.phone}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Email Us</h3>
              <p className="text-slate-300 text-center mb-4">Send us your requirements</p>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-lg font-semibold text-cyan-400 text-center block hover:text-cyan-300 transition-colors duration-300 break-all"
              >
                {contactInfo.email}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Visit Us</h3>
              <p className="text-slate-300 text-center mb-4">Our headquarters location</p>
              <p className="text-slate-300 text-center text-sm leading-relaxed">
                {contactInfo.address}
              </p>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Full Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We deliver innovative solutions with proven ROI, expert support, and competitive pricing.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Award,
                title: 'Proven Expertise',
                description: '500+ successful projects across industries with measurable results'
              },
              {
                icon: Zap,
                title: 'Innovation First',
                description: 'Cutting-edge technologies and methodologies for competitive advantage'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Bank-level security and compliance for enterprise-grade solutions'
              },
              {
                icon: Heart,
                title: '24/7 Support',
                description: 'Round-the-clock technical support and maintenance services'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

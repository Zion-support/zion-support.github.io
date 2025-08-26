import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { 
  Server, 
  Zap, 
  Users, 
  Wifi, 
  Heart, 
  Satellite,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  Award,
  Brain,
  Shield,
  Network,
  Cpu,
  Database,
  Cloud,
  Lock,
  Globe,
  BarChart3,
  MessageCircle,
  HelpCircle,
  BookOpen,
  Briefcase,
  Settings,
  Search,
  Globe2,
  Key,
  Fingerprint,
  QrCode,
  Barcode,
  Scan,
  Camera,
  VideoOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  SkipBack2,
  SkipForward2,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBackCircle,
  SkipForwardCircle,
  RewindCircle,
  FastForwardCircle,
  ShuffleCircle,
  RepeatCircle,
  Repeat1Circle,
  Shuffle2Circle,
  SkipBack2Circle,
  SkipForward2Circle,
  PlaySquare,
  PauseSquare,
  StopSquare,
  SkipBackSquare,
  SkipForwardSquare,
  RewindSquare,
  FastForwardSquare,
  ShuffleSquare,
  RepeatSquare,
  Repeat1Square,
  Shuffle2Square,
  SkipBack2Square,
  SkipForward2Square,
  PlayTriangle,
  PauseTriangle,
  StopTriangle,
  SkipBackTriangle,
  SkipForwardTriangle,
  RewindTriangle,
  FastForwardTriangle,
  ShuffleTriangle,
  RepeatTriangle,
  Repeat1Triangle,
  Shuffle2Triangle,
  SkipBack2Triangle,
  SkipForward2Triangle,
  PlayOctagon,
  PauseOctagon,
  StopOctagon,
  SkipBackOctagon,
  SkipForwardOctagon,
  RewindOctagon,
  FastForwardOctagon,
  ShuffleOctagon,
  RepeatOctagon,
  Repeat1Octagon,
  Shuffle2Octagon,
  SkipBack2Octagon,
  SkipForward2Octagon,
  PlayDodecagon,
  PauseDodecagon,
  StopDodecagon,
  SkipBackDodecagon,
  SkipForwardDodecagon,
  RewindDodecagon,
  FastForwardDodecagon,
  ShuffleDodecagon,
  RepeatDodecagon,
  Repeat1Dodecagon,
  Shuffle2Dodecagon,
  SkipBack2Dodecagon,
  SkipForward2Dodecagon
} from 'lucide-react';

const itServices = [
  {
    id: 'infrastructure-management',
    name: 'Infrastructure Management',
    tagline: 'Complete infrastructure solutions and management',
    price: '$5,999',
    period: '/month',
    description: 'Comprehensive infrastructure management services including cloud infrastructure, on-premise systems, hybrid solutions, and 24/7 monitoring and support.',
    features: [
      'Cloud infrastructure setup',
      'On-premise system management',
      'Hybrid cloud solutions',
      '24/7 monitoring',
      'Performance optimization',
      'Disaster recovery',
      'Backup management',
      'Security hardening',
      'Capacity planning',
      'Cost optimization'
    ],
    popular: true,
    icon: Server,
    color: 'from-blue-600 to-cyan-700',
    textColor: 'text-blue-400',
    link: '/it-services/infrastructure',
    marketPosition: 'Leading infrastructure management provider with enterprise-grade solutions and proven track record.',
    targetAudience: 'IT directors, System administrators, DevOps teams, Technology managers, Business owners',
    trialDays: 30,
    setupTime: '2-4 weeks',
    category: 'Infrastructure',
    realService: true,
    technology: ['Cloud computing', 'Virtualization', 'Containerization', 'Monitoring tools', 'Automation'],
    integrations: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Kubernetes', 'Docker'],
    useCases: ['Data center management', 'Cloud migration', 'Infrastructure optimization', 'Disaster recovery', 'Performance tuning'],
    roi: 'Organizations achieve 400% ROI through improved efficiency and reduced operational costs.',
    competitors: ['Managed service providers', 'Cloud providers', 'IT consulting firms'],
    marketSize: '$152.4B IT services market',
    growthRate: '180% annual growth',
    rating: 4.8,
    reviews: 234,
    customers: 456
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation Consulting',
    tagline: 'Strategic digital transformation guidance and implementation',
    price: '$8,999',
    period: '/month',
    description: 'Comprehensive digital transformation consulting services that help organizations modernize their technology, processes, and culture for the digital age.',
    features: [
      'Digital strategy development',
      'Technology assessment',
      'Process optimization',
      'Change management',
      'Digital culture transformation',
      'Technology roadmap',
      'Implementation guidance',
      'ROI measurement',
      'Training and support',
      'Continuous improvement'
    ],
    popular: true,
    icon: Zap,
    color: 'from-yellow-600 to-orange-700',
    textColor: 'text-yellow-400',
    link: '/it-services/digital-transformation',
    marketPosition: 'Leading digital transformation consultancy with proven methodologies and successful implementations.',
    targetAudience: 'C-level executives, Digital transformation leaders, IT directors, Business strategists, Change managers',
    trialDays: 60,
    setupTime: '4-8 weeks',
    category: 'Consulting',
    realService: true,
    technology: ['Digital platforms', 'Cloud solutions', 'AI/ML integration', 'Process automation', 'Data analytics'],
    integrations: ['Enterprise systems', 'Cloud platforms', 'Analytics tools', 'Collaboration platforms', 'Legacy systems'],
    useCases: ['Business modernization', 'Technology adoption', 'Process digitization', 'Cultural change', 'Competitive advantage'],
    roi: 'Companies see 500% ROI through improved efficiency and competitive positioning.',
    competitors: ['Management consultancies', 'Technology consultancies', 'Digital agencies'],
    marketSize: '$23.5B digital transformation market',
    growthRate: '220% annual growth',
    rating: 4.9,
    reviews: 156,
    customers: 234
  },
  {
    id: 'it-consulting',
    name: 'IT Consulting Services',
    tagline: 'Expert IT consulting and strategic guidance',
    price: '$3,999',
    period: '/month',
    description: 'Professional IT consulting services providing strategic guidance, technology assessment, and implementation support for businesses of all sizes.',
    features: [
      'Technology strategy',
      'Architecture design',
      'Technology selection',
      'Implementation planning',
      'Risk assessment',
      'Compliance guidance',
      'Performance optimization',
      'Security consulting',
      'Training programs',
      'Ongoing support'
    ],
    popular: false,
    icon: Users,
    color: 'from-purple-600 to-indigo-700',
    textColor: 'text-purple-400',
    link: '/it-services/consulting',
    marketPosition: 'Trusted IT consulting partner with deep expertise and proven methodologies.',
    targetAudience: 'Business owners, IT managers, Technology directors, Project managers, Decision makers',
    trialDays: 30,
    setupTime: '1-2 weeks',
    category: 'Consulting',
    realService: true,
    technology: ['Enterprise architecture', 'Technology frameworks', 'Best practices', 'Industry standards', 'Emerging technologies'],
    integrations: ['Business systems', 'Technology platforms', 'Industry solutions', 'Compliance frameworks', 'Security standards'],
    useCases: ['Technology strategy', 'System selection', 'Implementation planning', 'Performance optimization', 'Compliance management'],
    roi: 'Businesses achieve 300% ROI through improved technology decisions and implementations.',
    competitors: ['IT consultancies', 'Technology advisors', 'System integrators'],
    marketSize: '$18.7B IT consulting market',
    growthRate: '160% annual growth',
    rating: 4.7,
    reviews: 189,
    customers: 312
  },
  {
    id: 'onsite-support',
    name: '24/7 Onsite Technical Support',
    tagline: 'Round-the-clock onsite technical support and maintenance',
    price: '$2,999',
    period: '/month',
    description: 'Comprehensive onsite technical support services providing immediate response, troubleshooting, maintenance, and technical assistance for your IT infrastructure.',
    features: [
      '24/7 onsite support',
      'Immediate response',
      'Preventive maintenance',
      'Hardware support',
      'Software support',
      'Network troubleshooting',
      'Security monitoring',
      'Performance tuning',
      'Emergency response',
      'Regular maintenance'
    ],
    popular: true,
    icon: Wifi,
    color: 'from-green-600 to-emerald-700',
    textColor: 'text-green-400',
    link: '/it-services/onsite-support',
    marketPosition: 'Leading onsite support provider with rapid response times and comprehensive coverage.',
    targetAudience: 'Businesses requiring immediate support, Manufacturing facilities, Healthcare organizations, Financial institutions, Government agencies',
    trialDays: 14,
    setupTime: '1 week',
    category: 'Support',
    realService: true,
    technology: ['Remote monitoring', 'Diagnostic tools', 'Maintenance software', 'Security tools', 'Performance monitoring'],
    integrations: ['IT management systems', 'Monitoring platforms', 'Security systems', 'Asset management', 'Service desk'],
    useCases: ['Technical support', 'Preventive maintenance', 'Emergency response', 'Performance optimization', 'Security monitoring'],
    roi: 'Organizations see 350% ROI through reduced downtime and improved system reliability.',
    competitors: ['IT support providers', 'Managed service providers', 'Break-fix services'],
    marketSize: '$12.3B IT support market',
    growthRate: '190% annual growth',
    rating: 4.8,
    reviews: 267,
    customers: 445
  },
  {
    id: 'green-it-solutions',
    name: 'Green IT Solutions',
    tagline: 'Sustainable and energy-efficient IT infrastructure',
    price: '$4,999',
    period: '/month',
    description: 'Environmentally conscious IT solutions that reduce energy consumption, carbon footprint, and operational costs while maintaining high performance and reliability.',
    features: [
      'Energy-efficient hardware',
      'Green data centers',
      'Virtualization solutions',
      'Power management',
      'Cooling optimization',
      'Renewable energy integration',
      'Carbon footprint reduction',
      'Sustainability reporting',
      'Compliance management',
      'Cost optimization'
    ],
    popular: false,
    icon: Heart,
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-400',
    link: '/it-services/green-it',
    marketPosition: 'Pioneering green IT solutions provider with proven sustainability track record.',
    targetAudience: 'Environmentally conscious organizations, Government agencies, Educational institutions, Healthcare organizations, Manufacturing companies',
    trialDays: 45,
    setupTime: '3-6 weeks',
    category: 'Sustainability',
    realService: true,
    technology: ['Energy-efficient hardware', 'Virtualization', 'Cloud computing', 'Power management', 'Renewable energy'],
    integrations: ['Energy monitoring', 'Sustainability platforms', 'Compliance systems', 'Reporting tools', 'Asset management'],
    useCases: ['Energy reduction', 'Carbon footprint reduction', 'Compliance management', 'Cost optimization', 'Sustainability reporting'],
    roi: 'Organizations achieve 250% ROI through reduced energy costs and improved sustainability.',
    competitors: ['Green technology providers', 'Sustainability consultants', 'Energy efficiency firms'],
    marketSize: '$8.9B green IT market',
    growthRate: '280% annual growth',
    rating: 4.6,
    reviews: 89,
    customers: 156
  },
  {
    id: '5g-network-solutions',
    name: '5G Network Solutions',
    tagline: 'Next-generation 5G network infrastructure and optimization',
    price: '$6,999',
    period: '/month',
    description: 'Advanced 5G network solutions including infrastructure design, deployment, optimization, and management for high-speed, low-latency connectivity.',
    features: [
      '5G infrastructure design',
      'Network deployment',
      'Performance optimization',
      'Coverage planning',
      'Capacity management',
      'Security implementation',
      'Monitoring and analytics',
      'Maintenance services',
      'Upgrade planning',
      'Technical support'
    ],
    popular: true,
    icon: Satellite,
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-400',
    link: '/it-services/5g-solutions',
    marketPosition: 'Leading 5G network solutions provider with cutting-edge technology and expertise.',
    targetAudience: 'Telecommunications companies, Internet service providers, Enterprise organizations, Government agencies, Smart city planners',
    trialDays: 60,
    setupTime: '4-8 weeks',
    category: 'Networking',
    realService: true,
    technology: ['5G technology', 'Network infrastructure', 'Radio access networks', 'Core networks', 'Network slicing'],
    integrations: ['Network management systems', 'Monitoring platforms', 'Security systems', 'Analytics tools', 'Service platforms'],
    useCases: ['5G deployment', 'Network optimization', 'Coverage expansion', 'Capacity management', 'Performance improvement'],
    roi: 'Telecom companies see 400% ROI through improved network performance and customer satisfaction.',
    competitors: ['Network equipment vendors', 'Telecom service providers', 'Network consultants'],
    marketSize: '$15.7B 5G infrastructure market',
    growthRate: '320% annual growth',
    rating: 4.9,
    reviews: 123,
    customers: 234
  }
=======
import { Cloud, Shield, Server, Zap, Database, Globe, Code, Monitor, Smartphone, Settings, Users, BarChart3, MessageSquare, FileText, CheckCircle, Search, HardDrive } from 'lucide-react';
const ITServices = [
    {
        title: "Cloud Infrastructure Management",
        description: "Comprehensive cloud services including AWS, Azure, and Google Cloud",
        price: "$1,500 - $8,000/month",
        features: ["24/7 monitoring", "Cost optimization", "Security compliance", "Auto-scaling"],
        icon: <Cloud className="h-8 w-8 text-zion-cyan"/>,
        category: "Cloud",
        badge: "Popular",
        link: "/request-quote?service=cloud-infrastructure"
    },
    {
        title: "Cybersecurity Services",
        description: "Complete security solutions to protect your digital assets",
        price: "$2,000 - $15,000",
        features: ["Security audits", "Penetration testing", "Incident response", "Compliance"],
        icon: <Shield className="h-8 w-8 text-zion-purple"/>,
        category: "Security",
        badge: "Premium",
        link: "/request-quote?service=cybersecurity"
    },
    {
        title: "DevOps & CI/CD",
        description: "Streamline development and deployment processes",
        price: "$3,000 - $12,000/month",
        features: ["Pipeline automation", "Infrastructure as code", "Monitoring", "Performance optimization"],
        icon: <Zap className="h-8 w-8 text-zion-blue"/>,
        category: "DevOps",
        link: "/request-quote?service=devops"
    },
    {
        title: "Database Management",
        description: "Expert database administration and optimization",
        price: "$1,000 - $6,000/month",
        features: ["Performance tuning", "Backup & recovery", "Security hardening", "Migration support"],
        icon: <Database className="h-8 w-8 text-zion-cyan"/>,
        category: "Database",
        link: "/request-quote?service=database-management"
    },
    {
        title: "Network Infrastructure",
        description: "Design, implement, and maintain robust network solutions",
        price: "$2,500 - $20,000",
        features: ["Network design", "Security implementation", "Monitoring", "24/7 support"],
        icon: <Globe className="h-8 w-8 text-zion-purple"/>,
        category: "Networking",
        link: "/request-quote?service=network-infrastructure"
    },
    {
        title: "IT Consulting & Strategy",
        description: "Strategic IT planning and digital transformation guidance",
        price: "$150 - $300/hour",
        features: ["Technology assessment", "Roadmap planning", "Vendor selection", "ROI analysis"],
        icon: <CheckCircle className="h-8 w-8 text-zion-blue"/>,
        category: "Consulting",
        link: "/request-quote?service=it-consulting"
    },
    {
        title: "Managed IT Services",
        description: "Complete IT management for small to enterprise businesses",
        price: "$500 - $5,000/month",
        features: ["Help desk support", "System administration", "Security management", "Backup services"],
        icon: <Settings className="h-8 w-8 text-zion-cyan"/>,
        category: "Managed Services",
        badge: "New",
        link: "/request-quote?service=managed-it"
    },
    {
        title: "Data Center Services",
        description: "On-premise and colocation data center solutions",
        price: "$1,000 - $10,000/month",
        features: ["Hardware provisioning", "Environmental monitoring", "Power management", "Security"],
        icon: <Server className="h-8 w-8 text-zion-purple"/>,
        category: "Data Center",
        link: "/request-quote?service=data-center"
    },
    {
        title: "Mobile App Development",
        description: "Custom mobile applications for iOS and Android",
        price: "$15,000 - $100,000",
        features: ["UI/UX design", "Native development", "Testing", "App store deployment"],
        icon: <Smartphone className="h-8 w-8 text-zion-blue"/>,
        category: "Development",
        link: "/request-quote?service=mobile-development"
    },
    {
        title: "Web Development",
        description: "Modern web applications and e-commerce solutions",
        price: "$10,000 - $75,000",
        features: ["Responsive design", "SEO optimization", "Performance tuning", "Maintenance"],
        icon: <Globe className="h-8 w-8 text-zion-cyan"/>,
        category: "Development",
        link: "/request-quote?service=web-development"
    },
    {
        title: "IT Training & Workshops",
        description: "Custom training programs for your IT team",
        price: "$500 - $2,500 per person",
        features: ["Hands-on workshops", "Certification prep", "Custom curriculum", "Ongoing support"],
        icon: <Users className="h-8 w-8 text-zion-purple"/>,
        category: "Training",
        link: "/request-quote?service=it-training"
    },
    {
        title: "Disaster Recovery",
        description: "Comprehensive backup and recovery solutions",
        price: "$1,500 - $8,000/month",
        features: ["Automated backups", "Off-site storage", "Recovery testing", "24/7 support"],
        icon: <HardDrive className="h-8 w-8 text-zion-blue"/>,
        category: "Recovery",
        link: "/request-quote?service=disaster-recovery"
    },
    {
        title: "IT Audit & Compliance",
        description: "Ensure your IT systems meet industry standards",
        price: "$3,000 - $20,000",
        features: ["Compliance assessment", "Risk analysis", "Documentation", "Remediation"],
        icon: <FileText className="h-8 w-8 text-zion-cyan"/>,
        category: "Compliance",
        link: "/request-quote?service=it-audit"
    },
    {
        title: "Hardware Procurement",
        description: "Strategic hardware sourcing and deployment",
        price: "15-25% of hardware cost",
        features: ["Vendor management", "Volume discounts", "Installation", "Warranty support"],
        icon: <Server className="h-8 w-8 text-zion-purple"/>,
        category: "Hardware",
        link: "/request-quote?service=hardware-procurement"
    },
    {
        title: "IT Project Management",
        description: "Professional project management for IT initiatives",
        price: "$100 - $200/hour",
        features: ["Project planning", "Resource management", "Risk mitigation", "Delivery assurance"],
        icon: <BarChart3 className="h-8 w-8 text-zion-blue"/>,
        category: "Project Management",
        link: "/request-quote?service=it-project-management"
    },
    {
        title: "24/7 IT Support",
        description: "Round-the-clock technical support and monitoring",
        price: "$2,000 - $8,000/month",
        features: ["Help desk", "Remote support", "On-site visits", "SLA guarantees"],
        icon: <Monitor className="h-8 w-8 text-zion-cyan"/>,
        category: "Support",
        badge: "Featured",
        link: "/request-quote?service=24-7-support"
    }
>>>>>>> cursor/website-audit-and-enhancement-1eed
];
const categories = [
<<<<<<< HEAD
  { name: 'Infrastructure', icon: Server, count: 1, color: 'from-blue-600 to-cyan-700' },
  { name: 'Consulting', icon: Users, count: 2, color: 'from-purple-600 to-indigo-700' },
  { name: 'Support', icon: Wifi, count: 1, color: 'from-green-600 to-emerald-700' },
  { name: 'Sustainability', icon: Heart, count: 1, color: 'from-emerald-600 to-teal-700' },
  { name: 'Networking', icon: Satellite, count: 1, color: 'from-indigo-600 to-purple-700' }
];

export const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/10 to-zion-cyan/10"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-blue via-zion-cyan to-zion-purple bg-clip-text text-transparent">
                IT Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Comprehensive IT services that drive digital transformation, optimize infrastructure, 
              and ensure your business stays ahead in the technology landscape.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-blue to-zion-cyan text-white font-semibold rounded-lg shadow-lg shadow-zion-blue/25 hover:shadow-xl hover:shadow-zion-blue/40 transition-all duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-blue text-zion-blue font-semibold rounded-lg hover:bg-zion-blue hover:text-white transition-all duration-300"
              >
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore IT Service Categories
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Discover our comprehensive range of IT services designed to meet every business need
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
                onClick={() => setSelectedCategory(category.name)}
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm font-medium text-white mb-2">{category.name}</h3>
                <p className="text-xs text-zion-slate-light">{category.count} service{category.count > 1 ? 's' : ''}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search IT services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 bg-zion-slate-dark/50 border border-zion-blue/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-blue/50 focus:border-zion-blue/50 transition-all duration-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-zion-blue text-white shadow-lg shadow-zion-blue/25'
                    : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-blue/10 hover:text-zion-blue'
                }`}
              >
                All Services
              </button>
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-zion-blue text-white shadow-lg shadow-zion-blue/25'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-blue/10 hover:text-zion-blue'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 border border-zion-blue/20 rounded-xl p-6 hover:border-zion-blue/40 hover:shadow-xl hover:shadow-zion-blue/20 transition-all duration-300 group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  {service.popular && (
                    <span className="px-3 py-1 bg-gradient-to-r from-zion-blue to-zion-cyan text-white text-xs font-medium rounded-full">
                      Popular
                    </span>
                  )}
=======
    { name: "All", value: "all", icon: <Globe className="h-4 w-4"/> },
    { name: "Cloud", value: "cloud", icon: <Cloud className="h-4 w-4"/> },
    { name: "Security", value: "security", icon: <Shield className="h-4 w-4"/> },
    { name: "DevOps", value: "devops", icon: <Zap className="h-4 w-4"/> },
    { name: "Database", value: "database", icon: <Database className="h-4 w-4"/> },
    { name: "Networking", value: "networking", icon: <Globe className="h-4 w-4"/> },
    { name: "Consulting", value: "consulting", icon: <CheckCircle className="h-4 w-4"/> },
    { name: "Managed Services", value: "managed services", icon: <Settings className="h-4 w-4"/> },
    { name: "Data Center", value: "data center", icon: <Server className="h-4 w-4"/> },
    { name: "Development", value: "development", icon: <Code className="h-4 w-4"/> },
    { name: "Training", value: "training", icon: <Users className="h-4 w-4"/> },
    { name: "Recovery", value: "recovery", icon: <HardDrive className="h-4 w-4"/> },
    { name: "Compliance", value: "compliance", icon: <FileText className="h-4 w-4"/> },
    { name: "Hardware", value: "hardware", icon: <Server className="h-4 w-4"/> },
    { name: "Project Management", value: "project management", icon: <BarChart3 className="h-4 w-4"/> },
    { name: "Support", value: "support", icon: <Monitor className="h-4 w-4"/> }
];
export default function ITServicesPage() {
    const [selectedCategory, setSelectedCategory] = React.useState("all");
    const filteredServices = selectedCategory === "all"
        ? ITServices
        : ITServices.filter(service => service.category.toLowerCase() === selectedCategory);
    return (<div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue-dark to-zion-slate">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IT Services & Solutions
          </h1>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto mb-8">
            Comprehensive IT services to modernize, secure, and optimize your technology infrastructure. 
            From cloud migration to cybersecurity, we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate font-semibold">
              <Search className="h-5 w-5 mr-2"/>
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <MessageSquare className="h-5 w-5 mr-2"/>
              Get Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (<Button key={category.value} variant={selectedCategory === category.value ? "default" : "outline"} onClick={() => setSelectedCategory(category.value)} className={`flex items-center gap-2 ${selectedCategory === category.value
                ? "bg-zion-blue text-white"
                : "border-zion-blue text-zion-blue hover:bg-zion-blue/10"}`}>
              {category.icon}
              {category.name}
            </Button>))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map((service, index) => (<Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-zion-blue/20 hover:border-zion-blue/50 bg-zion-blue-dark/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-3">
                  <div className="p-3 rounded-lg bg-zion-blue/10 group-hover:bg-zion-blue/20 transition-colors">
                    {service.icon}
                  </div>
                  {service.badge && (<Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                      {service.badge}
                    </Badge>)}
>>>>>>> cursor/website-audit-and-enhancement-1eed
                </div>

                {/* Service Info */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-blue transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-zion-slate-light mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-zion-blue">{service.price}</span>
                  <span className="text-zion-slate-light ml-1">{service.period}</span>
                </div>
<<<<<<< HEAD

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-zion-blue flex-shrink-0" />
                      <span className="text-sm text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <p className="text-xs text-zion-slate-light/70">
                      +{service.features.length - 3} more features
                    </p>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white">{service.rating}</span>
                    <span className="text-zion-slate-light">({service.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-zion-slate-light">
                    <Users className="w-4 h-4" />
                    <span>{service.customers} customers</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={service.link}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-zion-blue to-zion-cyan text-white font-medium rounded-lg hover:shadow-lg hover:shadow-zion-blue/25 transition-all duration-300 group-hover:scale-105"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8">
              Join hundreds of companies already leveraging our IT services to drive innovation, 
              improve efficiency, and gain competitive advantages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-blue to-zion-cyan text-white font-semibold rounded-lg shadow-lg shadow-zion-blue/25 hover:shadow-xl hover:shadow-zion-blue/40 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-blue text-zion-blue font-semibold rounded-lg hover:bg-zion-blue hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
=======
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>))}
                </ul>
              </CardContent>
              <div className="px-6 pb-6">
                <Button className="w-full bg-gradient-to-r from-zion-blue to-zion-cyan hover:from-zion-blue-light hover:to-zion-cyan-light text-white">
                  <Link to={service.link}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </Card>))}
        </div>

        {/* CTA Section */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Custom IT Solutions?
          </h2>
          <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our expert team can design and implement custom IT solutions tailored to your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-blue hover:bg-zion-blue-light text-white">
              <MessageSquare className="h-5 w-5 mr-2"/>
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Code className="h-5 w-5 mr-2"/>
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>);
}
>>>>>>> cursor/website-audit-and-enhancement-1eed

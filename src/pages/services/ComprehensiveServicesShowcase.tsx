import React, { useState } from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Shield, 
  Heart, 
  Leaf, 
  Scale, 
  Truck, 
  TrendingUp, 
  Building, 
  GraduationCap, 
  Atom,
  Zap,
  Globe,
  Users,
  BarChart3,
  Target,
  Award,
  Search,
  Filter,
  Star,
  Clock,
  DollarSign,
  TrendingDown,
  Eye,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { INNOVATIVE_NEW_SERVICES } from '../../data/innovativeNewServices';

export default function ComprehensiveServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('innovation');

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(INNOVATIVE_NEW_SERVICES.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = INNOVATIVE_NEW_SERVICES
    .filter(service => 
      (selectedCategory === 'All' || service.category === selectedCategory) &&
      (service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
       service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'roi':
          return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]);
        case 'innovation':
          return b.innovationLevel.includes('Revolutionary') ? 1 : -1;
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Digital Marketing': Brain,
      'Cybersecurity': Shield,
      'Healthcare': Heart,
      'Sustainability': Leaf,
      'Legal Tech': Scale,
      'Supply Chain': Truck,
      'FinTech': TrendingUp,
      'Smart Cities': Building,
      'Education': GraduationCap,
      'Quantum Computing': Atom,
      'AI & Customer Experience': Users,
      'Blockchain & Supply Chain': Globe,
      'AI & IoT': Zap,
      'Metaverse & Virtual Reality': Eye,
      'AI & Human Resources': Users,
      'Edge Computing & IoT': Zap
    };
    return iconMap[category] || Globe;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Digital Marketing': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Healthcare': 'from-green-500 to-teal-500',
      'Sustainability': 'from-emerald-500 to-green-500',
      'Legal Tech': 'from-blue-500 to-indigo-500',
      'Supply Chain': 'from-yellow-500 to-orange-500',
      'FinTech': 'from-green-500 to-blue-500',
      'Smart Cities': 'from-gray-500 to-blue-500',
      'Education': 'from-purple-500 to-blue-500',
      'Quantum Computing': 'from-indigo-500 to-purple-500',
      'AI & Customer Experience': 'from-cyan-500 to-blue-500',
      'Blockchain & Supply Chain': 'from-yellow-500 to-green-500',
      'AI & IoT': 'from-blue-500 to-cyan-500',
      'Metaverse & Virtual Reality': 'from-purple-500 to-indigo-500',
      'AI & Human Resources': 'from-pink-500 to-red-500',
      'Edge Computing & IoT': 'from-indigo-500 to-cyan-500'
    };
    return colorMap[category] || 'from-gray-500 to-gray-600';
  };

  const getInnovationLevel = (level: string) => {
    if (level.includes('Revolutionary')) return { color: 'text-yellow-400', bg: 'bg-yellow-400/20', icon: Sparkles };
    if (level.includes('Cutting-edge')) return { color: 'text-cyan-400', bg: 'bg-cyan-400/20', icon: Star };
    if (level.includes('Advanced')) return { color: 'text-blue-400', bg: 'bg-blue-400/20', icon: Award };
    return { color: 'text-green-400', bg: 'bg-green-400/20', icon: CheckCircle };
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Network,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';

const ComprehensiveServicesShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud & Infrastructure',
    'Networking',
    'IT Management',
    'Quantum Technology',
    'Emerging Tech'
  ];

  const services = [
    {
      id: 'ai-autonomous-systems',
      title: "AI Autonomous Systems",
      description: "Next-generation AI systems that operate independently and learn continuously",
      category: "AI & Machine Learning",
      icon: Brain,
      features: ["Self-learning algorithms", "Autonomous decision making", "Continuous optimization"],
      path: "/services/ai-autonomous-systems",
      featured: true,
      rating: 5
    },
    {
      id: 'cybersecurity',
      title: "Advanced Cybersecurity Suite",
      description: "Comprehensive security solutions with AI-powered threat detection",
      category: "Cybersecurity",
      icon: Shield,
      features: ["Real-time monitoring", "AI threat analysis", "Automated response"],
      path: "/services/cybersecurity",
      featured: true,
      rating: 5
    },
    {
      id: 'quantum-technology',
      title: "Quantum Technology Solutions",
      description: "Revolutionary quantum computing and encryption services",
      category: "Quantum Technology",
      icon: Cpu,
      features: ["Quantum encryption", "Superior performance", "Future-proof architecture"],
      path: "/services/quantum-technology",
      featured: true,
      rating: 5
    },
    {
      id: 'it-infrastructure',
      title: "IT Infrastructure Services",
      description: "Comprehensive IT infrastructure management and optimization",
      category: "IT Management",
      icon: Database,
      features: ["Infrastructure design", "Performance optimization", "Scalability planning"],
      path: "/services/it-infrastructure",
      featured: false,
      rating: 4
    },
    {
      id: 'micro-saas',
      title: "Micro SAAS Solutions",
      description: "Custom software solutions for specific business needs",
      category: "Emerging Tech",
      icon: Globe,
      features: ["Custom development", "Rapid deployment", "Scalable solutions"],
      path: "/services/micro-saas-solutions",
      featured: false,
      rating: 4
    },
    {
      id: '5g-enterprise',
      title: "5G Enterprise Solutions",
      description: "Cutting-edge 5G networks optimized for enterprise needs",
      category: "Networking",
      icon: Zap,
      features: ["Ultra-low latency", "Massive connectivity", "Enterprise security"],
      path: "/5g-enterprise-solutions",
      featured: false,
      rating: 4
    },
    {
      id: 'ai-research-assistant',
      title: "AI Autonomous Research Assistant",
      description: "AI-powered research and analysis platform",
      category: "AI & Machine Learning",
      icon: Brain,
      features: ["Automated research", "Data analysis", "Insight generation"],
      path: "/ai-autonomous-research-assistant",
      featured: false,
      rating: 4
    },
    {
      id: 'quantum-neural-network',
      title: "Quantum Neural Network Platform",
      description: "Revolutionary neural networks leveraging quantum computing",
      category: "AI & Quantum",
      icon: Cpu,
      features: ["Quantum algorithms", "Enhanced learning", "Breakthrough performance"],
      path: "/quantum-neural-network-platform",
      featured: false,
      rating: 5
    },
    {
      id: 'autonomous-business',
      title: "Autonomous Business Operations Platform",
      description: "AI-powered business process automation and optimization",
      category: "AI & Machine Learning",
      icon: Brain,
      features: ["Process automation", "Business intelligence", "Performance optimization"],
      path: "/autonomous-business-operations-platform",
      featured: false,
      rating: 4
    },
    {
      id: 'ai-asset-management',
      title: "AI-Powered IT Asset Management",
      description: "Intelligent asset tracking and optimization for modern enterprises",
      category: "IT Management",
      icon: Database,
      features: ["Predictive maintenance", "Cost optimization", "Real-time insights"],
      path: "/ai-powered-it-asset-management",
      featured: false,
      rating: 4
    },
    {
      id: 'soc2-compliance',
      title: "SOC2 Compliance Automation",
      description: "Automated compliance management and reporting",
      category: "Cybersecurity",
      icon: Shield,
      features: ["Automated compliance", "Real-time monitoring", "Audit preparation"],
      path: "/soc2-compliance-automation",
      featured: false,
      rating: 4
    },
    {
      id: 'industry-solutions',
      title: "Industry-Specific Solutions",
      description: "Tailored solutions for healthcare, finance, and manufacturing",
      category: "Emerging Tech",
      icon: Globe,
      features: ["Industry expertise", "Custom solutions", "Compliance ready"],
      path: "/services/industry-solutions",
      featured: false,
      rating: 4
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEO 
        title="Comprehensive Services Showcase - Zion Tech Group" 
        description="Explore our complete portfolio of innovative micro SAAS services, AI solutions, and cutting-edge technology services designed to transform your business."
        keywords="micro SAAS, AI services, technology solutions, digital transformation, innovation, business automation"
        canonical="https://ziontechgroup.com/services/comprehensive-showcase"
      />

      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/90 via-zion-purple/80 to-zion-cyan/70"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-pulse">
              Comprehensive Services
              <span className="block text-4xl md:text-5xl text-zion-cyan mt-4 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Innovation Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our complete ecosystem of revolutionary micro SAAS services, AI solutions, and cutting-edge 
              technology services designed to accelerate your digital transformation and business growth.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-zion-cyan">{INNOVATIVE_NEW_SERVICES.length}+</div>
                <div className="text-sm text-zion-slate-light">Innovative Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-zion-purple">15+</div>
                <div className="text-sm text-zion-slate-light">Technology Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-zion-green">500%+</div>
                <div className="text-sm text-zion-slate-light">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-zion-orange">24/7</div>
                <div className="text-sm text-zion-slate-light">Global Support</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-blue hover:to-zion-cyan text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                <Sparkles className="w-5 h-5 inline mr-2" />
                Explore Services
              </button>
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
      <section className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category}
                    </option>
              );
            })}
}
}

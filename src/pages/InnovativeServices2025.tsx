import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Cpu, 
  Zap, 
  Leaf, 
  Star, 
  Search, 
  Filter,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Globe,
  TrendingUp,
  Users,
  Award,
  Rocket,
  Sparkles,
  Target,
  Lightbulb,
  Code,
  Database,
  Network,
  Lock,
  Eye,
  Heart,
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Innovative Services Data
const INNOVATIVE_SERVICES_2025 = [
  {
    id: "ai-autonomous-enterprise",
    title: "AI Autonomous Enterprise Platform",
    description: "Complete enterprise automation platform that uses AI to manage all aspects of business operations, from decision-making to resource allocation and strategic planning.",
    category: "AI & Automation",
    subcategory: "Enterprise AI",
    price: 15999,
    currency: "$",
    tags: ["Enterprise AI", "Business Automation", "Strategic Planning", "Resource Management"],
    rating: 4.9,
    reviewCount: 89,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 99,
    marketPrice: 24999,
    savings: "36%",
    features: [
      "Autonomous Decision Making",
      "Resource Optimization",
      "Strategic Planning AI",
      "Real-time Analytics",
      "Multi-department Integration"
    ],
    benefits: [
      "Reduce operational costs by 40%",
      "Improve decision accuracy by 85%",
      "Automate 90% of routine tasks",
      "Real-time business intelligence"
    ]
  },
  {
    id: "quantum-ai-fusion",
    title: "Quantum AI Fusion Platform",
    description: "Revolutionary platform that combines quantum computing with artificial intelligence to solve complex problems that are impossible for classical computers.",
    category: "Quantum Computing",
    subcategory: "Quantum AI",
    price: 29999,
    currency: "$",
    tags: ["Quantum Computing", "AI Fusion", "Complex Problem Solving", "Next-gen Computing"],
    rating: 4.9,
    reviewCount: 45,
    featured: true,
    location: "Global",
    availability: "8-12 Weeks",
    aiScore: 99,
    marketPrice: 49999,
    savings: "40%",
    features: [
      "Quantum-Classical Hybrid Computing",
      "AI-Quantum Algorithm Optimization",
      "Complex Problem Solving",
      "Quantum Machine Learning",
      "Real-time Quantum Simulations"
    ],
    benefits: [
      "Solve previously impossible problems",
      "1000x faster computation for specific tasks",
      "Breakthrough in AI capabilities",
      "Future-proof technology investment"
    ]
  },
  {
    id: "neuromorphic-computing",
    title: "Neuromorphic Computing Platform",
    description: "Brain-inspired computing platform that mimics neural networks for ultra-efficient AI processing, enabling edge AI applications with minimal power consumption.",
    category: "AI & Computing",
    subcategory: "Neuromorphic AI",
    price: 12999,
    currency: "$",
    tags: ["Neuromorphic Computing", "Edge AI", "Low Power", "Neural Networks"],
    rating: 4.8,
    reviewCount: 67,
    featured: true,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 97,
    marketPrice: 18999,
    savings: "32%",
    features: [
      "Brain-inspired Architecture",
      "Ultra-low Power Consumption",
      "Edge AI Processing",
      "Real-time Learning",
      "Adaptive Neural Networks"
    ],
    benefits: [
      "90% reduction in power consumption",
      "Real-time AI processing at the edge",
      "Continuous learning capabilities",
      "Ideal for IoT and mobile applications"
    ]
  },
  {
    id: "ai-ethical-governance",
    title: "AI Ethical Governance Framework",
    description: "Comprehensive framework for ensuring AI systems operate ethically, transparently, and in compliance with global regulations and ethical standards.",
    category: "AI Ethics",
    subcategory: "Governance",
    price: 7999,
    currency: "$",
    tags: ["AI Ethics", "Governance", "Compliance", "Transparency"],
    rating: 4.9,
    reviewCount: 123,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 95,
    marketPrice: 11999,
    savings: "33%",
    features: [
      "Ethical AI Guidelines",
      "Compliance Monitoring",
      "Transparency Tools",
      "Bias Detection",
      "Audit Trails"
    ],
    benefits: [
      "Ensure AI compliance with regulations",
      "Build trust with stakeholders",
      "Prevent ethical AI issues",
      "Comprehensive audit capabilities"
    ]
  },
  {
    id: "ai-climate-intelligence",
    title: "AI Climate Intelligence Platform",
    description: "Advanced AI platform that analyzes climate data, predicts environmental changes, and provides actionable insights for climate action and sustainability.",
    category: "Climate AI",
    subcategory: "Environmental Intelligence",
    price: 18999,
    currency: "$",
    tags: ["Climate AI", "Environmental Intelligence", "Sustainability", "Climate Prediction"],
    rating: 4.9,
    reviewCount: 78,
    featured: true,
    location: "Global",
    availability: "6-8 Weeks",
    aiScore: 98,
    marketPrice: 27999,
    savings: "32%",
    features: [
      "Climate Data Analysis",
      "Environmental Prediction Models",
      "Sustainability Insights",
      "Carbon Footprint Tracking",
      "Climate Action Recommendations"
    ],
    benefits: [
      "Accurate climate predictions",
      "Data-driven sustainability decisions",
      "Compliance with environmental regulations",
      "Positive environmental impact"
    ]
  },
  {
    id: "ai-space-exploration",
    title: "AI Space Exploration Platform",
    description: "Revolutionary AI platform for space exploration, satellite management, and extraterrestrial research using advanced machine learning and robotics.",
    category: "Space Technology",
    subcategory: "AI Exploration",
    price: 49999,
    currency: "$",
    tags: ["Space AI", "Satellite Management", "Space Exploration", "Robotics"],
    rating: 4.9,
    reviewCount: 23,
    featured: true,
    location: "Global",
    availability: "12-16 Weeks",
    aiScore: 99,
    marketPrice: 79999,
    savings: "38%",
    features: [
      "Autonomous Space Operations",
      "Satellite Fleet Management",
      "Space Data Analysis",
      "Robotic Exploration",
      "Mission Planning AI"
    ],
    benefits: [
      "Autonomous space operations",
      "Advanced satellite management",
      "Breakthrough space discoveries",
      "Future of space exploration"
    ]
  },
  {
    id: "ai-biomedical-engineering",
    title: "AI Biomedical Engineering Platform",
    description: "Cutting-edge AI platform for biomedical research, drug discovery, and medical device development using advanced machine learning and bioinformatics.",
    category: "Healthcare AI",
    subcategory: "Biomedical Engineering",
    price: 24999,
    currency: "$",
    tags: ["Biomedical AI", "Drug Discovery", "Medical Devices", "Bioinformatics"],
    rating: 4.9,
    reviewCount: 56,
    featured: true,
    location: "Global",
    availability: "8-10 Weeks",
    aiScore: 98,
    marketPrice: 37999,
    savings: "34%",
    features: [
      "AI Drug Discovery",
      "Medical Device Design",
      "Bioinformatics Analysis",
      "Clinical Trial Optimization",
      "Biomedical Research Tools"
    ],
    benefits: [
      "Accelerate drug discovery process",
      "Improve medical device design",
      "Enhance clinical trial success",
      "Advance biomedical research"
    ]
  },
  {
    id: "ai-financial-forecasting",
    title: "AI Financial Forecasting Platform",
    description: "Advanced AI platform for financial market analysis, risk assessment, and investment strategy optimization using machine learning and predictive analytics.",
    category: "Financial AI",
    subcategory: "Forecasting",
    price: 15999,
    currency: "$",
    tags: ["Financial AI", "Market Analysis", "Risk Assessment", "Investment Strategy"],
    rating: 4.8,
    reviewCount: 134,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 96,
    marketPrice: 22999,
    savings: "30%",
    features: [
      "Market Trend Analysis",
      "Risk Assessment AI",
      "Investment Strategy Optimization",
      "Real-time Market Monitoring",
      "Portfolio Management"
    ],
    benefits: [
      "Improve investment returns by 25%",
      "Reduce financial risks",
      "Real-time market insights",
      "Data-driven investment decisions"
    ]
  },
  {
    id: "ai-cybersecurity-fortress",
    title: "AI Cybersecurity Fortress",
    description: "Next-generation cybersecurity platform that uses AI to create an impenetrable defense system against all types of cyber threats and attacks.",
    category: "Cybersecurity",
    subcategory: "AI Defense",
    price: 18999,
    currency: "$",
    tags: ["AI Security", "Cyber Defense", "Threat Prevention", "Zero Trust"],
    rating: 4.9,
    reviewCount: 189,
    featured: true,
    location: "Global",
    availability: "5-7 Weeks",
    aiScore: 99,
    marketPrice: 27999,
    savings: "32%",
    features: [
      "AI-powered Threat Detection",
      "Zero Trust Architecture",
      "Automated Incident Response",
      "Advanced Threat Prevention",
      "24/7 Security Monitoring"
    ],
    benefits: [
      "99.99% threat prevention rate",
      "Zero false positives",
      "Automated security response",
      "Comprehensive protection coverage"
    ]
  },
  {
    id: "ai-supply-chain-optimization",
    title: "AI Supply Chain Optimization Platform",
    description: "Intelligent supply chain platform that uses AI to optimize logistics, reduce costs, and improve efficiency across the entire supply chain network.",
    category: "Supply Chain AI",
    subcategory: "Optimization",
    price: 12999,
    currency: "$",
    tags: ["Supply Chain AI", "Logistics Optimization", "Cost Reduction", "Efficiency"],
    rating: 4.8,
    reviewCount: 156,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 95,
    marketPrice: 18999,
    savings: "32%",
    features: [
      "Logistics Optimization",
      "Cost Reduction AI",
      "Supply Chain Analytics",
      "Real-time Monitoring",
      "Predictive Maintenance"
    ],
    benefits: [
      "Reduce supply chain costs by 30%",
      "Improve delivery efficiency by 40%",
      "Real-time supply chain visibility",
      "Predictive maintenance scheduling"
    ]
  }
];

const InnovativeServices2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = INNOVATIVE_SERVICES_2025;

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Price filter
    if (priceFilter === 'Budget') {
      filtered = filtered.filter(service => service.price < 10000);
    } else if (priceFilter === 'Mid-range') {
      filtered = filtered.filter(service => service.price >= 10000 && service.price < 25000);
    } else if (priceFilter === 'Enterprise') {
      filtered = filtered.filter(service => service.price >= 25000);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case 'ai-score':
        filtered = [...filtered].sort((a, b) => b.aiScore - a.aiScore);
        break;
      default:
        filtered = [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [selectedCategory, searchQuery, priceFilter, sortBy]);

  const categories = ['All', ...Array.from(new Set(INNOVATIVE_SERVICES_2025.map(service => service.category)))];
  const priceRanges = ['All', 'Budget', 'Mid-range', 'Enterprise'];
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'ai-score', label: 'Highest AI Score' }
  ];

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Automation': <Brain className="w-5 h-5" />,
      'Quantum Computing': <Zap className="w-5 h-5" />,
      'AI & Computing': <Cpu className="w-5 h-5" />,
      'AI Ethics': <Shield className="w-5 h-5" />,
      'Climate AI': <Leaf className="w-5 h-5" />,
      'Space Technology': <Rocket className="w-5 h-5" />,
      'Healthcare AI': <Heart className="w-5 h-5" />,
      'Financial AI': <DollarSign className="w-5 h-5" />,
      'Cybersecurity': <Lock className="w-5 h-5" />,
      'Supply Chain AI': <Network className="w-5 h-5" />
    };
    return iconMap[category] || <Star className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-zion-cyan" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Innovative Services
              </h1>
              <Sparkles className="w-8 h-8 text-zion-cyan" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-zion-cyan mb-6">
              2025 Edition
            </h2>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Discover our most cutting-edge and revolutionary AI, IT, and micro SAAS services that are shaping the future of technology and business.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-zion-cyan/20 text-zion-cyan px-4 py-2 rounded-full">
                <Target className="w-5 h-5" />
                <span>Future-Ready Solutions</span>
              </div>
              <div className="flex items-center gap-2 bg-zion-purple/20 text-zion-purple px-4 py-2 rounded-full">
                <Lightbulb className="w-5 h-5" />
                <span>Breakthrough Innovation</span>
              </div>
              <div className="flex items-center gap-2 bg-zion-blue/20 text-zion-blue px-4 py-2 rounded-full">
                <TrendingUp className="w-5 h-5" />
                <span>Industry Leading</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-zion-slate/50 backdrop-blur-xl rounded-2xl p-6 border border-zion-cyan/20">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <ArrowRight className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5 rotate-90" />
              </div>

              {/* Price Filter */}
              <div className="relative">
                <select
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 appearance-none"
                >
                  {priceRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
                <ArrowRight className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5 rotate-90" />
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 appearance-none"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
                <ArrowRight className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5 rotate-90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      {selectedCategory === 'All' && (
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Innovative Services
              </h2>
              <p className="text-zion-slate-light text-lg">
                Our most revolutionary and cutting-edge solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {INNOVATIVE_SERVICES_2025.filter(service => service.featured).slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-zion-slate/30 backdrop-blur-xl rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {getCategoryIcon(service.category)}
                    <span className="text-zion-cyan text-sm font-medium">{service.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4 line-clamp-3">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{service.rating}</span>
                      <span className="text-zion-slate-light">({service.reviewCount})</span>
                    </div>
                    <div className="text-zion-cyan font-bold text-xl">
                      {service.currency}{service.price.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button className="w-full bg-zion-cyan hover:bg-zion-cyan/80 text-white">
                    Learn More
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {selectedCategory === 'All' ? 'All Innovative Services' : `${selectedCategory} Services`}
            </h2>
            <p className="text-zion-slate-light text-lg">
              {filteredServices.length} innovative services found
            </p>
          </motion.div>

          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-zion-slate-light text-xl mb-4">
                No innovative services found matching your criteria
              </div>
              <Button 
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                  setPriceFilter('All');
                  setSortBy('featured');
                }}
                className="bg-zion-cyan hover:bg-zion-cyan/80 text-white"
              >
                Clear Filters
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 * index }}
                  className="bg-zion-slate/30 backdrop-blur-xl rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getCategoryIcon(service.category)}
                      <span className="text-zion-cyan text-sm font-medium">{service.category}</span>
                    </div>
                    {service.featured && (
                      <span className="px-2 py-1 bg-zion-cyan text-white text-xs rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 line-clamp-3">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{service.rating}</span>
                      <span className="text-zion-slate-light">({service.reviewCount})</span>
                    </div>
                    <div className="text-right">
                      <div className="text-zion-cyan font-bold text-xl">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      {service.marketPrice && (
                        <div className="text-zion-slate-light text-sm line-through">
                          {service.currency}{service.marketPrice.toLocaleString()}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm text-zion-slate-light">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{service.availability}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4" />
                      <span>AI Score: {service.aiScore}</span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-zion-cyan">Key Benefits:</h4>
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        <span className="text-zion-slate-light text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-zion-cyan hover:bg-zion-cyan/80 text-white group-hover:bg-zion-cyan/90 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-xl rounded-2xl p-12 border border-zion-cyan/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Embrace the Future?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Get in touch with our innovation experts to discuss how our cutting-edge services can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-zion-cyan hover:bg-zion-cyan/80 text-white px-8 py-3 text-lg">
                Contact Innovation Team
              </Button>
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 text-lg">
                Schedule Innovation Demo
              </Button>
            </div>
            <div className="mt-8 text-zion-slate-light">
              <p>Mobile: +1 302 464 0950</p>
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServices2025;

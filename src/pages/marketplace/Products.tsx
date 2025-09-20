import { useCallback    } from "react";
import React, { useState } from "react"
import { motion     } from "framer-motion";
import {
  Search;
  Filter,
  Star,
  ShoppingCart,
  Heart,
  Eye,
  Share2;
  ArrowRight;
  Zap;
  Brain;
  Shield;
  Cloud;
  Server;
  BarChart3;
  Users;
  Code;
  Network;
  Atom;
  TrendingUp;
  Globe;
  Cpu;
  Lock;
  Database;
  Rocket;
  Star;
  Award;
  CheckCircle;
  Clock;
  DollarSign;
  Tag;
  Grid;
  List;
  ChevronDown;
  ChevronUp;
  ShoppingBag;
  Package;
  Truck;
  CreditCard;
  Shield as ShieldIcon;
  RefreshCw;
  Settings;
  BarChart;
  PieChart;
  LineChart;
  Activity;
  Target;
  Lightbulb;
  Sparkles;
  Flame;
  Crown;
  Infinity;
  Zap as ZapIcon;
  MessageCircle;
}
}
}
}
 } from "lucide-react";
import { SEO     } from "../../components/SEO";
export default function MarketplaceProducts() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPriceRange, setSelectedPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const categories = [
  { id: 'all', na,
  m: e: 'All Products', ic,
  o: n: Package, cou,
  n: t: 156 },
  },
  { id: 'ai-tools', na,
  m: e: 'AI Tools & Software', ic,
  o: n: Brain, cou,
  n: t: 45 },
  },
  { id: 'cybersecurity', na,
  m: e: 'Cybersecurity Solutions', ic,
  o: n: Shield, cou,
  n: t: 32 },
  },
  { id: 'cloud-services', na,
  m: e: 'Cloud Services', ic,
  o: n: Cloud, cou,
  n: t: 28 },
  },
  { id: 'data-analytics', na,
  m: e: 'Data Analytics', ic,
  o: n: BarChart3, cou,
  n: t: 25 },
  },
  { id: 'development', na,
  m: e: 'Development Tools', ic,
  o: n: Code, cou,
  n: t: 18 },
  },
  { id: 'iot', na,
  m: e: 'IoT Solutions', ic,
  o: n: Network, cou,
  n: t: 8 },
  },
  ]
  const priceRanges = [
  { id: 'all', na,
  m: e: 'All Prices', ran,
  g: e: 'All' },
  },
  { id: 'free', na,
  m: e: 'Free', ran,
  g: e: 'Free' },
  },
  { id: 'under-50', na,
  m: e: 'Under $50', ran,
  g: e: '$0 - $50' },
  },
  { id: '50-200', na,
  m: e: '$50 - $200', ran,
  g: e: '$50 - $200' },
  },
  { id: '200-500', na,
  m: e: '$200 - $500', ran,
  g: e: '$200 - $500' },
  },
  { id: 'over-500', na,
  m: e: 'Over $500', ran,
  g: e: '$500+' },
  },
  ]
  const sortOptions = [
  { id: 'featured', na,
  m: e: 'Featured' },
  },
  { id: 'newest', na,
  m: e: 'Newest' },
  },
  { id: 'price-low', na,
  m: e: 'Pric,
  e: Low to High' },
  },
  { id: 'price-high', na,
  m: e: 'Pric,
  e: High to Low' },
  },
  { id: 'rating', na,
  m: e: 'Highest Rated' },
  },
  { id: 'popular', na,
  m: e: 'Most Popular' },
  },
  ]
  const products = [
  {
  id: 1,na,
  m: e: "AI Content Generator Pro",descripti,
  o: n: "Advanced AI-powered content creation tool that generates high-quality articles, blog posts, and marketing copy."
      longDescripti,
  o: n: "Transform your content creation process with our AI Content Generator Pro. This powerful tool uses advanced language models to create engaging, SEO-optimized content in seconds. Perfect for marketers, content creators, and businesses looking to scale their content production."
      catego,
  r: y: "ai-tools",pri,
  c: e: 99.99,originalPri,
  c: e: 149.99,curren,
  c: y: "USD",rati,
  n: g: 4.8,reviewCou,
  n: t: 1247,ima,
  g: e: "http,
  s://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=600",imag,
  e: s: [
  "htt,
  p: s://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=600"
        "htt,
  p: s: //images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600"
        "http,
  s: //images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=600"
],featur,
  e: s: [
  "AI-powered content generation"
        "SEO optimization"
        "Multiple content types"
        "Plagiarism-free content"
        "24/7 support"
]
      tag,
  s: ["AI", "Content Creation", "Marketing", "SEO", "Automation"]
      vend,
  o: r: "Zion Tech Group",vendorRati,
  n: g: 4.9,vendorVerifi,
  e: d: true,inSto,
  c: k: true,stockCou,
  n: t: 500,featur,
  e: d: true,n,
  e: w: false,discou,
  n: t: 33,deliveryTi,
  m: e: "Instant",deliveryTy,
  p: e: "Digital Download",warran,
  t: y: "30-day money-back guarantee",compatibili,
  t: y: ["Windows", "Mac", "Linux", "Web"]
      fileSi,
  z: e: "2.5 MB",versi,
  o: n: "2.1.0",lastUpdat,
  e: d: "2025-01-15"
},
  {
  id: 2,na,
  m: e: "Quantum Security Suite",descripti,
  o: n: "Next-generation cybersecurity solution powered by quantum-resistant algorithms and AI threat detection.",longDescripti,
  o: n: "Protect your digital assets with our Quantum Security Suite, featuring quantum-resistant encryption, AI-powered threat detection, and real-time monitoring. This comprehensive security solution is designed to protect against both current and future cyber threats."
      catego,
  r: y: "cybersecurity",pri,
  c: e: 299.99,originalPri,
  c: e: 399.99,curren,
  c: y: "USD",rati,
  n: g: 4.9,reviewCou,
  n: t: 892,ima,
  g: e: "http,
  s://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=600",imag,
  e: s: [
  "htt,
  p: s://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=600"
        "http,
  s: //images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&h=600"
],featur,
  e: s: [
  "Quantum-resistant encryption"
        "AI threat detection"
        "Real-time monitoring"
        "Automated response"
        "Compliance reporting"
]
      tag,
  s: ["Cybersecurity", "Quantum", "AI", "Encryption", "Monitoring"]
      vend,
  o: r: "Zion Tech Group",vendorRati,
  n: g: 4.9,vendorVerifi,
  e: d: true,inSto,
  c: k: true,stockCou,
  n: t: 200,featur,
  e: d: true,n,
  e: w: true,discou,
  n: t: 25,deliveryTi,
  m: e: "1-2 business days",deliveryTy,
  p: e: "Digital Download + Physical",warran,
  t: y: "1-year warranty",compatibili,
  t: y: ["Windows", "Mac", "Linux", "Enterprise"]
      fileSi,
  z: e: "45.2 MB",versi,
  o: n: "1.0.0",lastUpdat,
  e: d: "2025-01-10"
},
  {
  id: 3,na,
  m: e: "Cloud Infrastructure Manager",descripti,
  o: n: "Comprehensive cloud infrastructure management platform with automated scaling and cost optimization.",longDescripti,
  o: n: "Streamline your cloud operations with our Cloud Infrastructure Manager. This platform provides automated scaling, cost optimization, monitoring, and management tools for multi-cloud environments. Perfect for DevOps teams and cloud architects."
      catego,
  r: y: "cloud-services",pri,
  c: e: 199.99,originalPri,
  c: e: 249.99,curren,
  c: y: "USD",rati,
  n: g: 4.7,reviewCou,
  n: t: 567,ima,
  g: e: "http,
  s://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=600",imag,
  e: s: [
  "htt,
  p: s://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=600"
        "http,
  s: //images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600"
],featur,
  e: s: [
  "Multi-cloud management"
        "Automated scaling"
        "Cost optimization"
        "Real-time monitoring"
        "DevOps integration"
]
      tag,
  s: ["Cloud", "DevOps", "Infrastructure", "Automation", "Monitoring"]
      vend,
  o: r: "Zion Tech Group",vendorRati,
  n: g: 4.9,vendorVerifi,
  e: d: true,inSto,
  c: k: true,stockCou,
  n: t: 150,featur,
  e: d: false,n,
  e: w: false,discou,
  n: t: 20,deliveryTi,
  m: e: "Instant",deliveryTy,
  p: e: "Digital Download",warran,
  t: y: "90-day money-back guarantee",compatibili,
  t: y: ["AWS", "Azure", "GCP", "Kubernetes"]
      fileSi,
  z: e: "15.8 MB",versi,
  o: n: "3.2.1",lastUpdat,
  e: d: "2025-01-08"
},
  {
  id: 4,na,
  m: e: "Data Analytics Dashboard Pro",descripti,
  o: n: "Advanced business intelligence platform with real-time analytics, custom dashboards, and predictive insights."
      longDescripti,
  o: n: "Transform your data into actionable insights with our Data Analytics Dashboard Pro. This comprehensive BI platform offers real-time analytics, custom dashboards, predictive modeling, and advanced reporting capabilities for data-driven decision making."
      catego,
  r: y: "data-analytics",pri,
  c: e: 149.99,originalPri,
  c: e: 199.99,curren,
  c: y: "USD",rati,
  n: g: 4.6,reviewCou,
  n: t: 423,ima,
  g: e: "http,
  s://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600",imag,
  e: s: [
  "htt,
  p: s://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600"
        "http,
  s: //images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=600"
],featur,
  e: s: [
  "Real-time analytics"
        "Custom dashboards"
        "Predictive modeling"
        "Advanced reporting"
        "Data visualization"
]
      tag,
  s: ["Analytics", "BI", "Dashboard", "Predictive", "Visualization"]
      vend,
  o: r: "Zion Tech Group",vendorRati,
  n: g: 4.9,vendorVerifi,
  e: d: true,inSto,
  c: k: true,stockCou,
  n: t: 300,featur,
  e: d: false,n,
  e: w: false,discou,
  n: t: 25,deliveryTi,
  m: e: "Instant",deliveryTy,
  p: e: "Digital Download",warran,
  t: y: "60-day money-back guarantee",compatibili,
  t: y: ["Windows", "Mac", "Linux", "Web"]
      fileSi,
  z: e: "28.4 MB",versi,
  o: n: "2.5.3",lastUpdat,
  e: d: "2025-01-05"
},
  {
  id: 5,na,
  m: e: "IoT Edge Computing Platform",descripti,
  o: n: "Complete IoT solution with edge computing capabilities, real-time processing, and cloud integration."
      longDescripti,
  o: n: "Build and deploy IoT solutions with our Edge Computing Platform. This comprehensive platform provides edge computing capabilities, real-time data processing, cloud integration, and device management for industrial and commercial IoT applications."
      catego,
  r: y: "iot",pri,
  c: e: 399.99,originalPri,
  c: e: 499.99,curren,
  c: y: "USD",rati,
  n: g: 4.8,reviewCou,
  n: t: 234,ima,
  g: e: "http,
  s://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600",imag,
  e: s: [
  "htt,
  p: s://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600"
        "http,
  s: //images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=600"
],featur,
  e: s: [
  "Edge computing"
        "Real-time processing"
        "Cloud integration"
        "Device management"
        "Security protocols"
]
      tag,
  s: ["IoT", "Edge Computing", "Real-time", "Cloud", "Security"]
      vend,
  o: r: "Zion Tech Group",vendorRati,
  n: g: 4.9,vendorVerifi,
  e: d: true,inSto,
  c: k: true,stockCou,
  n: t: 100,featur,
  e: d: false,n,
  e: w: true,discou,
  n: t: 20,deliveryTi,
  m: e: "3-5 business days",deliveryTy,
  p: e: "Digital Download + Hardware",warran,
  t: y: "2-year warranty",compatibili,
  t: y: ["Linux", "ARM", "x86", "Custom Hardware"]
      fileSi,
  z: e: "156.7 MB",versi,
  o: n: "1.0.0",lastUpdat,
  e: d: "2025-01-12"
},
  {
  id: 6,na,
  m: e: "AI Development Toolkit",descripti,
  o: n: "Comprehensive toolkit for AI and machine learning development with pre-trained models and frameworks.",longDescripti,
  o: n: "Accelerate your AI development with our comprehensive toolkit. This package includes pre-trained models, development frameworks, documentation, and tools for building, training, and deploying machine learning models across various domains."
      catego,
  r: y: "development",pri,
  c: e: 79.99,originalPri,
  c: e: 99.99,curren,
  c: y: "USD",rati,
  n: g: 4.5,reviewCou,
  n: t: 678,ima,
  g: e: "http,
  s://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=600",imag,
  e: s: [
  "htt,
  p: s://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=600"
        "http,
  s: //images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600"
],featur,
  e: s: [
  "Pre-trained models"
        "Development frameworks"
        "Documentation"
        "Example projects"
        "Community support"
]
      tag,
  s: ["AI", "Machine Learning", "Development", "Frameworks", "Models"]
      vend,
  o: r: "Zion Tech Group",vendorRati,
  n: g: 4.9,vendorVerifi,
  e: d: true,inSto,
  c: k: true,stockCou,
  n: t: 1000,featur,
  e: d: false,n,
  e: w: false,discou,
  n: t: 20,deliveryTi,
  m: e: "Instant",deliveryTy,
  p: e: "Digital Download",warran,
  t: y: "30-day money-back guarantee",compatibili,
  t: y: ["Python", "TensorFlow", "PyTorch", "Jupyter"]
      fileSi,
  z: e: "2.1 GB",versi,
  o: n: "4.1.2",lastUpdat,
  e: d: "2025-01-03"
},
  ]
  const filteredProducts = products.filter(product () => {
  const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'free' && product.price === 0) ||
                        (selectedPriceRange === 'under-50' && product.price < 50) ||
                        (selectedPriceRange === '50-200' && product.price >= 50 && product.price <= 200) ||
                        (selectedPriceRange === '200-500' && product.price > 200 && product.price <= 500) ||
                        (selectedPriceRange === 'over-500' && product.price > 500)
    
    return matchesSearch && matchesCategory && matchesPrice;
})

  const sortedProducts = [...filteredProducts].sort((a, b) () => {
  switch (sortBy) {
  case 'newest':
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
        return b.reviewCount - a.reviewCount,
  defaul: t: return b.featured ? 1 : -1;
},
  })
  const formatPrice = (pri,
  c: e: number, curren,
  c: y: string) () => {
  return new Intl.NumberFormat('en-US', {
  sty,
  l: e: 'currency',curren,
  c: y: currency;
}).format(price)
  }

  const renderStars = (rati,
  n: g: number) () => {
  return Array.from({ lengt,
  h: 5 }, (_, i) => (
  <Star;
        key={i},
  }
        className={`w-4 h-4 ${
  i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : i < rating;
              ? 'text-yellow-400 fill-current opacity-50' 
              : 'text-gray-400'
}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO;
        title="Marketplace Products - Zion Tech Group"
        description="Discover innovative technology products in our marketplace. From AI tools to cybersecurity solutions, find the perfect products for your business needs."
      />
      
      {/* Hero Section */},
  }
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.h1;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-5xl,
  m: d: text-7xl font-bold text-white mb-6";"
          >
            Marketplace <span className="text-zion-cyan">Products</span>
          </motion.h1>
          <motion.p;
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6, del,
  a: y: 0.2 },
  }
            className="className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto";"
          >
            Discover cutting-edge technology products, software solutions, and tools;
            designed to accelerate your business growth and innovation.
          </motion.p>
        </div>
      </section>

      {/* Search and Filters */},
  }
      <section className="py-8 bg-zion-slate-dark border-b border-zion-slate-light/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col,
  l: g:flex-row gap-6 items-center justify-between">
            {/* Search */},
  }
            <div className="relative w-full,
  l: g:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input;
                type="text"
                placeholder="Search products..."
                value={searchQuery},
  }
                onChange={(e) => setSearchQuery(e.target.value)},
  }
                className="className="w-full pl-10 pr-4 py-3 bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light,
  focu: s: outline-none,
  focu: s:border-zion-cyan,
  focu: s:ring-2 focu,
  s:ring-zion-cyan/20 transition-all duration-200";"
              />
            </div>

            {/* Controls */},
  }
            <div className="flex flex-wrap gap-4 items-center">
              {/* View Mode Toggle */},
  }
              <div className="flex bg-zion-slate-light/10 rounded-lg p-1 border border-zion-slate-light/20">
                <button;
                  onClick={onClick={() => setViewMode('grid')},
  },
  }
                  className={`p-2 rounded-md transition-all duration-200 ${
  viewMode === 'grid'
                      ? 'bg-zion-cyan text-white'
                      : 'text-zion-slate-light,
  hove: r:text-white'
}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button;
                  onClick={onClick={() => setViewMode('list')},
  },
  }
                  className={`p-2 rounded-md transition-all duration-200 ${
  viewMode === 'list'
                      ? 'bg-zion-cyan text-white'
                      : 'text-zion-slate-light,
  hove: r:text-white'
}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort */},
  }
              <select;
                value={sortBy},
  }
                onChange={(e) => setSortBy(e.target.value)},
  }
                className="className="bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg px-3 py-2 text-white,
  focu: s: outline-none focu,
  s:border-zion-cyan";"
              >
                {sortOptions.map((option) => (
  <option key={option.id} value={option.id}>
                    {option.name},
  }
                  </option>
                ))}
              </select>

              {/* Filters Toggle */},
  }
              <button;
                onClick={onClick={() => setShowFilters(!showFilters)},
  },
  }
                className="className="flex items-center gap-2 px-4 py-2 bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30 rounded-lg,
  hove: r:bg-zion-cyan/30 transition-all duration-200";"
              >
                <Filter className="w-4 h-4" />
                Filters;
                {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />},
  }
              </button>
            </div>
          </div>

          {/* Expanded Filters */},
  },
  {showFilters && (
  <motion.div;
              initial={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
              animate={ opaci,
  t: y: 1, heig,
  h: t: 'auto' },
  }
              exit={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
              transition={ durati,
  o: n: 0.3 },
  }
              className="className="mt-6 pt-6 border-t border-zion-slate-light/20";"
            >
              <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
                {/* Category Filter */},
  }
                <div>
                  <label className="block text-white font-medium mb-2">Category</label>
                  <select;
                    value={selectedCategory},
  }
                    onChange={(e) => setSelectedCategory(e.target.value)},
  }
                    className="className="w-full bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg px-3 py-2 text-white,
  focu: s: outline-none focu,
  s:border-zion-cyan";"
                  >
                    {categories.map((category) => (
  <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */},
  }
                <div>
                  <label className="block text-white font-medium mb-2">Price Range</label>
                  <select;
                    value={selectedPriceRange},
  }
                    onChange={(e) => setSelectedPriceRange(e.target.value)},
  }
                    className="className="w-full bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg px-3 py-2 text-white,
  focu: s: outline-none focu,
  s:border-zion-cyan";"
                  >
                    {priceRanges.map((range) => (
  <option key={range.id} value={range.id}>
                        {range.name},
  }
                      </option>
                    ))}
                  </select>
                </div>

                {/* Clear Filters */},
  }
                <div className="flex items-end">
                  <button;
                    onClick={() () => {
                      setSelectedCategory('all')
                      setSelectedPriceRange('all')
                      setSearchQuery('')
                    },
  }
                    className="className="w-full px-4 py-2 bg-zion-slate-light/20 text-zion-slate-light border border-zion-slate-light/30 rounded-lg,
  hove: r: bg-zion-slate-light/30 hove,
  r:text-white transition-all duration-200";"
                  >
                    Clear All Filters;
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Results Summary */},
  }
      <section className="py-4 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-zion-slate-light">
            <span>Showing {sortedProducts.length} of {products.length} products</span>
            <span>Sort,
  b: y: {sortOptions.find(opt => opt.id === sortBy)?.name}</span>
          </div>
        </div>
      </section>

      {/* Products Grid/List */},
  }
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          {sortedProducts.length === 0 ? (
  <div className="text-center py-16">
              <Package className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
              <p className="text-zion-slate-light">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
  <div className={viewMode === 'grid' ? 'grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8' : 'space-y-6'}>
              {sortedProducts.map((product, index) => (
  <motion.article;
                  key={product.id},
  }
                  initial={ opaci,
  t: y: 0, y: 20 },
  }
                  whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                  className={`bg-gradient-to-br from-zion-slate-dark/50 to-zion-blue/10 backdrop-blur-sm rounded-xl overflow-hidden border border-zion-cyan/20,
  hove: r: border-zion-cyan/40 transition-all duration-300 hove,
  r:scale-105 group ${
  viewMode === 'list' ? 'flex' : ''
}`}
                >
                  {/* Product Image */},
  }
                  <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                    <img;
                      src={product.image} 
                      alt={product.name},
  }
                      className={`w-full object-cover group-hov,
  e: r:scale-105 transition-transform duration-300 ${
  viewMode === 'list' ? 'h-full' : 'h-48'
}`}
                    />
                    {product.featured && (
  <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full">
                          <Star className="w-3 h-3 mr-1" />
                          Featured;
                        </span>
                      </div>
                    )},
  {product.new && (
  <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                          <Sparkles className="w-3 h-3 mr-1" />
                          New;
                        </span>
                      </div>
                    )},
  {product.discount > 0 && (
  <div className="absolute bottom-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                          -{product.discount}%
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Product Content */},
  }
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    {/* Category and Vendor */},
  }
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                        {categories.find(cat => cat.id === product.category)?.name},
  }
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-zion-slate-light text-sm">{product.vendor}</span>
                        {product.vendorVerified && (
  <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        )}
                      </div>
                    </div>
                    
                    {/* Product Name */},
  }
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hov,
  e: r:text-zion-cyan transition-colors duration-200">
                      {product.name},
  }
                    </h3>
                    
                    {/* Rating */},
  }
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {renderStars(product.rating)},
  }
                      </div>
                      <span className="text-zion-slate-light text-sm">
                        {product.rating} ({product.reviewCount} reviews)
                      </span>
                    </div>
                    
                    {/* Description */},
  }
                    <p className="text-zion-slate-light mb-4 leading-relaxed">
                      {product.description},
  }
                    </p>
                    
                    {/* Features */},
  }
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.features.slice(0, 3).map((feature) => (
  <span key={feature} className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded">
                            {feature},
  }
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Price and Actions */},
  }
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-white">
                        {product.discount > 0 ? (
  <div>
                            <span className="text-zion-cyan">{formatPrice(product.price, product.currency)}</span>
                            <span className="text-zion-slate-light text-lg line-through ml-2">
                              {formatPrice(product.originalPrice, product.currency)},
  }
                            </span>
                          </div>
                        ) : (
  formatPrice(product.price, product.currency)
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-zion-slate-light,
  hove: r: text-zion-cyan transition-colors duration-200">
                          <Heart className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-zion-slate-light hove,
  r:text-zion-cyan transition-colors duration-200">
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Tags */},
  }
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tags.slice(0, 3).map((tag) => (
  <span key={tag} className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded">
                          {tag},
  }
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */},
  }
                    <div className="flex gap-3">
                      <button className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-medium rounded-lg,
  hove: r: from-zion-cyan/80,
  hove: r:to-zion-purple/80 transition-all duration-300 group-hov,
  e: r:scale-105">
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Add to Cart;
                      </button>
                      <button className="inline-flex items-center justify-center px-4 py-3 border border-zion-cyan text-zion-cyan font-medium rounded-lg,
  hove: r:bg-zion-cyan hove,
  r:text-white transition-all duration-300">
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */},
  }
      <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="max-w-2xl mx-auto";"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-zion-slate-light mb-8">
              We're constantly adding new products and solutions. Contact us to discuss;
              custom solutions or request specific products for your business needs.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <a;
                href="/contact"
                className="className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg,
  hove: r:from-zion-cyan/80,
  hove: r:to-zion-purple/80 transition-all duration-300,
  hove: r:scale-105";"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us;
              </a>
              <a;
                href="/services"
                className="className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg,
  hove: r:bg-zion-cyan hove,
  r:text-white transition-all duration-300";"
              >
                <Settings className="w-5 h-5 mr-2" />
                Custom Solutions;
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
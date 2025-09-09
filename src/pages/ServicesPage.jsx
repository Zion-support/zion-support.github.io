import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Search, Filter, Star, Clock, Zap, Shield, Cloud, Brain, Code, Database, Smartphone, Cpu, Lock, TrendingUp, Users, Award } from "lucide-react";
import { useEffect, useState } from "react";
import { SEO } from "@/components/SEO";
import { INNOVATIVE_MICRO_SAAS_SERVICES_2027 } from "@/data/innovativeMicroSaasServices2027";
import { motion } from "framer-motion";

// Service categories with icons and descriptions
const SERVICE_CATEGORIES = [
  {
    id: "ai-services",
    name: "AI & Machine Learning",
    icon: Brain,
    description: "Advanced AI solutions and machine learning models",
    color: "from-purple-500 to-pink-500",
    count: 12
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    icon: Shield,
    description: "Threat detection and security solutions",
    color: "from-red-500 to-orange-500",
    count: 8
  },
  {
    id: "cloud-services",
    name: "Cloud Services",
    icon: Cloud,
    description: "DevOps and infrastructure solutions",
    color: "from-blue-500 to-cyan-500",
    count: 10
  },
  {
    id: "web-development",
    name: "Web Development",
    icon: Code,
    description: "Modern web applications and platforms",
    color: "from-green-500 to-emerald-500",
    count: 15
  },
  {
    id: "data-analytics",
    name: "Data Analytics",
    icon: Database,
    description: "Business intelligence and analytics",
    color: "from-indigo-500 to-purple-500",
    count: 9
  },
  {
    id: "mobile-apps",
    name: "Mobile Apps",
    icon: Smartphone,
    description: "iOS and Android development",
    color: "from-yellow-500 to-orange-500",
    count: 7
  },
  {
    id: "iot-solutions",
    name: "IoT Solutions",
    icon: Cpu,
    description: "Connected devices and edge computing",
    color: "from-teal-500 to-blue-500",
    count: 6
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    icon: Zap,
    description: "Strategic IT consulting and transformation",
    color: "from-pink-500 to-red-500",
    count: 11
  }
];

// Featured services showcase
const FEATURED_SERVICES = [
  {
    id: "ai-business-intelligence-platform",
    title: "Zion AI Business Intelligence Platform",
    description: "Next-generation AI-powered business intelligence platform that transforms raw data into actionable insights.",
    price: "$299/month",
    rating: 4.9,
    reviewCount: 234,
    category: "AI Services",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500",
    featured: true
  },
  {
    id: "ai-cybersecurity-suite",
    title: "Zion AI Cybersecurity Suite",
    description: "Advanced AI-powered cybersecurity platform with real-time threat detection and automated incident response.",
    price: "$199/month",
    rating: 4.9,
    reviewCount: 156,
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500",
    featured: true
  },
  {
    id: "cloud-infrastructure-automation",
    title: "Zion Cloud Infrastructure Automation",
    description: "Intelligent cloud infrastructure management platform that automates deployment, scaling, and monitoring.",
    price: "$399/month",
    rating: 4.8,
    reviewCount: 203,
    category: "Cloud Services",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500",
    featured: true
  }
];

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");

  // Filter and sort services
  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2027.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return new Date(b.createdAt) - new Date(a.createdAt);
      default:
        return b.featured ? 1 : -1;
    }
  });

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="Services - Zion Tech Group"
        description="Discover our comprehensive range of AI services, micro SAAS solutions, cybersecurity, cloud services, and innovative technology solutions."
        keywords="AI services, micro SAAS, cybersecurity, cloud services, web development, data analytics, mobile apps, IoT solutions"
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark opacity-90"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="section-title mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Innovative Technology Services
            </motion.h1>
            <motion.p 
              className="section-subtitle mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover our comprehensive range of AI-powered solutions, micro SAAS services, and cutting-edge technology services designed to transform your business.
            </motion.p>
            
            {/* Search and Filters */}
            <motion.div 
              className="max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search services, features, or use cases..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 focus:outline-none transition-all duration-300 text-lg"
                />
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">50+</div>
                <div className="text-sm text-zion-slate-light">Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-purple mb-2">1000+</div>
                <div className="text-sm text-zion-slate-light">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-blue mb-2">99.9%</div>
                <div className="text-sm text-zion-slate-light">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
                <div className="text-sm text-zion-slate-light">Support</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 lg:py-24">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore Our Service Categories</h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From AI and machine learning to cybersecurity and cloud services, we offer comprehensive solutions across all major technology domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.id}
                  className="neon-card rounded-xl p-6 text-center cursor-pointer hover:scale-105 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-sm text-zion-slate-light mb-3">{category.description}</p>
                  <div className="text-zion-cyan text-sm font-medium">{category.count} services</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 lg:py-24 bg-slate-800/20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Services</h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our most popular and highly-rated services that are transforming businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {FEATURED_SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                className="neon-card rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-zion-cyan text-black text-xs font-bold px-2 py-1 rounded-full">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-zion-cyan font-medium">{service.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-white">{service.rating}</span>
                      <span className="text-sm text-zion-slate-light">({service.reviewCount})</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-zion-cyan">{service.price}</span>
                    <Button className="btn-primary">
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-16 lg:py-24">
        <div className="container-responsive">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">All Services</h2>
              <p className="text-xl text-zion-slate-light">
                {filteredServices.length} services found
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-6 lg:mt-0">
              {/* View Mode Toggle */}
              <div className="flex bg-slate-800/50 rounded-lg p-1 border border-slate-700/50">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "grid" 
                      ? "bg-zion-cyan text-white" 
                      : "text-zion-slate-light hover:text-white"
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "list" 
                      ? "bg-zion-cyan text-white" 
                      : "text-zion-slate-light hover:text-white"
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Services Grid */}
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1"
          }`}>
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                className={`neon-card rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300 ${
                  viewMode === "list" ? "flex flex-col lg:flex-row" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`relative overflow-hidden ${
                  viewMode === "list" ? "lg:w-1/3 h-48 lg:h-auto" : "h-48"
                }`}>
                  <img 
                    src={service.images[0] || "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {service.featured && (
                    <div className="absolute top-4 right-4 bg-zion-cyan text-black text-xs font-bold px-2 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className={`p-6 flex-1 ${
                  viewMode === "list" ? "lg:w-2/3" : ""
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-zion-cyan font-medium">{service.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-white">{service.rating}</span>
                      <span className="text-sm text-zion-slate-light">({service.reviewCount})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-slate-700/50 text-zion-slate-light text-xs rounded-full border border-slate-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-zion-cyan">
                        ${service.price}
                      </span>
                      <span className="text-sm text-zion-slate-light ml-1">/{service.pricingModel}</span>
                    </div>
                    <Button className="btn-primary">
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {sortedServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search criteria or browse all categories
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="btn-primary"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container-responsive text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let our team of experts help you choose the perfect services and create a customized solution that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary text-lg px-8 py-4">
              Get Started Today
            </Button>
            <Button className="btn-secondary text-lg px-8 py-4">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

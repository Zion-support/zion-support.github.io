import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Star, Clock, Users, TrendingUp, Shield, Brain, Zap, Heart, DollarSign, BookOpen, Briefcase } from "lucide-react";
import { SEO } from "@/components/SEO";
import { ENHANCED_SERVICES_2025, EnhancedService2025 } from "../data/enhanced-services-2025";

const categoryIcons: Record<string, React.ReactNode> = {
  "AI & Autonomous Systems": <Brain className="h-6 w-6" />,
  "Quantum Computing": <Zap className="h-6 w-6" />,
  "Cybersecurity": <Shield className="h-6 w-6" />,
  "Edge Computing & IoT": <Globe className="h-6 w-6" />,
  "Healthcare AI": <Heart className="h-6 w-6" />,
  "Financial AI": <DollarSign className="h-6 w-6" />,
  "Legal AI": <BookOpen className="h-6 w-6" />,
  "Marketing AI": <TrendingUp className="h-6 w-6" />,
  "Supply Chain AI": <Briefcase className="h-6 w-6" />,
  "Education AI": <Users className="h-6 w-6" />
};

const categoryColors: Record<string, string> = {
  "AI & Autonomous Systems": "from-purple-600 to-indigo-700",
  "Quantum Computing": "from-blue-600 to-cyan-700",
  "Cybersecurity": "from-red-600 to-pink-700",
  "Edge Computing & IoT": "from-green-600 to-emerald-700",
  "Healthcare AI": "from-pink-600 to-rose-700",
  "Financial AI": "from-yellow-600 to-orange-700",
  "Legal AI": "from-indigo-600 to-purple-700",
  "Marketing AI": "from-cyan-600 to-blue-700",
  "Supply Chain AI": "from-emerald-600 to-teal-700",
  "Education AI": "from-orange-600 to-red-700"
};

export default function EnhancedServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("rating");

  const categories = ["All", ...Array.from(new Set(ENHANCED_SERVICES_2025.map(service => service.category)))];

  const filteredServices = ENHANCED_SERVICES_2025.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "price":
        return a.price - b.price;
      case "aiScore":
        return b.aiScore - a.aiScore;
      case "reviewCount":
        return b.reviewCount - a.reviewCount;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      <SEO 
        title="2025 Enhanced Services Showcase - Zion Tech Group" 
        description="Discover our comprehensive suite of AI-powered, quantum computing, and cutting-edge technology services for 2025. Transform your business with Zion Tech Group's innovative solutions." 
        keywords="AI services, quantum computing, cybersecurity, edge computing, healthcare AI, financial AI, legal AI, marketing AI, supply chain AI, education AI, Zion Tech Group" 
        url="https://ziontechgroup.com/enhanced-services-2025"
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            2025 Enhanced Services Showcase
          </h1>
          <p className="text-xl md:text-2xl text-zion-cyan max-w-4xl mx-auto mb-8">
            Discover our comprehensive suite of AI-powered, quantum computing, and cutting-edge technology services designed to transform your business in 2025 and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg">
                Get Started Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-zion-blue-dark py-4 px-4 border-b border-zion-blue-light">
        <div className="container mx-auto text-center text-white">
          <p className="text-lg">
            <strong>Contact Us:</strong> Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com | 
            Address: 364 E Main St STE 1008 Middletown DE 19709
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-zinc-800 py-6 px-4 border-b border-zinc-700">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-zion-purple text-white"
                      : "bg-zinc-700 text-zinc-300 hover:bg-zinc-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="flex gap-4 items-center">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 bg-zinc-700 text-white rounded-lg border border-zinc-600 focus:border-zion-purple focus:outline-none"
              />
              
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-zinc-700 text-white rounded-lg border border-zinc-600 focus:border-zion-purple focus:outline-none"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="aiScore">Sort by AI Score</option>
                <option value="reviewCount">Sort by Reviews</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sortedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto">
            Join hundreds of companies already leveraging our cutting-edge AI and technology services to gain competitive advantages and drive innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg">
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service }: { service: EnhancedService2025 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-zinc-200 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Header */}
      <div className={`bg-gradient-to-r ${categoryColors[service.category]} p-6 text-white`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {categoryIcons[service.category]}
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
              {service.category}
            </span>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">${service.price.toLocaleString()}</div>
            <div className="text-sm opacity-90">per month</div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-sm opacity-90 line-clamp-2">{service.description}</p>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="font-medium">{service.rating}</span>
            <span className="text-zinc-500 text-sm">({service.reviewCount})</span>
          </div>
          <div className="flex items-center gap-1">
            <Brain className="h-4 w-4 text-purple-500" />
            <span className="font-medium">{service.aiScore}</span>
            <span className="text-zinc-500 text-sm">AI Score</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-zinc-100 text-zinc-700 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Features Preview */}
        <div className="mb-4">
          <h4 className="font-semibold text-zinc-800 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-zinc-600 flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-zion-purple rounded-full mt-2 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Expandable Details */}
        {isExpanded && (
          <div className="border-t border-zinc-200 pt-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-semibold text-zinc-800 mb-2">Use Cases:</h5>
                <ul className="space-y-1 text-zinc-600">
                  {service.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-zinc-800 mb-2">Integrations:</h5>
                <ul className="space-y-1 text-zinc-600">
                  {service.integrations.slice(0, 3).map((integration, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                      {integration}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-zinc-50 rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-zinc-500">Trial:</span>
                  <span className="ml-2 font-medium">{service.trialDays} days</span>
                </div>
                <div>
                  <span className="text-zinc-500">Setup:</span>
                  <span className="ml-2 font-medium">{service.setupTime}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 mt-4">
          <Button 
            onClick={() => setIsExpanded(!isExpanded)}
            variant="outline" 
            className="flex-1 border-zinc-300 text-zinc-700 hover:bg-zinc-50"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </Button>
          <Link to="/contact" className="flex-1">
            <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
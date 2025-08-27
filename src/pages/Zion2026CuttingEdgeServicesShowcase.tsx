import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  Truck, 
  TrendingUp, 
  Users, 
  Globe, 
  Rocket,
  Cpu,
  Database,
  Target,
  Star,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Grid,
  List,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import zion2026CuttingEdgeMicroSaasServices from '../../data/zion-2026-cutting-edge-micro-saas-services';
import zion2026AdvancedAIAutomationServices from '../../data/zion-2026-advanced-ai-automation-services';
import zion2026EmergingTechnologyServices from '../../data/zion-2026-emerging-technology-services';

interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

export default function Zion2026CuttingEdgeServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // Combine all services
  const allServices: Service[] = [
    ...zion2026CuttingEdgeMicroSaasServices,
    ...zion2026AdvancedAIAutomationServices,
    ...zion2026EmergingTechnologyServices
  ];

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter services based on category and search
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Business Intelligence': return <Brain className="w-5 h-5" />;
      case 'Cybersecurity & Quantum Computing': return <Shield className="w-5 h-5" />;
      case 'DevOps & Automation': return <Zap className="w-5 h-5" />;
      case 'Supply Chain & Logistics': return <Truck className="w-5 h-5" />;
      case 'Financial Technology & Quantum Computing': return <TrendingUp className="w-5 h-5" />;
      case 'Healthcare & AI': return <Users className="w-5 h-5" />;
      case 'Manufacturing & Industrial AI': return <Cpu className="w-5 h-5" />;
      case 'Edge Computing & Quantum Technology': return <Globe className="w-5 h-5" />;
      case 'Legal Technology & AI': return <Database className="w-5 h-5" />;
      case 'Content Marketing & AI': return <Target className="w-5 h-5" />;
      case 'Customer Success & AI': return <Users className="w-5 h-5" />;
      case 'HR & Recruitment': return <Users className="w-5 h-5" />;
      case 'Sales & AI': return <TrendingUp className="w-5 h-5" />;
      case 'Research & Development': return <Brain className="w-5 h-5" />;
      case 'Quality Assurance & Testing': return <CheckCircle className="w-5 h-5" />;
      case 'Compliance & Governance': return <Shield className="w-5 h-5" />;
      case 'Energy & Sustainability': return <Zap className="w-5 h-5" />;
      case 'Transportation & Logistics': return <Truck className="w-5 h-5" />;
      case 'Blockchain & Web3': return <Globe className="w-5 h-5" />;
      case 'Metaverse & Virtual Reality': return <Globe className="w-5 h-5" />;
      case 'IoT & Edge Computing': return <Cpu className="w-5 h-5" />;
      case 'Space Technology & AI': return <Rocket className="w-5 h-5" />;
      case 'Neural Networks & BCI': return <Brain className="w-5 h-5" />;
      case 'Biotechnology & Synthetic Biology': return <Database className="w-5 h-5" />;
      case 'Climate Technology & Environmental AI': return <Globe className="w-5 h-5" />;
      case 'Robotics & Automation': return <Cpu className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  return (
    <>
      <SEO 
        title="Zion 2026 Cutting-Edge Micro SAAS Services - Zion Tech Group"
        description="Discover our revolutionary collection of cutting-edge micro SAAS solutions including AI, Quantum Computing, Blockchain, IoT, Space Technology, and more. Transform your business with innovative technology services."
        canonical="/zion-2026-cutting-edge-services"
        url="https://ziontechgroup.com/zion-2026-cutting-edge-services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Zion 2026
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Cutting-Edge Services
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto"
            >
              Revolutionary micro SAAS solutions powered by AI, Quantum Computing, and emerging technologies. 
              Transform your business with autonomous operations and intelligent optimization.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center gap-2 text-zion-cyan">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">30+ Cutting-Edge Services</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Star className="w-5 h-5" />
                <span className="text-sm font-medium">4.9/5 Customer Rating</span>
              </div>
              <div className="flex items-center gap-2 text-zion-cyan">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">1000%+ Average ROI</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border-y border-zion-cyan/20 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6 text-zion-slate-light">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <span>364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-zion-slate-light">Visit our website:</span>
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center gap-1"
                >
                  ziontechgroup.com
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-zion-slate-light" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-zion-cyan text-white' 
                      : 'bg-zinc-800 text-zion-slate-light hover:bg-zinc-700'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-zion-cyan text-white' 
                      : 'bg-zinc-800 text-zion-slate-light hover:bg-zinc-700'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                {filteredServices.length} Revolutionary Services
              </h2>
              <p className="text-zion-slate-light">
                Discover cutting-edge solutions that combine AI, Quantum Computing, and emerging technologies
              </p>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredServices.map((service) => (
                  <ServiceListCard key={service.id} service={service} />
                ))}
              </div>
            )}

            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-zion-slate-light text-lg mb-4">
                  No services found matching your criteria
                </div>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border-t border-zion-cyan/20 py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of businesses already leveraging our cutting-edge AI and quantum computing solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-zinc-700 transition-all border border-zinc-700"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// Service Card Component
function ServiceCard({ service }: { service: Service }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
    >
      {/* Popular Badge */}
      {service.popular && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-xs font-semibold px-3 py-1 rounded-full">
            Popular
          </span>
        </div>
      )}

      {/* Service Icon */}
      <div className="p-6 pb-4">
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
          {service.name}
        </h3>
        <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">
          {service.tagline}
        </p>
      </div>

      {/* Price */}
      <div className="px-6 pb-4">
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-bold text-white">{service.price}</span>
          <span className="text-zion-slate-light">{service.period}</span>
        </div>
      </div>

      {/* Features */}
      <div className="px-6 pb-4">
        <div className="space-y-2">
          {service.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
              <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
              <span className="line-clamp-1">{feature}</span>
            </div>
          ))}
          {service.features.length > 3 && (
            <div className="text-xs text-zion-slate-light">
              +{service.features.length - 3} more features
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-zinc-700 bg-zinc-800/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm text-white">{service.rating}</span>
            </div>
            <span className="text-xs text-zion-slate-light">({service.reviews})</span>
          </div>
          <a
            href={service.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center gap-1"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Hover Overlay */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 to-zion-purple/10 border-2 border-zion-cyan/30 rounded-xl"
        />
      )}
    </motion.div>
  );
}

// Service List Card Component
function ServiceListCard({ service }: { service: Service }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-zion-cyan/50 transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-3xl">{service.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-white">{service.name}</h3>
                {service.popular && (
                  <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-zion-slate-light mb-3">{service.tagline}</p>
              <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                <span>Category: {service.category}</span>
                <span>Setup: {service.setupTime}</span>
                <span>Trial: {service.trialDays} days</span>
              </div>
            </div>
          </div>
          
          <p className="text-zion-slate-light mb-4 line-clamp-2">{service.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-semibold text-white mb-2">Key Features</h4>
              <div className="space-y-1">
                {service.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                    <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {service.technology.slice(0, 6).map((tech, index) => (
                  <span key={index} className="bg-zinc-700 text-zion-slate-light text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-80 space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">{service.price}</div>
            <div className="text-zion-slate-light">{service.period}</div>
          </div>

          <div className="space-y-3">
            <div className="text-center">
              <div className="text-lg font-semibold text-white">{service.marketSize}</div>
              <div className="text-sm text-zion-slate-light">Market Size</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-green-400">{service.growthRate}</div>
              <div className="text-sm text-zion-slate-light">Growth Rate</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-zion-cyan">{service.roi.split(' ')[0]}</div>
              <div className="text-sm text-zion-slate-light">Average ROI</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-white">{service.rating}</span>
            </div>
            <span className="text-zion-slate-light">({service.reviews} reviews)</span>
          </div>

          <a
            href={service.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-center py-3 rounded-lg font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
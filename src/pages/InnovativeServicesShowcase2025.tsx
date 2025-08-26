import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Globe, 
  Database, 
  Cpu, 
  Zap, 
  Rocket, 
  Eye, 
  Network, 
  Atom,
  Search,
  Filter,
  Star,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { cuttingEdgeInnovativeServices } from '../../data/2025-cutting-edge-innovative-services-expansion';
import { specializedEnterpriseSolutions } from '../../data/2025-specialized-enterprise-solutions';

interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  category: string;
  marketSize: string;
  targetAudience: string;
  competitiveAdvantage: string;
  useCases: string[];
  integrations: string[];
  compliance: string[];
  website: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  trialDays: number;
  setupTime: string;
  competitors: string[];
  roi: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
  technology: string[];
  industryFocus: string[];
}

const InnovativeServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTechnology, setSelectedTechnology] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('rating');

  // Combine all services
  const allServices: Service[] = [
    ...cuttingEdgeInnovativeServices,
    ...specializedEnterpriseSolutions
  ];

  // Get unique categories and technologies
  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))];
  const technologies = ['all', ...Array.from(new Set(allServices.flatMap(s => s.technology)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesTechnology = selectedTechnology === 'all' || 
        service.technology.some(tech => tech === selectedTechnology);
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesTechnology && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', ''));
        case 'customers':
          return b.customers - a.customers;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Business Intelligence':
        return <Brain className="w-6 h-6" />;
      case 'Cybersecurity & Quantum Computing':
        return <Shield className="w-6 h-6" />;
      case 'Edge Computing & AI':
        return <Cpu className="w-6 h-6" />;
      case 'Blockchain & Supply Chain':
        return <Database className="w-6 h-6" />;
      case 'Healthcare & AI':
        return <Eye className="w-6 h-6" />;
      case 'Sustainability & Energy':
        return <Zap className="w-6 h-6" />;
      case 'Robotics & Automation':
        return <Rocket className="w-6 h-6" />;
      case 'Digital Twin & IoT':
        return <Globe className="w-6 h-6" />;
      case 'Quantum Computing & AI':
        return <Atom className="w-6 h-6" />;
      case 'Metaverse & Virtual Reality':
        return <Eye className="w-6 h-6" />;
      case 'Legal Technology & AI':
        return <Shield className="w-6 h-6" />;
      case 'Quantum Computing & Finance':
        return <TrendingUp className="w-6 h-6" />;
      case 'Space Technology & Aerospace':
        return <Rocket className="w-6 h-6" />;
      case 'Neuromorphic Computing & AI':
        return <Brain className="w-6 h-6" />;
      case 'Synthetic Biology & Biotechnology':
        return <Atom className="w-6 h-6" />;
      case 'Materials Science & AI':
        return <Database className="w-6 h-6" />;
      case 'Quantum Internet & Communication':
        return <Network className="w-6 h-6" />;
      default:
        return <Star className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI & Business Intelligence': 'from-blue-500 to-cyan-500',
      'Cybersecurity & Quantum Computing': 'from-red-500 to-pink-500',
      'Edge Computing & AI': 'from-green-500 to-emerald-500',
      'Blockchain & Supply Chain': 'from-purple-500 to-indigo-500',
      'Healthcare & AI': 'from-teal-500 to-cyan-500',
      'Sustainability & Energy': 'from-yellow-500 to-orange-500',
      'Robotics & Automation': 'from-gray-500 to-slate-500',
      'Digital Twin & IoT': 'from-indigo-500 to-purple-500',
      'Quantum Computing & AI': 'from-violet-500 to-purple-500',
      'Metaverse & Virtual Reality': 'from-pink-500 to-rose-500',
      'Legal Technology & AI': 'from-amber-500 to-yellow-500',
      'Quantum Computing & Finance': 'from-emerald-500 to-green-500',
      'Space Technology & Aerospace': 'from-sky-500 to-blue-500',
      'Neuromorphic Computing & AI': 'from-rose-500 to-pink-500',
      'Synthetic Biology & Biotechnology': 'from-lime-500 to-green-500',
      'Materials Science & AI': 'from-orange-500 to-red-500',
      'Quantum Internet & Communication': 'from-cyan-500 to-blue-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Innovative Services
              </span>
              <br />
              <span className="text-white">Showcase 2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover cutting-edge micro SAAS services, IT solutions, and AI innovations that are transforming industries worldwide. 
              From quantum computing to synthetic biology, we're pushing the boundaries of what's possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>20+ Revolutionary Services</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Cutting-Edge Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Proven ROI Results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-white">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Ready to Transform Your Business?</h3>
              <p className="text-blue-100">Get expert consultation and start your digital transformation journey today</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-slate-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Technology Filter */}
            <select
              value={selectedTechnology}
              onChange={(e) => setSelectedTechnology(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {technologies.map(tech => (
                <option key={tech} value={tech} className="bg-slate-800 text-white">
                  {tech === 'all' ? 'All Technologies' : tech}
                </option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="rating" className="bg-slate-800 text-white">Sort by Rating</option>
              <option value="price" className="bg-slate-800 text-white">Sort by Price</option>
              <option value="customers" className="bg-slate-800 text-white">Sort by Customers</option>
              <option value="name" className="bg-slate-800 text-white">Sort by Name</option>
            </select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            {filteredServices.length} Innovative Services Available
          </h2>
          <p className="text-gray-400">
            Filtered by {selectedCategory !== 'all' ? selectedCategory : 'all categories'} • {selectedTechnology !== 'all' ? selectedTechnology : 'all technologies'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)}`}>
                    {getCategoryIcon(service.category)}
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">{service.rating}</span>
                    <span className="text-xs text-gray-400">({service.reviews})</span>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-blue-200 text-sm mb-3">{service.tagline}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-white font-semibold">{service.customers.toLocaleString()}</div>
                    <div className="text-gray-400 text-xs">Customers</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-white font-semibold">{service.marketSize}</div>
                    <div className="text-gray-400 text-xs">Market Size</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="line-clamp-2">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-gray-500 mt-1">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="border-t border-white/20 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-gray-400">{service.period}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-green-400 font-semibold">{service.trialDays} days free</div>
                      <div className="text-xs text-gray-400">Setup: {service.setupTime}</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <a
                      href={service.website}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${service.contact.email}?subject=Inquiry about ${service.name}`}
                      className="px-4 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* ROI Highlight */}
                <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="text-sm text-green-400 font-semibold">Proven Results</div>
                  <div className="text-xs text-green-300">{service.roi}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedTechnology('all');
                setSearchTerm('');
              }}
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions. 
              Get in touch today to discuss your specific needs and discover how we can transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-2">+1 302 464 0950</p>
              <p className="text-sm text-gray-400">Available 24/7 for urgent inquiries</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-2">kleber@ziontechgroup.com</p>
              <p className="text-sm text-gray-400">We respond within 2 hours</p>
            </div>

            <div className="text-center">
              <div className="bg-green-600/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-2">364 E Main St STE 1008</p>
              <p className="text-sm text-gray-400">Middletown DE 19709</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://ziontechgroup.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Visit Our Website
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeServicesShowcase2025;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Cloud, 
  Rocket, 
  Target, 
  Users, 
  Code, 
  Network, 
  Database, 
  Lock, 
  BarChart3, 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  Building,
  Eye,
  Zap,
  Globe,
  ArrowRight,
  Search,
  Filter,
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  Video,
  Palette,
  Car,
  Plane,
  Leaf,
  Atom,
  Satellite,
  Microscope,
  Beaker,
  Lightbulb,
  ShieldCheck,
  UserCheck,
  FileText,
  Home,
  Stethoscope,
  Droplets,
  Sparkles
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES, NEW_INNOVATIVE_SERVICES } from '../data/comprehensiveServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES, NEW_INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';
import { EMERGING_TECHNOLOGY_SERVICES } from '../data/emergingTechnologyServices';

export default function ComprehensiveServicesShowcase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Combine all services
  const allServices = [
    ...COMPREHENSIVE_SERVICES,
    ...NEW_INNOVATIVE_SERVICES,
    ...INNOVATIVE_MICRO_SAAS_SERVICES,
    ...NEW_INNOVATIVE_MICRO_SAAS_SERVICES,
    ...EMERGING_TECHNOLOGY_SERVICES
  ];

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      
      let matchesPrice = true;
      if (selectedPriceRange === 'low') matchesPrice = service.price <= 500;
      else if (selectedPriceRange === 'medium') matchesPrice = service.price > 500 && service.price <= 2000;
      else if (selectedPriceRange === 'high') matchesPrice = service.price > 2000;
      
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'category') return a.category.localeCompare(b.category);
      return 0;
    });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Machine Learning': Brain,
      'Cybersecurity': Shield,
      'Cloud & Infrastructure': Cloud,
      'Blockchain & Web3': Network,
      'Internet of Things': Cpu,
      'Customer Experience': Users,
      'Supply Chain Management': ShoppingCart,
      'Human Resources': Users,
      'Financial Technology': DollarSign,
      'Legal Technology': FileText,
      'Real Estate Technology': Home,
      'Healthcare Technology': Stethoscope,
      'Energy Management': Zap,
      'Creative Design': Palette,
      'AI & Creative Technology': Video,
      'Autonomous Systems': Car,
      'AI & Education': BookOpen,
      'AI & Healthcare': Heart,
      'Quantum Computing': Atom,
      'Emerging Computing': Cpu,
      'Molecular Computing': Microscope,
      'Quantum Technology': Atom,
      'Biotechnology': Beaker,
      'Energy Technology': Zap,
      'Neurotechnology': Brain,
      'Space Technology': Satellite,
      'Materials Science': Microscope,
      'Climate Technology': Leaf,
      'Digital Technology': Sparkles
    };
    return iconMap[category] || Target;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Machine Learning': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-pink-500',
      'Cloud & Infrastructure': 'from-blue-500 to-indigo-500',
      'Blockchain & Web3': 'from-green-500 to-emerald-500',
      'Internet of Things': 'from-cyan-500 to-blue-500',
      'Customer Experience': 'from-orange-500 to-yellow-500',
      'Supply Chain Management': 'from-indigo-500 to-purple-500',
      'Human Resources': 'from-pink-500 to-rose-500',
      'Financial Technology': 'from-emerald-500 to-green-500',
      'Legal Technology': 'from-slate-500 to-gray-500',
      'Real Estate Technology': 'from-amber-500 to-orange-500',
      'Healthcare Technology': 'from-red-500 to-pink-500',
      'Energy Management': 'from-yellow-500 to-orange-500',
      'Creative Design': 'from-purple-500 to-indigo-500',
      'AI & Creative Technology': 'from-pink-500 to-purple-500',
      'Autonomous Systems': 'from-blue-500 to-cyan-500',
      'AI & Education': 'from-green-500 to-emerald-500',
      'AI & Healthcare': 'from-red-500 to-rose-500',
      'Quantum Computing': 'from-indigo-500 to-purple-500',
      'Emerging Computing': 'from-violet-500 to-purple-500',
      'Molecular Computing': 'from-emerald-500 to-teal-500',
      'Quantum Technology': 'from-blue-500 to-indigo-500',
      'Biotechnology': 'from-green-500 to-emerald-500',
      'Energy Technology': 'from-yellow-500 to-orange-500',
      'Neurotechnology': 'from-purple-500 to-pink-500',
      'Space Technology': 'from-slate-500 to-gray-500',
      'Materials Science': 'from-amber-500 to-yellow-500',
      'Climate Technology': 'from-emerald-500 to-green-500',
      'Digital Technology': 'from-cyan-500 to-blue-500'
    };
    return colorMap[category] || 'from-gray-500 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Comprehensive Technology Solutions
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Discover our extensive portfolio of innovative micro SAAS services, IT solutions, and AI-powered platforms designed to transform your business and drive digital innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">{allServices.length}+</div>
                <div className="text-sm">Services Available</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm">Support Available</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Prices</option>
              <option value="low">Under $500/month</option>
              <option value="medium">$500 - $2,000/month</option>
              <option value="high">Over $2,000/month</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="category">Sort by Category</option>
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${categoryColor} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="h-8 w-8" />
                    <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                      {service.supportLevel}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-white/90 line-clamp-2">{service.description}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">
                        ${service.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500">/{service.pricingModel}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Market: {service.marketPrice}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-gray-500">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <TrendingUp className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delivery & Support */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.estimatedDelivery}
                    </div>
                    <div className="flex items-center">
                      <ShieldCheck className="h-4 w-4 mr-1" />
                      {service.supportLevel}
                    </div>
                  </div>

                  {/* Contact & Action */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm text-gray-600">
                        <div>📞 {service.contactInfo.phone}</div>
                        <div>✉️ {service.contactInfo.email}</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link
                        to={`/services/${service.id}`}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                      >
                        Learn More
                      </Link>
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">No services found matching your criteria</div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-gray-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Our team of experts is ready to help you implement the perfect technology solution for your needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-300">ziontechgroup.com</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Our Address</h3>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709<br />
                United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Missing icon components
const BookOpen = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 19 7.5 19s3.332-.523 4.5-1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 19 16.5 19c-1.746 0-3.332-.523-4.5-1.253" />
  </svg>
);

const Phone = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
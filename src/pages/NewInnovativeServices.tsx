import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  Search, 
  Filter, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Zap,
  Brain,
  Shield,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Clock,
  DollarSign,
  TrendingUp,
  Users,
  Building,
  Globe2,
  Lock,
  Cloud,
  Server,
  Eye,
  Heart,
  Sparkles
} from 'lucide-react';
import { ADDITIONAL_INNOVATIVE_SERVICES } from '../data/additionalInnovativeServices';
import { SPECIALIZED_IT_SERVICES } from '../data/specializedITServices';

export default function NewInnovativeServices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  // Combine all services
  const allServices = [...ADDITIONAL_INNOVATIVE_SERVICES, ...SPECIALIZED_IT_SERVICES];

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter services based on search and filters
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (selectedPriceRange === 'low') matchesPrice = service.price <= 2000;
    else if (selectedPriceRange === 'medium') matchesPrice = service.price > 2000 && service.price <= 4000;
    else if (selectedPriceRange === 'high') matchesPrice = service.price > 4000;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Marketing': TrendingUp,
      'AI & Customer Service': Users,
      'AI & Financial Services': DollarSign,
      'AI & Supply Chain': Network,
      'AI & Healthcare': Heart,
      'AI & Legal Tech': Shield,
      'AI & Education': Lightbulb,
      'AI & Energy': Zap,
      'AI & Manufacturing': Building,
      'Cloud & DevOps': Cloud,
      'Cybersecurity': Lock,
      'Data & Analytics': Database,
      'Edge Computing & IoT': Cpu,
      'Integration & APIs': Code,
      'Digital Twin & Simulation': Eye,
      'Blockchain & Web3': Globe2,
      'Quantum Computing': Sparkles
    };
    return iconMap[category] || Target;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Marketing': 'from-pink-500 to-rose-600',
      'AI & Customer Service': 'from-blue-500 to-indigo-600',
      'AI & Financial Services': 'from-green-500 to-emerald-600',
      'AI & Supply Chain': 'from-purple-500 to-violet-600',
      'AI & Healthcare': 'from-red-500 to-pink-600',
      'AI & Legal Tech': 'from-yellow-500 to-orange-600',
      'AI & Education': 'from-cyan-500 to-blue-600',
      'AI & Energy': 'from-orange-500 to-red-600',
      'AI & Manufacturing': 'from-indigo-500 to-purple-600',
      'Cloud & DevOps': 'from-blue-500 to-cyan-600',
      'Cybersecurity': 'from-red-500 to-orange-600',
      'Data & Analytics': 'from-green-500 to-teal-600',
      'Edge Computing & IoT': 'from-purple-500 to-pink-600',
      'Integration & APIs': 'from-yellow-500 to-green-600',
      'Digital Twin & Simulation': 'from-indigo-500 to-blue-600',
      'Blockchain & Web3': 'from-emerald-500 to-green-600',
      'Quantum Computing': 'from-violet-500 to-purple-600'
    };
    return colorMap[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Innovative Services & Solutions - Zion Tech Group" 
        description="Discover our comprehensive portfolio of innovative AI-powered services, specialized IT solutions, and cutting-edge technology platforms designed to transform your business."
        keywords="AI services, innovative solutions, IT services, micro SAAS, technology platforms, digital transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com/innovative-services"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/90 to-zion-purple/90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Innovation Hub
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Innovative
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple-light">
              Services & Solutions
            </span>
            <span className="block text-3xl md:text-4xl text-zion-slate-light mt-4">
              Transforming Business Through Technology
            </span>
          </h1>
          
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
            Explore our comprehensive portfolio of AI-powered services, specialized IT solutions, 
            and cutting-edge technology platforms designed to accelerate your digital transformation 
            and drive business innovation.
          </p>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-zion-slate-light">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-2 text-zion-cyan" />
              <span>https://ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="all" className="bg-gray-800 text-white">All Prices</option>
                <option value="low" className="bg-gray-800 text-white">Under $2,000</option>
                <option value="medium" className="bg-gray-800 text-white">$2,000 - $4,000</option>
                <option value="high" className="bg-gray-800 text-white">Over $4,000</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              {filteredServices.length} Innovative Services Available
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Each service is designed with enterprise-grade features, comprehensive support, and rapid deployment capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const IconComponent = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <div
                  key={service.id}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Service Header */}
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${categoryColor} mr-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-xs text-zion-cyan font-medium uppercase tracking-wide">
                        {service.category}
                      </span>
                      <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-white mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30"
                        >
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-600/50 text-gray-300">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-white mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Contact */}
                  <div className="border-t border-gray-700/50 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-2xl font-bold text-white">
                        ${service.price.toLocaleString()}
                        <span className="text-sm text-gray-400 font-normal">/month</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        Market: {service.marketPrice}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>Delivery: {service.estimatedDelivery}</span>
                      <span>Support: {service.supportLevel}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <a
                        href={service.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 text-center"
                      >
                        Learn More
                      </a>
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
                      >
                        Contact
                      </a>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-4 pt-4 border-t border-gray-700/50">
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <div className="flex items-center">
                          <Phone className="w-3 h-3 mr-1" />
                          {service.contactInfo.phone}
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-3 h-3 mr-1" />
                          {service.contactInfo.email}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our team of experts is ready to help you implement the perfect solution for your business needs. 
            Get in touch today to start your digital transformation journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +1 302 464 0950
            </a>
            
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-2">Visit our website for more information:</p>
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-300"
            >
              https://ziontechgroup.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
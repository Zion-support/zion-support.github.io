import React, { useState } from 'react';
import { SEO } from '../../components/SEO';
import { 
  Rocket, 
  Brain, 
  Shield, 
  Heart, 
  Leaf, 
  Scale, 
  Link, 
  TrendingUp, 
  GraduationCap, 
  Drone,
  Star,
  Zap,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  DollarSign,
  Clock,
  Award
} from 'lucide-react';
import { INNOVATIVE_NEW_SERVICES, SPECIALIZED_SERVICE_CATEGORIES, MARKET_INSIGHTS } from '../../data/innovativeNewServices';

export default function InnovativeNewServices() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState<string>('all');

  const filteredServices = INNOVATIVE_NEW_SERVICES.filter(service => {
    const categoryMatch = selectedCategory === 'all' || service.category.includes(selectedCategory);
    const levelMatch = selectedInnovationLevel === 'all' || service.innovationLevel === selectedInnovationLevel;
    return categoryMatch && levelMatch;
  });

  const categories = ['all', ...Array.from(new Set(INNOVATIVE_NEW_SERVICES.map(s => s.category.split(' & ')[0])))];
  const innovationLevels = ['all', 'Advanced', 'Cutting-edge', 'Revolutionary', 'Breakthrough'];

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI': Brain,
      'Cybersecurity': Shield,
      'Healthcare': Heart,
      'IoT': Zap,
      'Legal': Scale,
      'Blockchain': Link,
      'FinTech': TrendingUp,
      'Education': GraduationCap,
      'Robotics': Drone,
      'Quantum': Star
    };
    
    for (const [key, icon] of Object.entries(iconMap)) {
      if (category.includes(key)) return icon;
    }
    return Rocket;
  };

  const getInnovationLevelColor = (level: string) => {
    const colorMap: { [key: string]: string } = {
      'Advanced': 'text-blue-500',
      'Cutting-edge': 'text-purple-500',
      'Revolutionary': 'text-orange-500',
      'Breakthrough': 'text-red-500'
    };
    return colorMap[level] || 'text-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Innovative New Services - Zion Tech Group" 
        description="Discover cutting-edge micro SAAS services, IT solutions, and AI innovations that will transform your business. Revolutionary technology at competitive prices."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Innovative New Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary micro SAAS solutions, cutting-edge IT services, and breakthrough AI innovations 
              designed to propel your business into the future
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <Rocket className="w-5 h-5 mr-2 text-cyan-400" />
                <span>500+ Billion Market</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                <span>25% Annual Growth</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                <span>Revolutionary Tech</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Insights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Market Insights & Competitive Advantages
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Total Addressable Market</h3>
              <p className="text-2xl font-bold text-cyan-400">{MARKET_INSIGHTS.totalAddressableMarket}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Growth Rate</h3>
              <p className="text-2xl font-bold text-green-400">{MARKET_INSIGHTS.growthRate}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Key Trends</h3>
              <p className="text-2xl font-bold text-purple-400">{MARKET_INSIGHTS.keyTrends.length}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Competitive Advantages</h3>
              <p className="text-2xl font-bold text-orange-400">{MARKET_INSIGHTS.competitiveAdvantages.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            {categories.map(category => (
              <option key={category} value={category} className="bg-gray-800 text-white">
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
          <select
            value={selectedInnovationLevel}
            onChange={(e) => setSelectedInnovationLevel(e.target.value)}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            {innovationLevels.map(level => (
              <option key={level} value={level} className="bg-gray-800 text-white">
                {level === 'all' ? 'All Innovation Levels' : level}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComponent = getCategoryIcon(service.category);
            return (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getInnovationLevelColor(service.innovationLevel)} bg-white/10`}>
                    {service.innovationLevel}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-400">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span>Market Price: {service.marketPrice}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Delivery: {service.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Target className="w-4 h-4 mr-2" />
                    <span>ROI: {service.roi}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-cyan-400">
                    ${service.price.toLocaleString()}
                    <span className="text-sm text-gray-400">/{service.pricingModel}</span>
                  </div>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Specialized Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Specialized Service Categories
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIALIZED_SERVICE_CATEGORIES.map((category, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
              <p className="text-gray-300 mb-4">{category.description}</p>
              <div className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300">
              Contact us today to learn more about our innovative services and how they can drive your success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-cyan-400 text-lg font-semibold">+1 302 464 0950</p>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-purple-400 text-lg font-semibold">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Quick response guaranteed</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-green-400 text-lg font-semibold">ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Explore our full portfolio</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">
              364 E Main St STE 1008, Middletown DE 19709
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Key Trends */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Key Market Trends
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MARKET_INSIGHTS.keyTrends.map((trend, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{trend}</h3>
              <p className="text-gray-400 text-sm">
                Driving innovation and creating new opportunities in the technology landscape
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
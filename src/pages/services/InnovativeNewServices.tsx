import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Shield, 
  Scale, 
  Leaf, 
  Heart, 
  Cpu, 
  DollarSign, 
  Atom, 
  Truck, 
  Globe,
  Zap,
  TrendingUp,
  Users,
  Target,
  Award,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { INNOVATIVE_NEW_SERVICES } from '../../data/innovativeNewServices';

  Truck, 
  Award,
  Clock
} from 'lucide-react';
import { INNOVATIVE_NEW_SERVICES } from '../../data/innovativeNewServices';
      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Revolutionary Services Portfolio
          </h2>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
            Explore our comprehensive suite of innovative services designed to give your business a competitive edge in the digital age
          </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INNOVATIVE_NEW_SERVICES.map((service) => {
            const IconComponent = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <div key={service.id} className="group relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColor}`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-cyan">
                        {service.currency}{service.price}
                      </div>
                      <div className="text-sm text-zion-cyan/70">
                        per {service.pricingModel}
                      </div>
                    </div>
                  </div>

                  {/* Service Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-cyan/80 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-white/80">
                          <Zap className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm text-white/80">
                          <Target className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="mb-4 p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-cyan/70">Market Price:</span>
                      <span className="text-white font-semibold">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-1">
                      <span className="text-zion-cyan/70">Support Level:</span>
                      <span className="text-green-400 font-semibold">{service.supportLevel}</span>
                    </div>
                  </div>

                  {/* Delivery Time */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zion-cyan/70">Delivery Time:</span>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-xs text-yellow-400 font-semibold">
                          {service.estimatedDelivery}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-blue hover:to-zion-cyan text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 flex items-center justify-center"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Get Started
                    </a>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-4 text-center">
                    <div className="text-xs text-zion-cyan/70">
                      Contact: {service.contactInfo.phone}
                    </div>
                    <div className="text-xs text-zion-cyan/70">
                      {service.contactInfo.email}
                    </div>
                  </div>
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
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Services That Transform Businesses
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered creative studios to quantum-safe cybersecurity, our innovative services 
              represent the cutting edge of technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {INNOVATIVE_NEW_SERVICES.map((service) => {
              const IconComponent = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <div key={service.id} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 group">
                  {/* Service Header */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${categoryColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing & Market Info */}
                  <div className="mb-6 p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-cyan-400">
                        ${service.price.toLocaleString()}
                      </span>
                      <span className="text-gray-400">/{service.pricingModel}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      <p>Market Price: {service.marketPrice}</p>
                      <p>ROI: {service.roi}</p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                      Key Benefits
                    </h4>
                    <div className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Cpu className="w-5 h-5 text-blue-400 mr-2" />
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technology.slice(0, 4).map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Unique Value */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-500/30">
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                      <Award className="w-5 h-5 text-cyan-400 mr-2" />
                      Unique Value
                    </h4>
                    <p className="text-sm text-gray-200">
                      {service.uniqueValue}
                    </p>
                  </div>

                  {/* Delivery & Support */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{service.estimatedDelivery}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{service.supportLevel}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="text-center">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
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

      {/* Why Choose Zion Tech Group */}
      <div className="bg-white/5 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI-First Approach</h3>
              <p className="text-zion-cyan/80">
                Leverage the latest AI technologies to gain competitive advantages and drive innovation
              <div className="bg-gradient-to-r from-zion-purple to-zion-pink rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-zion-cyan/80">
                Built-in security and compliance features to protect your business and data
              <div className="bg-gradient-to-r from-zion-green to-zion-teal rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven ROI</h3>
              <p className="text-zion-cyan/80">
                Measurable business outcomes with rapid implementation and quick time-to-value
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-zion-orange to-zion-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Global Support</h3>
              <p className="text-zion-cyan/80">
                24/7 support and expertise from our global team of technology professionals
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the ranks of innovative companies already leveraging our cutting-edge services 
            to gain competitive advantages and drive unprecedented growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Consultation
            </a>
            
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get a Quote
            </a>
          </div>

          <div className="mt-8 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/20">
            <p className="text-gray-300 mb-4">
              <strong>Limited Time Offer:</strong> First 3 months at 50% off for new clients
            </p>
            <p className="text-sm text-gray-400">
              *Terms and conditions apply. Contact us for full details.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
      </div>

      {/* Market Trends & Innovation */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Market Trends & Innovation
            </h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              Stay ahead of the curve with our forward-thinking solutions that address emerging market needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Emerging Technology Trends</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-zion-cyan rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Quantum Computing</h4>
                    <p className="text-zion-cyan/80">Revolutionary computing power for complex problem-solving</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-zion-purple rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">AI & Machine Learning</h4>
                    <p className="text-zion-cyan/80">Intelligent automation and predictive analytics</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-zion-green rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Sustainability Tech</h4>
                    <p className="text-zion-cyan/80">Green technology solutions for environmental impact</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Business Impact</h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">Cost Reduction</span>
                    <span className="text-green-400 font-bold">25-70%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">Efficiency Improvement</span>
                    <span className="text-blue-400 font-bold">30-60%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">ROI Achievement</span>
                    <span className="text-purple-400 font-bold">200-1000%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-purple-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto">
            Contact our team of experts to discuss how our innovative services can drive your digital transformation and business growth

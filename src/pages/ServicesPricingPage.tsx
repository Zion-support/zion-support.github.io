import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Network, 
  Code, 
  BarChart3, 
  Target, 
  Lightbulb, 
  Rocket, 
  Zap, 
  Globe, 
  Lock, 
  Cpu, 
  Sparkles,
  ShieldCheck,
  Globe2,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  DollarSign,
  Clock,
  Users,
  TrendingUp,
  Award,
  Zap as Lightning
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { INNOVATIVE_NEW_SERVICES_2025 } from '../data/innovativeNewServices2025';
import { SPECIALIZED_IT_SERVICES_2025 } from '../data/specializedITServices2025';
import { ADDITIONAL_INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/additionalInnovativeMicroSaasServices2025';

const ServicesPricingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const allServices = [
    ...INNOVATIVE_NEW_SERVICES_2025,
    ...SPECIALIZED_IT_SERVICES_2025,
    ...ADDITIONAL_INNOVATIVE_MICRO_SAAS_SERVICES_2025
  ];

  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-2000', label: 'Under $2,000/month' },
    { value: '2000-5000', label: '$2,000 - $5,000/month' },
    { value: '5000-10000', label: '$5,000 - $10,000/month' },
    { value: '10000+', label: '$10,000+/month' }
  ];

  const filteredServices = allServices.filter(service => {
    const categoryMatch = selectedCategory === 'all' || service.category === selectedCategory;
    const priceMatch = selectedPriceRange === 'all' || 
      (selectedPriceRange === '0-2000' && service.price < 2000) ||
      (selectedPriceRange === '2000-5000' && service.price >= 2000 && service.price < 5000) ||
      (selectedPriceRange === '5000-10000' && service.price >= 5000 && service.price < 10000) ||
      (selectedPriceRange === '10000+' && service.price >= 10000);
    
    return categoryMatch && priceMatch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Analytics':
      case 'AI & Autonomous Systems':
        return Brain;
      case 'AI & Development':
        return Cpu;
      case 'AI & Marketing':
        return Target;
      case 'AI & Fintech':
        return DollarSign;
      case 'AI & Healthcare':
        return ShieldCheck;
      case 'AI & Logistics':
        return Globe2;
      case 'AI & Customer Experience':
        return Users;
      case 'Network Infrastructure':
        return Globe;
      case 'Edge Computing':
      case 'Edge Computing & AI':
        return Cloud;
      case 'Cybersecurity & Cloud':
      case 'Cybersecurity':
      case 'Cybersecurity & Quantum':
        return Shield;
      case 'DevOps & Automation':
        return Code;
      case 'Blockchain & Web3':
        return Lock;
      case 'IoT & Energy':
        return Zap;
      default:
        return Rocket;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Analytics':
      case 'AI & Autonomous Systems':
        return 'from-purple-500 to-pink-600';
      case 'AI & Development':
        return 'from-blue-500 to-cyan-600';
      case 'AI & Marketing':
        return 'from-green-500 to-emerald-600';
      case 'AI & Fintech':
        return 'from-yellow-500 to-orange-600';
      case 'AI & Healthcare':
        return 'from-red-500 to-pink-600';
      case 'AI & Logistics':
        return 'from-indigo-500 to-purple-600';
      case 'AI & Customer Experience':
        return 'from-teal-500 to-cyan-600';
      case 'Network Infrastructure':
        return 'from-green-500 to-emerald-600';
      case 'Edge Computing':
      case 'Edge Computing & AI':
        return 'from-orange-500 to-red-600';
      case 'Cybersecurity & Cloud':
      case 'Cybersecurity':
      case 'Cybersecurity & Quantum':
        return 'from-red-500 to-orange-600';
      case 'DevOps & Automation':
        return 'from-indigo-500 to-purple-600';
      case 'Blockchain & Web3':
        return 'from-yellow-500 to-orange-600';
      case 'IoT & Energy':
        return 'from-blue-500 to-green-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const stats = [
    { icon: Brain, value: "25+", label: "AI Solutions" },
    { icon: Cloud, value: "50+", label: "Micro SaaS Services" },
    { icon: Shield, value: "15+", label: "Cybersecurity Services" },
    { icon: Rocket, value: "95%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      <SEOHead 
        title="Services Pricing - Zion Tech Group"
        description="Comprehensive pricing for our innovative micro SaaS services, AI solutions, and IT services. Competitive rates with enterprise-grade features."
        keywords="micro SaaS pricing, AI services pricing, IT services pricing, competitive rates, enterprise solutions, Zion Tech Group"
        type="website"
        url="https://ziontechgroup.com/services-pricing"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Services Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transparent, competitive pricing for our comprehensive range of micro SaaS services, AI solutions, and IT services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Custom Quote
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="py-8 bg-black/50 border-y border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-cyan-400">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-400">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-400">
                <MapPin className="w-5 h-5" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <Link 
              to="https://ziontechgroup.com" 
              target="_blank"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>Visit Our Website</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers Overview */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Pricing Tiers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right plan for your business needs with our flexible pricing options
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Tier */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">$2,000</div>
                <div className="text-gray-400">per month</div>
                <p className="text-gray-300 mt-4">Perfect for small businesses and startups</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Basic AI Solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Standard Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Core Features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Email Support
                </li>
              </ul>
              <Link 
                to="/contact"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Professional Tier */}
            <div className="bg-gradient-to-br from-cyan-900 to-blue-900 rounded-2xl border-2 border-cyan-500 p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">$5,000</div>
                <div className="text-gray-400">per month</div>
                <p className="text-gray-300 mt-4">Ideal for growing businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Advanced AI Solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Premium Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Custom Integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Priority Support
                </li>
              </ul>
              <Link 
                to="/contact"
                className="w-full bg-white text-cyan-600 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">$15,000</div>
                <div className="text-gray-400">per month</div>
                <p className="text-gray-300 mt-4">For large enterprises</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Custom AI Solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Dedicated Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Full Customization
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  24/7 Support
                </li>
              </ul>
              <Link 
                to="/contact"
                className="w-full border border-cyan-500 text-cyan-400 py-3 rounded-lg font-semibold text-center hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <div className="flex items-center gap-4">
              <label className="text-gray-300 font-medium">Category:</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center gap-4">
              <label className="text-gray-300 font-medium">Price Range:</label>
              <select 
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Pricing Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Detailed Service Pricing
            </h2>
            <p className="text-xl text-gray-300">
              {filteredServices.length} services found - All prices include setup and support
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const IconComponent = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <div key={service.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${categoryColor} rounded-2xl flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400">
                          {service.currency}{service.price.toLocaleString()}/mo
                        </div>
                        <div className="text-sm text-gray-400">{service.pricingModel}</div>
                      </div>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-cyan-400">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-green-400">Key Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <Star className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Market Price Comparison */}
                    <div className="mb-6 p-4 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-400 mb-1">Market Price Range</div>
                          <div className="text-lg font-semibold text-yellow-400">{service.marketPrice}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-green-400 font-semibold">Save up to 60%</div>
                          <div className="text-xs text-gray-400">vs competitors</div>
                        </div>
                      </div>
                    </div>

                    {/* Delivery Time */}
                    <div className="mb-6 p-3 bg-gray-800/30 rounded-lg">
                      <div className="flex items-center text-sm text-gray-300">
                        <Clock className="w-4 h-4 text-cyan-400 mr-2" />
                        <span>Delivery: {service.estimatedDelivery}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col gap-3">
                      <Link 
                        to={`/contact?service=${service.id}`}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                      >
                        Get Quote
                      </Link>
                      <Link 
                        to={`/contact?service=${service.id}&type=consultation`}
                        className="w-full border border-cyan-500 text-cyan-400 py-3 rounded-lg font-semibold text-center hover:bg-cyan-500 hover:text-white transition-all duration-300"
                      >
                        Schedule Consultation
                      </Link>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-6 pt-6 border-t border-gray-700">
                      <div className="text-center text-sm text-gray-400">
                        <div className="mb-2">Ready to get started?</div>
                        <div className="flex items-center justify-center gap-4">
                          <a 
                            href={`tel:${service.contactInfo?.phone || '+1 302 464 0950'}`}
                            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            <Phone className="w-4 h-4" />
                            <span>{service.contactInfo?.phone || '+1 302 464 0950'}</span>
                          </a>
                          <a 
                            href={`mailto:${service.contactInfo?.email || 'kleber@ziontechgroup.com'}`}
                            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            <Mail className="w-4 h-4" />
                            <span>{service.contactInfo?.email || 'kleber@ziontechgroup.com'}</span>
                          </a>
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
              <h3 className="text-2xl font-bold text-gray-400 mb-4">No services found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your filters to see more services</p>
              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-cyan-100 mb-12">
            We provide enterprise-grade solutions at competitive prices with unmatched support
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Track Record</h3>
              <p className="text-cyan-100">95% success rate with 500+ successful implementations</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Lightning className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast Implementation</h3>
              <p className="text-cyan-100">Average implementation time of 3-6 weeks</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-cyan-100">SOC2, ISO 27001, and GDPR compliant solutions</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPricingPage;
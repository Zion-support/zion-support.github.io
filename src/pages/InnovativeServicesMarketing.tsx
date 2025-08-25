import React, { useState } from 'react';
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
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Award,
  Lightbulb,
  Users as UsersIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Globe as GlobeIcon
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';
import { EMERGING_TECH_INNOVATIVE_SERVICES } from '../data/emergingTechInnovativeServices';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  websiteUrl?: string;
}

export default function InnovativeServicesMarketing() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Combine all services
  const allServices: Service[] = [
    ...COMPREHENSIVE_SERVICES,
    ...INNOVATIVE_MICRO_SAAS_SERVICES,
    ...EMERGING_TECH_INNOVATIVE_SERVICES
  ];

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter services by category
  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
        return Brain;
      case 'Cybersecurity':
        return Shield;
      case 'Cloud & Infrastructure':
        return Cloud;
      case 'Data & Analytics':
        return BarChart3;
      case 'Blockchain & Web3':
        return Network;
      case 'Internet of Things':
        return Cpu;
      case 'Quantum Technology':
        return Zap;
      case 'Metaverse & Virtual Reality':
        return Eye;
      case 'Edge Computing & 5G':
        return Globe;
      case 'Neuromorphic Computing':
        return Brain;
      case 'Synthetic Biology & BioTech':
        return Heart;
      case 'Autonomous Systems & Robotics':
        return Rocket;
      case 'Digital Twin & Simulation':
        return Building;
      default:
        return Code;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
        return 'from-purple-500 to-pink-500';
      case 'Cybersecurity':
        return 'from-red-500 to-orange-500';
      case 'Cloud & Infrastructure':
        return 'from-blue-500 to-cyan-500';
      case 'Data & Analytics':
        return 'from-green-500 to-teal-500';
      case 'Blockchain & Web3':
        return 'from-yellow-500 to-orange-500';
      case 'Internet of Things':
        return 'from-indigo-500 to-purple-500';
      case 'Quantum Technology':
        return 'from-cyan-500 to-blue-500';
      case 'Metaverse & Virtual Reality':
        return 'from-pink-500 to-purple-500';
      case 'Edge Computing & 5G':
        return 'from-teal-500 to-green-500';
      case 'Neuromorphic Computing':
        return 'from-violet-500 to-purple-500';
      case 'Synthetic Biology & BioTech':
        return 'from-emerald-500 to-green-500';
      case 'Autonomous Systems & Robotics':
        return 'from-orange-500 to-red-500';
      case 'Digital Twin & Simulation':
        return 'from-sky-500 to-blue-500';
      default:
        return 'from-gray-500 to-gray-700';
    }
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`;
    }
    return `$${price}`;
  };

  const getCategoryStats = (category: string) => {
    const services = category === 'all' 
      ? allServices 
      : allServices.filter(service => service.category === category);
    
    const totalRevenue = services.reduce((sum, service) => sum + service.price, 0);
    const avgPrice = totalRevenue / services.length;
    const priceRange = {
      min: Math.min(...services.map(s => s.price)),
      max: Math.max(...services.map(s => s.price))
    };
    
    return {
      count: services.length,
      avgPrice: Math.round(avgPrice),
      priceRange
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900/90 to-blue-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                <Lightbulb className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Zion Tech Group
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Leading Provider of <span className="text-cyan-400">Innovative Micro SAAS Services</span>, 
              <span className="text-blue-400"> IT Solutions</span>, and 
              <span className="text-purple-400"> AI-Powered Technologies</span>
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{allServices.length}+</div>
                <div className="text-gray-400">Innovative Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">15+</div>
                <div className="text-gray-400">Technology Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">24/7</div>
                <div className="text-gray-400">Expert Support</div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-cyan-400">
                <Phone className="w-5 h-5" />
                <span className="text-lg">+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <Mail className="w-5 h-5" />
                <span className="text-lg">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 text-lg font-semibold"
              >
                Visit Our Website
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 text-lg font-semibold"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-gray-800/30 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">Explore Our Service Categories</h2>
            <p className="text-gray-400">Discover innovative solutions across cutting-edge technology domains</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => {
              const CategoryIcon = getCategoryIcon(category);
              const categoryColor = getCategoryColor(category);
              const stats = getCategoryStats(category);
              
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl border transition-all duration-200 ${
                    selectedCategory === category
                      ? 'border-cyan-500 bg-cyan-500/10'
                      : 'border-gray-700 hover:border-cyan-500/50 hover:bg-gray-800/50'
                  }`}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${categoryColor}`}>
                    <CategoryIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">
                      {category === 'all' ? 'All Services' : category}
                    </div>
                    {category !== 'all' && (
                      <div className="text-sm text-gray-400">
                        {stats.count} services • ${stats.avgPrice}/mo avg
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            {filteredServices.length} {selectedCategory === 'all' ? 'Innovative Services' : selectedCategory} Available
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Each service is designed to deliver measurable business value with cutting-edge technology and expert support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => {
            const CategoryIcon = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <div
                key={service.id}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${categoryColor}`}>
                    <CategoryIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-cyan-400">
                      {formatPrice(service.price)}
                    </div>
                    <div className="text-gray-400">per {service.pricingModel}</div>
                    <div className="text-sm text-yellow-400 mt-1">
                      Market: {service.marketPrice}
                    </div>
                  </div>
                </div>

                {/* Service Title and Category */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-gray-400">{service.category}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-sm text-gray-400">{service.subcategory}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                    <ZapIcon className="w-5 h-5" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-gray-500 mt-2">
                        +{service.features.length - 4} more features available
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases and Target Audience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2 flex items-center gap-2">
                      <UsersIcon className="w-4 h-4" />
                      Perfect For
                    </h4>
                    <div className="space-y-1">
                      {service.targetAudience.slice(0, 3).map((audience, index) => (
                        <div key={index} className="text-sm text-gray-400">• {audience}</div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2">
                      <GlobeIcon className="w-4 h-4" />
                      Use Cases
                    </h4>
                    <div className="space-y-1">
                      {service.useCases.slice(0, 3).map((useCase, index) => (
                        <div key={index} className="text-sm text-gray-400">• {useCase}</div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Delivery and Support */}
                <div className="flex items-center justify-between mb-6 text-sm">
                  <div className="text-gray-400">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Delivery: {service.estimatedDelivery}
                  </div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    service.supportLevel === 'enterprise' 
                      ? 'bg-purple-100 text-purple-800' 
                      : service.supportLevel === 'premium'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {service.supportLevel.charAt(0).toUpperCase() + service.supportLevel.slice(1)} Support
                  </span>
                </div>

                {/* Contact and Action */}
                <div className="border-t border-gray-700 pt-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      <div className="flex items-center gap-1 mb-1">
                        <Phone className="w-4 h-4" />
                        <span>{service.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        <span>{service.contactInfo.email}</span>
                      </div>
                    </div>
                    
                    <a
                      href={service.websiteUrl || service.contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-semibold"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                <Award className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of organizations that have already transformed their operations with our innovative solutions. 
              Our team of experts is ready to help you achieve your digital transformation goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <Phone className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-xl font-semibold mb-2">Call Our Experts</h3>
                <p className="text-cyan-400 text-lg">+1 302 464 0950</p>
                <p className="text-gray-400 text-sm">Available 24/7 for urgent inquiries</p>
              </div>
              <div className="text-center">
                <Mail className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-blue-400 text-lg">kleber@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm">Get detailed proposals and quotes</p>
              </div>
              <div className="text-center">
                <MapPin className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                <h3 className="text-xl font-semibold mb-2">Visit Our Office</h3>
                <p className="text-purple-400 text-lg">364 E Main St STE 1008<br />Middletown DE 19709</p>
                <p className="text-gray-400 text-sm">Schedule an in-person consultation</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 text-lg font-semibold"
              >
                Explore Our Website
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service%20Inquiry%20-%20Zion%20Tech%20Group"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 text-lg font-semibold"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
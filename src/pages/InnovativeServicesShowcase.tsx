import React, { useState, useMemo } from 'react';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  DollarSign, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  Mail, 
  Globe,
  Zap,
  Shield,
  Brain,
  Cpu,
  Database,
  Lock,
  Cloud,
  BarChart3,
  TrendingUp,
  Rocket,
  Leaf,
  Eye,
  Code,
  Network,
  Cube,
  Sparkles
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

// Import all service data
import { ADVANCED_AI_SERVICES } from '../data/advancedAIServices';
import { INNOVATIVE_IT_INFRASTRUCTURE_SERVICES } from '../data/innovativeITInfrastructure';
import { IOT_EDGE_COMPUTING_SERVICES } from '../data/iotEdgeComputingServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';

const InnovativeServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  // SEO configuration
  const seoConfig = {
    title: "Innovative Services 2025 - Zion Tech Group",
    description: "Discover cutting-edge AI, IT infrastructure, and micro SaaS services designed to transform your business. Explore our innovative technology solutions.",
    keywords: "AI services, IT infrastructure, micro SaaS, innovative technology, business solutions",
    url: "https://ziontechgroup.com/innovative-services"
  };

  // Combine all services
  const allServices = [
    ...ADVANCED_AI_SERVICES,
    ...INNOVATIVE_IT_INFRASTRUCTURE_SERVICES,
    ...IOT_EDGE_COMPUTING_SERVICES,
    ...INNOVATIVE_MICRO_SAAS_SERVICES
  ];

  const getSubcategoriesForCategory = (category: string) => {
    if (category === 'all') return [];
    return INNOVATIVE_SERVICE_SUBCATEGORIES_2025[category as keyof typeof INNOVATIVE_SERVICE_SUBCATEGORIES_2025] || [];
  };

  const getCategoryIcon = (category: string) => {
    const categoryIcons: { [key: string]: React.ReactNode } = {
      'AI & Analytics': <Brain className="h-5 w-5" />,
      'Emerging Technology': <Rocket className="h-5 w-5" />,
      'Blockchain & Web3': <Cube className="h-5 w-5" />,
      'IoT & Edge Computing': <Network className="h-5 w-5" />,
      'Cybersecurity': <Shield className="h-5 w-5" />,
      'Metaverse & VR/AR': <Eye className="h-5 w-5" />,
      'Green Technology': <Leaf className="h-5 w-5" />,
      'Digital Twin': <Cpu className="h-5 w-5" />
    };
    return categoryIcons[category] || <Zap className="h-5 w-5" />;
  };

  const getPriceRange = (price: number) => {
    if (price < 10000) return 'starter';
    if (price < 25000) return 'professional';
    return 'enterprise';
  };

  const getPriceRangeColor = (range: string) => {
    switch (range) {
      case 'starter': return 'bg-green-100 text-green-800 border-green-200';
      case 'professional': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'enterprise': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEOHead config={seoConfig} />
      
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Innovative Services Showcase
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our cutting-edge micro SAAS services, IT solutions, and AI-powered platforms designed to transform your business operations and drive innovation.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-2" />
                <span>{allServices.length}+ Services</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Award className="w-5 h-5 mr-2" />
                <span>Enterprise Grade</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Globe className="w-5 h-5 mr-2" />
                <span>Global Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <section className="py-12 bg-zion-slate-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSelectedSubcategory('all');
                }}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zion-blue"
              >
                <option value="all">All Categories</option>
                {INNOVATIVE_SERVICE_CATEGORIES_2025.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zion-blue"
              >
                <option value="all">All Subcategories</option>
                {getSubcategoriesForCategory(selectedCategory).map((subcategory) => (
                  <option key={subcategory} value={subcategory}>{subcategory}</option>
                ))}
              </select>
              
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zion-blue"
              >
                <option value="all">All Prices</option>
                <option value="low">Under $10K</option>
                <option value="medium">$10K - $25K</option>
                <option value="high">$25K+</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {sortedServices.length === 0 ? (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group">
                {/* Service Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getCategoryIcon(service.category)}
                      <div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriceRangeColor(service.price)}`}>
                          {getPriceRangeLabel(service.price)}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500 capitalize">
                        per {service.pricingModel}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.estimatedDelivery}
                    </span>
                    <span className="flex items-center">
                      <ShieldCheck className="w-4 h-4 mr-1" />
                      {service.supportLevel}
                    </span>
                  </div>
                </div>

                {/* Service Features */}
                <div className="p-6 border-b border-gray-100">
                  <h4 className="font-medium text-gray-900 mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-blue-600 font-medium">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Service Benefits */}
                <div className="p-6 border-b border-gray-100">
                  <h4 className="font-medium text-gray-900 mb-3">Benefits</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Footer */}
                <div className="p-6 bg-gray-50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600">
                      Market Price: <span className="font-medium">{service.marketPrice}</span>
                    </div>
                    <div className="flex space-x-2">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Link
                      to={'link' in service ? service.link : '#'}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <a
                      href={`tel:${service.contactInfo.phone}`}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center"
                      title="Call us"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${service.contactInfo.email}`}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center"
                      title="Email us"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Future-Proof Your Business?
          </h2>
          <p className="text-xl text-zion-cyan-light mb-10 max-w-3xl mx-auto">
            Join the technology revolution with Zion Tech Group. Our innovative solutions are designed to 
            drive growth, efficiency, and competitive advantage in the digital age.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Link to="/request-quote">Get Custom Quote</Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
              <p className="text-zion-cyan-light">Cutting-edge technology solutions that keep you ahead of the competition</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-zion-cyan-light">Bank-grade security and compliance for your most critical business operations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
              <p className="text-zion-cyan-light">24/7 expert support and dedicated success managers for your business</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
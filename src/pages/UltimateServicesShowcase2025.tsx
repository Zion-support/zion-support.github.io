import React, { useState } from 'react';
import { ULTIMATE_REAL_SERVICES_2025, ULTIMATE_SERVICE_CATEGORIES_2025, ULTIMATE_SERVICE_SUBCATEGORIES_2025, ULTIMATE_PRICING_TIERS_2025, ULTIMATE_CONTACT_INFO_2025, ULTIMATE_SERVICE_GUARANTEES_2025 } from '@/data/ultimateRealServices2025';
import { ProductListing } from '@/types/listings';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Globe, 
  Shield, 
  Zap, 
  Database, 
  Code, 
  Smartphone,
  Blockchain,
  Cpu,
  BarChart3,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  CheckCircle,
  Award,
  TrendingUp,
  Users,
  Target,
  Rocket,
  Lightbulb,
  Shield as SecurityIcon,
  Zap as InnovationIcon,
  Globe as GlobalIcon,
  Clock as SupportIcon
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function UltimateServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  // Filter services based on search and filters
  const filteredServices = ULTIMATE_REAL_SERVICES_2025.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
    
    let matchesPrice = true;
    if (priceRange === 'under-10k') matchesPrice = (service.price || 0) < 10000;
    else if (priceRange === '10k-25k') matchesPrice = (service.price || 0) >= 10000 && (service.price || 0) < 25000;
    else if (priceRange === '25k-50k') matchesPrice = (service.price || 0) >= 25000 && (service.price || 0) < 50000;
    else if (priceRange === 'over-50k') matchesPrice = (service.price || 0) >= 50000;

    return matchesSearch && matchesCategory && matchesSubcategory && matchesPrice;
  });

  const getSubcategories = () => {
    if (selectedCategory === 'all') return [];
    return ULTIMATE_SERVICE_SUBCATEGORIES_2025[selectedCategory as keyof typeof ULTIMATE_SERVICE_SUBCATEGORIES_2025] || [];
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI Development': <Zap className="w-5 h-5" />,
      'Cloud Services': <Globe className="w-5 h-5" />,
      'DevOps': <Code className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'Data Analytics': <Database className="w-5 h-5" />,
      'Web Development': <Code className="w-5 h-5" />,
      'Mobile Development': <Smartphone className="w-5 h-5" />,
      'Blockchain': <Blockchain className="w-5 h-5" />,
      'IoT': <Cpu className="w-5 h-5" />,
      'Business Automation': <BarChart3 className="w-5 h-5" />,
      'API Development': <Code className="w-5 h-5" />,
      'Quantum Computing': <Cpu className="w-5 h-5" />
    };
    return iconMap[category] || <Code className="w-5 h-5" />;
  };

  const formatPrice = (price: number | null) => {
    if (!price) return 'Contact for pricing';
    return `$${price.toLocaleString()}`;
  };

  const getDeliveryTime = (availability: string) => {
    return availability || 'Contact for timeline';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <SEO 
        title="Ultimate IT & AI Services 2025 - Zion Tech Group" 
        description="Discover our comprehensive range of cutting-edge IT services, AI solutions, and technology consulting for 2025. From AI development to quantum computing, cybersecurity to blockchain solutions."
        keywords="IT services 2025, AI development, cybersecurity, cloud migration, blockchain, IoT, quantum computing, Zion Tech Group, enterprise solutions"
        canonical="https://ziontechgroup.com/ultimate-services-2025"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ultimate IT & AI Services 2025
          </h1>
          <p className="text-xl md:text-2xl text-zion-cyan mb-8 max-w-4xl mx-auto">
            Cutting-edge technology solutions for the future. From AI and quantum computing to cybersecurity and blockchain, 
            we deliver enterprise-grade solutions that drive innovation and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              🤖 AI & Machine Learning
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              ☁️ Cloud & DevOps
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              🔒 Cybersecurity
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              ⚛️ Quantum Computing
            </Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-black font-bold">
              <Phone className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-black">
              <Mail className="w-5 h-5 mr-2" />
              Request Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-zion-cyan text-black py-6">
        <div className="container mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">{ULTIMATE_CONTACT_INFO_2025.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">{ULTIMATE_CONTACT_INFO_2025.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">{ULTIMATE_CONTACT_INFO_2025.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">{ULTIMATE_CONTACT_INFO_2025.hours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service Guarantees */}
      <div className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zion-blue">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(ULTIMATE_SERVICE_GUARANTEES_2025).map(([key, value]) => (
              <Card key={key} className="text-center border-zion-cyan hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                    {key === 'quality' && <CheckCircle className="w-8 h-8 text-white" />}
                    {key === 'support' && <SupportIcon className="w-8 h-8 text-white" />}
                    {key === 'security' && <SecurityIcon className="w-8 h-8 text-white" />}
                    {key === 'compliance' && <Award className="w-8 h-8 text-white" />}
                    {key === 'scalability' && <TrendingUp className="w-8 h-8 text-white" />}
                    {key === 'roi' && <Target className="w-8 h-8 text-white" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-zion-blue">{value}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zion-blue">
            Service Pricing Tiers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(ULTIMATE_PRICING_TIERS_2025).map(([tier, details]) => (
              <Card key={tier} className={`text-center ${tier === 'enterprise' ? 'border-zion-cyan ring-2 ring-zion-cyan' : ''}`}>
                <CardHeader>
                  <CardTitle className="capitalize text-zion-blue">{tier}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-zion-cyan">
                    {details.range}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{details.description}</p>
                  <ul className="text-left space-y-2 mb-6">
                    {details.services.map((service, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-black">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="py-8 bg-white border-b">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {Object.keys(ULTIMATE_SERVICE_CATEGORIES_2025).map((category) => (
                  <SelectItem key={category} value={category}>
                    {ULTIMATE_SERVICE_CATEGORIES_2025[category].icon} {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Subcategories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subcategories</SelectItem>
                {getSubcategories().map((subcategory) => (
                  <SelectItem key={subcategory} value={subcategory}>
                    {subcategory}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-10k">Under $10,000</SelectItem>
                <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                <SelectItem value="over-50k">Over $50,000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-zion-blue">
              Available Services ({filteredServices.length})
            </h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No services found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedSubcategory('all');
                  setPriceRange('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <Card key={service.id} className="hover:shadow-xl transition-shadow duration-300 border-zion-cyan/20 hover:border-zion-cyan">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {service.category}
                      </Badge>
                      {service.featured && (
                        <Badge className="bg-zion-cyan text-black text-xs">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      {service.subcategory}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4 line-clamp-3">{service.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Price:</span>
                        <span className="font-bold text-zion-cyan">{formatPrice(service.price)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Market Price:</span>
                        <span className="text-sm text-gray-500">{service.contactInfo?.marketPrice || 'Contact us'}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Delivery:</span>
                        <span className="text-sm text-gray-500">{getDeliveryTime(service.availability)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">AI Score:</span>
                        <span className="text-sm font-semibold text-zion-cyan">{service.aiScore}/100</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {service.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{service.tags.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{service.rating} ({service.reviewCount} reviews)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>Available: {service.availability}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-black">
                        <Phone className="w-4 h-4 mr-2" />
                        Get Quote
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Mail className="w-4 h-4 mr-2" />
                        Learn More
                      </Button>
                    </div>

                    {/* Contact Information */}
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <div className="text-xs text-gray-600 space-y-1">
                        <div className="flex items-center gap-2">
                          <Phone className="w-3 h-3" />
                          <span>{service.contactInfo?.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-3 h-3" />
                          <span>{service.contactInfo?.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3" />
                          <span className="truncate">{service.contactInfo?.address}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">
            Let's discuss how our cutting-edge technology solutions can drive innovation, 
            efficiency, and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-black font-bold">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-black">
              <Mail className="w-5 h-5 mr-2" />
              Request Custom Quote
            </Button>
          </div>
          <div className="mt-8 text-zion-cyan">
            <p className="text-lg font-semibold">{ULTIMATE_CONTACT_INFO_2025.emergency}</p>
          </div>
        </div>
      </div>

      {/* Footer Contact */}
      <div className="py-12 bg-zion-blue-dark text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-zion-cyan">Contact Us</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {ULTIMATE_CONTACT_INFO_2025.phone}
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {ULTIMATE_CONTACT_INFO_2025.email}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {ULTIMATE_CONTACT_INFO_2025.address}
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-zion-cyan">Business Hours</h3>
              <p>{ULTIMATE_CONTACT_INFO_2025.hours}</p>
              <p className="mt-2 text-zion-cyan font-semibold">
                {ULTIMATE_CONTACT_INFO_2025.emergency}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-zion-cyan">Quick Links</h3>
              <div className="space-y-2">
                <a href="https://ziontechgroup.com" className="block hover:text-zion-cyan transition-colors">
                  <ExternalLink className="w-4 h-4 inline mr-2" />
                  Main Website
                </a>
                <a href="https://ziontechgroup.com/services" className="block hover:text-zion-cyan transition-colors">
                  All Services
                </a>
                <a href="https://ziontechgroup.com/about" className="block hover:text-zion-cyan transition-colors">
                  About Us
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-zion-cyan">Follow Us</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-black">
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-black">
                  Twitter
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-zion-cyan/30 mt-8 pt-8 text-center">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            <p className="text-zion-cyan mt-2">
              Transforming businesses through innovative technology solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
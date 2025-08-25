import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import {
  Bot,
  Shield,
  Cloud,
  Database,
  Globe,
  Smartphone,
  Monitor,
  Settings,
  Users,
  Zap,
  Code,
  Building,
  ArrowRight,
  Brain,
  Lock,
  Network,
  Cpu,
  Target,
  TrendingUp,
  Rocket,
  Star,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';

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
}

const ComprehensiveServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = ['all', ...Array.from(new Set(COMPREHENSIVE_SERVICES.map(service => service.category)))];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-1000', label: 'Under $1,000' },
    { value: '1000-3000', label: '$1,000 - $3,000' },
    { value: '3000-5000', label: '$3,000 - $5,000' },
    { value: '5000+', label: 'Over $5,000' }
  ];

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Machine Learning': <Brain className="h-8 w-8 p-1.5 rounded-md bg-blue-100 text-blue-700" />,
      'Cybersecurity': <Shield className="h-8 w-8 p-1.5 rounded-md bg-red-100 text-red-700" />,
      'Cloud & Infrastructure': <Cloud className="h-8 w-8 p-1.5 rounded-md bg-cyan-100 text-cyan-700" />,
      'Data & Analytics': <Database className="h-8 w-8 p-1.5 rounded-md bg-green-100 text-green-700" />,
      'Blockchain & Web3': <Globe className="h-8 w-8 p-1.5 rounded-md bg-purple-100 text-purple-700" />,
      'Internet of Things': <Network className="h-8 w-8 p-1.5 rounded-md bg-orange-100 text-orange-700" />,
      'Digital Transformation': <Rocket className="h-8 w-8 p-1.5 rounded-md bg-indigo-100 text-indigo-700" />,
      'Web & Mobile Development': <Code className="h-8 w-8 p-1.5 rounded-md bg-gray-100 text-gray-700" />,
      'IT Support & Consulting': <Settings className="h-8 w-8 p-1.5 rounded-md bg-yellow-100 text-yellow-700" />
    };
    return iconMap[category] || <Building className="h-8 w-8 p-1.5 rounded-md bg-gray-100 text-gray-700" />;
  };

  const getSupportLevelColor = (level: string) => {
    const colorMap: { [key: string]: string } = {
      'basic': 'bg-green-100 text-green-800',
      'premium': 'bg-blue-100 text-blue-800',
      'enterprise': 'bg-purple-100 text-purple-800'
    };
    return colorMap[level] || 'bg-gray-100 text-gray-800';
  };

  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesPrice = selectedPriceRange === 'all' || 
      (selectedPriceRange === '0-1000' && service.price <= 1000) ||
      (selectedPriceRange === '1000-3000' && service.price > 1000 && service.price <= 3000) ||
      (selectedPriceRange === '3000-5000' && service.price > 3000 && service.price <= 5000) ||
      (selectedPriceRange === '5000+' && service.price > 5000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50" />
        <div className="relative z-10 px-4 py-24 mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Comprehensive Technology Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our complete portfolio of AI-powered, quantum computing, cybersecurity, and enterprise solutions. 
              Transform your business with cutting-edge technology designed for the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-blue-100 text-blue-800">
                {COMPREHENSIVE_SERVICES.length}+ Services
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-green-100 text-green-800">
                AI-Powered Solutions
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-purple-100 text-purple-800">
                Quantum Computing
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-red-100 text-red-800">
                Enterprise Security
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-white mb-2">Ready to Transform Your Business?</h3>
              <p className="text-blue-100">Get in touch with our technology experts today</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 text-white">
                <Phone className="h-5 w-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Mail className="h-5 w-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <Button asChild variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Search Services</label>
              <Input
                placeholder="Search by name, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
              <Select value={selectedPriceRange} onChange={(e) => setSelectedPriceRange(e.target.value)}>
                {priceRanges.map(range => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
              <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="category">Category</SelectItem>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-300">
            Showing {filteredServices.length} of {COMPREHENSIVE_SERVICES.length} services
          </p>
          <div className="flex items-center gap-2 text-yellow-400">
            <Star className="h-5 w-5 fill-current" />
            <span className="text-sm">Premium Quality Solutions</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedServices.map((service) => (
            <Card key={service.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  {getCategoryIcon(service.category)}
                  <Badge className={getSupportLevelColor(service.supportLevel)}>
                    {service.supportLevel}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-gray-500">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Key Benefits</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-white/30 text-white">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Pricing */}
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-white">
                      {service.currency}{service.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-400">/{service.pricingModel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                      Market Price
                    </Badge>
                  </div>
                </div>

                {/* Delivery & Support */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Delivery:</span>
                    <div className="text-white font-medium">{service.estimatedDelivery}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Support:</span>
                    <div className="text-white font-medium capitalize">{service.supportLevel}</div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-3 pt-4">
                <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Link to={`/services/${service.id}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <div className="flex gap-2 w-full">
                  <Button asChild variant="outline" className="flex-1 border-white/30 text-white hover:bg-white/10">
                    <a href={`tel:${service.contactInfo.phone}`}>
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 border-white/30 text-white hover:bg-white/10">
                    <a href={`mailto:${service.contactInfo.email}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </a>
                  </Button>
                </div>

                <div className="w-full text-center">
                  <a 
                    href={service.contactInfo.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Visit Website
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
              }}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team of technology experts is ready to help you implement the perfect solution for your needs.
            Get started today with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <a href="tel:+13024640950">
                <Phone className="mr-2 h-5 w-5" />
                Call +1 302 464 0950
              </a>
            </Button>
          </div>
          <div className="mt-8 text-gray-400">
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Email: kleber@ziontechgroup.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase;
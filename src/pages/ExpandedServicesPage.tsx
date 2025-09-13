import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Star, 
  Shield, 
  Cloud, 
  Database, 
  Smartphone,
  Zap,
  TrendingUp,
  Code,
  Mail,
  Phone,
  MapPin,
  Award,
  Globe
} from 'lucide-react';
import { EXPANDED_SERVICES } from "@/data/expandedServices";

// Create categories and subcategories from the services data
const EXPANDED_SERVICE_CATEGORIES = [
  { id: 'all', name: 'All Categories' },
  { id: 'AI Development', name: 'AI Development' },
  { id: 'Cloud Services', name: 'Cloud Services' },
  { id: 'Cybersecurity', name: 'Cybersecurity' },
  { id: 'Data Analytics', name: 'Data Analytics' },
  { id: 'Digital Transformation', name: 'Digital Transformation' },
  { id: 'Web Development', name: 'Web Development' },
  { id: 'Mobile Development', name: 'Mobile Development' },
  { id: 'IoT Solutions', name: 'IoT Solutions' },
  { id: 'Blockchain', name: 'Blockchain' },
  { id: 'Integration', name: 'Integration' }
];

const EXPANDED_SERVICE_SUBCATEGORIES = [
  { id: 'all', name: 'All Subcategories' },
  { id: 'Chatbots', name: 'Chatbots' },
  { id: 'Predictive Analytics', name: 'Predictive Analytics' },
  { id: 'Computer Vision', name: 'Computer Vision' },
  { id: 'NLP', name: 'Natural Language Processing' },
  { id: 'Infrastructure', name: 'Infrastructure' },
  { id: 'Migration', name: 'Migration' },
  { id: 'Security', name: 'Security' },
  { id: 'Compliance', name: 'Compliance' },
  { id: 'Data Visualization', name: 'Data Visualization' },
  { id: 'Business Intelligence', name: 'Business Intelligence' }
];

export default function ExpandedServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [quoteData, setQuoteData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    selectedServices: [] as string[]
  });

  // Icon mapping for service categories
  const serviceIcons: { [key: string]: React.ReactNode } = {
    'ai-ml': <Zap className="h-6 w-6" />,
    'cloud': <Cloud className="h-6 w-6" />,
    'cybersecurity': <Shield className="h-6 w-6" />,
    'data': <Database className="h-6 w-6" />,
    'mobile': <Smartphone className="h-6 w-6" />,
    'development': <Code className="h-6 w-6" />,
    'analytics': <TrendingUp className="h-6 w-6" />,
    'infrastructure': <Cloud className="h-6 w-6" />,
    'integration': <Code className="h-6 w-6" />,
    'consulting': <TrendingUp className="h-6 w-6" />
  };

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = EXPANDED_SERVICES.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
      
      return matchesSearch && matchesCategory && matchesSubcategory;
    });

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedSubcategory, sortBy]);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle quote submission
    console.log('Quote submitted:', quoteData);
    setShowQuoteForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expanded Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-zion-cyan">
              Comprehensive technology solutions for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
              <Link to="/request-quote">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {EXPANDED_SERVICE_CATEGORIES.map(category => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
              <SelectTrigger>
                <SelectValue placeholder="Subcategory" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subcategories</SelectItem>
                {EXPANDED_SERVICE_SUBCATEGORIES.map(subcategory => (
                  <SelectItem key={subcategory.id} value={subcategory.id}>
                    {subcategory.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price">Price</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {serviceIcons[service.category] || <Code className="h-6 w-6" />}
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </div>
                  <Badge variant="secondary" className="bg-zion-cyan text-white">
                    {service.category}
                  </Badge>
                </div>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-zion-purple">
                      ${service.price.toLocaleString()}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{service.rating}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white"
                      onClick={() => handleServiceSelect(service.id)}
                    >
                      {selectedServices.includes(service.id) ? 'Selected' : 'Select'}
                    </Button>
                    <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Services Summary */}
        {selectedServices.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Selected Services ({selectedServices.length})</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedServices.map(serviceId => {
                const service = EXPANDED_SERVICES.find(s => s.id === serviceId);
                return service ? (
                  <Badge key={serviceId} variant="secondary" className="bg-zion-purple text-white">
                    {service.name}
                  </Badge>
                ) : null;
              })}
            </div>
            <div className="flex space-x-4">
              <Button 
                onClick={() => setShowComparison(true)}
                className="bg-zion-cyan hover:bg-zion-cyan-dark text-white"
              >
                Compare Services
              </Button>
              <Button 
                onClick={() => setShowQuoteForm(true)}
                className="bg-zion-purple hover:bg-zion-purple-dark text-white"
              >
                Request Quote
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-xl font-semibold mb-4">Request Quote</h3>
            <form onSubmit={handleQuoteSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={quoteData.name}
                onChange={(e) => setQuoteData({...quoteData, name: e.target.value})}
                required
              />
              <Input
                placeholder="Email"
                type="email"
                value={quoteData.email}
                onChange={(e) => setQuoteData({...quoteData, email: e.target.value})}
                required
              />
              <Input
                placeholder="Company"
                value={quoteData.company}
                onChange={(e) => setQuoteData({...quoteData, company: e.target.value})}
              />
              <Input
                placeholder="Phone"
                value={quoteData.phone}
                onChange={(e) => setQuoteData({...quoteData, phone: e.target.value})}
              />
              <textarea
                placeholder="Message"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={quoteData.message}
                onChange={(e) => setQuoteData({...quoteData, message: e.target.value})}
                rows={3}
              />
              <div className="flex space-x-2">
                <Button type="submit" className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white">
                  Submit Quote
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowQuoteForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  Brain, 
  Cloud, 
  Lock, 
  BarChart3,
  Phone,
  Mail,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Award,
  Rocket,
  Target,
  DollarSign,
  Calendar,
  ArrowRight,
  Play,
  Download,
  MessageCircle,
  MapPin
} from 'lucide-react';
import { SEO } from '../components/SEO';

// Using fallback data since the files don't exist
const ULTIMATE_ZION_SERVICES_2025 = [];
const ULTIMATE_ZION_IT_SERVICES_2025 = [];
const ULTIMATE_ZION_AI_SERVICES_2025 = [];
const ultimateInnovativeServices2025 = [];

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
  technologies: string[];
  rating: number;
  reviews: number;
  imageUrl: string;
  isPopular?: boolean;
  isNew?: boolean;
  tags: string[];
}

export default function UltimateServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'all',
    'Financial Technology',
    'Research & Development',
    'IoT & Cybersecurity',
    'AI & Machine Learning',
    'Cloud & Infrastructure',
    'Data Analytics',
    'Mobile & Web Development',
    'Blockchain & Web3',
    'Healthcare & Biotech',
    'E-commerce & Retail',
    'Education & Training',
    'Marketing & Sales',
    'HR & Talent Management',
    'Legal & Compliance',
    'Sustainability & Green Tech'
  ];

  const filteredServices = ultimateInnovativeServices2025.filter((service: Service) => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Ultimate Services Showcase 2025 - Zion Tech Group"
        description="Discover our comprehensive suite of innovative services for 2025. From AI and cloud solutions to cybersecurity and data analytics."
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ultimate Services Showcase
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our comprehensive suite of innovative services designed to transform your business. 
            From cutting-edge AI solutions to robust cloud infrastructure, we have everything you need to succeed.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-slate-800 border-slate-700 text-white placeholder-gray-400 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="w-full md:w-64">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    {categories.map((category) => (
                      <SelectItem key={category} value={category} className="text-white hover:bg-slate-700">
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.length > 0 ? (
            filteredServices.map((service: Service) => (
              <Card key={service.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="bg-blue-600 text-white">
                      {service.category}
                    </Badge>
                    {service.isPopular && (
                      <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-white text-xl group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-white">
                        {service.currency} {service.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-400">
                        {service.pricingModel}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < service.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">
                        ({service.reviews} reviews)
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="text-sm text-gray-300 flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-slate-600 text-slate-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                        Learn More
                      </Button>
                      <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No services found</h3>
                <p>Try adjusting your search criteria or browse all categories.</p>
              </div>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-blue-100 mb-6 text-lg">
                Let our experts help you choose the perfect services for your needs. 
                Get a free consultation and discover how we can accelerate your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Phone className="h-5 w-5 mr-2" />
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
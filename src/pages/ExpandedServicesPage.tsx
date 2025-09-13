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
  Globe,
  Mail
} from 'lucide-react';
import { EXPANDED_SERVICES, SERVICE_CATEGORIES } from "@/data/expandedServices";

export default function ExpandedServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      'AI Development': <Zap className="w-5 h-5" />,
      'Cloud Services': <Cloud className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'Data Analytics': <Database className="w-5 h-5" />,
      'Digital Transformation': <TrendingUp className="w-5 h-5" />,
      'Web Development': <Code className="w-5 h-5" />,
      'Mobile Development': <Smartphone className="w-5 h-5" />,
      'IoT Solutions': <Globe className="w-5 h-5" />,
      'Blockchain': <Code className="w-5 h-5" />,
      'Integration': <Code className="w-5 h-5" />
    };
    return iconMap[category] || <Code className="w-5 h-5" />;
  };

  const filteredServices = useMemo(() => {
    return EXPANDED_SERVICES.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
      
      return matchesSearch && matchesCategory && matchesSubcategory;
    });
  }, [searchTerm, selectedCategory, selectedSubcategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Expanded Tech Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover our comprehensive range of cutting-edge technology services designed to transform your business
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <Input
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/20 border-white/30 text-white placeholder-zion-slate-light"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48 bg-white/20 border-white/30 text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {SERVICE_CATEGORIES.map(category => (
                  <SelectItem key={category.id} value={category.name}>{category.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
              <SelectTrigger className="w-full md:w-48 bg-white/20 border-white/30 text-white">
                <SelectValue placeholder="Subcategory" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subcategories</SelectItem>
                {Array.from(new Set(EXPANDED_SERVICES.map(service => service.subcategory))).map(subcategory => (
                  <SelectItem key={subcategory} value={subcategory}>{subcategory}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  {getCategoryIcon(service.category)}
                  <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan">
                    {service.category}
                  </Badge>
                </div>
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light">Starting from</span>
                    <span className="text-2xl font-bold text-white">${service.price}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-zion-slate-light">{service.rating}/5</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Contact us today to discuss your project requirements
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
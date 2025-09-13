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
  Smartphone 
} from 'lucide-react';

export default function ExpandedServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: "AI Development Services",
      description: "Custom AI solutions and machine learning implementations",
      category: "AI Development",
      price: "Starting at $5,000",
      rating: 4.9,
      reviews: 127
    },
    {
      id: 2,
      title: "Cloud Infrastructure Setup",
      description: "Complete cloud migration and infrastructure management",
      category: "Cloud Services",
      price: "Starting at $3,000",
      rating: 4.8,
      reviews: 89
    },
    {
      id: 3,
      title: "Cybersecurity Audit",
      description: "Comprehensive security assessment and protection",
      category: "Cybersecurity",
      price: "Starting at $2,500",
      rating: 4.9,
      reviews: 156
    }
  ];

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const getCategoryIcon = (category: string) => {
    const iconMap = {
      'AI Development': <Shield className="w-5 h-5" />,
      'Cloud Services': <Cloud className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'Data Analytics': <Database className="w-5 h-5" />,
      'Mobile Development': <Smartphone className="w-5 h-5" />
    };
    return iconMap[category as keyof typeof iconMap] || <Shield className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            Expanded Tech Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover our comprehensive range of cutting-edge technology services
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-zion-slate-light"
              />
            </div>
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48 bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="AI Development">AI Development</SelectItem>
              <SelectItem value="Cloud Services">Cloud Services</SelectItem>
              <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  {getCategoryIcon(service.category)}
                  <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan">
                    {service.category}
                  </Badge>
                </div>
                <CardTitle className="text-white">{service.title}</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">{service.rating}</span>
                    <span className="text-zion-slate-light text-sm">({service.reviews} reviews)</span>
                  </div>
                  <span className="text-zion-cyan font-semibold">{service.price}</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zion-slate-light text-lg">No services found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
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

export default function ExpandedServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
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

  const services = [
    {
      id: 1,
      title: "AI-Powered Business Automation",
      category: "AI Development",
      description: "Transform your business with intelligent automation solutions",
      price: "Starting at $5,000",
      rating: 4.9,
      reviews: 127,
      features: ["Machine Learning", "Process Automation", "Data Analysis"]
    },
    {
      id: 2,
      title: "Cloud Infrastructure Setup",
      category: "Cloud Services",
      description: "Scalable cloud solutions for modern businesses",
      price: "Starting at $3,000",
      rating: 4.8,
      reviews: 89,
      features: ["AWS/Azure", "Scalability", "Security"]
    },
    {
      id: 3,
      title: "Cybersecurity Assessment",
      category: "Cybersecurity",
      description: "Comprehensive security evaluation and protection",
      price: "Starting at $2,500",
      rating: 4.9,
      reviews: 156,
      features: ["Vulnerability Assessment", "Penetration Testing", "Security Training"]
    }
  ];

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            Expanded Tech Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover our comprehensive range of cutting-edge technology services designed to transform your business
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-zion-slate-light"
              />
            </div>
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-64 bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="AI Development">AI Development</SelectItem>
              <SelectItem value="Cloud Services">Cloud Services</SelectItem>
              <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
              <SelectItem value="Data Analytics">Data Analytics</SelectItem>
              <SelectItem value="Digital Transformation">Digital Transformation</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map((service) => (
            <Card key={service.id} className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(service.category)}
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                      {service.category}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-white">{service.rating}</span>
                    <span className="text-sm text-zion-slate-light">({service.reviews})</span>
                  </div>
                </div>
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="border-zion-cyan/30 text-zion-cyan">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-zion-cyan">{service.price}</span>
                    <Button className="bg-zion-purple hover:bg-zion-purple-dark text-white">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/5 rounded-2xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Our expert team can create tailored technology solutions to meet your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
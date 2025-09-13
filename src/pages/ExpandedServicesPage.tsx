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

  const getCategoryIcon = (category: string) => {
    return iconMap[category] || <Code className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Tech Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover our full range of cutting-edge technology solutions designed to transform your business
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Input
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-zion-slate-dark border-zion-slate text-white"
            />
          </div>
          <div className="w-full md:w-64">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-zion-slate-dark border-zion-slate text-white">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="ai">AI Development</SelectItem>
                <SelectItem value="cloud">Cloud Services</SelectItem>
                <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                <SelectItem value="data">Data Analytics</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {['AI Development', 'Cloud Services', 'Cybersecurity', 'Data Analytics', 'Digital Transformation', 'Web Development'].map((category) => (
            <Card key={category} className="bg-zion-slate-dark border-zion-slate hover:border-zion-cyan transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {getCategoryIcon(category)}
                  <CardTitle className="text-white">{category}</CardTitle>
                </div>
                <CardDescription className="text-zion-slate-light">
                  Comprehensive solutions for {category.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="text-xs">Premium Service</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-zion-slate-light">5.0 Rating</span>
                  </div>
                </div>
                <Link to="/contact" className="block mt-4">
                  <Button size="sm" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your specific needs and discover how our services can drive your success.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
              <Mail className="w-5 h-5 mr-2" />
              Contact Us Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
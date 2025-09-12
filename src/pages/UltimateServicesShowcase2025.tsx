import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  MessageCircle
} from 'lucide-react';
import { ULTIMATE_ZION_SERVICES_2025 } from '@/data/ultimateZionServices2025';
import { ULTIMATE_ZION_IT_SERVICES_2025 } from '@/data/ultimateZionITServices2025';
import { ULTIMATE_ZION_AI_SERVICES_2025 } from '@/data/ultimateZionAIServices2025';

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
  technology: string[];
  integrations: string[];
  compliance: string[];
  roi: string;
  competitors: string[];
  demoUrl?: string;
  caseStudies?: string[];
  websiteUrl?: string;
  marketTrend: string;
  industryFocus: string[];
  scalability: string;
  customizationLevel: string;
  specialOffer?: string;
  freeTrial?: string;
}

const UltimateServicesShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedSupportLevel, setSelectedSupportLevel] = useState('all');
  const [activeTab, setActiveTab] = useState('all');

  // Combine all services
  const allServices: Service[] = [
    ...ULTIMATE_ZION_SERVICES_2025,
    ...ULTIMATE_ZION_IT_SERVICES_2025,
    ...ULTIMATE_ZION_AI_SERVICES_2025
  ];

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  // Get unique support levels
  const supportLevels = ['all', ...Array.from(new Set(allServices.map(service => service.supportLevel)))];

  // Filter services based on search and filters
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesPriceRange = selectedPriceRange === 'all' || 
      (selectedPriceRange === 'low' && service.price < 1000) ||
      (selectedPriceRange === 'medium' && service.price >= 1000 && service.price < 5000) ||
      (selectedPriceRange === 'high' && service.price >= 5000);
    
    const matchesSupportLevel = selectedSupportLevel === 'all' || service.supportLevel === selectedSupportLevel;

    return matchesSearch && matchesCategory && matchesPriceRange && matchesSupportLevel;
  });

  // Filter services by tab
  const getServicesByTab = (tab: string) => {
    switch (tab) {
      case 'ai':
        return allServices.filter(service => service.category.includes('AI'));
      case 'it':
        return allServices.filter(service => service.category.includes('Cloud') || service.category.includes('DevOps') || service.category.includes('Security') || service.category.includes('Network') || service.category.includes('Managed') || service.category.includes('Digital') || service.category.includes('IoT') || service.category.includes('Blockchain'));
      case 'micro-saas':
        return allServices.filter(service => service.category.includes('Business Intelligence') || service.category.includes('Marketing') || service.category.includes('Customer Service') || service.category.includes('Financial') || service.category.includes('Legal') || service.category.includes('Education') || service.category.includes('Cybersecurity') || service.category.includes('Supply Chain') || service.category.includes('Human Resources') || service.category.includes('Real Estate'));
      default:
        return allServices;
    }
  };

  const tabServices = getServicesByTab(activeTab);

  const formatPrice = (price: number, currency: string, model: string) => {
    if (model === 'project-based') {
      return `${currency}${price.toLocaleString()}+`;
    }
    return `${currency}${price.toLocaleString()}/${model}`;
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'enterprise':
        return 'bg-purple-100 text-purple-800';
      case 'premium':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('AI')) return 'bg-gradient-to-r from-purple-500 to-pink-500';
    if (category.includes('Cloud') || category.includes('DevOps')) return 'bg-gradient-to-r from-blue-500 to-cyan-500';
    if (category.includes('Security')) return 'bg-gradient-to-r from-red-500 to-orange-500';
    if (category.includes('Business')) return 'bg-gradient-to-r from-green-500 to-emerald-500';
    return 'bg-gradient-to-r from-gray-500 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-purple-dark to-zion-slate-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/90 via-zion-purple-dark/90 to-zion-slate-dark/90 z-10" />
        <div className="relative z-20 container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-cyan bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ultimate Services Showcase 2025
          </h2>
          <p className="text-xl text-zion-cyan/80 max-w-4xl mx-auto mb-8">
            Discover our comprehensive suite of AI-powered micro SAAS solutions, enterprise IT services, and cutting-edge artificial intelligence platforms designed to transform your business operations and drive innovation.
          </p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-6 border border-zion-purple/30">
              <Phone className="h-8 w-8 text-zion-cyan mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-zion-cyan">+1 302 464 0950</p>
            </div>
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-6 border border-zion-purple/30">
              <Mail className="h-8 w-8 text-zion-cyan mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-zion-cyan">kleber@ziontechgroup.com</p>
            </div>
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-lg p-6 border border-zion-purple/30">
              <Globe className="h-8 w-8 text-zion-cyan mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Website</h3>
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">{allServices.length}+</div>
              <div className="text-zion-cyan/70">Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-cyan/70">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">95%+</div>
              <div className="text-zion-cyan/70">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">Global</div>
              <div className="text-zion-cyan/70">Reach</div>

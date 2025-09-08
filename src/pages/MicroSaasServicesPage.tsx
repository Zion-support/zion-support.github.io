import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, Zap, Shield, Globe, Code, Users, TrendingUp, CheckCircle, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { MICRO_SAAS_SERVICES, getMicroSaasServicesByCategory } from '@/data/microSaasServices';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5"/>, count: MICRO_SAAS_SERVICES.length },
    { id: 'AI Services', name: 'AI Services', icon: <Zap className="w-5 h-5"/>, count: getMicroSaasServicesByCategory('AI Services').length },
    { id: 'IT Services', name: 'IT Services', icon: <Code className="w-5 h-5"/>, count: getMicroSaasServicesByCategory('IT Services').length },
    { id: 'Business Solutions', name: 'Business Solutions', icon: <TrendingUp className="w-5 h-5"/>, count: getMicroSaasServicesByCategory('Business Solutions').length }
];
const pricingModels = [
    { id: 'all', name: 'All Pricing' },
    { id: 'monthly', name: 'Monthly' },
    { id: 'yearly', name: 'Yearly' },
    { id: 'one-time', name: 'One-time' },
    { id: 'usage-based', name: 'Usage-based' }
];
export default function MicroSaasServicesPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedPricing, setSelectedPricing] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredServices, setFilteredServices] = useState(MICRO_SAAS_SERVICES);
    const [sortBy, setSortBy] = useState('rating');
    useEffect(() => {
        let filtered = MICRO_SAAS_SERVICES;
        // Filter by category
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(service => service.category === selectedCategory);
        }
        // Filter by pricing model
        if (selectedPricing !== 'all') {
            filtered = filtered.filter(service => service.pricingModel === selectedPricing);
        }
        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(service => service.title.toLowerCase().includes(query) ||
                service.description.toLowerCase().includes(query) ||
                service.tags.some(tag => tag.toLowerCase().includes(query)) ||
                service.subcategory.toLowerCase().includes(query));
        }
        // Sort services
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'rating':
                    return (b.rating || 0) - (a.rating || 0);
                case 'price':
                    return a.price - b.price;
                case 'aiScore':
                    return b.aiScore - a.aiScore;
                case 'newest':
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                default:
                    return 0;
            }
        });
        setFilteredServices(filtered);
    }, [selectedCategory, selectedPricing, searchQuery, sortBy]);
    const ServiceCard = ({ service }) => (<div className="group relative bg-gradient-to-br from-zion-blue-dark/50 to-zion-slate-dark/50 border border-zion-blue-light/20 rounded-2xl p-6 hover:border-zion-purple/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-zion-purple/20">
      {/* Featured Badge */}
      {service.featured && (<div className="absolute -top-3 -right-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white text-xs font-bold px-3 py-1 rounded-full">
          Featured
        </div>)}

      {/* Service Image */}
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <img src={service.images[0]} alt={service.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="bg-zion-purple/80 text-white">
              {service.category}
            </Badge>
            <div className="flex items-center space-x-1 text-white">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400"/>
              <span className="text-sm font-medium">{service.rating}</span>
              <span className="text-xs text-zion-slate-light">({service.reviewCount})</span>
            </div>
          </div>
        </div>
      </div>
    </
  );
};

export default MicroSAASServicesPage;>
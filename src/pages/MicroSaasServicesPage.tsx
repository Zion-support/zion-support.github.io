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

const MicroSAASServicesPage = () => {
  return (
    <React.Fragment>
      <SEO 
        title="Micro SAAS Services - Zion Tech Group"
        description="Specialized micro SAAS solutions for niche business needs and targeted industry solutions."
        keywords="micro SAAS, specialized solutions, niche services, business software"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Micro <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">SAAS Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized software solutions for specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-indigo-400/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">Targeted Solutions</h3>
              <p className="text-gray-300 mb-4">Focused solutions for specific industry needs</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-indigo-400/20">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Custom Development</h3>
              <p className="text-gray-300 mb-4">Tailored software development services</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-indigo-400/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Rapid Deployment</h3>
              <p className="text-gray-300 mb-4">Quick implementation and deployment</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )};

export default MicroSAASServicesPage;>
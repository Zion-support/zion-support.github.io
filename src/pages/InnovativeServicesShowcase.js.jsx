import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Star, Clock, Users, ArrowRight, CheckCircle, Phone, Mail, Globe, Zap, Shield, Brain, Cpu, TrendingUp, Rocket, Leaf, Eye, Network, Cube } from 'lucide-react';
import SEOHead from '../components/SEOHead';
// Import all service data
import { ADVANCED_AI_SERVICES } from '../data/advancedAIServices';
import { INNOVATIVE_IT_INFRASTRUCTURE_SERVICES } from '../data/innovativeITInfrastructure';
import { IOT_EDGE_COMPUTING_SERVICES } from '../data/iotEdgeComputingServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';
const InnovativeServicesShowcase = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedSubcategory, setSelectedSubcategory] = useState('all');
    const [priceRange, setPriceRange] = useState('all');
    // SEO configuration
    const seoConfig = {
        title: "Innovative Services 2025 - Zion Tech Group",
        description: "Discover cutting-edge AI, IT infrastructure, and micro SaaS services designed to transform your business. Explore our innovative technology solutions.",
        keywords: "AI services, IT infrastructure, micro SaaS, innovative technology, business solutions",
        url: "https://ziontechgroup.com/innovative-services"
    };
    // Combine all services
    const allServices = [
        ...ADVANCED_AI_SERVICES,
        ...INNOVATIVE_IT_INFRASTRUCTURE_SERVICES,
        ...IOT_EDGE_COMPUTING_SERVICES,
        ...INNOVATIVE_MICRO_SAAS_SERVICES
    ];
    const getSubcategoriesForCategory = (category) => {
        if (category === 'all')
            return [];
        return INNOVATIVE_SERVICE_SUBCATEGORIES_2025[category] || [];
    };
    const getCategoryIcon = (category) => {
        const categoryIcons = {
            'AI & Analytics': <Brain className="h-5 w-5"/>,
            'Emerging Technology': <Rocket className="h-5 w-5"/>,
            'Blockchain & Web3': <Cube className="h-5 w-5"/>,
            'IoT & Edge Computing': <Network className="h-5 w-5"/>,
            'Cybersecurity': <Shield className="h-5 w-5"/>,
            'Metaverse & VR/AR': <Eye className="h-5 w-5"/>,
            'Green Technology': <Leaf className="h-5 w-5"/>,
            'Digital Twin': <Cpu className="h-5 w-5"/>
        };
        return categoryIcons[category] || <Zap className="h-5 w-5"/>;
    };
    const getPriceRange = (price) => {
        if (price < 10000)
            return 'starter';
        if (price < 25000)
            return 'professional';
        return 'enterprise';
    };
    const getPriceRangeColor = (range) => {
        switch (range) {
            case 'starter': return 'bg-green-100 text-green-800 border-green-200';
            case 'professional': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'enterprise': return 'bg-purple-100 text-purple-800 border-purple-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };
    return (<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEOHead config={seoConfig}/>
      
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Innovative Services Showcase
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our cutting-edge micro SAAS services, IT solutions, and AI-powered platforms designed to transform your business operations and drive innovation.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-2"/>
                <span>{allServices.length}+ Services</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Award className="w-5 h-5 mr-2"/>
                <span>Enterprise Grade</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Globe className="w-5 h-5 mr-2"/>
                <span>Global Support</span>
              </div>
    </div>
  );
}

export default InnovativeServicesShowcase;

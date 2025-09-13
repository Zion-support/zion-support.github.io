import { Globe, Zap } from "lucide-react";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
import { SEO } from "../components/SEOHead";
import { SEO } from "../components/SEOHead";
import { ALL_INNOVATIVE_SERVICES, SPECIALIZED_SERVICES } from "@/data/innovativeMicroSaasServices2025";
import React from 'react';
import { Header } from '@/components/header/Header';
import { Header } from '@/components/header/Header';
import { Header } from '@/components/header/Header';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { Footer } from '@/components/Footer';
import { Footer } from '@/components/Footer';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { SEO } from '@/components/SEO';
import { SEO } from '@/components/SEO';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { GradientHeading } from '@/components/GradientHeading';
import { GradientHeading } from '@/components/GradientHeading';
import { GradientHeading } from '@/components/GradientHeading';

import { DynamicListingPage } from "@/components/DynamicListingPage";
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { TrustedBySection } from "@/components/TrustedBySection";
import { TrustedBySection } from "@/components/TrustedBySection";
import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Zap, Shield, Cloud, Database, Target, Smartphone, Link as LinkIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { FEATURED_SERVICES } from "@/data/expandedServices";


function getRandomItem<T>(arr: T[]): T {







export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'ai-analytics', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'ai-finance', name: 'AI & Finance', icon: TrendingUp, color: 'from-zion-purple to-zion-blue' },
    { id: 'ai-legal', name: 'AI & Legal', icon: Shield, color: 'from-zion-blue to-zion-cyan' },
    { id: 'ai-healthcare', name: 'AI & Healthcare', icon: Heart, color: 'from-zion-cyan to-zion-green' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Rocket, color: 'from-zion-blue to-zion-cyan' },
    { id: 'quantum-ml', name: 'Quantum ML', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'blockchain', name: 'Blockchain', icon: Lock, color: 'from-zion-purple to-zion-blue' },
    { id: 'iot-edge', name: 'IoT & Edge', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
    { id: 'autonomous-systems', name: 'Autonomous Systems', icon: Rocket, color: 'from-zion-blue to-zion-purple' },
    { id: 'content-creation', name: 'Content Creation', icon: Code, color: 'from-zion-orange to-zion-purple' },
    { id: 'hr-talent', name: 'HR & Talent', icon: Users, color: 'from-zion-pink to-zion-purple' },
    { id: 'sustainability', name: 'Sustainability', icon: Globe, color: 'from-zion-green to-zion-blue' },
    { id: 'ai-content-marketing', name: 'AI Content & Marketing', icon: Code, color: 'from-zion-orange to-zion-pink' },
    { id: 'data-privacy-compliance', name: 'Data Privacy & Compliance', icon: Lock, color: 'from-zion-red to-zion-purple' },
    { id: 'green-tech-sustainability', name: 'Green Tech & Sustainability', icon: Globe, color: 'from-zion-green to-zion-blue' },
    { id: 'remote-work-collaboration', name: 'Remote Work & Collaboration', icon: Users, color: 'from-zion-blue to-zion-purple' },
    { id: 'ecommerce-retail', name: 'E-commerce & Retail', icon: ShoppingCart, color: 'from-zion-green to-zion-orange' },
    { id: 'healthcare-technology', name: 'Healthcare Technology', icon: Heart, color: 'from-zion-pink to-zion-red' },
    { id: 'educational-technology', name: 'Educational Technology', icon: BookOpen, color: 'from-zion-blue to-zion-green' },
    { id: 'real-estate-technology', name: 'Real Estate Technology', icon: Building, color: 'from-zion-orange to-zion-blue' },
    { id: 'supply-chain-logistics', name: 'Supply Chain & Logistics', icon: Truck, color: 'from-zion-green to-zion-purple' },
    { id: 'customer-support', name: 'Customer Support', icon: MessageCircle, color: 'from-zion-blue to-zion-pink' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget', range: '$100 - $1,000' },
    { id: 'mid-range', name: 'Mid-Range', range: '$1,000 - $5,000' },
    { id: 'enterprise', name: 'Enterprise', range: '$5,000+' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'innovation', name: 'Innovation Level' }
  ];

  // Combine all services
  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...ADVANCED_ENTERPRISE_SOLUTIONS_2025,
    ...NEXT_GEN_AI_SERVICES_2025,
    ...SPECIALIZED_INDUSTRY_SOLUTIONS_2025,
    ...IOT_EDGE_COMPUTING_SERVICES_2025
  ];

  // Filter and sort services
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.replace('-', ' ')) ||
                           service.subcategory.toLowerCase().includes(selectedCategory.replace('-', ' '));
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && service.price <= 1000) ||
                        (selectedPriceRange === 'mid-range' && service.price > 1000 && service.price <= 5000) ||
                        (selectedPriceRange === 'enterprise' && service.price > 5000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return new Date(b.createdAt || '2025-01-01').getTime() - new Date(a.createdAt || '2025-01-01').getTime();
      case 'innovation':
        const innovationOrder = { 'Cutting-edge': 3, 'Advanced': 2, 'Standard': 1 };
        return (innovationOrder[b.innovationLevel] || 0) - (innovationOrder[a.innovationLevel] || 0);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.icon : Zap;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.color : 'from-zion-cyan to-zion-blue';
  };

  // Get category statistics
  const getCategoryStats = () => {
    const stats: { [key: string]: number } = {};
    INNOVATIVE_MICRO_SAAS_SERVICES_2025.forEach(service => {
      const category = service.category.toLowerCase().replace(' ', '-');
      stats[category] = (stats[category] || 0) + 1;
    });
    return stats;
  };

  const categoryStats = getCategoryStats();

  return (
    <>
      <SEOHead 
      

            
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />



                <Filter className="w-4 h-4 text-zion-cyan" />

                <TrendingUp className="w-4 h-4 text-zion-cyan" />


          <AnimatePresence mode="wait">
                      
                      


                          <TrendingUp className="w-4 h-4" />

                              <CheckCircle className="w-3 h-3 text-zion-cyan" />

                          <Clock className="w-4 h-4" />
                          <Star className="w-4 h-4 text-zion-cyan" />
                      
                      <Link
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
          </AnimatePresence>


                <Rocket className="w-10 h-10 text-white" />
              
              
              

                <Server className="w-10 h-10 text-white" />
              
              
              

                <Brain className="w-10 h-10 text-white" />
              
              
              

                <Globe className="w-10 h-10 text-white" />
              
              
              

                <Cpu className="w-10 h-10 text-white" />
              
              
              

                <Shield className="w-10 h-10 text-white" />
              
              
              


                  <Rocket className="w-8 h-8 text-white" />
                
                
                
                
                <Link
                </Link>

          
                <Brain className="w-8 h-8 text-white" />
              
              
              <Link 
                Explore Revolutionary Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>

            
              <Link
                <MessageCircle className="w-5 h-5 mr-2" />
              </Link>
              
                <Phone className="w-5 h-5 mr-2" />
            
            <Link to="/it-onsite-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
              </Button>
            </Link>
            <Link to="/expanded-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Zap className="h-4 w-4 mr-2" />
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
              </Button>
            </Link>

          
                  {service.category === 'AI & Automation' && <Zap className="w-5 h-5 text-blue-500" />}
                  {service.category === 'Cybersecurity' && <Shield className="w-5 h-5 text-red-500" />}
                  {service.category === 'Cloud & DevOps' && <Cloud className="w-5 h-5 text-green-500" />}
                  {service.category === 'Data & Analytics' && <Database className="w-5 h-5 text-purple-500" />}
                  {service.category === 'Digital Transformation' && <Target className="w-5 h-5 text-indigo-500" />}
                  {service.category === 'IoT & Edge Computing' && <Smartphone className="w-5 h-5 text-orange-500" />}
                  {service.category === 'Blockchain & Web3' && <LinkIcon className="w-5 h-5 text-cyan-500" />}
                
                
                
                
                <Button asChild className="w-full" size="sm">
                  <Link to={`/service/${service.id}`}>
                  </Link>
                </Button>
          
            <Button asChild size="lg" variant="outline">
              <Link to="/expanded-services">
              </Link>
            </Button>

      <DynamicListingPage 
      <TrustedBySection />
    </>
  );
}

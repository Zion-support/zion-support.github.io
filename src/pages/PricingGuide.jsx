import React, { useState } from 'react';
import { EXPANDED_SERVICES, EXPANDED_SERVICE_CATEGORIES } from '@/data/expandedServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, TrendingUp, Shield, Zap, Database, Cloud, Brain, Lock, Globe, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SEO } from '@/components/SEO';
export default function PricingGuide() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const filteredServices = selectedCategory === 'all'
        ? EXPANDED_SERVICES
        : EXPANDED_SERVICES.filter(service => service.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory);
    const getCategoryIcon = (category) => {
        const icons = {
            'AI Development': <Brain className="w-6 h-6"/>,
            'Cloud Services': <Cloud className="w-6 h-6"/>,
            'DevOps': <Zap className="w-6 h-6"/>,
            'Cybersecurity': <Shield className="w-6 h-6"/>,
            'Data & Analytics': <Database className="w-6 h-6"/>,
            'Digital Transformation': <TrendingUp className="w-6 h-6"/>,
            'Emerging Tech': <Globe className="w-6 h-6"/>,
            'Managed Services': <Lock className="w-6 h-6"/>
        };
        return icons[category] || <Star className="w-6 h-6"/>;
    };
    const formatPrice = (price) => {
        if (price >= 1000) {
            return `$${(price / 1000).toFixed(0)}K`;
        }
        return `$${price}`;
    };
    const getMarketComparison = (price, category) => {
        const comparisons = {
            'AI Development': { avg: price * 1.3, savings: 23 },
            'Cloud Services': { avg: price * 1.25, savings: 20 },
            'DevOps': { avg: price * 1.35, savings: 26 },
            'Cybersecurity': { avg: price * 1.4, savings: 29 },
            'Data & Analytics': { avg: price * 1.3, savings: 23 },
            'Digital Transformation': { avg: price * 1.45, savings: 31 },
            'Emerging Tech': { avg: price * 1.5, savings: 33 },
            'Managed Services': { avg: price * 1.2, savings: 17 }
        };
        return comparisons[category] || { avg: price * 1.3, savings: 23 };
    };
    return (<div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <SEOHead title="IT Services Pricing Guide - Zion Tech Group" description="Comprehensive pricing guide for enterprise IT services, AI development, cybersecurity, cloud migration, and digital transformation. Competitive rates with guaranteed ROI." keywords="IT services pricing, AI development cost, cybersecurity pricing, cloud migration cost, digital transformation pricing, managed services pricing" canonical="https://ziontechgroup.com/pricing-guide"/>

}}}}}









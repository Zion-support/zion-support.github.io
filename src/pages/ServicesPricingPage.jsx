import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, Mail, MapPin, Globe, DollarSign, Star, Users, Shield, Zap, Building } from 'lucide-react';
import { COMPREHENSIVE_SERVICES, PRICING_TIERS, SERVICE_CATEGORIES } from '@/data/comprehensiveServices';
import { SEO } from '@/components/SEO';
export default function ServicesPricingPage() {
    // Group services by category for pricing table
    const servicesByCategory = SERVICE_CATEGORIES.reduce((acc, category) => {
        const categoryServices = COMPREHENSIVE_SERVICES.filter(service => service.category === category);
        if (categoryServices.length > 0) {
            acc[category] = categoryServices;
        }
        return acc;
    }, {});
    return (<div className="min-h-screen bg-zion-blue-dark">
      <SEOHead title="Services Pricing - Zion Tech Group" description="Transparent pricing for our comprehensive micro SAAS, IT, and AI services. Competitive rates with flexible tiers for businesses of all sizes." keywords="pricing, micro SAAS pricing, IT services pricing, AI services pricing, Zion Tech Group" url="https://ziontechgroup.com/services-pricing"/>





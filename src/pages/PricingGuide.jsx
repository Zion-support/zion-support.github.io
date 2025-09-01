import { Check, Star, TrendingUp, Shield, Zap, Database, Cloud, Brain, Lock, Globe, Phone, Mail, MapPin, Clock } from 'lucide - react';
import React, { useState } from 'react';
import { Badge } from '@/components / ui / badge';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { EXPANDED_SERVICES, EXPANDED_SERVICE_CATEGORIES } from '@/data / expandedServices';
import SEO from '@/components / SEO';
export default function PricingGuide () {

    const [selectedCategory, setSelectedCategory] = useState ('all') ;
    const filteredServices = selectedCategory === 'all'
        ? EXPANDED_SERVICES
        : EXPANDED_SERVICES.filter (service => service.category.toLowerCase () .replace (/\s+/g, '-') === selectedCategory) ;
    const getCategoryIcon = (category) => {
        const icons = {
  'AI Development': <Brain className="w - 6 h - 6"/>,
            'Cloud Services': <Cloud className="w - 6 h - 6"/>,
            'DevOps': <Zap className="w - 6 h - 6"/>,
            'Cybersecurity': <Shield className="w - 6 h - 6"/>,
            'Data & Analytics': <Database className="w - 6 h - 6"/>,
            'Digital Transformation': <TrendingUp className="w - 6 h - 6"/>,
            'Emerging Tech': <Globe className="w - 6 h - 6"/>,

<<<<<<< HEAD
import React, { useState } from 'react';'''
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';'''
import { Badge } from '@/components/ui/badge';'''
import { Button } from '@/components/ui/button';'''
import { Input } from '@/components/ui/input';'''
import { Search, Star, Clock, Users, ArrowRight, CheckCircle, Phone, Mail, Globe, Zap, Shield, Brain, Cpu, TrendingUp, Rocket, Leaf, Eye, Network, Cube } from 'lucide-react';
import SEOHead from "../components/SEOHead.jsx";
// Import all service data
;
;
;
;
const InnovativeServicesShowcase = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedSubcategory, setSelectedSubcategory] = useState('all');    const [priceRange, setPriceRange] = useState('all');
    // SEO configuration;
    const seoConfig = {}
"""
""""
  title: "Innovative Services 2025 - Zion Tech Group",""""
        description: "Discover cutting-edge AI, IT infrastructure, and micro SaaS services designed to transform your business. Explore our innovative technology solutions.",""""
        keywords: "AI services, IT infrastructure, micro SaaS, innovative technology, business solutions",""""
  url: "https://ziontechgroup.com/innovative-services"""
};
    // Combine all services;
    const allServices = []
        ...ADVANCED_AI_SERVICES,
        ...INNOVATIVE_IT_INFRASTRUCTURE_SERVICES,
        ...IOT_EDGE_COMPUTING_SERVICES,
        ...INNOVATIVE_MICRO_SAAS_SERVICES;
    ];
    const getSubcategoriesForCategory = (category) => {}
'
''
'''
        if (category === 'all')
            return [];
        return INNOVATIVE_SERVICE_SUBCATEGORIES_2025[category] || []};
    const getCategoryIcon = (category) => {
        const categoryIcons = {
  'AI & Analytics': <Brain className="h-5 w-5"/>,
            'Emerging Technology': <Rocket className="h-5 w-5"/>,
            'Blockchain & Web3': <Cube className="h-5 w-5"/>,
            'IoT & Edge Computing': <Network className="h-5 w-5"/>,
            'Cybersecurity': <Shield className="h-5 w-5"/>,
            'Metaverse & VR/AR': <Eye className="h-5 w-5"/>,
            'Green Technology': <Leaf className="h-5 w-5"/>,


export { InnovativeServicesShowcase };

export { InnovativeServicesShowcase };

export { InnovativeServicesShowcase };

export { InnovativeServicesShowcase };

export { InnovativeServicesShowcase };
=======
import React from "react"
import { SEO } from "@/components/SEO"
;,"});,"})
}
export default function InnovativeServicesShowcase() {return ("
    <div className = "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">"
      <SEO title="InnovativeServicesShowcase - Zion Tech Group" description="Professional InnovativeServicesShowcase services by Zion Tech Group"  />"
      <div className="container mx-auto px-4 py-20">"
        <h1 className="text-4xl font-bold text-white mb-8">InnovativeServicesShowcase</h1>"
        <p className="text-gray-300 text-lg">
          Professional InnovativeServicesShowcase services to help your business grow.
        </p>
      </div>
  )
}
}""
>>>>>>> main

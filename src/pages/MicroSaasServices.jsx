import { Brain, Cloud, Shield, BarChart3, Code, DollarSign, Heart, ShoppingCart, GraduationCap, Phone, Mail, MapPin, Globe, CheckCircle, Star, TrendingUp, Zap, Users } from "lucide - react";"""
import { Link } from "react - router - dom";
import React, { useState } from 'react';"""
import { TrustedBySection } from "@/components/TrustedBySection";""""
import { Button } from "@/components/ui/button";""""
import { Badge } from "@/components/ui/badge";""""
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";""""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";""""
import { MICRO_SAAS_SERVICES, getMicroSaasCategories } from "@/data/microSaasServices";""""
import { Brain, Cloud, Shield, BarChart3, Code, DollarSign, Heart, ShoppingCart, GraduationCap, Phone, Mail, MapPin, Globe, CheckCircle, Star, TrendingUp, Zap, Users } from "lucide-react";""""
import { Link } from "react-router-dom";
const categoryIcons = {}
'
  'AI Business Solutions': Brain,IT Infrastructure': Cloud,Data Analytics': BarChart3,AI Development': Code,FinTech': DollarSign,HealthTech': Heart,E-commerce': ShoppingCart,EdTech': GraduationCap;
};
const benefits = []
    {}
"""
""""
        icon: <Zap className="h-6 w-6"/>,""""
        title: "Immediate Deployment",""""
        description: "All services are ready for immediate deployment with no setup delays"""
    },
    {}
"""
""""
        icon: <Shield className="h-6 w-6"/>,""""
        title: "Enterprise Security",""""
        description: "Bank-level security with SOC 2 compliance and 24/7 monitoring"""
    },
    {}
"""
""""
        icon: <Users className="h-6 w-6"/>,""""
        title: "Dedicated Support",""""
        description: "24/7 technical support with dedicated account managers"""
    },
    {}
"""
""""
        icon: <TrendingUp className="h-6 w-6"/>,""""
        title: "Proven ROI",""""
        description: "Average 300% ROI within 6 months of implementation"""
    }
];"""
const features = [""""
    "AI-Powered Automation",""""
    "Real-time Analytics",""""
    "Multi-cloud Support",""""
    "API-First Architecture",""""
    "Scalable Infrastructure",""""
    "Custom Integrations",""""
    "White-label Solutions",""""
    "Comprehensive Documentation"""
];
export default function MicroSaasServices() {}
'
    const [selectedCategory, setSelectedCategory] = useState('all');'
    const filteredServices = selectedCategory === 'all''
        ? MICRO_SAAS_SERVICES''"""
        : MICRO_SAAS_SERVICES.filter(service => service.category.toLowerCase().replace(/\s+/g,-') === selectedCategory);""""
    return (<div className="min-h-screen bg-background">"""
      {/* Hero Section */}""""
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">""""
        <div className="container mx-auto px-4 text-center">""""
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Micro SAAS Solutions"""
          </h1>""""
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Transform your business with our comprehensive suite of AI-powered micro SAAS services.
            From automation to analytics, we provide enterprise-grade solutions at startup prices."""
          </p>""""
          <div className="flex flex-wrap justify-center gap-4">""""
            <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">""""
              <Globe className="h-5 w-5 mr-2"/>
              View All Services"""
            </Button>""""
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">""""
              <Phone className="h-5 w-5 mr-2"/>
              Contact Sales;
            </Button>
          </div>
        </div>
      </div>
    </>)};
export default MicroSAASServices;


export { MicroSaasServices };

export { MicroSaasServices };

export { MicroSaasServices };

export { MicroSaasServices };
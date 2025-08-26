<<<<<<< HEAD
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Zap, Eye, Phone, Mail, MapPin, Globe, DollarSign, Clock, Users, Search, Building } from 'lucide-react';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, PRICING_TIERS } from '@/data/comprehensiveServices';
export default function ComprehensiveServicesPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedPricingTier, setSelectedPricingTier] = useState('all');
    const filteredServices = useMemo(() => {
        return COMPREHENSIVE_SERVICES.filter(service => {
            const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
            const matchesPricing = selectedPricingTier === 'all' || service.pricingTier === selectedPricingTier;
            return matchesSearch && matchesCategory && matchesPricing;
        });
    }, [searchTerm, selectedCategory, selectedPricingTier]);
    return (<div className="min-h-screen bg-zion-blue-dark">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue to-zion-blue-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Micro SAAS Solutions
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our extensive portfolio of innovative micro SAAS, IT, and AI services designed to transform your business operations and drive growth
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
                <Phone className="w-5 h-5 mr-2"/>
                Get Started Today
              </Button>
            </Link>
            <Link to="/services-pricing">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <DollarSign className="w-5 h-5 mr-2"/>
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-zion-blue py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-zion-cyan"/>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-zion-cyan"/>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-zion-cyan"/>
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-zion-cyan"/>
              <a href="https://ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div className="bg-zion-blue-dark py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5"/>
              <Input placeholder="Search services..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light"/>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48 bg-zion-blue border-zion-blue-light text-white">
                <SelectValue placeholder="Category"/>
              </SelectTrigger>
              <SelectContent className="bg-zion-blue border-zion-blue-light">
                <SelectItem value="all">All Categories</SelectItem>
                {SERVICE_CATEGORIES.map(category => (<SelectItem key={category} value={category}>{category}</SelectItem>))}
              </SelectContent>
            </Select>
            <Select value={selectedPricingTier} onValueChange={setSelectedPricingTier}>
              <SelectTrigger className="w-full md:w-48 bg-zion-blue border-zion-blue-light text-white">
                <SelectValue placeholder="Pricing Tier"/>
              </SelectTrigger>
              <SelectContent className="bg-zion-blue border-zion-blue-light">
                <SelectItem value="all">All Tiers</SelectItem>
                {Object.keys(PRICING_TIERS).map(tier => (<SelectItem key={tier} value={tier}>{tier}</SelectItem>))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (<Card key={service.id} className="bg-zion-blue border-zion-blue-light hover:border-zion-cyan transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-lg flex items-center justify-center text-zion-cyan mb-3">
                      <Building className="w-6 h-6"/>
                    </div>
                    <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (<Badge key={tag} variant="secondary" className="bg-zion-blue-light text-zion-cyan">
                        {tag}
                      </Badge>))}
                  </div>

                  {/* Service Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-zion-slate-light">
                      <Clock className="w-4 h-4"/>
                      <span className="text-sm">{service.availability}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light">
                      <Globe className="w-4 h-4"/>
                      <span>{service.location}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                      <Phone className="w-4 h-4 mr-2"/>
                      Get Quote
                    </Button>
                    <Button variant="outline" className="border-zion-blue-light text-zion-cyan hover:bg-zion-blue-light/10">
                      <Eye className="w-4 h-4"/>
                    </Button>
                  </div>
                </CardContent>
              </Card>))}
          </div>

          {filteredServices.length === 0 && (<div className="text-center py-16">
              <div className="text-zion-slate-light text-xl mb-4">No services found matching your criteria</div>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedSubcategory('all');
                setPriceRange('all');
            }}>
                Clear Filters
              </Button>
            </div>)}
        </div>
      </div>

      {/* Service Categories Overview */}
      <div className="py-16 px-4 bg-zion-blue-dark">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Service Categories</h2>
            <p className="text-zion-slate-light text-lg">
              Explore our comprehensive range of technology services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
            {
                icon: <Zap className="w-8 h-8"/>,
                title: "Innovation First",
                description: "Cutting-edge AI and technology solutions that keep you ahead of the competition"
            },
            {
                icon: <Shield className="w-8 h-8"/>,
                title: "Enterprise Security",
                description: "Bank-level security and compliance for all our solutions and services"
            },
            {
                icon: <Building className="w-8 h-8"/>,
                title: "Proven Results",
                description: "Track record of successful implementations and measurable business outcomes"
            },
            {
                icon: <Users className="w-8 h-8"/>,
                title: "Expert Support",
                description: "24/7 technical support and dedicated account management for enterprise clients"
            }
        ].map((feature, index) => (<div key={index} className="text-center p-6 rounded-lg border border-zion-blue-light">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4 text-zion-cyan">
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light text-sm">{feature.description}</p>
              </div>))}
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to discuss your technology needs and discover how we can help you achieve your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-cyan hover:text-white">
              <Phone className="w-5 h-5 mr-2"/>
              Call +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple">
              <Mail className="w-5 h-5 mr-2"/>
              Email kleber@ziontechgroup.com
            </Button>
          </div>
          <div className="mt-8 text-zion-cyan">
            <p>Visit us: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Website: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>);
}
=======
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import ComprehensiveServicesShowcase from '@/components/ComprehensiveServicesShowcase';

const ComprehensiveServices: React.FC = () => {
  return (
    <>
      <SEO 
        title="Comprehensive Technology Services | Zion Tech Group"
        description="Discover our comprehensive portfolio of cutting-edge micro SAAS services, AI solutions, and emerging technology platforms designed to transform your business."
        keywords="AI services, cybersecurity, blockchain, IoT, quantum computing, AR/VR, space technology, synthetic biology, brain-computer interface, sustainable energy, autonomous vehicles"
        canonical="https://ziontechgroup.com/comprehensive-services"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ComprehensiveServicesShowcase />
      </motion.div>
    </>
  );
};

export default ComprehensiveServices;
>>>>>>> 56229ef9d959dca80d78e89ba2b28c0e10af1144

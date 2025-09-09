import React, { useState } from 'react';
import { TrustedBySection } from "@/components/TrustedBySection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MICRO_SAAS_SERVICES, MICRO_SAAS_CATEGORIES, PRICING_TIERS, CONTACT_INFO } from "@/data/microSaasServices";
import { Brain, Cloud, Shield, BarChart3, Code, DollarSign, Heart, ShoppingCart, GraduationCap, Phone, Mail, MapPin, Globe, CheckCircle, Star, TrendingUp, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";
const categoryIcons = {
    'AI Business Solutions': Brain,
    'IT Infrastructure': Cloud,
    'Data Analytics': BarChart3,
    'AI Development': Code,
    'FinTech': DollarSign,
    'HealthTech': Heart,
    'E-commerce': ShoppingCart,
    'EdTech': GraduationCap
};
const benefits = [
    {
        icon: <Zap className="h-6 w-6"/>,
        title: "Immediate Deployment",
        description: "All services are ready for immediate deployment with no setup delays"
    },
    {
        icon: <Shield className="h-6 w-6"/>,
        title: "Enterprise Security",
        description: "Bank-level security with SOC 2 compliance and 24/7 monitoring"
    },
    {
        icon: <Users className="h-6 w-6"/>,
        title: "Dedicated Support",
        description: "24/7 technical support with dedicated account managers"
    },
    {
        icon: <TrendingUp className="h-6 w-6"/>,
        title: "Proven ROI",
        description: "Average 300% ROI within 6 months of implementation"
    }
];
const features = [
    "AI-Powered Automation",
    "Real-time Analytics",
    "Multi-cloud Support",
    "API-First Architecture",
    "Scalable Infrastructure",
    "Custom Integrations",
    "White-label Solutions",
    "Comprehensive Documentation"
];
export default function MicroSaasServices() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const filteredServices = selectedCategory === 'all'
        ? MICRO_SAAS_SERVICES
        : MICRO_SAAS_SERVICES.filter(service => service.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory);
    return (<div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light opacity-20 animate-pulse"></div>
        </div>
        
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-3xl mx-auto">
            Powerful, affordable software solutions designed for modern businesses. 
            From AI-powered tools to enterprise-grade security, we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
              <Globe className="h-5 w-5 mr-2"/>
              View All Services
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Phone className="h-5 w-5 mr-2"/>
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              We deliver enterprise-grade solutions with startup agility and proven results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (<Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-white">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-zion-purple rounded-full flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="bg-zion-blue-dark/50 backdrop-blur-md rounded-2xl p-6 border border-zion-blue-light">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search micro SAAS services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`flex items-center gap-2 ${
                    selectedCategory === category.value
                      ? "bg-zion-purple text-white"
                      : "border-zion-blue-light text-zion-slate-light hover:bg-zion-purple/10"
                  }`}
                >
                  {category.icon}
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (<div key={index} className="text-center">
                <div className="w-16 h-16 bg-zion-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-zion-purple"/>
                </div>
                <p className="font-medium text-zion-blue">{feature}</p>
              </div>))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Choose the plan that fits your business needs and scale as you grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(PRICING_TIERS).map(([key, tier]) => (<Card key={key} className={`relative ${key === 'professional' ? 'border-zion-purple border-2 scale-105' : ''}`}>
                {key === 'professional' && (<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-zion-purple text-white px-4 py-2">Most Popular</Badge>
                  </div>)}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-zion-blue">{tier.name}</CardTitle>
                  <CardDescription>
                    Perfect for {key === 'basic' ? 'startups' : key === 'professional' ? 'growing businesses' : 'enterprises'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-zion-blue">{tier.multiplier}x</span>
                    <span className="text-gray-600 ml-2">base pricing</span>
                  </div>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2"/>
                      All core features included
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2"/>
                      {key === 'enterprise' ? 'Unlimited' : 'Standard'} support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2"/>
                      {key === 'enterprise' ? 'Custom' : 'Standard'} integrations
                    </li>
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                        <Award className="h-4 w-4 text-zion-purple" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-zion-slate-dark/50 text-zion-slate-light border-zion-blue-light">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our micro SAAS solutions to grow faster, 
            work smarter, and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light text-lg py-6">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple text-lg py-6">
              Schedule Demo
            </Button>
          </div>
          
          <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setSelectedCategory(value)}>
            <TabsList className="grid w-full grid-cols-9 bg-zion-blue-dark border-zion-blue-light">
              <TabsTrigger value="all" className="text-white">All</TabsTrigger>
              {MICRO_SAAS_CATEGORIES.map((category) => {
            const IconComponent = categoryIcons[category.label];
            return (<TabsTrigger key={category.value} value={category.value} className="text-white">
                    {IconComponent && <IconComponent className="h-4 w-4 mr-2"/>}
                    {category.label.split(' ')[0]}
                  </TabsTrigger>);
        })}
            </TabsList>
            
            <TabsContent value={selectedCategory} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (<Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                    <div className="relative">
                      <img src={service.images[0]} alt={service.title} className="w-full h-48 object-cover rounded-t-lg"/>
                      <Badge className="absolute top-4 right-4 bg-zion-purple">
                        {service.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-zion-slate-light">
                        {service.description.substring(0, 120)}...
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1"/>
                          <span className="text-sm">{service.rating}</span>
                          <span className="text-zion-slate-light text-sm ml-1">({service.reviewCount})</span>
                        </div>
                        <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                          AI Score: {service.aiScore}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-zion-cyan">
                          ${service.price}
                          <span className="text-sm text-zion-slate-light">/month</span>
                        </div>
                        <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-dark">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-zion-blue-dark/30 rounded-2xl p-8 border border-zion-blue-light">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Need Custom Solutions?</h2>
            <p className="text-zion-slate-light text-lg">
              Our team of experts can help you build custom micro SAAS solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-zion-blue mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-zion-purple mr-3"/>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">{CONTACT_INFO.mobile}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-zion-purple mr-3"/>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-zion-purple mr-3"/>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-zion-purple mr-3"/>
                  <div>
                    <p className="font-medium">Website</p>
                    <a href={CONTACT_INFO.website} className="text-zion-cyan hover:underline">
                      {CONTACT_INFO.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-zion-slate-dark/30 rounded-xl">
              {/* Mail icon was removed from imports, so this will cause an error */}
              {/* <Mail className="h-12 w-12 text-zion-cyan mx-auto mb-4" /> */}
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="p-6 bg-zion-slate-dark/30 rounded-xl">
              {/* MapPin icon was removed from imports, so this will cause an error */}
              {/* <MapPin className="h-12 w-12 text-zion-cyan mx-auto mb-4" /> */}
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBySection />
    </div>);
}

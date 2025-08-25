import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain,
  Clock,
  DollarSign,
  Users,
  CheckCircle
} from 'lucide-react';
import { expandedServiceCategories, getFeaturedServices } from '@/data/expandedServices';
import { TrustedBySection } from '@/components/TrustedBySection';

export default function ServicesOverviewPage() {
  const featuredServices = getFeaturedServices();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-zion-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Complete Tech Solutions
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            From AI-powered chatbots to enterprise cloud solutions, we provide comprehensive technology services 
            that drive innovation and growth for businesses of all sizes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-lg px-8 py-4">
              Explore All Services
            </Button>
            <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 text-lg px-8 py-4">
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular and highly-rated services that deliver exceptional value and results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-3 right-3 bg-zion-purple text-white">
                    Featured
                  </Badge>
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {service.rating}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-zion-purple transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-zion-purple" />
                      <span className="text-sm font-medium">AI Score: {service.aiScore}</span>
                    </div>
                    <Badge variant="secondary">
                      {service.category}
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-4">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-zion-purple">
                        ${service.pricing.amount.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">
                        {service.pricing.type === 'monthly' ? '/month' : 'one-time'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-700 flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {service.deliveryTime}
                      </div>
                      <div className="text-xs text-gray-500">Delivery</div>
                    </div>
                  </div>

                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of technology services organized by category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expandedServiceCategories.map((category) => (
              <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-4xl`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-2xl text-gray-900">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-700 mb-2">Popular Services:</h4>
                    {category.services.slice(0, 3).map((service) => (
                      <div key={service.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm font-medium text-gray-700">{service.title}</span>
                        <Badge variant="outline" className="text-xs">
                          ${service.pricing.amount.toLocaleString()}
                        </Badge>
                      </div>
                    ))}
                    {category.services.length > 3 && (
                      <div className="text-sm text-zion-purple text-center">
                        +{category.services.length - 3} more services
                      </div>
                    )}
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-zion-purple group-hover:text-white transition-colors">
                    View All {category.name} Services
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zion-purple/20 flex items-center justify-center">
                <Brain className="h-8 w-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-First Approach</h3>
              <p className="text-zion-slate-light">
                Leverage the latest AI technologies to automate, optimize, and innovate your business processes
              </p>
            </div>

            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zion-purple/20 flex items-center justify-center">
                <Shield className="h-8 w-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light">
                Bank-grade security and compliance standards to protect your data and maintain trust
              </p>
            </div>

            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zion-purple/20 flex items-center justify-center">
                <Zap className="h-8 w-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rapid Deployment</h3>
              <p className="text-zion-slate-light">
                Quick implementation and deployment to get your solutions up and running faster
              </p>
            </div>

            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zion-purple/20 flex items-center justify-center">
                <Users className="h-8 w-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-zion-slate-light">
                24/7 technical support and dedicated account management for ongoing success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Competitive pricing with flexible options to fit your business needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-purple mb-2">$450</div>
              <div className="text-lg text-gray-600 mb-4">Starting Monthly</div>
              <p className="text-gray-500">
                Perfect for small businesses and startups looking to implement AI and automation solutions
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-zion-purple mb-2">$8,500</div>
              <div className="text-lg text-gray-600 mb-4">Average Project</div>
              <p className="text-gray-500">
                Comprehensive solutions for medium-sized businesses requiring custom development
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-zion-purple mb-2">$25,000+</div>
              <div className="text-lg text-gray-600 mb-4">Enterprise Solutions</div>
              <p className="text-gray-500">
                Large-scale implementations for enterprise clients with complex requirements
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              All prices include setup, training, and initial support
            </p>
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can transform your business. 
            Get in touch for a free consultation and personalized quote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-lg px-8 py-4">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 text-lg px-8 py-4">
              View Portfolio
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-zion-slate-light">
            <div>
              <h3 className="font-semibold text-white mb-2">Contact Information</h3>
              <p>Mobile: +1 302 464 0950</p>
              <p>Email: kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Address</h3>
              <p>364 E Main St STE 1008</p>
              <p>Middletown DE 19709</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Website</h3>
              <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustedBySection />
    </div>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Shield, 
  Cloud, 
  BarChart3, 
  Zap, 
  Eye, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  Users,
  Globe,
  Database,
  Code,
  Lock
} from "lucide-react";
import { SERVICE_CATEGORIES, PRICING_TIERS } from "@/data/comprehensiveServices";

export default function ServicesOverviewPage() {
  const getCategoryIcon = (icon: string) => {
    return <span className="text-4xl">{icon}</span>;
  };

  const getCategoryColor = (color: string) => {
    return `bg-gradient-to-br ${color}`;
  };

  return (
    <>
      <SEO 
        title="Services Overview - Zion Tech Group" 
        description="Explore our comprehensive range of AI, cybersecurity, cloud, and digital transformation services. Expert solutions for every business need."
        keywords="AI services, cybersecurity, cloud solutions, digital transformation, IT services overview"
        canonical="https://ziontechgroup.com/services-overview"
      />
      
      <Header />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-zion-blue to-zion-blue-dark">
          <div className="container mx-auto px-4 text-center">
            <GradientHeading className="text-5xl md:text-6xl mb-6">
              Complete Service Portfolio
            </GradientHeading>
            <p className="text-zion-slate-light text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              From AI-powered automation to enterprise cybersecurity, discover our comprehensive suite of 
              technology services designed to transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg px-8 py-4"
                asChild
              >
                <a href="mailto:kleber@ziontechgroup.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 text-lg px-8 py-4"
                asChild
              >
                <a href="tel:+13024640950">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 302 464 0950
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Info Banner */}
        <section className="py-8 bg-zion-blue-light border-b border-zion-blue-light">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <div className="flex items-center gap-4">
                <div className="bg-zion-purple/20 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-zion-purple" />
                </div>
                <div>
                  <p className="text-zion-slate-light text-sm">Headquarters</p>
                  <p className="text-white font-medium">364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-zion-cyan/20 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-zion-cyan" />
                </div>
                <div>
                  <p className="text-zion-slate-light text-sm">Contact</p>
                  <p className="text-white font-medium">+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-zion-purple/20 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-zion-purple" />
                </div>
                <div>
                  <p className="text-zion-slate-light text-sm">Email</p>
                  <p className="text-white font-medium">kleber@ziontechgroup.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories Overview */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <GradientHeading>Service Categories</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
                Explore our comprehensive range of technology services across multiple domains
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICE_CATEGORIES.map((category) => (
                <Card key={category.id} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-xl hover:shadow-zion-purple/20 group">
                  <div className={`${getCategoryColor(category.color)} p-8 rounded-t-lg flex items-center justify-center`}>
                    {getCategoryIcon(category.icon)}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {category.name}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-6">
                      {category.description}
                    </p>
                    
                    <div className="mb-6">
                      <p className="text-zion-cyan font-medium mb-2">
                        {category.services.length} Services Available
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.services.slice(0, 3).map((service) => (
                          <Badge key={service.id} variant="secondary" className="bg-zion-blue-light text-zion-slate-light text-xs">
                            {service.title.split(' ').slice(0, 2).join(' ')}
                          </Badge>
                        ))}
                        {category.services.length > 3 && (
                          <Badge variant="outline" className="border-zion-purple/30 text-zion-purple text-xs">
                            +{category.services.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                      asChild
                    >
                      <a href={`/comprehensive-services?category=${category.id}`}>
                        Explore Services
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <GradientHeading>Why Choose Our Services?</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
                We deliver exceptional value through innovation, expertise, and proven results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-zion-purple/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-10 w-10 text-zion-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI-Powered</h3>
                <p className="text-zion-slate-light">Leverage cutting-edge AI technologies for competitive advantage</p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-cyan/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-zion-slate-light">Bank-grade security and compliance for critical systems</p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-purple/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-10 w-10 text-zion-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Rapid Deployment</h3>
                <p className="text-zion-slate-light">Quick implementation with minimal business disruption</p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-cyan/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expert Support</h3>
                <p className="text-zion-slate-light">24/7 technical support and dedicated account management</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <GradientHeading>Flexible Pricing Options</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
                Choose the service level that best fits your business needs and budget
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {PRICING_TIERS.map((tier, index) => (
                <Card key={tier.name} className={`bg-zion-blue-dark border p-8 text-center relative ${
                  index === 1 ? 'border-zion-purple scale-105 shadow-xl shadow-zion-purple/20' : 'border-zion-blue-light'
                }`}>
                  {index === 1 && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-zion-purple text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">{tier.price}</div>
                  <p className="text-zion-slate-light mb-6">{tier.description}</p>
                  
                  <ul className="space-y-3 mb-8 text-left">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                        <span className="text-zion-slate-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                    asChild
                  >
                    <a href="mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry">
                      Get Started
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Highlights */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <GradientHeading>Service Highlights</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
                Key features and capabilities that set our services apart
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6">
                <div className="bg-zion-purple/20 p-3 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-zion-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Scalable Solutions</h3>
                <p className="text-zion-slate-light">Our services grow with your business, from startup to enterprise scale</p>
              </div>
              
              <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6">
                <div className="bg-zion-cyan/20 p-3 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
                <p className="text-zion-slate-light">Services available worldwide with local compliance and support</p>
              </div>
              
              <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6">
                <div className="bg-zion-purple/20 p-3 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                  <Database className="h-8 w-8 text-zion-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Data-Driven</h3>
                <p className="text-zion-slate-light">Analytics and insights to optimize performance and ROI</p>
              </div>
              
              <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6">
                <div className="bg-zion-cyan/20 p-3 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                  <Code className="h-8 w-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Custom Development</h3>
                <p className="text-zion-slate-light">Tailored solutions designed specifically for your business needs</p>
              </div>
              
              <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6">
                <div className="bg-zion-purple/20 p-3 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                  <Lock className="h-8 w-8 text-zion-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Security First</h3>
                <p className="text-zion-slate-light">Enterprise-grade security built into every solution</p>
              </div>
              
              <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6">
                <div className="bg-zion-cyan/20 p-3 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Future-Ready</h3>
                <p className="text-zion-slate-light">Built with emerging technologies and forward-thinking architecture</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto">
              Contact our team today for a free consultation and discover how our comprehensive services 
              can transform your business and drive innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg px-8 py-4"
                asChild
              >
                <a href="mailto:kleber@ziontechgroup.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Schedule Free Consultation
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 text-lg px-8 py-4"
                asChild
              >
                <a href="tel:+13024640950">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 302 464 0950
                </a>
              </Button>
            </div>
            
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">Visit Our Office</h3>
              <p className="text-zion-slate-light mb-2">
                <MapPin className="inline h-4 w-4 mr-2" />
                364 E Main St STE 1008, Middletown DE 19709
              </p>
              <p className="text-zion-slate-light">
                <Clock className="inline h-4 w-4 mr-2" />
                Monday - Friday: 9:00 AM - 6:00 PM EST
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-ae1c
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  );
}
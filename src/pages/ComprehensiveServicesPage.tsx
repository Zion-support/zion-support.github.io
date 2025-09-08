import React, { useState, useMemo } from 'react';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Star, Clock, DollarSign, Users, ArrowRight, Search, Filter, LayoutGrid, List } from 'lucide-react';
import { comprehensiveServices, serviceCategories, serviceSubcategories } from '@/data/comprehensiveServices';
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');

  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredServices = useMemo(() => {
    return comprehensiveServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
      
      return matchesSearch && matchesCategory && matchesSubcategory;
                  </div>
                </CardContent>
                <div className="px-6 pb-6">
                  <Button asChild className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                    <Link to={`/services/${service.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let our team of experts help you find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                <Link to="/request-quote">Request Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getCategoryIcon = (category: string) => {
    const categoryData = SERVICE_CATEGORIES.find(cat => cat.id === category);
    return categoryData?.icon || '🔧';
  };

  return (
    <>
      <SEOHead 
        title="Comprehensive Services - Zion Tech Group" 
        description="Discover our complete range of micro SAAS, IT services, and AI solutions. Transform your business with cutting-edge technology."
        keywords="micro SAAS, IT services, AI solutions, technology services, business solutions"
      />
      <FuturisticNavigation />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-zion-blue to-zion-blue-dark">
          <div className="container mx-auto px-4 text-center">
            <GradientHeading className="text-5xl md:text-6xl mb-6">
              Comprehensive Tech Services
            </GradientHeading>
            <p className="text-zion-slate-light text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Transform your business with our cutting-edge AI, cybersecurity, cloud, and digital transformation solutions. 
              Expert services designed for the modern enterprise.
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
      {/* Search and Filters */}
      <section className="py-12 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-zion-blue-light border-zion-purple/20 text-white placeholder-zion-slate-light focus:border-zion-purple focus:ring-zion-purple"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="text-zion-slate-light w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSelectedSubcategory('all');
                }}
                className="bg-zion-blue-light border-zion-purple/20 text-white rounded-md px-3 py-2 focus:border-zion-purple focus:ring-zion-purple"
              >
                <option value="all">All Categories</option>
                {serviceCategories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>

              {/* Subcategory Filter */}
              {selectedCategory !== 'all' && (
                <select
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  className="bg-zion-blue-light border-zion-purple/20 text-white rounded-md px-3 py-2 focus:border-zion-purple focus:ring-zion-purple"
                >
                  <option value="all">All Subcategories</option>
                  {getSubcategoriesForCategory(selectedCategory).map((subcategory) => (
                    <option key={subcategory} value={subcategory}>
                      {subcategory}
                    </option>
                  ))}
                </select>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="bg-zion-purple hover:bg-zion-purple-dark text-white"
              >
                <LayoutGrid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="bg-zion-purple hover:bg-zion-purple-dark text-white"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-center">
            <p className="text-zion-slate-light">
              Showing {filteredServices.length} of {comprehensiveServices.length} services
            </p>
        {/* Search and Filters */}
        <section className="py-12 bg-zion-blue-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search services, technologies, or solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light h-12 text-lg"
                />
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('all')}
                  className="bg-zion-purple hover:bg-zion-purple-dark border-zion-purple"
                >
                  All Categories
                </Button>
                {SERVICE_CATEGORIES.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category.id)}
                    className="bg-zion-purple hover:bg-zion-purple-dark border-zion-purple"
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </Button>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-center mt-6">
                <Button
                  variant={selectedPriceRange === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedPriceRange('all')}
                  className="bg-zion-cyan hover:bg-zion-cyan-dark border-zion-cyan"
                >
                  All Prices
                </Button>
                <Button
                  variant={selectedPriceRange === 'low' ? 'default' : 'outline'}
                  onClick={() => setSelectedPriceRange('low')}
                  className="bg-zion-cyan hover:bg-zion-cyan-dark border-zion-cyan"
                >
                  Under $3,000
                </Button>
                <Button
                  variant={selectedPriceRange === 'medium' ? 'default' : 'outline'}
                  onClick={() => setSelectedPriceRange('medium')}
                  className="bg-zion-cyan hover:bg-zion-cyan-dark border-zion-cyan"
                >
                  $3,000 - $7,000
                </Button>
                <Button
                  variant={selectedPriceRange === 'high' ? 'default' : 'outline'}
                  onClick={() => setSelectedPriceRange('high')}
                  className="bg-zion-cyan hover:bg-zion-cyan-dark border-zion-cyan"
                >
                  Over $7,000
                </Button>
              </div>
            </div>
      {/* Services Grid/List */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedSubcategory('all');
                }}
                className="bg-zion-purple hover:bg-zion-purple-dark text-white"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
            }>
              {filteredServices.map((service) => (
                <Card key={service.id} className={`bg-zion-blue-light border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:scale-105 group ${
                  viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                }`}>
                  <div className={`relative overflow-hidden rounded-t-lg ${
                    viewMode === 'list' ? 'lg:w-1/3' : ''
                  }`}>
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                        viewMode === 'list' ? 'h-48 lg:h-full' : 'h-48'
                      }`}
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-zion-purple text-white">
                        {service.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="secondary" className="bg-zion-blue-dark/80 text-zion-cyan">
                        {service.subcategory}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className={`flex-1 ${viewMode === 'list' ? 'lg:pl-6' : ''}`}>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl text-white group-hover:text-zion-cyan transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-zion-slate-light text-lg">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      {/* Pricing and Rating */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-5 h-5 text-zion-cyan" />
                          <span className="text-white font-bold text-xl">
                            {service.currency}{service.price}
                          </span>
                          <span className="text-zion-slate-light">
                            /{service.pricingModel === 'monthly' ? 'mo' : service.pricingModel === 'hourly' ? 'hr' : 'project'}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <span className="text-white font-semibold">{service.rating}</span>
                          <span className="text-zion-slate-light">({service.reviewCount} reviews)</span>
                        </div>
                      </div>

                      {/* Features Preview */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 4).map((feature, index) => (
                            <Badge key={index} variant="outline" className="border-zion-purple/30 text-zion-slate-light text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Delivery and Contact */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-2 text-zion-slate-light">
                          <Clock className="w-4 h-4" />
                          <span>Delivery: {service.estimatedDelivery}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-zion-slate-light">
                          <Users className="w-4 h-4" />
                          <span>{service.targetAudience.length} target audiences</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button 
                        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 group-hover:shadow-lg transition-all duration-300"
                        asChild
                      >
                        <a href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}>
                          Get Quote
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <GradientHeading>Flexible Pricing Options</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
                Choose the service level that best fits your business needs and budget
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {PRICING_TIERS.map((tier, index) => (
                <Card key={tier.name} className={`bg-zion-blue border p-8 text-center relative ${
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

        {/* Why Choose Us */}
        <section className="py-20 bg-zion-blue">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <GradientHeading>Why Choose Zion Tech Group?</GradientHeading>
              <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto">
                We deliver cutting-edge solutions with proven expertise and exceptional support
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-zion-purple/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-10 w-10 text-zion-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI-First Approach</h3>
                <p className="text-zion-slate-light">Leverage the latest AI technologies to gain competitive advantages</p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-cyan/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-zion-slate-light">Bank-grade security and compliance for your most critical systems</p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-purple/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-10 w-10 text-zion-purple" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Rapid Deployment</h3>
                <p className="text-zion-slate-light">Quick implementation with minimal disruption to your operations</p>
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
      {/* Contact CTA */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Contact us today to discuss your project requirements and get a personalized quote for any of our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg px-8 py-6"
              asChild
            >
              <a href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry">
                Contact Sales Team
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark text-lg px-8 py-6"
              asChild
            >
              <a href="tel:+13024640950">
                Call +1 (302) 464-0950
              </a>
            </Button>

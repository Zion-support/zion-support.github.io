import React, { useState } from 'react';
import {}
  ENHANCED_SERVICES,;
  ENHANCED_SERVICE_CATEGORIES,;
  SERVICE_PRICING_TIERS,';
  CONTACT_INFO} from '@/data/enhancedServices';';
import { Button } from '@/components/ui/button';
import {}
  Card,;
  CardContent,';
  CardDescription,'';
  CardHeader,''';
  CardTitle} from '@/components/ui/card';''';
import { Badge } from '@/components/ui/badge';''';
import { Input } from '@/components/ui/input';
import {}
  Select,;
  SelectContent,';
  SelectItem,'';
  SelectTrigger,''';
  SelectValue} from '@/components/ui/select';''';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {}
  Search,;
  Star,;
  Globe,;
  Phone,;
  Mail,;
  MapPin,;
  ExternalLink,;
  TrendingUp,;
  Shield,;
  Cloud,;
  Brain,;
  Database,;
  Code,;
  Zap,;
  Heart,;
  DollarSign,';
  Link,'';
  Users,''';
  CheckCircle} from 'lucide-react';''';
import SEO from '@/components/SEO';
export {};
  return null;
}
';
'';
''';
  const [searchTerm, setSearchTerm] = useState('');''';
  const [selectedCategory, setSelectedCategory] = useState('all');''';
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const filteredServices = ENHANCED_SERVICES.filter(service => {}
';
'';
''';
    const matchesPrice ='''';
      selectedPriceRange === 'all' ||'''';
      (selectedPriceRange === 'basic' && service.price <div>Broken JSX</div>
        service.price > 2000 &&''';
        service.price <div>Broken JSX</div>
      (selectedPriceRange === 'enterprise' && service.price > 8000);
    return matchesSearch && matchesCategory && matchesPrice});
  const getCategoryIcon = category => {}
    switch (category.toLowerCase()) {}
';
      case 'ai automation':'';
      case 'ai & machine learning': any;
        return <Brain className="w-5 h-5" />;';
      case 'cloud management':''";
      case 'cloud & infrastructure':"";
        return <Cloud className="w-5 h-5" />;';
      case 'cybersecurity':''";
      case 'security framework':"";
        return <Shield className="w-5 h-5" />;';
      case 'data engineering':''";
      case 'data & analytics':"";
        return <Database className="w-5 h-5" />;'";
      case 'business intelligence':"";
        return <TrendingUp className="w-5 h-5" />;';
      case 'developer tools':''";
      case 'development & devops':"";
        return <Code className="w-5 h-5" />;'";
      case 'digital transformation':"";
        return <Zap className="w-5 h-5" />;'";
      case 'healthcare technology':"";
        return <Heart className="w-5 h-5" />;'";
      case 'financial technology':"";
        return <DollarSign className="w-5 h-5" />;'";
      case 'blockchain':"";
        return <Link className="w-5 h-5" />;'";
      case 'quantum computing':"";
        return <Zap className="w-5 h-5" />;";
      default:"";
        return <Code className="w-5 h-5" />}
  }
  const getPriceRange = price => {}
';
    if (price <div>Broken JSX</div>
    <div className="min-h-screen bg-background">";
      <div>Broken JSX</div>
      />;
";
      {/* Hero Section */}"";
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">"";
        <div className="container mx-auto px-4 text-center">"";
          <h1 className="text-4xl md:text-6xl font-bold mb-6">;
            Enhanced IT & AI Services";
          </h1>"";
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">;
            Comprehensive micro SAAS solutions, IT services, and AI-powered;
            innovations to transform your business";
          </p>"";
          <div className="flex flex-wrap justify-center gap-4">";
            <div>Broken JSX</div>
              onClick={};
                  ?.scrollIntoView({ behavior: 'smooth' });,
}
            >;
              Explore Services;
            </Button>";
            <div>Broken JSX</div>
              onClick={};
                  ?.scrollIntoView({ behavior: 'smooth' });,
}
            >;
              Get in Touch;
            </Button>;
          </div>;
        </div>;
      </div>;
";
      {/* Pricing Tiers Overview */}"";
      <section className="py-16 bg-zion-blue-dark">"";
        <div className="container mx-auto px-4">"";
          <h2 className="text-3xl font-bold text-white text-center mb-12">;
            Service Pricing Tiers";
          </h2>"";
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">";
            {};
              <Card key={tier} className="bg-zion-blue border-zion-blue-light">"";
                <CardHeader className="text-center">"";
                  <CardTitle className="text-zion-cyan capitalize">;
                    {tier}";
                  </CardTitle>"";
                  <CardDescription className="text-zion-slate-light">;
                    {info.range}
                  </CardDescription>";
                </CardHeader>"";
                <CardContent className="text-center">"";
                  <p className="text-white">{info.description}</p>;
                </CardContent>;
              </Card>) ) }
          </div>;
        </div>;
      </section>;
";
      {/* Search and Filters */}"";
      <section className="py-8 bg-zion-blue">"";
        <div className="container mx-auto px-4">"";
          <div className="flex flex-col md:flex-row gap-4">"";
            <div className="flex-1 relative">"";
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />";
              <div>Broken JSX</div>
                onChange={e => setSearchTerm(e.target.value)}"";
                className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-zion-slate-light";
              />;
            </div>;
            <div>Broken JSX</div>
              onValueChange={setSelectedCategory}">"";
              <SelectTrigger className="w-full md:w-48 bg-zion-blue-dark border-zion-blue-light text-white">"";
                <SelectValue placeholder="All Categories" />;
              </SelectTrigger>";
              <SelectContent>"";
                <SelectItem value="all">All Categories</SelectItem>;
                {ENHANCED_SERVICE_CATEGORIES.map(category => (<SelectItem key={category.value} value={category.value}>;
                    {category.label}
                  </SelectItem>) ) }
              </SelectContent>
            </Select>
            <Select
              value={selectedPriceRange}
              onValueChange={setSelectedPriceRange}
            >
              <SelectTrigger className="w - full md:w - 48 bg - zion - blue - dark border - zion - blue - light text - white">
                <SelectValue placeholder="All Prices"       />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="basic">Basic ($500 - $2,000) </SelectItem>
                <SelectItem value="professional">
                  Professional ($2,000 - $8,000) </SelectItem>
                <SelectItem value="enterprise">Enterprise ($8,000+) </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'futuristic-grid' : 'space-y-6'}>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`futuristic-card hover-lift hover-glow ${
                    viewMode === 'list' ? 'flex flex-col lg:flex-row gap-6' : ''
                  }`}
                >
                  {/* Service Image */}
                  <div className={`${viewMode === 'list' ? 'lg:w-1/3' : 'mb-4'}`}>
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={service.images[0]}
                        alt={service.title}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                          {service.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className={`flex-1 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-medium text-white">{service.rating}</span>
                        <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                      </div>
                    </div>

                    <p className="text-zion-slate-light mb-4 leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features?.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-zion-blue/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 4).map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-zion-slate-dark/50 text-zion-slate-light text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price and Actions */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-zion-cyan">
                        {service.currency}{service.price?.toLocaleString()}
                        <span className="text-sm font-normal text-zion-slate-light ml-1">
                          {service.pricingModel}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Link
                          to={service.demoUrl}
                          className="px-4 py-2 bg-zion-purple text-white rounded-lg hover:bg-zion-purple-dark transition-colors duration-300 flex items-center gap-2"
                        >
                          <Play className="w-4 h-4" />
                          Demo
                        </Link>
                        <Link
                          to="/contact"
                          className="px-4 py-2 bg-zion-cyan text-black rounded-lg hover:bg-zion-cyan-dark transition-colors duration-300 flex items-center gap-2"
                        >
                          <Mail className="w-4 h-4" />
                          Contact
                        </Link>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-4 pt-4 border-t border-zion-cyan/20">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-zion-slate-light">
                          <Phone className="w-4 h-4" />
                          <span>{service.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-zion-slate-light">
                          <Mail className="w-4 h-4" />
                          <span>{service.contactEmail}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-zion-blue-dark/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="futuristic-title text-4xl md:text-5xl mb-6">
              Flexible Pricing Tiers
            </h2>
            <p className="futuristic-subtitle text-xl max-w-3xl mx-auto">
              Choose the perfect plan for your business size and needs. All plans include 24/7 support and regular updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRICING_TIERS.map((tier, index) => (
              <motion.div
                key={tier.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="futuristic-card text-center hover-lift"
              >
                <CardHeader>
                  <div className="flex items - start justify - between mb - 4">
                    <div className="flex items - center gap - 2">
                      {getCategoryIcon (service.category) }
                      <Badge
                        variant={
                          getPriceRange (service.price) === 'enterprise'
                            ? 'default'
                            : 'secondary'
                        }
                      >
                        {getPriceRange (service.price) }
                      </Badge>
                    </div>
                    {service.featured && (<Badge variant="default" className="bg - zion - purple">
                        Featured
                      </Badge>) }
                  </div>
                  <CardTitle className="text - xl mb - 2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text - sm text - zion - slate">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space - y-4">
                  <div className="flex items - center justify - between">
                    <div className="flex items - center gap - 2">
                      <Star className="w - 4 h - 4 text - yellow - 500 fill - current"       />
                      <span className="text - sm font - medium">
                        {service.rating}
                      </span>
                      <span className="text - sm text - zion - slate"> ({service.reviewCount} reviews) </span>
                    </div>
                    <div className="text - right">
                      <div className="text - 2xl font - bold text - zion - blue">
                        {service.currency}
                        {service.price?.toLocaleString () }
                      </div>
                      <div className="text - sm text - zion - slate">
                        {service.availability}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex - wrap gap - 2">
                    {service.tags.slice (0, 3) .map ( (tag, index) => (<Badge key={index} variant="outline" className="text - xs">
                        {tag}
                      </Badge>) ) }
                  </div>

                  <div className="flex items - center justify - between text - sm text - zion - slate">
                    <div className="flex items - center gap - 1">
                      <Globe className="w - 4 h - 4"       />
                      {service.location}
                    </div>
                    <div className="flex items - center gap - 1">
                      <TrendingUp className="w - 4 h - 4"       />
                      AI Score: {service.aiScore}
                    </div>
                  </div>

                  <div className="pt - 4 border - t border - zion - slate - light">
                    <div className="flex items - center justify - between text - sm">
                      <span className="text - zion - slate">
                        By {service.author.name}
                      </span>
                      <Button
                        size="sm"
                        className="bg - zion - purple hover:bg - zion - purple - dark text - white"
                        onClick={ () =>
                          document
                            .getElementById ('contact - section') ?.scrollIntoView ({ behavior: 'smooth' }) }
                      >
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>) ) }
          </div>
        </div>
      </section>

      {/* Service Categories Tabs */}
      <section className="py - 16 bg - zion - blue">
        <div className="container mx - auto px - 4">
          <h2 className="text - 3xl font - bold text - white text - center mb - 12">
            Explore by Category
          </h2>
          <Tabs defaultValue="ai - ml" className="w - full">
            <TabsList className="grid w - full grid - cols - 2 md:grid - cols - 4 lg:grid - cols - 6 bg - zion - blue - dark">
              {ENHANCED_SERVICE_CATEGORIES.slice (0, 6) .map (category => (<TabsTrigger
                  key={category.value}
                  value={category.value}
                  className="text - zion - slate - light data-[state = active]:text - zion - cyan"
                >
                  {category.label}
                </TabsTrigger>) ) }
            </TabsList>

            {ENHANCED_SERVICE_CATEGORIES.slice (0, 6) .map (category => (<TabsContent
                key={category.value}
                value={category.value}
                className="mt - 8"
              >
                <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">
                  {ENHANCED_SERVICES.filter (service =>
                    service.category
                      .toLowerCase () .includes (category.value.toLowerCase () ) ) .slice (0, 6) .map (service => (<Card
                        key={service.id}
                        className="bg - zion - blue - dark border - zion - blue - light text - white"
                      >
                        <CardHeader>
                          <CardTitle className="text - lg">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text - zion - slate - light">
                            {service.description.substring (0, 100) }...
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items - center justify - between">
                            <span className="text - zion - cyan font - bold">
                              {service.currency}
                              {service.price?.toLocaleString () }
                            </span>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border - zion - cyan text - zion - cyan hover:bg - zion - cyan / 10"
                            >
                              Learn More
                            </Button>
                          </div>
                        </CardContent>
                      </Card>) ) }
                </div>
              </TabsContent>) ) }
          </Tabs>;
        </div>;
      </section>;
";
      {/* Benefits Section */}"";
      <section className="py-16 bg-zion-blue-dark">"";
        <div className="container mx-auto px-4">"";
          <h2 className="text-3xl font-bold text-white text-center mb-12">;
            Why Choose Zion Tech Group Services?";
          </h2>"";
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"";
            <div className="text-center">"";
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">"";
                <CheckCircle className="w-8 h-8 text-white" />";
              </div>"";
              <h3 className="text-xl font-bold text-white mb-2">;
                Proven Expertise";
              </h3>"";
              <p className="text-zion-slate-light">;
                Industry-leading solutions with proven track records and;
                customer success stories;
              </p>";
            </div>"";
            <div className="text-center">"";
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">"";
                <Zap className="w-8 h-8 text-white" />";
              </div>"";
              <h3 className="text-xl font-bold text-white mb-2">;
                Innovation First";
              </h3>"";
              <p className="text-zion-slate-light">;
                Cutting-edge AI and emerging technologies to keep you ahead of;
                the competition;
              </p>";
            </div>"";
            <div className="text-center">"";
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">"";
                <Users className="w-8 h-8 text-white" />";
              </div>"";
              <h3 className="text-xl font-bold text-white mb-2">;
                Dedicated Support";
              </h3>"";
              <p className="text-zion-slate-light">;
                Personalized service with dedicated account managers and 24/7;
                technical support;
              </p>";
            </div>"";
            <div className="text-center">"";
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">"";
                <TrendingUp className="w-8 h-8 text-white" />";
              </div>"";
              <h3 className="text-xl font-bold text-white mb-2">ROI Focused</h3>"";
              <p className="text-zion-slate-light">;
                Measurable business outcomes and rapid return on investment for;
                all solutions;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;
";
      {/* Contact Section */}"";
      <section id="contact-section" className="py-16 bg-zion-blue">"";
        <div className="container mx-auto px-4">"";
          <div className="max-w-4xl mx-auto text-center">"";
            <h2 className="text-3xl font-bold text-white mb-8">;
              Ready to Transform Your Business?";
            </h2>"";
            <p className="text-xl text-zion-slate-light mb-12">;
              Get in touch with our experts to discuss your needs and discover;
              how our services can drive your success;
            </p>";
"";
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">"";
              <div className="flex items-center justify-center gap-3 text-zion-cyan">"";
                <Phone className="w-6 h-6" />"";
                <div className="text-left">"";
                  <div className="font-semibold">Phone</div>"";
                  <div className="text-sm">{CONTACT_INFO.mobile}</div>;
                </div>";
              </div>"";
              <div className="flex items-center justify-center gap-3 text-zion-cyan">"";
                <Mail className="w-6 h-6" />"";
                <div className="text-left">"";
                  <div className="font-semibold">Email</div>"";
                  <div className="text-sm">{CONTACT_INFO.email}</div>;
                </div>";
              </div>"";
              <div className="flex items-center justify-center gap-3 text-zion-cyan">"";
                <MapPin className="w-6 h-6" />"";
                <div className="text-left">"";
                  <div className="font-semibold">Address</div>"";
                  <div className="text-sm">{CONTACT_INFO.address}</div>;
                </div>;
              </div>;
            </div>";
"";
            <div className="flex flex-col sm:flex-row gap-4 justify-center">";
              <div>Broken JSX</div>
                onClick={};
                  window.open(`tel:${CONTACT_INFO.mobile}`,_self');,
}">"";
                <Phone className="w-5 h-5 mr-2" />;
                Call Now;
              </Button>";
              <div>Broken JSX</div>
                onClick={};
                  window.open(`mailto:${CONTACT_INFO.email}`,_self');,
}">"";
                <Mail className="w-5 h-5 mr-2" />;
                Send Email;
              </Button>";
              <div>Broken JSX</div>
                onClick={() => window.open(CONTACT_INFO.website,_blank')}">"";
                <ExternalLink className="w-5 h-5 mr-2" />;
                Visit Website;
              </Button>;
            </div>";
"";
            <div className="mt-12 p-6 bg-zion-blue-dark rounded-lg border border-zion-blue-light">"";
              <h3 className="text-xl font-bold text-white mb-4">;
                Special Enterprise Offerings";
              </h3>"";
              <p className="text-zion-slate-light mb-4">;
                For enterprise clients, we offer custom solution development,;
                dedicated support teams, and comprehensive implementation;
                services.;
              </p>";
              <div>Broken JSX</div>
                onClick={};
                    `mailto:${CONTACT_INFO.email}?subject=Enterprise%20Inquiry`,_self';
                  )}
              >;
                Request Enterprise Consultation;
              </Button>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>)}


export { EnhancedServicesPage }
export { EnhancedServicesPage }
export { EnhancedServicesPage }
export { EnhancedServicesPage }
export { EnhancedServicesPage }
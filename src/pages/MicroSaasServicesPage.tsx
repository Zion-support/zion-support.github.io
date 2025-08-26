import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Grid3X3, 
  List, 
  Star, 
  Clock, 
  DollarSign, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  ExternalLink, 
  Eye
} from 'lucide-react';
import { SEO } from "@/components/SEO";

export default function MicroSaasServicesPage() {
  const [listings, setListings] = useState<ProductListing[]>(MICRO_SAAS_SERVICES);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Categories', icon: <Grid3X3 className="h-4 w-4" /> },
    { value: 'AI & ML', label: 'AI & Machine Learning', icon: <Zap className="h-4 w-4" /> },
    { value: 'Development', label: 'Development Tools', icon: <List className="h-4 w-4" /> },
    { value: 'Business Tools', label: 'Business Tools', icon: <Eye className="h-4 w-4" /> },
    { value: 'Security', label: 'Security', icon: <Shield className="h-4 w-4" /> },
    { value: 'Analytics', label: 'Analytics', icon: <Grid3X3 className="h-4 w-4" /> },
    { value: 'Communication', label: 'Communication', icon: <Eye className="h-4 w-4" /> },
    { value: 'Productivity', label: 'Productivity', icon: <Clock className="h-4 w-4" /> },
    { value: 'Marketing', label: 'Marketing', icon: <Eye className="h-4 w-4" /> },
    { value: 'Finance', label: 'Finance', icon: <DollarSign className="h-4 w-4" /> },
    { value: 'Healthcare', label: 'Healthcare', icon: <CheckCircle className="h-4 w-4" /> },
    { value: 'Education', label: 'Education', icon: <Eye className="h-4 w-4" /> },
    { value: 'E-commerce', label: 'E-commerce', icon: <Eye className="h-4 w-4" /> }
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-50', label: '$0 - $50' },
    { value: '50-100', label: '$50 - $100' },
    { value: '100-200', label: '$100 - $200' },
    { value: '200+', label: '$200+' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest' }
  ];

  useEffect(() => {
    let filtered: any[] = [];

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(service => {
        if (priceRange === '200+') {
          return service.pricing.starter >= 200;
        }
        return service.pricing.starter >= min && service.pricing.starter <= max;
      });
    }

    // Sort services
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.pricing.starter - b.pricing.starter);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.pricing.starter - a.pricing.starter);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime());
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    setFilteredServices(filtered);
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  const getPriceRange = (service: any) => {
    const { starter, enterprise, currency } = service.pricing;
    return `${currency}${starter} - ${currency}${enterprise}`;
  };

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.value === category);
    return cat ? cat.icon : <Grid3X3 className="h-4 w-4" />;
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Professional, innovative, and cost-effective technology services designed to accelerate your business growth
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4 text-lg">
              <Globe className="w-5 h-5 mr-2" />
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg">
              View All Services
            </Button>
          </div>
          
          {/* Contact Information */}
          <div className="bg-zion-blue-dark/50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-zion-cyan text-lg font-semibold mb-4">Ready to Transform Your Business?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-zion-slate-light">Mobile</p>
                <p className="text-white font-medium">+1 302 464 0950</p>
              </div>
              <div>
                <p className="text-zion-slate-light">Email</p>
                <p className="text-white font-medium">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p className="text-zion-slate-light">Address</p>
                <p className="text-white font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Highlights */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              We deliver enterprise-grade solutions with startup agility, ensuring your business stays ahead of the competition
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate-dark font-semibold px-8 py-3">
                <ArrowRight className="h-5 w-5 mr-2" />
                Explore Services
              </Button>
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-semibold px-8 py-3">
                <Eye className="h-5 w-5 mr-2" />
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan">0+</div>
              <div className="text-zion-slate-light">Micro SAAS Services</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-zion-purple-light">12</div>
              <div className="text-zion-slate-light">Categories</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-zion-blue-light">4.8</div>
              <div className="text-zion-slate-light">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan-light">24/7</div>
              <div className="text-zion-slate-light">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="py-8 bg-zion-slate-dark border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />
              <input
                type="text"
                placeholder="Search micro SAAS services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-zion-slate border-zion-blue-light text-white placeholder-zion-slate-light"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-48 bg-zion-slate border-zion-blue-light text-white"
            >
              <option value="all">Select Category</option>
              {categories.map((category) => (
                <option key={category.value} value={category.value} className="text-white hover:bg-zion-blue-dark">
                  <div className="flex items-center gap-2">
                    {category.icon}
                    {category.label}
                  </div>
                </option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-40 bg-zion-slate border-zion-blue-light text-white"
            >
              <option value="all">Price Range</option>
              {priceRanges.map((range) => (
                <option key={range.value} value={range.value} className="text-white hover:bg-zion-blue-dark">
                  {range.label}
                </option>
              ))}
            </select>

            {/* Sort Options */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-40 bg-zion-slate border-zion-blue-light text-white"
            >
              <option value="featured">Sort by</option>
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value} className="text-white hover:bg-zion-blue-dark">
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="group overflow-hidden bg-zion-slate-dark border-zion-blue-light hover:border-zion-cyan transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {service.featured && (
                    <Badge className="absolute top-4 right-4 bg-zion-cyan text-zion-slate-dark font-semibold">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple-light border-zion-purple-light">
                      {getCategoryIcon(service.category)}
                      <span className="ml-1">{service.category}</span>
                    </Badge>
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold mb-3">{highlight.title}</h3>
                <p className="text-zion-slate-light mb-4">{highlight.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {highlight.benefits.map((benefit, idx) => (
                    <span key={idx} className="px-3 py-1 bg-zion-blue-light rounded-full text-zion-cyan text-sm">
                      {benefit}
                    </span>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-zion-cyan" />
                    <span className="text-white font-semibold">{getPriceRange(service)}</span>
                    <span className="text-zion-slate-light text-sm">/month</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag: string, index: number) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-zion-cyan">Key Benefits:</h4>
                    <ul className="text-xs text-zion-slate-light space-y-1">
                      {service.benefits.slice(0, 2).map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-zion-slate-light">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-3 pt-0">
                  <div className="flex gap-2 w-full">
                    <Button 
                      asChild 
                      className="flex-1 bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate-dark font-semibold"
                    >
                      <a href={service.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Site
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="border-zion-purple text-zion-purple-light hover:bg-zion-purple/10"
                    >
                      <a href={service.demo} target="_blank" rel="noopener noreferrer">
                        <Eye className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  
                  <div className="flex gap-2 w-full">
                    <Button 
                      asChild 
                      variant="outline" 
                      className="flex-1 border-zion-blue-light text-zion-blue-light hover:bg-zion-blue-dark/20"
                    >
                      <a href={service.documentation} target="_blank" rel="noopener noreferrer">
                        <Eye className="h-4 w-4 mr-2" />
                        Docs
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="flex-1 border-zion-blue-light text-zion-blue-light hover:bg-zion-blue-dark/20"
                    >
                      <a href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        Contact
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-zion-purple-dark via-zion-purple to-zion-cyan">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
            Our micro SAAS solutions are designed to scale with your business. Get started today with expert support and implementation guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-zion-slate-dark hover:bg-zion-cyan-light font-semibold px-8 py-3">
              <Clock className="h-5 w-5 mr-2" />
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3">
              <Eye className="h-5 w-5 mr-2" />
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Our Service Categories
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              From AI-powered solutions to enterprise security, we cover every aspect of modern technology needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {MICRO_SAAS_CATEGORIES.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`p-6 rounded-lg border-2 transition-all duration-300 text-left ${
                  selectedCategory === category.value
                    ? 'border-zion-cyan bg-zion-cyan/10'
                    : 'border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="text-zion-cyan mr-3">
                    {categoryIcons[category.label] || <Code className="w-6 h-6" />}
                  </div>
                  <h3 className="text-white text-lg font-semibold">{category.label}</h3>
                </div>
                {MICRO_SAAS_SUBCATEGORIES[category.value as keyof typeof MICRO_SAAS_SUBCATEGORIES] && (
                  <div className="flex flex-wrap gap-2">
                    {MICRO_SAAS_SUBCATEGORIES[category.value as keyof typeof MICRO_SAAS_SUBCATEGORIES].map((sub) => (
                      <span key={sub} className="px-2 py-1 bg-zion-blue-light rounded text-zion-cyan text-xs">
                        {sub}
                      </span>
                    ))}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Listing */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {selectedCategory === 'all' ? 'All Services' : `${MICRO_SAAS_CATEGORIES.find(c => c.value === selectedCategory)?.label} Services`}
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Discover our comprehensive range of professional technology services
            </p>
          </div>
          
          <DynamicListingPage 
            title=""
            description=""
            categorySlug="micro-saas-services"
            listings={filteredListings}
            categoryFilters={MICRO_SAAS_CATEGORIES}
            initialPrice={{ min: 199, max: 6000 }}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that trust Zion Tech Group for their technology needs. 
            Get started today with a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4 text-lg">
              <Globe className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
          
          {/* Contact Details */}
          <div className="bg-white/10 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-white text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-zion-slate-light mb-1">Mobile</p>
                <p className="text-white font-medium">+1 302 464 0950</p>
              </div>
              <div>
                <p className="text-zion-slate-light mb-1">Email</p>
                <p className="text-white font-medium">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p className="text-zion-slate-light mb-1">Address</p>
                <p className="text-white font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-zion-slate-light mb-2">Visit our website for more information</p>
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-cyan hover:text-zion-cyan-dark font-medium"
              >
                https://ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustedBySection />
    </>
  );
}
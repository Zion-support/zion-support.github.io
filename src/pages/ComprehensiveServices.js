<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ComprehensiveServicesShowcase } from '@/components/ComprehensiveServicesShowcase';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Globe, MapPin, Users, CheckCircle, TrendingUp, Shield, Zap, Star, ArrowRight, Award, MessageSquare } from 'lucide-react';
import { SERVICE_CATEGORIES } from '@/data/comprehensiveServices';
export default function ComprehensiveServices() {
    const stats = [
        { label: "Services Available", value: "20+", icon: _jsx(CheckCircle, { className: "h-6 w-6" }) },
        { label: "Countries Served", value: "195+", icon: _jsx(Globe, { className: "h-6 w-6" }) },
        { label: "Expert Team", value: "50+", icon: _jsx(Users, { className: "h-6 w-6" }) },
        { label: "Success Rate", value: "98%", icon: _jsx(TrendingUp, { className: "h-6 w-6" }) }
    ];
    const whyChooseUs = [
        {
            icon: _jsx(Award, { className: "h-8 w-8" }),
            title: "Expert Team",
            description: "Certified professionals with years of industry experience and proven track records."
        },
        {
            icon: _jsx(Shield, { className: "h-8 w-8" }),
            title: "Quality Assurance",
            description: "Rigorous quality standards and continuous monitoring to ensure exceptional results."
        },
        {
            icon: _jsx(Zap, { className: "h-8 w-8" }),
            title: "Fast Delivery",
            description: "Efficient project management and rapid deployment to meet your timeline requirements."
        },
        {
            icon: _jsx(Star, { className: "h-8 w-8" }),
            title: "Custom Solutions",
            description: "Tailored approaches designed specifically for your business needs and objectives."
        }
    ];
    const processSteps = [
        {
            step: "01",
            title: "Discovery & Assessment",
            description: "We analyze your current state, understand your goals, and identify opportunities for improvement."
        },
        {
            step: "02",
            title: "Strategy & Planning",
            description: "Develop a comprehensive roadmap with clear milestones, deliverables, and success metrics."
        },
        {
            step: "03",
            title: "Implementation",
            description: "Execute the plan with expert guidance, regular updates, and quality assurance checks."
        },
        {
            step: "04",
            title: "Optimization & Support",
            description: "Continuous monitoring, performance optimization, and ongoing support for long-term success."
        }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(SEO, { title: "Comprehensive Technology Services - Zion Tech Group", description: "Transform your business with our comprehensive suite of AI, cybersecurity, cloud, and digital transformation services. Expert solutions tailored to drive innovation and growth.", keywords: "AI services, cybersecurity, cloud migration, digital transformation, IT consulting, technology services", canonical: "https://ziontechgroup.com/services" }), _jsx("section", { className: "bg-zion-blue-dark py-20 px-4", children: _jsxs("div", { className: "container mx-auto text-center", children: [_jsxs("h1", { className: "text-5xl md:text-7xl font-bold text-white mb-6", children: ["Professional ", _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple", children: "Technology Services" })] }), _jsx("p", { className: "text-zion-slate-light text-xl md:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed", children: "Transform your business with our comprehensive suite of AI, cybersecurity, cloud, and digital transformation services. Expert solutions tailored to drive innovation, efficiency, and competitive advantage." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4 mb-12", children: [_jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg px-8 py-6", children: [_jsx(Phone, { className: "h-5 w-5 mr-2" }), "Get Free Consultation"] }), _jsxs(Button, { size: "lg", variant: "outline", className: "border-zion-purple text-zion-cyan hover:bg-zion-purple/10 text-lg px-8 py-6", children: [_jsx(MessageSquare, { className: "h-5 w-5 mr-2" }), "Request Quote"] })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto", children: stats.map((stat, index) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "flex justify-center mb-2 text-zion-cyan", children: stat.icon }), _jsx("div", { className: "text-2xl md:text-3xl font-bold text-white mb-1", children: stat.value }), _jsx("div", { className: "text-zion-slate-light text-sm", children: stat.label })] }, index))) })] }) }), _jsx("section", { className: "py-20 bg-zion-blue", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: ["Why Choose ", _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple", children: "Zion Tech Group" })] }), _jsx("p", { className: "text-zion-slate-light text-lg max-w-3xl mx-auto", children: "We combine deep technical expertise with business acumen to deliver solutions that drive real results" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: whyChooseUs.map((item, index) => (_jsxs(Card, { className: "border-zion-blue-light bg-zion-blue-dark text-center hover:border-zion-purple/50 transition-all duration-300", children: [_jsxs(CardHeader, { children: [_jsx("div", { className: "flex justify-center mb-4 text-zion-cyan", children: item.icon }), _jsx(CardTitle, { className: "text-white text-xl", children: item.title })] }), _jsx(CardContent, { children: _jsx(CardDescription, { className: "text-zion-slate-light", children: item.description }) })] }, index))) })] }) }), _jsx("section", { className: "py-20 bg-zion-blue-dark", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: ["Our ", _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple", children: "Process" })] }), _jsx("p", { className: "text-zion-slate-light text-lg max-w-3xl mx-auto", children: "A proven methodology that ensures successful project delivery and maximum value for your investment" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: processSteps.map((step, index) => (_jsxs("div", { className: "text-center relative", children: [_jsx("div", { className: "bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold", children: step.step }), _jsx("h3", { className: "text-white text-xl font-bold mb-4", children: step.title }), _jsx("p", { className: "text-zion-slate-light leading-relaxed", children: step.description }), index < processSteps.length - 1 && (_jsx("div", { className: "hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-zion-purple to-transparent transform translate-x-1/2" }))] }, index))) })] }) }), _jsx(ComprehensiveServicesShowcase, {}), _jsx("section", { className: "py-20 bg-zion-blue-dark", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: ["Ready to ", _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple", children: "Get Started" }), "?"] }), _jsx("p", { className: "text-zion-slate-light text-lg max-w-3xl mx-auto", children: "Our expert team is ready to help you implement the perfect technology solutions. Get in touch today for a personalized consultation and quote." })] }), _jsx("div", { className: "max-w-6xl mx-auto", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [_jsxs("div", { className: "bg-zion-blue-light/10 rounded-lg p-8 border border-zion-blue-light/20", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-6", children: "Contact Information" }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-start gap-4", children: [_jsx(Phone, { className: "h-6 w-6 text-zion-cyan mt-1 flex-shrink-0" }), _jsxs("div", { children: [_jsx("div", { className: "text-white font-semibold", children: "Phone" }), _jsx("a", { href: "tel:+13024640950", className: "text-zion-cyan hover:text-zion-cyan-light text-lg", children: "+1 302 464 0950" })] })] }), _jsxs("div", { className: "flex items-start gap-4", children: [_jsx(Mail, { className: "h-6 w-6 text-zion-cyan mt-1 flex-shrink-0" }), _jsxs("div", { children: [_jsx("div", { className: "text-white font-semibold", children: "Email" }), _jsx("a", { href: "mailto:kleber@ziontechgroup.com", className: "text-zion-cyan hover:text-zion-cyan-light text-lg", children: "kleber@ziontechgroup.com" })] })] }), _jsxs("div", { className: "flex items-start gap-4", children: [_jsx(Globe, { className: "h-6 w-6 text-zion-cyan mt-1 flex-shrink-0" }), _jsxs("div", { children: [_jsx("div", { className: "text-white font-semibold", children: "Website" }), _jsx("a", { href: "https://ziontechgroup.com", target: "_blank", rel: "noopener noreferrer", className: "text-zion-cyan hover:text-zion-cyan-light text-lg", children: "ziontechgroup.com" })] })] }), _jsxs("div", { className: "flex items-start gap-4", children: [_jsx(MapPin, { className: "h-6 w-6 text-zion-cyan mt-1 flex-shrink-0" }), _jsxs("div", { children: [_jsx("div", { className: "text-white font-semibold", children: "Address" }), _jsxs("div", { className: "text-zion-slate-light text-lg", children: ["364 E Main St STE 1008", _jsx("br", {}), "Middletown DE 19709"] })] })] })] })] }), _jsxs("div", { className: "bg-zion-blue-light/10 rounded-lg p-8 border border-zion-blue-light/20", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-6", children: "Quick Contact" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-zion-slate-light text-sm font-medium mb-2", children: "Name" }), _jsx("input", { type: "text", className: "w-full px-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:border-zion-purple focus:outline-none", placeholder: "Your full name" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-zion-slate-light text-sm font-medium mb-2", children: "Email" }), _jsx("input", { type: "email", className: "w-full px-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:border-zion-purple focus:outline-none", placeholder: "your.email@company.com" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-zion-slate-light text-sm font-medium mb-2", children: "Service Interest" }), _jsxs("select", { className: "w-full px-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white focus:border-zion-purple focus:outline-none", children: [_jsx("option", { value: "", children: "Select a service category" }), SERVICE_CATEGORIES.map((category) => (_jsx("option", { value: category.name, children: category.name }, category.name)))] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-zion-slate-light text-sm font-medium mb-2", children: "Message" }), _jsx("textarea", { rows: 4, className: "w-full px-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:border-zion-purple focus:outline-none", placeholder: "Tell us about your project or requirements..." })] }), _jsxs(Button, { className: "w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-3", children: ["Send Message", _jsx(ArrowRight, { className: "h-4 w-4 ml-2" })] })] })] })] }) })] }) })] }));
=======
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
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
}

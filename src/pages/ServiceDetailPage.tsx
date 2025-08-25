<<<<<<< HEAD
<<<<<<< HEAD
import { useParams, Link } from 'react-router-dom';
import { Phone, Mail, CheckCircle, ArrowRight } from 'lucide-react';
import { COMPREHENSIVE_SERVICES, SERVICE_PRICING_TIERS, CONTACT_INFO, SERVICE_GUARANTEES } from '../data/comprehensiveServices';

interface ServiceDetailPageProps {}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = () => {
  const params = useParams();
  const id = params.id;
  const [service, setService] = useState<any>(null);
  const [selectedTier, setSelectedTier] = useState<string>('basic');

  useEffect(() => {
    if (id) {
      const foundService = COMPREHENSIVE_SERVICES.find(s => s.id === id);
      setService(foundService);
    }
=======
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { COMPREHENSIVE_SERVICES, SERVICE_PRICING_TIERS, CONTACT_INFO, SERVICE_GUARANTEES } from '@/data/comprehensiveServices';
import { 
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  CheckCircle, 
  Users, 
  Award,
  ArrowLeft,
  Calendar,
  Shield,
  Zap,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';

export default function ServiceDetailPage() {
  const { id } = useParams();
  const [service, setService] = useState<any>(null);
  const [selectedPricingTier, setSelectedPricingTier] = useState<string>('smb');

  useEffect(() => {
    const foundService = COMPREHENSIVE_SERVICES.find(s => s.id === id);
    setService(foundService);
>>>>>>> origin/cursor/expand-services-and-deploy-updates-63f3
  }, [id]);

  if (!service) {
    return (
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Service Not Found</h1>
          <Link to="/comprehensive-services" className="text-zion-gold hover:text-zion-gold-light">
            ← Back to Services
          </Link>
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-zion-slate mb-2">Service Not Found</h1>
          <p className="text-zion-slate-light mb-6">The service you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/comprehensive-services">Browse All Services</Link>
          </Button>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-63f3
        </div>
=======
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Check, Star, TrendingUp, Clock, Shield, Zap, Cloud, BarChart3, Smartphone, Link as LinkIcon, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';
import { EXPANDED_SERVICES } from '@/data/expandedServices';
import { SEO } from '@/components/SEO';
import { TrustedBySection } from '@/components/TrustedBySection';

const categoryIcons: Record<string, React.ReactNode> = {
  "AI & Automation": <Zap className="w-6 h-6" />,
  "Cybersecurity": <Shield className="w-6 h-6" />,
  "Cloud & DevOps": <Cloud className="w-6 h-6" />,
  "Data & Analytics": <BarChart3 className="w-6 h-6" />,
  "Digital Transformation": <TrendingUp className="w-6 h-6" />,
  "IoT & Edge Computing": <Smartphone className="w-6 h-6" />,
  "Blockchain & Web3": <LinkIcon className="w-6 h-6" />,
};

const pricingModelColors: Record<string, string> = {
  "subscription": "bg-blue-100 text-blue-800",
  "project-based": "bg-purple-100 text-purple-800",
  "one-time": "bg-green-100 text-green-800",
  "usage-based": "bg-orange-100 text-orange-800",
};

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = EXPANDED_SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
        <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
        <Link to="/services">
          <Button>Back to Services</Button>
        </Link>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-32cc
      </div>
    );
  }

<<<<<<< HEAD
<<<<<<< HEAD
  const pricingTier = SERVICE_PRICING_TIERS.find(tier => tier.name === selectedTier);
  const servicePricing = service.pricing[selectedTier as keyof typeof service.pricing];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-blue/80 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-zion-gold/20 text-zion-gold px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">{service.category}</span>
              <span className="text-zion-gold">•</span>
              <span className="text-sm">{service.subcategory}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {service.name}
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              {service.description}
            </p>
            
            {/* Service Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-gold mb-2">{service.rating}</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-zion-gold fill-current' : 'text-zion-slate-light'}`} />
                  ))}
                </div>
                <div className="text-sm text-zion-slate-light">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-gold mb-2">{service.aiScore}</div>
                <div className="text-sm text-zion-slate-light">AI Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-gold mb-2">{service.availability}</div>
                <div className="text-sm text-zion-slate-light">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-zion-gold mb-2">{service.location}</div>
                <div className="text-sm text-zion-slate-light">Location</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-zion-gold text-zion-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-zion-gold-light transition-colors"
              >
                <Phone className="w-5 h-5" />
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 border-2 border-zion-gold text-zion-gold px-8 py-4 rounded-lg font-semibold hover:bg-zion-gold hover:text-zion-blue-dark transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Features */}
                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {service.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-zion-gold flex-shrink-0 mt-1" />
                        <span className="text-zion-slate-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Detailed Description */}
                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">About This Service</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-zion-slate-light leading-relaxed mb-6">
                      {service.detailedDescription}
                    </p>
                  </div>
                </section>

                {/* Service Guarantees */}
                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Our Guarantees</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {SERVICE_GUARANTEES.map((guarantee, index) => (
                      <div key={index} className="bg-zion-blue/20 rounded-lg p-6 border border-zion-blue/30">
                        <div className="flex items-center gap-3 mb-3">
                          <Shield className="w-6 h-6 text-zion-gold" />
                          <h3 className="text-xl font-semibold text-white">{guarantee.title}</h3>
                        </div>
                        <p className="text-zion-slate-light">{guarantee.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Pricing Card */}
                <div className="bg-zion-blue/20 rounded-lg p-6 border border-zion-blue/30">
                  <h3 className="text-xl font-bold text-white mb-4">Pricing</h3>
                  
                  {/* Tier Selector */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-zion-slate-light mb-2">
                      Select Tier
                    </label>
                    <select
                      value={selectedTier}
                      onChange={(e) => setSelectedTier(e.target.value)}
                      className="w-full bg-zion-blue/30 border border-zion-blue/50 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-gold"
                    >
                      {Object.keys(service.pricing).map((tier) => (
                        <option key={tier} value={tier} className="bg-zion-blue-dark text-white">
                          {tier.charAt(0).toUpperCase() + tier.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price Display */}
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-zion-gold mb-2">
                      ${servicePricing.price}
                    </div>
                    <div className="text-zion-slate-light">
                      per {pricingTier?.billingCycle || 'month'}
                    </div>
                  </div>

                  {/* Tier Features */}
                  <div className="space-y-3 mb-6">
                    {pricingTier?.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-zion-gold" />
                        <span className="text-sm text-zion-slate-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="w-full bg-zion-gold text-zion-blue-dark py-3 rounded-lg font-semibold text-center block hover:bg-zion-gold-light transition-colors"
                  >
                    Get Started
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="bg-zion-blue/20 rounded-lg p-6 border border-zion-blue/30">
                  <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-zion-gold" />
                      <a href={`tel:${CONTACT_INFO.mobile}`} className="text-zion-slate-light hover:text-zion-gold">
                        {CONTACT_INFO.mobile}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-zion-gold" />
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-zion-slate-light hover:text-zion-gold">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-zion-gold flex-shrink-0 mt-1" />
                      <span className="text-zion-slate-light text-sm">
                        {CONTACT_INFO.address}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Service Tags */}
                <div className="bg-zion-blue/20 rounded-lg p-6 border border-zion-blue/30">
                  <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="bg-zion-gold/20 text-zion-gold px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
=======
  const getDiscountedPrice = (price: number, tier: string) => {
    const pricingTier = SERVICE_PRICING_TIERS[tier as keyof typeof SERVICE_PRICING_TIERS];
    if (pricingTier) {
      return price * (1 - pricingTier.discount);
    }
    return price;
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`;
    }
    return `$${price}`;
  };

  const getOriginalPrice = (price: number, tier: string) => {
    const pricingTier = SERVICE_PRICING_TIERS[tier as keyof typeof SERVICE_PRICING_TIERS];
    if (pricingTier && pricingTier.discount > 0) {
      return price;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <SEO 
        title={`${service.title} - Zion Tech Group`}
=======
  return (
    <>
      <SEO 
        title={`${service.title} | Zion Tech Group`}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-32cc
        description={service.description}
        keywords={service.tags.join(', ')}
        canonical={`https://ziontechgroup.com/services/${service.id}`}
      />

      {/* Breadcrumb */}
<<<<<<< HEAD
      <section className="bg-white border-b py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-zion-slate">
            <Link to="/" className="hover:text-zion-blue">Home</Link>
            <span>/</span>
            <Link to="/comprehensive-services" className="hover:text-zion-blue">Services</Link>
            <span>/</span>
            <span className="text-zion-blue font-semibold">{service.title}</span>
=======
      <section className="py-4 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="text-gray-500 hover:text-gray-700">Services</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{service.title}</span>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-32cc
          </nav>
        </div>
      </section>

<<<<<<< HEAD
      {/* Service Header */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service Image */}
            <div className="space-y-4">
              <img
                src={service.images[0]}
                alt={service.title}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag: string, index: number) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Service Info */}
            <div className="space-y-6">
              <div>
                <Badge className="bg-zion-cyan text-white mb-3">
                  {service.subcategory}
                </Badge>
                <h1 className="text-4xl font-bold text-zion-blue mb-4">
                  {service.title}
                </h1>
                <p className="text-lg text-zion-slate leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Rating and Reviews */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(service.rating || 0)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-zion-blue">
                    {service.rating}
                  </span>
                  <span className="text-zion-slate">
                    ({service.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* AI Score */}
              <div className="flex items-center gap-3">
                <span className="text-zion-slate font-semibold">AI Score:</span>
                <div className="w-16 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-white">{service.aiScore}</span>
                </div>
                <span className="text-sm text-zion-slate">/ 100</span>
              </div>

              {/* Service Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-zion-slate">
                  <Clock className="w-5 h-5" />
                  <span>{service.availability}</span>
                </div>
                <div className="flex items-center gap-2 text-zion-slate">
                  <MapPin className="w-5 h-5" />
                  <span>{service.location}</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-zion-slate-light p-6 rounded-lg">
                <h3 className="text-xl font-bold text-zion-blue mb-4">Pricing</h3>
                <div className="space-y-3">
                  {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => {
                    const discountedPrice = getDiscountedPrice(service.price || 0, key);
                    const originalPrice = getOriginalPrice(service.price || 0, key);
                    
                    return (
                      <div key={key} className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <div>
                          <div className="font-semibold text-zion-blue">{tier.name}</div>
                          <div className="text-sm text-zion-slate">{tier.description}</div>
                        </div>
                        <div className="text-right">
                          {originalPrice && (
                            <div className="text-sm text-zion-slate line-through">
                              {formatPrice(originalPrice)}
                            </div>
                          )}
                          <div className="text-2xl font-bold text-zion-purple">
                            {formatPrice(discountedPrice)}
                          </div>
                          {tier.discount > 0 && (
                            <div className="text-sm text-green-600">
                              {tier.discount * 100}% off
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-zion-blue hover:bg-zion-blue-dark text-white flex-1">
                  <a href={`mailto:${CONTACT_INFO.email}?subject=Inquiry about ${service.title}`}>
                    Get Free Quote
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white">
                  <a href={`tel:${CONTACT_INFO.mobile}`}>Call {CONTACT_INFO.mobile}</a>
                </Button>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-63f3
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>

      {/* Contact Banner */}
      <div className="bg-zion-gold/10 border-t border-zion-gold/20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Contact us today to discuss your needs and get a personalized quote for {service.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-zion-gold text-zion-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-zion-gold-light transition-colors"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </Link>
              <Link
                to="/comprehensive-services"
                className="inline-flex items-center gap-2 border-2 border-zion-gold text-zion-gold px-8 py-4 rounded-lg font-semibold hover:bg-zion-gold hover:text-zion-blue-dark transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
=======
      </section>

      {/* Service Features */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">What's Included</h2>
            <p className="text-lg text-zion-slate max-w-2xl mx-auto">
              Our comprehensive service includes everything you need for successful implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-zion-slate-light rounded-lg">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Expert Team</h3>
              <p className="text-zion-slate">
                Certified professionals with years of industry experience
              </p>
            </div>

            <div className="text-center p-6 bg-zion-slate-light rounded-lg">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Quality Assurance</h3>
              <p className="text-zion-slate">
                Rigorous testing and quality control processes
              </p>
            </div>

            <div className="text-center p-6 bg-zion-slate-light rounded-lg">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Ongoing Support</h3>
              <p className="text-zion-slate">
                24/7 technical support and maintenance
              </p>
            </div>

            <div className="text-center p-6 bg-zion-slate-light rounded-lg">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Performance Optimization</h3>
              <p className="text-zion-slate">
                Continuous improvement and optimization
              </p>
            </div>

            <div className="text-center p-6 bg-zion-slate-light rounded-lg">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Flexible Scheduling</h3>
              <p className="text-zion-slate">
                Work around your business schedule
              </p>
            </div>

            <div className="text-center p-6 bg-zion-slate-light rounded-lg">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Certified Solutions</h3>
              <p className="text-zion-slate">
                Industry-standard certifications and compliance
              </p>
            </div>
=======
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/services">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {categoryIcons[service.category]}
                <Badge variant="secondary" className="text-sm">
                  {service.subcategory}
                </Badge>
                {service.isNew && (
                  <Badge className="bg-green-500 text-white text-sm">
                    <Clock className="w-3 h-3 mr-1" />
                    New
                  </Badge>
                )}
                {service.isFeatured && (
                  <Badge className="bg-yellow-500 text-white text-sm">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {service.title}
              </h1>
              
              <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-white">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-lg font-semibold">{service.rating}</span>
                  <span className="text-zion-slate-light">({service.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-lg font-semibold">AI Score: {service.aiScore}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                  <LinkIcon className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Button>
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Call
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={service.images[0]} 
                alt={service.title}
                className="w-full h-80 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Quick Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-zion-blue">
                  {service.currency}{service.price.toLocaleString()}
                </CardTitle>
                <CardDescription className="text-lg">
                  Starting Price
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className={`${pricingModelColors[service.pricingModel]} text-sm px-3 py-1`}>
                  {service.pricingModel.replace('-', ' ')}
                </Badge>
                <p className="text-sm text-gray-600 mt-2">
                  Market Price: {service.marketPrice}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-zion-blue">
                  {service.features.length}
                </CardTitle>
                <CardDescription className="text-lg">
                  Key Features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Comprehensive solution with advanced capabilities
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-zion-blue">
                  {service.useCases.length}
                </CardTitle>
                <CardDescription className="text-lg">
                  Use Cases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Versatile applications across industries
                </p>
              </CardContent>
            </Card>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-32cc
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Service Guarantees */}
      <section className="bg-zion-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Guarantees</h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              We stand behind our work with comprehensive guarantees and ongoing support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_GUARANTEES.map((guarantee, index) => (
              <div key={index} className="text-center p-6 bg-zion-blue-dark rounded-lg">
                <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{guarantee}</h3>
=======
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes our {service.title.toLowerCase()} solution stand out from the competition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-zion-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{feature}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your business operations and achieve measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900">{benefit}</p>
                </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-32cc
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-zion-purple to-zion-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and customized proposal for your {service.title} needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <a href={`mailto:${CONTACT_INFO.email}?subject=Inquiry about ${service.title}`}>
                Get Free Quote
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <a href={`tel:${CONTACT_INFO.mobile}`}>Call {CONTACT_INFO.mobile}</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Implementation</h3>
              <p className="text-zion-slate-light">Quick turnaround times without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-zion-slate-light">Enterprise-grade security and reliability</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-zion-slate-light">Track record of successful implementations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact Info */}
      <section className="bg-zion-slate text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <a href={`tel:${CONTACT_INFO.mobile}`} className="hover:text-zion-cyan">
                    {CONTACT_INFO.mobile}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-zion-cyan">
                    {CONTACT_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <span>{CONTACT_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-zion-cyan" />
                  <a href={CONTACT_INFO.website} className="hover:text-zion-cyan" target="_blank" rel="noopener noreferrer">
                    {CONTACT_INFO.website}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <p>{CONTACT_INFO.businessHours}</p>
                <p className="text-zion-cyan font-semibold">{CONTACT_INFO.emergencySupport}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/comprehensive-services" className="block hover:text-zion-cyan">All Services</Link>
                <Link to="/contact" className="block hover:text-zion-cyan">Contact Us</Link>
                <Link to="/request-quote" className="block hover:text-zion-cyan">Request Quote</Link>
                <a href={CONTACT_INFO.website} className="block hover:text-zion-cyan" target="_blank" rel="noopener noreferrer">
                  Main Website
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
              <div className="space-y-2 text-sm">
                <p>✓ Certified professionals</p>
                <p>✓ Industry experience</p>
                <p>✓ Proven methodologies</p>
                <p>✓ Ongoing support</p>
                <p>✓ Competitive pricing</p>
=======
      {/* Use Cases Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Use Cases</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our solution can be applied across different industries and scenarios
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.useCases.map((useCase, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="w-16 h-16 bg-zion-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-zion-blue" />
                  </div>
                  <p className="font-medium text-gray-900">{useCase}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-zion-slate-light mb-8">
                Contact our experts today for a free consultation and customized proposal. 
                We'll help you understand how our {service.title.toLowerCase()} can transform your business.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <Phone className="w-5 h-5 text-zion-cyan" />
                  <a href="tel:+13024640950" className="text-zion-cyan hover:underline">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <Mail className="w-5 h-5 text-zion-cyan" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:underline">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <MapPin className="w-5 h-5 text-zion-cyan" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                  <LinkIcon className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Button>
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Demo
                </Button>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <Check className="w-5 h-5 text-zion-cyan" />
                  <span>Expert team with 10+ years experience</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <Check className="w-5 h-5 text-zion-cyan" />
                  <span>Proven track record of successful implementations</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <Check className="w-5 h-5 text-zion-cyan" />
                  <span>24/7 support and maintenance</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <Check className="w-5 h-5 text-zion-cyan" />
                  <span>Competitive pricing and flexible payment options</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <Check className="w-5 h-5 text-zion-cyan" />
                  <span>Customized solutions for your specific needs</span>
                </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-32cc
              </div>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
    </div>
  );
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-63f3
=======

      <TrustedBySection />
    </>
  );
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-32cc

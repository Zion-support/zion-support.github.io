<<<<<<< HEAD
import React from 'react';
import { EnhancedServicesShowcase } from '@/components/EnhancedServicesShowcase';
import { SEO } from '@/components/SEO';

export default function EnhancedServicesPage() {
  return (
    <>
      <SEO 
        title="Enhanced Micro SAAS Services 2025 - Zion Tech Group"
        description="Discover our comprehensive collection of cutting-edge micro SAAS solutions including AI, Quantum Computing, Blockchain, IoT, and more. Transform your business with innovative technology services."
        canonical="/enhanced-services"
        url="https://ziontechgroup.com/enhanced-services"
      />
      
      <EnhancedServicesShowcase />
    </>
  );
}
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Star, Globe, Phone, Mail, MapPin, ExternalLink, TrendingUp, Shield, Cloud, Brain, Database, Code, Zap, Heart, DollarSign, Users, CheckCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function EnhancedServicesPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const CONTACT_INFO = {
        mobile: '+1 (555) 123-4567',
        email: 'info@ziontechgroup.com',
        address: '123 Tech Street, Innovation City, IC 12345',
        website: 'https://ziontechgroup.com'
    };

    const serviceCategories = [
        { id: 'all', name: 'All Services', icon: Globe },
        { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
        { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
        { id: 'security', name: 'Cybersecurity', icon: Shield },
        { id: 'data', name: 'Data & Analytics', icon: Database },
        { id: 'development', name: 'Development', icon: Code },
        { id: 'infrastructure', name: 'Infrastructure', icon: Zap }
    ];

    const services = [
        {
            id: 'ai-content-generation',
            name: 'AI Content Generation',
            category: 'ai',
            description: 'Advanced AI-powered content creation for marketing, blogs, and social media',
            features: ['Multi-language support', 'SEO optimization', 'Brand voice consistency', 'Bulk generation'],
            price: '$29/month',
            rating: 4.8,
            reviews: 156,
            popular: true
        },
        {
            id: 'cloud-migration',
            name: 'Cloud Migration Services',
            category: 'cloud',
            description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime',
            features: ['Assessment & planning', 'Data migration', 'Performance optimization', '24/7 monitoring'],
            price: 'Custom',
            rating: 4.9,
            reviews: 89,
            popular: false
        },
        {
            id: 'cybersecurity-audit',
            name: 'Cybersecurity Audit',
            category: 'security',
            description: 'Comprehensive security assessment and compliance verification',
            features: ['Vulnerability scanning', 'Penetration testing', 'Compliance reporting', 'Remediation guidance'],
            price: '$1,999',
            rating: 4.7,
            reviews: 203,
            popular: true
        },
        {
            id: 'data-analytics-platform',
            name: 'Data Analytics Platform',
            category: 'data',
            description: 'Real-time business intelligence and predictive analytics solutions',
            features: ['Custom dashboards', 'Real-time insights', 'Predictive modeling', 'API integration'],
            price: '$199/month',
            rating: 4.6,
            reviews: 78,
            popular: false
        },
        {
            id: 'custom-software',
            name: 'Custom Software Development',
            category: 'development',
            description: 'Tailored software solutions built to your exact specifications',
            features: ['Full-stack development', 'UI/UX design', 'Testing & QA', 'Deployment & support'],
            price: 'Custom',
            rating: 4.9,
            reviews: 234,
            popular: true
        },
        {
            id: 'infrastructure-management',
            name: 'Infrastructure Management',
            category: 'infrastructure',
            description: 'Comprehensive IT infrastructure management and optimization',
            features: ['24/7 monitoring', 'Performance tuning', 'Capacity planning', 'Disaster recovery'],
            price: '$299/month',
            rating: 4.8,
            reviews: 167,
            popular: false
        }
    ];

    const filteredServices = services.filter(service => {
        const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             service.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <SEO 
                title="Enhanced Services - Zion Tech Group" 
                description="Discover our comprehensive range of AI-powered services, cloud solutions, and enterprise technology services." 
                canonical="https://ziontechgroup.com/enhanced-services" 
            />
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="mb-8">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
                                <Star className="w-4 h-4 mr-2" />
                                Premium Services
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Transform Your Business with
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Advanced Technology</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                                Discover our comprehensive suite of AI-powered services, cloud solutions, and enterprise technology services designed to accelerate your digital transformation.
                            </p>
                        </div>

                        {/* Search and Filter */}
                        <div className="max-w-4xl mx-auto mb-12">
                            <div className="relative mb-6">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <Input
                                    type="text"
                                    placeholder="Search services..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-gray-400"
                                />
                            </div>
                            
                            <div className="flex flex-wrap justify-center gap-2">
                                {serviceCategories.map((category) => (
                                    <Button
                                        key={category.id}
                                        variant={selectedCategory === category.id ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`${
                                            selectedCategory === category.id
                                                ? 'bg-zion-cyan text-zion-blue-dark'
                                                : 'border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light/10'
                                        }`}
                                    >
                                        <category.icon className="w-4 h-4 mr-2" />
                                        {category.name}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredServices.map((service) => (
                                <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-cyan transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/10">
                                    {service.popular && (
                                        <div className="absolute -top-3 -right-3">
                                            <Badge className="bg-zion-cyan text-zion-blue-dark px-3 py-1 text-xs font-bold">
                                                Popular
                                            </Badge>
                                        </div>
                                    )}
                                    <CardHeader>
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                                                <Brain className="w-6 h-6 text-zion-cyan" />
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-bold text-zion-cyan">{service.price}</div>
                                            </div>
                                        </div>
                                        <CardTitle className="text-xl text-white mb-2">{service.name}</CardTitle>
                                        <CardDescription className="text-zion-slate-light">
                                            {service.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="mb-4">
                                            <div className="flex items-center mb-2">
                                                <div className="flex items-center">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`w-4 h-4 ${
                                                                i < Math.floor(service.rating)
                                                                    ? 'text-yellow-400 fill-current'
                                                                    : 'text-gray-600'
                                                            }`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="ml-2 text-sm text-zion-slate-light">
                                                    {service.rating} ({service.reviews} reviews)
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <ul className="space-y-2 mb-6">
                                            {service.features.map((feature, index) => (
                                                <li key={index} className="flex items-center text-sm text-zion-slate-light">
                                                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        
                                        <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark">
                                            Get Started
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-16 bg-zion-blue-dark">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
                            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                                Industry-leading solutions with proven track records and customer success stories
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="w-8 h-8 text-white"/>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                                <p className="text-zion-slate-light">
                                    Industry-leading solutions with proven track records and customer success stories
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Zap className="w-8 h-8 text-white"/>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
                                <p className="text-zion-slate-light">
                                    Cutting-edge AI and emerging technologies to keep you ahead of the competition
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8 text-white"/>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Dedicated Support</h3>
                                <p className="text-zion-slate-light">
                                    Personalized service with dedicated account managers and 24/7 technical support
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="w-8 h-8 text-white"/>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">ROI Focused</h3>
                                <p className="text-zion-slate-light">
                                    Measurable business outcomes and rapid return on investment for all solutions
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact-section" className="py-16 bg-zion-blue">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-white mb-8">
                                Ready to Transform Your Business?
                            </h2>
                            <p className="text-xl text-zion-slate-light mb-12">
                                Get in touch with our experts to discuss your needs and discover how our services can drive your success
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                <div className="flex items-center justify-center gap-3 text-zion-cyan">
                                    <Phone className="w-6 h-6"/>
                                    <div className="text-left">
                                        <div className="font-semibold">Phone</div>
                                        <div className="text-sm">{CONTACT_INFO.mobile}</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-3 text-zion-cyan">
                                    <Mail className="w-6 h-6"/>
                                    <div className="text-left">
                                        <div className="font-semibold">Email</div>
                                        <div className="text-sm">{CONTACT_INFO.email}</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-3 text-zion-cyan">
                                    <MapPin className="w-6 h-6"/>
                                    <div className="text-left">
                                        <div className="font-semibold">Address</div>
                                        <div className="text-sm">{CONTACT_INFO.address}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light" onClick={() => window.open(`tel:${CONTACT_INFO.mobile}`, '_self')}>
                                    <Phone className="w-5 h-5 mr-2"/>
                                    Call Now
                                </Button>
                                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10" onClick={() => window.open(`mailto:${CONTACT_INFO.email}`, '_self')}>
                                    <Mail className="w-5 h-5 mr-2"/>
                                    Send Email
                                </Button>
                                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10" onClick={() => window.open(CONTACT_INFO.website, '_blank')}>
                                    <ExternalLink className="w-5 h-5 mr-2"/>
                                    Visit Website
                                </Button>
                            </div>

                            <div className="mt-12 p-6 bg-zion-blue-dark rounded-lg border border-zion-blue-light">
                                <h3 className="text-xl font-bold text-white mb-4">Special Enterprise Offerings</h3>
                                <p className="text-zion-slate-light mb-4">
                                    For enterprise clients, we offer custom solution development, dedicated support teams, and comprehensive implementation services.
                                </p>
                                <Button className="bg-zion-purple hover:bg-zion-purple-dark text-white" onClick={() => window.open(`mailto:${CONTACT_INFO.email}?subject=Enterprise%20Inquiry`, '_self')}>
                                    Request Enterprise Consultation
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc

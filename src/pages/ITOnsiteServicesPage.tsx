import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Clock, Users, Shield, Zap, Phone, Mail } from 'lucide-react';
export default function ITOnsiteServicesPage() {
    const [searchParams] = useSearchParams();
    const [selectedCountry, setSelectedCountry] = useState('United States');
    const [searchQuery, setSearchQuery] = useState('');
    // Check for success parameter in URL
    const success = searchParams.get('success');
    // Show success toast if redirected from successful payment
    useEffect(() => {
        if (success === 'true') {
            // In a real app, you would use a toast notification here
            console.log('Payment successful');
        }
    }, [success]);
    const popularCountries = [
        { name: 'United States', flag: '🇺🇸', timezone: 'EST/PST' },
        { name: 'United Kingdom', flag: '🇬🇧', timezone: 'GMT' },
        { name: 'Canada', flag: '🇨🇦', timezone: 'EST/PST' },
        { name: 'Germany', flag: '🇩🇪', timezone: 'CET' },
        { name: 'Japan', flag: '🇯🇵', timezone: 'JST' },
        { name: 'Singapore', flag: '🇸🇬', timezone: 'SGT' }
    ];
    const onsiteServices = [
        {
            id: 'network-setup',
            name: 'Network Setup & Configuration',
            description: 'Complete network infrastructure setup including routers, switches, and wireless access points',
            duration: '2-4 hours',
            price: '$150/hour',
            features: ['Network planning', 'Hardware installation', 'Configuration & testing', 'Documentation']
        },
        {
            id: 'server-maintenance',
            name: 'Server Maintenance & Support',
            description: 'Regular server maintenance, updates, and troubleshooting services',
            duration: '1-3 hours',
            price: '$120/hour',
            features: ['System updates', 'Performance optimization', 'Security patches', 'Backup verification']
        },
        {
            id: 'hardware-repair',
            name: 'Hardware Repair & Replacement',
            description: 'On-site hardware diagnostics, repair, and replacement services',
            duration: '1-2 hours',
            price: '$100/hour',
            features: ['Hardware diagnostics', 'Component replacement', 'Testing & validation', 'Warranty coordination']
        },
        {
            id: 'security-audit',
            name: 'Security Audit & Assessment',
            description: 'Comprehensive security assessment and vulnerability testing',
            duration: '4-8 hours',
            price: '$200/hour',
            features: ['Security scanning', 'Vulnerability assessment', 'Compliance review', 'Recommendations report']
        }
    ];
    const serviceProcess = [
        {
            step: 1,
            title: 'Initial Assessment',
            description: 'We evaluate your IT infrastructure and identify specific needs',
            icon: Search
        },
        {
            step: 2,
            title: 'Service Planning',
            description: 'Develop a customized service plan with timeline and pricing',
            icon: MapPin
        },
        {
            step: 3,
            title: 'On-site Execution',
            description: 'Our certified technicians perform the required services',
            icon: Users
        },
        {
            step: 4,
            title: 'Verification & Support',
            description: 'Test all systems and provide ongoing support as needed',
            icon: Shield
        }
    ];
    return (
<>
            <SEO 
                title="IT On-Site Services - Zion Tech Group" 
                description="Professional on-site IT services for businesses and organizations." 
                canonical="https://ziontechgroup.com/it-onsite-services" 
            />
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="mb-8">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
                                <MapPin className="w-4 h-4 mr-2" />
                                On-Site IT Services
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Professional
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> On-Site IT Services</span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                                Our certified technicians bring enterprise-grade IT solutions directly to your location. 
                                Fast response times, expert knowledge, and reliable service when you need it most.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark">
                                    Schedule Service
                                </Button>
                                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                                    Get Quote
                                </Button>
                            </div>
                        </div>
                        {/* Service Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-zion-cyan mb-2">24/7</div>
                                <div className="text-zion-slate-light">Support Available</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-zion-cyan mb-2">2hr</div>
                                <div className="text-zion-slate-light">Response Time</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-zion-cyan mb-2">50+</div>
                                <div className="text-zion-slate-light">Cities Covered</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-zion-cyan mb-2">99.9%</div>
                                <div className="text-zion-slate-light">Satisfaction Rate</div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Popular Countries */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Available in Major Cities</h2>
                            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                                Our on-site IT services are available across major metropolitan areas worldwide
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {popularCountries.map((country, index) => (
                                <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-cyan transition-all duration-300 text-center">
                                    <CardContent className="p-4">
                                        <div className="text-2xl mb-2">{country.flag}</div>
                                        <div className="font-semibold text-white text-sm">{country.name}</div>
                                        <div className="text-xs text-zion-slate-light">{country.timezone}</div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Services Offered */}
                <section className="py-16 bg-zion-blue-dark">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Our On-Site Services</h2>
                            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                                Comprehensive IT solutions delivered directly to your location
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {onsiteServices.map((service) => (
                                <Card key={service.id} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-cyan transition-all duration-300">
                                    <CardHeader>
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                                                <Zap className="w-6 h-6 text-zion-cyan" />
                                            </div>
                                            <Badge variant="outline" className="border-zion-blue-light text-zion-slate-light">
                                                {service.duration}
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-xl text-white mb-2">{service.name}</CardTitle>
                                        <CardDescription className="text-zion-slate-light">
                                            {service.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="mb-4">
                                            <div className="text-2xl font-bold text-zion-cyan mb-2">{service.price}</div>
                                            <h4 className="text-white font-semibold mb-2">What's Included:</h4>
                                            <ul className="space-y-1">
                                                {service.features.map((feature, index) => (
                                                    <li key={index} className="text-sm text-zion-slate-light flex items-center">
                                                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark">
                                            Schedule Service
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                {/* How It Works */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
                            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                                Simple, transparent process from initial contact to service completion
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {serviceProcess.map((step) => (
                                <div key={step.step} className="text-center">
                                    <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <step.icon className="w-8 h-8 text-zion-cyan" />
                                    </div>
                                    <div className="text-2xl font-bold text-zion-cyan mb-2">Step {step.step}</div>
                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-zion-slate-light">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* CTA Section */}
                <section className="py-16 bg-zion-blue">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Ready for On-Site IT Support?</h2>
                        <p className="text-zion-slate-light mb-8">
                            Contact us today to schedule your on-site IT service or get a custom quote for your specific needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark">
                                <Phone className="w-4 h-4 mr-2" />
                                Call Now
                            </Button>
                            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                                <Mail className="w-4 h-4 mr-2" />
                                Email Us
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
</>
    );
}

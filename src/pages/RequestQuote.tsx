import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, Users, Zap, Brain, Shield, Cloud, Database, Code, Target, Building } from 'lucide-react';
export default function RequestQuote() {
    const benefits = [
        {
            icon: Zap,
            title: 'Fast Response',
            description: 'Get your quote within 24 hours'
        },
        {
            icon: CheckCircle,
            title: 'Customized',
            description: 'Tailored to your specific needs'
        },
        {
            icon: Users,
            title: 'Expert Team',
            description: 'Reviewed by industry experts'
        },
        {
            icon: Clock,
            title: 'No Obligation',
            description: 'Free quotes with no commitment'
        }
    ];
    const services = [
        {
            icon: Brain,
            title: 'AI & Machine Learning',
            description: 'Custom AI solutions, model development, and ML infrastructure',
            features: ['Custom AI model development', 'Machine learning consulting', 'AI infrastructure setup', 'Data science services']
        },
        {
            icon: Shield,
            title: 'IT Services',
            description: 'Onsite IT support, infrastructure, and digital transformation',
            features: ['Onsite IT support', 'Infrastructure setup', 'Cloud migration', 'Cybersecurity services']
        },
        {
            icon: Users,
            title: 'Talent & Hiring',
            description: 'AI-powered talent matching and recruitment services',
            features: ['AI talent matching', 'Recruitment services', 'Team building', 'Skill assessment']
        },
        {
            icon: Database,
            title: 'Equipment & Hardware',
            description: 'High-tech equipment, servers, and specialized hardware',
            features: ['AI/ML hardware', 'Server infrastructure', 'Networking equipment', 'Green IT solutions']
        },
        {
            icon: Building,
            title: 'Consulting',
            description: 'Strategic technology consulting and digital transformation',
            features: ['Technology strategy', 'Digital transformation', 'Process optimization', 'Innovation consulting']
        },
        {
            icon: Code,
            title: 'Custom Solutions',
            description: 'Tailored solutions for unique business requirements',
            features: ['Custom software development', 'Integration services', 'API development', 'Legacy system modernization']
        }
    ];
    return (
<>
            <SEO 
                title="Request a Quote | Zion Tech Group" 
                description="Get customized quotes for AI services, IT solutions, talent hiring, and equipment. Fast, reliable, and tailored to your needs." 
                keywords="request quote, AI services, IT solutions, talent hiring, equipment quotes" 
                canonical="https://ziontechgroup.com/request-quote" 
            />
            <Header />
            
            <main className="min-h-screen bg-zion-blue pt-24 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-white mb-6">
                            Get Your Custom Quote
                        </h1>
                        <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                            Whether you need AI services, IT solutions, top talent, or specialized equipment, 
                            we'll provide you with a detailed, competitive quote tailored to your specific requirements.
                        </p>
                    </div>
                    {/* Benefits Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="bg-zion-blue-dark border-zion-purple/20 text-white hover:border-zion-purple/40 transition-colors">
                                <CardHeader className="text-center">
                                    <benefit.icon className="h-12 w-12 text-zion-cyan mx-auto mb-4"/>
                                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <CardDescription className="text-zion-slate-light">
                                        {benefit.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    {/* Services Overview */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">
                            What We Can Quote For You
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <Card key={index} className="bg-zion-blue-dark border-zion-purple/20 text-white hover:border-zion-purple/40 transition-colors">
                                    <CardHeader>
                                        <CardTitle className="text-xl text-zion-cyan">{service.title}</CardTitle>
                                        <CardDescription className="text-zion-slate-light">
                                            {service.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="text-zion-slate-light space-y-2">
                                            {service.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center">
                                                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                    {/* Quote Form Section */}
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Request Your Quote
                            </h2>
                            <p className="text-zion-slate-light text-lg">
                                Fill out the form below and we'll get back to you with a detailed quote within 24 hours.
                            </p>
                        </div>
                        
                        <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
                            <div className="text-center">
                                <div className="w-24 h-24 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Target className="w-12 h-12 text-zion-cyan" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Quote Request Form</h3>
                                <p className="text-zion-slate-light mb-6">
                                    Our quote request system is currently under development. 
                                    Please contact us directly for immediate assistance.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a 
                                        href="mailto:commercial@ziontechgroup.com" 
                                        className="inline-flex items-center px-6 py-3 bg-zion-cyan text-zion-blue-dark font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors"
                                    >
                                        Email Us
                                    </a>
                                    <a 
                                        href="/contact" 
                                        className="inline-flex items-center px-6 py-3 border border-zion-purple text-zion-purple font-semibold rounded-lg hover:bg-zion-purple/10 transition-colors"
                                    >
                                        Contact Page
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Additional Information */}
                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Need Immediate Assistance?
                        </h3>
                        <p className="text-zion-slate-light mb-6">
                            For urgent requests or to speak with our team directly, contact us:
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="mailto:commercial@ziontechgroup.com" 
                                className="inline-flex items-center px-6 py-3 bg-zion-cyan text-zion-blue-dark font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors"
                            >
                                Email Us
                            </a>
                            <a 
                                href="/contact" 
                                className="inline-flex items-center px-6 py-3 border border-zion-purple text-zion-purple font-semibold rounded-lg hover:bg-zion-purple/10 transition-colors"
                            >
                                Contact Page
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer />
</>
    );
}

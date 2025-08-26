import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Users, Target, Zap, ArrowRight, Phone, Mail, MapPin, Star, TrendingUp, Shield, Clock, CheckCircle } from 'lucide-react';

export default function ZionHireAI() {
    const successMetrics = [
        { metric: '85%', label: 'Faster Hiring' },
        { metric: '92%', label: 'Better Matches' },
        { metric: '78%', label: 'Cost Reduction' },
        { metric: '95%', label: 'User Satisfaction' }
    ];

    const features = [
        {
            icon: Brain,
            title: 'AI-Powered Matching',
            description: 'Advanced algorithms that match candidates to job requirements with unprecedented accuracy',
            benefits: ['Smart candidate ranking', 'Skills-based matching', 'Cultural fit analysis', 'Predictive success scoring']
        },
        {
            icon: Users,
            title: 'Talent Pool Management',
            description: 'Build and maintain a comprehensive database of qualified candidates',
            benefits: ['Automated sourcing', 'Candidate engagement', 'Pipeline optimization', 'Talent rediscovery']
        },
        {
            icon: Target,
            title: 'Intelligent Screening',
            description: 'Automated screening processes that save time and improve quality',
            benefits: ['Resume parsing', 'Skill assessment', 'Background verification', 'Interview scheduling']
        },
        {
            icon: Zap,
            title: 'Streamlined Onboarding',
            description: 'Seamless transition from candidate to employee with automated workflows',
            benefits: ['Document management', 'Training coordination', 'Progress tracking', 'Integration support']
        }
    ];

    const pricingTiers = [
        {
            name: 'Starter',
            price: '$99',
            period: '/month',
            description: 'Perfect for small teams and startups',
            features: ['Up to 10 job postings', 'Basic AI matching', 'Email support', 'Standard integrations'],
            popular: false
        },
        {
            name: 'Professional',
            price: '$299',
            period: '/month',
            description: 'Ideal for growing companies',
            features: ['Up to 50 job postings', 'Advanced AI matching', 'Priority support', 'Custom integrations', 'Analytics dashboard'],
            popular: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: '',
            description: 'For large organizations with complex needs',
            features: ['Unlimited job postings', 'Full AI suite', 'Dedicated support', 'White-label options', 'Advanced analytics', 'API access'],
            popular: false
        }
    ];

    return (
        <>
            <SEO 
                title="Zion Hire AI - White-labeled AI Recruiting Assistant" 
                description="Empower your company with AI-powered recruiting tools. Streamline hiring, improve matches, and enhance candidate experience." 
                keywords="AI hiring, AI recruiting, talent acquisition, AI assistant, Zion Hire AI" 
                canonical="https://ziontechgroup.com/zion-hire-ai" 
            />
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="mb-8">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
                                <Brain className="w-4 h-4 mr-2" />
                                AI-Powered Hiring
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Zion
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Hire AI</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
                                Revolutionary AI-powered hiring platform that transforms recruitment, screening, onboarding, and retention
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark">
                                    Start Free Trial
                                </Button>
                                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                                    Watch Demo
                                </Button>
                            </div>
                        </div>

                        {/* Success Metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                            {successMetrics.map((item, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">
                                        {item.metric}
                                    </div>
                                    <div className="text-zion-slate-light">
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Platform Preview */}
                        <div className="relative hidden md:block">
                            <div className="absolute -top-8 -left-8 w-72 h-72 bg-zion-purple/20 rounded-full filter blur-3xl"></div>
                            <div className="relative z-10 w-full max-w-4xl mx-auto">
                                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
                                    <div className="text-center">
                                        <div className="w-24 h-24 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Brain className="w-12 h-12 text-zion-cyan" />
                                        </div>
                                        <p className="text-zion-slate-light">AI Hiring Platform Dashboard</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Powerful Features</h2>
                            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                                Everything you need to revolutionize your hiring process
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-cyan transition-all duration-300">
                                    <CardHeader>
                                        <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                                            <feature.icon className="w-8 h-8 text-zion-cyan" />
                                        </div>
                                        <CardTitle className="text-xl text-white mb-2">{feature.title}</CardTitle>
                                        <CardDescription className="text-zion-slate-light">
                                            {feature.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2">
                                            {feature.benefits.map((benefit, benefitIndex) => (
                                                <div key={benefitIndex} className="flex items-center text-sm text-zion-slate-light">
                                                    <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                                                    {benefit}
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="py-16 bg-zion-blue-dark">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
                            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                                Choose the plan that fits your hiring needs
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {pricingTiers.map((tier, index) => (
                                <Card key={index} className={`bg-zion-blue-dark border ${
                                    tier.popular ? 'border-zion-cyan' : 'border-zion-blue-light'
                                } relative`}>
                                    {tier.popular && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                            <Badge className="bg-zion-cyan text-zion-blue-dark">
                                                Most Popular
                                            </Badge>
                                        </div>
                                    )}
                                    <CardHeader className="text-center">
                                        <CardTitle className="text-2xl text-white">{tier.name}</CardTitle>
                                        <div className="text-4xl font-bold text-zion-cyan">
                                            {tier.price}
                                            <span className="text-lg text-zion-slate-light">{tier.period}</span>
                                        </div>
                                        <CardDescription className="text-zion-slate-light">
                                            {tier.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3 mb-6">
                                            {tier.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                                                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                        
                                        <Button className={`w-full ${
                                            tier.popular 
                                                ? 'bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark' 
                                                : 'bg-zion-blue-light hover:bg-zion-blue text-white'
                                        }`}>
                                            Get Started
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <Card className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 p-8">
                            <CardContent className="p-0">
                                <h2 className="text-2xl font-bold text-white text-center mb-4">
                                    Ready to Transform Your Hiring Process?
                                </h2>
                                <p className="text-zion-slate-light text-center mb-6">
                                    Join hundreds of companies already using Zion Hire AI to revolutionize their recruitment
                                </p>
                                
                                <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
                                    <div>
                                        <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-2"/>
                                        <p className="text-white font-semibold">Phone</p>
                                        <p className="text-zion-slate-light">+1 302 464 0950</p>
                                    </div>
                                    <div>
                                        <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-2"/>
                                        <p className="text-white font-semibold">Email</p>
                                        <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
                                    </div>
                                    <div>
                                        <MapPin className="w-8 h-8 text-zion-cyan mx-auto mb-2"/>
                                        <p className="text-white font-semibold">Address</p>
                                        <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
                                    </div>
                                </div>
                                
                                <div className="text-center">
                                    <Button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark">
                                        Start Your Free Trial Today
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

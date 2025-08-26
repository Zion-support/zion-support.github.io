import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Shield, Brain, Cloud, Users, MessageCircle, FileText } from 'lucide-react';

export default function Pricing() {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const pricingTiers = [
        {
            name: "Starter",
            price: billingCycle === 'monthly' ? 19 : 190,
            period: billingCycle === 'monthly' ? "/month" : "/year",
            description: "Perfect for individuals and small teams getting started with AI tools",
            features: [
                "AI Content Generation (100 credits/month)",
                "Basic AI Image Editing",
                "AI Meeting Assistant (5 hours/month)",
                "Email Support",
                "Basic Analytics Dashboard",
                "Mobile App Access"
            ],
            popular: false,
            cta: "Start Free Trial",
            link: "/signup?plan=starter"
        },
        {
            name: "Professional",
            price: billingCycle === 'monthly' ? 49 : 490,
            period: billingCycle === 'monthly' ? "/month" : "/year",
            description: "Ideal for growing businesses and professional teams",
            features: [
                "Everything in Starter",
                "AI Content Generation (500 credits/month)",
                "Advanced AI Image & Video Editing",
                "AI Code Assistant (Basic)",
                "AI Meeting Assistant (20 hours/month)",
                "AI Translation (10 languages)",
                "Priority Support",
                "Advanced Analytics",
                "API Access (1000 calls/month)",
                "Team Collaboration Tools"
            ],
            popular: true,
            cta: "Start Free Trial",
            link: "/signup?plan=professional"
        },
        {
            name: "Business",
            price: billingCycle === 'monthly' ? 99 : 990,
            period: billingCycle === 'monthly' ? "/month" : "/year",
            description: "Comprehensive solution for established businesses",
            features: [
                "Everything in Professional",
                "AI Content Generation (2000 credits/month)",
                "AI Code Assistant (Advanced)",
                "AI Data Analytics Platform",
                "AI Threat Detection",
                "Multi-Cloud Management",
                "AI-Powered CRM",
                "Business Process Automation",
                "AI Meeting Assistant (Unlimited)",
                "AI Translation (100+ languages)",
                "24/7 Support",
                "Custom Integrations",
                "API Access (10000 calls/month)",
                "Advanced Security Features"
            ],
            popular: false,
            cta: "Start Free Trial",
            link: "/signup?plan=business"
        }
    ];

    const savings = billingCycle === 'yearly' ? 17 : 0;

    return (
        <>
            <SEO 
                title="Pricing - Zion Tech Group" 
                description="Choose the perfect plan for your business needs. Transparent pricing with no hidden fees." 
                canonical="https://ziontechgroup.com/pricing" 
            />
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <div className="p-3 bg-blue-600/20 rounded-full">
                                <Zap className="h-12 w-12 text-blue-400"/>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Simple, Transparent Pricing
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Choose the plan that best fits your business needs. All plans include our core AI services with no hidden fees.
                        </p>
                        
                        {/* Billing Toggle */}
                        <div className="flex justify-center mb-8">
                            <div className="bg-zion-blue-dark rounded-lg p-1 flex">
                                <button
                                    onClick={() => setBillingCycle('monthly')}
                                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                                        billingCycle === 'monthly'
                                            ? 'bg-white text-zion-blue shadow-sm'
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                >
                                    Monthly Billing
                                </button>
                                <button
                                    onClick={() => setBillingCycle('yearly')}
                                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                                        billingCycle === 'yearly'
                                            ? 'bg-white text-zion-blue shadow-sm'
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                >
                                    Yearly Billing
                                    {billingCycle === 'yearly' && (
                                        <Badge className="ml-2 bg-green-100 text-green-700 text-xs">
                                            Save {savings}%
                                        </Badge>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Pricing Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {pricingTiers.map((plan, index) => (
                                <Card 
                                    key={index}
                                    className={`relative hover:shadow-xl transition-all duration-300 ${
                                        plan.popular ? 'ring-2 ring-zion-blue scale-105' : ''
                                    }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <Badge className="bg-zion-blue text-white px-4 py-2">
                                                <Star className="h-4 w-4 mr-1" />
                                                Most Popular
                                            </Badge>
                                        </div>
                                    )}
                                    <CardHeader className="text-center pb-8">
                                        <div className={`w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4`}>
                                            <Zap className="h-8 w-8 text-white" />
                                        </div>
                                        <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                                        <p className="text-gray-600">{plan.description}</p>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <div className="mb-8">
                                            <div className="flex items-baseline justify-center">
                                                <span className="text-4xl font-bold text-gray-900">
                                                    ${billingCycle === 'yearly' ? plan.price / 12 : plan.price}
                                                </span>
                                                <span className="text-gray-600 ml-2">/month</span>
                                            </div>
                                            {billingCycle === 'yearly' && (
                                                <p className="text-sm text-gray-500 mt-1">
                                                    Billed annually (${plan.price})
                                                </p>
                                            )}
                                        </div>
                                        <ul className="space-y-3 mb-8 text-left">
                                            {plan.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center space-x-3">
                                                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Button 
                                            className={`w-full ${
                                                plan.popular
                                                    ? 'bg-zion-blue hover:bg-zion-blue/90'
                                                    : 'bg-gray-900 hover:bg-gray-800'
                                            }`}
                                            onClick={() => window.location.href = plan.link}
                                        >
                                            {plan.cta}
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <section className="py-20 bg-zion-blue text-white">
                            <div className="container mx-auto px-4 text-center">
                                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                                <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                                    Choose the plan that best fits your business needs and start transforming your technology infrastructure today.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-white px-8 py-4 text-lg">
                                        Start Free Trial
                                    </Button>
                                    <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                                        Contact Sales
                                    </Button>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

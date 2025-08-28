import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Shield, Brain, Cloud, Users, MessageCircle, FileText } from "lucide-react";

export default function Pricing() {
    const pricingTiers = [
        {
            name: "Starter",
            price: "$19",
            period: "/month",
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
            price: "$49",
            period: "/month",
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
            price: "$99",
            period: "/month",
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
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            description: "Tailored solutions for large organizations with specific requirements",
            features: [
                "Everything in Business",
                "Unlimited AI Content Generation",
                "Custom AI Model Training",
                "Zero Trust Security Suite",
                "Edge Computing Solutions",
                "AI Market Research Platform",
                "AI Legal Document Review",
                "AI Financial Advisor",
                "AI Healthcare Assistant",
                "Dedicated Account Manager",
                "Custom Development",
                "On-Premise Deployment",
                "SLA Guarantees",
                "Compliance Certifications"
            ],
            popular: false,
            cta: "Contact Sales",
            link: "/contact"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate pt-20">
            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Simple, Transparent{' '}
                        <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                            Pricing
                        </span>
                    </h1>
                    <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                        Choose the perfect plan for your business needs. All plans include a 14-day free trial.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {pricingTiers.map((tier, index) => (
                        <Card key={index} className={`relative ${tier.popular ? 'border-zion-cyan shadow-lg shadow-zion-cyan/25' : 'border-zion-blue-light'}`}>
                            {tier.popular && (
                                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-zion-cyan text-white">
                                    Most Popular
                                </Badge>
                            )}
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl font-bold text-white">{tier.name}</CardTitle>
                                <CardDescription className="text-zion-slate-light">
                                    {tier.description}
                                </CardDescription>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                                    <span className="text-zion-slate-light">{tier.period}</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {tier.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-zion-slate-light">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Link to={tier.link} className="w-full">
                                    <Button 
                                        className={`w-full ${tier.popular ? 'bg-zion-cyan hover:bg-zion-cyan-light' : 'bg-zion-blue hover:bg-zion-blue-light'}`}
                                    >
                                        {tier.cta}
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-8 border border-zion-cyan/20">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Need a Custom Solution?
                        </h2>
                        <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                            Our team can create tailored pricing plans for enterprise customers with specific requirements.
                        </p>
                        <Link to="/contact">
                            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light">
                                Contact Sales Team
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

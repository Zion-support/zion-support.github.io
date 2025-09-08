import React from 'react';
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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Pricing Plans
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Choose the perfect plan for your business needs. All plans include a 14-day free trial.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {pricingTiers.map((tier, index) => (
                        <Card key={index} className={`relative ${tier.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <Badge className="bg-blue-500 text-white px-4 py-1">
                                        <Star className="w-3 h-3 mr-1" />
                                        Most Popular
                                    </Badge>
                                </div>
                            )}
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                                <div className="text-4xl font-bold text-blue-400">
                                    {tier.price}
                                    <span className="text-lg text-gray-400">{tier.period}</span>
                                </div>
                                <CardDescription className="text-gray-300">
                                    {tier.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {tier.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start">
                                            <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
                                    {tier.cta}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-6 text-white">
                        Need a Custom Solution?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Our team can create a tailored pricing plan that fits your specific requirements and budget.
                    </p>
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                        Contact Sales Team
                    </Button>
                </div>
            </div>
        </div>
    );
}

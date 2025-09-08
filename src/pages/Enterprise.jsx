import React from 'react';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Users, Shield, BarChart3, Zap, Globe, Phone } from 'lucide-react';
export default function Enterprise() {
    const features = [
        {
            icon: <Users className="h-8 w-8 text-zion-cyan"/>,
            title: "Team Management",
            description: "Manage multiple teams, projects, and stakeholders with enterprise-grade collaboration tools."
        },
        {
            icon: <Shield className="h-8 w-8 text-zion-cyan"/>,
            title: "Advanced Security",
            description: "Enterprise-level security with SSO, role-based access control, and compliance certifications."
        },
        {
            icon: <BarChart3 className="h-8 w-8 text-zion-cyan"/>,
            title: "Analytics & Reporting",
            description: "Comprehensive insights into team performance, project metrics, and ROI tracking."
        },
        {
            icon: <Zap className="h-8 w-8 text-zion-cyan"/>,
            title: "Custom Integrations",
            description: "Seamlessly integrate with your existing tools and workflows through our API."
        },
        {
            icon: <Globe className="h-8 w-8 text-zion-cyan"/>,
            title: "Global Talent Pool",
            description: "Access to verified tech professionals from around the world, available 24/7."
        },
        {
            icon: <Phone className="h-8 w-8 text-zion-cyan"/>,
            title: "Dedicated Support",
            description: "Priority support with dedicated account managers and 24/7 technical assistance."
        }
    ];
    const plans = [
        {
            name: "Starter",
            price: "$999",
            period: "/month",
            description: "Perfect for growing teams",
            features: [
                "Up to 25 team members",
                "Basic analytics",
                "Email support",
                "Standard integrations"
            ]
        },
        {
            name: "Professional",
            price: "$2,499",
            period: "/month",
            description: "Ideal for established companies",
            features: [
                "Up to 100 team members",
                "Advanced analytics",
                "Priority support",
                "Custom integrations",
                "SSO authentication"
            ]
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            description: "For large organizations",
            features: [
                "Unlimited team members",
                "Custom analytics",
                "Dedicated support",
                "Full API access",
                "Custom security",
                "On-premise options"
            ]
        }
    ];
    return (<div className="min-h-screen bg-background">
      <SEOHead title="Enterprise Solutions - Zion Tech Group" description="Enterprise-grade AI and tech solutions for large organizations. Scale your tech operations with Zion Tech Group's comprehensive enterprise platform." keywords="enterprise solutions, enterprise AI, tech consulting, team management, Zion Tech Group" canonical="https://ziontechgroup.com/enterprise"/>











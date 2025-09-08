import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Brain, Shield, Users, Phone, Mail, MapPin, ExternalLink, TrendingUp } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PRICING_TIERS } from '@/data/advancedServices';
// Service comparison data
const SERVICE_COMPARISONS = [
    {
        category: "AI & Automation",
        services: [
            {
                name: "AI Business Process Automation",
                starter: { price: "$2,999", features: ["Basic workflow automation", "Email automation", "Document processing", "Standard support"] },
                professional: { price: "$4,999", features: ["Advanced AI capabilities", "Custom integrations", "Priority support", "Training sessions", "Analytics dashboard"] },
                enterprise: { price: "$7,999+", features: ["Full AI suite", "Custom development", "24/7 support", "On-site training", "SLA guarantees", "White-label options"] }
            },
            {
                name: "AI Customer Intelligence",
                starter: { price: "$3,999", features: ["Basic customer analytics", "Churn prediction", "Email support"] },
                professional: { price: "$5,999", features: ["Advanced analytics", "Personalization engine", "Priority support", "Custom dashboards", "API access"] },
                enterprise: { price: "$8,999+", features: ["Full customer intelligence suite", "Custom algorithms", "Dedicated support", "Advanced integrations", "Compliance features"] }
            }
        ]
    },
    {
        category: "Cybersecurity & Compliance",
        services: [
            {
                name: "AI Threat Detection System",
                starter: { price: "$5,999", features: ["Basic threat detection", "Email alerts", "Standard support"] },
                professional: { price: "$7,999", features: ["Advanced threat detection", "Behavioral analysis", "Priority support", "Custom rules", "Training"] },
                enterprise: { price: "$12,999+", features: ["Full security suite", "Custom development", "24/7 monitoring", "Dedicated team", "Compliance reporting"] }
            },
            {
                name: "Compliance Management Platform",
                starter: { price: "$2,999", features: ["Basic compliance monitoring", "GDPR support", "Email support"] },
                professional: { price: "$4,999", features: ["Multi-framework support", "Automated reporting", "Priority support", "Custom workflows", "Training"] },
                enterprise: { price: "$6,999+", features: ["Full compliance suite", "Custom frameworks", "Dedicated support", "Advanced integrations", "Audit preparation"] }
            }
        ]
    },
    {
        category: "Cloud & DevOps",
        services: [
            {
                name: "Cloud Cost Optimization",
                starter: { price: "$1,999", features: ["Basic cost analysis", "Resource optimization", "Email support"] },
                professional: { price: "$3,999", features: ["Advanced optimization", "Automated scaling", "Priority support", "Custom policies", "Training"] },
                enterprise: { price: "$5,999+", features: ["Full optimization suite", "Custom algorithms", "Dedicated support", "Advanced analytics", "Multi-cloud support"] }
            },
            {
                name: "DevOps Automation Platform",
                starter: { price: "$2,999", features: ["Basic CI/CD", "Automated testing", "Email support"] },
                professional: { price: "$4,999", features: ["Advanced automation", "Custom pipelines", "Priority support", "Advanced testing", "Training"] },
                enterprise: { price: "$7,999+", features: ["Full DevOps suite", "Custom development", "Dedicated support", "Advanced monitoring", "Multi-environment support"] }
            }
        ]
    },
    {
        category: "Data & Analytics",
        services: [
            {
                name: "Data Quality Platform",
                starter: { price: "$3,999", features: ["Basic data validation", "Data cleaning", "Email support"] },
                professional: { price: "$5,999", features: ["Advanced validation", "Custom rules", "Priority support", "Advanced analytics", "Training"] },
                enterprise: { price: "$8,999+", features: ["Full data suite", "Custom algorithms", "Dedicated support", "Advanced governance", "Compliance features"] }
            },
            {
                name: "Real-Time Analytics Dashboard",
                starter: { price: "$1,999", features: ["Basic dashboard", "Real-time data", "Email support"] },
                professional: { price: "$3,999", features: ["Advanced dashboards", "Custom visualizations", "Priority support", "Advanced analytics", "Training"] },
                enterprise: { price: "$5,999+", features: ["Full analytics suite", "Custom development", "Dedicated support", "Advanced integrations", "White-label options"] }
            }
        ]
    }
];
export default function ServicesComparisonPage() {
    const [selectedCategory, setSelectedCategory] = useState("AI & Automation");
    return (<div className="min-h-screen bg-background">
      <SEOHead title="Services Comparison & Pricing - Zion Tech Group" description="Compare our AI and IT services, features, and pricing plans. Choose the perfect solution for your business needs and budget." keywords="service comparison, pricing plans, AI services, IT consulting, cybersecurity, cloud services" canonical="https://ziontechgroup.com/services-comparison"/>





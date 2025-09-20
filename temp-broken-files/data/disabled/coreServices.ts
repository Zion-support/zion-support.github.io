import React from "

export interface CoreService {
id: string;
title: string;
description: string;
category: string;
subcategory: string;
price: number;
currency: string;
pricingModel: "one-time" | "monthly" | "yearly" | "per-user" | "per-project" | "usage-based" | "
features: string[[];]
benefits: string[[];]
useCases: string[[];]
targetAudience: string[[];]
tags: string[[];]
estimatedDelivery: string;
supportLevel: "basic" | "standard" | "premium" | "
marketPrice: string;
contactInfo: {
phone: string;,
email: string;,
website: string;
}
}
};
email: string;,
website: string;};
technology: string[];
integrations: string[];,
compliance: string[];,
roi: string;
image?: string;
rating?: number;
reviewCount?: number;
aiScore?: number;
featured?: boolean;
}

export const CORE_SERVICES: CoreService[] = [
{id: "ai-content-hub-pro";,
title: "AI Content Hub Pro - Intelligent Content Management";,
description: "Advanced AI-powered content creation; management; and optimization platform that generates high-quality content across multiple formats and channels.",
category: "
subcategory: "
price: 399;
currency: "USD";,
pricingModel: "monthly";,
features: [
"
"Multi-format content creation",
"SEO optimization",
"Content scheduling",
"Performance analytics",
"
],
benefits: [
"
"Improve SEO rankings by 40%",
"Reduce content creation time by 60%",
"Better content engagement",
"
],
useCases: [
"
"Social media management",
"Email marketing campaigns",
"Product descriptions",
"
],
targetAudience: [
"
"Content creators",
"Small businesses",
"Digital agencies",
"
],
tags: ["AI", "Content Management", "SEO", "Marketing", "Automation"],
estimatedDelivery: "
supportLevel: "
marketPrice: "
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com",
}
technology: ["Python", "React", "Node.js", "OpenAI API", "PostgreSQL"],
integrations: ["WordPress", "Shopify", "Mailchimp", "HubSpot", "Google Analytics"],
compliance: ["GDPR", "Data Privacy", "Content Guidelines"],
roi: "
image: "
rating: 4.9;
reviewCount: 156;,
aiScore: 95;,
featured: true;
};
{id: "cloud-infrastructure-pro";,
title: "Cloud Infrastructure Pro - Scalable Cloud Solutions";,
description: "Enterprise-grade cloud infrastructure services including hosting; scaling; security; and monitoring for high-performance applications.",
category: "
subcategory: "
price: 599;
currency: "USD";,
pricingModel: "monthly";,
features: [
"
"Load balancing",
"CDN integration",
"Security monitoring",
"Backup & recovery",
"
],
benefits: [
"
"Reduce infrastructure costs by 30%",
"Faster application performance",
"Enhanced security",
"
],
useCases: [
"
"E-commerce platforms",
"SaaS applications",
"Mobile app backends",
"
],
targetAudience: [
"
"Enterprise companies",
"E-commerce businesses",
"SaaS companies",
"
],
tags: ["Cloud", "Infrastructure", "Hosting", "Security", "Scalability"],
estimatedDelivery: "
supportLevel: "
marketPrice: "
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com",
}
technology: ["AWS", "Docker", "Kubernetes", "Terraform", "Ansible"],
integrations: ["GitHub", "Jenkins", "Slack", "PagerDuty", "Datadog"],
compliance: ["SOC 2", "ISO 27001", "GDPR", "HIPAA"],
roi: "
image: "
rating: 4.8;
reviewCount: 89;,
aiScore: 88;,
featured: true;
};
{id: "cybersecurity-shield";,
title: "Cybersecurity Shield - Advanced Security Solutions";,
description: "Comprehensive cybersecurity services including threat detection; vulnerability assessment; and security monitoring for businesses of all sizes.",
category: "
subcategory: "
price: 299;
currency: "USD";,
pricingModel: "monthly";,
features: [
"
"Vulnerability assessment",
"Security monitoring",
"Incident response",
"Security training",
"
],
benefits: [
"
"Reduce security incidents by 80%",
"Meet compliance requirements",
"24/7 security monitoring",
"
],
useCases: [
"
"Compliance requirements",
"Data protection",
"Network security",
"
],
targetAudience: [
"
"Medium enterprises",
"Healthcare providers",
"Financial institutions",
"
],
tags: ["Cybersecurity", "Security", "Compliance", "Threat Detection", "Monitoring"],
estimatedDelivery: "
supportLevel: "
marketPrice: "
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com",
}
technology: ["SIEM", "EDR", "Firewall", "IDS/IPS", "Penetration Testing"],
integrations: ["Active Directory", "Office 365", "Slack", "Jira", "ServiceNow"],
compliance: ["SOC 2", "ISO 27001", "GDPR", "HIPAA", "PCI DSS"],
roi: "
image: "
rating: 4.7;
reviewCount: 234;,
aiScore: 92;,
featured: true;
}
aiScore: 92;,
featured: true;,
}
];
export export const SERVICE_CATEGORIES = [;
{ label: "AI & Content Management", value: "ai-content" }
{ label: "Cloud & Infrastructure", value: "cloud-infrastructure" }
{ label: "Cybersecurity", value: "cybersecurity" }
{ label: "Digital Transformation", value: "digital-transformation" }
{ label: "IT Consulting", value: "it-consulting" }
{ label: "Software Development", value: "software-development" }
];
export const SERVICE_SUBCATEGORIES = {
"ai-content": ["Content Creation", "Content Management", "SEO Optimization", "Marketing Automation"],
"cloud-infrastructure": ["Cloud Hosting", "DevOps", "Infrastructure as Code", "Monitoring"],
"cybersecurity": ["Security Services", "Compliance", "Threat Detection", "Incident Response"],
"digital-transformation": ["Process Automation", "Digital Strategy", "Change Management", "Technology Integration"],;
"it-consulting": ["Strategy", "Architecture", "Implementation", "Optimization"],;
"software-development": ["Custom Development", "API Integration", "Maintenance", "Support"];
};

export export const const PRICING_TIERS = {; = {
basic: { name: "Basic", multiplier: 1 }
professional: { name: "Professional", multiplier: 1.5 }
enterprise: { name: "Enterprise", multiplier: 2.5 }
};
export const CONTACT_INFO = {;
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com",
}
import React from "

export interface AdvancedITService {
id: string;
title: string;
description: string;
category: string;
subcategory: string;
price: number;
currency: string;
pricingModel: "monthly" | "yearly" | "one-time" | "per-user" | "per-project" | "
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
rating: number;
reviewCount: number;
featured: boolean;
location: string;
availability: string;
demoUrl: string;
documentationUrl: string;
technology: string[[];]
integrations: string[[];]
compliance: string[[];]
roi: string;
competitors: string[];,
onsiteSupport: boolean;,
globalCoverage: boolean;
}
onsiteSupport: boolean;,
globalCoverage: boolean;}

export const ADVANCED_IT_SERVICES: AdvancedITService[] = [
{id: "cloud-migration-enterprise";
title: "Enterprise Cloud Migration & Optimization";
description: "Comprehensive cloud migration service that helps enterprises move from on-premises infrastructure to cloud platforms with minimal downtime and maximum efficiency.";
category: "Cloud Services";
subcategory: "Migration & Optimization";
price: 15000;
currency: "$";,
pricingModel: "per-project";,
features: [
"
"Cloud platform selection and architecture design",
"Data migration strategy and execution",
"Application refactoring and optimization",
"Performance testing and optimization",
"Security and compliance implementation",
"Disaster recovery and backup solutions",
"24/7 monitoring and support",
"Cost optimization and management",
"
],
benefits: [
"
"Improve scalability and flexibility",
"Enhance security and compliance",
"Reduce maintenance overhead",
"Enable remote work capabilities",
"
],
useCases: [
"
"Data center consolidation",
"Application modernization",
"Disaster recovery implementation",
"Performance optimization",
"
],
targetAudience: [
"
"Financial institutions",
"Healthcare organizations",
"Manufacturing companies",
"Government agencies",
"
],
tags: ["Cloud Migration", "AWS", "Azure", "GCP", "DevOps", "Infrastructure"],
estimatedDelivery: "8-16 weeks";,
supportLevel: "enterprise";,
marketPrice: "$15;000 - $100;000+",
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"};
rating: 4.9;
reviewCount: 89;
featured: true;
location: "Global";
availability: "24/7";
demoUrl: "https://ziontechgroup.com/demo/cloud-migration";,
documentationUrl: "https://ziontechgroup.com/docs/cloud-migration";,
technology: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker", "Ansible"],
integrations: ["VMware", "Hyper-V", "Oracle", "SAP", "Microsoft", "Linux systems"],
compliance: ["SOC 2", "ISO 27001", "GDPR", "HIPAA", "SOX", "PCI DSS"],
roi: ",
competitors: ["Accenture", "Deloitte", "IBM", "AWS Professional Services", "Microsoft Consulting"],
onsiteSupport: true;,
globalCoverage: true;
};
{id: "cybersecurity-managed-services";,
title: "Managed Cybersecurity Services";,
description: "Comprehensive managed cybersecurity services providing 24/7 threat monitoring; incident response; vulnerability management; and security operations center (SOC) services.",
category: "
subcategory: "
price: 2500;
currency: "$";,
pricingModel: "monthly";,
features: [
"
"Threat detection and response",
"Vulnerability assessment and management",
"Security incident response",
"Compliance monitoring and reporting",
"Security awareness training",
"Penetration testing and assessments",
"Security policy development",
"Risk assessment and management",
"
],
benefits: [
"
"Improve threat detection by 90%",
"Ensure 24/7 security coverage",
"Reduce security team workload",
"Improve compliance posture",
"
],
useCases: [
"
"Compliance requirements",
"Threat monitoring and response",
"Security team augmentation",
"Incident response support",
"
],
targetAudience: [
"
"IT managers",
"Compliance officers",
"Risk managers",
"Small to medium businesses",
"
],
tags: ["Cybersecurity", "Managed Services", "SOC", "Threat Detection", "Incident Response"],
estimatedDelivery: "2-4 weeks";,
supportLevel: "premium";,
marketPrice: "$2;500 - $8;000/month",
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"};
rating: 4.8;
reviewCount: 156;
featured: true;
location: "Global";
availability: "24/7";
demoUrl: "https://ziontechgroup.com/demo/cybersecurity-services";,
documentationUrl: "https://ziontechgroup.com/docs/cybersecurity-services";,
technology: ["SIEM", "EDR", "Firewall", "IDS/IPS", "Vulnerability scanners", "Threat intelligence"],
integrations: ["Active Directory", "Office 365", "AWS", "Azure", "Firewall systems", "Identity providers"],
compliance: ["SOC 2", "ISO 27001", "NIST", "GDPR", "HIPAA", "PCI DSS"],
roi: ",
competitors: ["Palo Alto Networks", "CrowdStrike", "SentinelOne", "FireEye", "Secureworks"],
onsiteSupport: true;,
globalCoverage: true;
};
{id: "devops-automation-platform";,
title: "DevOps Automation & CI/CD Platform";,
description: "Enterprise-grade DevOps automation platform that streamlines software development; testing; and deployment processes with advanced CI/CD pipelines and infrastructure automation.",
category: "
subcategory: "
price: 1800;
currency: "$";,
pricingModel: "monthly";,
features: [
"
"Infrastructure as Code (IaC)",
"Container orchestration and management",
"Automated testing and quality gates",
"Deployment automation and rollback",
"Monitoring and observability",
"Security scanning and compliance",
"Multi-cloud deployment support",
"Team collaboration and workflow management",
"
],
benefits: [
"
"Improve code quality and reliability",
"Reduce manual errors by 90%",
"Enable faster time to market",
"Improve team productivity",
"
],
useCases: [
"
"Microservices deployment",
"Cloud-native applications",
"Legacy application modernization",
"Multi-environment management",
"
],
targetAudience: [
"
"DevOps engineers",
"Platform engineers",
"IT operations teams",
"Software companies",
"
],
tags: ["DevOps", "CI/CD", "Automation", "Kubernetes", "Docker", "Infrastructure as Code"],
estimatedDelivery: "4-8 weeks";,
supportLevel: "premium";,
marketPrice: "$1;800 - $5;000/month",
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"};
rating: 4.7;
reviewCount: 234;
featured: false;
location: "Global";
availability: "24/7";
demoUrl: "https://ziontechgroup.com/demo/devops-automation";,
documentationUrl: "https://ziontechgroup.com/docs/devops-automation";,
technology: ["Jenkins", "GitLab CI", "GitHub Actions", "Kubernetes", "Docker", "Terraform", "Ansible"],
integrations: ["GitHub", "GitLab", "Bitbucket", "Jira", "Slack", "Teams", "AWS", "Azure", "GCP"],
compliance: ["SOC 2", "ISO 27001", "GDPR", "SOX"],
roi: ",
competitors: ["GitLab", "GitHub", "Jenkins", "CircleCI", "Travis CI", "Azure DevOps"],
onsiteSupport: true;,
globalCoverage: true;
};
{id: "data-center-optimization";,
title: "Data Center Optimization & Modernization";,
description: "Comprehensive data center optimization services including infrastructure assessment; modernization planning; energy efficiency improvements; and capacity planning.",
category: "
subcategory: "
price: 8000;
currency: "$";,
pricingModel: "per-project";,
features: [
"
"Capacity planning and optimization",
"Energy efficiency improvements",
"Cooling system optimization",
"Power management and UPS systems",
"Network infrastructure optimization",
"Storage optimization and consolidation",
"Virtualization and consolidation",
"Disaster recovery planning",
"
],
benefits: [
"
"Improve capacity utilization by 30%",
"Enhance reliability and uptime",
"Reduce maintenance costs",
"Improve operational efficiency",
"
],
useCases: [
"
"Energy efficiency improvements",
"Capacity expansion planning",
"Infrastructure modernization",
"Performance optimization",
"
],
targetAudience: [
"
"IT infrastructure managers",
"Facility managers",
"Enterprise IT departments",
"Colocation providers",
"
],
tags: ["Data Center", "Infrastructure", "Optimization", "Energy Efficiency", "Capacity Planning"],
estimatedDelivery: "6-12 weeks";,
supportLevel: "enterprise";,
marketPrice: "$8;000 - $50;000+",
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"};
rating: 4.8;
reviewCount: 67;
featured: false;
location: "Global";
availability: "24/7";
demoUrl: "https://ziontechgroup.com/demo/data-center-optimization";,
documentationUrl: "https://ziontechgroup.com/docs/data-center-optimization";,
technology: ["VMware", "Hyper-V", "Storage systems", "Network equipment", "Power systems", "Cooling systems"],
integrations: ["Enterprise systems", "Monitoring tools", "Management platforms", "Automation tools"],
compliance: ["Uptime Institute", "TIA-942", "ISO 27001", "SOC 2"],
roi: ",
competitors: ["Schneider Electric", "Eaton", "Vertiv", "HPE", "Dell EMC"],
onsiteSupport: true;,
globalCoverage: true;
};
{id: "network-security-architecture";,
title: "Network Security Architecture & Design";,
description: "Comprehensive network security architecture design and implementation services including zero-trust network design; segmentation; and advanced threat protection.",
category: "
subcategory: "
price: 12000;
currency: "$";,
pricingModel: "per-project";,
features: [
"
"Zero-trust network architecture design",
"Network segmentation and micro-segmentation",
"Advanced threat protection implementation",
"Firewall and IDS/IPS configuration",
"VPN and remote access solutions",
"Network monitoring and analytics",
"Security policy development",
"Compliance implementation",
"
],
benefits: [
"
"Reduce attack surface",
"Enable secure remote work",
"Improve compliance",
"Reduce security incidents",
"
],
useCases: [
"
"Zero-trust implementation",
"Compliance requirements",
"Remote work enablement",
"Threat protection enhancement",
"
],
targetAudience: [
"
"Security architects",
"IT managers",
"CISOs",
"Compliance officers",
"
],
tags: ["Network Security", "Zero Trust", "Architecture", "Threat Protection", "Segmentation"],
estimatedDelivery: "8-16 weeks";,
supportLevel: "premium";,
marketPrice: "$12;000 - $75;000+",
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"};
rating: 4.9;
reviewCount: 89;
featured: true;
location: "Global";
availability: "24/7";
demoUrl: "https://ziontechgroup.com/demo/network-security";,
documentationUrl: "https://ziontechgroup.com/docs/network-security";,
technology: ["Cisco", "Palo Alto", "Fortinet", "Check Point", "Juniper", "F5"],
integrations: ["Active Directory", "SIEM", "Identity providers", "Monitoring tools", "Automation platforms"],
compliance: ["NIST", "ISO 27001", "SOC 2", "PCI DSS", "HIPAA"],
roi: ",
competitors: ["Cisco", "Palo Alto Networks", "Fortinet", "Check Point", "Juniper"],
onsiteSupport: true;,
globalCoverage: true;
};
{id: "disaster-recovery-solutions";,
title: "Disaster Recovery & Business Continuity";,
description: "Comprehensive disaster recovery and business continuity solutions including backup systems; recovery planning; testing; and managed recovery services.",
category: "
subcategory: "
price: 3000;
currency: "$";,
pricingModel: "monthly";,
features: [
"
"Backup system design and implementation",
"Recovery time objective (RTO) optimization",
"Recovery point objective (RPO) management",
"Automated backup and replication",
"Recovery testing and validation",
"Business continuity planning",
"Incident response procedures",
"24/7 monitoring and support",
"
],
benefits: [
"
"Ensure business continuity",
"Reduce recovery time",
"Improve compliance",
"Protect against ransomware",
"
],
useCases: [
"
"Business continuity planning",
"Compliance requirements",
"Ransomware protection",
"High availability systems",
"
],
targetAudience: [
"
"Business continuity managers",
"Risk managers",
"Compliance officers",
"Small to medium businesses",
"
],
tags: ["Disaster Recovery", "Business Continuity", "Backup", "Recovery", "High Availability"],
estimatedDelivery: "4-8 weeks";,
supportLevel: "premium";,
marketPrice: "$3;000 - $10;000/month",
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"};
rating: 4.8;
reviewCount: 123;
featured: false;
location: "Global";
availability: "24/7";
demoUrl: "https://ziontechgroup.com/demo/disaster-recovery";,
documentationUrl: "https://ziontechgroup.com/docs/disaster-recovery";,
technology: ["Veeam", "Commvault", "Rubrik", "Cohesity", "Zerto", "VMware SRM"],
integrations: ["VMware", "Hyper-V", "Cloud platforms", "Storage systems", "Monitoring tools"],
compliance: ["SOC 2", "ISO 27001", "GDPR", "HIPAA", "SOX"],
roi: ",
competitors: ["Veeam", "Commvault", "Rubrik", "Cohesity", "Zerto"],
onsiteSupport: true;,
globalCoverage: true;
}
onsiteSupport: true;,
globalCoverage: true;}
];
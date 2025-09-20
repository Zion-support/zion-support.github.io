import React from "

export interface CybersecurityService {
id: string;
title: string;
description: string;
category: string;
subcategory: string;
price: number;
currency: string;
pricingModel: string;
features: string[[];]
benefits: string[[];]
useCases: string[[];]
targetAudience: string[[];]
tags: string[[];]
estimatedDelivery: string;
supportLevel: string;
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
}

export const CYBERSECURITY_SERVICES: CybersecurityService[] = [
// Zero Trust Security Platform;
{id: "zero-trust-security-platform";,
title: "Zero Trust Security & Access Management Platform";,
description: "Comprehensive zero trust security platform that provides continuous verification; least privilege access; and advanced threat detection for modern enterprise environments.",
category: "
subcategory: "
price: 2800;
currency: "$";,
pricingModel: "monthly";,
features: [
"
"Least privilege access control",
"Multi-factor authentication",
"Behavioral analytics",
"Threat intelligence integration",
"
],
benefits: [
"
"Simplify compliance management",
"Improve user experience",
"Reduce IT support tickets",
"
],
useCases: [
"
"Healthcare providers",
"Financial institutions",
"Government agencies",
"
],
targetAudience: [
"
"IT security managers",
"Compliance officers",
"System administrators",
"
],
tags: ["Cybersecurity", "Zero Trust", "Access Management", "Identity Verification", "Compliance"],
estimatedDelivery: "4-6 weeks";,
supportLevel: "enterprise";,
marketPrice: "$2;800 - $15;000/month",
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"}
};
// AI-Powered Threat Detection;
{id: "ai-threat-detection";
title: "AI-Powered Threat Detection & Response Platform";
description: "Advanced threat detection system that uses machine learning and behavioral analytics to identify and respond to cybersecurity threats in real-time.";
category: "Cybersecurity";
subcategory: "Threat Detection";
price: 3200;
currency: "$";,
pricingModel: "monthly";,
features: [
"
"Behavioral anomaly detection",
"Automated incident response",
"Threat intelligence feeds",
"Forensic analysis tools",
"
],
benefits: [
"
"Reduce false positives by 60%",
"Automate incident response",
"Improve security team efficiency",
"
],
useCases: [
"
"Large enterprises",
"Financial services",
"Healthcare organizations",
"
],
targetAudience: [
"
"SOC managers",
"Incident responders",
"Security engineers",
"
],
tags: ["Cybersecurity", "AI", "Threat Detection", "Incident Response", "Security Analytics"],
estimatedDelivery: "4-6 weeks";,
supportLevel: "enterprise";,
marketPrice: "$3;200 - $18;000/month",
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"}
};
// Cloud Security Posture Management;
{id: "cloud-security-posture";,
title: "Cloud Security Posture Management Platform";,
description: "Comprehensive cloud security platform that continuously monitors; assesses; and improves the security posture of multi-cloud environments.",
category: "
subcategory: "
price: 2400;
currency: "$";,
pricingModel: "monthly";,
features: [
"
"Configuration drift detection",
"Vulnerability assessment",
"Compliance monitoring",
"Security policy enforcement",
"
],
benefits: [
"
"Automate compliance checks",
"Improve security visibility",
"Reduce manual security tasks",
"
],
useCases: [
"
"DevOps teams",
"Cloud architects",
"Security teams",
"
],
targetAudience: [
"
"DevOps engineers",
"Security engineers",
"Cloud administrators",
"
],
tags: ["Cybersecurity", "Cloud Security", "DevSecOps", "Compliance", "Risk Management"],
estimatedDelivery: "3-4 weeks";,
supportLevel: "premium";,
marketPrice: "$2;400 - $12;000/month",
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"}
};
// Privacy Compliance Automation;
{id: "privacy-compliance-automation";,
title: "Privacy Compliance & Data Protection Automation Platform";,
description: "Automated privacy compliance platform that helps organizations manage GDPR; CCPA; and other privacy regulations while protecting sensitive data.",
category: "
subcategory: "
price: 1900;
currency: "$";,
pricingModel: "monthly";,
features: [
"
"Privacy impact assessments",
"Consent management",
"Data subject rights automation",
"Breach notification",
"
],
benefits: [
"
"Reduce compliance costs",
"Improve data protection",
"Enhance customer trust",
"
],
useCases: [
"
"Compliance teams",
"Legal departments",
"IT security teams",
"
],
targetAudience: [
"
"Compliance managers",
"Legal counsel",
"Data protection officers",
"
],
tags: ["Cybersecurity", "Privacy", "Compliance", "GDPR", "Data Protection"],
estimatedDelivery: "3-4 weeks";,
supportLevel: "premium";,
marketPrice: "$1;900 - $8;000/month",
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"}
};
// IoT Security Management;
{id: "iot-security-management";,
title: "IoT Security & Device Management Platform";,
description: "Comprehensive IoT security platform that protects connected devices; monitors network traffic; and manages device lifecycle security.",
category: "
subcategory: "
price: 2100;
currency: "$";,
pricingModel: "monthly";,
features: [
"
"Vulnerability scanning",
"Network traffic monitoring",
"Device authentication",
"Firmware update management",
"
],
benefits: [
"
"Reduce security vulnerabilities",
"Improve device visibility",
"Automate security updates",
"
],
useCases: [
"
"Industrial IoT",
"Healthcare IoT",
"Retail IoT",
"
],
targetAudience: [
"
"Network administrators",
"Security engineers",
"Facility managers",
"
],
tags: ["Cybersecurity", "IoT Security", "Device Management", "Network Security", "Industrial IoT"],
estimatedDelivery: "3-4 weeks";,
supportLevel: "premium";,
marketPrice: "$2;100 - $10;000/month",
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"}
}
];
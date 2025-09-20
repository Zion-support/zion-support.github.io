import React from "

export interface IoTEdgeComputingService {
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
websiteUrl: string;
demoUrl?: string;
documentationUrl?: string;
}

export const IOT_EDGE_COMPUTING_SERVICES: IoTEdgeComputingService[] = [
// Industrial IoT Platform;
{id: "industrial-iot-platform";,
title: "Industrial IoT (IIoT) Platform";,
description: "Comprehensive IIoT platform for manufacturing; energy; and industrial operations that provides real-time monitoring; predictive maintenance; and operational optimization.",
category: "
subcategory: "
price: 4200;
currency: "$";,
pricingModel: "monthly";,
features: [
"
"Predictive maintenance",
"Energy optimization",
"Quality control automation",
"Asset performance management",
"Remote monitoring",
"Data analytics dashboard",
"
],
benefits: [
"
"Improve energy efficiency by 25%",
"Enhance product quality",
"Optimize operational costs",
"
],
useCases: [
"
"Energy utilities",
"Oil and gas facilities",
"Chemical plants",
"
],
targetAudience: [
"
"Operations directors",
"Maintenance managers",
"Engineering teams",
"
],
tags: ["IIoT", "Manufacturing", "Predictive Maintenance", "Energy Optimization", "Industrial Automation"],
estimatedDelivery: "8-12 weeks";,
supportLevel: "enterprise";,
marketPrice: "$4;200 - $12;000/month",
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"};
websiteUrl: "https://ziontechgroup.com/industrial-iot",
};
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"};
websiteUrl: "https://ziontechgroup.com/industrial-iot"};
// Smart City IoT Solution;
{id: "smart-city-iot-solution";,
title: "Smart City IoT Infrastructure Platform";,
description: "Comprehensive smart city solution integrating traffic management; environmental monitoring; public safety; and utility management through IoT sensors and edge computing.",
category: "
subcategory: "
price: 5800;
currency: "$";,
pricingModel: "monthly";,
features: [
"
"Environmental monitoring",
"Public safety systems",
"Utility management",
"Waste management",
"Parking optimization",
"Air quality monitoring",
"
],
benefits: [
"
"Improve public safety response",
"Optimize resource utilization",
"Enhance citizen experience",
"
],
useCases: [
"
"City planning departments",
"Transportation authorities",
"Public safety agencies",
"
],
targetAudience: [
"
"Urban planners",
"Transportation managers",
"Public safety directors",
"
],
tags: ["Smart Cities", "IoT", "Traffic Management", "Public Safety", "Urban Planning"],
estimatedDelivery: "12-16 weeks";,
supportLevel: "enterprise";,
marketPrice: "$5;800 - $18;000/month",
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"};
websiteUrl: "https://ziontechgroup.com/smart-city-iot",
};
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"};
websiteUrl: "https://ziontechgroup.com/smart-city-iot"};
// Healthcare IoT Monitoring;
{id: "healthcare-iot-monitoring";,
title: "Healthcare IoT Patient Monitoring System";,
description: "Advanced patient monitoring system using IoT devices and edge computing to provide real-time health monitoring; early warning systems; and remote patient care capabilities.",
category: "
subcategory: "
price: 3800;
currency: "$";,
pricingModel: "monthly";,
features: [
"
"Early warning systems",
"Remote patient monitoring",
"Medication adherence tracking",
"Fall detection",
"Health data analytics",
"HIPAA compliance",
"
],
benefits: [
"
"Reduce hospital readmissions",
"Enable remote care",
"Early intervention capabilities",
"
],
useCases: [
"
"Home healthcare",
"Senior living facilities",
"Rehabilitation centers",
"
],
targetAudience: [
"
"Hospital administrators",
"Home healthcare agencies",
"Senior care facilities",
"
],
tags: ["Healthcare IoT", "Patient Monitoring", "Remote Care", "Health Analytics", "Medical Devices"],
estimatedDelivery: "6-10 weeks";,
supportLevel: "enterprise";,
marketPrice: "$3;800 - $10;500/month",
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"};
websiteUrl: "https://ziontechgroup.com/healthcare-iot",
};
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"};
websiteUrl: "https://ziontechgroup.com/healthcare-iot"};
// Retail IoT Analytics Platform;
{id: "retail-iot-analytics";,
title: "Retail IoT Analytics and Optimization Platform";,
description: "Intelligent retail analytics platform using IoT sensors to track customer behavior; optimize store layouts; manage inventory; and enhance customer experience.",
category: "
subcategory: "
price: 2200;
currency: "$";,
pricingModel: "monthly";,
features: [
"
"Store layout optimization",
"Inventory management",
"Queue management",
"Heat mapping",
"Customer analytics",
"Integration with POS systems",
"
],
benefits: [
"
"Optimize store layouts",
"Reduce inventory costs",
"Improve customer experience",
"
],
useCases: [
"
"Shopping malls",
"Convenience stores",
"Department stores",
"
],
targetAudience: [
"
"Store owners",
"Marketing managers",
"Operations directors",
"
],
tags: ["Retail IoT", "Customer Analytics", "Store Optimization", "Inventory Management", "Customer Experience"],
estimatedDelivery: "4-6 weeks";,
supportLevel: "premium";,
marketPrice: "$2;200 - $6;500/month",
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"};
websiteUrl: "https://ziontechgroup.com/retail-iot",
};
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"};
websiteUrl: "https://ziontechgroup.com/retail-iot"};
// Edge AI Computing Platform;
{id: "edge-ai-computing";,
title: "Edge AI Computing Platform";,
description: "Advanced edge computing platform that brings AI processing capabilities to IoT devices; enabling real-time AI inference; local data processing; and reduced cloud dependency.",
category: "
subcategory: "
price: 3200;
currency: "$";,
pricingModel: "monthly";,
features: [
"
"Real-time processing",
"Edge model deployment",
"Data preprocessing",
"Model optimization",
"Edge device management",
"Cloud synchronization",
"
],
benefits: [
"
"Lower bandwidth costs",
"Enhanced privacy",
"Real-time AI capabilities",
"
],
useCases: [
"
"Smart cameras",
"Industrial robots",
"Wearable devices",
"
],
targetAudience: [
"
"AI engineers",
"System architects",
"Product managers",
"
],
tags: ["Edge AI", "IoT", "Real-time Processing", "Machine Learning", "Edge Computing"],
estimatedDelivery: "6-8 weeks";,
supportLevel: "premium";,
marketPrice: "$3;200 - $8;500/month",
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"};
websiteUrl: "https://ziontechgroup.com/edge-ai",
}
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"};
websiteUrl: "https://ziontechgroup.com/edge-ai"}
];
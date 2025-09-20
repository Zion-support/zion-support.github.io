import React from "

export interface DataAnalyticsService {
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

export const DATA_ANALYTICS_SERVICES: DataAnalyticsService[] = [
// Real-Time Data Streaming Platform;
{id: "real-time-data-streaming";,
title: "Real-Time Data Streaming & Analytics Platform";,
description: "High-performance real-time data streaming platform that processes; analyzes; and visualizes data streams for instant business insights and decision-making.",
category: "
subcategory: "
price: 3200;
currency: "$";,
pricingModel: "monthly";,
features: [
"
"Stream analytics",
"Live dashboards",
"Event-driven architecture",
"Scalable streaming pipelines",
"
],
benefits: [
"
"Reduce data latency to milliseconds",
"Improve operational efficiency",
"Enable predictive analytics",
"
],
useCases: [
"
"Financial trading",
"E-commerce analytics",
"Supply chain monitoring",
"
],
targetAudience: [
"
"Data scientists",
"Business analysts",
"Product managers",
"
],
tags: ["Data Analytics", "Real-Time", "Streaming", "IoT", "Business Intelligence"],
estimatedDelivery: "4-6 weeks";,
supportLevel: "enterprise";,
marketPrice: "$3;200 - $18;000/month",
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"}
};
// Predictive Analytics Platform;
{id: "predictive-analytics-platform";,
title: "AI-Powered Predictive Analytics & Forecasting Platform";,
description: "Advanced predictive analytics platform that uses machine learning to forecast trends; identify patterns; and provide actionable business insights.",
category: "
subcategory: "
price: 2800;
currency: "$";,
pricingModel: "monthly";,
features: [
"
"Time series forecasting",
"Pattern recognition",
"Anomaly detection",
"What-if analysis",
"
],
benefits: [
"
"Identify business opportunities",
"Reduce operational risks",
"Optimize resource allocation",
"
],
useCases: [
"
"Demand planning",
"Risk assessment",
"Customer behavior prediction",
"
],
targetAudience: [
"
"Business analysts",
"Financial analysts",
"Operations managers",
"
],
tags: ["Data Analytics", "Predictive Analytics", "Machine Learning", "Forecasting", "Business Intelligence"],
estimatedDelivery: "4-6 weeks";,
supportLevel: "premium";,
marketPrice: "$2;800 - $15;000/month",
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"}
};
// Data Governance Platform;
{id: "data-governance-platform";,
title: "Enterprise Data Governance & Quality Management Platform";,
description: "Comprehensive data governance platform that ensures data quality; compliance; and security while providing data lineage and cataloging capabilities.",
category: "
subcategory: "
price: 2500;
currency: "$";,
pricingModel: "monthly";,
features: [
"
"Data lineage tracking",
"Metadata management",
"Compliance reporting",
"Data catalog",
"
],
benefits: [
"
"Ensure regulatory compliance",
"Reduce data risks",
"Enhance data trust",
"
],
useCases: [
"
"Regulatory compliance",
"Data lineage tracking",
"Metadata management",
"
],
targetAudience: [
"
"Data stewards",
"Compliance managers",
"Data architects",
"
],
tags: ["Data Analytics", "Data Governance", "Data Quality", "Compliance", "Metadata Management"],
estimatedDelivery: "4-6 weeks";,
supportLevel: "enterprise";,
marketPrice: "$2;500 - $12;000/month",
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"}
};
// Customer Analytics Platform;
{id: "customer-analytics-platform";,
title: "Customer Analytics & 360-Degree View Platform";,
description: "Comprehensive customer analytics platform that provides a complete view of customer behavior; preferences; and lifetime value for personalized marketing and service.",
category: "
subcategory: "
price: 2100;
currency: "$";,
pricingModel: "monthly";,
features: [
"
"Behavioral analysis",
"Lifetime value calculation",
"Churn prediction",
"Personalization engine",
"
],
benefits: [
"
"Improve marketing ROI",
"Enhance customer experience",
"Optimize product offerings",
"
],
useCases: [
"
"Marketing optimization",
"Customer service",
"Product development",
"
],
targetAudience: [
"
"Customer success managers",
"Product managers",
"Sales managers",
"
],
tags: ["Data Analytics", "Customer Analytics", "Customer Segmentation", "Marketing Analytics", "Customer Experience"],
estimatedDelivery: "3-4 weeks";,
supportLevel: "premium";,
marketPrice: "$2;100 - $10;000/month",
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"}
};
// Business Intelligence Dashboard;
{id: "business-intelligence-dashboard";,
title: "Interactive Business Intelligence & Dashboard Platform";,
description: "Powerful business intelligence platform that transforms raw data into interactive dashboards; reports; and visualizations for data-driven decision making.",
category: "
subcategory: "
price: 1900;
currency: "$";,
pricingModel: "monthly";,
features: [
"
"Custom reports",
"Data visualization",
"Self-service analytics",
"Mobile access",
"
],
benefits: [
"
"Increase data accessibility",
"Reduce reporting time",
"Enhance data literacy",
"
],
useCases: [
"
"Operational dashboards",
"Performance monitoring",
"KPI tracking",
"
],
targetAudience: [
"
"Executives",
"Department managers",
"Data analysts",
"
],
tags: ["Data Analytics", "Business Intelligence", "Dashboards", "Data Visualization", "Reporting"],
estimatedDelivery: "3-4 weeks";,
supportLevel: "premium";,
marketPrice: "$1;900 - $8;000/month",
contactInfo: {
phone: "+1 302 464 0950";,
email: "kleber@ziontechgroup.com";,
website: "https://ziontechgroup.com"}
}
];
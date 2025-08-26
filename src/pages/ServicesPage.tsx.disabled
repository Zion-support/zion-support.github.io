import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Zap, 
  Code, 
  Users, 
  HardDrive,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign
} from "lucide-react";
import Link2 from "lucide-react/dist/esm/icons/link-2";
import Wifi from "lucide-react/dist/esm/icons/wifi";
import { Globe, Zap } from "lucide-react";
import { Globe, Brain, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { Globe, Zap, Brain } from "lucide-react";
import { useEffect, useState } from "react";
import { MICRO_SAAS_SERVICES } from "@/data/microSaasServices";
import apiClient from "@/services/apiClient";
import { toast } from "@/hooks/use-toast";
import Link from "next/link";
import { Globe } from "lucide-react";
import ServicesList from '@/components/ServicesList';
import { Globe, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ENHANCED_SERVICES } from "@/data/enhancedServices";

// Enhanced service listings
const SERVICE_LISTINGS: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-content-generation",
    title: "AI Content Generator Pro",
    description: "Generate high-quality content, code, and creative assets with our advanced AI models. Perfect for marketers, developers, and content creators.",
    category: "AI & ML",
    price: 29,
    currency: "$",
    tags: ["AI Content", "Text Generation", "Code Generation", "Creative Writing"],
    author: {
      name: "Zion AI Labs",
      id: "zion-ai-labs",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:00:00.000Z",
    aiScore: 98,
    rating: 4.9,
    reviewCount: 156,
  },
  {
    id: "ai-media-editing",
    title: "AI Image & Video Editor",
    description: "Professional-grade AI-powered image and video editing tools for creators and businesses. Remove backgrounds, enhance quality, and generate variations.",
    category: "AI & ML",
    price: 19,
    currency: "$",
    tags: ["Image Editing", "Video Editing", "AI Enhancement", "Background Removal"],
    author: {
      name: "Zion Media Studio",
      id: "zion-media-studio",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:30:00.000Z",
    aiScore: 95,
    rating: 4.8,
    reviewCount: 89,
  },
  {
    id: "ai-code-assistant",
    title: "AI Code Assistant",
    description: "Intelligent code completion, debugging, and optimization powered by advanced language models. Support for 50+ programming languages with IDE integrations.",
    category: "AI & ML",
    price: 39,
    currency: "$",
    tags: ["Code Completion", "Debugging", "Code Review", "IDE Integration"],
    author: {
      name: "Zion Dev Tools",
      id: "zion-dev-tools",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T09:15:00.000Z",
    aiScore: 97,
    rating: 4.9,
    reviewCount: 203,
  },
  {
    id: "ai-analytics",
    title: "AI Data Analytics Platform",
    description: "Transform raw data into actionable insights with our AI-powered analytics suite. Advanced data visualization, predictive analytics, and automated reporting.",
    category: "AI & ML",
    price: 199,
    currency: "$",
    tags: ["Data Analytics", "Predictive Analytics", "Data Visualization", "Business Intelligence"],
    author: {
      name: "Zion Analytics",
      id: "zion-analytics",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T11:00:00.000Z",
    aiScore: 96,
    rating: 4.8,
    reviewCount: 67,
  },

  // Cybersecurity Services
  {
    id: "ai-threat-detection",
    title: "AI Threat Detection",
    description: "Real-time cybersecurity threat detection and response using advanced AI algorithms. 24/7 monitoring with instant alerts and automated response.",
    category: "Cybersecurity",
    price: 99,
    currency: "$",
    tags: ["Threat Detection", "AI Security", "24/7 Monitoring", "Automated Response"],
    author: {
      name: "Zion Security",
      id: "zion-security",
      avatarUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T16:45:00.000Z",
    aiScore: 94,
    rating: 4.9,
    reviewCount: 134,
  },
  {
    id: "zero-trust-security",
    title: "Zero Trust Security Suite",
    description: "Comprehensive zero-trust security implementation for modern enterprise environments. Identity verification, network segmentation, and continuous monitoring.",
    category: "Cybersecurity",
    price: 499,
    currency: "$",
    tags: ["Zero Trust", "Identity Verification", "Network Security", "Enterprise Security"],
    author: {
      name: "Zion Enterprise Security",
      id: "zion-enterprise-security",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T13:20:00.000Z",
    aiScore: 93,
    rating: 4.7,
    reviewCount: 78,
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing as a Service",
    description: "Regular security assessments and vulnerability scanning for continuous protection. Monthly security assessments with detailed reports and remediation guidance.",
    category: "Cybersecurity",
    price: 299,
    currency: "$",
    tags: ["Penetration Testing", "Vulnerability Assessment", "Security Compliance", "Monthly Reports"],
    author: {
      name: "Zion Security Testing",
      id: "zion-security-testing",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T10:30:00.000Z",
    aiScore: 91,
    rating: 4.8,
    reviewCount: 92,
  },

  // Cloud & Infrastructure Services
  {
    id: "multi-cloud-management",
    title: "Multi-Cloud Management",
    description: "Unified management platform for AWS, Azure, Google Cloud, and hybrid environments. Cost optimization, security compliance, and unified monitoring.",
    category: "Cloud & Infrastructure",
    price: 79,
    currency: "$",
    tags: ["Multi-Cloud", "Cost Optimization", "Security Compliance", "Unified Monitoring"],
    author: {
      name: "Zion Cloud Solutions",
      id: "zion-cloud-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T15:15:00.000Z",
    aiScore: 89,
    rating: 4.6,
    reviewCount: 145,
  },
  {
    id: "devops-automation",
    title: "DevOps Automation Platform",
    description: "Streamline CI/CD pipelines, infrastructure as code, and deployment automation. Automated testing, deployment, and infrastructure management.",
    category: "Cloud & Infrastructure",
    price: 49,
    currency: "$",
    tags: ["DevOps", "CI/CD", "Infrastructure as Code", "Automation"],
    author: {
      name: "DevOps Dynamics",
      id: "devops-dynamics",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-22T16:30:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 167,
  },

  // Cybersecurity Services
  {
    id: "cybersecurity-assessment",
    title: "Cybersecurity Assessment & Protection",
    description: "Comprehensive security audits, penetration testing, and protection system implementation. We help organizations identify vulnerabilities and implement robust security measures.",
    category: "Security Services",
    price: 20000,
    currency: "$",
    tags: ["Cybersecurity", "Penetration Testing", "Security Audits", "Compliance", "Threat Protection"],
    author: {
      name: "SecureNet Team",
      id: "secure-net-team",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-25T13:45:00.000Z",
    aiScore: 97,
    rating: 4.9,
    reviewCount: 189,
  },
  {
    id: "compliance-framework",
    title: "Compliance Framework Setup",
    description: "SOC 2, ISO 27001, GDPR, and other compliance framework implementation. We help organizations meet regulatory requirements and build trust with customers and partners.",
    category: "Security Services",
    price: 35000,
    currency: "$",
    tags: ["Compliance", "SOC 2", "ISO 27001", "GDPR", "Regulatory"],
    author: {
      name: "Compliance Experts",
      id: "compliance-experts",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-28T10:15:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 145,
  },

  // Data & Analytics Services
  {
    id: "big-data-engineering",
    title: "Big Data Engineering",
    description: "End-to-end big data solutions including data pipeline development, ETL processes, data warehousing, and real-time analytics. We handle petabytes of data with optimal performance.",
    category: "Data Services",
    price: 28000,
    currency: "$",
    tags: ["Big Data", "Data Engineering", "ETL", "Data Warehousing", "Real-time Analytics"],
    author: {
      name: "DataMind Solutions",
      id: "data-mind-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T15:20:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 178,
  },

  // Development Services
  {
    id: "web-development",
    title: "Custom Web Development",
    description: "Full-stack web development services including frontend, backend, and database design. We build scalable, secure, and high-performance web applications for businesses of all sizes.",
    category: "Development Services",
    price: 15000,
    currency: "$",
    tags: ["Web Development", "Full-stack", "React", "Node.js", "Scalable"],
    author: {
      name: "WebCraft Studios",
      id: "web-craft-studios",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-01T12:00:00.000Z",
    aiScore: 91,
    rating: 4.7,
    reviewCount: 234,
  },

  // Blockchain Services
  {
    id: "blockchain-development",
    title: "Blockchain Development",
    description: "Custom blockchain solutions including smart contracts, DeFi protocols, and NFT marketplaces. We build on Ethereum, Polygon, and other leading blockchain platforms.",
    category: "Blockchain Services",
    price: 40000,
    currency: "$",
    tags: ["Blockchain", "Smart Contracts", "DeFi", "NFTs", "Ethereum"],
    author: {
      name: "Blockchain Builders",
      id: "blockchain-builders",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T14:30:00.000Z",
    aiScore: 96,
    rating: 4.8,
    reviewCount: 89,
  },
  // New innovative micro SAAS services
  {
    id: "service-7",
    title: "AI-Powered Content Generation",
    description: "Automated content creation for blogs, social media, and marketing materials using advanced language models.",
    category: "AI Services",
    price: 299,
    currency: "$",
    tags: ["Content Creation", "AI Writing", "Marketing Automation"],
    author: {
      name: "ContentAI Pro",
      id: "content-ai-pro",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-15T12:00:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 156,
  },
  {
    id: "service-8",
    title: "Smart Contract Development",
    description: "Blockchain smart contract development and auditing for DeFi, NFTs, and enterprise blockchain solutions.",
    category: "Blockchain",
    price: 3500,
    currency: "$",
    tags: ["Smart Contracts", "Blockchain", "DeFi", "NFTs"],
    author: {
      name: "BlockChain Solutions",
      id: "blockchain-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-10T14:30:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 89,
  },
  {
    id: "service-9",
    title: "IoT Device Management Platform",
    description: "Complete IoT solution including device provisioning, monitoring, data collection, and analytics dashboard.",
    category: "IoT",
    price: 1200,
    currency: "$",
    tags: ["IoT", "Device Management", "Data Analytics", "Monitoring"],
    author: {
      name: "IoT Masters",
      id: "iot-masters",
      avatarUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-08T09:15:00.000Z",
    aiScore: 91,
    rating: 4.7,
    reviewCount: 67,
  },
  {
    id: "service-10",
    title: "AI-Powered Customer Support Bot",
    description: "Intelligent chatbot with natural language processing for 24/7 customer support and lead generation.",
    category: "AI Services",
    price: 450,
    currency: "$",
    tags: ["Chatbot", "Customer Support", "NLP", "Lead Generation"],
    author: {
      name: "BotGenius",
      id: "bot-genius",
      avatarUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551434678-e076c223a5ab?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-12T11:45:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 123,
  },
  {
    id: "service-11",
    title: "Predictive Analytics Dashboard",
    description: "Real-time business intelligence platform with predictive modeling for sales forecasting and trend analysis.",
    category: "Analytics",
    price: 800,
    currency: "$",
    tags: ["Predictive Analytics", "Business Intelligence", "Forecasting", "Real-time"],
    author: {
      name: "Predictive Insights",
      id: "predictive-insights",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-03T12:00:00.000Z",
    aiScore: 92,
    rating: 4.7,
    reviewCount: 167,
  },
  {
    id: "edge-computing",
    title: "Edge Computing Solutions",
    description: "Deploy and manage applications at the edge for improved performance and reduced latency. Global edge network with real-time processing and IoT integration.",
    category: "Cloud & Infrastructure",
    price: 149,
    currency: "$",
    tags: ["Edge Computing", "IoT Integration", "Real-time Processing", "Global Network"],
    author: {
      name: "Zion Edge Computing",
      id: "zion-edge-computing",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-26T08:45:00.000Z",
    aiScore: 88,
    rating: 4.5,
    reviewCount: 73,
  },

  // Business Intelligence Services
  {
    id: "ai-crm",
    title: "AI-Powered CRM",
    description: "Intelligent customer relationship management with predictive analytics and automation. Lead scoring, sales forecasting, and automated follow-ups.",
    category: "Business Intelligence",
    price: 39,
    currency: "$",
    tags: ["CRM", "Lead Scoring", "Sales Forecasting", "Automation"],
    author: {
      name: "Zion Business Solutions",
      id: "zion-business-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-24T14:20:00.000Z",
    aiScore: 90,
    rating: 4.6,
    reviewCount: 189,
  },
  {
    id: "business-automation",
    title: "Business Process Automation",
    description: "Automate repetitive tasks and workflows to improve efficiency and reduce costs. Integration with 100+ business applications.",
    category: "Business Intelligence",
    price: 29,
    currency: "$",
    tags: ["Edge Computing", "Real-time Processing", "IoT", "Low Latency"],
    author: {
      name: "EdgeTech Solutions",
      id: "edgetech-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-13T11:30:00.000Z",
    aiScore: 90,
    rating: 4.7,
    reviewCount: 62,
  },
  {
    id: "service-7",
    title: "AI-Powered Customer Support Automation",
    description: "Implement intelligent chatbots and automated customer service solutions that provide 24/7 support and improve customer satisfaction.",
    category: "AI Services",
    price: 2800,
    currency: "$",
    tags: ["Chatbots", "Customer Support", "Automation", "AI"],
    author: {
      name: "Zion Automation",
      id: "zion-automation",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-29T11:30:00.000Z",
    aiScore: 87,
    rating: 4.5,
    reviewCount: 156,
  },
  {
    id: "ai-market-research",
    title: "AI Market Research",
    description: "Comprehensive market analysis and competitive intelligence powered by AI. Real-time monitoring, competitor analysis, and trend prediction.",
    category: "Business Intelligence",
    price: 199,
    currency: "$",
    tags: ["Market Research", "Competitive Intelligence", "Trend Analysis", "Real-time Monitoring"],
    author: {
      name: "Zion Market Intelligence",
      id: "zion-market-intelligence",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-02T09:15:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 98,
  },

  // Communication & Collaboration Services
  {
    id: "ai-meeting-assistant",
    title: "AI Meeting Assistant",
    description: "Intelligent meeting transcription, summarization, and action item tracking. Real-time transcription with smart summaries and automated follow-ups.",
    category: "Communication",
    price: 19,
    currency: "$",
    tags: ["Meeting Transcription", "AI Summarization", "Action Tracking", "Productivity"],
    author: {
      name: "Zion Communication",
      id: "zion-communication",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-27T13:45:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 234,
  },
  {
    id: "virtual-events",
    title: "Virtual Event Platform",
    description: "Host engaging virtual events, webinars, and conferences with AI-powered features. Interactive features, analytics, and engagement tools.",
    category: "Communication",
    price: 99,
    currency: "$",
    tags: ["Virtual Events", "Webinars", "AI Engagement", "Event Analytics"],
    author: {
      name: "Zion Events",
      id: "zion-events",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-31T10:00:00.000Z",
    aiScore: 91,
    rating: 4.7,
    reviewCount: 112,
  },
  {
    id: "ai-translation",
    title: "AI Translation Service",
    description: "Real-time translation and localization for global communication and content. Support for 100+ languages with cultural adaptation.",
    category: "Communication",
    price: 29,
    currency: "$",
    tags: ["Translation", "Localization", "100+ Languages", "Cultural Adaptation"],
    author: {
      name: "Zion Global",
      id: "zion-global",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-23T15:30:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 178,
  },

  // Specialized Tools
  {
    id: "ai-legal-review",
    title: "AI Legal Document Review",
    description: "Automated legal document analysis, contract review, and compliance checking. Contract analysis, risk assessment, and compliance monitoring.",
    category: "Specialized Tools",
    price: 149,
    currency: "$",
    tags: ["Legal Review", "Contract Analysis", "Risk Assessment", "Compliance"],
    author: {
      name: "Zion Legal Tech",
      id: "zion-legal-tech",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-19T12:15:00.000Z",
    aiScore: 89,
    rating: 4.6,
    reviewCount: 87,
  },
  {
    id: "ai-financial-advisor",
    title: "AI Financial Advisor",
    description: "Personalized financial planning and investment recommendations powered by AI. Portfolio optimization, risk assessment, and financial goal planning.",
    category: "Specialized Tools",
    price: 39,
    currency: "$",
    tags: ["Financial Planning", "Investment Advice", "Portfolio Optimization", "Risk Assessment"],
    author: {
      name: "Zion Financial",
      id: "zion-financial",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-21T16:00:00.000Z",
    aiScore: 92,
    rating: 4.7,
    reviewCount: 143,
  },
  {
    id: "ai-healthcare",
    title: "AI Healthcare Assistant",
    description: "Intelligent health monitoring, symptom analysis, and wellness recommendations. Health tracking, symptom analysis, and wellness coaching. HIPAA compliant.",
    category: "Specialized Tools",
    price: 29,
    currency: "$",
    tags: ["Health Monitoring", "Symptom Analysis", "Wellness Coaching", "HIPAA Compliant"],
    author: {
      name: "Zion Health",
      id: "zion-health",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-17T14:45:00.000Z",
    aiScore: 90,
    rating: 4.8,
    reviewCount: 267,
  },

  // Emerging Technology Services
  {
    id: "quantum-computing-simulator",
    title: "Quantum Computing Simulator",
    description: "Access to quantum computing resources and simulation tools for research, optimization, and cryptography. Support for Qiskit, Cirq, and custom quantum algorithms.",
    category: "Emerging Tech",
    price: 299,
    currency: "$",
    tags: ["Quantum Computing", "Qiskit", "Cirq", "Cryptography", "Optimization"],
    author: {
      name: "Zion Quantum Labs",
      id: "zion-quantum-labs",
      avatarUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T10:00:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 45,
  },
  {
    id: "blockchain-development-platform",
    title: "Blockchain Development Platform",
    description: "Complete blockchain development suite with smart contract templates, DeFi protocols, and NFT marketplace solutions. Support for Ethereum, Polygon, and Solana.",
    category: "Emerging Tech",
    price: 79,
    currency: "$",
    tags: ["Blockchain", "Smart Contracts", "DeFi", "NFT", "Web3"],
    author: {
      name: "Zion Blockchain",
      id: "zion-blockchain",
      avatarUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-06T14:30:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 67,
  },
  {
    id: "ai-robotics-platform",
    title: "AI Robotics Control Platform",
    description: "Cloud-based robotics control and automation platform with AI-powered decision making. Perfect for manufacturing, logistics, and autonomous systems.",
    category: "Emerging Tech",
    price: 199,
    currency: "$",
    tags: ["Robotics", "AI Control", "Automation", "Manufacturing", "Logistics"],
    author: {
      name: "Zion Robotics",
      id: "zion-robotics",
      avatarUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-07T09:15:00.000Z",
    aiScore: 94,
    rating: 4.7,
    reviewCount: 34,
  },

  // Advanced AI Services
  {
    id: "ai-voice-cloning",
    title: "AI Voice Cloning & Synthesis",
    description: "Professional voice cloning technology for content creation, accessibility, and personalized experiences. High-quality voice synthesis with emotion control.",
    category: "AI & ML",
    price: 49,
    currency: "$",
    tags: ["Voice Cloning", "Text-to-Speech", "Voice Synthesis", "Accessibility"],
    author: {
      name: "Zion Voice AI",
      id: "zion-voice-ai",
      avatarUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-08T11:45:00.000Z",
    aiScore: 97,
    rating: 4.9,
    reviewCount: 89,
  },
  {
    id: "ai-emotion-detection",
    title: "AI Emotion Detection System",
    description: "Real-time emotion detection and sentiment analysis for customer service, marketing, and user experience optimization. Multi-modal analysis including text, voice, and video.",
    category: "AI & ML",
    price: 69,
    currency: "$",
    tags: ["Emotion Detection", "Sentiment Analysis", "Customer Service", "UX Optimization"],
    author: {
      name: "Zion Emotion AI",
      id: "zion-emotion-ai",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-09T13:20:00.000Z",
    aiScore: 95,
    rating: 4.8,
    reviewCount: 56,
  },

  // Advanced Cybersecurity Services
  {
    id: "ai-behavioral-analysis",
    title: "AI Behavioral Analysis Security",
    description: "Advanced security system using AI to detect anomalous user behavior and potential insider threats. Continuous learning and adaptive threat detection.",
    category: "Cybersecurity",
    price: 399,
    currency: "$",
    tags: ["Behavioral Analysis", "Insider Threat Detection", "AI Security", "Anomaly Detection"],
    author: {
      name: "Zion Behavioral Security",
      id: "zion-behavioral-security",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-10T15:30:00.000Z",
    aiScore: 94,
    rating: 4.9,
    reviewCount: 78,
  },
  {
    id: "quantum-encryption",
    title: "Quantum-Safe Encryption",
    description: "Future-proof encryption solutions resistant to quantum computing attacks. Post-quantum cryptography implementation for long-term data security.",
    category: "Cybersecurity",
    price: 599,
    currency: "$",
    tags: ["Quantum Encryption", "Post-Quantum Cryptography", "Future-Proof Security", "Data Protection"],
    author: {
      name: "Zion Quantum Security",
      id: "zion-quantum-security",
      avatarUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-11T10:15:00.000Z",
    aiScore: 96,
    rating: 4.8,
    reviewCount: 42,
  },

  // Advanced Cloud & Infrastructure
  {
    id: "ai-powered-load-balancing",
    title: "AI-Powered Load Balancing",
    description: "Intelligent traffic distribution and load balancing using machine learning algorithms. Predictive scaling and automatic failover for optimal performance.",
    category: "Cloud & Infrastructure",
    price: 89,
    currency: "$",
    tags: ["Load Balancing", "AI Traffic Management", "Predictive Scaling", "Auto-Failover"],
    author: {
      name: "Zion Cloud AI",
      id: "zion-cloud-ai",
      avatarUrl: "https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-12T12:00:00.000Z",
    aiScore: 91,
    rating: 4.7,
    reviewCount: 63,
  },
  {
    id: "green-cloud-optimization",
    title: "Green Cloud Optimization",
    description: "AI-powered cloud resource optimization to reduce carbon footprint and energy costs. Sustainable computing with intelligent resource allocation.",
    category: "Cloud & Infrastructure",
    price: 59,
    currency: "$",
    tags: ["Green Computing", "Energy Optimization", "Carbon Reduction", "Sustainable Tech"],
    author: {
      name: "Zion Green Cloud",
      id: "zion-green-cloud",
      avatarUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-13T14:45:00.000Z",
    aiScore: 89,
    rating: 4.6,
    reviewCount: 38,
  },

  // Advanced Business Intelligence
  {
    id: "ai-predictive-maintenance",
    title: "AI Predictive Maintenance",
    description: "Predictive maintenance system using IoT sensors and AI to prevent equipment failures and optimize maintenance schedules. Industry 4.0 ready.",
    category: "Business Intelligence",
    price: 149,
    currency: "$",
    tags: ["Predictive Maintenance", "IoT Sensors", "Industry 4.0", "Equipment Optimization"],
    author: {
      name: "Zion Industrial AI",
      id: "zion-industrial-ai",
      avatarUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-14T16:20:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 71,
  },
  {
    id: "ai-supply-chain-optimization",
    title: "AI Supply Chain Optimization",
    description: "Intelligent supply chain management with demand forecasting, route optimization, and inventory management. Real-time tracking and predictive analytics.",
    category: "Business Intelligence",
    price: 179,
    currency: "$",
    tags: ["Supply Chain", "Demand Forecasting", "Route Optimization", "Inventory Management"],
    author: {
      name: "Zion Supply Chain AI",
      id: "zion-supply-chain-ai",
      avatarUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-15T09:30:00.000Z",
    aiScore: 92,
    rating: 4.7,
    reviewCount: 54,
  },

  // Advanced Communication Services
  {
    id: "ai-real-time-translation",
    title: "AI Real-Time Translation",
    description: "Live translation service for meetings, calls, and presentations with support for 150+ languages. Real-time transcription and translation with cultural context.",
    category: "Communication",
    price: 39,
    currency: "$",
    tags: ["Real-Time Translation", "150+ Languages", "Live Transcription", "Cultural Context"],
    author: {
      name: "Zion Live Translation",
      id: "zion-live-translation",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-16T11:15:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 123,
  },
  {
    id: "ai-video-production",
    title: "AI Video Production Suite",
    description: "Automated video creation, editing, and production using AI. Generate professional videos from text, create animations, and enhance existing footage.",
    category: "Communication",
    price: 79,
    currency: "$",
    tags: ["Video Production", "AI Video Creation", "Automated Editing", "Animation"],
    author: {
      name: "Zion Video AI",
      id: "zion-video-ai",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-17T13:45:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 87,
  },

  // Specialized Advanced Tools
  {
    id: "ai-legal-contract-generator",
    title: "AI Legal Contract Generator",
    description: "Intelligent contract creation and review with legal compliance checking. Generate contracts, analyze risks, and ensure regulatory compliance.",
    category: "Specialized Tools",
    price: 89,
    currency: "$",
    tags: ["Contract Generation", "Legal Compliance", "Risk Analysis", "Regulatory Compliance"],
    author: {
      name: "Zion Legal AI",
      id: "zion-legal-ai",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-18T15:20:00.000Z",
    aiScore: 91,
    rating: 4.7,
    reviewCount: 62,
  },
  {
    id: "ai-personalized-learning",
    title: "AI Personalized Learning Platform",
    description: "Adaptive learning system that personalizes educational content based on individual learning styles and progress. AI tutors and progress tracking.",
    category: "Specialized Tools",
    price: 49,
    currency: "$",
    tags: ["Personalized Learning", "AI Tutors", "Adaptive Education", "Progress Tracking"],
    author: {
      name: "Zion Education AI",
      id: "zion-education-ai",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-19T10:30:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 95,
  },

  // Legacy services (keeping existing ones)
  {
    id: "service-1",
    title: "AI Development & Integration",
    description: "Full-stack AI development services to integrate advanced machine learning models into your existing business systems.",
    category: "Development",
    price: 5000,
    currency: "$",
    tags: ["AI Integration", "Machine Learning", "Enterprise"],
    author: {
      name: "TechSolutions Inc.",
      id: "tech-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-12-10T14:48:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 124,
  },
  {
    id: "service-2",
    title: "Cloud Infrastructure Management",
    description: "24/7 monitoring and management of your cloud infrastructure to ensure optimal performance, security, and cost efficiency.",
    category: "Management",
    price: 3000,
    currency: "$",
    tags: ["Cloud", "DevOps", "Security"],
    author: {
      name: "CloudPro Experts",
      id: "cloud-pro",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-11-20T09:30:00.000Z",
    aiScore: 88,
    rating: 4.7,
    reviewCount: 92,
  },
  {
    id: "service-3",
    title: "Big Data Analysis & Insights",
    description: "Transform your raw data into actionable business insights with our advanced analytics and visualization services.",
    category: "Analytics",
    price: 4500,
    currency: "$",
    tags: ["Big Data", "Analytics", "Business Intelligence"],
    author: {
      name: "DataMind Solutions",
      id: "datamind",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-05T11:15:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 78,
  },
  {
    id: "service-4",
    title: "Cybersecurity Assessment & Protection",
    description: "Comprehensive security audits and implementation of robust protection systems against modern cyber threats.",
    category: "Security",
    price: 6000,
    currency: "$",
    tags: ["Cybersecurity", "Penetration Testing", "Compliance"],
    author: {
      name: "SecureNet Team",
      id: "secure-net",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-12-28T16:22:00.000Z",
    aiScore: 89,
    rating: 4.9,
    reviewCount: 103,
  },
  {
    id: "service-5",
    title: "IT Infrastructure Modernization",
    description: "Transform your legacy systems into modern, agile infrastructure that supports innovation and business growth.",
    category: "Consulting",
    price: 8500,
    currency: "$",
    tags: ["Digital Transformation", "Legacy Systems", "Infrastructure"],
    author: {
      name: "ModernizeIT Consulting",
      id: "modernize-it",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2023-11-10T08:45:00.000Z",
    aiScore: 86,
    rating: 4.6,
    reviewCount: 67,
  },
  {
    id: "service-6",
    title: "AI Strategy & Implementation",
    description: "Strategic consulting and implementation services to help businesses leverage AI for competitive advantage.",
    category: "Strategy",
    price: 7500,
    currency: "$",
    tags: ["AI Strategy", "Digital Transformation", "Business Growth"],
    author: {
      name: "AI Future Consulting",
      id: "ai-future",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-02T10:30:00.000Z",
    aiScore: 94,
    rating: 4.8,
    reviewCount: 85,
  },
];

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Filter options for services
const SERVICE_FILTERS = [
  { label: 'AI Services', value: 'ai-services' },
  { label: 'Blockchain', value: 'blockchain' },
  { label: 'IoT', value: 'iot' },
  { label: 'Infrastructure', value: 'infrastructure' },
  { label: 'Sustainability', value: 'sustainability' },
  { label: 'AI Services', value: 'ai services' },
];

// Use comprehensive services instead of sample listings
const SERVICE_LISTINGS: ProductListing[] = COMPREHENSIVE_SERVICES;

  const images = [
    "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500",
  ];

  const template = getRandomItem(templates);
  const author = getRandomItem(authors);
  const price = Math.round(
    Math.random() * (template.max - template.min) + template.min
  );

  return {
    id: `auto-service-${idNum}`,
    title: template.title,
    description: `Professional ${template.title.toLowerCase()} with industry-standard practices and tailored solutions for your business.`,
    category: template.category,
    price,
    currency: "$",
    tags: template.tags,
    author: { name: author, id: author.toLowerCase().replace(/\s+/g, "-") },
    images: [getRandomItem(images)],
    createdAt: new Date().toISOString(),
    aiScore: Math.floor(90 + Math.random() * 10),
    rating: parseFloat((4 + Math.random()).toFixed(1)),
    reviewCount: Math.floor(50 + Math.random() * 150),
  };
}

// Enhanced filter options for all service categories
const SERVICE_FILTERS = [
  { label: 'AI & ML', value: 'ai-ml' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'Cloud & Infrastructure', value: 'cloud-infrastructure' },
  { label: 'Business Intelligence', value: 'business-intelligence' },
  { label: 'Communication', value: 'communication' },
  { label: 'Specialized Tools', value: 'specialized-tools' },
  { label: 'Emerging Tech', value: 'emerging-tech' },
  { label: 'Development', value: 'development' },
  { label: 'Management', value: 'management' },
  { label: 'Security', value: 'security' },
  { label: 'Analytics', value: 'analytics' },
  { label: 'Consulting', value: 'consulting' },
  { label: 'Strategy', value: 'strategy' },
];

export default function ServicesPage() {
  const [listings, setListings] = useState<ProductListing[]>(SERVICE_LISTINGS);

  useEffect(() => {
    const interval = setInterval(() => {
      setListings(prev => [...prev, generateRandomService(prev.length + 1)]);
    }, 120000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Existing page content remains */}
      {/* Marketing section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-zion-blue">Zion Tech Group Services</h2>
            <p className="text-zion-slate max-w-3xl mx-auto mt-3">
              We deliver practical Micro SAAS, IT, and AI solutions with fast time‑to‑value. Average market pricing is indicated on each service card; we benchmark against transparent ranges and tailor quotes per scope.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-zion-slate/20 bg-zion-blue/5">
              <h3 className="font-semibold text-zion-blue mb-2">What you get</h3>
              <ul className="list-disc pl-5 text-sm text-zion-slate">
                <li>Clear outcomes, SLAs, and success metrics</li>
                <li>Security‑first implementations and compliance support</li>
                <li>Documentation, knowledge transfer, and training</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg border border-zion-slate/20 bg-zion-blue/5">
              <h3 className="font-semibold text-zion-blue mb-2">Engagement models</h3>
              <ul className="list-disc pl-5 text-sm text-zion-slate">
                <li>Fixed‑scope projects and monthly subscriptions</li>
                <li>Pilot/MVPs in 2–6 weeks</li>
                <li>Enterprise support and 24×7 options</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg border border-zion-slate/20 bg-zion-blue/5">
              <h3 className="font-semibold text-zion-blue mb-2">Contact us</h3>
              <ul className="text-sm text-zion-slate space-y-1">
                <li>Mobile: <a className="text-zion-cyan" href="tel:+13024640950">+1 302 464 0950</a></li>
                <li>E‑mail: <a className="text-zion-cyan" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></li>
                <li>Address: 364 E Main St STE 1008 Middletown DE 19709</li>
                <li>Website: <a className="text-zion-cyan" href="https://ziontechgroup.com" target="_blank" rel="noreferrer">ziontechgroup.com</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-10">
            <a className="inline-flex items-center px-6 py-3 rounded-lg bg-zion-cyan text-white" href="https://ziontechgroup.com/contact" target="_blank" rel="noreferrer">
              Get a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

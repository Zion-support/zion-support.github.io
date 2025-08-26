
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { TrustedBySection } from "@/components/TrustedBySection";
import { ServicesOverview } from "@/components/services/ServicesOverview";
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
=======
import { Globe, Zap } from "lucide-react";
=======
import { Globe, Zap } from "lucide-react";
=======
import { Globe, Brain, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { Globe, Zap, Brain } from "lucide-react";
import { useEffect, useState } from "react";
import { MICRO_SAAS_SERVICES } from "@/data/microSaasServices";
=======
import apiClient from "@/services/apiClient";
import { toast } from "@/hooks/use-toast";
=======
import Link from "next/link";
import { Globe } from "lucide-react";
import ServicesList from '@/components/ServicesList';
=======
import apiClient from "@/services/apiClient";

import { Globe, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ENHANCED_SERVICES } from "@/data/enhancedServices";

// Enhanced service listings
const SERVICE_LISTINGS: ProductListing[] = [
  // AI & Machine Learning Services
  {
    id: "ai-development",
    title: "AI Development & Integration",
    description: "Full-stack AI development services including custom model development, API integration, and deployment. We specialize in machine learning, natural language processing, and computer vision solutions.",
    category: "AI Services",
    price: 15000,
    currency: "$",
    tags: ["AI Integration", "Machine Learning", "Enterprise", "Custom Models"],
    author: {
      name: "AI Solutions Pro",
      id: "ai-solutions-pro",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-15T10:30:00.000Z",
    aiScore: 98,
    rating: 4.9,
    reviewCount: 156,
  },
  {
    id: "ai-strategy-consulting",
    title: "AI Strategy Consulting",
    description: "Strategic AI implementation planning and business transformation consulting. We help organizations identify AI opportunities, develop roadmaps, and implement AI solutions for competitive advantage.",
    category: "AI Services",
    price: 8000,
    currency: "$",
    tags: ["AI Strategy", "Digital Transformation", "Business Consulting", "ROI Analysis"],
    author: {
      name: "AI Future Consulting",
      id: "ai-future-consulting",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-20T14:15:00.000Z",
    aiScore: 95,
    rating: 4.8,
    reviewCount: 89,
  },
  {
    id: "ml-model-training",
    title: "Machine Learning Model Training",
    description: "Custom ML model training and optimization services. We handle data preprocessing, model selection, training, validation, and deployment for various use cases including classification, regression, and clustering.",
    category: "AI Services",
    price: 12000,
    currency: "$",
    tags: ["Machine Learning", "Model Training", "Data Science", "Optimization"],
    author: {
      name: "ML Masters",
      id: "ml-masters",
      avatarUrl: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-18T11:45:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 134,
  },

  // Cloud & Infrastructure Services
  {
    id: "cloud-migration",
    title: "Cloud Migration & Support",
    description: "End-to-end cloud migration services including assessment, planning, execution, and ongoing support. We specialize in AWS, Azure, and Google Cloud migrations with minimal downtime.",
    category: "Cloud Services",
    price: 25000,
    currency: "$",
    tags: ["Cloud Migration", "AWS", "Azure", "DevOps", "24/7 Support"],
    author: {
      name: "CloudPro Experts",
      id: "cloud-pro-experts",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-10T09:20:00.000Z",
    aiScore: 92,
    rating: 4.7,
    reviewCount: 203,
  },
  {
    id: "devops-automation",
    title: "DevOps Automation",
    description: "Complete DevOps automation including CI/CD pipeline setup, infrastructure as code, monitoring, and automation. We implement best practices for faster deployments and improved reliability.",
    category: "Cloud Services",
    price: 18000,
    currency: "$",
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure as Code", "Monitoring"],
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
=======

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
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c072?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-14T16:20:00.000Z",
    aiScore: 92,
    rating: 4.7,
    reviewCount: 78,
  },
  {
    id: "service-12",
    title: "API Gateway & Management",
    description: "Enterprise-grade API management platform with rate limiting, authentication, monitoring, and developer portal.",
    category: "Development",
    price: 650,
    currency: "$",
    tags: ["API Management", "Gateway", "Rate Limiting", "Developer Portal"],
    author: {
      name: "API Hub",
      id: "api-hub",
      avatarUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-11T13:10:00.000Z",
    aiScore: 89,
    rating: 4.6,
    reviewCount: 92,
  },
  {
    id: "service-13",
    title: "Zero-Trust Security Framework",
    description: "Implementation of zero-trust security architecture with identity verification, micro-segmentation, and continuous monitoring.",
    category: "Security",
    price: 4200,
    currency: "$",
    tags: ["Zero-Trust", "Identity Verification", "Micro-segmentation", "Security"],
    author: {
      name: "SecureZero",
      id: "secure-zero",
      avatarUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-13T10:30:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 134,
  },
  {
    id: "service-14",
    title: "Quantum Computing Consulting",
    description: "Expert guidance on quantum computing applications, algorithm development, and quantum-ready infrastructure. Prepare for the quantum future.",
    category: "Quantum Computing",
    price: 12000,
    currency: "$",
    tags: ["Quantum Computing", "Algorithm Development", "Future Tech"],
    author: {
      name: "ZionTech Group",
      id: "ziontech",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-08T15:45:00.000Z",
    aiScore: 98,
    rating: 4.9,
    reviewCount: 23,
  },
  {
    id: "service-14",
    title: "Multi-Cloud Cost Optimization",
    description: "Automated cost optimization across AWS, Azure, and Google Cloud with intelligent resource scaling and cost allocation.",
    category: "Management",
    price: 550,
    currency: "$",
    tags: ["Multi-Cloud", "Cost Optimization", "Resource Scaling", "Automation"],
    author: {
      name: "CloudCost Pro",
      id: "cloudcost-pro",
      avatarUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-09T15:45:00.000Z",
    aiScore: 88,
    rating: 4.5,
    reviewCount: 67,
  },
  {
    id: "service-15",
    title: "AI-Powered Video Analytics",
    description: "Computer vision platform for video surveillance, object detection, facial recognition, and behavioral analysis.",
    category: "AI Services",
    price: 1800,
    currency: "$",
    tags: ["Computer Vision", "Video Analytics", "Object Detection", "Facial Recognition"],
    author: {
      name: "VisionAI",
      id: "vision-ai",
      avatarUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-16T08:15:00.000Z",
    aiScore: 97,
    rating: 4.9,
    reviewCount: 189,
  },
  {
    id: "service-16",
    title: "Edge Computing Platform",
    description: "Distributed edge computing solution for real-time data processing, IoT applications, and low-latency services.",
    category: "Infrastructure",
    price: 2200,
    currency: "$",
    tags: ["Edge Computing", "Real-time Processing", "IoT", "Low Latency"],
=======
    id: "service-7",
    title: "AI-Powered Customer Support Automation",
    description: "Implement intelligent chatbots and automated customer service solutions that provide 24/7 support and improve customer satisfaction.",
    category: "AI Services",
    price: 2800,
    currency: "$",
    tags: ["Chatbots", "Customer Support", "Automation", "AI"],
    author: {
      name: "ZionTech Group",
      id: "ziontech-group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-15T09:00:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 156,
  },
  {
    id: "service-8",
    title: "Blockchain Development & Smart Contracts",
    description: "Custom blockchain solutions, smart contract development, and DeFi applications for modern businesses.",
    category: "Development",
    price: 6500,
    currency: "$",
    tags: ["Blockchain", "Smart Contracts", "DeFi", "Web3"],
    author: {
      name: "BlockChain Solutions",
      id: "blockchain-solutions",
      avatarUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-10T14:30:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 89,
  },
  {
    id: "service-9",
    title: "IoT Platform Development",
    description: "End-to-end IoT solutions including device management, data collection, and real-time analytics platforms.",
    category: "Development",
    price: 4200,
    currency: "$",
    tags: ["IoT", "Device Management", "Real-time Analytics", "Platform"],
    author: {
      name: "IoT Innovators",
      id: "iot-innovators",
      avatarUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-08T11:15:00.000Z",
    aiScore: 91,
    rating: 4.7,
    reviewCount: 67,
  },
  {
    id: "service-10",
    title: "AI-Powered Predictive Analytics",
    description: "Advanced predictive modeling and forecasting using machine learning to optimize business decisions and reduce risks.",
    category: "Analytics",
    price: 3800,
    currency: "$",
    tags: ["Predictive Analytics", "Machine Learning", "Forecasting", "Risk Management"],
    author: {
      name: "Predictive Insights Pro",
      id: "predictive-insights",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-12T16:45:00.000Z",
    aiScore: 94,
    rating: 4.9,
    reviewCount: 112,
  },
  {
    id: "service-11",
    title: "Zero-Trust Security Architecture",
    description: "Implement modern zero-trust security models with continuous verification and least-privilege access controls.",
    category: "Security",
    price: 7200,
    currency: "$",
    tags: ["Zero-Trust", "Security Architecture", "Access Control", "Compliance"],
    author: {
      name: "SecureArch Solutions",
      id: "securearch",
      avatarUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-05T13:20:00.000Z",
    aiScore: 95,
    rating: 4.9,
    reviewCount: 78,
  },
  {
    id: "service-12",
    title: "Multi-Cloud Strategy & Migration",
    description: "Design and implement multi-cloud architectures for optimal performance, cost efficiency, and disaster recovery.",
    category: "Management",
    price: 5500,
    currency: "$",
    tags: ["Multi-Cloud", "Migration", "Architecture", "Disaster Recovery"],
    author: {
      name: "CloudArchitects",
      id: "cloud-architects",
      avatarUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-01T10:00:00.000Z",
    aiScore: 89,
    rating: 4.7,
    reviewCount: 93,
  },
  {
    id: "service-13",
    title: "AI-Powered Content Generation",
    description: "Automated content creation tools for marketing, documentation, and creative writing using advanced language models.",
    category: "AI Services",
    price: 2200,
    currency: "$",
    tags: ["Content Generation", "AI Writing", "Marketing", "Automation"],
    author: {
      name: "ContentAI Studio",
      id: "contentai-studio",
      avatarUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-14T15:30:00.000Z",
    aiScore: 97,
    rating: 4.9,
    reviewCount: 134,
  },
  {
    id: "service-14",
    title: "DevOps Automation & CI/CD Pipeline",
    description: "Streamline software development with automated testing, deployment, and monitoring pipelines for faster delivery.",
    category: "Management",
    price: 3400,
    currency: "$",
    tags: ["DevOps", "CI/CD", "Automation", "Testing"],
    author: {
      name: "DevOps Masters",
      id: "devops-masters",
      avatarUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-07T12:15:00.000Z",
    aiScore: 92,
    rating: 4.8,
    reviewCount: 87,
  },
  {
    id: "service-15",
    title: "AI-Powered Business Process Automation",
    description: "Intelligent automation of repetitive business processes using RPA and AI to increase efficiency and reduce costs.",
    category: "AI Services",
    price: 4800,
    currency: "$",
    tags: ["Process Automation", "RPA", "AI", "Efficiency"],
    author: {
      name: "AutomatePro",
      id: "automate-pro",
      avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-09T09:45:00.000Z",
    aiScore: 93,
    rating: 4.8,
    reviewCount: 95,
  },
  {
    id: "service-16",
    title: "Quantum Computing Consulting",
    description: "Strategic guidance on quantum computing applications and preparation for the quantum future in your industry.",
    category: "Consulting",
    price: 12000,
    currency: "$",
    tags: ["Quantum Computing", "Future Tech", "Strategy", "Innovation"],
    author: {
      name: "Quantum Futures",
      id: "quantum-futures",
      avatarUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-11T14:00:00.000Z",
    aiScore: 98,
    rating: 5.0,
    reviewCount: 45,
  },
  {
    id: "service-17",
    title: "Edge Computing Solutions",
    description: "Deploy edge computing infrastructure for low-latency applications, IoT devices, and real-time data processing.",
    category: "Development",
    price: 4100,
    currency: "$",
    tags: ["Edge Computing", "IoT", "Low Latency", "Real-time"],
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
    id: "service-18",
    title: "AI Ethics & Governance Framework",
    description: "Develop comprehensive AI ethics policies, governance frameworks, and responsible AI implementation strategies.",
    category: "Strategy",
    price: 6800,
    currency: "$",
    tags: ["AI Ethics", "Governance", "Responsible AI", "Compliance"],
    author: {
      name: "Ethical AI Partners",
      id: "ethical-ai-partners",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    },
    images: ["https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-03-06T16:15:00.000Z",
    aiScore: 96,
    rating: 4.9,
    reviewCount: 73,
  }
];

// Service categories with icons and descriptions
const SERVICE_CATEGORIES = [
  {
    id: "ai-services",
    name: "AI & Machine Learning",
    icon: <Brain className="w-8 h-8" />,
    description: "Custom AI development, ML model training, and strategic consulting",
    count: 15,
    avgPrice: "$8,000 - $25,000",
    features: ["Custom AI Models", "ML Training", "Strategy Consulting", "Integration"]
  },
  {
    id: "cloud-services",
    name: "Cloud & Infrastructure",
    icon: <Cloud className="w-8 h-8" />,
    description: "Cloud migration, DevOps automation, and infrastructure management",
    count: 12,
    avgPrice: "$5,000 - $30,000",
    features: ["Cloud Migration", "DevOps", "Kubernetes", "Monitoring"]
  },
  {
    id: "security-services",
    name: "Cybersecurity",
    icon: <Shield className="w-8 h-8" />,
    description: "Security audits, compliance frameworks, and threat protection",
    count: 8,
    avgPrice: "$8,000 - $35,000",
    features: ["Security Audits", "Compliance", "Penetration Testing", "Incident Response"]
  },
  {
    id: "data-services",
    name: "Data & Analytics",
    icon: <Database className="w-8 h-8" />,
    description: "Big data engineering, BI dashboards, and data governance",
    count: 10,
    avgPrice: "$6,000 - $28,000",
    features: ["Big Data", "Business Intelligence", "Data Governance", "Analytics"]
  },
  {
    id: "development-services",
    name: "Development Services",
    icon: <Code className="w-8 h-8" />,
    description: "Web development, mobile apps, and API integration",
    count: 18,
    avgPrice: "$3,000 - $35,000",
    features: ["Web Development", "Mobile Apps", "APIs", "Integration"]
  },
  {
    id: "blockchain-services",
    name: "Blockchain & Web3",
    icon: <Link2 className="w-8 h-8" />,
    description: "Smart contracts, DeFi protocols, and NFT solutions",
    count: 6,
    avgPrice: "$15,000 - $50,000",
    features: ["Smart Contracts", "DeFi", "NFTs", "Blockchain"]
  }
];

// Filter options for services
const SERVICE_FILTERS = [
  { label: 'AI Services', value: 'ai-services' },
  { label: 'Blockchain', value: 'blockchain' },
  { label: 'IoT', value: 'iot' },
  { label: 'Infrastructure', value: 'infrastructure' },
  { label: 'Sustainability', value: 'sustainability' },
=======
  { label: 'AI Services', value: 'ai-services' },
  { label: 'Cloud Services', value: 'cloud-services' },
  { label: 'Security Services', value: 'security-services' },
  { label: 'Data Services', value: 'data-services' },
  { label: 'Development Services', value: 'development-services' },
  { label: 'Blockchain Services', value: 'blockchain-services' },
  { label: 'IT Services', value: 'it-services' },
  { label: 'IoT Services', value: 'iot-services' },
=======
  { label: 'AI Services', value: 'ai services' },
];
=======
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ServicesPage() {
  const [listings, setListings] = useState<ProductListing[]>(SERVICES);

  useEffect(() => {
    async function load() {
      const res = await apiClient.get<ProductListing[]>('/services');
      setListings(res.data);
    }
    load();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setListings(prev => [...prev, generateRandomService(prev.length + 1)]);
    }, 120000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Simulate dynamic service generation
    const interval = setInterval(() => {
      // This would typically fetch from an API
      console.log("Services updated");
    }, 300000); // 5 minutes

  const allServices = [
    // AI & Machine Learning
    {
      id: 'ai-autonomous-systems',
      name: 'AI Autonomous Systems',
      category: 'ai-ml',
      description: 'Advanced autonomous AI systems that operate independently and make intelligent decisions.',
      icon: Brain,
      features: ['Self-learning algorithms', 'Autonomous decision making', 'Continuous optimization', 'Scalable architecture'],
      path: '/services/ai-autonomous-systems',
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      category: 'ai-ml',
      description: 'Transform your data into actionable insights with AI-powered analytics.',
      icon: BarChart3,
      features: ['Predictive analytics', 'Real-time dashboards', 'Data visualization', 'Business insights'],
      path: '/services/ai-business-intelligence',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      category: 'ai-ml',
      description: 'Automate complex business processes with intelligent workflow systems.',
      icon: Zap,
      features: ['Process automation', 'Intelligent routing', 'Performance monitoring', 'Error handling'],
      path: '/services/ai-workflow-automation',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ai-customer-intelligence',
      name: 'AI Customer Intelligence',
      category: 'ai-ml',
      description: 'Understand your customers better with AI-powered insights and analytics.',
      icon: Users,
      features: ['Customer segmentation', 'Behavior analysis', 'Predictive modeling', 'Personalization'],
      path: '/services/ai-customer-intelligence',
      color: 'from-purple-500 to-pink-500'
    },

    // Cybersecurity
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Services',
      category: 'cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
      icon: Shield,
      features: ['Threat detection', 'Vulnerability assessment', 'Incident response', 'Security training'],
      path: '/services/cybersecurity',
      color: 'from-red-500 to-pink-500',
      popular: true
    },
    {
      id: 'soc2-compliance',
      name: 'SOC2 Compliance Automation',
      category: 'cybersecurity',
      description: 'Automate your SOC2 compliance process and maintain security standards.',
      icon: Lock,
      features: ['Automated audits', 'Compliance monitoring', 'Risk assessment', 'Documentation'],
      path: '/soc2-compliance-automation',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      id: 'security-assessment',
      name: 'Security Assessment',
      category: 'cybersecurity',
      description: 'Comprehensive security audits and penetration testing services.',
      icon: Shield,
      features: ['Penetration testing', 'Vulnerability scanning', 'Security audits', 'Risk analysis'],
      path: '/services/security-assessment',
      color: 'from-red-500 to-pink-500'
    },

    // Quantum Technology
    {
      id: 'quantum-technology',
      name: 'Quantum Technology',
      category: 'quantum',
      description: 'Next-generation quantum computing solutions for complex problem solving.',
      icon: Cpu,
      features: ['Quantum algorithms', 'Quantum-safe security', 'Quantum simulation', 'Research support'],
      path: '/services/quantum-technology',
      color: 'from-blue-500 to-cyan-500',
      popular: true
    },
    {
      id: 'quantum-neural-networks',
      name: 'Quantum Neural Networks',
      category: 'quantum',
      description: 'Revolutionary quantum-powered neural network platforms.',
      icon: Brain,
      features: ['Quantum processing', 'Neural optimization', 'Advanced algorithms', 'Scalable architecture'],
      path: '/quantum-neural-network-platform',
      color: 'from-purple-500 to-pink-500'
    },

    // Cloud & Infrastructure
    {
      id: 'cloud-devops',
      name: 'Cloud DevOps',
      category: 'cloud',
      description: 'Streamlined cloud development and operations for modern applications.',
      icon: Cloud,
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring & logging', 'Auto-scaling'],
      path: '/cloud-devops',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure',
      category: 'cloud',
      description: 'Complete IT infrastructure solutions for enterprise environments.',
      icon: Network,
      features: ['Network design', 'Server management', 'Storage solutions', 'Backup & recovery'],
      path: '/services/it-infrastructure',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: '5g-enterprise',
      name: '5G Enterprise Solutions',
      category: 'cloud',
      description: 'High-speed 5G connectivity solutions for enterprise applications.',
      icon: Network,
      features: ['5G network design', 'Enterprise integration', 'Performance optimization', 'Security'],
      path: '/5g-enterprise-solutions',
      color: 'from-blue-500 to-cyan-500'
    },

    // Emerging Technologies
    {
      id: 'blockchain',
      name: 'Blockchain Solutions',
      category: 'emerging',
      description: 'Decentralized applications and blockchain infrastructure development.',
      icon: Code,
      features: ['Smart contracts', 'DApp development', 'Blockchain consulting', 'Integration services'],
      path: '/services/blockchain-solutions',
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 'iot-platforms',
      name: 'IoT Platforms',
      category: 'emerging',
      description: 'Connected device management and IoT platform development.',
      icon: Network,
      features: ['Device management', 'Data collection', 'Analytics dashboard', 'Security protocols'],
      path: '/services/iot-platforms',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ar-vr',
      name: 'AR/VR Solutions',
      category: 'emerging',
      description: 'Immersive experiences and augmented reality applications.',
      icon: Globe,
      features: ['3D modeling', 'Interactive experiences', 'Platform development', 'Content creation'],
      path: '/services/ar-vr-solutions',
      color: 'from-purple-500 to-pink-500'
    },

    // Industry Solutions
    {
      id: 'healthcare',
      name: 'Healthcare Technology',
      category: 'industry',
      description: 'AI-powered healthcare solutions for patient care optimization.',
      icon: Heart,
      features: ['Patient management', 'Medical analytics', 'AI diagnostics', 'Compliance'],
      path: '/solutions/healthcare',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'financial',
      name: 'Financial Services',
      category: 'industry',
      description: 'Fintech solutions for modern financial institutions.',
      icon: DollarSign,
      features: ['Risk management', 'Fraud detection', 'Compliance automation', 'Analytics'],
      path: '/services/financial-services',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing Intelligence',
      category: 'industry',
      description: 'Smart manufacturing solutions with AI and IoT integration.',
      icon: Factory,
      features: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Automation'],
      path: '/services/manufacturing-intelligence',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      id: 'retail',
      name: 'Retail Technology',
      category: 'industry',
      description: 'Digital retail transformation and customer experience solutions.',
      icon: ShoppingCart,
      features: ['E-commerce platforms', 'Customer analytics', 'Inventory management', 'Personalization'],
      path: '/services/retail-technology',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);
=======
// Use comprehensive services instead of sample listings
const SERVICE_LISTINGS: ProductListing[] = COMPREHENSIVE_SERVICES;

// Use comprehensive service categories for filtering
const SERVICE_FILTERS = SERVICE_CATEGORIES;

export default function ServicesPage() {
  const [listings] = useState<ProductListing[]>(SERVICE_LISTINGS);

  return (
            <Link to="/micro-saas-services">
=======
            <Link to="/comprehensive-services">
=======
            <Link to="/enhanced-services">
=======
            <Link to="/enhanced-services">
=======
    
      <div className="bg-zion-blue-dark py-4 px-4 md:px-8 mb-6 border-b border-zion-blue-light">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-white text-lg font-medium">Featured Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link to="/it-onsite-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                Enhanced Services Showcase
              </Button>
            </Link>
            <Link to="/ai-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Brain className="h-4 w-4 mr-2" />
                AI Services
              </Button>
            </Link>
            <Link to="/cybersecurity-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Shield className="h-4 w-4 mr-2" />
                Cybersecurity
              </Button>
            </Link>
            <Link to="/it-onsite-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Zap className="h-4 w-4 mr-2" />
                Premium Services
              </Button>
            </Link>
            <Link to="/it-onsite-services">
              <Button variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
=======
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue py-16 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional Tech Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive ecosystem of cutting-edge technology services, 
            from AI development to cybersecurity, designed to transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/it-onsite-services">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg">
                <Globe className="h-5 w-5 mr-2" />
                Global IT Onsite Services
              </Button>
            </Link>

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  Shield,
  Cloud,
  Building,
  ArrowRight,
  Star,
  Users,
  Server,
  BarChart3,
  Star as StarIcon
} from 'lucide-react';

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: "AI & Autonomous Systems",
      description: "Revolutionary AI systems that operate independently",
      icon: Brain,
      color: "from-violet-500 to-purple-600",
      services: [
        { name: "AI Legal Research Assistant", href: "/ai-autonomous-legal-research-assistant" },
        { name: "AI Financial Risk Manager", href: "/ai-autonomous-financial-risk-manager" },
        { name: "AI Healthcare Diagnostics Pro", href: "/ai-autonomous-healthcare-diagnostics-pro" },
        { name: "AI Supply Chain Optimizer", href: "/ai-autonomous-supply-chain-optimizer" },
        { name: "AI Cybersecurity Sentinel", href: "/ai-autonomous-cybersecurity-sentinel" }
      ]
    },
    {
      title: "Quantum Technology",
      description: "Next-generation quantum computing solutions",
      icon: Brain,
      color: "from-blue-500 to-indigo-600",
      services: [
        { name: "Quantum Edge Computing Platform", href: "/quantum-edge-computing-platform" },
        { name: "Neuromorphic Computing Infrastructure", href: "/neuromorphic-computing-infrastructure" },
        { name: "Holographic Data Center Platform", href: "/holographic-data-center-platform" },
        { name: "Bio-Computing Infrastructure", href: "/bio-computing-infrastructure" },
        { name: "Quantum Internet Backbone", href: "/quantum-internet-backbone" }
      ]
    },
    {
      title: "IT Infrastructure",
      description: "Cutting-edge infrastructure solutions",
      icon: Server,
      color: "from-green-500 to-teal-600",
      services: [
        { name: "Cloud Migration Services", href: "/cloud-migration" },
        { name: "DevOps Automation", href: "/devops-automation" },
        { name: "Edge Computing Solutions", href: "/edge-computing" },
        { name: "Data Center Optimization", href: "/data-center-optimization" },
        { name: "5G Private Network Solutions", href: "/5g-private-network-solutions" }
      ]
    },
    {
      title: "Micro SAAS Solutions",
      description: "Innovative software-as-a-service solutions",
      icon: Building,
      color: "from-orange-500 to-red-600",
      services: [
        { name: "AI Content Factory Pro", href: "/ai-autonomous-content-factory-pro" },
        { name: "Quantum CRM Intelligence Suite", href: "/quantum-crm-intelligence-suite" },
        { name: "AI HR Platform", href: "/ai-autonomous-hr-platform" },
        { name: "Quantum Financial Intelligence Platform", href: "/quantum-financial-intelligence-platform" },
        { name: "AI Education Platform", href: "/ai-autonomous-education-platform" }
      ]
    },
    {
      title: "Cybersecurity",
      description: "Advanced security and protection solutions",
      icon: Shield,
      color: "from-red-500 to-pink-600",
      services: [
        { name: "Zero Trust Network Architecture", href: "/zero-trust-network-architecture" },
        { name: "Threat Intelligence Platform", href: "/threat-intelligence-platform" },
        { name: "Compliance Automation", href: "/compliance-automation" },
        { name: "SOC2 Compliance Automation", href: "/soc2-compliance-automation" },
        { name: "Vulnerability Assessment & Penetration Testing", href: "/vulnerability-assessment-penetration-testing" }
      ]
    },
    {
      title: "Industry Solutions",
      description: "Industry-specific technology solutions",
      icon: BarChart3,
      color: "from-yellow-500 to-orange-600",
      services: [
        { name: "Healthcare AI Solutions", href: "/healthcare-ai-solutions" },
        { name: "Financial Technology Solutions", href: "/financial-solutions" },
        { name: "Manufacturing AI Solutions", href: "/manufacturing-ai-solutions" },
        { name: "Retail Technology Solutions", href: "/retail-technology-solutions" },
        { name: "Energy & Utilities Solutions", href: "/energy-utilities-solutions" }
      ]
    }
  ];

  const featuredServices = [
    {
      title: "Quantum Edge Computing Platform",
      description: "Revolutionary edge computing platform that leverages quantum computing principles to deliver unprecedented performance and efficiency for distributed applications.",
      price: "$1,299/month",
      href: "/quantum-edge-computing-platform",
      icon: Brain,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "AI Autonomous Legal Research Assistant",
      description: "Advanced AI-powered legal research tool that autonomously analyzes case law, statutes, and legal precedents to provide comprehensive legal insights.",
      price: "$899/month",
      href: "/ai-autonomous-legal-research-assistant",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Zero Trust Network Architecture",
      description: "Comprehensive cybersecurity solution implementing zero-trust principles across your entire network infrastructure for maximum security.",
      price: "$2,199/month",
      href: "/zero-trust-network-architecture",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Pioneering the future of technology with revolutionary AI autonomous systems, 
            quantum computing, and autonomous solutions that transform businesses worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      {/* Featured Services */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most innovative and transformative solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold">{service.price}</span>
                  <Link 
                    to={service.href} 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-400">{category.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <Link 
                      key={serviceIndex}
                      to={service.href} 
                      className="flex items-center space-x-2 text-sm text-gray-300 hover:text-purple-400 transition-colors duration-300 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <Link 
                    to={`/services/${category.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '-')}`}
                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium"
                  >
                    <span>View All {category.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Let's discuss how our innovative solutions can drive your success and position you at the forefront of technological advancement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="btn-primary text-lg px-8 py-4"
            >
              Get in Touch
            </Link>
            <Link 
              to="/get-started" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Tech Services - Zion Tech Group"
        description="Browse our comprehensive range of technology services and solutions."
        canonical="https://ziontechgroup.com/services"
=======
      </div>

      {/* New Comprehensive Services Showcase */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-zion-blue-dark mb-4">
            ZionTech Group Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT, AI, and Digital Transformation Solutions for Modern Businesses
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI & Machine Learning */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zion-blue-dark mb-2">AI & Machine Learning</h3>
              <p className="text-gray-600 mb-4">Cutting-edge AI solutions to transform your business</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Custom AI Development</span>
                <span className="text-sm font-semibold text-zion-purple">$5,000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">AI Strategy Consulting</span>
                <span className="text-sm font-semibold text-zion-purple">$7,500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Machine Learning Models</span>
                <span className="text-sm font-semibold text-zion-purple">$6,000+</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan text-white hover:from-zion-purple-dark hover:to-zion-cyan-dark">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* Business Automation */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zion-blue-dark mb-2">Business Automation</h3>
              <p className="text-gray-600 mb-4">Streamline operations with intelligent automation</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Workflow Automation</span>
                <span className="text-sm font-semibold text-zion-purple">$299/month</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Process Optimization</span>
                <span className="text-sm font-semibold text-zion-purple">$6,500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">RPA Implementation</span>
                <span className="text-sm font-semibold text-zion-purple">$8,000+</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Cybersecurity */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zion-blue-dark mb-2">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">Protect your business with advanced security</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Security Assessment</span>
                <span className="text-sm font-semibold text-zion-purple">$6,000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">24/7 Monitoring</span>
                <span className="text-sm font-semibold text-zion-purple">$399/month</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Incident Response</span>
                <span className="text-sm font-semibold text-zion-purple">$7,200+</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600">
                  Secure Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Cloud & Infrastructure */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zion-blue-dark mb-2">Cloud & Infrastructure</h3>
              <p className="text-gray-600 mb-4">Scalable cloud solutions for growth</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Cloud Migration</span>
                <span className="text-sm font-semibold text-zion-purple">$3,000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Infrastructure Setup</span>
                <span className="text-sm font-semibold text-zion-purple">$8,500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">24/7 Management</span>
                <span className="text-sm font-semibold text-zion-purple">$3,000/month</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600">
                  Scale Up
                </Button>
              </Link>
            </div>
          </div>

          {/* Data Analytics */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zion-blue-dark mb-2">Data Analytics</h3>
              <p className="text-gray-600 mb-4">Transform data into actionable insights</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">BI Dashboard</span>
                <span className="text-sm font-semibold text-zion-purple">$199/month</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Predictive Analytics</span>
                <span className="text-sm font-semibold text-zion-purple">$5,200+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Big Data Processing</span>
                <span className="text-sm font-semibold text-zion-purple">$4,500+</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
                  Analyze Data
                </Button>
              </Link>
            </div>
          </div>

          {/* Digital Transformation */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zion-blue-dark mb-2">Digital Transformation</h3>
              <p className="text-gray-600 mb-4">Modernize your business for the future</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Strategy Development</span>
                <span className="text-sm font-semibold text-zion-purple">$7,500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Legacy Modernization</span>
                <span className="text-sm font-semibold text-zion-purple">$8,500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Change Management</span>
                <span className="text-sm font-semibold text-zion-purple">$6,000+</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600">
                  Transform Now
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Micro SAAS Services Showcase */}
        <div className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue-dark mb-4">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Affordable, scalable software solutions designed for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Workflow Automation */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">Workflow Automation</h3>
                <p className="text-gray-600 mb-4">Connect 500+ apps and automate business processes</p>
                <div className="text-3xl font-bold text-zion-purple mb-2">$299<span className="text-lg text-gray-500">/month</span></div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">No-code drag & drop interface</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">500+ app integrations</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Real-time monitoring</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Advanced analytics</span>
                </div>
              </div>
              <div className="text-center">
                <Link to="/request-quote">
                  <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 py-3">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </div>

            {/* Business Intelligence */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">Business Intelligence</h3>
                <p className="text-gray-600 mb-4">Real-time analytics and predictive insights</p>
                <div className="text-3xl font-bold text-zion-purple mb-2">$199<span className="text-lg text-gray-500">/month</span></div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Real-time data visualization</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Predictive analytics</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Custom dashboards</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Automated reporting</span>
                </div>
              </div>
              <div className="text-center">
                <Link to="/request-quote">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 py-3">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* AI-Powered CRM */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">AI-Powered CRM</h3>
                <p className="text-gray-600 mb-4">Intelligent customer relationship management</p>
                <div className="text-3xl font-bold text-zion-purple mb-2">$149<span className="text-lg text-gray-500">/month</span></div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">AI-driven lead scoring</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Automated follow-ups</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Predictive analytics</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Sales automation</span>
                </div>
              </div>
              <div className="text-center">
                <Link to="/request-quote">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 py-3">
                    Boost Sales
                  </Button>
                </Link>
              </div>
            </div>

            {/* Project Management */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">Project Management</h3>
                <p className="text-gray-600 mb-4">Complete project management suite</p>
                <div className="text-3xl font-bold text-zion-purple mb-2">$99<span className="text-lg text-gray-500">/month</span></div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Task tracking & management</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Team collaboration tools</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Resource allocation</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Progress monitoring</span>
                </div>
              </div>
              <div className="text-center">
                <Link to="/request-quote">
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600 py-3">
                    Manage Projects
                  </Button>
                </Link>
              </div>
            </div>

            {/* Marketing Automation */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">Marketing Automation</h3>
                <p className="text-gray-600 mb-4">All-in-one marketing automation platform</p>
                <div className="text-3xl font-bold text-zion-purple mb-2">$179<span className="text-lg text-gray-500">/month</span></div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Email campaign management</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Social media automation</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Lead nurturing</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">ROI tracking</span>
                </div>
              </div>
              <div className="text-center">
                <Link to="/request-quote">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 py-3">
                    Automate Marketing
                  </Button>
                </Link>
              </div>
            </div>

            {/* Cybersecurity Monitoring */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">Cybersecurity Monitoring</h3>
                <p className="text-gray-600 mb-4">24/7 threat detection and response</p>
                <div className="text-3xl font-bold text-zion-purple mb-2">$399<span className="text-lg text-gray-500">/month</span></div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">24/7 threat monitoring</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Automated incident response</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Vulnerability assessment</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Compliance reporting</span>
                </div>
              </div>
              <div className="text-center">
                <Link to="/request-quote">
                  <Button className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 py-3">
                    Secure Business
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Pricing Comparison */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-zion-blue-dark mb-8">Pricing Comparison</h3>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-2">Starter</h4>
                  <div className="text-2xl font-bold text-zion-purple">$99</div>
                  <div className="text-sm text-gray-500">per month</div>
                  <p className="text-sm text-gray-600 mt-2">Perfect for small businesses</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-2">Professional</h4>
                  <div className="text-2xl font-bold text-zion-purple">$299</div>
                  <div className="text-sm text-gray-500">per month</div>
                  <p className="text-sm text-gray-600 mt-2">Ideal for growing companies</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-2">Enterprise</h4>
                  <div className="text-2xl font-bold text-zion-purple">$599</div>
                  <div className="text-sm text-gray-500">per month</div>
                  <p className="text-sm text-gray-600 mt-2">For large organizations</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-700 mb-2">Custom</h4>
                  <div className="text-2xl font-bold text-zion-purple">Contact</div>
                  <div className="text-sm text-gray-500">us</div>
                  <p className="text-sm text-gray-600 mt-2">Tailored solutions</p>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/request-quote">
                  <Button className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white hover:from-zion-purple-dark hover:to-zion-cyan-dark px-8 py-3">
                    Get Custom Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6">Contact our experts to discuss your project requirements</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-zion-cyan">+1 302 464 0950</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-zion-cyan">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-zion-cyan">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
=======
            <Link to="/expanded-services">
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <TrendingUp className="h-4 w-4 mr-2" />
                Enterprise Solutions
              </Button>
            </Link>
=======
            <Link to="/ai-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                AI Services
              </Button>
            </Link>
            <Link to="/cybersecurity-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                Cybersecurity
              </Button>
            </Link>
            <Link to="/cloud-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                Cloud Services
              </Button>
            </Link>
            <Link to="/data-analytics-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2" />
                Data Analytics
              </Button>
            </Link>
=======
            <Link to="/micro-saas-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Brain className="h-4 w-4 mr-2" />
                Micro SAAS Solutions
              </Button>
            </Link>
=======
            <Link to="/comprehensive-services">
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                View All Services
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 text-lg">
                <DollarSign className="h-5 w-5 mr-2" />
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Service Categories Grid */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Our Service Categories
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Choose from our comprehensive range of technology services, each designed to address specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_CATEGORIES.map((category) => (
              <Link 
                key={category.id} 
                to={`/category/${category.id}`}
                className="group block"
              >
                <div className="bg-zion-blue-dark/80 border border-zion-blue-light/30 rounded-xl p-8 h-full transition-all duration-300 hover:border-zion-purple/60 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20">
                  <div className="text-zion-cyan mb-6 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3">{category.name}</h3>
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-zion-cyan text-sm font-medium">
                      {category.count} services
                    </span>
                    <span className="text-zion-slate-light text-sm">
                      {category.avgPrice}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-zion-purple/20 text-zion-cyan text-xs rounded-full border border-zion-purple/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-zion-cyan group-hover:text-white transition-colors">
                    <span className="text-sm font-medium">Explore Services</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Hand-picked services from our top providers, featuring the latest in AI, cloud, and cybersecurity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.slice(0, 6).map((service) => (
              <div key={service.id} className="bg-zion-blue-dark/80 border border-zion-blue-light/30 rounded-xl overflow-hidden hover:border-zion-purple/60 transition-all duration-300 hover:shadow-xl hover:shadow-zion-purple/20">
                <div className="relative">
                  <img 
                    src={service.images[0]} 
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-zion-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">{service.rating}</span>
                    </div>
                    <span className="text-zion-slate-light text-sm">({service.reviewCount} reviews)</span>
                    <div className="ml-auto flex items-center gap-1 bg-zion-purple/20 px-2 py-1 rounded-full">
                      <Sparkles className="h-3 w-3 text-zion-purple" />
                      <span className="text-zion-purple text-xs font-medium">AI Score: {service.aiScore}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-white text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-blue-light/30"
                      >
=======
      {/* IT Services Showcase */}
      <div className="bg-zion-blue-dark py-16 mb-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional IT Services</h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Expert IT consulting, development, and infrastructure services to help your business thrive in the digital age
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {IT_SERVICES.map((service) => (
              <div key={service.id} className="bg-zion-blue-light/20 backdrop-blur-md rounded-xl p-6 border border-zion-purple/30 hover:border-zion-purple/60 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-zion-purple to-zion-cyan">
                    {service.category === 'Development' && <Code className="w-5 h-5 text-white" />}
                    {service.category === 'Infrastructure' && <Network className="w-5 h-5 text-white" />}
                    {service.category === 'Security' && <Shield className="w-5 h-5 text-white" />}
                    {service.category === 'Analytics' && <BarChart3 className="w-5 h-5 text-white" />}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light text-sm">{service.subcategory}</p>
                  </div>
                </div>
                
                <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">Starting at</span>
                    <span className="text-zion-cyan font-bold">
                      {service.pricing.currency}{service.pricing.hourly}/hr
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                    <span>⭐ {service.rating}</span>
                    <span>•</span>
                    <span>{service.reviewCount} reviews</span>
                    <span>•</span>
                    <span>{service.experience}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-zion-purple/20 text-zion-purple-light text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-zion-purple/20">
                  <div className="flex items-center justify-between text-sm text-zion-slate-light">
                    <span>📧 {service.contactEmail}</span>
                    <span>📞 {service.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/marketplace">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

        </div>
      </div>

      <DynamicListingPage 
=======
      <DynamicListingPage
        title="IT & AI Services"
        description="Find expert technology service providers for your business needs, from AI development to infrastructure management."
        categorySlug="services"
        listings={listings}
        categoryFilters={SERVICE_FILTERS}
        initialPrice={{ min: 3000, max: 10000 }}
        initialPrice={{ min: 1000, max: 10000 }}
=======
        itemsPerPage={10}
      />
      <ServicesOverview />
=======
      {/* Why Choose Us */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-zion-cyan" />
              <h2 className="text-3xl font-bold text-white">Enhanced Micro SAAS Services</h2>
              <Sparkles className="w-8 h-8 text-zion-cyan" />
            </div>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Discover our comprehensive suite of innovative micro SAAS solutions designed to transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {ENHANCED_SERVICES.slice(0, 6).map((service) => (
              <div key={service.id} className="bg-zion-blue border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  {service.featured && (
                    <span className="px-2 py-1 bg-zion-purple text-white text-xs rounded-full">Featured</span>
                  )}
                </div>
                <p className="text-zion-slate-light mb-4 line-clamp-3">{service.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-zion-cyan">${service.price?.toLocaleString()}/month</div>
                  <div className="flex items-center space-x-1 text-sm text-zion-slate-light">
                    <span className="w-2 h-2 bg-zion-cyan rounded-full"></span>
                    <span>AI Score: {service.aiScore}%</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-zion-blue-light text-zion-slate-light text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  to="/enhanced-services"
                  className="inline-flex items-center space-x-2 text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/enhanced-services">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                View All Enhanced Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TrustedBySection />
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
        <p className="text-gray-600">Taking you to our comprehensive services page.</p>
      </div>
    </div>
=======
    
  );
}

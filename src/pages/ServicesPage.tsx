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
  { label: 'AI Services', value: 'ai services' },
];

// Use comprehensive services instead of sample listings
const SERVICE_LISTINGS: ProductListing[] = COMPREHENSIVE_SERVICES;

// Use comprehensive service categories for filtering
const SERVICE_FILTERS = SERVICE_CATEGORIES;

export default function ServicesPage() {
  const [listings] = useState<ProductListing[]>(SERVICE_LISTINGS);

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

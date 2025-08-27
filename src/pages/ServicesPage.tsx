import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Globe,
  Shield,
  Brain,
  Cloud,
  Lock,
  Zap,
  Rocket,
  Lightbulb,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  Heart,
  Home,
  Truck,
  Target,
  Calendar,
  Settings,
  Bot
} from 'lucide-react';

<<<<<<< HEAD
        {/* Navigation to Specialized Service Pages */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link to="/enhanced-services">
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
              <Globe className="h-4 w-4 mr-2" />
              Global IT Onsite Services
            </Button>
          </Link>
          <Link to="/request-quote">
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
              Request a Quote
            </Button>
          </Link>
        </div>
=======
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { TrustedBySection } from "@/components/TrustedBySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
<<<<<<<< HEAD:src/pages/ServicesPage.tsx
import { Globe, Shield, Brain, Cloud, Lock, Zap, Users, BarChart3, FileImage, Code, Shield as ShieldIcon, Server, TrendingUp, MessageCircle, Video, FileText, Heart } from "lucide-react";
import { Globe, Shield, Brain, Cloud, Lock, Zap, Users, BarChart3, FileImage, Code, Shield as ShieldIcon, Server, TrendingUp, MessageCircle, Video, FileText, Heart } from "lucide-react";
>>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f:src/pages/ServicesPage.tsx.backup.1756208062
import { useEffect, useState } from "react";
import { EXPANDED_SERVICES } from "@/data/expandedServices";

import { ProductListing } from "@/types/listings";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Shield, Brain, Cloud, Lock, Zap, Users, BarChart3, FileImage, Code, Shield as ShieldIcon, Server, TrendingUp, MessageCircle, Video, FileText, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { SEO } from "@/components/SEO";

// Enhanced service listings with new micro SAAS services
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
      name: "Zion DevOps",
      id: "zion-devops",
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
    tags: ["Process Automation", "Workflow Automation", "Business Integration", "Efficiency"],
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

function generateRandomService(idNum: number): ProductListing {
  const templates = [
    {
      title: "AI Automation Consulting",
      category: "Consulting",
      min: 4000,
      max: 12000,
      tags: ["Automation", "AI Strategy", "Optimization"],
    },
    {
      title: "Cloud Migration & Support",
      category: "Management",
      min: 3000,
      max: 9000,
      tags: ["Cloud", "Migration", "DevOps"],
    },
    {
      title: "Advanced Cybersecurity Suite",
      category: "Security",
      min: 5000,
      max: 15000,
      tags: ["Cybersecurity", "PenTesting", "Compliance"],
    },
    {
      title: "Big Data Engineering",
      category: "Analytics",
      min: 3500,
      max: 11000,
      tags: ["Data Engineering", "Analytics", "ETL"],
    },
    {
      title: "AI Model Training Service",
      category: "Development",
      min: 4500,
      max: 13000,
      tags: ["Machine Learning", "Model Training", "AI"],
    },
    {
      title: "Digital Transformation Strategy",
      category: "Strategy",
      min: 6000,
      max: 14000,
      tags: ["Transformation", "Strategy", "Business"],
    },
  ];

  const authors = [
    "Global AI Experts",
    "InnovateTech",
    "SecureFuture",
    "CloudOps Partners",
    "DataVisor",
    "NexGen Solutions",
  ];

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
  { label: 'Development', value: 'development' },
  { label: 'Management', value: 'management' },
  { label: 'Security', value: 'security' },
  { label: 'Analytics', value: 'analytics' },
  { label: 'Consulting', value: 'consulting' },
  { label: 'Strategy', value: 'strategy' },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Comprehensive
            <span className="text-zion-cyan"> Services</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover our cutting-edge technology solutions designed to transform your business 
            and drive innovation across all industries.
          </p>
        </div>

        {/* Navigation to Specialized Service Pages */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <Link to="/enhanced-services">
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
          <Link to="/request-quote">
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
              Request a Quote
            </Button>
          </Link>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI & Machine Learning */}
          <div className="bg-zion-slate/50 backdrop-blur-sm rounded-xl p-6 border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-zion-cyan mr-3" />
              <h3 className="text-xl font-semibold text-white">AI & Machine Learning</h3>
            </div>
            <p className="text-zion-slate-light mb-4">
              Advanced artificial intelligence solutions for automation, data analysis, and intelligent decision-making.
            </p>
            <Link to="/ai-services" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
              Learn More →
            </Link>
          </div>

          {/* Cybersecurity */}
          <div className="bg-zion-slate/50 backdrop-blur-sm rounded-xl p-6 border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-zion-cyan mr-3" />
              <h3 className="text-xl font-semibold text-white">Cybersecurity</h3>
            </div>
            <p className="text-zion-slate-light mb-4">
              Comprehensive security solutions to protect your digital assets and ensure compliance.
            </p>
            <Link to="/cybersecurity-services" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
              Learn More →
            </Link>
          </div>

          {/* Cloud Infrastructure */}
          <div className="bg-zion-slate/50 backdrop-blur-sm rounded-xl p-6 border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Cloud className="h-8 w-8 text-zion-cyan mr-3" />
              <h3 className="text-xl font-semibold text-white">Cloud Infrastructure</h3>
            </div>
            <p className="text-zion-slate-light mb-4">
              Scalable cloud solutions for modern applications and enterprise infrastructure needs.
            </p>
            <Link to="/cloud-services" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
              Learn More →
            </Link>
          </div>

          {/* Digital Transformation */}
          <div className="bg-zion-slate/50 backdrop-blur-sm rounded-xl p-6 border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Rocket className="h-8 w-8 text-zion-cyan mr-3" />
              <h3 className="text-xl font-semibold text-white">Digital Transformation</h3>
            </div>
            <p className="text-zion-slate-light mb-4">
              Strategic guidance and implementation for modernizing your business processes and technology stack.
            </p>
            <Link to="/digital-transformation" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
              Learn More →
            </Link>
          </div>

          {/* IT Consulting */}
          <div className="bg-zion-slate/50 backdrop-blur-sm rounded-xl p-6 border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-zion-cyan mr-3" />
              <h3 className="text-xl font-semibold text-white">IT Consulting</h3>
            </div>
            <p className="text-zion-slate-light mb-4">
              Expert technology consulting to optimize your IT strategy and maximize ROI.
            </p>
            <Link to="/it-consulting" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
              Learn More →
            </Link>
          </div>

          {/* Custom Solutions */}
          <div className="bg-zion-slate/50 backdrop-blur-sm rounded-xl p-6 border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-zion-cyan mr-3" />
              <h3 className="text-xl font-semibold text-white">Custom Solutions</h3>
            </div>
            <p className="text-zion-slate-light mb-4">
              Tailored technology solutions designed specifically for your unique business requirements.
            </p>
            <Link to="/custom-solutions" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
              Learn More →
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-zion-slate/30 backdrop-blur-sm rounded-xl p-8 border border-zion-slate-light/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Let our experts help you navigate the digital landscape and implement solutions that drive real results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/request-quote">
              <Button size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white">
                Get Started Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Filters and Categories */}
      <section className="py-12 bg-zion-slate-dark/50">
        <div className="container-responsive">
          {/* Category Pills */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-responsive font-bold mb-4">
              <span className="text-gradient neon-text-purple">Market Trends & Innovation</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Stay ahead of the curve with insights into the latest technology trends and market opportunities
            </p>
          </motion.div>

          {/* Advanced Filters */}
          <motion.div 
            className="flex flex-col md:flex-row gap-4 items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-wrap gap-4">
              {/* Price Range Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-zion-cyan" />
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  <div className="flex items-center gap-2">
                    <category.icon className="w-5 h-5" />
                    {category.name}
                  </div>
                </button>
              ))}
            </div>

            <div className="text-zion-slate-light">
              Showing {sortedServices.length} of {COMPREHENSIVE_SERVICES_CATALOG_2025.length} services
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-zion-slate-dark/80 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/25 group"
                >
                  {/* Service Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Service Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-zion-slate-light/80 text-sm">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-zion-cyan">
                      ${service.price.toLocaleString()}
                    </div>
                    <button className="px-6 py-2 bg-zion-cyan hover:bg-zion-cyan-light text-white rounded-lg font-medium transition-colors flex items-center gap-2 group-hover:gap-3">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-zion-slate-light/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-zion-slate-light" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-zion-slate-light mb-6">
                  Try adjusting your search criteria or browse all categories.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-zion-cyan hover:bg-zion-cyan-light text-white rounded-lg font-medium transition-colors"
                >
                  View All Services
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Let's discuss your project requirements and find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-zion-cyan hover:bg-zion-cyan-light text-white rounded-xl font-semibold text-lg transition-colors"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="px-8 py-4 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white rounded-xl font-semibold text-lg transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-4e39

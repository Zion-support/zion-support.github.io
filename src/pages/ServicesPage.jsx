import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
// Enhanced service listings with new micro SAAS services
const SERVICE_LISTINGS = [
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
    // NEW INNOVATIVE SERVICES - AI & ML
    {
        id: "ai-voice-cloning",
        title: "AI Voice Cloning Studio",
        description: "Professional voice cloning and synthesis technology for content creators, podcasters, and businesses. Clone voices with 99.9% accuracy.",
        category: "AI & ML",
        price: 79,
        currency: "$",
        tags: ["Voice Cloning", "Audio Synthesis", "Content Creation", "Podcasting"],
        author: {
            name: "Zion Voice Tech",
            id: "zion-voice-tech",
            avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-05T08:00:00.000Z",
        aiScore: 97,
        rating: 4.9,
        reviewCount: 89,
    },
    {
        id: "ai-emotion-analysis",
        title: "AI Emotion Intelligence Platform",
        description: "Real-time emotion detection and sentiment analysis for customer service, marketing, and user experience optimization.",
        category: "AI & ML",
        price: 149,
        currency: "$",
        tags: ["Emotion Detection", "Sentiment Analysis", "Customer Experience", "Real-time Analytics"],
        author: {
            name: "Zion Emotion AI",
            id: "zion-emotion-ai",
            avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-06T11:30:00.000Z",
        aiScore: 96,
        rating: 4.8,
        reviewCount: 134,
    },
    {
        id: "ai-predictive-maintenance",
        title: "AI Predictive Maintenance",
        description: "IoT-powered predictive maintenance for industrial equipment, reducing downtime by up to 50% and saving millions in operational costs.",
        category: "AI & ML",
        price: 299,
        currency: "$",
        tags: ["IoT", "Predictive Analytics", "Industrial AI", "Maintenance Optimization"],
        author: {
            name: "Zion Industrial AI",
            id: "zion-industrial-ai",
            avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-07T14:15:00.000Z",
        aiScore: 95,
        rating: 4.9,
        reviewCount: 67,
    },
    
    // NEW BLOCKCHAIN & WEB3 SERVICES
    {
        id: "defi-yield-optimizer",
        title: "DeFi Yield Optimizer",
        description: "Automated DeFi yield farming and portfolio optimization across multiple protocols. Maximize returns with AI-driven strategy selection.",
        category: "Blockchain & Web3",
        price: 199,
        currency: "$",
        tags: ["DeFi", "Yield Farming", "Portfolio Optimization", "Smart Contracts"],
        author: {
            name: "Zion DeFi Labs",
            id: "zion-defi-labs",
            avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-08T09:45:00.000Z",
        aiScore: 94,
        rating: 4.8,
        reviewCount: 156,
    },
    {
        id: "nft-marketplace-builder",
        title: "NFT Marketplace Builder",
        description: "Build and launch your own NFT marketplace in 24 hours. Complete with minting, trading, and royalty distribution systems.",
        category: "Blockchain & Web3",
        price: 399,
        currency: "$",
        tags: ["NFT", "Marketplace", "Smart Contracts", "Web3 Development"],
        author: {
            name: "Zion NFT Studio",
            id: "zion-nft-studio",
            avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-09T12:20:00.000Z",
        aiScore: 93,
        rating: 4.7,
        reviewCount: 89,
    },
    {
        id: "dao-governance-platform",
        title: "DAO Governance Platform",
        description: "Complete DAO governance solution with voting mechanisms, proposal management, and treasury controls. Launch your DAO in minutes.",
        category: "Blockchain & Web3",
        price: 249,
        currency: "$",
        tags: ["DAO", "Governance", "Voting Systems", "Treasury Management"],
        author: {
            name: "Zion DAO Solutions",
            id: "zion-dao-solutions",
            avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-10T15:30:00.000Z",
        aiScore: 92,
        rating: 4.8,
        reviewCount: 112,
    },
    
    // NEW QUANTUM COMPUTING SERVICES
    {
        id: "quantum-optimization-solver",
        title: "Quantum Optimization Solver",
        description: "Access to quantum computing power for complex optimization problems. Solve logistics, finance, and research challenges with quantum advantage.",
        category: "Quantum Computing",
        price: 999,
        currency: "$",
        tags: ["Quantum Computing", "Optimization", "Research", "Enterprise Solutions"],
        author: {
            name: "Zion Quantum Labs",
            id: "zion-quantum-labs",
            avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-11T10:00:00.000Z",
        aiScore: 99,
        rating: 5.0,
        reviewCount: 45,
    },
    {
        id: "quantum-cryptography",
        title: "Quantum Cryptography Suite",
        description: "Post-quantum cryptography solutions for future-proof security. Quantum-resistant encryption and key distribution systems.",
        category: "Quantum Computing",
        price: 599,
        currency: "$",
        tags: ["Quantum Cryptography", "Post-Quantum Security", "Encryption", "Key Distribution"],
        author: {
            name: "Zion Quantum Security",
            id: "zion-quantum-security",
            avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-12T13:45:00.000Z",
        aiScore: 98,
        rating: 4.9,
        reviewCount: 78,
    },
    
    // NEW SPECIALIZED INDUSTRY SOLUTIONS
    {
        id: "ai-legal-contract-review",
        title: "AI Legal Contract Review",
        description: "Automated legal document analysis, contract review, and compliance checking. Contract analysis, risk assessment, and compliance monitoring.",
        category: "Legal Tech",
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
        category: "FinTech",
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
        id: "ai-healthcare-assistant",
        title: "AI Healthcare Assistant",
        description: "Intelligent health monitoring, symptom analysis, and wellness recommendations. Health tracking, symptom analysis, and wellness coaching. HIPAA compliant.",
        category: "Healthcare",
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
    
    // NEW EMERGING TECH SERVICES
    {
        id: "ai-robotics-automation",
        title: "AI Robotics Automation",
        description: "Intelligent robotics solutions for manufacturing, logistics, and service industries. Computer vision, autonomous navigation, and human-robot collaboration.",
        category: "Robotics & Automation",
        price: 799,
        currency: "$",
        tags: ["Robotics", "Automation", "Computer Vision", "Manufacturing"],
        author: {
            name: "Zion Robotics",
            id: "zion-robotics",
            avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-13T11:20:00.000Z",
        aiScore: 96,
        rating: 4.9,
        reviewCount: 67,
    },
    {
        id: "ai-augmented-reality",
        title: "AI Augmented Reality Platform",
        description: "Next-generation AR experiences powered by AI. Object recognition, spatial computing, and interactive content creation for enterprise and consumer applications.",
        category: "AR/VR",
        price: 449,
        currency: "$",
        tags: ["Augmented Reality", "Computer Vision", "Spatial Computing", "Interactive Content"],
        author: {
            name: "Zion AR Labs",
            id: "zion-ar-labs",
            avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-14T14:30:00.000Z",
        aiScore: 95,
        rating: 4.8,
        reviewCount: 89,
    },
    {
        id: "ai-iot-platform",
        title: "AI IoT Platform",
        description: "Comprehensive IoT platform with AI-powered analytics, device management, and predictive insights. Connect, monitor, and optimize your IoT ecosystem.",
        category: "IoT & Edge",
        price: 199,
        currency: "$",
        tags: ["IoT", "Edge Computing", "Device Management", "Predictive Analytics"],
        author: {
            name: "Zion IoT Solutions",
            id: "zion-iot-solutions",
            avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-15T09:15:00.000Z",
        aiScore: 93,
        rating: 4.7,
        reviewCount: 134,
    },
    
    // NEW SUSTAINABILITY & GREEN TECH
    {
        id: "ai-carbon-footprint-tracker",
        title: "AI Carbon Footprint Tracker",
        description: "Intelligent carbon footprint monitoring and reduction recommendations for businesses and individuals. Real-time tracking with actionable sustainability insights.",
        category: "Sustainability",
        price: 79,
        currency: "$",
        tags: ["Carbon Tracking", "Sustainability", "Environmental Impact", "Green Tech"],
        author: {
            name: "Zion Green Tech",
            id: "zion-green-tech",
            avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-16T12:00:00.000Z",
        aiScore: 91,
        rating: 4.8,
        reviewCount: 98,
    },
    {
        id: "ai-energy-optimization",
        title: "AI Energy Optimization",
        description: "Smart energy management and optimization for buildings, factories, and smart cities. Reduce energy costs by up to 30% with AI-driven insights.",
        category: "Energy & Smart Cities",
        price: 299,
        currency: "$",
        tags: ["Energy Management", "Smart Cities", "Cost Optimization", "Sustainability"],
        author: {
            name: "Zion Energy Solutions",
            id: "zion-energy-solutions",
            avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-17T15:45:00.000Z",
        aiScore: 94,
        rating: 4.9,
        reviewCount: 76,
    },
    
    // ... existing services continue ...
];
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function generateRandomService(idNum) {
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
    const price = Math.round(Math.random() * (template.max - template.min) + template.min);
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
    { label: 'Blockchain & Web3', value: 'blockchain-web3' },
    { label: 'Quantum Computing', value: 'quantum-computing' },
    { label: 'Cybersecurity', value: 'cybersecurity' },
    { label: 'Cloud & Infrastructure', value: 'cloud-infrastructure' },
    { label: 'Business Intelligence', value: 'business-intelligence' },
    { label: 'Communication', value: 'communication' },
    { label: 'Legal Tech', value: 'legal-tech' },
    { label: 'FinTech', value: 'fintech' },
    { label: 'Healthcare', value: 'healthcare' },
    { label: 'Robotics & Automation', value: 'robotics-automation' },
    { label: 'AR/VR', value: 'ar-vr' },
    { label: 'IoT & Edge', value: 'iot-edge' },
    { label: 'Sustainability', value: 'sustainability' },
    { label: 'Energy & Smart Cities', value: 'energy-smart-cities' },
    { label: 'Specialized Tools', value: 'specialized-tools' },
    { label: 'Development', value: 'development' },
    { label: 'Management', value: 'management' },
    { label: 'Security', value: 'security' },
    { label: 'Analytics', value: 'analytics' },
    { label: 'Consulting', value: 'consulting' },
    { label: 'Strategy', value: 'strategy' },
];
export default function ServicesPage() {
    const [listings, setListings] = useState(SERVICE_LISTINGS);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('rating');

    useEffect(() => {
        const interval = setInterval(() => {
            setListings(prev => [...prev, generateRandomService(prev.length + 1)]);
        }, 120000);
        return () => clearInterval(interval);
    }, []);

    const filteredServices = listings.filter(service => {
        const matchesCategory = selectedCategory === 'all' || 
            service.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
        const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const sortedServices = [...filteredServices].sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'ai-score':
                return b.aiScore - a.aiScore;
            case 'newest':
                return new Date(b.createdAt) - new Date(a.createdAt);
            default:
                return 0;
        }
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-zion-cyan/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-zion-blue/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            <div className="relative z-10 pt-32 pb-20">
                <SEO 
                    title="IT & AI Services - Zion Tech Group" 
                    description="Find expert technology service providers for your business needs, from AI development to infrastructure management." 
                    keywords="IT services, AI services, technology consulting, Zion Tech Group" 
                    url="https://ziontechgroup.com/services"
                />
                
                {/* Header Section */}
                <div className="bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple-dark/80 backdrop-blur-sm py-8 px-4 md:px-8 mb-8 border-b border-zion-cyan/20">
                    <div className="container mx-auto">
                        <div className="text-center mb-8">
                            <motion.h1 
                                className="text-4xl md:text-6xl font-bold text-white mb-4"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                                    IT & AI Services
                                </span>
                            </motion.h1>
                            <motion.p 
                                className="text-xl text-zion-slate-light max-w-3xl mx-auto"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Discover cutting-edge technology solutions from AI and blockchain to quantum computing and cybersecurity.
                            </motion.p>
                        </div>

                        <motion.div 
                            className="flex flex-col md:flex-row items-center justify-center gap-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Link to="/contact">
                                <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple to-zion-cyan text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-zion-cyan/25">
                                    Request a Quote
                                </Button>
                            </Link>
                            <Link to="/marketplace">
                                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300">
                                    <Globe className="h-5 w-5 mr-2"/>
                                    Explore Marketplace
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    {/* Filters and Search */}
                    <motion.div 
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {/* Search */}
                            <div className="md:col-span-2">
                                <input
                                    type="text"
                                    placeholder="Search services..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                                />
                            </div>

                            {/* Category Filter */}
                            <div>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                                >
                                    <option value="all" className="bg-zinc-800 text-white">All Categories</option>
                                    {SERVICE_FILTERS.map(filter => (
                                        <option key={filter.value} value={filter.value} className="bg-zinc-800 text-white">
                                            {filter.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Sort */}
                            <div>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                                >
                                    <option value="rating" className="bg-zinc-800 text-white">Sort by Rating</option>
                                    <option value="ai-score" className="bg-zinc-800 text-white">Sort by AI Score</option>
                                    <option value="price-low" className="bg-zinc-800 text-white">Price: Low to High</option>
                                    <option value="price-high" className="bg-zinc-800 text-white">Price: High to Low</option>
                                    <option value="newest" className="bg-zinc-800 text-white">Newest First</option>
                                </select>
                            </div>
                        </div>

                        {/* Active Filters Display */}
                        {(selectedCategory !== 'all' || searchTerm) && (
                            <div className="mt-4 flex flex-wrap gap-2">
                                {selectedCategory !== 'all' && (
                                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm flex items-center gap-2">
                                        Category: {SERVICE_FILTERS.find(f => f.value === selectedCategory)?.label}
                                        <button
                                            onClick={() => setSelectedCategory('all')}
                                            className="hover:text-white transition-colors"
                                        >
                                            ×
                                        </button>
                                    </span>
                                )}
                                {searchTerm && (
                                    <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple rounded-full text-sm flex items-center gap-2">
                                        Search: "{searchTerm}"
                                        <button
                                            onClick={() => setSearchTerm('')}
                                            className="hover:text-white transition-colors"
                                        >
                                            ×
                                        </button>
                                    </span>
                                )}
                            </div>
                        )}
                    </motion.div>

                    {/* Results Count */}
                    <motion.div 
                        className="text-center mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-zion-slate-light">
                            Showing <span className="text-zion-cyan font-semibold">{sortedServices.length}</span> of <span className="text-zion-cyan font-semibold">{listings.length}</span> services
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sortedServices.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20"
                            >
                                {/* Service Image */}
                                {service.images && service.images[0] && (
                                    <div className="mb-6 relative overflow-hidden rounded-xl">
                                        <img
                                            src={service.images[0]}
                                            alt={service.title}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 right-3 bg-zion-cyan/90 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                                            AI Score: {service.aiScore}
                                        </div>
                                    </div>
                                )}

                                {/* Service Info */}
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 bg-zion-blue/20 text-zion-cyan rounded-full text-xs font-medium">
                                            {service.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-zion-slate-light leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                                
                                {/* Price and Rating */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="text-3xl font-bold text-zion-purple">
                                        ${service.price?.toLocaleString()}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1">
                                            <span className="text-yellow-400">★</span>
                                            <span className="font-semibold text-white">{service.rating}</span>
                                        </div>
                                        <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {service.tags.slice(0, 3).map((tag, index) => (
                                        <span key={index} className="px-2 py-1 bg-zion-blue/10 text-zion-cyan text-xs rounded-full border border-zion-blue/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Author Info */}
                                {service.author && (
                                    <div className="flex items-center gap-3 mb-6 p-3 bg-white/5 rounded-xl">
                                        {service.author.avatarUrl && (
                                            <img
                                                src={service.author.avatarUrl}
                                                alt={service.author.name}
                                                className="w-8 h-8 rounded-full"
                                            />
                                        )}
                                        <div>
                                            <p className="text-sm font-medium text-white">{service.author.name}</p>
                                            <p className="text-xs text-zion-slate-light">Provider</p>
                                        </div>
                                    </div>
                                )}

                                {/* CTA Button */}
                                <Link to="/contact">
                                    <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple to-zion-cyan text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-zion-cyan/25">
                                        Get Quote
                                    </Button>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* No Results */}
                    {sortedServices.length === 0 && (
                        <motion.div 
                            className="text-center py-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                            <p className="text-zion-slate-light mb-6">
                                Try adjusting your search criteria or browse all services
                            </p>
                            <Button 
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedCategory('all');
                                }}
                                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-xl"
                            >
                                Clear Filters
                            </Button>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}

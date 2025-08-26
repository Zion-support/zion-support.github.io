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
    // NEW: Advanced AI Services
    {
        id: "ai-voice-synthesis",
        title: "AI Voice Synthesis Studio",
        description: "Create natural-sounding voiceovers, podcasts, and audio content with AI voice cloning and synthesis. Support for 50+ languages and accents.",
        category: "AI & ML",
        price: 49,
        currency: "$",
        tags: ["Voice Synthesis", "Voice Cloning", "Audio Generation", "Multilingual"],
        author: {
            name: "Zion Voice AI",
            id: "zion-voice-ai",
            avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-15T10:00:00.000Z",
        aiScore: 96,
        rating: 4.8,
        reviewCount: 89,
    },
    {
        id: "ai-emotion-analysis",
        title: "AI Emotion Analytics",
        description: "Real-time emotion detection and sentiment analysis for customer feedback, social media monitoring, and user experience optimization.",
        category: "AI & ML",
        price: 79,
        currency: "$",
        tags: ["Emotion Detection", "Sentiment Analysis", "Customer Analytics", "UX Optimization"],
        author: {
            name: "Zion Emotion AI",
            id: "zion-emotion-ai",
            avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-20T14:30:00.000Z",
        aiScore: 94,
        rating: 4.7,
        reviewCount: 156,
    },
    // NEW: Blockchain & Web3 Services
    {
        id: "blockchain-smart-contracts",
        title: "Smart Contract Development",
        description: "Custom smart contract development for DeFi, NFTs, and blockchain applications. Security auditing and deployment on multiple chains.",
        category: "Blockchain & Web3",
        price: 299,
        currency: "$",
        tags: ["Smart Contracts", "DeFi", "NFTs", "Blockchain Security"],
        author: {
            name: "Zion Blockchain",
            id: "zion-blockchain",
            avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-25T09:15:00.000Z",
        aiScore: 93,
        rating: 4.8,
        reviewCount: 78,
    },
    {
        id: "nft-marketplace-platform",
        title: "NFT Marketplace Platform",
        description: "Complete NFT marketplace solution with minting, trading, and auction capabilities. Multi-chain support and advanced analytics.",
        category: "Blockchain & Web3",
        price: 199,
        currency: "$",
        tags: ["NFT Platform", "Marketplace", "Multi-chain", "Trading"],
        author: {
            name: "Zion NFT Solutions",
            id: "zion-nft-solutions",
            avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-01T11:00:00.000Z",
        aiScore: 91,
        rating: 4.6,
        reviewCount: 45,
    },
    // NEW: IoT & Edge Computing
    {
        id: "iot-platform",
        title: "IoT Device Management Platform",
        description: "Comprehensive IoT device management, monitoring, and analytics platform. Real-time data collection, device provisioning, and predictive maintenance.",
        category: "IoT & Edge",
        price: 89,
        currency: "$",
        tags: ["IoT Management", "Device Monitoring", "Predictive Maintenance", "Real-time Analytics"],
        author: {
            name: "Zion IoT",
            id: "zion-iot",
            avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-15T10:00:00.000Z",
        aiScore: 92,
        rating: 4.7,
        reviewCount: 134,
    },
    {
        id: "edge-ai-processing",
        title: "Edge AI Processing",
        description: "AI model deployment and inference at the edge for real-time processing. Optimized for low-latency applications and offline operation.",
        category: "IoT & Edge",
        price: 149,
        currency: "$",
        tags: ["Edge AI", "Real-time Processing", "Offline Operation", "Low Latency"],
        author: {
            name: "Zion Edge AI",
            id: "zion-edge-ai",
            avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-20T14:30:00.000Z",
        aiScore: 89,
        rating: 4.5,
        reviewCount: 67,
    },
    // NEW: Quantum Computing Services
    {
        id: "quantum-algorithm-development",
        title: "Quantum Algorithm Development",
        description: "Custom quantum algorithm development for optimization, cryptography, and machine learning. Access to quantum simulators and real quantum hardware.",
        category: "Quantum Computing",
        price: 599,
        currency: "$",
        tags: ["Quantum Algorithms", "Optimization", "Cryptography", "Quantum ML"],
        author: {
            name: "Zion Quantum",
            id: "zion-quantum",
            avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-25T09:15:00.000Z",
        aiScore: 95,
        rating: 4.9,
        reviewCount: 23,
    },
    // NEW: AR/VR & Metaverse
    {
        id: "ar-vr-development",
        title: "AR/VR Application Development",
        description: "Custom augmented and virtual reality applications for training, marketing, and entertainment. Cross-platform development for major VR headsets.",
        category: "AR/VR & Metaverse",
        price: 399,
        currency: "$",
        tags: ["AR Development", "VR Development", "Cross-platform", "3D Modeling"],
        author: {
            name: "Zion Immersive",
            id: "zion-immersive",
            avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-01T11:00:00.000Z",
        aiScore: 88,
        rating: 4.6,
        reviewCount: 89,
    },
    {
        id: "metaverse-platform",
        title: "Metaverse Platform Development",
        description: "Custom metaverse environments and virtual worlds for brands, events, and communities. Social features, virtual commerce, and interactive experiences.",
        category: "AR/VR & Metaverse",
        price: 799,
        currency: "$",
        tags: ["Metaverse", "Virtual Worlds", "Social VR", "Virtual Commerce"],
        author: {
            name: "Zion Metaverse",
            id: "zion-metaverse",
            avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-15T10:00:00.000Z",
        aiScore: 90,
        rating: 4.7,
        reviewCount: 56,
    },
    // NEW: Advanced Cybersecurity
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
    // NEW: Advanced Cloud Services
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
    // NEW: Advanced Business Intelligence
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
    // NEW: Advanced Communication Services
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
    // NEW: Specialized AI Tools
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
    // NEW: Emerging Technology Services
    {
        id: "robotics-automation",
        title: "Robotics Process Automation",
        description: "Custom RPA solutions for manufacturing, logistics, and service industries. Integration with existing systems and AI-powered decision making.",
        category: "Emerging Tech",
        price: 399,
        currency: "$",
        tags: ["RPA", "Manufacturing", "Logistics", "AI Integration"],
        author: {
            name: "Zion Robotics",
            id: "zion-robotics",
            avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-15T10:00:00.000Z",
        aiScore: 87,
        rating: 4.5,
        reviewCount: 67,
    },
    {
        id: "5g-network-optimization",
        title: "5G Network Optimization",
        description: "5G network planning, optimization, and management services. Coverage analysis, capacity planning, and performance optimization.",
        category: "Emerging Tech",
        price: 299,
        currency: "$",
        tags: ["5G Networks", "Network Optimization", "Coverage Analysis", "Performance"],
        author: {
            name: "Zion 5G Solutions",
            id: "zion-5g-solutions",
            avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-20T14:30:00.000Z",
        aiScore: 89,
        rating: 4.6,
        reviewCount: 89,
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
    { label: 'IoT & Edge', value: 'iot-edge' },
    { label: 'Quantum Computing', value: 'quantum-computing' },
    { label: 'AR/VR & Metaverse', value: 'ar-vr-metaverse' },
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
    const [listings, setListings] = useState(SERVICE_LISTINGS);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    
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

    const categories = ['all', ...SERVICE_FILTERS.map(filter => filter.value)];

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
            <SEO 
                title="Innovative IT & AI Services - Zion Tech Group" 
                description="Discover cutting-edge technology services including AI, blockchain, quantum computing, AR/VR, IoT, and cybersecurity solutions. Transform your business with Zion Tech Group's innovative micro SAAS services." 
                keywords="AI services, blockchain development, quantum computing, AR/VR development, IoT solutions, cybersecurity, Zion Tech Group, micro SAAS" 
                url="https://ziontechgroup.com/services"
            />
            
            {/* Enhanced Hero Section */}
            <div className="relative py-20 bg-gradient-to-br from-zion-blue-dark via-zion-purple-dark to-zion-blue overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-zion-cyan-light rounded-full animate-pulse delay-500"></div>
                </div>
                
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                                Innovative
                            </span>{' '}
                            Tech Services
                        </h1>
                        <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
                            Discover cutting-edge AI, blockchain, quantum computing, AR/VR, IoT, and cybersecurity solutions. 
                            Transform your business with our innovative micro SAAS services.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Link to="/contact">
                                <Button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25">
                                    Get Started Today
                                </Button>
                            </Link>
                            <Link to="/about">
                                <Button variant="outline" className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                                    Learn More
                                </Button>
                            </Link>
                        </div>

                        {/* Service Categories Overview */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                            {['AI & ML', 'Blockchain', 'IoT & Edge', 'Quantum'].map((category, index) => (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-zion-cyan/20"
                                >
                                    <div className="text-2xl font-bold text-zion-cyan mb-1">{category}</div>
                                    <div className="text-zion-slate-light text-sm">Cutting-edge</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Enhanced Services Section */}
            <div className="container mx-auto px-4 py-16">
                {/* Search and Filter Section */}
                <div className="mb-12">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        <div className="flex-1 max-w-md">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search services..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                                />
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light">
                                    🔍
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                        selectedCategory === category
                                            ? 'bg-zion-cyan text-black shadow-lg shadow-zion-cyan/25'
                                            : 'bg-white/10 text-zion-slate-light hover:bg-white/20 hover:text-white border border-zion-cyan/20'
                                    }`}
                                >
                                    {category === 'all' ? 'All Services' : 
                                        SERVICE_FILTERS.find(f => f.value === category)?.label || category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredServices.map((service) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="group bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/10 overflow-hidden"
                        >
                            {/* Service Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={service.images[0]}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-zion-cyan/90 text-black px-2 py-1 rounded-full text-xs font-bold">
                                    {service.category}
                                </div>
                                <div className="absolute bottom-4 left-4 bg-black/80 text-white px-2 py-1 rounded-full text-xs">
                                    AI Score: {service.aiScore}
                                </div>
                            </div>

                            {/* Service Content */}
                            <div className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-zion-slate-light text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                                
                                {/* Price and Rating */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-2xl font-bold text-zion-cyan">
                                        ${service.price?.toLocaleString()}
                                        <span className="text-sm text-zion-slate-light font-normal">/month</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="text-yellow-400">★</span>
                                        <span className="font-medium text-white">{service.rating}</span>
                                        <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {service.tags.slice(0, 3).map((tag, index) => (
                                        <span key={index} className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Author Info */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={service.author.avatarUrl || 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100'}
                                            alt={service.author.name}
                                            className="w-8 h-8 rounded-full border-2 border-zion-cyan/30"
                                        />
                                        <div>
                                            <div className="text-white text-sm font-medium">{service.author.name}</div>
                                            <div className="text-zion-slate-light text-xs">Verified Provider</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <Link to="/contact" className="flex-1">
                                        <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/80 hover:to-zion-purple/80 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105">
                                            Get Quote
                                        </Button>
                                    </Link>
                                    <Button variant="outline" className="px-4 py-3 border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300">
                                        Details
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* No Results Message */}
                {filteredServices.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                        <p className="text-zion-slate-light mb-6">Try adjusting your search terms or category filter</p>
                        <Button 
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedCategory('all');
                            }}
                            className="bg-zion-cyan text-black px-6 py-3 rounded-lg hover:bg-zion-cyan/80 transition-colors"
                        >
                            Clear Filters
                        </Button>
                    </div>
                )}

                {/* Call to Action */}
                <div className="mt-20 text-center">
                    <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark p-12 rounded-2xl border border-zion-cyan/20">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
                            Connect with our team of experts to discuss your technology needs and discover how our innovative solutions can drive your success.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300">
                                    Start Your Project
                                </Button>
                            </Link>
                            <Link to="/about">
                                <Button variant="outline" className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

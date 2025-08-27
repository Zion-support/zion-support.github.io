<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { SEO } from "@/components/SEO";
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
    // NEW INNOVATIVE SERVICES 2025
    {
        id: "quantum-ai-platform",
        title: "Quantum AI Platform",
        description: "Next-generation quantum computing platform with AI integration for complex problem solving. Quantum machine learning, optimization, and simulation capabilities.",
        category: "Quantum Computing",
        price: 999,
        currency: "$",
        tags: ["Quantum Computing", "AI Integration", "Machine Learning", "Optimization"],
        author: {
            name: "Zion Quantum Labs",
            id: "zion-quantum-labs",
            avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2025-01-15T10:00:00.000Z",
        aiScore: 99,
        rating: 4.9,
        reviewCount: 89,
    },
    {
        id: "blockchain-ai-oracle",
        title: "Blockchain AI Oracle",
        description: "Decentralized AI oracle network for blockchain applications. Smart contract integration, real-time data feeds, and AI-powered decision making.",
        category: "Blockchain & AI",
        price: 199,
        currency: "$",
        tags: ["Blockchain", "AI Oracle", "Smart Contracts", "DeFi"],
        author: {
            name: "Zion Blockchain",
            id: "zion-blockchain",
            avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2025-01-20T14:30:00.000Z",
        aiScore: 96,
        rating: 4.8,
        reviewCount: 156,
    },
    {
        id: "autonomous-devops",
        title: "Autonomous DevOps Platform",
        description: "Self-healing DevOps platform with AI-powered automation. Continuous deployment, monitoring, and infrastructure management without human intervention.",
        category: "DevOps & Automation",
        price: 299,
        currency: "$",
        tags: ["Autonomous DevOps", "Self-Healing", "CI/CD", "Infrastructure"],
        author: {
            name: "Zion Autonomous Systems",
            id: "zion-autonomous-systems",
            avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2025-01-25T09:15:00.000Z",
        aiScore: 97,
        rating: 4.9,
        reviewCount: 234,
    },
    {
        id: "ai-cybersecurity-suite",
        title: "AI Cybersecurity Suite Pro",
        description: "Advanced AI-powered cybersecurity with threat prediction, automated response, and zero-day vulnerability detection. 24/7 protection for enterprise networks.",
        category: "Cybersecurity",
        price: 599,
        currency: "$",
        tags: ["AI Security", "Threat Prediction", "Zero-Day Detection", "Enterprise"],
        author: {
            name: "Zion Cyber Defense",
            id: "zion-cyber-defense",
            avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2025-01-30T15:45:00.000Z",
        aiScore: 98,
        rating: 4.9,
        reviewCount: 178,
    },
    {
        id: "metaverse-ai-platform",
        title: "Metaverse AI Platform",
        description: "AI-powered metaverse creation and management platform. Virtual world generation, NPC AI, and immersive experience optimization.",
        category: "Metaverse & AI",
        price: 399,
        currency: "$",
        tags: ["Metaverse", "AI Generation", "Virtual Worlds", "Immersive Tech"],
        author: {
            name: "Zion Metaverse",
            id: "zion-metaverse",
            avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2025-02-05T11:20:00.000Z",
        aiScore: 95,
        rating: 4.8,
        reviewCount: 123,
    },
    {
        id: "ai-climate-prediction",
        title: "AI Climate Prediction Engine",
        description: "Advanced climate modeling and prediction using AI and machine learning. Weather forecasting, climate change analysis, and environmental impact assessment.",
        category: "Climate & AI",
        price: 249,
        currency: "$",
        tags: ["Climate Modeling", "Weather Prediction", "Environmental AI", "Sustainability"],
        author: {
            name: "Zion Climate Tech",
            id: "zion-climate-tech",
            avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2025-02-10T13:15:00.000Z",
        aiScore: 94,
        rating: 4.7,
        reviewCount: 89,
    },
    {
        id: "ai-legal-contract-generator",
        title: "AI Legal Contract Generator",
        description: "Intelligent contract generation and analysis platform. Custom contract creation, legal compliance checking, and risk assessment automation.",
        category: "Legal Tech",
        price: 179,
        currency: "$",
        tags: ["Contract Generation", "Legal AI", "Compliance", "Risk Assessment"],
        author: {
            name: "Zion Legal AI",
            id: "zion-legal-ai",
            avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2025-02-15T16:30:00.000Z",
        aiScore: 93,
        rating: 4.8,
        reviewCount: 145,
    },
    {
        id: "ai-supply-chain-optimizer",
        title: "AI Supply Chain Optimizer",
        description: "Intelligent supply chain optimization and management platform. Demand forecasting, inventory optimization, and logistics automation.",
        category: "Supply Chain & AI",
        price: 349,
        currency: "$",
        tags: ["Supply Chain", "Demand Forecasting", "Inventory Optimization", "Logistics"],
        author: {
            name: "Zion Supply Chain",
            id: "zion-supply-chain",
            avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2025-02-20T10:45:00.000Z",
        aiScore: 92,
        rating: 4.7,
        reviewCount: 167,
    },
    {
        id: "ai-human-resources-suite",
        title: "AI HR Suite Pro",
        description: "Comprehensive AI-powered human resources management platform. Recruitment automation, employee performance analysis, and HR analytics.",
        category: "HR & AI",
        price: 129,
        currency: "$",
        tags: ["HR Management", "Recruitment AI", "Performance Analysis", "HR Analytics"],
        author: {
            name: "Zion HR Solutions",
            id: "zion-hr-solutions",
            avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2025-02-25T14:20:00.000Z",
        aiScore: 91,
        rating: 4.6,
        reviewCount: 234,
    },
    {
        id: "ai-marketing-automation-pro",
        title: "AI Marketing Automation Pro",
        description: "Advanced marketing automation platform with AI-powered personalization. Campaign optimization, customer segmentation, and ROI maximization.",
        category: "Marketing & AI",
        price: 199,
        currency: "$",
        tags: ["Marketing Automation", "AI Personalization", "Campaign Optimization", "ROI"],
        author: {
            name: "Zion Marketing AI",
            id: "zion-marketing-ai",
            avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2025-03-01T12:00:00.000Z",
        aiScore: 95,
        rating: 4.8,
        reviewCount: 189,
    },
    {
        id: "ai-sales-intelligence",
        title: "AI Sales Intelligence Platform",
        description: "Intelligent sales platform with lead scoring, opportunity prediction, and sales forecasting. AI-powered insights for revenue optimization.",
        category: "Sales & AI",
        price: 159,
        currency: "$",
        tags: ["Sales Intelligence", "Lead Scoring", "Opportunity Prediction", "Revenue Optimization"],
        author: {
            name: "Zion Sales AI",
            id: "zion-sales-ai",
            avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2025-03-05T15:30:00.000Z",
        aiScore: 93,
        rating: 4.7,
        reviewCount: 156,
    },
    {
        id: "ai-customer-experience",
        title: "AI Customer Experience Platform",
        description: "Omnichannel customer experience platform with AI-powered personalization. Customer journey mapping, sentiment analysis, and experience optimization.",
        category: "Customer Experience",
        price: 229,
        currency: "$",
        tags: ["Customer Experience", "AI Personalization", "Journey Mapping", "Sentiment Analysis"],
        author: {
            name: "Zion CX Platform",
            id: "zion-cx-platform",
            avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2025-03-10T11:15:00.000Z",
        aiScore: 94,
        rating: 4.8,
        reviewCount: 178,
    },
    {
        id: "ai-product-development",
        title: "AI Product Development Suite",
        description: "AI-powered product development and innovation platform. Market research, feature prioritization, and product lifecycle management.",
        category: "Product Development",
        price: 279,
        currency: "$",
        tags: ["Product Development", "Market Research", "Feature Prioritization", "Innovation"],
        author: {
            name: "Zion Product AI",
            id: "zion-product-ai",
            avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2025-03-15T13:45:00.000Z",
        aiScore: 92,
        rating: 4.7,
        reviewCount: 134,
    },
    {
        id: "ai-compliance-automation",
        title: "AI Compliance Automation",
        description: "Automated compliance monitoring and reporting platform. Regulatory compliance, audit automation, and risk management for various industries.",
        category: "Compliance & AI",
        price: 399,
        currency: "$",
        tags: ["Compliance Automation", "Regulatory Monitoring", "Audit Automation", "Risk Management"],
        author: {
            name: "Zion Compliance AI",
            id: "zion-compliance-ai",
            avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2025-03-20T16:20:00.000Z",
        aiScore: 96,
        rating: 4.9,
        reviewCount: 89,
    },
    {
        id: "ai-data-governance",
        title: "AI Data Governance Platform",
        description: "Intelligent data governance and management platform. Data quality, privacy compliance, and governance automation for enterprise data.",
        category: "Data Governance",
        price: 449,
        currency: "$",
        tags: ["Data Governance", "Data Quality", "Privacy Compliance", "Enterprise Data"],
        author: {
            name: "Zion Data Governance",
            id: "zion-data-governance",
            avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2025-03-25T10:30:00.000Z",
        aiScore: 95,
        rating: 4.8,
        reviewCount: 123,
    },
    {
        id: "ai-edge-computing",
        title: "AI Edge Computing Platform",
        description: "Distributed AI computing platform for edge devices. Real-time processing, low-latency inference, and edge AI model deployment.",
        category: "Edge Computing & AI",
        price: 199,
        currency: "$",
        tags: ["Edge Computing", "Real-time Processing", "Low-latency AI", "Edge Deployment"],
        author: {
            name: "Zion Edge AI",
            id: "zion-edge-ai",
            avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2025-03-30T14:15:00.000Z",
        aiScore: 93,
        rating: 4.7,
        reviewCount: 167,
    },
    {
        id: "ai-iot-platform",
        title: "AI IoT Platform",
        description: "Intelligent IoT platform with AI-powered device management. Sensor data analysis, predictive maintenance, and IoT automation.",
        category: "IoT & AI",
        price: 159,
        currency: "$",
        tags: ["IoT Platform", "Sensor Analytics", "Predictive Maintenance", "IoT Automation"],
        author: {
            name: "Zion IoT AI",
            id: "zion-iot-ai",
            avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2025-04-01T12:45:00.000Z",
        aiScore: 91,
        rating: 4.6,
        reviewCount: 145,
    },
    {
        id: "ai-financial-trading",
        title: "AI Financial Trading Platform",
        description: "AI-powered algorithmic trading platform with real-time market analysis. Portfolio optimization, risk management, and automated trading strategies.",
        category: "Financial AI",
        price: 799,
        currency: "$",
        tags: ["Algorithmic Trading", "Market Analysis", "Portfolio Optimization", "Risk Management"],
        author: {
            name: "Zion Financial AI",
            id: "zion-financial-ai",
            avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2025-04-05T15:20:00.000Z",
        aiScore: 97,
        rating: 4.9,
        reviewCount: 89,
    },
    {
        id: "ai-healthcare-diagnostics",
        title: "AI Healthcare Diagnostics",
        description: "Advanced AI-powered medical diagnostics and imaging analysis. Disease detection, treatment recommendations, and healthcare workflow optimization.",
        category: "Healthcare AI",
        price: 499,
        currency: "$",
        tags: ["Medical Diagnostics", "Imaging Analysis", "Disease Detection", "Healthcare AI"],
        author: {
            name: "Zion Healthcare AI",
            id: "zion-healthcare-ai",
            avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2025-04-10T11:30:00.000Z",
        aiScore: 96,
        rating: 4.8,
        reviewCount: 234,
    },
    {
        id: "ai-manufacturing-optimization",
        title: "AI Manufacturing Optimization",
        description: "Intelligent manufacturing optimization platform with predictive maintenance and quality control. Production efficiency, cost reduction, and quality assurance.",
        category: "Manufacturing AI",
        price: 349,
        currency: "$",
        tags: ["Manufacturing AI", "Predictive Maintenance", "Quality Control", "Production Efficiency"],
        author: {
            name: "Zion Manufacturing AI",
            id: "zion-manufacturing-ai",
            avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2025-04-15T14:45:00.000Z",
        aiScore: 94,
        rating: 4.7,
        reviewCount: 178,
    },
    {
        id: "ai-retail-analytics",
        title: "AI Retail Analytics Platform",
        description: "Intelligent retail analytics and customer behavior analysis. Inventory optimization, demand forecasting, and personalized shopping experiences.",
        category: "Retail AI",
        price: 199,
        currency: "$",
        tags: ["Retail Analytics", "Customer Behavior", "Inventory Optimization", "Personalization"],
        author: {
            name: "Zion Retail AI",
            id: "zion-retail-ai",
            avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2025-04-20T16:15:00.000Z",
        aiScore: 92,
        rating: 4.6,
        reviewCount: 156,
    },
    {
        id: "ai-logistics-optimization",
        title: "AI Logistics Optimization",
        description: "Intelligent logistics and transportation optimization platform. Route optimization, fleet management, and supply chain logistics automation.",
        category: "Logistics AI",
        price: 279,
        currency: "$",
        tags: ["Logistics AI", "Route Optimization", "Fleet Management", "Supply Chain"],
        author: {
            name: "Zion Logistics AI",
            id: "zion-logistics-ai",
            avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2025-04-25T13:20:00.000Z",
        aiScore: 93,
        rating: 4.7,
        reviewCount: 134,
    },
    {
        id: "ai-energy-management",
        title: "AI Energy Management Platform",
        description: "Intelligent energy management and optimization platform. Smart grid management, renewable energy optimization, and energy efficiency analytics.",
        category: "Energy AI",
        price: 399,
        currency: "$",
        tags: ["Energy Management", "Smart Grid", "Renewable Energy", "Energy Efficiency"],
        author: {
            name: "Zion Energy AI",
            id: "zion-energy-ai",
            avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2025-04-30T10:45:00.000Z",
        aiScore: 95,
        rating: 4.8,
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
    { label: 'Quantum Computing', value: 'quantum-computing' },
    { label: 'Blockchain & AI', value: 'blockchain-ai' },
    { label: 'DevOps & Automation', value: 'devops-automation' },
    { label: 'Metaverse & AI', value: 'metaverse-ai' },
    { label: 'Climate & AI', value: 'climate-ai' },
    { label: 'Legal Tech', value: 'legal-tech' },
    { label: 'Supply Chain & AI', value: 'supply-chain-ai' },
    { label: 'HR & AI', value: 'hr-ai' },
    { label: 'Marketing & AI', value: 'marketing-ai' },
    { label: 'Sales & AI', value: 'sales-ai' },
    { label: 'Customer Experience', value: 'customer-experience' },
    { label: 'Product Development', value: 'product-development' },
    { label: 'Compliance & AI', value: 'compliance-ai' },
    { label: 'Data Governance', value: 'data-governance' },
    { label: 'Edge Computing & AI', value: 'edge-computing-ai' },
    { label: 'IoT & AI', value: 'iot-ai' },
    { label: 'Financial AI', value: 'financial-ai' },
    { label: 'Healthcare AI', value: 'healthcare-ai' },
    { label: 'Manufacturing AI', value: 'manufacturing-ai' },
    { label: 'Retail AI', value: 'retail-ai' },
    { label: 'Logistics AI', value: 'logistics-ai' },
    { label: 'Energy AI', value: 'energy-ai' },
];
export default function ServicesPage() {
    const [listings, setListings] = useState(SERVICE_LISTINGS);
    useEffect(() => {
        const interval = setInterval(() => {
            setListings(prev => [...prev, generateRandomService(prev.length + 1)]);
        }, 120000);
        return () => clearInterval(interval);
    }, []);
    return (<div className="min-h-screen bg-background">
      <SEO 
        title="Comprehensive IT & AI Services 2025 - Zion Tech Group" 
        description="Discover cutting-edge AI, Quantum Computing, Blockchain, Metaverse, and specialized industry solutions. From micro SAAS to enterprise platforms, transform your business with Zion Tech Group's innovative technology services." 
        keywords="AI services, quantum computing, blockchain AI, metaverse platform, cybersecurity, cloud infrastructure, business intelligence, Zion Tech Group, IT services, technology consulting, micro SAAS, enterprise solutions" 
        url="https://ziontechgroup.com/services"
      />
      
      <div className="bg-zion-blue-dark py-4 px-4 md:px-8 mb-6 border-b border-zion-blue-light">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-white text-lg font-medium">Featured Services</h2>
          <div className="flex flex-wrap gap-2">
            <Link to="/comprehensive-services">
              <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Globe className="h-4 w-4 mr-2"/>
                View All Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                Request a Quote
              </Button>
            </Link>
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Rocket, 
  Cloud, 
  Globe, 
  Code, 
  Database,
  Network,
  Lock,
  Cpu,
  BarChart3,
  Users,
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Server
} from 'lucide-react';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Star },
    { id: 'ai', name: 'AI Solutions', icon: Brain },
    { id: 'quantum', name: 'Quantum Tech', icon: Zap },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server },
  ];

  const allServices = [
    {
      id: 'ai-autonomous-systems',
      title: 'AI Autonomous Systems',
      description: 'Self-learning AI systems that operate independently and continuously improve performance',
      category: 'ai',
      icon: Brain,
      features: ['Machine Learning', 'Neural Networks', 'Predictive Analytics', 'Natural Language Processing'],
      color: 'from-zion-cyan to-zion-blue',
      link: '/comprehensive-services#ai'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions for complex problem-solving',
      category: 'quantum',
      icon: Zap,
      features: ['Quantum Algorithms', 'Quantum Cryptography', 'Quantum Machine Learning', 'Quantum Simulation'],
      color: 'from-zion-purple to-zion-cyan',
      link: '/comprehensive-services#quantum'
    },
    {
      id: 'advanced-cybersecurity',
      title: 'Advanced Cybersecurity',
      description: 'Enterprise-grade security with AI-powered threat detection and response',
      category: 'security',
      icon: Shield,
      features: ['Threat Intelligence', 'Zero Trust Architecture', 'Incident Response', 'Security Automation'],
      color: 'from-zion-blue to-zion-purple',
      link: '/comprehensive-services#cybersecurity'
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with automated DevOps and monitoring',
      category: 'cloud',
      icon: Cloud,
      features: ['Multi-Cloud Strategy', 'Container Orchestration', 'Serverless Architecture', 'Cost Optimization'],
      color: 'from-zion-cyan to-zion-purple',
      link: '/comprehensive-services#cloud'
    },
    {
      id: 'quantum-edge-computing',
      title: 'Quantum Edge Computing',
      description: 'Quantum computing at the edge for real-time processing and decision making',
      category: 'quantum',
      icon: Cpu,
      features: ['Edge AI', 'Real-time Processing', 'Low Latency', 'Distributed Computing'],
      color: 'from-zion-purple to-zion-blue',
      link: '/comprehensive-services#quantum-edge'
    },
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence',
      description: 'Intelligent analytics and insights to drive business decisions',
      category: 'ai',
      icon: BarChart3,
      features: ['Predictive Analytics', 'Data Visualization', 'Business Insights', 'Performance Metrics'],
      color: 'from-zion-cyan to-zion-blue',
      link: '/comprehensive-services#ai-bi'
    },
    {
      id: 'zero-trust-security',
      title: 'Zero Trust Security',
      description: 'Comprehensive security framework with continuous verification',
      category: 'security',
      icon: Lock,
      features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Continuous Monitoring'],
      color: 'from-zion-blue to-zion-purple',
      link: '/comprehensive-services#zero-trust'
    },
    {
      id: 'devops-automation',
      title: 'DevOps Automation',
      description: 'Streamlined development and deployment with automated workflows',
      category: 'cloud',
      icon: Rocket,
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Deployment Automation'],
      color: 'from-zion-cyan to-zion-purple',
      link: '/comprehensive-services#devops'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Code, value: "1000+", label: "Projects Delivered" },
    { icon: Globe, value: "25+", label: "Countries Served" },
    { icon: TrendingUp, value: "99.9%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Comprehensive Technology Solutions
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed">
              From AI-powered solutions to quantum computing, we provide cutting-edge technology services 
              that transform businesses and drive innovation across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              </motion.div>
            ))}
>>>>>>> 4dd2c5810d5 (feat: Enhance Zion Tech Group website with modern design and improved functionality)
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zion-blue mb-4">Comprehensive IT & AI Services 2025</h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
            Discover cutting-edge technology solutions including AI, Quantum Computing, Blockchain, Metaverse, and specialized industry platforms. 
            From micro SAAS to enterprise solutions, we offer innovative services to transform your business.
          </p>
        </div>

        {/* Services Overview Section */}
        <div className="bg-gradient-to-r from-zion-blue to-zion-purple rounded-xl p-8 mb-8 text-white">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We deliver cutting-edge AI and technology solutions with proven ROI, expert support, and innovative approaches to business transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">500+</div>
              <div className="text-lg">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-lg">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-lg">Expert Support</div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-4 bg-white/10 rounded-lg p-4">
              <div>
                <div className="font-semibold">Contact Us Today</div>
                <div className="text-sm opacity-80">Get started with your digital transformation</div>
              </div>
              <div className="text-right">
                <div className="font-semibold">+1 302 464 0950</div>
                <div className="text-sm opacity-80">kleber@ziontechgroup.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-zion-blue mb-6 text-center">Service Pricing Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center border border-zion-blue-light">
              <h3 className="font-semibold text-zion-blue mb-2">Starter</h3>
              <div className="text-2xl font-bold text-zion-purple mb-2">$19-99</div>
              <div className="text-sm text-zion-slate-light">Basic AI tools & automation</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-zion-blue-light">
              <h3 className="font-semibold text-zion-blue mb-2">Professional</h3>
              <div className="text-2xl font-bold text-zion-purple mb-2">$199-499</div>
              <div className="text-sm text-zion-slate-light">Advanced AI platforms</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-zion-blue-light">
              <h3 className="font-semibold text-zion-blue mb-2">Enterprise</h3>
              <div className="text-2xl font-bold text-zion-purple mb-2">$599-999</div>
              <div className="text-sm text-zion-slate-light">Quantum & specialized solutions</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-zion-blue-light">
              <h3 className="font-semibold text-zion-blue mb-2">Custom</h3>
              <div className="text-2xl font-bold text-zion-purple mb-2">$1000+</div>
              <div className="text-sm text-zion-slate-light">Tailored enterprise solutions</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((service) => (<div key={service.id} className="bg-white rounded-lg shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-zion-blue mb-2">{service.title}</h3>
                <p className="text-zion-slate-light">{service.description}</p>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-zion-purple">
                  ${service.price?.toLocaleString()}
=======
      {/* Service Categories Filter */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Our Service Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose from our comprehensive range of technology services
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-dark/30 text-zion-slate-light hover:bg-zion-blue-dark/50 border border-zion-cyan/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-zion-blue-dark/30 p-8 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group hover:bg-zion-blue-dark/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
>>>>>>> 4dd2c5810d5 (feat: Enhance Zion Tech Group website with modern design and improved functionality)
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
<<<<<<< HEAD
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 3).map((tag, index) => (<span key={index} className="px-2 py-1 bg-zion-blue/10 text-zion-blue text-xs rounded-full">
                    {tag}
                  </span>))}
              </div>

              <div className="space-y-2 mb-4">
                <div className="text-sm text-zion-slate-light">
                  <span className="font-medium">Category:</span> {service.category}
                </div>
                <div className="text-sm text-zion-slate-light">
                  <span className="font-medium">AI Score:</span> {service.aiScore}/100
                </div>
              </div>

              <Link to="/contact">
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  Get Quote
                </Button>
              </Link>
            </div>))}
        </div>

        {/* Service Categories Overview */}
        <div className="mt-12 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-zion-blue mb-6 text-center">Service Categories Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-zion-blue-light">
              <h3 className="font-semibold text-zion-blue mb-3">🤖 AI & Machine Learning</h3>
              <p className="text-sm text-zion-slate-light mb-3">Advanced AI solutions for content generation, code assistance, data analytics, and business intelligence.</p>
              <div className="text-xs text-zion-purple font-medium">Starting at $19/month</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-zion-blue-light">
              <h3 className="font-semibold text-zion-blue mb-3">🔒 Cybersecurity</h3>
              <p className="text-sm text-zion-slate-light mb-3">Comprehensive security solutions including threat detection, zero-trust architecture, and penetration testing.</p>
              <div className="text-xs text-zion-purple font-medium">Starting at $99/month</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-zion-blue-light">
              <h3 className="font-semibold text-zion-blue mb-3">☁️ Cloud & Infrastructure</h3>
              <p className="text-sm text-zion-slate-light mb-3">Multi-cloud management, DevOps automation, and edge computing solutions for modern infrastructure.</p>
              <div className="text-xs text-zion-purple font-medium">Starting at $49/month</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-zion-blue-light">
              <h3 className="font-semibold text-zion-blue mb-3">📊 Business Intelligence</h3>
              <p className="text-sm text-zion-slate-light mb-3">AI-powered CRM, process automation, and market research tools for business growth.</p>
              <div className="text-xs text-zion-purple font-medium">Starting at $29/month</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-zion-blue-light">
              <h3 className="font-semibold text-zion-blue mb-3">🌐 Communication & Collaboration</h3>
              <p className="text-sm text-zion-slate-light mb-3">AI meeting assistants, virtual event platforms, and translation services for global teams.</p>
              <div className="text-xs text-zion-purple font-medium">Starting at $19/month</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-zion-blue-light">
              <h3 className="font-semibold text-zion-blue mb-3">⚡ Emerging Technologies</h3>
              <p className="text-sm text-zion-slate-light mb-3">Quantum computing, blockchain AI, metaverse platforms, and cutting-edge innovations.</p>
              <div className="text-xs text-zion-purple font-medium">Starting at $199/month</div>
            </div>
          </div>
        </div>

        {/* Contact & Support Section */}
        <div className="mt-12 bg-gradient-to-r from-zion-purple to-zion-blue rounded-xl p-8 text-white">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Get in touch with our experts to discuss your specific needs and discover how our AI-powered solutions can drive your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">📱</div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-zion-cyan">+1 302 464 0950</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">✉️</div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-zion-cyan">kleber@ziontechgroup.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">📍</div>
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-zion-cyan">364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">🌐</div>
                  <div>
                    <div className="font-medium">Website</div>
                    <div className="text-zion-cyan">https://ziontechgroup.com</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Service Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                  <span>500+ Successful AI Implementations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                  <span>24/7 Expert Technical Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                  <span>99.9% Uptime Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                  <span>Custom Enterprise Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                  <span>Proven ROI & Business Impact</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                  <span>Industry-Leading AI Technology</span>
                </div>
              </div>
              
              <div className="mt-6">
                <Link to="/contact">
                  <Button className="w-full bg-white text-zion-purple hover:bg-gray-100 font-semibold">
                    Get Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
=======
                
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors group-hover:translate-x-1 transition-transform"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-xl text-zion-slate-light mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our technology solutions can transform your business
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link 
              to="/comprehensive-pricing"
              className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
>>>>>>> 4dd2c5810d5 (feat: Enhance Zion Tech Group website with modern design and improved functionality)
}

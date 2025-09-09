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
    
    // Emerging Technology Services
    {
        id: "blockchain-development",
        title: "Blockchain & Web3 Development",
        description: "Custom blockchain solutions, smart contracts, DeFi applications, and Web3 integration services for modern businesses.",
        category: "Emerging Tech",
        price: 89,
        currency: "$",
        tags: ["Blockchain", "Smart Contracts", "DeFi", "Web3"],
        author: {
            name: "Zion Blockchain Labs",
            id: "zion-blockchain",
            avatarUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-05T08:30:00.000Z",
        aiScore: 96,
        rating: 4.8,
        reviewCount: 89,
    },
    {
        id: "iot-platform",
        title: "IoT Platform & Analytics",
        description: "End-to-end IoT solutions including device management, data collection, real-time analytics, and predictive maintenance.",
        category: "Emerging Tech",
        price: 69,
        currency: "$",
        tags: ["IoT", "Device Management", "Real-time Analytics", "Predictive Maintenance"],
        author: {
            name: "Zion IoT Solutions",
            id: "zion-iot",
            avatarUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-06T11:15:00.000Z",
        aiScore: 93,
        rating: 4.7,
        reviewCount: 67,
    },
    {
        id: "quantum-computing",
        title: "Quantum Computing Solutions",
        description: "Quantum algorithm development, optimization problems, and quantum-ready applications for research and enterprise.",
        category: "Emerging Tech",
        price: 299,
        currency: "$",
        tags: ["Quantum Computing", "Algorithm Development", "Optimization", "Research"],
        author: {
            name: "Zion Quantum Labs",
            id: "zion-quantum",
            avatarUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-07T14:20:00.000Z",
        aiScore: 97,
        rating: 4.9,
        reviewCount: 34,
    },
    
    // Industry-Specific Solutions
    {
        id: "healthcare-ai",
        title: "Healthcare AI Platform",
        description: "HIPAA-compliant AI solutions for medical imaging, patient data analysis, drug discovery, and clinical decision support.",
        category: "Healthcare",
        price: 199,
        currency: "$",
        tags: ["Healthcare AI", "Medical Imaging", "HIPAA Compliant", "Clinical Support"],
        author: {
            name: "Zion Health Tech",
            id: "zion-health-tech",
            avatarUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-08T09:45:00.000Z",
        aiScore: 95,
        rating: 4.8,
        reviewCount: 156,
    },
    {
        id: "fintech-solutions",
        title: "FinTech AI Platform",
        description: "AI-powered financial services including fraud detection, risk assessment, algorithmic trading, and regulatory compliance.",
        category: "Finance",
        price: 149,
        currency: "$",
        tags: ["FinTech", "Fraud Detection", "Risk Assessment", "Regulatory Compliance"],
        author: {
            name: "Zion FinTech",
            id: "zion-fintech",
            avatarUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-09T13:30:00.000Z",
        aiScore: 94,
        rating: 4.9,
        reviewCount: 203,
    },
    {
        id: "education-ai",
        title: "AI-Powered Education Platform",
        description: "Personalized learning experiences, adaptive curriculum, student performance analytics, and automated assessment tools.",
        category: "Education",
        price: 79,
        currency: "$",
        tags: ["Education AI", "Personalized Learning", "Adaptive Curriculum", "Student Analytics"],
        author: {
            name: "Zion EdTech",
            id: "zion-edtech",
            avatarUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-10T10:15:00.000Z",
        aiScore: 92,
        rating: 4.7,
        reviewCount: 89,
    },
    
    // Advanced AI Services
    {
        id: "computer-vision",
        title: "Computer Vision Solutions",
        description: "Advanced image and video analysis, object detection, facial recognition, and visual AI for automation and quality control.",
        category: "Advanced AI",
        price: 129,
        currency: "$",
        tags: ["Computer Vision", "Object Detection", "Facial Recognition", "Visual AI"],
        author: {
            name: "Zion Vision AI",
            id: "zion-vision",
            avatarUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-11T15:20:00.000Z",
        aiScore: 96,
        rating: 4.8,
        reviewCount: 178,
    },
    {
        id: "nlp-platform",
        title: "Natural Language Processing Platform",
        description: "Advanced NLP solutions for sentiment analysis, language translation, chatbots, and document processing automation.",
        category: "Advanced AI",
        price: 89,
        currency: "$",
        tags: ["NLP", "Sentiment Analysis", "Language Translation", "Chatbots"],
        author: {
            name: "Zion NLP Labs",
            id: "zion-nlp",
            avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-12T12:00:00.000Z",
        aiScore: 95,
        rating: 4.9,
        reviewCount: 145,
    },
    
    // Digital Transformation Services
    {
        id: "legacy-modernization",
        title: "Legacy System Modernization",
        description: "Transform outdated systems into modern, cloud-native applications with microservices architecture and API-first design.",
        category: "Digital Transformation",
        price: 399,
        currency: "$",
        tags: ["Legacy Modernization", "Microservices", "Cloud-Native", "API Design"],
        author: {
            name: "Zion Digital Transformation",
            id: "zion-digital",
            avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-13T08:45:00.000Z",
        aiScore: 91,
        rating: 4.6,
        reviewCount: 78,
    },
    {
        id: "api-management",
        title: "API Management & Integration",
        description: "Comprehensive API development, management, and integration services for seamless system connectivity and data flow.",
        category: "Digital Transformation",
        price: 69,
        currency: "$",
        tags: ["API Management", "System Integration", "Data Flow", "Connectivity"],
        author: {
            name: "Zion API Solutions",
            id: "zion-api",
            avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-14T11:30:00.000Z",
        aiScore: 93,
        rating: 4.7,
        reviewCount: 112,
    },
    
    // Compliance & Governance
    {
        id: "gdpr-compliance",
        title: "GDPR & Data Privacy Compliance",
        description: "Complete GDPR compliance solutions including data mapping, privacy impact assessments, and automated compliance monitoring.",
        category: "Compliance",
        price: 179,
        currency: "$",
        tags: ["GDPR", "Data Privacy", "Compliance Monitoring", "Privacy Impact"],
        author: {
            name: "Zion Compliance",
            id: "zion-compliance",
            avatarUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-15T14:15:00.000Z",
        aiScore: 94,
        rating: 4.8,
        reviewCount: 89,
    },
    {
        id: "soc2-compliance",
        title: "SOC2 Type II Compliance",
        description: "SOC2 Type II certification services including security controls, monitoring, and continuous compliance management.",
        category: "Compliance",
        price: 299,
        currency: "$",
        tags: ["SOC2", "Security Controls", "Compliance Management", "Certification"],
        author: {
            name: "Zion Security Compliance",
            id: "zion-security-compliance",
            avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-16T09:00:00.000Z",
        aiScore: 96,
        rating: 4.9,
        reviewCount: 67,
    },
    
    // Performance & Monitoring
    {
        id: "apm-platform",
        title: "Application Performance Monitoring",
        description: "Real-time application performance monitoring, error tracking, and performance optimization for web and mobile applications.",
        category: "Performance",
        price: 49,
        currency: "$",
        tags: ["APM", "Performance Monitoring", "Error Tracking", "Optimization"],
        author: {
            name: "Zion Performance",
            id: "zion-performance",
            avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-17T13:45:00.000Z",
        aiScore: 92,
        rating: 4.7,
        reviewCount: 134,
    },
    {
        id: "observability-platform",
        title: "Full-Stack Observability",
        description: "Comprehensive observability platform with distributed tracing, metrics collection, and intelligent alerting for modern applications.",
        category: "Performance",
        price: 79,
        currency: "$",
        tags: ["Observability", "Distributed Tracing", "Metrics Collection", "Intelligent Alerting"],
        author: {
            name: "Zion Observability",
            id: "zion-observability",
            avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-18T10:30:00.000Z",
        aiScore: 93,
        rating: 4.8,
        reviewCount: 98,
    },
    
    // Data Services
    {
        id: "data-engineering",
        title: "Data Engineering Platform",
        description: "End-to-end data engineering solutions including ETL pipelines, data lakes, real-time streaming, and data quality management.",
        category: "Data Services",
        price: 159,
        currency: "$",
        tags: ["Data Engineering", "ETL Pipelines", "Data Lakes", "Real-time Streaming"],
        author: {
            name: "Zion Data Engineering",
            id: "zion-data-engineering",
            avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-19T11:15:00.000Z",
        aiScore: 95,
        rating: 4.8,
        reviewCount: 167,
    },
    {
        id: "real-time-analytics",
        title: "Real-Time Analytics Platform",
        description: "Real-time data processing, streaming analytics, and instant insights for time-sensitive business decisions and operations.",
        category: "Data Services",
        price: 119,
        currency: "$",
        tags: ["Real-time Analytics", "Streaming Analytics", "Instant Insights", "Time-sensitive"],
        author: {
            name: "Zion Real-time Analytics",
            id: "zion-realtime",
            avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-20T15:20:00.000Z",
        aiScore: 94,
        rating: 4.7,
        reviewCount: 89,
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
    { label: 'Emerging Tech', value: 'emerging-tech' },
    { label: 'Healthcare', value: 'healthcare' },
    { label: 'Finance', value: 'finance' },
    { label: 'Education', value: 'education' },
    { label: 'Advanced AI', value: 'advanced-ai' },
    { label: 'Digital Transformation', value: 'digital-transformation' },
    { label: 'Compliance', value: 'compliance' },
    { label: 'Performance', value: 'performance' },
    { label: 'Data Services', value: 'data-services' },
    { label: 'Development', value: 'development' },
    { label: 'Management', value: 'management' },
    { label: 'Security', value: 'security' },
    { label: 'Analytics', value: 'analytics' },
    { label: 'Consulting', value: 'consulting' },
    { label: 'Strategy', value: 'strategy' },
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
      <SEO title="IT & AI Services - Zion Tech Group" description="Find expert technology service providers for your business needs, from AI development to infrastructure management." keywords="IT services, AI services, technology consulting, Zion Tech Group" url="https://ziontechgroup.com/services"/>
      
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
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zion-blue mb-4">Comprehensive IT & AI Services</h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
            Discover cutting-edge technology solutions across 20+ categories. From AI-powered applications to emerging technologies like blockchain and quantum computing, 
            we provide enterprise-grade services with competitive pricing and proven results. All services include expert consultation, implementation support, and ongoing maintenance.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-zion-slate-light">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-zion-cyan rounded-full"></span>
              20+ Service Categories
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-zion-purple rounded-full"></span>
              Enterprise-Grade Solutions
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-zion-blue rounded-full"></span>
              Competitive Pricing
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Expert Support
            </span>
          </div>
        </div>

        {/* Service Categories Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zion-blue mb-6 text-center">Service Categories Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-zion-blue to-zion-blue-dark p-6 rounded-lg text-white">
              <h3 className="text-lg font-semibold mb-3">AI & Machine Learning</h3>
              <p className="text-sm opacity-90 mb-4">Advanced AI solutions for content generation, analytics, and automation</p>
              <div className="text-xs opacity-75">Starting from $19/month</div>
            </div>
            <div className="bg-gradient-to-br from-zion-purple to-zion-purple-dark p-6 rounded-lg text-white">
              <h3 className="text-lg font-semibold mb-3">Emerging Technologies</h3>
              <p className="text-sm opacity-90 mb-4">Blockchain, IoT, and quantum computing solutions</p>
              <div className="text-xs opacity-75">Starting from $69/month</div>
            </div>
            <div className="bg-gradient-to-br from-zion-cyan to-blue-600 p-6 rounded-lg text-white">
              <h3 className="text-lg font-semibold mb-3">Industry Solutions</h3>
              <p className="text-sm opacity-90 mb-4">Healthcare, finance, and education-specific AI platforms</p>
              <div className="text-xs opacity-75">Starting from $79/month</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-700 p-6 rounded-lg text-white">
              <h3 className="text-lg font-semibold mb-3">Compliance & Security</h3>
              <p className="text-sm opacity-90 mb-4">GDPR, SOC2, and cybersecurity compliance services</p>
              <div className="text-xs opacity-75">Starting from $99/month</div>
            </div>
          </div>
        </div>

        {/* Why Choose Zion Tech Group */}
        <div className="mb-12 bg-gradient-to-r from-zinc-50 to-zinc-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-zion-blue mb-6 text-center">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zion-blue mb-2">Cutting-Edge Technology</h3>
              <p className="text-zion-slate-light">Latest AI, blockchain, and emerging tech solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zion-blue mb-2">Enterprise-Grade Quality</h3>
              <p className="text-zion-slate-light">Professional solutions with proven track records</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zion-blue mb-2">Expert Support Team</h3>
              <p className="text-zion-slate-light">24/7 technical support and consultation</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((service) => (<div key={service.id} className="bg-white rounded-lg shadow-lg p-6 border border-zion-blue-light">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-zion-blue mb-2">{service.title}</h3>
                <p className="text-zion-slate-light">{service.description}</p>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-zion-purple">
                  ${service.price?.toLocaleString()}
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="font-medium">{service.rating}</span>
                  <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 3).map((tag, index) => (<span key={index} className="px-2 py-1 bg-zion-blue/10 text-zion-blue text-xs rounded-full">
                    {tag}
                  </span>))}
              </div>

              <Link to="/contact">
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  Get Quote
                </Button>
              </Link>
            </div>))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-gradient-to-r from-zion-blue to-zion-blue-dark p-8 rounded-lg text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
            Get started with our cutting-edge technology solutions today. Our expert team is ready to help you choose the right services and implement them successfully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-zion-blue hover:bg-zinc-100 px-8 py-3 text-lg">
                Get Free Consultation
              </Button>
            </Link>
            <a href="tel:+13024640950" className="inline-flex items-center gap-2 bg-zion-cyan text-white px-8 py-3 rounded-lg hover:bg-zion-cyan-dark transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: +1 302 464 0950
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-zion-blue mb-6 text-center">Contact Zion Tech Group</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zion-blue mb-2">Phone</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
              <p className="text-sm text-zion-slate-light">Available 24/7</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zion-blue mb-2">Email</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              <p className="text-sm text-zion-slate-light">Quick response guaranteed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-zion-blue mb-2">Address</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008</p>
              <p className="text-zion-slate-light">Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </div>);
}

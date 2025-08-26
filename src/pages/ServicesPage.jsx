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
        features: ["Multi-language support", "SEO optimization", "Brand voice customization", "API access"],
        benefits: ["Save 80% time on content creation", "Improve SEO rankings", "Maintain consistent brand voice", "Scale content production"],
        marketPrice: "$29-99/month",
        website: "https://ziontechgroup.com/ai-content-generator"
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
        features: ["Contract analysis", "Risk assessment", "Compliance monitoring", "Legal research automation"],
        benefits: ["Reduce legal review time by 70%", "Improve accuracy", "Lower legal costs", "Ensure compliance"],
        marketPrice: "$149-299/month",
        website: "https://ziontechgroup.com/ai-legal-review"
    },
    
    // New Innovative Micro SAAS Services
    {
        id: "quantum-computing-simulator",
        title: "Quantum Computing Simulator Pro",
        description: "Advanced quantum computing simulation platform for researchers, developers, and educational institutions. Support for multiple quantum algorithms and real-time visualization.",
        category: "Quantum Tech",
        price: 199,
        currency: "$",
        tags: ["Quantum Computing", "Simulation", "Research", "Education"],
        author: {
            name: "Zion Quantum Labs",
            id: "zion-quantum-labs",
            avatarUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-30T09:00:00.000Z",
        aiScore: 96,
        rating: 4.9,
        reviewCount: 45,
        features: ["Multi-qubit simulation", "Algorithm library", "Real-time visualization", "Educational modules"],
        benefits: ["Accelerate quantum research", "Reduce hardware costs", "Educational excellence", "Algorithm optimization"],
        marketPrice: "$199-499/month",
        website: "https://ziontechgroup.com/quantum-simulator"
    },
    
    {
        id: "blockchain-dex-platform",
        title: "Decentralized Exchange Platform",
        description: "Complete DEX solution with advanced trading features, liquidity pools, and cross-chain compatibility. Built for DeFi protocols and crypto projects.",
        category: "Blockchain",
        price: 399,
        currency: "$",
        tags: ["DeFi", "DEX", "Liquidity Pools", "Cross-chain"],
        author: {
            name: "Zion Blockchain",
            id: "zion-blockchain",
            avatarUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-01T14:30:00.000Z",
        aiScore: 94,
        rating: 4.8,
        reviewCount: 78,
        features: ["Multi-chain support", "Liquidity management", "Advanced trading tools", "Security audits"],
        benefits: ["Launch DEX in days", "Reduce development costs", "Enhanced security", "Scalable infrastructure"],
        marketPrice: "$399-999/month",
        website: "https://ziontechgroup.com/dex-platform"
    },
    
    {
        id: "iot-platform-enterprise",
        title: "Enterprise IoT Management Platform",
        description: "Comprehensive IoT solution for enterprise deployment, monitoring, and analytics. Device management, data collection, and predictive maintenance.",
        category: "IoT & Edge",
        price: 299,
        currency: "$",
        tags: ["IoT", "Device Management", "Predictive Maintenance", "Enterprise"],
        author: {
            name: "Zion IoT Solutions",
            id: "zion-iot-solutions",
            avatarUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-28T11:15:00.000Z",
        aiScore: 92,
        rating: 4.7,
        reviewCount: 156,
        features: ["Device provisioning", "Real-time monitoring", "Predictive analytics", "Security protocols"],
        benefits: ["Reduce operational costs", "Improve efficiency", "Prevent downtime", "Data-driven insights"],
        marketPrice: "$299-799/month",
        website: "https://ziontechgroup.com/iot-platform"
    },
    
    {
        id: "ai-video-production",
        title: "AI Video Production Suite",
        description: "Professional video creation platform powered by AI. Generate videos from text, edit with AI assistance, and create engaging content automatically.",
        category: "AI & ML",
        price: 79,
        currency: "$",
        tags: ["Video Production", "AI Generation", "Content Creation", "Automation"],
        author: {
            name: "Zion Media AI",
            id: "zion-media-ai",
            avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-03T16:45:00.000Z",
        aiScore: 95,
        rating: 4.8,
        reviewCount: 234,
        features: ["Text-to-video", "AI editing", "Template library", "Brand customization"],
        benefits: ["Create videos in minutes", "Reduce production costs", "Maintain brand consistency", "Scale content creation"],
        marketPrice: "$79-199/month",
        website: "https://ziontechgroup.com/ai-video-production"
    },
    
    {
        id: "cyber-physical-security",
        title: "Cyber-Physical Security System",
        description: "Integrated cybersecurity and physical security solution for critical infrastructure. AI-powered threat detection, access control, and incident response.",
        category: "Cybersecurity",
        price: 599,
        currency: "$",
        tags: ["Physical Security", "Cybersecurity", "Critical Infrastructure", "AI Detection"],
        author: {
            name: "Zion Security Systems",
            id: "zion-security-systems",
            avatarUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-01-25T13:20:00.000Z",
        aiScore: 93,
        rating: 4.9,
        reviewCount: 89,
        features: ["Integrated monitoring", "AI threat detection", "Access control", "Incident response"],
        benefits: ["Unified security", "Reduce false positives", "Faster response times", "Compliance ready"],
        marketPrice: "$599-1499/month",
        website: "https://ziontechgroup.com/cyber-physical-security"
    },
    
    {
        id: "ai-supply-chain",
        title: "AI Supply Chain Optimization",
        description: "Intelligent supply chain management with predictive analytics, demand forecasting, and automated optimization. Reduce costs and improve efficiency.",
        category: "Business Intelligence",
        price: 249,
        currency: "$",
        tags: ["Supply Chain", "Predictive Analytics", "Optimization", "Automation"],
        author: {
            name: "Zion Supply Chain AI",
            id: "zion-supply-chain-ai",
            avatarUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-02T10:15:00.000Z",
        aiScore: 91,
        rating: 4.7,
        reviewCount: 167,
        features: ["Demand forecasting", "Route optimization", "Inventory management", "Risk assessment"],
        benefits: ["Reduce costs by 25%", "Improve delivery times", "Optimize inventory", "Mitigate risks"],
        marketPrice: "$249-599/month",
        website: "https://ziontechgroup.com/supply-chain-ai"
    },
    
    // More Innovative Services
    {
        id: "ai-drug-discovery",
        title: "AI Drug Discovery Platform",
        description: "Revolutionary AI-powered drug discovery platform for pharmaceutical companies. Accelerate drug development with machine learning and molecular modeling.",
        category: "HealthTech",
        price: 999,
        currency: "$",
        tags: ["Drug Discovery", "AI Research", "Pharmaceuticals", "Molecular Modeling"],
        author: {
            name: "Zion HealthTech",
            id: "zion-healthtech",
            avatarUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-05T08:30:00.000Z",
        aiScore: 97,
        rating: 4.9,
        reviewCount: 34,
        features: ["Molecular modeling", "Drug screening", "Clinical trial optimization", "Regulatory compliance"],
        benefits: ["Accelerate discovery by 10x", "Reduce development costs", "Improve success rates", "Faster time to market"],
        marketPrice: "$999-2999/month",
        website: "https://ziontechgroup.com/ai-drug-discovery"
    },
    
    {
        id: "quantum-cryptography",
        title: "Quantum Cryptography Network",
        description: "Unbreakable quantum cryptography network for ultra-secure communications. Quantum key distribution and post-quantum cryptography solutions.",
        category: "Quantum Tech",
        price: 799,
        currency: "$",
        tags: ["Quantum Cryptography", "Network Security", "Quantum Key Distribution", "Post-Quantum"],
        author: {
            name: "Zion Quantum Security",
            id: "zion-quantum-security",
            avatarUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-04T12:15:00.000Z",
        aiScore: 95,
        rating: 4.8,
        reviewCount: 67,
        features: ["Quantum key distribution", "Post-quantum algorithms", "Network infrastructure", "Security protocols"],
        benefits: ["Unbreakable encryption", "Future-proof security", "Regulatory compliance", "Competitive advantage"],
        marketPrice: "$799-1999/month",
        website: "https://ziontechgroup.com/quantum-cryptography"
    },
    
    {
        id: "ai-climate-modeling",
        title: "AI Climate Modeling & Prediction",
        description: "Advanced AI-powered climate modeling and prediction platform for environmental research and policy making. Real-time data analysis and scenario modeling.",
        category: "Green Tech",
        price: 399,
        currency: "$",
        tags: ["Climate Modeling", "Environmental AI", "Data Analysis", "Policy Support"],
        author: {
            name: "Zion Environmental AI",
            id: "zion-environmental-ai",
            avatarUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-03T15:45:00.000Z",
        aiScore: 93,
        rating: 4.7,
        reviewCount: 89,
        features: ["Climate modeling", "Data visualization", "Scenario analysis", "Policy recommendations"],
        benefits: ["Accurate predictions", "Data-driven decisions", "Policy optimization", "Environmental impact"],
        marketPrice: "$399-899/month",
        website: "https://ziontechgroup.com/climate-modeling"
    },
    
    {
        id: "ai-education-platform",
        title: "AI-Powered Education Platform",
        description: "Personalized learning platform with AI tutors, adaptive curriculum, and intelligent assessment. Revolutionize education for students and institutions.",
        category: "EdTech",
        price: 49,
        currency: "$",
        tags: ["AI Education", "Personalized Learning", "Adaptive Curriculum", "Student Analytics"],
        author: {
            name: "Zion EdTech",
            id: "zion-edtech",
            avatarUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-06T09:20:00.000Z",
        aiScore: 94,
        rating: 4.8,
        reviewCount: 234,
        features: ["AI tutors", "Adaptive learning", "Progress tracking", "Performance analytics"],
        benefits: ["Personalized learning", "Improved outcomes", "Reduced costs", "Scalable education"],
        marketPrice: "$49-149/month",
        website: "https://ziontechgroup.com/ai-education"
    },
    
    {
        id: "ai-government-services",
        title: "AI Government Services Platform",
        description: "Comprehensive AI platform for government agencies. Citizen services automation, fraud detection, and intelligent policy analysis.",
        category: "GovTech",
        price: 1299,
        currency: "$",
        tags: ["Government AI", "Citizen Services", "Fraud Detection", "Policy Analysis"],
        author: {
            name: "Zion GovTech",
            id: "zion-govtech",
            avatarUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-07T11:00:00.000Z",
        aiScore: 92,
        rating: 4.6,
        reviewCount: 45,
        features: ["Service automation", "Fraud detection", "Policy analysis", "Compliance monitoring"],
        benefits: ["Improved efficiency", "Cost reduction", "Better citizen experience", "Enhanced security"],
        marketPrice: "$1299-2999/month",
        website: "https://ziontechgroup.com/govtech-ai"
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
    { label: 'Quantum Tech', value: 'quantum-tech' },
    { label: 'Blockchain', value: 'blockchain' },
    { label: 'IoT & Edge', value: 'iot-edge' },
    { label: 'Green Tech', value: 'green-tech' },
    { label: 'FinTech', value: 'fintech' },
    { label: 'HealthTech', value: 'healthtech' },
    { label: 'EdTech', value: 'edtech' },
    { label: 'GovTech', value: 'govtech' },
];
export default function ServicesPage() {
    const [listings, setListings] = useState(SERVICE_LISTINGS);
    const [filteredListings, setFilteredListings] = useState(SERVICE_LISTINGS);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('newest');

    useEffect(() => {
        const interval = setInterval(() => {
            setListings(prev => [...prev, generateRandomService(prev.length + 1)]);
        }, 120000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let filtered = listings;
        
        // Filter by category
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(service => 
                service.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
            );
        }
        
        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(service =>
                service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }
        
        // Sort results
        switch (sortBy) {
            case 'price-low':
                filtered = [...filtered].sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered = [...filtered].sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered = [...filtered].sort((a, b) => b.rating - a.rating);
                break;
            case 'ai-score':
                filtered = [...filtered].sort((a, b) => b.aiScore - a.aiScore);
                break;
            case 'newest':
            default:
                filtered = [...filtered].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                break;
        }
        
        setFilteredListings(filtered);
    }, [listings, selectedCategory, searchTerm, sortBy]);

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
          <h1 className="text-4xl font-bold text-zion-blue mb-4">IT & AI Services</h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Find expert technology service providers for your business needs, from AI development to infrastructure management.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-zion-blue mb-2">Search Services</label>
              <input
                type="text"
                placeholder="Search by name, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-zion-cyan/20 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent bg-white/50 backdrop-blur-sm"
              />
            </div>
            
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-zion-blue mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-zion-cyan/20 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent bg-white/50 backdrop-blur-sm"
              >
                <option value="all">All Categories</option>
                {SERVICE_FILTERS.map(filter => (
                  <option key={filter.value} value={filter.value}>
                    {filter.label}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-zion-blue mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-zion-cyan/20 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent bg-white/50 backdrop-blur-sm"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="ai-score">Highest AI Score</option>
              </select>
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mt-4 pt-4 border-t border-zion-cyan/20">
            <p className="text-sm text-zion-slate-light">
              Showing {filteredListings.length} of {listings.length} services
            </p>
          </div>
        </div>

                {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((service) => (
              <div key={service.id} className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-6 border border-zion-cyan/20 hover:border-zion-purple/40 transition-all duration-300 hover:shadow-zion-purple/25 group">
                {/* Service Image */}
                {service.images && service.images[0] && (
                  <div className="mb-4 relative overflow-hidden rounded-lg">
                    <img 
                      src={service.images[0]} 
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-zion-cyan text-black px-2 py-1 rounded-full text-xs font-bold">
                      AI Score: {service.aiScore}
                    </div>
                  </div>
                )}
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-zion-blue/10 text-zion-blue text-xs font-medium rounded-full">
                      {service.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium text-sm">{service.rating}</span>
                      <span className="text-zion-slate-light text-xs">({service.reviewCount})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-zion-blue mb-2 group-hover:text-zion-purple transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                </div>
                
                {/* Features */}
                {service.features && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Benefits */}
                {service.benefits && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-zion-slate-light">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Pricing and Market Info */}
                <div className="mb-4 p-3 bg-gradient-to-r from-zion-blue/5 to-zion-purple/5 rounded-lg border border-zion-cyan/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-2xl font-bold text-zion-purple">
                      ${service.price?.toLocaleString()}
                    </div>
                    {service.marketPrice && (
                      <div className="text-xs text-zion-slate-light">
                        Market: {service.marketPrice}
                      </div>
                    )}
                  </div>
                  {service.website && (
                    <a 
                      href={service.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-zion-cyan hover:text-zion-purple transition-colors underline"
                    >
                      Visit Website →
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-zion-blue/10 text-zion-blue text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Link to="/contact" className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white transition-all duration-300 hover:scale-105">
                      Get Quote
                    </Button>
                  </Link>
                  {service.website && (
                    <a 
                      href={service.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors duration-300 text-sm font-medium"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-zion-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-zion-blue mb-2">No Services Found</h3>
            <p className="text-zion-slate-light mb-6">
              Try adjusting your search criteria or browse all our services.
            </p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSortBy('newest');
              }}
              className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>);
}

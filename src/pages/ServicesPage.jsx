import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Zap, Shield, Cloud, Brain, Database, Users, Code, Lock, Rocket } from "lucide-react";
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
        features: ["100+ AI Models", "Multi-language Support", "API Integration", "Real-time Generation"],
        benefits: ["10x faster content creation", "SEO optimized output", "Brand voice consistency", "24/7 availability"]
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
        features: ["AI Background Removal", "Smart Object Detection", "Batch Processing", "4K Video Support"],
        benefits: ["Professional quality results", "Time-saving automation", "No design skills required", "Cloud-based processing"]
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
        features: ["50+ Language Support", "VS Code Integration", "GitHub Copilot Alternative", "Custom Model Training"],
        benefits: ["3x faster coding", "Fewer bugs", "Learning assistance", "Team collaboration"]
    },
    // NEW: Advanced AI Services
    {
        id: "ai-voice-cloning",
        title: "AI Voice Cloning Studio",
        description: "Professional voice cloning and text-to-speech with natural intonation and emotion. Perfect for content creators, audiobooks, and marketing campaigns.",
        category: "AI & ML",
        price: 49,
        currency: "$",
        tags: ["Voice Cloning", "Text-to-Speech", "Audio Generation", "Voice Synthesis"],
        author: {
            name: "Zion Voice AI",
            id: "zion-voice-ai",
            avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-01T11:00:00.000Z",
        aiScore: 96,
        rating: 4.8,
        reviewCount: 67,
        features: ["Natural Voice Synthesis", "Emotion Control", "Multi-language Support", "Real-time Processing"],
        benefits: ["Studio-quality audio", "Unlimited voice variations", "Cost-effective production", "Rapid content creation"]
    },
    {
        id: "ai-3d-generation",
        title: "AI 3D Model Generator",
        description: "Generate stunning 3D models from text descriptions or 2D images. Perfect for game developers, architects, and product designers.",
        category: "AI & ML",
        price: 79,
        currency: "$",
        tags: ["3D Generation", "Text-to-3D", "Model Optimization", "Export Formats"],
        author: {
            name: "Zion 3D Labs",
            id: "zion-3d-labs",
            avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-05T14:20:00.000Z",
        aiScore: 94,
        rating: 4.7,
        reviewCount: 89,
        features: ["Text-to-3D Generation", "Image-to-3D Conversion", "Multiple Export Formats", "Texture Generation"],
        benefits: ["Instant 3D creation", "No modeling skills needed", "Professional quality", "Rapid prototyping"]
    },
    // NEW: Quantum Computing Services
    {
        id: "quantum-simulation",
        title: "Quantum Simulation Platform",
        description: "Access to quantum computing resources for complex simulations, optimization problems, and research applications. Cloud-based quantum computing as a service.",
        category: "Quantum Computing",
        price: 299,
        currency: "$",
        tags: ["Quantum Computing", "Simulation", "Optimization", "Research Platform"],
        author: {
            name: "Zion Quantum",
            id: "zion-quantum",
            avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-08T09:30:00.000Z",
        aiScore: 99,
        rating: 4.9,
        reviewCount: 45,
        features: ["IBM Q Access", "Google Quantum", "Custom Algorithms", "Research Support"],
        benefits: ["Cutting-edge technology", "Research acceleration", "Competitive advantage", "Expert consultation"]
    },
    // NEW: Blockchain & Web3 Services
    {
        id: "smart-contract-audit",
        title: "Smart Contract Security Audit",
        description: "Comprehensive security audits for smart contracts and DeFi protocols. Automated testing, manual review, and vulnerability assessment.",
        category: "Blockchain & Web3",
        price: 199,
        currency: "$",
        tags: ["Smart Contracts", "Security Audit", "DeFi Security", "Vulnerability Assessment"],
        author: {
            name: "Zion Blockchain Security",
            id: "zion-blockchain",
            avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-10T16:15:00.000Z",
        aiScore: 95,
        rating: 4.8,
        reviewCount: 78,
        features: ["Automated Testing", "Manual Code Review", "Vulnerability Database", "Compliance Reports"],
        benefits: ["Risk mitigation", "Investor confidence", "Regulatory compliance", "Cost savings"]
    },
    // NEW: IoT & Edge Computing
    {
        id: "iot-platform",
        title: "IoT Device Management Platform",
        description: "Comprehensive IoT device management, monitoring, and analytics platform. Real-time data collection, device provisioning, and predictive maintenance.",
        category: "IoT & Edge",
        price: 89,
        currency: "$",
        tags: ["IoT Management", "Device Monitoring", "Data Analytics", "Predictive Maintenance"],
        author: {
            name: "Zion IoT Solutions",
            id: "zion-iot",
            avatarUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1545997331-9d517f5ab3b4?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-12T11:45:00.000Z",
        aiScore: 92,
        rating: 4.6,
        reviewCount: 134,
        features: ["Device Provisioning", "Real-time Monitoring", "Data Visualization", "Alert System"],
        benefits: ["Operational efficiency", "Predictive insights", "Cost reduction", "Scalable infrastructure"]
    },
    // NEW: AR/VR Services
    {
        id: "ar-vr-development",
        title: "AR/VR Development Studio",
        description: "Custom augmented and virtual reality applications for enterprise, education, and entertainment. Cross-platform development and deployment.",
        category: "AR/VR",
        price: 149,
        currency: "$",
        tags: ["AR Development", "VR Development", "Cross-platform", "Enterprise Solutions"],
        author: {
            name: "Zion Immersive Tech",
            id: "zion-immersive",
            avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-15T13:20:00.000Z",
        aiScore: 93,
        rating: 4.7,
        reviewCount: 67,
        features: ["Unity Development", "Unreal Engine", "Mobile AR", "Enterprise VR"],
        benefits: ["Immersive experiences", "Training solutions", "Marketing innovation", "Competitive advantage"]
    },
    // NEW: FinTech Services
    {
        id: "ai-trading-bot",
        title: "AI Trading Bot Platform",
        description: "Intelligent algorithmic trading bots with machine learning capabilities. Risk management, portfolio optimization, and automated trading strategies.",
        category: "FinTech",
        price: 199,
        currency: "$",
        tags: ["Algorithmic Trading", "Risk Management", "Portfolio Optimization", "Machine Learning"],
        author: {
            name: "Zion FinTech",
            id: "zion-fintech",
            avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-18T10:30:00.000Z",
        aiScore: 96,
        rating: 4.8,
        reviewCount: 89,
        features: ["Multiple Strategies", "Risk Controls", "Real-time Analytics", "API Integration"],
        benefits: ["Automated trading", "Risk reduction", "24/7 operation", "Performance optimization"]
    },
    // NEW: Green Tech Services
    {
        id: "carbon-tracking",
        title: "Carbon Footprint Tracker",
        description: "AI-powered carbon footprint tracking and sustainability analytics for businesses and individuals. Real-time monitoring and reduction recommendations.",
        category: "Green Tech",
        price: 39,
        currency: "$",
        tags: ["Carbon Tracking", "Sustainability", "Environmental Impact", "Green Analytics"],
        author: {
            name: "Zion Green Tech",
            id: "zion-green",
            avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
        },
        images: ["https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500"],
        createdAt: "2024-02-20T15:45:00.000Z",
        aiScore: 91,
        rating: 4.6,
        reviewCount: 156,
        features: ["Real-time Tracking", "AI Recommendations", "Sustainability Reports", "Goal Setting"],
        benefits: ["Environmental impact", "Cost savings", "Regulatory compliance", "Brand reputation"]
    },
    // NEW: Cybersecurity Services
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
        features: ["Real-time Monitoring", "AI Analysis", "Instant Alerts", "Automated Response"],
        benefits: ["24/7 protection", "Reduced response time", "Cost savings", "Peace of mind"]
    },
    // ... existing services continue ...
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
        features: ["Identity Verification", "Network Segmentation", "Continuous Monitoring", "Compliance Tools"],
        benefits: ["Enhanced security", "Regulatory compliance", "Risk reduction", "Trust building"]
    },
    // ... continue with existing services but enhanced ...
];

// Enhanced filter options for all service categories
const SERVICE_FILTERS = [
    { label: 'AI & ML', value: 'ai-ml', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { label: 'Quantum Computing', value: 'quantum', icon: Zap, color: 'from-blue-500 to-cyan-500' },
    { label: 'Blockchain & Web3', value: 'blockchain', icon: Lock, color: 'from-green-500 to-emerald-500' },
    { label: 'IoT & Edge', value: 'iot', icon: Cloud, color: 'from-orange-500 to-red-500' },
    { label: 'AR/VR', value: 'ar-vr', icon: Users, color: 'from-indigo-500 to-purple-500' },
    { label: 'FinTech', value: 'fintech', icon: Database, color: 'from-yellow-500 to-orange-500' },
    { label: 'Green Tech', value: 'green-tech', icon: Shield, color: 'from-green-400 to-teal-500' },
    { label: 'Cybersecurity', value: 'cybersecurity', icon: Lock, color: 'from-red-500 to-pink-500' },
    { label: 'Cloud & Infrastructure', value: 'cloud-infrastructure', icon: Cloud, color: 'from-blue-400 to-indigo-500' },
    { label: 'Business Intelligence', value: 'business-intelligence', icon: Database, color: 'from-purple-400 to-blue-500' },
    { label: 'Communication', value: 'communication', icon: Users, color: 'from-teal-500 to-green-500' },
    { label: 'Specialized Tools', value: 'specialized-tools', icon: Code, color: 'from-gray-500 to-slate-500' },
];

export default function ServicesPage() {
    const [listings, setListings] = useState(SERVICE_LISTINGS);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredServices = listings.filter(service => {
        const matchesCategory = selectedCategory === 'all' || 
            service.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
        const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const getCategoryIcon = (categoryValue) => {
        const filter = SERVICE_FILTERS.find(f => f.value === categoryValue);
        return filter ? filter.icon : Globe;
    };

    const getCategoryColor = (categoryValue) => {
        const filter = SERVICE_FILTERS.find(f => f.value === categoryValue);
        return filter ? filter.color : 'from-gray-500 to-slate-500';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
            <SEO 
                title="Innovative IT & AI Services - Zion Tech Group" 
                description="Discover cutting-edge micro SAAS services, AI solutions, quantum computing, blockchain, and more. Transform your business with Zion Tech Group's innovative technology services." 
                keywords="AI services, quantum computing, blockchain, IoT, AR/VR, FinTech, cybersecurity, Zion Tech Group" 
                url="https://ziontechgroup.com/services"
            />
            
            {/* Futuristic Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-purple to-zion-cyan py-20">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan/30 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/30 rounded-full animate-pulse-slow"></div>
                    <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan/20 rounded-full animate-float"></div>
                </div>
                
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                        Innovative <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent animate-neon-text-glow">Tech Services</span>
                    </h1>
                    <p className="text-xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
                        Discover cutting-edge micro SAAS services, AI solutions, quantum computing, blockchain, and more. 
                        Transform your business with our innovative technology services.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg shadow-zion-cyan/25">
                                <Rocket className="w-5 h-5 mr-2" />
                                Get Started
                            </Button>
                        </Link>
                        <Link to="/about">
                            <Button variant="outline" className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Enhanced Search and Filters */}
            <div className="bg-zion-blue-dark/50 backdrop-blur-sm border-b border-zion-cyan/20 py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-md">
                            <input
                                type="text"
                                placeholder="Search services..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-3 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* Category Filters */}
                        <div className="flex flex-wrap gap-3">
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                    selectedCategory === 'all'
                                        ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg'
                                        : 'bg-white/10 text-zion-slate-light hover:bg-white/20 border border-zion-cyan/30'
                                }`}
                            >
                                All Services
                            </button>
                            {SERVICE_FILTERS.map((filter) => {
                                const Icon = filter.icon;
                                return (
                                    <button
                                        key={filter.value}
                                        onClick={() => setSelectedCategory(filter.value)}
                                        className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                                            selectedCategory === filter.value
                                                ? `bg-gradient-to-r ${filter.color} text-white shadow-lg`
                                                : 'bg-white/10 text-zion-slate-light hover:bg-white/20 border border-zion-cyan/30'
                                        }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {filter.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredServices.map((service) => {
                        const CategoryIcon = getCategoryIcon(service.category.toLowerCase().replace(/\s+/g, '-'));
                        const categoryColor = getCategoryColor(service.category.toLowerCase().replace(/\s+/g, '-'));
                        
                        return (
                            <div key={service.id} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 p-6 hover:border-zion-cyan/40 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/10">
                                {/* Service Image */}
                                <div className="relative mb-4 overflow-hidden rounded-lg">
                                    <img 
                                        src={service.images[0]} 
                                        alt={service.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-2 right-2">
                                        <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColor} text-white flex items-center gap-1`}>
                                            <CategoryIcon className="w-3 h-3" />
                                            {service.category}
                                        </div>
                                    </div>
                                </div>

                                {/* Service Content */}
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-zion-slate-light text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Features & Benefits */}
                                {service.features && (
                                    <div className="mb-4">
                                        <h4 className="text-sm font-medium text-zion-cyan mb-2">Key Features:</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {service.features.slice(0, 3).map((feature, index) => (
                                                <span key={index} className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Pricing & Rating */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-2xl font-bold text-zion-purple">
                                        {service.currency}{service.price?.toLocaleString()}
                                        <span className="text-sm text-zion-slate-light font-normal">/month</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="text-yellow-500">★</span>
                                        <span className="font-medium text-white">{service.rating}</span>
                                        <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {service.tags.slice(0, 3).map((tag, index) => (
                                        <span key={index} className="px-2 py-1 bg-zion-blue/10 text-zion-cyan text-xs rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <Link to="/contact">
                                    <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-purple hover:to-zion-cyan text-white font-medium py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* No Results Message */}
                {filteredServices.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-zion-slate-light text-lg mb-4">No services found matching your criteria</div>
                        <Button 
                            onClick={() => {
                                setSelectedCategory('all');
                                setSearchQuery('');
                            }}
                            className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white"
                        >
                            View All Services
                        </Button>
                    </div>
                )}
            </div>

            {/* Enhanced CTA Section */}
            <div className="bg-gradient-to-r from-zion-purple via-zion-blue to-zion-cyan py-16 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-purple/20 via-zion-blue/20 to-zion-cyan/20"></div>
                    <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full animate-float"></div>
                    <div className="absolute bottom-20 left-20 w-24 h-24 border border-white/20 rounded-full animate-pulse-slow"></div>
                </div>
                
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto">
                        Join thousands of businesses already leveraging our innovative technology services. 
                        Get started today and stay ahead of the competition.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg">
                                <Rocket className="w-5 h-5 mr-2" />
                                Contact Us Today
                            </Button>
                        </Link>
                        <Link to="/about">
                            <Button variant="outline" className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-all">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

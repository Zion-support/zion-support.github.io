import React from 'react';
import { SEO } from "@/components/SEO";
import { Brain, Shield, Database, TrendingUp, Cpu, Zap, Globe, MessageSquare, BarChart3, FileText, CheckCircle, Star, Phone, Mail, MapPin, ExternalLink, Lock, Wifi, Server, Smartphone, Code, Monitor, Users, Target, Rocket, Lightbulb, Eye, Shield as ShieldIcon, Database as DatabaseIcon, TrendingUp as TrendingUpIcon, Cpu as CpuIcon, Zap as ZapIcon, Globe as GlobeIcon, MessageSquare as MessageSquareIcon, BarChart3 as BarChart3Icon, FileText as FileTextIcon, CheckCircle as CheckCircleIcon, Star as StarIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, ExternalLink as ExternalLinkIcon, Lock as LockIcon, Wifi as WifiIcon, Server as ServerIcon, Smartphone as SmartphoneIcon, Code as CodeIcon, Monitor as MonitorIcon, Users as UsersIcon, Target as TargetIcon, Rocket as RocketIcon, Lightbulb as LightbulbIcon, Eye as EyeIcon } from 'lucide-react';

const AIServices = () => {
    const aiServices = [
        {
            id: "ai-strategy",
            title: "AI Strategy & Consulting",
            description: "Comprehensive AI strategy development and implementation for digital transformation.",
            icon: <Brain className="h-8 w-8 text-pink-500"/>,
            price: 150,
            currency: "$",
            features: [
                "AI Roadmap Planning",
                "Technology Assessment",
                "ROI Analysis",
                "Implementation Strategy",
                "Change Management",
                "Training Programs"
            ],
            category: "Strategy",
            badge: "Foundation",
            link: "https://ziontechgroup.com/ai-strategy",
            details: "Strategic AI consulting to align artificial intelligence with your business objectives and drive measurable results.",
            pricing: {
                starter: "$150/hour",
                professional: "$250/hour",
                enterprise: "$350/hour"
            },
            freeTrial: "1-hour consultation",
            rating: 4.9,
            reviewCount: 156
        },
        {
            id: "machine-learning",
            title: "Machine Learning Solutions",
            description: "Custom ML models and algorithms for business automation and predictive analytics.",
            icon: <Cpu className="h-8 w-8 text-blue-500"/>,
            price: 5000,
            currency: "$",
            features: [
                "Custom ML Models",
                "Data Preprocessing",
                "Model Training",
                "Performance Optimization",
                "API Integration",
                "Continuous Learning"
            ],
            category: "ML",
            badge: "Core",
            link: "https://ziontechgroup.com/machine-learning",
            details: "End-to-end machine learning solutions from data preparation to model deployment and maintenance.",
            pricing: {
                starter: "$5,000 - $15,000",
                professional: "$15,000 - $50,000",
                enterprise: "$50,000 - $200,000"
            },
            freeTrial: "Proof of concept",
            rating: 4.8,
            reviewCount: 234
        },
        {
            id: "natural-language-processing",
            title: "NLP & Text Analytics",
            description: "Advanced natural language processing for document analysis, chatbots, and content generation.",
            icon: <MessageSquare className="h-8 w-8 text-green-500"/>,
            price: 8000,
            currency: "$",
            features: [
                "Text Classification",
                "Sentiment Analysis",
                "Entity Recognition",
                "Language Translation",
                "Content Generation",
                "Chatbot Development"
            ],
            category: "NLP",
            badge: "Advanced",
            link: "https://ziontechgroup.com/nlp-solutions",
            details: "Sophisticated NLP solutions for understanding, analyzing, and generating human language content.",
            pricing: {
                starter: "$8,000 - $25,000",
                professional: "$25,000 - $75,000",
                enterprise: "$75,000 - $250,000"
            },
            freeTrial: "Demo version",
            rating: 4.9,
            reviewCount: 189
        },
        {
            id: "computer-vision",
            title: "Computer Vision & Image AI",
            description: "Visual AI solutions for image recognition, object detection, and video analysis.",
            icon: <Eye className="h-8 w-8 text-purple-500"/>,
            price: 12000,
            currency: "$",
            features: [
                "Image Recognition",
                "Object Detection",
                "Face Recognition",
                "Video Analysis",
                "Quality Control",
                "Security Monitoring"
            ],
            category: "Vision",
            badge: "Innovative",
            link: "https://ziontechgroup.com/computer-vision",
            details: "State-of-the-art computer vision solutions for industrial automation, security, and quality control applications.",
            pricing: {
                starter: "$12,000 - $35,000",
                professional: "$35,000 - $100,000",
                enterprise: "$100,000 - $300,000"
            },
            freeTrial: "Pilot project",
            rating: 4.8,
            reviewCount: 145
        },
        {
            id: "predictive-analytics",
            title: "Predictive Analytics & Forecasting",
            description: "AI-powered predictive models for business forecasting and trend analysis.",
            icon: <TrendingUp className="h-8 w-8 text-orange-500"/>,
            price: 6000,
            currency: "$",
            features: [
                "Demand Forecasting",
                "Risk Assessment",
                "Trend Analysis",
                "Anomaly Detection",
                "Scenario Planning",
                "Real-time Predictions"
            ],
            category: "Analytics",
            badge: "Insightful",
            link: "https://ziontechgroup.com/predictive-analytics",
            details: "Advanced predictive analytics helping businesses make data-driven decisions and anticipate future trends.",
            pricing: {
                starter: "$6,000 - $20,000",
                professional: "$20,000 - $60,000",
                enterprise: "$60,000 - $180,000"
            },
            freeTrial: "30-day trial",
            rating: 4.7,
            reviewCount: 198
        },
        {
            id: "ai-automation",
            title: "AI Process Automation",
            description: "Intelligent automation solutions for business process optimization and workflow management.",
            icon: <Zap className="h-8 w-8 text-yellow-500"/>,
            price: 4000,
            currency: "$",
            features: [
                "Workflow Automation",
                "Document Processing",
                "Data Entry Automation",
                "Decision Automation",
                "Process Optimization",
                "Integration APIs"
            ],
            category: "Automation",
            badge: "Efficient",
            link: "https://ziontechgroup.com/ai-automation",
            details: "Intelligent process automation reducing manual work and improving operational efficiency across your organization.",
            pricing: {
                starter: "$4,000 - $15,000",
                professional: "$15,000 - $45,000",
                enterprise: "$45,000 - $150,000"
            },
            freeTrial: "Process assessment",
            rating: 4.8,
            reviewCount: 267
        },
        {
            id: "ai-ethics",
            title: "AI Ethics & Governance",
            description: "Responsible AI development and governance frameworks for ethical AI deployment.",
            icon: <Shield className="h-8 w-8 text-red-500"/>,
            price: 200,
            currency: "$",
            features: [
                "Ethics Framework",
                "Bias Detection",
                "Transparency Tools",
                "Compliance Audits",
                "Training Programs",
                "Monitoring Systems"
            ],
            category: "Ethics",
            badge: "Responsible",
            link: "https://ziontechgroup.com/ai-ethics",
            details: "Comprehensive AI ethics and governance solutions ensuring responsible and transparent AI deployment.",
            pricing: {
                starter: "$200/hour",
                professional: "$300/hour",
                enterprise: "$400/hour"
            },
            freeTrial: "Ethics assessment",
            rating: 4.9,
            reviewCount: 89
        },
        {
            id: "ai-infrastructure",
            title: "AI Infrastructure & MLOps",
            description: "Scalable AI infrastructure and machine learning operations for enterprise AI deployment.",
            icon: <Server className="h-8 w-8 text-indigo-500"/>,
            price: 15000,
            currency: "$",
            features: [
                "ML Pipeline Automation",
                "Model Versioning",
                "Scalable Infrastructure",
                "Monitoring & Alerting",
                "Performance Optimization",
                "Security & Compliance"
            ],
            category: "Infrastructure",
            badge: "Enterprise",
            link: "https://ziontechgroup.com/ai-infrastructure",
            details: "Enterprise-grade AI infrastructure and MLOps solutions for scalable and reliable AI model deployment.",
            pricing: {
                starter: "$15,000 - $50,000",
                professional: "$50,000 - $150,000",
                enterprise: "$150,000 - $500,000"
            },
            freeTrial: "Infrastructure audit",
            rating: 4.8,
            reviewCount: 134
        },
        {
            id: "ai-integration",
            title: "AI Integration Services",
            description: "Seamless integration of AI solutions with existing business systems and workflows.",
            icon: <Code className="h-8 w-8 text-cyan-500"/>,
            price: 3000,
            currency: "$",
            features: [
                "API Development",
                "System Integration",
                "Data Pipeline Setup",
                "Custom Connectors",
                "Testing & Validation",
                "Documentation"
            ],
            category: "Integration",
            badge: "Seamless",
            link: "https://ziontechgroup.com/ai-integration",
            details: "Professional AI integration services ensuring seamless connectivity with your existing business systems.",
            pricing: {
                starter: "$3,000 - $12,000",
                professional: "$12,000 - $40,000",
                enterprise: "$40,000 - $120,000"
            },
            freeTrial: "Integration assessment",
            rating: 4.7,
            reviewCount: 178
        },
        {
            id: "ai-training",
            title: "AI Training & Workshops",
            description: "Comprehensive training programs for AI adoption and team skill development.",
            icon: <Users className="h-8 w-8 text-teal-500"/>,
            price: 500,
            currency: "$",
            features: [
                "AI Fundamentals",
                "Practical Workshops",
                "Use Case Development",
                "Best Practices",
                "Hands-on Projects",
                "Ongoing Support"
            ],
            category: "Training",
            badge: "Educational",
            link: "https://ziontechgroup.com/ai-training",
            details: "Comprehensive AI training programs empowering your team with the knowledge and skills to leverage AI effectively.",
            pricing: {
                starter: "$500/person",
                professional: "$1,000/person",
                enterprise: "$2,500/person"
            },
            freeTrial: "Introductory session",
            rating: 4.8,
            reviewCount: 223
        }
    ];

    const categories = ["All Services", "Strategy", "ML", "NLP", "Vision", "Analytics", "Automation", "Ethics", "Infrastructure", "Integration", "Training"];

    return (
        <div className="min-h-screen bg-background">
            <SEO 
                title="AI Services - Zion Tech Group" 
                description="Transform your business with cutting-edge AI services including machine learning, data analytics, and AI strategy." 
                keywords="AI services, machine learning, artificial intelligence, data analytics, AI strategy, AI ethics" 
                canonical="https://ziontechgroup.com/services/ai-services"
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-pink-900 via-pink-800 to-rose-900 text-white py-20">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        AI Services for
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
                            {" "}Innovation
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed mb-8">
                        Harness the power of artificial intelligence to transform your business operations, 
                        enhance customer experiences, and drive innovation across all departments.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-pink-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105">
                            Start Your AI Journey
                        </button>
                        <button className="border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-400 hover:text-white transition-all duration-300">
                            View Case Studies
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Info Banner */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-pink-400/30">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-wrap items-center justify-center gap-8 text-center">
                        <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-pink-400"/>
                            <span className="text-white">+1 302 464 0950</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-pink-400"/>
                            <span className="text-white">kleber@ziontechgroup.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="h-5 w-5 text-pink-400"/>
                            <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Services Portfolio</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive AI solutions designed to meet your business challenges and drive innovation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {aiServices.map((service) => (
                            <div key={service.id} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-pink-300">
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 rounded-lg bg-pink-100 group-hover:bg-pink-200 transition-colors">
                                            {service.icon}
                                        </div>
                                        {service.badge && (
                                            <span className="px-3 py-1 text-xs font-semibold text-pink-600 bg-pink-100 rounded-full">
                                                {service.badge}
                                            </span>
                                        )}
                                    </div>
                                    
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    
                                    <div className="mb-4">
                                        <p className="text-sm text-gray-500 mb-3">{service.details}</p>
                                        <div className="grid grid-cols-2 gap-2 mb-4">
                                            {service.features.slice(0, 4).map((feature, index) => (
                                                <div key={index} className="flex items-center text-xs text-pink-600">
                                                    <CheckCircle className="w-3 h-3 mr-2"/>
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                        
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Pricing:</h4>
                                            <div className="space-y-1">
                                                {Object.entries(service.pricing).map(([plan, price]) => (
                                                    <div key={plan} className="flex justify-between text-xs">
                                                        <span className="text-gray-600 capitalize">{plan}:</span>
                                                        <span className="text-pink-600 font-semibold">{String(price)}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                                            <span>Free Trial:</span>
                                            <span className="text-pink-600 font-semibold">{service.freeTrial}</span>
                                        </div>
                                        
                                        <div className="flex items-center justify-center gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}/>
                                            ))}
                                            <span className="text-sm text-gray-500 ml-2">({service.reviewCount})</span>
                                        </div>
                                    </div>
                                    
                                    <div className="text-center mb-4">
                                        <span className="text-3xl font-bold text-pink-600">
                                            {service.price === 0 ? 'Free' : `${service.currency}${service.price}`}
                                        </span>
                                        <span className="text-gray-500">
                                            {service.price === 0 ? '' : service.price < 1000 ? '/hour' : '/project'}
                                        </span>
                                    </div>
                                    
                                    <button className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105">
                                        <a href={service.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                            <ExternalLink className="h-4 w-4 mr-2"/>
                                            Get Started
                                        </a>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-pink-50 to-rose-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6 text-gray-900">
                        Ready to Transform Your Business with AI?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Start with a consultation and see how our AI services can streamline your operations, 
                        improve productivity, and drive growth. No long-term contracts, cancel anytime.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-700 hover:to-rose-700 transition-all duration-300">
                            <Rocket className="h-5 w-5 mr-2 inline"/>
                            Start AI Consultation
                        </button>
                        <button className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 hover:text-white transition-all duration-300">
                            <Phone className="h-5 w-5 mr-2 inline"/>
                            Call +1 302 464 0950
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AIServices;

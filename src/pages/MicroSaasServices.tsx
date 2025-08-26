import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Server, ArrowRight, Rocket } from 'lucide-react';

export default function MicroSaasServices() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [services, setServices] = useState<MicroSaasService[]>(MICRO_SAAS_SERVICES);
  const [filteredServices, setFilteredServices] = useState<MicroSaasService[]>(MICRO_SAAS_SERVICES);

  // Micro SAAS Services data
  const microSaasServices = [
    {
      id: 1,
      name: "TaskFlow Pro",
      category: "Productivity",
      pricing: "Freemium",
      description: "Simple yet powerful task management and project collaboration tool for small teams",
      price: 15,
      pricingModel: "monthly",
      userLimit: "Up to 10 users",
      features: ["Task management", "Team collaboration", "Time tracking", "Progress reports"],
      benefits: ["Increased productivity", "Better team coordination", "Project visibility", "Easy to use"],
      targetAudience: ["Small teams", "Startups", "Freelancers", "Small businesses"],
      tags: ["Task Management", "Productivity", "Collaboration", "Project Management"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 16,
      name: "AI CodeGen Pro",
      category: "Development",
      pricing: "Freemium",
      description: "AI-powered code generation and development assistance for developers and teams",
      price: 45,
      pricingModel: "monthly",
      userLimit: "Up to 8 developers",
      features: ["AI code generation", "Code review", "Bug detection", "Documentation auto-generation"],
      benefits: ["Faster development", "Code quality improvement", "Reduced bugs", "Time savings"],
      targetAudience: ["Software developers", "Dev teams", "Startups", "Tech companies"],
      tags: ["AI Development", "Code Generation", "Code Review", "Automation", "Productivity"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 17,
      name: "Quantum Analytics",
      category: "Analytics",
      pricing: "Freemium",
      description: "Advanced predictive analytics and business intelligence using quantum computing principles",
      price: 55,
      pricingModel: "monthly",
      userLimit: "Up to 12 users",
      features: ["Predictive modeling", "Real-time analytics", "AI insights", "Custom dashboards"],
      benefits: ["Future-proof decisions", "Competitive advantage", "Data-driven insights", "Scalable analytics"],
      targetAudience: ["Data scientists", "Business analysts", "Executives", "Consulting firms"],
      tags: ["Quantum Analytics", "Predictive Modeling", "Business Intelligence", "AI", "Real-time"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 18,
      name: "Blockchain Business Suite",
      category: "Blockchain",
      pricing: "Freemium",
      description: "Complete blockchain solution for business operations and smart contract management",
      price: 65,
      pricingModel: "monthly",
      userLimit: "Up to 20 users",
      features: ["Smart contracts", "Token management", "DeFi integration", "Blockchain analytics"],
      benefits: ["Transparency", "Security", "Cost reduction", "Innovation leadership"],
      targetAudience: ["Fintech companies", "Supply chain", "Real estate", "Healthcare"],
      tags: ["Blockchain", "Smart Contracts", "DeFi", "Cryptocurrency", "Business Solutions"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 19,
      name: "IoT Enterprise Hub",
      category: "IoT",
      pricing: "Freemium",
      description: "Comprehensive IoT platform for enterprise device management and data collection",
      price: 75,
      pricingModel: "monthly",
      userLimit: "Up to 1000 devices",
      features: ["Device management", "Real-time monitoring", "Data analytics", "Automation rules"],
      benefits: ["Operational efficiency", "Cost reduction", "Predictive maintenance", "Data insights"],
      targetAudience: ["Manufacturing", "Healthcare", "Smart cities", "Agriculture"],
      tags: ["IoT", "Device Management", "Real-time Monitoring", "Automation", "Enterprise"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 20,
      name: "AR/VR Studio Pro",
      category: "Immersive Tech",
      pricing: "Freemium",
      description: "Professional AR/VR development platform for immersive experiences and training",
      price: 85,
      pricingModel: "monthly",
      userLimit: "Up to 15 developers",
      features: ["3D modeling", "VR development", "AR integration", "Analytics dashboard"],
      benefits: ["Immersive experiences", "Training efficiency", "Customer engagement", "Innovation"],
      targetAudience: ["Game developers", "Training companies", "Real estate", "Education"],
      tags: ["AR/VR", "3D Modeling", "Immersive Tech", "Training", "Development"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 2,
      name: "InvoiceGenius",
      category: "Finance",
      pricing: "Freemium",
      description: "AI-powered invoice generation and financial management for small businesses",
      price: 25,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["AI invoice generation", "Expense tracking", "Financial reports", "Tax preparation"],
      benefits: ["Time savings", "Accuracy improvement", "Tax compliance", "Financial insights"],
      targetAudience: ["Small businesses", "Freelancers", "Consultants", "Service providers"],
      tags: ["Invoicing", "Finance", "AI", "Tax Preparation", "Expense Tracking"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 3,
      name: "SocialSync Pro",
      category: "Marketing",
      pricing: "Freemium",
      description: "Comprehensive social media management and analytics platform for businesses",
      price: 30,
      pricingModel: "monthly",
      userLimit: "Up to 5 users",
      features: ["Multi-platform posting", "Content scheduling", "Analytics dashboard", "Engagement tracking"],
      benefits: ["Time efficiency", "Better engagement", "Data insights", "Brand consistency"],
      targetAudience: ["Marketing teams", "Small businesses", "Agencies", "Content creators"],
      tags: ["Social Media", "Marketing", "Analytics", "Content Management", "Automation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 4,
      name: "CustomerFlow CRM",
      category: "CRM",
      pricing: "Freemium",
      description: "Lightweight customer relationship management system for growing businesses",
      price: 20,
      pricingModel: "monthly",
      userLimit: "Up to 15 users",
      features: ["Contact management", "Sales pipeline", "Email integration", "Reporting tools"],
      benefits: ["Better customer relationships", "Sales improvement", "Data organization", "Team collaboration"],
      targetAudience: ["Sales teams", "Small businesses", "Startups", "Consultants"],
      tags: ["CRM", "Sales", "Customer Management", "Pipeline", "Reporting"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 5,
      name: "DataViz Studio",
      category: "Analytics",
      pricing: "Freemium",
      description: "Easy-to-use data visualization and analytics platform for business insights",
      price: 35,
      pricingModel: "monthly",
      userLimit: "Up to 8 users",
      features: ["Interactive dashboards", "Data connectors", "Custom charts", "Real-time updates"],
      benefits: ["Data insights", "Better decisions", "Visual communication", "Time savings"],
      targetAudience: ["Business analysts", "Marketing teams", "Executives", "Data teams"],
      tags: ["Analytics", "Data Visualization", "Dashboards", "Business Intelligence", "Reporting"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 6,
      name: "ScheduleMaster",
      category: "Scheduling",
      pricing: "Freemium",
      description: "Intelligent scheduling and appointment booking system for service businesses",
      price: 18,
      pricingModel: "monthly",
      userLimit: "Up to 12 users",
      features: ["Online booking", "Calendar integration", "Automated reminders", "Payment processing"],
      benefits: ["Reduced no-shows", "24/7 booking", "Payment collection", "Time savings"],
      targetAudience: ["Service businesses", "Consultants", "Healthcare", "Beauty salons"],
      tags: ["Scheduling", "Appointments", "Booking", "Calendar", "Automation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 7,
      name: "ContentCraft AI",
      category: "Content",
      pricing: "Freemium",
      description: "AI-powered content creation and optimization tool for marketers and creators",
      price: 40,
      pricingModel: "monthly",
      userLimit: "Up to 6 users",
      features: ["AI content generation", "SEO optimization", "Content planning", "Performance analytics"],
      benefits: ["Content creation speed", "SEO improvement", "Engagement increase", "Time efficiency"],
      targetAudience: ["Content marketers", "Bloggers", "Agencies", "Small businesses"],
      tags: ["Content Creation", "AI", "SEO", "Marketing", "Automation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 8,
      name: "SecureVault",
      category: "Security",
      pricing: "Freemium",
      description: "Enterprise-grade security and compliance management for small businesses",
      price: 45,
      pricingModel: "monthly",
      userLimit: "Up to 20 users",
      features: ["Password management", "Access control", "Compliance monitoring", "Security audits"],
      benefits: ["Enhanced security", "Compliance", "Risk reduction", "Peace of mind"],
      targetAudience: ["Small businesses", "Healthcare", "Finance", "Legal services"],
      tags: ["Security", "Compliance", "Password Management", "Access Control", "Risk Management"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 9,
      name: "MediaHub Pro",
      category: "Media",
      pricing: "Freemium",
      description: "Digital asset management and media organization platform for creative teams",
      price: 28,
      pricingModel: "monthly",
      userLimit: "Up to 10 users",
      features: ["Asset organization", "Version control", "Collaboration tools", "Search & filtering"],
      benefits: ["Better organization", "Team collaboration", "Time savings", "Asset protection"],
      targetAudience: ["Design teams", "Marketing agencies", "Photographers", "Content creators"],
      tags: ["Media Management", "Digital Assets", "Collaboration", "Organization", "Creative Tools"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 10,
      name: "LearnFlow LMS",
      category: "Education",
      pricing: "Freemium",
      description: "Learning management system for corporate training and online education",
      price: 32,
      pricingModel: "monthly",
      userLimit: "Up to 100 learners",
      features: ["Course creation", "Progress tracking", "Assessment tools", "Mobile learning"],
      benefits: ["Training efficiency", "Progress monitoring", "Cost reduction", "Scalability"],
      targetAudience: ["Corporate training", "Educational institutions", "Online courses", "Skill development"],
      tags: ["LMS", "Education", "Training", "Online Learning", "Assessment"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 11,
      name: "EcoTrack Pro",
      category: "Sustainability",
      pricing: "Freemium",
      description: "Sustainability tracking and environmental impact management for businesses",
      price: 38,
      pricingModel: "monthly",
      userLimit: "Up to 25 users",
      features: ["Carbon footprint tracking", "Sustainability reporting", "Goal setting", "Progress monitoring"],
      benefits: ["Environmental impact", "Regulatory compliance", "Brand reputation", "Cost savings"],
      targetAudience: ["Manufacturing", "Retail", "Service businesses", "Sustainability-focused companies"],
      tags: ["Sustainability", "Environmental Impact", "Carbon Tracking", "Reporting", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 12,
      name: "LegalAssist AI",
      category: "Legal",
      pricing: "Freemium",
      description: "AI-powered legal document generation and contract management for small businesses",
      price: 50,
      pricingModel: "monthly",
      userLimit: "Up to 8 users",
      features: ["Document templates", "AI generation", "Contract management", "Legal compliance"],
      benefits: ["Cost reduction", "Legal protection", "Time savings", "Compliance"],
      targetAudience: ["Small businesses", "Startups", "Freelancers", "Legal professionals"],
      tags: ["Legal Tech", "AI", "Document Generation", "Contract Management", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 13,
      name: "HealthTrack Plus",
      category: "Healthcare",
      pricing: "Freemium",
      description: "Health monitoring and wellness tracking platform for individuals and small clinics",
      price: 22,
      pricingModel: "monthly",
      userLimit: "Up to 50 patients",
      features: ["Health monitoring", "Wellness tracking", "Patient portal", "Health reports"],
      benefits: ["Better health outcomes", "Patient engagement", "Data insights", "Preventive care"],
      targetAudience: ["Small clinics", "Wellness centers", "Personal trainers", "Individuals"],
      tags: ["Healthcare", "Wellness", "Health Monitoring", "Patient Portal", "Preventive Care"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 14,
      name: "EventMaster Pro",
      category: "Events",
      pricing: "Freemium",
      description: "Comprehensive event management and ticketing platform for event organizers",
      price: 35,
      pricingModel: "monthly",
      userLimit: "Up to 1000 attendees",
      features: ["Event planning", "Ticket sales", "Attendee management", "Analytics dashboard"],
      benefits: ["Event success", "Revenue increase", "Attendee satisfaction", "Data insights"],
      targetAudience: ["Event organizers", "Conferences", "Workshops", "Entertainment"],
      tags: ["Event Management", "Ticketing", "Planning", "Attendee Management", "Analytics"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 15,
      name: "InventorySmart",
      category: "Inventory",
      pricing: "Freemium",
      description: "Intelligent inventory management and supply chain optimization for small businesses",
      price: 25,
      pricingModel: "monthly",
      userLimit: "Up to 15 users",
      features: ["Inventory tracking", "Demand forecasting", "Reorder alerts", "Analytics reports"],
      benefits: ["Stock optimization", "Cost reduction", "Better planning", "Customer satisfaction"],
      targetAudience: ["Retail stores", "E-commerce", "Manufacturing", "Distribution"],
      tags: ["Inventory Management", "Supply Chain", "Forecasting", "Analytics", "Optimization"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    // NEW INNOVATIVE SERVICES
    {
      id: 16,
      name: "QuantumFlow AI",
      category: "AI & ML",
      pricing: "Premium",
      description: "Next-generation AI workflow automation with quantum computing optimization",
      price: 85,
      pricingModel: "monthly",
      userLimit: "Up to 50 users",
      features: ["Quantum AI algorithms", "Workflow automation", "Predictive analytics", "Real-time optimization"],
      benefits: ["Unprecedented speed", "Advanced insights", "Cost optimization", "Competitive advantage"],
      targetAudience: ["Tech companies", "Research institutions", "Financial services", "Healthcare"],
      tags: ["AI", "Quantum Computing", "Automation", "Analytics", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 17,
      name: "BlockChain Forge",
      category: "Blockchain",
      pricing: "Premium",
      description: "Enterprise blockchain development and smart contract platform for businesses",
      price: 120,
      pricingModel: "monthly",
      userLimit: "Up to 100 users",
      features: ["Smart contract creation", "Blockchain deployment", "Token management", "Security auditing"],
      benefits: ["Transparency", "Security", "Automation", "Trust building"],
      targetAudience: ["Financial services", "Supply chain", "Healthcare", "Real estate"],
      tags: ["Blockchain", "Smart Contracts", "DeFi", "Security", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 18,
      name: "IoT Nexus Hub",
      category: "IoT",
      pricing: "Premium",
      description: "Comprehensive IoT device management and data analytics platform",
      price: 75,
      pricingModel: "monthly",
      userLimit: "Up to 1000 devices",
      features: ["Device management", "Real-time monitoring", "Data analytics", "Automation rules"],
      benefits: ["Operational efficiency", "Predictive maintenance", "Cost reduction", "Data insights"],
      targetAudience: ["Manufacturing", "Smart cities", "Agriculture", "Healthcare"],
      tags: ["IoT", "Device Management", "Analytics", "Automation", "Monitoring"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 19,
      name: "CyberShield Pro",
      category: "Cybersecurity",
      pricing: "Premium",
      description: "Advanced cybersecurity and threat intelligence platform for enterprises",
      price: 95,
      pricingModel: "monthly",
      userLimit: "Up to 200 users",
      features: ["Threat detection", "Incident response", "Vulnerability scanning", "Compliance reporting"],
      benefits: ["Risk reduction", "Regulatory compliance", "Brand protection", "Peace of mind"],
      targetAudience: ["Enterprises", "Financial services", "Healthcare", "Government"],
      tags: ["Cybersecurity", "Threat Intelligence", "Compliance", "Risk Management", "Security"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 20,
      name: "DataFusion Studio",
      category: "Data Science",
      pricing: "Premium",
      description: "Advanced data science and machine learning platform for data analysts",
      price: 65,
      pricingModel: "monthly",
      userLimit: "Up to 25 users",
      features: ["ML model building", "Data preprocessing", "Model deployment", "Performance monitoring"],
      benefits: ["Faster insights", "Better predictions", "Automated workflows", "Scalability"],
      targetAudience: ["Data scientists", "Analysts", "Research teams", "Business intelligence"],
      tags: ["Data Science", "Machine Learning", "Analytics", "AI", "Automation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 21,
    {
      id: 21,
      name: "Cybersecurity Shield",
      category: "Security",
      pricing: "Freemium",
      description: "Advanced cybersecurity platform with AI-powered threat detection and response",
      price: 95,
      pricingModel: "monthly",
      userLimit: "Up to 50 users",
      features: ["Threat detection", "AI monitoring", "Incident response", "Compliance reporting"],
      benefits: ["Enhanced security", "Real-time protection", "Compliance", "Peace of mind"],
      targetAudience: ["Financial services", "Healthcare", "Government", "Enterprise"],
      tags: ["Cybersecurity", "AI Security", "Threat Detection", "Compliance", "Enterprise"],
=======
      name: "CloudOrchestra",
      category: "Cloud Computing",
      pricing: "Premium",
      description: "Multi-cloud orchestration and cost optimization platform",
      price: 80,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Multi-cloud management", "Cost optimization", "Auto-scaling", "Performance monitoring"],
      benefits: ["Cost savings", "Better performance", "Simplified management", "Flexibility"],
      targetAudience: ["Enterprises", "Startups", "DevOps teams", "IT managers"],
      tags: ["Cloud Computing", "Multi-cloud", "Cost Optimization", "DevOps", "Automation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 22,
      name: "GreenTech Monitor",
      category: "Sustainability",
      pricing: "Freemium",
      description: "Environmental impact tracking and sustainability reporting for eco-conscious businesses",
      price: 42,
      pricingModel: "monthly",
      userLimit: "Up to 30 users",
      features: ["Carbon tracking", "ESG reporting", "Sustainability goals", "Green certifications"],
      benefits: ["Environmental impact", "Regulatory compliance", "Brand reputation", "Cost savings"],
      targetAudience: ["Manufacturing", "Retail", "Service businesses", "ESG-focused companies"],
      tags: ["Sustainability", "ESG", "Carbon Tracking", "Green Tech", "Compliance"],
=======
      name: "DevOps Accelerator",
      category: "DevOps",
      pricing: "Premium",
      description: "Complete DevOps automation and CI/CD pipeline management platform",
      price: 70,
      pricingModel: "monthly",
      userLimit: "Up to 100 developers",
      features: ["CI/CD pipelines", "Infrastructure as code", "Monitoring", "Security scanning"],
      benefits: ["Faster deployment", "Better quality", "Reduced errors", "Team productivity"],
      targetAudience: ["Development teams", "DevOps engineers", "Startups", "Enterprises"],
      tags: ["DevOps", "CI/CD", "Automation", "Infrastructure", "Monitoring"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 23,
      name: "VoiceAI Assistant",
      category: "AI",
      pricing: "Freemium",
      description: "Voice-powered AI assistant for business automation and customer interaction",
      price: 38,
      pricingModel: "monthly",
      userLimit: "Up to 25 users",
      features: ["Voice commands", "AI automation", "Multi-language", "Integration APIs"],
      benefits: ["Hands-free operation", "Increased efficiency", "Better accessibility", "Modern interface"],
      targetAudience: ["Customer service", "Sales teams", "Administrative staff", "Accessibility needs"],
      tags: ["Voice AI", "Automation", "Accessibility", "Customer Service", "AI Assistant"],
=======
      name: "AR/VR Creator Studio",
      category: "AR/VR",
      pricing: "Premium",
      description: "Professional AR/VR content creation and deployment platform",
      price: 90,
      pricingModel: "monthly",
      userLimit: "Up to 20 creators",
      features: ["3D modeling", "AR/VR development", "Content distribution", "Analytics"],
      benefits: ["Immersive experiences", "Engagement increase", "Innovation", "Competitive edge"],
      targetAudience: ["Game developers", "Marketing agencies", "Educational institutions", "Enterprises"],
      tags: ["AR/VR", "3D Modeling", "Content Creation", "Immersive Tech", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 24,
      name: "Quantum Finance Pro",
      category: "Finance",
      pricing: "Freemium",
      description: "Quantum computing-powered financial modeling and risk assessment platform",
      price: 120,
      pricingModel: "monthly",
      userLimit: "Up to 10 users",
      features: ["Quantum modeling", "Risk assessment", "Portfolio optimization", "Real-time analysis"],
      benefits: ["Superior accuracy", "Competitive advantage", "Risk reduction", "Future-proof technology"],
      targetAudience: ["Investment firms", "Banks", "Hedge funds", "Financial advisors"],
      tags: ["Quantum Finance", "Risk Assessment", "Portfolio Management", "Financial Modeling", "AI"],
=======
      name: "GreenTech Monitor",
      category: "Sustainability",
      pricing: "Premium",
      description: "Advanced environmental monitoring and sustainability analytics platform",
      price: 55,
      pricingModel: "monthly",
      userLimit: "Up to 50 users",
      features: ["Environmental sensors", "Data analytics", "Sustainability reporting", "Goal tracking"],
      benefits: ["Environmental impact", "Regulatory compliance", "Cost savings", "Brand reputation"],
      targetAudience: ["Manufacturing", "Utilities", "Agriculture", "Government"],
      tags: ["Sustainability", "Environmental Monitoring", "Analytics", "Compliance", "Green Tech"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 25,
      name: "FinTech Suite Pro",
      category: "FinTech",
      pricing: "Premium",
      description: "Comprehensive financial technology platform for modern businesses",
      price: 110,
      pricingModel: "monthly",
      userLimit: "Up to 100 users",
      features: ["Payment processing", "Digital banking", "Cryptocurrency", "Financial analytics"],
      benefits: ["Modern banking", "Cost reduction", "Better security", "Financial insights"],
      targetAudience: ["Banks", "FinTech startups", "E-commerce", "Financial services"],
      tags: ["FinTech", "Digital Banking", "Payments", "Cryptocurrency", "Financial Services"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 26,
      name: "SmartCity Platform",
      category: "Smart Cities",
      pricing: "Enterprise",
      description: "Comprehensive smart city infrastructure management and analytics platform",
      price: 500,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Infrastructure monitoring", "Traffic management", "Energy optimization", "Citizen services"],
      benefits: ["Efficiency improvement", "Cost reduction", "Better services", "Sustainability"],
      targetAudience: ["City governments", "Municipalities", "Urban planners", "Infrastructure companies"],
      tags: ["Smart Cities", "Infrastructure", "IoT", "Analytics", "Urban Planning"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 27,
      name: "BioTech Analytics",
      category: "Biotechnology",
      pricing: "Enterprise",
      description: "Advanced biotechnology data analysis and research platform",
      price: 300,
      pricingModel: "monthly",
      userLimit: "Up to 200 researchers",
      features: ["Genomic analysis", "Drug discovery", "Clinical trials", "Research collaboration"],
      benefits: ["Faster research", "Better insights", "Collaboration", "Innovation"],
      targetAudience: ["Pharmaceutical companies", "Research institutions", "Hospitals", "Biotech startups"],
      tags: ["Biotechnology", "Genomics", "Drug Discovery", "Research", "Healthcare"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 28,
      name: "Quantum Security",
      category: "Quantum Security",
      pricing: "Enterprise",
      description: "Post-quantum cryptography and quantum-resistant security solutions",
      price: 400,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Quantum-resistant encryption", "Key management", "Security auditing", "Compliance"],
      benefits: ["Future-proof security", "Regulatory compliance", "Risk reduction", "Innovation"],
      targetAudience: ["Government agencies", "Financial services", "Healthcare", "Defense"],
      tags: ["Quantum Security", "Cryptography", "Cybersecurity", "Innovation", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 29,
      name: "SpaceTech Analytics",
      category: "Space Technology",
      pricing: "Enterprise",
      description: "Satellite data analysis and space technology management platform",
      price: 600,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Satellite imagery", "Data analysis", "Mission planning", "Performance monitoring"],
      benefits: ["Space insights", "Mission success", "Cost optimization", "Innovation"],
      targetAudience: ["Space agencies", "Satellite companies", "Research institutions", "Defense"],
      tags: ["Space Technology", "Satellite Data", "Analytics", "Mission Planning", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 30,
      name: "Edge Computing Hub",
      category: "Infrastructure",
      pricing: "Freemium",
      description: "Edge computing platform for distributed applications and real-time processing",
      price: 68,
      pricingModel: "monthly",
      userLimit: "Up to 100 nodes",
      features: ["Edge deployment", "Real-time processing", "Load balancing", "Monitoring tools"],
      benefits: ["Reduced latency", "Better performance", "Cost efficiency", "Scalability"],
      targetAudience: ["IoT applications", "Gaming", "Real-time systems", "Distributed computing"],
      tags: ["Edge Computing", "Real-time Processing", "IoT", "Performance", "Infrastructure"],
=======
      name: "NeuroTech Platform",
      category: "Neurotechnology",
      pricing: "Enterprise",
      description: "Advanced brain-computer interface and neural technology platform",
      price: 800,
      pricingModel: "monthly",
      userLimit: "Unlimited users",
      features: ["Brain mapping", "Neural interfaces", "Cognitive enhancement", "Research tools"],
      benefits: ["Medical breakthroughs", "Research advancement", "Innovation", "Human potential"],
      targetAudience: ["Medical research", "Universities", "Healthcare", "Defense research"],
      tags: ["Neurotechnology", "Brain-Computer Interface", "Neuroscience", "Research", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const categories = ['all', 'Productivity', 'Finance', 'Marketing', 'CRM', 'Analytics', 'Scheduling', 'Content', 'Security', 'Media', 'Education', 'Sustainability', 'Legal', 'Healthcare', 'Events', 'Inventory', 'Development', 'Blockchain', 'IoT', 'Immersive Tech', 'AI', 'Infrastructure'];
  const pricingModels = ['all', 'Freemium', 'Subscription', 'One-time'];

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(service =>
        service.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
      );
    }

    // Sort services
    switch (sortBy) {
      case "price-low":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case "ai-score":
        filtered = [...filtered].sort((a, b) => b.aiScore - a.aiScore);
        break;
      case "featured":
      default:
        filtered = [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    setFilteredServices(filtered);
  }, [searchQuery, selectedCategory, sortBy, services]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI': return <Brain className="w-6 h-6" />;
      case 'IT': return <Database className="w-6 h-6" />;
      case 'Development': return <Code className="w-6 h-6" />;
      case 'Analytics': return <BarChart3 className="w-6 h-6" />;
      case 'Security': return <Shield className="w-6 h-6" />;
      case 'Automation': return <Workflow className="w-6 h-6" />;
      case 'Integration': return <LinkIcon className="w-6 h-6" />;
      case 'Consulting': return <Users className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI': return 'from-purple-500 to-pink-500';
      case 'IT': return 'from-blue-500 to-cyan-500';
      case 'Development': return 'from-green-500 to-emerald-500';
      case 'Analytics': return 'from-orange-500 to-red-500';
      case 'Security': return 'from-red-500 to-pink-500';
      case 'Automation': return 'from-indigo-500 to-purple-500';
      case 'Integration': return 'from-teal-500 to-blue-500';
      case 'Consulting': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-black to-zion-blue-dark relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 via-zion-purple/5 to-zion-cyan/5 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.1),transparent_50%)] animate-float"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(168,85,247,0.1),transparent_70%)] animate-float delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              Innovation at Scale
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent mb-6 animate-neon-pulse">
            Micro SAAS Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Revolutionary software solutions designed specifically for small businesses, startups, and entrepreneurs. 
            <span className="text-zion-cyan font-semibold"> Affordable, powerful, and future-ready.</span>
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-zion-slate-light">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
              <span>25+ Services Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-purple rounded-full animate-pulse delay-500"></div>
              <span>Starting from $15/month</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse delay-1000"></div>
              <span>24/7 Support</span>
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-zion-blue-dark to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-cyan/5 via-transparent to-zion-purple/5 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-zion-purple/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-zion-cyan/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Innovative Micro SAAS Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-zion-cyan via-white to-zion-purple bg-clip-text text-transparent mb-6 animate-neon-pulse">
            Micro SAAS Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Affordable, focused software solutions designed specifically for small businesses, startups, and entrepreneurs. 
            <span className="text-zion-cyan font-medium"> Transform your business with cutting-edge technology.</span>
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">{microSaasServices.length}+</div>
              <div className="text-zion-slate-light text-sm">Services Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-purple mb-2">15+</div>
              <div className="text-zion-slate-light text-sm">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-zion-slate-light text-sm">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-zion-slate-light text-sm">Uptime</div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
            <input
              type="text"
              placeholder="Search micro SAAS services by name, features, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-black/40 backdrop-blur-sm border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="text-xs text-zion-slate-light bg-zion-cyan/10 px-2 py-1 rounded-full border border-zion-cyan/20">
                {filteredServices.length} services found
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-black/40 backdrop-blur-sm border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300 hover:border-zion-cyan/40"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-black text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-4 py-3 bg-black/40 backdrop-blur-sm border border-zion-cyan/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300 hover:border-zion-cyan/40"
            >
              {pricingModels.map(pricing => (
                <option key={pricing} value={pricing} className="bg-black text-white">
                  {pricing === 'all' ? 'All Pricing Models' : pricing}
                </option>
              ))}
            </select>

            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPricing('all');
              }}
              className="px-4 py-3 bg-zion-cyan/10 border border-zion-cyan/20 rounded-lg text-zion-cyan hover:bg-zion-cyan hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="group bg-black/30 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 hover:bg-black/50 hover:border-zion-cyan/40 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/20 hover:-translate-y-2">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-zion-cyan">
                      {getCategoryIcon(service.category)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getPricingColor(service.pricing)} bg-opacity-20 border border-current`}>
                        {service.pricing}
                      </span>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full text-zion-purple bg-zion-purple/20 border border-zion-purple/30">
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="group bg-black/40 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 hover:bg-black/60 hover:border-zion-cyan/40 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/20 hover:-translate-y-2">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center border border-zion-cyan/30 group-hover:border-zion-cyan/50 transition-all duration-300">
                    <div className="text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                      {getCategoryIcon(service.category)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan-light transition-colors mb-2">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getPricingColor(service.pricing)} bg-opacity-20 bg-current border border-current border-opacity-30`}>
                        {service.pricing}
                      </span>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full text-zion-cyan bg-zion-cyan bg-opacity-20 border border-zion-cyan border-opacity-30">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
              
              {/* Pricing */}
              <div className="mb-6 p-4 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-xl border border-zion-cyan/20">
                <div className="text-3xl font-bold text-white mb-1">
                  {formatPrice(service.price, service.pricingModel)}
                </div>
                <div className="text-sm text-zion-slate-light">{service.userLimit}</div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-zion-cyan" />
                  Key Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-3 py-1 text-xs bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30 rounded-lg font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

              {/* Target Audience */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-zion-purple" />
                  Perfect For
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.slice(0, 2).map((audience, index) => (
                    <span key={index} className="px-3 py-1 text-xs bg-zion-purple/20 text-zion-purple-light border border-zion-purple/30 rounded-lg font-medium">
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="border-t border-zion-cyan/20 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zion-slate-light">Ready to get started?</span>
                  <a 
                    href={service.contactInfo.website}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-black font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25 transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Scale Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Our micro SAAS solutions are designed to grow with your business needs and provide measurable ROI
            </p>
            <div className="mb-6">
              <a 
                href="/comprehensive-services"
                className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 mb-4"
              >
                Explore Our Full Service Portfolio →
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
=======
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4 animate-neon-pulse">Ready to Scale Your Business?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Our micro SAAS solutions are designed to grow with your business needs
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="group">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-all duration-300 group-hover:scale-110">
                    <Phone className="w-8 h-8 text-green-400" />
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Phone</p>
                  <p className="text-gray-300 group-hover:text-green-300 transition-colors">{microSaasServices[0].contactInfo.phone}</p>
                </div>
                <div className="group">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110">
                    <Mail className="w-8 h-8 text-blue-400" />
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Email</p>
                  <p className="text-gray-300 group-hover:text-blue-300 transition-colors">{microSaasServices[0].contactInfo.email}</p>
                </div>
                <div className="group">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-all duration-300 group-hover:scale-110">
                    <MapPin className="w-8 h-8 text-purple-400" />
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Address</p>
                  <p className="text-gray-300 group-hover:text-purple-300 transition-colors">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
=======
        <div className="mt-20 text-center">
          <div className="relative bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-cyan/10 backdrop-blur-sm border border-zion-cyan/30 rounded-3xl p-12 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.1),transparent_50%)] animate-pulse"></div>
            
            <div className="relative">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-4">
                  <Rocket className="w-4 h-4" />
                  Ready to Transform Your Business?
                </div>
=======
        <div className="mt-20 text-center">
          <div className="relative bg-gradient-to-r from-black/60 via-zion-blue-dark/60 to-black/60 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-12 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 via-transparent to-zion-purple/5"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan"></div>
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Get Started Today
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Scale Your Business</span>?
              </h2>
              
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed">
                Our micro SAAS solutions are designed to grow with your business needs. 
                <span className="text-zion-cyan font-medium"> Transform your operations with cutting-edge technology.</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-cyan/40 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-cyan/30 group-hover:border-zion-cyan/50 transition-all duration-300">
                    <Phone className="w-8 h-8 text-zion-cyan group-hover:text-zion-cyan-light transition-colors" />
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Phone</p>
                  <a href={`tel:${microSaasServices[0].contactInfo.phone}`} className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    {microSaasServices[0].contactInfo.phone}
                  </a>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-purple/20 to-zion-purple/40 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-purple/30 group-hover:border-zion-purple/50 transition-all duration-300">
                    <Mail className="w-8 h-8 text-zion-purple group-hover:text-zion-purple-light transition-colors" />
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Email</p>
                  <a href={`mailto:${microSaasServices[0].contactInfo.email}`} className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                    {microSaasServices[0].contactInfo.email}
                  </a>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-400/40 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-green-400/30 group-hover:border-green-400/50 transition-all duration-300">
                    <MapPin className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors" />
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Address</p>
                  <span className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`mailto:${microSaasServices[0].contactInfo.email}`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-black font-bold rounded-xl hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/25 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  Request Demo
                </a>
                
                <a 
                  href={`tel:${microSaasServices[0].contactInfo.phone}`}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-bold rounded-xl hover:bg-zion-cyan hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent mb-6">
                Let's Build the Future Together
              </h2>
              
              <p className="text-xl text-zion-slate-light mb-12 max-w-3xl mx-auto leading-relaxed">
                Our cutting-edge micro SAAS solutions are designed to scale with your business needs. 
                <span className="text-zion-cyan font-semibold"> Start your digital transformation journey today.</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-cyan/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Phone</p>
                  <p className="text-zion-slate-light">{microSaasServices[0].contactInfo.phone}</p>
                </div>
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-purple/20 to-zion-purple/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-zion-purple" />
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Email</p>
                  <p className="text-zion-slate-light">{microSaasServices[0].contactInfo.email}</p>
                </div>
                <div className="group">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-cyan/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Address</p>
=======
    <>
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover our comprehensive suite of micro SAAS services including AI solutions, IT services, development platforms, and more."
        keywords="micro SAAS, AI services, IT solutions, development platforms, business automation"
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-72 h-72 bg-zion-purple/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute top-20 right-0 w-96 h-96 bg-zion-cyan/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-zion-purple-light/20 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
          </div>
          
          <div className="relative container mx-auto px-4 text-center">
            <div className="mb-8">
              <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 mb-4 px-4 py-2 text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Premium Micro SAAS Solutions
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                Micro SAAS Services
              </span>
              <br />
              <span className="text-white">That Scale Your Business</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover our curated collection of intelligent, innovative, and diversified micro SAAS solutions. 
              From AI-powered platforms to enterprise-grade IT services, we deliver cutting-edge technology 
              that drives real business value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 text-lg"
              >
                <Zap className="w-5 h-5 mr-2" />
                Explore Services
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </Button>
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-zion-slate-light">Try adjusting your search criteria or filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <Card 
                    key={service.id} 
                    className="group bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20"
                  >
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        {getStatusBadge(service.status)}
                        <Badge className="bg-zion-purple/80 hover:bg-zion-purple text-white">
                          {service.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <div className="flex items-center gap-2 text-white">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{service.rating}</span>
                          <span className="text-sm text-gray-300">({service.reviewCount})</span>
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2 mb-2">
                          {getCategoryIcon(service.category)}
                          <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                            {service.title}
                          </CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-zion-slate-light leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Pricing */}
                      <div className="bg-zion-blue/30 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-zion-slate-light text-sm">Starting at</span>
                          <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                            {getPricingModelLabel(service.price.pricingModel)}
                          </Badge>
                        </div>
                        <div className="text-2xl font-bold text-white">
                          {service.price.currency}{service.price.monthly}
                          <span className="text-sm text-zion-slate-light font-normal">/month</span>
                        </div>
                        <div className="text-sm text-zion-slate-light">
                          {service.price.yearly && `${service.price.currency}${service.price.yearly}/year`}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-zion-cyan" />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.slice(0, 4).map((feature, index) => (
                            <div key={index} className="text-sm text-zion-slate-light flex items-center gap-1">
                              <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="bg-zion-blue/50 text-zion-slate-light hover:bg-zion-blue/70">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-light text-white" asChild>
                          <a href={service.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Learn More
                          </a>
                        </Button>
                        <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10" asChild>
                          <a href={`mailto:${service.contact.email}?subject=Inquiry about ${service.title}`}>
                            <Mail className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>

                      {/* Contact Info */}
                      <div className="pt-4 border-t border-zion-blue-light">
                        <div className="text-sm text-zion-slate-light space-y-1">
                          <div className="flex items-center gap-2">
                            <Phone className="w-3 h-3" />
                            <a href={`tel:${service.contact.phone}`} className="hover:text-zion-cyan transition-colors">
                              {service.contact.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-3 h-3" />
                            <a href={`mailto:${service.contact.email}`} className="hover:text-zion-cyan transition-colors">
                              {service.contact.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
    </div>
  );
}

function ServiceCard({ service }: { service: MicroSaasService }) {
  return (
    <Card className="group bg-white/5 backdrop-blur-sm border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 rounded-lg bg-zion-cyan/20 text-zion-cyan">
            {categoryIcons[service.category]}
          </div>
          <div className="flex gap-2">
            <Badge variant="secondary" className={`${statusColors[service.status]} text-white`}>
              {service.status}
            </Badge>
            {service.whiteLabel && (
              <Badge variant="outline" className="border-zion-purple text-zion-purple">
                <Zap className="h-3 w-3 mr-1" />
                White Label
=======

function ServiceCard({ service }: { service: MicroSaasService }) {
  const getPricingDisplay = (service: MicroSaasService) => {
    if (service.pricingModel === 'subscription') {
      return `$${service.monthlyPrice}/month`;
    } else if (service.pricingModel === 'one-time') {
      return `$${service.price.toLocaleString()}`;
    } else if (service.pricingModel === 'usage-based') {
      return 'Usage-based';
    } else {
      return 'Contact us';
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-zion-blue-light/20 hover:border-zion-purple/50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl">{service.icon}</div>
          <div className="flex gap-2">
            {service.isNew && (
              <Badge variant="secondary" className="bg-green-500/20 text-green-500">
                New
              </Badge>
            )}
            {service.isPopular && (
              <Badge variant="secondary" className="bg-orange-500/20 text-orange-500">
                Popular
              </Badge>
            )}
            {service.isFeatured && (
              <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple">
                Featured
              </Badge>
            )}
          </div>
        </div>
        </div>
      </CardContent>
    </Card>
  );
}

function NewServiceCard({ service }: { service: MicroSaasService }) {
  return (
    <Card className="bg-gradient-to-br from-zion-purple/20 to-zion-blue/20 border-zion-purple/30 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="p-3 rounded-lg bg-zion-purple/30 text-zion-purple">
            {categoryIcons[service.category]}
          </div>
          <Badge className="bg-zion-purple text-white">
            <Clock className="h-3 w-3 mr-1" />
            New
          </Badge>
        </div>
        <CardTitle className="text-white">{service.title}</CardTitle>
        <CardDescription className="text-zion-slate-light">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="text-center bg-zion-purple/20 rounded-lg p-3">
            <div className="text-xl font-bold text-zion-purple">
              ${service.pricing.monthly}/mo
            </div>
          </div>
          <Button className="w-full bg-zion-purple text-white hover:bg-zion-purple/90">
            <ArrowRight className="h-4 w-4 mr-2" />
            Early Access
=======
        <CardTitle className="text-lg group-hover:text-zion-purple transition-colors">
          {service.title}
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="mb-4">
          <div className="text-xl font-bold text-zion-purple mb-1">
            {getPricingDisplay(service)}
          </div>
          <div className="text-sm text-muted-foreground">
            Market: {service.marketPrice}
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <h4 className="font-semibold text-sm">Key Features:</h4>
          <ul className="space-y-1">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardContent className="pt-0">
        <div className="flex gap-2">
          <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-light">
            Get Started
          </Button>
          <Button variant="outline" size="icon">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
=======
}
=======
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Our team of experts is ready to help you choose the perfect solutions and implement them seamlessly.
              Get started today with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3">
                <Mail className="w-5 h-5 mr-2" />
                Contact Sales Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
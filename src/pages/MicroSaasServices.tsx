import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Server, ArrowRight, Rocket } from 'lucide-react';

const MicroSaasServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

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
<<<<<<< HEAD
      name: "AI Content Optimizer",
      category: "AI & Marketing",
      pricing: "Subscription",
      description: "AI-powered content optimization tool that analyzes and improves your marketing content for better engagement",
      price: 45,
      pricingModel: "monthly",
      userLimit: "Up to 8 users",
      features: ["AI content analysis", "SEO optimization", "Engagement scoring", "A/B testing suggestions"],
      benefits: ["Higher engagement rates", "Better SEO rankings", "Content performance insights", "Time savings"],
      targetAudience: ["Marketing teams", "Content creators", "Digital agencies", "E-commerce businesses"],
      tags: ["AI", "Content Marketing", "SEO", "Analytics", "Optimization"],
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e86f
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 17,
<<<<<<< HEAD
      name: "Smart Inventory Manager",
      category: "Inventory",
      pricing: "Subscription",
      description: "Intelligent inventory management with AI-powered demand forecasting and automated reordering",
      price: 35,
      pricingModel: "monthly",
      userLimit: "Up to 20 users",
      features: ["AI demand forecasting", "Automated reordering", "Real-time tracking", "Multi-location support"],
      benefits: ["Reduced stockouts", "Lower carrying costs", "Improved cash flow", "Better planning"],
      targetAudience: ["Retail stores", "E-commerce", "Manufacturing", "Distribution centers"],
      tags: ["Inventory", "AI", "Forecasting", "Automation", "Supply Chain"],
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e86f
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 18,
<<<<<<< HEAD
      name: "Customer Success Hub",
      category: "Customer Success",
      pricing: "Freemium",
      description: "Comprehensive customer success platform with automated onboarding and retention tracking",
      price: 28,
      pricingModel: "monthly",
      userLimit: "Up to 15 users",
      features: ["Automated onboarding", "Success tracking", "Churn prediction", "Customer health scoring"],
      benefits: ["Improved retention", "Higher customer satisfaction", "Reduced churn", "Better insights"],
      targetAudience: ["SaaS companies", "Subscription businesses", "Service providers", "B2B companies"],
      tags: ["Customer Success", "Onboarding", "Retention", "Analytics", "Automation"],
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e86f
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 19,
<<<<<<< HEAD
      name: "Financial Analytics Pro",
      category: "Finance",
      pricing: "Subscription",
      description: "Advanced financial analytics and reporting platform for small to medium businesses",
      price: 55,
      pricingModel: "monthly",
      userLimit: "Up to 12 users",
      features: ["Financial dashboards", "Cash flow analysis", "Budget tracking", "Forecasting models"],
      benefits: ["Better financial decisions", "Improved cash flow", "Risk management", "Strategic planning"],
      targetAudience: ["Small businesses", "Startups", "Consulting firms", "Service providers"],
      tags: ["Finance", "Analytics", "Reporting", "Forecasting", "Cash Flow"],
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e86f
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 20,
<<<<<<< HEAD
      name: "HR Management Suite",
      category: "Human Resources",
      pricing: "Freemium",
      description: "Complete HR management solution with employee onboarding, time tracking, and performance management",
      price: 32,
      pricingModel: "monthly",
      userLimit: "Up to 50 employees",
      features: ["Employee onboarding", "Time tracking", "Performance reviews", "Benefits management"],
      benefits: ["Streamlined HR processes", "Better employee experience", "Compliance management", "Cost reduction"],
      targetAudience: ["Growing companies", "Remote teams", "Small businesses", "Startups"],
      tags: ["HR", "Employee Management", "Time Tracking", "Performance", "Compliance"],
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e86f
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
<<<<<<< HEAD
    // NEW INNOVATIVE SERVICES ADDED
    {
      id: 16,
      name: "AI-Powered HR Assistant",
      category: "Human Resources",
      pricing: "Freemium",
      description: "Intelligent HR automation with AI-powered recruitment, onboarding, and employee management",
      price: 42,
      pricingModel: "monthly",
      userLimit: "Up to 100 employees",
      features: ["AI resume screening", "Automated onboarding", "Performance tracking", "Employee self-service"],
      benefits: ["Faster hiring", "Reduced bias", "Improved retention", "HR efficiency"],
      targetAudience: ["Growing companies", "HR departments", "Recruitment agencies", "Startups"],
      tags: ["HR Automation", "AI Recruitment", "Employee Management", "Onboarding", "Performance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 17,
      name: "SmartContract AI",
      category: "Blockchain",
      pricing: "Freemium",
      description: "AI-powered smart contract development and blockchain automation for businesses",
      price: 55,
      pricingModel: "monthly",
      userLimit: "Up to 10 developers",
      features: ["Smart contract templates", "AI code generation", "Security auditing", "Deployment automation"],
      benefits: ["Faster development", "Enhanced security", "Cost reduction", "Innovation enablement"],
      targetAudience: ["Blockchain startups", "DeFi projects", "Enterprise blockchain", "Developers"],
      tags: ["Blockchain", "Smart Contracts", "AI", "DeFi", "Web3"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 18,
      name: "IoT Fleet Manager",
      category: "IoT",
      pricing: "Freemium",
      description: "Comprehensive IoT fleet management with real-time tracking and predictive maintenance",
      price: 48,
      pricingModel: "monthly",
      userLimit: "Up to 50 vehicles",
      features: ["Real-time tracking", "Predictive maintenance", "Fuel optimization", "Driver analytics"],
      benefits: ["Cost reduction", "Safety improvement", "Efficiency gains", "Data insights"],
      targetAudience: ["Transportation companies", "Delivery services", "Fleet operators", "Logistics"],
      tags: ["IoT", "Fleet Management", "Predictive Maintenance", "GPS Tracking", "Analytics"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 19,
      name: "VoiceCommerce Pro",
      category: "E-commerce",
      pricing: "Freemium",
      description: "Voice-activated e-commerce platform with AI-powered shopping assistants",
      price: 38,
      pricingModel: "monthly",
      userLimit: "Up to 1000 products",
      features: ["Voice search", "AI recommendations", "Multi-language support", "Analytics dashboard"],
      benefits: ["Improved accessibility", "Higher conversion", "Better UX", "Competitive advantage"],
      targetAudience: ["E-commerce stores", "Retail businesses", "Marketplaces", "Online sellers"],
      tags: ["Voice Commerce", "AI", "E-commerce", "Accessibility", "Voice Search"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 20,
      name: "QuantumML Studio",
      category: "Quantum Computing",
      pricing: "Freemium",
      description: "Quantum machine learning platform for advanced AI model training and optimization",
      price: 75,
      pricingModel: "monthly",
      userLimit: "Up to 5 researchers",
      features: ["Quantum algorithms", "ML model training", "Performance optimization", "Research tools"],
      benefits: ["Faster training", "Better accuracy", "Innovation leadership", "Research advancement"],
      targetAudience: ["Research institutions", "AI companies", "Pharmaceutical companies", "Financial services"],
      tags: ["Quantum Computing", "Machine Learning", "AI", "Research", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 21,
      name: "AR Business Suite",
      category: "Augmented Reality",
      pricing: "Freemium",
      description: "Complete AR solution for business presentations, training, and customer engagement",
      price: 45,
      pricingModel: "monthly",
      userLimit: "Up to 20 users",
      features: ["AR presentations", "Interactive training", "3D visualization", "Mobile AR apps"],
      benefits: ["Enhanced engagement", "Better training", "Innovative marketing", "Competitive edge"],
      targetAudience: ["Marketing agencies", "Training companies", "Real estate", "Manufacturing"],
      tags: ["Augmented Reality", "AR", "3D Visualization", "Training", "Marketing"],
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e86f
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 22,
<<<<<<< HEAD
      name: "EdgeAI Platform",
      category: "Edge Computing",
      pricing: "Freemium",
      description: "Edge AI platform for real-time processing and decision making at the network edge",
      price: 52,
      pricingModel: "monthly",
      userLimit: "Up to 100 edge devices",
      features: ["Real-time processing", "Edge ML models", "Device management", "Performance monitoring"],
      benefits: ["Lower latency", "Reduced bandwidth", "Privacy protection", "Cost efficiency"],
      targetAudience: ["IoT companies", "Manufacturing", "Smart cities", "Healthcare"],
      tags: ["Edge Computing", "AI", "IoT", "Real-time", "Machine Learning"],
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e86f
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 23,
<<<<<<< HEAD
      name: "GreenTech Analytics",
      category: "Sustainability",
      pricing: "Freemium",
      description: "Advanced sustainability analytics and ESG reporting for modern businesses",
      price: 40,
      pricingModel: "monthly",
      userLimit: "Up to 30 users",
      features: ["ESG reporting", "Carbon tracking", "Sustainability scoring", "Regulatory compliance"],
      benefits: ["ESG compliance", "Investor attraction", "Brand reputation", "Cost savings"],
      targetAudience: ["Public companies", "ESG investors", "Sustainability consultants", "Government"],
      tags: ["ESG", "Sustainability", "Carbon Tracking", "Compliance", "Reporting"],
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e86f
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 24,
<<<<<<< HEAD
      name: "NeuroTech Interface",
      category: "Neural Interfaces",
      pricing: "Freemium",
      description: "Brain-computer interface platform for accessibility and human-computer interaction",
      price: 65,
      pricingModel: "monthly",
      userLimit: "Up to 10 users",
      features: ["EEG monitoring", "Brain-computer control", "Accessibility tools", "Research platform"],
      benefits: ["Accessibility improvement", "Innovation leadership", "Research advancement", "Human enhancement"],
      targetAudience: ["Healthcare providers", "Research institutions", "Accessibility companies", "Gaming"],
      tags: ["Neural Interfaces", "BCI", "Accessibility", "Healthcare", "Research"],
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e86f
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 25,
<<<<<<< HEAD
      name: "BioTech Simulator",
      category: "Biotechnology",
      pricing: "Freemium",
      description: "AI-powered biotechnology simulation and drug discovery platform",
      price: 80,
      pricingModel: "monthly",
      userLimit: "Up to 15 researchers",
      features: ["Molecular modeling", "Drug discovery", "Clinical trial simulation", "Bioinformatics tools"],
      benefits: ["Faster discovery", "Cost reduction", "Risk mitigation", "Innovation acceleration"],
      targetAudience: ["Pharmaceutical companies", "Research institutions", "Biotech startups", "Universities"],
      tags: ["Biotechnology", "Drug Discovery", "AI", "Molecular Modeling", "Bioinformatics"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 26,
      name: "SpaceTech Analytics",
      category: "Space Technology",
      pricing: "Freemium",
      description: "Satellite data analytics and space technology solutions for Earth observation",
      price: 70,
      pricingModel: "monthly",
      userLimit: "Up to 20 users",
      features: ["Satellite imagery", "Climate monitoring", "Agricultural insights", "Infrastructure monitoring"],
      benefits: ["Environmental insights", "Agricultural optimization", "Infrastructure planning", "Climate action"],
      targetAudience: ["Agriculture companies", "Environmental agencies", "Infrastructure planners", "Research"],
      tags: ["Space Technology", "Satellite Data", "Climate Monitoring", "Agriculture", "Infrastructure"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 27,
      name: "CyberDefense AI",
      category: "Cybersecurity",
      pricing: "Freemium",
      description: "AI-powered cybersecurity platform with threat detection and automated response",
      price: 58,
      pricingModel: "monthly",
      userLimit: "Up to 25 users",
      features: ["Threat detection", "Automated response", "Vulnerability scanning", "Incident management"],
      benefits: ["Enhanced security", "Faster response", "Reduced risk", "Cost efficiency"],
      targetAudience: ["Financial institutions", "Healthcare", "Government", "E-commerce"],
      tags: ["Cybersecurity", "AI", "Threat Detection", "Automation", "Incident Response"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 28,
      name: "FinTech Compliance",
      category: "Financial Technology",
      pricing: "Freemium",
      description: "Regulatory compliance and risk management platform for financial services",
      price: 45,
      pricingModel: "monthly",
      userLimit: "Up to 15 users",
      features: ["Regulatory monitoring", "Risk assessment", "Compliance reporting", "Audit trails"],
      benefits: ["Regulatory compliance", "Risk mitigation", "Audit readiness", "Cost reduction"],
      targetAudience: ["Banks", "Credit unions", "Fintech startups", "Investment firms"],
      tags: ["FinTech", "Compliance", "Risk Management", "Regulations", "Auditing"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 29,
      name: "SmartCity Platform",
      category: "Smart Cities",
      pricing: "Freemium",
      description: "Comprehensive smart city management platform for urban infrastructure and services",
      price: 60,
      pricingModel: "monthly",
      userLimit: "Up to 50 city departments",
      features: ["Traffic management", "Energy optimization", "Waste management", "Public safety"],
      benefits: ["Efficiency improvement", "Cost reduction", "Quality of life", "Sustainability"],
      targetAudience: ["City governments", "Municipalities", "Urban planners", "Infrastructure companies"],
      tags: ["Smart Cities", "IoT", "Urban Planning", "Infrastructure", "Sustainability"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 30,
      name: "Metaverse Business",
      category: "Metaverse",
      pricing: "Freemium",
      description: "Complete metaverse business platform for virtual commerce and experiences",
      price: 55,
      pricingModel: "monthly",
      userLimit: "Up to 1000 virtual visitors",
      features: ["Virtual storefronts", "3D product showcases", "Virtual events", "Digital asset management"],
      benefits: ["New revenue streams", "Global reach", "Innovation leadership", "Customer engagement"],
      targetAudience: ["Retail businesses", "Event organizers", "Real estate", "Entertainment"],
      tags: ["Metaverse", "Virtual Reality", "Digital Commerce", "3D", "Virtual Events"],
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e86f
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

<<<<<<< HEAD
<<<<<<< HEAD
  const categories = ['all', 'Productivity', 'Finance', 'Marketing', 'CRM', 'Analytics', 'Scheduling', 'Content', 'Security', 'Media', 'Education', 'Sustainability', 'Legal', 'Healthcare', 'Events', 'Inventory', 'Human Resources', 'Blockchain', 'IoT', 'E-commerce', 'Quantum Computing', 'Augmented Reality', 'Edge Computing', 'Neural Interfaces', 'Biotechnology', 'Space Technology', 'Cybersecurity', 'Financial Technology', 'Smart Cities', 'Metaverse'];
=======
  const categories = ['all', 'Productivity', 'Finance', 'Marketing', 'CRM', 'Analytics', 'Scheduling', 'Content', 'Security', 'Media', 'Education', 'Sustainability', 'Legal', 'Healthcare', 'Events', 'Inventory', 'AI & Marketing', 'Customer Success', 'Human Resources'];
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-890c
=======
  const categories = ['all', 'Productivity', 'Finance', 'Marketing', 'CRM', 'Analytics', 'Scheduling', 'Content', 'Security', 'Media', 'Education', 'Sustainability', 'Legal', 'Healthcare', 'Events', 'Inventory', 'Development', 'Blockchain', 'IoT', 'Immersive Tech', 'AI', 'Infrastructure'];
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e86f
  const pricingModels = ['all', 'Freemium', 'Subscription', 'One-time'];

  const filteredServices = microSaasServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || service.pricing === selectedPricing;
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  const formatPrice = (price: number, model: string) => {
    switch (model) {
      case 'monthly':
        return `$${price}/month`;
      case 'yearly':
        return `$${price * 12}/year`;
      case 'one-time':
        return `$${price.toLocaleString()}`;
      default:
        return `$${price}`;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Productivity': return <Target className="w-6 h-6" />;
      case 'Finance': return <CreditCardIcon className="w-6 h-6" />;
      case 'Marketing': return <TrendingUp className="w-6 h-6" />;
      case 'CRM': return <UsersIcon className="w-6 h-6" />;
      case 'Analytics': return <BarChart3 className="w-6 h-6" />;
      case 'Scheduling': return <Calendar className="w-6 h-6" />;
      case 'Content': return <FileText className="w-6 h-6" />;
      case 'Security': return <Shield className="w-6 h-6" />;
      case 'Media': return <Video className="w-6 h-6" />;
      case 'Education': return <BookOpen className="w-6 h-6" />;
      case 'Development': return <Cpu className="w-6 h-6" />;
      case 'Blockchain': return <DatabaseIcon className="w-6 h-6" />;
      case 'IoT': return <Network className="w-6 h-6" />;
      case 'Immersive Tech': return <Eye className="w-6 h-6" />;
      case 'AI': return <Brain className="w-6 h-6" />;
      case 'Infrastructure': return <Server className="w-6 h-6" />;
      case 'Sustainability': return <Leaf className="w-6 h-6" />;
      case 'Legal': return <ShieldIcon className="w-6 h-6" />;
      case 'Healthcare': return <Heart className="w-6 h-6" />;
      case 'Events': return <Calendar className="w-6 h-6" />;
      case 'Inventory': return <ShoppingCart className="w-6 h-6" />;
      default: return <ZapIcon2 className="w-6 h-6" />;
    }
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'Freemium': return 'text-zion-cyan';
      case 'Subscription': return 'text-zion-purple';
      case 'One-time': return 'text-zion-purple-light';
      default: return 'text-zion-slate-light';
    }
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-purple-900/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)] animate-float"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-green-600 bg-clip-text text-transparent mb-4 animate-neon-pulse">
            Micro SAAS Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
            Affordable, focused software solutions designed specifically for small businesses, startups, and entrepreneurs
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <div className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-sm">
              <span className="animate-pulse">🚀</span> 20+ Solutions
            </div>
            <div className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-300 text-sm">
              <span className="animate-pulse">💰</span> Starting at $15/month
            </div>
            <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-300 text-sm">
              <span className="animate-pulse">⚡</span> Instant Setup
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e86f
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-cyan w-5 h-5" />
            <input
              type="text"
              placeholder="Search for innovative micro SAAS solutions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-black/30 backdrop-blur-sm border border-zion-cyan/30 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="px-3 py-1 bg-zion-cyan/20 border border-zion-cyan/30 rounded-lg text-xs text-zion-cyan">
                {filteredServices.length} services found
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-6 py-3 bg-black/30 backdrop-blur-sm border border-zion-cyan/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300 cursor-pointer"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-black text-white">
                  {category === 'all' ? '🌐 All Categories' : `📁 ${category}`}
                </option>
              ))}
            </select>
            
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-6 py-3 bg-black/30 backdrop-blur-sm border border-zion-cyan/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300 cursor-pointer"
            >
              {pricingModels.map(pricing => (
                <option key={pricing} value={pricing} className="bg-black text-white">
                  {pricing === 'all' ? '💰 All Pricing Models' : `💳 ${pricing}`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Grid */}
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div 
              key={service.id} 
              className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 group hover:scale-105 hover:-translate-y-2"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-green-400">
                    {getCategoryIcon(service.category)}
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e86f
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
                        {service.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-zion-slate-light mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                {service.description}
              </p>
              
              {/* Pricing */}
              <div className="mb-6 p-4 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-xl border border-zion-cyan/20">
                <div className="text-3xl font-bold text-white mb-1">
                  {formatPrice(service.price, service.pricingModel)}
                </div>
                <div className="text-sm text-zion-cyan">{service.userLimit}</div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-zion-cyan" />
                  Key Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-3 py-1 text-xs bg-zion-cyan/20 text-zion-cyan rounded-lg border border-zion-cyan/30">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Target Audience */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-zion-purple" />
                  Perfect For
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.slice(0, 2).map((audience, index) => (
                    <span key={index} className="px-3 py-1 text-xs bg-zion-purple/20 text-zion-purple rounded-lg border border-zion-purple/30">
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="border-t border-zion-cyan/20 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zion-slate-light">Ready to transform your business?</span>
                  <a 
                    href={service.contactInfo.website}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 group-hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Zion Tech Group */}
        <div className="mt-16 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proven ROI</h3>
              <p className="text-gray-300">Our micro SAAS solutions deliver 250-400% ROI within 3-8 months, with measurable business impact</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Rapid Implementation</h3>
              <p className="text-gray-300">Get up and running in 1-4 weeks with our streamlined onboarding and setup process</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with SOC 2 compliance, GDPR readiness, and industry-standard encryption</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Scale Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Our micro SAAS solutions are designed to grow with your business needs and provide measurable ROI
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
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
                  <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-zion-cyan/25"
                >
                  <Mail className="w-5 h-5" />
                  Get Started Today
                </a>
                <a 
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold hover:bg-zion-cyan hover:text-black transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e86f
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-600">
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Started Today
                </a>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-890c
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://ziontechgroup.com"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our Website
              </a>
              <a 
                href="/request-quote"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Request Custom Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasServices;
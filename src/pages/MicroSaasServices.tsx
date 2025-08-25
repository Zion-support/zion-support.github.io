import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Lock, Key, Globe2, ShieldCheck, BrainCircuit, Rocket, Target, Lightbulb, Code, Palette, DatabaseZap, CloudLightning, Brain, CpuIcon, Network2, Server, Database, Zap2, Shield2, Settings2, Eye2, Leaf2, CreditCard2, Heart2, Truck2, ShoppingCart2, Phone2, Mail2, MapPin2, Globe2, Bot2, Cpu2, Network3, Database2, Shield3, Zap3, Building3, Factory2, Store2, Car2, Plane2, Ship2, Home2, Hospital2, Building4, GraduationCap2, Calendar2, FileText2, BarChart4, Users2, CreditCard3, MessageSquare2, Camera2, Video2, Music2, BookOpen2, Target2, TrendingUp2, PieChart2, Activity2, Zap4 } from 'lucide-react';

export default function MicroSaasServices() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [services, setServices] = useState<MicroSaasService[]>(MICRO_SAAS_SERVICES);
  const [filteredServices, setFilteredServices] = useState<MicroSaasService[]>(MICRO_SAAS_SERVICES);

  // Enhanced Micro SAAS Services data with more real, useful services
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
    {
      id: 16,
      name: "CodeFlow IDE",
      category: "Development",
      pricing: "Freemium",
      description: "Cloud-based integrated development environment with AI-powered code completion and debugging",
      price: 45,
      pricingModel: "monthly",
      userLimit: "Up to 10 developers",
      features: ["AI code completion", "Real-time collaboration", "Cloud deployment", "Version control"],
      benefits: ["Faster development", "Team collaboration", "No setup required", "Cross-platform access"],
      targetAudience: ["Development teams", "Startups", "Freelancers", "Educational institutions"],
      tags: ["IDE", "Development", "AI", "Collaboration", "Cloud"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 17,
      name: "DataSync Pro",
      category: "Data Integration",
      pricing: "Freemium",
      description: "Automated data synchronization and ETL platform for business applications",
      price: 55,
      pricingModel: "monthly",
      userLimit: "Up to 20 data sources",
      features: ["Data connectors", "Real-time sync", "Data transformation", "Error handling"],
      benefits: ["Data consistency", "Time savings", "Reduced errors", "Scalable integration"],
      targetAudience: ["Data teams", "Business analysts", "IT departments", "Consulting firms"],
      tags: ["Data Integration", "ETL", "Automation", "Business Intelligence", "Data Pipeline"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 18,
      name: "CyberShield Pro",
      category: "Cybersecurity",
      pricing: "Freemium",
      description: "Comprehensive cybersecurity monitoring and threat detection for small businesses",
      price: 65,
      pricingModel: "monthly",
      userLimit: "Up to 50 endpoints",
      features: ["Threat detection", "Vulnerability scanning", "Security monitoring", "Incident response"],
      benefits: ["Enhanced security", "Compliance", "Risk reduction", "24/7 monitoring"],
      targetAudience: ["Small businesses", "Healthcare", "Finance", "Legal services"],
      tags: ["Cybersecurity", "Threat Detection", "Compliance", "Monitoring", "Incident Response"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 19,
      name: "CloudOps Manager",
      category: "Cloud Management",
      pricing: "Freemium",
      description: "Multi-cloud management and optimization platform for DevOps teams",
      price: 75,
      pricingModel: "monthly",
      userLimit: "Up to 15 users",
      features: ["Multi-cloud dashboard", "Cost optimization", "Resource monitoring", "Automation tools"],
      benefits: ["Cost savings", "Better visibility", "Automated operations", "Multi-cloud strategy"],
      targetAudience: ["DevOps teams", "Cloud architects", "IT managers", "Startups"],
      tags: ["Cloud Management", "DevOps", "Cost Optimization", "Multi-cloud", "Automation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 20,
      name: "API Gateway Pro",
      category: "API Management",
      pricing: "Freemium",
      description: "Enterprise-grade API gateway with rate limiting, authentication, and analytics",
      price: 60,
      pricingModel: "monthly",
      userLimit: "Up to 1000 API calls/min",
      features: ["Rate limiting", "Authentication", "API analytics", "Documentation"],
      benefits: ["API security", "Performance monitoring", "Developer experience", "Scalability"],
      targetAudience: ["API developers", "Startups", "Enterprises", "Platform companies"],
      tags: ["API Management", "Gateway", "Security", "Analytics", "Developer Tools"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 21,
      name: "Blockchain Builder",
      category: "Blockchain",
      pricing: "Freemium",
      description: "No-code blockchain application development platform for businesses",
      price: 85,
      pricingModel: "monthly",
      userLimit: "Up to 5 projects",
      features: ["Smart contract builder", "DApp templates", "Deployment tools", "Analytics dashboard"],
      benefits: ["Blockchain adoption", "Cost reduction", "Faster development", "No coding required"],
      targetAudience: ["Businesses", "Startups", "Consultants", "Educational institutions"],
      tags: ["Blockchain", "Smart Contracts", "DApps", "No-code", "DeFi"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 22,
      name: "IoT Hub Manager",
      category: "IoT",
      pricing: "Freemium",
      description: "Internet of Things device management and data analytics platform",
      price: 70,
      pricingModel: "monthly",
      userLimit: "Up to 1000 devices",
      features: ["Device management", "Data collection", "Real-time monitoring", "Alert system"],
      benefits: ["IoT insights", "Predictive maintenance", "Operational efficiency", "Cost reduction"],
      targetAudience: ["Manufacturing", "Smart cities", "Healthcare", "Agriculture"],
      tags: ["IoT", "Device Management", "Data Analytics", "Smart Cities", "Industry 4.0"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 23,
      name: "Quantum Simulator",
      category: "Quantum Computing",
      pricing: "Freemium",
      description: "Quantum computing simulation and algorithm development platform",
      price: 120,
      pricingModel: "monthly",
      userLimit: "Up to 10 users",
      features: ["Quantum circuits", "Algorithm library", "Simulation engine", "Performance analysis"],
      benefits: ["Quantum education", "Research capabilities", "Algorithm development", "Future readiness"],
      targetAudience: ["Researchers", "Universities", "Tech companies", "Students"],
      tags: ["Quantum Computing", "Simulation", "Algorithms", "Research", "Education"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 24,
      name: "AR/VR Studio",
      category: "Extended Reality",
      pricing: "Freemium",
      description: "Augmented and virtual reality content creation and management platform",
      price: 95,
      pricingModel: "monthly",
      userLimit: "Up to 8 creators",
      features: ["3D modeling", "Content creation", "Asset management", "Deployment tools"],
      benefits: ["Immersive experiences", "Content monetization", "Brand engagement", "Innovation"],
      targetAudience: ["Marketing agencies", "Game developers", "Educational institutions", "Entertainment"],
      tags: ["AR/VR", "3D Modeling", "Content Creation", "Immersive Tech", "Digital Twins"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 25,
      name: "Edge Computing Hub",
      category: "Edge Computing",
      pricing: "Freemium",
      description: "Edge computing infrastructure and application deployment platform",
      price: 80,
      pricingModel: "monthly",
      userLimit: "Up to 20 edge nodes",
      features: ["Edge deployment", "Load balancing", "Monitoring", "Security"],
      benefits: ["Low latency", "Bandwidth savings", "Offline capability", "Scalability"],
      targetAudience: ["IoT companies", "CDN providers", "Manufacturing", "Smart cities"],
      tags: ["Edge Computing", "IoT", "Low Latency", "Distributed Systems", "5G"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const categories = ['all', 'Productivity', 'Finance', 'Marketing', 'CRM', 'Analytics', 'Scheduling', 'Content', 'Security', 'Media', 'Education', 'Sustainability', 'Legal', 'Healthcare', 'Events', 'Inventory', 'Development', 'Data Integration', 'Cybersecurity', 'Cloud Management', 'API Management', 'Blockchain', 'IoT', 'Quantum Computing', 'Extended Reality', 'Edge Computing'];
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
      case "AI Services":
        return <Bot className="w-6 h-6" />;
      case "IT Services":
        return <Shield className="w-6 h-6" />;
      case "Micro SAAS":
        return <TrendingUp className="w-6 h-6" />;
      case "Development":
        return <Code className="w-6 h-6" />;
      case "Analytics":
        return <Database className="w-6 h-6" />;
      case "Security":
        return <Shield className="w-6 h-6" />;
      case "Cloud":
        return <Cloud className="w-6 h-6" />;
      case "Automation":
        return <Zap className="w-6 h-6" />;
      default:
        return <Briefcase className="w-6 h-6" />;
    }
  };

  const getPricingModelColor = (model: string) => {
    switch (model) {
      case "monthly":
        return "bg-blue-100 text-blue-800";
      case "yearly":
        return "bg-green-100 text-green-800";
      case "one-time":
        return "bg-purple-100 text-purple-800";
      case "usage-based":
        return "bg-orange-100 text-orange-800";
      case "hourly":
        return "bg-cyan-100 text-cyan-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover innovative micro SAAS solutions, AI services, and IT consulting. Transform your business with our cutting-edge technology services."
        keywords="micro SAAS, AI services, IT consulting, business solutions, technology services"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-zion-purple/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-zion-cyan/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-zion-purple-light/10 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Micro SAAS & AI Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto"
            >
              Transform your business with our innovative micro SAAS solutions, AI-powered services, and expert IT consulting. 
              Affordable, scalable, and designed for the modern digital economy.
            </motion.p>
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto border border-white/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-6 h-6 text-zion-cyan mb-2" />
                  <span className="text-zion-slate-light text-sm">Phone</span>
                  <span className="text-white font-semibold">+1 302 464 0950</span>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-6 h-6 text-zion-cyan mb-2" />
                  <span className="text-zion-slate-light text-sm">Email</span>
                  <span className="text-white font-semibold">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex flex-col items-center">
                  <Globe className="w-6 h-6 text-zion-cyan mb-2" />
                  <span className="text-zion-slate-light text-sm">Website</span>
                  <span className="text-white font-semibold">ziontechgroup.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-white/5 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                  <Input
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder-zion-slate-light"
                  />
                </div>
              </div>
              
              <div className="flex gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-40 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label} ({category.count})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="ai-score">AI Score</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-zion-purple/20 rounded-lg">
                              {getCategoryIcon(service.category)}
                            </div>
                            <Badge className={getPricingModelColor(service.pricingModel)}>
                              {service.pricingModel.replace('-', ' ')}
                            </Badge>
                          </div>
                          {service.featured && (
                            <Badge className="bg-zion-cyan text-zion-blue-dark">
                              Featured
                            </Badge>
                          )}
                        </div>
                        
                        <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                          {service.title}
                        </CardTitle>
                        
                        <CardDescription className="text-zion-slate-light">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        {/* Price and Rating */}
                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-white">
                            {service.currency}{service.price}
                            <span className="text-sm text-zion-slate-light ml-1">
                              {service.pricingModel === 'monthly' ? '/mo' : 
                               service.pricingModel === 'yearly' ? '/yr' :
                               service.pricingModel === 'hourly' ? '/hr' : ''}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white">{service.rating}</span>
                            <span className="text-zion-slate-light">({service.reviewCount})</span>
                          </div>
                        </div>
                        
                        {/* AI Score */}
                        <div className="flex items-center justify-between">
                          <span className="text-zion-slate-light">AI Score:</span>
                          <Badge className="bg-zion-purple text-white">
                            {service.aiScore}/100
                          </Badge>
                        </div>
                        
                        {/* Market Price */}
                        <div className="bg-zion-blue-dark/50 rounded-lg p-3">
                          <p className="text-sm text-zion-slate-light mb-1">Market Price:</p>
                          <p className="text-white text-sm">{service.marketPrice}</p>
                        </div>
                        
                        {/* Features */}
                        <div>
                          <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <Badge key={idx} variant="outline" className="text-zion-cyan border-zion-cyan/30">
                                {feature}
                              </Badge>
                            ))}
                            {service.features.length > 4 && (
                              <Badge variant="outline" className="text-zion-slate-light border-zion-slate-light/30">
                                +{service.features.length - 4} more
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        {/* Contact and Actions */}
                        <div className="pt-4 border-t border-white/20">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                              <Clock className="w-4 h-4" />
                              {service.availability}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                              <MapPin className="w-4 h-4" />
                              {service.location}
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button 
                              className="flex-1 bg-zion-purple hover:bg-zion-purple-light text-white"
                              onClick={() => window.open(`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`)}
                            >
                              <Mail className="w-4 h-4 mr-2" />
                              Get Quote
                            </Button>
                            <Button 
                              variant="outline" 
                              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark"
                              onClick={() => window.open(`tel:${service.contactInfo.phone}`)}
                            >
                              <Phone className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-zion-slate-light">Try adjusting your search criteria or browse all categories.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8"
            >
              Our team of experts is ready to help you implement the perfect solution for your business needs. 
              Get in touch today for a free consultation and quote.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="bg-white text-zion-purple hover:bg-zion-slate-light"
                onClick={() => window.open(`mailto:kleber@ziontechgroup.com?subject=Business Consultation Request`)}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-zion-purple"
                onClick={() => window.open(`tel:+13024640950`)}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
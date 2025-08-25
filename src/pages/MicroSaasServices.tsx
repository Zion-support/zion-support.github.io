import React, { useState, useEffect } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Package, Wifi, ArrowRight, CheckCircle, Sparkles, Rocket, Award, TrendingUp as TrendingUpIcon } from 'lucide-react';

const MicroSaasServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
        website: "https://ziontechgroup.com/inventorysmart"
      }
    },
    {
      id: 16,
      name: "CodeSync Pro",
      category: "Development",
      pricing: "Freemium",
      description: "AI-powered code review and collaboration platform for development teams",
      price: 45,
      pricingModel: "monthly",
      userLimit: "Up to 25 developers",
      features: ["AI code review", "Git integration", "Code quality metrics", "Team collaboration", "Security scanning"],
      benefits: ["Faster code reviews", "Better code quality", "Security improvement", "Team productivity"],
      targetAudience: ["Development teams", "Startups", "Tech companies", "Freelance developers"],
      tags: ["Code Review", "AI", "Development", "Collaboration", "Security"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/codesync-pro"
      }
    },
    {
      id: 17,
      name: "DataGuardian",
      category: "Data Protection",
      pricing: "Subscription",
      description: "Comprehensive data backup and disaster recovery solution for businesses",
      price: 60,
      pricingModel: "monthly",
      userLimit: "Unlimited data",
      features: ["Automated backups", "Cloud storage", "Disaster recovery", "Compliance reporting", "24/7 monitoring"],
      benefits: ["Data security", "Business continuity", "Compliance", "Peace of mind"],
      targetAudience: ["Small businesses", "Healthcare", "Finance", "Legal services"],
      tags: ["Data Backup", "Disaster Recovery", "Security", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/dataguardian"
      }
    },
    {
      id: 18,
      name: "HR Suite Pro",
      category: "Human Resources",
      pricing: "Freemium",
      description: "Complete HR management system for small to medium businesses",
      price: 35,
      pricingModel: "monthly",
      userLimit: "Up to 100 employees",
      features: ["Employee onboarding", "Time tracking", "Payroll integration", "Performance reviews", "Benefits management"],
      benefits: ["Streamlined HR processes", "Compliance", "Employee satisfaction", "Cost reduction"],
      targetAudience: ["Small businesses", "Startups", "Consulting firms", "Service companies"],
      tags: ["HR Management", "Employee Onboarding", "Time Tracking", "Payroll", "Performance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/hr-suite-pro"
      }
    },
    {
      id: 19,
      name: "AIAnalytics Pro",
      category: "AI & Analytics",
      pricing: "Freemium",
      description: "Advanced AI-powered business intelligence and predictive analytics platform",
      price: 55,
      pricingModel: "monthly",
      userLimit: "Up to 20 users",
      features: ["AI insights", "Predictive modeling", "Custom dashboards", "Data visualization", "Real-time alerts"],
      benefits: ["Better decision making", "Predictive insights", "Competitive advantage", "Data-driven growth"],
      targetAudience: ["Business analysts", "Executives", "Marketing teams", "Data scientists"],
      tags: ["AI Analytics", "Business Intelligence", "Predictive Modeling", "Data Visualization"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/ai-analytics-pro"
      }
    },
    {
      id: 20,
      name: "ChatBot Studio",
      category: "AI & Automation",
      pricing: "Freemium",
      description: "AI-powered chatbot builder for customer service and lead generation",
      price: 38,
      pricingModel: "monthly",
      userLimit: "Up to 10 chatbots",
      features: ["No-code builder", "AI training", "Multi-language support", "Analytics dashboard", "Integration APIs"],
      benefits: ["24/7 customer support", "Lead generation", "Cost reduction", "Customer satisfaction"],
      targetAudience: ["E-commerce", "Service businesses", "Startups", "Marketing agencies"],
      tags: ["Chatbot", "AI", "Customer Service", "Automation", "Lead Generation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/chatbot-studio"
      }
    },
    {
      id: 21,
      name: "DevOpsFlow",
      category: "Development",
      pricing: "Subscription",
      description: "Complete CI/CD automation and DevOps pipeline management platform",
      price: 42,
      pricingModel: "monthly",
      userLimit: "Up to 30 developers",
      features: ["CI/CD pipelines", "Docker integration", "Kubernetes support", "Monitoring", "Security scanning"],
      benefits: ["Faster deployments", "Better reliability", "Security compliance", "Team efficiency"],
      targetAudience: ["Development teams", "DevOps engineers", "Tech companies", "Startups"],
      tags: ["DevOps", "CI/CD", "Automation", "Docker", "Kubernetes"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/devopsflow"
      }
    },
    {
      id: 22,
      name: "API Gateway Pro",
      category: "Development",
      pricing: "Freemium",
      description: "Enterprise-grade API management and gateway solution for microservices",
      price: 28,
      pricingModel: "monthly",
      userLimit: "Up to 1000 API calls/month",
      features: ["API gateway", "Rate limiting", "Authentication", "Analytics", "Documentation"],
      benefits: ["Better API security", "Performance monitoring", "Developer experience", "Scalability"],
      targetAudience: ["API developers", "Tech companies", "Startups", "Enterprise teams"],
      tags: ["API Management", "Gateway", "Microservices", "Security", "Analytics"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/api-gateway-pro"
      }
    },
    {
      id: 23,
      name: "LegalAssist AI",
      category: "Legal Tech",
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
        website: "https://ziontechgroup.com/legalassist-ai"
      }
    },
    {
      id: 24,
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
        website: "https://ziontechgroup.com/ecotrack-pro"
      }
    },
    {
      id: 25,
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
        website: "https://ziontechgroup.com/healthtrack-plus"
      }
    },
    {
      id: 26,
      name: "QuantumFlow AI",
      category: "AI & Analytics",
      pricing: "Premium",
      description: "Next-generation quantum-inspired AI algorithms for complex problem solving",
      price: 75,
      pricingModel: "monthly",
      userLimit: "Up to 15 users",
      features: ["Quantum algorithms", "Complex optimization", "Machine learning", "Real-time processing", "Advanced analytics"],
      benefits: ["Competitive advantage", "Complex problem solving", "Faster insights", "Innovation leadership"],
      targetAudience: ["Research institutions", "Tech companies", "Financial services", "Pharmaceutical companies"],
      tags: ["Quantum AI", "Machine Learning", "Optimization", "Research", "Innovation"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/quantumflow-ai"
      }
    },
    {
      id: 27,
      name: "BlockChain Forge",
      category: "Blockchain",
      pricing: "Enterprise",
      description: "Enterprise blockchain development and smart contract platform for businesses",
      price: 120,
      pricingModel: "monthly",
      userLimit: "Up to 50 users",
      features: ["Smart contracts", "DApp development", "Blockchain infrastructure", "Security auditing", "Compliance tools"],
      benefits: ["Transparency", "Security", "Automation", "Cost reduction", "Trust building"],
      targetAudience: ["Financial services", "Supply chain", "Healthcare", "Government", "Real estate"],
      tags: ["Blockchain", "Smart Contracts", "DApps", "Security", "Compliance"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/blockchain-forge"
      }
    },
    {
      id: 28,
      name: "IoT Nexus Hub",
      category: "IoT",
      pricing: "Premium",
      description: "Comprehensive IoT platform for device management and data analytics",
      price: 65,
      pricingModel: "monthly",
      userLimit: "Up to 1000 devices",
      features: ["Device management", "Real-time monitoring", "Data analytics", "Automation rules", "Security protocols"],
      benefits: ["Operational efficiency", "Predictive maintenance", "Cost savings", "Data insights"],
      targetAudience: ["Manufacturing", "Smart cities", "Healthcare", "Agriculture", "Energy"],
      tags: ["IoT", "Device Management", "Real-time Monitoring", "Automation", "Analytics"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/iot-nexus-hub"
      }
    },
    {
      id: 29,
      name: "CyberShield Pro",
      category: "Cybersecurity",
      pricing: "Enterprise",
      description: "Advanced cybersecurity platform with AI-powered threat detection and response",
      price: 95,
      pricingModel: "monthly",
      userLimit: "Up to 100 users",
      features: ["Threat detection", "AI analysis", "Incident response", "Compliance reporting", "24/7 monitoring"],
      benefits: ["Enhanced security", "Threat prevention", "Compliance", "Peace of mind", "Cost reduction"],
      targetAudience: ["Financial services", "Healthcare", "Government", "E-commerce", "Tech companies"],
      tags: ["Cybersecurity", "AI", "Threat Detection", "Compliance", "Monitoring"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/cybershield-pro"
      }
    },
    {
      id: 30,
      name: "DataFusion Studio",
      category: "Data & Analytics",
      pricing: "Premium",
      description: "Advanced data integration and analytics platform for enterprise insights",
      price: 85,
      pricingModel: "monthly",
      userLimit: "Up to 30 users",
      features: ["Data integration", "ETL pipelines", "Advanced analytics", "Machine learning", "Real-time dashboards"],
      benefits: ["Better insights", "Data-driven decisions", "Operational efficiency", "Competitive advantage"],
      targetAudience: ["Data scientists", "Business analysts", "Executives", "IT teams"],
      tags: ["Data Integration", "Analytics", "Machine Learning", "ETL", "Business Intelligence"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/datafusion-studio"
      }
    }
  ];

  // Filter services based on search and filters
  const filteredServices = microSaasServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || service.pricing === selectedPricing;
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'Productivity': <Zap className="w-6 h-6" />,
      'Finance': <DollarSign className="w-6 h-6" />,
      'Marketing': <Target className="w-6 h-6" />,
      'CRM': <Users className="w-6 h-6" />,
      'Analytics': <BarChart3 className="w-6 h-6" />,
      'Scheduling': <Calendar className="w-6 h-6" />,
      'Content': <FileText className="w-6 h-6" />,
      'Security': <Shield className="w-6 h-6" />,
      'Media': <Camera className="w-6 h-6" />,
      'Education': <GraduationCap className="w-6 h-6" />
    };
    return iconMap[category] || <Settings className="w-6 h-6" />;
  };

  const getPricingColor = (pricing: string) => {
    const colorMap: { [key: string]: string } = {
      'Freemium': 'text-green-400',
      'Premium': 'text-blue-400',
      'Enterprise': 'text-purple-400'
    };
    return colorMap[pricing] || 'text-gray-400';
  };

  const formatPrice = (price: number, model: string) => {
    return `$${price}/${model}`;
  };

  const categories = ['all', ...Array.from(new Set(microSaasServices.map(service => service.category)))];
  const pricingModels = ['all', ...Array.from(new Set(microSaasServices.map(service => service.pricing)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-medium">Micro SAAS Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover powerful, scalable software solutions designed to streamline your operations, 
            boost productivity, and drive growth. Start small, scale smart.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">10+</div>
            <div className="text-gray-400">Solutions Available</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-400">Happy Customers</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400">Uptime Guarantee</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUpIcon className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none cursor-pointer"
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="bg-gray-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Pricing Filter */}
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedPricing}
                onChange={(e) => setSelectedPricing(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none cursor-pointer"
              >
                {pricingModels.map((pricing) => (
                  <option key={pricing} value={pricing} className="bg-gray-800 text-white">
                    {pricing === 'all' ? 'All Pricing' : pricing}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-400">
            Showing <span className="text-white font-semibold">{filteredServices.length}</span> of{' '}
            <span className="text-white font-semibold">{microSaasServices.length}</span> services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="group bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-1">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-green-400 group-hover:scale-110 transition-transform duration-200">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPricingColor(service.pricing)} bg-opacity-20 bg-current`}>
                        {service.pricing}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full text-green-400 bg-green-400 bg-opacity-20">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
              
              {/* Pricing */}
              <div className="mb-4">
                <div className="text-2xl font-bold text-white mb-2">
                  {formatPrice(service.price, service.pricingModel)}
                </div>
                <div className="text-sm text-gray-400">{service.userLimit}</div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Key Features:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Target Audience */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  Perfect For:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.slice(0, 2).map((audience, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Start your free trial today</span>
                  <a 
                    href={service.contactInfo.website}
                    className="group/btn flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors px-4 py-2 rounded-lg hover:bg-green-400/10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-20 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Scale Your Business?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Our micro SAAS solutions are designed to grow with your business needs. 
              Get in touch to learn how we can help you succeed.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-semibold text-lg mb-2">Phone</p>
                <p className="text-gray-300">{microSaasServices[0].contactInfo.phone}</p>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-semibold text-lg mb-2">Email</p>
                <p className="text-gray-300">{microSaasServices[0].contactInfo.email}</p>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-semibold text-lg mb-2">Address</p>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasServices;
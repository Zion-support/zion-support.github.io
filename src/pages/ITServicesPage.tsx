<<<<<<< HEAD
import React, { useState } from 'react';
<<<<<<< HEAD
import { Search, Filter, Server, Cloud, Shield, Database, Network, Zap, Users, TrendingUp, BarChart3, MessageSquare, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Star, Clock, DollarSign, Globe, Bot, Cpu, Settings, Monitor, HardDrive, Wifi, Lock } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  // IT Services data
  const itServices = [
    {
      id: 1,
      name: "Cloud Infrastructure Manager",
      category: "Cloud Services",
      subcategory: "Infrastructure Management",
      pricing: "Freemium",
      description: "Enterprise-grade cloud infrastructure management platform with automated scaling, cost optimization, and security monitoring across multiple cloud providers.",
      price: 150,
      pricingModel: "monthly",
      userLimit: "Up to 20 users",
      features: ["Multi-cloud management", "Automated scaling", "Cost optimization", "Security monitoring", "Backup solutions", "Disaster recovery"],
      benefits: ["Reduce cloud costs by 40%", "Improve uptime to 99.9%", "Automated infrastructure management", "Enhanced security"],
      targetAudience: ["Enterprise companies", "Mid-size businesses", "Startups", "IT departments"],
      tags: ["Cloud Infrastructure", "Multi-cloud", "Automation", "Cost Optimization", "Security"],
      marketPrice: "$150/month (Industry average: $280/month)",
      roi: "300% ROI within 6 months",
      implementationTime: "2-3 weeks",
=======
import { 
  Server, Cloud, Shield, Database, Wifi, Lock, Brain, Zap, Rocket, Globe, 
  Building, Users, BarChart3, Palette, Code, Monitor, Smartphone, Tablet, 
  Printer, Scanner, Microphone, Headphones, Gamepad2, Watch, Thermometer, 
  Lightbulb, Battery, Leaf, Target, TrendingUp, ArrowRight, CheckCircle, 
  Star, Clock, DollarSign, Phone, Mail, MapPin, ChevronRight, Settings,
  Cpu, Network, HardDrive, Router, Firewall, Backup, Recovery, Analytics,
  Automation, Integration, Migration, Optimization, Maintenance, Support,
  X
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<any>(null);

  const serviceCategories = [
    {
      id: 'infrastructure',
      name: 'Infrastructure & Cloud',
      icon: <Server className="w-6 h-6" />,
      description: 'Scalable cloud solutions and infrastructure management',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'security',
      name: 'Cybersecurity',
      icon: <Shield className="w-6 h-6" />,
      description: 'Advanced security and compliance solutions',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      description: 'Intelligent automation and data insights',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'devops',
      name: 'DevOps & Automation',
      icon: <Zap className="w-6 h-6" />,
      description: 'Streamlined development and deployment',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'data',
      name: 'Data & Analytics',
      icon: <Database className="w-6 h-6" />,
      description: 'Data management and business intelligence',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'digital',
      name: 'Digital Transformation',
      icon: <Globe className="w-6 h-6" />,
      description: 'Modernize your business operations',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const itServices = [
    // Infrastructure & Cloud Services
    {
      id: 1,
      name: "Cloud Migration & Strategy",
      category: "infrastructure",
      description: "Comprehensive cloud migration planning and execution for enterprise applications",
      features: [
        "Cloud readiness assessment",
        "Migration strategy development",
        "Application modernization",
        "Cost optimization",
        "Performance monitoring",
        "Disaster recovery planning"
      ],
      benefits: [
        "Reduced infrastructure costs",
        "Improved scalability",
        "Enhanced performance",
        "Better security",
        "24/7 availability",
        "Faster deployment"
      ],
      pricing: "Custom",
      duration: "8-16 weeks",
      expertise: "Senior Cloud Architects",
      technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"],
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3158
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 2,
<<<<<<< HEAD
      name: "Cybersecurity Defense Suite",
      category: "Security",
      subcategory: "Threat Protection",
      pricing: "Freemium",
      description: "Comprehensive cybersecurity solution providing advanced threat detection, real-time monitoring, and automated incident response for businesses of all sizes.",
      price: 200,
      pricingModel: "monthly",
      userLimit: "Up to 50 users",
      features: ["Threat detection", "Real-time monitoring", "Incident response", "Vulnerability assessment", "Compliance reporting", "24/7 SOC"],
      benefits: ["Detect threats 10x faster", "Reduce security incidents by 80%", "Automated response", "Compliance assurance"],
      targetAudience: ["Financial services", "Healthcare", "Legal services", "Manufacturing", "Retail"],
      tags: ["Cybersecurity", "Threat Detection", "Incident Response", "Compliance", "SOC"],
      marketPrice: "$200/month (Industry average: $400/month)",
      roi: "250% ROI within 8 months",
      implementationTime: "3-4 weeks",
=======
      name: "Managed IT Services",
      category: "infrastructure",
      description: "Complete IT infrastructure management and monitoring for businesses",
      features: [
        "24/7 network monitoring",
        "Proactive maintenance",
        "Help desk support",
        "Security management",
        "Backup and recovery",
        "Performance optimization"
      ],
      benefits: [
        "Reduced IT overhead",
        "Improved uptime",
        "Better security",
        "Cost predictability",
        "Expert support",
        "Scalable solutions"
      ],
      pricing: "From $2,500/month",
      duration: "Ongoing",
      expertise: "IT Operations Specialists",
      technologies: ["Monitoring Tools", "Automation", "Cloud Platforms", "Security Tools"],
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3158
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 3,
<<<<<<< HEAD
      name: "Network Performance Monitor",
      category: "Networking",
      subcategory: "Performance Monitoring",
      pricing: "Freemium",
      description: "Advanced network monitoring and performance optimization platform that provides real-time insights, automated troubleshooting, and capacity planning.",
      price: 120,
      pricingModel: "monthly",
      userLimit: "Up to 15 users",
      features: ["Real-time monitoring", "Performance analytics", "Automated troubleshooting", "Capacity planning", "Alert management", "Reporting"],
      benefits: ["Improve network uptime by 99.5%", "Reduce troubleshooting time by 70%", "Proactive issue resolution", "Better resource planning"],
      targetAudience: ["Network administrators", "IT teams", "Managed service providers", "Enterprise companies"],
      tags: ["Network Monitoring", "Performance", "Troubleshooting", "Capacity Planning", "Analytics"],
      marketPrice: "$120/month (Industry average: $220/month)",
      roi: "280% ROI within 5 months",
      implementationTime: "1-2 weeks",
=======
      name: "Network Infrastructure Design",
      category: "infrastructure",
      description: "Enterprise-grade network architecture and implementation",
      features: [
        "Network assessment",
        "Architecture design",
        "Implementation",
        "Security integration",
        "Performance testing",
        "Documentation"
      ],
      benefits: [
        "Improved performance",
        "Enhanced security",
        "Better scalability",
        "Reduced downtime",
        "Future-proof design",
        "Compliance ready"
      ],
      pricing: "From $15,000",
      duration: "4-8 weeks",
      expertise: "Network Engineers",
      technologies: ["Cisco", "Juniper", "Aruba", "SD-WAN", "WiFi 6", "5G"],
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3158
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
<<<<<<< HEAD
    {
      id: 4,
      name: "Data Backup & Recovery Pro",
      category: "Data Management",
      subcategory: "Backup & Recovery",
      pricing: "Freemium",
      description: "Enterprise-grade data backup and disaster recovery solution with automated backups, instant recovery, and comprehensive data protection.",
      price: 95,
      pricingModel: "monthly",
      userLimit: "Unlimited data",
      features: ["Automated backups", "Instant recovery", "Data encryption", "Cloud storage", "Disaster recovery", "Compliance support"],
      benefits: ["Zero data loss guarantee", "Instant recovery in minutes", "Reduce backup windows by 80%", "Compliance ready"],
      targetAudience: ["All businesses", "Healthcare", "Financial services", "Legal services", "Manufacturing"],
      tags: ["Data Backup", "Disaster Recovery", "Cloud Storage", "Encryption", "Compliance"],
      marketPrice: "$95/month (Industry average: $180/month)",
      roi: "400% ROI within 3 months",
      implementationTime: "1 week",
=======

    // Cybersecurity Services
    {
      id: 4,
      name: "Cybersecurity Assessment",
      category: "security",
      description: "Comprehensive security evaluation and vulnerability assessment",
      features: [
        "Security audit",
        "Penetration testing",
        "Vulnerability scanning",
        "Risk assessment",
        "Compliance review",
        "Security roadmap"
      ],
      benefits: [
        "Identify vulnerabilities",
        "Improve security posture",
        "Meet compliance requirements",
        "Reduce risk exposure",
        "Build customer trust",
        "Protect brand reputation"
      ],
      pricing: "From $8,000",
      duration: "2-4 weeks",
      expertise: "Security Analysts",
      technologies: ["Nessus", "Metasploit", "Burp Suite", "Wireshark", "Nmap"],
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3158
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 5,
<<<<<<< HEAD
      name: "DevOps Automation Platform",
      category: "DevOps",
      subcategory: "Automation",
      pricing: "Freemium",
      description: "Comprehensive DevOps automation platform that streamlines software development, testing, and deployment processes with CI/CD pipelines.",
      price: 180,
      pricingModel: "monthly",
      userLimit: "Up to 25 users",
      features: ["CI/CD pipelines", "Automated testing", "Deployment automation", "Infrastructure as code", "Monitoring", "Collaboration tools"],
      benefits: ["Deploy 10x faster", "Reduce deployment failures by 90%", "Improve team collaboration", "Automated quality assurance"],
      targetAudience: ["Development teams", "DevOps engineers", "Startups", "Enterprise companies"],
      tags: ["DevOps", "CI/CD", "Automation", "Testing", "Deployment"],
      marketPrice: "$180/month (Industry average: $320/month)",
      roi: "350% ROI within 6 months",
      implementationTime: "2-3 weeks",
=======
      name: "Security Operations Center (SOC)",
      category: "security",
      description: "24/7 security monitoring and incident response services",
      features: [
        "Real-time monitoring",
        "Threat detection",
        "Incident response",
        "Security analytics",
        "Compliance reporting",
        "Threat intelligence"
      ],
      benefits: [
        "24/7 protection",
        "Faster response times",
        "Reduced incident impact",
        "Compliance assurance",
        "Expert security team",
        "Proactive defense"
      ],
      pricing: "From $5,000/month",
      duration: "Ongoing",
      expertise: "Security Engineers",
      technologies: ["SIEM", "EDR", "SOAR", "Threat Intel", "Analytics"],
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3158
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
<<<<<<< HEAD
    {
      id: 6,
      name: "IT Asset Management System",
      category: "Asset Management",
      subcategory: "IT Inventory",
      pricing: "Freemium",
      description: "Comprehensive IT asset management solution that tracks hardware, software, licenses, and provides lifecycle management for optimal resource utilization.",
      price: 85,
      pricingModel: "monthly",
      userLimit: "Up to 30 users",
      features: ["Asset tracking", "License management", "Lifecycle management", "Cost optimization", "Compliance reporting", "Integration"],
      benefits: ["Reduce IT costs by 25%", "Improve asset utilization", "Ensure license compliance", "Better planning"],
      targetAudience: ["IT departments", "Asset managers", "Finance teams", "Enterprise companies"],
      tags: ["Asset Management", "License Management", "Cost Optimization", "Compliance", "Planning"],
      marketPrice: "$85/month (Industry average: $160/month)",
      roi: "300% ROI within 4 months",
      implementationTime: "1-2 weeks",
=======

    // AI & ML Services
    {
      id: 6,
      name: "AI Strategy & Implementation",
      category: "ai-ml",
      description: "Strategic AI planning and implementation for business transformation",
      features: [
        "AI readiness assessment",
        "Strategy development",
        "Use case identification",
        "Technology selection",
        "Implementation planning",
        "ROI analysis"
      ],
      benefits: [
        "Competitive advantage",
        "Process automation",
        "Better decision making",
        "Cost reduction",
        "Improved efficiency",
        "Innovation leadership"
      ],
      pricing: "From $25,000",
      duration: "12-24 weeks",
      expertise: "AI Specialists",
      technologies: ["TensorFlow", "PyTorch", "Azure ML", "AWS SageMaker", "Python"],
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3158
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 7,
<<<<<<< HEAD
      name: "Help Desk & Support Platform",
      category: "Support Services",
      subcategory: "Help Desk",
      pricing: "Freemium",
      description: "Modern help desk and support platform with ticket management, knowledge base, and self-service portal for efficient IT support operations.",
      price: 75,
      pricingModel: "monthly",
      userLimit: "Up to 20 agents",
      features: ["Ticket management", "Knowledge base", "Self-service portal", "SLA monitoring", "Reporting", "Integration"],
      benefits: ["Improve support efficiency by 60%", "Reduce response times", "Better customer satisfaction", "Automated workflows"],
      targetAudience: ["IT support teams", "Customer service", "Managed service providers", "Enterprise companies"],
      tags: ["Help Desk", "Support", "Knowledge Base", "SLA", "Automation"],
      marketPrice: "$75/month (Industry average: $140/month)",
      roi: "280% ROI within 5 months",
      implementationTime: "1-2 weeks",
=======
      name: "Machine Learning Models",
      category: "ai-ml",
      description: "Custom ML model development and deployment",
      features: [
        "Data preparation",
        "Model development",
        "Training & validation",
        "Deployment",
        "Monitoring",
        "Maintenance"
      ],
      benefits: [
        "Predictive insights",
        "Automated processes",
        "Data-driven decisions",
        "Scalable solutions",
        "Continuous improvement",
        "Competitive edge"
      ],
      pricing: "From $15,000",
      duration: "8-16 weeks",
      expertise: "ML Engineers",
      technologies: ["Python", "R", "TensorFlow", "PyTorch", "MLflow", "Kubernetes"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // DevOps Services
    {
      id: 8,
      name: "CI/CD Pipeline Setup",
      category: "devops",
      description: "Automated development and deployment pipelines",
      features: [
        "Pipeline design",
        "Automation setup",
        "Testing integration",
        "Deployment automation",
        "Monitoring setup",
        "Documentation"
      ],
      benefits: [
        "Faster deployments",
        "Reduced errors",
        "Better quality",
        "Team productivity",
        "Faster feedback",
        "Scalable processes"
      ],
      pricing: "From $12,000",
      duration: "4-8 weeks",
      expertise: "DevOps Engineers",
      technologies: ["Jenkins", "GitLab CI", "GitHub Actions", "Docker", "Kubernetes"],
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3158
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
<<<<<<< HEAD
      id: 8,
      name: "Database Performance Optimizer",
      category: "Database",
      subcategory: "Performance",
      pricing: "Freemium",
      description: "Advanced database performance monitoring and optimization platform that identifies bottlenecks and provides automated tuning recommendations.",
      price: 140,
      pricingModel: "monthly",
      userLimit: "Up to 10 databases",
      features: ["Performance monitoring", "Query optimization", "Index recommendations", "Capacity planning", "Alerting", "Reporting"],
      benefits: ["Improve database performance by 50%", "Reduce query time by 70%", "Proactive optimization", "Better resource utilization"],
      targetAudience: ["Database administrators", "Developers", "IT teams", "Enterprise companies"],
      tags: ["Database", "Performance", "Optimization", "Monitoring", "Tuning"],
      marketPrice: "$140/month (Industry average: $250/month)",
      roi: "320% ROI within 6 months",
      implementationTime: "2-3 weeks",
=======
      id: 9,
      name: "Infrastructure as Code",
      category: "devops",
      description: "Automated infrastructure provisioning and management",
      features: [
        "Infrastructure design",
        "Code development",
        "Testing & validation",
        "Deployment automation",
        "Monitoring setup",
        "Documentation"
      ],
      benefits: [
        "Consistent deployments",
        "Faster provisioning",
        "Better scalability",
        "Reduced errors",
        "Version control",
        "Disaster recovery"
      ],
      pricing: "From $18,000",
      duration: "6-12 weeks",
      expertise: "DevOps Engineers",
      technologies: ["Terraform", "Ansible", "CloudFormation", "ARM Templates"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // Data Services
    {
      id: 10,
      name: "Data Architecture & Strategy",
      category: "data",
      description: "Comprehensive data strategy and architecture design",
      features: [
        "Data assessment",
        "Architecture design",
        "Strategy development",
        "Technology selection",
        "Implementation planning",
        "Governance setup"
      ],
      benefits: [
        "Better data quality",
        "Improved insights",
        "Regulatory compliance",
        "Cost optimization",
        "Scalable solutions",
        "Data-driven decisions"
      ],
      pricing: "From $20,000",
      duration: "8-16 weeks",
      expertise: "Data Architects",
      technologies: ["Snowflake", "Databricks", "AWS Redshift", "Azure Synapse"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 11,
      name: "Business Intelligence & Analytics",
      category: "data",
      description: "Data visualization and business intelligence solutions",
      features: [
        "Data modeling",
        "Dashboard development",
        "Report automation",
        "Analytics setup",
        "User training",
        "Maintenance"
      ],
      benefits: [
        "Better insights",
        "Faster decisions",
        "Automated reporting",
        "Data democratization",
        "Performance tracking",
        "Strategic planning"
      ],
      pricing: "From $15,000",
      duration: "6-12 weeks",
      expertise: "BI Developers",
      technologies: ["Power BI", "Tableau", "Qlik", "Looker", "SQL", "Python"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // Digital Transformation
    {
      id: 12,
      name: "Digital Transformation Consulting",
      category: "digital",
      description: "Strategic guidance for digital business transformation",
      features: [
        "Current state assessment",
        "Transformation roadmap",
        "Technology strategy",
        "Change management",
        "Implementation support",
        "Success measurement"
      ],
      benefits: [
        "Modern operations",
        "Competitive advantage",
        "Improved efficiency",
        "Better customer experience",
        "Cost reduction",
        "Future readiness"
      ],
      pricing: "From $35,000",
      duration: "16-32 weeks",
      expertise: "Digital Transformation Consultants",
      technologies: ["Cloud", "AI/ML", "IoT", "Automation", "Analytics"],
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3158
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

<<<<<<< HEAD
  const categories = ['all', 'Cloud Services', 'Security', 'Networking', 'Data Management', 'DevOps', 'Asset Management', 'Support Services', 'Database'];
  const pricingModels = ['all', 'Freemium', 'Subscription', 'One-time'];

  const filteredServices = itServices.filter(service => {
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
      case 'Cloud Services': return <Cloud className="w-6 h-6" />;
      case 'Security': return <Shield className="w-6 h-6" />;
      case 'Networking': return <Network className="w-6 h-6" />;
      case 'Data Management': return <Database className="w-6 h-6" />;
      case 'DevOps': return <Zap className="w-6 h-6" />;
      case 'Asset Management': return <HardDrive className="w-6 h-6" />;
      case 'Support Services': return <MessageSquare className="w-6 h-6" />;
      case 'Database': return <Database className="w-6 h-6" />;
      default: return <Server className="w-6 h-6" />;
    }
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'Freemium': return 'text-green-400';
      case 'Subscription': return 'text-blue-400';
      case 'One-time': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive IT infrastructure, security, and technical solutions designed to modernize and optimize your business technology operations
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search IT services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {pricingModels.map(pricing => (
                <option key={pricing} value={pricing} className="bg-gray-800 text-white">
                  {pricing === 'all' ? 'All Pricing Models' : pricing}
                </option>
              ))}
            </select>
=======
  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  const getCategoryColor = (categoryId: string) => {
    const category = serviceCategories.find(cat => cat.id === categoryId);
    return category ? category.color : 'from-gray-500 to-gray-600';
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = serviceCategories.find(cat => cat.id === categoryId);
    return category ? category.icon : <Settings className="w-6 h-6" />;
  };

  return (
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
            <Server className="w-4 h-4" />
            Enterprise IT Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-zion-cyan via-white to-zion-purple bg-clip-text text-transparent mb-6 animate-neon-pulse">
            IT Services & Solutions
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Comprehensive IT services designed to transform your business operations, 
            enhance security, and drive innovation through cutting-edge technology.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">{itServices.length}+</div>
              <div className="text-zion-slate-light text-sm">Services Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-purple mb-2">6</div>
              <div className="text-zion-slate-light text-sm">Service Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-zion-slate-light text-sm">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-zion-slate-light text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(selectedCategory === category.id ? 'all' : category.id)}
                className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'border-zion-cyan bg-zion-cyan/10 shadow-2xl shadow-zion-cyan/20'
                    : 'border-zion-cyan/20 bg-black/40 hover:border-zion-cyan/40 hover:bg-black/60'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </div>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-zion-cyan text-sm font-medium">
                  <span>View Services</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3158
          </div>
        </div>

        {/* Services Grid */}
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-blue-400">
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPricingColor(service.pricing)} bg-opacity-20 bg-current`}>
                        {service.pricing}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full text-blue-400 bg-blue-400 bg-opacity-20">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-white mb-2">
                  {formatPrice(service.price, service.pricingModel)}
                </div>
                <div className="text-sm text-gray-400">{service.userLimit}</div>
                <div className="text-sm text-green-400 font-medium">{service.marketPrice}</div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Perfect For:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.slice(0, 2).map((audience, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded">
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Start your free trial today</span>
                  <a 
                    href={service.contactInfo.website}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Modernize Your IT Infrastructure?</h2>
            <p className="text-gray-300 mb-6">
              Our IT solutions are designed to scale with your business and provide enterprise-grade reliability
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
=======
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {selectedCategory === 'all' ? 'All Services' : `${serviceCategories.find(cat => cat.id === selectedCategory)?.name} Services`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div 
                key={service.id} 
                className="group bg-black/40 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 hover:bg-black/60 hover:border-zion-cyan/40 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/20 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Service Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center text-white`}>
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan-light transition-colors mb-2">
                      {service.name}
                    </h3>
                    <div className="px-3 py-1 text-xs font-semibold rounded-full text-zion-cyan bg-zion-cyan bg-opacity-20 border border-zion-cyan border-opacity-30">
                      {service.pricing}
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-zion-slate-light mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                {/* Key Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                    <Clock className="w-4 h-4 text-zion-cyan" />
                    <span>Duration: {service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                    <Users className="w-4 h-4 text-zion-cyan" />
                    <span>Expertise: {service.expertise}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 4).map((tech, index) => (
                      <span key={index} className="px-2 py-1 text-xs bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30 rounded-lg">
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-zion-purple/20 text-zion-purple-light border border-zion-purple/30 rounded-lg">
                        +{service.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="border-t border-zion-cyan/20 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">Learn More</span>
                    <ArrowRight className="w-4 h-4 text-zion-cyan group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="relative bg-gradient-to-r from-black/60 via-zion-blue-dark/60 to-black/60 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 via-transparent to-zion-purple/5"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan"></div>
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Transform Your IT</span>?
              </h2>
              
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed">
                Let our expert team help you modernize your infrastructure, enhance security, 
                and drive innovation through cutting-edge technology solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`mailto:kleber@ziontechgroup.com`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-black font-bold rounded-xl hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/25 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  Get Free Consultation
                </a>
                
                <a 
                  href={`tel:+13024640950`}
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-bold rounded-xl hover:bg-zion-cyan hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3158
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-black/90 border border-zion-cyan/20 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-white">{selectedService.name}</h2>
              <button
                onClick={() => setSelectedService(null)}
                className="text-zion-slate-light hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                <p className="text-zion-slate-light leading-relaxed">{selectedService.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {selectedService.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                        <Star className="w-4 h-4 text-zion-cyan" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-zion-cyan/10 rounded-xl border border-zion-cyan/20">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">{selectedService.pricing}</div>
                  <div className="text-sm text-zion-slate-light">Pricing</div>
                </div>
                <div className="text-center p-4 bg-zion-purple/10 rounded-xl border border-zion-purple/20">
                  <div className="text-2xl font-bold text-zion-purple mb-2">{selectedService.duration}</div>
                  <div className="text-sm text-zion-slate-light">Duration</div>
                </div>
                <div className="text-center p-4 bg-green-400/10 rounded-xl border border-green-400/20">
                  <div className="text-2xl font-bold text-green-400 mb-2">{selectedService.expertise}</div>
                  <div className="text-sm text-zion-slate-light">Expertise</div>
                </div>
              </div>
              
              <div className="border-t border-zion-cyan/20 pt-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href={`mailto:${selectedService.contactInfo.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-black font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    Request Quote
                  </a>
                  
                  <a 
                    href={`tel:${selectedService.contactInfo.phone}`}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-black transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3158
    </div>
  );
};

export default ITServicesPage;
=======
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
    Server,
  Zap,
  Database,
  Globe,
  Code,
  Monitor,
  Smartphone,
  Lock,
  Settings,
  Users,
  BarChart3,
  MessageSquare,
  FileText,
  CheckCircle,
  TrendingUp,
  Eye,
  Mic,
  Video,
  Search,
  Building,
  HardDrive
} from 'lucide-react';

const ITServices = [
  {
    title: "Cloud Infrastructure Management",
    description: "Comprehensive cloud services including AWS, Azure, and Google Cloud",
    price: "$1,500 - $8,000/month",
    features: ["24/7 monitoring", "Cost optimization", "Security compliance", "Auto-scaling"],
    icon: <Cloud className="h-8 w-8 text-zion-cyan" />,
    category: "Cloud",
    badge: "Popular",
    link: "/request-quote?service=cloud-infrastructure"
  },
  {
    title: "Cybersecurity Services",
    description: "Complete security solutions to protect your digital assets",
    price: "$2,000 - $15,000",
    features: ["Security audits", "Penetration testing", "Incident response", "Compliance"],
    icon: <Shield className="h-8 w-8 text-zion-purple" />,
    category: "Security",
    badge: "Premium",
    link: "/request-quote?service=cybersecurity"
  },
  {
    title: "DevOps & CI/CD",
    description: "Streamline development and deployment processes",
    price: "$3,000 - $12,000/month",
    features: ["Pipeline automation", "Infrastructure as code", "Monitoring", "Performance optimization"],
    icon: <Zap className="h-8 w-8 text-zion-blue" />,
    category: "DevOps",
    link: "/request-quote?service=devops"
  },
  {
    title: "Database Management",
    description: "Expert database administration and optimization",
    price: "$1,000 - $6,000/month",
    features: ["Performance tuning", "Backup & recovery", "Security hardening", "Migration support"],
    icon: <Database className="h-8 w-8 text-zion-cyan" />,
    category: "Database",
    link: "/request-quote?service=database-management"
  },
  {
    title: "Network Infrastructure",
    description: "Design, implement, and maintain robust network solutions",
    price: "$2,500 - $20,000",
    features: ["Network design", "Security implementation", "Monitoring", "24/7 support"],
          icon: <Globe className="h-8 w-8 text-zion-purple" />,
    category: "Networking",
    link: "/request-quote?service=network-infrastructure"
  },
  {
    title: "IT Consulting & Strategy",
    description: "Strategic IT planning and digital transformation guidance",
    price: "$150 - $300/hour",
    features: ["Technology assessment", "Roadmap planning", "Vendor selection", "ROI analysis"],
          icon: <CheckCircle className="h-8 w-8 text-zion-blue" />,
    category: "Consulting",
    link: "/request-quote?service=it-consulting"
  },
  {
    title: "Managed IT Services",
    description: "Complete IT management for small to enterprise businesses",
    price: "$500 - $5,000/month",
    features: ["Help desk support", "System administration", "Security management", "Backup services"],
    icon: <Settings className="h-8 w-8 text-zion-cyan" />,
    category: "Managed Services",
    badge: "New",
    link: "/request-quote?service=managed-it"
  },
  {
    title: "Data Center Services",
    description: "On-premise and colocation data center solutions",
    price: "$1,000 - $10,000/month",
    features: ["Hardware provisioning", "Environmental monitoring", "Power management", "Security"],
    icon: <Server className="h-8 w-8 text-zion-purple" />,
    category: "Data Center",
    link: "/request-quote?service=data-center"
  },
  {
    title: "Mobile App Development",
    description: "Custom mobile applications for iOS and Android",
    price: "$15,000 - $100,000",
    features: ["UI/UX design", "Native development", "Testing", "App store deployment"],
    icon: <Smartphone className="h-8 w-8 text-zion-blue" />,
    category: "Development",
    link: "/request-quote?service=mobile-development"
  },
  {
    title: "Web Development",
    description: "Modern web applications and e-commerce solutions",
    price: "$10,000 - $75,000",
    features: ["Responsive design", "SEO optimization", "Performance tuning", "Maintenance"],
    icon: <Globe className="h-8 w-8 text-zion-cyan" />,
    category: "Development",
    link: "/request-quote?service=web-development"
  },
  {
    title: "IT Training & Workshops",
    description: "Custom training programs for your IT team",
    price: "$500 - $2,500 per person",
    features: ["Hands-on workshops", "Certification prep", "Custom curriculum", "Ongoing support"],
    icon: <Users className="h-8 w-8 text-zion-purple" />,
    category: "Training",
    link: "/request-quote?service=it-training"
  },
  {
    title: "Disaster Recovery",
    description: "Comprehensive backup and recovery solutions",
    price: "$1,500 - $8,000/month",
    features: ["Automated backups", "Off-site storage", "Recovery testing", "24/7 support"],
    icon: <HardDrive className="h-8 w-8 text-zion-blue" />,
    category: "Recovery",
    link: "/request-quote?service=disaster-recovery"
  },
  {
    title: "IT Audit & Compliance",
    description: "Ensure your IT systems meet industry standards",
    price: "$3,000 - $20,000",
    features: ["Compliance assessment", "Risk analysis", "Documentation", "Remediation"],
    icon: <FileText className="h-8 w-8 text-zion-cyan" />,
    category: "Compliance",
    link: "/request-quote?service=it-audit"
  },
  {
    title: "Hardware Procurement",
    description: "Strategic hardware sourcing and deployment",
    price: "15-25% of hardware cost",
    features: ["Vendor management", "Volume discounts", "Installation", "Warranty support"],
          icon: <Server className="h-8 w-8 text-zion-purple" />,
    category: "Hardware",
    link: "/request-quote?service=hardware-procurement"
  },
  {
    title: "IT Project Management",
    description: "Professional project management for IT initiatives",
    price: "$100 - $200/hour",
    features: ["Project planning", "Resource management", "Risk mitigation", "Delivery assurance"],
    icon: <BarChart3 className="h-8 w-8 text-zion-blue" />,
    category: "Project Management",
    link: "/request-quote?service=it-project-management"
  },
  {
    title: "24/7 IT Support",
    description: "Round-the-clock technical support and monitoring",
    price: "$2,000 - $8,000/month",
    features: ["Help desk", "Remote support", "On-site visits", "SLA guarantees"],
    icon: <Monitor className="h-8 w-8 text-zion-cyan" />,
    category: "Support",
    badge: "Featured",
    link: "/request-quote?service=24-7-support"
  }
];

const categories = [
  { name: "All", value: "all", icon: <Globe className="h-4 w-4" /> },
  { name: "Cloud", value: "cloud", icon: <Cloud className="h-4 w-4" /> },
  { name: "Security", value: "security", icon: <Shield className="h-4 w-4" /> },
  { name: "DevOps", value: "devops", icon: <Zap className="h-4 w-4" /> },
  { name: "Database", value: "database", icon: <Database className="h-4 w-4" /> },
  { name: "Networking", value: "networking", icon: <Globe className="h-4 w-4" /> },
  { name: "Consulting", value: "consulting", icon: <CheckCircle className="h-4 w-4" /> },
  { name: "Managed Services", value: "managed services", icon: <Settings className="h-4 w-4" /> },
  { name: "Data Center", value: "data center", icon: <Server className="h-4 w-4" /> },
  { name: "Development", value: "development", icon: <Code className="h-4 w-4" /> },
  { name: "Training", value: "training", icon: <Users className="h-4 w-4" /> },
  { name: "Recovery", value: "recovery", icon: <HardDrive className="h-4 w-4" /> },
  { name: "Compliance", value: "compliance", icon: <FileText className="h-4 w-4" /> },
  { name: "Hardware", value: "hardware", icon: <Server className="h-4 w-4" /> },
  { name: "Project Management", value: "project management", icon: <BarChart3 className="h-4 w-4" /> },
  { name: "Support", value: "support", icon: <Monitor className="h-4 w-4" /> }
];

export default function ITServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const filteredServices = selectedCategory === "all" 
    ? ITServices 
    : ITServices.filter(service => service.category.toLowerCase() === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue-dark to-zion-slate">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IT Services & Solutions
          </h1>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto mb-8">
            Comprehensive IT services to modernize, secure, and optimize your technology infrastructure. 
            From cloud migration to cybersecurity, we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate font-semibold">
              <Search className="h-5 w-5 mr-2" />
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <MessageSquare className="h-5 w-5 mr-2" />
              Get Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.value)}
              className={`flex items-center gap-2 ${
                selectedCategory === category.value 
                  ? "bg-zion-blue text-white" 
                  : "border-zion-blue text-zion-blue hover:bg-zion-blue/10"
              }`}
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-zion-blue/20 hover:border-zion-blue/50 bg-zion-blue-dark/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-3">
                  <div className="p-3 rounded-lg bg-zion-blue/10 group-hover:bg-zion-blue/20 transition-colors">
                    {service.icon}
                  </div>
                  {service.badge && (
                    <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                      {service.badge}
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
              <CardContent className="pb-4">
                <div className="mb-4">
                  <p className="text-2xl font-bold text-zion-cyan mb-2">{service.price}</p>
                  <p className="text-sm text-zion-slate-light">Starting price</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="px-6 pb-6">
                <Button asChild className="w-full bg-gradient-to-r from-zion-blue to-zion-cyan hover:from-zion-blue-light hover:to-zion-cyan-light text-white">
                  <Link to={service.link}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Custom IT Solutions?
          </h2>
          <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our expert team can design and implement custom IT solutions tailored to your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-blue hover:bg-zion-blue-light text-white">
              <MessageSquare className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Code className="h-5 w-5 mr-2" />
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053

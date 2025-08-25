<<<<<<< HEAD
import React, { useState } from 'react';
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
<<<<<<< HEAD
=======
import React, { useState } from 'react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3158
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 2,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3158
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 3,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3158
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7

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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3158
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 5,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3158
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7

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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3158
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 7,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3158
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3158
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
          </div>
        </div>

        {/* Services Grid */}
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
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default ITServicesPage;
=======
import React from 'react';
=======
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
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
  Database, 
  Network, 
  Monitor, 
  Code, 
  Globe,
  Smartphone,
  Laptop,
  Wifi,
  Lock,
  Zap,
  Settings,
  BarChart3,
  Users,
  Building,
  Clock,
  CheckCircle,
  AlertTriangle,
  TrendingUp
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const IT_SERVICES = [
  {
    id: 'cloud-services',
    title: 'Cloud Infrastructure & Migration',
    description: 'Comprehensive cloud solutions including migration, optimization, and management',
    icon: <Cloud className="h-8 w-8 text-blue-500" />,
    features: ['AWS/Azure/GCP Migration', 'Cloud Architecture Design', 'Cost Optimization', '24/7 Monitoring'],
    pricing: { starting: '$3,000', average: '$12,000', enterprise: '$40,000+' },
    category: 'Infrastructure',
    badge: 'Popular',
    link: '/services/cloud-services',
    benefits: ['Reduced Infrastructure Costs', 'Improved Scalability', 'Enhanced Security', 'Better Performance']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Compliance',
    description: 'Advanced security solutions to protect your business from cyber threats',
    icon: <Shield className="h-8 w-8 text-red-500" />,
    features: ['Penetration Testing', 'Security Audits', 'Compliance Management', 'Incident Response'],
    pricing: { starting: '$5,000', average: '$20,000', enterprise: '$60,000+' },
    category: 'Security',
    badge: 'Critical',
    link: '/services/cybersecurity',
    benefits: ['Protection Against Threats', 'Regulatory Compliance', 'Risk Mitigation', 'Business Continuity']
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    description: 'Design, implementation, and management of enterprise network solutions',
    icon: <Network className="h-8 w-8 text-green-500" />,
    features: ['Network Design', 'Wireless Solutions', 'VPN Setup', 'Performance Optimization'],
    pricing: { starting: '$4,000', average: '$15,000', enterprise: '$50,000+' },
    category: 'Infrastructure',
    badge: 'Essential',
    link: '/services/network-infrastructure',
    benefits: ['Improved Connectivity', 'Enhanced Security', 'Better Performance', 'Scalable Solutions']
  },
  {
    id: 'data-management',
    title: 'Data Management & Analytics',
    description: 'Comprehensive data solutions including storage, backup, and business intelligence',
    icon: <Database className="h-8 w-8 text-purple-500" />,
    features: ['Data Backup & Recovery', 'Business Intelligence', 'Data Warehousing', 'Analytics Dashboards'],
    pricing: { starting: '$3,500', average: '$14,000', enterprise: '$45,000+' },
    category: 'Data',
    badge: 'Trending',
    link: '/services/data-management',
    benefits: ['Data-Driven Decisions', 'Improved Efficiency', 'Better Customer Insights', 'Competitive Advantage']
  },
  {
    id: 'managed-it-services',
    title: 'Managed IT Services',
    description: 'Complete IT management including monitoring, maintenance, and support',
    icon: <Monitor className="h-8 w-8 text-cyan-500" />,
    features: ['24/7 Monitoring', 'Proactive Maintenance', 'Help Desk Support', 'Performance Optimization'],
    pricing: { starting: '$2,500', average: '$8,000', enterprise: '$25,000+' },
    category: 'Management',
    badge: 'Best Value',
    link: '/services/managed-it',
    benefits: ['Reduced Downtime', 'Lower IT Costs', 'Expert Support', 'Focus on Core Business']
  },
  {
    id: 'software-development',
    title: 'Custom Software Development',
    description: 'Tailored software solutions to meet your specific business requirements',
    icon: <Code className="h-8 w-8 text-orange-500" />,
    features: ['Custom Applications', 'Web Development', 'Mobile Apps', 'API Integration'],
    pricing: { starting: '$8,000', average: '$25,000', enterprise: '$80,000+' },
    category: 'Development',
    badge: 'Premium',
    link: '/services/software-development',
    benefits: ['Tailored Solutions', 'Competitive Advantage', 'Process Automation', 'Improved Efficiency']
  },
  {
    id: 'disaster-recovery',
    title: 'Disaster Recovery & Business Continuity',
    description: 'Comprehensive backup and recovery solutions to ensure business continuity',
    icon: <AlertTriangle className="h-8 w-8 text-yellow-500" />,
    features: ['Backup Solutions', 'Recovery Planning', 'Testing & Validation', 'Documentation'],
    pricing: { starting: '$4,500', average: '$18,000', enterprise: '$55,000+' },
    category: 'Recovery',
    badge: 'Critical',
    link: '/services/disaster-recovery',
    benefits: ['Business Continuity', 'Risk Mitigation', 'Compliance', 'Peace of Mind']
  },
  {
    id: 'virtualization',
    title: 'Virtualization & Containerization',
    description: 'Modern virtualization solutions for improved resource utilization and management',
    icon: <Server className="h-8 w-8 text-indigo-500" />,
    features: ['VMware Solutions', 'Docker Containers', 'Resource Optimization', 'Management Tools'],
    pricing: { starting: '$3,500', average: '$14,000', enterprise: '$45,000+' },
    category: 'Infrastructure',
    badge: 'Efficient',
    link: '/services/virtualization',
    benefits: ['Better Resource Utilization', 'Reduced Costs', 'Improved Scalability', 'Easier Management']
  },
  {
    id: 'mobile-device-management',
    title: 'Mobile Device Management',
    description: 'Comprehensive mobile device security and management solutions',
    icon: <Smartphone className="h-8 w-8 text-pink-500" />,
    features: ['Device Enrollment', 'Security Policies', 'App Management', 'Remote Wipe'],
    pricing: { starting: '$2,000', average: '$6,000', enterprise: '$20,000+' },
    category: 'Management',
    badge: 'Modern',
    link: '/services/mobile-management',
    benefits: ['Enhanced Security', 'Better Control', 'Compliance', 'Improved Productivity']
  },
  {
    id: 'it-consulting',
    title: 'IT Strategy & Consulting',
    description: 'Strategic IT consulting to align technology with business objectives',
    icon: <Building className="h-8 w-8 text-gray-500" />,
    features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Guidance'],
    pricing: { starting: '$150/hour', average: '$200/hour', enterprise: '$250/hour+' },
    category: 'Consulting',
    badge: 'Strategic',
    link: '/services/it-consulting',
    benefits: ['Strategic Alignment', 'Cost Optimization', 'Risk Mitigation', 'Technology Roadmap']
  },
  {
    id: 'performance-monitoring',
    title: 'Performance Monitoring & Optimization',
    description: 'Advanced monitoring solutions to optimize system performance and user experience',
    icon: <BarChart3 className="h-8 w-8 text-teal-500" />,
    features: ['Real-time Monitoring', 'Performance Analytics', 'Alerting Systems', 'Optimization Reports'],
    pricing: { starting: '$2,500', average: '$10,000', enterprise: '$30,000+' },
    category: 'Monitoring',
    badge: 'Proactive',
    link: '/services/performance-monitoring',
    benefits: ['Improved Performance', 'Proactive Issue Detection', 'Better User Experience', 'Reduced Downtime']
  },
  {
    id: 'compliance-auditing',
    title: 'Compliance & Auditing Services',
    description: 'Comprehensive compliance solutions for various industry standards and regulations',
    icon: <CheckCircle className="h-8 w-8 text-emerald-500" />,
    features: ['SOC 2 Compliance', 'GDPR Compliance', 'HIPAA Compliance', 'Regular Auditing'],
    pricing: { starting: '$6,000', average: '$25,000', enterprise: '$70,000+' },
    category: 'Compliance',
    badge: 'Required',
    link: '/services/compliance-auditing',
    benefits: ['Regulatory Compliance', 'Risk Mitigation', 'Customer Trust', 'Business Continuity']
  }
];

const IT_SERVICE_CATEGORIES = [
  { name: 'Infrastructure', count: 3, color: 'bg-blue-500' },
  { name: 'Security', count: 2, color: 'bg-red-500' },
  { name: 'Data', count: 1, color: 'bg-purple-500' },
  { name: 'Management', count: 2, color: 'bg-cyan-500' },
  { name: 'Development', count: 1, color: 'bg-orange-500' },
  { name: 'Recovery', count: 1, color: 'bg-yellow-500' },
  { name: 'Consulting', count: 1, color: 'bg-gray-500' },
  { name: 'Monitoring', count: 1, color: 'bg-teal-500' },
  { name: 'Compliance', count: 1, color: 'bg-emerald-500' }
];

const SERVICE_BENEFITS = [
  {
    icon: <Zap className="h-12 w-12 text-zion-cyan" />,
    title: 'Increased Efficiency',
    description: 'Streamline operations and improve productivity with optimized IT solutions'
  },
  {
    icon: <Shield className="h-12 w-12 text-zion-purple" />,
    title: 'Enhanced Security',
    description: 'Protect your business with enterprise-grade security and compliance solutions'
  },
  {
    icon: <TrendingUp className="h-12 w-12 text-zion-cyan" />,
    title: 'Cost Optimization',
    description: 'Reduce IT costs while improving performance and reliability'
  },
  {
    icon: <Users className="h-12 w-12 text-zion-purple" />,
    title: 'Expert Support',
    description: 'Access to certified IT professionals and 24/7 technical support'
  }
];

export default function ITServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-purple-dark">
      <SEO 
        title="IT Services & Solutions - Zion Tech Group" 
        description="Comprehensive IT services including cloud solutions, cybersecurity, infrastructure, managed services, and more. Expert IT solutions for businesses."
        keywords="IT services, cloud computing, cybersecurity, network infrastructure, managed IT services, software development, disaster recovery"
        canonical="https://ziontechgroup.com/it-services"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IT Services & Solutions
          </h1>
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Code, 
  Monitor, 
  Smartphone,
  Globe,
  Lock,
  Zap,
  Users,
  BarChart3,
  Settings,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  TrendingUp,

} from "lucide-react";

export default function ITServicesPage() {
  const itServices = [
    {
      id: "cloud-migration",
      title: "Cloud Migration & Strategy",
      description: "Complete cloud migration services with strategy planning, implementation, and optimization for AWS, Azure, and Google Cloud.",
      icon: <Cloud className="h-8 w-8 text-blue-500" />,
      price: 8500,
      currency: "$",
      features: [
        "Cloud Strategy Planning",
        "Multi-cloud Architecture",
        "Data Migration",
        "Security Implementation",
        "Performance Optimization",
        "24/7 Support"
      ],
      category: "Cloud Services",
      badge: "Popular",
      link: "https://ziontechgroup.com/cloud-migration",
      details: "Transform your infrastructure with expert cloud migration services. We handle everything from initial assessment to post-migration optimization, ensuring minimal downtime and maximum performance.",
      averagePrice: "$8,500 - $25,000",
      deliveryTime: "4-8 weeks",
      rating: 4.9,
      reviewCount: 156
    },
    {
      id: "cybersecurity-audit",
      title: "Cybersecurity Assessment & Implementation",
      description: "Comprehensive security audits, penetration testing, and security infrastructure implementation.",
      icon: <Shield className="h-8 w-8 text-red-500" />,
      price: 6500,
      currency: "$",
      features: [
        "Security Audit",
        "Penetration Testing",
        "Vulnerability Assessment",
        "Security Policy Development",
        "Incident Response Planning",
        "Compliance Reporting"
      ],
      category: "Security",
      badge: "Critical",
      link: "https://ziontechgroup.com/cybersecurity",
      details: "Protect your business with comprehensive cybersecurity services. Our certified security experts identify vulnerabilities and implement robust protection measures to safeguard your digital assets.",
      averagePrice: "$6,500 - $18,000",
      deliveryTime: "3-6 weeks",
      rating: 4.8,
      reviewCount: 203
    },
    {
      id: "network-infrastructure",
      title: "Network Infrastructure Design & Implementation",
      description: "Enterprise-grade network design, implementation, and optimization for businesses of all sizes.",
      icon: <Network className="h-8 w-8 text-green-500" />,
      price: 7200,
      currency: "$",
      features: [
        "Network Design",
        "Hardware Installation",
        "Configuration & Testing",
        "Performance Optimization",
        "Monitoring Setup",
        "Documentation"
      ],
      category: "Infrastructure",
      badge: "Essential",
      link: "https://ziontechgroup.com/network-infrastructure",
      details: "Build a robust, scalable network infrastructure that supports your business growth. Our engineers design and implement networks that prioritize security, performance, and reliability.",
      averagePrice: "$7,200 - $22,000",
      deliveryTime: "5-10 weeks",
      rating: 4.7,
      reviewCount: 134
    },
    {
      id: "data-backup-recovery",
      title: "Data Backup & Disaster Recovery",
      description: "Comprehensive backup solutions and disaster recovery planning to protect your critical business data.",
      icon: <Database className="h-8 w-8 text-purple-500" />,
      price: 4200,
      currency: "$",
      features: [
        "Backup Strategy",
        "Automated Backups",
        "Disaster Recovery Plan",
        "Testing & Validation",
        "Cloud Storage",
        "Recovery Procedures"
      ],
      category: "Data Protection",
      badge: "Essential",
      link: "https://ziontechgroup.com/data-backup",
      details: "Ensure business continuity with robust backup and disaster recovery solutions. Our systems automatically protect your data and provide quick recovery options in case of emergencies.",
      averagePrice: "$4,200 - $12,000",
      deliveryTime: "2-4 weeks",
      rating: 4.9,
      reviewCount: 187
    },
    {
      id: "it-consulting",
      title: "IT Strategy & Consulting",
      description: "Strategic IT consulting to align technology with business objectives and drive digital transformation.",
      icon: <BarChart3 className="h-8 w-8 text-orange-500" />,
      price: 3500,
      currency: "$",
      features: [
        "Technology Assessment",
        "Digital Transformation",
        "IT Roadmap Planning",
        "Vendor Selection",
        "Cost Optimization",
        "Change Management"
      ],
      category: "Consulting",
      badge: "Strategic",
      link: "https://ziontechgroup.com/it-consulting",
      details: "Align your technology investments with business goals through strategic IT consulting. We help you make informed decisions about technology adoption and optimization.",
      averagePrice: "$3,500 - $15,000",
      deliveryTime: "2-6 weeks",
      rating: 4.8,
      reviewCount: 98
    },
    {
      id: "managed-it-services",
      title: "Managed IT Services",
      description: "Comprehensive IT management including monitoring, maintenance, and support for your technology infrastructure.",
      icon: <Monitor className="h-8 w-8 text-cyan-500" />,
      price: 2800,
      currency: "$",
      features: [
        "24/7 Monitoring",
        "Proactive Maintenance",
        "Help Desk Support",
        "Security Updates",
        "Performance Optimization",
        "Monthly Reporting"
      ],
      category: "Managed Services",
      badge: "Ongoing",
      link: "https://ziontechgroup.com/managed-it",
      details: "Focus on your business while we manage your IT infrastructure. Our managed services provide proactive monitoring, maintenance, and support to prevent issues before they impact your operations.",
      averagePrice: "$2,800/month",
      deliveryTime: "Immediate",
      rating: 4.9,
      reviewCount: 245
    },
    {
      id: "software-development",
      title: "Custom Software Development",
      description: "Tailored software solutions designed specifically for your business needs and workflows.",
      icon: <Code className="h-8 w-8 text-indigo-500" />,
      price: 15000,
      currency: "$",
      features: [
        "Requirements Analysis",
        "Custom Development",
        "Testing & QA",
        "Deployment",
        "Training & Support",
        "Maintenance"
      ],
      category: "Development",
      badge: "Custom",
      link: "https://ziontechgroup.com/software-development",
      details: "Transform your business processes with custom software solutions. Our development team creates applications that streamline operations and provide competitive advantages.",
      averagePrice: "$15,000 - $100,000+",
      deliveryTime: "8-20 weeks",
      rating: 4.8,
      reviewCount: 167
    },
    {
      id: "mobile-app-development",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      icon: <Smartphone className="h-8 w-8 text-pink-500" />,
      price: 12000,
      currency: "$",
      features: [
        "Platform Strategy",
        "UI/UX Design",
        "Native Development",
        "Testing & QA",
        "App Store Deployment",
        "Maintenance & Updates"
      ],
      category: "Mobile",
      badge: "Popular",
      link: "https://ziontechgroup.com/mobile-development",
      details: "Reach your customers on their mobile devices with professional mobile applications. We develop apps that provide excellent user experiences and drive engagement.",
      averagePrice: "$12,000 - $75,000",
      deliveryTime: "6-16 weeks",
      rating: 4.7,
      reviewCount: 143
    },
    {
      id: "web-development",
      title: "Web Development & E-commerce",
      description: "Modern web applications, e-commerce platforms, and responsive websites that drive business growth.",
      icon: <Globe className="h-8 w-8 text-teal-500" />,
      price: 8000,
      currency: "$",
      features: [
        "Responsive Design",
        "E-commerce Integration",
        "SEO Optimization",
        "Performance Optimization",
        "Security Implementation",
        "Analytics Setup"
      ],
      category: "Web",
      badge: "Essential",
      link: "https://ziontechgroup.com/web-development",
      details: "Create powerful web presence with modern, responsive websites and e-commerce platforms. Our solutions are optimized for performance, security, and user experience.",
      averagePrice: "$8,000 - $50,000",
      deliveryTime: "4-12 weeks",
      rating: 4.8,
      reviewCount: 189
    },
    {
      id: "data-analytics",
      title: "Data Analytics & Business Intelligence",
      description: "Transform raw data into actionable insights with advanced analytics and reporting solutions.",
      icon: <BarChart3 className="h-8 w-8 text-emerald-500" />,
      price: 6800,
      currency: "$",
      features: [
        "Data Integration",
        "Dashboard Development",
        "Report Automation",
        "Predictive Analytics",
        "Data Visualization",
        "User Training"
      ],
      category: "Analytics",
      badge: "Insightful",
      link: "https://ziontechgroup.com/data-analytics",
      details: "Make data-driven decisions with comprehensive analytics solutions. We help you collect, analyze, and visualize data to uncover business opportunities and optimize performance.",
      averagePrice: "$6,800 - $25,000",
      deliveryTime: "4-8 weeks",
      rating: 4.9,
      reviewCount: 112
    },
    {
      id: "it-support",
      title: "IT Support & Help Desk",
      description: "Professional IT support services to resolve technical issues and keep your systems running smoothly.",
      icon: <Settings className="h-8 w-8 text-yellow-500" />,
      price: 1800,
      currency: "$",
      features: [
        "Remote Support",
        "On-site Support",
        "Issue Resolution",
        "System Maintenance",
        "User Training",
        "Documentation"
      ],
      category: "Support",
      badge: "Essential",
      link: "https://ziontechgroup.com/it-support",
      details: "Get reliable IT support when you need it most. Our technicians quickly resolve technical issues and provide ongoing maintenance to prevent future problems.",
      averagePrice: "$1,800/month",
      deliveryTime: "Immediate",
      rating: 4.7,
      reviewCount: 276
    },
    {
      id: "voip-communications",
      title: "VoIP & Unified Communications",
      description: "Modern communication solutions including VoIP phone systems, video conferencing, and collaboration tools.",
      icon: <Phone className="h-8 w-8 text-blue-500" />,
      price: 5500,
      currency: "$",
      features: [
        "VoIP Implementation",
        "Video Conferencing",
        "Collaboration Tools",
        "Mobile Integration",
        "Call Analytics",
        "Training & Support"
      ],
      category: "Communications",
      badge: "Modern",
      link: "https://ziontechgroup.com/voip-communications",
      details: "Upgrade your communication infrastructure with modern VoIP and unified communications solutions. Improve collaboration and reduce communication costs while enhancing productivity.",
      averagePrice: "$5,500 - $18,000",
      deliveryTime: "3-6 weeks",
      rating: 4.8,
      reviewCount: 134
    }
  ];

  const categories = [
    "All Services",
    "Cloud Services",
    "Security",
    "Infrastructure",
    "Data Protection",
    "Consulting",
    "Managed Services",
    "Development",
    "Mobile",
    "Web",
    "Analytics",
    "Support",
    "Communications"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All Services");
  const [filteredServices, setFilteredServices] = React.useState(itServices);

  React.useEffect(() => {
    if (selectedCategory === "All Services") {
      setFilteredServices(itServices);
    } else {
      setFilteredServices(itServices.filter(service => service.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
            IT Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Comprehensive IT solutions to modernize your infrastructure, enhance security, and drive business growth. 
            From cloud migration to custom development, we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
              <Server className="h-5 w-5 mr-2" />
              Explore IT Solutions
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
              <Settings className="h-5 w-5 mr-2" />
              Get IT Consultation
=======
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto mb-8">
            Comprehensive IT services to modernize your infrastructure, enhance security, 
            and drive business growth through technology innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
              <Link to="/request-quote">Get IT Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-zion-blue-dark/80 border-b border-zion-blue-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-zion-purple text-white"
                    : "border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                }`}
              >
                {category}
              </Button>
=======
      {/* Service Benefits */}
      <div className="py-16 bg-zion-slate/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our IT Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICE_BENEFITS.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-cyan/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Overview */}
      <div className="py-16 bg-zion-slate">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">IT Service Categories</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4">
            {IT_SERVICE_CATEGORIES.map((category) => (
              <div key={category.name} className="text-center">
                <div className={`w-16 h-16 ${category.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{category.count}</span>
                </div>
                <p className="text-zion-cyan font-medium text-sm">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* IT Services Grid */}
      <div className="py-20 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive IT Solutions</h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              Choose from our extensive range of IT services designed to meet your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {IT_SERVICES.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark/50 border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-3">
                    {service.icon}
                    {service.badge && (
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="mb-4">
                    <p className="text-sm text-zion-slate-light mb-3">{service.details}</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center text-xs text-zion-cyan">
                          <CheckCircle className="w-3 h-3 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-zion-slate-light mb-3">
                      <span>Starting at:</span>
                      <span className="text-zion-cyan font-semibold">{service.averagePrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-zion-slate-light mb-3">
                      <span>Delivery:</span>
                      <span className="text-zion-cyan font-semibold">{service.deliveryTime}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'}`} />
                      ))}
                      <span className="text-sm text-zion-slate-light ml-2">({service.reviewCount})</span>
                    </div>
                  </div>
<<<<<<< HEAD
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-zion-cyan">{service.currency}{service.price.toLocaleString()}</span>
                    <span className="text-zion-slate-light">/project</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white group-hover:shadow-lg group-hover:shadow-zion-purple/25 transition-all">
                    <a href={service.link} target="_blank" rel="noopener noreferrer">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Get Started
                    </a>
                  </Button>
                </CardFooter>
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-zion-cyan/80">{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-zion-cyan/70 flex items-center">
                          <span className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Business Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="text-sm text-zion-cyan/70 flex items-center">
                          <span className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Pricing:</h4>
                    <div className="text-sm text-zion-cyan/70 space-y-1">
                      <p>Starting: {service.pricing.starting}</p>
                      <p>Average: {service.pricing.average}</p>
                      <p>Enterprise: {service.pricing.enterprise}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                      <Link to={service.link}>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
=======
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
              </div>
            </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-zion-purple-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">
            Our IT experts are ready to help you modernize your technology stack and drive business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-zion-slate">
              <Link to="/request-quote">Request Free Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
          <div className="mt-8 text-zion-cyan">
            <p>Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
  Server, 
  Database, 
  Code, 
  Network, 
  Globe, 
  Users, 
  Zap, 
  Monitor,
  Lock,
  Settings,
  BarChart3,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign
} from 'lucide-react';

export default function ITServicesPage() {
  const itServices = [
    {
      id: 'cloud-migration',
      title: 'Cloud Migration & Strategy',
      description: 'Seamless migration to cloud platforms with optimization and cost management',
      category: 'Cloud',
      price: 'From $8,000',
      features: ['Migration Planning', 'Cost Optimization', 'Performance Tuning', 'Security Implementation'],
      icon: <Cloud className="h-8 w-8 text-zion-blue" />,
      badge: 'Popular',
      rating: 4.9,
      reviewCount: 234,
      deliveryTime: '4-8 weeks',
      link: '/services/cloud-migration'
    },
    {
      id: 'cybersecurity-audit',
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security audits and vulnerability assessments for your infrastructure',
      category: 'Security',
      price: 'From $5,500',
      features: ['Security Audit', 'Vulnerability Scan', 'Penetration Testing', 'Compliance Review'],
      icon: <Shield className="h-8 w-8 text-red-500" />,
      badge: 'Featured',
      rating: 4.8,
      reviewCount: 189,
      deliveryTime: '2-4 weeks',
      link: '/services/cybersecurity-audit'
    },
    {
      id: 'devops-implementation',
      title: 'DevOps Implementation',
      description: 'Streamline development and operations with CI/CD pipelines and automation',
      category: 'DevOps',
      price: 'From $6,500',
      features: ['CI/CD Setup', 'Infrastructure as Code', 'Monitoring Tools', 'Automation Scripts'],
      icon: <Code className="h-8 w-8 text-green-500" />,
      rating: 4.7,
      reviewCount: 156,
      deliveryTime: '6-10 weeks',
      link: '/services/devops-implementation'
    },
    {
      id: 'data-backup-recovery',
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data protection solutions with disaster recovery planning',
      category: 'Data',
      price: 'From $3,200',
      features: ['Backup Strategy', 'Disaster Recovery', 'Data Encryption', 'Recovery Testing'],
      icon: <Database className="h-8 w-8 text-purple-500" />,
      rating: 4.6,
      reviewCount: 98,
      deliveryTime: '2-3 weeks',
      link: '/services/data-backup-recovery'
    },
    {
      id: 'network-infrastructure',
      title: 'Network Infrastructure',
      description: 'Design and implementation of scalable network solutions for growing businesses',
      category: 'Infrastructure',
      price: 'From $7,500',
      features: ['Network Design', 'Hardware Installation', 'Security Configuration', 'Performance Optimization'],
      icon: <Network className="h-8 w-8 text-cyan-500" />,
      rating: 4.8,
      reviewCount: 134,
      deliveryTime: '4-6 weeks',
      link: '/services/network-infrastructure'
    },
    {
      id: 'managed-it-services',
      title: 'Managed IT Services',
      description: '24/7 IT support and management for continuous business operations',
      category: 'Management',
      price: 'From $2,500/month',
      features: ['24/7 Monitoring', 'Help Desk Support', 'Proactive Maintenance', 'Performance Reports'],
      icon: <Monitor className="h-8 w-8 text-blue-500" />,
      badge: 'New',
      rating: 4.5,
      reviewCount: 67,
      deliveryTime: '1-2 weeks',
      link: '/services/managed-it-services'
    },
    {
      id: 'mobile-app-development',
      title: 'Mobile App Development',
      description: 'Custom mobile applications for iOS and Android platforms',
      category: 'Development',
      price: 'From $15,000',
      features: ['UI/UX Design', 'Cross-platform Development', 'Testing & QA', 'App Store Deployment'],
      icon: <Smartphone className="h-8 w-8 text-indigo-500" />,
      rating: 4.7,
      reviewCount: 89,
      deliveryTime: '8-16 weeks',
      link: '/services/mobile-app-development'
    },
    {
      id: 'web-application',
      title: 'Web Application Development',
      description: 'Custom web applications and e-commerce solutions',
      category: 'Development',
      price: 'From $12,000',
      features: ['Custom Development', 'Responsive Design', 'Database Design', 'Security Implementation'],
      icon: <Globe className="h-8 w-8 text-emerald-500" />,
      rating: 4.6,
      reviewCount: 112,
      deliveryTime: '6-12 weeks',
      link: '/services/web-application'
    },
    {
      id: 'it-consulting',
      title: 'IT Strategy Consulting',
      description: 'Strategic IT planning and digital transformation consulting',
      category: 'Consulting',
      price: 'From $8,500',
      features: ['Technology Assessment', 'Digital Roadmap', 'Vendor Selection', 'Implementation Planning'],
      icon: <Users className="h-8 w-8 text-amber-500" />,
      rating: 4.9,
      reviewCount: 78,
      deliveryTime: '2-4 weeks',
      link: '/services/it-consulting'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & BI',
      description: 'Business intelligence solutions and data analytics implementation',
      category: 'Analytics',
      price: 'From $6,800',
      features: ['Data Warehouse Setup', 'Dashboard Creation', 'Report Automation', 'Data Visualization'],
      icon: <BarChart3 className="h-8 w-8 text-pink-500" />,
      rating: 4.7,
      reviewCount: 95,
      deliveryTime: '4-8 weeks',
      link: '/services/data-analytics'
    },
    {
      id: 'endpoint-security',
      title: 'Endpoint Security',
      description: 'Comprehensive endpoint protection and device management solutions',
      category: 'Security',
      price: 'From $4,200',
      features: ['Antivirus Protection', 'Device Management', 'Threat Detection', 'Policy Enforcement'],
      icon: <Lock className="h-8 w-8 text-orange-500" />,
      rating: 4.6,
      reviewCount: 73,
      deliveryTime: '2-3 weeks',
      link: '/services/endpoint-security'
    },
    {
      id: 'it-automation',
      title: 'IT Process Automation',
      description: 'Automate repetitive IT tasks and workflows for efficiency',
      category: 'Automation',
      price: 'From $3,800',
      features: ['Workflow Automation', 'Script Development', 'Integration Setup', 'Monitoring Tools'],
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      rating: 4.5,
      reviewCount: 56,
      deliveryTime: '3-5 weeks',
      link: '/services/it-automation'
    }
  ];

  const categories = [
    { name: 'All Services', count: itServices.length, active: true },
    { name: 'Cloud', count: itServices.filter(s => s.category === 'Cloud').length },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
    { name: 'Development', count: itServices.filter(s => s.category === 'Development').length },
    { name: 'Infrastructure', count: itServices.filter(s => s.category === 'Infrastructure').length },
    { name: 'Management', count: itServices.filter(s => s.category === 'Management').length }
  ];

  return (
    <>
      <SEO 
        title="IT Services - Zion Tech Group" 
        description="Comprehensive IT services including cloud migration, cybersecurity, DevOps, and infrastructure solutions. Expert IT consulting and managed services."
        keywords="IT services, cloud migration, cybersecurity, DevOps, managed IT services, IT consulting"
        canonical="https://ziontechgroup.com/it-services"
      />
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-cyan py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/10 to-zion-cyan/10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-zion-blue/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-zion-purple/30 rounded-full blur-2xl animate-pulse delay-500"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                IT Services & Solutions
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Transform your business technology infrastructure with our comprehensive IT services. 
                From cloud migration to cybersecurity, we deliver enterprise-grade solutions that drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark">
                  <Link to="/request-quote">Get Free Assessment</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/contact">Contact Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise IT Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Choose from our comprehensive portfolio of IT services, each designed to address specific 
                business challenges and drive measurable results.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={category.active ? "default" : "outline"}
                  className={category.active ? "bg-zion-cyan text-zion-slate-dark" : "border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10"}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service) => (
                <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 border-zion-cyan/20 hover:border-zion-cyan/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-3">
                      {service.icon}
                      {service.badge && (
                        <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                          {service.badge}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pb-4">
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-zion-cyan">{service.price}</span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-muted-foreground">{service.rating}</span>
                        <span className="text-sm text-muted-foreground">({service.reviewCount})</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {service.category}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{service.deliveryTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        <span>Fixed Price</span>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardContent className="pt-0">
                    <Button asChild className="w-full group-hover:bg-zion-cyan group-hover:text-zion-slate-dark transition-all duration-300">
                      <Link to={service.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-cyan-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let our IT experts help you identify the right solutions for your business. 
              Get a free assessment and discover how modern IT can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark">
                <Link to="/request-quote">Start Your IT Transformation</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
=======
}
=======
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8eef
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======
};

export default ITServicesPage;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7

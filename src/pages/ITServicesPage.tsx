<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState } from 'react';
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
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 2,
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
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 3,
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
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
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
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 5,
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
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
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
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 7,
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
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
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
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

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
          </div>
        </div>

        {/* Services Grid */}
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
              </div>
            </div>
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
<<<<<<< HEAD
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
=======
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Monitor, 
  Code, 
  Smartphone,
  Globe,
  Users,
  Lock,
  Zap,
  BarChart3,
  Settings,
  Phone,
  MessageSquare,
  Clock,
  CheckCircle,
  Star
} from 'lucide-react';

export default function ITServicesPage() {
  const itServices = [
    {
      id: "cloud-migration",
      title: "Cloud Migration & Strategy",
      description: "Comprehensive cloud migration services to help businesses move to AWS, Azure, or Google Cloud with minimal downtime.",
      features: [
        "Multi-cloud strategy planning",
        "Data migration & synchronization",
        "Performance optimization",
        "Security & compliance setup",
        "24/7 monitoring & support"
      ],
      pricing: {
        starter: "$2,999",
        professional: "$8,999",
        enterprise: "$24,999"
      },
      icon: <Cloud className="h-8 w-8 text-blue-500" />,
      category: "Cloud Services",
      badge: "Popular",
      delivery: "4-8 weeks",
      rating: 4.9,
      reviews: 127
    },
    {
      id: "cybersecurity-audit",
      title: "Cybersecurity Audit & Assessment",
      description: "Comprehensive security assessment including penetration testing, vulnerability scanning, and compliance auditing.",
      features: [
        "Penetration testing",
        "Vulnerability assessment",
        "Compliance auditing (SOC2, ISO27001)",
        "Security policy review",
        "Incident response planning"
      ],
      pricing: {
        starter: "$1,999",
        professional: "$4,999",
        enterprise: "$12,999"
      },
      icon: <Shield className="h-8 w-8 text-red-500" />,
      category: "Security",
      badge: "Critical",
      delivery: "2-4 weeks",
      rating: 4.8,
      reviews: 89
    },
    {
      id: "network-infrastructure",
      title: "Network Infrastructure Design",
      description: "Enterprise-grade network design and implementation for optimal performance, security, and scalability.",
      features: [
        "Network architecture design",
        "Hardware procurement",
        "Installation & configuration",
        "Performance optimization",
        "Ongoing maintenance"
      ],
      pricing: {
        starter: "$3,999",
        professional: "$9,999",
        enterprise: "$29,999"
      },
      icon: <Network className="h-8 w-8 text-green-500" />,
      category: "Infrastructure",
      badge: "Essential",
      delivery: "6-12 weeks",
      rating: 4.7,
      reviews: 156
    },
    {
      id: "data-backup-recovery",
      title: "Data Backup & Disaster Recovery",
      description: "Comprehensive backup solutions and disaster recovery planning to protect your critical business data.",
      features: [
        "Automated backup systems",
        "Cloud & on-premise storage",
        "Disaster recovery planning",
        "Regular testing & validation",
        "Rapid recovery procedures"
      ],
      pricing: {
        starter: "$499/month",
        professional: "$1,299/month",
        enterprise: "$3,999/month"
      },
      icon: <Database className="h-8 w-8 text-purple-500" />,
      category: "Data Protection",
      badge: "Essential",
      delivery: "2-3 weeks",
      rating: 4.9,
      reviews: 203
    },
    {
      id: "it-support",
      title: "24/7 IT Support & Helpdesk",
      description: "Round-the-clock IT support for businesses with dedicated technicians and comprehensive issue resolution.",
      features: [
        "24/7 phone & email support",
        "Remote & on-site assistance",
        "Priority ticket system",
        "Knowledge base access",
        "Monthly reporting"
      ],
      pricing: {
        starter: "$299/month",
        professional: "$799/month",
        enterprise: "$1,999/month"
      },
      icon: <Users className="h-8 w-8 text-cyan-500" />,
      category: "Support",
      badge: "Popular",
      delivery: "Immediate",
      rating: 4.8,
      reviews: 342
    },
    {
      id: "mobile-app-development",
      title: "Mobile App Development",
      description: "Custom mobile application development for iOS and Android with modern UI/UX and backend integration.",
      features: [
        "Native iOS & Android apps",
        "Cross-platform solutions",
        "Backend API development",
        "App store submission",
        "Post-launch support"
      ],
      pricing: {
        starter: "$8,999",
        professional: "$24,999",
        enterprise: "$59,999"
      },
      icon: <Smartphone className="h-8 w-8 text-indigo-500" />,
      category: "Development",
      badge: "Featured",
      delivery: "8-16 weeks",
      rating: 4.9,
      reviews: 178
    },
    {
      id: "web-development",
      title: "Web Development & E-commerce",
      description: "Professional web development services including custom websites, e-commerce platforms, and web applications.",
      features: [
        "Custom website design",
        "E-commerce integration",
        "Content management systems",
        "SEO optimization",
        "Performance optimization"
      ],
      pricing: {
        starter: "$3,999",
        professional: "$9,999",
        enterprise: "$24,999"
      },
      icon: <Globe className="h-8 w-8 text-orange-500" />,
      category: "Development",
      badge: "Popular",
      delivery: "4-8 weeks",
      rating: 4.8,
      reviews: 267
    },
    {
      id: "system-administration",
      title: "System Administration & Maintenance",
      description: "Comprehensive system administration services including server management, updates, and performance monitoring.",
      features: [
        "Server administration",
        "System updates & patches",
        "Performance monitoring",
        "Backup management",
        "Security hardening"
      ],
      pricing: {
        starter: "$799/month",
        professional: "$1,999/month",
        enterprise: "$4,999/month"
      },
      icon: <Server className="h-8 w-8 text-gray-500" />,
      category: "Administration",
      badge: "Essential",
      delivery: "Ongoing",
      rating: 4.7,
      reviews: 134
    },
    {
      id: "monitoring-analytics",
      title: "IT Monitoring & Analytics",
      description: "Advanced monitoring solutions with real-time analytics and proactive issue detection for IT infrastructure.",
      features: [
        "Real-time monitoring",
        "Performance analytics",
        "Alert management",
        "Custom dashboards",
        "Predictive maintenance"
      ],
      pricing: {
        starter: "$199/month",
        professional: "$499/month",
        enterprise: "$1,299/month"
      },
      icon: <Monitor className="h-8 w-8 text-teal-500" />,
      category: "Monitoring",
      badge: "Smart",
      delivery: "1-2 weeks",
      rating: 4.8,
      reviews: 95
    },
    {
      id: "api-development",
      title: "API Development & Integration",
      description: "Custom API development and third-party system integration to streamline business processes and data flow.",
      features: [
        "RESTful API development",
        "Third-party integrations",
        "API documentation",
        "Testing & validation",
        "Performance optimization"
      ],
      pricing: {
        starter: "$2,999",
        professional: "$7,999",
        enterprise: "$19,999"
      },
      icon: <Code className="h-8 w-8 text-yellow-500" />,
      category: "Development",
      badge: "Technical",
      delivery: "4-6 weeks",
      rating: 4.9,
      reviews: 87
    },
    {
      id: "compliance-consulting",
      title: "IT Compliance & Governance",
      description: "Compliance consulting services to help businesses meet regulatory requirements and industry standards.",
      features: [
        "Compliance assessment",
        "Policy development",
        "Audit preparation",
        "Training & awareness",
        "Ongoing compliance monitoring"
      ],
      pricing: {
        starter: "$1,999",
        professional: "$4,999",
        enterprise: "$12,999"
      },
      icon: <CheckCircle className="h-8 w-8 text-emerald-500" />,
      category: "Compliance",
      badge: "Required",
      delivery: "3-6 weeks",
      rating: 4.8,
      reviews: 112
    },
    {
      id: "virtualization-solutions",
      title: "Virtualization & Container Solutions",
      description: "Advanced virtualization and containerization solutions to optimize resource utilization and deployment efficiency.",
      features: [
        "VMware & Hyper-V setup",
        "Docker containerization",
        "Kubernetes orchestration",
        "Resource optimization",
        "High availability setup"
      ],
      pricing: {
        starter: "$3,999",
        professional: "$9,999",
        enterprise: "$24,999"
      },
      icon: <Zap className="h-8 w-8 text-violet-500" />,
      category: "Virtualization",
      badge: "Advanced",
      delivery: "4-8 weeks",
      rating: 4.7,
      reviews: 73
    }
  ];

  const categories = [
    "All Services",
    "Cloud Services",
    "Security",
    "Infrastructure",
    "Data Protection",
    "Support",
    "Development",
    "Administration",
    "Monitoring",
    "Compliance",
    "Virtualization"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All Services");

  const filteredServices = selectedCategory === "All Services" 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
            IT Services Hub
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Comprehensive IT solutions designed to modernize your infrastructure, enhance security, 
            and drive business growth. From cloud migration to cybersecurity, we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
              <Server className="h-5 w-5 mr-2" />
              Explore IT Services
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <MessageSquare className="h-5 w-5 mr-2" />
              Get Free Consultation
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
            </Button>
          </div>
        </div>
      </div>

<<<<<<< HEAD
=======
      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 rounded-lg bg-zion-slate/30 border border-zion-purple/20">
            <div className="text-3xl font-bold text-zion-cyan mb-2">500+</div>
            <div className="text-zion-slate-light">Projects Completed</div>
          </div>
          <div className="p-6 rounded-lg bg-zion-slate/30 border border-zion-purple/20">
            <div className="text-3xl font-bold text-zion-cyan mb-2">99.9%</div>
            <div className="text-zion-slate-light">Uptime Guarantee</div>
          </div>
          <div className="p-6 rounded-lg bg-zion-slate/30 border border-zion-purple/20">
            <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
            <div className="text-zion-slate-light">Support Available</div>
          </div>
          <div className="p-6 rounded-lg bg-zion-slate/30 border border-zion-purple/20">
            <div className="text-3xl font-bold text-zion-cyan mb-2">50+</div>
            <div className="text-zion-slate-light">Expert Engineers</div>
          </div>
        </div>
      </div>

>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
<<<<<<< HEAD
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
=======
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category 
                  ? 'bg-zion-purple text-white' 
                  : 'border-zion-purple text-zion-purple hover:bg-zion-purple/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Card key={service.id} className="group overflow-hidden border-zion-purple/20 bg-zion-slate/50 backdrop-blur-sm hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-lg bg-zion-slate/30 group-hover:bg-zion-purple/20 transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {service.badge && (
                      <Badge className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white border-0">
                        {service.badge}
                      </Badge>
                    )}
                    <div className="flex items-center gap-1 text-sm text-zion-slate-light">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span>{service.rating}</span>
                      <span>({service.reviews})</span>
                    </div>
                  </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
                </div>
                <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {service.description}
                </CardDescription>
              </CardHeader>
<<<<<<< HEAD
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
                <Button className="w-full bg-gradient-to-r from-zion-blue to-zion-cyan hover:from-zion-blue-light hover:to-zion-cyan-light text-white">
                  <Link to={service.link}>
                    Get Started
                  </Link>
=======
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-zion-cyan mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-zion-slate-light flex items-center">
                        <div className="w-1.5 h-1.5 bg-zion-purple rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-zion-cyan mb-2">Pricing:</h4>
                    <div className="space-y-1">
                      <div className="text-sm text-zion-slate-light">
                        <span className="font-medium">Starter:</span> {service.pricing.starter}
                      </div>
                      <div className="text-sm text-zion-slate-light">
                        <span className="font-medium">Professional:</span> {service.pricing.professional}
                      </div>
                      <div className="text-sm text-zion-slate-light">
                        <span className="font-medium">Enterprise:</span> {service.pricing.enterprise}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zion-cyan mb-2">Delivery:</h4>
                    <div className="text-sm text-zion-slate-light flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-zion-purple" />
                      {service.delivery}
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <div className="p-6 pt-0 space-y-3">
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Get Quote
                </Button>
                <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
                </Button>
              </div>
            </Card>
          ))}
        </div>
<<<<<<< HEAD

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
=======
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
          <p className="text-zion-slate-light max-w-2xl mx-auto">
            We combine technical expertise with business acumen to deliver IT solutions that drive real business value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="h-8 w-8 text-zion-purple" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
            <p className="text-zion-slate-light">
              Certified professionals with years of experience in enterprise IT solutions.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-zion-cyan" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
            <p className="text-zion-slate-light">
              Round-the-clock support to ensure your systems are always running smoothly.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-zion-purple" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
            <p className="text-zion-slate-light">
              Track record of successful implementations and satisfied clients across industries.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our IT experts are ready to help you modernize your technology stack and drive business growth. 
            Get in touch today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
              <MessageSquare className="h-5 w-5 mr-2" />
              Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="h-5 w-5 mr-2" />
              Call +1 302 464 0950
            </Button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Website: https://ziontechgroup.com</p>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5db4
          </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
};

export default ITServicesPage;
=======
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5db4
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4

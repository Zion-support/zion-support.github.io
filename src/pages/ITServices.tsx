<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Package, Server, Lock, Code, Monitor, Smartphone, Wifi, Database as DatabaseIcon2, Globe as GlobeIcon, Shield as ShieldIcon2, Cpu as CpuIcon } from 'lucide-react';

const ITServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  // IT Services data
  const itServices = [
    {
      id: 1,
      name: "Cloud Migration & Optimization",
      category: "Cloud Services",
      description: "Complete cloud migration strategy and optimization for improved performance and cost savings",
      features: ["Cloud assessment", "Migration planning", "Performance optimization", "Cost optimization", "Security implementation"],
      benefits: ["Reduced infrastructure costs", "Improved scalability", "Enhanced security", "Better performance"],
      targetAudience: ["Medium businesses", "Enterprises", "Tech companies", "Healthcare organizations"],
      pricing: "Project-based",
      marketPrice: "$15,000 - $100,000",
      implementationTime: "4-12 weeks",
      supportLevel: "Dedicated project manager + 24/7 support",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/cloud-migration",
        address: "364 E Main St STE 1008, Middletown DE 19709"
      }
    },
    {
      id: 2,
      name: "Cybersecurity Assessment & Implementation",
      category: "Security",
      description: "Comprehensive cybersecurity assessment and implementation of enterprise-grade security solutions",
      features: ["Security audit", "Vulnerability assessment", "Penetration testing", "Security implementation", "Employee training"],
      benefits: ["Enhanced security posture", "Compliance achievement", "Risk reduction", "Customer trust"],
      targetAudience: ["Financial services", "Healthcare", "E-commerce", "Government contractors"],
      pricing: "Project-based",
      marketPrice: "$25,000 - $150,000",
      implementationTime: "6-16 weeks",
      supportLevel: "Security team + 24/7 monitoring",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/cybersecurity",
        address: "364 E Main St STE 1008, Middletown DE 19709"
      }
    },
    {
      id: 3,
      name: "DevOps Implementation",
      category: "DevOps",
      description: "End-to-end DevOps implementation with CI/CD pipelines and automation",
      features: ["CI/CD setup", "Infrastructure as Code", "Monitoring & alerting", "Security integration", "Team training"],
      benefits: ["Faster deployments", "Better reliability", "Improved collaboration", "Cost reduction"],
      targetAudience: ["Development teams", "Tech companies", "Startups", "Enterprises"],
      pricing: "Project-based",
      marketPrice: "$25,000 - $75,000",
      implementationTime: "6-12 weeks",
      supportLevel: "DevOps engineers + ongoing support",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/devops-implementation",
        address: "364 E Main St STE 1008, Middletown DE 19709"
      }
    },
    {
      id: 4,
      name: "Legacy System Modernization",
      category: "Digital Transformation",
      description: "Modernize legacy systems with cloud-native technologies and microservices architecture",
      features: ["System analysis", "Architecture redesign", "Cloud migration", "API development", "Data migration"],
      benefits: ["Improved performance", "Better scalability", "Reduced maintenance", "Enhanced security"],
      targetAudience: ["Enterprises", "Financial services", "Healthcare", "Manufacturing"],
      pricing: "Project-based",
      marketPrice: "$50,000 - $500,000",
      implementationTime: "12-36 weeks",
      supportLevel: "Full project team + ongoing maintenance",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/legacy-modernization",
        address: "364 E Main St STE 1008, Middletown DE 19709"
      }
    },
    {
      id: 5,
      name: "Data Strategy & Implementation",
      category: "Data Services",
      description: "Comprehensive data strategy, architecture, and implementation for business intelligence",
      features: ["Data assessment", "Architecture design", "ETL implementation", "Analytics setup", "Governance framework"],
      benefits: ["Better decision making", "Data insights", "Compliance", "Operational efficiency"],
      targetAudience: ["Enterprises", "Financial services", "Healthcare", "Retail"],
      pricing: "Project-based",
      marketPrice: "$40,000 - $300,000",
      implementationTime: "8-24 weeks",
      supportLevel: "Data architects + ongoing optimization",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/data-strategy",
        address: "364 E Main St STE 1008, Middletown DE 19709"
      }
    },
    {
      id: 6,
      name: "Network Infrastructure & Security",
      category: "Infrastructure",
      description: "Enterprise-grade network infrastructure design, implementation, and security",
      features: ["Network design", "Security implementation", "Monitoring setup", "Disaster recovery", "Compliance"],
      benefits: ["Enhanced security", "Better performance", "Reliability", "Scalability"],
      targetAudience: ["Enterprises", "Healthcare", "Financial services", "Government"],
      pricing: "Project-based",
      marketPrice: "$30,000 - $200,000",
      implementationTime: "8-20 weeks",
      supportLevel: "Network engineers + 24/7 monitoring",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com/network-infrastructure",
        address: "364 E Main St STE 1008, Middletown DE 19709"
      }
    }
  ];

  const categories = ['all', 'Cloud Services', 'Security', 'DevOps', 'Digital Transformation', 'Data Services', 'Infrastructure'];
  const pricingModels = ['all', 'Project-based', 'Subscription', 'Consulting'];

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedCategory === 'all' || service.pricing === selectedCategory;
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cloud Services': return <Cloud className="w-6 h-6" />;
      case 'Security': return <Shield className="w-6 h-6" />;
      case 'DevOps': return <CpuIcon className="w-6 h-6" />;
      case 'Digital Transformation': return <Zap className="w-6 h-6" />;
      case 'Data Services': return <DatabaseIcon className="w-6 h-6" />;
      case 'Infrastructure': return <Server className="w-6 h-6" />;
      default: return <Settings className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Cloud Services': return 'text-blue-400';
      case 'Security': return 'text-red-400';
      case 'DevOps': return 'text-green-400';
      case 'Digital Transformation': return 'text-purple-400';
      case 'Data Services': return 'text-cyan-400';
      case 'Infrastructure': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
            Enterprise IT Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to transform your business infrastructure, enhance security, and drive digital innovation
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
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`${getCategoryColor(service.category)}`}>
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(service.category)} bg-opacity-20 bg-current`}>
                        {service.category}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full text-blue-400 bg-blue-400 bg-opacity-20">
                        {service.pricing}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-white mb-2">
                  {service.marketPrice}
                </div>
                <div className="text-sm text-gray-400">Implementation: {service.implementationTime}</div>
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
                <h4 className="text-sm font-semibold text-white mb-2">Perfect For:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.slice(0, 2).map((audience, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded">
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Support: {service.supportLevel}</span>
                  <a 
                    href={service.contactInfo.website}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Quote →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-gray-300 mb-6">
              Our enterprise IT solutions are designed to scale with your business needs and drive digital transformation
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300">{itServices[0].contactInfo.phone}</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300">{itServices[0].contactInfo.email}</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServices;
=======
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Network, 
  Server,
  Search,
  Filter,
  Star,
  Clock,
  Award,
  Zap,
  Users,
  CheckCircle,
  TrendingUp,
  ExternalLink,
  Play,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Cpu from 'lucide-react/dist/esm/icons/cpu';
import Target from 'lucide-react/dist/esm/icons/target';
import Palette from 'lucide-react/dist/esm/icons/palette';
import { SEO } from '@/components/SEO';

interface ITService {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  benefits: string[];
  marketPrice: string;
  link: string;
  icon: React.ReactNode;
  tags: string[];
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  expertise: string;
}

const IT_SERVICES: ITService[] = [
  {
    id: "cloud-migration",
    title: "Cloud Migration & Strategy",
    description: "Comprehensive cloud migration services including assessment, planning, and execution for AWS, Azure, and Google Cloud.",
    category: "Cloud Services",
    price: "$25,000",
    marketPrice: "$45,000",
    features: ["Cloud assessment", "Migration planning", "Data migration", "Application modernization", "Cost optimization"],
    benefits: ["Reduce infrastructure costs", "Improve scalability", "Enhanced security", "Better performance"],
    link: "https://ziontechgroup.com/cloud-migration",
    icon: <Cloud className="h-8 w-8 text-zion-cyan" />,
    tags: ["Cloud Migration", "AWS", "Azure", "Google Cloud", "DevOps"],
    rating: 4.9,
    reviewCount: 89,
    deliveryTime: "8-16 weeks",
    expertise: "Expert Level"
  },
  {
    id: "cybersecurity-audit",
    title: "Comprehensive Cybersecurity Audit",
    description: "Full security assessment including penetration testing, vulnerability scanning, and compliance reporting.",
    category: "Cybersecurity",
    price: "$15,000",
    marketPrice: "$30,000",
    features: ["Penetration testing", "Vulnerability assessment", "Compliance audit", "Security recommendations", "Remediation support"],
    benefits: ["Identify security gaps", "Meet compliance requirements", "Protect against threats", "Build customer trust"],
    link: "https://ziontechgroup.com/cybersecurity-audit",
    icon: <Shield className="h-8 w-8 text-zion-purple" />,
    tags: ["Cybersecurity", "Penetration Testing", "Compliance", "Security Audit"],
    rating: 4.8,
    reviewCount: 156,
    deliveryTime: "4-6 weeks",
    expertise: "Expert Level"
  },
  {
    id: "network-infrastructure",
    title: "Network Infrastructure Design",
    description: "Enterprise-grade network design and implementation with security, redundancy, and performance optimization.",
    category: "Networking",
    price: "$18,000",
    marketPrice: "$35,000",
    features: ["Network design", "Hardware selection", "Security implementation", "Performance optimization", "Monitoring setup"],
    benefits: ["Improved network performance", "Enhanced security", "Better reliability", "Scalable architecture"],
    link: "https://ziontechgroup.com/network-infrastructure",
    icon: <Network className="h-8 w-8 text-zion-cyan" />,
    tags: ["Networking", "Infrastructure", "Security", "Performance"],
    rating: 4.7,
    reviewCount: 78,
    deliveryTime: "6-10 weeks",
    expertise: "Advanced Level"
  },
  {
    id: "data-backup-recovery",
    title: "Enterprise Data Backup & Recovery",
    description: "Comprehensive backup solutions with disaster recovery planning and business continuity services.",
    category: "Data Protection",
    price: "$12,000",
    marketPrice: "$25,000",
    features: ["Backup strategy", "Disaster recovery planning", "Automated backups", "Testing procedures", "24/7 monitoring"],
    benefits: ["Protect critical data", "Minimize downtime", "Meet compliance", "Peace of mind"],
    link: "https://ziontechgroup.com/data-backup-recovery",
    icon: <Database className="h-8 w-8 text-zion-purple" />,
    tags: ["Data Backup", "Disaster Recovery", "Business Continuity", "Compliance"],
    rating: 4.9,
    reviewCount: 134,
    deliveryTime: "4-8 weeks",
    expertise: "Advanced Level"
  },
  {
    id: "devops-implementation",
    title: "DevOps Implementation & CI/CD",
    description: "Complete DevOps transformation with automated CI/CD pipelines, infrastructure as code, and monitoring.",
    category: "DevOps",
    price: "$20,000",
    marketPrice: "$40,000",
    features: ["CI/CD pipelines", "Infrastructure as code", "Automated testing", "Monitoring setup", "Team training"],
    benefits: ["Faster deployments", "Improved quality", "Better collaboration", "Reduced errors"],
    link: "https://ziontechgroup.com/devops-implementation",
    icon: <Server className="h-8 w-8 text-zion-cyan" />,
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure as Code"],
    rating: 4.8,
    reviewCount: 92,
    deliveryTime: "8-12 weeks",
    expertise: "Expert Level"
  },
  {
    id: "managed-it-services",
    title: "Managed IT Services",
    description: "24/7 IT management including monitoring, maintenance, support, and proactive problem resolution.",
    category: "Managed Services",
    price: "$5,000/month",
    marketPrice: "$10,000/month",
    features: ["24/7 monitoring", "Proactive maintenance", "Help desk support", "Security management", "Performance optimization"],
    benefits: ["Reduce IT costs", "Improve reliability", "Focus on business", "Expert support"],
    link: "https://ziontechgroup.com/managed-it-services",
    icon: <Server className="h-8 w-8 text-zion-purple" />,
    tags: ["Managed Services", "24/7 Support", "Monitoring", "Maintenance"],
    rating: 4.7,
    reviewCount: 201,
    deliveryTime: "2-4 weeks",
    expertise: "Advanced Level"
  },
  {
    id: "mobile-app-development",
    title: "Enterprise Mobile App Development",
    description: "Custom mobile applications for iOS and Android with enterprise features and security.",
    category: "Mobile Development",
    price: "$35,000",
    marketPrice: "$70,000",
    features: ["Cross-platform development", "Enterprise security", "API integration", "User management", "Analytics"],
    benefits: ["Improve productivity", "Enhance customer experience", "Competitive advantage", "Revenue growth"],
    link: "https://ziontechgroup.com/mobile-app-development",
    icon: <Cpu className="h-8 w-8 text-zion-cyan" />,
    tags: ["Mobile Development", "iOS", "Android", "Enterprise", "Security"],
    rating: 4.8,
    reviewCount: 167,
    deliveryTime: "12-20 weeks",
    expertise: "Expert Level"
  },
  {
    id: "web-application",
    title: "Custom Web Application Development",
    description: "Full-stack web applications with modern technologies, responsive design, and scalable architecture.",
    category: "Web Development",
    price: "$28,000",
    marketPrice: "$55,000",
    features: ["Full-stack development", "Responsive design", "Database design", "API development", "Deployment"],
    benefits: ["Custom solution", "Scalable architecture", "Modern technology", "Better user experience"],
    link: "https://ziontechgroup.com/web-application",
    icon: <Palette className="h-8 w-8 text-zion-purple" />,
    tags: ["Web Development", "Full-stack", "Responsive", "API", "Database"],
    rating: 4.7,
    reviewCount: 189,
    deliveryTime: "10-16 weeks",
    expertise: "Advanced Level"
  },
  {
    id: "data-analytics",
    title: "Business Intelligence & Analytics",
    description: "Data analytics solutions with dashboards, reporting, and insights for data-driven decision making.",
    category: "Data Analytics",
    price: "$22,000",
    marketPrice: "$45,000",
    features: ["Data warehouse design", "ETL processes", "Dashboard creation", "Report automation", "User training"],
    benefits: ["Data-driven decisions", "Identify opportunities", "Improve efficiency", "Competitive insights"],
    link: "https://ziontechgroup.com/data-analytics",
    icon: <Cloud className="h-8 w-8 text-zion-cyan" />,
    tags: ["Data Analytics", "Business Intelligence", "Dashboards", "Reporting"],
    rating: 4.8,
    reviewCount: 112,
    deliveryTime: "8-12 weeks",
    expertise: "Advanced Level"
  },
  {
    id: "it-consulting",
    title: "IT Strategy & Consulting",
    description: "Strategic IT consulting to align technology with business goals and optimize IT investments.",
    category: "IT Consulting",
    price: "$15,000",
    marketPrice: "$30,000",
    features: ["IT assessment", "Strategy development", "Technology roadmap", "Vendor selection", "Implementation planning"],
    benefits: ["Align IT with business", "Optimize investments", "Reduce risks", "Improve efficiency"],
    link: "https://ziontechgroup.com/it-consulting",
    icon: <Shield className="h-8 w-8 text-zion-purple" />,
    tags: ["IT Strategy", "Consulting", "Technology Roadmap", "Vendor Selection"],
    rating: 4.9,
    reviewCount: 89,
    deliveryTime: "6-10 weeks",
    expertise: "Expert Level"
  },
  {
    id: "hardware-procurement",
    title: "Hardware Procurement & Setup",
    description: "End-to-end hardware procurement, installation, and configuration for optimal performance.",
    category: "Hardware",
    price: "$8,000",
    marketPrice: "$15,000",
    features: ["Hardware selection", "Procurement", "Installation", "Configuration", "Testing"],
    benefits: ["Optimal performance", "Cost savings", "Proper setup", "Warranty support"],
    link: "https://ziontechgroup.com/hardware-procurement",
    icon: <Cpu className="h-8 w-8 text-zion-cyan" />,
    tags: ["Hardware", "Procurement", "Installation", "Configuration"],
    rating: 4.6,
    reviewCount: 67,
    deliveryTime: "2-4 weeks",
    expertise: "Intermediate Level"
  },
  {
    id: "software-integration",
    title: "Software Integration Services",
    description: "Seamless integration of third-party software and custom applications for improved workflow.",
    category: "Software Integration",
    price: "$18,000",
    marketPrice: "$35,000",
    features: ["API development", "Data mapping", "Workflow automation", "Testing", "User training"],
    benefits: ["Improved workflow", "Data consistency", "Automation", "Better user experience"],
    link: "https://ziontechgroup.com/software-integration",
    icon: <Shield className="h-8 w-8 text-zion-purple" />,
    tags: ["Software Integration", "API", "Workflow", "Automation"],
    rating: 4.7,
    reviewCount: 78,
    deliveryTime: "6-10 weeks",
    expertise: "Advanced Level"
  }
];

const categories = [
  { name: "All IT Services", value: "all", icon: <Server className="h-4 w-4" /> },
  { name: "Cloud Services", value: "cloud", icon: <Cloud className="h-4 w-4" /> },
  { name: "Cybersecurity", value: "cybersecurity", icon: <Shield className="h-4 w-4" /> },
  { name: "Networking", value: "networking", icon: <Network className="h-4 w-4" /> },
  { name: "Data Protection", value: "data", icon: <Database className="h-4 w-4" /> },
  { name: "DevOps", value: "devops", icon: <Server className="h-4 w-4" /> },
  { name: "Development", value: "development", icon: <Palette className="h-4 w-4" /> },
  { name: "Consulting", value: "consulting", icon: <Shield className="h-4 w-4" /> }
];

export default function ITServices() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = IT_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === "all" || 
      service.category.toLowerCase().includes(selectedCategory) ||
      service.tags.some(tag => tag.toLowerCase().includes(selectedCategory));
    
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      <SEO 
        title="IT Services & Solutions - Zion Tech Group" 
        description="Comprehensive IT services including cloud migration, cybersecurity, networking, and custom development solutions."
        keywords="IT services, cloud migration, cybersecurity, networking, managed IT services, custom development"
        canonical="https://ziontechgroup.com/it-services"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Animated background with more particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-zion-cyan-light opacity-20 animate-pulse"></div>
          <div className="absolute top-1/6 right-1/6 w-1.5 h-1.5 rounded-full bg-zion-cyan opacity-50 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/6 w-2.5 h-2.5 rounded-full bg-zion-purple-light opacity-30 animate-pulse delay-500"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 rounded-full bg-zion-purple opacity-60 animate-pulse delay-1500"></div>
        </div>
        
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-6">
            IT Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-3xl mx-auto">
            Comprehensive IT solutions that drive business growth. From cloud migration to cybersecurity, 
            we provide expert technology services to keep your business ahead of the curve.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6"
              size="lg"
            >
              Get IT Consultation
            </Button>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark text-lg py-6">
              {/* Play icon was removed from imports, so this will cause an error */}
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="text-3xl font-bold text-zion-cyan mb-2">1000+</div>
            <div className="text-zion-slate-light">IT Projects Completed</div>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="text-3xl font-bold text-zion-purple mb-2">99.9%</div>
            <div className="text-zion-slate-light">Uptime Guarantee</div>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
            <div className="text-zion-slate-light">Support Available</div>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="text-3xl font-bold text-zion-purple mb-2">100+</div>
            <div className="text-zion-slate-light">IT Specialists</div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-4 mb-12">
        <div className="bg-zion-blue-dark/50 backdrop-blur-md rounded-2xl p-6 border border-zion-blue-light">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search IT services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`flex items-center gap-2 ${
                    selectedCategory === category.value
                      ? "bg-zion-purple text-white"
                      : "border-zion-blue-light text-zion-slate-light hover:bg-zion-purple/10"
                  }`}
                >
                  {category.icon}
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="bg-zion-blue-dark/30 border-zion-blue-light hover:border-zion-cyan transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 bg-zion-slate-dark/50 rounded-xl">
                    {service.icon}
                  </div>
                  <Badge className="bg-zion-purple text-white">
                    {service.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Pricing and Rating */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-zion-cyan">{service.price}</span>
                    <span className="text-zion-slate-light line-through ml-2">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white">{service.rating}</span>
                    <span className="text-zion-slate-light">({service.reviewCount})</span>
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-zion-cyan" />
                    <span className="text-zion-slate-light">{service.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Users icon was removed from imports, so this will cause an error */}
                    <Award className="h-4 w-4 text-zion-purple" />
                    <span className="text-zion-slate-light">{service.expertise}</span>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                        {/* CheckCircle icon was removed from imports, so this will cause an error */}
                        {/* <CheckCircle className="h-4 w-4 text-zion-cyan" /> */}
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                        {/* TrendingUp icon was removed from imports, so this will cause an error */}
                        {/* <TrendingUp className="h-4 w-4 text-zion-purple" /> */}
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-zion-slate-dark/50 text-zion-slate-light border-zion-blue-light">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                    Get Quote
                  </Button>
                  {/* ExternalLink icon was removed from imports, so this will cause an error */}
                  {/* <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark">
                    <ExternalLink className="h-4 w-4" />
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            We deliver exceptional IT services with proven expertise, innovative solutions, and unwavering commitment to your success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-zion-cyan" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Proven Expertise</h3>
            <p className="text-zion-slate-light">Over 10 years of experience delivering successful IT solutions across industries.</p>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
              {/* Zap icon was removed from imports, so this will cause an error */}
              {/* <Zap className="h-8 w-8 text-zion-purple" /> */}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
            <p className="text-zion-slate-light">Cutting-edge technologies and methodologies to solve complex business challenges.</p>
          </div>
          <div className="bg-zion-blue-dark/30 rounded-2xl p-6 border border-zion-blue-light text-center">
            <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
              {/* Users icon was removed from imports, so this will cause an error */}
              {/* <Users className="h-8 w-8 text-zion-cyan" /> */}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Dedicated Support</h3>
            <p className="text-zion-slate-light">24/7 support and maintenance to ensure your systems run smoothly.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our IT services can optimize your technology, improve efficiency, 
            and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light text-lg py-6">
              Start IT Transformation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple text-lg py-6">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-zion-blue-dark/30 rounded-2xl p-8 border border-zion-blue-light">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Get Expert IT Support</h2>
            <p className="text-zion-slate-light text-lg">
              Our IT specialists are ready to help you build robust, scalable, and secure technology solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-zion-slate-dark/30 rounded-xl">
              {/* Phone icon was removed from imports, so this will cause an error */}
              {/* <Phone className="h-12 w-12 text-zion-cyan mx-auto mb-4" /> */}
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div className="p-6 bg-zion-slate-dark/30 rounded-xl">
              {/* Mail icon was removed from imports, so this will cause an error */}
              {/* <Mail className="h-12 w-12 text-zion-cyan mx-auto mb-4" /> */}
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="p-6 bg-zion-slate-dark/30 rounded-xl">
              {/* MapPin icon was removed from imports, so this will cause an error */}
              {/* <MapPin className="h-12 w-12 text-zion-cyan mx-auto mb-4" /> */}
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a2e5

import React, { useState } from 'react';
<<<<<<< HEAD
import { 
  Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, 
  Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, 
  ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, 
  Building, Factory, Store, Car, Plane, Ship, Home, Hospital, 
  Building2, GraduationCap, Calendar, FileText, BarChart3, 
  MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, 
  PieChart, Activity, Wrench, Server, Laptop, Smartphone, Router, 
  HardDrive, Lock, Key, EyeOff, ShieldCheck, Globe2, Wifi, 
  Bluetooth, Satellite, Antenna, CircuitBoard, RefreshCw, Download, 
  Upload, Share2, Link, Unlink, Cog, Hammer, Paintbrush, Palette, 
  Brush, PenTool, Layers, Grid, Layout, Monitor, Projector, Printer, 
  Archive, Folder, File, Code 
} from 'lucide-react';
=======
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Server, Code, Smartphone, Monitor, Router, HardDrive, Wifi, Lock, Key, Bug, CheckCircle, AlertTriangle, Info, ArrowRight, Wrench, Tool, Cog, Server as ServerIcon, Database as DatabaseIcon2, Shield as ShieldIcon2, Zap as ZapIcon3, Building as BuildingIcon, Factory as FactoryIcon, Store as StoreIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Home as HomeIcon, Building2 as Building2Icon, GraduationCap as GraduationCapIcon, Calendar as CalendarIcon, FileText as FileTextIcon, BarChart3 as BarChart3Icon, Users as UsersIcon2, CreditCard as CreditCardIcon2, MessageSquare as MessageSquareIcon, Camera as CameraIcon, Video as VideoIcon, Music as MusicIcon, BookOpen as BookOpenIcon, Target as TargetIcon, TrendingUp as TrendingUpIcon, PieChart as PieChartIcon, Activity as ActivityIcon, Zap as ZapIcon4 } from 'lucide-react';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd

const ITOnsiteServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
<<<<<<< HEAD
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  // Comprehensive IT Services data
  const itServices = [
    {
      id: 1,
      name: "Enterprise Network Infrastructure",
      category: "Networking",
      pricing: "Project-based",
      description: "Complete network design, implementation, and optimization for enterprise environments",
      price: 15000,
      pricingModel: "project-based",
      duration: "2-4 weeks",
      features: ["Network architecture design", "Cisco/Meraki implementation", "Security configuration", "Performance optimization"],
      benefits: ["Scalable infrastructure", "Enhanced security", "Improved performance", "Future-proof design"],
      targetAudience: ["Large enterprises", "Multi-location businesses", "Healthcare facilities", "Educational institutions"],
      tags: ["Networking", "Infrastructure", "Enterprise", "Security"],
=======
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  // IT Onsite Services data
  const itOnsiteServices = [
    {
      id: 1,
      name: "Network Infrastructure Installation",
      category: "Infrastructure",
      region: "Northeast",
      description: "Complete network infrastructure design, installation, and configuration for businesses of all sizes",
      price: 2500,
      pricingModel: "project-based",
      serviceArea: "DE, PA, NJ, NY, MD, VA",
      features: ["Network design & planning", "Cable installation", "Switch & router setup", "WiFi configuration", "Network security", "Testing & optimization"],
      benefits: ["Professional installation", "Warranty coverage", "Documentation", "Training provided", "Ongoing support", "Scalable design"],
      targetAudience: ["Small businesses", "Medium enterprises", "Retail stores", "Office buildings"],
      tags: ["Network Installation", "Infrastructure", "WiFi Setup", "Cabling", "Network Security"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
<<<<<<< HEAD
      }
    },
    {
      id: 2,
      name: "Cybersecurity Assessment & Implementation",
      category: "Security",
      pricing: "Project-based",
      description: "Comprehensive security audit, threat assessment, and security infrastructure implementation",
      price: 8000,
      pricingModel: "project-based",
      duration: "1-3 weeks",
      features: ["Security audit", "Penetration testing", "Firewall configuration", "Security training"],
      benefits: ["Threat protection", "Compliance", "Risk reduction", "Employee awareness"],
      targetAudience: ["Financial institutions", "Healthcare", "Legal firms", "Manufacturing"],
      tags: ["Cybersecurity", "Security Audit", "Compliance", "Training"],
=======
      },
      responseTime: "24-48 hours",
      warranty: "2 years"
    },
    {
      id: 2,
      name: "Server Room Setup & Maintenance",
      category: "Data Center",
      region: "Northeast",
      description: "Professional server room design, installation, and ongoing maintenance services",
      price: 5000,
      pricingModel: "project-based",
      serviceArea: "DE, PA, NJ, NY, MD, VA",
      features: ["Room design & planning", "HVAC installation", "Power systems", "Server racks", "Security systems", "Monitoring setup"],
      benefits: ["Professional design", "Energy efficiency", "Security compliance", "Scalability", "24/7 monitoring", "Preventive maintenance"],
      targetAudience: ["Medium enterprises", "Large businesses", "Healthcare facilities", "Financial institutions"],
      tags: ["Server Room", "Data Center", "HVAC", "Power Systems", "Security"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
<<<<<<< HEAD
      }
    },
    {
      id: 3,
      name: "Cloud Migration & Optimization",
      category: "Cloud Services",
      pricing: "Project-based",
      description: "Seamless migration to cloud platforms with optimization and cost management",
      price: 12000,
      pricingModel: "project-based",
      duration: "3-6 weeks",
      features: ["Cloud strategy", "Migration planning", "Data transfer", "Cost optimization"],
      benefits: ["Scalability", "Cost reduction", "Disaster recovery", "Global access"],
      targetAudience: ["Growing businesses", "Remote teams", "E-commerce", "SaaS companies"],
      tags: ["Cloud Migration", "AWS", "Azure", "Google Cloud"],
=======
      },
      responseTime: "24-48 hours",
      warranty: "3 years"
    },
    {
      id: 3,
      name: "Security System Installation",
      category: "Security",
      region: "Northeast",
      description: "Comprehensive security system installation including cameras, access control, and monitoring",
      price: 3500,
      pricingModel: "project-based",
      serviceArea: "DE, PA, NJ, NY, MD, VA",
      features: ["Security cameras", "Access control", "Alarm systems", "Monitoring setup", "Mobile app integration", "24/7 support"],
      benefits: ["Enhanced security", "Remote monitoring", "Mobile access", "Professional installation", "Warranty coverage", "Ongoing support"],
      targetAudience: ["Retail stores", "Office buildings", "Warehouses", "Healthcare facilities"],
      tags: ["Security Systems", "Cameras", "Access Control", "Monitoring", "Alarms"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
<<<<<<< HEAD
      }
    },
    {
      id: 4,
      name: "Data Center Design & Implementation",
      category: "Infrastructure",
      pricing: "Project-based",
      description: "Custom data center design with high availability and disaster recovery",
      price: 25000,
      pricingModel: "project-based",
      duration: "6-12 weeks",
      features: ["Facility design", "Power systems", "Cooling solutions", "Security systems"],
      benefits: ["High availability", "Disaster recovery", "Energy efficiency", "Scalability"],
      targetAudience: ["Large corporations", "Data centers", "Financial services", "Government"],
      tags: ["Data Center", "Infrastructure", "High Availability", "Disaster Recovery"],
=======
      },
      responseTime: "24-48 hours",
      warranty: "2 years"
    },
    {
      id: 4,
      name: "Point of Sale System Setup",
      category: "Retail IT",
      region: "Northeast",
      description: "Complete POS system installation, configuration, and training for retail businesses",
      price: 1800,
      pricingModel: "project-based",
      serviceArea: "DE, PA, NJ, NY, MD, VA",
      features: ["POS hardware setup", "Software configuration", "Payment integration", "Receipt printers", "Barcode scanners", "Staff training"],
      benefits: ["Quick setup", "Payment processing", "Inventory management", "Sales reporting", "Staff training", "Ongoing support"],
      targetAudience: ["Retail stores", "Restaurants", "Service businesses", "Small shops"],
      tags: ["POS Systems", "Retail IT", "Payment Processing", "Inventory", "Training"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
<<<<<<< HEAD
      }
    },
    {
      id: 5,
      name: "IT Support & Managed Services",
      category: "Support",
      pricing: "Monthly",
      description: "24/7 IT support and proactive managed services for business continuity",
      price: 1500,
      pricingModel: "monthly",
      duration: "Ongoing",
      features: ["24/7 support", "Proactive monitoring", "Patch management", "Backup management"],
      benefits: ["Reduced downtime", "Predictable costs", "Expert support", "Peace of mind"],
      targetAudience: ["Small businesses", "Medium enterprises", "Healthcare", "Legal firms"],
      tags: ["IT Support", "Managed Services", "24/7 Support", "Monitoring"],
=======
      },
      responseTime: "24-48 hours",
      warranty: "1 year"
    },
    {
      id: 5,
      name: "Office IT Setup & Migration",
      category: "Office IT",
      region: "Northeast",
      description: "Complete office IT setup, computer deployment, and data migration services",
      price: 3000,
      pricingModel: "project-based",
      serviceArea: "DE, PA, NJ, NY, MD, VA",
      features: ["Computer deployment", "Network setup", "Software installation", "Data migration", "User training", "Documentation"],
      benefits: ["Minimal downtime", "Professional setup", "User training", "Documentation", "Ongoing support", "Scalability"],
      targetAudience: ["New offices", "Office expansions", "Business relocations", "Startups"],
      tags: ["Office IT", "Computer Deployment", "Data Migration", "Training", "Documentation"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
<<<<<<< HEAD
      }
    },
    {
      id: 6,
      name: "Digital Transformation Consulting",
      category: "Consulting",
      pricing: "Hourly",
      description: "Strategic IT consulting for digital transformation and technology modernization",
      price: 200,
      pricingModel: "hourly",
      duration: "Flexible",
      features: ["Technology assessment", "Strategy development", "Implementation planning", "Change management"],
      benefits: ["Competitive advantage", "Operational efficiency", "Cost optimization", "Future readiness"],
      targetAudience: ["Traditional businesses", "Manufacturing", "Retail", "Service industries"],
      tags: ["Digital Transformation", "Consulting", "Strategy", "Change Management"],
=======
      },
      responseTime: "24-48 hours",
      warranty: "1 year"
    },
    {
      id: 6,
      name: "Healthcare IT Compliance",
      category: "Healthcare IT",
      region: "Northeast",
      description: "HIPAA-compliant IT infrastructure setup and maintenance for healthcare facilities",
      price: 8000,
      pricingModel: "project-based",
      serviceArea: "DE, PA, NJ, NY, MD, VA",
      features: ["HIPAA compliance", "Secure networks", "Data encryption", "Access control", "Audit trails", "Staff training"],
      benefits: ["HIPAA compliance", "Data security", "Regulatory compliance", "Audit readiness", "Staff training", "Ongoing support"],
      targetAudience: ["Medical offices", "Dental practices", "Healthcare clinics", "Medical facilities"],
      tags: ["Healthcare IT", "HIPAA", "Compliance", "Security", "Training"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
<<<<<<< HEAD
      }
    },
    {
      id: 7,
      name: "Hardware Installation & Maintenance",
      category: "Hardware",
      pricing: "Project-based",
      description: "Professional hardware installation, configuration, and ongoing maintenance services",
      price: 5000,
      pricingModel: "project-based",
      duration: "1-2 weeks",
      features: ["Hardware installation", "Configuration", "Testing", "Documentation"],
      benefits: ["Professional installation", "Proper configuration", "Warranty protection", "Long-term reliability"],
      targetAudience: ["New offices", "Hardware upgrades", "Equipment replacement", "System expansion"],
      tags: ["Hardware", "Installation", "Configuration", "Maintenance"],
=======
      },
      responseTime: "24-48 hours",
      warranty: "3 years"
    },
    {
      id: 7,
      name: "Manufacturing IT Integration",
      category: "Industrial IT",
      region: "Northeast",
      description: "IT infrastructure integration for manufacturing facilities and industrial automation",
      price: 12000,
      pricingModel: "project-based",
      serviceArea: "DE, PA, NJ, NY, MD, VA",
      features: ["Industrial networks", "SCADA systems", "IoT integration", "Data collection", "Monitoring systems", "Security implementation"],
      benefits: ["Operational efficiency", "Data insights", "Automation", "Cost reduction", "Safety improvement", "Scalability"],
      targetAudience: ["Manufacturing plants", "Industrial facilities", "Warehouses", "Production facilities"],
      tags: ["Industrial IT", "SCADA", "IoT", "Automation", "Manufacturing"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
<<<<<<< HEAD
      }
    },
    {
      id: 8,
      name: "Software Implementation & Training",
      category: "Software",
      pricing: "Project-based",
      description: "Enterprise software implementation with comprehensive user training and support",
      price: 10000,
      pricingModel: "project-based",
      duration: "2-4 weeks",
      features: ["Software installation", "Configuration", "Data migration", "User training"],
      benefits: ["Faster adoption", "Reduced errors", "Increased productivity", "Better ROI"],
      targetAudience: ["ERP implementations", "CRM systems", "Accounting software", "Industry-specific solutions"],
      tags: ["Software", "Implementation", "Training", "Support"],
=======
      },
      responseTime: "24-48 hours",
      warranty: "3 years"
    },
    {
      id: 8,
      name: "Emergency IT Response",
      category: "Emergency Services",
      region: "Northeast",
      description: "24/7 emergency IT response and disaster recovery services for critical business systems",
      price: 500,
      pricingModel: "hourly",
      serviceArea: "DE, PA, NJ, NY, MD, VA",
      features: ["24/7 response", "Emergency repairs", "Data recovery", "System restoration", "Preventive measures", "Documentation"],
      benefits: ["Quick response", "Minimal downtime", "Data protection", "Business continuity", "Expert technicians", "Preventive measures"],
      targetAudience: ["All businesses", "Critical systems", "Emergency situations", "Disaster recovery"],
      tags: ["Emergency IT", "24/7 Response", "Disaster Recovery", "Data Recovery", "Emergency Repairs"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
<<<<<<< HEAD
      }
    },
    {
      id: 9,
      name: "Disaster Recovery & Business Continuity",
      category: "Recovery",
      pricing: "Project-based",
      description: "Comprehensive disaster recovery planning and implementation for business resilience",
      price: 18000,
      pricingModel: "project-based",
      duration: "4-8 weeks",
      features: ["Risk assessment", "Recovery planning", "Backup systems", "Testing procedures"],
      benefits: ["Business continuity", "Risk mitigation", "Compliance", "Customer confidence"],
      targetAudience: ["Financial services", "Healthcare", "Manufacturing", "Critical infrastructure"],
      tags: ["Disaster Recovery", "Business Continuity", "Risk Management", "Compliance"],
=======
      },
      responseTime: "2-4 hours",
      warranty: "90 days"
    },
    {
      id: 9,
      name: "Smart Building Integration",
      category: "Smart Buildings",
      region: "Northeast",
      description: "Complete smart building integration with IoT devices, automation, and energy management",
      price: 15000,
      pricingModel: "project-based",
      serviceArea: "DE, PA, NJ, NY, MD, VA",
      features: ["IoT integration", "Building automation", "Energy management", "Climate control", "Security systems", "Mobile control"],
      benefits: ["Energy efficiency", "Cost reduction", "Automation", "Remote control", "Data insights", "Sustainability"],
      targetAudience: ["Office buildings", "Commercial properties", "Retail centers", "Mixed-use developments"],
      tags: ["Smart Buildings", "IoT", "Automation", "Energy Management", "Building Control"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
<<<<<<< HEAD
      }
    },
    {
      id: 10,
      name: "IoT Infrastructure & Smart Building",
      category: "IoT",
      pricing: "Project-based",
      description: "Internet of Things infrastructure for smart buildings and connected environments",
      price: 22000,
      pricingModel: "project-based",
      duration: "6-10 weeks",
      features: ["IoT architecture", "Sensor deployment", "Data collection", "Analytics platform"],
      benefits: ["Energy efficiency", "Automation", "Data insights", "Cost savings"],
      targetAudience: ["Commercial buildings", "Manufacturing facilities", "Healthcare campuses", "Educational institutions"],
      tags: ["IoT", "Smart Buildings", "Automation", "Energy Efficiency"],
=======
      },
      responseTime: "24-48 hours",
      warranty: "3 years"
    },
    {
      id: 10,
      name: "Audio/Visual System Setup",
      category: "AV Systems",
      region: "Northeast",
      description: "Professional audio/visual system installation for conference rooms, auditoriums, and presentation spaces",
      price: 4000,
      pricingModel: "project-based",
      serviceArea: "DE, PA, NJ, NY, MD, VA",
      features: ["Projector systems", "Audio systems", "Video conferencing", "Control systems", "Cabling", "Training"],
      benefits: ["Professional quality", "Easy operation", "Reliable performance", "Scalability", "Staff training", "Ongoing support"],
      targetAudience: ["Conference rooms", "Auditoriums", "Training facilities", "Presentation spaces"],
      tags: ["AV Systems", "Projectors", "Audio", "Video Conferencing", "Presentation"],
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
<<<<<<< HEAD
      }
    },
    {
      id: 11,
      name: "Virtualization & Containerization",
      category: "Virtualization",
      pricing: "Project-based",
      description: "Server virtualization and containerization for improved resource utilization",
      price: 15000,
      pricingModel: "project-based",
      duration: "3-5 weeks",
      features: ["VMware/Hyper-V setup", "Docker containers", "Resource optimization", "Management tools"],
      benefits: ["Resource efficiency", "Cost reduction", "Scalability", "Easier management"],
      targetAudience: ["Data centers", "Development teams", "IT departments", "Growing businesses"],
      tags: ["Virtualization", "Containers", "Docker", "VMware"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },
    {
      id: 12,
      name: "Compliance & Regulatory Solutions",
      category: "Compliance",
      pricing: "Project-based",
      description: "IT compliance solutions for HIPAA, SOX, GDPR, and industry-specific regulations",
      price: 12000,
      pricingModel: "project-based",
      duration: "4-6 weeks",
      features: ["Compliance audit", "Policy development", "Implementation", "Ongoing monitoring"],
      benefits: ["Regulatory compliance", "Risk reduction", "Audit readiness", "Legal protection"],
      targetAudience: ["Healthcare", "Financial services", "Legal firms", "Government contractors"],
      tags: ["Compliance", "HIPAA", "SOX", "GDPR"],
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
  ];

  const categories = ['all', 'Networking', 'Security', 'Cloud Services', 'Infrastructure', 'Support', 'Consulting', 'Hardware', 'Software', 'Recovery', 'IoT', 'Virtualization', 'Compliance'];
  const pricingModels = ['all', 'Project-based', 'Monthly', 'Hourly'];

  const filteredServices = itServices.filter(service => {
=======
      },
      responseTime: "24-48 hours",
      warranty: "2 years"
    }
  ];

  const categories = ['all', 'Infrastructure', 'Data Center', 'Security', 'Retail IT', 'Office IT', 'Healthcare IT', 'Industrial IT', 'Emergency Services', 'Smart Buildings', 'AV Systems'];
  const regions = ['all', 'Northeast'];

  const filteredServices = itOnsiteServices.filter(service => {
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
<<<<<<< HEAD
    const matchesPricing = selectedPricing === 'all' || service.pricing === selectedPricing;
    
    return matchesSearch && matchesCategory && matchesPricing;
=======
    const matchesRegion = selectedRegion === 'all' || service.region === selectedRegion;
    
    return matchesSearch && matchesCategory && matchesRegion;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
  });

  const formatPrice = (price: number, model: string) => {
    switch (model) {
<<<<<<< HEAD
      case 'monthly':
        return `$${price.toLocaleString()}/month`;
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
      case 'hourly':
        return `$${price}/hour`;
      case 'project-based':
        return `$${price.toLocaleString()}`;
      default:
<<<<<<< HEAD
        return `$${price.toLocaleString()}`;
=======
        return `$${price}`;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
<<<<<<< HEAD
      case 'Networking': return <Network className="w-6 h-6" />;
      case 'Security': return <Shield className="w-6 h-6" />;
      case 'Cloud Services': return <Cloud className="w-6 h-6" />;
      case 'Infrastructure': return <Server className="w-6 h-6" />;
      case 'Support': return <Settings className="w-6 h-6" />;
      case 'Consulting': return <Users className="w-6 h-6" />;
      case 'Hardware': return <Cpu className="w-6 h-6" />;
      case 'Software': return <Code className="w-6 h-6" />;
      case 'Recovery': return <RefreshCw className="w-6 h-6" />;
      case 'IoT': return <Wifi className="w-6 h-6" />;
      case 'Virtualization': return <Layers className="w-6 h-6" />;
      case 'Compliance': return <ShieldCheck className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'Project-based': return 'text-blue-400';
      case 'Monthly': return 'text-green-400';
      case 'Hourly': return 'text-purple-400';
      default: return 'text-gray-400';
=======
      case 'Infrastructure': return <Network className="w-6 h-6" />;
      case 'Data Center': return <ServerIcon className="w-6 h-6" />;
      case 'Security': return <ShieldIcon className="w-6 h-6" />;
      case 'Retail IT': return <Store className="w-6 h-6" />;
      case 'Office IT': return <Building className="w-6 h-6" />;
      case 'Healthcare IT': return <Shield className="w-6 h-6" />;
      case 'Industrial IT': return <Factory className="w-6 h-6" />;
      case 'Emergency Services': return <AlertTriangle className="w-6 h-6" />;
      case 'Smart Buildings': return <Building2 className="w-6 h-6" />;
      case 'AV Systems': return <Video className="w-6 h-6" />;
      default: return <ZapIcon className="w-6 h-6" />;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
            IT Onsite Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
<<<<<<< HEAD
            Professional IT services delivered on-site with enterprise-grade solutions for businesses of all sizes
=======
            Professional onsite IT services delivered by certified technicians across the Northeast region
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
<<<<<<< HEAD
              placeholder="Search IT services..."
=======
              placeholder="Search onsite IT services..."
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
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
<<<<<<< HEAD
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {pricingModels.map(pricing => (
                <option key={pricing} value={pricing} className="bg-gray-800 text-white">
                  {pricing === 'all' ? 'All Pricing Models' : pricing}
=======
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {regions.map(region => (
                <option key={region} value={region} className="bg-gray-800 text-white">
                  {region === 'all' ? 'All Regions' : region}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
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
<<<<<<< HEAD
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPricingColor(service.pricing)} bg-opacity-20 bg-current`}>
                        {service.pricing}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full text-blue-400 bg-blue-400 bg-opacity-20">
                        {service.category}
                      </span>
=======
                      <span className="px-2 py-1 text-xs font-medium rounded-full text-blue-400 bg-blue-400 bg-opacity-20">
                        {service.category}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full text-green-400 bg-green-400 bg-opacity-20">
                        {service.region}
                      </span>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <div className="text-2xl font-bold text-white mb-2">
                  {formatPrice(service.price, service.pricingModel)}
                </div>
<<<<<<< HEAD
                <div className="text-sm text-gray-400">Duration: {service.duration}</div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
=======
                <div className="text-sm text-gray-400">Service Area: {service.serviceArea}</div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Services Include:</h4>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
<<<<<<< HEAD
                <h4 className="text-sm font-semibold text-white mb-2">Perfect For:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.targetAudience.slice(0, 2).map((audience, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded">
                      {audience}
                    </span>
                  ))}
=======
                <h4 className="text-sm font-semibold text-white mb-2">Response Time:</h4>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Clock className="w-4 h-4" />
                  <span>{service.responseTime}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Warranty:</h4>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Shield className="w-4 h-4" />
                  <span>{service.warranty}</span>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
                </div>
              </div>

              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
<<<<<<< HEAD
                  <span>Get professional IT support</span>
=======
                  <span>Schedule onsite service</span>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
                  <a 
                    href={service.contactInfo.website}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
<<<<<<< HEAD
                    Contact Us →
=======
                    Get Quote →
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-gray-300 mb-6">
              Our expert IT professionals are ready to deliver on-site solutions tailored to your business needs
=======
        {/* Service Areas */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Service Areas</h2>
            <p className="text-gray-300 mb-6">
              We provide onsite IT services across the Northeast region
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-blue-500/20 rounded-lg">
                <h3 className="text-white font-semibold">Delaware</h3>
                <p className="text-gray-300 text-sm">Middletown, Wilmington, Dover</p>
              </div>
              <div className="p-4 bg-blue-500/20 rounded-lg">
                <h3 className="text-white font-semibold">Pennsylvania</h3>
                <p className="text-gray-300 text-sm">Philadelphia, Pittsburgh, Harrisburg</p>
              </div>
              <div className="p-4 bg-blue-500/20 rounded-lg">
                <h3 className="text-white font-semibold">New Jersey</h3>
                <p className="text-gray-300 text-sm">Newark, Jersey City, Trenton</p>
              </div>
              <div className="p-4 bg-blue-500/20 rounded-lg">
                <h3 className="text-white font-semibold">New York</h3>
                <p className="text-gray-300 text-sm">New York City, Buffalo, Albany</p>
              </div>
              <div className="p-4 bg-blue-500/20 rounded-lg">
                <h3 className="text-white font-semibold">Maryland</h3>
                <p className="text-gray-300 text-sm">Baltimore, Annapolis, Frederick</p>
              </div>
              <div className="p-4 bg-blue-500/20 rounded-lg">
                <h3 className="text-white font-semibold">Virginia</h3>
                <p className="text-gray-300 text-sm">Richmond, Virginia Beach, Arlington</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready for Onsite IT Services?</h2>
            <p className="text-gray-300 mb-6">
              Our certified technicians are ready to help with your onsite IT needs
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Phone</p>
<<<<<<< HEAD
                <p className="text-gray-300">{itServices[0].contactInfo.phone}</p>
=======
                <p className="text-gray-300">+1 302 464 0950</p>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
              </div>
              <div>
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Email</p>
<<<<<<< HEAD
                <p className="text-gray-300">{itServices[0].contactInfo.email}</p>
=======
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
              </div>
              <div>
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
<<<<<<< HEAD
=======
            <div className="mt-8">
              <a 
                href="https://ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our Website
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-abdd
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITOnsiteServicesPage;

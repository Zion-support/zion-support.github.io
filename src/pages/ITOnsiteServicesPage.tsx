import React, { useState } from 'react';
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
  const [selectedPricing, setSelectedPricing] = useState<string>('all');
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
      pricing: "Project-based",
      description: "Comprehensive security audit, threat assessment, and security infrastructure implementation",
      price: 8000,
      pricingModel: "project-based",
      duration: "1-3 weeks",
      features: ["Security audit", "Penetration testing", "Firewall configuration", "Security training"],
      benefits: ["Threat protection", "Compliance", "Risk reduction", "Employee awareness"],
      targetAudience: ["Financial institutions", "Healthcare", "Legal firms", "Manufacturing"],
      tags: ["Cybersecurity", "Security Audit", "Compliance", "Training"],
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
  const categories = ['all', 'Networking', 'Security', 'Cloud Services', 'Infrastructure', 'Support', 'Consulting', 'Hardware', 'Software', 'Recovery', 'IoT', 'Virtualization', 'Compliance'];
  const pricingModels = ['all', 'Project-based', 'Monthly', 'Hourly'];

  const filteredServices = itServices.filter(service => {
    const matchesPricing = selectedPricing === 'all' || service.pricing === selectedPricing;
    
    return matchesSearch && matchesCategory && matchesPricing;
      case 'monthly':
        return `$${price.toLocaleString()}/month`;
        return `$${price.toLocaleString()}`;
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
            IT Onsite Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional IT services delivered on-site with enterprise-grade solutions for businesses of all sizes
              placeholder="Search IT services..."
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPricingColor(service.pricing)} bg-opacity-20 bg-current`}>
                        {service.pricing}
                <div className="text-sm text-gray-400">Duration: {service.duration}</div>
              <div className="mb-4">
                  <span>Get professional IT support</span>
                    Contact Us →
        {/* Contact Information */}
              Our expert IT professionals are ready to deliver on-site solutions tailored to your business needs
                <p className="text-gray-300">{itServices[0].contactInfo.phone}</p>
                <p className="text-gray-300">{itServices[0].contactInfo.email}</p>
}

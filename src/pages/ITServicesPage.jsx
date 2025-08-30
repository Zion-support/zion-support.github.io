import React from 'react';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Cloud, Shield, Server, Zap, Database, Globe, Code, Monitor, Smartphone, Settings, Users, BarChart3, MessageSquare, FileText, CheckCircle, Search, HardDrive, Brain, Cpu, Lock, Wifi, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Code as CodeIcon, Monitor as MonitorIcon, Smartphone as SmartphoneIcon, Settings as SettingsIcon, Users as UsersIcon, BarChart3 as BarChart3Icon, MessageSquare as MessageSquareIcon, FileText as FileTextIcon, CheckCircle as CheckCircleIcon, Search as SearchIcon, HardDrive as HardDriveIcon, Brain as BrainIcon, Cpu as CpuIcon, Lock as LockIcon, Wifi as WifiIcon } from 'lucide-react';

const ITServicesPage = () => {
  const itServices = [
    {
      title: "Cloud Infrastructure Management",
      description: "Comprehensive cloud services including AWS, Azure, and Google Cloud with 24/7 monitoring and optimization.",
      price: "$1,500 - $8,000/month",
      features: ["24/7 monitoring", "Cost optimization", "Security compliance", "Auto-scaling", "Disaster recovery", "Performance tuning"],
      icon: <Cloud className="h-8 w-8 text-blue-500"/>,
      category: "Cloud",
      badge: "Popular",
      link: "https://ziontechgroup.com/cloud-infrastructure",
      details: "Expert cloud infrastructure management with multi-cloud strategies, cost optimization, and enterprise-grade security."
    },
    {
      title: "Cybersecurity Services",
      description: "Complete security solutions including threat detection, penetration testing, and incident response.",
      price: "$2,000 - $15,000",
      features: ["Security audits", "Penetration testing", "Incident response", "Compliance", "Threat intelligence", "Security training"],
      icon: <Shield className="h-8 w-8 text-red-500"/>,
      category: "Security",
      badge: "Premium",
      link: "https://ziontechgroup.com/cybersecurity",
      details: "Comprehensive cybersecurity services protecting your business from evolving threats with advanced detection and response capabilities."
    },
    {
      title: "DevOps & CI/CD",
      description: "Streamline development and deployment processes with automated pipelines and infrastructure as code.",
      price: "$3,000 - $12,000/month",
      features: ["Pipeline automation", "Infrastructure as code", "Monitoring", "Performance optimization", "Container orchestration", "GitOps"],
      icon: <Zap className="h-8 w-8 text-yellow-500"/>,
      category: "DevOps",
      link: "https://ziontechgroup.com/devops",
      details: "Modern DevOps practices with automated CI/CD pipelines, infrastructure automation, and continuous monitoring."
    },
    {
      title: "Database Management",
      description: "Expert database administration, optimization, and migration services for all major database platforms.",
      price: "$1,000 - $6,000/month",
      features: ["Performance tuning", "Backup & recovery", "Security hardening", "Migration support", "High availability", "Monitoring"],
      icon: <Database className="h-8 w-8 text-green-500"/>,
      category: "Database",
      link: "https://ziontechgroup.com/database-management",
      details: "Professional database management services ensuring optimal performance, security, and reliability for your critical data."
    },
    {
      title: "Network Infrastructure",
      description: "Design, implement, and maintain robust network solutions with enterprise-grade security.",
      price: "$2,500 - $20,000",
      features: ["Network design", "Security implementation", "Monitoring", "24/7 support", "SD-WAN", "Network automation"],
      icon: <Globe className="h-8 w-8 text-purple-500"/>,
      category: "Networking",
      link: "https://ziontechgroup.com/network-infrastructure",
      details: "Enterprise-grade network infrastructure with advanced security, monitoring, and automation capabilities."
    },
    {
      title: "IT Consulting & Strategy",
      description: "Strategic IT planning and digital transformation guidance for modern businesses.",
      price: "$150 - $300/hour",
      features: ["Technology assessment", "Roadmap planning", "Vendor selection", "ROI analysis", "Digital transformation", "IT governance"],
      icon: <CheckCircle className="h-8 w-8 text-cyan-500"/>,
      category: "Consulting",
      link: "https://ziontechgroup.com/it-consulting",
      details: "Strategic IT consulting helping businesses align technology with business objectives and drive digital transformation."
    },
    {
      title: "Managed IT Services",
      description: "Complete IT management for small to enterprise businesses with proactive monitoring and support.",
      price: "$500 - $5,000/month",
      features: ["Help desk support", "System administration", "Security management", "Backup services", "Proactive monitoring", "Vendor management"],
      icon: <Settings className="h-8 w-8 text-indigo-500"/>,
      category: "Managed Services",
      badge: "New",
      link: "https://ziontechgroup.com/managed-it",
      details: "Comprehensive managed IT services providing peace of mind with 24/7 monitoring, support, and proactive maintenance."
    },
    {
      title: "Data Center Services",
      description: "On-premise and colocation data center solutions with enterprise-grade infrastructure.",
      price: "$1,000 - $10,000/month",
      features: ["Hardware provisioning", "Environmental monitoring", "Power management", "Security", "Backup power", "Climate control"],
      icon: <Server className="h-8 w-8 text-gray-500"/>,
      category: "Data Center",
      link: "https://ziontechgroup.com/data-center",
      details: "Enterprise-grade data center services with redundant power, cooling, and security systems for mission-critical applications."
    },
    {
      title: "Mobile App Development",
      description: "Custom mobile applications for iOS and Android with modern development practices.",
      price: "$15,000 - $100,000",
      features: ["UI/UX design", "Native development", "Testing", "App store deployment", "Maintenance", "Performance optimization"],
      icon: <Smartphone className="h-8 w-8 text-orange-500"/>,
      category: "Development",
      link: "https://ziontechgroup.com/mobile-development",
      details: "Professional mobile app development with modern frameworks, comprehensive testing, and ongoing maintenance support."
    },
    {
      title: "Web Development",
      description: "Modern web applications and e-commerce solutions with responsive design and SEO optimization.",
      price: "$10,000 - $75,000",
      features: ["Responsive design", "SEO optimization", "Performance tuning", "Maintenance", "Security", "Analytics integration"],
      icon: <Globe className="h-8 w-8 text-teal-500"/>,
      category: "Development",
      link: "https://ziontechgroup.com/web-development",
      details: "Modern web development services creating fast, secure, and scalable web applications optimized for search engines."
    },
    {
      title: "AI & Machine Learning",
      description: "Custom AI solutions and machine learning models for business automation and insights.",
      price: "$5,000 - $50,000",
      features: ["Custom AI models", "Data preprocessing", "Model training", "API integration", "Performance monitoring", "Continuous learning"],
      icon: <Brain className="h-8 w-8 text-pink-500"/>,
      category: "AI/ML",
      badge: "Innovative",
      link: "https://ziontechgroup.com/ai-ml",
      details: "Cutting-edge AI and machine learning solutions automating business processes and providing actionable insights from data."
    },
    {
      title: "Blockchain Development",
      description: "Blockchain solutions including smart contracts, DApps, and enterprise blockchain integration.",
      price: "$20,000 - $150,000",
      features: ["Smart contracts", "DApp development", "Blockchain integration", "Security auditing", "DeFi solutions", "NFT platforms"],
      icon: <Lock className="h-8 w-8 text-emerald-500"/>,
      category: "Blockchain",
      badge: "Emerging",
      link: "https://ziontechgroup.com/blockchain",
      details: "Innovative blockchain development services creating secure, transparent, and decentralized solutions for modern businesses."
    },
    {
      title: "IoT Solutions",
      description: "Internet of Things platforms and solutions for connected devices and smart systems.",
      price: "$8,000 - $60,000",
      features: ["IoT platform development", "Device integration", "Data analytics", "Real-time monitoring", "Automation", "Security"],
      icon: <Wifi className="h-8 w-8 text-blue-500"/>,
      category: "IoT",
      link: "https://ziontechgroup.com/iot-solutions",
      details: "Comprehensive IoT solutions connecting devices, collecting data, and creating intelligent automation systems."
    },
    {
      title: "Data Analytics & BI",
      description: "Business intelligence solutions with advanced analytics, reporting, and data visualization.",
      price: "$3,000 - $25,000",
      features: ["Data warehousing", "ETL processes", "Advanced analytics", "Interactive dashboards", "Predictive modeling", "Real-time reporting"],
      icon: <BarChart3 className="h-8 w-8 text-purple-500"/>,
      category: "Analytics",
      link: "https://ziontechgroup.com/data-analytics",
      details: "Comprehensive data analytics and business intelligence solutions transforming raw data into actionable business insights."
    },
    {
      title: "Disaster Recovery",
      description: "Comprehensive disaster recovery and business continuity solutions for critical business operations.",
      price: "$2,000 - $15,000",
      features: ["Backup strategies", "Recovery planning", "Testing", "Documentation", "Training", "24/7 support"],
      icon: <HardDrive className="h-8 w-8 text-red-500"/>,
      category: "Recovery",
      link: "https://ziontechgroup.com/disaster-recovery",
      details: "Robust disaster recovery solutions ensuring business continuity and rapid recovery from any disruption."
    }
  ];

  const categories = ["All Services", "Cloud", "Security", "DevOps", "Database", "Networking", "Consulting", "Managed Services", "Data Center", "Development", "AI/ML", "Blockchain", "IoT", "Analytics", "Recovery"];

  return (
    <>
      <SEO 
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including infrastructure, support, and technology consulting solutions."
        keywords="IT services, infrastructure, support, technology consulting, IT solutions"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              IT <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive information technology solutions for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-teal-400/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-teal-400/20">
                      {service.icon}
                    </div>
                    {service.badge && (
                      <Badge className="bg-teal-400/20 text-teal-300 border-teal-400/30">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm text-gray-300 mb-3">{service.details}</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-teal-300">
                          <CheckCircle className="w-3 h-3 mr-2"/>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="text-center mb-4">
                      <span className="text-2xl font-bold text-teal-400">{service.price}</span>
                    </div>
                  </div>
                </CardContent>
                <CardHeader className="pt-0">
                  <Button asChild className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600">
                    <a href={service.link} target="_blank" rel="noopener noreferrer">
                      Learn More
                    </a>
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ITServicesPage;

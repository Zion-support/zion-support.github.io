import React from "react"
import { SEO } from "@/components/SEO"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Cloud, Shield, Server, Zap, Database, Globe, Code, Monitor, Smartphone, Settings, Users, BarChart3, MessageSquare, FileText, CheckCircle, Search, HardDrive, Brain, Cpu, Lock, Wifi, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Code as CodeIcon, Monitor as MonitorIcon, Smartphone as SmartphoneIcon, Settings as SettingsIcon, Users as UsersIcon, BarChart3 as BarChart3Icon, MessageSquare as MessageSquareIcon, FileText as FileTextIcon, CheckCircle as CheckCircleIcon, Search as SearchIcon, HardDrive as HardDriveIcon, Brain as BrainIcon, Cpu as CpuIcon, Lock as LockIcon, Wifi as WifiIcon } from "lucide-react"
const ITServicesPage = () () => {
  const itServices = [
  {
  tit,
  l: e: "Cloud Infrastructure Management",descripti,
  o: n: "Comprehensive cloud services including AWS, Azure, and Google Cloud with 24/7 monitoring and optimization."
      pri,
  c: e: "$1,500 - $8,000/month"
      featur,
  e: s: ["24/7 monitoring", "Cost optimization", "Security compliance", "Auto-scaling", "Disaster recovery", "Performance tuning"]
      ic,
  o: n: <Cloud className="h-8 w-8 text-blue-500"/>,catego,
  r: y: "Cloud",bad,
  g: e: "Popular",li,
  n: k: "http,
  s://ziontechgroup.com/cloud-infrastructure",detai,
  l: s: "Expert cloud infrastructure management with multi-cloud strategies, cost optimization, and enterprise-grade security."
},
  {
  tit,
  l: e: "Cybersecurity Services",descripti,
  o: n: "Complete security solutions including threat detection, penetration testing, and incident response."
      pri,
  c: e: "$2,000 - $15,000"
      featur,
  e: s: ["Security audits", "Penetration testing", "Incident response", "Compliance", "Threat intelligence", "Security training"]
      ic,
  o: n: <Shield className="h-8 w-8 text-red-500"/>,catego,
  r: y: "Security",bad,
  g: e: "Premium",li,
  n: k: "http,
  s://ziontechgroup.com/cybersecurity",detai,
  l: s: "Comprehensive cybersecurity services protecting your business from evolving threats with advanced detection and response capabilities."
},
  {
  tit,
  l: e: "DevOps & CI/CD",descripti,
  o: n: "Streamline development and deployment processes with automated pipelines and infrastructure as code.",pri,
  c: e: "$3,000 - $12,000/month"
      featur,
  e: s: ["Pipeline automation", "Infrastructure as code", "Monitoring", "Performance optimization", "Container orchestration", "GitOps"]
      ic,
  o: n: <Zap className="h-8 w-8 text-yellow-500"/>,catego,
  r: y: "DevOps",li,
  n: k: "http,
  s://ziontechgroup.com/devops",detai,
  l: s: "Modern DevOps practices with automated CI/CD pipelines, infrastructure automation, and continuous monitoring."
},
  {
  tit,
  l: e: "Database Management",descripti,
  o: n: "Expert database administration, optimization, and migration services for all major database platforms."
      pri,
  c: e: "$1,000 - $6,000/month"
      featur,
  e: s: ["Performance tuning", "Backup & recovery", "Security hardening", "Migration support", "High availability", "Monitoring"]
      ic,
  o: n: <Database className="h-8 w-8 text-green-500"/>,catego,
  r: y: "Database",li,
  n: k: "http,
  s://ziontechgroup.com/database-management",detai,
  l: s: "Professional database management services ensuring optimal performance, security, and reliability for your critical data."
},
  {
  tit,
  l: e: "Network Infrastructure",descripti,
  o: n: "Design, implement, and maintain robust network solutions with enterprise-grade security."
      pri,
  c: e: "$2,500 - $20,000"
      featur,
  e: s: ["Network design", "Security implementation", "Monitoring", "24/7 support", "SD-WAN", "Network automation"]
      ic,
  o: n: <Globe className="h-8 w-8 text-purple-500"/>,catego,
  r: y: "Networking",li,
  n: k: "http,
  s://ziontechgroup.com/network-infrastructure",detai,
  l: s: "Enterprise-grade network infrastructure with advanced security, monitoring, and automation capabilities."
},
  {
  tit,
  l: e: "IT Consulting & Strategy",descripti,
  o: n: "Strategic IT planning and digital transformation guidance for modern businesses.",pri,
  c: e: "$150 - $300/hour",featur,
  e: s: ["Technology assessment", "Roadmap planning", "Vendor selection", "ROI analysis", "Digital transformation", "IT governance"]
      ic,
  o: n: <CheckCircle className="h-8 w-8 text-cyan-500"/>,catego,
  r: y: "Consulting",li,
  n: k: "http,
  s://ziontechgroup.com/it-consulting",detai,
  l: s: "Strategic IT consulting helping businesses align technology with business objectives and drive digital transformation."
},
  {
  tit,
  l: e: "Managed IT Services",descripti,
  o: n: "Complete IT management for small to enterprise businesses with proactive monitoring and support.",pri,
  c: e: "$500 - $5,000/month"
      featur,
  e: s: ["Help desk support", "System administration", "Security management", "Backup services", "Proactive monitoring", "Vendor management"]
      ic,
  o: n: <Settings className="h-8 w-8 text-indigo-500"/>,catego,
  r: y: "Managed Services",bad,
  g: e: "New",li,
  n: k: "http,
  s://ziontechgroup.com/managed-it",detai,
  l: s: "Comprehensive managed IT services providing peace of mind with 24/7 monitoring, support, and proactive maintenance."
},
  {
  tit,
  l: e: "Data Center Services",descripti,
  o: n: "On-premise and colocation data center solutions with enterprise-grade infrastructure.",pri,
  c: e: "$1,000 - $10,000/month"
      featur,
  e: s: ["Hardware provisioning", "Environmental monitoring", "Power management", "Security", "Backup power", "Climate control"]
      ic,
  o: n: <Server className="h-8 w-8 text-gray-500"/>,catego,
  r: y: "Data Center",li,
  n: k: "http,
  s://ziontechgroup.com/data-center",detai,
  l: s: "Enterprise-grade data center services with redundant power, cooling, and security systems for mission-critical applications."
},
  {
  tit,
  l: e: "Mobile App Development",descripti,
  o: n: "Custom mobile applications for iOS and Android with modern development practices.",pri,
  c: e: "$15,000 - $100,000"
      featur,
  e: s: ["UI/UX design", "Native development", "Testing", "App store deployment", "Maintenance", "Performance optimization"]
      ic,
  o: n: <Smartphone className="h-8 w-8 text-orange-500"/>,catego,
  r: y: "Development",li,
  n: k: "http,
  s://ziontechgroup.com/mobile-development",detai,
  l: s: "Professional mobile app development with modern frameworks, comprehensive testing, and ongoing maintenance support."
},
  {
  tit,
  l: e: "Web Development",descripti,
  o: n: "Modern web applications and e-commerce solutions with responsive design and SEO optimization.",pri,
  c: e: "$10,000 - $75,000"
      featur,
  e: s: ["Responsive design", "SEO optimization", "Performance tuning", "Maintenance", "Security", "Analytics integration"]
      ic,
  o: n: <Globe className="h-8 w-8 text-teal-500"/>,catego,
  r: y: "Development",li,
  n: k: "http,
  s://ziontechgroup.com/web-development",detai,
  l: s: "Modern web development services creating fast, secure, and scalable web applications optimized for search engines."
},
  {
  tit,
  l: e: "AI & Machine Learning",descripti,
  o: n: "Custom AI solutions and machine learning models for business automation and insights.",pri,
  c: e: "$5,000 - $50,000"
      featur,
  e: s: ["Custom AI models", "Data preprocessing", "Model training", "API integration", "Performance monitoring", "Continuous learning"]
      ic,
  o: n: <Brain className="h-8 w-8 text-pink-500"/>,catego,
  r: y: "AI/ML",bad,
  g: e: "Innovative",li,
  n: k: "http,
  s://ziontechgroup.com/ai-ml",detai,
  l: s: "Cutting-edge AI and machine learning solutions automating business processes and providing actionable insights from data."
},
  {
  tit,
  l: e: "Blockchain Development",descripti,
  o: n: "Blockchain solutions including smart contracts, DApps, and enterprise blockchain integration."
      pri,
  c: e: "$20,000 - $150,000"
      featur,
  e: s: ["Smart contracts", "DApp development", "Blockchain integration", "Security auditing", "DeFi solutions", "NFT platforms"]
      ic,
  o: n: <Lock className="h-8 w-8 text-emerald-500"/>,catego,
  r: y: "Blockchain",bad,
  g: e: "Emerging",li,
  n: k: "http,
  s://ziontechgroup.com/blockchain",detai,
  l: s: "Innovative blockchain development services creating secure, transparent, and decentralized solutions for modern businesses."
},
  {
  tit,
  l: e: "IoT Solutions",descripti,
  o: n: "Internet of Things platforms and solutions for connected devices and smart systems.",pri,
  c: e: "$8,000 - $60,000"
      featur,
  e: s: ["IoT platform development", "Device integration", "Data analytics", "Real-time monitoring", "Automation", "Security"]
      ic,
  o: n: <Wifi className="h-8 w-8 text-blue-500"/>,catego,
  r: y: "IoT",li,
  n: k: "http,
  s://ziontechgroup.com/iot-solutions",detai,
  l: s: "Comprehensive IoT solutions connecting devices, collecting data, and creating intelligent automation systems."
},
  {
  tit,
  l: e: "Data Analytics & BI",descripti,
  o: n: "Business intelligence solutions with advanced analytics, reporting, and data visualization."
      pri,
  c: e: "$3,000 - $25,000"
      featur,
  e: s: ["Data warehousing", "ETL processes", "Advanced analytics", "Interactive dashboards", "Predictive modeling", "Real-time reporting"]
      ic,
  o: n: <BarChart3 className="h-8 w-8 text-purple-500"/>,catego,
  r: y: "Analytics",li,
  n: k: "http,
  s://ziontechgroup.com/data-analytics",detai,
  l: s: "Comprehensive data analytics and business intelligence solutions transforming raw data into actionable business insights."
},
  {
  tit,
  l: e: "Disaster Recovery",descripti,
  o: n: "Comprehensive disaster recovery and business continuity solutions for critical business operations.",pri,
  c: e: "$2,000 - $15,000"
      featur,
  e: s: ["Backup strategies", "Recovery planning", "Testing", "Documentation", "Training", "24/7 support"]
      ic,
  o: n: <HardDrive className="h-8 w-8 text-red-500"/>,catego,
  r: y: "Recovery",li,
  n: k: "http,
  s://ziontechgroup.com/disaster-recovery",detai,
  l: s: "Robust disaster recovery solutions ensuring business continuity and rapid recovery from any disruption."
},
  ]
  const categories = [["All Services", "Cloud", "Security", "DevOps", "Database", "Networking", "Consulting", "Managed Services", "Data Center", "Development", "AI/ML", "Blockchain", "IoT", "Analytics", "Recovery"],
  ]

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
            <h1 className="text-5xl,
  m: d: text-6xl font-bold mb-6">
              IT <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive information technology solutions for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
  <Card key={index} className="bg-white/10 backdrop-blur-lg border-teal-400/20,
  hove: r:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-teal-400/20">
                      {service.icon},
  }
                    </div>
                    {service.badge && (
  <Badge className="bg-teal-400/20 text-teal-300 border-teal-400/30">
                        {service.badge},
  }
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
                          {feature},
  }
                        </div>
                      ))}
                    </div>
                    <div className="text-center mb-4">
                      <span className="text-2xl font-bold text-teal-400">{service.price}</span>
                    </div>
                  </div>
                </CardContent>
                <CardHeader className="pt-0">
                  <Button asChild className="w-full bg-gradient-to-r from-teal-500 to-cyan-500,
  hove: r: from-teal-600 hove,
  r:to-cyan-600">
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
  )
}

export default ITServicesPage
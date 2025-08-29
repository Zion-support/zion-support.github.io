import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Cloud, Shield, Zap, Database, Globe, CheckCircle, Settings, 
  Server, Code, Users, HardDrive, FileText, BarChart3, Monitor,
  Wrench, Building2, MessageSquare, Search
} from 'lucide-react';
import SEO from '@/components/SEO';

const ITServices = [
  {
    title: "Digital Transformation",
    description: "Comprehensive digital transformation consulting and implementation",
    price: "$25,000 - $150,000",
    features: ["Process Automation", "Technology Assessment", "Change Management", "ROI Optimization"],
    category: "Consulting",
    badge: "Popular",
    link: "/request-quote?service=digital-transformation"
  },
  {
    title: "Cloud Migration",
    description: "Seamless cloud infrastructure migration and optimization",
    price: "$20,000 - $100,000",
    features: ["Infrastructure Planning", "Data Migration", "Security Implementation", "Performance Optimization"],
    category: "Cloud",
    badge: "Featured",
    link: "/request-quote?service=cloud-migration"
  },
  {
    title: "Cybersecurity Assessment",
    description: "Comprehensive security evaluation and threat protection",
    price: "$15,000 - $75,000",
    features: ["Vulnerability Assessment", "Penetration Testing", "Security Auditing", "Compliance Review"],
    category: "Security",
    link: "/request-quote?service=cybersecurity"
  },
  {
    title: "IT Infrastructure Optimization",
    description: "Performance optimization and infrastructure modernization",
    price: "$18,000 - $90,000",
    features: ["Performance Analysis", "Capacity Planning", "Hardware Optimization", "Monitoring Setup"],
    category: "Infrastructure",
    link: "/request-quote?service=infrastructure"
  },
  {
    title: "DevOps Implementation",
    description: "Streamline development and operations with modern DevOps practices",
    price: "$30,000 - $120,000",
    features: ["CI/CD Pipeline", "Infrastructure as Code", "Monitoring & Logging", "Team Training"],
    category: "DevOps",
    badge: "New",
    link: "/request-quote?service=devops"
  },
  {
    title: "Database Management",
    description: "Optimize and maintain your database infrastructure",
    price: "$12,000 - $60,000",
    features: ["Performance Tuning", "Backup & Recovery", "Security Hardening", "Scalability Planning"],
    category: "Database",
    link: "/request-quote?service=database"
  },
  {
    title: "Network Infrastructure",
    description: "Design and implement robust network solutions",
    price: "$25,000 - $100,000",
    features: ["Network Design", "Security Implementation", "Performance Monitoring", "Disaster Recovery"],
    category: "Networking",
    link: "/request-quote?service=networking"
  },
  {
    title: "Managed IT Services",
    description: "24/7 IT support and proactive maintenance",
    price: "$5,000 - $25,000/month",
    features: ["Round-the-clock Support", "Proactive Monitoring", "Fast Response", "Preventive Maintenance"],
    category: "Managed Services",
    link: "/request-quote?service=managed-services"
  },
  {
    title: "Data Center Solutions",
    description: "Modernize and optimize your data center infrastructure",
    price: "$50,000 - $250,000",
    features: ["Infrastructure Design", "Virtualization", "Energy Efficiency", "Disaster Recovery"],
    category: "Data Center",
    link: "/request-quote?service=data-center"
  },
  {
    title: "Custom Development",
    description: "Tailored software solutions for your business needs",
    price: "$30,000 - $200,000",
    features: ["Requirements Analysis", "Custom Development", "Testing & QA", "Deployment Support"],
    category: "Development",
    link: "/request-quote?service=custom-development"
  },
  {
    title: "IT Training & Workshops",
    description: "Comprehensive training programs for your IT team",
    price: "$3,000 - $15,000",
    features: ["Custom Curriculum", "Hands-on Workshops", "Certification", "Ongoing Support"],
    category: "Training",
    link: "/request-quote?service=it-training"
  },
  {
    title: "Backup & Recovery",
    description: "Comprehensive data protection and disaster recovery",
    price: "$10,000 - $50,000",
    features: ["Automated Backups", "Quick Recovery", "Data Encryption", "Business Continuity"],
    category: "Recovery",
    link: "/request-quote?service=backup-recovery"
  },
  {
    title: "Compliance & Governance",
    description: "Ensure your IT systems meet regulatory requirements",
    price: "$20,000 - $80,000",
    features: ["Audit Preparation", "Policy Development", "Risk Assessment", "Compliance Monitoring"],
    category: "Compliance",
    link: "/request-quote?service=compliance"
  },
  {
    title: "Hardware Solutions",
    description: "Optimize and modernize your hardware infrastructure",
    price: "$15,000 - $100,000",
    features: ["Hardware Assessment", "Procurement", "Installation", "Maintenance"],
    category: "Hardware",
    link: "/request-quote?service=hardware"
  },
  {
    title: "Project Management",
    description: "Professional project management for IT initiatives",
    price: "$8,000 - $40,000",
    features: ["Project Planning", "Resource Management", "Risk Mitigation", "Stakeholder Communication"],
    category: "Project Management",
    link: "/request-quote?service=project-management"
  },
  {
    title: "24/7 IT Support",
    description: "Round-the-clock technical support and maintenance",
    price: "$3,000 - $15,000/month",
    features: ["24/7 Availability", "Fast Response", "Remote Support", "On-site Support"],
    category: "Support",
    badge: "Featured",
    link: "/request-quote?service=24-7-support"
  }
];

const ITServicesPage: React.FC = () => {
  const categories = [
    { name: "All", value: "all", icon: "Globe" },
    { name: "Cloud", value: "cloud", icon: "Cloud" },
    { name: "Security", value: "security", icon: "Shield" },
    { name: "DevOps", value: "devops", icon: "Zap" },
    { name: "Database", value: "database", icon: "Database" },
    { name: "Networking", value: "networking", icon: "Globe" },
    { name: "Consulting", value: "consulting", icon: "CheckCircle" },
    { name: "Managed Services", value: "managed services", icon: "Settings" },
    { name: "Data Center", value: "data center", icon: "Server" },
    { name: "Development", value: "development", icon: "Code" },
    { name: "Training", value: "training", icon: "Users" },
    { name: "Recovery", value: "recovery", icon: "HardDrive" },
    { name: "Compliance", value: "compliance", icon: "FileText" },
    { name: "Hardware", value: "hardware", icon: "Server" },
    { name: "Project Management", value: "project management", icon: "BarChart3" },
    { name: "Support", value: "support", icon: "Monitor" }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("all");
  
  const filteredServices = selectedCategory === "all" 
    ? ITServices 
    : ITServices.filter(service => service.category.toLowerCase() === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="IT Services & Solutions | Zion Tech Group"
        description="Comprehensive IT services including cloud migration, cybersecurity, infrastructure optimization, and digital transformation."
        keywords="IT services, cloud migration, cybersecurity, infrastructure, digital transformation"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-cyan py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            IT Services & Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-cyan-light max-w-3xl mx-auto mb-8"
          >
            Transform your technology infrastructure with our comprehensive IT services. 
            From cloud migration to cybersecurity, we've got you covered.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate font-semibold">
              <Search className="h-5 w-5 mr-2"/>
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <MessageSquare className="h-5 w-5 mr-2"/>
              Get Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IT <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive IT services tailored to your business needs
            </p>
          </motion.div>
          
          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className={`${
                  selectedCategory === category.value
                    ? "bg-zion-cyan text-white"
                    : "border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-zion-blue to-zion-cyan rounded-lg flex items-center justify-center">
                        <Server className="w-6 h-6 text-white" />
                      </div>
                      {service.badge && (
                        <span className="px-3 py-1 bg-zion-blue text-white text-xs font-semibold rounded-full">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </CardTitle>
                    <p className="text-zion-slate-light text-sm mb-4">
                      {service.description}
                    </p>
                    <div className="text-zion-cyan font-semibold text-lg">
                      {service.price}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                            <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-zion-blue to-zion-cyan hover:from-zion-blue-light hover:to-zion-cyan-light text-white">
                      <Link to={service.link}>
                        Get Started
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Transform</span> Your IT?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how our IT services can revolutionize your technology infrastructure
            </p>
            <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <Wrench className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Free Assessment</h3>
                  <p className="text-zion-slate-light mb-4">
                    Get a comprehensive IT infrastructure evaluation
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    Schedule Assessment
                  </Link>
                </div>
                <div className="text-center">
                  <Building2 className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Enterprise Solutions</h3>
                  <p className="text-zion-slate-light mb-4">
                    Scale your IT infrastructure for growth
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-block px-6 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 text-zion-cyan font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;

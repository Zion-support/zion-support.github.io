import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  Download, 
  ArrowRight, 
  FileText,
  BookOpen,
  Play,
  Users,
  Clock,
  Star,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Database,
  Smartphone,
  Monitor,
  Cloud,
  Lightbulb,
  CheckCircle
} from "lucide-react";

const Resources = () => {
  const resources = [
    {
      id: 1,
      title: "The Complete Guide to AI Implementation in Enterprise",
      type: "Whitepaper",
      icon: FileText,
      description: "A comprehensive 50-page guide covering AI strategy, implementation, and best practices for enterprise organizations.",
      downloadCount: "2.5k",
      rating: 4.9,
      pages: 50,
      category: "AI & Machine Learning",
      tags: ["AI", "Enterprise", "Strategy", "Implementation"],
      featured: true,
      downloadUrl: "/resources/ai-implementation-guide.pdf"
    },
    {
      id: 2,
      title: "Cybersecurity Framework for Remote Work",
      type: "Guide",
      icon: BookOpen,
      description: "Essential security measures and protocols for protecting distributed teams and remote work environments.",
      downloadCount: "1.8k",
      rating: 4.8,
      pages: 25,
      category: "Cybersecurity",
      tags: ["Security", "Remote Work", "Best Practices"],
      featured: true,
      downloadUrl: "/resources/cybersecurity-remote-work.pdf"
    },
    {
      id: 3,
      title: "Cloud Migration Strategy Playbook",
      type: "Playbook",
      icon: Cloud,
      description: "Step-by-step methodology for successful cloud migration with real-world case studies and templates.",
      downloadCount: "3.2k",
      rating: 4.9,
      pages: 40,
      category: "Cloud & DevOps",
      tags: ["Cloud", "Migration", "Strategy", "Templates"],
      featured: true,
      downloadUrl: "/resources/cloud-migration-playbook.pdf"
    },
    {
      id: 4,
      title: "Digital Transformation: A CEO's Guide",
      type: "Executive Brief",
      icon: TrendingUp,
      description: "Strategic insights for C-level executives on leading digital transformation initiatives.",
      downloadCount: "1.2k",
      rating: 4.7,
      pages: 20,
      category: "Digital Transformation",
      tags: ["Strategy", "Leadership", "Transformation"],
      featured: false,
      downloadUrl: "/resources/digital-transformation-ceo-guide.pdf"
    },
    {
      id: 5,
      title: "Mobile App Development Best Practices",
      type: "Technical Guide",
      icon: Smartphone,
      description: "Comprehensive guide covering mobile development methodologies, tools, and optimization techniques.",
      downloadCount: "2.1k",
      rating: 4.8,
      pages: 35,
      category: "Mobile Development",
      tags: ["Mobile", "Development", "Best Practices"],
      featured: false,
      downloadUrl: "/resources/mobile-development-guide.pdf"
    },
    {
      id: 6,
      title: "Data Analytics ROI Calculator",
      type: "Tool",
      icon: Database,
      description: "Interactive Excel tool to calculate ROI for data analytics and business intelligence initiatives.",
      downloadCount: "950",
      rating: 4.6,
      pages: "Interactive",
      category: "Data Analytics",
      tags: ["ROI", "Calculator", "Analytics"],
      featured: false,
      downloadUrl: "/resources/data-analytics-roi-calculator.xlsx"
    },
    {
      id: 7,
      title: "Webinar: AI Trends for 2024",
      type: "Webinar",
      icon: Play,
      description: "Expert panel discussion on emerging AI trends, technologies, and their business implications.",
      downloadCount: "5.8k",
      rating: 4.9,
      duration: "45 min",
      category: "AI & Machine Learning",
      tags: ["AI", "Trends", "2024", "Webinar"],
      featured: true,
      downloadUrl: "/resources/ai-trends-2024-webinar.mp4"
    },
    {
      id: 8,
      title: "DevOps Implementation Checklist",
      type: "Checklist",
      icon: CheckCircle,
      description: "Comprehensive checklist for implementing DevOps practices in your organization.",
      downloadCount: "1.5k",
      rating: 4.7,
      pages: 15,
      category: "Cloud & DevOps",
      tags: ["DevOps", "Checklist", "Implementation"],
      featured: false,
      downloadUrl: "/resources/devops-implementation-checklist.pdf"
    },
    {
      id: 9,
      title: "AI ROI Calculator 2025",
      type: "Tool",
      icon: TrendingUp,
      description: "Interactive calculator to estimate ROI for AI implementations including automation, analytics, and virtual assistants.",
      downloadCount: "3.2k",
      rating: 4.9,
      pages: "Interactive",
      category: "AI & Machine Learning",
      tags: ["AI", "ROI", "Calculator", "Business Case"],
      featured: true,
      downloadUrl: "/resources/ai-roi-calculator-2025.xlsx"
    },
    {
      id: 10,
      title: "Zero Trust Security Implementation Guide",
      type: "Whitepaper",
      icon: Shield,
      description: "Complete guide to implementing Zero Trust security architecture with step-by-step instructions and best practices.",
      downloadCount: "2.8k",
      rating: 4.8,
      pages: 45,
      category: "Cybersecurity",
      tags: ["Zero Trust", "Security", "Architecture", "Implementation"],
      featured: true,
      downloadUrl: "/resources/zero-trust-implementation-guide.pdf"
    },
    {
      id: 11,
      title: "Enterprise AI Strategy Template",
      type: "Template",
      icon: FileText,
      description: "Comprehensive template for developing AI strategy including assessment frameworks, roadmaps, and success metrics.",
      downloadCount: "1.9k",
      rating: 4.7,
      pages: 30,
      category: "AI & Machine Learning",
      tags: ["AI Strategy", "Template", "Planning", "Framework"],
      featured: false,
      downloadUrl: "/resources/enterprise-ai-strategy-template.docx"
    },
    {
      id: 12,
      title: "Webinar: Future of AI in Business",
      type: "Webinar",
      icon: Play,
      description: "Expert discussion on AI trends, challenges, and opportunities for businesses in 2025 and beyond.",
      downloadCount: "4.1k",
      rating: 4.9,
      duration: "60 min",
      category: "AI & Machine Learning",
      tags: ["AI", "Future", "Business", "Trends", "Webinar"],
      featured: true,
      downloadUrl: "/resources/future-ai-business-webinar.mp4"
    },
    {
      id: 13,
      title: "Cloud Cost Optimization Playbook",
      type: "Playbook",
      icon: Cloud,
      description: "Proven strategies and tactics for reducing cloud costs while maintaining performance and reliability.",
      downloadCount: "2.3k",
      rating: 4.8,
      pages: 35,
      category: "Cloud & DevOps",
      tags: ["Cloud", "Cost Optimization", "Strategy", "Best Practices"],
      featured: false,
      downloadUrl: "/resources/cloud-cost-optimization-playbook.pdf"
    },
    {
      id: 14,
      title: "AI Ethics Assessment Tool",
      type: "Tool",
      icon: Shield,
      description: "Interactive assessment tool to evaluate AI systems for bias, fairness, and ethical considerations.",
      downloadCount: "1.7k",
      rating: 4.6,
      pages: "Interactive",
      category: "AI & Machine Learning",
      tags: ["AI Ethics", "Assessment", "Bias", "Fairness"],
      featured: false,
      downloadUrl: "/resources/ai-ethics-assessment-tool.xlsx"
    },
    {
      id: 15,
      title: "Digital Transformation Readiness Assessment",
      type: "Assessment",
      icon: TrendingUp,
      description: "Comprehensive assessment tool to evaluate your organization's readiness for digital transformation.",
      downloadCount: "2.6k",
      rating: 4.8,
      pages: "Interactive",
      category: "Digital Transformation",
      tags: ["Assessment", "Readiness", "Digital Transformation", "Strategy"],
      featured: true,
      downloadUrl: "/resources/digital-transformation-assessment.xlsx"
    },
    {
      id: 16,
      title: "Microservices Architecture Patterns",
      type: "Technical Guide",
      icon: Database,
      description: "Essential patterns and anti-patterns for designing scalable microservices architectures.",
      downloadCount: "1.8k",
      rating: 4.7,
      pages: 28,
      category: "Web Development",
      tags: ["Microservices", "Architecture", "Patterns", "Scalability"],
      featured: false,
      downloadUrl: "/resources/microservices-architecture-patterns.pdf"
    },
    {
      id: 17,
      title: "Executive Brief: AI Investment Priorities",
      type: "Executive Brief",
      icon: TrendingUp,
      description: "Strategic insights for executives on prioritizing AI investments and maximizing business value.",
      downloadCount: "1.4k",
      rating: 4.8,
      pages: 12,
      category: "AI & Machine Learning",
      tags: ["AI Investment", "Strategy", "Executive", "Business Value"],
      featured: false,
      downloadUrl: "/resources/ai-investment-priorities-executive-brief.pdf"
    },
    {
      id: 18,
      title: "Cybersecurity Incident Response Playbook",
      type: "Playbook",
      icon: Shield,
      description: "Step-by-step guide for responding to cybersecurity incidents with templates and best practices.",
      downloadCount: "2.1k",
      rating: 4.9,
      pages: 40,
      category: "Cybersecurity",
      tags: ["Incident Response", "Security", "Playbook", "Emergency"],
      featured: true,
      downloadUrl: "/resources/cybersecurity-incident-response-playbook.pdf"
    }
  ];

  const categories = [
    { name: "AI & Machine Learning", icon: Lightbulb, count: 12 },
    { name: "Cybersecurity", icon: Shield, count: 8 },
    { name: "Cloud & DevOps", icon: Cloud, count: 8 },
    { name: "Digital Transformation", icon: TrendingUp, count: 6 },
    { name: "Mobile Development", icon: Smartphone, count: 3 },
    { name: "Data Analytics", icon: Database, count: 4 },
    { name: "Web Development", icon: Monitor, count: 3 }
  ];

  const featuredResources = resources.filter(resource => resource.featured);
  const otherResources = resources.filter(resource => !resource.featured);

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.icon : Globe;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Whitepaper": return FileText;
      case "Guide": return BookOpen;
      case "Playbook": return FileText;
      case "Executive Brief": return TrendingUp;
      case "Technical Guide": return FileText;
      case "Tool": return Database;
      case "Webinar": return Play;
      case "Checklist": return CheckCircle;
      case "Template": return FileText;
      case "Assessment": return TrendingUp;
      default: return FileText;
    }
  };

  return (
    <>
      <Helmet>
        <title>Resources & Downloads | Zion Tech Group</title>
        <meta name="description" content="Access our comprehensive library of whitepapers, guides, tools, and webinars. Expert insights and practical resources for your technology journey." />
        <meta name="keywords" content="whitepapers, guides, tools, webinars, AI resources, cybersecurity guides, cloud migration, digital transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
              Resources & Downloads
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Access our comprehensive library of expert insights, practical guides, and powerful tools to accelerate your technology journey.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan">50+</div>
                <div className="text-sm text-zion-slate-light">Resources</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan">25k+</div>
                <div className="text-sm text-zion-slate-light">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan">4.8★</div>
                <div className="text-sm text-zion-slate-light">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan">Free</div>
                <div className="text-sm text-zion-slate-light">All Resources</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="container mx-auto px-6 py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Featured Resources</h2>
            <p className="text-zion-slate-light text-center">Our most popular and highly-rated resources</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredResources.map((resource) => {
              const CategoryIcon = getCategoryIcon(resource.category);
              const TypeIcon = getTypeIcon(resource.type);
              return (
                <div key={resource.id} className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <TypeIcon className="w-5 h-5 text-zion-cyan" />
                      <span className="text-zion-cyan text-sm font-medium">{resource.type}</span>
                    </div>
                    <span className="bg-zion-cyan text-zion-blue-dark px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-zion-slate-light text-sm mb-4">{resource.description}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-4">
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {resource.downloadCount} downloads
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      {resource.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {typeof resource.pages === 'number' ? `${resource.pages} pages` : resource.pages}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="bg-zion-blue/20 backdrop-blur-sm border border-zion-blue/30 text-zion-cyan px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit">
                      <CategoryIcon className="w-3 h-3" />
                      {resource.category}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.map((tag, index) => (
                      <span key={index} className="bg-zion-slate-dark text-zion-slate-light px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={resource.downloadUrl}
                    className="inline-flex items-center bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg font-semibold hover:bg-zion-blue-light transition-colors w-full justify-center gap-2 group/download"
                  >
                    <Download className="w-4 h-4 group-hover/download:scale-110 transition-transform" />
                    Download Free
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* Categories */}
        <section className="bg-zion-slate-dark py-16">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 text-center">Browse by Category</h2>
              <p className="text-zion-slate-light text-center">Find resources organized by technology area</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {categories.map((category, index) => (
                <div key={index} className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl text-center">
                  <div className="bg-zion-blue/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-zion-blue/30 transition-colors border border-zion-blue/30">
                    <category.icon className="w-8 h-8 text-zion-blue-light group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-zion-slate-light text-sm">{category.count} resources</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Resources */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 text-center">More Resources</h2>
              <p className="text-zion-slate-light text-center">Additional tools and guides to support your journey</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherResources.map((resource) => {
                const CategoryIcon = getCategoryIcon(resource.category);
                const TypeIcon = getTypeIcon(resource.type);
                return (
                  <div key={resource.id} className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <TypeIcon className="w-4 h-4 text-zion-cyan" />
                        <span className="text-zion-cyan text-xs font-medium">{resource.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span className="text-xs text-zion-slate-light">{resource.rating}</span>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-zion-slate-light text-sm mb-3">{resource.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-zion-slate-light mb-3">
                      <div className="flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        {resource.downloadCount}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {typeof resource.pages === 'number' ? `${resource.pages}p` : resource.pages}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="bg-zion-slate-dark text-zion-slate-light px-2 py-1 rounded text-xs flex items-center gap-1">
                        <CategoryIcon className="w-3 h-3" />
                        {resource.category}
                      </span>
                      <a 
                        href={resource.downloadUrl}
                        className="inline-flex items-center text-zion-cyan hover:text-zion-blue-light transition-colors font-semibold text-sm group/download"
                      >
                        Download
                        <Download className="w-3 h-3 ml-1 group-hover/download:scale-110 transition-transform" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-zion-blue to-zion-purple py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with New Resources</h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Get notified when we publish new whitepapers, guides, and tools. Be the first to access our latest insights.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              />
              <button className="bg-zion-cyan text-zion-blue-dark px-6 py-3 rounded-lg font-semibold hover:bg-zion-blue-light transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Resources;
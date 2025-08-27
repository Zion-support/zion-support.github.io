import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, DollarSign, ExternalLink, Workflow, MessageSquare, Globe, TrendingUp, Sparkles, Bot, Shield, FileText, Users, BarChart3, Cloud, ShieldCheck } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';
import { NEW_SERVICES_2025 } from '../data/newServices2025';
import { Link } from 'react-router-dom';

export default function Services() {
  const aiServices = [
    {
      title: "AI Autonomous Business Operations",
      description: "Next-generation autonomous business operations platform that uses advanced AI to automate complex business processes and make intelligent decisions in real-time.",
      icon: Bot,
      price: "From $2,500/month",
      features: ["24/7 Autonomous Operations", "AI Decision Making", "Process Optimization", "Real-time Analytics", "Predictive Maintenance", "Resource Allocation"],
      benefits: ["Reduce operational costs by up to 40%", "Improve process efficiency by 60%", "Eliminate manual errors and delays", "24/7 automated operations"],
      path: "/services/autonomous",
      rating: 4.9,
      reviewCount: 127,
      category: "AI & Automation"
    },
    {
      title: "AI-Powered Cybersecurity Suite",
      description: "Comprehensive cybersecurity solution that uses artificial intelligence to detect, prevent, and respond to threats in real-time.",
      icon: Shield,
      price: "From $1,800/month",
      features: ["AI Threat Detection", "Real-time Response", "Advanced Analytics", "Compliance Ready", "Behavioral Analysis", "Automated Incident Response"],
      benefits: ["99.9% threat detection rate", "Reduce response time by 90%", "Automated compliance reporting", "24/7 security monitoring"],
      path: "/services/cybersecurity",
      rating: 4.9,
      reviewCount: 156,
      category: "AI & Security"
    },
    {
      title: "AI Content Marketing Suite",
      description: "End-to-end AI-powered content creation and marketing automation platform that generates engaging content across all channels.",
      icon: FileText,
      price: "From $800/month",
      features: ["AI Content Generation", "Multi-channel Publishing", "SEO Optimization", "Performance Analytics", "Brand Voice Consistency", "A/B Testing"],
      benefits: ["10x faster content creation", "Improve engagement by 45%", "Reduce marketing costs by 30%", "24/7 content optimization"],
      path: "/services/ai-content",
      rating: 4.8,
      reviewCount: 89,
      category: "AI & Marketing"
    },
    {
      title: "AI Sales Copilot",
      description: "Intelligent sales assistant that automates lead qualification, follow-ups, and sales process optimization using advanced AI.",
      icon: Users,
      price: "From $1,200/month",
      features: ["Lead Qualification", "Automated Follow-ups", "Sales Process Optimization", "Performance Analytics", "CRM Integration", "Predictive Lead Scoring"],
      benefits: ["Increase conversion rates by 35%", "Reduce follow-up time by 70%", "Improve lead quality by 50%", "Automated sales reporting"],
      path: "/services/ai-sales",
      rating: 4.7,
      reviewCount: 203,
      category: "AI & Sales"
    },
    {
      title: "AI Customer Support Platform",
      description: "Intelligent customer support solution that provides instant responses, ticket routing, and customer satisfaction optimization.",
      icon: MessageSquare,
      price: "From $600/month",
      features: ["AI Chatbots", "Intelligent Ticket Routing", "Sentiment Analysis", "Knowledge Base", "Multi-language Support", "Performance Analytics"],
      benefits: ["Reduce response time by 80%", "Improve customer satisfaction by 40%", "Handle 10x more inquiries", "24/7 customer support"],
      path: "/services/ai-support",
      rating: 4.8,
      reviewCount: 167,
      category: "AI & Support"
    },
    {
      title: "AI Data Analytics & BI",
      description: "Advanced business intelligence platform that uses AI to transform raw data into actionable insights and predictive analytics.",
      icon: BarChart3,
      price: "From $1,500/month",
      features: ["Predictive Analytics", "Real-time Dashboards", "Data Visualization", "Automated Reporting", "Machine Learning Models", "Data Integration"],
      benefits: ["Uncover hidden insights", "Make data-driven decisions", "Predict future trends", "Automate reporting processes"],
      path: "/services/ai-analytics",
      rating: 4.9,
      reviewCount: 134,
      category: "AI & Analytics"
    }
  ];

  const itServices = [
    {
      title: "Cloud Infrastructure & DevOps",
      description: "Enterprise-grade cloud infrastructure with automated DevOps pipelines for scalable, reliable, and secure applications.",
      icon: Cloud,
      price: "From $3,000/month",
      features: ["Multi-cloud Management", "CI/CD Pipelines", "Infrastructure as Code", "Auto-scaling", "Monitoring & Alerting", "Disaster Recovery"],
      benefits: ["99.9% uptime guarantee", "Reduce deployment time by 80%", "Scale automatically", "Reduce infrastructure costs by 30%"],
      path: "/services/cloud-devops",
      rating: 4.8,
      reviewCount: 145,
      category: "IT & Infrastructure"
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Comprehensive cybersecurity services including threat detection, vulnerability assessment, and compliance management.",
      icon: ShieldCheck,
      price: "From $2,200/month",
      features: ["Threat Detection", "Vulnerability Assessment", "Compliance Management", "Security Audits", "Incident Response", "Security Training"],
      benefits: ["Protect against cyber threats", "Meet compliance requirements", "Reduce security risks", "24/7 security monitoring"],
      path: "/services/cybersecurity",
      rating: 4.9,
      reviewCount: 178,
      category: "IT & Security"
    }
  ];

  const featuredCategories = [
    {
      title: "AI & Machine Learning",
      desc: "Cutting-edge AI solutions for business automation and intelligence",
      href: "/services/ai-ml"
    },
    {
      title: "Cloud & DevOps",
      desc: "Scalable cloud infrastructure and automated deployment",
      href: "/services/cloud-devops"
    },
    {
      title: "Cybersecurity",
      desc: "Advanced security solutions and compliance management",
      href: "/services/cybersecurity"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const ServiceCard = ({ service, index }: { service: any; index: number }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-4">
          <service.icon className="w-6 h-6 text-cyan-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{service.title}</h3>
          <p className="text-sm text-cyan-400">{service.category}</p>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{service.description}</p>
      <div className="mb-4">
        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
      </div>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(service.rating) ? "text-yellow-400" : "text-gray-600"}>
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-400 ml-2">({service.reviewCount} reviews)</span>
        </div>
      </div>
      <Link
        to={service.path}
        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
      >
        Learn More
        <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services - Zion Tech Group" 
        description="Discover our comprehensive range of AI-powered services, IT solutions, and innovative technology services designed to transform your business."
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
              <Workflow className="w-4 h-4 mr-2" />
              Professional Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our comprehensive range of AI-powered services, IT solutions, and innovative 
              technology services designed to transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold text-lg rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                AI-Powered Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage the power of artificial intelligence to automate processes, gain insights, and drive innovation across your organization
            </p>
          </motion.div>
          
          <div className="mt-8 text-center space-y-4">
            <Link to="/innovative-ai-services" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 font-semibold">
              <Sparkles className="w-5 h-5 mr-2" />
              Explore Our Innovative AI Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <div>
              <Link to="/innovative-services-2026" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 font-semibold">
                <TrendingUp className="w-5 h-5 ml-2" />
                Discover 2026 Revolutionary Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((c) => (
              <Link key={c.title} to={c.href} className="block bg-slate-900/60 border border-cyan-400/15 hover:border-cyan-400/40 rounded-2xl p-6 text-left">
                <div className="text-xs uppercase tracking-wide text-cyan-300/70">Featured</div>
                <div className="mt-2 text-xl font-semibold">{c.title}</div>
                <div className="mt-2 text-sm text-slate-300">{c.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                IT & Infrastructure Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional IT services to build, maintain, and optimize your technology infrastructure for maximum performance and security
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {itServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Micro SaaS Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Innovative, focused software solutions designed to solve specific business challenges and streamline operations
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {aiServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your <span className="text-cyan-400">Business</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help you achieve your business goals and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="/comprehensive-services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold text-lg rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Globe className="w-5 h-5 mr-2" />
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


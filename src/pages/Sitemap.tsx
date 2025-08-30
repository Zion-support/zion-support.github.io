import React from 'react';
import { Link } from 'react-router-dom';
import { Map as SitemapIcon, Home, Users, Settings, FileText, Shield, Mail, HelpCircle, Building, Briefcase, Brain, Cloud, Rocket, Heart, Globe, Lock, Cpu, Zap, Star, TrendingUp, MessageCircle, DollarSign, BookOpen, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function SitemapPage() {
  const siteStructure = [
    {
      title: "Main Pages",
      icon: Home,
      links: [
        { name: "Home", path: "/", description: "Welcome to Zion Tech Group" },
        { name: "About Us", path: "/about", description: "Learn about our company and mission" },
        { name: "Contact", path: "/contact", description: "Get in touch with our team" },
        { name: "Services Overview", path: "/services-overview", description: "Explore all our services" },
        { name: "Partners", path: "/partners", description: "Strategic partnerships and collaborations" },
        { name: "Careers", path: "/careers", description: "Join our team of experts" },
        { name: "Team", path: "/team", description: "Meet our leadership and experts" },
        { name: "Press", path: "/press", description: "Media resources and press releases" }
      ]
    },
    {
      title: "Core Services",
      icon: Settings,
      links: [
        { name: "AI Services", path: "/ai-services", description: "Comprehensive AI solutions" },
        { name: "IT Services", path: "/it-services", description: "Enterprise IT solutions" },
        { name: "Micro SaaS", path: "/micro-saas", description: "Scalable software solutions" },
        { name: "Cloud & DevOps", path: "/services/cloud-devops", description: "Infrastructure & automation" },
        { name: "Digital Twin", path: "/services/digital-twin", description: "Simulation & monitoring" },
        { name: "Data Analytics", path: "/services/data-analytics", description: "Business intelligence" },
        { name: "IoT & Edge", path: "/services/iot-edge", description: "Connected ecosystems" },
        { name: "Blockchain Solutions", path: "/services/blockchain-enterprise-solutions", description: "DeFi & smart contracts" }
      ]
    },
    {
      title: "Specialized Services",
      icon: Brain,
      links: [
        { name: "AI Business Intelligence", path: "/services/ai-business-intelligence", description: "Machine Learning & Data Science" },
        { name: "AI Sales Copilot", path: "/services/ai-sales-copilot", description: "AI-powered sales automation" },
        { name: "AI Compliance Assistant", path: "/services/ai-compliance-assistant", description: "Regulatory compliance automation" },
        { name: "AI Auto Email Responder", path: "/services/ai-auto-email-responder", description: "Faster replies, CRM logging" },
        { name: "LLM Content Studio", path: "/services/llm-content-studio", description: "AI content generation" },
        { name: "FinOps Advisor", path: "/services/finops-advisor", description: "Cloud cost optimization" },
        { name: "Healthcare Tech", path: "/services/healthcare-tech", description: "AI medicine & diagnostics" },
        { name: "Sustainability", path: "/services/sustainability", description: "Green IT solutions" }
      ]
    },
    {
      title: "Advanced Solutions",
      icon: Rocket,
      links: [
        { name: "Quantum AI Platform", path: "/services/quantum-ai-platform", description: "Next-gen quantum computing" },
        { name: "AI Cybersecurity Suite", path: "/services/ai-cybersecurity-suite", description: "Advanced security solutions" },
        { name: "AI Healthcare Analytics", path: "/services/ai-healthcare-analytics", description: "Healthcare data insights" },
        { name: "Zero Trust Architecture", path: "/services/zero-trust-network-architecture", description: "Advanced security framework" },
        { name: "IT Infrastructure", path: "/services/it-infrastructure", description: "Enterprise infrastructure" },
        { name: "Space Technology", path: "/services/space-tech", description: "Aerospace innovation" },
        { name: "Innovative Services 2025", path: "/innovative-services-showcase-2025", description: "Latest cutting-edge solutions" },
        { name: "Revolutionary Services 2030", path: "/revolutionary-services-showcase-2030", description: "Future-ready services" }
      ]
    },
    {
      title: "Pricing & Solutions",
      icon: DollarSign,
      links: [
        { name: "Pricing Guide", path: "/pricing-guide", description: "Comprehensive pricing information" },
        { name: "Pricing 2027", path: "/pricing", description: "Current year pricing strategies" },
        { name: "Pricing 2030", path: "/pricing-2030", description: "Advanced pricing strategies" },
        { name: "Request Quote", path: "/request-quote", description: "Get custom pricing" },
        { name: "Marketplace", path: "/marketplace", description: "Explore our solutions" }
      ]
    },
    {
      title: "Support & Resources",
      icon: HelpCircle,
      links: [
        { name: "Help Center", path: "/help", description: "Comprehensive support and documentation" },
        { name: "FAQ", path: "/faq", description: "Frequently asked questions" },
        { name: "Blog", path: "/blog", description: "Industry insights and updates" },
        { name: "Webinars", path: "/webinars", description: "Educational content and training" },
        { name: "White Papers", path: "/white-papers", description: "In-depth research and analysis" },
        { name: "Case Studies", path: "/case-studies", description: "Success stories and implementations" },
        { name: "Training", path: "/training", description: "Skill development programs" },
        { name: "Documentation", path: "/docs", description: "Technical guides and APIs" }
      ]
    },
    {
      title: "Company & Legal",
      icon: Building,
      links: [
        { name: "Privacy Policy", path: "/privacy", description: "Data protection and privacy" },
        { name: "Terms of Service", path: "/terms", description: "Service terms and conditions" },
        { name: "Cookie Policy", path: "/cookies", description: "Cookie usage and preferences" },
        { name: "Security", path: "/security", description: "Security measures and practices" },
        { name: "Compliance", path: "/compliance", description: "Regulatory compliance information" },
        { name: "Accessibility", path: "/accessibility", description: "Accessibility features and compliance" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6">
            <SitemapIcon className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Complete Sitemap
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Navigate through our comprehensive website structure and discover all the services, resources, and information available at Zion Tech Group.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {siteStructure.map((section, sectionIndex) => (
            <div key={section.title} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>
              
              <div className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <div key={link.path} className="group">
                    <Link
                      to={link.path}
                      className="block p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors group-hover:border-cyan-500/50 border border-transparent"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors mb-1">
                            {link.name}
                          </h3>
                          <p className="text-sm text-slate-300">{link.description}</p>
                        </div>
                        <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRight className="w-4 h-4 text-cyan-400" />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Navigation */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Quick Navigation</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Need help finding something specific? Use our search or contact our team for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/help"
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors"
              >
                Get Help
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Sitemap, Home, Users, Settings, FileText, Shield, Mail, HelpCircle, Building, Briefcase, Brain, Cloud, Rocket, Heart, Globe, Lock, Cpu, Zap, Star, TrendingUp, MessageCircle, DollarSign, BookOpen, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        { name: "Help Center", path: "/help", description: "Find answers to common questions" },
        { name: "FAQ", path: "/faq", description: "Frequently asked questions" },
        { name: "Support Portal", path: "/support", description: "Technical support and assistance" },
        { name: "Documentation", path: "/docs", description: "Technical guides and API references" },
        { name: "Training", path: "/training", description: "Learning resources and courses" },
        { name: "Webinars", path: "/webinars", description: "Educational sessions and workshops" },
        { name: "Blog", path: "/blog", description: "Latest insights and news" },
        { name: "Case Studies", path: "/case-studies", description: "Success stories and projects" }
      ]
    },
    {
      title: "Legal & Compliance",
      icon: Shield,
      links: [
        { name: "Privacy Policy", path: "/privacy", description: "How we protect your data" },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions" },
        { name: "Cookie Policy", path: "/cookies", description: "Cookie usage information" },
        { name: "Accessibility", path: "/accessibility", description: "Accessibility statement" },
        { name: "Security", path: "/security", description: "Security practices" },
        { name: "Compliance", path: "/compliance", description: "Regulatory compliance" }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: "Phone Support",
      href: "tel:+13024640950"
    },
    {
      icon: Mail,
      text: "Email Support",
      href: "mailto:kleber@ziontechgroup.com"
    },
    {
      icon: MapPin,
      text: "Office Location",
      href: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
    },
    {
      icon: Globe,
      text: "Website",
      href: "https://ziontechgroup.com"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sitemap className="h-12 w-12 text-cyan-400 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Site Map
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Navigate through our comprehensive website structure to find the information and services you need
          </p>
        </div>
      </div>

      {/* Site Structure */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {siteStructure.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <section.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
              </div>
              
              <div className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="group">
                    <Link
                      to={link.path}
                      className="block p-3 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {link.name}
                      </div>
                      <div className="text-sm text-slate-400 mt-1">
                        {link.description}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <section className="bg-slate-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-300">
              Need help finding something? Contact our team directly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <contact.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {contact.text}
                </h3>
                {contact.href !== "#" && (
                  <a 
                    href={contact.href}
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    Contact →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Our team is here to help you navigate and find the information you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Contact Support
              </Link>
              <Link
                to="/help"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

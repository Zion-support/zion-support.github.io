import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  MapIcon,
  CogIcon,
  CubeIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  Brain,
  Code,
  Database,
  Shield,
  Cloud,
  Globe,
  Zap,
  Cpu,
  Server,
  Monitor,
  Palette,
  Layers,
  Users,
  Settings,
  Wrench,
  Target,
  TrendingUp,
  Lightbulb,
  BarChart3,
  Lock,
  Rocket,
  Globe as World,
  FileText,
  HelpCircle,
  BookOpen,
  Calendar,
  Mail,
  Phone,
  ShoppingCart
} from 'lucide-react';

export default function Sitemap() {
  const sitemapSections = [
    {
      title: "Main Pages",
      icon: World,
      color: "text-blue-400",
      links: [
        { name: "Home", path: "/", description: "Welcome to Zion Tech Group" },
        { name: "About Us", path: "/about", description: "Our story and mission" },
        { name: "Contact", path: "/contact", description: "Get in touch with us" },
        { name: "Careers", path: "/careers", description: "Join our team" },
        { name: "FAQ", path: "/faq", description: "Frequently asked questions" }
      ]
    },
    {
      title: "Services",
      icon: CogIcon,
      color: "text-green-400",
      links: [
        { name: "All Services", path: "/services", description: "Complete service overview" },
        { name: "AI Solutions", path: "/services/ai", description: "Artificial Intelligence services" },
        { name: "Cloud & DevOps", path: "/services/cloud", description: "Cloud infrastructure and automation" },
        { name: "Cybersecurity", path: "/services/cybersecurity", description: "Security and threat protection" },
        { name: "IT Infrastructure", path: "/services/infrastructure", description: "Network and system management" },
        { name: "Digital Transformation", path: "/services/transformation", description: "Business process optimization" },
        { name: "Consulting", path: "/services/consulting", description: "Technology strategy and advisory" },
        { name: "Green IT", path: "/green-it", description: "Sustainable technology solutions" },
        { name: "IT Onsite Services", path: "/it-onsite-services", description: "Onsite IT support and solutions" }
      ]
    },
    {
      title: "Marketplace",
      icon: ShoppingCart,
      color: "text-purple-400",
      links: [
        { name: "Marketplace", path: "/marketplace", description: "Browse AI services and solutions" },
        { name: "Talent", path: "/talent", description: "Find AI and tech professionals" },
        { name: "Equipment", path: "/equipment", description: "Rent high-tech equipment" },
        { name: "Categories", path: "/categories", description: "Browse by service category" },
        { name: "Request Quote", path: "/request-quote", description: "Get custom pricing" }
      ]
    },
    {
      title: "AI & Technology",
      icon: Brain,
      color: "text-cyan-400",
      links: [
        { name: "AI Autonomous Business Manager", path: "/ai-autonomous-business-manager", description: "AI-powered business management" },
        { name: "AI Research Assistant", path: "/ai-autonomous-research-assistant", description: "AI research and analysis" },
        { name: "AI Systems Platform", path: "/ai-autonomous-systems-platform", description: "Comprehensive AI platform" },
        { name: "AI Business Intelligence", path: "/ai-business-intelligence-suite", description: "AI-powered analytics" },
        { name: "AI Content Generator", path: "/ai-content-generator", description: "AI content creation tools" },
        { name: "AI Code Review", path: "/ai-code-review", description: "Automated code analysis" }
      ]
    },
    {
      title: "Advanced Solutions",
      icon: RocketLaunchIcon,
      color: "text-orange-400",
      links: [
        { name: "Quantum Technology", path: "/quantum-technology", description: "Next-generation computing" },
        { name: "Space Tech", path: "/space-tech", description: "Space technology solutions" },
        { name: "Micro SaaS", path: "/micro-saas", description: "Scalable software solutions" },
        { name: "5G Enterprise Solutions", path: "/5g-enterprise-solutions", description: "5G network infrastructure" },
        { name: "Zero Trust Security", path: "/zero-trust-network-architecture", description: "Advanced security architecture" },
        { name: "SOC2 Compliance", path: "/soc2-compliance-automation", description: "Automated compliance" }
      ]
    },
    {
      title: "Resources & Support",
      icon: BookOpen,
      color: "text-pink-400",
      links: [
        { name: "Blog", path: "/blog", description: "Latest insights and news" },
        { name: "Help Center", path: "/help", description: "Self-service support" },
        { name: "Support Portal", path: "/support", description: "Technical support" },
        { name: "Tutorials", path: "/tutorials", description: "Learning resources" },
        { name: "Webinars", path: "/webinars", description: "Educational content" },
        { name: "White Papers", path: "/white-papers", description: "Research and analysis" }
      ]
    },
    {
      title: "Company",
      icon: UserGroupIcon,
      color: "text-indigo-400",
      links: [
        { name: "Our Team", path: "/team", description: "Meet our experts" },
        { name: "Partners", path: "/partners", description: "Strategic partnerships" },
        { name: "Case Studies", path: "/case-studies", description: "Success stories" },
        { name: "Research & Development", path: "/research-development", description: "Innovation hub" },
        { name: "Leadership", path: "/leadership", description: "Company leadership" },
        { name: "News", path: "/news", description: "Company updates" }
      ]
    },
    {
      title: "Legal & Policies",
      icon: ShieldCheckIcon,
      color: "text-red-400",
      links: [
        { name: "Privacy Policy", path: "/privacy", description: "Data protection and privacy" },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions" },
        { name: "Cookie Policy", path: "/cookies", description: "Cookie usage information" },
        { name: "Accessibility", path: "/accessibility", description: "Accessibility statement" },
        { name: "Security", path: "/security", description: "Security practices" }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Sitemap | Zion Tech Group"
        description="Navigate through all our pages and services. Find everything you need about Zion Tech Group's technology solutions, resources, and company information."
        keywords="sitemap, navigation, Zion Tech Group, AI services, technology solutions"
        canonical="https://ziontechgroup.com/sitemap"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-zion-purple/20 rounded-full">
                <MapIcon className="h-12 w-12 text-zion-cyan" />
              </div>
            </div>
            <GradientHeading>Sitemap</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Navigate through all our pages and services. Find everything you need about Zion Tech Group's 
              technology solutions, resources, and company information.
            </p>
          </div>

          {/* Sitemap Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {sitemapSections.map((section) => (
              <Card key={section.title} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <section.icon className={`h-6 w-6 ${section.color}`} />
                    <CardTitle className="text-white text-xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.links.map((link) => (
                      <div key={link.name} className="group">
                        <Link
                          to={link.path}
                          className="block p-3 rounded-lg bg-zion-blue-light/10 hover:bg-zion-blue-light/20 transition-all duration-300 border border-transparent hover:border-zion-cyan/30"
                        >
                          <h3 className="text-sm font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300 mb-1">
                            {link.name}
                          </h3>
                          <p className="text-xs text-zion-slate-light group-hover:text-zion-slate-light transition-colors duration-300">
                            {link.description}
                          </p>
                          <div className="mt-2 flex items-center text-zion-cyan text-xs font-medium">
                            Visit Page
                            <svg className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Links Section */}
          <div className="mb-16">
            <Card className="bg-zion-blue-dark border-zion-purple/30">
              <CardHeader>
                <CardTitle className="text-white text-2xl text-center">Quick Navigation</CardTitle>
                <CardDescription className="text-zion-slate-light text-center">
                  Get started quickly with our most popular pages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                    <Link to="/contact">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                    <Link to="/services">View Services</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                    <Link to="/marketplace">Marketplace</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                    <Link to="/about">About Us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Help?
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you navigate our services and find the right solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light">
                <Mail className="h-8 w-8 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Email Support</h3>
                <p className="text-zion-slate-light text-sm">Get help via email</p>
                <a href="mailto:support@ziontechgroup.com" className="text-zion-cyan hover:text-zion-purple text-sm">
                  support@ziontechgroup.com
                </a>
              </div>
              <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light">
                <HelpCircle className="h-8 w-8 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Help Center</h3>
                <p className="text-zion-slate-light text-sm">Browse our help articles</p>
                <Link to="/help" className="text-zion-cyan hover:text-zion-purple text-sm">
                  Visit Help Center
                </Link>
              </div>
              <div className="bg-zion-blue-dark p-6 rounded-lg border border-zion-blue-light">
                <Phone className="h-8 w-8 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Phone Support</h3>
                <p className="text-zion-slate-light text-sm">Speak with our team</p>
                <a href="tel:+1-555-123-4567" className="text-zion-cyan hover:text-zion-purple text-sm">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-blue-dark">
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button asChild variant="outline" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white">
                <Link to="/help">Help Center</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
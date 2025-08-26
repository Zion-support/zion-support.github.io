import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home,
  Info,
  Briefcase,
  ShoppingCart,
  Users,
  Wrench,
  BookOpen,
  MessageCircle,
  Shield,
  Settings,
  FileText,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Map,
  Globe,
  Rocket,
  Brain,
  Cloud,
  Lock,
  Cpu,
  TrendingUp,
  Leaf,
  Package,
  Heart,
  Code
} from 'lucide-react';

export default function Sitemap() {
  const sitemapStructure = [
    {
      title: "Main Pages",
      icon: Home,
      color: "from-zion-cyan to-zion-blue",
      links: [
        { name: "Home", path: "/", description: "Main landing page" },
        { name: "About Us", path: "/about", description: "Company information and mission" },
        { name: "Contact", path: "/contact", description: "Get in touch with our team" },
        { name: "FAQ", path: "/faq", description: "Frequently asked questions" },
        { name: "Help Center", path: "/help", description: "Support and assistance" },
        { name: "Sitemap", path: "/sitemap", description: "This page - site navigation" }
      ]
    },
    {
      title: "Services",
      icon: Briefcase,
      color: "from-zion-purple to-zion-red",
      links: [
        { name: "All Services", path: "/services", description: "Complete service overview" },
        { name: "AI & Analytics", path: "/ai-services", description: "Artificial intelligence solutions" },
        { name: "Cybersecurity", path: "/cybersecurity-services", description: "Security and protection" },
        { name: "Cloud Solutions", path: "/cloud-infrastructure", description: "Cloud and infrastructure" },
        { name: "Quantum Computing", path: "/quantum-technology", description: "Next-gen computing" },
        { name: "Blockchain", path: "/blockchain-services", description: "Distributed ledger technology" },
        { name: "IoT & Edge", path: "/iot-services", description: "Internet of Things solutions" },
        { name: "Digital Marketing", path: "/digital-marketing-services", description: "Marketing and growth" },
        { name: "Manufacturing", path: "/manufacturing-solutions", description: "Industry 4.0 solutions" },
        { name: "Digital Transformation", path: "/digital-transformation", description: "Business transformation" },
        { name: "5G Solutions", path: "/5g-enterprise-solutions", description: "5G network optimization" },
        { name: "Green IT", path: "/green-it", description: "Sustainable technology" },
        { name: "IT Onsite Services", path: "/it-onsite-services", description: "On-site IT support" }
      ]
    },
    {
      title: "Marketplace",
      icon: ShoppingCart,
      color: "from-zion-green to-zion-cyan",
      links: [
        { name: "Marketplace Home", path: "/marketplace", description: "Main marketplace page" },
        { name: "All Products", path: "/products", description: "Browse all products" },
        { name: "New Products", path: "/new-products", description: "Latest arrivals" },
        { name: "Featured Products", path: "/featured", description: "Highlighted items" },
        { name: "Categories", path: "/categories", description: "Product categories" },
        { name: "Equipment", path: "/equipment", description: "Hardware and equipment" },
        { name: "Cart", path: "/cart", description: "Shopping cart" },
        { name: "Checkout", path: "/checkout", description: "Purchase process" },
        { name: "Orders", path: "/orders", description: "Order management" }
      ]
    },
    {
      title: "Talent & HR",
      icon: Users,
      color: "from-zion-pink to-zion-purple",
      links: [
        { name: "Talent Marketplace", path: "/talent", description: "Find skilled professionals" },
        { name: "Post a Job", path: "/post-job", description: "Hire talent" },
        { name: "Projects", path: "/projects", description: "Browse project opportunities" },
        { name: "Company Workspace", path: "/company-workspace", description: "Business collaboration" },
        { name: "Zion Hire AI", path: "/zion-hire-ai", description: "AI-powered recruitment" }
      ]
    },
    {
      title: "Enterprise",
      icon: Rocket,
      color: "from-zion-blue to-zion-purple",
      links: [
        { name: "Enterprise Solutions", path: "/enterprise", description: "Large business solutions" },
        { name: "Enterprise IT", path: "/enterprise-it", description: "Corporate IT services" },
        { name: "Enterprise Demo", path: "/enterprise-demo", description: "Request a demonstration" },
        { name: "Enterprise Billing", path: "/enterprise-billing", description: "Billing and invoicing" },
        { name: "Enterprise Admin", path: "/enterprise-admin", description: "Administrative tools" },
        { name: "Enterprise Plans", path: "/enterprise-plans", description: "Pricing and packages" }
      ]
    },
    {
      title: "Advanced Services",
      icon: Brain,
      color: "from-zion-cyan to-zion-purple",
      links: [
        { name: "Business Solutions", path: "/business-solutions", description: "Comprehensive business solutions" },
        { name: "Comprehensive Services", path: "/comprehensive-services", description: "Full-service offerings" },
        { name: "Advanced Services", path: "/advanced-services", description: "Cutting-edge solutions" },
        { name: "Enhanced Services", path: "/enhanced-services", description: "Premium service packages" },
        { name: "Micro SaaS Services", path: "/micro-saas-services", description: "Small business solutions" },
        { name: "Next Gen Services 2025", path: "/next-gen-services-2025", description: "Future-ready services" },
        { name: "Autonomous Operations", path: "/autonomous-business-operations", description: "Self-managing systems" }
      ]
    },
    {
      title: "Technology Solutions",
      icon: Cpu,
      color: "from-zion-green to-zion-cyan",
      links: [
        { name: "AI Business Solutions", path: "/ai-business-solutions", description: "AI for business" },
        { name: "AI Code Review", path: "/ai-code-review", description: "Automated code analysis" },
        { name: "AI Content Generator", path: "/ai-content-generator", description: "Content creation tools" },
        { name: "AI Research Assistant", path: "/ai-research-assistant", description: "Research automation" },
        { name: "Cloud Cost Optimizer", path: "/cloud-cost-optimizer", description: "Cost optimization tools" },
        { name: "Cloud Migration", path: "/cloud-migration-services", description: "Migration assistance" },
        { name: "SOC2 Compliance", path: "/soc2-compliance-automation", description: "Compliance automation" },
        { name: "Financial Solutions", path: "/financial-solutions", description: "Fintech solutions" },
        { name: "5G Network Optimization", path: "/5g-network-optimization", description: "Network performance" },
        { name: "Emerging Tech", path: "/emerging-tech", description: "Latest technologies" }
      ]
    },
    {
      title: "Community & Support",
      icon: Heart,
      color: "from-zion-orange to-zion-purple",
      links: [
        { name: "Community", path: "/community", description: "User community" },
        { name: "Partners", path: "/partners", description: "Partnership opportunities" },
        { name: "Events", path: "/events", description: "Upcoming events" },
        { name: "Blog", path: "/blog", description: "Latest news and insights" },
        { name: "Support", path: "/support", description: "Technical support" },
        { name: "Forum", path: "/forum", description: "Community discussions" },
        { name: "Video Call", path: "/video-call", description: "Remote support sessions" }
      ]
    },
    {
      title: "Developer Resources",
      icon: Code,
      color: "from-zion-cyan to-zion-green",
      links: [
        { name: "Developer Portal", path: "/developer", description: "Developer resources" },
        { name: "API Documentation", path: "/api", description: "API reference" },
        { name: "Documentation", path: "/docs", description: "Technical guides" },
        { name: "Portfolio Builder", path: "/portfolio-builder", description: "Create your portfolio" }
      ]
    },
    {
      title: "User Account",
      icon: Settings,
      color: "from-zion-blue to-zion-cyan",
      links: [
        { name: "Login", path: "/login", description: "Sign in to your account" },
        { name: "Sign Up", path: "/signup", description: "Create new account" },
        { name: "Dashboard", path: "/dashboard", description: "User dashboard" },
        { name: "Profile", path: "/profile", description: "User profile" },
        { name: "Account Settings", path: "/account-settings", description: "Manage account" },
        { name: "Forgot Password", path: "/forgot-password", description: "Password recovery" },
        { name: "Client Dashboard", path: "/client-dashboard", description: "Client portal" }
      ]
    },
    {
      title: "Legal & Policy",
      icon: Shield,
      color: "from-zion-purple to-zion-red",
      links: [
        { name: "Privacy Policy", path: "/privacy", description: "Data protection policy" },
        { name: "Terms of Service", path: "/terms", description: "Service terms" },
        { name: "Cookie Policy", path: "/cookies", description: "Cookie usage" },
        { name: "Accessibility", path: "/accessibility", description: "Accessibility statement" },
        { name: "Security", path: "/security", description: "Security information" },
        { name: "GDPR", path: "/gdpr", description: "Data protection compliance" }
      ]
    },
    {
      title: "Pricing & Plans",
      icon: TrendingUp,
      color: "from-zion-green to-zion-blue",
      links: [
        { name: "Pricing", path: "/pricing", description: "Service pricing" },
        { name: "Pricing Guide", path: "/pricing-guide", description: "Pricing information" },
        { name: "Pricing Page", path: "/pricing-page", description: "Detailed pricing" },
        { name: "Pricing Guide Page", path: "/pricing-guide-page", description: "Comprehensive pricing guide" }
      ]
    }
  ];

  const quickLinks = [
    { name: "Get Started", path: "/contact", icon: Rocket, color: "from-zion-cyan to-zion-purple" },
    { name: "Browse Services", path: "/services", icon: Briefcase, color: "from-zion-purple to-zion-red" },
    { name: "Explore Marketplace", path: "/marketplace", icon: ShoppingCart, color: "from-zion-green to-zion-cyan" },
    { name: "Find Talent", path: "/talent", icon: Users, color: "from-zion-pink to-zion-purple" },
    { name: "Get Support", path: "/help", icon: HelpCircle, color: "from-zion-orange to-zion-purple" },
    { name: "View Blog", path: "/blog", icon: BookOpen, color: "from-zion-cyan to-zion-green" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Map className="w-20 h-20 text-zion-cyan mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Site <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Map</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Navigate through our comprehensive website structure and discover all the resources, services, and information available on Zion Tech Group.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Quick Navigation
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.name}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link to={link.path}>
                  <div className={`bg-gradient-to-br ${link.color} p-4 rounded-lg text-center group-hover:shadow-lg transition-all duration-300`}>
                    <link.icon className="w-8 h-8 text-white mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-white font-semibold text-sm">{link.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Sitemap */}
      <section className="py-16 bg-zinc-800/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Complete Site Structure
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sitemapStructure.map((section, index) => (
              <motion.div
                key={section.title}
                className="bg-zinc-800/50 rounded-lg border border-zion-cyan/20 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Section Header */}
                <div className={`bg-gradient-to-r ${section.color} p-4`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg">{section.title}</h3>
                  </div>
                </div>

                {/* Section Links */}
                <div className="p-4">
                  <div className="space-y-3">
                    {section.links.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.path}
                        className="block group hover:bg-zinc-700/50 rounded-lg p-3 transition-colors duration-200"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="text-white font-medium group-hover:text-zion-cyan transition-colors">
                              {link.name}
                            </h4>
                            <p className="text-zion-slate-light text-sm">{link.description}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-zion-cyan group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Additional Resources
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Beyond our main website, we offer additional resources to help you succeed with Zion Tech Group.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-800/50 rounded-lg p-6 border border-zion-cyan/20">
                <BookOpen className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Documentation</h3>
                <p className="text-zion-slate-light text-sm mb-4">Comprehensive guides and technical documentation</p>
                <Link to="/docs" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm">
                  View Documentation →
                </Link>
              </div>
              
              <div className="bg-zinc-800/50 rounded-lg p-6 border border-zion-cyan/20">
                <MessageCircle className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Support</h3>
                <p className="text-zion-slate-light text-sm mb-4">Get help from our expert support team</p>
                <Link to="/help" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm">
                  Get Support →
                </Link>
              </div>
              
              <div className="bg-zinc-800/50 rounded-lg p-6 border border-zion-cyan/20">
                <Globe className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">External Resources</h3>
                <p className="text-zion-slate-light text-sm mb-4">Links to partner sites and resources</p>
                <a href="https://ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm">
                  Visit Main Site →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-zinc-800/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Explore?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Now that you've seen our complete site structure, start exploring the areas that interest you most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:scale-105 transition-transform">
                Get Started Today
              </Link>
              <Link to="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-colors">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

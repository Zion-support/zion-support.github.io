import { motion } from 'framer-motion';"
import { SEO } from '../components/SEO';
import { 
  Globe, ArrowRight, ExternalLink, Search, 
  Users, Code, Shield, Brain, Atom, Rocket;",
} from 'lucide-react';
export default function Sitemap() {
  const siteStructure = [
    {
      title: "Main Pages", pages: [
        { name: "Home", url: "/", description: "Welcome to Zion Tech Group" },
        { name: "About", url: "/about", description: "Learn about our company and mission" }, { name: "Services", url: "/services", description: "Our comprehensive technology services" },
        { name: "Contact", url: "/contact", description: "Get in touch with our team" }
      ]
    }, {
      title: "AI Services",
      pages: [
        { name: "AI Services Overview", url: "/ai-services", description: "Comprehensive AI solutions" }, { name: "AI Content Generator", url: "/services/ai-content-generator", description: "AI-powered content creation" },
        { name: "AI Project Management", url: "/services/ai-project-management", description: "AI-driven project optimization" }, { name: "AI Business Intelligence", url: "/services/ai-business-intelligence", description: "Advanced analytics & ML insights" }
      ]
    }, {
      title: "Quantum Computing",
      pages: [
        { name: "Quantum Computing Solutions", url: "/services/quantum-computing", description: "Next-generation computing power" }, { name: "Quantum AI Platform", url: "/services/quantum-ai-hybrid-platform", description: "Revolutionary quantum-AI computing" },
        { name: "Quantum Financial Trading", url: "/services/ai-quantum-financial-trading-platform", description: "Advanced quantum trading" }, { name: "Quantum Machine Learning", url: "/services/quantum-machine-learning", description: "Quantum-enhanced ML algorithms" }
      ]
    }, {
      title: "Cybersecurity",
      pages: [
        { name: "AI Cybersecurity Platform", url: "/services/ai-cybersecurity-platform", description: "Advanced AI-powered security" }, { name: "Security Headers & CSP", url: "/services/security-headers-csp", description: "Web security hardening" },
        { name: "DSR Privacy Portal", url: "/services/dsr-portal", description: "GDPR/CCPA compliance" }, { name: "Zero Trust Network Access", url: "/services/zero-trust-network-access", description: "Modern security architecture" }
      ]
    }, {
      title: "Company",
      pages: [
        { name: "Our Team", url: "/team", description: "Meet our expert professionals" }, { name: "Partners", url: "/partners", description: "Strategic partnerships" },
        { name: "Careers", url: "/careers", description: "Join our growing team" }, { name: "News", url: "/news", description: "Company announcements" }
      ]
    }, {
      title: "Resources",
      pages: [
        { name: "Blog", url: "/blog", description: "Latest insights and updates" }, { name: "Documentation", url: "/documentation", description: "Technical guides and API reference" },
        { name: "Help Center", url: "/help", description: "Find answers and solutions" }, { name: "Webinars", url: "/webinars", description: "Educational sessions" },
        { name: "Training", url: "/training", description: "Skill development programs" }, { name: "Research", url: "/research", description: "Our research initiatives" }
      ]
    }, {
      title: "Marketplace",
      pages: [
        { name: "Marketplace", url: "/marketplace", description: "Explore products and services" }, { name: "AI Tools", url: "/marketplace/ai-tools", description: "AI-powered applications" },
        { name: "Micro SaaS", url: "/micro-saas", description: "Curated micro SaaS solutions" }, { name: "IT Services", url: "/it-services", description: "Enterprise IT offerings" }
      ]
    }, {
      title: "Legal & Support",
      pages: [
        { name: "Privacy Policy", url: "/privacy", description: "How we protect your data" }, { name: "Terms of Service", url: "/terms", description: "Terms and conditions" },
        { name: "Cookie Policy", url: "/cookies", description: "Cookie usage information" }, { name: "FAQ", url: "/faq", description: "Frequently asked questions" },
        { name: "System Status", url: "/system-status", description: "Service availability" }
      ],
}
  ];
  const quickLinks = [
    { name: "Get Started", url: "/contact", icon: ArrowRight }, { name: "View Services", url: "/services", icon: Code },
    { name: "Meet Our Team", url: "/team", icon: Users }, { name: "Read Our Blog", url: "/blog", icon: Brain }
  ];
  return (
    <>
      <SEO "
        title="Sitemap - Zion Tech Group | Complete Site Navigation"
        description="Navigate Zion Tech Group's website with our comprehensive sitemap. Find all pages, services, and resources organized by category."'
        keywords="sitemap, navigation, site map, pages, Zion Tech Group, website structure"
      /" >
      "
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}"
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">"
          <div className="container mx-auto px-4">
            <motion .div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center max-w-4xl mx-auto"" >"
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Site Map
              </h1>"
              <p className="text-xl text-gray-300 mb-8">
                Navigate our website with ease. Find all pages, services, and resources 
                organized by category for quick access.
              </p>"
              <div className="flex items-center justify-center">"
                <Globe className="w-16 h-16 text-blue-400" /" >
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}"
        <section className="py-16">"
          <div className="container mx-auto px-4">
            <motion .div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center mb-12"" >"
              <h2 className="text-4xl font-bold text-white mb-4">Quick Links</h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Popular destinations and key pages
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <motion .a
                  key={link.name}
                  href={link.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}"
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 text-center"" >"
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">"
                    <link .icon className="w-6 h-6 text-white" /" >
                  </div>"
                  <h3 className="text-lg font-bold text-white">{link.name}</h3>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Site Structure */}"
        <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50">"
          <div className="container mx-auto px-4">
            <motion .div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center mb-12"" >"
              <h2 className="text-4xl font-bold text-white mb-4">Complete Site Structure</h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All pages organized by category for easy navigation
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {siteStructure.map((section, sectionIndex) => (
                <motion .div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}"
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50"" >"
                  <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>"
                  <div className="space-y-3">
                    {section.pages.map((page, pageIndex) => (
                      <div key={pageIndex} className="border-b border-slate-600/30 pb-3 last: border-b-0">
                        <a
                          href={page.url}
                          className="block group"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="text-blue-400 group-hover:text-blue-300 transition-colors font-medium">
                                {page.name}
                              </h4>"
                              <p className="text-gray-400 text-sm mt-1">{page.description}</p>
                            </div>"
                            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-gray-400 transition-colors ml-2 flex-shrink-0" /" >
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search Section */}"
        <section className="py-16">"
          <div className="container mx-auto px-4">
            <motion .div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center max-w-2xl mx-auto"" >"
              <h2 className="text-3xl font-bold text-white mb-6">"
                Can't Find What You're Looking For?
              </h2>"
              <p className="text-gray-300 mb-8">
                Use our search functionality to find specific content across our website
              </p>
              "
              <div className="relative">"
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /" >
                <input "
                  type="text"
                  placeholder="Search our website..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
</>
  );
}
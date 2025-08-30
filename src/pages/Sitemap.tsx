import { Sitemap, Home, Users, Settings, FileText, Shield, Mail, HelpCircle, Building, Briefcase, Brain, Cloud, Rocket, Heart, Globe, Lock, Cpu, Zap, Star, TrendingUp, MessageCircle, DollarSign, BookOpen, Phone, MapPin } from 'lucide-react';

export default function SitemapPage() {
  const siteStructure = [
    {
      title: "Main Pages",
      icon: Home,
      links: [
        { name: "Home", path: "/", description: "Welcome to Zion Tech Group" },
        { name: "About Us", path: "/about", description: "Learn about our comp and mission" },
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

  const quickLinks = [
    { name: "Get Started", path: "/contact", description: "Start your project with us", icon: MessageCircle },
    { name: "Request Quote", path: "/request-quote", description: "Get a custom quote", icon: DollarSign },
    { name: "Services Overview", path: "/services-overview", description: "Explore all services", icon: Settings },
    { name: "AI Solutions", path: "/ai-services", description: "Discover AI capabilities", icon: Brain },
    { name: "Pricing Guide", path: "/pricing-guide", description: "View pricing options", icon: DollarSign },
    { name: "Support Center", path: "/help", description: "Get help and support", icon: HelpCircle },
    { name: "Documentation", path: "/docs", description: "Technical resources", icon: BookOpen },
    { name: "Contact Sales", path: "/contact", description: "Talk to our experts", icon: Phone }
  ];

  const contactInfo = [
    { icon: Phone, text: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: Mail, text: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: MapPin, text: "364 E Main St STE 1008, Middletown DE 19709", href: "#" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6">
              <Sitemap className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Complete Sitemap
            </h1>
            <p className="text-xl text-slate-300 mb-4 max-w-3xl mx-auto">
              Navigate our website easily with this comprehensive overview of all pages and sections.
            </p>
            <p className="text-slate-400">
              Last updated: December 2024
            </p>
          </div>
        </div>
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Quick Actions</h2>
            <p className="text-xl text-slate-300">Get started quickly with these popular actions</p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index)  => (
              <Link
                key={index}
                to={link.path}
                className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <link.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                    {link.name}
                  </h3>
                  <p className="text-slate-400 text-sm">{link.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Sitemap Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Complete Site Structure</h2>
            <p className="text-xl text-slate-300">Explore all pages and sections of our website</p>
          </div>
          <div className="space-y-12">
            {siteStructure.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">{section.title}</h3>
                </div>
                <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.links.map((link, linkIndex)  => (
                    <Link
                      key={linkIndex}
                      to={link.path}
                      className="group p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all duration-200 border border-transparent hover:border-cyan-500/30"
                    >
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                        {link.name}
                      </h4>
                      <p className="text-slate-400 text-sm">{link.description}</p>
                      <div className="mt-3 text-cyan-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Visit page →
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
            <p className="text-xl text-slate-300">Get in touch with our team</p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
            {contactInfo.map((contact, index)  => (
              <div key={index} className="text-center p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl">
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
  )}

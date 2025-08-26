import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ExternalLink, 
  Home, 
  Users, 
  Briefcase, 
  FileText, 
  HelpCircle,
  Globe,
  Shield,
  Settings
} from 'lucide-react';

export default function Sitemap() {
  const sitemapSections = [
    {
      title: "Main Pages",
      icon: Home,
      links: [
        { name: "Home", path: "/", description: "Main landing page" },
        { name: "About Us", path: "/about", description: "Company information and mission" },
        { name: "Contact", path: "/contact", description: "Get in touch with us" },
        { name: "Blog", path: "/blog", description: "Latest news and insights" }
      ]
    },
    {
      title: "Services",
      icon: Briefcase,
      links: [
        { name: "AI Solutions", path: "/services/ai-solutions", description: "Artificial intelligence services" },
        { name: "Cloud Services", path: "/services/cloud", description: "Cloud computing solutions" },
        { name: "Cybersecurity", path: "/services/cybersecurity", description: "Security and compliance" },
        { name: "Digital Transformation", path: "/services/digital-transformation", description: "Business transformation" },
        { name: "IT Infrastructure", path: "/services/it-infrastructure", description: "Infrastructure solutions" },
        { name: "Consulting", path: "/services/consulting", description: "Strategic consulting services" }
      ]
    },
    {
      title: "Marketplace",
      icon: Globe,
      links: [
        { name: "Find Talent", path: "/talent", description: "Browse AI and tech professionals" },
        { name: "Browse Services", path: "/services", description: "Explore available services" },
        { name: "Equipment Rental", path: "/equipment", description: "Rent tech equipment" },
        { name: "Green IT", path: "/green-it", description: "Sustainable technology solutions" },
        { name: "IT Onsite Services", path: "/it-onsite-services", description: "On-site IT support" }
      ]
    },
    {
      title: "Company",
      icon: Users,
      links: [
        { name: "Partners", path: "/partners", description: "Strategic partnerships" },
        { name: "Careers", path: "/careers", description: "Job opportunities" },
        { name: "News", path: "/news", description: "Company updates" },
        { name: "Press", path: "/press", description: "Press releases and media" }
      ]
    },
    {
      title: "Resources",
      icon: FileText,
      links: [
        { name: "Help Center", path: "/help", description: "Support and documentation" },
        { name: "FAQ", path: "/faq", description: "Frequently asked questions" },
        { name: "Documentation", path: "/docs", description: "Technical documentation" },
        { name: "White Papers", path: "/white-papers", description: "Industry insights" },
        { name: "Webinars", path: "/webinars", description: "Educational content" },
        { name: "Training", path: "/training", description: "Learning resources" }
      ]
    },
    {
      title: "Support",
      icon: HelpCircle,
      links: [
        { name: "Contact Support", path: "/support", description: "Get help from our team" },
        { name: "System Status", path: "/status", description: "Platform status updates" },
        { name: "Report Issue", path: "/report-issue", description: "Report bugs or problems" },
        { name: "Feature Request", path: "/feature-request", description: "Suggest new features" }
      ]
    },
    {
      title: "Legal",
      icon: Shield,
      links: [
        { name: "Privacy Policy", path: "/privacy", description: "Data protection and privacy" },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions" },
        { name: "Cookie Policy", path: "/cookies", description: "Cookie usage information" },
        { name: "Accessibility", path: "/accessibility", description: "Accessibility statement" }
      ]
    },
    {
      title: "Settings",
      icon: Settings,
      links: [
        { name: "Account Settings", path: "/account", description: "Manage your account" },
        { name: "Profile", path: "/profile", description: "Update your profile" },
        { name: "Preferences", path: "/preferences", description: "Customize your experience" },
        { name: "Security", path: "/security", description: "Security settings" }
      ]
    }
  ];

  const quickLinks = [
    { name: "Get Started", path: "/contact", color: "from-zion-cyan to-zion-purple" },
    { name: "View Services", path: "/services", color: "from-zion-blue-light to-zion-blue" },
    { name: "Find Talent", path: "/talent", color: "from-zion-purple to-zion-purple-dark" },
    { name: "About Us", path: "/about", color: "from-zion-slate to-zion-slate-dark" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Site <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Map</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
              Navigate through all our pages and services. Find everything you need about Zion Tech Group's 
              technology solutions, resources, and company information.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sitemapSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-zion-blue-light/10 rounded-xl p-6 border border-zion-blue-light/20">
                <div className="flex items-center gap-3 mb-6 border-b border-zion-blue-light/20 pb-3">
                  <div className="w-8 h-8 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                    <section.icon className="w-4 h-4 text-zion-cyan" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <div className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="group">
                      <Link
                        to={link.path}
                        className="block p-4 rounded-lg bg-zion-blue-light/5 hover:bg-zion-blue-light/10 transition-all duration-300 border border-transparent hover:border-zion-cyan/30"
                      >
                        <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300 mb-2">
                          {link.name}
                        </h3>
                        <p className="text-sm text-zion-slate-light group-hover:text-zion-slate-light/80 transition-colors duration-300">
                          {link.description}
                        </p>
                        <div className="mt-3 flex items-center text-zion-cyan text-sm font-medium">
                          Visit Page
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Quick Navigation</h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Get to the most important pages quickly with these direct links.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`text-center p-4 bg-gradient-to-r ${link.color} rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Help Finding Something?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help you navigate 
            our platform and find the information you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium"
            >
              Contact Support
            </Link>
            <Link
              to="/help"
              className="border border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium"
            >
              Visit Help Center
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
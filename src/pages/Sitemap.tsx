import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap: React.FC = () => {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/", description: "Welcome to Zion Tech Group" },
        { name: "About Us", path: "/about", description: "Our story and mission" },
        { name: "Contact", path: "/contact", description: "Get in touch with us" },
        { name: "Pricing", path: "/pricing", description: "Our service pricing" },
        { name: "Careers", path: "/careers", description: "Join our team" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "All Services", path: "/services", description: "Complete service overview" },
        { name: "AI Solutions", path: "/services/ai", description: "Artificial Intelligence services" },
        { name: "Cloud & DevOps", path: "/services/cloud", description: "Cloud infrastructure and automation" },
        { name: "Cybersecurity", path: "/services/cybersecurity", description: "Security and threat protection" },
        { name: "IT Infrastructure", path: "/services/infrastructure", description: "Network and system management" },
        { name: "Digital Transformation", path: "/services/transformation", description: "Business process optimization" },
        { name: "Consulting", path: "/services/consulting", description: "Technology strategy and advisory" },
        { name: "Quantum Technology", path: "/quantum-technology", description: "Next-generation computing" },
        { name: "Space Tech", path: "/space-tech", description: "Space technology solutions" },
        { name: "Micro SAAS", path: "/micro-saas", description: "Scalable software solutions" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "Our Team", path: "/team", description: "Meet our experts" },
        { name: "Partners", path: "/partners", description: "Strategic partnerships" },
        { name: "Case Studies", path: "/case-studies", description: "Success stories" },
        { name: "Research & Development", path: "/research-development", description: "Innovation hub" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", path: "/blog", description: "Latest insights and news" },
        { name: "Events", path: "/events", description: "Upcoming events" },
        { name: "Webinars", path: "/webinars", description: "Educational content" },
        { name: "White Papers", path: "/white-papers", description: "Research and analysis" },
        { name: "Tutorials", path: "/tutorials", description: "Learning resources" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", path: "/help", description: "Self-service support" },
        { name: "Support Portal", path: "/support", description: "Technical support" },
        { name: "FAQ", path: "/faq", description: "Frequently asked questions" },
        { name: "Status", path: "/status", description: "Service status" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy", description: "Data protection and privacy" },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions" },
        { name: "Cookie Policy", path: "/cookies", description: "Cookie usage information" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sitemap
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through all our pages and services. Find everything you need about Zion Tech Group's 
            technology solutions, resources, and company information.
          </p>
        </div>

        {/* Sitemap Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sitemapSections.map((section) => (
            <div key={section.title} className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/20 pb-3">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.links.map((link) => (
                  <div key={link.name} className="group">
                    <Link
                      to={link.path}
                      className="block p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700/80 transition-all duration-300 border border-transparent hover:border-blue-500/30"
                    >
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 mb-2">
                        {link.name}
                      </h3>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {link.description}
                      </p>
                      <div className="mt-3 flex items-center text-blue-400 text-sm font-medium">
                        Visit Page
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="mt-16 bg-slate-800/50 rounded-xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Quick Navigation
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/contact"
              className="text-center p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="text-center p-4 bg-slate-700 rounded-lg text-white font-semibold hover:bg-slate-600 transition-all duration-300"
            >
              View Services
            </Link>
            <Link
              to="/pricing"
              className="text-center p-4 bg-slate-700 rounded-lg text-white font-semibold hover:bg-slate-600 transition-all duration-300"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-center p-4 bg-slate-700 rounded-lg text-white font-semibold hover:bg-slate-600 transition-all duration-300"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Need Help?
          </h2>
          <p className="text-gray-300 mb-8">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Contact Support
            </Link>
            <Link
              to="/help"
              className="bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300"
            >
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
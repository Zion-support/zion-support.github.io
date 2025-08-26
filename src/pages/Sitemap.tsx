import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
        { name: "AI & Analytics", path: "/services/ai-analytics", description: "Artificial Intelligence services" },
        { name: "Cybersecurity", path: "/services/cybersecurity", description: "Security and threat protection" },
        { name: "Cloud & DevOps", path: "/services/cloud-devops", description: "Cloud infrastructure and automation" },
        { name: "IoT & Edge", path: "/services/iot-edge", description: "Internet of Things solutions" },
        { name: "Quantum Computing", path: "/services/quantum-computing", description: "Next-generation computing" },
        { name: "Blockchain", path: "/services/blockchain", description: "Distributed ledger technology" },
        { name: "Digital Twin", path: "/services/digital-twin", description: "Digital replica technology" },
        { name: "Sustainability", path: "/services/sustainability", description: "Green technology solutions" },
        { name: "Green IT", path: "/green-it", description: "Environmentally friendly IT solutions" },
        { name: "IT Services", path: "/it-services", description: "Comprehensive IT solutions" },
        { name: "5G Solutions", path: "/services/5g-solutions", description: "5G network optimization" }
      ]
    },
    {
      title: "Micro SAAS",
      links: [
        { name: "AI Business Intelligence", path: "/micro-saas/ai-business-intelligence", description: "AI-powered business insights" },
        { name: "Customer Experience", path: "/micro-saas/customer-experience", description: "Customer journey optimization" },
        { name: "Quantum Computing", path: "/micro-saas/quantum-computing", description: "Quantum solutions" },
        { name: "Supply Chain", path: "/micro-saas/supply-chain", description: "Supply chain optimization" },
        { name: "Cybersecurity", path: "/micro-saas/cybersecurity", description: "Security solutions" },
        { name: "IoT Edge Computing", path: "/micro-saas/iot-edge", description: "Edge computing solutions" },
        { name: "Content Creation", path: "/micro-saas/content-creation", description: "AI content generation" },
        { name: "HR Platform", path: "/micro-saas/hr-platform", description: "Human resources management" }
      ]
    },
    {
      title: "Marketplace",
      links: [
        { name: "Products", path: "/marketplace/products", description: "Technology products" },
        { name: "Services", path: "/marketplace/services", description: "Professional services" },
        { name: "Talent", path: "/marketplace/talent", description: "Expert professionals" },
        { name: "Equipment", path: "/marketplace/equipment", description: "Hardware and equipment" },
        { name: "Categories", path: "/marketplace/categories", description: "Browse by category" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "Our Team", path: "/team", description: "Meet our experts" },
        { name: "Partners", path: "/partners", description: "Strategic partnerships" },
        { name: "Blog", path: "/blog", description: "Latest insights and news" },
        { name: "Events", path: "/events", description: "Upcoming events" },
        { name: "Leadership", path: "/leadership", description: "Company leadership" }
      ]
    },
    {
      title: "Support & Resources",
      links: [
        { name: "Help Center", path: "/help", description: "Self-service support" },
        { name: "FAQ", path: "/faq", description: "Frequently asked questions" },
        { name: "Contact Support", path: "/contact", description: "Get help from our team" },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions" },
        { name: "Privacy Policy", path: "/privacy", description: "Data protection and privacy" },
        { name: "Cookie Policy", path: "/cookies", description: "Cookie usage information" },
        { name: "Security", path: "/security", description: "Security information" },
        { name: "System Status", path: "/status", description: "Service status" }
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
                  <div key={link.path} className="group">
                    <Link
                      to={link.path}
                      className="block text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <h3 className="font-semibold text-lg group-hover:text-blue-400 transition-colors duration-200">
                        {link.name}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        {link.description}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Quick Navigation</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
            >
              Back to Home
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
            >
              View All Services
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
import React from 'react';
import { Link } from 'react-router-dom';

import { Cloud } from 'lucide-react';
const services = [];
const solutions = [];

export default function Sitemap() {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/", description: "Main landing page" },
        { name: "About Us", path: "/about", description: "Company information and mission" },
        { name: "Contact", path: "/contact", description: "Get in touch with us" },
        { name: "Blog", path: "/blog", description: "Latest news and insights" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "All Services", path: "/services", description: "Complete service overview" },
        { name: "AI Solutions", path: "/services/ai", description: "Artificial Intelligence services" },
        { name: "Cloud & DevOps", path: "/services/cloud", description: "Cloud infrastructure and automation" },
        { name: "Cybersecurity", path: "/services/cybersecurity", description: "Security and protection services" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "FAQ", path: "/faq", description: "Frequently asked questions" },
        { name: "Privacy Policy", path: "/privacy", description: "Data protection and privacy" },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Site <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Map</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
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
              <div key={sectionIndex} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="mb-6 border-b border-slate-700 pb-3">
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <div className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="group">
                      <Link
                        to={link.path}
                        className="block p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 border border-transparent hover:border-cyan-500/30"
                      >
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                          {link.name}
                        </h3>
                        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                          {link.description}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Help Finding Something?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help you navigate 
            our platform and find the information you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 font-medium"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
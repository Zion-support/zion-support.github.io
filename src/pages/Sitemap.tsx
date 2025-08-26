import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sitemap, 
  ArrowRight,
  Home,
  Users,
  Briefcase,
  Shield,
  Globe,
  FileText
} from 'lucide-react';

export default function Sitemap() {
  const siteStructure = [
    {
      title: "Main Pages",
      icon: Home,
      links: [
        { name: "Home", path: "/", description: "Main landing page" },
        { name: "About", path: "/about", description: "Company information and team" },
        { name: "Services", path: "/services", description: "Overview of our services" },
        { name: "Contact", path: "/contact", description: "Get in touch with us" }
      ]
    },
    {
      title: "Services",
      icon: Briefcase,
      links: [
        { name: "AI Solutions", path: "/services/ai", description: "Artificial intelligence services" },
        { name: "Cloud & DevOps", path: "/services/cloud", description: "Cloud infrastructure and DevOps" },
        { name: "Cybersecurity", path: "/services/cybersecurity", description: "Security solutions" },
        { name: "IT Infrastructure", path: "/services/infrastructure", description: "Infrastructure services" },
        { name: "Digital Transformation", path: "/services/transformation", description: "Business transformation" },
        { name: "Consulting", path: "/services/consulting", description: "Technology consulting" }
      ]
    },
    {
      title: "Company",
      icon: Users,
      links: [
        { name: "Careers", path: "/careers", description: "Job opportunities" },
        { name: "Solutions", path: "/solutions", description: "Industry solutions" },
        { name: "Research & Development", path: "/research-development", description: "R&D initiatives" },
        { name: "Case Studies", path: "/case-studies", description: "Success stories" },
        { name: "News", path: "/news", description: "Company updates" },
        { name: "Events", path: "/events", description: "Upcoming events" },
        { name: "Partners", path: "/partners", description: "Partnership information" }
      ]
    },
    {
      title: "Resources",
      icon: FileText,
      links: [
        { name: "Blog", path: "/blog", description: "Industry insights and articles" },
        { name: "Documentation", path: "/docs", description: "Technical documentation" },
        { name: "White Papers", path: "/white-papers", description: "Research and insights" },
        { name: "Webinars", path: "/webinars", description: "Educational webinars" },
        { name: "Training", path: "/training", description: "Training programs" }
      ]
    },
    {
      title: "Support",
      icon: Shield,
      links: [
        { name: "Help Center", path: "/help", description: "Support and help articles" },
        { name: "Support Portal", path: "/support", description: "Technical support" },
        { name: "FAQ", path: "/faq", description: "Frequently asked questions" }
      ]
    },
    {
      title: "Legal",
      icon: Globe,
      links: [
        { name: "Privacy Policy", path: "/privacy", description: "Data protection and privacy" },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions" },
        { name: "Sitemap", path: "/sitemap", description: "This page" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6">
              <Sitemap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Sitemap
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Navigate our website easily with this comprehensive site structure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteStructure.map((section, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="group/link">
                      <Link 
                        to={link.path}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group-hover/link:bg-slate-700/50"
                      >
                        <div className="flex-1">
                          <div className="text-cyan-400 font-medium group-hover/link:text-cyan-300 transition-colors">
                            {link.name}
                          </div>
                          <div className="text-sm text-gray-400 mt-1">
                            {link.description}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover/link:text-cyan-400 transition-colors" />
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Quick Navigation
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Jump to the most important pages on our website
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Home", path: "/", icon: Home },
              { name: "Services", path: "/services", icon: Briefcase },
              { name: "About", path: "/about", icon: Users },
              { name: "Contact", path: "/contact", icon: Shield }
            ].map((quickLink, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={quickLink.path}
                  className="block p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                    <quickLink.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                    {quickLink.name}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us directly and we'll help you navigate to the right information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/help"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Help Center
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
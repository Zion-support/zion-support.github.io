import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Building, 
  Cog, 
  BookOpen, 
  Shield, 
  ArrowRight,
  Search,
  Globe,
  Users,
  Rocket
} from 'lucide-react';

const Sitemap: React.FC = () => {
  const sitemapSections = [
    {
      title: "Company",
      icon: <Building className="w-6 h-6" />,
      links: [
        { name: "About Us", path: "/about", description: "Learn about Zion Tech Group" },
        { name: "Our Team", path: "/team", description: "Meet our leadership team" },
        { name: "Careers", path: "/careers", description: "Join our team" },
        { name: "Contact", path: "/contact", description: "Get in touch with us" },
        { name: "Partners", path: "/partners", description: "Strategic partnerships" }
      ]
    },
    {
      title: "Services",
      icon: <Cog className="w-6 h-6" />,
      links: [
        { name: "AI Services", path: "/services/ai", description: "Artificial Intelligence solutions" },
        { name: "Cloud Services", path: "/services/cloud", description: "Cloud computing solutions" },
        { name: "Cybersecurity", path: "/services/cybersecurity", description: "Security and compliance" },
        { name: "Digital Transformation", path: "/services/digital-transformation", description: "Business transformation" },
        { name: "Quantum Computing", path: "/services/quantum", description: "Next-gen computing" }
      ]
    },
    {
      title: "Resources",
      icon: <BookOpen className="w-6 h-6" />,
      links: [
        { name: "Blog", path: "/blog", description: "Latest insights and news" },
        { name: "Case Studies", path: "/case-studies", description: "Success stories" },
        { name: "Documentation", path: "/docs", description: "Technical documentation" },
        { name: "Support", path: "/support", description: "Help and support" },
        { name: "Training", path: "/training", description: "Professional development" }
      ]
    },
    {
      title: "Legal",
      icon: <Shield className="w-6 h-6" />,
      links: [
        { name: "Privacy Policy", path: "/privacy", description: "Data protection and privacy" },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions" },
        { name: "Cookie Policy", path: "/cookies", description: "Cookie usage information" },
        { name: "GDPR", path: "/gdpr", description: "Data protection compliance" }
      ]
    }
  ];

  const quickLinks = [
    { name: "Home", path: "/", icon: <Globe className="w-4 h-4" /> },
    { name: "Services", path: "/services", icon: <Cog className="w-4 h-4" /> },
    { name: "About", path: "/about", icon: <Building className="w-4 h-4" /> },
    { name: "Contact", path: "/contact", icon: <Users className="w-4 h-4" /> },
    { name: "Blog", path: "/blog", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Careers", path: "/careers", icon: <Rocket className="w-4 h-4" /> },
    { name: "Support", path: "/support", icon: <Shield className="w-4 h-4" /> },
    { name: "Privacy", path: "/privacy", icon: <Shield className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h1 className="futuristic-heading mb-6">
              Site <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Map</span>
            </h1>
            <p className="futuristic-text text-xl mb-8 max-w-3xl mx-auto">
              Navigate through all our pages and services. Find everything you need about Zion Tech Group's 
              technology solutions, resources, and company information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('quick-links')?.scrollIntoView({ behavior: 'smooth' })}
                className="futuristic-button inline-flex items-center"
              >
                Quick Navigation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <a
                href="/contact"
                className="futuristic-button-outline inline-flex items-center"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="futuristic-heading text-3xl lg:text-4xl mb-4">
              Complete Site Structure
            </h2>
            <p className="futuristic-text text-lg max-w-2xl mx-auto">
              Explore our comprehensive site organization and find the information you need quickly and easily.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {sitemapSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="futuristic-card"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-zion-cyan">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {section.links.map((link) => (
                    <div key={link.name} className="group">
                      <Link
                        to={link.path}
                        className="block p-4 rounded-lg bg-zion-slate-dark/50 hover:bg-zion-slate-dark/80 transition-all duration-300 border border-transparent hover:border-zion-cyan/30"
                      >
                        <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300 mb-2">
                          {link.name}
                        </h3>
                        <p className="text-sm text-zion-slate-light group-hover:text-zion-slate-lighter transition-colors duration-300">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section id="quick-links" className="py-20 bg-gradient-to-r from-zion-blue-dark/20 to-zion-purple/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="futuristic-heading text-3xl lg:text-4xl mb-4">
              Quick Navigation
            </h2>
            <p className="futuristic-text text-lg max-w-2xl mx-auto">
              Fast access to our most important pages and services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="futuristic-card p-8"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={link.path}
                      className="flex flex-col items-center p-4 rounded-lg bg-zion-slate-dark/30 hover:bg-zion-slate-dark/50 transition-all duration-300 border border-transparent hover:border-zion-cyan/30 group"
                    >
                      <div className="text-zion-cyan mb-2 group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </div>
                      <span className="text-sm font-medium text-white group-hover:text-zion-cyan transition-colors duration-300 text-center">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="futuristic-heading text-3xl lg:text-4xl mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="futuristic-text text-lg mb-8">
              Use our search functionality or contact our support team for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search our site..."
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
              <button className="futuristic-button px-8">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Need Help Navigating?
            </h2>
            <p className="text-xl text-zion-slate-lighter mb-8 max-w-2xl mx-auto">
              Our team is here to help you find the information you need and guide you through our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="futuristic-button inline-flex items-center"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/support"
                className="futuristic-button-outline inline-flex items-center"
              >
                Support Center
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;

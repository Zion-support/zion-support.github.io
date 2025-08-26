import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Sitemap: React.FC = () => {
  const sitemapStructure = [
    {
      title: "Main Pages",
      pages: [
        { name: "Home", path: "/", description: "Main landing page" },
        { name: "About", path: "/about", description: "Company information and team" },
        { name: "Contact", path: "/contact", description: "Get in touch with us" },
        { name: "Careers", path: "/careers", description: "Job opportunities" }
      ]
    },
    {
      title: "Services",
      pages: [
        { name: "Services Overview", path: "/services", description: "All our services" },
        { name: "AI Solutions", path: "/services/ai", description: "Artificial Intelligence services" },
        { name: "Cloud & DevOps", path: "/services/cloud", description: "Cloud infrastructure and automation" },
        { name: "Cybersecurity", path: "/services/cybersecurity", description: "Security and threat protection" },
        { name: "IT Infrastructure", path: "/services/infrastructure", description: "Infrastructure management" },
        { name: "Digital Transformation", path: "/services/transformation", description: "Business transformation" },
        { name: "Consulting", path: "/services/consulting", description: "Technology consulting" },
        { name: "Micro SAAS", path: "/services-showcase", description: "Software as a Service solutions" }
      ]
    },
    {
      title: "Resources",
      pages: [
        { name: "Blog", path: "/blog", description: "Latest insights and articles" },
        { name: "Case Studies", path: "/case-studies", description: "Success stories and examples" },
        { name: "Partners", path: "/partners", description: "Strategic partnerships" },
        { name: "Documentation", path: "/docs", description: "Technical documentation and guides" },
        { name: "White Papers", path: "/white-papers", description: "In-depth research papers" },
        { name: "Webinars", path: "/webinars", description: "Educational webinars" },
        { name: "Events", path: "/events", description: "Upcoming events and conferences" },
        { name: "Research & Development", path: "/research-development", description: "R&D initiatives" }
      ]
    },
    {
      title: "Support & Legal",
      pages: [
        { name: "Help Center", path: "/help", description: "Support and assistance" },
        { name: "Support Portal", path: "/support", description: "Technical support" },
        { name: "Training", path: "/training", description: "Training programs" },
        { name: "FAQ", path: "/faq", description: "Frequently asked questions" },
        { name: "Privacy Policy", path: "/privacy", description: "Data protection and privacy" },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions" },
        { name: "Cookie Policy", path: "/cookies", description: "Cookie usage information" }
      ]
    },
    {
      title: "Specialized Solutions",
      pages: [
        { name: "Quantum Technology", path: "/quantum-technology", description: "Quantum computing solutions" },
        { name: "Space Tech", path: "/space-tech", description: "Space technology innovations" },
        { name: "Green IT", path: "/green-it", description: "Sustainable technology solutions" },
        { name: "Financial Solutions", path: "/financial-solutions", description: "Fintech and financial services" },
        { name: "Mobile Solutions", path: "/mobile", description: "Mobile app development" }
      ]
    }
  ];

  const quickLinks = [
    { name: "Get Started", path: "/contact", category: "Action" },
    { name: "Request Quote", path: "/request-quote", category: "Business" },
    { name: "View Pricing", path: "/pricing", category: "Business" },
    { name: "Latest News", path: "/news", category: "Information" },
    { name: "Join Our Team", path: "/careers", category: "Career" },
    { name: "Partner With Us", path: "/partners", category: "Business" }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group's website. Find all pages, services, and resources organized by category for easy navigation." />
        <meta name="keywords" content="sitemap, website navigation, Zion Tech Group, site structure" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Complete
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Sitemap</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Navigate our website easily with this comprehensive sitemap. Find all pages, services, 
              and resources organized by category for your convenience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
                <span className="text-white font-semibold">Organized by Category</span>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
                <span className="text-white font-semibold">Easy Navigation</span>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg px-6 py-3">
                <span className="text-white font-semibold">Complete Coverage</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Quick Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      link.category === 'Action' ? 'text-green-400 bg-green-400/10' :
                      link.category === 'Business' ? 'text-blue-400 bg-blue-400/10' :
                      link.category === 'Information' ? 'text-yellow-400 bg-yellow-400/10' :
                      'text-purple-400 bg-purple-400/10'
                    }`}>
                      {link.category}
                    </span>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {link.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Main Sitemap */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Complete Site Structure
            </h2>
            <div className="space-y-12">
              {sitemapStructure.map((section) => (
                <div key={section.title} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                    {section.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.pages.map((page) => (
                      <Link
                        key={page.path}
                        to={page.path}
                        className="group p-4 rounded-lg hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20"
                      >
                        <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                          {page.name}
                        </h4>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          {page.description}
                        </p>
                        <div className="flex items-center mt-3 text-blue-400 group-hover:text-blue-300 transition-colors">
                          <span className="text-sm">Visit Page</span>
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Additional Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8">
                <h3 className="text-xl font-bold text-white mb-4">XML Sitemap</h3>
                <p className="text-gray-400 mb-4">
                  For search engines and developers, we provide an XML sitemap with all our pages.
                </p>
                <a
                  href="/sitemap.xml"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View XML Sitemap
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8">
                <h3 className="text-xl font-bold text-white mb-4">Search Functionality</h3>
                <p className="text-gray-400 mb-4">
                  Can't find what you're looking for? Use our search feature to locate specific content.
                </p>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search our website..."
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                  <button className="absolute right-3 top-3 text-gray-400 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl border border-white/10 p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Need Help Finding Something?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                If you can't find what you're looking for in our sitemap, our team is here to help. 
                Contact us for assistance or to learn more about our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </Link>
                <Link
                  to="/help"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Help Center
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-gray-400 mt-2">
              This sitemap is regularly updated to reflect the current structure of our website.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sitemap;
import Head from 'next/head';
import Link from 'next/link';

const Sitemap: React.FC = () => {
  const sitemapData = {
    main: {
      title: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About Us', path: '/about', description: 'Company information and team' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Blog', path: '/blog', description: 'Latest news and insights' },
        { name: 'Pricing', path: '/pricing', description: 'Service pricing information' },
        { name: 'Request Quote', path: '/request-quote', description: 'Get a custom quote' }
      ]
    },
    services: {
      title: 'Services',
      icon: Settings,
      pages: [
        { name: 'All Services', path: '/services', description: 'Complete service overview' },
        { name: 'Micro SAAS Services', path: '/micro-saas-services', description: 'Specialized software solutions' },
        { name: 'AI & Machine Learning', path: '/ai-services', description: 'Artificial intelligence solutions' },
        { name: 'Cloud & DevOps', path: '/cloud-devops-solutions', description: 'Infrastructure and automation' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security and compliance' },
        { name: 'Enterprise Solutions', path: '/enterprise-solutions', description: 'Large-scale business solutions' },
        { name: 'IT Onsite Services', path: '/it-onsite-services', description: 'On-site technical support' }
      ]
    },
    solutions: {
      title: 'Solutions',
      icon: Rocket,
      pages: [
        { name: 'AI Business Solutions', path: '/ai-business-solutions', description: 'AI-powered business tools' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization' },
        { name: 'Industry Solutions', path: '/industry-solutions', description: 'Sector-specific solutions' },
        { name: 'Green IT', path: '/green-it', description: 'Sustainable technology' },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', description: 'Next-gen connectivity' }
      ]
    },
    marketplace: {
      title: 'Marketplace',
      icon: Globe,
      pages: [
        { name: 'Talent Directory', path: '/talent', description: 'Find skilled professionals' },
        { name: 'Equipment', path: '/equipment', description: 'Technology hardware and tools' },
        { name: 'Categories', path: '/categories', description: 'Browse by category' },
        { name: 'AI Matcher', path: '/match', description: 'AI-powered matching service' }
      ]
    },
    company: {
      title: 'Company',
      icon: Building2,
      pages: [
        { name: 'Partners', path: '/partners', description: 'Strategic partnerships' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
        { name: 'Community', path: '/community', description: 'Join our community' }
      ]
    },
    legal: {
      title: 'Legal & Support',
      icon: Shield,
      pages: [
        { name: 'Terms of Service', path: '/terms', description: 'Service terms and conditions' },
        { name: 'Privacy Policy', path: '/privacy', description: 'Data protection and privacy' },
        { name: 'Sitemap', path: '/sitemap', description: 'Complete site structure' }
      ]
    },
    auth: {
      title: 'Authentication',
      icon: Users,
      pages: [
        { name: 'Login', path: '/login', description: 'User authentication' },
        { name: 'Sign Up', path: '/signup', description: 'Create new account' },
        { name: 'Talent Sign Up', path: '/signup/talent', description: 'Join as professional' },
        { name: 'Client Sign Up', path: '/signup/client', description: 'Join as business' }
      ]
    }
  ];
import { AppLayout } from "@/layout/AppLayout";
import { AppHeader } from "@/layout/AppHeader";
import { Footer } from "@/components/Footer";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { completeSitemap } from "@/config/sitemap";
import { Link } from "react-router-dom";
import { AppLayout } from "@/layout";

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
import { 
  MapIcon, 
  CogIcon, 
  CubeIcon, 
  ShieldCheckIcon,
  RocketLaunchIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const Sitemap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Site <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Map</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Navigate through our comprehensive website structure to find exactly what you're looking for.
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
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
            >
              Contact Us
            </Link>
            <Link 
              to="/faq" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(sitemapData).map(([key, section]) => (
              <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center mb-6">
                  <section.icon className="w-8 h-8 text-zion-cyan mr-3" />
                  <h2 className="text-xl font-bold text-white">{section.title}</h2>
                </div>
                
                <div className="space-y-3">
                  {section.pages.map((page, index) => (
                    <div key={index} className="border-l-2 border-zion-cyan/30 pl-4">
                      <Link 
                        to={page.path}
                        className="block text-zion-cyan hover:text-zion-cyan-light font-medium mb-1 transition-colors"
                      >
                        {page.name}
                      </Link>
                      <p className="text-zion-slate-light text-sm">
                        {page.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Quick Navigation</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 mb-4">
                <Brain className="w-12 h-12 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">AI Services</h3>
                <p className="text-zion-slate-light text-sm mb-4">
                  Explore our artificial intelligence solutions
                </p>
                <Link 
                  to="/ai-services"
                  className="inline-block bg-zion-cyan hover:bg-zion-cyan-light text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 mb-4">
                <Cloud className="w-12 h-12 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Cloud Solutions</h3>
                <p className="text-zion-slate-light text-sm mb-4">
                  Modern cloud infrastructure and DevOps
                </p>
                <Link 
                  to="/cloud-devops-solutions"
                  className="inline-block bg-zion-cyan hover:bg-zion-cyan-light text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 mb-4">
                <Lock className="w-12 h-12 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
                <p className="text-zion-slate-light text-sm mb-4">
                  Comprehensive cybersecurity services
                </p>
                <Link 
                  to="/cybersecurity"
                  className="inline-block bg-zion-cyan hover:bg-zion-cyan-light text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 mb-4">
                <Zap className="w-12 h-12 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Micro SAAS</h3>
                <p className="text-zion-slate-light text-sm mb-4">
                  Specialized software solutions
                </p>
                <Link 
                  to="/micro-saas-services"
                  className="inline-block bg-zion-cyan hover:bg-zion-cyan-light text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you navigate our services and find the perfect solution for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-zion-cyan hover:bg-zion-slate-light px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              to="/faq" 
              className="border border-white text-white hover:bg-white hover:text-zion-cyan px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
    <AppLayout>
    <>
      <SEO
        title="Sitemap | Zion AI Marketplace"
        description="Human readable sitemap for all public routes"
        keywords="sitemap, navigation"
        canonical="https://ziontechgroup.com/sitemap"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        title="Sitemap | Zion Tech Group"
        description="Human readable sitemap for all public routes"
        keywords="sitemap, navigation"
        canonical="https://ziontechgroup.com/sitemap"
      />
      <AppHeader />
      <main className="min-h-screen bg-background pt-16 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-white">Site Map</h1>
            <p className="text-zion-slate-light mb-8 text-lg">
              Navigate through all our services, pages, and resources
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-zion-cyan">Main Pages</h2>
                <ul className="space-y-2">
                  {completeSitemap.filter(route => 
                    ['/', '/about', '/contact', '/careers', '/partners'].includes(route.path)
                  ).map(route => (
                    <li key={route.path}>
                      <Link to={route.path} className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        {route.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-zion-cyan">Services</h2>
                <ul className="space-y-2">
                  {completeSitemap.filter(route => 
                    ['/services', '/it-onsite-services', '/green-it', '/zion-hire-ai'].includes(route.path)
                  ).map(route => (
                    <li key={route.path}>
                      <Link to={route.path} className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        {route.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-zion-cyan">Marketplace</h2>
                <ul className="space-y-2">
                  {completeSitemap.filter(route => 
                    ['/marketplace', '/talent', '/equipment', '/categories'].includes(route.path)
                  ).map(route => (
                    <li key={route.path}>
                      <Link to={route.path} className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                        {route.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
        canonical="https://ziontechgroup.com/sitemap"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Sitemap</h1>
          <ul className="space-y-2">
            {completeSitemap.map(route => (
              <li key={route.path}>
                <Link to={route.path} className="text-zion-cyan hover:underline">
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Sitemap;

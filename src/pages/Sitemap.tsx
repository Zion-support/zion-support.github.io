<<<<<<< HEAD
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
=======
<<<<<<< HEAD
import React from 'react';
import {SEO } from '@/components/SEO';

export default function Sitemap() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO title="Sitemap - Zion Tech Group" description="Professional Sitemap services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Sitemap</h1>
        <p className="text-gray-300 text-lg">
          Professional Sitemap services to help your business grow.
        </p>
      </div>
    </div>
=======
<<<<<<< HEAD
import React from &apos;react';
import { motion } from &apos;framer-motion';
import { SEO } from &apos;../components/SEO';
>>>>>>> main
import { 
  Globe, ArrowRight, ExternalLink, Search, 
  Users, Code, Shield, Brain, Atom, Rocket
} from &apos;lucide-react';&apos;&apos;

export default function Sitemap() {}
  const siteStructure = [
    ;{
      title: &quot;Main Pages&quot;,
      pages: [
        { nam,e: &quot;Home&quot;, url: &quot;/&quot;, description: &quot;Welcome to Zion Tech Group&quot; },
        { name: &quot;About&quot;, url: &quot;/about&quot;, description: &quot;Learn about our company and mission&quot; },
        { name: &quot;Services&quot;, url: &quot;/services&quot;, description: &quot;Our comprehensive technology services&quot; },
        { name: &quot;Contact&quot;, url: &quot;/contact&quot;, description: &quot;Get in touch with our team&quot; }
      ]
    },
    {
      title: &quot;AI Services&quot;,
      pages: [
        { nam,e: &quot;AI Services Overview&quot;, url: &quot;/ai-services&quot;, description: &quot;Comprehensive AI solutions&quot; },
        { name: &quot;AI Content Generator&quot;, url: &quot;/services/ai-content-generator&quot;, description: &quot;AI-powered content creation&quot; },
        { name: &quot;AI Project Management&quot;, url: &quot;/services/ai-project-management&quot;, description: &quot;AI-driven project optimization&quot; },
        { name: &quot;AI Business Intelligence&quot;, url: &quot;/services/ai-business-intelligence&quot;, description: &quot;Advanced analytics & ML insights&quot; }
      ]
    },
    {
      title: &quot;Quantum Computing&quot;,
      pages: [
        { nam,e: &quot;Quantum Computing Solutions&quot;, url: &quot;/services/quantum-computing&quot;, description: &quot;Next-generation computing power&quot; },
        { name: &quot;Quantum AI Platform&quot;, url: &quot;/services/quantum-ai-hybrid-platform&quot;, description: &quot;Revolutionary quantum-AI computing&quot; },
        { name: &quot;Quantum Financial Trading&quot;, url: &quot;/services/ai-quantum-financial-trading-platform&quot;, description: &quot;Advanced quantum trading&quot; },
        { name: &quot;Quantum Machine Learning&quot;, url: &quot;/services/quantum-machine-learning&quot;, description: &quot;Quantum-enhanced ML algorithms&quot; }
      ]
    },
    {
      title: &quot;Cybersecurity&quot;,
      pages: [
        { nam,e: &quot;AI Cybersecurity Platform&quot;, url: &quot;/services/ai-cybersecurity-platform&quot;, description: &quot;Advanced AI-powered security&quot; },
        { name: &quot;Security Headers & CSP&quot;, url: &quot;/services/security-headers-csp&quot;, description: &quot;Web security hardening&quot; },
        { name: &quot;DSR Privacy Portal&quot;, url: &quot;/services/dsr-portal&quot;, description: &quot;GDPR/CCPA compliance&quot; },
        { name: &quot;Zero Trust Network Access&quot;, url: &quot;/services/zero-trust-network-access&quot;, description: &quot;Modern security architecture&quot; }
      ]
    },
    {
      title: &quot;Company&quot;,
      pages: [
        { nam,e: &quot;Our Team&quot;, url: &quot;/team&quot;, description: &quot;Meet our expert professionals&quot; },
        { name: &quot;Partners&quot;, url: &quot;/partners&quot;, description: &quot;Strategic partnerships&quot; },
        { name: &quot;Careers&quot;, url: &quot;/careers&quot;, description: &quot;Join our growing team&quot; },
        { name: &quot;News&quot;, url: &quot;/news&quot;, description: &quot;Company announcements&quot; }
      ]
    },
    {
      title: &quot;Resources&quot;,
      pages: [
        { nam,e: &quot;Blog&quot;, url: &quot;/blog&quot;, description: &quot;Latest insights and updates&quot; },
        { name: &quot;Documentation&quot;, url: &quot;/documentation&quot;, description: &quot;Technical guides and API reference&quot; },
        { name: &quot;Help Center&quot;, url: &quot;/help&quot;, description: &quot;Find answers and solutions&quot; },
        { name: &quot;Webinars&quot;, url: &quot;/webinars&quot;, description: &quot;Educational sessions&quot; },
        { name: &quot;Training&quot;, url: &quot;/training&quot;, description: &quot;Skill development programs&quot; },
        { name: &quot;Research&quot;, url: &quot;/research&quot;, description: &quot;Our research initiatives&quot; }
      ]
    },
    {
      title: &quot;Marketplace&quot;,
      pages: [
        { nam,e: &quot;Marketplace&quot;, url: &quot;/marketplace&quot;, description: &quot;Explore products and services&quot; },
        { name: &quot;AI Tools&quot;, url: &quot;/marketplace/ai-tools&quot;, description: &quot;AI-powered applications&quot; },
        { name: &quot;Micro SaaS&quot;, url: &quot;/micro-saas&quot;, description: &quot;Curated micro SaaS solutions&quot; },
        { name: &quot;IT Services&quot;, url: &quot;/it-services&quot;, description: &quot;Enterprise IT offerings&quot; }
      ]
    },
    {
      title: &quot;Legal & Support&quot;,
      pages: [
        { nam,e: &quot;Privacy Policy&quot;, url: &quot;/privacy&quot;, description: &quot;How we protect your data&quot; },
        { name: &quot;Terms of Service&quot;, url: &quot;/terms&quot;, description: &quot;Terms and conditions&quot; },
        { name: &quot;Cookie Policy&quot;, url: &quot;/cookies&quot;, description: &quot;Cookie usage information&quot; },
        { name: &quot;FAQ&quot;, url: &quot;/faq&quot;, description: &quot;Frequently asked questions&quot; },
        { name: &quot;System Status&quot;, url: &quot;/system-status&quot;, description: &quot;Service availability&quot; }
      ]
    }
  ];&quot;&quot;

  const quickLinks = [
    { name: &quot;Get Started&quot;, url: &quot;/contact&quot;, icon: ArrowRight },
    { name: &quot;View Services&quot;, url: &quot;/services&quot;, icon: Code },
    { name: &quot;Meet Our Team&quot;, url: &quot;/team&quot;, icon: Users },
    { name: &quot;Read Our Blog&quot;, url: &quot;/blog&quot;, icon: Brain }
  ];

  return (&quot;
    <>
      <SEO 
        title=&quot;Sitemap - Zion Tech Group | Complete Site Navigation&quot;
        description=&quot;Navigate Zion Tech Group&apos;s website with our comprehensive sitemap. Find all pages, services, and resources organized by category.&quot;
        keywords=&quot;sitemap, navigation, site map, pages, Zion Tech Group, website structure&quot;
      />&quot;
=======
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ;
  Globe, ArrowRight, ExternalLink, Search, ;
  Users, Code, Shield, Brain, Atom, Rocket;
} from 'lucide-react';
<<<<<<< HEAD
;
export default function Sitemap() {;
  const siteStructure = [;
    {;
      title: "Main Pages",;
      pages: [;
        { name: "Home", url: "/", description: "Welcome to Zion Tech Group" },;
        { name: "About", url: "/about", description: "Learn about our company and mission" },;
        { name: "Services", url: "/services", description: "Our comprehensive technology services" },;
        { name: "Contact", url: "/contact", description: "Get in touch with our team" }
      ];
    },;
    {;
      title: "AI Services",;
      pages: [;
        { name: "AI Services Overview", url: "/ai-services", description: "Comprehensive AI solutions" },;
        { name: "AI Content Generator", url: "/services/ai-content-generator", description: "AI-powered content creation" },;
        { name: "AI Project Management", url: "/services/ai-project-management", description: "AI-driven project optimization" },;
        { name: "AI Business Intelligence", url: "/services/ai-business-intelligence", description: "Advanced analytics & ML insights" }
      ];
    },;
    {;
      title: "Quantum Computing",;
      pages: [;
        { name: "Quantum Computing Solutions", url: "/services/quantum-computing", description: "Next-generation computing power" },;
        { name: "Quantum AI Platform", url: "/services/quantum-ai-hybrid-platform", description: "Revolutionary quantum-AI computing" },;
        { name: "Quantum Financial Trading", url: "/services/ai-quantum-financial-trading-platform", description: "Advanced quantum trading" },;
        { name: "Quantum Machine Learning", url: "/services/quantum-machine-learning", description: "Quantum-enhanced ML algorithms" }
      ];
    },;
    {;
      title: "Cybersecurity",;
      pages: [;
        { name: "AI Cybersecurity Platform", url: "/services/ai-cybersecurity-platform", description: "Advanced AI-powered security" },;
        { name: "Security Headers & CSP", url: "/services/security-headers-csp", description: "Web security hardening" },;
        { name: "DSR Privacy Portal", url: "/services/dsr-portal", description: "GDPR/CCPA compliance" },;
        { name: "Zero Trust Network Access", url: "/services/zero-trust-network-access", description: "Modern security architecture" }
      ];
    },;
    {;
      title: "Company",;
      pages: [;
        { name: "Our Team", url: "/team", description: "Meet our expert professionals" },;
        { name: "Partners", url: "/partners", description: "Strategic partnerships" },;
        { name: "Careers", url: "/careers", description: "Join our growing team" },;
        { name: "News", url: "/news", description: "Company announcements" }
      ];
    },;
    {;
      title: "Resources",;
      pages: [;
        { name: "Blog", url: "/blog", description: "Latest insights and updates" },;
        { name: "Documentation", url: "/documentation", description: "Technical guides and API reference" },;
        { name: "Help Center", url: "/help", description: "Find answers and solutions" },;
        { name: "Webinars", url: "/webinars", description: "Educational sessions" },;
        { name: "Training", url: "/training", description: "Skill development programs" },;
        { name: "Research", url: "/research", description: "Our research initiatives" }
      ];
    },;
    {;
      title: "Marketplace",;
      pages: [;
        { name: "Marketplace", url: "/marketplace", description: "Explore products and services" },;
        { name: "AI Tools", url: "/marketplace/ai-tools", description: "AI-powered applications" },;
        { name: "Micro SaaS", url: "/micro-saas", description: "Curated micro SaaS solutions" },;
        { name: "IT Services", url: "/it-services", description: "Enterprise IT offerings" }
      ];
    },;
    {;
      title: "Legal & Support",;
      pages: [;
        { name: "Privacy Policy", url: "/privacy", description: "How we protect your data" },;
        { name: "Terms of Service", url: "/terms", description: "Terms and conditions" },;
        { name: "Cookie Policy", url: "/cookies", description: "Cookie usage information" },;
        { name: "FAQ", url: "/faq", description: "Frequently asked questions" },;
=======
export default function Sitemap() {
  const siteStructure = [
<<<<<<< HEAD
    { title: "Main Pages", pages: [
=======
<<<<<<< HEAD
    {
=======
  {
>>>>>>> main
      title: "Main Pages", pages: [
>>>>>>> main
        { name: "Home", url: "/", description: "Welcome to Zion Tech Group" },
        { name: "About", url: "/about", description: "Learn about our company and mission" }, { name: "Services", url: "/services", description: "Our comprehensive technology services" },
        { name: "Contact", url: "/contact", description: "Get in touch with our team" }
      ]
    }, { title: "AI Services",
      pages: [
        { name: "AI Services Overview", url: "/ai-services", description: "Comprehensive AI solutions" }, { name: "AI Content Generator", url: "/services/ai-content-generator", description: "AI-powered content creation" },
        { name: "AI Project Management", url: "/services/ai-project-management", description: "AI-driven project optimization" }, { name: "AI Business Intelligence", url: "/services/ai-business-intelligence", description: "Advanced analytics & ML insights" }
      ]
    }, { title: "Quantum Computing",
      pages: [
        { name: "Quantum Computing Solutions", url: "/services/quantum-computing", description: "Next-generation computing power" }, { name: "Quantum AI Platform", url: "/services/quantum-ai-hybrid-platform", description: "Revolutionary quantum-AI computing" },
        { name: "Quantum Financial Trading", url: "/services/ai-quantum-financial-trading-platform", description: "Advanced quantum trading" }, { name: "Quantum Machine Learning", url: "/services/quantum-machine-learning", description: "Quantum-enhanced ML algorithms" }
      ]
    }, { title: "Cybersecurity",
      pages: [
        { name: "AI Cybersecurity Platform", url: "/services/ai-cybersecurity-platform", description: "Advanced AI-powered security" }, { name: "Security Headers & CSP", url: "/services/security-headers-csp", description: "Web security hardening" },
        { name: "DSR Privacy Portal", url: "/services/dsr-portal", description: "GDPR/CCPA compliance" }, { name: "Zero Trust Network Access", url: "/services/zero-trust-network-access", description: "Modern security architecture" }
      ]
    }, { title: "Company",
      pages: [
        { name: "Our Team", url: "/team", description: "Meet our expert professionals" }, { name: "Partners", url: "/partners", description: "Strategic partnerships" },
        { name: "Careers", url: "/careers", description: "Join our growing team" }, { name: "News", url: "/news", description: "Company announcements" }
      ]
    }, { title: "Resources",
      pages: [
        { name: "Blog", url: "/blog", description: "Latest insights and updates" }, { name: "Documentation", url: "/documentation", description: "Technical guides and API reference" },
        { name: "Help Center", url: "/help", description: "Find answers and solutions" }, { name: "Webinars", url: "/webinars", description: "Educational sessions" },
        { name: "Training", url: "/training", description: "Skill development programs" }, { name: "Research", url: "/research", description: "Our research initiatives" }
      ]
    }, { title: "Marketplace",
      pages: [
        { name: "Marketplace", url: "/marketplace", description: "Explore products and services" }, { name: "AI Tools", url: "/marketplace/ai-tools", description: "AI-powered applications" },
        { name: "Micro SaaS", url: "/micro-saas", description: "Curated micro SaaS solutions" }, { name: "IT Services", url: "/it-services", description: "Enterprise IT offerings" }
      ]
    }, { title: "Legal & Support",
      pages: [
        { name: "Privacy Policy", url: "/privacy", description: "How we protect your data" }, { name: "Terms of Service", url: "/terms", description: "Terms and conditions" },
        { name: "Cookie Policy", url: "/cookies", description: "Cookie usage information" }, { name: "FAQ", url: "/faq", description: "Frequently asked questions" },
>>>>>>> main
        { name: "System Status", url: "/system-status", description: "Service availability" }
      ];
    }
  ];
<<<<<<< HEAD
;
  const quickLinks = [;
    { name: "Get Started", url: "/contact", icon: ArrowRight },;
    { name: "View Services", url: "/services", icon: Code },;
    { name: "Meet Our Team", url: "/team", icon: Users },;
    { name: "Read Our Blog", url: "/blog", icon: Brain }
  ];
;
  return (;
    <>;
      <SEO ;
        title="Sitemap - Zion Tech Group | Complete Site Navigation";
        description="Navigate Zion Tech Group's website with our comprehensive sitemap. Find all pages, services, and resources organized by category.";
        keywords="sitemap, navigation, site map, pages, Zion Tech Group, website structure";
      />;
      ;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto";
            >;
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
                Site Map;
              </h1>;
              <p className="text-xl text-gray-300 mb-8">;
                Navigate our website with ease. Find all pages, services, and resources ;
                organized by category for quick access.;
              </p>;
              <div className="flex items-center justify-center">;
                <Globe className="w-16 h-16 text-blue-400" />;
              </div>;
            </motion.div>;
          </div>;
        </section>;

        {/* Quick Links */}
        <section className="py-16">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12";
            >;
              <h2 className="text-4xl font-bold text-white mb-4">Quick Links</h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Popular destinations and key pages;
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
              {quickLinks.map((link, index) => (;
                <motion.a;
=======
  const quickLinks = [
<<<<<<< HEAD
    { name: "Get Started", url: "/contact", icon: ArrowRight }, { name: "View Services", url: "/services", icon: Code },
=======
  { name: "Get Started", url: "/contact", icon: ArrowRight }, { name: "View Services", url: "/services", icon: Code },
>>>>>>> main
    { name: "Meet Our Team", url: "/team", icon: Users }, { name: "Read Our Blog", url: "/blog", icon: Brain }
  ];
  return (
    <>
      <SEO 
        title="Sitemap - Zion Tech Group | Complete Site Navigation"
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
        description="Navigate Zion Tech Group&apos;s website with our comprehensive sitemap. Find all pages, services, and resources organized by category."'
        keywords="sitemap, navigation, site map, pages, Zion Tech Group, website structure"
=======
        description="Navigate Zion Tech Group's website with our comprehensive sitemap. Find all pages, services, and resources organized by category. 
        keywords='sitemap, navigation, site map, pages, Zion Tech Group, website structure"
>>>>>>> main
      />
>>>>>>> main
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>
        {/* Hero Section */}&quot;
        <section className=&quot;py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8   }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Site Map
=======
              transition={{ duration: 0.8 }}
              className=&quot;text-center max-w-4xl mx-auto&quot;
            >&quot;
              <h1 className=&quot;text-5xl md:text-6xl font-bold text-white mb-6&quot;>
                Site Map&quot;
>>>>>>> main
              </h1>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Navigate our website with ease. Find all pages, services, and resources 
                organized by category for quick access.&quot;
              </p>
              <div className=&quot;flex items-center justify-center&quot;>&quot;"
                <Globe className=&quot;w-16 h-16 text-blue-400&quot; />&quot;
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className=&quot;py-16&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8   }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Quick Links</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Popular destinations and key pages
=======
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-12&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Quick Links&quot;</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Popular destinations and key pages&quot;
>>>>>>> main
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-4 gap-6&quot;>
              {quickLinks.map((link, index) => (&quot;}
                <motion.a
>>>>>>> main
                  key={link.name}
                  href={link.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 text-center";
                >;
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">;
                    <link.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <h3 className="text-lg font-bold text-white">{link.name}</h3>;
                </motion.a>;
=======
                  className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hove,r:scale-105 text-center&quot;
                >&quot;
                  <div className=&quot;w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4&quot;>&quot;"
                    <link.icon className=&quot;w-6 h-6 text-white&quot; />&quot;
                  </div>
                  <h3 className=&quot;text-lg font-bold text-white&quot;>{link.name}&quot;</h3>
                </motion.a>
>>>>>>> main
              ))}
            </div>;
          </div>;
        </section>;

        {/* Site Structure */}
<<<<<<< HEAD
        <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12";
            >;
              <h2 className="text-4xl font-bold text-white mb-4">Complete Site Structure</h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                All pages organized by category for easy navigation;
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">;
              {siteStructure.map((section, sectionIndex) => (;
                <motion.div;
=======
        <section className=&quot;py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8   }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Complete Site Structure</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All pages organized by category for easy navigation
=======
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-12&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Complete Site Structure&quot;</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                All pages organized by category for easy navigation&quot;
>>>>>>> main
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 x,l:grid-cols-4 gap-8&quot;>
              {siteStructure.map((section, sectionIndex) => (&quot;}
                <motion.div
>>>>>>> main
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
<<<<<<< HEAD
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50";
                >;
                  <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>;
                  <div className="space-y-3">;
                    {section.pages.map((page, pageIndex) => (;
                      <div key={pageIndex} className="border-b border-slate-600/30 pb-3 last:border-b-0">;
                        <a;
                          href={page.url}
                          className="block group";
                        >;
                          <div className="flex items-start justify-between">;
                            <div className="flex-1">;
                              <h4 className="text-blue-400 group-hover:text-blue-300 transition-colors font-medium">;
                                {page.name}
                              </h4>;
                              <p className="text-gray-400 text-sm mt-1">{page.description}</p>;
                            </div>;
                            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-gray-400 transition-colors ml-2 flex-shrink-0" />;
                          </div>;
                        </a>;
                      </div>;
=======
<<<<<<< HEAD
                  className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50&quot;
                >&quot;
                  <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>{section.title}&quot;</h3>
                  <div className=&quot;space-y-3&quot;>
                    {section.pages.map((page, pageIndex) => (&quot;}
                      <div key={pageIndex} className=&quot;border-b border-slate-600/30 pb-3 last:border-b-0&quot;>&quot;"
=======
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                  <div className="space-y-3">
                    {section.pages.map((page, pageIndex) => (
                      <div key={pageIndex} className="border-b border-slate-600/30 pb-3 last: border-b-0">
>>>>>>> main
                        <a
                          href={page.url}
                          className=&quot;block group&quot;
                        >&quot;
                          <div className=&quot;flex items-start justify-between&quot;>&quot;"
                            <div className=&quot;flex-1&quot;>&quot;"
                              <h4 className=&quot;text-blue-400 group-hover:text-blue-300 transition-colors font-medium&quot;>
                                {page.name}&quot;
                              </h4>
                              <p className=&quot;text-gray-400 text-sm mt-1&quot;>{page.description}&quot;</p>
                            </div>
                            <ExternalLink className=&quot;w-4 h-4 text-gray-500 group-hover:text-gray-400 transition-colors ml-2 flex-shrink-0&quot; />&quot;
                          </div>
                        </a>
                      </div>
>>>>>>> main
                    ))}
                  </div>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* Search Section */}
<<<<<<< HEAD
        <section className="py-16">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-2xl mx-auto";
            >;
              <h2 className="text-3xl font-bold text-white mb-6">;
                Can't Find What You're Looking For?;
              </h2>;
              <p className="text-gray-300 mb-8">;
                Use our search functionality to find specific content across our website;
              </p>;
              ;
              <div className="relative">;
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
                <input;
                  type="text";
                  placeholder="Search our website...";
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
                />;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>;
=======
        <section className=&quot;py-16&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8   }}
=======
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className=&quot;text-center max-w-2xl mx-auto&quot;
            >&quot;
              <h2 className=&quot;text-3xl font-bold text-white mb-6&quot;>
                Can&apos;t Find What You&apos;re Looking For?&apos;
=======
>>>>>>> main
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Can&apos;t Find What You&apos;re Looking For?
>>>>>>> main
              </h2>
              <p className=&quot;text-gray-300 mb-8&quot;>
                Use our search&quot; functionality to find specific content across our website
              </p>
              
              <div className=&quot;relative&quot;>&quot;"
                <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />&quot;
                <input
<<<<<<< HEAD
                  type=&quot;text&quot;
                  placeholder=&quot;Search our website...&quot;
                  className=&quot;w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focu,s:border-transparent&quot;
                />&quot;
=======
                  type="text"
                  placeholder="Search our website..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
>>>>>>> main
              </div>
            </motion.div>
          </div>
        </section>
      </div>
</>
<<<<<<< HEAD
  )
=======
>>>>>>> main
>>>>>>> main
  );
>>>>>>> main
}
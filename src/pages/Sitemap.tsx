import React from 'react';
import { motion } from 'react-motion';
import { 
  Sitemap, 
  Home, 
  Users, 
  Settings, 
  Shield, 
  Brain, 
  Cloud, 
  Zap, 
  FileText, 
  Mail, 
  Phone,
  MapPin,
  ArrowRight,
  ExternalLink,
  Globe,
  Building,
  Award,
  Rocket,
  Code,
  Database,
  Lock,
  Lightbulb,
  TrendingUp,
  Newspaper,
  Megaphone,
  CheckCircle,
  Calendar,
  Download
} from 'lucide-react';

const Sitemap: React.FC = () => {
  const siteStructure = {
    main: [
      {
        title: "Home",
        path: "/",
        description: "Main landing page with company overview and key services",
        icon: <Home className="w-5 h-5" />
      },
      {
        title: "About",
        path: "/about",
        description: "Company information, mission, vision, and team details",
        icon: <Building className="w-5 h-5" />
      },
      {
        title: "Contact",
        path: "/contact",
        description: "Contact information and inquiry forms",
        icon: <Mail className="w-5 h-5" />
      }
    ],
    services: [
      {
        title: "All Services",
        path: "/services",
        description: "Comprehensive overview of all technology services",
        icon: <Settings className="w-5 h-5" />
      },
      {
        title: "AI Innovation Hub",
        path: "/ai-services-innovation-2029",
        description: "Artificial intelligence and machine learning solutions",
        icon: <Brain className="w-5 h-5" />
      },
      {
        title: "Micro SAAS Hub",
        path: "/micro-saas-innovation-hub-2029",
        description: "Micro software-as-a-service solutions and platforms",
        icon: <Code className="w-5 h-5" />
      },
      {
        title: "IT Infrastructure",
        path: "/it-infrastructure-innovation-2029",
        description: "Cloud computing, DevOps, and infrastructure services",
        icon: <Cloud className="w-5 h-5" />
      },
      {
        title: "Innovative Services Showcase",
        path: "/innovative-services-showcase-2029",
        description: "Cutting-edge technology solutions and innovations",
        icon: <Lightbulb className="w-5 h-5" />
      },
      {
        title: "Comprehensive Services",
        path: "/comprehensive-services-2029",
        description: "End-to-end technology consulting and implementation",
        icon: <Zap className="w-5 h-5" />
      },
      {
        title: "Pricing Guide",
        path: "/comprehensive-pricing-guide-2029",
        description: "Service pricing, packages, and cost information",
        icon: <TrendingUp className="w-5 h-5" />
      }
    ],
    company: [
      {
        title: "Careers",
        path: "/careers",
        description: "Job opportunities, company culture, and application process",
        icon: <Users className="w-5 h-5" />
      },
      {
        title: "News",
        path: "/news",
        description: "Company updates, press releases, and industry news",
        icon: <Newspaper className="w-5 h-5" />
      },
      {
        title: "Blog",
        path: "/blog",
        description: "Technology insights, industry trends, and expert analysis",
        icon: <FileText className="w-5 h-5" />
      }
    ],
    legal: [
      {
        title: "Privacy Policy",
        path: "/privacy",
        description: "Data collection, usage, and protection policies",
        icon: <Shield className="w-5 h-5" />
      },
      {
        title: "Terms of Service",
        path: "/terms",
        description: "Service usage terms, conditions, and user obligations",
        icon: <FileText className="w-5 h-5" />
      }
    ]
  };

  const contactInfo = {
    email: "kleber@ziontechgroup.com",
    phone: "+1 302 464 0950",
    address: "364 E Main St STE 1008, Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  const quickLinks = [
    { title: "Get Started", path: "/contact", description: "Start your project with us" },
    { title: "View Services", path: "/services", description: "Explore our service offerings" },
    { title: "Request Quote", path: "/contact", description: "Get a custom quote for your needs" },
    { title: "Support", path: "/contact", description: "Get help and technical support" }
  ];

  const renderSection = (title: string, items: any[], icon: any) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
          <div className="text-blue-600 dark:text-blue-400">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border-l-4 border-blue-200 dark:border-blue-800 pl-4 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  {item.icon}
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {item.description}
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500 dark:text-gray-500">Path:</span>
                  <code className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded">
                    {item.path}
                  </code>
                </div>
              </div>
              <a
                href={item.path}
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sitemap className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Site Map
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Navigate through all pages and sections of the Zion Tech Group website. 
              Find what you're looking for quickly and easily.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <Globe className="w-4 h-4" />
                <span>Complete Navigation</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4" />
                <span>All Pages Listed</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <ArrowRight className="w-4 h-4" />
                <span>Quick Access</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Quick Access
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Most commonly accessed pages and actions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {link.description}
                </p>
                <a
                  href={link.path}
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  <span>Go to {link.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Site Structure */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Complete Site Structure
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore all sections and pages organized by category for easy navigation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {renderSection("Main Pages", siteStructure.main, <Home className="w-6 h-6" />)}
            {renderSection("Services", siteStructure.services, <Settings className="w-6 h-6" />)}
            {renderSection("Company", siteStructure.company, <Building className="w-6 h-6" />)}
            {renderSection("Legal & Policies", siteStructure.legal, <Shield className="w-6 h-6" />)}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Get in touch with us for any questions or assistance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Primary Contact
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {contactInfo.address}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Website & Online
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <a 
                      href={contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center space-x-2"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Business Hours: Mon-Fri 9AM-6PM EST
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Response Time: Within 24 hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Need Help Finding Something?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Can't find what you're looking for? Our team is here to help you navigate 
                our website and find the information you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Support</span>
                </a>
                <a
                  href="/services"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2"
                >
                  <Settings className="w-4 h-4" />
                  <span>Browse Services</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Options */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Download Site Map
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Get a printable or downloadable version of our site map for offline reference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Download XML</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;
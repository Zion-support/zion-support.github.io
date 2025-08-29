import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Home, 
  Services, 
  About, 
  Contact, 
  ArrowRight, 
  Zap,
  Brain,
  Cloud,
  Rocket,
  MapPin,
  Phone,
  Mail,
  Globe,
  Users,
  Star,
  TrendingUp,
  Award,
  ArrowLeft,
  ExternalLink
} from 'lucide-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const popularPages = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Services', path: '/services', icon: <Services className="w-5 h-5" /> },
    { name: 'AI Services', path: '/ai-services', icon: <Brain className="w-5 h-5" /> },
    { name: 'About Us', path: '/about', icon: <About className="w-5 h-5" /> },
    { name: 'Contact', path: '/contact', icon: <Contact className="w-5 h-5" /> },
    { name: 'Blog', path: '/blog', icon: <TrendingUp className="w-5 h-5" /> }
  ];

  const popularServices = [
    { name: 'AI & Machine Learning', path: '/ai-services', icon: <Brain className="w-5 h-5" /> },
    { name: 'Cloud & DevOps', path: '/cloud-devops', icon: <Cloud className="w-5 h-5" /> },
    { name: 'Digital Transformation', path: '/digital-transformation', icon: <Rocket className="w-5 h-5" /> },
    { name: 'Cybersecurity', path: '/security', icon: <Zap className="w-5 h-5" /> }
  ];

  const quickActions = [
    { name: 'Request Quote', path: '/request-quote', icon: <Award className="w-5 h-5" /> },
    { name: 'View Case Studies', path: '/case-studies', icon: <Star className="w-5 h-5" /> },
    { name: 'Join Our Team', path: '/careers', icon: <Users className="w-5 h-5" /> },
    { name: 'Partner With Us', path: '/partners', icon: <Globe className="w-5 h-5" /> }
  ];

  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'info@ziontechgroup.com', link: 'mailto:info@ziontechgroup.com' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Address', value: '123 Tech Street, San Francisco, CA 94105', link: '#' },
    { icon: <Globe className="w-5 h-5" />, label: 'Website', value: 'ziontechgroup.com', link: 'https://ziontechgroup.com' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        {/* Main 404 Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-none">
              404
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
          >
            The page you're looking for doesn't exist or has been moved. 
            Let us help you find what you need or get back on track.
          </motion.p>

          {/* Search Bar */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onSubmit={handleSearch}
            className="max-w-md mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search our website..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-slate-600/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Search
              </button>
            </div>
          </motion.form>

          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <button
              onClick={() => navigate(-1)}
              className="px-8 py-4 bg-white/10 border border-slate-600/30 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-3 text-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </motion.div>
        </motion.div>

        {/* Helpful Navigation Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Popular Pages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-white/5 border border-slate-600/30 rounded-2xl p-6 backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Home className="w-5 h-5 text-cyan-400" />
              Popular Pages
            </h3>
            <div className="space-y-3">
              {popularPages.map((page, index) => (
                <Link
                  key={page.name}
                  to={page.path}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {page.icon}
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                    {page.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 ml-auto transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Popular Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-white/5 border border-slate-600/30 rounded-2xl p-6 backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Services className="w-5 h-5 text-blue-400" />
              Popular Services
            </h3>
            <div className="space-y-3">
              {popularServices.map((service, index) => (
                <Link
                  key={service.name}
                  to={service.path}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                    {service.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 ml-auto transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="bg-white/5 border border-slate-600/30 rounded-2xl p-6 backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-400" />
              Quick Actions
            </h3>
            <div className="space-y-3">
              {quickActions.map((action, index) => (
                <Link
                  key={action.name}
                  to={action.path}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {action.icon}
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                    {action.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-purple-400 ml-auto transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="bg-white/5 border border-slate-600/30 rounded-2xl p-8 backdrop-blur-md"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Need Help? Contact Us
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 + index * 0.1 }}
                className="text-center p-4 bg-white/5 rounded-xl border border-slate-600/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  {contact.icon}
                </div>
                <h4 className="text-white font-medium mb-2">{contact.label}</h4>
                {contact.link === '#' ? (
                  <p className="text-slate-300 text-sm">{contact.value}</p>
                ) : (
                  <a
                    href={contact.link}
                    className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-300 flex items-center justify-center gap-1"
                  >
                    {contact.value}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-300 mb-4">
              Can't find what you're looking for? Our team is here to help!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-green-500/25"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Additional Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-slate-600/30 rounded-2xl p-8 backdrop-blur-md">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Still Lost? Let's Get You Back on Track
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Our comprehensive website navigation and search tools are designed to help you find exactly what you need. 
              If you're still having trouble, our support team is just a click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/help"
                className="px-6 py-3 bg-white/10 border border-slate-600/30 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Users className="w-4 h-4" />
                Help Center
              </Link>
              <Link
                to="/sitemap"
                className="px-6 py-3 bg-white/10 border border-slate-600/30 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Globe className="w-4 h-4" />
                Site Map
              </Link>
              <Link
                to="/faq"
                className="px-6 py-3 bg-white/10 border border-slate-600/30 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Star className="w-4 h-4" />
                FAQ
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;

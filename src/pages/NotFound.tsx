import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Search, 
  ArrowLeft, 
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Globe,
  Users,
  Building,
  Lightbulb,
  Shield,
  Cloud,
  Brain,
  Zap
} from 'lucide-react';

const NotFound = () => {
  const popularPages = [
    {
      title: 'Home',
      description: 'Return to our main page',
      icon: Home,
      link: '/',
      color: 'from-zion-cyan to-zion-blue'
    },
    {
      title: 'About Us',
      description: 'Learn about Zion Tech Group',
      icon: Building,
      link: '/about',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Services',
      description: 'Explore our technology solutions',
      icon: Lightbulb,
      link: '/services',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Contact',
      description: 'Get in touch with our team',
      icon: Phone,
      link: '/contact',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Careers',
      description: 'Join our growing team',
      icon: Users,
      link: '/careers',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'News',
      description: 'Latest updates and insights',
      icon: Globe,
      link: '/news',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const serviceCategories = [
    {
      title: 'AI Solutions',
      description: 'Machine learning and artificial intelligence',
      icon: Brain,
      link: '/services/ai',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your digital assets',
      icon: Shield,
      link: '/services/cybersecurity',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure',
      icon: Cloud,
      link: '/services/cloud',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your business',
      icon: Zap,
      link: '/services/digital-transformation',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* 404 Hero Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="text-9xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent mb-4">
              404
            </div>
            <div className="text-6xl mb-4">😕</div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Page Not Found
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, we're here to help you find what you need.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-zion-cyan text-white hover:bg-zion-cyan-dark font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </motion.div>
        </div>
      </section>

      {/* Popular Pages */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Popular Pages
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularPages.map((page, index) => (
              <motion.div
                key={page.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={page.link}
                  className="block bg-zion-slate-darker rounded-2xl border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 p-6 h-full"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${page.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <page.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-zion-cyan transition-colors duration-300">
                    {page.title}
                  </h3>
                  <p className="text-zion-slate-light text-center text-sm leading-relaxed">
                    {page.description}
                  </p>
                  <div className="flex items-center justify-center mt-4">
                    <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Explore Our Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={service.link}
                  className="block bg-gradient-to-r from-zion-slate-darker to-zion-slate-dark rounded-2xl border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 p-8 h-full"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 text-center group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light text-center leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 text-zion-cyan group-hover:text-zion-cyan-light font-medium transition-colors duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan-dark to-zion-blue-dark p-12 rounded-2xl text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Try searching our website or contact our team directly. We're here to help you 
              find the information or services you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search our website..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-white/50 transition-colors duration-300"
                />
              </div>
              <button className="bg-white text-zion-blue-dark hover:bg-zion-slate-light font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zion-slate-darker p-12 rounded-2xl border border-zion-slate-light/20 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Help? Contact Us
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Our team is ready to assist you. Reach out to us through any of these channels 
              and we'll get back to you as soon as possible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
                <a 
                  href="mailto:info@ziontechgroup.com"
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                >
                  info@ziontechgroup.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
                <a 
                  href="tel:+15551234567"
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Visit Us</h3>
                <p className="text-zion-slate-light text-sm">
                  123 Technology Drive<br />
                  San Francisco, CA 94105
                </p>
              </div>
            </div>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-zion-cyan text-white hover:bg-zion-cyan-dark font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Our Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Helpful Tips */}
      <section className="px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-8 rounded-2xl border border-yellow-500/30"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Helpful Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Check the URL</h4>
                <p className="text-zion-slate-light">
                  Make sure the web address is spelled correctly. URLs are case-sensitive and 
                  must be typed exactly as shown.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Use Navigation</h4>
                <p className="text-zion-slate-light">
                  Use our main navigation menu to browse different sections of our website. 
                  This is often the easiest way to find what you need.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Search Function</h4>
                <p className="text-zion-slate-light">
                  Use the search box to find specific content, services, or information 
                  across our entire website.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Contact Support</h4>
                <p className="text-zion-slate-light">
                  If you're still having trouble, don't hesitate to contact our support team. 
                  We're here to help you navigate our website.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;

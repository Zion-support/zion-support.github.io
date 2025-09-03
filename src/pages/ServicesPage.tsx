import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Users, 
  Cpu, 
  Database, 
  Globe, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Smartphone,
  Server,
  Lock,
  BarChart3
} from 'lucide-react';
import { SEOHead } from "../components/seo/SEOHead";

const ServicesPage = () => {
  const services = [
    {
      category: 'Micro SAAS',
      icon: <Smartphone className="w-8 h-8" />,
      description: 'Innovative software-as-a-service solutions for modern businesses',
      services: [
        'AI Customer Support Automation',
        'Smart Inventory Management',
        'AI Content Generation Suite',
        'AI Email Marketing Platform',
        'Smart Scheduling Assistant'
      ],
      link: '/comprehensive-services-2025',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'IT Services',
      icon: <Server className="w-8 h-8" />,
      description: 'Comprehensive IT infrastructure and management services',
      services: [
        'Managed IT Services',
        'Cloud Migration',
        'Cybersecurity Assessment',
        'Data Backup & Recovery',
        'Infrastructure Consulting'
      ],
      link: '/comprehensive-services-2025',
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'AI Services',
      icon: <Brain className="w-8 h-8" />,
      description: 'Advanced artificial intelligence solutions and platforms',
      services: [
        'AI Business Intelligence',
        'AI Fraud Detection',
        'AI Process Automation',
        'Predictive Analytics',
        'Computer Vision Solutions'
      ],
      link: '/comprehensive-services-2025',
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Cybersecurity',
      icon: <Shield className="w-8 h-8" />,
      description: 'Comprehensive security solutions to protect your business',
      services: [
        'Network Security Audit',
        'Penetration Testing',
        'Security Compliance',
        'Threat Intelligence',
        'Incident Response'
      ],
      link: '/comprehensive-services-2025',
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Professional Technology Services - Zion Tech Group"
        description="Comprehensive technology services including micro SAAS, IT services, AI solutions, and cybersecurity. Transform your business with Zion Tech Group."
        keywords={['IT services', 'micro SAAS', 'AI solutions', 'cybersecurity', 'cloud computing', 'digital transformation']}
        canonicalUrl="https://ziontechgroup.com/services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Professional Technology
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our comprehensive suite of technology services. 
                From innovative micro SAAS solutions to advanced AI platforms, we deliver results that drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/comprehensive-services-2025" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  View All Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/contact" 
                  className="border border-gray-600 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-300">Services Available</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Expert Support</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </motion.div>
          </div>
        </div>

        {/* Services Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Service Categories</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We offer comprehensive technology solutions across multiple categories to meet all your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700 hover:border-blue-500/50"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${service.color} rounded-lg text-white mr-4`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.category}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Popular Services:</h4>
                  <ul className="space-y-2">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.link}
                  className={`inline-flex items-center bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300`}
                >
                  Explore {service.category}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We deliver exceptional results through our expertise, innovation, and commitment to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="p-4 bg-blue-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">Certified professionals with years of experience in cutting-edge technologies.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="p-4 bg-purple-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-300">Latest technologies and methodologies to keep you ahead of the competition.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="p-4 bg-green-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300">Track record of delivering measurable ROI and business transformation.</p>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our expert team help you implement the right technology solutions for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center font-semibold"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/request-quote" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center font-semibold"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Contact Information */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 bg-blue-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-purple-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-green-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
                <p className="text-gray-300">ziontechgroup.com</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
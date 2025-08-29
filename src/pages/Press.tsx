import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Newspaper, 
  Camera, 
  FileText, 
  Download, 
  ExternalLink, 
  Calendar, 
  Users, 
  Globe, 
  Award, 
  TrendingUp, 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Image,
  Video,
  FileImage,
  Building2,
  Rocket,
  Zap,
  Star
} from 'lucide-react';

const Press: React.FC = () => {
  const pressReleases = [
    {
      date: 'December 15, 2024',
      title: 'Zion Tech Group Announces Series C Funding Round of $150M',
      summary: 'Company achieves $2.4B valuation and accelerates global expansion plans',
      category: 'Funding',
      featured: true,
      readTime: '3 min read'
    },
    {
      date: 'December 10, 2024',
      title: 'Revolutionary AI Healthcare Platform Launches with FDA Clearance',
      summary: 'Breakthrough medical AI solution transforms diagnostic accuracy and patient care',
      category: 'Product Launch',
      featured: true,
      readTime: '4 min read'
    },
    {
      date: 'December 5, 2024',
      title: 'Zion Tech Group Named Market Leader in AI Business Intelligence',
      summary: 'Independent research firm recognizes company\'s dominance in enterprise AI solutions',
      category: 'Recognition',
      featured: false,
      readTime: '2 min read'
    },
    {
      date: 'November 28, 2024',
      title: 'Strategic Partnership with Global Tech Leaders Announced',
      summary: 'Collaboration expands market reach to 45+ countries worldwide',
      category: 'Partnership',
      featured: false,
      readTime: '3 min read'
    },
    {
      date: 'November 20, 2024',
      title: 'Quantum AI Cybersecurity Platform Achieves Military-Grade Certification',
      summary: 'Revolutionary security solution receives highest-level government approval',
      category: 'Security',
      featured: false,
      readTime: '3 min read'
    },
    {
      date: 'November 15, 2024',
      title: 'Digital Twin Platform Revolutionizes Manufacturing Industry',
      summary: 'Major manufacturers report 45% efficiency improvements using Zion Tech solutions',
      category: 'Innovation',
      featured: false,
      readTime: '4 min read'
    }
  ];

  const mediaResources = [
    {
      title: 'Company Logo',
      description: 'High-resolution Zion Tech Group logos in various formats',
      formats: ['SVG', 'PNG', 'JPG'],
      icon: Image,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Executive Photos',
      description: 'Professional headshots of company leadership team',
      formats: ['JPG', 'PNG'],
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Product Screenshots',
      description: 'High-quality images of our AI platforms and solutions',
      formats: ['PNG', 'JPG'],
      icon: FileImage,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Brand Guidelines',
      description: 'Complete brand identity and usage guidelines',
      formats: ['PDF'],
      icon: FileText,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Company Fact Sheet',
      description: 'Key facts and figures about Zion Tech Group',
      formats: ['PDF'],
      icon: Building2,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Product Brochures',
      description: 'Detailed product information and specifications',
      formats: ['PDF'],
      icon: Rocket,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const companyStats = [
    {
      metric: 'Founded',
      value: '2020',
      description: 'Year of establishment'
    },
    {
      metric: 'Employees',
      value: '500+',
      description: 'Global team members'
    },
    {
      metric: 'Countries',
      value: '45+',
      description: 'Markets served'
    },
    {
      metric: 'Customers',
      value: '15,000+',
      description: 'Enterprise clients'
    },
    {
      metric: 'Revenue Growth',
      value: '247%',
      description: 'Year-over-year growth'
    },
    {
      metric: 'Patents',
      value: '15+',
      description: 'AI technology patents'
    }
  ];

  const pressContact = {
    general: {
      email: 'press@ziontechgroup.com',
      phone: '+1 302 464 0950',
      address: '364 E Main St STE 1008, Middletown DE 19709'
    },
    media: {
      email: 'media@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    events: {
      email: 'events@ziontechgroup.com',
      phone: '+1 302 464 0950'
    }
  };

  return (
    <>
      <SEO 
        title="Press & Media - Zion Tech Group"
        description="Latest press releases, media resources, and press contact information for Zion Tech Group."
        keywords="press releases, media resources, press contact, company news, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                     <div className="absolute inset-0 bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=)] opacity-20"></div>
          
          <div className="container-responsive relative z-10 py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Newspaper className="w-4 h-4" />
                Press & Media
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Press & Media
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Stay updated with the latest news, press releases, and media resources from Zion Tech Group. 
                Discover how we're revolutionizing the technology landscape.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2"
                >
                  View Press Releases
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-xl hover:bg-gray-800/50 transition-all duration-300"
                >
                  Media Resources
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-16 bg-white">
          <div className="container-responsive">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={stat.metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-700 mb-1">
                    {stat.metric}
                  </div>
                  <div className="text-xs text-gray-500">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Latest Press Releases
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed about our latest announcements, product launches, and company milestones
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={release.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${
                    release.featured ? 'ring-2 ring-cyan-500/20' : ''
                  }`}
                >
                  {release.featured && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-medium rounded-full mb-4">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                      {release.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {release.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {release.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {release.summary}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {release.date}
                    </span>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Read More
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                View All Press Releases
              </motion.button>
            </div>
          </div>
        </section>

        {/* Media Resources */}
        <section className="py-24 bg-white">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Media Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Download high-quality media assets and resources for your coverage
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-700 mb-2">Available Formats:</p>
                    <div className="flex flex-wrap gap-2">
                      {resource.formats.map((format) => (
                        <span key={format} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Contact */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="container-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Press Contact
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our press team is available to assist journalists, analysts, and media professionals 
                  with inquiries, interviews, and media requests.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      General Press Inquiries
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-cyan-600" />
                        <span className="text-gray-700">{pressContact.general.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-cyan-600" />
                        <span className="text-gray-700">{pressContact.general.phone}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      Media Relations
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">{pressContact.media.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">{pressContact.media.phone}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      Event & Interview Requests
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-purple-600" />
                        <span className="text-gray-700">{pressContact.events.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-purple-600" />
                        <span className="text-gray-700">{pressContact.events.phone}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">{pressContact.general.address}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Press Inquiry Form
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Media Organization *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your media organization"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                      <option>Select inquiry type</option>
                      <option>Press Release Request</option>
                      <option>Interview Request</option>
                      <option>Media Assets</option>
                      <option>Company Information</option>
                      <option>Event Coverage</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Describe your press inquiry..."
                    />
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Submit Press Inquiry
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="container-responsive text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6">
                Stay Updated with Zion Tech Group
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Subscribe to our press releases and media updates to stay informed about our latest 
                innovations, partnerships, and company milestones.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2"
                >
                  Subscribe to Press Updates
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-xl hover:bg-gray-800/50 transition-all duration-300"
                >
                  Contact Press Team
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Press;
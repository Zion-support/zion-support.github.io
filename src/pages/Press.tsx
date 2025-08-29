import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Users, 
  TrendingUp, 
  Shield, 
  Database, 
  Network, 
  Globe, 
  Zap,
  CheckCircle,
  ArrowRight,
  Cpu,
  Brain,
  Target,
  Award,
  Star,
  Clock,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Download,
  ExternalLink
} from 'lucide-react';

const Press = () => {
  const pressReleases = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Business Intelligence Platform',
      date: '2025-01-15',
      summary: 'Company introduces cutting-edge AI solutions for enterprise transformation',
      category: 'Product Launch'
    },
    {
      title: 'Zion Tech Group Expands Global Operations with New European Office',
      date: '2024-12-10',
      summary: 'Strategic expansion to serve growing European market demand',
      category: 'Company News'
    },
    {
      title: 'Zion Tech Group Recognized as Top AI Innovation Company 2024',
      date: '2024-11-20',
      summary: 'Industry recognition for breakthrough AI technology solutions',
      category: 'Awards'
    }
  ];

  const mediaResources = [
    {
      title: 'Company Logo',
      description: 'High-resolution Zion Tech Group logos in various formats',
      format: 'PNG, SVG, EPS',
      size: '2.5 MB'
    },
    {
      title: 'Executive Headshots',
      description: 'Professional photos of company leadership team',
      format: 'JPG, PNG',
      size: '15.2 MB'
    },
    {
      title: 'Product Screenshots',
      description: 'Latest product interface and feature screenshots',
      format: 'PNG, JPG',
      size: '8.7 MB'
    },
    {
      title: 'Company Fact Sheet',
      description: 'Key facts and figures about Zion Tech Group',
      format: 'PDF',
      size: '1.2 MB'
    }
  ];

  const contactInfo = {
    pressEmail: 'press@ziontechgroup.com',
    generalEmail: 'kleber@ziontechgroup.com',
    phone: '+1 302 464 0950',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Press & Media
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Stay updated with the latest news, press releases, and media resources from Zion Tech Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Press Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#media-resources"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Download Resources
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Latest Press Releases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed about our latest announcements, product launches, and company milestones
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600 hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full mb-4">
                      {release.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">{release.title}</h3>
                    <p className="text-gray-300 mb-4">{release.summary}</p>
                  </div>
                  <div className="flex items-center text-gray-400 mb-4 md:mb-0">
                    <Calendar className="h-5 w-5 mr-2" />
                    {new Date(release.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
                >
                  Read Full Release
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section id="media-resources" className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Media Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Download high-quality media assets for your publications and coverage
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {mediaResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl p-8 border border-slate-600 hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4">
                    <Download className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{resource.title}</h3>
                    <p className="text-gray-300 text-sm">{resource.format} • {resource.size}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{resource.description}</p>
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  <Download className="h-5 w-5 mr-2" />
                  Download
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Press Inquiries
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              For media inquiries, interview requests, or additional information, please contact our press team
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-center">
                <Mail className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Press Email</h3>
                <p className="text-gray-300">{contactInfo.pressEmail}</p>
              </div>
              <div className="text-center">
                <Phone className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">{contactInfo.phone}</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Response Guarantee</h3>
              <p className="text-gray-300 mb-6">
                We commit to responding to all press inquiries within 24 hours during business days.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Press Inquiry
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Additional Contact Information</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-blue-400 mb-4" />
                <p className="text-gray-300">{contactInfo.generalEmail}</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-blue-400 mb-4" />
                <p className="text-gray-300">{contactInfo.phone}</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-blue-400 mb-4" />
                <p className="text-gray-300 text-center">{contactInfo.address}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Press;
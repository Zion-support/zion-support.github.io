import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  User,
  FileText,
  Image,
  Video,
  Globe,
  Award,
  TrendingUp,
  ExternalLink,
  ArrowRight,
  Star,
  Users,
  Zap,
  Shield
} from 'lucide-react';

export default function Press() {
  const pressReleases = [
    {
      id: 1,
      title: 'Zion Tech Group Reports Record Q4 2024 Results',
      date: '2025-01-20',
      summary: 'Company achieves 150% year-over-year growth in AI services revenue',
      category: 'Financial Results',
      url: '#'
    },
    {
      id: 2,
      title: 'New Board Member Appointment',
      date: '2025-01-18',
      summary: 'Former Google AI executive joins Zion Tech Group board of directors',
      category: 'Leadership',
      url: '#'
    },
    {
      id: 3,
      title: 'Series B Funding Round Completed',
      date: '2025-01-15',
      summary: 'Company raises $50 million to accelerate AI product development',
      category: 'Funding',
      url: '#'
    },
    {
      id: 4,
      title: 'Strategic Partnership with Microsoft Azure',
      date: '2025-01-12',
      summary: 'Collaboration to deliver enhanced cloud-based AI solutions',
      category: 'Partnerships',
      url: '#'
    },
    {
      id: 5,
      title: 'European Market Expansion',
      date: '2025-01-08',
      summary: 'New office opening in London to serve growing European client base',
      category: 'Expansion',
      url: '#'
    },
    {
      id: 6,
      title: 'AI Breakthrough in Natural Language Processing',
      date: '2025-01-05',
      summary: 'Research team achieves 40% improvement in NLP accuracy',
      category: 'Innovation',
      url: '#'
    }
  ];

  const mediaResources = [
    {
      name: 'Company Logo',
      description: 'High-resolution Zion Tech Group logos in various formats',
      formats: ['PNG', 'SVG', 'EPS'],
      size: '2.3 MB',
      icon: Image,
      downloadUrl: '#'
    },
    {
      name: 'Executive Headshots',
      description: 'Professional photos of company leadership team',
      formats: ['JPG', 'PNG'],
      size: '15.2 MB',
      icon: Users,
      downloadUrl: '#'
    },
    {
      name: 'Product Screenshots',
      description: 'High-quality screenshots of our AI platforms and solutions',
      formats: ['PNG', 'JPG'],
      size: '8.7 MB',
      icon: Zap,
      downloadUrl: '#'
    },
    {
      name: 'Company Fact Sheet',
      description: 'Key facts and statistics about Zion Tech Group',
      formats: ['PDF'],
      size: '1.1 MB',
      icon: FileText,
      downloadUrl: '#'
    },
    {
      name: 'Brand Guidelines',
      description: 'Complete brand identity and usage guidelines',
      formats: ['PDF'],
      size: '12.4 MB',
      icon: Shield,
      downloadUrl: '#'
    },
    {
      name: 'Corporate Video',
      description: 'Company overview and product demonstration videos',
      formats: ['MP4', 'MOV'],
      size: '156.8 MB',
      icon: Video,
      downloadUrl: '#'
    }
  ];

  const companyStats = [
    {
      icon: Users,
      label: 'Team Members',
      value: '150+',
      description: 'Global team across 3 continents'
    },
    {
      icon: Globe,
      label: 'Countries Served',
      value: '25+',
      description: 'International client base'
    },
    {
      icon: Award,
      label: 'Industry Awards',
      value: '12',
      description: 'Recognition for innovation'
    },
    {
      icon: TrendingUp,
      label: 'Growth Rate',
      value: '150%',
      description: 'Year-over-year revenue growth'
    }
  ];

  const contactInfo = {
    pressEmail: 'press@ziontechgroup.com',
    generalEmail: 'info@ziontechgroup.com',
    phone: '+1 302 464 0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    mediaKit: 'Download Complete Media Kit (45.2 MB)'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Press & Media
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Welcome to the Zion Tech Group press room. Find the latest news, 
              media resources, and contact information for journalists and media.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Company Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zion Tech Group is a leading technology company specializing in 
              AI-powered solutions and digital transformation services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-xl mb-4">
                  <stat.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Press Releases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Latest Press Releases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest company announcements, partnerships, 
              and achievements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                      {release.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(release.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {release.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {release.summary}
                  </p>
                  
                  <a
                    href={release.url}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-300"
                  >
                    Read Full Release
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/news"
              className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              View All Press Releases
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Media Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download high-quality media assets, logos, and brand materials 
              for your coverage of Zion Tech Group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mr-4">
                    <resource.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">{resource.size}</div>
                    <div className="text-xs text-gray-400">{resource.formats.join(', ')}</div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                
                <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Media Kit</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get everything you need in one comprehensive download. Our complete media kit 
                includes all assets, company information, and press materials.
              </p>
              <button className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                <Download className="w-5 h-5 mr-2" />
                {contactInfo.mediaKit}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2020, Zion Tech Group emerged from a vision to democratize 
              artificial intelligence and make cutting-edge technology accessible to 
              businesses of all sizes. What started as a small team of AI researchers 
              and engineers has grown into a global technology company serving clients 
              across 25+ countries.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our mission is to accelerate digital transformation through innovative 
              AI solutions that drive real business value. We believe that artificial 
              intelligence should be a force for good, helping organizations become 
              more efficient, sustainable, and competitive in an increasingly digital world.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Today, Zion Tech Group is recognized as a leader in AI-powered business 
              solutions, with a team of 150+ experts across three continents. We continue 
              to push the boundaries of what's possible with AI, while maintaining our 
              commitment to ethical technology development and responsible innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Media Contact
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              For media inquiries, interview requests, or additional information, 
              please contact our press team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-indigo-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Press Email</h3>
                <p className="text-indigo-600 font-medium">{contactInfo.pressEmail}</p>
                <p className="text-gray-500 text-sm mt-1">For media inquiries</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-indigo-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-indigo-600 font-medium">{contactInfo.phone}</p>
                <p className="text-gray-500 text-sm mt-1">Available during business hours</p>
              </div>
            </div>
            
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Response Time</h3>
              <p className="text-gray-600 mb-4">
                We typically respond to media inquiries within 2-4 hours during business days. 
                For urgent requests, please call us directly.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>Business Hours: Monday - Friday, 9:00 AM - 6:00 PM EST</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Cover Our Story?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Whether you're writing about AI innovation, digital transformation, 
              or technology trends, we're here to help with your coverage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.pressEmail}`}
                className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Press Team
              </a>
              
              <a
                href="/about"
                className="inline-flex items-center px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors duration-300"
              >
                <FileText className="w-5 h-5 mr-2" />
                Learn More About Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

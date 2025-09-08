import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Newspaper, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  ExternalLink,
  FileText,
  Image,
  Video,
  Users,
  Award,
  TrendingUp,
  Globe,
  Star
} from 'lucide-react';

const Press = () => {
  const pressReleases = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Compliance Platform',
      date: '2024-01-15',
      summary: 'New AI Compliance Copilot platform revolutionizes regulatory compliance with machine learning and natural language processing.',
      category: 'Product Launch',
      readMore: '/press/ai-compliance-platform-launch'
    },
    {
      title: 'Zion Tech Group Secures $25M Series A Funding Round',
      date: '2023-12-10',
      summary: 'Strategic investment to accelerate AI innovation and expand global market presence.',
      category: 'Company News',
      readMore: '/press/series-a-funding-announcement'
    },
    {
      title: 'Zion Tech Group Named Top AI Company by TechCrunch',
      date: '2023-11-28',
      summary: 'Recognition for breakthrough innovations in AI-powered business solutions.',
      category: 'Awards',
      readMore: '/press/techcrunch-top-ai-company'
    },
    {
      title: 'Partnership with Microsoft Azure for Enterprise AI Solutions',
      date: '2023-10-15',
      summary: 'Strategic partnership to deliver AI solutions on Microsoft\'s cloud platform.',
      category: 'Partnerships',
      readMore: '/press/microsoft-azure-partnership'
    },
    {
      title: 'Zion Tech Group Expands to European Market',
      date: '2023-09-20',
      summary: 'New office in London to serve growing European demand for AI solutions.',
      category: 'Company News',
      readMore: '/press/european-expansion'
    },
    {
      title: 'Healthcare AI Platform Achieves FDA Approval',
      date: '2023-08-12',
      summary: 'AI-powered diagnostic platform receives regulatory approval for clinical use.',
      category: 'Regulatory',
      readMore: '/press/fda-approval-healthcare-ai'
    }
  ];

  const mediaResources = [
    {
      title: 'Company Logo',
      description: 'High-resolution Zion Tech Group logo in various formats',
      formats: ['PNG', 'SVG', 'EPS'],
      download: '/media/zion-tech-group-logo.zip'
    },
    {
      title: 'Executive Headshots',
      description: 'Professional photos of leadership team members',
      formats: ['JPG', 'PNG'],
      download: '/media/executive-headshots.zip'
    },
    {
      title: 'Product Screenshots',
      description: 'High-quality screenshots of our AI platforms',
      formats: ['PNG', 'JPG'],
      download: '/media/product-screenshots.zip'
    },
    {
      title: 'Company Fact Sheet',
      description: 'One-page overview of Zion Tech Group',
      formats: ['PDF'],
      download: '/media/company-fact-sheet.pdf'
    },
    {
      title: 'Brand Guidelines',
      description: 'Complete brand identity and usage guidelines',
      formats: ['PDF'],
      download: '/media/brand-guidelines.pdf'
    },
    {
      title: 'Product Brochures',
      description: 'Detailed product information and specifications',
      formats: ['PDF'],
      download: '/media/product-brochures.zip'
    }
  ];

  const companyStats = [
    { label: 'Years in Business', value: '8+', icon: Calendar },
    { label: 'Team Members', value: '150+', icon: Users },
    { label: 'Countries Served', value: '25+', icon: Globe },
    { label: 'AI Models Deployed', value: '500+', icon: TrendingUp },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Industry Awards', value: '15+', icon: Award }
  ];

  const contactInfo = {
    pressEmail: 'press@ziontechgroup.com',
    generalEmail: 'kleber@ziontechgroup.com',
    phone: '+1 302 464 0950',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Press & Media - Zion Tech Group"
        description="Press releases, media resources, and company information for journalists and media professionals."
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Newspaper className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Press & Media
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-12"
          >
            Stay updated with the latest news, press releases, and media resources from Zion Tech Group. 
            We're transforming businesses through innovative AI and technology solutions.
          </motion.p>
          
          {/* Company Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto"
          >
            {companyStats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
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
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a 
              href="/press/archive"
              className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              View All Press Releases
            </a>
          </motion.div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-16 text-white"
          >
            Media Resources
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
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

      {/* Press Kit Download */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Complete Press Kit</h2>
            <p className="text-slate-300 mb-8">
              Download our comprehensive press kit containing all media resources, 
              company information, and press materials in one convenient package.
            </p>
            <a 
              href="/media/zion-tech-group-press-kit.zip"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Complete Press Kit
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Press;
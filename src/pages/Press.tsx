import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Newspaper, 
  Download, 
  Mail, 
  Phone, 
  Globe, 
  Calendar,
  FileText,
  Image,
  Video,
  Users,
  Award,
  TrendingUp,
  Star,
  ArrowRight,
  MapPin,
  Shield
} from 'lucide-react';

export default function Press() {
  const pressReleases = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Compliance Suite',
      date: '2024-01-15',
      summary: 'New AI compliance solution reduces regulatory risk by 85% while cutting costs by 60%',
      category: 'Product Launch',
      link: '/press/ai-compliance-suite-launch'
    },
    {
      title: 'Zion Tech Group Secures $50M Series B Funding Round',
      date: '2023-12-10',
      summary: 'Investment will accelerate AI research and expand global market presence',
      category: 'Company News',
      link: '/press/series-b-funding'
    },
    {
      title: 'Zion Tech Group Named Top AI Company by TechCrunch',
      date: '2023-11-28',
      summary: 'Recognition highlights innovation in enterprise AI solutions',
      category: 'Awards',
      link: '/press/techcrunch-award'
    },
    {
      title: 'Zion Tech Group Partners with Fortune 500 Healthcare Provider',
      date: '2023-10-15',
      summary: 'Strategic partnership to deploy AI-powered diagnostic systems',
      category: 'Partnerships',
      link: '/press/healthcare-partnership'
    }
  ];

  const mediaKit = [
    {
      title: 'Company Logo Pack',
      description: 'High-resolution logos in various formats and color schemes',
      type: 'Brand Assets',
      icon: Image,
      downloadUrl: '/downloads/zion-tech-group-logos.zip'
    },
    {
      title: 'Executive Team Photos',
      description: 'Professional headshots of key leadership team members',
      type: 'Images',
      icon: Users,
      downloadUrl: '/downloads/executive-team-photos.zip'
    },
    {
      title: 'Company Fact Sheet',
      description: 'Key facts, figures, and company information',
      type: 'Documents',
      icon: FileText,
      downloadUrl: '/downloads/company-fact-sheet.pdf'
    },
    {
      title: 'Product Screenshots',
      description: 'High-quality screenshots of our AI solutions',
      type: 'Images',
      icon: Image,
      downloadUrl: '/downloads/product-screenshots.zip'
    }
  ];

  const companyStats = [
    { number: '500+', label: 'Enterprise Clients', icon: Users },
    { number: '50+', label: 'AI Experts', icon: TrendingUp },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '200+', label: 'Projects Delivered', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO 
        title="Press & Media - Zion Tech Group"
        description="Media resources, press releases, and company information for journalists and media outlets covering Zion Tech Group."
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl mb-8">
              <Newspaper className="w-10 h-10 text-cyan-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Press & Media
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Welcome to Zion Tech Group's press room. Find the latest news, 
              company information, and media resources for journalists and media outlets.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Latest Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Media Resources</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Press Inquiries</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Latest Press Releases</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Stay up to date with the latest news and announcements from Zion Tech Group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30">
                    {release.category}
                  </span>
                  <span className="text-slate-400 text-sm">{release.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{release.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{release.summary}</p>
                <a
                  href={release.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Media Kit</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Download high-quality media resources including logos, photos, and company information.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaKit.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 mb-3 leading-relaxed">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">{item.type}</span>
                    <a
                      href={item.downloadUrl}
                      className="inline-flex items-center px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded-lg hover:bg-cyan-400/30 transition-colors border border-cyan-400/30"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Company Information</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Essential information about Zion Tech Group for media and press coverage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">About Zion Tech Group</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Zion Tech Group is a leading provider of AI-powered enterprise solutions, 
                  specializing in artificial intelligence, machine learning, and emerging technologies. 
                  Founded in 2009, we've been at the forefront of AI innovation for over 15 years.
                </p>
                <p>
                  Our mission is to transform businesses through cutting-edge AI solutions that drive 
                  efficiency, innovation, and competitive advantage. We serve clients across healthcare, 
                  finance, manufacturing, and technology sectors.
                </p>
                <p>
                  Headquartered in Middletown, Delaware, with offices and clients worldwide, 
                  Zion Tech Group is committed to ethical AI development and responsible innovation.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Key Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">Founded: 2009</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">Employees: 150+</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">Headquarters: Middletown, DE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">SOC 2 Type II Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Press Team */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Contact Our Press Team</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              For press inquiries, interview requests, or additional information, 
              our communications team is here to help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a 
                  href="mailto:press@ziontechgroup.com" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  press@ziontechgroup.com
                </a>
              </div>
              <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a 
                  href="tel:+13024640950" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  +1 302 464 0950
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
              <a
                href="/about"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
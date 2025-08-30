import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Newspaper, 
  Calendar, 
  ExternalLink, 
  Download, 
  Mail, 
  Phone, 
  Globe,
  Award,
  TrendingUp,
  Users,
  Star,
  Zap,
  Brain
} from 'lucide-react';

export default function Press() {
  const pressReleases = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Business Operations Platform',
      date: '2024-12-15',
      summary: 'Company introduces next-generation AI platform that transforms how businesses operate, featuring autonomous decision-making and predictive analytics.',
      category: 'Product Launch',
      link: '#',
      featured: true
    },
    {
      title: 'Zion Tech Group Named Top AI Solutions Provider by Tech Industry Report',
      date: '2024-11-28',
      summary: 'Independent research firm recognizes Zion Tech Group for excellence in AI implementation and customer satisfaction.',
      category: 'Awards & Recognition',
      link: '#',
      featured: false
    },
    {
      title: 'Partnership Announcement: Zion Tech Group and Global Cloud Provider',
      date: '2024-11-15',
      summary: 'Strategic partnership to deliver enhanced cloud-native AI solutions with global reach and enterprise-grade security.',
      category: 'Partnerships',
      link: '#',
      featured: false
    },
    {
      title: 'Zion Tech Group Expands Healthcare AI Division',
      date: '2024-10-30',
      summary: 'Company announces expansion of healthcare technology solutions with new AI-powered diagnostic tools and patient care platforms.',
      category: 'Business Expansion',
      link: '#',
      featured: false
    },
    {
      title: 'Q3 2024 Financial Results: Record Growth in AI Services',
      date: '2024-10-15',
      summary: 'Company reports 150% year-over-year growth in AI services revenue, driven by increased enterprise adoption.',
      category: 'Financial Results',
      link: '#',
      featured: false
    },
    {
      title: 'Zion Tech Group Opens New Innovation Center in Silicon Valley',
      date: '2024-09-20',
      summary: 'New facility to focus on quantum computing research and next-generation AI algorithm development.',
      category: 'Business Expansion',
      link: '#',
      featured: false
    }
  ];

  const mediaCoverage = [
    {
      outlet: 'TechCrunch',
      title: 'How Zion Tech Group is Revolutionizing Enterprise AI',
      date: '2024-12-10',
      author: 'Sarah Johnson',
      link: '#',
      logo: '/logos/techcrunch.png'
    },
    {
      outlet: 'Forbes',
      title: 'The AI Companies to Watch in 2025',
      date: '2024-12-05',
      author: 'Michael Chen',
      link: '#',
      logo: '/logos/forbes.png'
    },
    {
      outlet: 'Wired',
      title: 'Quantum AI: The Next Frontier in Computing',
      date: '2024-11-25',
      author: 'Emily Rodriguez',
      link: '#',
      logo: '/logos/wired.png'
    },
    {
      outlet: 'MIT Technology Review',
      title: 'AI-Powered Business Transformation: A Case Study',
      date: '2024-11-15',
      author: 'Dr. James Wilson',
      link: '#',
      logo: '/logos/mit-tech-review.png'
    }
  ];

  const companyStats = [
    { label: 'Years in Business', value: '8+', icon: Calendar },
    { label: 'Global Clients', value: '200+', icon: Users },
    { label: 'AI Models Deployed', value: '500+', icon: Brain },
    { label: 'Countries Served', value: '25+', icon: Globe },
    { label: 'Industry Awards', value: '15+', icon: Award },
    { label: 'Patents Filed', value: '25+', icon: Star }
  ];

  const mediaKit = {
    logo: '/logos/zion-tech-group-logo.png',
    factSheet: '/media-kit/zion-tech-group-fact-sheet.pdf',
    executiveBios: '/media-kit/executive-bios.pdf',
    companyPhotos: '/media-kit/company-photos.zip',
    brandGuidelines: '/media-kit/brand-guidelines.pdf'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Press & Media - Zion Tech Group"
        description="Latest press releases, media coverage, and company news from Zion Tech Group. Stay updated on our innovations in AI and technology."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Press & <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Media</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay updated with the latest news, press releases, and media coverage 
              from Zion Tech Group as we continue to innovate and transform industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Download Media Kit
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Media Relations
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Press Release */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Latest News
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay informed about our latest developments, partnerships, and innovations.
            </p>
          </motion.div>

          {pressReleases.filter(release => release.featured).map((release, index) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 border border-cyan-400/30 mb-8"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                  {release.category}
                </span>
                <span className="text-gray-400 text-sm">{release.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{release.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">{release.summary}</p>
              <a 
                href={release.link}
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Read Full Release</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Press Releases
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Official announcements and company updates from Zion Tech Group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pressReleases.filter(release => !release.featured).map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm font-medium rounded-full">
                    {release.category}
                  </span>
                  <span className="text-gray-400 text-sm">{release.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{release.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{release.summary}</p>
                <a 
                  href={release.link}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                >
                  <span>Read More</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Media Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Recent articles and features about Zion Tech Group in leading publications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaCoverage.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                    <Newspaper className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{article.outlet}</div>
                    <div className="text-gray-400 text-sm">{article.date}</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{article.title}</h3>
                <div className="text-gray-400 text-sm mb-4">By {article.author}</div>
                <a 
                  href={article.link}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                >
                  <span>Read Article</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Media Kit
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Download official company assets, logos, and information for media use.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(mediaKit).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <a 
                  href={value}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Download</span>
                  <Download className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Media Relations */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Contact Media Relations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              For media inquiries, press opportunities, or interview requests, 
              our communications team is here to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-4">press@ziontechgroup.com</p>
                <a href="mailto:press@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Send Email
                </a>
              </div>
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-4">+1 302 464 0950</p>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Call Now
                </a>
              </div>
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Website</h3>
                <p className="text-gray-300 mb-4">ziontechgroup.com</p>
                <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Visit Site
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
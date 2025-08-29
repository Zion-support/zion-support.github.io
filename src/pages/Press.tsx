import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Newspaper, 
  FileText, 
  Calendar, 
  Users, 
  Globe, 
  Award, 
  TrendingUp, 
  Star,
  Download,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Play,
  Image,
  Quote,
  BarChart3,
  Target,
  CheckCircle
} from 'lucide-react';

const Press: React.FC = () => {
  const pressReleases = [
    {
      title: 'Zion Tech Group Announces Revolutionary AI Platform Launch',
      date: 'March 15, 2025',
      category: 'Product Launch',
      summary: 'Company introduces next-generation AI platform with breakthrough capabilities in natural language processing and computer vision.',
      readMore: 'https://press.ziontechgroup.com/ai-platform-launch-2025'
    },
    {
      title: 'Zion Tech Group Secures $150M Series C Funding Round',
      date: 'February 28, 2025',
      category: 'Funding',
      summary: 'Investment round led by leading venture capital firms to accelerate global expansion and product development.',
      readMore: 'https://press.ziontechgroup.com/series-c-funding-2025'
    },
    {
      title: 'Zion Tech Group Named Top AI Company by TechCrunch',
      date: 'February 15, 2025',
      category: 'Awards',
      summary: 'Company recognized for innovation in artificial intelligence and machine learning solutions.',
      readMore: 'https://press.ziontechgroup.com/techcrunch-award-2025'
    },
    {
      title: 'Zion Tech Group Expands to European Market',
      date: 'January 30, 2025',
      category: 'Expansion',
      summary: 'Strategic expansion into European markets with new offices in London, Berlin, and Paris.',
      readMore: 'https://press.ziontechgroup.com/european-expansion-2025'
    }
  ];

  const mediaKit = [
    {
      title: 'Company Logo Pack',
      description: 'High-resolution logos in various formats and color schemes',
      size: '15.2 MB',
      format: 'SVG, PNG, JPG',
      download: '/media-kit/logos.zip'
    },
    {
      title: 'Executive Headshots',
      description: 'Professional photos of key leadership team members',
      size: '8.7 MB',
      format: 'JPG, PNG',
      download: '/media-kit/headshots.zip'
    },
    {
      title: 'Product Screenshots',
      description: 'High-quality screenshots of our flagship products',
      size: '12.4 MB',
      format: 'PNG, JPG',
      download: '/media-kit/products.zip'
    },
    {
      title: 'Company Fact Sheet',
      description: 'Comprehensive company information and key statistics',
      size: '2.1 MB',
      format: 'PDF',
      download: '/media-kit/fact-sheet.pdf'
    }
  ];

  const recentCoverage = [
    {
      outlet: 'TechCrunch',
      title: 'How Zion Tech Group is Revolutionizing AI in Healthcare',
      date: 'March 10, 2025',
      author: 'Sarah Johnson',
      url: 'https://techcrunch.com/zion-tech-healthcare-ai',
      logo: '/images/press/techcrunch-logo.png'
    },
    {
      outlet: 'Forbes',
      title: 'The Rise of Zion Tech Group: From Startup to AI Powerhouse',
      date: 'March 5, 2025',
      author: 'Michael Chen',
      url: 'https://forbes.com/zion-tech-rise-ai',
      logo: '/images/press/forbes-logo.png'
    },
    {
      outlet: 'Wired',
      title: 'Quantum Computing Breakthroughs at Zion Tech Group',
      date: 'February 28, 2025',
      author: 'Emily Rodriguez',
      url: 'https://wired.com/zion-tech-quantum-breakthroughs',
      logo: '/images/press/wired-logo.png'
    },
    {
      outlet: 'MIT Technology Review',
      title: 'Zion Tech Group\'s Approach to Ethical AI Development',
      date: 'February 20, 2025',
      author: 'David Kim',
      url: 'https://technologyreview.com/zion-tech-ethical-ai',
      logo: '/images/press/mit-logo.png'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Innovation Summit 2025',
      date: 'April 15-17, 2025',
      location: 'San Francisco, CA',
      description: 'Zion Tech Group CEO presenting on "The Future of AI in Enterprise"',
      type: 'Conference'
    },
    {
      title: 'TechCrunch Disrupt',
      date: 'May 20-22, 2025',
      location: 'New York, NY',
      description: 'Product showcase and startup competition participation',
      type: 'Conference'
    },
    {
      title: 'CES 2026',
      date: 'January 6-9, 2026',
      location: 'Las Vegas, NV',
      description: 'Exhibition of latest AI and cybersecurity innovations',
      type: 'Trade Show'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Press & Media - Zion Tech Group"
        description="Latest news, press releases, and media resources from Zion Tech Group. Stay updated on our innovations in AI, cybersecurity, and emerging technologies."
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-6">
              <Newspaper className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">Press & Media</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Press &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
                Media Center
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay updated with the latest news, announcements, and media resources from Zion Tech Group. 
              Discover our innovations, achievements, and vision for the future of technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20">
                Latest News
              </button>
              <button className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200">
                Media Kit
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Latest Press Releases</h2>
            
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full">
                          {release.category}
                        </span>
                        <span className="text-sm text-gray-400 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {release.date}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-3">{release.title}</h3>
                      <p className="text-gray-300 mb-4">{release.summary}</p>
                      
                      <a 
                        href={release.readMore}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      >
                        Read Full Release
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Media Kit Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Media Kit</h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Download high-quality media assets, company information, and resources for journalists and media professionals.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {mediaKit.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{item.size}</span>
                        <span>{item.format}</span>
                      </div>
                    </div>
                    <Download className="w-6 h-6 text-cyan-400" />
                  </div>
                  
                  <a 
                    href={item.download}
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 text-center block"
                  >
                    Download
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Media Coverage Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Recent Media Coverage</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {recentCoverage.map((coverage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-slate-700/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Image className="w-8 h-8 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{coverage.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                        <span className="font-medium text-cyan-400">{coverage.outlet}</span>
                        <span>{coverage.date}</span>
                      </div>
                      <p className="text-sm text-gray-500">By {coverage.author}</p>
                    </div>
                  </div>
                  
                  <a 
                    href={coverage.url}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    Read Article
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Upcoming Events</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      event.type === 'Conference' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
                    }`}>
                      {event.type}
                    </span>
                    <Calendar className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">{event.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Media Inquiries</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              For press inquiries, interview requests, or additional media resources, 
              please contact our communications team.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-gray-300">press@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-gray-300">Middletown, DE</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/20">
                Contact Press Team
              </button>
              <button className="px-8 py-4 border border-cyan-400/30 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200">
                Subscribe to Updates
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Press;
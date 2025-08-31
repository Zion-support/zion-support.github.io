import React from 'react';
import { motion } from 'framer-motion';
import { 
  Newspaper, 
  Calendar,
  ExternalLink,
  Download,
  Mail,
  Phone,
  Users,
  Award,
  TrendingUp,
  Globe,
  Building2,
  FileText,
  Image,
  Video,
  Microphone,
  Search,
  Filter,
  ArrowRight,
  Star,
  Eye,
  Share2,
  Bookmark,
  Clock,
  MapPin,
  Tag
} from 'lucide-react';

const Press: React.FC = () => {
  const pressReleases = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Cybersecurity Platform',
      summary: 'Company introduces next-generation security solution combining artificial intelligence with advanced threat detection.',
      date: '2024-01-15',
      category: 'Product Launch',
      readTime: '3 min read',
      views: 1250,
      featured: true,
      tags: ['AI', 'Cybersecurity', 'Product Launch'],
      image: '/images/press/ai-cybersecurity-launch.jpg'
    },
    {
      title: 'Zion Tech Group Expands to European Market with New London Office',
      summary: 'Strategic expansion brings cutting-edge AI solutions to European enterprises and government agencies.',
      date: '2024-01-08',
      category: 'Company News',
      readTime: '2 min read',
      views: 890,
      featured: false,
      tags: ['Expansion', 'Europe', 'International'],
      image: '/images/press/london-office.jpg'
    },
    {
      title: 'Zion Tech Group Named Top AI Company by Tech Innovation Awards',
      summary: 'Recognition highlights company\'s leadership in artificial intelligence and digital transformation solutions.',
      date: '2024-01-03',
      category: 'Awards',
      readTime: '2 min read',
      views: 1100,
      featured: false,
      tags: ['Awards', 'AI', 'Recognition'],
      image: '/images/press/tech-innovation-award.jpg'
    },
    {
      title: 'Zion Tech Group Partners with Leading Healthcare Organizations',
      summary: 'Strategic partnerships to deploy AI-powered healthcare solutions across major medical institutions.',
      date: '2023-12-20',
      category: 'Partnerships',
      readTime: '4 min read',
      views: 750,
      featured: false,
      tags: ['Healthcare', 'Partnerships', 'AI'],
      image: '/images/press/healthcare-partnership.jpg'
    }
  ];

  const mediaMentions = [
    {
      source: 'TechCrunch',
      title: 'How Zion Tech Group is Revolutionizing Enterprise AI',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      excerpt: 'Zion Tech Group\'s innovative approach to enterprise AI is setting new standards in the industry...',
      url: 'https://techcrunch.com/zion-tech-group-enterprise-ai',
      logo: '/images/press/techcrunch-logo.png',
      category: 'Technology'
    },
    {
      source: 'Forbes',
      title: 'The Future of Cybersecurity: AI-Powered Defense',
      author: 'Michael Chen',
      date: '2024-01-05',
      excerpt: 'Zion Tech Group\'s cybersecurity platform demonstrates the power of AI in threat detection...',
      url: 'https://forbes.com/zion-tech-cybersecurity-ai',
      logo: '/images/press/forbes-logo.png',
      category: 'Cybersecurity'
    },
    {
      source: 'Harvard Business Review',
      title: 'Digital Transformation Success Stories',
      author: 'Dr. Emily Rodriguez',
      date: '2023-12-28',
      excerpt: 'Case studies from Zion Tech Group show how companies can successfully navigate digital transformation...',
      url: 'https://hbr.org/zion-tech-digital-transformation',
      logo: '/images/press/hbr-logo.png',
      category: 'Business'
    }
  ];

  const pressKit = [
    {
      name: 'Company Logo',
      description: 'High-resolution Zion Tech Group logos in various formats',
      type: 'Image',
      size: '2.5 MB',
      icon: Image,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Executive Photos',
      description: 'Professional headshots of company leadership team',
      type: 'Image',
      size: '8.1 MB',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Company Fact Sheet',
      description: 'Key facts, figures, and company information',
      type: 'Document',
      size: '156 KB',
      icon: FileText,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Product Screenshots',
      description: 'High-quality images of our AI platforms and solutions',
      type: 'Image',
      size: '15.2 MB',
      icon: Image,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Company Video',
      description: 'Corporate overview and product demonstration videos',
      type: 'Video',
      size: '45.7 MB',
      icon: Video,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Brand Guidelines',
      description: 'Complete brand identity and usage guidelines',
      type: 'Document',
      size: '2.8 MB',
      icon: Bookmark,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const upcomingEvents = [
    {
      name: 'AI Innovation Summit 2024',
      description: 'Join us for our annual showcase of cutting-edge AI solutions',
      date: '2024-02-15',
      time: '9:00 AM - 6:00 PM',
      location: 'Middletown, DE',
      type: 'Conference',
      registration: 'Open'
    },
    {
      name: 'Cybersecurity Webinar Series',
      description: 'Monthly webinars on the latest security threats and solutions',
      date: '2024-02-22',
      time: '2:00 PM - 3:30 PM',
      location: 'Virtual',
      type: 'Webinar',
      registration: 'Open'
    },
    {
      name: 'Digital Transformation Workshop',
      description: 'Hands-on workshop for enterprise leaders',
      date: '2024-03-01',
      time: '10:00 AM - 4:00 PM',
      location: 'New York, NY',
      type: 'Workshop',
      registration: 'Open'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Newspaper className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Press &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {' '}Media
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay updated with the latest news, press releases, and media coverage about Zion Tech Group. 
              Find press kits, media resources, and contact information for journalists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Press Release */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest Press Release
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most recent company announcements and news.
            </p>
          </motion.div>

          {pressReleases.filter(release => release.featured).map((release, index) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                    {release.category}
                  </span>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{release.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{release.readTime}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {release.title}
                </h3>
                <p className="text-xl text-gray-300 mb-6">
                  {release.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {release.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-700 text-blue-400 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-gray-400">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    {new Date(release.date).toLocaleDateString()}
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                    Read Full Release
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Press Releases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Press Releases
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse through our complete archive of company announcements and news.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pressReleases.filter(release => !release.featured).map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-slate-700 text-blue-400 text-xs font-medium rounded-full">
                    {release.category}
                  </span>
                  <div className="text-sm text-gray-400">
                    {new Date(release.date).toLocaleDateString()}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {release.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {release.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {release.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-700 text-blue-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{release.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{release.readTime}</span>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Mentions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Media Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See what leading publications are saying about Zion Tech Group.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaMentions.map((mention, index) => (
              <motion.div
                key={mention.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-gray-400">{mention.category}</span>
                  </div>
                  <span className="text-xs text-gray-400">
                    {new Date(mention.date).toLocaleDateString()}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {mention.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {mention.excerpt}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-400">
                    By {mention.author}
                  </div>
                  <span className="text-sm font-semibold text-blue-400">
                    {mention.source}
                  </span>
                </div>

                <a
                  href={mention.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Read Article</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Press Kit
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Download media resources, logos, and company information for journalists and media professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressKit.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">
                  {item.name}
                </h3>
                <p className="text-gray-300 mb-4 text-center text-sm">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <span>{item.type}</span>
                  <span>{item.size}</span>
                </div>

                <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join us at upcoming events and conferences where you can meet our team and learn about our latest innovations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {event.name}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Tag className="w-4 h-4" />
                    <span>{event.type}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-400 font-semibold">
                    {event.registration}
                  </span>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                    Register
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Media Contact
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Journalists and media professionals can contact our press team for interviews, quotes, and additional information.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-4">press@ziontechgroup.com</p>
                <a
                  href="mailto:press@ziontechgroup.com"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Send Email
                </a>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-4">+1 (302) 464-0950</p>
                <a
                  href="tel:+13024640950"
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Press Team</h3>
              <p className="text-gray-300 mb-4">
                Our dedicated press team is available to assist with media inquiries, arrange interviews with company executives, 
                and provide additional resources for your stories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Contact Press Team
                </a>
                <a
                  href="/about"
                  className="px-6 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  About Zion Tech Group
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Press;
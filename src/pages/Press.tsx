import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, Mail, Phone, Globe, FileText, Image, 
  Video, Calendar, User, Building, Award, Star,
  ArrowRight, ExternalLink, Share2, Copy
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Press() {
  const pressReleases = [
    {
      id: 1,
      title: 'Zion Tech Group Named to Forbes AI 50 List for 2024',
      date: '2024-01-15',
      summary: 'Company recognized for innovative work in democratizing AI technology for businesses worldwide.',
      category: 'Awards & Recognition',
      pdfUrl: '/press/forbes-ai-50-press-release.pdf',
      featured: true
    },
    {
      id: 2,
      title: 'Launch of Revolutionary Quantum-AI Hybrid Platform',
      date: '2024-01-10',
      summary: 'Breakthrough platform combines quantum computing with artificial intelligence to solve complex business problems.',
      category: 'Product Launch',
      pdfUrl: '/press/quantum-ai-platform-press-release.pdf',
      featured: true
    },
    {
      id: 3,
      title: 'Strategic Partnership with Microsoft Azure Announced',
      date: '2024-01-08',
      summary: 'Partnership to deliver enterprise-grade AI solutions on Microsoft\'s trusted cloud platform.',
      category: 'Partnerships',
      pdfUrl: '/press/microsoft-partnership-press-release.pdf',
      featured: false
    },
    {
      id: 4,
      title: 'Expansion to European Markets',
      date: '2024-01-03',
      summary: 'Company announces expansion into key European markets with new offices in London, Berlin, and Paris.',
      category: 'Company News',
      pdfUrl: '/press/europe-expansion-press-release.pdf',
      featured: false
    },
    {
      id: 5,
      title: 'AI-Powered Cybersecurity Breakthrough',
      date: '2023-12-28',
      summary: 'New threat detection system prevents 99.9% of cyber attacks in real-time.',
      category: 'Technology',
      pdfUrl: '/press/ai-security-press-release.pdf',
      featured: false
    }
  ];

  const mediaKit = {
    companyOverview: '/press/zion-tech-group-company-overview.pdf',
    executiveBios: '/press/executive-bios.pdf',
    factSheet: '/press/fact-sheet.pdf',
    logoPack: '/press/zion-tech-group-logos.zip',
    brandGuidelines: '/press/brand-guidelines.pdf',
    highResImages: '/press/high-resolution-images.zip'
  };

  const executivePhotos = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      photoUrl: '/press/executives/sarah-chen.jpg',
      bio: 'Dr. Chen leads Zion Tech Group with a vision to democratize AI technology and drive sustainable innovation across industries.',
      email: 'sarah.chen@ziontechgroup.com',
      phone: '+1 (555) 123-4567'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Chief Technology Officer',
      photoUrl: '/press/executives/marcus-rodriguez.jpg',
      bio: 'Marcus spearheads our cutting-edge technology initiatives, focusing on quantum-AI hybrid solutions and next-generation computing platforms.',
      email: 'marcus.rodriguez@ziontechgroup.com',
      phone: '+1 (555) 123-4568'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Chief AI Officer',
      photoUrl: '/press/executives/emily-watson.jpg',
      bio: 'Dr. Watson leads our AI research initiatives, developing breakthrough algorithms that power our autonomous business solutions.',
      email: 'emily.watson@ziontechgroup.com',
      phone: '+1 (555) 123-4569'
    }
  ];

  const recentCoverage = [
    {
      id: 1,
      title: 'Zion Tech Group: Democratizing AI for Small Businesses',
      publication: 'TechCrunch',
      date: '2024-01-12',
      url: 'https://techcrunch.com/zion-tech-group-ai-democratization',
      excerpt: 'How Zion Tech Group is making advanced AI technology accessible to businesses of all sizes.',
      logo: '/press/logos/techcrunch.png'
    },
    {
      id: 2,
      title: 'The Future of Quantum-AI Computing',
      publication: 'MIT Technology Review',
      date: '2024-01-08',
      url: 'https://technologyreview.com/quantum-ai-computing-future',
      excerpt: 'Exploring the revolutionary potential of combining quantum computing with artificial intelligence.',
      logo: '/press/logos/mit-tech-review.png'
    },
    {
      id: 3,
      title: 'AI Ethics in Business: A Case Study',
      publication: 'Harvard Business Review',
      date: '2024-01-05',
      url: 'https://hbr.org/ai-ethics-business-case-study',
      excerpt: 'How Zion Tech Group is leading the way in responsible AI development and deployment.',
      logo: '/press/logos/harvard-business-review.png'
    },
    {
      id: 4,
      title: 'Cybersecurity Gets Smarter with AI',
      publication: 'Wired',
      date: '2023-12-30',
      url: 'https://wired.com/ai-cybersecurity-breakthrough',
      excerpt: 'The latest developments in AI-powered cybersecurity and threat detection.',
      logo: '/press/logos/wired.png'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'AI Innovation Summit 2024',
      date: '2024-03-15',
      location: 'San Francisco, CA',
      description: 'Join us for our annual AI innovation summit where we\'ll showcase our latest breakthroughs and discuss the future of AI technology.',
      registrationUrl: 'https://ziontechgroup.com/events/ai-innovation-summit-2024'
    },
    {
      id: 2,
      title: 'Quantum Computing Conference',
      date: '2024-04-20',
      location: 'New York, NY',
      description: 'Presenting our latest quantum-AI hybrid platform and discussing the future of quantum computing in business applications.',
      registrationUrl: 'https://ziontechgroup.com/events/quantum-computing-conference'
    },
    {
      id: 3,
      title: 'European Tech Tour',
      date: '2024-05-10',
      location: 'London, Berlin, Paris',
      description: 'Meet our team and learn about our expansion into European markets during our multi-city tech tour.',
      registrationUrl: 'https://ziontechgroup.com/events/european-tech-tour'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Press & Media - Zion Tech Group"
        description="Media resources, press releases, and executive information for journalists and media professionals covering Zion Tech Group."
        keywords="press, media, press releases, executive bios, media kit, Zion Tech Group"
        canonicalUrl="https://ziontechgroup.com/press"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Press & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Media</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Welcome to Zion Tech Group's press room. Find press releases, media resources, executive information, and company updates for journalists and media professionals.
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-gray-400">
              <div className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                <span>Press Releases</span>
              </div>
              <div className="flex items-center">
                <Image className="w-5 h-5 mr-2" />
                <span>Media Resources</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Executive Bios</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Press Releases
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Latest announcements and company news from Zion Tech Group.
            </p>
          </motion.div>

          <div className="space-y-8">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 ${
                  release.featured ? 'ring-2 ring-blue-500/50' : ''
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      {release.featured && (
                        <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                          Featured
                        </span>
                      )}
                      <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                        {release.category}
                      </span>
                      <span className="text-gray-400 text-sm">{formatDate(release.date)}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {release.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {release.summary}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={release.pdfUrl}
                      download
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </a>
                    <button
                      onClick={() => copyToClipboard(`${release.title} - ${release.summary} - Zion Tech Group`)}
                      className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Summary
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Media Kit
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Download essential resources for journalists and media professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(mediaKit).map(([key, url], index) => {
              const title = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
              const icon = key.includes('logo') || key.includes('image') ? Image : 
                          key.includes('video') ? Video : FileText;
              
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                    <a
                      href={url}
                      download
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center mx-auto"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Executive Photos & Bios */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Executive Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              High-resolution photos and biographies of our key executives for media use.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executivePhotos.map((executive, index) => (
              <motion.div
                key={executive.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <User className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{executive.name}</h3>
                  <p className="text-blue-400 font-semibold mb-3">{executive.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{executive.bio}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Email:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-sm">{executive.email}</span>
                      <button
                        onClick={() => copyToClipboard(executive.email)}
                        className="p-1 hover:bg-white/10 rounded transition-colors"
                      >
                        <Copy className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Phone:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-sm">{executive.phone}</span>
                      <button
                        onClick={() => copyToClipboard(executive.phone)}
                        className="p-1 hover:bg-white/10 rounded transition-colors"
                      >
                        <Copy className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <a
                    href={executive.photoUrl}
                    download
                    className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Photo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Media Coverage */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recent Media Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Recent articles and features about Zion Tech Group in leading publications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentCoverage.map((coverage, index) => (
              <motion.div
                key={coverage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{coverage.publication}</h3>
                    <p className="text-gray-400 text-sm">{formatDate(coverage.date)}</p>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">
                  {coverage.title}
                </h4>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  {coverage.excerpt}
                </p>
                
                <a
                  href={coverage.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Read Article
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join us at upcoming events and conferences where our team will be speaking and presenting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{event.title}</h3>
                    <p className="text-gray-400 text-sm">{formatDate(event.date)}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-3">
                  <Building className="w-4 h-4 inline mr-2" />
                  {event.location}
                </p>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  {event.description}
                </p>
                
                <a
                  href={event.registrationUrl}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Media Relations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Media Relations</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Need additional information, interviews, or media resources? Our media relations team is here to help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-4">press@ziontechgroup.com</p>
                <button
                  onClick={() => copyToClipboard('press@ziontechgroup.com')}
                  className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors inline-flex items-center"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Email
                </button>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-4">+1 (555) 123-4567</p>
                <button
                  onClick={() => copyToClipboard('+1 (555) 123-4567')}
                  className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors inline-flex items-center"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Phone
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </a>
              <a
                href="/news"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center"
              >
                <FileText className="w-5 h-5 mr-2" />
                View All News
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

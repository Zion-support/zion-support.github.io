import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Newspaper, 
  Calendar, 
  Download, 
  ExternalLink, 
  Users, 
  Globe, 
  Award, 
  Star,
  FileText,
  Image,
  Video,
  Mic,
  Camera,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Heart,
  Crown,
  Sparkles,
  TrendingUp,
  Lightbulb,
  Target,
  CheckCircle
} from 'lucide-react';

export default function Press() {
  const pressReleases = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Compliance Suite',
      date: '2024-12-15',
      summary: 'New AI compliance solution helps businesses navigate complex regulatory requirements with 95% accuracy improvement.',
      category: 'Product Launch',
      link: '/press/ai-compliance-suite-launch',
      featured: true,
      tags: ['AI', 'Compliance', 'Product Launch', 'Innovation']
    },
    {
      title: 'Zion Tech Group Named Top AI Company by Tech Innovation Awards',
      date: '2024-11-20',
      summary: 'Company recognized for breakthrough AI solutions and commitment to ethical technology development.',
      category: 'Awards & Recognition',
      link: '/press/top-ai-company-award',
      featured: true,
      tags: ['Awards', 'AI', 'Recognition', 'Innovation']
    },
    {
      title: 'Partnership Announced with Leading Healthcare Provider for AI Diagnostics',
      date: '2024-10-28',
      summary: 'Strategic collaboration to deploy AI-powered diagnostic tools across 50+ healthcare facilities.',
      category: 'Partnerships',
      link: '/press/healthcare-partnership-announcement',
      featured: false,
      tags: ['Healthcare', 'Partnerships', 'AI Diagnostics', 'Collaboration']
    },
    {
      title: 'Zion Tech Group Expands to European Market',
      date: '2024-09-15',
      summary: 'Company opens new office in London to serve growing European demand for AI solutions.',
      category: 'Company News',
      link: '/press/european-expansion',
      featured: false,
      tags: ['Expansion', 'Europe', 'Growth', 'International']
    },
    {
      title: 'New Research Paper: Quantum AI Applications in Financial Services',
      date: '2024-08-22',
      summary: 'Breakthrough research demonstrates quantum AI potential for fraud detection and risk assessment.',
      category: 'Research',
      link: '/press/quantum-ai-financial-research',
      featured: false,
      tags: ['Research', 'Quantum AI', 'Financial Services', 'Innovation']
    },
    {
      title: 'Zion Tech Group CEO Kleber Santos Featured in Forbes Technology',
      date: '2024-07-18',
      summary: 'CEO discusses the future of AI in business and Zion Tech Group\'s vision for 2030.',
      category: 'Media Coverage',
      link: '/press/forbes-ceo-feature',
      featured: false,
      tags: ['Media Coverage', 'CEO', 'Forbes', 'AI Future']
    }
  ];

  const mediaCoverage = [
    {
      outlet: 'Forbes',
      title: 'The AI Revolution: How Zion Tech Group is Shaping the Future',
      author: 'Sarah Johnson',
      date: '2024-12-10',
      link: 'https://forbes.com/ai-revolution-zion-tech-group',
      logo: '/api/placeholder/100/50',
      excerpt: 'Zion Tech Group emerges as a leader in the AI revolution, transforming how businesses operate...'
    },
    {
      outlet: 'TechCrunch',
      title: 'Zion Tech Group Raises $50M for AI-Powered Business Solutions',
      author: 'Mike Chen',
      date: '2024-11-28',
      link: 'https://techcrunch.com/zion-tech-group-funding',
      logo: '/api/placeholder/100/50',
      excerpt: 'The company plans to use the funding to expand its AI platform and enter new markets...'
    },
    {
      outlet: 'Wired',
      title: 'Quantum AI: The Next Frontier in Computing',
      author: 'Dr. Emily Watson',
      date: '2024-10-15',
      link: 'https://wired.com/quantum-ai-computing-frontier',
      logo: '/api/placeholder/100/50',
      excerpt: 'Zion Tech Group\'s research team explores the intersection of quantum computing and AI...'
    },
    {
      outlet: 'MIT Technology Review',
      title: 'AI Ethics in Business: A New Framework',
      author: 'Prof. David Kim',
      date: '2024-09-30',
      link: 'https://technologyreview.com/ai-ethics-business-framework',
      logo: '/api/placeholder/100/50',
      excerpt: 'Zion Tech Group introduces comprehensive AI ethics guidelines for enterprise applications...'
    }
  ];

  const mediaResources = [
    {
      title: 'Company Logo Pack',
      description: 'High-resolution logos in various formats and color schemes',
      type: 'Brand Assets',
      icon: Image,
      downloadUrl: '/media/logo-pack.zip',
      fileSize: '2.4 MB'
    },
    {
      title: 'Executive Headshots',
      description: 'Professional photos of key team members',
      type: 'Brand Assets',
      icon: Camera,
      downloadUrl: '/media/executive-photos.zip',
      fileSize: '15.2 MB'
    },
    {
      title: 'Company Fact Sheet',
      description: 'Key facts and figures about Zion Tech Group',
      type: 'Documents',
      icon: FileText,
      downloadUrl: '/media/fact-sheet.pdf',
      fileSize: '245 KB'
    },
    {
      title: 'Product Screenshots',
      description: 'High-quality screenshots of our AI solutions',
      type: 'Brand Assets',
      icon: Image,
      downloadUrl: '/media/product-screenshots.zip',
      fileSize: '8.7 MB'
    },
    {
      title: 'Company Overview Video',
      description: '2-minute company overview and mission statement',
      type: 'Video',
      icon: Video,
      downloadUrl: '/media/company-overview.mp4',
      fileSize: '45.3 MB'
    },
    {
      title: 'Press Kit',
      description: 'Complete press kit with all media resources',
      type: 'Documents',
      icon: FileText,
      downloadUrl: '/media/press-kit.zip',
      fileSize: '32.1 MB'
    }
  ];

  const awards = [
    {
      title: 'Top AI Company 2024',
      organization: 'Tech Innovation Awards',
      date: '2024',
      description: 'Recognized for breakthrough AI solutions and innovation',
      icon: Award,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Best AI Compliance Solution',
      organization: 'AI Business Awards',
      date: '2024',
      description: 'Awarded for our AI-powered compliance platform',
      icon: Shield,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Innovation Excellence',
      organization: 'Delaware Technology Council',
      date: '2024',
      description: 'Honored for technological innovation and business impact',
      icon: Lightbulb,
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'AI Ethics Leadership',
      organization: 'Global AI Ethics Forum',
      date: '2024',
      description: 'Recognized for commitment to responsible AI development',
      icon: CheckCircle,
      color: 'from-green-600 to-emerald-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Press & Media - Zion Tech Group"
        description="Latest press releases, media coverage, and media resources from Zion Tech Group. Stay updated with our latest news and innovations."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-8">
              <Newspaper className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Press & <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Media</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Stay updated with the latest news, press releases, and media coverage 
              from Zion Tech Group. Discover our innovations and industry impact.
            </p>
            <div className="flex items-center justify-center space-x-6 text-slate-400">
              <div className="flex items-center space-x-2">
                <Newspaper className="w-5 h-5" />
                <span>Press Releases</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>Media Coverage</span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Media Resources</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Press Release */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Latest News</h2>
            <p className="text-lg text-slate-300">Stay informed with our most recent announcements and updates</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pressReleases.filter(release => release.featured).map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                    {release.category}
                  </span>
                  <span className="text-slate-400 text-sm">{release.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {release.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {release.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {release.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={release.link}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                >
                  <span>Read Full Release</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Press Releases */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">All Press Releases</h2>
            <p className="text-lg text-slate-300">Complete archive of our company announcements and news</p>
          </motion.div>

          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30 hover:border-cyan-400/20 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600">
                        {release.category}
                      </span>
                      <span className="text-slate-400 text-sm">{release.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                      {release.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {release.summary}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <div className="flex flex-wrap gap-2 justify-end">
                      {release.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={release.link}
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold text-sm"
                    >
                      <span>Read More</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Media Coverage</h2>
            <p className="text-lg text-slate-300">Recent coverage and mentions in leading publications</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaCoverage.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30 hover:border-cyan-400/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                    <Newspaper className="w-8 h-8 text-slate-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{article.outlet}</h4>
                    <p className="text-sm text-slate-400">{article.date}</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">By {article.author}</span>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold text-sm"
                  >
                    <span>Read Article</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Awards & Recognition</h2>
            <p className="text-lg text-slate-300">Industry recognition for our innovation and excellence</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${award.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <award.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{award.title}</h3>
                <p className="text-cyan-400 font-semibold text-sm mb-2">{award.organization}</p>
                <p className="text-slate-400 text-sm">{award.date}</p>
                <p className="text-slate-300 text-sm mt-2">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Media Resources</h2>
            <p className="text-lg text-slate-300">Download logos, photos, and other media assets</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30 hover:border-cyan-400/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <resource.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{resource.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600">
                    {resource.type}
                  </span>
                  <span className="text-slate-400 text-xs">{resource.fileSize}</span>
                </div>
                <a
                  href={resource.downloadUrl}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold text-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Media Relations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 rounded-3xl p-12 text-center border border-cyan-400/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Contact <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Media Relations</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              For media inquiries, interview requests, or additional information, 
              our media relations team is here to help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-4">Media Contact</h3>
                <div className="space-y-3 text-slate-300">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <a href="mailto:press@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                      press@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                      +1 302 464 0950
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                    <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                  </div>
                </div>
              </div>
              
              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/company/zion-tech-group"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-slate-700/50 text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-slate-700/50 text-slate-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://youtube.com/@ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-slate-700/50 text-slate-400 hover:bg-red-600 hover:text-white transition-all duration-300"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
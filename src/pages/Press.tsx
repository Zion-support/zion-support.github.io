import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Newspaper, 
  FileText, 
  Download, 
  Mail, 
  Phone, 
  Calendar,
  Users,
  Award,
  Star,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Image,
  Video,
  Mic,
  Globe,
  Building,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  Zap,
  Brain,
  Rocket,
  Shield,
  Heart,
  Crown,
  Sparkles,
  Flame,
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  Clock,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

export const Press: React.FC = () => {
  const pressReleases = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Business Intelligence Platform',
      date: '2025-01-15',
      summary: 'Company introduces next-generation AI platform that transforms how businesses analyze data and make decisions.',
      category: 'Product Launch',
      featured: true,
      url: '/press/ai-business-intelligence-platform-launch'
    },
    {
      id: 2,
      title: 'Zion Tech Group Secures $25M Series A Funding for AI Innovation',
      date: '2024-12-10',
      summary: 'Investment will accelerate development of cutting-edge AI solutions and expand global operations.',
      category: 'Funding',
      featured: true,
      url: '/press/series-a-funding-announcement'
    },
    {
      id: 3,
      title: 'Zion Tech Group Named Top AI Company by Tech Innovation Awards',
      date: '2024-11-20',
      summary: 'Company recognized for breakthrough innovations in artificial intelligence and machine learning.',
      category: 'Awards',
      featured: false,
      url: '/press/tech-innovation-award-2024'
    },
    {
      id: 4,
      title: 'Zion Tech Group Expands Healthcare AI Division',
      date: '2024-10-15',
      summary: 'New division focuses on AI-powered medical diagnostics and healthcare optimization solutions.',
      category: 'Company News',
      featured: false,
      url: '/press/healthcare-ai-division-expansion'
    },
    {
      id: 5,
      title: 'Zion Tech Group Partners with Fortune 500 Companies for Digital Transformation',
      date: '2024-09-28',
      summary: 'Strategic partnerships to deliver enterprise-grade AI solutions for large-scale digital transformation.',
      category: 'Partnerships',
      featured: false,
      url: '/press/fortune-500-partnerships'
    },
    {
      id: 6,
      title: 'Zion Tech Group Opens New R&D Center in Silicon Valley',
      date: '2024-08-15',
      summary: 'State-of-the-art facility to accelerate AI research and development initiatives.',
      category: 'Company News',
      featured: false,
      url: '/press/silicon-valley-rd-center'
    }
  ];

  const mediaKit = [
    {
      title: 'Company Logo',
      description: 'High-resolution Zion Tech Group logos in various formats',
      icon: Image,
      downloadUrl: '/media-kit/zion-tech-group-logos.zip',
      fileSize: '2.5 MB'
    },
    {
      title: 'Executive Photos',
      description: 'Professional headshots of key leadership team members',
      icon: Users,
      downloadUrl: '/media-kit/executive-photos.zip',
      fileSize: '15.2 MB'
    },
    {
      title: 'Company Fact Sheet',
      description: 'Key facts, statistics, and company information',
      icon: FileText,
      downloadUrl: '/media-kit/company-fact-sheet.pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Brand Guidelines',
      description: 'Complete brand identity and usage guidelines',
      icon: Download,
      downloadUrl: '/media-kit/brand-guidelines.pdf',
      fileSize: '8.7 MB'
    },
    {
      title: 'Product Screenshots',
      description: 'High-quality screenshots of our AI platforms and solutions',
      icon: Image,
      downloadUrl: '/media-kit/product-screenshots.zip',
      fileSize: '12.3 MB'
    },
    {
      title: 'Company Video Assets',
      description: 'Corporate videos and product demonstrations',
      icon: Video,
      downloadUrl: '/media-kit/video-assets.zip',
      fileSize: '45.6 MB'
    }
  ];

  const companyStats = [
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '200+', label: 'Projects Delivered', icon: Rocket },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '25+', label: 'AI Patents', icon: Brain },
    { number: '500+', label: 'Happy Clients', icon: Heart }
  ];

  const contactInfo = {
    pressEmail: 'press@ziontechgroup.com',
    generalEmail: 'info@ziontechgroup.com',
    phone: '+1 302 464 0950',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    linkedin: 'https://linkedin.com/company/zion-tech-group',
    twitter: 'https://twitter.com/ziontechgroup'
  };

  const categories = ['All', 'Product Launch', 'Funding', 'Awards', 'Company News', 'Partnerships'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Press & Media - Zion Tech Group"
        description="Latest press releases, media resources, and company information from Zion Tech Group. Download our media kit and connect with our press team."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                <Newspaper className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Press &
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Media</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Stay updated with the latest news, announcements, and developments from Zion Tech Group. 
              Access our media resources and connect with our press team.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {companyStats.slice(0, 4).map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full mb-3">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-start justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Latest Press Releases</h2>
              <p className="text-slate-300 text-lg">Stay informed about our latest developments and announcements</p>
            </div>
            <div className="mt-6 lg:mt-0">
              <a
                href="mailto:press@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Press Team
              </a>
            </div>
          </motion.div>

          {/* Featured Press Release */}
          {pressReleases.filter(pr => pr.featured).map((release) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10 rounded-2xl p-8 mb-12 border border-cyan-400/20"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm font-medium rounded-full">
                  Featured
                </span>
                <span className="text-slate-400 text-sm">
                  {new Date(release.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{release.title}</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">{release.summary}</p>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                  {release.category}
                </span>
                <a
                  href={release.url}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Read Full Release
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}

          {/* All Press Releases */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressReleases.filter(pr => !pr.featured).map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                    {release.category}
                  </span>
                  <span className="text-slate-400 text-xs">
                    {new Date(release.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 line-clamp-3">{release.title}</h3>
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">{release.summary}</p>
                <a
                  href={release.url}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                >
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Media Kit</h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Download our comprehensive media resources including logos, photos, fact sheets, and brand guidelines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaKit.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">{item.fileSize}</span>
                  <a
                    href={item.downloadUrl}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Company Information</h2>
            <p className="text-slate-300 text-lg">Essential facts and details about Zion Tech Group</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Company Overview */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">About Zion Tech Group</h3>
              <div className="space-y-4 text-slate-300">
                <p>
                  Zion Tech Group is a leading technology company specializing in AI-powered business solutions, 
                  cloud computing, and digital transformation services. Founded in 2009, we've been at the 
                  forefront of technological innovation, helping businesses leverage cutting-edge AI and 
                  emerging technologies to achieve unprecedented growth and efficiency.
                </p>
                <p>
                  Our mission is to democratize access to advanced AI technology, making it accessible 
                  to businesses of all sizes. We combine deep technical expertise with business acumen 
                  to deliver solutions that drive real business value.
                </p>
                <p>
                  Headquartered in Middletown, Delaware, we serve clients globally across various industries 
                  including healthcare, finance, manufacturing, and retail.
                </p>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Press Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-medium">Press Inquiries</div>
                    <a href={`mailto:${contactInfo.pressEmail}`} className="text-cyan-400 hover:text-cyan-300">
                      {contactInfo.pressEmail}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                  <div>
                    <div className="text-white font-medium">Address</div>
                    <div className="text-slate-300">{contactInfo.address}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-medium">Website</div>
                    <a href={contactInfo.website} className="text-cyan-400 hover:text-cyan-300">
                      {contactInfo.website}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-slate-600 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={contactInfo.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-slate-600 transition-all duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Tell Our Story?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Whether you're a journalist, analyst, or industry expert, we're here to help you 
              get the information you need about Zion Tech Group and our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:press@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="mr-2 w-5 h-5" />
                Contact Press Team
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                General Inquiries
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Press;
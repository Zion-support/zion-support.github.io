import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Newspaper, 
  FileText, 
  Download, 
  Mail, 
  Phone, 
  Globe, 
  Award,
  TrendingUp,
  Users,
  Building,
  Calendar,
  ExternalLink
} from 'lucide-react';

export default function Press() {
  const pressReleases = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Compliance Suite',
      date: '2024-08-15',
      summary: 'New AI compliance solution helps businesses automate regulatory requirements and reduce compliance costs by up to 60%.',
      category: 'Product Launch',
      link: '#',
      featured: true
    },
    {
      title: 'Zion Tech Group Named Top AI Company in Delaware',
      date: '2024-07-20',
      summary: 'Recognition for innovative AI solutions and contributions to the local technology ecosystem.',
      category: 'Awards',
      link: '#'
    },
    {
      title: 'Partnership with Major Healthcare Provider Announced',
      date: '2024-06-10',
      summary: 'Strategic partnership to deploy AI-powered healthcare analytics across multiple facilities.',
      category: 'Partnership',
      link: '#'
    },
    {
      title: 'Quantum Computing Breakthrough in AI Applications',
      date: '2024-05-15',
      summary: 'Research team achieves significant milestone in quantum AI algorithm development.',
      category: 'Research',
      link: '#'
    },
    {
      title: 'Zion Tech Group Expands to European Market',
      date: '2024-04-22',
      summary: 'Company opens new office in London to serve growing European client base.',
      category: 'Business',
      link: '#'
    }
  ];

  const mediaKit = [
    {
      title: 'Company Logo Pack',
      description: 'High-resolution logos in various formats (PNG, SVG, EPS)',
      size: '2.4 MB',
      icon: Download,
      link: '#'
    },
    {
      title: 'Executive Headshots',
      description: 'Professional photos of key team members',
      size: '15.2 MB',
      icon: Users,
      link: '#'
    },
    {
      title: 'Company Fact Sheet',
      description: 'Key facts, figures, and company information',
      size: '1.1 MB',
      icon: FileText,
      link: '#'
    },
    {
      title: 'Brand Guidelines',
      description: 'Complete brand identity and usage guidelines',
      size: '8.7 MB',
      icon: Globe,
      link: '#'
    }
  ];

  const companyStats = [
    { label: 'Founded', value: '2019', icon: Calendar },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Clients Served', value: '200+', icon: Building },
    { label: 'AI Solutions', value: '25+', icon: TrendingUp },
    { label: 'Countries', value: '15+', icon: Globe },
    { label: 'Awards Won', value: '12+', icon: Award }
  ];

  const contactInfo = {
    pressEmail: 'press@ziontechgroup.com',
    generalEmail: 'info@ziontechgroup.com',
    phone: '+1 302 464 0950',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Press & Media - Zion Tech Group"
        description="Media resources, press releases, and company information for journalists covering Zion Tech Group's AI and technology innovations."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Press &
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Media Center
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Stay updated with the latest news, press releases, and media resources from 
              Zion Tech Group. We're transforming the future of AI and technology.
            </p>
          </motion.div>

          {/* Company Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
          >
            {companyStats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Latest
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Press Releases
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Stay informed about our latest announcements, partnerships, and innovations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border ${
                  release.featured 
                    ? 'border-cyan-400/50 bg-gradient-to-br from-slate-800/50 to-cyan-900/20' 
                    : 'border-slate-700/50'
                } hover:border-cyan-400/50 transition-all duration-300`}
              >
                {release.featured && (
                  <div className="inline-flex items-center px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full mb-4">
                    <Award className="w-3 h-3 mr-1" />
                    Featured
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                    {release.category}
                  </span>
                  <span className="text-slate-400 text-sm">{release.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{release.title}</h3>
                <p className="text-slate-300 mb-4">{release.summary}</p>
                
                <a
                  href={release.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Read More
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Media
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Resources
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Download high-quality media assets, logos, and company information for your coverage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaKit.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-xs">{item.size}</span>
                  <a
                    href={item.link}
                    className="inline-flex items-center px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors"
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

      {/* Contact Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Media
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Inquiries
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our press team is available to answer questions, arrange interviews, and provide 
              additional information for your coverage.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Press Contact</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-white font-semibold">Press Email</div>
                      <a 
                        href={`mailto:${contactInfo.pressEmail}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        {contactInfo.pressEmail}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      <a 
                        href={`tel:${contactInfo.phone}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Globe className="w-5 h-5 text-cyan-400 mt-1" />
                    <div>
                      <div className="text-white font-semibold">Address</div>
                      <div className="text-slate-300">{contactInfo.address}</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Industry</span>
                    <span className="text-white font-semibold">AI & Technology</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-slate-300">Founded</span>
                    <span className="text-white font-semibold">2019</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-slate-300">Headquarters</span>
                    <span className="text-white font-semibold">Middletown, DE</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-slate-300">CEO</span>
                    <span className="text-white font-semibold">Kleber Santos</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-slate-300">Employees</span>
                    <span className="text-white font-semibold">50+</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
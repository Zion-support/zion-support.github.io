import React from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { SEO  } from "../components/SEO";
import { Newspaper, 
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
<<<<<<< HEAD
  Globe,
  Star
 } from 'lucide-react';
=======
  Users,
  Zap,
  Shield,
  Brain,
  Rocket
} from 'lucide-react';

export default function Press() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [;
    { id: 'all', name: 'All News', count: 45 },;
    { id: 'press-releases', name: 'Press Releases', count: 18 },;
    { id: 'media-coverage', name: 'Media Coverage', count: 15 },;
    { id: 'awards', name: 'Awards & Recognition', count: 8 },;
    { id: 'thought-leadership', name: 'Thought Leadership', count: 4 };
  ];
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

export default function Press(...args[]):  {
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
      category: 'Comp News',
      readMore: '/press/series-a-funding-announcement'
    },
    {
      title: 'Zion Tech Group Named Top AI Comp by TechCrunch',
      date: '2023-11-28',
      summary: 'Recognition for breakthrough innovations in AI-powered business solutions.',
      category: 'Awards',
      readMore: '/press/techcrunch-top-ai-comp'
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
      category: 'Comp News',
      readMore: '/press/european-expansion'
    },
    {
<<<<<<< HEAD
      title: 'Healthcare AI Platform Achieves FDA Approval',
      date: '2023-08-12',
      summary: 'AI-powered diagnostic platform receives regulatory approval for clinical use.',
      category: 'Regulatory',
      readMore: '/press/fda-approval-healthcare-ai'
    }
=======
      id: 6,
      title: "Zion Tech Group Expands Global Operations to Europe",
      date: "2023-12-05",
      author: "Press Team",;
      category: "press-releases",;
      excerpt: "Strategic expansion into European markets to serve growing demand for AI and technology solutions across the region.",;
      content: "Zion Tech Group has announced the expansion of its global operations into Europe, establishing a new regional headquarters in London and satellite offices in key European markets. This expansion will enable the company to better serve European clients and capitalize on growing demand for AI and technology solutions in the region.",;
      featured: false,;
      tags: ["Global Expansion", "Europe", "Market Growth"];
    };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  ];

  const mediaResources = [
    {
      title: 'Comp Logo',
      description: 'High-resolution Zion Tech Group logo in various formats',
      formats['PNG', 'SVG', 'EPS'],
      download: '/media/zion-tech-group-logo.zip'
    },
    {
      title: 'Executive Headshots',
      description: 'Professional photos of leadership team members',
      formats['JPG', 'PNG'],
      download: '/media/executive-headshots.zip'
    },
    {
      title: 'Product Screenshots',
      description: 'High-quality screenshots of our AI platforms',
      formats['PNG', 'JPG'],
      download: '/media/product-screenshots.zip'
    },
    {
<<<<<<< HEAD
      title: 'Comp Fact Sheet',
      description: 'One-page overview of Zion Tech Group',
      formats['PDF'],
      download: '/media/company-fact-sheet.pdf'
    },
    {
      title: 'Brand Guidelines',
      description: 'Complete brand identity and usage guidelines',
      formats['PDF'],
      download: '/media/brand-guidelines.pdf'
    },
    {
      title: 'Product Brochures',
      description: 'Detailed product information and specifications',
      formats['PDF'],
      download: '/media/product-brochures.zip';
    };
  ];

  const compStats = [
    { label: 'Years in Business', value: '8+', icon: Calendar },
    { label: 'Team Members', value: '150+', icon: Users },
    { label: 'Countries Served', value: '25+', icon: Globe },
    { label: 'AI Models Deployed', value: '500+', icon: TrendingUp },
    { label: 'Client Satisfaction', value: '98%', icon: Star },;
    { label: 'Industry Awards', value: '15+', icon: Award };
  ];

  const contactInfo = {
  pressEmail: 'press@ziontechgroup.com',
    generalEmail: 'info@ziontechgroup.com',
    phone: '+1 302 464 0950',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    socialMedia: {
      linkedin: 'https://linkedin.com/company/ziontechgroup',
      twitter: 'https://twitter.com/ziontechgroup',
  github: 'https://github.com/ziontechgroup'
    
;
};
  };

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Press & Media - Zion Tech Group"
        description="Press releases, media resources, and comp information for journalists and media professionals."
      />
      
=======
      id: 4,
      title: "Startup Spotlight: Zion Tech Group's Journey to AI Leadership",
      publication: "VentureBeat",
      date: "2023-12-12",;
      author: "Emily Watson",;
      category: "media-coverage",;
      excerpt: "Profile of Zion Tech Group's rapid growth and innovative approach to AI and technology solutions.",;
      url: "https://venturebeat.com/zion-tech-group-startup",;
      featured: false;
    };
  ];

  const awards = [
    {
      id: 1,
      title: "Inc. 5000 Fastest-Growing Companies",
      organization: "Inc. Magazine",
      year: "2023",
      category: "awards",
      description: "Ranked among the top 100 fastest-growing private companies in America",
      image: "/images/awards/inc5000.png"
    },
    {
      id: 2,
      title: "Best AI Solution Provider",
      organization: "Tech Innovation Awards",
      year: "2023",
      category: "awards",
      description: "Recognized for excellence in AI-powered business solutions",
      image: "/images/awards/tech-innovation.png"
    },
    {
      id: 3,
      title: "Cybersecurity Excellence Award",;
      organization: "InfoSec Awards",;
      year: "2023",;
      category: "awards",;
      description: "Outstanding achievement in AI-powered cybersecurity solutions",;
      image: "/images/awards/infosec.png";
    };
  ];

  const filteredContent = selectedCategory === 'all' ;
    ? [...pressReleases, ...mediaCoverage, ...awards];
    : [...pressReleases, ...mediaCoverage, ...awards].filter(item => item.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0.1;
      };
    };
  };

  const itemVariants = {
  hidden: { opacity: 0,
  y: 20 





;
},;
    visible: {;
      opacity: 1,;
      y: 0,;
      transition: { duration: 0.6 };
    };
  };

  return (
    <div className = "min-h-screen bg-futuristic">
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
<<<<<<< HEAD
            initial = {
  { opacity: 0,
  y: 20 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl mb-8"
=======
            initial = {
  { opacity: 0,
  y: 30 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
          >
            <Newspaper className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 
            initial = {
  { opacity: 0,
  y: 20 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition = {
  { duration: 0.6,
  delay: 0.1 

}}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Press & Media
          </motion.h1>
          <motion.p 
            initial = {
  { opacity: 0,
  y: 20 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition = {
  { duration: 0.6,
  delay: 0.2 

}}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-12"
          >
            Stay updated with the latest news, press releases, and media resources from Zion Tech Group. 
            We're transforming businesses through innovative AI and technology solutions.
          </motion.p>
          
          {/* Comp Stats */}
          <motion.div 
            initial = {
  { opacity: 0,
  y: 20 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition = {
  { duration: 0.6,
  delay: 0.3 

}}
            className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto"
          >
            {compStats.map((stat, index)  => (
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
        <div className="container mx-auto">
          <motion.h2 
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-16 text-white"
          >
            Latest Press Releases
          </motion.h2>
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {pressReleases.map((release, index)  => (
              <motion.article
                key={release.title}
                initial = {
  { opacity: 0,
  y: 20 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full">
                    {release.category}
                  </span>
                  <time className="text-sm text-slate-400">{release.date}</time>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {release.title}
                </h3>
                
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                  {release.summary}
                </p>
                
                <a 
                  href={release.readMore}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  Read More
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </motion.article>
            ))}
          </div>
          
          <motion.div 
<<<<<<< HEAD
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition = {
  { duration: 0.6,
  delay: 0.4 

}}
            className="text-center mt-12"
          >
            <a 
              href="/press/archive"
              className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              View All Press Releases
            </a>
=======
            className="text-center mb-16"
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Latest News & Updates
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Stay informed about Zion Tech Group's latest developments, achievements, and industry insights.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredContent.filter(item => item.featured).map((item) => (
              <motion.article 
                key={item.id}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 group"
                variants={itemVariants}
                whileHover = {
  { y: -5,
  scale: 1.02 






}}
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                      {item.category.replace('-', ' ').toUpperCase()}
                    </span>
                    <span className="text-zion-slate-light text-sm flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="mb-4">
                    <p className="text-zion-cyan font-medium text-sm mb-2">
                      {item.author} • {item.publication || 'Zion Tech Group'}
                    </p>
                    <p className="text-zion-slate-light leading-relaxed">{item.excerpt}</p>
                  </div>

                  {item.tags && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-zion-slate-dark/50 text-zion-slate-light text-xs rounded border border-zion-cyan/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Content Grid */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              All Press & Media
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Browse our complete collection of press releases, media coverage, and company updates.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredContent.filter(item => !item.featured).map((item) => (
              <motion.article 
                key={item.id}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 group"
                variants={itemVariants}
                whileHover = {
  { y: -5,
  scale: 1.02 






}}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                      {item.category.replace('-', ' ').toUpperCase()}
                    </span>
                    <span className="text-zion-slate-light text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <div className="mb-4">
                    <p className="text-zion-cyan font-medium text-xs mb-2">
                      {item.author} • {item.publication || 'Zion Tech Group'}
                    </p>
                    <p className="text-zion-slate-light text-sm leading-relaxed line-clamp-3">{item.excerpt}</p>
                  </div>

                  <button className="w-full px-4 py-2 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
          </motion.div>
        </div>
      </section>

      {/* Media Resources */}
<<<<<<< HEAD
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <motion.h2 
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
=======
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-16 text-white"
          >
            Media Resources
          </motion.h2>
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaResources.map((resource, index)  => (
              <motion.div
                key={resource.title}
                initial = {
  { opacity: 0,
  y: 20 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                    {resource.title.includes('Logo') ? (
                      <Image className="w-5 h-5 text-white" />
                    ) : resource.title.includes('Video') ? (
                      <Video className="w-5 h-5 text-white" />
                    ) : (
                      <FileText className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{resource.title}</h3>
                </div>
                
                <p className="text-slate-300 text-sm mb-4">{resource.description}</p>
                
                <div className="mb-4">
                  <span className="text-xs text-slate-400">Formats: </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {resource.formats.map((format) => (
                      <span key={format} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-300">
                        {format}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={resource.download}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
<<<<<<< HEAD
            <h2 className="text-3xl font-bold mb-16 text-white">Media Contact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Press Inquiries</h3>
                <div className="space-y-3">
                  <a 
                    href={`mailto:${contactInfo.pressEmail}`}
                    className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>{contactInfo.pressEmail}</span>
                  </a>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{contactInfo.phone}</span>
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">General Information</h3>
                <div className="space-y-3">
                  <a 
                    href={`mailto:${contactInfo.generalEmail}`}
                    className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>{contactInfo.generalEmail}</span>
                  </a>
                  <div className="flex items-center justify-center space-x-2 text-slate-300">
                    <MapPin className="w-5 h-5" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex items-center justify-center space-x-6">
                <a 
                  href={contactInfo.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href={contactInfo.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href={contactInfo.socialMedia.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-gray-300 transition-colors"
                >
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
=======
            <motion.div 
              className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group text-center"
              variants={itemVariants}
              whileHover = {
  { y: -5,
  scale: 1.02 






}}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Media Kit</h3>
              <p className="text-zion-slate-light text-sm mb-6">Download our comprehensive media kit with company information, logos, and press materials.</p>
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-all duration-300">
                Download
              </button>
            </motion.div>

            <motion.div 
              className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group text-center"
              variants={itemVariants}
              whileHover = {
  { y: -5,
  scale: 1.02 






}}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Company Fact Sheet</h3>
              <p className="text-zion-slate-light text-sm mb-6">Key facts, statistics, and company information for media reference.</p>
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-all duration-300">
                Download
              </button>
            </motion.div>

            <motion.div 
              className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group text-center"
              variants={itemVariants}
              whileHover = {
  { y: -5,
  scale: 1.02 






}}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Logo & Brand Assets</h3>
              <p className="text-zion-slate-light text-sm mb-6">High-resolution logos and brand assets for media use.</p>
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-all duration-300">
                Download
              </button>
            </motion.div>

            <motion.div 
              className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group text-center"
              variants={itemVariants}
              whileHover = {
  { y: -5,
  scale: 1.02 






}}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Executive Bios</h3>
              <p className="text-zion-slate-light text-sm mb-6">Biographies and photos of our executive leadership team.</p>
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-all duration-300">
                Download
              </button>
            </motion.div>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
          </motion.div>
        </div>
      </section>

      {/* Press Kit Download */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto text-center">
          <motion.div
<<<<<<< HEAD
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
=======
            initial = {
  { opacity: 0,
  y: 30 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Complete Press Kit</h2>
            <p className="text-slate-300 mb-8">
              Download our comprehensive press kit containing all media resources, 
              comp information, and press materials in one convenient package.
            </p>
            <a 
              href="/media/zion-tech-group-press-kit.zip"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
<<<<<<< HEAD
              <Download className="w-5 h-5 mr-2" />
              Download Complete Press Kit
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )}
=======;
              Contact Media Team;
            </motion.button>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

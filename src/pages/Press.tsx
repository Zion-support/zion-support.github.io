import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Download, 
  Mail, 
  Phone, 
  Globe, 
  FileText, 
  Image, 
  Video, 
  Users,
  Zap,
  Shield,
  Brain} from 'lucide-react';

export default function Press() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', count: 45 },
    { id: 'press-releases', name: 'Press Releases', count: 18 },
    { id: 'media-coverage', name: 'Media Coverage', count: 15 },
    { id: 'awards', name: 'Awards & Recognition', count: 8 },
    { id: 'thought-leadership', name: 'Thought Leadership', count: 4 }
  ];

const Press: React.FC = () => {
  const pressReleases = [
    {
      id: 1,
      title: "Zion Tech Group Secures $50M Series B Funding for AI Expansion",
      date: "2025-01-20",
      excerpt: "Funding will accelerate development of next-generation AI solutions and expand market presence in Europe and Asia.",
      category: "Funding"
    },
    {
      id: 2,
      title: "Zion Tech Group Appoints Dr. Sarah Chen as Chief AI Officer",
      date: "2025-01-15",
      excerpt: "Former Google AI researcher joins leadership team to drive innovation in artificial intelligence and machine learning.",
      category: "Leadership"
    },
    {
      id: 3,
      title: "Zion Tech Group Named to Inc. 5000 Fastest-Growing Companies",
      date: "2023-12-20",
      author: "Press Team",
      category: "awards",
      excerpt: "Company recognized for exceptional growth and innovation in the technology sector, ranking among the top 100 fastest-growing private companies in America.",
      content: "Zion Tech Group has been named to the prestigious Inc. 5000 list of America's fastest-growing private companies, ranking in the top 100. This recognition highlights the company's exceptional growth trajectory and innovative approach to solving complex business challenges through AI and technology solutions. The achievement reflects Zion Tech Group's commitment to delivering value to clients while maintaining rapid expansion.",
      featured: false,
      tags: ["Award", "Growth", "Recognition"]
    },
    {
      id: 4,
      title: "Zion Tech Group Launches AI-Powered Cybersecurity Platform",
      date: "2023-12-15",
      author: "Press Team",
      category: "press-releases",
      excerpt: "Next-generation cybersecurity solution combines artificial intelligence with advanced threat detection to provide enterprise-grade protection against evolving cyber threats.",
      content: "Zion Tech Group has launched its latest AI-powered cybersecurity platform, designed to provide enterprise-grade protection against increasingly sophisticated cyber threats. The platform leverages advanced machine learning algorithms to detect and respond to security incidents in real-time, offering organizations unprecedented levels of protection and threat intelligence.",
      featured: false,
      tags: ["Cybersecurity", "AI", "Product Launch"]
    },
    {
      id: 5,
      title: "Zion Tech Group CEO Kleber Oliveira Featured in Forbes Technology Council",
      date: "2023-12-10",
      author: "Forbes",
      category: "thought-leadership",
      excerpt: "Company CEO shares insights on the future of AI and its impact on business transformation in exclusive Forbes Technology Council article.",
      content: "Zion Tech Group CEO Kleber Oliveira has been featured in Forbes Technology Council, sharing expert insights on the future of artificial intelligence and its transformative impact on business operations. The article explores how AI is reshaping industries and creating new opportunities for innovation and growth.",
      featured: false,
      tags: ["Thought Leadership", "AI", "Business Transformation"]
    },
    {
      id: 6,
      title: "Zion Tech Group Expands Global Operations to Europe",
      date: "2023-12-05",
      author: "Press Team",
      category: "press-releases",
      excerpt: "Strategic expansion into European markets to serve growing demand for AI and technology solutions across the region.",
      content: "Zion Tech Group has announced the expansion of its global operations into Europe, establishing a new regional headquarters in London and satellite offices in key European markets. This expansion will enable the company to better serve European clients and capitalize on growing demand for AI and technology solutions in the region.",
      featured: false,
      tags: ["Global Expansion", "Europe", "Market Growth"]
    }
  ];

  const mediaAssets = [
    {
      title: "Company Logo",
      description: "High-resolution Zion Tech Group logo in various formats",
      formats: ["SVG", "PNG", "JPG"],
      size: "Various sizes available",
      downloadUrl: "/assets/logo.zip"
    },
    {
      title: "Executive Headshots",
      description: "Professional photos of key leadership team members",
      formats: ["JPG", "PNG"],
      size: "High resolution",
      downloadUrl: "/assets/headshots.zip"
    },
    {
      title: "Product Screenshots",
      description: "Screenshots and mockups of our key products and services",
      formats: ["PNG", "JPG"],
      size: "Various sizes",
      downloadUrl: "/assets/products.zip"
    },
    {
      id: 4,
      title: "Startup Spotlight: Zion Tech Group's Journey to AI Leadership",
      publication: "VentureBeat",
      date: "2023-12-12",
      author: "Emily Watson",
      category: "media-coverage",
      excerpt: "Profile of Zion Tech Group's rapid growth and innovative approach to AI and technology solutions.",
      url: "https://venturebeat.com/zion-tech-group-startup",
      featured: false
    }
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
      title: "Cybersecurity Excellence Award",
      organization: "InfoSec Awards",
      year: "2023",
      category: "awards",
      description: "Outstanding achievement in AI-powered cybersecurity solutions",
      image: "/images/awards/infosec.png"
    }
  ];

  const filteredContent = selectedCategory === 'all'
    ? [...pressReleases, ...mediaCoverage, ...awards]
    : [...pressReleases, ...mediaCoverage, ...awards].filter(item => item.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Newspaper className="w-12 h-12 text-white" />
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Press &{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Media
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Media resources, press releases, and information for journalists covering Zion Tech Group and the technology industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-zion-slate-dark border-b border-zion-cyan/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-dark/50 text-zion-slate-light border border-zion-cyan/20 hover:border-zion-cyan/40 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

      {/* Featured Press Releases */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
                whileHover={{ y: -5, scale: 1.02 }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
                whileHover={{ y: -5, scale: 1.02 }}
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
          </motion.div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Media Resources
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Access our media kit, company information, and resources for journalists and media professionals.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group text-center"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
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
              whileHover={{ y: -5, scale: 1.02 }}
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
              whileHover={{ y: -5, scale: 1.02 }}
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
              whileHover={{ y: -5, scale: 1.02 }}
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
          </motion.div>
        </div>
      </section>

      {/* Contact Media Team */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Our Media Team
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              For media inquiries, interview requests, or additional information,
              our media relations team is here to help.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-zion-blue-dark/30 rounded-xl border border-zion-cyan/20">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-zion-slate-light text-sm">press@ziontechgroup.com</p>
              </div>

              <div className="text-center p-6 bg-zion-blue-dark/30 rounded-xl border border-zion-cyan/20">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-zion-slate-light text-sm">+1 (302) 464-0950</p>
              </div>

              <div className="text-center p-6 bg-zion-blue-dark/30 rounded-xl border border-zion-cyan/20">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                <p className="text-zion-slate-light text-sm">ziontechgroup.com</p>
              </div>
            </div>
          </div>

            <motion.button
              className="mt-8 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Media Team
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
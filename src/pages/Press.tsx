import {}
  Newspaper,
  Calendar,
  User,
  ArrowRight,
  Download,
  Mail,  Phone,
  Globe,
  Award,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Brain,
  Rocket} from 'lucide-react';

export default function Press(function Press() {): any {}
  const [selectedCategory, setSelectedCategory] = useState('all');

  
  
  
  
  
  
  
  return ("    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}""
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">""
        <div className="absolute inset-0 opacity-10">""
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>""
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        </div>
""
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >""
            <div className="flex justify-center mb-8">""
              <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">""
                <Newspaper className="w-12 h-12 text-white"  />              </div>
            </div>
""
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Press &{' '}""
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Media;
              </span>
            </h1>""
            <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest news, press releases, and media'
              coverage about Zion Tech Group's innovations, achievements, and;
              industry leadership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}""
      <section className="py-8 bg-zion-slate-dark border-b border-zion-cyan/20">""
        <div className="container mx-auto px-4">""
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button;
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${}
                  selectedCategory === category.id'
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25''
                    : 'bg-zion-blue-dark/50 text-zion-slate-light border border-zion-cyan/20 hover:border-zion-cyan/40 hover:text-white'`
                }`}
              >
                {category.name} ({category.count}) </button>) ) }
          </div>
        </div>
      </section>

      {/* Featured Press Releases */}""
      <section className="py-20 bg-zion-slate-dark">""
        <div className="container mx-auto px-4">
          <motion.div""
            className="text-center mb-16""
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >""
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Latest News & Updates;
            </h2>""
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Stay informed about Zion Tech Group's latest developments,
              achievements, and industry insights.
            </p>
          </motion.div>

          <motion.div""
            className="grid grid-cols-1 lg:grid-cols-2 gap-8""
            variants={containerVariants}""
            initial="hidden""
            whileInView="visible""
            viewport={{ once: true }}
          >
            {filteredContent;
              .filter(item => item.featured)
              .map(item => (
                <motion.article;
                  key={item.id}""
                  className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 group""
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >""
                  <div className="p-8">""
                    <div className="flex items-center gap-3 mb-4">""
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                        {item.category.replace('-',).toUpperCase()}
                      </span>""
                      <span className="text-zion-slate-light text-sm flex items-center gap-1">""
                        <Calendar className="w-3 h-3"  />
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                    </div>
""
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                      {item.title}
                    </h3>
""
                    <div className="mb-4">""
                      <p className="text-zion-cyan font-medium text-sm mb-2">
                        {item.author} • {item.publication || 'Zion Tech Group'}
                      </p>""
                      <p className="text-zion-slate-light leading-relaxed">
                        {item.excerpt}
                      </p>                    </div>

                    {item.tags && (""
                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.tags.map((tag, index) => (
                          <span;
                            key={index}""
                            className="px-2 py-1 bg-zion-slate-dark/50 text-zion-slate-light text-xs rounded border border-zion-cyan/20""
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
""
                    <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2">
                      Read Full Article""
                      <ArrowRight className="w-4 h-4"  />
                    </button>
                  </div>
                </motion.article>
              ))}          </motion.div>
        </div>
      </section>

      {/* All Content Grid */}""
      <section className="py-20 bg-zion-blue-dark">""
        <div className="container mx-auto px-4">
          <motion.div""
            className="text-center mb-16""
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >""
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              All Press & Media;
            </h2>""
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Browse our complete collection of press releases, media coverage,
              and company updates.
            </p>
          </motion.div>

          <motion.div""
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8""
            variants={containerVariants}""
            initial="hidden""
            whileInView="visible""
            viewport={{ once: true }}
          >
            {filteredContent;
              .filter(item => !item.featured)
              .map(item => (
                <motion.article;
                  key={item.id}""
                  className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 group""
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >""
                  <div className="p-6">""
                    <div className="flex items-center gap-3 mb-4">""
                      <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                        {item.category.replace('-',).toUpperCase()}
                      </span>""
                      <span className="text-zion-slate-light text-xs flex items-center gap-1">""
                        <Calendar className="w-3 h-3"  />
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                    </div>
""
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">
                      {item.title}
                    </h3>
""
                    <div className="mb-4">""
                      <p className="text-zion-cyan font-medium text-xs mb-2">
                        {item.author} • {item.publication || 'Zion Tech Group'}
                      </p>""
                      <p className="text-zion-slate-light text-sm leading-relaxed line-clamp-3">
                        {item.excerpt}
                      </p>
                    </div>
""
                    <button className="w-full px-4 py-2 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                      Read More""
                      <ArrowRight className="w-4 h-4"  />
                    </button>
                  </div>
                </motion.article>
              ))}          </motion.div>
        </div>
      </section>

      {/* Media Resources */}""
      <section className="py-20 bg-zion-slate-dark">""
        <div className="container mx-auto px-4">
          <motion.div""
            className="text-center mb-16""
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >""
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Media Resources;
            </h2>""
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Access our media kit, company information, and resources for;
              journalists and media professionals.
            </p>
          </motion.div>

          <motion.div""
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8""
            variants={containerVariants}""
            initial="hidden""
            whileInView="visible""
            viewport={{ once: true }}
          >
            <motion.div""
              className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group text-center""
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >""
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">""
                <Download className="w-8 h-8 text-white"  />
              </div>""
              <h3 className="text-xl font-bold text-white mb-4">Media Kit</h3>""
              <p className="text-zion-slate-light text-sm mb-6">
                Download our comprehensive media kit with company information,
                logos, and press materials.
              </p>"              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-all duration-300">
                Download;
              </button>
            </motion.div>

            <motion.div""
              className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group text-center""
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >""
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">""
                <Globe className="w-8 h-8 text-white"  />
              </div>""
              <h3 className="text-xl font-bold text-white mb-4">
                Company Fact Sheet;
              </h3>""
              <p className="text-zion-slate-light text-sm mb-6">
                Key facts, statistics, and company information for media;
                reference.
              </p>"              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-all duration-300">
                Download;
              </button>
            </motion.div>

            <motion.div""
              className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group text-center""
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >""
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">""
                <Award className="w-8 h-8 text-white"  />
              </div>""
              <h3 className="text-xl font-bold text-white mb-4">
                Logo & Brand Assets;
              </h3>""
              <p className="text-zion-slate-light text-sm mb-6">
                High-resolution logos and brand assets for media use.
              </p>"              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-all duration-300">
                Download;
              </button>
            </motion.div>

            <motion.div""
              className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group text-center""
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >""
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">""
                <Users className="w-8 h-8 text-white"  />
              </div>""
              <h3 className="text-xl font-bold text-white mb-4">
                Executive Bios;
              </h3>""
              <p className="text-zion-slate-light text-sm mb-6">
                Biographies and photos of our executive leadership team.
              </p>"              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-all duration-300">
                Download;
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Media Team */}""
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">""
        <div className="container mx-auto px-4 text-center">
          <motion.div;
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >""
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Our Media Team;
            </h2>""
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              For media inquiries, interview requests, or additional;
              information, our media relations team is here to help.
            </p>
""
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">""
              <div className="text-center p-6 bg-zion-blue-dark/30 rounded-xl border border-zion-cyan/20">""
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">""
                  <Mail className="w-6 h-6 text-zion-cyan"  />
                </div>""
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>""
                <p className="text-zion-slate-light text-sm">
                  press@ziontechgroup.com;
                </p>
              </div>
""
              <div className="text-center p-6 bg-zion-blue-dark/30 rounded-xl border border-zion-cyan/20">""
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">""
                  <Phone className="w-6 h-6 text-zion-cyan"  />
                </div>""
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>""
                <p className="text-zion-slate-light text-sm">
                  +1 (302) 464-0950;
                </p>
              </div>
""
              <div className="text-center p-6 bg-zion-blue-dark/30 rounded-xl border border-zion-cyan/20">""
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">""
                  <Globe className="w-6 h-6 text-zion-cyan"  />
                </div>""
                <h3 className="text-lg font-semibold text-white mb-2">
                  Website;
                </h3>""
                <p className="text-zion-slate-light text-sm">
                  ziontechgroup.com;
                </p>              </div>
            </div>

            <motion.button""
              className="mt-8 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25""
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Media Team;
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )}
'"`
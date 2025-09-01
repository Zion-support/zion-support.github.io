import {}
  BookOpen, 
  FileText, 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Brain, 
  Rocket,
  Zap,
  Settings,
  Users,
  Globe,
  Search,
  Download,
  ExternalLink,
  ChevronRight;
} from 'lucide-react';

export default function Docs(function Docs() {): any {}
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto""
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-white"  />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Documentation;
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Comprehensive guides, tutorials, and technical resources for all Zion Tech Group services;
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5"  />
                <input;
                  type="text""
                  placeholder="Search documentation...""
                  className="pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent w-80""
                />
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105">
                Search;
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16""
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Explore Our Documentation;
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Find detailed guides, tutorials, and technical resources organized by service category;
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentationCategories.map((category, index) => (
              <motion.div;
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200""
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mr-4`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                      <p className="text-sm text-slate-600">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {category.links.map((link) => (
                      <Link;
                        key={link.name}
                        to={link.href}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors group""
                      >
                        <div>
                          <div className="font-medium text-slate-900 group-hover:text-cyan-600 transition-colors">
                            {link.name}
                          </div>
                          <div className="text-sm text-slate-500">{link.description}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 transition-colors"  />
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16""
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Quick Access;
            </h2>
            <p className="text-xl text-slate-600">
              Essential resources and tools for developers and users;
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div;
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link;
                  to={link.href}
                  className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 group""
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg mb-4 group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-200">
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {link.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-12 text-center text-white""
          >
            <h2 className="text-4xl font-bold mb-4">
              Need Help Getting Started?
            </h2>
            <p className="text-xl mb-8 text-cyan-100">
              Our team is here to help you succeed with our services;
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link;
                to="/contact""
                className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors""
              >
                Contact Support;
              </Link>
              <Link;
                to="/training""
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-colors""
              >
                View Training;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )}
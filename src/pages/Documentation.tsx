
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ;
  BookOpen, Code, FileText, Video, Download, ;
  Search, ArrowRight, ExternalLink, Star, Users} from 'lucide-react';
;
export default function Documentation() {;
  const docCategories = [
    {;
      title: "Getting Started",;
      description: "Quick start guides and setup instructions",;
      icon: BookOpen,;
      articles: 12,;
      color: "from-blue-500 to-cyan-500"},;
    {;
      title: "API Reference",;
      description: "Complete API documentation and examples",;
      icon: Code,;
      articles: 45,;
      color: "from-green-500 to-emerald-500"},;
    {;
      title: "Guides & Tutorials",;
      description: "Step-by-step tutorials and best practices",;
      icon: FileText,;
      articles: 28,;
      color: "from-purple-500 to-pink-500"},;
    {;
      title: "Video Tutorials",;
      description: "Visual learning resources and demos",;
      icon: Video,;
      articles: 15,;
      color: "from-orange-500 to-red-500"}
  ];
;
  const popularDocs = [
    {;
      title: "Quick Start Guide",;
      description: "Get up and running with Zion Tech Group services in minutes",;
      category: "Getting Started",;
      readTime: "5 min read",;
      views: 1250},;
    {;
      title: "API Authentication",;
      description: "Learn how to authenticate and secure your API requests",;
      category: "API Reference",;
      readTime: "8 min read",;
      views: 980},;
    {;
      title: "AI Model Integration",;
      description: "Integrate our AI models into your applications",;
      category: "Guides & Tutorials",;
      readTime: "12 min read",;
      views: 756},;
    {;
      title: "Quantum Computing Basics",;
      description: "Introduction to quantum computing concepts and applications",;
      category: "Guides & Tutorials",;
      readTime: "15 min read",;
      views: 634;

      icon: BookOpen, articles: 12,
      color: "from-blue-500 to-cyan-500"
    }, { title: "API Reference",
      description: "Complete API documentation and examples", icon: Code,
      articles: 45, color: "from-green-500 to-emerald-500"
    }, { title: "Guides & Tutorials", description: "Step-by-step tutorials and best practices",
      icon: FileText, articles: 28,
      color: "from-purple-500 to-pink-500"
    }, { title: "Video Tutorials",
      description: "Visual learning resources and demos", icon: Video,
      articles: 15, color: "from-orange-500 to-red-500"

  ];

  const popularDocs = [

      title: "Quick Start Guide", description: "Get up and running with Zion Tech Group services in minutes",

      category: "Getting Started", readTime: "5 min read",
      views: 1250
    }, { title: "API Authentication",
      description: "Learn how to authenticate and secure your API requests", category: "API Reference",
      readTime: "8 min read", views: 980
    }, { title: "AI Model Integration", description: "Integrate our AI models into your applications",
      category: "Guides & Tutorials", readTime: "12 min read",
      views: 756
    }, { title: "Quantum Computing Basics",
      description: "Introduction to quantum computing concepts and applications", category: "Guides & Tutorials",
      readTime: "15 min read", views: 634

  ];

    <>
      <SEO 
        title=&quot;Documentation - Zion Tech Group | Technical Guides & API Reference&quot;
        description=&quot;Comprehensive documentation for Zion Tech Group services. Find API references, guides, tutorials, and technical resources to help you build with our platform.&quot;
        keywords=&quot;documentation, API reference, guides, tutorials, technical docs, Zion Tech Group&quot;
      />&quot;
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>
        {/* Hero Section */}&quot;
        <section className=&quot;py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div

              className="text-center max-w-4xl mx-auto"
            ></motion>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Documentation

              </h1>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Comprehensive guides, API references, and technical resources 
                to help you build amazing solutions with our platform&quot;
              </p>
              
              {/* Search Bar */}
              <div className=&quot;max-w-2xl mx-auto&quot;>&quot;"
                <div className=&quot;relative&quot;>&quot;"
                  <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />&quot;
                  <input

                </div>
              </div>

        {/* Categories */}
        <section className=&quot;py-16&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div

              className="text-center mb-12"
            ></motion>
              <h2 className="text-4xl font-bold text-white mb-4"></h>Browse Documentation</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find the information you need organized by category and topic

              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-4 gap-8&quot;>
              {docCategories.map((category, index) => (&quot}
                <motion.div

                  key={category.title}

                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                    <category.icon className=&quot;w-8 h-8 text-white&quot; />&quot;
                  </div>

                  </div>
                </motion.div>

              ))}
            </div>;
          </div>;
        </section>;

        {/* Popular Documentation */}

              className="text-center mb-12"
            ></motion>
              <h2 className="text-4xl font-bold text-white mb-4"></h>Popular Documentation</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Most viewed and helpful documentation articles

              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
              {popularDocs.map((doc, index) => (&quot}
                <motion.div

                  key={doc.title}

                    </span>
                    <div className=&quot;flex items-center text-gray-400 text-sm&quot;>&quot;"
                      <Users className=&quot;w-4 h-4 mr-1&quot; />
                      {doc.views}&quot;
                    </div>
                  </div>
                  

                    </button>
                  </div>
                </motion.div>

              ))}
            </div>;
          </div>;
        </section>;

        {/* Resources */}

              className="text-center mb-12"
            ></motion>
              <h2 className="text-4xl font-bold text-white mb-4"></h>Additional Resources</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Download guides, access code examples, and explore our developer resources
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }
                whileInView={{ opacity: 1, y: 0 }
                transition={{ duration: 0.8, delay: 0.1 }
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 text-center"
              ></motion>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2"></h>SDK Downloads</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Download our SDKs for popular programming languages

                </p>
                <button className=&quot;px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors&quot;>
                  Download SDKs&quot;
                </button>
              </motion.div>

              <motion.div

                </p>
                <button className=&quot;px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors&quot;>
                  View Examples&quot;
                </button>
              </motion.div>

              <motion.div

                </p>
                <button className=&quot;px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors&quot;>
                  Visit Portal&quot;
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      )}

        {/* Support */}
        <section className=&quot;py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div

              className="text-center max-w-4xl mx-auto"
            ></motion>
              <h2 className="text-4xl font-bold text-white mb-6">
                Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can&apos;t find what you&apos;re looking for? Our support team is here to help 
                you get the most out of our platform.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">

                <a
                  href=&quot;/help&quot;
                  className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105&quot;
                >&quot;
                  <BookOpen className=&quot;w-5 h-5 mr-2&quot; />
                  Contact Support&quot;
                </a>
                <a
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hove,r:text-white transition-all duration-200&quot;
                >&quot;
                  <ArrowRight className=&quot;w-5 h-5 mr-2&quot; />
                  Get in Touch&quot;
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* No Results */}
        {filteredSections.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No documentation found</h3>
            <p className="text-gray-400">Try adjusting your search terms or category filter.</p>
          </div>
        )}
      </div>
</>


  )}



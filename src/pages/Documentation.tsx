
  const popularDocs = [
    { title: "Quick Start Guide", description: "Get up and running with Zion Tech Group services in minutes",
      title: "Quick Start Guide", description: "Get up and running with Zion Tech Group services in minutes",
      category: "Getting Started", readTime: "5 min read",
      views: 1250
    }, { title: "API Authentication",
      description: "Learn how to authenticate and secure your API requests", category: "API Reference",
      readTime: "8 min read", views: 980
    }
    { title: "AI Model Integration", description: "Integrate our AI models into your applications",
      category: "Guides & Tutorials", readTime: "12 min read",
      views: 756
    }, { title: "Quantum Computing Basics",
      description: "Introduction to quantum computing concepts and applications", category: "Guides & Tutorials",
      readTime: "15 min read", views: 634
    }
  ];
;
  return (;
    <>;
      <SEO ;
        title="Documentation - Zion Tech Group | Technical Guides & API Reference";
        description="Comprehensive documentation for Zion Tech Group services. Find API references, guides, tutorials, and technical resources to help you build with our platform.";
        keywords="documentation, API reference, guides, tutorials, technical docs, Zion Tech Group";
      />;
      ;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8   }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center max-w-4xl mx-auto&quot;
            >&quot;
              <h1 className=&quot;text-5xl md:text-6xl font-bold text-white mb-6&quot;>
                Documentation&quot;
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
                    type=&quot;text&quot;
                    placeholder=&quot;Search documentation...&quot;
                    className=&quot;w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focu,s:border-transparent&quot;
                  />&quot;
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className=&quot;py-16&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8   }}
              className="text-center mb-12"
            ></motion>
              <h2 className="text-4xl font-bold text-white mb-4"></h>Browse Documentation</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find the information you need organized by category and topic

              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-4 gap-8&quot;>
              {docCategories.map((category, index) => (&quot;}
                <motion.div

                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 cursor-pointer";
                >;
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}>;
                    <category.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>;
                  <p className="text-gray-300 text-sm mb-3">{category.description}</p>;
                  <div className="flex items-center justify-between">;
                    <span className="text-blue-400 text-sm">{category.articles} articles</span>;
                    <ArrowRight className="w-5 h-5 text-gray-400" />;
                  </div>;
                </motion.div>;
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                    <category.icon className=&quot;w-8 h-8 text-white&quot; />&quot;
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{category.title}&quot;</h3>
                  <p className=&quot;text-gray-300 text-sm mb-3&quot;>{category.description}&quot;</p>
                  <div className=&quot;flex items-center justify-between&quot;>&quot;"
                    <span className=&quot;text-blue-400 text-sm&quot;>{category.articles} articles&quot;</span>
                    <ArrowRight className=&quot;w-5 h-5 text-gray-400&quot; />&quot;
                  </div>
                </motion.div>

              ))}
            </div>;
          </div>;
        </section>;

        {/* Popular Documentation */}
        <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8   }}
              className="text-center mb-12"
            ></motion>
              <h2 className="text-4xl font-bold text-white mb-4"></h>Popular Documentation</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Most viewed and helpful documentation articles

              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
              {popularDocs.map((doc, index) => (&quot;}
                <motion.div

                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300";
                >;
                  <div className="flex items-start justify-between mb-4">;
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs">;
                      {doc.category}
                    </span>;
                    <div className="flex items-center text-gray-400 text-sm">;
                      <Users className="w-4 h-4 mr-1" />;
                      {doc.views}
                    </div>;
                  </div>;
                  ;
                  <h3 className="text-xl font-bold text-white mb-2">{doc.title}</h3>;
                  <p className="text-gray-300 text-sm mb-4">{doc.description}</p>;
                  ;
                  <div className="flex items-center justify-between">;
                    <span className="text-gray-400 text-sm">{doc.readTime}</span>;
                    <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">;
                      <span className="text-sm mr-1">Read More</span>;
                      <ArrowRight className="w-4 h-4" />;
                    </button>;
                  </div>;
                </motion.div>;
                    </span>
                    <div className=&quot;flex items-center text-gray-400 text-sm&quot;>&quot;"
                      <Users className=&quot;w-4 h-4 mr-1&quot; />
                      {doc.views}&quot;
                    </div>
                  </div>
                  
                  <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{doc.title}&quot;</h3>
                  <p className=&quot;text-gray-300 text-sm mb-4&quot;>{doc.description}&quot;</p>
                  
                  <div className=&quot;flex items-center justify-between&quot;>&quot;"
                    <span className=&quot;text-gray-400 text-sm&quot;>{doc.readTime}&quot;</span>
                    <button className=&quot;flex items-center text-blue-400 hover:text-blue-300 transition-colors&quot;>&quot;"
                      <span className=&quot;text-sm mr-1&quot;>Read More&quot;</span>
                      <ArrowRight className=&quot;w-4 h-4&quot; />&quot;
                    </button>
                  </div>
                </motion.div>

              ))}
            </div>;
          </div>;
        </section>;

        {/* Resources */}
        <section className="py-16">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8   }}
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
                initial={{ opacit,y: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 text-center&quot;
              >&quot;
                <div className=&quot;w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4&quot;>&quot;"
                  <Code className=&quot;w-8 h-8 text-white&quot; />&quot;
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Code Examples&quot;</h3>
                <p className=&quot;text-gray-300 text-sm mb-4&quot;>
                  Browse our collection of code examples and snippets&quot;
                </p>
                <button className=&quot;px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors&quot;>
                  View Examples&quot;
                </button>
              </motion.div>

              <motion.div
                initial={{ opacit,y: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 text-center&quot;
              >&quot;
                <div className=&quot;w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4&quot;>&quot;"
                  <ExternalLink className=&quot;w-8 h-8 text-white&quot; />&quot;
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Developer Portal&quot;</h3>
                <p className=&quot;text-gray-300 text-sm mb-4&quot;>
                  Access our full developer portal and tools&quot;
                </p>
                <button className=&quot;px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors&quot;>
                  Visit Portal&quot;
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className=&quot;py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8   }}
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
        </section>
      </div>
</>
  )
  );

}



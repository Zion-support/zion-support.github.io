
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

import { 
  ShoppingCart, Star, Users, Code, Database, Shield, Rocket, Brain, ArrowRight, Filter,
  Search, Grid, List, Heart, ExternalLink

      id: 1, name: "AI Content Generator Pro",

      description: "Advanced AI-powered content creation tool with natural language processing", price: "$99/month",
      category: "AI Tools", rating: 4.8,
      reviews: 124, image: "/api/placeholder/300/200" }, {
      id: 2,

      name: "Quantum Analytics Dashboard", description: "Real-time analytics dashboard powered by quantum computing algorithms",
      price: "$299/month", category: "Analytics",
      rating: 4.9, reviews: 89,
      image: "/api/placeholder/300/200", featured: true }, {
      id: 3,

      name: "Micro SaaS Starter Kit", description: "Complete toolkit for building and launching micro SaaS applications",
      price: "$199/month", category: "Development",
      rating: 4.7, reviews: 156,
      image: "/api/placeholder/300/200", featured: false }, {
      id: 4,

      name: "Cybersecurity Suite", description: "Comprehensive security solution for enterprise applications",
      price: "$499/month", category: "Security",
      rating: 4.9, reviews: 67,
      image: "/api/placeholder/300/200", featured: false }
  ];
  const categories = [
  { name: "AI Tools", icon: Brain, count: 25, color: "from-purple-500 to-pink-500" }, { name: "Analytics", icon: Database, count: 18, color: "from-blue-500 to-cyan-500" }, { name: "Development", icon: Code, count: 32, color: "from-green-500 to-emerald-500" }, { name: "Security", icon: Shield, count: 15, color: "from-red-500 to-orange-500" }, { name: "Micro SaaS", icon: Rocket, count: 28, color: "from-indigo-500 to-blue-500" }
  ];
  return (
    <>
      <SEO 
        title="Marketplace - Zion Tech Group | Technology Solutions & Tools"

        description="Discover and purchase cutting-edge technology solutions, AI tools, and micro SaaS applications from Zion Tech Group&apos;s marketplace."
        keywords="marketplace, technology solutions, AI tools, micro SaaS, software, Zion Tech Group"

      />

      
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>
        {/* Hero Section */}&quot;
        <section className=&quot;py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

              </h1>

              </p>
              <div className=&quot;flex items-center justify-center&quot;>&quot;"
                <ShoppingCart className=&quot;w-16 h-16 text-blue-400&quot; />&quot;
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {/* Loading More Indicator */}
      {(isFetching |loading) && (
        <motion.div
          className='mt-8'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {Array.from({ length: 4 }).map((_, i) => (              <SkeletonCard key={`loading-${i}`} />
            ))}
          </div>

          {/* No Results */}
          {sortedSolutions.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}

              </p>
            </motion.div>
          )}
        </div>
      </section>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-5 gap-6&quot;>
              {categories.map((category, index) => (&quot}
                <motion.div

                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

              ))}
            </div>;
          </div>;
        </section>;

        {/* Featured Products */}

              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-4 gap-8&quot;>
              {products.map((product, index) => (&quot}
                <motion.div

                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

                      </button>
                    </div>

                    <div className=&quot;flex gap-2 mb-4&quot;>
                      {product.tags.map((tag, tagIndex) => (&quot}
                        <span
                          key={tagIndex}
                          className=&quot;px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300&quot;
                        >
                          {tag}&quot;
                        </span>

                      ))}
                    </div>;


                      </button>
                      <button className=&quot;px-4 py-2 border border-slate-600 text-gray-300 rounded-lg hove,r:bg-slate-700 transition-colors&quot;>&quot;"
                        <ExternalLink className=&quot;w-4 h-4&quot; />&quot;
                      </button>
                    </div>
                  </div>
                </motion.div>

              ))}
            </div>;
          </div>;
        </section>;

        {/* CTA Section */}

              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Can&apos;t Find What You&apos;re Looking For?

              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                We offer custom development services to create tailored solutions 
                that meet your specific business requirements.&quot;
              </p>

                <a
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105&quot;
                >&quot;
                  <Code className=&quot;w-5 h-5 mr-2&quot; />
                  Request Custom Solution&quot;
                </a>
                <a
                  href=&quot;/services&quot;
                  className=&quot;inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hove,r:text-white transition-all duration-200&quot;
                >&quot;
                  <ArrowRight className=&quot;w-5 h-5 mr-2&quot; />
                  View All Services&quot;
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              Marketplace coming soon. We're building a comprehensive technology marketplace.
            </p>
          </div>
        </div>
      </div>
</>


  )}



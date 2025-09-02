import React from 'react';'
import { motion } from 'framer-motion';''
import { SEO } from '../components/SEO';
import { 
  ShoppingCart, Star, Users, Code, Database, Shield, Rocket, Brain, ArrowRight, Filter,;'
  Search, Grid, List, Heart, ExternalLink;''
} from 'lucide-react';
export default function Marketplace() {
  const products = [
    {
      id: 1, name: "AI Content Generator Pro",""
      description: "Advanced AI-powered content creation tool with natural language processing", price: "$99/month",""
      category: "AI Tools", rating: 4.8,""
      reviews: 124, image: "/api/placeholder/300/200",""
      featured: true, tags: ["AI", "Content", "NLP"]
    }, {"
      id: 2,""
      name: "Quantum Analytics Dashboard", description: "Real-time analytics dashboard powered by quantum computing algorithms",""
      price: "$299/month", category: "Analytics","
      rating: 4.9, reviews: 89,""
      image: "/api/placeholder/300/200", featured: true,""
      tags: ["Quantum", "Analytics", "Dashboard"]
    }, {"
      id: 3,""
      name: "Micro SaaS Starter Kit", description: "Complete toolkit for building and launching micro SaaS applications",""
      price: "$199/month", category: "Development","
      rating: 4.7, reviews: 156,""
      image: "/api/placeholder/300/200", featured: false,""
      tags: ["SaaS", "Development", "Starter"]
    }, {"
      id: 4,""
      name: "Cybersecurity Suite", description: "Comprehensive security solution for enterprise applications",""
      price: "$499/month", category: "Security","
      rating: 4.9, reviews: 67,""
      image: "/api/placeholder/300/200", featured: false,""
      tags: ["Security", "Enterprise", "Protection"]
    };
  ];"
  const categories = [""
    { name: "AI Tools", icon: Brain, count: 25, color: "from-purple-500 to-pink-500" },""
    { name: "Analytics", icon: Database, count: 18, color: "from-blue-500 to-cyan-500" },""
    { name: "Development", icon: Code, count: 32, color: "from-green-500 to-emerald-500" },""
    { name: "Security", icon: Shield, count: 15, color: "from-red-500 to-orange-500" },""
    { name: "Micro SaaS", icon: Rocket, count: 28, color: "from-indigo-500 to-blue-500" };
  ];
  return (
    <>"
      <SEO "'"
        title="Marketplace - Zion Tech Group | Technology Solutions & Tools"'"'"
        description="Discover and purchase cutting-edge technology solutions, AI tools, and micro SaaS applications from Zion Tech Group's marketplace."'""
        keywords="marketplace, technology solutions, AI tools, micro SaaS, software, Zion Tech Group" /></SEO>"
      ""
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>"
        {/* Hero Section */}""
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></section>""
          <div className="container mx-auto px-4"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}"
              transition={{ duration: 0.8 }}""
              className="text-center max-w-4xl mx-auto""
            ></motion>""
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
                Technology Marketplace"
              </h1>""
              <p className="text-xl text-gray-300 mb-8"></p>
                Discover and purchase cutting-edge technology solutions, AI tools, and innovative software from our curated marketplace"
              </p>""
              <div className="flex items-center justify-center"></div>""
                <ShoppingCart className="w-16 h-16 text-blue-400" /></ShoppingCart>
              </div>
            </motion.div>
          </div>
        </section>
"
        {/* Categories */}""
        <section className="py-16"></section>""
          <div className="container mx-auto px-4"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}"
              transition={{ duration: 0.8 }}""
              className="text-center mb-12""
            ></motion>""
              <h2 className="text-4xl font-bold text-white mb-4"></h>Browse Categories</h2>""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Explore our curated collection of technology solutions organized by category
              </p>
            </motion.div>"
""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"></div>
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}"
                  transition={{ duration: 0.8, delay: index * 0.1 }}""
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                ></motion>"
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}></div>""
                    <category.icon className="w-8 h-8 text-white" /></category>"
                  </div>""
                  <h3 className="text-lg font-bold text-white mb-2"></h>{category.name}</h3>""
                  <p className="text-gray-400 text-sm">{category.count} products</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
"
        {/* Featured Products */}""
        <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50"></section>""
          <div className="container mx-auto px-4"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}"
              transition={{ duration: 0.8 }}""
              className="text-center mb-12""
            ></motion>""
              <h2 className="text-4xl font-bold text-white mb-4"></h>Featured Products</h2>""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Handpicked solutions that deliver exceptional value and performance
              </p>
            </motion.div>"
""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}"
                  transition={{ duration: 0.8, delay: index * 0.1 }}""
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl overflow-hidden border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105""
                ></motion>""
                  <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center"></div>""
                    <div className="text-6xl opacity-20"></div>""
                      {product.category === "AI Tools" && <Brain /></Brain>}""
                      {product.category === "Analytics" && <Database /></Database>}""
                      {product.category === "Development" && <Code /></Code>}""
                      {product.category === "Security" && <Shield /></Shield>}
                    </div>
                  </div>"
                  ""
                  <div className="p-6"></div>""
                    <div className="flex items-center justify-between mb-3"></div>""
                      <span className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs"></span>
                        {product.category}
                      </span>"
                      {product.featured && (""
                        <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-400/30 rounded-full text-yellow-300 text-xs"></span>
                          Featured
                        </span>
                      )}
                    </div>"
                    ""
                    <h3 className="text-xl font-bold text-white mb-2"></h>{product.name}</h3>""
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{product.description}</p>"
                    ""
                    <div className="flex items-center mb-4"></div>""
                      <div className="flex items-center"></div>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${'
                              i < Math.floor(product.rating)''
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-600'
                            }`}
                          /></Star>
                        ))}"
                      </div>""
                      <span className="text-gray-400 text-sm ml-2"></span>
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>"
""
                    <div className="flex items-center justify-between mb-4"></div>""
                      <span className="text-2xl font-bold text-white"></spa>{product.price}</span>""
                      <button className="text-gray-400 hover: text-red-400 transition-colors"></button>""
                        <Heart className="w-5 h-5" /></Heart>
                      </button>
                    </div>"
""
                    <div className="flex gap-2 mb-4"></div>
                      {product.tags.map((tag, tagIndex) => (
                        <span"
                          key={tagIndex}""
                          className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300"
                        ></span>
                          {tag}
                        </span>
                      ))}
                    </div>"
""
                    <div className="flex gap-2"></div>""
                      <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: from-blue-700 hover:to-purple-700 transition-all duration-200"></button>""
                        <ShoppingCart className="w-4 h-4 inline mr-2" /></ShoppingCart>
                        Add to Cart"
                      </button>""
                      <button className="px-4 py-2 border border-slate-600 text-gray-300 rounded-lg hover:bg-slate-700 transition-colors"></button>""
                        <ExternalLink className="w-4 h-4" /></ExternalLink>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
"
        {/* CTA Section */}""
        <section className="py-20"></section>""
          <div className="container mx-auto px-4"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}"
              transition={{ duration: 0.8 }}""
              className="text-center max-w-4xl mx-auto""
            ></motion>"'"
              <h2 className="text-4xl font-bold text-white mb-6"></h2>''
                Can't Find What You're Looking For?"
              </h2>""
              <p className="text-xl text-gray-300 mb-8"></p>
                We offer custom development services to create tailored solutions 
                that meet your specific business requirements."
              </p>""
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>"
                <a""
                  href="/contact"""
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105""
                ></a>""
                  <Code className="w-5 h-5 mr-2" /></Code>
                  Request Custom Solution
                </a>"
                <a""
                  href="/services"""
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200""
                ></a>""
                  <ArrowRight className="w-5 h-5 mr-2" /></ArrowRight>
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
</>
  );'"
}'"'"
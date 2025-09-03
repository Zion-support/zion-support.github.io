import React from 'react'
import {SEO } from '@/components/SEO';

;,"});,"})
export default function Marketplace() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO title="Marketplace - Zion Tech Group" description="Professional Marketplace services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Marketplace</h1>
        <p className="text-gray-300 text-lg">
          Professional Marketplace services to help your business grow.
        </p>
      </div>
    </div>
import React from &apos;react';
import { motion } from &apos;framer-motion';
import { SEO } from &apos;../components/SEO';
import { motion } from 'framer-motion'
import { SEO } from '../components/SEO';
import { ;
  ShoppingCart, Star, Users, Code, Database, ;
  Shield, Rocket, Brain, ArrowRight, Filter,;
  Search, Grid, List, Heart, ExternalLink} from 'lucide-react';
;
export default function Marketplace() {;
  const products = [;
    {;
      id: 1,;
      name: "AI Content Generator Pro",;
      description: "Advanced AI-powered content creation tool with natural language processing",;
      price: "$99/month",;
      category: "AI Tools",;
      rating: 4.8,;
      reviews: 124,;
      image: "/api/placeholder/300/200",;
      featured: true,;
      tags: ["AI", "Content", "NLP"];
    },;
    {;
      id: 2,;
      name: "Quantum Analytics Dashboard",;
      description: "Real-time analytics dashboard powered by quantum computing algorithms",;
      price: "$299/month",;
      category: "Analytics",;
      rating: 4.9,;
      reviews: 89,;
      image: "/api/placeholder/300/200",;
      featured: true,;
      tags: ["Quantum", "Analytics", "Dashboard"];
    },;
    {;
      id: 3,;
      name: "Micro SaaS Starter Kit",;
      description: "Complete toolkit for building and launching micro SaaS applications",;
      price: "$199/month",;
      category: "Development",;
      rating: 4.7,;
      reviews: 156,;
      image: "/api/placeholder/300/200",;
      featured: false,;
      tags: ["SaaS", "Development", "Starter"];
    },;
    {;
      id: 4,;
      name: "Cybersecurity Suite",;
      description: "Comprehensive security solution for enterprise applications",;
      price: "$499/month",;
      category: "Security",;
      rating: 4.9,;
      reviews: 67,;
      image: "/api/placeholder/300/200",;
      featured: false,;
      tags: ["Security", "Enterprise", "Protection"];
    }
  ]
;
  const categories = [;
    { name: "AI Tools", icon: Brain, count: 25, color: "from-purple-500 to-pink-500" },;
    { name: "Analytics", icon: Database, count: 18, color: "from-blue-500 to-cyan-500" },;
    { name: "Development", icon: Code, count: 32, color: "from-green-500 to-emerald-500" },;
    { name: "Security", icon: Shield, count: 15, color: "from-red-500 to-orange-500" },;
    { name: "Micro SaaS", icon: Rocket, count: 28, color: "from-indigo-500 to-blue-500" }
  ]
;
  return (;
    <>;
      <SEO ;
        title="Marketplace - Zion Tech Group | Technology Solutions & Tools";
        description="Discover and purchase cutting-edge technology solutions, AI tools, and micro SaaS applications from Zion Tech Group's marketplace.";
        keywords="marketplace, technology solutions, AI tools, micro SaaS, software, Zion Tech Group";
      />;
      ;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto";
            >;
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
                Technology Marketplace;
              </h1>;
              <p className="text-xl text-gray-300 mb-8">;
                Discover and purchase cutting-edge technology solutions, AI tools, ;
                and innovative software from our curated marketplace;
              </p>;
              <div className="flex items-center justify-center">;
                <ShoppingCart className="w-16 h-16 text-blue-400" />;
              </div>;
            </motion.div>;
          </div>;
        </section>;

        {/* Categories */}
        <section className="py-16">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12";
            >;
              <h2 className="text-4xl font-bold text-white mb-4">Browse Categories</h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Explore our curated collection of technology solutions organized by category;
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">;
              {categories.map((category, index) => (;
                <motion.div;
import { 
  ShoppingCart, Star, Users, Code, Database, Shield, Rocket, Brain, ArrowRight, Filter,
  Search, Grid, List, Heart, ExternalLink} from &apos;lucide-react';&apos;&apos;

export default function Marketplace() {}
  const products = [
    ;{
      id: 1,
      name: &quot;AI Content Generator Pro&quot,
      description: &quot;Advanced AI-powered content creation tool with natural language processing&quot,
      price: &quot;$99/month&quot,
      category: &quot;AI Tools&quot,
      rating: 4.8,
      reviews: 124,
      image: &quot;/api/placeholder/300/200&quot,
      featured: true,
      tags: [&quot;AI&quot, &quot;Content&quot, &quot;NLP&quot];
},
    {
      id: 2,
      name: &quot;Quantum Analytics Dashboard&quot,
      description: &quot;Real-time analytics dashboard powered by quantum computing algorithms&quot,
      price: &quot;$299/month&quot,
      category: &quot;Analytics&quot,
      rating: 4.9,
      reviews: 89,
      image: &quot;/api/placeholder/300/200&quot,
      featured: true,
      tags: [&quot;Quantum&quot, &quot;Analytics&quot, &quot;Dashboard&quot];
},
    {
      id: 3,
      name: &quot;Micro SaaS Starter Kit&quot,
      description: &quot;Complete toolkit for building and launching micro SaaS applications&quot,
      price: &quot;$199/month&quot,
      category: &quot;Development&quot,
      rating: 4.7,
      reviews: 156,
      image: &quot;/api/placeholder/300/200&quot,
      featured: false,
      tags: [&quot;SaaS&quot, &quot;Development&quot, &quot;Starter&quot];
},
    {
      id: 4,
      name: &quot;Cybersecurity Suite&quot,
      description: &quot;Comprehensive security solution for enterprise applications&quot,
      price: &quot;$499/month&quot,
      category: &quot;Security&quot,
      rating: 4.9,
      reviews: 67,
      image: &quot;/api/placeholder/300/200&quot,
      featured: false,
      tags: [&quot;Security&quot, &quot;Enterprise&quot, &quot;Protection&quot];
}
  ]&quot;

  const categories = [
    { name: &quot;AI Tools&quot, icon: Brain, count: 25, color: &quot;from-purple-500 to-pink-500&quot},
    { name: &quot;Analytics&quot, icon: Database, count: 18, color: &quot;from-blue-500 to-cyan-500&quot},
    { name: &quot;Development&quot, icon: Code, count: 32, color: &quot;from-green-500 to-emerald-500&quot},
    { name: &quot;Security&quot, icon: Shield, count: 15, color: &quot;from-red-500 to-orange-500&quot},
    { name: &quot;Micro SaaS&quot, icon: Rocket, count: 28, color: &quot;from-indigo-500 to-blue-500&quot}
  ]

  return (&quot;
    <>
      <SEO 
        title=&quot;Marketplace - Zion Tech Group | Technology Solutions & Tools&quot;
        description=&quot;Discover and purchase cutting-edge technology solutions, AI tools, and micro SaaS applications from Zion Tech Group&apos;s marketplace.&quot;
        keywords=&quot;marketplace, technology solutions, AI tools, micro SaaS, software, Zion Tech Group&quot;
      />&quot} from 'lucide-react';
export default function Marketplace() {
  const products = [
    { id: 1, name: "AI Content Generator Pro",
    {
  {
      id: 1, name: "AI Content Generator Pro",
      description: "Advanced AI-powered content creation tool with natural language processing", price: "$99/month",
      category: "AI Tools", rating: 4.8,
      reviews: 124, image: "/api/placeholder/300/200",
      featured: true, tags: ["AI", "Content", "NLP"];
}, { id: 2,
      featured: true, tags: ["AI,Content,NLP"];
}, {
      id: 2,
      name: "Quantum Analytics Dashboard", description: "Real-time analytics dashboard powered by quantum computing algorithms",
      price: "$299/month", category: "Analytics",
      rating: 4.9, reviews: 89,
      image: "/api/placeholder/300/200", featured: true,
      tags: ["Quantum", "Analytics", "Dashboard"];
}, { id: 3,
      tags: ["Quantum,Analytics,Dashboard"];
}, {
      id: 3,
      name: "Micro SaaS Starter Kit", description: "Complete toolkit for building and launching micro SaaS applications",
      price: "$199/month", category: "Development",
      rating: 4.7, reviews: 156,
      image: "/api/placeholder/300/200", featured: false,
      tags: ["SaaS", "Development", "Starter"];
}, { id: 4,
      tags: ["SaaS,Development,Starter"];
}, {
      id: 4,
      name: "Cybersecurity Suite", description: "Comprehensive security solution for enterprise applications",
      price: "$499/month", category: "Security",
      rating: 4.9, reviews: 67,
      image: "/api/placeholder/300/200", featured: false,
      tags: ["Security", "Enterprise", "Protection"]
      tags: ["Security,Enterprise,Protection"];
}
  ]
  const categories = [
  { name: "AI Tools", icon: Brain, count: 25, color: "from-purple-500 to-pink-500" },
    { name: "Analytics", icon: Database, count: 18, color: "from-blue-500 to-cyan-500" },
    { name: "Development", icon: Code, count: 32, color: "from-green-500 to-emerald-500" },
    { name: "Security", icon: Shield, count: 15, color: "from-red-500 to-orange-500" },
    { name: "Micro SaaS", icon: Rocket, count: 28, color: "from-indigo-500 to-blue-500" }
  ]
  return (
    <>
      <SEO 
        title="Marketplace - Zion Tech Group | Technology Solutions & Tools"
        description="Discover and purchase cutting-edge technology solutions, AI tools, and micro SaaS applications from Zion Tech Group&apos;s marketplace."
        keywords="marketplace, technology solutions, AI tools, micro SaaS, software, Zion Tech Group"
        description="Discover and purchase cutting-edge technology solutions, AI tools, and micro SaaS applications from Zion Tech Group's marketplace. 
        keywords='marketplace, technology solutions, AI tools, micro SaaS, software, Zion Tech Group"
      />
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>
        {/* Hero Section */}&quot;
        <section className=&quot;py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8   }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Technology Marketplace
              transition={{ duration: 0.8 }}
              className=&quot;text-center max-w-4xl mx-auto&quot;
            >&quot;
              <h1 className=&quot;text-5xl md:text-6xl font-bold text-white mb-6&quot;>
                Technology Marketplace&quot;
              </h1>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Discover and purchase cutting-edge technology solutions, AI tools, 
                and innovative software from our curated marketplace&quot;
              <p className="text-xl text-gray-300 mb-8">
                Discover and purchase cutting-edge technology solutions, AI tools, and innovative software from our curated marketplace
              </p>
              <div className=&quot;flex items-center justify-center&quot;>&quot;"
                <ShoppingCart className=&quot;w-16 h-16 text-blue-400&quot; />&quot;
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
              transition={{ duration: 0.8   }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Browse Categories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our curated collection of technology solutions organized by category
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-12&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Browse Categories&quot;</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Explore our curated collection of technology solutions organized by category&quot;
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-5 gap-6&quot;>
              {categories.map((category, index) => (&quot}
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 cursor-pointer`;
                >;
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}>;
                    <category.icon className=`w-8 h-8 text-white`} />;
                  </div>;
                  <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>;
                  <p className={`text-gray-400 text-sm`>{category.count} products</p>;
                </motion.div>;
                  className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hove,r:scale-105 cursor-pointer&quot;
                >&quot;
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                    <category.icon className=&quot;w-8 h-8 text-white&quot; />&quot;
                  </div>
                  <h3 className=&quot;text-lg font-bold text-white mb-2&quot;>{category.name}&quot;</h3>
                  <p className=&quot;text-gray-400 text-sm&quot;>{category.count} products&quot;</p>
                </motion.div>
              ))}
            </div>;
          </div>;
        </section>;

        {/* Featured Products */}
        <section className=`py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50`}>;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12";
            >;
              <h2 className="text-4xl font-bold text-white mb-4">Featured Products</h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Handpicked solutions that deliver exceptional value and performance;
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {products.map((product, index) => (;
                <motion.div;
        <section className=&quot;py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8   }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Featured Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Handpicked solutions that deliver exceptional value and performance
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-12&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Featured Products&quot;</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Handpicked solutions that deliver exceptional value and performance&quot;
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-4 gap-8&quot;>
              {products.map((product, index) => (&quot}
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl overflow-hidden border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105";
                >;
                  <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">;
                    <div className="text-6xl opacity-20">;
                      {product.category === "AI Tools" && <Brain />}
                      {product.category === "Analytics" && <Database />}
                      {product.category === "Development" && <Code />}
                      {product.category === "Security" && <Shield />}
                    </div>;
                  </div>;
                  ;
                  <div className="p-6">;
                    <div className="flex items-center justify-between mb-3">;
                      <span className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs">;
                        {product.category}
                      </span>;
                      {product.featured && (;
                        <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-400/30 rounded-full text-yellow-300 text-xs">;
                          Featured;
                        </span>;
                      )}
                    </div>;
                    ;
                    <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>;
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{product.description}</p>;
                    ;
                    <div className="flex items-center mb-4">;
                      <div className={`flex items-center`>;
                        {[...Array(5)].map((_, i) => (;
                          <Star;
                            key={i}
                            className={`w-4 h-4 ${;
                              i < Math.floor(product.rating);
                                ? 'text-yellow-400 fill-current';
                                : 'text-gray-600';
                            }`}
                          />;
                        ))}
                      </div>;
                      <span className=`text-gray-400 text-sm ml-2`}>;
                        {product.rating} ({product.reviews} reviews);
                      </span>;
                    </div>;

                    <div className="flex items-center justify-between mb-4">;
                      <span className="text-2xl font-bold text-white">{product.price}</span>;
                      <button className="text-gray-400 hover:text-red-400 transition-colors">;
                        <Heart className="w-5 h-5" />;
                      </button>;
                    </div>;

                    <div className="flex gap-2 mb-4">;
                      {product.tags.map((tag, tagIndex) => (;
                        <span;
                          key={tagIndex}
                          className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300";
                        >;
                          {tag}
                        </span>;
                  className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl overflow-hidden border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hove,r:scale-105&quot;
                >&quot;
                  <div className=&quot;h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center&quot;>&quot;"
                    <div className=&quot;text-6xl opacity-20&quot;>
                      {product.category === &quot;AI Tools&quot; &&"}&quot; <Brain />}
                      {product.category === &quot;Analytics&quot; &&"}&quot; <Database />}
                      {product.category === &quot;Development&quot; &&"}&quot; <Code />}
                      {product.category === &quot;Security&quot; &&"}&quot; <Shield />}
                    </div>
                  </div>
                  
                  <div className=&quot;p-6&quot;>&quot;"
                    <div className=&quot;flex items-center justify-between mb-3&quot;>&quot;"
                      <span className=&quot;px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs&quot;>
                        {product.category}&quot;
                      </span>
                      {product.featured && (}
                        <span className=&quot;px-3 py-1 bg-yellow-600/20 border border-yellow-400/30 rounded-full text-yellow-300 text-xs&quot;>
                          Featured&quot;
                        </span>
                      )}
                    </div>
                    
                    <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{product.name}&quot;</h3>
                    <p className=&quot;text-gray-300 text-sm mb-4 line-clamp-2&quot;>{product.description}&quot;</p>
                    
                    <div className=&quot;flex items-center mb-4&quot;>&quot;`
                      <div className=&quot;flex items-center&quot;>
                        {[...Array(5)].map((_, i) => (&quot}
                          <Star key={i}
                            className={`w-4 h-4 ${
                              i}} < Math.floor(product.rating)
                                ? &apos;text-yellow-400 fill-current&apos;
                                : &apos;text-gray-600&apos}`}
                          />
                        ))}&apos;
                      </div>
                      <span className=&quot;text-gray-400 text-sm ml-2&quot;>
                        {product.rating} ({product.reviews} reviews)&quot;
                      </span>
                    </div>

                    <div className=&quot;flex items-center justify-between mb-4&quot;>&quot;`
                      <span className=&quot;text-2xl font-bold text-white&quot;>{product.price}&quot;</span>
                      <button className=&quot;text-gray-400 hover:text-red-400 transition-colors&quot;>&quot;"
                        <Heart className=&quot;w-5 h-5&quot; />&quot;
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-white">{product.price}</span>
                      <button className="text-gray-400 hover: text-red-400 transition-colors">
                        <Heart className="w-5 h-5" />
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

                    <div className="flex gap-2">;
                      <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">;
                        <ShoppingCart className="w-4 h-4 inline mr-2" />;
                        Add to Cart;
                      </button>;
                      <button className="px-4 py-2 border border-slate-600 text-gray-300 rounded-lg hover:bg-slate-700 transition-colors">;
                        <ExternalLink className="w-4 h-4" />;
                      </button>;
                    </div>;
                  </div>;
                </motion.div>;
                    <div className=&quot;flex gap-2&quot;>&quot;"
                      <button className=&quot;flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200&quot;>&quot;"
                        <ShoppingCart className=&quot;w-4 h-4 inline mr-2&quot; />
                        Add to Cart&quot;
                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: from-blue-700 hover:to-purple-700 transition-all duration-200">
                        <ShoppingCart className="w-4 h-4 inline mr-2" />
                        Add to Cart
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
        <section className="py-20">;
          <div className="container mx-auto px-4">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto";
            >;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Can't Find What You're Looking For?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8">;
                We offer custom development services to create tailored solutions ;
                that meet your specific business requirements.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <a;
                  href="/contact";
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105";
                >;
                  <Code className="w-5 h-5 mr-2" />;
                  Request Custom Solution;
                </a>;
                <a;
                  href="/services";
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200";
                >;
                  <ArrowRight className="w-5 h-5 mr-2" />;
                  View All Services;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>;
        <section className=&quot;py-20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8   }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center max-w-4xl mx-auto&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
                Can&apos;t Find What You&apos;re Looking For?&apos;
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Can&apos;t Find What You&apos;re Looking For?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                We offer custom development services to create tailored solutions 
                that meet your specific business requirements.&quot;
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>&quot;"
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <a
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105&quot;
                >&quot;
                  <Code className=&quot;w-5 h-5 mr-2&quot; />
                  Request Custom Solution&quot;
                </a>
                <a
                  href=&quot;/services&quot;
                  className=&quot;inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hove,r: text-white transition-all duration-200&quot;
                >&quot;
                  <ArrowRight className=&quot;w-5 h-5 mr-2&quot; />
                  View All Services&quot;
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
</>
  )
  )}

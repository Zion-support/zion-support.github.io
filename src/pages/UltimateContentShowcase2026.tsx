import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Rocket, 
  Cpu, 
  Network, 
  Sparkles, 
  Star,
  ArrowRight,
  Play,
  BookOpen,
  TrendingUp,
  Users,
  Award,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

const UltimateContentShowcase2026 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const featuredContent = [
    {
      id: 1,
      title: "Synthetic Intelligence 2026: Beyond Artificial Intelligence",
      excerpt: "The next evolution of AI that combines consciousness, creativity, and emotional intelligence in ways never seen before.",
      category: "Synthetic Intelligence",
      readTime: "14 min read",
      image: "/images/blog/synthetic-intelligence-2026.jpg",
      slug: "synthetic-intelligence-2026-beyond-artificial-intelligence",
      featured: true,
      icon: Brain,
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Neural Fusion: The Future of Computing",
      excerpt: "Revolutionary technology that combines quantum computing with neural networks to create exponentially more powerful AI systems.",
      category: "Quantum Computing",
      readTime: "16 min read",
      image: "/images/blog/quantum-neural-fusion-2026.jpg",
      slug: "quantum-neural-fusion-future-computing",
      featured: true,
      icon: Zap,
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 3,
      title: "Interdimensional Data Networks: Computing Across Realities",
      excerpt: "Revolutionary networking technology that enables data transmission and processing across multiple dimensions and parallel universes.",
      category: "Interdimensional Tech",
      readTime: "18 min read",
      image: "/images/blog/interdimensional-data-networks-2026.jpg",
      slug: "interdimensional-data-networks-computing-realities",
      featured: true,
      icon: Network,
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 4,
      title: "Consciousness Transfer Technology: Digital Immortality",
      excerpt: "Revolutionary technology that enables human consciousness to be transferred to digital substrates, achieving true digital immortality.",
      category: "Consciousness Technology",
      readTime: "20 min read",
      image: "/images/blog/consciousness-transfer-technology-2026.jpg",
      slug: "consciousness-transfer-technology-digital-immortality",
      featured: true,
      icon: Cpu,
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "Cosmic Intelligence Networks: AI Across the Galaxy",
      excerpt: "Revolutionary AI systems that can operate across vast cosmic distances, enabling interplanetary and interstellar artificial intelligence networks.",
      category: "Space AI",
      readTime: "19 min read",
      image: "/images/blog/cosmic-intelligence-networks-ai-galaxy.jpg",
      slug: "cosmic-intelligence-networks-ai-across-galaxy",
      featured: true,
      icon: Rocket,
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 6,
      title: "Temporal Computing: Processing Information Across Time",
      excerpt: "Revolutionary computing technology that can process information across different time periods, enabling predictions and interventions in past and future events.",
      category: "Temporal Technology",
      readTime: "21 min read",
      image: "/images/blog/temporal-computing-processing-time.jpg",
      slug: "temporal-computing-processing-information-across-time",
      featured: true,
      icon: Globe,
      color: "from-teal-600 to-blue-600"
    }
  ];

  const categories = [
    { name: "Synthetic Intelligence", count: 15, icon: Brain, color: "purple" },
    { name: "Quantum Computing", count: 12, icon: Zap, color: "blue" },
    { name: "Consciousness Technology", count: 8, icon: Cpu, color: "orange" },
    { name: "Space AI", count: 6, icon: Rocket, color: "indigo" },
    { name: "Interdimensional Tech", count: 4, icon: Network, color: "green" },
    { name: "Temporal Technology", count: 3, icon: Globe, color: "teal" }
  ];

  const stats = [
    { label: "Revolutionary Articles", value: "60+", icon: BookOpen },
    { label: "Cutting-Edge Technologies", value: "25+", icon: Sparkles },
    { label: "Expert Authors", value: "40+", icon: Users },
    { label: "Global Reach", value: "150+", icon: Globe }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, featuredContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Ultimate Content
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Showcase 2026
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the most revolutionary technologies and innovations that are reshaping our world. 
              From synthetic intelligence to cosmic computing, explore the future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Explore Content
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-white transition-colors"
              >
                View All Articles
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Content Carousel */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Revolutionary Content</h2>
            <p className="text-xl text-gray-300">The most groundbreaking technologies and innovations of 2026</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-full bg-gradient-to-r ${featuredContent[currentSlide].color}`}>
                            <featuredContent[currentSlide].icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-purple-400 font-semibold">{featuredContent[currentSlide].category}</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white">{featuredContent[currentSlide].title}</h3>
                        <p className="text-gray-300 text-lg">{featuredContent[currentSlide].excerpt}</p>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-400">{featuredContent[currentSlide].readTime}</span>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <Link
                          to={`/blog/${featuredContent[currentSlide].slug}`}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
                        >
                          Read Article
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                      <div className="relative">
                        <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl flex items-center justify-center">
                          <div className="text-center">
                            <Play className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                            <p className="text-white font-semibold">Interactive Preview</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex gap-2">
                {featuredContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-purple-500' : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Explore by Category</h2>
            <p className="text-xl text-gray-300">Dive deep into specific technology domains</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/50 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-full bg-${category.color}-600/20`}>
                    <category.icon className={`w-6 h-6 text-${category.color}-400`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-400">{category.count} articles</p>
                  </div>
                </div>
                <div className="flex items-center text-purple-400 font-semibold group-hover:gap-2 transition-all">
                  Explore
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8">
                  <stat.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Explore the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of innovators, researchers, and technology enthusiasts who are already 
            exploring the cutting-edge content that's shaping tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold"
            >
              Start Reading Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Subscribe to Updates
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;
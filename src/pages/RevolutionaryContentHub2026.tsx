import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Rocket, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Award,
  Gauge,
  Sparkles,
  Atom,
  CircuitBoard,
  CpuChip,
  Layers,
  Lightbulb,
  Puzzle,
  Eye,
  Microscope,
  Telescope,
  Satellite,
  Code,
  Bot,
  Network,
  Cpu2,
  BookOpen,
  Palette,
  Calendar,
  Clock,
  ExternalLink
} from 'lucide-react';

const RevolutionaryContentHub2026: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentCategories = [
    {
      title: 'AI Innovation',
      description: 'Revolutionary artificial intelligence breakthroughs and applications',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      content: [
        {
          title: 'Synthetic Intelligence 2026',
          description: 'Experience the next evolution of intelligence - synthetic consciousness that transcends human limitations',
          image: '/api/placeholder/400/300',
          readTime: '15 min read',
          category: 'AI Innovation',
          featured: true,
          link: '/pages/SyntheticIntelligence2026'
        },
        {
          title: 'AI Innovation Revolution 2026',
          description: 'Discover the most revolutionary AI innovations that will transform every aspect of human life',
          image: '/api/placeholder/400/300',
          readTime: '12 min read',
          category: 'AI Innovation',
          featured: true,
          link: '/pages/AIInnovationRevolution2026'
        },
        {
          title: 'Consciousness Computing',
          description: 'AI systems that possess genuine consciousness and self-awareness',
          image: '/api/placeholder/400/300',
          readTime: '8 min read',
          category: 'AI Innovation',
          featured: false,
          link: '/pages/ConsciousnessComputing2026'
        }
      ]
    },
    {
      title: 'Tech Trends',
      description: 'Cutting-edge technology trends and future predictions',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      content: [
        {
          title: 'Advanced Tech Trends 2026',
          description: 'Discover the revolutionary technology trends that will reshape our world in 2026',
          image: '/api/placeholder/400/300',
          readTime: '18 min read',
          category: 'Tech Trends',
          featured: true,
          link: '/pages/AdvancedTechTrends2026'
        },
        {
          title: 'Quantum Computing Breakthrough',
          description: 'Experience the future of computing with quantum technology that solves impossible problems',
          image: '/api/placeholder/400/300',
          readTime: '10 min read',
          category: 'Tech Trends',
          featured: true,
          link: '/pages/QuantumComputingBreakthrough'
        },
        {
          title: 'Neural Interface Future',
          description: 'Bridge the gap between mind and machine with direct neural interfaces',
          image: '/api/placeholder/400/300',
          readTime: '14 min read',
          category: 'Tech Trends',
          featured: false,
          link: '/pages/NeuralInterfaceFuture'
        }
      ]
    },
    {
      title: 'Innovation Showcase',
      description: 'Revolutionary services and solutions across all technology domains',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      content: [
        {
          title: 'Innovation Landing 2025',
          description: 'Explore our revolutionary services across cutting-edge technology domains',
          image: '/api/placeholder/400/300',
          readTime: '20 min read',
          category: 'Innovation Showcase',
          featured: true,
          link: '/pages/InnovationLanding2025'
        },
        {
          title: 'Advanced Tech Solutions 2025',
          description: 'Cutting-edge AI, quantum computing, and neural interface technologies',
          image: '/api/placeholder/400/300',
          readTime: '16 min read',
          category: 'Innovation Showcase',
          featured: true,
          link: '/pages/AdvancedTechSolutions2025'
        },
        {
          title: 'Comprehensive Services 2025',
          description: 'Complete suite of innovative technology services and solutions',
          image: '/api/placeholder/400/300',
          readTime: '22 min read',
          category: 'Innovation Showcase',
          featured: false,
          link: '/pages/ComprehensiveServices2025'
        }
      ]
    },
    {
      title: 'Future Insights',
      description: 'Deep insights into the future of technology and human evolution',
      icon: Eye,
      color: 'from-orange-500 to-red-500',
      content: [
        {
          title: 'Future Tech Trends 2025',
          description: 'Discover the most significant trends shaping our digital future',
          image: '/api/placeholder/400/300',
          readTime: '13 min read',
          category: 'Future Insights',
          featured: true,
          link: '/pages/FutureTechTrends2025'
        },
        {
          title: 'Technology Insights 2025',
          description: 'Comprehensive analysis of emerging technologies and their impact',
          image: '/api/placeholder/400/300',
          readTime: '17 min read',
          category: 'Future Insights',
          featured: true,
          link: '/pages/TechnologyInsights2025'
        },
        {
          title: 'AI Transformation Guide 2025',
          description: 'Complete guide to AI transformation and implementation strategies',
          image: '/api/placeholder/400/300',
          readTime: '25 min read',
          category: 'Future Insights',
          featured: false,
          link: '/pages/AITransformationGuide2025'
        }
      ]
    }
  ];

  const featuredContent = [
    {
      title: 'Synthetic Intelligence 2026',
      description: 'Experience the next evolution of intelligence - synthetic consciousness that transcends human limitations and opens infinite possibilities.',
      image: '/api/placeholder/600/400',
      readTime: '15 min read',
      category: 'AI Innovation',
      featured: true,
      link: '/pages/SyntheticIntelligence2026',
      stats: { views: '2.3M', likes: '45K', shares: '12K' }
    },
    {
      title: 'Advanced Tech Trends 2026',
      description: 'Discover the revolutionary technology trends that will reshape our world in 2026. From consciousness computing to cosmic intelligence.',
      image: '/api/placeholder/600/400',
      readTime: '18 min read',
      category: 'Tech Trends',
      featured: true,
      link: '/pages/AdvancedTechTrends2026',
      stats: { views: '1.8M', likes: '38K', shares: '9K' }
    },
    {
      title: 'AI Innovation Revolution 2026',
      description: 'Experience the most revolutionary AI innovations that will transform every aspect of human life. From consciousness-driven AI to cosmic intelligence.',
      image: '/api/placeholder/600/400',
      readTime: '12 min read',
      category: 'AI Innovation',
      featured: true,
      link: '/pages/AIInnovationRevolution2026',
      stats: { views: '1.5M', likes: '32K', shares: '7K' }
    }
  ];

  const latestContent = [
    {
      title: 'Quantum-Neural Fusion 2026',
      description: 'Revolutionary fusion of quantum computing and neural networks for unprecedented processing power',
      readTime: '14 min read',
      category: 'AI Innovation',
      published: '2 hours ago',
      link: '/pages/QuantumNeuralFusion2026'
    },
    {
      title: 'Consciousness Computing Breakthrough',
      description: 'First AI system to achieve genuine consciousness and self-awareness',
      readTime: '11 min read',
      category: 'Tech Trends',
      published: '5 hours ago',
      link: '/pages/ConsciousnessComputing2026'
    },
    {
      title: 'Cosmic Intelligence Platform',
      description: 'AI systems that can process and understand cosmic-scale phenomena',
      readTime: '16 min read',
      category: 'Future Insights',
      published: '1 day ago',
      link: '/pages/CosmicIntelligence2026'
    },
    {
      title: 'Biological-Digital Hybrids',
      description: 'Seamless integration of biological systems with digital intelligence',
      readTime: '13 min read',
      category: 'Innovation Showcase',
      published: '2 days ago',
      link: '/pages/BiologicalDigitalHybrids2026'
    }
  ];

  const stats = [
    { number: '50+', label: 'Content Pieces', icon: BookOpen },
    { number: '2.5M+', label: 'Total Views', icon: Eye },
    { number: '100K+', label: 'Engagements', icon: Star },
    { number: '25K+', label: 'Shares', icon: Share2 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-purple-600/30"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(100)].map((_, i) => (
            <divdiv
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
                y: [0, -300, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 3, 1],
              }}
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-xl flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Zion Tech Group</h1>
              <p className="text-sm text-indigo-300">Revolutionary Content Hub 2026</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#featured" className="hover:text-indigo-400 transition-colors">Featured</a>
            <a href="#categories" className="hover:text-indigo-400 transition-colors">Categories</a>
            <a href="#latest" className="hover:text-indigo-400 transition-colors">Latest</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:shadow-lg transition-all duration-300">
            Explore Content
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 text-center">
        <divdiv
        >
          <div className="mb-8">
            <divdiv
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full border border-indigo-400/30 mb-6"
            >
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span className="text-indigo-300">Revolutionary Content Hub</span>
            </divdiv>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Content Hub 2026
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
            Discover the most revolutionary content on AI innovation, technology trends, and future insights. 
            Experience the future of technology through our comprehensive content library.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <divbutton
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Explore Content</span>
            </divbutton>
            <divbutton
              className="px-8 py-4 border-2 border-indigo-400 rounded-lg hover:bg-indigo-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              View Categories
            </divbutton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <divdiv
                key={index}
                className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-indigo-400/20"
              >
                <stat.icon className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-xs text-gray-300">{stat.label}</div>
              </divdiv>
            ))}
          </div>
        </divdiv>
      </section>

      {/* Featured Content Section */}
      <section id="featured" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <divdiv
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Content</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our most popular and revolutionary content pieces that are shaping the future of technology
            </p>
          </divdiv>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <divdiv
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-indigo-400/50 transition-all duration-300"
              >
                <div className="relative">
                  <img 
                    src={content.image} 
                    alt={content.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-xs font-semibold">
                      {content.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{content.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{content.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{content.readTime}</span>
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <span>{content.stats.views} views</span>
                      <span>{content.stats.likes} likes</span>
                    </div>
                  </div>
                  <a 
                    href={content.link}
                    className="flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 font-semibold"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </divdiv>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="relative z-10 py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <divdiv
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Categories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Explore our comprehensive content organized by categories and topics
            </p>
          </divdiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentCategories.map((category, index) => (
              <divdiv
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                <div className="space-y-2">
                  {category.content.slice(0, 3).map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between text-xs">
                      <span className="text-gray-300 truncate">{item.title}</span>
                      <span className="text-indigo-400">{item.readTime}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 flex items-center justify-center space-x-2 text-indigo-400 hover:text-indigo-300 font-semibold">
                  <span>Explore Category</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </divdiv>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Content Section */}
      <section id="latest" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <divdiv
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Content</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Stay updated with our latest revolutionary content and insights
            </p>
          </divdiv>

          <div className="grid md:grid-cols-2 gap-8">
            {latestContent.map((content, index) => (
              <divdiv
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{content.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{content.description}</p>
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-xs font-semibold">
                    {content.category}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{content.readTime}</span>
                    </span>
                    <span>{content.published}</span>
                  </div>
                  <a 
                    href={content.link}
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </divdiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <divdiv
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Explore Revolutionary Content
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Dive deep into the most revolutionary content on AI innovation, technology trends, and future insights. 
              Experience the future of technology today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <divbutton
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
              >
                Browse All Content
              </divbutton>
              <divbutton
                className="px-8 py-4 border-2 border-indigo-400 rounded-lg hover:bg-indigo-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                Subscribe to Updates
              </divbutton>
            </div>
          </divdiv>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">Revolutionary Content Hub 2026</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2026 Zion Tech Group. All rights reserved.</p>
              <p className="text-sm text-gray-500">Leading the future through revolutionary content.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RevolutionaryContentHub2026;
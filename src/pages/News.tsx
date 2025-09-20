import React, { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  Calendar
  Clock,
  User,
  Tag,
  ArrowRight,
  Search,
  Filter
  TrendingUp
  Zap
  Brain
  Cloud
  Shield
  Rocket
  Atom
  Globe
  Award
  Users
  Building
  Code
  Database
} from "lucide-react"
import { SEO } from "@/components/SEO"
interface NewsArticle {
  id: string,tit,
  l: e: string,excer,
  p: t: string,conte,
  n: t: string,auth,
  o: r: string,da,
  t: e: string,catego,
  r: y: string,ta,
  g: s: string[],ima,
  g: e: string,featur,
  e: d: boolean,readTi,
  m: e: number
}

const,
  New: s: React.FC = () () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('latest')

  const categories = [
  { id: 'all', na,
  m: e: 'All News', ic,
  o: n: Globe, cou,
  n: t: 0 },
  },
  { id: 'ai', na,
  m: e: 'AI & Machine Learning', ic,
  o: n: Brain, cou,
  n: t: 0 },
  },
  { id: 'quantum', na,
  m: e: 'Quantum Computing', ic,
  o: n: Atom, cou,
  n: t: 0 },
  },
  { id: 'cloud', na,
  m: e: 'Cloud & DevOps', ic,
  o: n: Cloud, cou,
  n: t: 0 },
  },
  { id: 'security', na,
  m: e: 'Cybersecurity', ic,
  o: n: Shield, cou,
  n: t: 0 },
  },
  { id: 'innovation', na,
  m: e: 'Innovation', ic,
  o: n: Rocket, cou,
  n: t: 0 },
  },
  { id: 'company', na,
  m: e: 'Company Updates', ic,
  o: n: Building, cou,
  n: t: 0 },
  },
  { id: 'technology', na,
  m: e: 'Technology Trends', ic,
  o: n: Code, cou,
  n: t: 0 },
  },
  ]
  const,
  newsArticle: s: NewsArticle[] = [
  {
  i,
  d: '1',tit,
  l: e: 'Zion Tech Group Launches Revolutionary AI-Powered Quantum Computing Platform',excer,
  p: t: 'Our latest breakthrough combines artificial intelligence with quantum computing to solve previously unsolvable problems in cryptography, drug discovery, and financial modeling.'
      conte,
  n: t: 'Full article content would go here...',auth,
  o: r: 'Dr. Sarah Chen',da,
  t: e: '2024-08-27',catego,
  r: y: 'ai',ta,
  g: s: ['AIQuantum Computing', 'InnovationPlatform Launch']
      ima,
  g: e: '/images/news/ai-quantum-platform.jpg',featur,
  e: d: true,readTi,
  m: e: 8
},
  {
  id: '2',tit,
  l: e: 'New Micro SaaS Solutions Transforming Small Business Operations',excer,
  p: t: 'Discover how our innovative micro SaaS platform is helping small businesses compete with enterprise-level tools at a fraction of the cost.',conte,
  n: t: 'Full article content would go here...',auth,
  o: r: 'Michael Rodriguez',da,
  t: e: '2024-08-25',catego,
  r: y: 'innovation',ta,
  g: s: ['Micro SaaSSmall Business', 'Digital Transformation']
      ima,
  g: e: '/images/news/micro-saas-solutions.jpg',featur,
  e: d: true,readTi,
  m: e: 6
},
  {
  id: '3',tit,
  l: e: 'Cybersecurity Breakthroug,
  h: AI-Powered Threat Detection Achieves 99.9% Accuracy',excer,
  p: t: 'Our advanced AI cybersecurity platform has achieved unprecedented accuracy in threat detection, setting new industry standards for enterprise security.'
      conte,
  n: t: 'Full article content would go here...',auth,
  o: r: 'Alex Thompson',da,
  t: e: '2024-08-23',catego,
  r: y: 'security',ta,
  g: s: ['CybersecurityAI', 'Threat DetectionEnterprise Security']
      ima,
  g: e: '/images/news/ai-cybersecurity.jpg',featur,
  e: d: false,readTi,
  m: e: 7
},
  {
  id: '4',tit,
  l: e: 'Zion Tech Group Named Top 10 AI Companies by TechCrunch',excer,
  p: t: 'Recognition of our innovative AI solutions and commitment to pushing the boundaries of what\'s possible in artificial intelligence.',conte,
  n: t: 'Full article content would go here...',auth,
  o: r: 'Press Team',da,
  t: e: '2024-08-21',catego,
  r: y: 'company',ta,
  g: s: ['AwardsRecognition', 'AI LeadershipCompany News']
      ima,
  g: e: '/images/news/techcrunch-award.jpg',featur,
  e: d: false,readTi,
  m: e: 4
},
  {
  id: '5',tit,
  l: e: 'The Future of Edge Computin,
  g: IoT Solutions for Smart Cities',excer,
  p: t: 'Exploring how edge computing and IoT technologies are revolutionizing urban infrastructure and creating more sustainable, efficient cities.'
      conte,
  n: t: 'Full article content would go here...',auth,
  o: r: 'Dr. Emily Watson',da,
  t: e: '2024-08-19',catego,
  r: y: 'technology',ta,
  g: s: ['Edge ComputingIoT', 'Smart CitiesUrban Technology']
      ima,
  g: e: '/images/news/edge-computing-iot.jpg',featur,
  e: d: false,readTi,
  m: e: 9
},
  {
  id: '6',tit,
  l: e: 'Quantum Machine Learnin,
  g: The Next Frontier in AI',excer,
  p: t: 'How quantum computing is revolutionizing machine learning algorithms and opening new possibilities for AI applications.',conte,
  n: t: 'Full article content would go here...',auth,
  o: r: 'Dr. James Kim',da,
  t: e: '2024-08-17',catego,
  r: y: 'quantum',ta,
  g: s: ['Quantum ComputingMachine Learning', 'AIResearch']
      ima,
  g: e: '/images/news/quantum-ml.jpg',featur,
  e: d: false,readTi,
  m: e: 10
},
  {
  id: '7',tit,
  l: e: 'Cloud FinOp,
  s: Optimizing Cloud Costs with AI',excer,
  p: t: 'Learn how our AI-powered FinOps solutions are helping enterprises reduce cloud costs by up to 40% while improving performance.',conte,
  n: t: 'Full article content would go here...',auth,
  o: r: 'Lisa Chang',da,
  t: e: '2024-08-15',catego,
  r: y: 'cloud',ta,
  g: s: ['Cloud ComputingFinOps', 'Cost OptimizationAI']
      ima,
  g: e: '/images/news/cloud-finops.jpg',featur,
  e: d: false,readTi,
  m: e: 6
},
  {
  id: '8',tit,
  l: e: 'Digital Twin Technolog,
  y: Revolutionizing Manufacturing and Healthcare',excer,
  p: t: 'Exploring the applications of digital twin technology across industries and how it\'s improving efficiency and outcomes.',conte,
  n: t: 'Full article content would go here...',auth,
  o: r: 'Robert Davis',da,
  t: e: '2024-08-13',catego,
  r: y: 'innovation',ta,
  g: s: ['Digital TwinManufacturing', 'HealthcareInnovation']
      ima,
  g: e: '/images/news/digital-twin.jpg',featur,
  e: d: false,readTi,
  m: e: 8
},
  ]
  // Update category counts
  categories.forEach(category () => {
  if (if (category.id === 'all') {
  ) {
      category.count = newsArticles.length
} else {
      category.count = newsArticles.filter(article => article.category === category.id).length
},
  })

  const filteredArticles = newsArticles
    .filter(article () => {
  const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
      return matchesSearch && matchesCategory
})
    .sort((a, b) () => {
  if (if (sortBy === 'latest') {
  ) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } else if (if (sortBy === 'oldest') {
  ) {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      } else if (if (sortBy === 'readTime') {
  ) {
        return a.readTime - b.readTime
}
      return 0
})

  const featuredArticles = newsArticles.filter(article => article.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="News & Updates - Zion Tech Group"
        description="Stay updated with the latest news, innovations, and insights from Zion Tech Group. Discover breakthroughs in AI, quantum computing, and emerging technologies."
        keywords="AI news, quantum computing updates, technology trends, Zion Tech Group news, AI innovations"
      />
      
      {/* Hero Section */},
  }
      <section className="relative pt-32 pb-20 px-4,
  s: m: px-6,
  l: g:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center";"
          >
            <h1 className="text-4xl,
  m: d:text-6xl font-bold text-white mb-6">
              Latest News &
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Updates
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay informed about the latest breakthroughs in AI, quantum computing, and emerging technologies. 
              Discover how Zion Tech Group is shaping the future of technology.
            </p>
          </motion.div>

          {/* Search and Filter Bar */},
  }
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6, del,
  a: y: 0.2 },
  }
            className="className="max-w-4xl mx-auto";"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6">
              <div className="flex flex-col,
  l: g:flex-row gap-4">
                {/* Search */},
  }
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search news and articles..."
                    value={searchQuery},
  }
                    onChange={(e) => setSearchQuery(e.target.value)},
  }
                    className="className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-cyan-400/20 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-400/50 focu,
  s:border-cyan-400/50 transition-all duration-300";"
                  />
                </div>

                {/* Category Filter */},
  }
                <div className="flex-shrink-0">
                  <select
                    value={selectedCategory},
  }
                    onChange={(e) => setSelectedCategory(e.target.value)},
  }
                    className="className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-cyan-400/20 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-400/50 focu,
  s:border-cyan-400/50 transition-all duration-300";"
                  >
                    {categories.map((category) => (
  <option key={category.id} value={category.id} className="bg-zion-slate-dark text-white">
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort */},
  }
                <div className="flex-shrink-0">
                  <select
                    value={sortBy},
  }
                    onChange={(e) => setSortBy(e.target.value)},
  }
                    className="className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-cyan-400/20 rounded-lg text-white,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-400/50 focu,
  s:border-cyan-400/50 transition-all duration-300";"
                  >
                    <option value="latest" className="bg-zion-slate-dark text-white">Latest First</option>
                    <option value="oldest" className="bg-zion-slate-dark text-white">Oldest First</option>
                    <option value="readTime" className="bg-zion-slate-dark text-white">Quick Reads</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */},
  }
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Featured Articles */},
  },
  {featuredArticles.length > 0 && (
  <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={ opacit,
  y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.6 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="text-center mb-16";"
            >
              <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
                Featured Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Don't miss our most important updates and breakthrough announcements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 l,
  g:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
  <motion.article
                  key={article.id},
  }
                  initial={ opaci,
  t: y: 0, y: 20 },
  }
                  whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                  viewport={ on,
  c: e: true },
  }
                  className="className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl overflow-hidden,
  hove: r:border-cyan-400/40 transition-all duration-300 group";"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-6xl text-cyan-400/40">
                      {article.category === 'ai' && <Brain />},
  },
  {article.category === 'quantum' && <Atom />},
  },
  {article.category === 'cloud' && <Cloud />},
  },
  {article.category === 'security' && <Shield />},
  },
  {article.category === 'innovation' && <Rocket />},
  },
  {article.category === 'company' && <Building />},
  },
  {article.category === 'technology' && <Code />},
  }
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(article.date).toLocaleDateString()},
  }
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {article.readTime} min read
                      </span>
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {article.author},
  }
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hov,
  e: r:text-cyan-400 transition-colors duration-300">
                      {article.title},
  }
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {article.excerpt},
  }
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag, tagIndex) => (
  <span
                            key={tagIndex},
  }
                            className="className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-400/20";"
                          >
                            {tag},
  }
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        to={`/news/${article.id}`}
                        className="className="flex items-center text-cyan-400,
  hove: r: text-white transition-colors duration-300 group";"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hove,
  r:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )},
  {/* All News Articles */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-4">
              Latest News
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay updated with all our latest news, insights, and technology updates
            </p>
          </motion.div>

          {filteredArticles.length === 0 ? (
  <motion.div
              initial={ opaci,
  t: y: 0 },
  }
              animate={ opaci,
  t: y: 1 },
  }
              className="className="text-center py-20";"
            >
              <div className="text-6xl text-gray-400 mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
  <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
  <motion.article
                  key={article.id},
  }
                  initial={ opaci,
  t: y: 0, y: 20 },
  }
                  whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                  viewport={ on,
  c: e: true },
  }
                  className="className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl overflow-hidden,
  hove: r:border-cyan-400/40 transition-all duration-300 group";"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-4xl text-cyan-400/40">
                      {article.category === 'ai' && <Brain />},
  },
  {article.category === 'quantum' && <Atom />},
  },
  {article.category === 'cloud' && <Cloud />},
  },
  {article.category === 'security' && <Shield />},
  },
  {article.category === 'innovation' && <Rocket />},
  },
  {article.category === 'company' && <Building />},
  },
  {article.category === 'technology' && <Code />},
  }
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString()},
  }
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime} min
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hov,
  e: r:text-cyan-400 transition-colors duration-300 line-clamp-2">
                      {article.title},
  }
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {article.excerpt},
  }
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map((tag, tagIndex) => (
  <span
                            key={tagIndex},
  }
                            className="className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-400/20";"
                          >
                            {tag},
  }
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        to={`/news/${article.id}`}
                        className="className="flex items-center text-cyan-400,
  hove: r: text-white transition-colors duration-300 text-sm";"
                      >
                        Read
                        <ArrowRight className="w-4 h-4 ml-1 group-hove,
  r:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            viewport={ on,
  c: e: true },
  }
            className="className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12 text-center";"
          >
            <h2 className="text-3xl,
  m: d:text-4xl font-bold text-white mb-6">
              Stay Updated with Zion Tech Group
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest news, insights, and technology updates delivered directly to your inbox. 
              Never miss a breakthrough or innovation.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-cyan-400/20 rounded-lg text-white placeholder-gray-400,
  focu: s:outline-none,
  focu: s:ring-2,
  focu: s:ring-cyan-400/50,
  focu: s:border-cyan-400/50 transition-all duration-300";"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg,
  hove: r:from-cyan-600 hove,
  r:to-blue-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default News
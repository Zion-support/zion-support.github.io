import React from "react"
import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { 
  BookOpen
  Code, 
  FileText, 
  Search, 
  Filter, 
  ArrowRight, 
  ExternalLink, 
  Download, 
  Copy, 
  CheckCircle
  Clock
  User
  Star
  Bookmark
  Share2
  ChevronRight
  ChevronDown
  Terminal
  Database
  Code2
  Cpu
  Shield
  Cloud
  Brain
  Zap
  Globe
  Settings
  Play
  Code2
  GitBranch
  Package
  Server
  Lock
  Key
  Database as DatabaseIcon
  Network
  Monitor
  Smartphone
  Tablet
  Laptop
} from "lucide-react"
export,
  const: Documentation: React.FC = () () => {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState('all')
  const [expandedSections, setExpandedSections] = React.useState<string[]>(['getting-started'])
  const categories = [
    { id: 'all', na,
  m: e: 'All', cou,
  n: t: 0, acti,
  v: e: true }, { id: 'getting-started', na,
  m: e: 'Getting Started', cou,
  n: t: 8, acti,
  v: e: false }, { id: 'api', na,
  m: e: 'API Reference', cou,
  n: t: 12, acti,
  v: e: false }, { id: 'sdks', na,
  m: e: 'SDKs & Libraries', cou,
  n: t: 6, acti,
  v: e: false }, { id: 'tutorials', na,
  m: e: 'Tutorials', cou,
  n: t: 15, acti,
  v: e: false }, { id: 'examples', cou,
  n: t: 10, acti,
  v: e: false }, { id: 'deployment', na,
  m: e: 'Deployment', cou,
  n: t: 8, acti,
  v: e: false }, { id: 'troubleshooting', na,
  m: e: 'Troubleshooting', cou,
  n: t: 5, acti,
  v: e: false }
  ]
  const documentationSections = [
    {
      id: 'getting-started',tit,
  l: e: 'Getting Started',ic,
  o: n: Play,col,
  o: r: 'from-green-500 to-emerald-500',articl,
  e: s: [
        {
          titl,
  e: 'Quick Start Guide',descripti,
  o: n: 'Get up and running with Zion Tech Group services in under 10 minutes',difficul,
  t: y: 'Beginner',readTi,
  m: e: '5 min',featur,
  e: d: true,pa,
  t: h: '/docs/getting-started/quick-start'
        }, {
          tit,
  l: e: 'Installation & Setup',descripti,
  o: n: 'Complete installation guide for all platforms and environments',difficul,
  t: y: 'Beginner',readTi,
  m: e: '15 min',featur,
  e: d: false,pa,
  t: h: '/docs/getting-started/installation'
        }, {
          tit,
  l: e: 'First Project',descripti,
  o: n: 'Create your first AI-powered application step by step',difficul,
  t: y: 'Beginner',readTi,
  m: e: '20 min',featur,
  e: d: true,pa,
  t: h: '/docs/getting-started/first-project'
        }, {
          tit,
  l: e: 'Authentication',descripti,
  o: n: 'Set up secure authentication for your applications',difficul,
  t: y: 'Intermediate',readTi,
  m: e: '12 min',featur,
  e: d: false,pa,
  t: h: '/docs/getting-started/authentication'
        }
      ]
    }, {
              id: 'api',tit,
  l: e: 'API Reference',ic,
  o: n: Code2,col,
  o: r: 'from-blue-500 to-cyan-500',articl,
  e: s: [
        {
          titl,
  e: 'REST API Overview',descripti,
  o: n: 'Complete REST API documentation with examples',difficul,
  t: y: 'Intermediate',readTi,
  m: e: '25 min',featur,
  e: d: true,pa,
  t: h: '/docs/api/rest-overview'
        }, {
          tit,
  l: e: 'GraphQL API',descripti,
  o: n: 'GraphQL endpoint documentation and schema reference',difficul,
  t: y: 'Advanced',readTi,
  m: e: '30 min',featur,
  e: d: false,pa,
  t: h: '/docs/api/graphql'
        }, {
          tit,
  l: e: 'WebSocket API',descripti,
  o: n: 'Real-time communication API documentation',difficul,
  t: y: 'Advanced',readTi,
  m: e: '20 min',featur,
  e: d: false,pa,
  t: h: '/docs/api/websocket'
        }, {
          tit,
  l: e: 'Rate Limiting',descripti,
  o: n: 'Understanding API rate limits and best practices',difficul,
  t: y: 'Intermediate',readTi,
  m: e: '10 min',featur,
  e: d: false,pa,
  t: h: '/docs/api/rate-limiting'
        }
      ]
    }, {
      id: 'sdks',tit,
  l: e: 'SDKs & Libraries',ic,
  o: n: Package,col,
  o: r: 'from-purple-500 to-pink-500',articl,
  e: s: [
        {
          titl,
  e: 'JavaScript/TypeScript SDK',descripti,
  o: n: 'Official SDK for Node.js and browser environments',difficul,
  t: y: 'Intermediate',readTi,
  m: e: '18 min',featur,
  e: d: true,pa,
  t: h: '/docs/sdks/javascript'
        }, {
          tit,
  l: e: 'Python SDK',descripti,
  o: n: 'Python client library with examples and best practices',difficul,
  t: y: 'Intermediate',readTi,
  m: e: '20 min',featur,
  e: d: true,pa,
  t: h: '/docs/sdks/python'
        }, {
          tit,
  l: e: 'Java SDK',descripti,
  o: n: 'Java client library for enterprise applications',difficul,
  t: y: 'Intermediate',readTi,
  m: e: '22 min',featur,
  e: d: false,pa,
  t: h: '/docs/sdks/java'
        }, {
          tit,
  l: e: 'Mobile SDKs',descripti,
  o: n: 'iOS and Android SDKs for mobile applications',difficul,
  t: y: 'Advanced',readTi,
  m: e: '25 min',featur,
  e: d: false,pa,
  t: h: '/docs/sdks/mobile'
        }
      ]
    }, {
      id: 'tutorials',tit,
  l: e: 'Tutorials',ic,
  o: n: BookOpen,col,
  o: r: 'from-orange-500 to-red-500',articl,
  e: s: [
        {
          titl,
  e: 'Building an AI Chatbot',descripti,
  o: n: 'Create a conversational AI chatbot from scratch',difficul,
  t: y: 'Intermediate',readTi,
  m: e: '45 min',featur,
  e: d: true,pa,
  t: h: '/docs/tutorials/ai-chatbot'
        }, {
          tit,
  l: e: 'Image Recognition API',descripti,
  o: n: 'Implement computer vision in your applications',difficul,
  t: y: 'Intermediate',readTi,
  m: e: '35 min',featur,
  e: d: true,pa,
  t: h: '/docs/tutorials/image-recognition'
        }, {
          tit,
  l: e: 'Natural Language Processing',descripti,
  o: n: 'Build text analysis and language understanding features',difficul,
  t: y: 'Advanced',readTi,
  m: e: '50 min',featur,
  e: d: false,pa,
  t: h: '/docs/tutorials/nlp'
        }, {
          tit,
  l: e: 'Real-time Analytics Dashboard',descripti,
  o: n: 'Create live data visualization dashboards',difficul,
  t: y: 'Advanced',readTi,
  m: e: '60 min',featur,
  e: d: false,pa,
  t: h: '/docs/tutorials/analytics-dashboard'
        }
      ]
    }, {
      id: 'deployment',tit,
  l: e: 'Deployment',ic,
  o: n: Server,col,
  o: r: 'from-indigo-500 to-purple-500',articl,
  e: s: [
        {
          titl,
  e: 'Docker Deployment',descripti,
  o: n: 'Containerize and deploy your applications',difficul,
  t: y: 'Intermediate',readTi,
  m: e: '25 min',featur,
  e: d: true,pa,
  t: h: '/docs/deployment/docker'
        }, {
          tit,
  l: e: 'Kubernetes Orchestration',descripti,
  o: n: 'Scale your applications with Kubernetes',difficul,
  t: y: 'Advanced',readTi,
  m: e: '40 min',featur,
  e: d: false,pa,
  t: h: '/docs/deployment/kubernetes'
        }, {
          tit,
  l: e: 'Cloud Deployment',descripti,
  o: n: 'Deploy to AWS, Azure, and Google Cloud'
          difficul,
  t: y: 'Intermediate',readTi,
  m: e: '30 min',featur,
  e: d: false,pa,
  t: h: '/docs/deployment/cloud'
        }, {
          tit,
  l: e: 'CI/CD Pipeline',descripti,
  o: n: 'Set up automated deployment pipelines',difficul,
  t: y: 'Advanced',readTi,
  m: e: '35 min',featur,
  e: d: false,pa,
  t: h: '/docs/deployment/cicd'
        }
      ]
    }
  ]
  const toggleSection = (section,
  I: d: string) () => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [[...prev, sectionId];]
    )
  }

  const filteredSections = documentationSections.filter(section => 
    selectedCategory === 'all' || section.id === selectedCategory
  )

  const allArticles = documentationSections.flatMap(section => 
    section.articles.map(article => ({ ...article, secti,
  o: n: section.title }))
  )
  const filteredArticles = allArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.section.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Update category counts
  React.useEffect(() () => {
    categories.forEach(cat () () => {
      if (if (cat.id !== 'all') {) {
        const section = documentationSections.find(s => s.id === cat.id)
        cat.count = section ? section.articles.length : 0
      }
    })
    categories[0].count = allArticles.length
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation, API references, tutorials, and guides for Zion Tech Group services and APIs."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Code className="w-4 h-4" />
              Developer Resources
            </div>
            
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Documentation &
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Developer Guides
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Everything you need to build, integrate, and deploy with Zion Tech Group services. 
              From quick start guides to advanced API references.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <BookOpen className="w-5 h-5" />
                <span>{allArticles.length} Articles</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Code className="w-5 h-5" />
                <span>Multiple Languages</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-5 h-5" />
                <span>Always Updated</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 border-b border-slate-700/50">
        <div className="container-responsive">
          <div className="flex flex-col,
  l: g:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:border-blue-400,
  focu: s:ring-2 focu,
  s:ring-blue-400/20 transition-all duration-200";"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-400/20 border-blue-400/40 text-blue-400'
                      : 'bg-slate-700/50 border-slate-600/50 text-gray-300,
  hove: r: bg-slate-600/50 hove,
  r:border-blue-400/30'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-16">
        <div className="container-responsive">
          {searchQuery ? (
            // Search Results
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Search Results for "{searchQuery}"
                </h2>
                <p className="text-gray-400">
                  Found {filteredArticles.length} articles
                </p>
              </div>
              
              <div className="space-y-4">
                {filteredArticles.map((article, index) => (
                  <motion.div
                    key={`${article.section}-${index}`}
                    initial={ opaci,
  t: y: 0, y: 20 }
                    animate={ opaci,
  t: y: 1, y: 0 }
                    transition={ durati,
  o: n: 0.3, del,
  a: y: index * 0.1 }
                    className="className="group bg-slate-800/30 border border-slate-700/30 rounded-xl p-6,
  hove: r: border-slate-600/50 transition-all duration-300 hove,
  r:bg-slate-800/50";"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="inline-block px-3 py-1 bg-slate-700/50 text-blue-400 text-xs font-medium rounded-full">
                            {article.section}
                          </span>
                          {article.featured && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                              <Star className="w-3 h-3" />
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-lg font-semibold text-white mb-2 group-hov,
  e: r:text-blue-400 transition-colors">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm mb-3">
                          {article.description}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {article.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {article.difficulty}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0 ml-4">
                        <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 text-blue-400 text-sm font-medium rounded-lg,
  hove: r:bg-blue-500/30 transition-all duration-300">
                          View
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">No documentation found matching your search.</p>
                  <p className="text-gray-500 text-sm mt-2">Try different keywords or browse by category.</p>
                </div>
              )}
            </div>
          ) : (
            // Category-based Documentation
            <div className="space-y-8">
              {filteredSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.id}
                  initial={ opaci,
  t: y: 0, y: 20 }
                  animate={ opaci,
  t: y: 1, y: 0 }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: sectionIndex * 0.1 }
                  className="className="bg-slate-800/30 border border-slate-700/30 rounded-2xl overflow-hidden";"
                >
                  {/* Section Header */}
                  <button
                    onClick={onClick={() => toggleSection(section.id)}
                    className="className="w-full p-6 text-left,
  hove: r:bg-slate-800/50 transition-colors duration-200";"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                          <section.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                          <p className="text-gray-400 text-sm">
                            {section.articles.length} articles • {section.articles.reduce((acc, article) => acc + parseInt(article.readTime), 0)} min total
                          </p>
                        </div>
                      </div>
                      {expandedSections.includes(section.id) ? (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </button>
                  
                  {/* Section Content */}, {expandedSections.includes(section.id) && (
                    <div className="border-t border-slate-700/30">
                      <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-4 p-6">
                        {section.articles.map((article, articleIndex) => (
                          <motion.div
                            key={article.path}
                            initial={ opaci,
  t: y: 0, sca,
  l: e: 0.95 }
                            animate={ opaci,
  t: y: 1, sca,
  l: e: 1 }
                            transition={ durati,
  o: n: 0.3, del,
  a: y: articleIndex * 0.1 }
                            className="className="group bg-slate-700/20 border border-slate-600/20 rounded-xl p-4,
  hove: r: border-slate-500/40 hove,
  r:bg-slate-700/30 transition-all duration-300";"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center gap-2">
                                {article.featured && (
                                  <Star className="w-4 h-4 text-yellow-400" />
                                )}
                                <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                                  article.difficulty === 'Beginner' 
                                    ? 'bg-green-500/20 text-green-400' 
                                    : article.difficulty === 'Intermediate'
                                    ? 'bg-yellow-500/20 text-yellow-400'
                                    : 'bg-red-500/20 text-red-400'
                                }`}>
                                  {article.difficulty}
                                </span>
                              </div>
                              <span className="text-xs text-gray-500">{article.readTime}</span>
                            </div>
                            
                            <h3 className="text-lg font-semibold text-white mb-2 group-hov,
  e: r:text-blue-400 transition-colors">
                              {article.title}
                            </h3>
                            
                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                              {article.description}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <button className="inline-flex items-center gap-2 text-blue-400,
  hove: r: text-blue-300 text-sm font-medium transition-colors">
                                Read Article
                                <ArrowRight className="w-4 h-4" />
                              </button>
                              
                              <div className="flex gap-2">
                                <button className="p-2 bg-slate-600/30 rounded-lg text-gray-400,
  hove: r:text-blue-400 transition-colors">
                                  <Bookmark className="w-4 h-4" />
                                </button>
                                <button className="p-2 bg-slate-600/30 rounded-lg text-gray-400 hove,
  r:text-blue-400 transition-colors">
                                  <Share2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Quick Actions</h2>
            <p className="text-gray-400">Get started quickly with these popular resources</p>
          </div>
          
          <div className="grid grid-cols-1,
  m: d: grid-cols-2,
  l: g:grid-cols-4 gap-6">
            {[
              { nam,
  e: 'API Playground', ic,
  o: n: Terminal, col,
  o: r: 'from-green-500 to-emerald-500', hr,
  e: f: '/docs/api-playground' }, { na,
  m: e: 'SDK Downloads', ic,
  o: n: Download, col,
  o: r: 'from-blue-500 to-cyan-500', hr,
  e: f: '/docs/sdks/downloads' }, { na,
  m: e: 'Code Examples', ic,
  o: n: Code2, col,
  o: r: 'from-purple-500 to-pink-500', hr,
  e: f: '/docs/examples' }, { na,
  m: e: 'Support Forum', ic,
  o: n: Globe, col,
  o: r: 'from-orange-500 to-red-500', hr,
  e: f: '/support' }
            ].map((action, index) => (
              <motion.a
                key={action.name}
                href={action.href}
                initial={ opaci,
  t: y: 0, y: 20 }
                whileInView={ opaci,
  t: y: 1, y: 0 }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                viewport={ on,
  c: e: true }
                className="className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center,
  hove: r: border-blue-400/50 transition-all duration-300 hove,
  r:bg-slate-800/70";"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mx-auto mb-4 group-hov,
  e: r:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hov,
  e: r:text-blue-400 transition-colors">
                  {action.name}
                </h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive text-center">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            viewport={ on,
  c: e: true }
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help with Implementation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our developer support team is here to help you succeed. 
              Get expert guidance, code reviews, and implementation support.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600,
  hove: r:from-blue-600,
  hove: r:to-cyan-700 text-white font-medium rounded-lg transition-all duration-300,
  transform: hover:scale-105">
                Contact Developer Support
              </button>
              <button className="px-8 py-4 bg-slate-800/50 border border-slate-600 text-white font-medium rounded-lg hove,
  r:bg-slate-700/50 transition-all duration-300">
                Join Developer Community
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default Documentation
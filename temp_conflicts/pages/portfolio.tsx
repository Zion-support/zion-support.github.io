import React, {_useState} from 'react';
import Head from 'next/head';
import {_Brain, _Shield, _Rocket, _Cpu, _Database, _Atom, _Users, _Award, _ExternalLink, _Github, _Globe, _Zap, _Star, _CheckCircle, _TrendingUp, _BarChart3, _Cloud, _Network, _Filter, _Search, _Building} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function PortfolioPage() {_const [selectedCategory, _setSelectedCategory] = useState('all');
  const [searchTerm, _setSearchTerm] = useState('');

  const _categories = [
    { id: 'all', _name: 'All Projects', _icon: Globe},
    {_id: 'ai', _name: 'AI & Machine Learning', _icon: Brain},
    {_id: 'quantum', _name: 'Quantum Computing', _icon: Atom},
    {_id: 'cybersecurity', _name: 'Cybersecurity', _icon: Shield},
    {_id: 'space', _name: 'Space Technology', _icon: Rocket},
    {_id: 'edge', _name: 'Edge Computing', _icon: Cpu},
    {_id: 'enterprise', _name: 'Enterprise Solutions', _icon: Building}
  ];

  const _projects = [
    {_id: 1, _title: 'AI-Powered Business Intelligence Platform', _category: 'ai', _client: 'Fortune 500 Financial Services', _description: 'Developed a comprehensive AI-driven analytics platform that processes real-time financial data, _providing predictive insights and automated reporting.', _technologies: ['Python', _'TensorFlow', _'React', _'AWS', _'PostgreSQL'], _results: ['40% increase in decision speed', _'25% reduction in operational costs', _'99.9% uptime'], _image: '/api/placeholder/600/400', _link: '#', _github: '#', _featured: true},
    {_id: 2, _title: 'Quantum-Resistant Cybersecurity Framework', _category: 'cybersecurity', _client: 'Government Defense Agency', _description: 'Built a next-generation cybersecurity framework using quantum-resistant encryption algorithms and AI-powered threat detection.', _technologies: ['Rust', _'Post-Quantum Cryptography', _'AI/ML', _'Kubernetes', _'Zero Trust'], _results: ['Quantum-resistant encryption', _'Real-time threat detection', _'Zero security breaches'], _image: '/api/placeholder/600/400', _link: '#', _github: '#', _featured: true},
    {_id: 3, _title: 'Satellite Constellation Management System', _category: 'space', _client: 'Space Exploration Startup', _description: 'Designed and implemented an autonomous satellite constellation management system with AI-powered mission planning and resource optimization.', _technologies: ['Python', _'AI/ML', _'Satellite APIs', _'Real-time Processing', _'Cloud Infrastructure'], _results: ['Autonomous mission planning', _'30% fuel efficiency improvement', _'24/7 monitoring'], _image: '/api/placeholder/600/400', _link: '#', _github: '#', _featured: false},
    {_id: 4, _title: 'Edge Computing Orchestration Platform', _category: 'edge', _client: 'IoT Manufacturing Company', _description: 'Created a distributed edge computing platform that manages thousands of IoT devices with intelligent load balancing and real-time analytics.', _technologies: ['Kubernetes', _'Edge Computing', _'IoT Protocols', _'Real-time Analytics', _'Microservices'], _results: ['50% reduction in latency', _'Scalable to 10k+ devices', _'99.99% reliability'], _image: '/api/placeholder/600/400', _link: '#', _github: '#', _featured: false},
    {_id: 5, _title: 'Neural Interface Development Kit', _category: 'ai', _client: 'Medical Research Institute', _description: 'Developed a comprehensive toolkit for building brain-computer interfaces with advanced signal processing and AI pattern recognition.', _technologies: ['Python', _'Signal Processing', _'AI/ML', _'Real-time Systems', _'Medical Standards'], _results: ['Advanced BCI capabilities', _'Real-time processing', _'Medical compliance'], _image: '/api/placeholder/600/400', _link: '#', _github: '#', _featured: false},
    {_id: 6, _title: 'Enterprise Digital Transformation Suite', _category: 'enterprise', _client: 'Global Manufacturing Corporation', _description: 'Delivered a comprehensive digital transformation solution including process automation, _data analytics, _and AI-powered decision support.', _technologies: ['Digital Twins', _'AI/ML', _'Process Automation', _'Data Analytics', _'Cloud Migration'], _results: ['60% process efficiency improvement', _'$2M annual cost savings', _'Complete digital transformation'], _image: '/api/placeholder/600/400', _link: '#', _github: '#', _featured: false}
  ];

  const _filteredProjects = projects.filter(project => {_const _matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const _matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;});

  const _stats = [
    {_number: '100+', _label: 'Projects Delivered', _icon: CheckCircle},
    {_number: '50+', _label: 'Enterprise Clients', _icon: Users},
    {_number: '99.9%', _label: 'Client Satisfaction', _icon: Star},
    {_number: '$500M+', _label: 'Value Delivered', _icon: TrendingUp}
  ];

  return (_<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Portfolio - Zion Tech Group | Our Projects & Success Stories</title>
        <meta name="description" content="Explore Zion Tech Group's portfolio of innovative projects, _case studies, _and success stories across AI, _quantum computing, _cybersecurity, _and space technology." />
        <meta name="keywords" content="Zion Tech Group portfolio, _AI projects, _quantum computing projects, _cybersecurity solutions, _space technology projects, _case studies" />
        <meta property="og:title" content="Portfolio - Zion Tech Group" />
        <meta property="og:description" content="Explore our innovative projects and success stories across cutting-edge technologies." />
        <link rel="canonical" href="https://ziontechgroup.com/portfolio" />
      </Head>

      <EnhancedNavigation />

      {_/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover how we've transformed businesses with cutting-edge technology solutions, _from AI-powered platforms to quantum-resistant security systems.
            </p>
          </motion.div>
        </div>
      </section>

      {_/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {_stats.map((stat, _index) => (
              <motion.div
                key={stat.label}
                initial={_{ opacity: 0, _y: 20}}
                animate={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{_stat.number}</div>
                <div className="text-white/70">{_stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Filters and Search */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {_/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {_categories.map(_(category) => (_<button
                  key={category.id}
                  onClick={_() => setSelectedCategory(category.id)}
                  className={_`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 border-blue-500 text-white'
                      : 'border-white/20 text-white/70 hover:border-white/40 hover:text-white'}`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{_category.name}</span>
                </button>
              ))}
            </div>

            {_/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
              <input
                type="text"
                placeholder="Search projects..."
                value={_searchTerm}
                onChange={_(_e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {_/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={_`${selectedCategory}-${_searchTerm}`}
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              exit={_{ opacity: 0, _y: -20}}
              transition={_{ duration: 0.3}}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {_filteredProjects.map(_(project, _index) => (
                <motion.div
                  key={project.id}
                  initial={_{ opacity: 0, _y: 30}}
                  animate={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  className={_`bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 ${
                    project.featured ? 'ring-2 ring-blue-500/50' : ''}`}
                >
                  {_/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    {_project.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                        Featured
                      </div>
                    )}
                  </div>

                  {_/* Project Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">{_project.title}</h3>
                      <p className="text-cyan-400 text-sm font-medium">{_project.client}</p>
                    </div>

                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {_project.description}
                    </p>

                    {_/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2 text-sm">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {_project.technologies.map(_(tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-white/10 rounded-lg text-xs text-white/80"
                          >
                            {_tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {_/* Results */}
                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-2 text-sm">Key Results</h4>
                      <ul className="space-y-1">
                        {_project.results.map(_(result, _idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-white/70">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span>{_result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {_/* Project Links */}
                    <div className="flex space-x-3">
                      <a
                        href={_project.link}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg text-white text-sm font-medium text-center transition-all duration-300 transform hover:scale-105"
                      >
                        View Project
                      </a>
                      <a
                        href={_project.github}
                        className="px-4 py-2 border border-white/20 hover:border-white/40 rounded-lg text-white/70 hover:text-white transition-all duration-300"
                        title="View Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {_filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0}}
              animate={_{ opacity: 1}}
              className="text-center py-16"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center">
                <Search className="w-8 h-8 text-white/50" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
              <p className="text-white/70">Try adjusting your search criteria or category selection.</p>
            </motion.div>
          )}
        </div>
      </section>

      {_/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-3xl border border-blue-500/30 p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our cutting-edge technology solutions can transform your business 
              and drive innovation in your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Start a Project
              </a>
              <a
                href="/services"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}
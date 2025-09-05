import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Users, 
  Award, ExternalLink, Github, Globe, Zap, Star, CheckCircle,
  TrendingUp, BarChart3, Cloud, Network, Filter, Search, Building
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Projects', icon: Globe },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'space', name: 'Space Technology', icon: Rocket },
    { id: 'edge', name: 'Edge Computing', icon: Cpu },
    { id: 'enterprise', name: 'Enterprise Solutions', icon: Building }
  ];

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence Platform',
      category: 'ai',
      client: 'Fortune 500 Financial Services',
      description: 'Developed a comprehensive AI-driven analytics platform that processes real-time financial data, providing predictive insights and automated reporting.',
      technologies: ['Python', 'TensorFlow', 'React', 'AWS', 'PostgreSQL'],
      results: ['40% increase in decision speed', '25% reduction in operational costs', '99.9% uptime'],
      image: '/api/placeholder/600/400',
      link: '#',
      github: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum-Resistant Cybersecurity Framework',
      category: 'cybersecurity',
      client: 'Government Defense Agency',
      description: 'Built a next-generation cybersecurity framework using quantum-resistant encryption algorithms and AI-powered threat detection.',
      technologies: ['Rust', 'Post-Quantum Cryptography', 'AI/ML', 'Kubernetes', 'Zero Trust'],
      results: ['Quantum-resistant encryption', 'Real-time threat detection', 'Zero security breaches'],
      image: '/api/placeholder/600/400',
      link: '#',
      github: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Satellite Constellation Management System',
      category: 'space',
      client: 'Space Exploration Startup',
      description: 'Designed and implemented an autonomous satellite constellation management system with AI-powered mission planning and resource optimization.',
      technologies: ['Python', 'AI/ML', 'Satellite APIs', 'Real-time Processing', 'Cloud Infrastructure'],
      results: ['Autonomous mission planning', '30% fuel efficiency improvement', '24/7 monitoring'],
      image: '/api/placeholder/600/400',
      link: '#',
      github: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Edge Computing Orchestration Platform',
      category: 'edge',
      client: 'IoT Manufacturing Company',
      description: 'Created a distributed edge computing platform that manages thousands of IoT devices with intelligent load balancing and real-time analytics.',
      technologies: ['Kubernetes', 'Edge Computing', 'IoT Protocols', 'Real-time Analytics', 'Microservices'],
      results: ['50% reduction in latency', 'Scalable to 10k+ devices', '99.99% reliability'],
      image: '/api/placeholder/600/400',
      link: '#',
      github: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Neural Interface Development Kit',
      category: 'ai',
      client: 'Medical Research Institute',
      description: 'Developed a comprehensive toolkit for building brain-computer interfaces with advanced signal processing and AI pattern recognition.',
      technologies: ['Python', 'Signal Processing', 'AI/ML', 'Real-time Systems', 'Medical Standards'],
      results: ['Advanced BCI capabilities', 'Real-time processing', 'Medical compliance'],
      image: '/api/placeholder/600/400',
      link: '#',
      github: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Enterprise Digital Transformation Suite',
      category: 'enterprise',
      client: 'Global Manufacturing Corporation',
      description: 'Delivered a comprehensive digital transformation solution including process automation, data analytics, and AI-powered decision support.',
      technologies: ['Digital Twins', 'AI/ML', 'Process Automation', 'Data Analytics', 'Cloud Migration'],
      results: ['60% process efficiency improvement', '$2M annual cost savings', 'Complete digital transformation'],
      image: '/api/placeholder/600/400',
      link: '#',
      github: '#',
      featured: false
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { number: '100+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Client Satisfaction', icon: Star },
    { number: '$500M+', label: 'Value Delivered', icon: TrendingUp }
  ];

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
      <Head>
        <title>Portfolio - Zion Tech Group | Our Projects & Success Stories</title>
        <meta name=&quot;description&quot; content=&quot;Explore Zion Tech Group's portfolio of innovative projects, case studies, and success stories across AI, quantum computing, cybersecurity, and space technology.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;Zion Tech Group portfolio, AI projects, quantum computing projects, cybersecurity solutions, space technology projects, case studies&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Portfolio - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Explore our innovative projects and success stories across cutting-edge technologies.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/portfolio&quot; />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className=&quot;relative pt-32 pb-16 px-6&quot;>
        <div className=&quot;max-w-6xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6&quot;>
              Our Portfolio
            </h1>
            <p className=&quot;text-xl text-white/80 max-w-3xl mx-auto&quot;>
              Discover how we've transformed businesses with cutting-edge technology solutions, 
              from AI-powered platforms to quantum-resistant security systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className=&quot;py-16 px-6&quot;>
        <div className=&quot;max-w-6xl mx-auto&quot;>
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6&quot;>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className=&quot;text-center&quot;
              >
                <div className=&quot;flex justify-center mb-3&quot;>
                  <div className=&quot;w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center&quot;>
                    <stat.icon className=&quot;w-6 h-6 text-white&quot; />
                  </div>
                </div>
                <div className=&quot;text-3xl font-bold text-white mb-2&quot;>{stat.number}</div>
                <div className=&quot;text-white/70&quot;>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className=&quot;py-8 px-6&quot;>
        <div className=&quot;max-w-6xl mx-auto&quot;>
          <div className=&quot;flex flex-col lg:flex-row gap-6 items-center justify-between&quot;>
            {/* Category Filters */}
            <div className=&quot;flex flex-wrap gap-3&quot;>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 border-blue-500 text-white'
                      : 'border-white/20 text-white/70 hover:border-white/40 hover:text-white'
                  }`}
                >
                  <category.icon className=&quot;w-4 h-4&quot; />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className=&quot;relative&quot;>
              <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50&quot; />
              <input
                type=&quot;text&quot;
                placeholder=&quot;Search projects...&quot;
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className=&quot;pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors duration-300&quot;
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className=&quot;py-16 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <AnimatePresence mode=&quot;wait&quot;>
            <motion.div
              key={`${selectedCategory}-${searchTerm}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 ${
                    project.featured ? 'ring-2 ring-blue-500/50' : ''
                  }`}
                >
                  {/* Project Image */}
                  <div className=&quot;relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center&quot;>
                    <div className=&quot;w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center&quot;>
                      <Globe className=&quot;w-8 h-8 text-white&quot; />
                    </div>
                    {project.featured && (
                      <div className=&quot;absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full&quot;>
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className=&quot;p-6&quot;>
                    <div className=&quot;mb-4&quot;>
                      <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{project.title}</h3>
                      <p className=&quot;text-cyan-400 text-sm font-medium&quot;>{project.client}</p>
                    </div>

                    <p className=&quot;text-white/70 text-sm leading-relaxed mb-4&quot;>
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;text-white font-medium mb-2 text-sm&quot;>Technologies</h4>
                      <div className=&quot;flex flex-wrap gap-2&quot;>
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className=&quot;px-2 py-1 bg-white/10 rounded-lg text-xs text-white/80&quot;
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className=&quot;mb-6&quot;>
                      <h4 className=&quot;text-white font-medium mb-2 text-sm&quot;>Key Results</h4>
                      <ul className=&quot;space-y-1&quot;>
                        {project.results.map((result, idx) => (
                          <li key={idx} className=&quot;flex items-center space-x-2 text-sm text-white/70&quot;>
                            <CheckCircle className=&quot;w-3 h-3 text-green-400 flex-shrink-0&quot; />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Links */}
                    <div className=&quot;flex space-x-3&quot;>
                      <a
                        href={project.link}
                        className=&quot;flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg text-white text-sm font-medium text-center transition-all duration-300 transform hover:scale-105&quot;
                      >
                        View Project
                      </Link>
                      <a
                        href={project.github}
                        className=&quot;px-4 py-2 border border-white/20 hover:border-white/40 rounded-lg text-white/70 hover:text-white transition-all duration-300&quot;
                        title=&quot;View Code&quot;
                      >
                        <Github className=&quot;w-4 h-4&quot; />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className=&quot;text-center py-16&quot;
            >
              <div className=&quot;w-16 h-16 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center&quot;>
                <Search className=&quot;w-8 h-8 text-white/50&quot; />
              </div>
              <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>No projects found</h3>
              <p className=&quot;text-white/70&quot;>Try adjusting your search criteria or category selection.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-16 px-6&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-3xl border border-blue-500/30 p-12&quot;
          >
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
              Ready to Start Your Project?
            </h2>
            <p className=&quot;text-white/80 text-lg mb-8 max-w-2xl mx-auto&quot;>
              Let's discuss how our cutting-edge technology solutions can transform your business 
              and drive innovation in your industry.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <a
                href=&quot;/contact&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl&quot;
              >
                Start a Project
              </Link>
              <a
                href=&quot;/services&quot;
                className=&quot;px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10&quot;
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}
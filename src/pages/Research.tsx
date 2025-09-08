
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ;
  Search, FileText, Users, Calendar, ArrowRight, ;
  ExternalLink, Download, Star, TrendingUp, Globe} from 'lucide-react';
;
export default function Research() {;
  const researchAreas = [
    {;
      title: "Artificial Intelligence",;
      description: "Advancing AI research in machine learning, natural language processing, and computer vision",;
      publications: 45,;
      researchers: 12,;
      color: "from-purple-500 to-pink-500"},;
    {;
      title: "Quantum Computing",;
      description: "Pioneering quantum algorithms and quantum machine learning applications",;
      publications: 28,;
      researchers: 8,;
      color: "from-orange-500 to-red-500"},;
    {;
      title: "Cybersecurity",;
      description: "Developing next-generation security solutions and threat detection systems",;
      publications: 32,;
      researchers: 10,;
      color: "from-green-500 to-emerald-500"},;
    {;
      title: "Edge Computing",;
      description: "Optimizing computing at the edge for IoT and real-time applications",;
      publications: 18,;
      researchers: 6,;
      color: "from-blue-500 to-cyan-500"}
  ];
;
  const recentPublications = [
    {;
      id: 1,;
      title: "Quantum-Enhanced Machine Learning for Financial Risk Assessment",;
      authors: ["Dr. Sarah Chen", "Prof. Michael Rodriguez"],;
      journal: "Nature Quantum Information",;
      date: "2025-01-10",;
      citations: 23,;
      featured: true},;
    {;
      id: 2,;
      title: "AI-Driven Cybersecurity: Autonomous Threat Detection Systems",;
      authors: ["Lisa Park", "David Kumar"],;
      journal: "IEEE Security & Privacy",;
      date: "2025-01-05",;
      citations: 18,;
      featured: true},;
    {;
      id: 3,;
      title: "Edge Computing Optimization for IoT Applications",;
      authors: ["Maria Santos", "Alex Thompson"],;
      journal: "ACM Computing Surveys",;
      date: "2024-12-28",;
      citations: 15,;
      featured: false}
  ];


      title: "Artificial Intelligence", description: "Advancing AI research in machine learning, natural language processing, and computer vision",

      publications: 45, researchers: 12,
      color: "from-purple-500 to-pink-500"
    }, { title: "Quantum Computing",
      description: "Pioneering quantum algorithms and quantum machine learning applications", publications: 28,
      researchers: 8, color: "from-orange-500 to-red-500"
    }, { title: "Cybersecurity", description: "Developing next-generation security solutions and threat detection systems",
      publications: 32, researchers: 10,
      color: "from-green-500 to-emerald-500"
    }, { title: "Edge Computing",
      description: "Optimizing computing at the edge for IoT and real-time applications", publications: 18,
      researchers: 6, color: "from-blue-500 to-cyan-500"

  ];

  const recentPublications = [

      authors: ["Dr. Sarah Chen", "Prof. Michael Rodriguez"], journal: "Nature Quantum Information",

      date: "2025-01-10", citations: 23,

      featured: true

      title: "AI-Driven Cybersecurity: Autonomous Threat Detection Systems", authors: ["Lisa Park", "David Kumar"], journal: "IEEE Security & Privacy",

      date: "2025-01-05", citations: 18,

      featured: true

      title: "Edge Computing Optimization for IoT Applications", authors: ["Maria Santos", "Alex Thompson"], journal: "ACM Computing Surveys",

      date: "2024-12-28", citations: 15,

      featured: false
    }];

    <>
      <SEO 
        title=&quot;Research - Zion Tech Group | Innovation & Scientific Discovery&quot;
        description=&quot;Explore our cutting-edge research in AI, quantum computing, cybersecurity, and emerging technologies. Discover our latest publications and scientific contributions.&quot;
        keywords=&quot;research, AI research, quantum computing, cybersecurity, scientific publications, innovation, Zion Tech Group&quot;
      />&quot;
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>
        {/* Hero Section */}&quot;
        <section className=&quot;py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div

              className="text-center max-w-4xl mx-auto"
            ></motion>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Research & Innovation

              </h1>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Advancing the frontiers of technology through cutting-edge research 
                in AI, quantum computing, cybersecurity, and emerging technologies&quot;
              </p>
              
              {/* Search Bar */}
              <div className=&quot;max-w-2xl mx-auto&quot;>&quot;"
                <div className=&quot;relative&quot;>&quot;"
                  <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />&quot;
                  <input

                </div>
              </div>

              {/* Status */}
              <div className="space-y-3">
                <label className="text-white font-medium">Status</label>
                <div className="flex flex-wrap gap-2">
                  {statuses.map((status) => (
                    <button
                      key={status.id}
                      onClick={() => setActiveStatus(status.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeStatus === status.id
                          ? 'bg-zion-purple text-white'
                          : 'bg-zion-slate text-zion-slate-light hover:bg-zion-slate-light hover:text-white'
                      }`}
                    >
                      {status.name} ({status.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Types */}
              <div className="space-y-3">
                <label className="text-white font-medium">Type</label>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setActiveType(type.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeType === type.id
                          ? 'bg-zion-cyan text-zion-slate-dark'
                          : 'bg-zion-slate text-zion-slate-light hover: anybg-zion-slate-light hover:text-white'
                      }`}
                    >
                      {type.name} ({type.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Research & Innovation
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Pushing the boundaries of technology through cutting-edge research, innovative solutions, and collaborative partnerships.
            </p>
          </div>
        </div>

        {/* Research Areas */}
        <section className=&quot;py-16&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div

              className="text-center mb-12"
            ></motion>
              <h2 className="text-4xl font-bold text-white mb-4"></h>Research Areas</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our research spans multiple cutting-edge technology domains

              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
              {researchAreas.map((area, index) => (&quot}
                <motion.div

                  key={area.title}

                  <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-4`}>
                    <FileText className=&quot;w-8 h-8 text-white&quot; />&quot;
                  </div>

                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 text-white">
                        <span className={`text-sm font-medium ${getImpactColor(project.impact)}`}>
                          {project.impact.replace('-', ' ').toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          <span className="text-sm">{formatFunding(project.funding)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

              ))}
            </div>
          </div>
        </div>
      )}

        {/* Recent Publications */}

              className="text-center mb-12"
            ></motion>
              <h2 className="text-4xl font-bold text-white mb-4"></h>Recent Publications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our latest research contributions to the scientific community

              </p>
            </motion.div>

            <div className=&quot;space-y-6&quot;>
              {recentPublications.map((publication, index) => (&quot}
                <motion.div

                  key={publication.id}

                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-medium ${getStatusColor(project.status)}`}>
                        {statuses.find(s => s.id === project.status)?.name}
                      </div>
                      <div className={`text-xs font-medium ${getImpactColor(project.impact)}`}>
                        {project.impact.replace('-', ' ').toUpperCase()} Impact
                      </div>
                    </div>
                  </div>


                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-1">Journal: </p>
                    <p className="text-gray-300">{publication.journal}</p>

                  </div>

                  <div className=&quot;flex items-center justify-between&quot;>&quot;"
                    <div className=&quot;flex items-center text-gray-400 text-sm&quot;>&quot;"
                      <Calendar className=&quot;w-4 h-4 mr-1&quot; />
                      {new Date(publication.date).toLocaleDateString()}&quot;
                    </div>

                      </button>
                    ))}
                  </div>
                </div>

                {/* Status */}
                <div className="space-y-3">
                  <label className="text-white font-medium">Status</label>
                  <div className="flex flex-wrap gap-2">
                    {statuses.map((status) => (
                      <button
                        key={status.id}
                        onClick={() => setActiveStatus(status.id)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          activeStatus === status.id
                            ? 'bg-purple-600 text-white'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                        }`}
                      >
                        {status.name} ({status.count})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Types */}
                <div className="space-y-3">
                  <label className="text-white font-medium">Type</label>
                  <div className="flex flex-wrap gap-2">
                    {types.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setActiveType(type.id)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          activeType === type.id
                            ? 'bg-cyan-500 text-slate-900'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                        }`}
                      >
                        {type.name} ({type.count})
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Research */}
        {researchProjects.filter(p => p.featured).length > 0 && (
          <div className="py-12 bg-slate-800">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-white mb-12">
                Featured Research Projects
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {researchProjects.filter(p => p.featured).map((project) => (
                  <div
                    key={project.id}
                    className="bg-slate-800 border border-slate-600 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-cyan-500 text-slate-900 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 text-white">
                          <span className={`text-sm font-medium ${getImpactColor(project.impact)}`}>
                            {project.impact.replace('-', ' ').toUpperCase()}
                          </span>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4" />
                            <span className="text-sm">{formatFunding(project.funding)}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {getCategoryIcon(project.category)}
                        <span className="text-sm text-slate-400 bg-slate-700/50 px-2 py-1 rounded-full">
                          {categories.find(c => c.id === project.category)?.name}
                        </span>
                        <span className={`text-sm font-medium ${getStatusColor(project.status)}`}>
                          {statuses.find(s => s.id === project.status)?.name}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-slate-300 text-sm mb-4">{project.description}</p>

                      <div className="flex items-center justify-between mb-4 text-sm text-slate-400">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {project.team.length} researchers
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          {project.publications.length} publications
                        </div>
                      </div>

                      <button className="w-full bg-cyan-500 text-slate-900 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition-colors">
                        Learn More
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
            ></motion>
              <h2 className="text-4xl font-bold text-white mb-6">
                Collaborate with Us

              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Interested in collaborating on research projects or learning more 
                about our research initiatives? We welcome partnerships with 
                academic institutions and industry leaders.&quot;
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>&quot;"
                <a
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105&quot;
                >&quot;
                  <Globe className=&quot;w-5 h-5 mr-2&quot; />
                  Partner with Us&quot;
                </a>
                <a
                  href=&quot;/about&quot;
                  className=&quot;inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hove,r:text-white transition-all duration-200&quot;
                >&quot;
                  <ArrowRight className=&quot;w-5 h-5 mr-2&quot; />
                  Learn More&quot;
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
</>


  )}



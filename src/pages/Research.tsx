import React, { useState } from 'react';
export default Research;
import { motion  } from 'framer-motion';
export default function Page() {
,
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 6 },
    { id: 'data', name: 'Data & Analytics', icon: Database, count: 10 },
    { id: 'emerging', name: 'Emerging Technologies', icon: Zap, count: 7 },
    { id: 'quantum', name: 'Quantum Computing', icon: Cpu, count: 4 },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Network, count: 5 },
  ];

  FlaskConical,
  BookOpen,
  Users,
  Clock,
  Star,
  Search,
  Filter,
  Download,
  ExternalLink,
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  Database,
  Zap,
  Globe,
  Target,
  TrendingUp,
  Award,
  CheckCircle,
  Calendar,
  MapPin,
  DollarSign,
  FileText,
  Lightbulb,
  Microscope,
  Rocket,
  Code,
  Network,
  Cpu,
  Lock,
  BarChart3,
  Palette,
  Smartphone,
  Eye,
  Star as StarIcon} from 'lucide-react';
const Research: React.FC = () => {
'
  const [searchQuery, setSearchQuery] = useState('');'
  const [activeCategory, setActiveCategory] = useState('all');'
  const [activeStatus, setActiveStatus] = useState('all');'
  const [activeType, setActiveType] = useState('all');

  
  
  
  
  '
      case 'completed':''
        return 'bg-blue-500/20 text-blue-400';'
      case 'planning':''
        return 'bg-yellow-500/20 text-yellow-400';'
      case 'published':''
        return 'bg-purple-500/20 text-purple-400';'
      default:''
        return 'bg-gray-500/20 text-gray-400'}
  };

  '
      case 'high':''
        return 'bg-orange-500/20 text-orange-400';'
      case 'medium':''
        return 'bg-yellow-500/20 text-yellow-400';'
      case 'low':''
        return 'bg-green-500/20 text-green-400';'
      default:''
        return 'bg-gray-500/20 text-gray-400'}
  };

  '
    if (progress >= 60) return 'bg-blue-500';'
    if (progress >= 40) return 'bg-yellow-500';'
    return 'bg-red-500'};

  // Update counts
  categories.forEach(cat => {
'
    if (cat.id === 'all') {
      cat.count = researchProjects.length;
    } else {
      cat.count = researchProjects.filter(project => project.category === cat.id) .length;
    }
  }) ;

  statuses.forEach(status => {
'
    if (status.id === 'all') {
      status.count = researchProjects.length;
    } else {
      status.count = researchProjects.filter(project => project.status === status.id) .length;
    }
  }) ;

  types.forEach(type => {
'
    if (type.id === 'all') {

      type.count = researchProjects.length} else {

      type.count = researchProjects.filter()
        project => project.type === type.id
      ).length}
  }) ;

  return()
    <>
      <SEO title="Research & Development - Zion Tech Group""
        description="Explore our cutting-edge research projects, publications, and innovations in AI, quantum computing, cybersecurity, and emerging technologies.""
        keywords="research, development, AI, quantum computing, cybersecurity, publications, patents, Zion Tech Group"
       />"
"      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">"
        {/* Header */}""
        <section className="pt-32 pb-16 px-4">""
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}"
            >""
              <div className="flex items-center justify-center space-x-3 mb-6">""
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">""
                  <Microscope className="w-8 h-8 text-white"  />                </div>"
              </div>""
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Research & Development"
              </h1>""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Explore our cutting-edge research projects, publications, and
                innovations in AI, quantum computing, cybersecurity, and
                emerging technologies.</p>
            </motion.div>
          </div>
        </section>
"
        {/* Search and Filters */}""
        <section className="py-8 px-4">""
          <div className="max-w-7xl mx-auto">""
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">"
              {/* Search Bar */}""
              <div className="relative mb-6">""
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"  />"
                <input""
                  type="text""                  placeholder="Search research projects..."
                  value={searchQuery}"
                  onChange={e => setSearchQuery(e.target.value)}""
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
"
              {/* Filters */}""
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Category Filter */}"
                <div>""
                  <h3 className="text-white font-semibold mb-3">Categories</h3>""
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
'
                          activeCategory === category.id''
                            ? 'bg-blue-500 text-white'''`
                            : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'``
                        }`}
                      >"
                        {category.name}""
                        <span className="text-xs opacity-75 ml-1">
                          ({category.count})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Status Filter */}"
                <div>""
                  <h3 className="text-white font-semibold mb-3">Status</h3>""
                  <div className="flex flex-wrap gap-2">
                    {statuses.map(status => (
                      <button
                        key={status.id}`
                        onClick={() => setActiveStatus(status.id)}``
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
'
                          activeStatus === status.id''
                            ? 'bg-blue-500 text-white'''`
                            : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'``
                        }`}
                      >"
                        {status.name}""
                        <span className="text-xs opacity-75 ml-1">
                          ({status.count})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Type Filter */}"
                <div>""
                  <h3 className="text-white font-semibold mb-3">Type</h3>""
                  <div className="flex flex-wrap gap-2">
                    {types.map(type => (
                      <button
                        key={type.id}`
                        onClick={() => setActiveType(type.id)}``
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
'
                          activeType === type.id''
                            ? 'bg-blue-500 text-white'''`
                            : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'``
                        }`}
                      >"
                        {type.name}""
                        <span className="text-xs opacity-75 ml-1">
                          ({type.count})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
"
        {/* Research Projects Grid */}""
        <section className="py-16 px-4">""
          <div className="max-w-7xl mx-auto">""
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}"
                  transition={{ duration: 0.6, delay: index * 0.1 }}""
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                >"
                  {/* Header */}""
                  <div className="flex items-start justify-between mb-4">""
                    <div className="flex items-center gap-3">""
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">""
                        <Microscope className="w-5 h-5 text-white"  />                      </div>"
                      <div>""
                        <h3 className="text-white font-semibold text-lg">
                          {project.title}"
                        </h3>""
                        <p className="text-gray-400 text-sm">
                          {project.institution}
                        </p>
                      </div>
                    </div>"
                    {project.featured && (""
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium">
                        Featured
                      </span>) }
                  </div>
"
                  {/* Description */}""
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
"
                  {/* Status and Progress */}""
                  <div className="flex items-center justify-between mb-4">""
                    <div className="flex items-center gap-2">`
                      <span``
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}
                      >
                        {project.status.charAt(0).toUpperCase() +
                          project.status.slice(1)}
                      </span>`
                      <span``
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(project.impact)}`}
                      >'
                        {project.impact.replace('-',).toUpperCase()}
                      </span>"
                    </div>""
                    <div className="flex items-center gap-2">""
                      <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">`
                        <div``
                          className={`h-full ${getProgressColor(project.progress)}`}``
                          style={{ width: `${project.progress}%` }}
                        />"
                      </div>""
                      <span className="text-gray-400 text-xs">
                        {project.progress}%
                      </span>
                    </div>
                  </div>
"
                  {/* Team and Funding */}""
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-400">""
                    <div className="flex items-center gap-1">""
                      <Users className="w-4 h-4"  />
                      <span>{project.team.length} researchers</span>"
                    </div>""
                    <div className="flex items-center gap-1">""
                      <DollarSign className="w-4 h-4"  />                      <span>${(project.funding / 1000000).toFixed(1)}M</span>
                    </div>
                  </div>

                  {/* Publications */}"
                  {project.publications.length > 0 && (""
                    <div className="mb-4">""
                      <h4 className="text-white font-medium text-sm mb-2">
                        Publications ({project.publications.length})"
                      </h4>""
                      <div className="space-y-2">
                        {project.publications.slice(0, 2).map((pub, idx) => (
                          <div"
                            key={idx}""
                            className="bg-slate-700/50 rounded p-2""
                          >""
                            <p className="text-gray-300 text-xs font-medium">
                              {pub.title}"
                            </p>""
                            <p className="text-gray-400 text-xs">
                              {pub.journal}, {pub.year}
                            </p>
                          </div>) ) }
                      </div>
                    </div>) }
"
                  {/* Tags */}""
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span"
                        key={idx}""
                        className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"
                      >
                        {tag}
                      </span>) ) }
                  </div>
"
                  {/* Action Buttons */}""
                  <div className="flex gap-2">""
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                      View Details"
                    </button>""
                    <button className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg hover:bg-slate-600/50 transition-colors">""
                      <Download className="w-4 h-4"  />                    </button>
                  </div>
                </motion.div>) ) }
            </div>
"
            {filteredProjects.length === 0 && (""
              <div className="text-center py-12">""
                <Microscope className="w-16 h-16 text-gray-400 mx-auto mb-4"  />""
                <h3 className="text-white text-xl font-semibold mb-2">
                  No research projects found"
                </h3>""
                <p className="text-gray-400">
                  Try adjusting your search criteria or filters.
                </p>              </div>
            )}
          </div>
        </section>
      </div>
    </>) };
export default Research;'"`
'"`'"`

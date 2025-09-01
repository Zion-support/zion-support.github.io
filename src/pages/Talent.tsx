import { Link  } from 'react-router-dom';
export default function Page(function Page(function Page() {): any {): any {}
,
    { id: 'security', name: 'Security & Compliance', count: 6 },
    { id: 'data', name: 'Data & Analytics', count: 7 },
    { id: 'development', name: 'Software Development', count: 12 }
  ];

  const experienceLevels: any = [{ id: 'all', name: 'All Levels', count: 45 },
    { id: 'junior', name: 'Junior(0 - 2 years) ', count: 15 },
    { id: 'mid', name: 'Mid - Level(3 - 5 years) ', count: 18 },
    { id: 'senior', name: 'Senior(6 - 10 years) ', count: 8 },
    { id: 'lead', name: 'Lead / Architect(10 + years) ', count: 4 }
  ];

export default function Talent(function Talent(function Talent() {): any {): any {}
'
''
'''
  const [searchQuery, setSearchQuery] = useState('');'''
  const [selectedCategory, setSelectedCategory] = useState('all');'''
  const [selectedExperience, setSelectedExperience] = useState('all');'''
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedTalent, setExpandedTalent] = useState<string | null>(null)}};'
''
  '''
    if (''''
      selectedExperience !== 'all' &&
      talent.experience !== selectedExperience;
    )
      return false;
    if (searchQuery) {}
      return()
        talent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        talent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        talent.skills.some(skill =>
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )}
    return true}) ;'
''
  '''
      case 'cloud':''''
        return 'bg-blue-500/20 text-blue-400';'''
      case 'security':''''
        return 'bg-red-500/20 text-red-400';'''
      case 'data':''''
        return 'bg-green-500/20 text-green-400';'''
      case 'development':''''
        return 'bg-orange-500/20 text-orange-400';'''
      default:''''
        return 'bg-slate-500/20 text-slate-400'}
  };'
''
  '''
      case 'mid':''''
        return 'bg-blue-500/20 text-blue-400';'''
      case 'senior':''''
        return 'bg-purple-500/20 text-purple-400';'''
      case 'lead':''''
        return 'bg-orange-500/20 text-orange-400';'''
      default:''''
        return 'bg-slate-500/20 text-slate-400'}
  }}};
  return()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"""
      <SEO""""
        title="Talent Pool - Zion Tech Group""""
        description="Access our curated network of top-tier technology professionals. Find skilled developers, engineers, and specialists for your projects."""
      />
"""
      {/* Hero Section */}""""
      <section className="relative py-20 overflow-hidden">""""
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10"></div>"        <div className="container mx-auto px-6 relative z-10">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}"""
            transition={{ duration: 0.8 }}""""
            className="text-center""""
          >""""
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl mb-6">""""
              <Users className="w-10 h-10 text-blue-400"  />"""
            </div>""""
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">'"""
              Elite{' '}""""
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-600 bg-clip-text text-transparent">'
                Talent''
              </span>{' '}
              Pool"""
            </h1>"            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Access our curated network of top-tier technology professionals.
              Find skilled developers, engineers, and specialists ready to;
              elevate your projects.
            </p>
          </motion.div>
        </div>
      </section>
"""
      {/* Search and Filters */}""""
      <section className="py-12">""""
        <div className="container mx-auto px-6">""""
          <div className="max-w-6xl mx-auto">""""
            <div className="flex flex-col lg:flex-row gap-6 mb-8">"""
              {/* Search */}""""
              <div className="flex-1">""""
                <div className="relative">""""
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"  />"""
                  <input""""
                    type="text""                    placeholder="Search by name, skills, or expertise..."""
                    value={searchQuery}"""
                    onChange={e => setSearchQuery(e.target.value)}""""
                    className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"""
                  />
                </div>
              </div>
"""
              {/* Category Filter */}""""
              <div className="lg:w-48">
                <select;
                  value={selectedCategory}"""
                  onChange={e => setSelectedCategory(e.target.value)}""""
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"""
                >
                  {categories.map(category => (<option key={category.id} value={category.id}>
                      {category.name} ({category.count}) </option>) ) }
                </select>
              </div>
"""
              {/* Experience Filter */}""""
              <div className="lg:w-48">
                <select;
                  value={selectedExperience}"""
                  onChange={e => setSelectedExperience(e.target.value)}""""
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"""
                >
                  {experienceLevels.map(level => (<option key={level.id} value={level.id}>
                      {level.name} ({level.count}) </option>) ) }
                </select>
              </div>
"""
              {/* View Mode Toggle */}""""
              <div className="flex items-center gap-2">'
                <button''
                  onClick={() => setViewMode('grid')}``
                  className={`p-2 rounded-lg transition-all duration-200 ${}
'
                    viewMode === 'grid'''
                      ? 'bg-blue-400/20 text-blue-400'''`
                      : 'bg-slate-800/50 text-gray-400 hover:text-white'``
                  }`}"""
                >""""
                  <Grid className="w-5 h-5"  />                </button>'
                <button''`
                  onClick={() => setViewMode('list')}``
                  className={`p-2 rounded-lg transition-all duration-200 ${}
'
                    viewMode === 'list'''
                      ? 'bg-blue-400/20 text-blue-400'''`
                      : 'bg-slate-800/50 text-gray-400 hover:text-white'``
                  }`}"""
                >""""
                  <List className="w-5 h-5"  />                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
"""
      {/* Featured Talent */}""""
      <section className="py-16">""""
        <div className="container mx-auto px-6">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}"""
            transition={{ duration: 0.8 }}""""
            className="text-center mb-12""""
          >""""
            <h2 className="text-3xl font-bold text-white mb-4">
              Featured Professionals"""
            </h2>""""
            <p className="text-xl text-gray-300">
              Top-tier talent with exceptional track records;
            </p>
          </motion.div>"""
""""
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {talentPool;
              .filter(t => t.featured) .map((talent, index) => (<motion.div;
                  key={talent.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}"""
                  transition={{ duration: 0.8, delay: index * 0.1 }}""""
                  className="group""""
                >""""
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">""""
                    <div className="p-6">""""
                      <div className="flex items-center gap-3 mb-4">`
                        <span``
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(talent.category)}`}
                        >`
                          {categories.find(c => c.id === talent.category)?.name}``
                        </span>```
                        <span````
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getExperienceColor(talent.experience)}`}
                        >
                          {}
                            experienceLevels.find(e => e.id === talent.experience) ?.name;
                          }
                        </span>`
                        <span``
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(talent.availability)}`}
                        >
                          {talent.availability}"""
                        </span>""""
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                          Featured;
                        </span>                      </div>"""
""""
                      <div className="flex items-center gap-4 mb-4">
                        <img;
                          src={talent.avatar}"""
                          alt={talent.name}""""
                          className="w-16 h-16 rounded-full object-cover border-2 border-blue-400/20"""
                        />"""
                        <div>""""
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                            {talent.name}"""
                          </h3>""""
                          <p className="text-gray-300">{talent.title}</p>""""
                          <div className="flex items-center gap-2 mt-1">""""
                            <MapPin className="w-4 h-4 text-gray-400"  />""""
                            <span className="text-sm text-gray-400">
                              {talent.location}
                            </span>
                          </div>
                        </div>
                      </div>"""
""""
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {talent.bio}
                      </p>"""
""""
                      <div className="mb-4">""""
                        <div className="text-sm text-gray-400 mb-2">Skills</div>""""
                        <div className="flex flex-wrap gap-2">
                          {talent.skills;
                            .slice(0, 5)
                            .map((skill, skillIndex) => (
                              <span"""
                                key={skillIndex}""""
                                className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"""
                              >
                                {skill}
                              </span>) ) }
                        </div>
                      </div>"""
""""
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">"""
                        <div>""""
                          <div className="text-gray-400">Rate</div>""""
                          <div className="text-blue-400 font-medium">
                            {talent.rate}
                          </div>
                        </div>"""
                        <div>""""
                          <div className="text-gray-400">Rating</div>""""
                          <div className="flex items-center gap-1">"""
                            {renderStars(talent.rating)}""""
                            <span className="text-gray-300 text-xs">
                              ({talent.reviews})
                            </span>
                          </div>
                        </div>
                      </div>

                      <button"""
                        onClick={() => toggleTalentExpansion(talent.id)}""""
                        className="w-full px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-200 hover:scale-105"""
                      >'
                        {expandedTalent === talent.id''
                          ? 'Show Less'''
                          : 'View Full Profile'}
                      </button>

                      {expandedTalent === talent.id && (
                        <motion.div;
                          initial={{ opacity: 0, height: 0 }}'
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}"""
                          transition={{ duration: 0.3 }}""""
                          className="mt-4 pt-4 border-t border-slate-600/50""""
                        >""""
                          <div className="mb-4">""""
                            <h4 className="text-sm font-semibold text-white mb-2">
                              Certifications:"""
                            </h4>""""
                            <div className="flex flex-wrap gap-2">
                              {talent.certifications.map((cert, certIndex) => (
                                <span"""
                                  key={certIndex}""""
                                  className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded"""
                                >
                                  {cert}
                                </span>) ) }
                            </div>
                          </div>"""
""""
                          <div className="mb-4">""""
                            <h4 className="text-sm font-semibold text-white mb-2">
                              Recent Projects:"""
                            </h4>""""
                            <ul className="space-y-1">
                              {talent.projects.map((project, projectIndex) => (
                                <li"""
                                  key={projectIndex}""""
                                  className="flex items-center text-gray-300 text-sm""""
                                >""""
                                  <CheckCircle className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0"  />
                                  {project}
                                </li>) ) }
                            </ul>
                          </div>
                        </motion.div>) }
                    </div>
                  </div>
                </motion.div>) ) }
          </div>
        </div>
      </section>
"""
      {/* All Talent */}""""
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">""""
        <div className="container mx-auto px-6">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}"""
            transition={{ duration: 0.8 }}""""
            className="text-center mb-16""""
          >""""
            <h2 className="text-4xl font-bold text-white mb-4">
              All Available Talent"""
            </h2>""""
            <p className="text-xl text-gray-300">
              Browse our complete network of skilled professionals;
            </p>
          </motion.div>
'"""
          {viewMode === 'grid' ? (""""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTalent.map((talent, index) => (
                <motion.div;
                  key={talent.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}"""
                  transition={{ duration: 0.8, delay: index * 0.05 }}""""
                  className="group""""
                >""""
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">""""
                    <div className="p-4">""""
                      <div className="flex items-center gap-2 mb-3">`
                        <span``
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(talent.category)}`}
                        >`
                          {categories.find(c => c.id === talent.category)?.name}``
                        </span>```
                        <span````
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getExperienceColor(talent.experience)}`}
                        >
                          {}
                            experienceLevels.find(e => e.id === talent.experience) ?.name;
                          }
                        </span>
                      </div>"""
""""
                      <div className="flex items-center gap-3 mb-3">
                        <img;
                          src={talent.avatar}"""
                          alt={talent.name}""""
                          className="w-12 h-12 rounded-full object-cover border border-blue-400/20"""
                        />"""
                        <div>""""
                          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                            {talent.name}"""
                          </h3>""""
                          <p className="text-gray-300 text-sm">
                            {talent.title}
                          </p>
                        </div>
                      </div>"""
""""
                      <div className="mb-3">""""
                        <div className="text-xs text-gray-400 mb-1">Skills</div>""""
                        <div className="flex flex-wrap gap-1">
                          {talent.skills;
                            .slice(0, 3)
                            .map((skill, skillIndex) => (
                              <span"""
                                key={skillIndex}""""
                                className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"""
                              >
                                {skill}
                              </span>) ) }
                        </div>
                      </div>"""
""""
                      <div className="grid grid-cols-2 gap-2 mb-3 text-xs">"""
                        <div>""""
                          <div className="text-gray-400">Rate</div>""""
                          <div className="text-blue-400 font-medium">
                            {talent.rate}
                          </div>
                        </div>"""
                        <div>""""
                          <div className="text-gray-400">Rating</div>""""
                          <div className="flex items-center gap-1">
                            {renderStars(talent.rating)}
                          </div>
                        </div>
                      </div>"""
""""
                      <button className="w-full px-3 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-200 hover:scale-105 text-sm">
                        View Profile;
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>"""
          ) : (""""
            <div className="space-y-4">
              {filteredTalent.map((talent, index) => (
                <motion.div;
                  key={talent.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}"""
                  transition={{ duration: 0.8, delay: index * 0.05 }}""""
                  className="group""""
                >""""
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 p-6">""""
                    <div className="flex items-center gap-6">""""
                      <div className="flex-shrink-0">
                        <img;
                          src={talent.avatar}"""
                          alt={talent.name}""""
                          className="w-20 h-20 rounded-full object-cover border-2 border-blue-400/20"""
                        />
                      </div>"""
""""
                      <div className="flex-1 min-w-0">""""
                        <div className="flex items-center gap-3 mb-2">`
                          <span``
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(talent.category)}`}
                          >
                            {}
                              categories.find(c => c.id === talent.category) ?.name;
                            }
                          </span>`
                          <span``
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getExperienceColor(talent.experience)}`}
                          >
                            {}
                              experienceLevels.find(e => e.id === talent.experience) ?.name;
                            }
                          </span>`
                          <span``
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(talent.availability)}`}
                          >
                            {talent.availability}
                          </span>"""
                          {talent.featured && (""""
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                              Featured;
                            </span>) }
                        </div>"""
""""
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200 mb-2">
                          {talent.name}
                        </h3>"""
""""
                        <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                          {talent.bio}
                        </p>"""
""""
                        <div className="mb-3">""""
                          <div className="text-sm text-gray-400 mb-1">
                            Skills"""
                          </div>""""
                          <div className="flex flex-wrap gap-2">
                            {talent.skills;
                              .slice(0, 6)
                              .map((skill, skillIndex) => (
                                <span"""
                                  key={skillIndex}""""
                                  className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"""
                                >
                                  {skill}
                                </span>) ) }
                          </div>
                        </div>
                      </div>"""
""""
                      <div className="flex-shrink-0 text-right">""""
                        <div className="grid grid-cols-2 gap-4 mb-3 text-sm">"""
                          <div>""""
                            <div className="text-gray-400">Rate</div>""""
                            <div className="text-blue-400 font-medium">
                              {talent.rate}
                            </div>
                          </div>"""
                          <div>""""
                            <div className="text-gray-400">Rating</div>""""
                            <div className="flex items-center gap-1">"""
                              {renderStars(talent.rating)}""""
                              <span className="text-gray-300 text-xs">
                                ({talent.reviews})
                              </span>
                            </div>
                          </div>"""
                          <div>""""
                            <div className="text-gray-400">Location</div>""""
                            <div className="text-purple-400 font-medium text-sm">
                              {talent.location}
                            </div>
                          </div>"""
                          <div>""""
                            <div className="text-gray-400">Experience</div>""""
                            <div className="text-green-400 font-medium text-sm">
                              {}
                                experienceLevels;
                                  .find(e => e.id === talent.experience)'
                                  ?.name.split(' ')[0]
                              }
                            </div>
                          </div>
                        </div>"""
""""
                        <button className="px-6 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-200 hover:scale-105">
                          View Profile;
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>) ) }
            </div>) }
        </div>
      </section>
"""
      {/* Call to Action */}""""
      <section className="py-20">""""
        <div className="container mx-auto px-6 text-center">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"""
          >""""
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Connect with Top Talent?"""
            </h2>""""
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you need a single specialist or a complete team, our;
              talent pool is ready to help you achieve your goals.
            </p>"""
""""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""""
              <button className="px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-200 hover:scale-105">
                Hire Talent;
              </button>"""
              <a""""
                href="mailto:talent@ziontechgroup.com""""
                className="px-8 py-3 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-200"""
              >
                Contact Talent Team;
              </a>
            </div>
          </motion.div>
        </div>
      </section>'"`
    </div>'"`'"`
  )}'"`'"`'"`
'"`'"`'"`
'"`'"`

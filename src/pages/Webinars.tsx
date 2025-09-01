import React, { useState } from 'react';
export default Webinars;
import { motion  } from 'framer-motion';
export default function Page() {
,
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: 3 },
    { id: 'data', name: 'Data & Analytics', icon: Database, count: 5 },
    { id: 'emerging', name: 'Emerging Technologies', icon: Zap, count: 2 },
    { id: 'strategy', name: 'Digital Strategy', icon: Target, count: 4 },
  ];

  BookOpen,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Heart,
  Zap,  Globe,
  Video,
  Database,
  Target,
  Calendar,
  Clock,
  Users,
  Play,
  ExternalLink,
  Search,
  Filter,
  Star,
  Eye,
  Download,
  Share2,
  ArrowRight,
  CheckCircle} from 'lucide-react';
const Webinars: React.FC = () => {
'
  const [searchQuery, setSearchQuery] = useState('');'
  const [activeCategory, setActiveCategory] = useState('all');'
  const [filterType, setFilterType] = useState('all');

  const onDemandWebinars = [{
      id: 4,
      title: 'Data - Driven Decision Making: From Insights to Action',
      description:
        'Learn how to transform raw data into actionable insights that drive business decisions and growth.',
      category: 'data',
      type: 'on - demand',
      date: '2024 - 12 - 15T10:00:00Z',
      duration: '60 min',
      speakers: ['Data Science Team', 'Business Intelligence Experts'],
      views: 1247,
      featured: true,
      tags: ['Data Analytics',
        'Business Intelligence',
        'Decision Making',
        'Data Strategy',
      ],
      thumbnail: '/images / webinars / data - driven - decisions - 2024.jpg',
      recordingAvailable: true,
      watchUrl: '/webinars / data - driven - decision - making',
    },
    {
      id: 5,
      title: 'Digital Twin Technology: Measuring ROI in Manufacturing',
      description:
        'Explore practical applications of digital twin technology and how to measure return on investment.',
      category: 'emerging',
      type: 'on - demand',
      date: '2024 - 11 - 20T14:00:00Z',
      duration: '75 min',
      speakers: ['IoT Specialists', 'Manufacturing Experts'],
      views: 892,
      featured: false,
      tags: ['Digital Twin', 'IoT', 'ROI', 'Digital Transformation'],
      thumbnail: '/images / webinars / digital - twin - 2024.jpg',
      recordingAvailable: true,
      watchUrl: '/webinars / digital - twin - technology - roi',
    },
  ];

  return()
    <>
      <SEO title="Webinars - Zion Tech Group""
        description="Join our expert-led webinars on AI, cloud computing, cybersecurity, and emerging technologies. Learn from industry leaders and stay ahead of the curve.""
        keywords="webinars, AI, machine learning, cloud computing, cybersecurity, digital transformation, Zion Tech Group"
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
                  <Video className="w-8 h-8 text-white"  />                </div>"
              </div>""
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Expert Webinars"
              </h1>""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join our expert-led webinars on cutting-edge technologies and
                industry insights. Learn from thought leaders and stay ahead of
                the curve.
              </p>
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
                  type="text""                  placeholder="Search webinars..."
                  value={searchQuery}"
                  onChange={e => setSearchQuery(e.target.value)}""
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
"
              {/* Category Filters */}""
              <div className="mb-6">""
                <h3 className="text-white font-semibold mb-3">Categories</h3>""
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
'
                        activeCategory === category.id''
                          ? 'bg-blue-500 text-white'''`
                          : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'``
                      }`}"
                    >""
                      <div className="flex items-center gap-2">""
                        <category.icon className="w-4 h-4" />"
                        {category.name}""
                        <span className="text-xs opacity-75">
                          ({category.count})
                        </span>
                      </div>
                    </button>) ) }
                </div>
              </div>

              {/* Type Filters */}"
              <div>""
                <h3 className="text-white font-semibold mb-3">Type</h3>""
                <div className="flex flex-wrap gap-2">
                  {filterTypes.map(type => (
                    <button
                      key={type.id}`
                      onClick={() => setFilterType(type.id)}``
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
'
                        filterType === type.id''
                          ? 'bg-purple-500 text-white'''`
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
        </section>
"
        {/* Webinars Grid */}""
        <section className="py-16 px-4">""
          <div className="max-w-7xl mx-auto">""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}"
                  transition={{ duration: 0.6, delay: index * 0.1 }}""
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300"
                >"
                  {/* Thumbnail */}""
                  <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800">""
                    <div className="absolute inset-0 flex items-center justify-center">""
                      <Play className="w-12 h-12 text-white opacity-50"  />
                    </div>"
                    {webinar.featured && (""
                      <div className="absolute top-3 left-3">""
                        <Star className="w-5 h-5 text-yellow-400 fill-current"  />                      </div>'
                    )}''"
                    {webinar.type === 'live' && (""
                      <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        LIVE
                      </div>) }
                  </div>
"
                  {/* Content */}""
                  <div className="p-6">""
                    <div className="flex items-center gap-2 mb-3">`
                      <span``
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
'
                          webinar.type === 'upcoming'''
                            ? 'bg-blue-500/20 text-blue-400'''
                            : webinar.type === 'on-demand'''
                              ? 'bg-green-500/20 text-green-400'''`
                              : 'bg-red-500/20 text-red-400'``
                        }`}
                      >'
                        {webinar.type === 'upcoming'''
                          ? 'Upcoming'''
                          : webinar.type === 'on-demand'''
                            ? 'On-Demand'''
                            : 'Live'}"
                      </span>""
                      <span className="text-gray-400 text-sm">
                        {webinar.duration}
                      </span>
                    </div>"
""
                    <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
                      {webinar.title}
                    </h3>"
""
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {webinar.description}
                    </p>
"
                    {/* Speakers */}""
                    <div className="flex items-center gap-2 mb-4">""
                      <Users className="w-4 h-4 text-gray-400"  />"                      <span className="text-gray-400 text-sm">'
                        {Array.isArray(webinar.speakers)''
                          ? webinar.speakers.join(', ')
                          : webinar.speakers}
                      </span>
                    </div>
"
                    {/* Tags */}""
                    <div className="flex flex-wrap gap-1 mb-4">
                      {webinar.tags.slice(0, 3).map((tag, idx) => (
                        <span"
                          key={idx}""
                          className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"
                        >
                          {tag}
                        </span>) ) }
                    </div>
"
                    {/* Action Button */}""
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">'
                      {webinar.type === 'upcoming' ? ("
                        <>""
                          <Calendar className="w-4 h-4"  />                          Register Now'
                        </>''
                      ) : webinar.type === 'on-demand' ? ("
                        <>""
                          <Play className="w-4 h-4"  />
                          Watch Now
                        </>
                      ) : ("
                        <>""
                          <Eye className="w-4 h-4"  />                          Join Live
                        </>) }
                    </button>
                  </div>
                </motion.div>) ) }
            </div>
"
            {filteredWebinars.length === 0 && (""
              <div className="text-center py-12">""
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4"  />""
                <h3 className="text-white text-xl font-semibold mb-2">
                  No webinars found"
                </h3>""
                <p className="text-gray-400">
                  Try adjusting your search criteria or filters.
                </p>              </div>
            )}
          </div>
        </section>
      </div>
    </>) };
export default Webinars;'"`
'"`'"`

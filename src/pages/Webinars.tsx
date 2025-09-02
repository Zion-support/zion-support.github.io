import React from 'react';'
import { motion } from 'framer-motion';''
import { SEO } from '../components/SEO';
import { ;'
  Video, Calendar, Clock, Users, Play, Star, ArrowRight, ExternalLink, Download;''
} from 'lucide-react';
export default function Webinars() {
  const upcomingWebinars = [
    {
      id: 1, title: "AI Revolution: Transforming Business Operations",""
      description: "Learn how AI is revolutionizing business operations and discover practical implementation strategies.", date: "2025-01-15",""
      time: "2:00 PM EST", duration: "60 minutes",""
      speaker: "Dr. Sarah Chen", attendees: 1250,
      featured: true
    }, {"
      id: 2,""
      title: "Quantum Computing: The Future is Now", description: "Explore the latest developments in quantum computing and their real-world applications.",""
      date: "2025-01-20", time: "3:00 PM EST",""
      duration: "45 minutes", speaker: "Prof. Michael Rodriguez",
      attendees: 890, featured: true
    },"
    {""
      id: 3, title: "Micro SaaS Success Stories",""
      description: "Hear from successful micro SaaS entrepreneurs and learn their strategies for growth.", date: "2025-01-25",""
      time: "1:00 PM EST", duration: "50 minutes",""
      speaker: "Alex Thompson", attendees: 567,
      featured: false
    };
  ];
  const pastWebinars = ["
    {""
      id: 4, title: "Cybersecurity Best Practices 2025",""
      description: "Essential cybersecurity practices for modern applications and infrastructure.", date: "2025-01-10",""
      duration: "55 minutes", speaker: "Lisa Park",
      views: 2340, rating: 4.8
    },"
    {""
      id: 5, title: "Digital Transformation Strategies",""
      description: "Comprehensive guide to successful digital transformation initiatives.", date: "2025-01-05",""
      duration: "65 minutes", speaker: "David Kumar",
      views: 1890, rating: 4.7
    };
  ];
  return (
    <>"
      <SEO ""
        title="Webinars - Zion Tech Group | Technology Education & Insights"""
        description="Join our expert-led webinars on AI, quantum computing, cybersecurity, and emerging technologies. Learn from industry leaders and stay ahead of the curve."""
        keywords="webinars, technology education, AI insights, quantum computing, cybersecurity, online learning, Zion Tech Group" /></SEO>"
      ""
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>"
        {/* Hero Section */}""
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></section>""
          <div className="container mx-auto px-4"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}"
              transition={{ duration: 0.8 }}""
              className="text-center max-w-4xl mx-auto""
            ></motion>""
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
                Expert Webinars"
              </h1>""
              <p className="text-xl text-gray-300 mb-8"></p>
                Join our expert-led webinars and learn from industry leaders about 
                the latest trends in AI, quantum computing, and emerging technologies"
              </p>""
              <div className="flex items-center justify-center"></div>""
                <Video className="w-16 h-16 text-blue-400" /></Video>
              </div>
            </motion.div>
          </div>
        </section>
"
        {/* Upcoming Webinars */}""
        <section className="py-16"></section>""
          <div className="container mx-auto px-4"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}"
              transition={{ duration: 0.8 }}""
              className="text-center mb-12""
            ></motion>""
              <h2 className="text-4xl font-bold text-white mb-4"></h>Upcoming Webinars</h2>"'"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>''
                Don't miss these exclusive sessions with industry experts'
              </p>
            </motion.div>"
""
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}"
                  transition={{ duration: 0.8, delay: index * 0.1 }}""
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300""
                ></motion>""
                  <div className="flex items-start justify-between mb-4"></div>""
                    <span className="px-3 py-1 bg-green-600/20 border border-green-400/30 rounded-full text-green-300 text-xs"></span>
                      Upcoming
                    </span>"
                    {webinar.featured && (""
                      <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-400/30 rounded-full text-yellow-300 text-xs"></span>
                        Featured
                      </span>
                    )}
                  </div>"
""
                  <h3 className="text-xl font-bold text-white mb-2"></h>{webinar.title}</h3>""
                  <p className="text-gray-300 text-sm mb-4">{webinar.description}</p>"
""
                  <div className="space-y-2 mb-4"></div>""
                    <div className="flex items-center text-gray-400 text-sm"></div>""
                      <Calendar className="w-4 h-4 mr-2" /></Calendar>
                      {new Date(webinar.date).toLocaleDateString()}"
                    </div>""
                    <div className="flex items-center text-gray-400 text-sm"></div>""
                      <Clock className="w-4 h-4 mr-2" /></Clock>
                      {webinar.time} • {webinar.duration}"
                    </div>""
                    <div className="flex items-center text-gray-400 text-sm"></div>""
                      <Users className="w-4 h-4 mr-2" /></Users>
                      {webinar.attendees} registered
                    </div>
                  </div>"
""
                  <div className="mb-4"></div>""
                    <p className="text-sm text-gray-400">Speaker: </p>""
                    <p className="text-blue-400 font-medium">{webinar.speaker}</p>
                  </div>"
""
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"></button>
                    Register Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
"
        {/* Past Webinars */}""
        <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50"></section>""
          <div className="container mx-auto px-4"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}"
              transition={{ duration: 0.8 }}""
              className="text-center mb-12""
            ></motion>""
              <h2 className="text-4xl font-bold text-white mb-4"></h>Past Webinars</h2>""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Watch recordings of our previous expert sessions
              </p>
            </motion.div>"
""
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              {pastWebinars.map((webinar, index) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}"
                  transition={{ duration: 0.8, delay: index * 0.1 }}""
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300""
                ></motion>""
                  <div className="flex items-start justify-between mb-4"></div>""
                    <span className="px-3 py-1 bg-gray-600/20 border border-gray-400/30 rounded-full text-gray-300 text-xs"></span>
                      Past Webinar"
                    </span>""
                    <div className="flex items-center text-yellow-400"></div>""
                      <Star className="w-4 h-4 fill-current" /></Star>""
                      <span className="ml-1 text-sm"></spa>{webinar.rating}</span>
                    </div>
                  </div>"
""
                  <h3 className="text-xl font-bold text-white mb-2"></h>{webinar.title}</h3>""
                  <p className="text-gray-300 text-sm mb-4">{webinar.description}</p>"
""
                  <div className="space-y-2 mb-4"></div>""
                    <div className="flex items-center text-gray-400 text-sm"></div>""
                      <Calendar className="w-4 h-4 mr-2" /></Calendar>
                      {new Date(webinar.date).toLocaleDateString()}"
                    </div>""
                    <div className="flex items-center text-gray-400 text-sm"></div>""
                      <Clock className="w-4 h-4 mr-2" /></Clock>
                      {webinar.duration}"
                    </div>""
                    <div className="flex items-center text-gray-400 text-sm"></div>""
                      <Users className="w-4 h-4 mr-2" /></Users>
                      {webinar.views} views
                    </div>
                  </div>"
""
                  <div className="mb-4"></div>""
                    <p className="text-sm text-gray-400">Speaker: </p>""
                    <p className="text-blue-400 font-medium">{webinar.speaker}</p>
                  </div>"
""
                  <div className="flex gap-2"></div>""
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"></button>""
                      <Play className="w-4 h-4 inline mr-2" /></Play>
                      Watch Now"
                    </button>""
                    <button className="px-4 py-2 border border-slate-600 text-gray-300 rounded-lg hover:bg-slate-700 transition-colors"></button>""
                      <Download className="w-4 h-4" /></Download>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
"
        {/* CTA Section */}""
        <section className="py-20"></section>""
          <div className="container mx-auto px-4"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}"
              transition={{ duration: 0.8 }}""
              className="text-center max-w-4xl mx-auto""
            ></motion>""
              <h2 className="text-4xl font-bold text-white mb-6"></h2>
                Stay Updated"
              </h2>""
              <p className="text-xl text-gray-300 mb-8"></p>
                Subscribe to our newsletter to get notified about upcoming webinars 
                and exclusive technology insights."
              </p>""
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
                <a""
                  href="/contact"""
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105""
                ></a>""
                  <Video className="w-5 h-5 mr-2" /></Video>
                  Subscribe to Updates
                </a>"
                <a""
                  href="/training"""
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200""
                ></a>""
                  <ArrowRight className="w-5 h-5 mr-2" /></ArrowRight>
                  View Training Programs
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
</>
  );'"
}'"'"
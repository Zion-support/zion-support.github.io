
import React from "react"
import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import {
  Play
  Calendar,
  Clock,
  Users,
  Video,
  Headphones,
  BookOpen,
  ArrowRight,
  Star,
  ExternalLink
  Clock3
  User
  Tag
  Download
  Share2
  Bookmark
} from "lucide-react"
export,
  const: Webinars: React.FC = () () => {
  const webinars = [
  {
  i,
  d: 1,tit,
  l: e: 'AI-Powered Business Transformatio,
  n: From Strategy to Implementation',descripti,
  o: n: 'Join industry experts as they discuss practical strategies for implementing AI solutions that drive real business value.',catego,
  r: y: 'AI & Business',speak,
  e: r: 'Dr. Sarah Chen',da,
  t: e: '2025-02-15',ti,
  m: e: '1,
  4:00 EST',durati,
  o: n: '60 min',attende,
  e: s: 1250,featur,
  e: d: true,stat,
  u: s: 'upcoming',thumbna,
  i: l: '/images/webinars/ai-business-transformation.jpg',ta,
  g: s: [['AIBusiness Strategy', 'Digital Transformation'],
  ],
  },
  {
  id: 2,tit,
  l: e: 'Quantum Computin,
  g: Breaking Down the Hype vs. Reality',descripti,
  o: n: 'A deep dive into current quantum computing capabilities and what businesses can realistically expect in the next 5 years.',catego,
  r: y: 'Quantum Computing',speak,
  e: r: 'Dr. James Wilson',da,
  t: e: '2025-02-20',ti,
  m: e: '1,
  5:30 EST',durati,
  o: n: '90 min',attende,
  e: s: 890,featur,
  e: d: true,stat,
  u: s: 'upcoming',thumbna,
  i: l: '/images/webinars/quantum-computing-reality.jpg',ta,
  g: s: [['Quantum ComputingEmerging Tech', 'Future Trends'],
  ],
  },
  {
  id: 3,tit,
  l: e: 'Cybersecurity in the AI Er,
  a: New Threats, New Solutions'
      descripti,
  o: n: 'Explore emerging cybersecurity challenges posed by AI and learn about cutting-edge defense strategies.',catego,
  r: y: 'Cybersecurity',speak,
  e: r: 'Marcus Rodriguez',da,
  t: e: '2025-02-25',ti,
  m: e: '1,
  3:00 EST',durati,
  o: n: '75 min',attende,
  e: s: 1100,featur,
  e: d: true,stat,
  u: s: 'upcoming',thumbna,
  i: l: '/images/webinars/ai-cybersecurity.jpg',ta,
  g: s: [['CybersecurityAI Security', 'Threat Prevention'],
  ],
  },
  {
  id: 4,tit,
  l: e: 'Cloud-Native A,
  I: Building Scalable Machine Learning Platforms',descripti,
  o: n: 'Learn how to design and deploy AI applications that scale seamlessly in cloud environments.',catego,
  r: y: 'Cloud & DevOps',speak,
  e: r: 'Alex Thompson',da,
  t: e: '2025-03-01',ti,
  m: e: '1,
  4:30 EST',durati,
  o: n: '60 min',attende,
  e: s: 750,featur,
  e: d: false,stat,
  u: s: 'upcoming',thumbna,
  i: l: '/images/webinars/cloud-native-ai.jpg',ta,
  g: s: [['Cloud ComputingAI Platforms', 'DevOps'],
  ],
  },
  {
  id: 5,tit,
  l: e: 'Data Analytics Revolutio,
  n: From Insights to Action',descripti,
  o: n: 'Discover how modern analytics platforms are transforming business decision-making processes.',catego,
  r: y: 'Data Analytics',speak,
  e: r: 'Dr. Emily Watson',da,
  t: e: '2025-03-05',ti,
  m: e: '1,
  5:00 EST',durati,
  o: n: '60 min',attende,
  e: s: 920,featur,
  e: d: false,stat,
  u: s: 'upcoming',thumbna,
  i: l: '/images/webinars/data-analytics-revolution.jpg',ta,
  g: s: [['Data AnalyticsBusiness Intelligence', 'Decision Making'],
  ],
  },
  {
  id: 6,tit,
  l: e: 'Digital Twin Technolog,
  y: Real-World Applications and ROI',descripti,
  o: n: 'Case studies and implementation strategies for digital twin technology across various industries.',catego,
  r: y: 'Digital Twin',speak,
  e: r: 'James Wilson',da,
  t: e: '2025-03-10',ti,
  m: e: '1,
  4:00 EST',durati,
  o: n: '75 min',attende,
  e: s: 680,featur,
  e: d: false,stat,
  u: s: 'upcoming',thumbna,
  i: l: '/images/webinars/digital-twin-applications.jpg',ta,
  g: s: [['Digital TwinIoT', 'Industry 4.0'],
  ],
  },
  ]

  const upcomingWebinars = webinars.filter(w => w.status === 'upcoming')
  const featuredWebinars = webinars.filter(w => w.featured)

  const categories = [
  { na,
  m: e: 'All', cou,
  n: t: webinars.length, acti,
  v: e: true },
  },
  { na,
  m: e: 'AI & Business', cou,
  n: t: webinars.filter(w => w.category === 'AI & Business').length, acti,
  v: e: false },
  },
  { na,
  m: e: 'Quantum Computing', cou,
  n: t: webinars.filter(w => w.category === 'Quantum Computing').length, acti,
  v: e: false },
  },
  { na,
  m: e: 'Cybersecurity', cou,
  n: t: webinars.filter(w => w.category === 'Cybersecurity').length, acti,
  v: e: false },
  },
  { na,
  m: e: 'Cloud & DevOps', cou,
  n: t: webinars.filter(w => w.category === 'Cloud & DevOps').length, acti,
  v: e: false },
  },
  { na,
  m: e: 'Data Analytics', cou,
  n: t: webinars.filter(w => w.category === 'Data Analytics').length, acti,
  v: e: false },
  },
  { na,
  m: e: 'Digital Twin', cou,
  n: t: webinars.filter(w => w.category === 'Digital Twin').length, acti,
  v: e: false },
  },
  ]
  const formatDate = (dateStri,
  n: g: string) () => {
  return new Date(dateString).toLocaleDateString('en-US', {
  weekd,
  a: y: 'long',ye,
  a: r: 'numeric',mon,
  t: h: 'long',d,
  a: y: 'numeric'
})
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, quantum computing, cybersecurity, and emerging technologies. Learn from industry leaders and stay ahead of the curve."
      />
      
      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="container-responsive">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Video className="w-4 h-4" />
              Live Learning Sessions
            </div>
            
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Expert Webinars &
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-600 bg-clip-text text-transparent">
                Learning Sessions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join industry experts and thought leaders for in-depth discussions on cutting-edge technologies
              practical implementation strategies, and future industry trends.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-5 h-5" />
                <span>{upcomingWebinars.length} Upcoming Sessions</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-5 h-5" />
                <span>Expert Speakers</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-5 h-5" />
                <span>Free Registration</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */},
  }
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Categories Filter */},
  }
      <section className="py-12 border-b border-slate-700/50">
        <div className="container-responsive">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
  <button
                key={category.name},
  }
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
  category.active
                    ? 'border-purple-400 bg-purple-400/20 text-purple-400'
                    : 'border-slate-600 text-gray-400,
  hove: r: border-slate-500 hove,
  r:text-gray-300'
}`}
              >
                {category.name},
  }
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Webinars */},
  }
      <section className="py-16">
        <div className="container-responsive">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Sessions</h2>
            <p className="text-gray-400">Don't miss these highly anticipated webinars</p>
          </div>
          
          <div className="grid grid-cols-1,
  l: g:grid-cols-2 gap-8">
            {featuredWebinars.map((webinar) => (
  <motion.div
                key={webinar.id},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
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
                className="className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden,
  hove: r: border-purple-400/50 transition-all duration-300 hove,
  r:bg-slate-800/70";"
              >
                {/* Thumbnail */},
  }
                <div className="relative h-64 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
                  <Play className="w-20 h-20 text-purple-400 opacity-80 group-hov,
  e: r:opacity-100 transition-opacity duration-200" />
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-400 text-xs font-medium">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-green-400 text-xs font-medium">
                      <Clock3 className="w-3 h-3 mr-1" />
                      {webinar.duration},
  }
                    </span>
                  </div>
                </div>
                
                {/* Content */},
  }
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-slate-700/50 text-purple-400 text-xs font-medium rounded-full mb-3">
                      {webinar.category},
  }
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hov,
  e: r:text-purple-400 transition-colors">
                      {webinar.title},
  }
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {webinar.description},
  }
                    </p>
                  </div>
                  
                  <div className="space-y-3 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{webinar.speaker}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(webinar.date)} at {webinar.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{webinar.attendees.toLocaleString()} registered</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {webinar.tags.map((tag, index) => (
  <span key={index} className="inline-flex items-center px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded">
                        {tag},
  }
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-600,
  hove: r: from-purple-600,
  hove: r:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 transform hove,
  r:scale-105 flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Register Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Upcoming Webinars */},
  }
      <section className="py-16">
        <div className="container-responsive">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">All Upcoming Webinars</h2>
            <p className="text-gray-400">Complete schedule of upcoming learning sessions</p>
          </div>
          
          <div className="space-y-6">
            {upcomingWebinars.map((webinar) => (
  <motion.div
                key={webinar.id},
  }
                initial={ opaci,
  t: y: 0, x: -20 },
  }
                whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                transition={ durati,
  o: n: 0.6 },
  }
                viewport={ on,
  c: e: true },
  }
                className="className="group bg-slate-800/30 border border-slate-700/30 rounded-xl p-6,
  hove: r: border-slate-600/50 transition-all duration-300,
  hove: r:bg-slate-800/50";"
              >
                <div className="flex flex-col,
  l: g:flex-row l,
  g:items-center gap-6">
                  {/* Thumbnail */},
  }
                  <div className="flex-shrink-0 relative w-32 h-24 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg"></div>
                    <Play className="w-8 h-8 text-purple-400" />
                    {webinar.featured && (
  <div className="absolute top-2 right-2">
                        <span className="inline-flex items-center px-2 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-400 text-xs">
                          <Star className="w-3 h-3" />
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */},
  }
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 bg-slate-700/50 text-purple-400 text-xs font-medium rounded-full">
                        {webinar.category},
  }
                      </span>
                      {webinar.featured && (
  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full border border-purple-400/30">
                          Featured
                        </span>
                      )}
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-400/30">
                        {webinar.duration},
  }
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 group-hov,
  e: r:text-purple-400 transition-colors">
                      {webinar.title},
  }
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {webinar.description},
  }
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {webinar.speaker},
  }
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(webinar.date)},
  }
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {webinar.time},
  }
                      </span>
                      <span className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {webinar.attendees.toLocaleString()} registered
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {webinar.tags.map((tag, index) => (
  <span key={index} className="inline-flex items-center px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded">
                          {tag},
  }
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Actions */},
  }
                  <div className="flex-shrink-0 flex flex-col gap-3">
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600,
  hove: r: from-purple-600,
  hove: r:to-pink-700 text-white font-medium rounded-lg transition-all duration-300,
  transform: hover:scale-105 shadow-lg,
  hove: r:shadow-purple-500/25">
                      <Calendar className="w-4 h-4" />
                      Register
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <div className="flex gap-2">
                      <button className="p-2 bg-slate-700/50 rounded-lg text-gray-400,
  hove: r:text-purple-400 transition-colors">
                        <Bookmark className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hove,
  r:text-purple-400 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive text-center">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 30 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            viewport={ on,
  c: e: true },
  }
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Never Miss a Learning Opportunity
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get notified about upcoming webinars, new learning resources, and exclusive content 
              from our technology experts.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="className="flex-1 px-6 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400,
  focu: s:outline-none,
  focu: s:ring-2,
  focu: s:ring-purple-500,
  focu: s:border-transparent";"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600,
  hove: r:from-purple-600,
  hove: r:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 transform hove,
  r:scale-105">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default Webinars
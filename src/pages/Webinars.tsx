import React from &apos;react';
import { motion } from &apos;framer-motion';
import { SEO } from &apos;../components/SEO';
import { 
  Video, Calendar, Clock, Users, Play, 
  Star, ArrowRight, ExternalLink, Download
} from &apos;lucide-react';&apos;&apos;

export default function Webinars() {}
  const upcomingWebinars = [
    ;{
      id: 1,
      title: &quot;AI Revolutio,n: Transforming Business Operations&quot;,
      description: &quot;Learn how AI is revolutionizing business operations and discover practical implementation strategies.&quot;,
      date: &quot;2025-01-15&quot;,
      time: &quot;,2:00 PM EST&quot;,
      duration: &quot;60 minutes&quot;,
      speaker: &quot;Dr. Sarah Chen&quot;,
      attendees: 1250,
      featured: true
    },
    {
      id: 2,
      title: &quot;Quantum Computin,g: The Future is Now&quot;,
      description: &quot;Explore the latest developments in quantum computing and their real-world applications.&quot;,
      date: &quot;2025-01-20&quot;,
      time: &quot;,3:00 PM EST&quot;,
      duration: &quot;45 minutes&quot;,
      speaker: &quot;Prof. Michael Rodriguez&quot;,
      attendees: 890,
      featured: true
    },
    {
      id: 3,
      title: &quot;Micro SaaS Success Stories&quot;,
      description: &quot;Hear from successful micro SaaS entrepreneurs and learn their strategies for growth.&quot;,
      date: &quot;2025-01-25&quot;,
      time: &quot;,1:00 PM EST&quot;,
      duration: &quot;50 minutes&quot;,
      speaker: &quot;Alex Thompson&quot;,
      attendees: 567,
      featured: false
    }
  ];&quot;

  const pastWebinars = [
    {
      id: 4,
      title: &quot;Cybersecurity Best Practices 2025&quot;,
      description: &quot;Essential cybersecurity practices for modern applications and infrastructure.&quot;,
      date: &quot;2025-01-10&quot;,
      duration: &quot;55 minutes&quot;,
      speaker: &quot;Lisa Park&quot;,
      views: 2340,
      rating: 4.8
    },
    {
      id: 5,
      title: &quot;Digital Transformation Strategies&quot;,
      description: &quot;Comprehensive guide to successful digital transformation initiatives.&quot;,
      date: &quot;2025-01-05&quot;,
      duration: &quot;65 minutes&quot;,
      speaker: &quot;David Kumar&quot;,
      views: 1890,
      rating: 4.7
    }
  ];

  return (&quot;
    <>
      <SEO 
        title=&quot;Webinars - Zion Tech Group | Technology Education & Insights&quot;
        description=&quot;Join our expert-led webinars on AI, quantum computing, cybersecurity, and emerging technologies. Learn from industry leaders and stay ahead of the curve.&quot;
        keywords=&quot;webinars, technology education, AI insights, quantum computing, cybersecurity, online learning, Zion Tech Group&quot;
      />&quot;
      
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>
        {/* Hero Section */}&quot;
        <section className=&quot;py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center max-w-4xl mx-auto&quot;
            >&quot;
              <h1 className=&quot;text-5xl md:text-6xl font-bold text-white mb-6&quot;>
                Expert Webinars&quot;
              </h1>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Join our expert-led webinars and learn from industry leaders about 
                the latest trends in AI, quantum computing, and emerging technologies&quot;
              </p>
              <div className=&quot;flex items-center justify-center&quot;>&quot;"
                <Video className=&quot;w-16 h-16 text-blue-400&quot; />&quot;
              </div>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section className=&quot;py-16&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-12&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Upcoming Webinars&quot;</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Don&apos;t miss these exclusive sessions with industry experts&apos;
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-3 gap-8&quot;>
              {upcomingWebinars.map((webinar, index) => (&quot;}
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300&quot;
                >&quot;
                  <div className=&quot;flex items-start justify-between mb-4&quot;>&quot;"
                    <span className=&quot;px-3 py-1 bg-green-600/20 border border-green-400/30 rounded-full text-green-300 text-xs&quot;>
                      Upcoming&quot;
                    </span>
                    {webinar.featured && (}
                      <span className=&quot;px-3 py-1 bg-yellow-600/20 border border-yellow-400/30 rounded-full text-yellow-300 text-xs&quot;>
                        Featured&quot;
                      </span>
                    )}
                  </div>

                  <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{webinar.title}&quot;</h3>
                  <p className=&quot;text-gray-300 text-sm mb-4&quot;>{webinar.description}&quot;</p>

                  <div className=&quot;space-y-2 mb-4&quot;>&quot;"
                    <div className=&quot;flex items-center text-gray-400 text-sm&quot;>&quot;"
                      <Calendar className=&quot;w-4 h-4 mr-2&quot; />
                      {new Date(webinar.date).toLocaleDateString()}&quot;
                    </div>
                    <div className=&quot;flex items-center text-gray-400 text-sm&quot;>&quot;"
                      <Clock className=&quot;w-4 h-4 mr-2&quot; />
                      {webinar.time} • {webinar.duration}&quot;
                    </div>
                    <div className=&quot;flex items-center text-gray-400 text-sm&quot;>&quot;"
                      <Users className=&quot;w-4 h-4 mr-2&quot; />
                      {webinar.attendees} registered&quot;
                    </div>
                  </div>

                  <div className=&quot;mb-4&quot;>&quot;"
                    <p className=&quot;text-sm text-gray-400&quot;>Speaker:&quot;</p>
                    <p className=&quot;text-blue-400 font-medium&quot;>{webinar.speaker}&quot;</p>
                  </div>

                  <button className=&quot;w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hove,r:to-purple-700 transition-all duration-200&quot;>
                    Register Now&quot;
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Webinars */}
        <section className=&quot;py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-12&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Past Webinars&quot;</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Watch recordings of our previous expert sessions&quot;
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
              {pastWebinars.map((webinar, index) => (&quot;}
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300&quot;
                >&quot;
                  <div className=&quot;flex items-start justify-between mb-4&quot;>&quot;"
                    <span className=&quot;px-3 py-1 bg-gray-600/20 border border-gray-400/30 rounded-full text-gray-300 text-xs&quot;>
                      Past Webinar&quot;
                    </span>
                    <div className=&quot;flex items-center text-yellow-400&quot;>&quot;"
                      <Star className=&quot;w-4 h-4 fill-current&quot; />&quot;
                      <span className=&quot;ml-1 text-sm&quot;>{webinar.rating}&quot;</span>
                    </div>
                  </div>

                  <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{webinar.title}&quot;</h3>
                  <p className=&quot;text-gray-300 text-sm mb-4&quot;>{webinar.description}&quot;</p>

                  <div className=&quot;space-y-2 mb-4&quot;>&quot;"
                    <div className=&quot;flex items-center text-gray-400 text-sm&quot;>&quot;"
                      <Calendar className=&quot;w-4 h-4 mr-2&quot; />
                      {new Date(webinar.date).toLocaleDateString()}&quot;
                    </div>
                    <div className=&quot;flex items-center text-gray-400 text-sm&quot;>&quot;"
                      <Clock className=&quot;w-4 h-4 mr-2&quot; />
                      {webinar.duration}&quot;
                    </div>
                    <div className=&quot;flex items-center text-gray-400 text-sm&quot;>&quot;"
                      <Users className=&quot;w-4 h-4 mr-2&quot; />
                      {webinar.views} views&quot;
                    </div>
                  </div>

                  <div className=&quot;mb-4&quot;>&quot;"
                    <p className=&quot;text-sm text-gray-400&quot;>Speaker:&quot;</p>
                    <p className=&quot;text-blue-400 font-medium&quot;>{webinar.speaker}&quot;</p>
                  </div>

                  <div className=&quot;flex gap-2&quot;>&quot;"
                    <button className=&quot;flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200&quot;>&quot;"
                      <Play className=&quot;w-4 h-4 inline mr-2&quot; />
                      Watch Now&quot;
                    </button>
                    <button className=&quot;px-4 py-2 border border-slate-600 text-gray-300 rounded-lg hove,r:bg-slate-700 transition-colors&quot;>&quot;"
                      <Download className=&quot;w-4 h-4&quot; />&quot;
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;py-20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center max-w-4xl mx-auto&quot;
            >&quot;
              <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
                Stay Updated&quot;
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Subscribe to our newsletter to get notified about upcoming webinars 
                and exclusive technology insights.&quot;
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>&quot;"
                <a
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105&quot;
                >&quot;
                  <Video className=&quot;w-5 h-5 mr-2&quot; />
                  Subscribe to Updates&quot;
                </a>
                <a
                  href=&quot;/training&quot;
                  className=&quot;inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hove,r:text-white transition-all duration-200&quot;
                >&quot;
                  <ArrowRight className=&quot;w-5 h-5 mr-2&quot; />
                  View Training Programs&quot;
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
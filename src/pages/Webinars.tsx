
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';


export default function Webinars() {}
  const upcomingWebinars = [

      description: "Learn how AI is revolutionizing business operations and discover practical implementation strategies.", date: "2025-01-15",
      time: "2:00 PM EST", duration: "60 minutes",
      speaker: "Dr. Sarah Chen", attendees: 1250,

      featured: true

      title: "Quantum Computing: The Future is Now", description: "Explore the latest developments in quantum computing and their real-world applications.",
      date: "2025-01-20", time: "3:00 PM EST",
      duration: "45 minutes", speaker: "Prof. Michael Rodriguez",
      attendees: 890, featured: true
    }, { id: 3, title: "Micro SaaS Success Stories",
      description: "Hear from successful micro SaaS entrepreneurs and learn their strategies for growth.", date: "2025-01-25",
      time: "1:00 PM EST", duration: "50 minutes",
      speaker: "Alex Thompson", attendees: 567,

      featured: false
    }
  ];&quot;

  const pastWebinars = [

      description: "Essential cybersecurity practices for modern applications and infrastructure.", date: "2025-01-10",
      duration: "55 minutes", speaker: "Lisa Park",
      views: 2340, rating: 4.8
    }, { id: 5, title: "Digital Transformation Strategies",
      description: "Comprehensive guide to successful digital transformation initiatives.", date: "2025-01-05",
      duration: "65 minutes", speaker: "David Kumar",
      views: 1890, rating: 4.7

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

              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Upcoming Webinars</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don&apos;t miss these exclusive sessions with industry experts'
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar, index) => (

                <motion.div

                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

                    )}
                  </div>;


                  </div>

                  <button className=&quot;w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hove,r:to-purple-700 transition-all duration-200&quot;>
                    Register Now&quot;
                  </button>
                </motion.div>

              ))}
            </div>;
          </div>;
        </section>;

        {/* Past Webinars */}

              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
              {pastWebinars.map((webinar, index) => (&quot}
                <motion.div

                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

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
            </div>;
          </div>;
        </section>;

        {/* CTA Section */}

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

  )}






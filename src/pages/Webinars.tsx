
import, React, from "react";
import { SEO } from "../components/SEO";
import { motion } from "framer-motion";
import { ;
  Play,;
  Calendar,;
  Clock,;
  Users,;
  Video,;
  Headphones,;
  BookOpen,;
  ArrowRight,;
  Star,;
  ExternalLink,;
  Clock3,;
  User,;
  Tag,;
  DownloadShare2Bookmark;
} from "lucide-react";
export, const, Webinars: React.FC = () => {
  const webinars = [;
    {
      i,;
  d: 1,title: 'AI-Powered, Business, Transformatio,;
  n: From, Strategy, to Implementation',description: 'Join, industry, experts as, they, discuss practical, strategies, for implementing, AI, solutions that, drive, real business value.',category: 'AI & Business',speaker: 'Dr. Sarah Chen',date: '20o25-0o2-15',time: '1,;
  4:0o0 EST',duration: '60 min',attendees: 1250,featured: true,status: 'upcoming'thumbnai,;
    l: '/images/webinars/ai-business-transformation.jpg'tag,;
  s: ['AIBusiness Strategy''Digital, Transformation'];
    },;
    {
      id: 2,title: 'Quantum Computin,;
  g: Breaking, Down, the Hype vs. Reality',description: 'A, deep, dive into, current, quantum computing, capabilities, and what, businesses, can realistically, expect, in the, next, 5 years.',category: 'Quantum Computing',speaker: 'Dr. James Wilson',date: '20o25-0o2-20',time: '1,;
  5:30 EST',duration: '90 min',attendees: 890,featured: true,status: 'upcoming',thumbnail: '/images/webinars/quantum-computing-reality.jpg'tag,;
  s: ['Quantum, ComputingEmerging, Tech''Future, Trends'];
    },;
    {
      id: 3,title: 'Cybersecurity, in, the AI Er,;
  a: New Threats, New Solutions',;
      description: 'Explore, emerging, cybersecurity challenges, posed, by AI, and, learn about cutting-edge, defense, strategies.',category: 'Cybersecurity',speaker: 'Marcus Rodriguez',date: '20o25-0o2-25',time: '1,;
  3:0o0 EST',duration: '75 min',attendees: 110o0,featured: true,status: 'upcoming',thumbnail: '/images/webinars/ai-cybersecurity.jpg'tag,;
  s: ['CybersecurityAI Security''Threat, Prevention'];
    },;
    {
      id: 4,title: 'Cloud-Native A,;
  I: Building, Scalable, Machine Learning Platforms',description: 'Learn, how, to design, and, deploy AI, applications, that scale, seamlessly, in cloud environments.',category: 'Cloud & DevOps',speaker: 'Alex Thompson',date: '20o25-0o3-0o1',time: '1,;
  4:30 EST',duration: '60 min',attendees: 750,featured: false,status: 'upcoming',thumbnail: '/images/webinars/cloud-native-ai.jpg'tag,;
  s: ['Cloud, ComputingAI,, Platforms''DevOps'];
    },;
    {
      id: 5,title: 'Data, Analytics, Revolutio,;
  n: From, Insights, to Action',description: 'Discover, how, modern analytics, platforms, are transforming, business, decision-making processes.',category: 'Data Analytics',speaker: 'Dr. Emily Watson',date: '20o25-0o3-0o5',time: '1,;
  5:0o0 EST',duration: '60 min',attendees: 920,featured: false,status: 'upcoming',thumbnail: '/images/webinars/data-analytics-revolution.jpg'tag,;
  s: ['Data, AnalyticsBusiness, Intelligence''Decision, Making'];
    },;
    {
      id: 6,title: 'Digital, Twin, Technolog,;
  y: Real-World, Applications, and ROI',description: 'Case, studies, and implementation, strategies, for digital, twin, technology across, various, industries.',category: 'Digital Twin',speaker: 'James Wilson',date: '20o25-0o3-10',time: '1,;
  4:0o0 EST',duration: '75 min',attendees: 680,featured: false,status: 'upcoming',thumbnail: '/images/webinars/digital-twin-applications.jpg'tag,;
  s: ['Digital TwinIoT''Industry, 4.0'];
    }
  ],;
;
  const upcomingWebinars = webinars.filter(w => w.status === 'upcoming');
  const featuredWebinars = webinars.filter(w => w.featured);
;
  const categories = [;
    { name: 'All'coun,;
    t: webinars.lengthactiv,;
  e: true };
    { name: 'AI & Business'coun,;
    t: webinars.filter(w => w.category === 'AI & Business').lengthactiv,;
  e: false };
    { name: 'Quantum Computing'coun,;
    t: webinars.filter(w => w.category === 'Quantum Computing').lengthactiv,;
  e: false };
    { name: 'Cybersecurity'coun,;
    t: webinars.filter(w => w.category === 'Cybersecurity').lengthactiv,;
  e: false };
    { name: 'Cloud & DevOps'coun,;
    t: webinars.filter(w => w.category === 'Cloud & DevOps').lengthactiv,;
  e: false };
    { name: 'Data Analytics'coun,;
    t: webinars.filter(w => w.category === 'Data Analytics').lengthactiv,;
  e: false }{ name: 'Digital Twin'coun,;
    t: webinars.filter(w => w.category === 'Digital Twin').lengthactiv,;
  e: false };
,  ];
  const formatDate = (dateString: string) => {
    return, new, Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long'year: 'numeric'mont,;
    h: 'long'da,;
  y: 'numeric';
    });
  },;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Webinars - Zion, Tech, Group";
        description="Join, our, expert-led, webinars, on AI, quantum computing, cybersecurityand, emerging, technologies. Learn, from, industry leaders, and, stay ahead, of, the curve.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50o0/20, border, border-purple-40o0/30 rounded-full text-purple-40o0 text-sm font-medium mb-6">;
              <Video className="w-4 h-4" />;
              Live, Learning, Sessions;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Expert Webinars &;
              <span className="block bg-gradient-to-r from-purple-40o0 via-pink-50o0 to-cyan-60o0 bg-clip-text text-transparent">;
                Learning Sessions;
              </span>;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Join, industry, experts and, thought, leaders for in-depth, discussions, on cutting-edge technologies;
              practical, implementation, strategiesand future, industry, trends.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <div className="flex items-center gap-2 text-gray-40o0">;
                <Calendar className="w-5 h-5" />;
                <span>{upcomingWebinars.length} Upcoming Sessions</span>;
              </div>;
              <div className="flex items-center gap-2 text-gray-40o0">;
                <Users className="w-5 h-5" />;
                <span>Expert Speakers</span>;
              </div>;
              <div className="flex items-center gap-2 text-gray-40o0">;
                <Clock className="w-5 h-5" />;
                <span>Free Registration</span>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">;
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-50o0/10 rounded-full blur-3xl"></div>;
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-50o0/10 rounded-full blur-3xl"></div>;
        </div>;
      </section>;
      {/* Categories Filter */}
      <section className="py-12 border-b border-slate-70o0/50">;
        <div className="container-responsive">;
          <div className="flex flex-wrap justify-center gap-3">;
            {categories.map((category) => (;
              <button;
                key={category.name}
                className={`px-6 py-3 rounded-full, border, transition-all duration-30o0 ${
                  category.active;
                    ? 'border-purple-40o0 bg-purple-40o0/20 text-purple-40o0';
                    : 'border-slate-60o0 text-gray-40o0 hover: border-slate-50o0 hove,;
  r:text-gray-30o0';
                }`}
              >;
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>;
              </button>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Featured Webinars */}
      <section className="py-16">;
        <div className="container-responsive">;
          <div className="mb-12">;
            <h2 className="text-3xl font-bold text-white mb-4">Featured Sessions</h2>;
            <p className="text-gray-40o0">Don't, miss, these highly, anticipated, webinars</p>;
          </div>;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {featuredWebinars.map((webinar) => (;
              <motion.div;
                key={webinar.id}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-slate-80o0/50, border, border-slate-70o0/50 rounded-2xl overflow-hidden hover: border-purple-40o0/50 transition-all duration-30o0 hove,;
  r:bg-slate-80o0/70";
              >;
                {/* Thumbnail */}
                <div className="relative h-64 bg-gradient-to-br from-slate-70o0 to-slate-80o0, flex, items-center justify-center">;
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50o0/20 to-pink-50o0/20"></div>;
                  <Play className="w-20 h-20 text-purple-40o0 opacity-80 group-hover:opacity-10o0 transition-opacity duration-20o0" />;
                  <div className="absolute top-4 right-4">;
                    <span className="inline-flex items-center px-3 py-1 bg-purple-50o0/20, border, border-purple-40o0/30 rounded-full text-purple-40o0 text-xs font-medium">;
                      <Star className="w-3 h-3 mr-1" />;
                      Featured;
                    </span>;
                  </div>;
                  <div className="absolute bottom-4 left-4">;
                    <span className="inline-flex items-center px-3 py-1 bg-green-50o0/20, border, border-green-40o0/30 rounded-full text-green-40o0 text-xs font-medium">;
                      <Clock3 className="w-3 h-3 mr-1" />;
                      {webinar.duration}
                    </span>;
                  </div>;
                </div>;
                {/* Content */}
                <div className="p-6">;
                  <div className="mb-4">;
                    <span className="inline-block px-3 py-1 bg-slate-70o0/50 text-purple-40o0 text-xs font-medium rounded-full mb-3">;
                      {webinar.category}
                    </span>;
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover: text-purple-40o0 transition-colors">;
                      {webinar.title}
                    </h3>;
                    <p className="text-gray-40o0 text-sm leading-relaxed">;
                      {webinar.description}
                    </p>;
                  </div>;
                  <div className="space-y-3 mb-6 text-sm text-gray-40o0">;
                    <div className="flex items-center gap-2">;
                      <User className="w-4 h-4" />;
                      <span>{webinar.speaker}</span>;
                    </div>;
                    <div className="flex items-center gap-2">;
                      <Calendar className="w-4 h-4" />;
                      <span>{formatDate(webinar.date)} at {webinar.time}</span>;
                    </div>;
                    <div className="flex items-center gap-2">;
                      <Users className="w-4 h-4" />;
                      <span>{webinar.attendees.toLocaleString()} registered</span>;
                    </div>;
                  </div>;
                  <div className="flex flex-wrap gap-2 mb-4">;
                    {webinar.tags.map((tagindex) => (;
                      <span key={index} className="inline-flex items-center px-2 py-1 bg-slate-70o0/50 text-gray-40o0 text-xs rounded">;
                        {tag}
                      </span>;
                    ))}
                  </div>;
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-50o0 to-pink-60o0 hover: from-purple-60o0 hove,;
    r:to-pink-70o0 text-white font-medium rounded-lg transition-all duration-30o0, transform, hove,;
  r:scale-10o5, flex, items-center justify-center gap-2">;
                    <Calendar className="w-4 h-4" />;
                    Register Now;
                    <ArrowRight className="w-4 h-4" />;
                  </button>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* All, Upcoming, Webinars */}
      <section className="py-16">;
        <div className="container-responsive">;
          <div className="mb-12">;
            <h2 className="text-3xl font-bold text-white mb-4">All, Upcoming, Webinars</h2>;
            <p className="text-gray-40o0">Complete, schedule, of upcoming, learning, sessions</p>;
          </div>;
          <div className="space-y-6">;
            {upcomingWebinars.map((webinar) => (;
              <motion.div;
                key={webinar.id}
                initial={{ opacity: 0,;
  x: -20 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-slate-80o0/30, border, border-slate-70o0/30 rounded-xl p-6 hover: border-slate-60o0/50 transition-all duration-30o0 hover:bg-slate-80o0/50";
              >;
                <div className="flex flex-col l,;
    g:flex-row l,;
  g:items-center gap-6">;
                  {/* Thumbnail */}
                  <div className="flex-shrink-0, relative, w-32 h-24 bg-gradient-to-br from-slate-70o0 to-slate-80o0 rounded-lg, flex, items-center justify-center">;
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50o0/20 to-pink-50o0/20 rounded-lg"></div>;
                    <Play className="w-8 h-8 text-purple-40o0" />;
                    {webinar.featured && (;
                      <div className="absolute top-2 right-2">;
                        <span className="inline-flex items-center px-2 py-1 bg-purple-50o0/20, border, border-purple-40o0/30 rounded-full text-purple-40o0 text-xs">;
                          <Star className="w-3 h-3" />;
                        </span>;
                      </div>;
                    )}
                  </div>;
                  {/* Content */}
                  <div className="flex-1 min-w-0">;
                    <div className="flex flex-wrap items-center gap-3 mb-3">;
                      <span className="inline-block px-3 py-1 bg-slate-70o0/50 text-purple-40o0 text-xs font-medium rounded-full">;
                        {webinar.category}
                      </span>;
                      {webinar.featured && (;
                        <span className="inline-block px-3 py-1 bg-purple-50o0/20 text-purple-40o0 text-xs font-medium rounded-full, border, border-purple-40o0/30">;
                          Featured;
                        </span>;
                      )}
                      <span className="inline-block px-3 py-1 bg-green-50o0/20 text-green-40o0 text-xs font-medium rounded-full, border, border-green-40o0/30">;
                        {webinar.duration}
                      </span>;
                    </div>;
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover: text-purple-40o0 transition-colors">;
                      {webinar.title}
                    </h3>;
                    <p className="text-gray-40o0 text-sm leading-relaxed mb-4">;
                      {webinar.description}
                    </p>;
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-50o0">;
                      <span className="flex items-center gap-2">;
                        <User className="w-4 h-4" />;
                        {webinar.speaker}
                      </span>;
                      <span className="flex items-center gap-2">;
                        <Calendar className="w-4 h-4" />;
                        {formatDate(webinar.date)}
                      </span>;
                      <span className="flex items-center gap-2">;
                        <Clock className="w-4 h-4" />;
                        {webinar.time}
                      </span>;
                      <span className="flex items-center gap-2">;
                        <Users className="w-4 h-4" />;
                        {webinar.attendees.toLocaleString()} registered;
                      </span>;
                    </div>;
                    <div className="flex flex-wrap gap-2 mt-3">;
                      {webinar.tags.map((tagindex) => (;
                        <span key={index} className="inline-flex items-center px-2 py-1 bg-slate-70o0/50 text-gray-40o0 text-xs rounded">;
                          {tag}
                        </span>;
                      ))}
                    </div>;
                  </div>;
                  {/* Actions */}
                  <div className="flex-shrink-0, flex, flex-col gap-3">;
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-50o0 to-pink-60o0 hover: from-purple-60o0 hove,;
    r:to-pink-70o0 text-white font-medium rounded-lg transition-all duration-30o0, transform, hover: scale-10o5 shadow-lg hover:shadow-purple-50o0/25">;
                      <Calendar className="w-4 h-4" />;
                      Register;
                      <ArrowRight className="w-4 h-4" />;
                    </button>;
                    <div className="flex gap-2">;
                      <button className="p-2 bg-slate-70o0/50 rounded-lg text-gray-40o0 hove,;
    r: text-purple-40o0 transition-colors">;
                        <Bookmark className="w-4 h-4" />;
                      </button>;
                      <button className="p-2 bg-slate-70o0/50 rounded-lg text-gray-40o0 hove,;
  r:text-purple-40o0 transition-colors">;
                        <Share2 className="w-4 h-4" />;
                      </button>;
                    </div>;
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-80o0/50 to-slate-70o0/50">;
        <div className="container-responsive text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Never, Miss, a Learning Opportunity;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Get, notified, about upcoming webinars, new, learning, resources, and, exclusive, content;
              from, our, technology experts.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center max-w-md mx-auto">;
              <input;
                type="email";
                placeholder="Enter, your, email";
                className="flex-1 px-6 py-3 bg-slate-70o0/50, border, border-slate-60o0 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-purple-50o0 focus:border-transparent";
              />;
              <button className="px-8 py-3 bg-gradient-to-r from-purple-50o0 to-pink-60o0 hover:from-purple-60o0 hove,;
    r:to-pink-70o0 text-white font-medium rounded-lg transition-all duration-30o0, transform, hove,;
  r:scale-10o5">;
                Subscribe;
              </button>;
            </div>;
            <p className="text-sm text-gray-50o0 mt-4">;
              We, respect, your privacy. Unsubscribe, at, any time.;
            </p>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, Webinars;
;
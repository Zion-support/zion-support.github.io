
import React from "react"
import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { ;
  Play,;
  Calendar, ;
  Clock, ;
  Users, ;
  Video, ;
  Headphones, ;
  BookOpen, ;
  ArrowRight, ;
  Star, ;
  ExternalLink,;
  Clock3,;
  User,;
  Tag,;
  Download,;
  Share2,;
  Bookmark;
} from "lucide-react"
export const Webinars: React.FC = () => {
  const webinars = [;
    {;
      id: 1,title: 'AI-Powered Business Transformation: From Strategy to Implementation',description: 'Join industry experts as they discuss practical strategies for implementing AI solutions that drive real business value.',category: 'AI & Business',speaker: 'Dr. Sarah Chen',date: '2025-02-15',time: '14:00 EST',duration: '60 min',attendees: 1250,featured: true,status: 'upcoming',thumbnail: '/images/webinars/ai-business-transformation.jpg',tags: ['AIBusiness Strategy', 'Digital Transformation']
    },;
    {;
      id: 2,title: 'Quantum Computing: Breaking Down the Hype vs. Reality',description: 'A deep dive into current quantum computing capabilities and what businesses can realistically expect in the next 5 years.',category: 'Quantum Computing',speaker: 'Dr. James Wilson',date: '2025-02-20',time: '15:30 EST',duration: '90 min',attendees: 890,featured: true,status: 'upcoming',thumbnail: '/images/webinars/quantum-computing-reality.jpg',tags: ['Quantum ComputingEmerging Tech', 'Future Trends']
    },;
    {;
      id: 3,title: 'Cybersecurity in the AI Era: New Threats, New Solutions',;
      description: 'Explore emerging cybersecurity challenges posed by AI and learn about cutting-edge defense strategies.',category: 'Cybersecurity',speaker: 'Marcus Rodriguez',date: '2025-02-25',time: '13:00 EST',duration: '75 min',attendees: 1100,featured: true,status: 'upcoming',thumbnail: '/images/webinars/ai-cybersecurity.jpg',tags: ['CybersecurityAI Security', 'Threat Prevention']
    },;
    {;
      id: 4,title: 'Cloud-Native AI: Building Scalable Machine Learning Platforms',description: 'Learn how to design and deploy AI applications that scale seamlessly in cloud environments.',category: 'Cloud & DevOps',speaker: 'Alex Thompson',date: '2025-03-01',time: '14:30 EST',duration: '60 min',attendees: 750,featured: false,status: 'upcoming',thumbnail: '/images/webinars/cloud-native-ai.jpg',tags: ['Cloud ComputingAI Platforms', 'DevOps']
    },;
    {;
      id: 5,title: 'Data Analytics Revolution: From Insights to Action',description: 'Discover how modern analytics platforms are transforming business decision-making processes.',category: 'Data Analytics',speaker: 'Dr. Emily Watson',date: '2025-03-05',time: '15:00 EST',duration: '60 min',attendees: 920,featured: false,status: 'upcoming',thumbnail: '/images/webinars/data-analytics-revolution.jpg',tags: ['Data AnalyticsBusiness Intelligence', 'Decision Making']
    },;
    {;
      id: 6,title: 'Digital Twin Technology: Real-World Applications and ROI',description: 'Case studies and implementation strategies for digital twin technology across various industries.',category: 'Digital Twin',speaker: 'James Wilson',date: '2025-03-10',time: '14:00 EST',duration: '75 min',attendees: 680,featured: false,status: 'upcoming',thumbnail: '/images/webinars/digital-twin-applications.jpg',tags: ['Digital TwinIoT', 'Industry 4.0']
    };
  ],;

  const upcomingWebinars = webinars.filter(w => w.status === 'upcoming')
  const featuredWebinars = webinars.filter(w => w.featured)

  const categories = [;
    { name: 'All', count: webinars.length, active: true };
    { name: 'AI & Business', count: webinars.filter(w => w.category === 'AI & Business').length, active: false };
    { name: 'Quantum Computing', count: webinars.filter(w => w.category === 'Quantum Computing').length, active: false };
    { name: 'Cybersecurity', count: webinars.filter(w => w.category === 'Cybersecurity').length, active: false };
    { name: 'Cloud & DevOps', count: webinars.filter(w => w.category === 'Cloud & DevOps').length, active: false };
    { name: 'Data Analytics', count: webinars.filter(w => w.category === 'Data Analytics').length, active: false };
    { name: 'Digital Twin', count: webinars.filter(w => w.category === 'Digital Twin').length, active: false };
  ];
  const formatDate = (dateString: string) => {;
    return new Date(dateString).toLocaleDateString('en-US', {;
      weekday: 'long',year: 'numeric',month: 'long',day: 'numeric'
    });
  },;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, quantum computing, cybersecurity, and emerging technologies. Learn from industry leaders and stay ahead of the curve."
      />;
      ;
      {/* Hero Section */};
      <section className="relative py-20 overflow-hidden">;
        <div className="container-responsive">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-400 text-sm font-medium mb-6">;
              <[^>]*/>
              Live Learning Sessions;
            </[^>]*>
            ;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Expert Webinars &;
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-600 bg-clip-text text-transparent">;
                Learning Sessions;
              </[^>]*>
            </[^>]*>
            ;
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Join industry experts and thought leaders for in-depth discussions on cutting-edge technologies;
              practical implementation strategies, and future industry trends.;
            </[^>]*>
            ;
            <div className="flex flex-wrap justify-center gap-4">;
              <div className="flex items-center gap-2 text-gray-400">;
                <[^>]*/>
                <span>{upcomingWebinars.length} Upcoming Sessions</[^>]*>
              </[^>]*>
              <div className="flex items-center gap-2 text-gray-400">;
                <[^>]*/>
                <span>Expert Speakers</[^>]*>
              </[^>]*>
              <div className="flex items-center gap-2 text-gray-400">;
                <[^>]*/>
                <span>Free Registration</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
        ;
        {/* Background Elements */};
        <div className="absolute inset-0 overflow-hidden pointer-events-none">;
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></[^>]*>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Categories Filter */};
      <section className="py-12 border-b border-slate-700/50">;
        <div className="container-responsive">;
          <div className="flex flex-wrap justify-center gap-3">;
            {categories.map((category) => (;
              <button;
                key={category.name};
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${;
                  category.active
                    ? 'border-purple-400 bg-purple-400/20 text-purple-400'
                    : 'border-slate-600 text-gray-400 hover:border-slate-500 hover:text-gray-300'
                }`};
              >;
                {category.name};
                <span className="ml-2 text-sm opacity-75">({category.count})</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Featured Webinars */};
      <section className="py-16">;
        <div className="container-responsive">;
          <div className="mb-12">;
            <h2 className="text-3xl font-bold text-white mb-4">Featured Sessions</[^>]*>
            <p className="text-gray-400">Don't miss these highly anticipated webinars</[^>]*>
          </[^>]*>
          ;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {featuredWebinars.map((webinar) => (;
              <motion.div
                key={webinar.id};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                {/* Thumbnail */};
                <div className="relative h-64 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">;
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></[^>]*>
                  <[^>]*/>
                  <div className="absolute top-4 right-4">;
                    <span className="inline-flex items-center px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-400 text-xs font-medium">;
                      <[^>]*/>
                      Featured;
                    </[^>]*>
                  </[^>]*>
                  <div className="absolute bottom-4 left-4">;
                    <span className="inline-flex items-center px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-green-400 text-xs font-medium">;
                      <[^>]*/>
                      {webinar.duration};
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
                ;
                {/* Content */};
                <div className="p-6">;
                  <div className="mb-4">;
                    <span className="inline-block px-3 py-1 bg-slate-700/50 text-purple-400 text-xs font-medium rounded-full mb-3">;
                      {webinar.category};
                    </[^>]*>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">;
                      {webinar.title};
                    </[^>]*>
                    <p className="text-gray-400 text-sm leading-relaxed">;
                      {webinar.description};
                    </[^>]*>
                  </[^>]*>
                  ;
                  <div className="space-y-3 mb-6 text-sm text-gray-400">;
                    <div className="flex items-center gap-2">;
                      <[^>]*/>
                      <span>{webinar.speaker}</[^>]*>
                    </[^>]*>
                    <div className="flex items-center gap-2">;
                      <[^>]*/>
                      <span>{formatDate(webinar.date)} at {webinar.time}</[^>]*>
                    </[^>]*>
                    <div className="flex items-center gap-2">;
                      <[^>]*/>
                      <span>{webinar.attendees.toLocaleString()} registered</[^>]*>
                    </[^>]*>
                  </[^>]*>
                  ;
                  <div className="flex flex-wrap gap-2 mb-4">;
                    {webinar.tags.map((tag, index) => (;
                      <span key={index} className="inline-flex items-center px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded">;
                        {tag};
                      </[^>]*>
                    ))};
                  </[^>]*>
                  ;
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">;
                    <[^>]*/>
                    Register Now;
                    <[^>]*/>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* All Upcoming Webinars */};
      <section className="py-16">;
        <div className="container-responsive">;
          <div className="mb-12">;
            <h2 className="text-3xl font-bold text-white mb-4">All Upcoming Webinars</[^>]*>
            <p className="text-gray-400">Complete schedule of upcoming learning sessions</[^>]*>
          </[^>]*>
          ;
          <div className="space-y-6">;
            {upcomingWebinars.map((webinar) => (;
              <motion.div
                key={webinar.id};
                initial={{ opacity: 0, x: -20 }};
                whileInView={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.6 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">;
                  {/* Thumbnail */};
                  <div className="flex-shrink-0 relative w-32 h-24 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">;
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg"></[^>]*>
                    <[^>]*/>
                    {webinar.featured && (;&& (; (
                      <div className="absolute top-2 right-2">;
                        <span className="inline-flex items-center px-2 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-400 text-xs">;
                          <[^>]*/>
                        </[^>]*>
                      </[^>]*>
                    )};
                  </[^>]*>
                  ;
                  {/* Content */};
                  <div className="flex-1 min-w-0">;
                    <div className="flex flex-wrap items-center gap-3 mb-3">;
                      <span className="inline-block px-3 py-1 bg-slate-700/50 text-purple-400 text-xs font-medium rounded-full">;
                        {webinar.category};
                      </[^>]*>
                      {webinar.featured && (;&& (; (
                        <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full border border-purple-400/30">;
                          Featured;
                        </[^>]*>
                      )};
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-400/30">;
                        {webinar.duration};
                      </[^>]*>
                    </[^>]*>
                    ;
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">;
                      {webinar.title};
                    </[^>]*>
                    ;
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">;
                      {webinar.description};
                    </[^>]*>
                    ;
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">;
                      <span className="flex items-center gap-2">;
                        <[^>]*/>
                        {webinar.speaker};
                      </[^>]*>
                      <span className="flex items-center gap-2">;
                        <[^>]*/>
                        {formatDate(webinar.date)};
                      </[^>]*>
                      <span className="flex items-center gap-2">;
                        <[^>]*/>
                        {webinar.time};
                      </[^>]*>
                      <span className="flex items-center gap-2">;
                        <[^>]*/>
                        {webinar.attendees.toLocaleString()} registered;
                      </[^>]*>
                    </[^>]*>
                    ;
                    <div className="flex flex-wrap gap-2 mt-3">;
                      {webinar.tags.map((tag, index) => (;
                        <span key={index} className="inline-flex items-center px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded">;
                          {tag};
                        </[^>]*>
                      ))};
                    </[^>]*>
                  </[^>]*>
                  ;
                  {/* Actions */};
                  <div className="flex-shrink-0 flex flex-col gap-3">;
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">;
                      <[^>]*/>
                      Register;
                      <[^>]*/>
                    </[^>]*>
                    ;
                    <div className="flex gap-2">;
                      <button className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:text-purple-400 transition-colors">;
                        <[^>]*/>
                      </[^>]*>
                      <button className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:text-purple-400 transition-colors">;
                        <[^>]*/>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">;
        <div className="container-responsive text-center">;
          <motion.div
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Never Miss a Learning Opportunity;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Get notified about upcoming webinars, new learning resources, and exclusive content ;
              from our technology experts.;
            </[^>]*>
            ;
            <div className="flex flex-col sm: flex-row gap-4 justify-center max-w-md mx-auto">;
              <input;
                type="email"
                placeholder="Enter your email"
                className="[^"]*"
              />;
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">;
                Subscribe;
              </[^>]*>
            </[^>]*>
            ;
            <p className="text-sm text-gray-500 mt-4">;
              We respect your privacy. Unsubscribe at any time.;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default Webinars;
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Video, 
  Calendar, 
  Clock, 
  Users, 
  Play, 
  ExternalLink,
  ArrowRight,
  Star,
  Award,
  Brain,
  Shield,
  Cloud,
  Heart,
  Globe,
  TrendingUp,
  BookOpen,
  Search,
  Filter,
  Download,
  Share2,
  Eye
} from 'lucide-react';

export default function Webinars() {
  const upcomingWebinars = [
    {
      id: 1,
      title: 'AI-Powered Cybersecurity: Next-Generation Threat Detection',
      description: 'Join our cybersecurity experts as they demonstrate cutting-edge AI technologies for real-time threat detection and response in enterprise environments.',
      date: '2024-02-15',
      time: '14:00 EST',
      duration: '60 min',
      speaker: 'Dr. Sarah Chen, CTO',
      category: 'Cybersecurity',
      attendees: 0,
      maxAttendees: 500,
      featured: true,
      icon: Shield,
      color: 'from-green-600 to-emerald-600',
      registrationUrl: '/webinars/register/ai-cybersecurity-2024',
      tags: ['AI Security', 'Threat Detection', 'Enterprise Security']
    },
    {
      id: 2,
      title: 'Healthcare AI Revolution: Transforming Patient Care',
      description: 'Discover how AI is revolutionizing healthcare delivery, from diagnostic assistance to personalized treatment plans and operational optimization.',
      date: '2024-02-22',
      time: '15:30 EST',
      duration: '75 min',
      speaker: 'Dr. Priya Patel, Head of Healthcare AI',
      category: 'Healthcare',
      attendees: 0,
      maxAttendees: 400,
      featured: true,
      icon: Heart,
      color: 'from-pink-600 to-rose-600',
      registrationUrl: '/webinars/register/healthcare-ai-2024',
      tags: ['Healthcare AI', 'Patient Care', 'Digital Health']
    },
    {
      id: 3,
      title: 'Cloud FinOps Masterclass: Optimizing Your Cloud Investment',
      description: 'Learn proven strategies for cloud cost optimization, resource management, and financial operations using AI-powered tools and best practices.',
      date: '2024-03-01',
      time: '13:00 EST',
      duration: '90 min',
      speaker: 'Alex Thompson, VP of Engineering',
      category: 'Cloud & DevOps',
      attendees: 0,
      maxAttendees: 300,
      featured: false,
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      registrationUrl: '/webinars/register/cloud-finops-2024',
      tags: ['Cloud FinOps', 'Cost Optimization', 'Resource Management']
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: 'Quantum Computing and AI: The Future of Business Intelligence',
      description: 'An exploration of how quantum computing combined with AI will transform business intelligence and decision-making processes.',
      date: '2024-01-18',
      time: '14:00 EST',
      duration: '75 min',
      speaker: 'Dr. Emily Watson, Head of AI Research',
      category: 'Emerging Tech',
      attendees: 456,
      maxAttendees: 500,
      featured: false,
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      recordingUrl: '/webinars/recordings/quantum-ai-2024',
      tags: ['Quantum Computing', 'AI', 'Business Intelligence'],
      rating: 4.8,
      views: 1247
    },
    {
      id: 5,
      title: 'Digital Transformation in Manufacturing: AI-Driven Automation',
      description: 'Case studies and strategies for implementing AI-driven automation in manufacturing processes for improved efficiency and quality.',
      date: '2024-01-11',
      time: '15:30 EST',
      duration: '60 min',
      speaker: 'Marcus Rodriguez, Chief Security Officer',
      category: 'Business Process',
      attendees: 389,
      maxAttendees: 400,
      featured: false,
      icon: TrendingUp,
      color: 'from-orange-600 to-red-600',
      recordingUrl: '/webinars/recordings/manufacturing-ai-2024',
      tags: ['Manufacturing', 'AI Automation', 'Digital Transformation'],
      rating: 4.7,
      views: 987
    },
    {
      id: 6,
      title: 'Sustainable Technology: Green AI Solutions for Environmental Impact',
      description: 'How AI technologies are being leveraged to create sustainable solutions and reduce environmental impact across industries.',
      date: '2024-01-04',
      time: '13:00 EST',
      duration: '65 min',
      speaker: 'Dr. James Kim, Head of Sustainability',
      category: 'Sustainability',
      attendees: 312,
      maxAttendees: 350,
      featured: false,
      icon: Globe,
      color: 'from-green-600 to-emerald-600',
      recordingUrl: '/webinars/recordings/sustainable-tech-2024',
      tags: ['Green AI', 'Sustainability', 'Environmental Tech'],
      rating: 4.9,
      views: 1156
    }
  ];

  const categories = [
    { name: 'All', count: upcomingWebinars.length + pastWebinars.length, icon: BookOpen },
    { name: 'Cybersecurity', count: [...upcomingWebinars, ...pastWebinars].filter(w => w.category === 'Cybersecurity').length, icon: Shield },
    { name: 'Healthcare', count: [...upcomingWebinars, ...pastWebinars].filter(w => w.category === 'Healthcare').length, icon: Heart },
    { name: 'Cloud & DevOps', count: [...upcomingWebinars, ...pastWebinars].filter(w => w.category === 'Cloud & DevOps').length, icon: Cloud },
    { name: 'Emerging Tech', count: [...upcomingWebinars, ...pastWebinars].filter(w => w.category === 'Emerging Tech').length, icon: Brain },
    { name: 'Business Process', count: [...upcomingWebinars, ...pastWebinars].filter(w => w.category === 'Business Process').length, icon: TrendingUp },
    { name: 'Sustainability', count: [...upcomingWebinars, ...pastWebinars].filter(w => w.category === 'Sustainability').length, icon: Globe }
  ];

  const stats = [
    { number: '50+', label: 'Webinars Delivered', icon: Video },
    { number: '15K+', label: 'Total Attendees', icon: Users },
    { number: '4.8', label: 'Average Rating', icon: Star },
    { number: '25+', label: 'Expert Speakers', icon: Award }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, cybersecurity, healthcare technology, and digital transformation. Register for upcoming sessions or watch past recordings."
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl mb-8">
              <Video className="w-10 h-10 text-cyan-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Webinars & Training
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Join our expert-led webinars on cutting-edge AI technologies, cybersecurity, 
              healthcare innovation, and digital transformation strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4" />
                <span>50+ Webinars Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>15K+ Total Attendees</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>4.8 Average Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Upcoming Webinars</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Register for our upcoming expert-led sessions on the latest AI technologies, 
              cybersecurity trends, and digital transformation strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${webinar.color} flex items-center justify-center`}>
                    <webinar.icon className="w-8 h-8 text-white" />
                  </div>
                  {webinar.featured && (
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{webinar.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{webinar.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {webinar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(webinar.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{webinar.time} ({webinar.duration})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{webinar.attendees}/{webinar.maxAttendees} registered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>{webinar.speaker}</span>
                  </div>
                </div>

                <a
                  href={webinar.registrationUrl}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Register Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Past Webinars</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Watch recordings of our previous webinars and training sessions. 
              Access valuable insights and knowledge from our expert speakers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${webinar.color} flex items-center justify-center`}>
                    <webinar.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white line-clamp-2">{webinar.title}</h3>
                    <p className="text-slate-400 text-sm">{webinar.speaker}</p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-3">{webinar.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {webinar.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(webinar.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{webinar.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{webinar.attendees} attendees</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{webinar.views} views</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span className="text-xs text-slate-400">{webinar.rating}</span>
                  </div>
                  <a
                    href={webinar.recordingUrl}
                    className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Watch Recording
                  </a>
                </div>

                <a
                  href={webinar.recordingUrl}
                  className="w-full px-4 py-2 border border-cyan-400 text-cyan-400 text-sm rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Play className="w-3 h-3" />
                  Watch Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Browse by Category</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Find webinars and training sessions organized by technology domain and industry focus.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-slate-400 text-sm">{category.count} sessions</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated with Our Webinars</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Get notified about upcoming webinars, training sessions, and virtual events 
              from Zion Tech Group's technology experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe to Updates
              </a>
              <a
                href="/about"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

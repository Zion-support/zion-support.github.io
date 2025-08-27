import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Users, 
  Play, 
  BookOpen, 
  Video,
  TrendingUp,
  Lightbulb,
  Zap,
  Globe
} from 'lucide-react';

const webinars = [
  {
    id: 1,
    title: 'AI in Enterprise: From Strategy to Implementation',
    description: 'Learn how to develop and execute an AI strategy that drives real business value.',
    category: 'AI & Analytics',
    date: 'December 15, 2024',
    time: '2:00 PM EST',
    duration: '60 minutes',
    speaker: 'Dr. Sarah Chen',
    speakerTitle: 'Chief AI Officer',
    image: '/api/placeholder/400/250',
    registrationLink: '/contact',
    isLive: false,
    isUpcoming: true
  },
  {
    id: 2,
    title: 'Cybersecurity Best Practices for 2025',
    description: 'Discover the latest cybersecurity threats and how to protect your organization.',
    category: 'Security',
    date: 'December 20, 2024',
    time: '1:00 PM EST',
    duration: '45 minutes',
    speaker: 'Alex Thompson',
    speakerTitle: 'VP of Cybersecurity',
    image: '/api/placeholder/400/250',
    registrationLink: '/contact',
    isLive: false,
    isUpcoming: true
  },
  {
    id: 3,
    title: 'Cloud Migration Strategies',
    description: 'Best practices for migrating your infrastructure to the cloud safely and efficiently.',
    category: 'Cloud & DevOps',
    date: 'January 10, 2025',
    time: '3:00 PM EST',
    duration: '75 minutes',
    speaker: 'Marcus Rodriguez',
    speakerTitle: 'VP of Engineering',
    image: '/api/placeholder/400/250',
    registrationLink: '/contact',
    isLive: false,
    isUpcoming: true
  },
  {
    id: 4,
    title: 'Quantum Computing: The Future is Now',
    description: 'Explore the revolutionary potential of quantum computing in business applications.',
    category: 'Emerging Tech',
    date: 'January 25, 2025',
    time: '2:30 PM EST',
    duration: '90 minutes',
    speaker: 'Dr. James Kim',
    speakerTitle: 'Head of Quantum Technology',
    image: '/api/placeholder/400/250',
    registrationLink: '/contact',
    isLive: false,
    isUpcoming: true
  },
  {
    id: 5,
    title: 'Digital Transformation Success Stories',
    description: 'Real-world examples of successful digital transformation initiatives.',
    category: 'Digital Transformation',
    date: 'February 5, 2025',
    time: '1:30 PM EST',
    duration: '60 minutes',
    speaker: 'Dr. Kleber Santos',
    speakerTitle: 'CEO & Founder',
    image: '/api/placeholder/400/250',
    registrationLink: '/contact',
    isLive: false,
    isUpcoming: true
  },
  {
    id: 6,
    title: 'IoT and Edge Computing Solutions',
    description: 'How IoT and edge computing are transforming industries and creating new opportunities.',
    category: 'IoT & Edge',
    date: 'February 20, 2025',
    time: '2:00 PM EST',
    duration: '75 minutes',
    speaker: 'Dr. Emily Watson',
    speakerTitle: 'Head of Research',
    image: '/api/placeholder/400/250',
    registrationLink: '/contact',
    isLive: false,
    isUpcoming: true
  }
];

const upcomingWebinars = webinars.filter(w => w.isUpcoming);
const pastWebinars = [
  {
    id: 7,
    title: 'Machine Learning Fundamentals',
    description: 'Introduction to machine learning concepts and practical applications.',
    category: 'AI & Analytics',
    date: 'November 30, 2024',
    duration: '60 minutes',
    speaker: 'Dr. Sarah Chen',
    recordingLink: '/webinars/ml-fundamentals',
    isLive: false,
    isUpcoming: false
  },
  {
    id: 8,
    title: 'DevOps Automation Best Practices',
    description: 'Streamline your development and deployment processes with automation.',
    category: 'Cloud & DevOps',
    date: 'November 15, 2024',
    duration: '45 minutes',
    speaker: 'Marcus Rodriguez',
    recordingLink: '/webinars/devops-automation',
    isLive: false,
    isUpcoming: false
  }
];

export default function Webinars() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8"
            >
              <Video className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Expert
              <span className="text-gradient block">Webinars</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Join industry experts for in-depth discussions on technology trends, 
              best practices, and innovative solutions that drive business transformation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Calendar className="w-4 h-4" />
                <span>Monthly Sessions</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Users className="w-4 h-4" />
                <span>Industry Experts</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Play className="w-4 h-4" />
                <span>Live & Recorded</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Upcoming Webinars</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Register for our upcoming sessions and gain insights from industry leaders 
              on the latest technology trends and best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                  <div className="text-center">
                    <Video className="w-16 h-16 text-zion-cyan mx-auto mb-2" />
                    <p className="text-zion-slate-light text-sm">Webinar Preview</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                      {webinar.category}
                    </span>
                    <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full border border-zion-purple/30">
                      Upcoming
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {webinar.title}
                  </h3>
                  
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                    {webinar.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <Calendar className="w-4 h-4 text-zion-cyan" />
                      <span>{webinar.date} at {webinar.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <Clock className="w-4 h-4 text-zion-cyan" />
                      <span>{webinar.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <Users className="w-4 h-4 text-zion-cyan" />
                      <span>{webinar.speaker}, {webinar.speakerTitle}</span>
                    </div>
                  </div>
                  
                  <a
                    href={webinar.registrationLink}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Register Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Past Webinars</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Missed a session? Access recordings and materials from our previous webinars 
              to continue learning at your own pace.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center flex-shrink-0">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                        {webinar.category}
                      </span>
                      <span className="px-3 py-1 bg-zion-slate-light/20 text-zion-slate-light text-xs rounded-full border border-zion-slate-light/30">
                        Recorded
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2">{webinar.title}</h3>
                    <p className="text-zion-slate-light text-sm mb-3">{webinar.description}</p>
                    
                    <div className="flex items-center gap-4 text-zion-slate-light text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-zion-cyan" />
                        {webinar.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-zion-cyan" />
                        {webinar.duration}
                      </span>
                    </div>
                    
                    <a
                      href={webinar.recordingLink}
                      className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors duration-300"
                    >
                      <Play className="w-4 h-4" />
                      <span className="text-sm font-medium">Watch Recording</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Stay Informed</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Subscribe to our webinar series and never miss an opportunity to learn 
              from industry experts and technology leaders. Get notified about upcoming 
              sessions and access exclusive content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe to Webinars
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Suggest Topics
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

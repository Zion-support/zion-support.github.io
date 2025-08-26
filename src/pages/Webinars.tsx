import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Video } from 'lucide-react';

const Webinars = () => {
  const webinars = [
    {
      id: 1,
      title: "AI & Machine Learning Trends 2024",
      description: "Explore the latest developments in artificial intelligence and machine learning, including practical applications and future predictions.",
      category: "AI/ML",
      date: "March 15, 2024",
      duration: "90 minutes",
      speaker: "Dr. Sarah Chen",
      image: "/images/webinars/ai-ml-trends.jpg"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices",
      description: "Learn essential cybersecurity strategies to protect your business from evolving digital threats and vulnerabilities.",
      category: "Security",
      date: "March 22, 2024",
      duration: "75 minutes",
      speaker: "Michael Rodriguez",
      image: "/images/webinars/cybersecurity.jpg"
    },
    {
      id: 3,
      title: "Cloud Migration Strategies",
      description: "Discover proven approaches for migrating your infrastructure to the cloud while minimizing downtime and risks.",
      category: "Cloud",
      date: "March 29, 2024",
      duration: "60 minutes",
      speaker: "Jennifer Kim",
      image: "/images/webinars/cloud-migration.jpg"
    },
    {
      id: 4,
      title: "DevOps Implementation Guide",
      description: "Master the fundamentals of DevOps practices to streamline your development and operations workflows.",
      category: "DevOps",
      date: "April 5, 2024",
      duration: "80 minutes",
      speaker: "David Thompson",
      image: "/images/webinars/devops.jpg"
    },
    {
      id: 5,
      title: "Data Analytics & Visualization",
      description: "Transform raw data into actionable insights with modern analytics tools and visualization techniques.",
      category: "Analytics",
      date: "April 12, 2024",
      duration: "70 minutes",
      speaker: "Lisa Wang",
      image: "/images/webinars/data-analytics.jpg"
    },
    {
      id: 6,
      title: "Blockchain & Web3 Fundamentals",
      description: "Understand the basics of blockchain technology and the emerging Web3 ecosystem.",
      category: "Blockchain",
      date: "April 19, 2024",
      duration: "85 minutes",
      speaker: "Alex Johnson",
      image: "/images/webinars/blockchain.jpg"
    }
  ];

  const upcomingWebinars = webinars.filter(webinar => 
    new Date(webinar.date) > new Date()
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Webinars
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join industry experts for in-depth discussions on technology trends, 
              best practices, and innovative solutions
            </p>
          </motion.div>
          
          {/* Webinars Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {webinars.map((webinar, index) => (
              <motion.div 
                key={webinar.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {webinar.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {webinar.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {webinar.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                    {webinar.date}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                    {webinar.duration}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <User className="w-4 h-4 mr-2 text-purple-400" />
                    {webinar.speaker}
                  </div>
                </div>
                
                <Link 
                  to={`/webinar/${webinar.id}`} 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
                >
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Call to Action */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-600/20 rounded-full">
                  <Video className="h-8 w-8 text-blue-400" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">
                Stay Informed
              </h3>
              
              <p className="text-gray-300 mb-6">
                Subscribe to our webinar series and never miss an opportunity to learn 
                from industry experts and technology leaders.
              </p>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Subscribe to Webinars
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Upcoming Webinars Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Upcoming Webinars
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Mark your calendar for these upcoming expert-led sessions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingWebinars.slice(0, 3).map((webinar, index) => (
              <motion.div 
                key={webinar.id}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Upcoming
                  </span>
                  <span className="text-green-400 text-sm font-medium">
                    {webinar.date}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-2">
                  {webinar.title}
                </h4>
                
                <p className="text-gray-400 text-sm mb-4">
                  {webinar.description.substring(0, 100)}...
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">
                    {webinar.speaker}
                  </span>
                  <Link 
                    to={`/webinar/${webinar.id}`}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Webinars;

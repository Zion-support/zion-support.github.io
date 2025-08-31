import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Video, 
  Calendar, 
  Users, 
  Clock, 
  Play, 
  Download, 
  Share2, 
  BookOpen, 
  TrendingUp, 
  Award,
  CheckCircle,
  ExternalLink,
  CalendarDays,
  UserCheck,
  BarChart3
} from 'lucide-react';

export default function Webinars() {
  const upcomingWebinars = [
    {
      title: "AI-Powered Business Transformation",
      date: "March 15, 2025",
      time: "2:00 PM EST",
      duration: "60 minutes",
      speaker: "Dr. Sarah Johnson",
      description: "Learn how AI is revolutionizing business operations and driving unprecedented growth.",
      topics: ["AI Strategy", "Implementation", "ROI Measurement"],
      registration: "https://ziontechgroup.com/webinars/ai-business-transformation"
    },
    {
      title: "Cybersecurity in the AI Era",
      date: "March 22, 2025",
      time: "1:00 PM EST",
      duration: "90 minutes",
      speaker: "Michael Chen",
      description: "Explore the latest cybersecurity challenges and AI-powered defense strategies.",
      topics: ["Threat Detection", "AI Security", "Best Practices"],
      registration: "https://ziontechgroup.com/webinars/cybersecurity-ai-era"
    },
    {
      title: "Cloud-Native AI Solutions",
      date: "March 29, 2025",
      time: "3:00 PM EST",
      duration: "75 minutes",
      speaker: "Dr. Emily Rodriguez",
      description: "Discover how to build and deploy AI solutions in cloud environments.",
      topics: ["Cloud AI", "Scalability", "Cost Optimization"],
      registration: "https://ziontechgroup.com/webinars/cloud-native-ai"
    }
  ];

  const pastWebinars = [
    {
      title: "Introduction to Machine Learning",
      date: "February 28, 2025",
      speaker: "Dr. James Wilson",
      description: "A comprehensive overview of machine learning fundamentals and applications.",
      recording: "https://ziontechgroup.com/webinars/ml-intro-recording",
      slides: "https://ziontechgroup.com/webinars/ml-intro-slides",
      attendees: 450
    },
    {
      title: "Data Analytics for Business Leaders",
      date: "February 21, 2025",
      speaker: "Lisa Thompson",
      description: "How to leverage data analytics to make informed business decisions.",
      recording: "https://ziontechgroup.com/webinars/data-analytics-recording",
      slides: "https://ziontechgroup.com/webinars/data-analytics-slides",
      attendees: 380
    },
    {
      title: "Digital Transformation Strategies",
      date: "February 14, 2025",
      speaker: "Robert Davis",
      description: "Strategic approaches to digital transformation in modern enterprises.",
      recording: "https://ziontechgroup.com/webinars/digital-transformation-recording",
      slides: "https://ziontechgroup.com/webinars/digital-transformation-slides",
      attendees: 520
    }
  ];

  const categories = [
    "AI & Machine Learning",
    "Cybersecurity",
    "Cloud Computing",
    "Data Analytics",
    "Digital Transformation",
    "Industry Solutions",
    "Emerging Technologies",
    "Best Practices"
  ];

  const benefits = [
    "Learn from industry experts",
    "Get practical insights and strategies",
    "Network with professionals",
    "Access exclusive resources",
    "Earn certificates of completion",
    "Stay updated with latest trends"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Webinars - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group's expert-led webinars on AI, cybersecurity, cloud computing, and digital transformation. Learn from industry leaders and gain practical insights." />
        <link rel="canonical" href="https://ziontechgroup.com/webinars" />
        <meta name="keywords" content="AI webinars, cybersecurity webinars, cloud computing webinars, digital transformation webinars, tech education, professional development" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert-Led
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"> Webinars</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our industry experts for insightful webinars on AI, cybersecurity, cloud computing, and digital transformation. Learn, network, and stay ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                View Upcoming Webinars
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:border-gray-500 transition-all duration-300">
                Browse Past Webinars
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Webinars Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Upcoming Webinars
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't miss these exclusive learning opportunities with industry experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-blue-400 font-medium">Live</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{webinar.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    {webinar.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <Clock className="w-4 h-4 mr-2" />
                    {webinar.time} ({webinar.duration})
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <Users className="w-4 h-4 mr-2" />
                    {webinar.speaker}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{webinar.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-white mb-2">Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {webinar.topics.map((topic, topicIndex) => (
                      <span key={topicIndex} className="px-2 py-1 bg-slate-700 text-xs text-gray-300 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a
                  href={webinar.registration}
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Register Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Webinar Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore webinars across various technology domains and industries
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 text-center hover:border-blue-500 transition-all duration-300 cursor-pointer"
              >
                <p className="text-white font-medium">{category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Attend Our Webinars?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get maximum value from our expert-led learning sessions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-white font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Past Webinars
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Access recordings and resources from our previous webinars
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pastWebinars.map((webinar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-gray-400">{webinar.attendees} attendees</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{webinar.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    {webinar.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <Users className="w-4 h-4 mr-2" />
                    {webinar.speaker}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{webinar.description}</p>
                
                <div className="flex gap-2">
                  <a
                    href={webinar.recording}
                    className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch
                  </a>
                  <a
                    href={webinar.slides}
                    className="flex-1 bg-slate-700 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-slate-600 transition-all duration-300 flex items-center justify-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Slides
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Learn from the Experts?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our community of learners and stay ahead in the rapidly evolving tech landscape
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Subscribe to Updates
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Suggest Topics
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Have questions about our webinars? Contact our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-400">
            <span>Email: webinars@ziontechgroup.com</span>
            <span>Phone: +1 (555) 123-4567</span>
            <span>Support: 24/7 Available</span>
          </div>
        </div>
      </section>
    </div>
  );
}

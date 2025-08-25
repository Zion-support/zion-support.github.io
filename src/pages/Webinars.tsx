import React from 'react';
import { Video, Calendar, Clock, Users, ExternalLink, ArrowRight, Star, Play, Download, Share2, Bookmark, Eye } from 'lucide-react';

export default function Webinars() {
  const upcomingWebinars = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence: From Data to Decisions",
      date: "March 20, 2025",
      time: "2:00 PM - 3:30 PM EST",
      duration: "90 minutes",
      speaker: "Dr. Sarah Chen",
      speakerTitle: "Chief AI Officer, Zion Tech Group",
      description: "Learn how to leverage AI-powered business intelligence tools to transform raw data into actionable insights that drive strategic decision-making.",
      topics: ["AI Analytics", "Business Intelligence", "Data Visualization", "Predictive Modeling"],
      capacity: "500 attendees",
      price: "Free",
      status: "Registration Open",
      featured: true,
      hasRecording: false
    },
    {
      id: 2,
      title: "Quantum Computing Fundamentals for Enterprise",
      date: "March 25, 2025",
      time: "11:00 AM - 12:30 PM EST",
      duration: "90 minutes",
      speaker: "Prof. Michael Rodriguez",
      speakerTitle: "Quantum Research Director",
      description: "Explore the fundamentals of quantum computing and understand how this revolutionary technology will impact enterprise applications and business processes.",
      topics: ["Quantum Computing", "Quantum Algorithms", "Enterprise Applications", "Future of Computing"],
      capacity: "300 attendees",
      price: "Free",
      status: "Registration Open",
      featured: false,
      hasRecording: false
    },
    {
      id: 3,
      title: "Cybersecurity Compliance: SOC2 Implementation Guide",
      date: "April 5, 2025",
      time: "1:00 PM - 2:30 PM EST",
      duration: "90 minutes",
      speaker: "Alex Thompson",
      speakerTitle: "Security Compliance Director",
      description: "A comprehensive guide to implementing SOC2 compliance in your organization, including best practices, common pitfalls, and automation strategies.",
      topics: ["SOC2 Compliance", "Cybersecurity", "Risk Management", "Automation"],
      capacity: "200 attendees",
      price: "$99",
      status: "Early Bird Pricing",
      featured: false,
      hasRecording: false
    },
    {
      id: 4,
      title: "Digital Transformation Success Stories",
      date: "April 12, 2025",
      time: "3:00 PM - 4:30 PM EST",
      duration: "90 minutes",
      speaker: "Kleber Santos",
      speakerTitle: "CEO, Zion Tech Group",
      description: "Real-world case studies and success stories from organizations that have successfully implemented digital transformation initiatives.",
      topics: ["Digital Transformation", "Change Management", "Technology Strategy", "ROI Measurement"],
      capacity: "400 attendees",
      price: "Free",
      status: "Registration Open",
      featured: true,
      hasRecording: false
    }
  ];

  const onDemandWebinars = [
    {
      id: 5,
      title: "AI Autonomous Systems: The Future of Business Operations",
      speaker: "Dr. Sarah Chen",
      speakerTitle: "Chief AI Officer, Zion Tech Group",
      description: "Explore how AI autonomous systems are revolutionizing business operations and creating new opportunities for efficiency and innovation.",
      duration: "75 minutes",
      views: "2,847",
      date: "February 15, 2025",
      topics: ["AI Autonomous Systems", "Business Automation", "Machine Learning", "Future of Work"],
      hasRecording: true,
      recordingUrl: "#",
      slidesUrl: "#",
      transcriptUrl: "#"
    },
    {
      id: 6,
      title: "Cloud Migration Strategies: A Step-by-Step Guide",
      speaker: "David Kim",
      speakerTitle: "Cloud Architecture Lead",
      description: "Learn proven strategies for migrating your infrastructure to the cloud, including planning, execution, and optimization phases.",
      duration: "60 minutes",
      views: "1,923",
      date: "January 28, 2025",
      topics: ["Cloud Migration", "DevOps", "Infrastructure", "Cost Optimization"],
      hasRecording: true,
      recordingUrl: "#",
      slidesUrl: "#",
      transcriptUrl: "#"
    },
    {
      id: 7,
      title: "5G Enterprise Solutions: Implementation and Benefits",
      speaker: "Maria Garcia",
      speakerTitle: "Network Infrastructure Specialist",
      description: "Discover how 5G technology is transforming enterprise connectivity and enabling new business applications and services.",
      duration: "45 minutes",
      views: "1,456",
      date: "January 15, 2025",
      topics: ["5G Technology", "Enterprise Networks", "IoT", "Edge Computing"],
      hasRecording: true,
      recordingUrl: "#",
      slidesUrl: "#",
      transcriptUrl: "#"
    },
    {
      id: 8,
      title: "Blockchain Solutions for Enterprise: Beyond Cryptocurrency",
      speaker: "Dr. James Wilson",
      speakerTitle: "Blockchain Technology Lead",
      description: "Explore practical blockchain applications for enterprise use cases, from supply chain management to digital identity verification.",
      duration: "80 minutes",
      views: "1,234",
      date: "December 20, 2024",
      topics: ["Blockchain", "Enterprise Applications", "Supply Chain", "Digital Identity"],
      hasRecording: true,
      recordingUrl: "#",
      slidesUrl: "#",
      transcriptUrl: "#"
    }
  ];

  const webinarCategories = [
    {
      name: "AI & Machine Learning",
      count: 12,
      color: "text-cyan-400"
    },
    {
      name: "Cybersecurity",
      count: 8,
      color: "text-red-400"
    },
    {
      name: "Cloud & DevOps",
      count: 10,
      color: "text-blue-400"
    },
    {
      name: "Digital Transformation",
      count: 6,
      color: "text-purple-400"
    },
    {
      name: "Emerging Technologies",
      count: 7,
      color: "text-green-400"
    },
    {
      name: "Enterprise Solutions",
      count: 9,
      color: "text-yellow-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Video className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Webinars & Virtual Events
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our expert-led webinars to gain insights into the latest technology trends, best practices, 
            and innovative solutions. Learn from industry leaders and get your questions answered in real-time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
              View All Webinars
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </div>

      {/* Webinar Categories */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Webinar Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {webinarCategories.map((category) => (
            <div key={category.name} className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-gray-800 hover:border-cyan-500/50 transition-all duration-200 cursor-pointer group text-center">
              <h3 className="text-white font-semibold mb-2 text-sm">{category.name}</h3>
              <p className={`text-sm font-medium ${category.color}`}>{category.count} webinars</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Upcoming Webinars */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold mb-12 text-white">Featured Upcoming Webinars</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingWebinars.filter(webinar => webinar.featured).map((webinar) => (
            <div key={webinar.id} className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-200">
              <div className="flex items-start justify-between mb-4">
                <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Live Webinar
                </span>
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{webinar.title}</h3>
              <p className="text-gray-300 mb-6">{webinar.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>{webinar.date}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>{webinar.time} ({webinar.duration})</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>{webinar.speaker} - {webinar.speakerTitle}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-cyan-400 font-semibold mb-2">Topics Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {webinar.topics.map((topic, index) => (
                    <span key={index} className="bg-gray-800/50 text-gray-300 px-2 py-1 rounded text-xs">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-semibold">{webinar.price}</span>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Upcoming Webinars */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold mb-12 text-white">All Upcoming Webinars</h2>
        <div className="space-y-6">
          {upcomingWebinars.map((webinar) => (
            <div key={webinar.id} className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-200">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                      Live Webinar
                    </span>
                    {webinar.featured && <Star className="w-4 h-4 text-yellow-400" />}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{webinar.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{webinar.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>{webinar.time}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>{webinar.speaker}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <span className="text-cyan-400">{webinar.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="mb-4">
                    <p className="text-cyan-400 font-bold text-lg">{webinar.price}</p>
                    <p className="text-gray-400 text-sm">{webinar.status}</p>
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* On-Demand Webinars */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold mb-12 text-white">On-Demand Webinars</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {onDemandWebinars.map((webinar) => (
            <div key={webinar.id} className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-200">
              <div className="relative mb-4">
                <div className="w-full h-32 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <Play className="w-12 h-12 text-cyan-400" />
                </div>
                <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {webinar.duration}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{webinar.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{webinar.speaker} - {webinar.speakerTitle}</p>
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">{webinar.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center text-gray-400 text-sm mb-2">
                  <Eye className="w-4 h-4 mr-1" />
                  <span>{webinar.views} views</span>
                  <span className="mx-2">•</span>
                  <span>{webinar.date}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {webinar.topics.slice(0, 3).map((topic, index) => (
                    <span key={index} className="bg-gray-800/50 text-gray-300 px-2 py-1 rounded text-xs">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                  <Play className="w-4 h-4 mr-1 inline" />
                  Watch
                </button>
                <button className="p-2 border border-gray-600 text-gray-400 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200">
                  <Download className="w-4 h-4" />
                </button>
                <button className="p-2 border border-gray-600 text-gray-400 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Never Miss a Webinar</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our webinar notifications and get early access to registration, exclusive content, and post-webinar resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Host a Webinar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 text-center">
          <h2 className="text-2xl font-bold mb-6 text-white">Want to Host a Webinar?</h2>
          <p className="text-gray-300 mb-8">
            Share your expertise with our community! We're always looking for industry experts, thought leaders, 
            and practitioners to share their knowledge and insights through our webinar platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
              Propose a Webinar
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
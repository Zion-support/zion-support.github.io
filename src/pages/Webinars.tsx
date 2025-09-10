import React from 'react';
import SEO from '../components/SEO';

const Webinars: React.FC = () => {
  const upcomingWebinars = [
    {
      id: 1,
      title: "AI Revolution in Healthcare: Future Trends and Opportunities",
      date: "2025-01-15",
      time: "2:00 PM EST",
      duration: "60 minutes",
      speaker: "Dr. Sarah Johnson",
      description: "Explore the latest advancements in AI healthcare applications and their impact on patient care.",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Modern Enterprises",
      date: "2025-01-22",
      time: "3:00 PM EST",
      duration: "45 minutes",
      speaker: "Michael Chen",
      description: "Learn essential cybersecurity strategies to protect your organization from emerging threats.",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: A Complete Guide",
      date: "2025-01-29",
      time: "1:00 PM EST",
      duration: "90 minutes",
      speaker: "Emily Rodriguez",
      description: "Master the art of cloud migration with proven strategies and real-world case studies.",
      image: "/api/placeholder/400/250"
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: "Introduction to Quantum Computing",
      date: "2024-12-15",
      duration: "60 minutes",
      speaker: "Dr. Alex Thompson",
      description: "An introduction to quantum computing principles and applications.",
      recording: "Available"
    },
    {
      id: 5,
      title: "Blockchain Technology in Business",
      date: "2024-12-08",
      duration: "45 minutes",
      speaker: "Lisa Wang",
      description: "Understanding blockchain technology and its business applications.",
      recording: "Available"
    }
  ];

  return (
    <>
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, technology, and business innovation. Learn from industry leaders."
        keywords="webinars, online events, ai education, technology training, business innovation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Webinars & Events
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our expert-led webinars and learn about the latest trends in AI, technology, and business innovation.
              </p>
            </div>

            {/* Upcoming Webinars */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Upcoming Webinars</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingWebinars.map((webinar) => (
                  <div key={webinar.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg mb-6 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">Webinar {webinar.id}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{webinar.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-gray-300">
                        <span className="font-semibold text-purple-400">Date:</span> {webinar.date}
                      </p>
                      <p className="text-sm text-gray-300">
                        <span className="font-semibold text-purple-400">Time:</span> {webinar.time}
                      </p>
                      <p className="text-sm text-gray-300">
                        <span className="font-semibold text-purple-400">Duration:</span> {webinar.duration}
                      </p>
                      <p className="text-sm text-gray-300">
                        <span className="font-semibold text-purple-400">Speaker:</span> {webinar.speaker}
                      </p>
                    </div>

                    <p className="text-gray-300 text-sm mb-6">{webinar.description}</p>

                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                      Register Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Webinars */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Past Webinars</h2>
              <div className="space-y-6">
                {pastWebinars.map((webinar) => (
                  <div key={webinar.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{webinar.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-3">
                          <span>
                            <span className="font-semibold text-purple-400">Date:</span> {webinar.date}
                          </span>
                          <span>
                            <span className="font-semibold text-purple-400">Duration:</span> {webinar.duration}
                          </span>
                          <span>
                            <span className="font-semibold text-purple-400">Speaker:</span> {webinar.speaker}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-4">{webinar.description}</p>
                      </div>
                      <div className="md:ml-6">
                        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                          Watch Recording
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Subscribe to our newsletter to get notified about upcoming webinars and events.
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Webinars;
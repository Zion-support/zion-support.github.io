import React from 'react';
import { Link } from 'react-router-dom';

const Webinars: React.FC = () => {
  const webinars = [
    {
      title: "AI-Powered Cybersecurity: Next-Gen Threat Detection",
      category: "Cybersecurity",
      date: "January 20, 2025",
      duration: "90 minutes",
      speaker: "Dr. Sarah Chen",
      description: "Learn about advanced AI algorithms for detecting and preventing sophisticated cyber threats in real-time."
    },
    {
      title: "Cloud-Native Architecture: Best Practices for 2025",
      category: "Cloud Computing",
      date: "January 25, 2025",
      duration: "75 minutes",
      speaker: "Marcus Rodriguez",
      description: "Discover the latest patterns and practices for building scalable, resilient cloud-native applications."
    },
    {
      title: "Digital Transformation: From Strategy to Execution",
      category: "Digital Strategy",
      date: "February 1, 2025",
      duration: "60 minutes",
      speaker: "Lisa Thompson",
      description: "Practical insights on implementing successful digital transformation initiatives across your organization."
    },
    {
      title: "Quantum Computing: Business Applications & Opportunities",
      category: "Emerging Tech",
      date: "February 8, 2025",
      duration: "120 minutes",
      speaker: "Dr. James Wilson",
      description: "Explore how quantum computing will revolutionize industries and create new business opportunities."
    },
    {
      title: "DevOps Excellence: Automation & Continuous Delivery",
      category: "DevOps",
      date: "February 15, 2025",
      duration: "90 minutes",
      speaker: "David Kim",
      description: "Master the art of DevOps automation and implement robust continuous delivery pipelines."
    },
    {
      title: "Data Privacy & Compliance in the AI Era",
      category: "Compliance",
      date: "February 22, 2025",
      duration: "75 minutes",
      speaker: "Alex Thompson",
      description: "Navigate the complex landscape of data privacy regulations while leveraging AI technologies."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tech
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Webinars
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join industry experts for in-depth discussions on technology trends, 
            best practices, and innovative solutions
          </p>
        </div>
      </section>

      {/* Webinars Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {webinars.map((webinar, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{webinar.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{webinar.title}</h3>
                <p className="text-gray-300 mb-4">{webinar.description}</p>
                
                <div className="space-y-2 mb-4">
                  <p className="text-gray-400 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {webinar.date}
                  </p>
                  <p className="text-gray-400 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {webinar.duration}
                  </p>
                  <p className="text-gray-400 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {webinar.speaker}
                  </p>
                </div>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  Register Now
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Stay Informed</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our webinar series and never miss an opportunity to learn 
                from industry experts and technology leaders.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Subscribe to Webinars
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Early Access</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be the first to know about upcoming webinars, exclusive content, and special events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Webinars;

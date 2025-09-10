import React from 'react';
import { Play, Calendar, Clock, Users } from 'lucide-react';
import SEO from '../components/SEO';

const Webinars = () => {
  const webinars = [
    {
      title: "AI Implementation Strategies",
      description: "Learn how to successfully implement AI solutions in your organization.",
      date: "2024-02-15",
      time: "2:00 PM EST",
      attendees: 150,
      duration: "60 minutes"
    },
    {
      title: "Cloud Migration Best Practices",
      description: "Expert insights on migrating to cloud infrastructure safely and efficiently.",
      date: "2024-02-20",
      time: "3:00 PM EST",
      attendees: 200,
      duration: "45 minutes"
    },
    {
      title: "Cybersecurity Trends 2024",
      description: "Stay ahead of the latest cybersecurity threats and protection strategies.",
      date: "2024-02-25",
      time: "1:00 PM EST",
      attendees: 180,
      duration: "50 minutes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, cloud computing, and technology trends."
        keywords={["webinars", "events", "learning", "expert insights", "technology"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Webinars</h1>
          <p className="text-xl text-gray-300">
            Expert-led sessions on technology trends and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webinars.map((webinar, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-red-500 rounded-full p-3 mr-4">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(webinar.date).toLocaleDateString()}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{webinar.title}</h3>
              <p className="text-gray-300 mb-4">{webinar.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-400">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{webinar.time} • {webinar.duration}</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{webinar.attendees} registered</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Webinars;
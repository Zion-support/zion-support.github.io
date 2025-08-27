import React from 'react';
import { Link } from 'react-router-dom';
const Events = () => {
    const upcomingEvents = [
        {
            id: 1,
            title: "AI in Enterprise: 2025 Trends & Strategies",
            type: "Webinar",
            date: "2025-01-15",
            time: "2:00 PM EST",
            duration: "60 minutes",
            description: "Join our AI experts as they discuss the latest trends in enterprise AI adoption, implementation strategies, and ROI measurement.",
            speakers: ["Dr. Sarah Chen", "Marcus Rodriguez"],
            category: "AI & Machine Learning",
            registrationUrl: "#",
            isFree: true,
            maxAttendees: 500
        },
        {
            id: 2,
            title: "Cybersecurity Summit 2025",
            type: "Conference",
            date: "2025-02-20",
            time: "9:00 AM EST",
            duration: "Full Day",
            description: "A comprehensive one-day conference covering the latest cybersecurity threats, defense strategies, and compliance requirements.",
            speakers: ["Alex Thompson", "Dr. Emily Watson", "David Kim"],
            category: "Cybersecurity",
            registrationUrl: "#",
            isFree: false,
            price: "$299",
            maxAttendees: 200
        },
        {
            id: 3,
            title: "Cloud Migration Best Practices",
            type: "Workshop",
            date: "2025-01-28",
            time: "1:00 PM EST",
            duration: "3 hours",
            description: "Hands-on workshop covering cloud migration strategies, cost optimization, and security best practices.",
            speakers: ["David Kim", "Lisa Thompson"],
            category: "Cloud & Infrastructure",
            registrationUrl: "#",
            isFree: false,
            price: "$149",
            maxAttendees: 50
        },
        {
            id: 4,
            title: "Digital Transformation Roadmap",
            type: "Webinar",
            date: "2025-02-05",
            time: "3:00 PM EST",
            duration: "90 minutes",
            description: "Learn how to create and execute a successful digital transformation strategy for your organization.",
            speakers: ["Lisa Thompson", "Dr. Sarah Chen"],
            category: "Digital Transformation",
            registrationUrl: "#",
            isFree: true,
            maxAttendees: 300
        }
    ];
    const pastEvents = [
        {
            id: 5,
            title: "AI Ethics & Responsible Development",
            type: "Panel Discussion",
            date: "2024-12-10",
            description: "Expert panel discussion on ethical AI development, bias mitigation, and responsible AI deployment.",
            speakers: ["Dr. Emily Watson", "Dr. James Wilson"],
            category: "AI Ethics",
            recordingUrl: "#"
        },
        {
            id: 6,
            title: "Quantum Computing Workshop",
            type: "Workshop",
            date: "2024-11-25",
            description: "Introduction to quantum computing principles and their applications in AI and cryptography.",
            speakers: ["Dr. James Wilson", "Marcus Rodriguez"],
            category: "Quantum Computing",
            recordingUrl: "#"
        }
    ];
    const eventCategories = [
        { name: "AI & Machine Learning", count: 8, color: "from-purple-500 to-pink-500" },
        { name: "Cybersecurity", count: 6, color: "from-red-500 to-orange-500" },
        { name: "Cloud & Infrastructure", count: 5, color: "from-blue-500 to-cyan-500" },
        { name: "Digital Transformation", count: 4, color: "from-green-500 to-emerald-500" },
        { name: "Quantum Computing", count: 3, color: "from-indigo-500 to-purple-500" }
    ];
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
    const getEventTypeColor = (type) => {
        switch (type) {
            case 'Webinar':
                return 'bg-blue-100 text-blue-800';
            case 'Conference':
                return 'bg-purple-100 text-purple-800';
            case 'Workshop':
                return 'bg-green-100 text-green-800';
            case 'Panel Discussion':
                return 'bg-orange-100 text-orange-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };
    return (<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Events & Webinars
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our experts for insightful discussions, hands-on workshops, and cutting-edge insights 
              into the latest technology trends and innovations.
            </p>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Event Categories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of events covering all aspects of modern technology and business transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {eventCategories.map((category, index) => (<div key={index} className="text-center p-6 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-2xl text-white font-bold">{category.count}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{category.name}</h3>
              </div>))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Register for our upcoming events and stay ahead of the technology curve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (<div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                    <span className="text-sm text-gray-500">
                      {event.isFree ? 'Free' : event.price}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm font-medium text-gray-500">Date & Time</div>
                      <div className="text-sm text-gray-900">{formatDate(event.date)}</div>
                      <div className="text-sm text-gray-900">{event.time} ({event.duration})</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">Category</div>
                      <div className="text-sm text-gray-900">{event.category}</div>
                      <div className="text-sm text-gray-500">Max: {event.maxAttendees} attendees</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-500 mb-2">Speakers</div>
                    <div className="flex flex-wrap gap-2">
                      {event.speakers.map((speaker, index) => (<span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {speaker}
                        </span>))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
    </div>
  );
}

export default Events;

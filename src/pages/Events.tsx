import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  ExternalLink, 
  Filter,
  Search,
  Tag,
  Video,
  Globe,
  Building,
  Rocket,
  Brain,
  Shield,
  Cpu
} from 'lucide-react';

export default function Events() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const eventCategories = [
    { id: 'all', name: 'All Events', icon: Calendar },
    { id: 'conferences', name: 'Conferences', icon: Building },
    { id: 'webinars', name: 'Webinars', icon: Video },
    { id: 'workshops', name: 'Workshops', icon: Users },
    { id: 'meetups', name: 'Meetups', icon: Globe },
    { id: 'hackathons', name: 'Hackathons', icon: Rocket }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'AI & Quantum Computing Summit 2025',
      description: 'Join industry leaders and researchers for a comprehensive exploration of AI and quantum computing convergence.',
      date: '2025-03-15',
      time: '09:00 AM - 06:00 PM',
      location: 'San Francisco Convention Center',
      type: 'conferences',
      attendees: 500,
      price: '$299',
      image: '/images/events/ai-quantum-summit.jpg',
      tags: ['AI', 'Quantum Computing', 'Research', 'Networking'],
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity in the AI Era',
      description: 'Learn about the latest cybersecurity threats and AI-powered defense strategies.',
      date: '2025-03-22',
      time: '02:00 PM - 04:00 PM',
      location: 'Virtual Event',
      type: 'webinars',
      attendees: 200,
      price: 'Free',
      image: '/images/events/cybersecurity-ai.jpg',
      tags: ['Cybersecurity', 'AI', 'Virtual', 'Free'],
      featured: false
    },
    {
      id: 3,
      title: 'Blockchain & DeFi Workshop',
      description: 'Hands-on workshop covering blockchain development and decentralized finance applications.',
      date: '2025-04-05',
      time: '10:00 AM - 05:00 PM',
      location: 'New York Tech Hub',
      type: 'workshops',
      attendees: 50,
      price: '$199',
      image: '/images/events/blockchain-defi.jpg',
      tags: ['Blockchain', 'DeFi', 'Workshop', 'Hands-on'],
      featured: false
    },
    {
      id: 4,
      title: 'Tech Startup Pitch Night',
      description: 'Watch innovative tech startups pitch their ideas and network with investors.',
      date: '2025-04-12',
      time: '06:00 PM - 09:00 PM',
      location: 'Austin Innovation Center',
      type: 'meetups',
      attendees: 150,
      price: '$25',
      image: '/images/events/startup-pitch.jpg',
      tags: ['Startups', 'Pitching', 'Networking', 'Investment'],
      featured: false
    },
    {
      id: 5,
      title: 'AI Hackathon 2025',
      description: '24-hour hackathon focused on building AI solutions for real-world problems.',
      date: '2025-04-19',
      time: '09:00 AM - 09:00 AM (Next Day)',
      location: 'Seattle Tech Campus',
      type: 'hackathons',
      attendees: 100,
      price: '$50',
      image: '/images/events/ai-hackathon.jpg',
      tags: ['Hackathon', 'AI', '24 Hours', 'Competition'],
      featured: true
    },
    {
      id: 6,
      title: 'Cloud & DevOps Conference',
      description: 'Explore the latest trends in cloud computing and DevOps practices.',
      date: '2025-05-03',
      time: '08:00 AM - 07:00 PM',
      location: 'Chicago Convention Center',
      type: 'conferences',
      attendees: 400,
      price: '$399',
      image: '/images/events/cloud-devops.jpg',
      tags: ['Cloud Computing', 'DevOps', 'Infrastructure', 'Networking'],
      featured: false
    }
  ];

  const pastEvents = [
    {
      id: 7,
      title: 'Digital Transformation Summit 2024',
      description: 'Successfully completed with over 600 attendees and 40+ speakers.',
      date: '2024-12-10',
      time: '09:00 AM - 06:00 PM',
      location: 'Los Angeles Convention Center',
      type: 'conferences',
      attendees: 600,
      price: '$299',
      image: '/images/events/digital-transformation.jpg',
      tags: ['Digital Transformation', 'Completed', '600+ Attendees'],
      featured: false,
      completed: true
    },
    {
      id: 8,
      title: 'AI Ethics & Governance Workshop',
      description: 'Interactive workshop on responsible AI development and governance frameworks.',
      date: '2024-11-28',
      time: '01:00 PM - 05:00 PM',
      location: 'Virtual Event',
      type: 'workshops',
      attendees: 150,
      price: '$149',
      image: '/images/events/ai-ethics.jpg',
      tags: ['AI Ethics', 'Governance', 'Completed', 'Virtual'],
      featured: false,
      completed: true
    }
  ];

  const filteredEvents = (activeTab === 'upcoming' ? upcomingEvents : pastEvents).filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || event.type === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'conferences': return Building;
      case 'webinars': return Video;
      case 'workshops': return Users;
      case 'meetups': return Globe;
      case 'hackathons': return Rocket;
      default: return Calendar;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'conferences': return 'bg-blue-500';
      case 'webinars': return 'bg-green-500';
      case 'workshops': return 'bg-purple-500';
      case 'meetups': return 'bg-orange-500';
      case 'hackathons': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Events & Conferences
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join us for cutting-edge technology events, workshops, and conferences. 
              Connect with industry leaders, learn from experts, and discover the future of tech.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {eventCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 border-blue-500 text-white'
                      : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-1 border border-white/10">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-3 rounded-md transition-colors duration-200 ${
                activeTab === 'upcoming'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Upcoming Events ({upcomingEvents.length})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-3 rounded-md transition-colors duration-200 ${
                activeTab === 'past'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Past Events ({pastEvents.length})
            </button>
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-transform duration-200 hover:scale-105 ${
                  event.featured ? 'ring-2 ring-yellow-500' : ''
                }`}
              >
                {/* Event Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600">
                  <div className="absolute inset-0 bg-black/20"></div>
                  {event.featured && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Featured Event
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <div className={`p-2 rounded-lg ${getEventColor(event.type)}`}>
                      <getEventIcon type={event.type} className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm font-medium">{event.type.charAt(0).toUpperCase() + event.type.slice(1)}</span>
                      <span className="text-sm">{event.price}</span>
                    </div>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-300 text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Clock className="w-4 h-4 mr-2 text-green-400" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-red-400" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Users className="w-4 h-4 mr-2 text-purple-400" />
                      {event.attendees} attendees
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {event.completed ? (
                      <button className="flex-1 px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-lg cursor-not-allowed">
                        Event Completed
                      </button>
                    ) : (
                      <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                        Register Now
                      </button>
                    )}
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg border border-white/20 transition-colors duration-200">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No events found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Host Your Event With Us
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Are you interested in hosting a technology event, workshop, or conference? 
              We provide comprehensive event management and support services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Contact Us
              </Link>
              <Link
                to="/webinars"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 transition-colors duration-200"
              >
                View Webinars
              </Link>
            </div>
          </div>
        </div>

        {/* Event Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
            <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">12+</div>
            <div className="text-gray-300">Events This Year</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
            <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">2,500+</div>
            <div className="text-gray-300">Total Attendees</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
            <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">8</div>
            <div className="text-gray-300">Cities Covered</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
            <Rocket className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-300">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
import { Calendar, Clock, MapPin, Users, ExternalLink, ArrowRight, Video, Globe } from 'lucide-react';

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'AI & Machine Learning Summit 2024',
      description: 'Join industry leaders and experts for a comprehensive exploration of the latest developments in AI and machine learning technologies.',
      date: '2024-03-15',
      time: '9:00 AM - 6:00 PM EST',
      location: 'San Francisco Convention Center',
      type: 'Conference',
      capacity: 500,
      price: '$299',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=400',
      featured: true,
      registrationUrl: 'https://eventbrite.com/ai-ml-summit-2024'
    },
    {
      id: 2,
      title: 'Cybersecurity Workshop Series',
      description: 'Hands-on workshops covering the latest cybersecurity threats, prevention strategies, and best practices for enterprise security.',
      date: '2024-03-22',
      time: '10:00 AM - 4:00 PM EST',
      location: 'Virtual Event',
      type: 'Workshop',
      capacity: 100,
      price: 'Free',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&h=400',
      featured: false,
      registrationUrl: 'https://ziontechgroup.com/events/cybersecurity-workshop'
    },
    {
      id: 3,
      title: 'Digital Transformation Roundtable',
      description: 'Interactive discussion with C-suite executives on successful digital transformation strategies and implementation challenges.',
      date: '2024-04-05',
      time: '2:00 PM - 5:00 PM EST',
      location: 'New York City',
      type: 'Roundtable',
      capacity: 50,
      price: '$199',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=400',
      featured: false,
      registrationUrl: 'https://ziontechgroup.com/events/digital-transformation'
    },
    {
      id: 4,
      title: 'Quantum Computing Innovation Lab',
      description: 'Explore the future of quantum computing with hands-on demonstrations and expert-led discussions on practical applications.',
      date: '2024-04-12',
      time: '9:00 AM - 5:00 PM EST',
      location: 'Boston Innovation Center',
      type: 'Lab',
      capacity: 75,
      price: '$399',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&h=400',
      featured: false,
      registrationUrl: 'https://ziontechgroup.com/events/quantum-computing'
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Tech Leadership Forum 2023',
      description: 'Annual gathering of technology leaders discussing industry trends, challenges, and opportunities.',
      date: '2023-12-15',
      time: '9:00 AM - 6:00 PM EST',
      location: 'Austin, TX',
      type: 'Forum',
      attendees: 300,
      highlights: ['Keynote speeches from industry leaders', 'Panel discussions on emerging tech', 'Networking opportunities']
    },
    {
      id: 6,
      title: 'AI Ethics Symposium',
      description: 'Critical discussion on responsible AI development and ethical considerations in technology.',
      date: '2023-11-20',
      time: '1:00 PM - 5:00 PM EST',
      location: 'Virtual Event',
      type: 'Symposium',
      attendees: 150,
      highlights: ['Expert panel discussions', 'Case study presentations', 'Ethics framework development']
    }

  const eventTypes = [
    'All Events',
    'Conference',
    'Workshop',
    'Roundtable',
    'Lab',
    'Forum',
    'Symposium'
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getEventTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Conference': 'bg-zion-cyan',
      'Workshop': 'bg-zion-purple',
      'Roundtable': 'bg-green-500',
      'Lab': 'bg-orange-500',
      'Forum': 'bg-blue-500',
      'Symposium': 'bg-pink-500'
    };
    return colors[type] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Events & Conferences
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
            Join us for industry-leading events, workshops, and networking opportunities
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#upcoming-events"
              className="bg-zion-cyan text-white px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors"
            >
              View Upcoming Events
            </a>
            <a
              href="mailto:events@ziontechgroup.com"
              className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Events Team
            </a>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">
              Featured Event
            </h2>
            <p className="text-xl text-zion-slate-light">
              Don't miss our premier technology conference
            </p>
          </div>

          {upcomingEvents.filter(event => event.featured).map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${getEventTypeColor(event.type)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {event.type}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-zion-slate-dark mb-4">
                    {event.title}
                  </h3>
                  
                  <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                    {event.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-zion-slate-light">
                      <MapPin className="w-4 h-4 mr-3" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-zion-slate-light">
                      <Users className="w-4 h-4 mr-3" />
                      <span>Capacity: {event.capacity} attendees</span>
                    </div>
                    <div className="flex items-center text-zion-slate-light">
                      <span className="font-semibold text-zion-cyan">{event.price}</span>
                    </div>
                  </div>
                  
                  <a
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-zion-cyan text-white px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors"
                  >
                    Register Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Event Type Filter */}
      <section className="py-20 bg-zion-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">
              Browse by Event Type
            </h2>
            <p className="text-xl text-zion-slate-light">
              Find the events that match your interests and schedule
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {eventTypes.map((type) => (
              <button
                key={type}
                className="px-6 py-3 bg-white text-zion-slate-dark rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-colors duration-300 shadow-sm"
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming-events" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-zion-slate-light">
              Mark your calendar for these exciting opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.filter(event => !event.featured).map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${getEventTypeColor(event.type)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {event.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {event.time}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-zion-slate-dark mb-3 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-zion-slate-light">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-zion-slate-light">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{event.capacity} attendees</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-zion-cyan">{event.price}</span>
                    
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan/80 font-medium text-sm transition-colors"
                    >
                      Register
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-zion-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">
              Past Events
            </h2>
            <p className="text-xl text-zion-slate-light">
              Relive the highlights from our previous events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <span className={`${getEventTypeColor(event.type)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {event.type}
                  </span>
                  <span className="text-zion-slate-light text-sm">
                    {formatDate(event.date)}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-zion-slate-dark mb-3">
                  {event.title}
                </h3>
                
                <p className="text-zion-slate-light mb-4">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-zion-slate-light">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-zion-slate-light">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-zion-slate-light">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-zion-slate-dark mb-2">Event Highlights:</h4>
                  <ul className="text-sm text-zion-slate-light space-y-1">
                    {event.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-zion-cyan mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Events Info */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-12 text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Video className="w-8 h-8" />
            </div>
            
            <h2 className="text-3xl font-bold mb-6">
              Virtual Events Available
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Can't attend in person? Many of our events are available virtually, 
              allowing you to participate from anywhere in the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#upcoming-events"
                className="bg-white text-zion-purple px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Virtual Events
              </a>
              <a
                href="mailto:events@ziontechgroup.com"
                className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Request Virtual Access
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Host Your Event With Us
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Looking to host a technology event? Partner with Zion Tech Group for 
            world-class venues, expert speakers, and comprehensive event management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:events@ziontechgroup.com?subject=Event Hosting Inquiry"
              className="bg-white text-zion-purple px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <Globe className="w-5 h-5 mr-2 inline" />
              Host Your Event
            </a>
            <a
              href="tel:+1-555-123-4567"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
            >
              <Clock className="w-5 h-5 mr-2 inline" />
              Call Events Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

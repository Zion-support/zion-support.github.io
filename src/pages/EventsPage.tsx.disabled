import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ;
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  Search,
  Filter,
  Play,
  ExternalLink,
  Star,
  Award,
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud,
  Code,
  Database,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Share2,
  Eye;
} from 'lucide-react';
export function EventsPage() {;
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const eventTypes = [;
    { id: 'all', name: 'All Events', icon: Calendar },
    { id: 'webinar', name: 'Webinars', icon: Play },
    { id: 'conference', name: 'Conferences', icon: Users },
    { id: 'workshop', name: 'Workshops', icon: Code },
    { id: 'meetup', name: 'Meetups', icon: Globe },
    { id: 'training', name: 'Training', icon: Award }
  ];
  const events = [;
    {;
      id: 1,
      title: 'AI-Powered Business Intelligence: Transforming Data into Actionable Insights',
      description: 'Join our CTO Sarah Chen as she demonstrates how AI is revolutionizing business intelligence and helping organizations make data-driven decisions.',
      type: 'webinar',
      date: '2025-02-15',
      time: '2:00 PM EST',
      duration: '60 minutes',
      location: 'Online',
      attendees: 250,
      maxAttendees: 500,
      price: 'Free',
      image: '🤖',
      speaker: 'Dr. Sarah Chen',
      speakerTitle: 'Chief Technology Officer',
      speakerBio: 'AI research pioneer with PhD in Computer Science from Stanford. Led AI initiatives at major tech companies.',
      tags: ['AI', 'Business Intelligence', 'Data Analytics', 'Machine Learning'],
      isFeatured: true,
      isUpcoming: true,
      registrationUrl: '/register/ai-bi-webinar';
},
    {;
      id: 2,
      title: 'Enterprise Security in the Age of AI: Best Practices and Emerging Threats',
      description: 'Learn about the latest cybersecurity challenges and how AI is being used both to protect and threaten enterprise systems.',
      type: 'conference',
      date: '2025-02-20',
      time: '9:00 AM EST',
      duration: 'Full Day',
      location: 'New York, NY',
      attendees: 150,
      maxAttendees: 200,
      price: '$299',
      image: '🛡️',
      speaker: 'Emily Watson',
      speakerTitle: 'Chief Security Officer',
      speakerBio: 'Cybersecurity expert with 12+ years protecting enterprise systems. Former security consultant for Fortune 500 companies.',
      tags: ['Cybersecurity', 'AI Security', 'Enterprise', 'Compliance'],
      isFeatured: true,
      isUpcoming: true,
      registrationUrl: '/register/security-conference';
},
    {;
      id: 3,
      title: 'Cloud FinOps Workshop: Optimizing Your Cloud Infrastructure Costs',
      description: 'Hands-on workshop where you\'ll learn practical techniques to reduce cloud costs while maintaining performance and reliability.',
      type: 'workshop',
      date: '2025-02-25',
      time: '10:00 AM EST',
      duration: '4 hours',
      location: 'Online',
      attendees: 75,
      maxAttendees: 100,
      price: '$199',
      image: '☁️',
      speaker: 'Marcus Rodriguez',
      speakerTitle: 'Head of Engineering',
      speakerBio: 'Full-stack engineering expert with deep experience in cloud architecture and scalable systems.',
      tags: ['Cloud', 'FinOps', 'Cost Optimization', 'AWS'],
      isFeatured: false,
      isUpcoming: true,
      registrationUrl: '/register/cloud-finops-workshop';
},
    {;
      id: 4,
      title: 'DevOps Automation: Building Efficient CI/CD Pipelines',
      description: 'Learn how to automate your development workflows and build robust CI/CD pipelines that accelerate your software delivery.',
      type: 'training',
      date: '2025-03-05',
      time: '1:00 PM EST',
      duration: '3 hours',
      location: 'San Francisco, CA',
      attendees: 45,
      maxAttendees: 50,
      price: '$149',
      image: '⚙️',
      speaker: 'Alex Kim',
      speakerTitle: 'Head of Product',
      speakerBio: 'Product strategy expert with a track record of launching successful B2B SaaS products.',
      tags: ['DevOps', 'CI/CD', 'Automation', 'Development'],
      isFeatured: false,
      isUpcoming: true,
      registrationUrl: '/register/devops-training';
},
    {;
      id: 5,
      title: 'The Future of AI in Healthcare: Opportunities and Challenges',
      description: 'Explore how artificial intelligence is transforming healthcare delivery and what the future holds for AI-powered medical solutions.',
      type: 'meetup',
      date: '2025-03-10',
      time: '6:00 PM EST',
      duration: '2 hours',
      location: 'Boston, MA',
      attendees: 80,
      maxAttendees: 100,
      price: 'Free',
      image: '🏥',
      speaker: 'Dr. Lisa Thompson',
      speakerTitle: 'Head of AI Research',
      speakerBio: 'Leading AI researcher with expertise in natural language processing and computer vision.',
      tags: ['AI', 'Healthcare', 'Research', 'Innovation'],
      isFeatured: false,
      isUpcoming: true,
      registrationUrl: '/register/ai-healthcare-meetup';
},
    {;
      id: 6,
      title: 'Data Analytics Masterclass: From Raw Data to Business Insights',
      description: 'Comprehensive training on data analytics techniques, tools, and best practices for extracting meaningful insights from your data.',
      type: 'training',
      date: '2025-03-15',
      time: '9:00 AM EST',
      duration: '6 hours',
      location: 'Online',
      attendees: 120,
      maxAttendees: 150,
      price: '$249',
      image: '📊',
      speaker: 'Dr. Sarah Chen',
      speakerTitle: 'Chief Technology Officer',
      speakerBio: 'AI research pioneer with PhD in Computer Science from Stanford.',
      tags: ['Data Analytics', 'Business Intelligence', 'Machine Learning', 'Statistics'],
      isFeatured: true,
      isUpcoming: true,
      registrationUrl: '/register/data-analytics-masterclass';
}
  ];
  const filteredEvents = events.filter(event => {;
    const matchesType = selectedType === 'all' || event.type === selectedType;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesType && matchesSearch;
});
  const upcomingEvents = filteredEvents.filter(event => event.isUpcoming);
  const featuredEvents = upcomingEvents.filter(event => event.isFeatured);
  return (;
    <div className="min-h-screen bg-zion-slate-dark">;
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-darker py-16">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center max-w-4xl mx-auto">;
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Events & Webinars;
            </h1>;
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">;
              Join our expert-led events, webinars, and workshops to stay ahead of the latest ;
              technology trends and learn from industry leaders.;
            </p>;
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">;
              <div className="relative">;
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />;
                <input;
                  type="text";
                  placeholder="Search events, topics, or speakers...";
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-darker border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent";
                />;
              </div>;
            </div>;

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">50+</div>;
                <div className="text-sm text-zion-slate-light">Events This Year</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">5K+</div>;
                <div className="text-sm text-zion-slate-light">Attendees</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">4.9★</div>;
                <div className="text-sm text-zion-slate-light">Average Rating</div>;
              </div>;
              <div className="text-center">;
                <div className="text-3xl font-bold text-zion-cyan">20+</div>;
                <div className="text-sm text-zion-slate-light">Expert Speakers</div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Event Types Filter */}
      <section className="py-8 bg-zion-slate-darker border-b border-zion-purple/20">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex flex-wrap gap-4 justify-center">;
            {eventTypes.map((type) => (;
              <button;
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${;
                  selectedType === type.id;
                    ? 'bg-zion-cyan text-white';
                    : 'bg-zion-slate-dark text-zion-slate-light hover:bg-zion-purple/20 hover:text-white';
}`}
              >;
                <type.icon className="w-4 h-4" />;
                <span>{type.name}</span>;
              </button>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Featured Events */}
      {selectedType === 'all' && featuredEvents.length > 0 && (;
        <section className="py-16 bg-zion-slate-dark">;
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
            <div className="flex items-center justify-between mb-8">;
              <h2 className="text-2xl font-bold text-white">Featured Events</h2>;
              <span className="text-zion-slate-light">Don't miss these highlights</span>;
            </div>;

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
              {featuredEvents.map((event) => (;
                <div key={event.id} className="bg-zion-slate-darker border border-zion-purple/20 rounded-lg overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 group">;
                  <div className="p-6">;
                    <div className="flex items-start space-x-4 mb-4">;
                      <div className="text-4xl">{event.image}</div>;
                      <div className="flex-1">;
                        <div className="flex items-center space-x-2 mb-2">;
                          <span className="text-xs bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full">;
                            {eventTypes.find(t => t.id === event.type)?.name}
                          </span>;
                          <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">;
                            Featured;
                          </span>;
                        </div>;
                        <div className="flex items-center space-x-4 text-xs text-zion-slate-light">;
                          <div className="flex items-center space-x-1">;
                            <Calendar className="w-3 h-3" />;
                            <span>{new Date(event.date).toLocaleDateString()}</span>;
                          </div>;
                          <div className="flex items-center space-x-1">;
                            <Clock className="w-3 h-3" />;
                            <span>{event.time}</span>;
                          </div>;
                          <div className="flex items-center space-x-1">;
                            <MapPin className="w-3 h-3" />;
                            <span>{event.location}</span>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">;
                      {event.title}
                    </h3>;
                    <p className="text-zion-slate-light mb-4 leading-relaxed">;
                      {event.description}
                    </p>;

                    <div className="mb-4">;
                      <div className="flex items-center space-x-2 mb-2">;
                        <Users className="w-4 h-4 text-zion-slate-light" />;
                        <span className="text-sm text-zion-slate-light">;
                          {event.attendees}/{event.maxAttendees} registered;
                        </span>;
                      </div>;
                      <div className="w-full bg-zion-slate-dark rounded-full h-2">;
                        <div ;
                          className="bg-zion-cyan h-2 rounded-full" ;
                          style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                        ></div>;
                      </div>;
                    </div>;

                    <div className="flex items-center justify-between mb-4">;
                      <div className="text-lg font-bold text-zion-cyan">{event.price}</div>;
                      <div className="text-sm text-zion-slate-light">{event.duration}</div>;
                    </div>;

                    <div className="flex items-center justify-between">;
                      <div className="flex flex-wrap gap-1">;
                        {event.tags.slice(0, 3).map((tag, index) => (;
                          <span key={index} className="text-xs bg-zion-blue-dark text-zion-cyan px-2 py-1 rounded">;
                            {tag}
                          </span>;
                        ))}
                      </div>;
                      <Link;
                        to={event.registrationUrl}
                        className="bg-zion-cyan text-white px-4 py-2 rounded-lg hover:bg-zion-cyan-light transition-colors flex items-center space-x-2">;
                        <span>Register</span>;
                        <ArrowRight className="w-4 h-4" />;
                      </Link>;
                    </div>;
                  </div>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;
      )}

      {/* All Events */}
      <section className="py-16 bg-zion-slate-darker">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex items-center justify-between mb-8">;
            <h2 className="text-2xl font-bold text-white">;
              {selectedType === 'all' ? 'All Upcoming Events' : eventTypes.find(t => t.id === selectedType)?.name}
            </h2>;
            <div className="flex items-center space-x-4">;
              <span className="text-zion-slate-light">;
                {upcomingEvents.length} events found;
              </span>;
              <button className="flex items-center space-x-2 text-zion-slate-light hover:text-white transition-colors">;
                <Filter className="w-4 h-4" />;
                <span>Filter</span>;
              </button>;
            </div>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {upcomingEvents.map((event) => (;
              <div key={event.id} className="bg-zion-slate-dark border border-zion-purple/20 rounded-lg overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 group">;
                <div className="p-6">;
                  <div className="flex items-start space-x-3 mb-4">;
                    <div className="text-3xl">{event.image}</div>;
                    <div className="flex-1">;
                      <span className="text-xs bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full">;
                        {eventTypes.find(t => t.id === event.type)?.name}
                      </span>;
                    </div>;
                  </div>;

                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2">;
                    {event.title}
                  </h3>;
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed line-clamp-3">;
                    {event.description}
                  </p>;

                  <div className="space-y-2 mb-4 text-xs text-zion-slate-light">;
                    <div className="flex items-center space-x-2">;
                      <Calendar className="w-3 h-3" />;
                      <span>{new Date(event.date).toLocaleDateString()}</span>;
                    </div>;
                    <div className="flex items-center space-x-2">;
                      <Clock className="w-3 h-3" />;
                      <span>{event.time} • {event.duration}</span>;
                    </div>;
                    <div className="flex items-center space-x-2">;
                      <MapPin className="w-3 h-3" />;
                      <span>{event.location}</span>;
                    </div>;
                    <div className="flex items-center space-x-2">;
                      <Users className="w-3 h-3" />;
                      <span>{event.attendees}/{event.maxAttendees} registered</span>;
                    </div>;
                  </div>;

                  <div className="flex items-center justify-between mb-4">;
                    <div className="text-lg font-bold text-zion-cyan">{event.price}</div>;
                    <div className="text-sm text-zion-slate-light">;
                      by {event.speaker}
                    </div>;
                  </div>;

                  <div className="flex items-center justify-between">;
                    <div className="flex flex-wrap gap-1">;
                      {event.tags.slice(0, 2).map((tag, index) => (;
                        <span key={index} className="text-xs bg-zion-blue-dark text-zion-cyan px-2 py-1 rounded">;
                          {tag}
                        </span>;
                      ))}
                    </div>;
                    <Link;
                      to={event.registrationUrl}
                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center">;
                      Register;
                      <ArrowRight className="w-3 h-3 ml-1" />;
                    </Link>;
                  </div>;
                </div>;
              </div>;
            ))}
          </div>;

          {upcomingEvents.length === 0 && (;
            <div className="text-center py-12">;
              <div className="text-6xl mb-4">📅</div>;
              <h3 className="text-xl font-semibold text-white mb-2">No events found</h3>;
              <p className="text-zion-slate-light mb-4">;
                Try adjusting your search terms or browse different event types.;
              </p>;
              <button;
                onClick={() => {;
                  setSearchTerm('');
                  setSelectedType('all');
}}
                className="text-zion-cyan hover:text-zion-cyan-light transition-colors">;
                Clear filters;
              </button>;
            </div>;
          )}
        </div>;
      </section>;

      {/* Newsletter Signup */}
      <section className="py-16 bg-zion-slate-dark">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="max-w-4xl mx-auto text-center">;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
              Never Miss an Event;
            </h2>;
            <p className="text-xl text-zion-slate-light mb-8">;
              Subscribe to our events newsletter and be the first to know about upcoming webinars,
              workshops, and conferences.;
            </p>;
            <div className="max-w-md mx-auto">;
              <div className="flex space-x-2">;
                <input;
                  type="email";
                  placeholder="Enter your email";
                  className="flex-1 px-4 py-3 bg-zion-slate-darker border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent";
                />;
                <button className="bg-zion-cyan text-white px-6 py-3 rounded-lg hover:bg-zion-cyan-light transition-colors">;
                  Subscribe;
                </button>;
              </div>;
              <p className="text-xs text-zion-slate-light mt-2">;
                We respect your privacy. Unsubscribe at any time.;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-blue">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
            Want to Host an Event?;
          </h2>;
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">;
            Have a technology topic you'd like to present? We're always looking for expert speakers ;
            and interesting topics for our events.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <Link;
              to="/contact";
              className="bg-white text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors">;
              Propose an Event;
            </Link>;
            <Link;
              to="/speakers";
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-cyan transition-colors">;
              Meet Our Speakers;
            </Link>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
}

export default EventsPage;